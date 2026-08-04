import re, sys, json
sys.path.insert(0,'.')
import deep_data as dd
DEEP = dd.DEEP

text = open('content.js', encoding='utf-8').read()

def esc(s):
    return s.replace('&','&amp;').replace('<','&lt;').replace('>','&gt;')

def make_html(d):
    parts = ['<div class="co-deep">',
             '<div class="co-deep-h">📌 深度看点</div>',
             f'<div class="co-facet"><b>🧭 定位：</b>{esc(d["gene"])}</div>',
             f'<div class="co-facet"><b>🏆 招牌：</b>{esc(d["sig"])}</div>']
    if d.get('num'):
        parts.append(f'<div class="co-facet"><b>📊 数据：</b>{esc(d["num"])}</div>')
    parts.append(f'<div class="co-facet"><b>💡 看点：</b>{esc(d["hook"])}</div>')
    parts.append('</div>')
    return ''.join(parts)

opener = '<div class="co">'
name_pat = re.compile(r'<div class="co-h"><b>([^<]+)</b>')
inserts = []  # (close_start_index, html)

i = 0
n = len(text)
while True:
    idx = text.find(opener, i)
    if idx < 0:
        break
    start = idx + len(opener)
    depth = 1
    j = start
    close_start = -1
    while j < n:
        no = text.find('<div', j)
        nc = text.find('</div>', j)
        if nc < 0:
            break
        if no >= 0 and no < nc:
            depth += 1
            j = no + 4
        else:
            depth -= 1
            j = nc + 6
            if depth == 0:
                close_start = nc
                break
    if close_start < 0:
        i = idx + len(opener)
        continue
    seg = text[idx:close_start]
    m = name_pat.search(seg)
    if not m:
        i = idx + len(opener)
        continue
    name = m.group(1)
    if name not in DEEP:
        i = idx + len(opener)
        continue
    html = make_html(DEEP[name])
    inserts.append((close_start, html))
    i = idx + len(opener)

# 从后往前插，避免索引位移
new = text
for close_start, html in sorted(inserts, reverse=True):
    new = new[:close_start] + html + new[close_start:]

open('content.js','w',encoding='utf-8').write(new)
print('已注入卡片数:', len(inserts))
print('content.js 字节数:', len(new.encode('utf-8')))
