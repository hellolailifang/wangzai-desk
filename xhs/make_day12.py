#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Day 12 · 故事化重写版（v3，2026-09-15 旺仔反馈重写）
原 v2 没被收录 + 中段在「下定义、讲机制」（慢 vs 晚 的解释 + 消化期原理），
读者点开以为是故事，结果被讲课，点开就退。

v3 改成两个老板的真实对比：一个问完「哦」就消失，一个两周就被 AI 捞起来。
钩子在开头（「回了个哦，然后人就没了」），判断「GEO 不是慢是晚 / 看存量」
从对比里自己长出来，不解释机制、不列定义。
"""
import json
from pathlib import Path

HERE = Path(__file__).resolve().parent

POST = """上个月有个做传感器的老板，加我好友，第一句就问：多久能见效。

我回：三个月起。他回了个「哦」，然后人就没了。

我盯着那个「哦」看了好久。他不是嫌久，他是怕——怕等了三个月，还是啥动静没有。

后来接了个做外贸的，情况差不多，但我多问了一句：你以前在哪写过东西没。他说知乎发过几十篇行业回答。我让他先把那些归归类，别急着新发。他半信半疑，说「不发新的发旧的管用吗」，我说先试两周。

结果两周，AI 回答里就开始带他家了。我特意盯着看了三天，头两天还没影，第三天突然排在前两条里，跟他整理的那批旧回答能对上。

我这才反应过来，GEO 根本不是「慢」，是「晚」。慢是你每天能看见进度，晚是前面死寂一片，某天突然被拎出来。能不能快，不看你多努力，看你肚子里有没有存货。

那个传感器老板，我后来没再追，怕催急了更烦。他大概就是白纸一张，三个月都算乐观。

这话我也不敢说太满，就接触过的这几个。

你们要是也在熬第一个月，现在就去问一次 AI 你公司名，看提没提你、排第几，回来评论区跟我说说，我挺想看样本。"""

TA_BOX = (
    '<textarea readonly onclick="this.select()" spellcheck="false" '
    'style="width:100%;box-sizing:border-box;height:600px;padding:12px 14px;'
    "font-family:-apple-system,BlinkMacSystemFont,'PingFang SC',sans-serif;font-size:13.5px;"
    'line-height:1.85;color:#2c2c2a;background:#fffdf8;border:1px solid #ffd9c9;'
    'border-radius:12px;resize:vertical;white-space:pre-wrap;">__POST__</textarea>'
    '<div style="font-size:11.5px;color:#8a8a85;margin-top:6px;">'
    '👆 点一下全选，复制后直接粘到小红书发布页。<br/>'
    '本篇为已发笔记的「故事化重写版」，请用小红书「编辑」整段替换正文。<br/>'
    '发布前改两处：①「做传感器的老板」换成你真遇到过的人的行业；'
    '②「知乎发过几十篇」换成你真实知道的存量来源，<b>没有就别编</b>。</div>'
).replace("__POST__", POST.replace("&", "&amp;").replace("<", "&lt;")
          .replace(">", "&gt;").replace('"', "&quot;"))


def box(bg, bd, title, color, html):
    return (
        f'<div style="background:{bg};border:1px solid {bd};border-radius:12px;padding:12px 14px;">'
        f'<b style="font-size:13.5px;color:{color};">{title}</b>'
        f'<div style="font-size:12.5px;line-height:1.8;color:#2c2c2a;margin-top:8px;">{html}</div></div>'
    )


b_progress = box(
    "#eef7ff", "#9ec9ee", "🎯 Day 12 · 阶段目标 1000 粉", "#0a3d62",
    '<p style="margin:0 0 6px;"><b>本篇是 Day 12 已发笔记的「故事化重写版」（v3）</b>：'
    '同样拆「GEO 能速成吗」，但不再下定义、不再讲机制，改成<b>两个老板的真实对比</b>——'
    '一个问完「哦」就消失，一个两周就被 AI 捞起来。</p>'
    '<p style="margin:0 0 4px;">· <b>为什么改写法</b>：原版中段在讲「慢 vs 晚」的定义和消化期原理，'
    '像上课，读者点开就退、也不收录。v3 让判断从对比里自己冒出来。</p>'
    '<p style="margin:0 0 4px;">· <b>今天只做 1 件事</b>：去小红书把 Day 12 原笔记用本篇整段「编辑」替换。</p>'
    '<p style="margin:6px 0 0;font-size:11.5px;color:#5f5e5a;">'
    '<b>写法红线</b>：强钩子开头、不讲课、段落长短交错、破折号≤1、营销词 0。</p>'
)

b_topic = (
    '<p><b>本篇是已发笔记的「故事化重写版」（v3）</b>：同样拆「GEO 能速成吗」，'
    '但不再下定义、不再讲机制，改成<b>两个老板的真实对比</b>——'
    '一个问完「哦」就消失，一个两周就被 AI 捞起来。钩子在开头（「回了个哦，然后人就没了」），'
    '判断从对比里自己长出来：GEO 不是慢，是晚，能不能快看存量。</p>'
    + '<p style="margin:10px 0 6px;font-size:12.5px;color:#0a3d62;">'
    '<b>🔑 故事里的判断（每篇一个多数人没想到的点）</b></p>'
    + '<div class="ct-body ph">'
    '<b>慢 ≠ 晚。</b>慢是每天能看见进度，晚是前面死寂一片、某天突然被拎出来。'
    'GEO 是后者，所以第一个月没动静≠白做。<br/>'
    '<b>关键变量是存量</b>：之前在论坛/问答/行业站写过东西的人，AI 很快捞得到；'
    '白纸一张的人三个月起。<br/>'
    '<span style="color:#8a8a85;">⚠️ 口径：只讲「消化期」定性说法，'
    '不写「7 天 / 30 天」精确数字，不断言某平台具体机制。</span></div>'
    + '<p class="ct-h">📌 标题 3 选 1（钩子优先）</p>'
    + '<div class="ct-body ph">'
    '<b>主推：</b>那个老板回了个「哦」，然后人就没了<br/>'
    '<b>备选 A：</b>我悟了：GEO 不是慢，是晚<br/>'
    '<b>备选 B：</b>做了两个月没动静？可能你只是「晚」不是「慢」<br/>'
    '<span style="color:#8a8a85;">主推用对话钩子（「哦」之后消失了）制造悬念，'
    '点击动机最明确；备选 B 直接戳焦虑人群。</span></div>'
    + '<p class="ct-h">🖼 封面建议 · 3:4 竖图 1080×1440（模板 A · 真实场景照）</p>'
    + '<div class="ct-body ph">'
    '<b>尺寸固定：竖图 3:4，1080×1440px。</b><br/>'
    '拍一张<b>你跟客户聊「多久见效」的聊天界面</b>，或<b>后台那条平了很久的曲线</b>——'
    '"平"本身就是内容。<br/>'
    '主文案压在画面<b>中上部</b>：<br/>「<b>不是慢<br/>是晚</b>」<br/>'
    '⚠️ <b>底部 15%（约 216px）必须留空</b>。</div>'
    + '<p class="ct-h">👥 这篇在跟谁说话</p>'
    + '<div class="ct-body ph">① <b>刚做一个月、焦虑没效果的老板</b>：直接接住「我是不是白做了」；'
    '② <b>被「三个月包见效」忽悠的人</b>：给判断标准；'
    '③ <b>同行</b>：「慢 vs 晚」会直接拿去用。</div>'
)

b_tags = (
    '<p class="ct-h">🏷️ 话题标签（10 个，直接复制）</p>'
    '<div class="ct-body ph" style="word-break:break-all;">'
    '#GEO #AI搜索 #内容运营 #长期主义 #豆包 #Kimi #百度AI搜索 '
    '#中小企业 #创业避坑 #行业观察'
    '</div>'
    '<div style="font-size:11.5px;color:#8a8a85;margin-top:4px;">'
    '标签结构：2 个赛道大词 + 2 个专业词 + 3 个平台词 + 3 个流量词。'
    '流量词保留「创业避坑」——打假型配避坑词，搜索更准。</div>'
    + '<p class="ct-h">💬 互动钩子 · E 类「挑战型」</p>'
    + '<div class="ct-body ph">'
    '<b>① 结尾发起挑战</b>：'
    '"现在去问一次 AI 你公司名，看提没提你、排第几，回来评论区跟我说说"——'
    '人人能立刻动手，评论门槛极低，且能攒成真实案例。<br/>'
    '<b>② 这条钩子要求高</b>：别人真去问了、把结果发出来，<b>你必须回</b>。'
    '不回下次就没人参与，算法也看评论区互动深度。<br/>'
    '<b>③ 预埋 3 条评论</b>（编辑替换后 10 分钟内）：<br/>'
    '　·「做了两个月一点动静没有，原来是这个原因」<br/>'
    '　·「我们在行业站发过挺多东西的，那算是存量吗」<br/>'
    '　·「传感器那个老板是不是我（狗头）」<br/>'
    '<b>④ 有人回结果之后</b>：把「提了谁 / 第几位 / 说没说对」如实回过去，'
    '说错的也照实说——这是评论区很扎实的信任资产。</div>'
)

b_action = box(
    "#fff8f0", "#ffcfa8", "📈 今日涨粉动作（编辑替换即可）", "#b8541a",
    '<p style="margin:0 0 6px;"><b>1. 本篇是「编辑替换」不是新发</b>：'
    '进「我发布的笔记 → Day 12 → 编辑」，用本篇正文整段覆盖，标题也一起换。'
    '<b>编辑过的笔记小红书会重新给一次推荐。</b></p>'
    '<p style="margin:0 0 6px;"><b>2. 替换后 30 分钟内回评论区</b>：'
    '发预埋的 3 条，再回前 5 条真实评论。</p>'
    '<p style="margin:0 0 6px;"><b>3. 逐个回复「问了 AI」的人</b>：'
    '把「提了谁 / 第几位 / 说没说对」如实回过去——本篇命门在这，'
    '也是后续「粉丝案例诊断」的素材积累。</p>'
    '<p style="margin:6px 0 0;font-size:11.5px;color:#8a8a85;">'
    '<b>备注：</b>原版没被收录，多半是「中段讲课感」——'
    '读者预期是故事、收到的是讲义，跳出率高、也不被当原创收。v3 走故事路线。</p>'
)

entry = {
    "date": "2026-09-14",
    "day": 12,
    "tag": "小红书 · GEO 日更 Day 12｜那个老板回了个「哦」，然后人就没了",
    "blocks": [
        {"h": "🎯 Day 12 · 阶段目标 1000 粉", "body": b_progress},
        {"h": "📕 今日选题", "body": b_topic},
        {"h": "✍️ 正文文案（可直接复制）", "body": TA_BOX},
        {"h": "🏷️ 标签 & 💬 互动钩子", "body": b_tags},
        {"h": "📈 今日涨粉动作", "body": b_action},
    ],
}

out = HERE / "day12.json"
out.write_text(json.dumps(entry, ensure_ascii=False, indent=2), encoding="utf-8")

plain = len(POST.replace("\n", ""))
print(f"已生成 {out}（正文 {plain} 字，{len(entry['blocks'])} 个板块）")
if not (420 <= plain <= 560):
    print(f"⚠️ 正文字数 {plain} 超出 420–560 区间，请调整")
else:
    print(f"✅ 正文字数 {plain}，符合 420–560 区间")
