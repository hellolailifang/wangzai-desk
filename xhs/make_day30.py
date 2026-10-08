# -*- coding: utf-8 -*-
"""生成 Day 30 小红书 GEO 日更 json（冷启动收尾 · 趋势类）。
选题：第一个月收尾：接下来往哪走。核心词：GEO 避坑。
板块结构 6 个：阶段目标 / 今日选题 / 正文 / 搜索关键词 / 标签&钩子 / 涨粉动作。
"""
import json
from pathlib import Path

P = Path(__file__).resolve().parent

post = (
    "前天一个做轴承的老客户老周发消息，问我这一个月 GEO 避坑做得咋样，是不是该换打法了。我愣了一下，这问题还真把我问住了。\n\n"
    "我翻了翻这个月的数据，最大的坑不是不会做，是把自己当成了发稿机器——以为篇数铺够 AI 就会提我。结果头两周发出去十几篇，在豆包里搜我们公司名，提都没提。后来才搞懂，AI 要的是能直接抄走的那句大白话，不是我那些“致力于、一站式”的漂亮话。朋友老陈做仓储货架，官网满满当当全是荣誉墙，AI 抓半天抓不到一句能用的。\n\n"
    "刚入行那会儿我还差点用“晚做一步容易落后同行”去吓客户，话到嘴边又咽回去了，现在想想挺不好意思。这一个月 GEO 避坑踩下来，最扎心的是：被 AI 提到不等于有客户，提一句不带官网链接，人家照样找不到你。\n\n"
    "所以下个月我打算换个打法：少发点，但每篇都留一句能单独拎出来当答案的真话。与其天天焦虑铺了多少稿，不如攒几句 AI 真愿意引用的。GEO 避坑这事我自己也还在琢磨，才一个月的样本太小，我可不敢说换打法就靠谱，说不定哪天又被自己推翻。\n\n"
    "你们那行要是也在盘 GEO 接下来的路，评论区跟我聊聊你们打算怎么弄，我还挺想听。"
)

entry = {
    "date": "2026-10-08",
    "day": 30,
    "tag": "小红书 · GEO 日更 Day 30｜第一个月收尾：接下来往哪走",
    "blocks": [
        {
            "h": "🎯 Day 30 · 阶段目标 1000 粉",
            "body": (
                '<div style="background:#eef7ff;border:1px solid #9ec9ee;border-radius:12px;padding:12px 14px;">'
                '<b style="font-size:13.5px;color:#0a3d62;">🎯 Day 30 · 阶段目标 1000 粉</b>'
                '<div style="font-size:12.5px;line-height:1.8;color:#2c2c2c;margin-top:8px;">'
                '<p style="margin:0 0 6px;"><b>今天的核心任务：第一个月收尾，把这一月踩的坑串起来，讲清楚接下来往哪走——冷启动期到今天结束，但账号一直做下去。</b>趋势篇，少点干货多点真心话。</p>'
                '<p style="margin:0 0 4px;">· <b>为什么今天写这个</b>：Day 1–30 是冷启动第一个台阶，收尾不写「完结」，写「往哪走」，立长期人设。</p>'
                '<p style="margin:0 0 4px;">· <b>今天只做 3 件事</b>：① 发第 30 篇；② 评论区问「你接下来打算怎么干 GEO」；③ 挂进「GEO 避坑」合集。</p>'
                '<p style="margin:0 0 4px;">· <b>🔍 本轮重点</b>：核心词「GEO 避坑」进标题前 20 字、首段、标签前 3 个。</p>'
                '</div></div>'
            ),
        },
        {
            "h": "📕 今日选题",
            "body": (
                '<p><b>今天不聊新干货，做个收尾：一个月 GEO 踩下来，最大的坑不是不会做，是把自己当成了发稿机器。</b>冷启动最后一篇，讲讲接下来往哪走。</p>'
                '<p style="margin:10px 0 6px;font-size:12.5px;color:#0a3d62;"><b>🔑 这篇的判断（多数没想到）</b></p>'
                '<div class="ct-body ph">多数人想反的地方：以为 GEO 是发稿铺量，篇数够 AI 就会提你。<br/>'
                '<b>这篇反着来</b>：AI 要的是能直接抄走的那句大白话，不是“致力于、一站式”的漂亮话；发得多 ≠ 被引用。真正攒资产的是每篇留一句能单独拎出来当答案的真话。<br/>'
                '<span style="color:#8a8a85;">⚠️ 用「发稿机器」这个点把一个月的坑收口，自然过渡到下月打法。</span></div>'
                '<p style="margin:10px 0 6px;font-size:12.5px;color:#0a3d62;"><b>✏️ 口语化 / 去 AI 味 自检</b></p>'
                '<div class="ct-body ph">以「前天老客户老周发消息问」开头（带时间带对话）；具象「头两周发十几篇豆包没提」「朋友老陈官网全是荣誉墙」；污点「刚入行差点用“晚做一步容易落后同行”吓客户」；留口子「才一个月样本太小，不敢说换打法靠谱」。</div>'
                '<p class="ct-h">📌 标题 3 选 1（🔍 第一条带核心词，必用）</p>'
                '<div class="ct-body ph"><b>主推（🔍 搜索向）：</b>GEO 避坑｜做满一个月，我踩的坑和接下来怎么走<br/>'
                '<b>备选 A：</b>一个月 GEO 踩坑实录，下个月我打算这么干<br/>'
                '<b>备选 B：</b>做了 30 天 GEO，我决定接下来换个打法<br/>'
                '<span style="color:#8a8a85;">主推把「GEO 避坑」顶最前，收尾篇吃长尾。</span></div>'
                '<p class="ct-h">🖼 封面建议 · 3:4 竖图 1080×1440（模板 B · 手写笔记）</p>'
                '<div class="ct-body ph"><b>尺寸固定：竖图 3:4，1080×1440px。</b><br/>手写一张「一个月踩的 3 个坑 + 下月打法」清单，大字标题：<br/>'
                '「<b>GEO 避坑<br/>① 别当发稿机器<br/>② 被提到≠有客户<br/>③ 少发 但每篇能当答案</b>」<br/>'
                '⚠️ <b>底部 15%（约 216px）必须留空</b>；主文案压中上部。<br/>'
                '<span style="color:#8a8a85;">Day 29 用 A 真实照，本篇回 B 手写笔记（Day 31 起进常青池）。</span></div>'
                '<p class="ct-h">👥 这篇在跟谁说话</p>'
                '<div class="ct-body ph">① <b>做到第 4 周想换打法的同行</b>：共鸣“发稿机器”的坑；<br/>'
                '② <b>刚入行怕踩坑的新手</b>：提前避雷；<br/>③ <b>老板</b>：理解 GEO 不是铺量就完事。</div>'
            ),
        },
        {
            "h": "✍️ 正文文案（可直接复制）",
            "body": (
                '<textarea readonly onclick="this.select()" spellcheck="false" '
                'style="width:100%;box-sizing:border-box;height:700px;padding:12px 14px;'
                'font-family:-system-ui,-apple-system,BlinkMacSystemFont,\'PingFang SC\',sans-serif;'
                'font-size:13.5px;line-height:1.85;color:#2c2c2a;background:#fffdf8;'
                'border:1px solid #ffd9c9;border-radius:12px;resize:vertical;white-space:pre-wrap;">'
                + post +
                '</textarea>'
                '<div style="font-size:11.5px;color:#8a8a85;margin-top:6px;">👆 点一下全选，复制后直接粘到小红书发布页。<br/>'
                '⚠️ 标题用主推那条（开头就是「GEO 避坑」），搜索词全靠它。<br/>'
                '⚠️ 发完 30 分钟内回前几条，有人晒「我也踩过这坑」就接梗，气氛越真转发越高。</div>'
            ),
        },
        {
            "h": "🔍 搜索关键词（搜索流量）",
            "body": (
                '<p><b>这篇在讲什么（一句话）：</b>GEO 避坑——做满一个月，最大的坑是把自己当发稿机器，AI 要的是能直接抄走的大白话；接下来少发但每篇都留一句能当答案的真话。</p>'
                '<p class="ct-h">🔍 搜索关键词（小红书搜索流量 · 发之前先照这张表对一遍）</p>'
                '<div class="ct-body ph"><b>核心搜索词：</b>GEO 避坑<br/>'
                '<b>长尾词（3 个）：</b><br/>　· 中小企业 GEO 避坑<br/>　· 做 GEO 容易踩的坑<br/>　· GEO 新手要注意什么<br/>'
                '<span style="color:#8a8a85;">一篇只打 1 个核心词，词多了权重会分散。</span></div>'
                '<p style="margin:10px 0 6px;font-size:12.5px;color:#0a3d62;"><b>📍 词埋在这 4 个地方（四维一致，系统才好打标收录）</b></p>'
                '<div class="ct-body ph"><b>① 标题前 20 字</b>：主推第 1–4 字「GEO 避坑」整句顶最前<br/>'
                '<b>② 正文前 100 字</b>：首段带出「这一个月 GEO 避坑做得咋样」<br/>'
                '<b>③ 话题标签</b>：#GEO避坑 #中小企业GEO避坑 #做GEO容易踩的坑（前 3 即搜索词）<br/>'
                '<b>④ 置顶评论</b>：补一句「GEO 避坑最大的坑：别把自己当发稿机器」<br/>'
                '<span style="color:#8a8a85;">⚠️ 核心词全文出现 2–4 次就够，堆砌会触发隐形限流——读出来顺嘴才算合格。</span></div>'
            ),
        },
        {
            "h": "🏷️ 标签 & 💬 互动钩子",
            "body": (
                '<p class="ct-h">🏷️ 话题标签（10 个，直接复制）</p>'
                '<div class="ct-body ph" style="word-break:break-all;">'
                '#GEO避坑 #中小企业GEO避坑 #做GEO容易踩的坑 #Kimi #元宝 #百度AI搜索 #GEO #AI搜索 #职场 #创业避坑</div>'
                '<div style="font-size:11.5px;color:#8a8a85;margin-top:4px;">标签结构：<b>3 搜索词 + 3 平台词 + 2 赛道词 + 2 流量词</b>。'
                '平台词 Kimi/元宝/百度AI搜索，与 Day 29（豆包/DeepSeek/元宝）只重合 1 个。</div>'
                '<p class="ct-h">💬 互动钩子 · C 类「自曝（软化的邀请式）」</p>'
                '<div class="ct-body ph"><b>⓪ 结尾三段式</b>：① 收束——「GEO 避坑这事我自己也还在琢磨，不敢说换打法就靠谱」；'
                '② 软化——「你们那行要是也在盘 GEO 接下来的路」；③ 邀请——「评论区跟我聊聊，我还挺想听」。<br/>'
                '<b>① 为什么用 C 类</b>：Day 29 D、Day 28 B、Day 27 F，C 类最近没用，安全；收尾自曝拉信任。<br/>'
                '<b>② 预埋 3 条评论</b>（第 1 条置顶带核心词）：<br/>'
                '　·「补一句：GEO 避坑最大的坑，是把自己当发稿机器」<br/>'
                '　·「我第一个月也以为铺量就行，结果 AI 根本不提」<br/>'
                '　·「下个月我也打算少发，攒能当答案的话」<br/>'
                '<b>③ 有人晒自己的坑</b>：接梗别端着，气氛越真转发越高。</div>'
            ),
        },
        {
            "h": "📈 今日涨粉动作",
            "body": (
                '<div style="background:#fff8f0;border:1px solid #ffcfa8;border-radius:12px;padding:12px 14px;">'
                '<b style="font-size:13.5px;color:#b8541a;">📈 今日涨粉动作（30 分钟内做完）</b>'
                '<div style="font-size:12.5px;line-height:1.8;color:#2c2c2c;margin-top:8px;">'
                '<p style="margin:0 0 6px;"><b>1. 发布时段：工作日。</b>建议在 <b>08:30 前后</b> 落点。</p>'
                '<p style="margin:0 0 6px;"><b>2. 发完 30 分钟内回到评论区</b>：置顶带核心词那条，主动接「我第一个月也踩过这坑」的梗。</p>'
                '<p style="margin:0 0 6px;"><b>3. 挂进「GEO 避坑」合集</b>：合集名带核心词，吃「GEO 避坑」长尾。</p>'
                '<p style="margin:0 0 6px;"><b>4. 自己去搜索框验一次</b>：搜「GEO 避坑」「做 GEO 容易踩的坑」，看下拉词、你排哪，顺手抄进 keywords.md。</p>'
                '<p style="margin:0 0 6px;"><b>5. 复盘看收藏 + 转发</b>：收尾篇收藏率比小眼睛更关键，第 3 天、第 7 天再看搜索来源占比。</p>'
                '<p style="margin:0 0 6px;"><b>小提醒</b>：别写过度承诺 / 极限词；客户名用化名。</p>'
                '</div></div>'
            ),
        },
    ],
}

out = P / "day30.json"
out.write_text(json.dumps(entry, ensure_ascii=False, indent=2), encoding="utf-8")
print("已生成", out, "blocks:", len(entry["blocks"]))
