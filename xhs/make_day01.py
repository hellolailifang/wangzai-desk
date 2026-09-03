#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""生成 Day 1 的小红书 GEO 文案 JSON。后续每天复制本脚本改内容即可。"""
import json
from pathlib import Path

HERE = Path(__file__).resolve().parent

POST = """上周开周会，老板突然抬头问我一句：

"我们现在百度投得挺多的。那客户在豆包、DeepSeek 里搜我们这类产品，能搜到我们吗？"

我张了张嘴，没答上来。

回去我拿手机测��一整晚，结果更睡不着了——

我用最普通的问法问 AI："XX行业有哪些靠谱的供应商"。
它给了我一串品牌名，还顺手排了个序。
我们不在里面。
而排在最前面的那家，官网比我们朴素，团队比我们小。

那一刻我意识到一件挺吓人的事：

AI 不是在"搜索"，它是在"回答"。
搜索给你十条链接让你自己挑，AI 直接给你一个"它认为对的答案"。
用户不会翻到第二页，因为根本没有第二页。
谁进了那个答案，谁就被看见；没进，就等于不存在。

后来我才知道，这件事现在有个名字：
GEO（生成式引擎优化）。
说人话就是——想办法让 AI 在回答用户问题时，愿意提到你、引用你、推荐你。

我准备把这件事从零搞明白，
每天拆一篇真实观察 + 能上手的方法，不卖课、不吹牛，掰开了讲。

如果你也有过那种"心里一咯噔"的瞬间：
老板 / 客户问了个和 AI 有关的问题，你答不上来。
评论区扣个 1，让我知道我不是一个人 😂

也可以顺手报一下你的行业，我挑几个去 AI 里实测一下，明天发结果。"""

TA_BOX = (
    '<textarea readonly onclick="this.select()" spellcheck="false" '
    'style="width:100%;box-sizing:border-box;height:430px;padding:12px 14px;'
    "font-family:-apple-system,BlinkMacSystemFont,'PingFang SC',sans-serif;font-size:13.5px;"
    'line-height:1.85;color:#2c2c2a;background:#fffdf8;border:1px solid #ffd9c9;'
    'border-radius:12px;resize:vertical;white-space:pre-wrap;">__POST__</textarea>'
    '<div style="font-size:11.5px;color:#8a8a85;margin-top:6px;">'
    '👆 点一下全选，复制后直接粘到小红书发布页（记得把「XX行业」换成你的真实行业）</div>'
).replace("__POST__", POST.replace("&", "&amp;").replace("<", "&lt;")
          .replace(">", "&gt;").replace('"', "&quot;"))


def box(bg, bd, title, color, html):
    return (
        f'<div style="background:{bg};border:1px solid {bd};border-radius:12px;padding:12px 14px;">'
        f'<b style="font-size:13.5px;color:{color};">{title}</b>'
        f'<div style="font-size:12.5px;line-height:1.8;color:#2c2c2a;margin-top:8px;">{html}</div></div>'
    )


b_progress = box(
    "#eef7ff", "#9ec9ee", "🎯 Day 1 · 阶段目标 1000 粉", "#0a3d62",
    '<p style="margin:0 0 6px;">拆解一下这个目标，它其实没那么吓人：</p>'
    '<p style="margin:0 0 4px;">· <b>1000 粉，按 1 个月估算 ≈ 每天 33 粉</b>。这只是给自己定的第一个台阶，不是 deadline——'
    '做满一个月没到就继续往下做，节奏比日期重要。小红书图文大致是「每 100 赞涨 1–3 粉」，'
    '也就是说平均每天需要 <b>小几百个赞</b>，或者攒出 <b>3–5 篇小爆款</b>。</p>'
    '<p style="margin:0 0 4px;">· <b>三条腿走路</b>：① 日更 1 篇（保底曝光）；② 每天 20 分钟去同话题热门笔记下写有观点的评论（最高效的冷启动）；'
    '③ 每周出 1 篇「清单 / 合集」型内容（吃收藏和长尾）。</p>'
    '<p style="margin:0 0 4px;">· <b>今天只做 3 件事</b>：发第 1 篇 → 把主页简介改成「GEO 从业者｜每天拆明白一点 AI 搜索」→ 建一个选题池备忘录。</p>'
    '<p style="margin:6px 0 0;font-size:11.5px;color:#5f5e5a;">'
    '<b>第一篇的核心任务不是爆，是立人设。</b>让人一眼知道：这个号是干什么的、我在跟谁说话。涨粉在第 7–14 天开始见效，前 7 天先别被数据打击到。</p>'
)

b_topic = (
    '<p><b>今天发「开篇立人设 + 共鸣」型内容。</b>涨粉的第一件事不是教干货，是让陌生人 3 秒内知道你是谁、你说的话跟他有没有关系。</p>'
    + '<p class="ct-h">📌 标题 3 选 1（A/B 测试用）</p>'
    + '<div class="ct-body ph">'
    '<b>主推：</b>老板问我"客户在豆包里能搜到我们吗"，我当场沉默了<br/>'
    '<b>备选 A：</b>做了这么多年营销，我第一次答不上老板一个问题<br/>'
    '<b>备选 B：</b>AI 不会给你第二页，因为根本没有第二页<br/>'
    '<span style="color:#8a8a85;">（小红书标题 20 字内最好，主推那句稍长但冲突感最强，先发它；数据不好第 3 天换 A 重试）</span></div>'
    + '<p class="ct-h">🖼 封面建议 · 3:4 竖图 1080×1440</p>'
    + '<div class="ct-body ph">'
    '<b>尺寸固定：竖图 3:4，1080×1440px。</b>这是小红书信息流里展示面积最大的比例'
    '（比 1:1 方图多约 25%，比 4:3 横图多约 40%），横图会被压得很小，别用。<br/>'
    '白底 / 米黄底 + <b>纯黑大字</b>，字要大到缩略图里也看得清：<br/>'
    '主文案「<b>AI 里搜不到你 = 你不存在</b>」，放画面<b>中上部</b>（纵向 1/4 到 1/2 处）；<br/>'
    '副文案「第 1 天｜一个答不上老板问题的市场人」跟在主文案下面，<b>不要放底部</b>。<br/>'
    '⚠️ <b>底部 15%（约 216px）必须留空</b>：信息流里这块会被笔记标题和点赞栏压住，字放那儿等于白做。<br/>'
    '<b>别用花哨模板</b>，小红书现在信息流里「朴素大字报」反而更扎眼。</div>'
    + '<p class="ct-h">👥 这篇在跟谁说话</p>'
    + '<div class="ct-body ph">① <b>同行</b>（SEO / 市场 / 增长）：会被「答不上老板问题」戳中，愿意在评论区吐槽；<br/>'
    '② <b>老板 / 创业者</b>：他们最焦虑「我是不是错过了什么」，是未来会找你做 GEO 的人；<br/>'
    '③ <b>想转行的年轻人</b>：搜 GEO 想了解这个新赛道，会收藏。</div>'
)

b_tags = (
    '<p class="ct-h">🏷️ 话题标签（10 个，直接复制）</p>'
    '<div class="ct-body ph" style="word-break:break-all;">'
    '#GEO #AI搜索 #生成式引擎优化 #SEO #DeepSeek #豆包 #B2B营销 #市场营销 #职场日常 #打工人'
    '</div>'
    '<div style="font-size:11.5px;color:#8a8a85;margin-top:4px;">'
    '标签结构：2 个赛道大词（GEO / AI搜索）+ 2 个专业词（生成式引擎优化 / SEO）+ 3 个平台词（DeepSeek / 豆包 / 可换成元宝 Kimi）+ 3 个流量词（B2B营销 / 职场日常 / 打工人）。'
    '<b>前 7 天别动结构</b>，跑满一周再按后台的「搜索来源」数据换掉没带来曝光的词。</div>'
    + '<p class="ct-h">💬 互动钩子（这篇能不能起量，全看这里）</p>'
    + '<div class="ct-body ph">'
    '<b>① 结尾提问必须具体、零门槛</b>：不要问「你怎么看」（没人答），要问「扣个 1」「报下你的行业」。<br/>'
    '<b>② 预埋 3 条评论</b>（用小号或朋友号，发文后 10 分钟内发）：<br/>'
    '　·「我们老板上周问了一模一样的问题…」<br/>'
    '　·「所以在 AI 里搜不到就等于没品牌了吗？求解」<br/>'
    '　·「蹲一个，我是做 XX 的，帮我测测」<br/>'
    '<b>③ 每条评论都回，且回成反问</b>：「你们行业现在主要靠什么渠道获客？」——评论区每多一轮对话，笔记权重就多一分。<br/>'
    '<b>④ 48 小时内不要在主页挂任何联系方式</b>，先让账号权重跑起来。</div>'
)

b_action = box(
    "#fff8f0", "#ffcfa8", "📈 今日涨粉动作（30 分钟内做完）", "#b8541a",
    '<p style="margin:0 0 6px;"><b>1. 发布时段：</b>今天建议 <b>12:30–13:00</b>（午休刷手机高峰）。'
    '备选 20:30–21:30。GEO / 营销类内容工作日中午比晚上好，周末反过来。</p>'
    '<p style="margin:0 0 6px;"><b>2. 发完立刻去评论 3 条：</b>搜「GEO」「AI搜索」「DeepSeek」话题下 24 小时内的热门笔记，'
    '写<b>有观点的长评论</b>（2–3 句，说出自己的判断）。<b>不要留联系方式、不要引导关注</b>——纯干货评论带来的主页点击，比你想象的高。</p>'
    '<p style="margin:0 0 6px;"><b>3. 建选题池：</b>备忘录新建「选题池」，把评论区和私信里出现的每个行业、每个问题都记下来。'
    '这些人问的，就是你后面要写的。</p>'
    '<p style="margin:0 0 6px;"><b>4. 24 小时后复盘 3 个数：</b>曝光、收藏、涨粉。'
    '<b>收藏 ÷ 点赞 &gt; 10% 说明内容「有用」</b>，方向对；如果点赞高收藏低，说明只是情绪到位但没给方法，下一篇补干货。</p>'
    '<p style="margin:6px 0 0;font-size:11.5px;color:#8a8a85;">'
    '<b>明天预告：</b>Day 2 讲「GEO 到底是什么，和 SEO 的区别在哪」——第一篇负责共鸣，第二篇负责给方法，让人有理由点关注。</p>'
)

entry = {
    "tag": "小红书 · GEO 日更 Day 1｜开篇立人设 · 老板问我豆包能搜到我们吗",
    "blocks": [
        {"h": "🎯 Day 1 · 阶段目标 1000 粉", "body": b_progress},
        {"h": "📕 今日选题", "body": b_topic},
        {"h": "✍️ 正文文案（可直接复制）", "body": TA_BOX},
        {"h": "🏷️ 标签 & 💬 互动钩子", "body": b_tags},
        {"h": "📈 今日涨粉动作", "body": b_action},
    ],
}

out = HERE / "day01.json"
out.write_text(json.dumps(entry, ensure_ascii=False, indent=2), encoding="utf-8")
print(f"已生成 {out}（正文 {len(POST)} 字，{len(entry['blocks'])} 个板块）")
