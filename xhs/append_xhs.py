#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
把一篇「小红书 GEO 日更」追加到 content.js 的 CONTENT.social 末尾。

用法：
    python3 xhs/append_xhs.py xhs/day01.json            # 只注入（不提交）
    python3 xhs/append_xhs.py xhs/day01.json --all      # 注入 + 升 sw 缓存 + 同步 dist + git 提交推送

JSON 结构（一条）：
{
  "tag": "小红书 · GEO 日更 Day 1｜开篇立人设",
  "blocks": [
    {"h": "📅 30天涨粉进度 · Day 1", "body": "<html>"},
    {"h": "📕 今日选题",              "body": "<html>"},
    {"h": "✍️ 正文文案（可直接复制）", "body": "<html>"},
    {"h": "🏷️ 标签 & 💬 互动钩子",     "body": "<html>"},
    {"h": "📈 今日涨粉动作",           "body": "<html>"}
  ]
}
title 会自动生成为 "Day N · 社媒内容"（N = 追加后的序号）。
"""
import json
import re
import subprocess
import sys
import shutil
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
CONTENT = ROOT / "content.js"
SW = ROOT / "sw.js"
DIST = ROOT / "dist"


def find_key_span(src: str, key: str):
    """用括号配平扫描定位  "key": [ ... ]  的 [ 与 ] 下标（跳过字符串内的括号）。"""
    m = re.search(r'"%s"\s*:\s*\[' % re.escape(key), src)
    if not m:
        return None
    start = m.end() - 1  # 指向 '['
    i = start
    depth = 0
    in_str = False
    quote = ""
    esc = False
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
                in_str = True
                quote = c
            elif c == "[":
                depth += 1
            elif c == "]":
                depth -= 1
                if depth == 0:
                    return start, i
        i += 1
    return None


def count_entries(src: str, start: int, end: int) -> int:
    """粗略统计数组内顶层对象的个数：数顶层 { } 配对。"""
    depth = 0
    n = 0
    in_str = False
    quote = ""
    esc = False
    for i in range(start, end + 1):
        c = src[i]
        if in_str:
            if esc:
                esc = False
            elif c == "\\":
                esc = True
            elif c == quote:
                in_str = False
            continue
        if c in "\"'":
            in_str = True
            quote = c
        elif c == "{":
            if depth == 0:
                n += 1
            depth += 1
        elif c == "}":
            depth -= 1
    return n


def bump_sw():
    src = SW.read_text(encoding="utf-8")
    m = re.search(r"const CACHE\s*=\s*'wz-desk-v(\d+)'", src)
    if not m:
        print("!! sw.js 未找到 CACHE 版本号，跳过")
        return None
    old = int(m.group(1))
    new = old + 1
    src = src[:m.start(1)] + str(new) + src[m.end(1):]
    SW.write_text(src, encoding="utf-8")
    print(f"sw.js 缓存版本 v{old} -> v{new}")
    return new


def run(cmd, cwd=ROOT):
    r = subprocess.run(cmd, cwd=cwd, shell=True, capture_output=True, text=True)
    print(f"$ {cmd}\n{r.stdout.strip()}{r.stderr.strip()}")
    return r.returncode


def main():
    if len(sys.argv) < 2:
        print(__doc__)
        sys.exit(1)
    entry_path = Path(sys.argv[1])
    do_all = "--all" in sys.argv

    entry = json.loads(entry_path.read_text(encoding="utf-8"))
    src = CONTENT.read_text(encoding="utf-8")

    span = find_key_span(src, "social")
    if not span:
        print("!! 未能在 content.js 中定位到 \"social\": [")
        sys.exit(2)
    start, end = span

    if "--reset" in sys.argv:
        # 清空旧数组（换赛道时用），再追加新内容
        shutil.copy(CONTENT, ROOT / "content.js.bak_xhs")
        src = src[:start] + "[]" + src[end + 1:]
        CONTENT.write_text(src, encoding="utf-8")
        print("已清空原有 social 数组（备份 content.js.bak_xhs）")
        src = CONTENT.read_text(encoding="utf-8")
        start, end = find_key_span(src, "social")
    n = count_entries(src, start, end)
    day = n + 1
    entry_out = {
        "title": f"Day {day} · 社媒内容",
        "tag": entry["tag"],
        "blocks": entry["blocks"],
    }

    # 备份
    shutil.copy(CONTENT, ROOT / "content.js.bak_xhs")
    print(f"已备份 content.js -> content.js.bak_xhs（原有 {n} 条，追加为 Day {day}）")

    # 原文数组结尾形如 "  ]," —— 逗号已存在，新片段只写到 "]" 即可；空数组则不能加逗号
    inner_empty = not src[start + 1:end].strip()
    comma = "" if inner_empty else ","
    frag = json.dumps(entry_out, ensure_ascii=False, indent=2)
    frag = "\n".join("  " + ln for ln in frag.split("\n"))
    new_src = src[:end] + comma + "\n" + frag + src[end:]
    CONTENT.write_text(new_src, encoding="utf-8")

    # 校验
    rc = run("/Users/lailifang/.workbuddy/binaries/node/versions/22.22.2/bin/node --check content.js")
    if rc != 0:
        print("!! 语法错误，已还原备份")
        shutil.copy(ROOT / "content.js.bak_xhs", CONTENT)
        sys.exit(4)
    chk = subprocess.run(
        '/Users/lailifang/.workbuddy/binaries/node/versions/22.22.2/bin/node -e '
        '"const fs=require(\'fs\');eval(fs.readFileSync(\'content.js\',\'utf8\').replace(\'const CONTENT\',\'var CONTENT\'));'
        'const a=CONTENT.social;console.log(\'social 条数:\',a.length);'
        'const e=a[a.length-1];console.log(\'最新:\',e.title,\'|\',e.tag,\'| blocks:\',e.blocks.length);"',
        cwd=ROOT, shell=True, capture_output=True, text=True)
    print(chk.stdout.strip() or chk.stderr.strip())

    if do_all:
        bump_sw()
        for f in ["index.html", "content.js", "sw.js", "manifest.webmanifest"]:
            shutil.copy(ROOT / f, DIST / f)
        print("已同步 dist/")
        run("git add -A")
        run(f'git commit -m "社媒内容模块：小红书 GEO 日更 Day {day}"')
        ssh = ("GIT_SSH_COMMAND=\"ssh -i /Users/lailifang/WorkBuddy/2026-08-31-10-54-05/.ssh_deploy/id_ed25519 "
               "-o IdentitiesOnly=yes "
               "-o UserKnownHostsFile=/Users/lailifang/WorkBuddy/2026-08-31-10-54-05/.ssh_deploy/known_hosts\"")
        rc = run(f'{ssh} git pull --rebase origin main')
        if rc == 0:
            # rebase 可能重写 root 文件，重新同步 dist 后再推
            for f in ["index.html", "content.js", "sw.js", "manifest.webmanifest"]:
                shutil.copy(ROOT / f, DIST / f)
            run("git add -A")
            run("git commit -m '同步 dist' || true")
            run(f'{ssh} git push origin main')
        else:
            print("!! rebase 失败，未推送")


if __name__ == "__main__":
    main()
