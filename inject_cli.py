# -*- coding: utf-8 -*-
"""把 14 天 × 6 家中国企业注入 CONTENT.geo，保留原有 blocks[0] 操作建议。"""
import json, re, io, sys

sys.path.insert(0, '/Users/lailifang/WorkBuddy/2026-07-27-09-50-21')
from build_cli_batch1 import DAYS as DAYS1
from build_cli_batch2 import DAYS as DAYS2
from build_cli_batch3 import DAYS as DAYS3

DAYS = DAYS1 + DAYS2 + DAYS3
assert len(DAYS) == 14, len(DAYS)

TIER_LABEL = {"hd": "头部", "mid": "腰部", "sm": "中小"}

CARD = (
    '<div class="co"><div class="co-h"><b>{name}</b>'
    '<span class="co-t {tier}">{tlabel}</span></div>'
    '<div class="co-r"><b>速写：</b>{found}</div>'
    '<div class="co-r"><b>主营业务：</b>{biz}</div>'
    '<div class="co-r"><b>市场与打法：</b>{mkt}</div>'
    '<div class="co-r found"><b>📜 发家史：</b>{hist}</div>'
    '<div class="co-r turn"><b>🔑 转折点：</b>{turn}</div>'
    '<div class="co-r geo"><b>🎯 GEO 切入点：</b>{geo}</div>'
    '<div class="co-r look"><b>💡 看点：</b>{look}</div>'
    '<div class="co-r">官网：<a class="co-site" href="{site}" target="_blank" rel="noopener">🌐 {site}</a></div>'
    '</div>'
)

keep = json.load(io.open('_geo_keep.json', encoding='utf-8'))
assert len(keep) == 14

new_geo = []
for i, day in enumerate(DAYS):
    assert day['title'] == keep[i]['tag'], (i, day['title'], keep[i]['tag'])
    cos = day['cos']
    assert len(cos) == 6, (i, len(cos))
    hd = sum(1 for c in cos if c['tier'] == 'hd')
    mid = sum(1 for c in cos if c['tier'] == 'mid')
    assert hd == 1 and mid == 5, (i, hd, mid)
    cards = "\n        ".join(
        CARD.format(tlabel=TIER_LABEL[c['tier']], **c) for c in cos
    )
    new_geo.append({
        "title": "Day %d · 客户开发" % (i + 1),
        "tag": keep[i]['tag'],
        "blocks": [
            {"h": keep[i]['h0'], "body": keep[i]['body0']},
            {"h": "今日推荐 · 6 家（%s）" % day['group'], "body": cards},
        ],
    })

src = io.open('content.js', encoding='utf-8').read()
m = re.search(r'\n  "geo": \[', src)
assert m, 'geo key not found'
start = m.start() + 1
i = src.index('[', m.start())
# 括号配平扫描（跳过字符串内部）
depth, j, in_str, esc = 0, i, False, False
while j < len(src):
    ch = src[j]
    if in_str:
        if esc:
            esc = False
        elif ch == '\\':
            esc = True
        elif ch == '"':
            in_str = False
    else:
        if ch == '"':
            in_str = True
        elif ch == '[':
            depth += 1
        elif ch == ']':
            depth -= 1
            if depth == 0:
                break
    j += 1
end = j + 1  # src[end:] 以原数组的结尾逗号开头
body = json.dumps(new_geo, ensure_ascii=False, indent=2)
body = '\n'.join('  ' + ln if ln.strip() else ln for ln in body.split('\n'))
assert src[end:end + 1] == ',', repr(src[end:end + 10])
new_src = src[:start] + '"geo": ' + body + src[end:]
io.open('content.js', 'w', encoding='utf-8').write(new_src)
print('注入完成：14 天 × 6 家 = %d 家企业' % sum(len(d['cos']) for d in DAYS))
