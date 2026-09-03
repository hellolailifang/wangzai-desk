#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
把社媒内容模块 Day 1 的「🖼 封面建议」补上尺寸规范（3:4 竖图 1080x1440 + 安全区）。
只替换封面建议这一个板块，其余板块原样不动。
"""
import io
import sys

PATH = "content.js"

OLD = (
    r'<p class=\"ct-h\">🖼 封面建议</p>'
    r'<div class=\"ct-body ph\">白底 / 米黄底，<b>纯黑大字</b>，字要大到缩略图里也看得清：<br/>'
    r'主文案「<b>AI 里搜不到你 = 你不存在</b>」，<br/>'
    r'右下角小字「第 1 天｜一个答不上老板问题的市场人」。<br/>'
    r'<b>别用花哨模板</b>，小红书现在信息流里「朴素大字报」反而更扎眼。</div>'
)

NEW = (
    r'<p class=\"ct-h\">🖼 封面建议 · 3:4 竖图 1080×1440</p>'
    r'<div class=\"ct-body ph\">'
    r'<b>尺寸固定：竖图 3:4，1080×1440px。</b>这是小红书信息流里展示面积最大的比例'
    r'（比 1:1 方图多约 25%，比 4:3 横图多约 40%），横图会被压得很小，别用。<br/>'
    r'白底 / 米黄底 + <b>纯黑大字</b>，字要大到缩略图里也看得清：<br/>'
    r'主文案「<b>AI 里搜不到你 = 你不存在</b>」，放画面<b>中上部</b>（纵向 1/4 到 1/2 处）；<br/>'
    r'副文案「第 1 天｜一个答不上老板问题的市场人」跟在主文案下面，<b>不要放底部</b>。<br/>'
    r'⚠️ <b>底部 15%（约 216px）必须留空</b>：信息流里这块会被笔记标题和点赞栏压住，字放那儿等于白做。<br/>'
    r'<b>别用花哨模板</b>，小红书现在信息流里「朴素大字报」反而更扎眼。</div>'
)


def main() -> int:
    with io.open(PATH, encoding="utf-8") as f:
        src = f.read()

    if OLD not in src:
        sys.stderr.write("未找到目标片段，可能已改过。未做任何改动。\n")
        return 1
    if src.count(OLD) != 1:
        sys.stderr.write("目标片段出现 %d 次，不敢改。\n" % src.count(OLD))
        return 1

    src = src.replace(OLD, NEW)

    with io.open(PATH, "w", encoding="utf-8") as f:
        f.write(src)

    print("已替换 Day 1 封面建议板块（新增 3:4 尺寸规范 + 安全区）。")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
