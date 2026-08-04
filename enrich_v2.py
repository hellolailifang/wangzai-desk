# -*- coding: utf-8 -*-
# v2：先剥离旧版「发家史/转折点」块，再注入详细闭环版（154 家全部详写）
import re, sys

sys.path.insert(0, '.')
from narr_p1 import P1
from narr_p2 import P2
from narr_p3 import P3
from narr_p4 import P4
from narr_p5 import P5
from narr_sme_cn import SME_CN
from narr_sme_os import SME_OS
from narr_sme_v3 import V3

NARR2 = {}
for d in (P1, P2, P3, P4, P5, SME_CN, SME_OS, V3):
    NARR2.update(d)

print('total narratives =', len(NARR2))

SRC = 'content.js'
text = open(SRC, encoding='utf-8').read()

# ---- 1) 剥离旧版 found / turn 块（可能跨多行）----
old_found = re.compile(r'\n?<div class="co-r found">.*?</div>', re.S)
old_turn  = re.compile(r'\n?<div class="co-r turn">.*?</div>', re.S)
n_found_removed = len(old_found.findall(text))
n_turn_removed  = len(old_turn.findall(text))
text = old_found.sub('', text)
text = old_turn.sub('', text)
print('removed old found =', n_found_removed, '| old turn =', n_turn_removed)

# ---- 2) 注入详细版 ----
def find_card_end(t, start):
    depth = 1
    i = start
    n = len(t)
    while i < n:
        io_ = t.find('<div', i)
        ic_ = t.find('</div>', i)
        if ic_ == -1:
            return n
        if io_ != -1 and io_ < ic_:
            depth += 1
            i = io_ + 4
        else:
            depth -= 1
            if depth == 0:
                return ic_
            i = ic_ + 6
    return n

card_pat = re.compile(r'<div class="co">')
name_pat = re.compile(r'<div class="co-h"><b>([^<]+)</b>')

out = []
last = 0
injected = 0
missing = []
seen = set()
for m in card_pat.finditer(text):
    start = m.end()
    end = find_card_end(text, start)
    card = text[start:end]
    nm = name_pat.search(card)
    if not nm:
        out.append(text[last:end])
        last = end
        continue
    name = nm.group(1).strip()
    if name in NARR2 and name not in seen:
        seen.add(name)
        f, t = NARR2[name]
        block = (f'\n<div class="co-r found"><b>📜 发家史：</b>{f}</div>'
                 f'\n<div class="co-r turn"><b>🔑 转折点：</b>{t}</div>')
        out.append(text[last:start] + card + block)
        injected += 1
    else:
        if name not in NARR2:
            missing.append(name)
        out.append(text[last:end])
    last = end
out.append(text[last:])

new_text = ''.join(out)
open(SRC, 'w', encoding='utf-8').write(new_text)

print('injected =', injected, '| missing =', len(missing))
if missing:
    print('MISSING:', missing)
