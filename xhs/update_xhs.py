#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
按 day 替换 content.js 里已存在的 social 条目（不追加）。
用于已发笔记的故事化重写版「编辑替换」：保留原 position，只换 tag/blocks/date。

用法：
    python3 xhs/update_xhs.py xhs/day10.json
    python3 xhs/update_xhs.py xhs/day10.json xhs/day12.json
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


def find_entry_span(src: str, day: int):
    """定位 "day": N, 所在的顶层对象 { ... } 的起止下标（括号配平，跳过字符串）。"""
    m = re.search(r'"day":\s*%d\s*,' % day, src)
    if not m:
        return None
    # 从 m 结束位置（逗号之后）往前找条目开头的 '{'，跳过字符串里的括号
    i = m.end()
    depth = 0
    open_idx = None
    while i >= 0:
        c = src[i]
        if c in '"\'':
            # 跳过字符串
            q = c
            i -= 1
            while i >= 0 and src[i] != q:
                if src[i] == "\\":
                    i -= 1
                i -= 1
            if i < 0:
                break
            i -= 1
            continue
        if c == "}":
            depth += 1
        elif c == "{":
            if depth == 0:
                open_idx = i
                break
            depth -= 1
        i -= 1
    if open_idx is None:
        return None
    # 从 open_idx 向后配平找结束 '}'
    j = open_idx
    depth = 0
    in_str = False
    quote = ""
    esc = False
    while j < len(src):
        c = src[j]
        if in_str:
            if esc:
                esc = False
            elif c == "\\":
                esc = True
            elif c == quote:
                in_str = False
        else:
            if c in "\"'":
                in_str = True
                quote = c
            elif c == "{":
                depth += 1
            elif c == "}":
                depth -= 1
                if depth == 0:
                    return open_idx, j
        j += 1
    return None


def main():
    paths = sys.argv[1:]
    if not paths:
        print(__doc__)
        sys.exit(1)
    src = CONTENT.read_text(encoding="utf-8")
    # 备份
    shutil.copy(CONTENT, ROOT / "content.js.bak_xhs")
    for p in paths:
        entry = json.loads(Path(p).read_text(encoding="utf-8"))
        day = entry["day"]
        span = find_entry_span(src, day)
        if not span:
            print(f"!! 未在 content.js 找到 day={day} 的条目，跳过 {p}")
            continue
        s, e = span
        # 重组条目（保留原 title 格式 Day N · 社媒内容）
        new_entry = {
            "title": f"Day {day} · 社媒内容",
            "date": entry.get("date"),
            "day": day,
            "tag": entry["tag"],
            "blocks": entry["blocks"],
        }
        frag = json.dumps(new_entry, ensure_ascii=False, indent=2)
        frag = "\n".join("  " + ln for ln in frag.split("\n"))
        src = src[:s] + frag + src[e + 1:]
        print(f"已替换 day={day}（tag：{entry['tag']}）")
    CONTENT.write_text(src, encoding="utf-8")
    # 语法校验
    r = subprocess.run([NODE, "--check", str(CONTENT)], capture_output=True, text=True)
    if r.returncode != 0:
        print("!! 语法错误，还原备份：")
        print(r.stderr)
        shutil.copy(ROOT / "content.js.bak_xhs", CONTENT)
        sys.exit(4)
    # 校验数组
    chk = subprocess.run(
        [NODE, "-e",
         "const fs=require('fs');"
         "eval(fs.readFileSync('content.js','utf8').replace('const CONTENT','var CONTENT'));"
         "const a=CONTENT.social;"
         "console.log('social 条数:',a.length);"
         "const e=a.find(x=>x.day===10||x.day===12);"
         "console.log('Day10 tag:',a.find(x=>x.day===10).tag);"
         "console.log('Day12 tag:',a.find(x=>x.day===12).tag);"],
        cwd=ROOT, capture_output=True, text=True)
    print(chk.stdout.strip() or chk.stderr.strip())
    print("✅ 语法通过，已替换（未提交，待 deploy）")


if __name__ == "__main__":
    main()
