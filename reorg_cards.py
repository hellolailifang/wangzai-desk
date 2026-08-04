# -*- coding: utf-8 -*-
"""重组企业卡片：删除独立 co-deep 块，把深度看点融入介绍流。
兼容中外两类字段结构，按标签名提取（与顺序无关）。"""
import re, sys
sys.path.insert(0, '.')
import deep_data as dd
DEEP = dd.DEEP

text = open('content.js', encoding='utf-8').read()
opener = '<div class="co">'

def split_cards(t):
    out = []
    i, n = 0, len(t)
    while True:
        idx = t.find(opener, i)
        if idx < 0:
            break
        start = idx + len(opener)
        depth, j, close = 1, start, -1
        while j < n:
            no = t.find('<div', j)
            nc = t.find('</div>', j)
            if nc < 0:
                break
            if no >= 0 and no < nc:
                depth += 1; j = no + 4
            else:
                depth -= 1; j = nc + 6
                if depth == 0:
                    close = nc; break
        if close < 0:
            i = idx + len(opener); continue
        out.append((idx, close + 6, t[idx:close + 6]))
        i = close + 6
    return out

def field(block, label):
    m = re.search(r'<div class="co-r[^"]*">' + re.escape(label) + r'(.*?)</div>', block, re.S)
    return m.group(1).strip() if m else None

def field_raw(block, label):
    m = re.search(r'<div class="co-r[^"]*">' + re.escape(label) + r'.*?</div>', block, re.S)
    return m.group(0) if m else None

def seg(block, label):
    # 取标签后到 </div> 前的内容
    m = re.search(re.escape(label) + r'(.*?)</div>', block, re.S)
    return m.group(1).strip() if m else None

cards = split_cards(text)
new_parts = []
last = 0
replaced = 0
missing_gene = 0
cn_count = 0
os_count = 0

for (s, e, block) in cards:
    new_parts.append(text[last:s])
    hm = re.search(r'(<div class="co-h">.*?</div>)', block, re.S)
    header = hm.group(1)
    body = block[len(header):]
    nm = re.search(r'<b>([^<]+)</b>', header).group(1)
    d = DEEP.get(nm, {})
    gene = d.get('gene', '') or ''
    sig = d.get('sig', '') or ''
    num = d.get('num', '') or ''
    hook = d.get('hook', '') or ''

    chuang = seg(body, '创立：') or ''
    zhuyin = field(body, '主营：')
    chukou = field(body, '出口市场：')
    dafa = field(body, '出海打法：')
    jieshao = field(body, '企业介绍：')
    caigou_p = field(body, '采购的产品：')
    caigou_c = field(body, '采购渠道：')
    guanwang = field_raw(body, '官网：') or ''
    tuijian = seg(body, '推荐理由：') or ''
    fm = re.search(r'<div class="co-r found"><b>📜 发家史：</b>(.*?)</div>', body, re.S)
    tm = re.search(r'<div class="co-r turn"><b>🔑 转折点：</b>(.*?)</div>', body, re.S)
    found = fm.group(1).strip() if fm else ''
    turn = tm.group(1).strip() if tm else ''

    if not gene:
        missing_gene += 1

    is_cn = (zhuyin is not None) or (chukou is not None) or (dafa is not None)
    if is_cn:
        cn_count += 1
    else:
        os_count += 1

    out = ['<div class="co">', header]

    # 速写：定位 + 创立
    sketch = '；'.join(x for x in [gene, chuang] if x)
    if sketch:
        out.append(f'<div class="co-r"><b>速写：</b>{sketch}</div>')

    if is_cn:
        if zhuyin is not None:
            biz = f'<div class="co-r"><b>主营业务：</b>{zhuyin}'
            if sig:
                biz += f'　招牌：{sig}'
            biz += '</div>'
            out.append(biz)
        if chukou is not None or dafa is not None:
            mk = '<div class="co-r"><b>市场与打法：</b>'
            if chukou:
                mk += f'出口 {chukou}'
            if dafa:
                if chukou:
                    mk += '；'
                mk += dafa
            mk += '</div>'
            out.append(mk)
    else:
        if jieshao is not None:
            out.append(f'<div class="co-r"><b>企业简介：</b>{jieshao}</div>')
        if caigou_p is not None or caigou_c is not None:
            mk = '<div class="co-r"><b>采购画像：</b>'
            if caigou_p:
                mk += f'采购 {caigou_p}'
            if caigou_c:
                if caigou_p:
                    mk += '；'
                mk += f'渠道 {caigou_c}'
            if sig:
                mk += f'　招牌：{sig}'
            mk += '</div>'
            out.append(mk)

    if num:
        out.append(f'<div class="co-r"><b>规模：</b>{num}</div>')

    if found:
        out.append(f'<div class="co-r found"><b>📜 发家史：</b>{found}</div>')
    if turn:
        out.append(f'<div class="co-r turn"><b>🔑 转折点：</b>{turn}</div>')

    look = hook
    if tuijian:
        look = (look + f'；推荐：{tuijian}') if look else f'推荐：{tuijian}'
    if look:
        out.append(f'<div class="co-r look"><b>💡 看点：</b>{look}</div>')

    if guanwang:
        out.append(guanwang)

    out.append('</div>')
    new_parts.append(''.join(out))
    last = e
    replaced += 1

new_parts.append(text[last:])  # 保留最后一张卡片之后的剩余内容（闭合反引号、数组收尾等）
new_text = ''.join(new_parts)
open('content.js', 'w', encoding='utf-8').write(new_text)
print('重组卡片数:', replaced, '| 中国:', cn_count, '| 海外:', os_count)
print('缺失 gene 的卡片:', missing_gene)
print('co-deep 残留:', new_text.count('co-deep'))
print('新字节数:', len(new_text.encode('utf-8')))
