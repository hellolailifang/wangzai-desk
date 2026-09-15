#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Day 10 · 故事化重写版（v3，2026-09-15 旺仔反馈重写）
原 v2 没被收录 + 中段像资讯盘点（讲课感重、点开就退）。
v3 改成「半夜刷到群截图」的小故事：钩子在开头（划到那条没划走），
情绪转折在中间（松口气→咯噔一下），判断「标准=护城河也=降价通知书」
从故事里自己长出来，不解释机制、不列清单。

事实背景（2026-09-10 已核实，只写量级趋势）：
  T/CAPT 026—2026《生成式引擎优化(GEO)可信信息传播与信息生态治理规范》，
  2026-08 发布，新华网/新华社国家重点实验室牵头，30 余家机构参与；
  禁止语料投毒/答案霸权/伪共识制造/提示词注入攻击四类。
"""
import json
from pathlib import Path

HERE = Path(__file__).resolve().parent

POST = """前天半夜快十二点，同行群里有人甩了张截图，我本来要睡了，划到那条没划走。

是国内第一份 GEO 的团体标准，八月底刚发的。点开前我还以为是「三天让你上 AI 答案」的课，结果不是。

看完第一反应是松了口气。它白纸黑字写死了几条不能做的：往语料塞假消息、把答案位占死、伪造「大家都这么说」的共识。这四条我都没碰过。

以前跟客户解释「我不是搞刷排名的」，讲到口干他还半信半疑，现在好了，有白纸黑字替我说话。

但往下翻到「三十多家机构一起编的」那行，我心里咯噔一下。

因为我突然想到，东西一旦被写成标准，下一步就会被写成清单，再下一步就该被比价了。我们这行报价还能看，就是因甲方说不清贵在哪。等交付物能一项项对着查，价格就压下来——这是靠判断吃饭的人最怕的。

群里一片「终于有规矩了」，我只在心里回：对，但我担心的也正是这个。

也可能我想多了，一份团体标准能管到哪，谁也说不准。不过拉三十多家机构给这行立规矩，起码说明它不是一波流。

你们要是也被「一个月让你进 AI 答案」的人找过，把原话甩评论区，我攒着，下次挑几个拆拆套路。"""

TA_BOX = (
    '<textarea readonly onclick="this.select()" spellcheck="false" '
    'style="width:100%;box-sizing:border-box;height:560px;padding:12px 14px;'
    "font-family:-apple-system,BlinkMacSystemFont,'PingFang SC',sans-serif;font-size:13.5px;"
    'line-height:1.85;color:#2c2c2a;background:#fffdf8;border:1px solid #ffd9c9;'
    'border-radius:12px;resize:vertical;white-space:pre-wrap;">__POST__</textarea>'
    '<div style="font-size:11.5px;color:#8a8a85;margin-top:6px;">'
    '👆 点一下全选，复制后直接粘到小红书发布页。<br/>'
    '本篇为已发笔记的「故事化重写版」，请在小红书用「编辑」整段替换正文。<br/>'
    '发布前把「前天半夜」换成你真实刷到那条消息的时间、「同行群」换成你常看的群，'
    '<b>别照抄成公文腔</b>。</div>'
).replace("__POST__", POST.replace("&", "&amp;").replace("<", "&lt;")
          .replace(">", "&gt;").replace('"', "&quot;"))


def box(bg, bd, title, color, html):
    return (
        f'<div style="background:{bg};border:1px solid {bd};border-radius:12px;padding:12px 14px;">'
        f'<b style="font-size:13.5px;color:{color};">{title}</b>'
        f'<div style="font-size:12.5px;line-height:1.8;color:#2c2c2a;margin-top:8px;">{html}</div></div>'
    )


b_progress = box(
    "#eef7ff", "#9ec9ee", "🎯 Day 10 · 阶段目标 1000 粉", "#0a3d62",
    '<p style="margin:0 0 6px;"><b>本篇是 Day 10 已发笔记的「故事化重写版」（v3）</b>：'
    '同样讲 GEO 团体标准，但不再当资讯盘点念，改成<b>半夜刷到群截图的小故事</b>——'
    '先松口气、又突然有点慌，让「标准既是护城河也是降价通知书」这个判断自己冒出来。</p>'
    '<p style="margin:0 0 4px;">· <b>为什么改写法</b>：原版中后段在讲机制、列清单，'
    '读者点开以为是故事，结果被当学生，点开就退、也不收录。v3 把洞察藏进情绪转折里。</p>'
    '<p style="margin:0 0 4px;">· <b>今天只做 1 件事</b>：去小红书把 Day 10 原笔记用本篇整段「编辑」替换，'
    '编辑会重新给一次推荐。</p>'
    '<p style="margin:6px 0 0;font-size:11.5px;color:#5f5e5a;">'
    '<b>写法红线</b>：强钩子开头、不讲课、段落长短交错、破折号≤1、营销词 0。</p>'
)

b_topic = (
    '<p><b>本篇是已发笔记的「故事化重写版」（v3）</b>：同样讲 GEO 团体标准，'
    '但不再当资讯盘点写，改成<b>一个半夜刷到截图、先松口气又突然有点慌的小故事</b>。'
    '钩子在开头（「划到那条没划走」），情绪转折在中间（松口气→咯噔一下），'
    '不讲课、不解释机制，让「标准=护城河也=降价通知书」从故事里自己长出来。</p>'
    + '<p style="margin:10px 0 6px;font-size:12.5px;color:#0a3d62;">'
    '<b>📰 故事里用到的真实背景（2026-09-10 已核实）</b></p>'
    + '<div class="ct-body ph">'
    '《生成式引擎优化(GEO)可信信息传播与信息生态治理规范》(T/CAPT 026—2026)：'
    '2026-08 发布，新华网、新华社国家重点实验室牵头，30 余家机构参与；'
    '明确禁止语料投毒、答案霸权、伪共识制造、提示词注入攻击四类违规。<br/>'
    '<span style="color:#8a8a85;">⚠️ 口径：只写量级与趋势，不给精确数字；'
    '机构全称、日期宁可模糊绝不补。</span></div>'
    + '<p class="ct-h">📌 标题 3 选 1（钩子优先）</p>'
    + '<div class="ct-body ph">'
    '<b>主推：</b>半夜刷到一张截图，我突然有点慌<br/>'
    '<b>备选 A：</b>同行群里那张图，把我从床上惊起来<br/>'
    '<b>备选 B：</b>终于有规矩了，但我担心的正是这个<br/>'
    '<span style="color:#8a8a85;">主推把「半夜刷到→有点慌」的悬念顶在标题，'
    '点击动机最明确；备选 B 点出矛盾，适合封面大字。</span></div>'
    + '<p class="ct-h">🖼 封面建议 · 3:4 竖图 1080×1440（模板 C · 真实群聊截图）</p>'
    + '<div class="ct-body ph">'
    '<b>尺寸固定：竖图 3:4，1080×1440px。</b><br/>'
    '直接拍<b>同行群里那条甩链接的消息</b>——屏幕上露出发言头像和那个链接，'
    '越像随手截的越好。<br/>'
    '主文案压在画面<b>中上部</b>：<br/>「<b>半夜刷到<br/>有点慌</b>」<br/>'
    '⚠️ <b>底部 15%（约 216px）必须留空</b>。</div>'
    + '<p class="ct-h">👥 这篇在跟谁说话</p>'
    + '<div class="ct-body ph">① <b>GEO / SEO 同行</b>：「被比价」是真实焦虑，会转述；'
    '② <b>甲方市场负责人</b>：第一次知道有标准可参考；'
    '③ <b>观望的人</b>：得到「这行不是一波流」的判断依据。</div>'
)

b_tags = (
    '<p class="ct-h">🏷️ 话题标签（10 个，直接复制）</p>'
    '<div class="ct-body ph" style="word-break:break-all;">'
    '#GEO #AI搜索 #行业标准 #合规营销 #DeepSeek #豆包 #Kimi '
    '#中小企业 #市场营销 #行业观察'
    '</div>'
    '<div style="font-size:11.5px;color:#8a8a85;margin-top:4px;">'
    '标签结构：2 个赛道大词 + 2 个专业词 + 3 个平台词 + 3 个流量词。'
    '平台词每篇最多列 3 个，与前后篇不重合。</div>'
    + '<p class="ct-h">💬 互动钩子 · D 类「求故事」</p>'
    + '<div class="ct-body ph">'
    '<b>① 结尾直接要故事，不是要数据</b>：'
    '"有人找过你说「一个月让你进 AI 答案」吗？原话甩评论区"——'
    '人人都有被这类话术找过的经历，门槛低、答案不重复。<br/>'
    '<b>② 撂上来的话术正好是打假篇弹药</b>：'
    '每条回一句「然后呢 / 怎么收费」，攒够就是后面那篇的素材。<br/>'
    '<b>③ 预埋 3 条评论</b>（编辑替换后 10 分钟内分几条发）：<br/>'
    '　·「有人跟我说交钱就能稳上 AI 答案…原来这是写进标准的违规行为」<br/>'
    '　·「所以那份标准到底管不管得住啊」<br/>'
    '　·「管严格点是好事，不然好好的词都被玩坏了」<br/>'
    '<b>④ 抬杠评论别删</b>：尤其「有资质才好收费吧，你急什么」这种，'
    '留着推得更多，回一句「也被你说中了一半」就行。</div>'
)

b_action = box(
    "#fff8f0", "#ffcfa8", "📈 今日涨粉动作（编辑替换即可）", "#b8541a",
    '<p style="margin:0 0 6px;"><b>1. 本篇是「编辑替换」不是新发</b>：'
    '进「我发布的笔记 → Day 10 → 编辑」，用本篇正文整段覆盖，标题也一起换。'
    '<b>编辑过的笔记小红书会重新给一次推荐。</b></p>'
    '<p style="margin:0 0 6px;"><b>2. 替换后 30 分钟内回评论区</b>：'
    '发预埋的 3 条，再回前 5 条真实评论。'
    '<b>编辑后 30 分钟的互动率直接决定这次推不推。</b></p>'
    '<p style="margin:0 0 6px;"><b>3. 把撂上来的话术逐条追问</b>：'
    '"然后呢 / 怎么收费 / 多久见效"，逼出更多原话，攒成打假篇素材。</p>'
    '<p style="margin:6px 0 0;font-size:11.5px;color:#8a8a85;">'
    '<b>备注：</b>原版没被收录，多半是「像资讯盘点」——'
    '有日期、有出处反而容易被判搬运/聚合，不如真人碎碎念。v3 走这个路线。</p>'
)

entry = {
    "date": "2026-09-11",
    "day": 10,
    "tag": "小红书 · GEO 日更 Day 10｜半夜刷到一张截图，我突然有点慌",
    "blocks": [
        {"h": "🎯 Day 10 · 阶段目标 1000 粉", "body": b_progress},
        {"h": "📕 今日选题", "body": b_topic},
        {"h": "✍️ 正文文案（可直接复制）", "body": TA_BOX},
        {"h": "🏷️ 标签 & 💬 互动钩子", "body": b_tags},
        {"h": "📈 今日涨粉动作", "body": b_action},
    ],
}

out = HERE / "day10.json"
out.write_text(json.dumps(entry, ensure_ascii=False, indent=2), encoding="utf-8")

plain = len(POST.replace("\n", ""))
print(f"已生成 {out}（正文 {plain} 字，{len(entry['blocks'])} 个板块）")
if not (420 <= plain <= 560):
    print(f"⚠️ 正文字数 {plain} 超出 420–560 区间，请调整")
else:
    print(f"✅ 正文字数 {plain}，符合 420–560 区间")
