#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""生成 Day 2 的小红书 GEO 文案 JSON：GEO 到底是什么，和 SEO 的区别（科普）。"""
import json
from pathlib import Path

HERE = Path(__file__).resolve().parent

POST = """昨天那篇下面，最高赞的一条评论是：

"说白了，不就是 SEO 换个名字割韭菜吗？"

我盯着这句话看了很久。因为它错了，但它错得很有道理。

先说它对的部分：GEO 和 SEO 确实是一棵树上的两根枝，都在解决同一件事——让别人"找东西"的时候能找到你。

但从这里开始，就分岔了。

SEO 争的是位置。
你在搜索结果排第 3 还是第 8，用户会看到十条链接，自己挑一条点进去。就算掉到第二页也还有活路，总有人会翻过去。

GEO 争的是信任。
用户问 AI 一句"XX 行业有哪些靠谱的供应商"，AI 只给一段回答，顺手列几个品牌。它没有第二页，用户也不会再问第二遍。你要么在那段话里，要么就等于不存在。

这个区别带出三件很实在的事：

① 优化对象变了。
SEO 盯关键词、标题、外链。
GEO 盯的是：你的说法有没有数据撑着、有没有第三方也在说同样的话、你的内容能不能被一句话摘出来直接用。

② 计量单位变了。
SEO 看排名和点击。
GEO 看"被引用率"——同一类问题问十次，AI 提到你几次。这个词我后面会反复讲，它比排名重要得多。

③ 最狠的一条：SEO 能花钱买，GEO 买不来。
排名可以投，外链可以买。但 AI 认的是全网对一件事的一致说法，你买不动几百个信源同时改口。

所以别急着把 SEO 扔了。它是地基，只是现在地基上面得多盖一层。

想问一句实在的：你们公司现在 AI 这块是谁在管？
扣 1 = 还是做 SEO / 市场的人兼着
扣 2 = 压根没人管

也顺手报下你的行业，我挑几个去 AI 里实测。"""

TA_BOX = (
    '<textarea readonly onclick="this.select()" spellcheck="false" '
    'style="width:100%;box-sizing:border-box;height:430px;padding:12px 14px;'
    "font-family:-apple-system,BlinkMacSystemFont,'PingFang SC',sans-serif;font-size:13.5px;"
    'line-height:1.85;color:#2c2c2a;background:#fffdf8;border:1px solid #ffd9c9;'
    'border-radius:12px;resize:vertical;white-space:pre-wrap;">__POST__</textarea>'
    '<div style="font-size:11.5px;color:#8a8a85;margin-top:6px;">'
    '👆 点一下全选，复制后直接粘到小红书发布页（记得把「XX 行业」换成你的真实行业）</div>'
).replace("__POST__", POST.replace("&", "&amp;").replace("<", "&lt;")
          .replace(">", "&gt;").replace('"', "&quot;"))


def box(bg, bd, title, color, html):
    return (
        f'<div style="background:{bg};border:1px solid {bd};border-radius:12px;padding:12px 14px;">'
        f'<b style="font-size:13.5px;color:{color};">{title}</b>'
        f'<div style="font-size:12.5px;line-height:1.8;color:#2c2c2a;margin-top:8px;">{html}</div></div>'
    )


b_progress = box(
    "#eef7ff", "#9ec9ee", "🎯 Day 2 / 30 · 目标 1000 粉", "#0a3d62",
    '<p style="margin:0 0 6px;"><b>今天的核心任务：把「共鸣」转成「关注」。</b>'
    'Day 1 让人觉得"这说的不就是我"，Day 2 要让人觉得"关注他能学到东西"。'
    '科普型笔记不靠情绪涨粉，靠<b>收藏率</b>——收藏会进「我的收藏」长期分发，是长尾流量的主力。</p>'
    '<p style="margin:0 0 4px;">· <b>科普型内容的合格线</b>：收藏 ÷ 点赞 &gt; 15%。'
    '低于这个说明讲得太浅，看过就忘；高于 30% 说明有人把它当工具存起来了，这是好事。</p>'
    '<p style="margin:0 0 4px;">· <b>今天只做 3 件事</b>：① 发第 2 篇（把 SEO 和 GEO 的区别一次讲清）；'
    '② 去 Day 1 评论区把「不就是 SEO 换名字」那条质疑<b>置顶并认真回复</b>——'
    '争议回复本身就是内容；③ 把这条质疑记进选题池。</p>'
    '<p style="margin:6px 0 0;font-size:11.5px;color:#5f5e5a;">'
    '<b>前 3 天别盯着涨粉数看。</b>小红书的账号权重有 3–7 天爬坡期，'
    '这段时间系统还在判断「你是谁、该推给谁」。这几天看<b>曝光量</b>和<b>收藏率</b>就够，涨粉从第 7 天开始才准。</p>'
)

b_topic = (
    '<p><b>今天发「科普 / 概念澄清」型内容</b>，标题要带一点火药味。'
    '纯科普（"什么是 GEO"）在信息流里很吃亏——没冲突没人点。'
    '所以今天的切入点是<b>回应质疑</b>：把评论区那句"不就是 SEO 换名字"摆到台面上，再一层层拆开讲。</p>'
    + '<p class="ct-h">📌 标题 3 选 1（A/B 测试用）</p>'
    + '<div class="ct-body ph">'
    '<b>主推：</b>有人说 GEO 就是 SEO 换名字，这话对了一半<br/>'
    '<b>备选 A：</b>SEO 争排名，GEO 争信任，不是一回事<br/>'
    '<b>备选 B：</b>SEO 能花钱买，GEO 买不来<br/>'
    '<span style="color:#8a8a85;">主推那句带"对了一半"的转折感，容易引发好奇；'
    '备选 B 冲突最猛但容易被当成标题党，数据不好时再换。</span></div>'
    + '<p class="ct-h">🖼 封面建议 · 3:4 竖图 1080×1440</p>'
    + '<div class="ct-body ph">'
    '<b>尺寸固定：竖图 3:4，1080×1440px。</b>信息流里展示面积最大'
    '（比 1:1 多约 25%，比 4:3 横图多约 40%），横图会被压得很小，别用。<br/>'
    '白底 / 米黄底 + <b>纯黑大字</b>，这篇适合做<b>左右对比</b>版式：<br/>'
    '左边一列「<b>SEO</b>」下面小字「争排名 · 十条链接 · 能花钱买」；<br/>'
    '右边一列「<b>GEO</b>」下面小字「争信任 · 一个答案 · 买不来」；<br/>'
    '中间一道竖线分隔，主文案「<b>不是换名字，是换规则</b>」压在上方。<br/>'
    '⚠️ <b>底部 15%（约 216px）必须留空</b>——信息流里这块会被笔记标题和点赞栏压住。'
    '对比两列整体放在画面<b>中上部</b>（纵向 1/4 到 1/2 处）。<br/>'
    '<b>别用花哨模板</b>，「朴素大字报」在信息流里反而更扎眼。</div>'
    + '<p class="ct-h">👥 这篇在跟谁说话</p>'
    + '<div class="ct-body ph">① <b>SEO / SEM 从业者</b>：最在意"我的活儿会不会被取代"，'
    '这篇明确告诉他"SEO 是地基"，能安抚也能转化；<br/>'
    '② <b>市场负责人 / 老板</b>：需要一句能拿去跟老板复述的定义，会收藏；<br/>'
    '③ <b>持怀疑态度的人</b>：觉得 GEO 是割韭菜的——用这篇把质疑正面接住，比回避强。</div>'
)

b_tags = (
    '<p class="ct-h">🏷️ 话题标签（10 个，直接复制）</p>'
    '<div class="ct-body ph" style="word-break:break-all;">'
    '#GEO #AI搜索 #SEO #生成式引擎优化 #DeepSeek #豆包 #元宝 #B2B营销 #市场营销 #知识科普'
    '</div>'
    '<div style="font-size:11.5px;color:#8a8a85;margin-top:4px;">'
    '标签结构：2 个赛道大词（GEO / AI搜索）+ 2 个专业词（SEO / 生成式引擎优化）'
    '+ 3 个平台词（DeepSeek / 豆包 / 元宝）+ 3 个流量词（B2B营销 / 市场营销 / 知识科普）。'
    '今天把「职场日常」换成了「知识科普」——科普型内容配科普标签，流量更精准。'
    '<b>前 7 天别大改结构</b>，跑满一周再按后台「搜索来源」换掉没带来曝光的词。</div>'
    + '<p class="ct-h">💬 互动钩子（这篇能不能起量，全看这里）</p>'
    + '<div class="ct-body ph">'
    '<b>① 结尾用二选一，比开放式提问好答得多</b>：「扣 1 = 有人兼着 / 扣 2 = 没人管」。'
    '两档都带着自嘲感，几乎零门槛。<b>不要问「你怎么看」</b>，没人答。<br/>'
    + '<b>② 正面接住那条质疑</b>：把「不就是 SEO 换名字」的评论<b>点赞置顶</b>，'
    '回复时先认一半——「你说对了一半，两者确实同源」，再给区别。<b>先认同再反驳，比硬怼涨粉快</b>。<br/>'
    '<b>③ 预埋 3 条评论</b>（发文后 10 分钟内）：<br/>'
    '　·「做了 8 年 SEO，看完有点后背发凉…」<br/>'
    '　·「所以小公司是不是直接躺平算了？」<br/>'
    '　·「蹲一个被引用率怎么测，求解」<br/>'
    '<b>④ 每条评论回成反问</b>：「你们现在官网多久更新一次？」——'
    '评论区每多一轮对话，笔记权重就多一分。<br/>'
    '<b>⑤ 48 小时内不要在主页挂联系方式</b>，先让账号权重跑起来。</div>'
)

b_action = box(
    "#fff8f0", "#ffcfa8", "📈 今日涨粉动作（30 分钟内做完）", "#b8541a",
    '<p style="margin:0 0 6px;"><b>1. 发布时段：</b>今天建议 <b>12:30–13:00</b>（午休刷手机高峰）。'
    '备选 20:30–21:30。科普型内容适合通勤和午休这种"能读长文"的时段，'
    '周五晚上反而没人看干货。</p>'
    '<p style="margin:0 0 6px;"><b>2. 先回 Day 1 的评论区，再发新笔记。</b>'
    '把昨天那批互动接住，系统会认为这是个"活跃账号"，新笔记的初始流量池会更好。</p>'
    '<p style="margin:0 0 6px;"><b>3. 发完去评论 3 条：</b>搜「GEO」「AI搜索」「SEO 还有前景吗」话题下 24 小时内的热门笔记，'
    '写<b>有观点的长评论</b>（2–3 句，给出自己的判断）。<b>不要留联系方式、不要引导关注</b>——'
    '纯干货评论带来的主页点击，比你想象的高。</p>'
    '<p style="margin:0 0 6px;"><b>4. 补一条选题池记录：</b>把「GEO 是不是割韭菜」这类质疑单独记一类，'
    '攒够 5 条就能出一篇专门的打假文（已排在 Day 11、Day 12）。'
    '<b>质疑是最好的选题来源</b>，因为它自带争议流量。</p>'
    '<p style="margin:0 0 6px;"><b>5. 24 小时后复盘 3 个数：</b>曝光、收藏、涨粉。'
    '<b>收藏 ÷ 点赞 &gt; 15% 说明讲到位了</b>；如果曝光很高但涨粉几乎为 0，'
    '说明内容有用但没给关注理由——下一篇结尾要更明确地承诺"明天讲什么"。</p>'
    '<p style="margin:6px 0 0;font-size:11.5px;color:#8a8a85;">'
    '<b>明天预告：</b>Day 3 讲「GEO 是怎么来的，为什么偏偏这两年突然火了」——'
    '把来龙去脉讲清，别人才信你不是追风口。</p>'
)

entry = {
    "tag": "小红书 · GEO 日更 Day 2｜GEO 到底是什么，和 SEO 的区别",
    "blocks": [
        {"h": "🎯 30 天涨粉进度 · Day 2", "body": b_progress},
        {"h": "📕 今日选题", "body": b_topic},
        {"h": "✍️ 正文文案（可直接复制）", "body": TA_BOX},
        {"h": "🏷️ 标签 & 💬 互动钩子", "body": b_tags},
        {"h": "📈 今日涨粉动作", "body": b_action},
    ],
}

out = HERE / "day02.json"
out.write_text(json.dumps(entry, ensure_ascii=False, indent=2), encoding="utf-8")

plain = len(POST.replace("\n", ""))
print(f"已生成 {out}（正文 {plain} 字，{len(entry['blocks'])} 个板块）")
if not (500 <= plain <= 700):
    print(f"⚠️ 正文字数 {plain} 超出 500–700 区间，请调整")
