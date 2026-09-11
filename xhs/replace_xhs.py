#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
按 day 字段「就地替换」content.js 里已存在的某一篇 social 内容（保持它在数组中的位置不变）。

为什么需要它：append_xhs.py 只能追加。已经发布、后来要改文案的篇目（比如 Day 9 已发出但
重写了），必须用替换，否则会变成重复的第二条 Day 9。

用法：
    python3 xhs/replace_xhs.py xhs/day09.json          # 只替换（不提交）
    python3 xhs/replace_xhs.py xhs/day09.json --check   # 替换后额外跑违禁词检查

JSON 里必须带 "day" 字段（决定替换哪一条）；"date" / "tag" / "blocks" 一并覆盖。
自带 content.js.bak_replace 备份 + node --check 语法校验，失败自动还原。
"""
import json
import re
import shutil
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
CONTENT = ROOT / "content.js"
NODE = "/Users/lailifang/.workbuddy/binaries/node/versions/22.22.2/bin/node"


def find_key_span(src, key):
    """括号配平定位 "key": [ ... ] 的 [ 与 ] 下标（跳过字符串内的括号）。"""
    m = re.search(r'"%s"\s*:\s*\[' % re.escape(key), src)
    if not m:
        return None
    start = m.end() - 1
    i, depth, in_str, quote, esc = start, 0, False, "", False
    while i < len(src):
        c = src[i]
        if in_str:
            if esc:
                esc = False
            elif c == "\\":
                esc = True
            elif c == quote:
                in_str = False
        else:
            if c in "\"'":
                in_str, quote = True, c
            elif c == "[":
                depth += 1
            elif c == "]":
                depth -= 1
                if depth == 0:
                    return start, i
        i += 1
    return None


def top_level_objects(src, a, b):
    """返回 social 数组内每个顶层对象 { ... } 的 (start, end) 区间，顺序同数组顺序。"""
    out, i, depth, in_str, quote, esc, beg = [], a, 0, False, "", False, None
    while i <= b:
        c = src[i]
        if in_str:
            if esc:
                esc = False
            elif c == "\\":
                esc = True
            elif c == quote:
                in_str = False
        else:
            if c in "\"'":
                in_str, quote = True, c
            elif c == "{":
                if depth == 0:
                    beg = i
                depth += 1
            elif c == "}":
                depth -= 1
                if depth == 0:
                    out.append((beg, i))
        i += 1
    return out


def main():
    if len(sys.argv) < 2:
        print(__doc__)
        sys.exit(1)
    entry = json.loads(Path(sys.argv[1]).read_text(encoding="utf-8"))
    do_check = "--check" in sys.argv
    day = entry.get("day")
    if day is None:
        print("!! JSON 缺少 day 字段，无法定位要替换的篇目")
        sys.exit(2)

    src = CONTENT.read_text(encoding="utf-8")
    span = find_key_span(src, "social")
    if not span:
        print('!! 未能定位 "social": [')
        sys.exit(2)
    start, end = span

    hit = None
    for (a, b) in top_level_objects(src, start, end):
        seg = src[a:b + 1]
        m = re.search(r'"day"\s*:\s*(\d+)', seg)
        if m and int(m.group(1)) == int(day):
            hit = (a, b)
            break
    if not hit:
        print(f"!! social 数组里没有 day={day} 的条目（现有："
              f"{[int(x) for x in re.findall(r'\"day\": (\\d+)', src[start:end])]}）")
        sys.exit(3)
    a, b = hit

    shutil.copy(CONTENT, ROOT / "content.js.bak_replace")
    print(f"已备份 content.js -> content.js.bak_replace")

    new_obj = {"title": f"Day {day} · 社媒内容"}
    if entry.get("date"):
        new_obj["date"] = entry["date"]
    new_obj["day"] = int(day)
    new_obj["tag"] = entry["tag"]
    new_obj["blocks"] = entry["blocks"]

    frag = json.dumps(new_obj, ensure_ascii=False, indent=2)
    frag = "\n".join("  " + ln for ln in frag.split("\n"))
    new_src = src[:a] + frag.lstrip() + src[b + 1:]
    CONTENT.write_text(new_src, encoding="utf-8")

    rc = subprocess.run(f"{NODE} --check content.js", cwd=ROOT, shell=True,
                        capture_output=True, text=True).returncode
    if rc != 0:
        print("!! 语法错误，已还原备份")
        shutil.copy(ROOT / "content.js.bak_replace", CONTENT)
        sys.exit(4)

    chk = subprocess.run(
        f"{NODE} -e \"const fs=require('fs');"
        f"eval(fs.readFileSync('content.js','utf8').replace('const CONTENT','var CONTENT'));"
        f"const a=CONTENT.social;console.log('social 条数:',a.length);"
        f"console.log('顺序:',a.map(x=>'D'+x.day).join(' '));"
        f"const e=a.find(x=>x.day==={int(day)});"
        f"console.log('已替换:',e.title,'|',e.date,'|',e.tag,'| blocks:',e.blocks.length);\"",
        cwd=ROOT, shell=True, capture_output=True, text=True)
    print(chk.stdout.strip() or chk.stderr.strip())
    print(f"✅ Day {day} 已就地替换（位置未变）")

    if do_check:
        subprocess.run(["/Users/lailifang/.workbuddy/binaries/python/versions/3.13.12/bin/python3",
                        "xhs/check_words.py", sys.argv[1]], cwd=ROOT)


if __name__ == "__main__":
    main()
