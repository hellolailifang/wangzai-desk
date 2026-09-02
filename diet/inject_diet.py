#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""把 diet56.json 整体写入 content.js 的 CONTENT.diet（替换原内容）。

用法：python3 diet/inject_diet.py
自带备份（content.js.bak_diet）与 node --check 语法校验，失败自动还原。
"""
import json
import re
import shutil
import subprocess
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
CONTENT = ROOT / "content.js"
NODE = "/Users/lailifang/.workbuddy/binaries/node/versions/22.22.2/bin/node"


def find_key_span(src, key):
    """括号配平扫描定位 "key": [ ... ] 的 [ 与 ] 下标（跳过字符串内的括号）。"""
    m = re.search(r'"%s"\s*:\s*\[' % re.escape(key), src)
    if not m:
        return None
    start = m.end() - 1
    depth, i = 0, start
    in_str, quote, esc = False, "", False
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


def main():
    entries = json.loads((ROOT / "diet" / "diet56.json").read_text(encoding="utf-8"))
    for e in entries:
        e.pop("_protein", None)
        e.pop("_kcal", None)

    src = CONTENT.read_text(encoding="utf-8")
    span = find_key_span(src, "diet")
    if not span:
        print('!! 未能在 content.js 中定位到 "diet": [')
        raise SystemExit(2)
    start, end = span

    shutil.copy(CONTENT, ROOT / "content.js.bak_diet")
    print(f"已备份 content.js -> content.js.bak_diet；准备写入 {len(entries)} 天")

    frag = json.dumps(entries, ensure_ascii=False, indent=2)
    frag = "\n".join("  " + ln for ln in frag.split("\n"))
    # 整体替换 [start..end] 区间（含两端括号）：frag 自带 [ ]，所以后半段要从 end+1 开始，否则会多一个 ]
    new_src = src[:start] + "\n" + frag + src[end + 1:]
    CONTENT.write_text(new_src, encoding="utf-8")

    r = subprocess.run([NODE, "--check", "content.js"], cwd=ROOT, capture_output=True, text=True)
    if r.returncode != 0:
        print("!! 语法错误，已还原备份\n", r.stderr)
        shutil.copy(ROOT / "content.js.bak_diet", CONTENT)
        raise SystemExit(3)
    print("node --check 通过")

    chk = subprocess.run(
        [NODE, "-e",
         "const fs=require('fs');eval(fs.readFileSync('content.js','utf8').replace('const CONTENT','var CONTENT'));"
         "const a=CONTENT.diet;console.log('diet 条数:',a.length);"
         "console.log('Day1:',a[0].title,'|',a[0].tag,'| blocks:',a[0].blocks.length);"
         "console.log('Day56:',a[55].title,'|',a[55].tag,'| blocks:',a[55].blocks.length);"
         "console.log('称重日条数:',a.filter(e=>e.blocks.some(b=>b.h.includes('称重日'))).length);"],
        cwd=ROOT, capture_output=True, text=True)
    print(chk.stdout.strip() or chk.stderr.strip())


if __name__ == "__main__":
    main()
