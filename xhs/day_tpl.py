#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""社媒内容（小红书 GEO 日更）公共模板 —— 2026-09-20 起各篇脚本共用。

抽取原因：Day 15 起每篇都要加「🔍 搜索关键词」板块（搜索流量规范），
四个脚本各写一遍容易漏，统一在这里生成。

用法：
    from day_tpl import ta_box, box, seo_block, entry, dump
"""
import json
from pathlib import Path

HERE = Path(__file__).resolve().parent


def esc(s: str) -> str:
    return (s.replace("&", "&amp;").replace("<", "&lt;")
             .replace(">", "&gt;").replace('"', "&quot;"))


def ta_box(post: str, tip: str = "") -> str:
    """正文 textarea（点一下全选复制）。"""
    tip_html = ""
    if tip:
        tip_html = ('<div style="font-size:11.5px;color:#8a8a85;margin-top:6px;">'
                    + tip + '</div>')
    return (
        '<textarea readonly onclick="this.select()" spellcheck="false" '
        'style="width:100%;box-sizing:border-box;height:660px;padding:12px 14px;'
        "font-family:-apple-system,BlinkMacSystemFont,'PingFang SC',sans-serif;font-size:13.5px;"
        'line-height:1.85;color:#2c2c2a;background:#fffdf8;border:1px solid #ffd9c9;'
        'border-radius:12px;resize:vertical;white-space:pre-wrap;">__POST__</textarea>'
        + tip_html
    ).replace("__POST__", esc(post))


def box(bg: str, bd: str, title: str, color: str, html: str) -> str:
    return (
        f'<div style="background:{bg};border:1px solid {bd};border-radius:12px;padding:12px 14px;">'
        f'<b style="font-size:13.5px;color:{color};">{title}</b>'
        f'<div style="font-size:12.5px;line-height:1.8;color:#2c2c2c;margin-top:8px;">{html}</div></div>'
    )


def seo_block(day: int, main_kw: str, long_kws, headline: str,
              title_use: str, first100: str, comment_kw: str, tags_kw: str) -> str:
    """🔍 搜索关键词板块（blocks[3]）。

    main_kw   核心搜索词（一篇只有 1 个）
    long_kws  3 个长尾词（人群 + 场景 + 痛点）
    headline  这篇的一句话重点（让人一眼知道讲什么）
    title_use 标题里怎么埋的
    first100  正文前 100 字怎么埋的
    comment_kw 置顶评论怎么补
    tags_kw   话题标签里的搜索词
    """
    lis = "".join(f'<br/>　· {w}' for w in long_kws)
    return (
        '<p><b>这篇在讲什么（一句话）：</b>' + headline + '</p>'
        + '<p class="ct-h">🔍 搜索关键词（小红书搜索流量 · 发之前先照这张表对一遍）</p>'
        + '<div class="ct-body ph">'
        '<b>核心搜索词：</b>' + main_kw + '<br/>'
        '<b>长尾词（3 个）：</b>' + lis + '<br/>'
        '<span style="color:#8a8a85;">一篇只打 1 个核心词，词多了权重会分散。</span></div>'
        + '<p style="margin:10px 0 6px;font-size:12.5px;color:#0a3d62;">'
        '<b>📍 词埋在这 4 个地方（四维一致，系统才好打标收录）</b></p>'
        + '<div class="ct-body ph">'
        '<b>① 标题前 20 字</b>：' + title_use + '<br/>'
        '<b>② 正文前 100 字</b>：' + first100 + '<br/>'
        '<b>③ 话题标签</b>：' + tags_kw + '<br/>'
        '<b>④ 置顶评论</b>：' + comment_kw + '<br/>'
        '<span style="color:#8a8a85;">⚠️ 核心词全文出现 2–4 次就够，'
        '堆砌会触发隐形限流——读出来顺嘴才算合格。</span></div>'
        + '<p style="margin:10px 0 6px;font-size:12.5px;color:#0a3d62;">'
        '<b>🧭 还能顺手做的两件小事</b></p>'
        + '<div class="ct-body ph">'
        '· 发布后自己在小红书搜索框<b>打一遍核心词</b>，看这篇能不能搜到（下拉词里有没有）；<br/>'
        '· 把这篇挂进<b>名字带核心词的合集</b>，合集本身也是搜索入口。</div>'
    )


def entry(date: str, day: int, tag: str, blocks) -> dict:
    return {"date": date, "day": day, "tag": tag, "blocks": blocks}


def dump(filename: str, e: dict, post: str) -> None:
    out = HERE / filename
    out.write_text(json.dumps(e, ensure_ascii=False, indent=2), encoding="utf-8")
    n = len(post.replace("\n", ""))
    print(f"已生成 {out}（正文 {n} 字，{len(e['blocks'])} 个板块）")
    if 420 <= n <= 560:
        print(f"✅ 正文字数 {n}，符合 v2 标准 420–560")
    else:
        print(f"⚠️ 正文字数 {n} 超出 420–560，请调整")
