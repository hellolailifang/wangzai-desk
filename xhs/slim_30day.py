#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
淡化「30 天」框架：账号是长期做的，30 天只是冷启动期的第一个台阶。

改动原则：
- Day N 连载编号保留（长期一直往下数）
- 去掉 "Day N / 30" 这种分母（跑到 Day 31 会穿帮）
- 目标 1000 粉改为「阶段目标」，不绑死天数
- 对外发布的正文文案（b2）里不再承诺「花 30 天」
"""
import io
import sys

PATH = "content.js"

# (旧串, 新串, 说明)
REPLACEMENTS = [
    # ---------- Day 1：进度板块标题（h + body 内大标题）----------
    (
        r"🎯 30 天涨粉进度 · Day 1",
        r"🎯 Day 1 · 阶段目标 1000 粉",
        "Day1 板块标题",
    ),
    (
        r"🎯 Day 1 / 30 · 目标 1000 粉",
        r"🎯 Day 1 · 阶段目标 1000 粉",
        "Day1 卡内大标题（去 /30 分母）",
    ),
    (
        r"· <b>1000 粉 ÷ 30 天 ≈ 每天 33 粉</b>。",
        r"· <b>1000 粉，按 1 个月估算 ≈ 每天 33 粉</b>。这只是给自己定的第一个台阶，不是 deadline——做满一个月没到就继续往下做，节奏比日期重要。",
        "Day1 目标拆解（去 deadline 感）",
    ),
    (
        r"把主页简介改成「GEO 从业者｜用 30 天拆明白 AI 搜索」",
        r"把主页简介改成「GEO 从业者｜每天拆明白一点 AI 搜索」",
        "Day1 主页简介文案",
    ),
    # ---------- Day 1：对外发布的正文文案 ----------
    (
        r"我准备花 30 天把这件事从零搞明白，",
        r"我准备把这件事从零搞明白，",
        "Day1 正文文案（已发布口径）",
    ),
    # ---------- Day 1：今日涨粉动作 ----------
    (
        r"备忘录新建「30 天选题池」",
        r"备忘录新建「选题池」",
        "Day1 选题池命名",
    ),
    (
        r"就是你后面 29 天要写的。",
        r"就是你后面要写的。",
        "Day1 选题池说明",
    ),
    # ---------- Day 2：进度板块标题 ----------
    (
        r"🎯 30 天涨粉进度 · Day 2",
        r"🎯 Day 2 · 阶段目标 1000 粉",
        "Day2 板块标题",
    ),
    (
        r"🎯 Day 2 / 30 · 目标 1000 粉",
        r"🎯 Day 2 · 阶段目标 1000 粉",
        "Day2 卡内大标题（去 /30 分母）",
    ),
]


def main() -> int:
    with io.open(PATH, encoding="utf-8") as f:
        src = f.read()
    orig = src

    for old, new, desc in REPLACEMENTS:
        n = src.count(old)
        if n == 0:
            sys.stderr.write("跳过（未找到）：%s\n" % desc)
            continue
        if n > 1:
            sys.stderr.write("!! 「%s」出现 %d 次，跳过以免误伤\n" % (desc, n))
            continue
        src = src.replace(old, new)
        print("已改：%s" % desc)

    if src == orig:
        sys.stderr.write("没有任何改动。\n")
        return 1

    with io.open(PATH, "w", encoding="utf-8") as f:
        f.write(src)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
