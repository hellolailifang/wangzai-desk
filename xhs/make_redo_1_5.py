#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""重做 Day 1–5（易收录版，2026-09-07 改造）。

原 Day 1–5 已发布但 0 数据（被判 AI 营销号）。本脚本按新规范重写这 5 篇，
保留原主题，但换切入点 / 换互动钩子 / 真实场景封面 / ≥2 具象细节 / 正文 280–380 字。

输出：day01.json ... day05.json（结构与 day06.json 一致：5 个 blocks）
用法：python3 xhs/make_redo_1_5.py
"""
import json
from pathlib import Path

HERE = Path(__file__).resolve().parent


def ta_box(post: str) -> str:
    safe = post.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replace('"', "&quot;")
    return (
        '<textarea readonly onclick="this.select()" spellcheck="false" '
        'style="width:100%;box-sizing:border-box;height:460px;padding:12px 14px;'
        "font-family:-apple-system,BlinkMacSystemFont,'PingFang SC',sans-serif;font-size:13.5px;"
        'line-height:1.85;color:#2c2c2a;background:#fffdf8;border:1px solid #ffd9c9;'
        f'border-radius:12px;resize:vertical;white-space:pre-wrap;">{safe}</textarea>'
        '<div style="font-size:11.5px;color:#8a8a85;margin-top:6px;">'
        '👆 点一下全选，复制后直接粘到小红书发布页（发布前把「常用的 AI」换成具体平台名，比如豆包、DeepSeek，更像真人说话）</div>'
    )


def box(bg, bd, title, color, html):
    return (
        f'<div style="background:{bg};border:1px solid {bd};border-radius:12px;padding:12px 14px;">'
        f'<b style="font-size:13.5px;color:{color};">{title}</b>'
        f'<div style="font-size:12.5px;line-height:1.8;color:#2c2c2a;margin-top:8px;">{html}</div></div>'
    )


COVER_A = (
    '<p class="ct-h">🖼 封面建议 · 3:4 竖图 1080×1440（模板 A）</p>'
    '<div class="ct-body ph">'
    '<b>尺寸固定：竖图 3:4，1080×1440px。</b>信息流里展示面积最大，横图会被压得很小，别用。<br/>'
    '<b>⚠️ 用「模板 A · 真实场景照 + 文字 overlay」或「模板 B 手写笔记」，禁止白底大字报</b>'
    '（2024 起被算法打压，是 0 数据主因）。<br/>'
    '<b>模板 A 做法</b>：拍一张自己的真实场景照——手机举着 AI 对话框的侧拍照 / 工位摊开的笔记本 / '
    '咖啡杯旁的手机屏幕；<b>不用露脸</b>，手部或桌面特写就行。<br/>'
    '主标题压在画面<b>中上部</b>（纵向 1/4 到 1/2 处），⚠️ <b>底部 15%（约 216px）必须留空</b>'
    '（会被笔记标题和点赞栏压住）。<br/>'
    '<b>模板 B 备选</b>：不方便拍照就手写备忘录（如「客户搜不到我？→ 打开 AI 问一句」三行），截图当封面。</div>'
)

# ============ Day 1 · 开篇立人设（场景/共鸣型） ============
D1_POST = """上周五下午，一个做工业轴承的老哥突然发我消息：

「我在豆包里搜咱家名字，怎么一个都搜不到？」

我让他再试了一次，确实没有。

这不是他家产品不行，是 AI 压根不认识他。

你想想，现在多少采购下单前，是先掏手机问 AI「哪家轴承耐造」的？

AI 脑子里没你，客户问一百次也轮不到你。

我第一次帮人测也翻过车——

有家做包装机械的，我以为在行业里挺有名，结果 AI 把人家主打产品说成了上一代型号。

老板看了直皱眉。

所以别等客户来问你「怎么搜不到」，才发现问题是自己没被 AI 记住。

你现在就打开常用的 AI，用客户会问的话问一句：

「XX 行业哪家靠谱？」

看看 AI 提没提你。没提，咱就有的聊了。"""

D1_TOPIC = (
    '<p><b>今天发「立人设 / 真实场景」型内容</b>，核心是用一个<b>具体的人 + 具体的问</b>把抽象概念砸实——'
    '读者看到「工业轴承老哥发来消息」，会立刻代入自己的客户。</p>'
    + '<p class="ct-h">📌 标题 3 选 1（A/B 测试用）</p>'
    + '<div class="ct-body ph"><b>主推：</b>客户在豆包里搜不到我，我当场懵了<br/>'
    '<b>备选 A：</b>别等客户问你「怎么搜不到」，才发现问题<br/>'
    '<b>备选 B：</b>第一次帮人测 AI，我也翻过车<br/>'
    '<span style="color:#8a8a85;">主推那句有画面感、像真事；备选 B 自曝翻车，真人痕迹重、容易引评论。</span></div>'
    + COVER_A
    + '<p class="ct-h">👥 这篇在跟谁说话</p>'
    + '<div class="ct-body ph">① <b>被客户问住的老板</b>：这篇就是他们的嘴替，会转发；<br/>'
    '② <b>做过 SEO 但没碰过 AI 搜索的</b>：第一次意识到「搜不到」和「AI 不提你」不是一回事；<br/>'
    '③ <b>同行</b>：立人设帖最容易涨关注，是冷启动第 1 篇的最佳类型。</div>'
)

D1_TAGS = (
    '<p class="ct-h">🏷️ 话题标签（10 个，直接复制）</p>'
    '<div class="ct-body ph" style="word-break:break-all;">'
    '#GEO #AI搜索 #生成式引擎优化 #B2B营销 #豆包 #DeepSeek #元宝 #中小企业 #品牌曝光 #老板日常'
    '</div>'
    '<div style="font-size:11.5px;color:#8a8a85;margin-top:4px;">'
    '标签结构：2 赛道大词 + 2 专业词 + 3 平台词（豆包/DeepSeek/元宝，每篇最多 3）+ 3 流量词。'
    '本篇偏「老板日常」蹭泛人群。</div>'
    + '<p class="ct-h">💬 互动钩子 · A 类「共鸣 / 场景」</p>'
    + '<div class="ct-body ph">'
    '<b>① 结尾用「你现在就打开测一下」</b>：把读者从「看」变成「做」，做完就有话说。<br/>'
    '<b>② 预埋 3 条评论</b>（发后 10 分钟内）：<br/>'
    '　·「我也是，客户问我为啥搜不到，我才知道 AI 压根不认识我们」<br/>'
    '　·「做汽配的，AI 把我家说成竞品了，心态崩了」<br/>'
    '　·「刚测了，AI 提了同行没提我，求支招」<br/>'
    '<b>③ 连续 3 篇钩子不重复</b>：Day 1 用 A 类，Day 2 换 B 类（二选一）。</div>'
)

D1_ACTION = box(
    "#fff8f0", "#ffcfa8", "📈 今日涨粉动作（30 分钟内做完）", "#b8541a",
    '<p style="margin:0 0 6px;"><b>1. 发布时段：21:00–23:00</b>（图文最高活跃），'
    '<b>每天抖动 30–90 分钟</b>——连续同一时间发会被判脚本。</p>'
    '<p style="margin:0 0 6px;"><b>2. 发完 30 分钟内回评论区</b>：先发预埋 3 条，再回前 5 条真实评论。'
    '<b>发文后 30 分钟互动率决定后面推不推。</b></p>'
    '<p style="margin:0 0 6px;"><b>3. 去评论 3 条同话题笔记</b>：搜「GEO」「AI搜索」「老板日常」'
    '下 24h 热门，写有观点的长评论（2–3 句），不留外链不引导关注。</p>'
    '<p style="margin:0 0 6px;"><b>4. 24h 复盘 3 数</b>：曝光、评论数、主页点击。'
    '立人设帖看<b>主页点击</b>——有人点进来才算立住。</p>'
    '<p style="margin:6px 0 0;font-size:11.5px;color:#8a8a85;">'
    '⚠️ Day 1–5 是重发版（原版 0 数据被判营销号），发布前把正文里的「常用的 AI」换成具体平台名。</p>'
)

# ============ Day 2 · GEO vs SEO（二选一 / 反共识） ============
D2_POST = """昨天有人问我：GEO 是不是就是 SEO 换了个名字割韭菜？

我说是，也不全是。

举个真事。

上个月有个做精密齿轮的厂，SEO 做得挺好，搜「精密齿轮厂家」他排前三。

结果呢，客户不搜了。

现在年轻人直接问 AI：「深圳哪家做精密齿轮靠谱，要能小批量定制」。

AI 张嘴就报了三家，没他。

SEO 管的是「搜索结果里排第几」，拼标题和外链。

GEO 管的是「AI 怎么跟你介绍」，拼你有没有被它当信源。

一个争位置，一个争信任。

最要命的是：AI 给答案，没有第二页。

你排第十，用户还能翻；AI 不提你，用户连翻的机会都没有。

所以别再问「GEO 是不是 SEO」了。

该问的是：你的客户，现在是用搜的，还是用问的？"""

D2_TOPIC = (
    '<p><b>今天发「二选一 / 反共识」型内容</b>，核心是把「GEO 是不是 SEO 换皮」这个高频质疑'
    '先接住，再用一个<b>具体厂家的真事</b>掰开，比干讲定义强十倍。</p>'
    + '<p class="ct-h">📌 标题 3 选 1（A/B 测试用）</p>'
    + '<div class="ct-body ph"><b>主推：</b>SEO 排前三，AI 却不提他，问题出在哪<br/>'
    '<b>备选 A：</b>GEO 是不是 SEO 换皮？我说不是<br/>'
    '<b>备选 B：</b>AI 给答案没有第二页，这事比排名要命<br/>'
    '<span style="color:#8a8a85;">主推有冲突（排前三却没被提），最容易勾人点进来；备选 B 抛出反常识结论。</span></div>'
    + COVER_A
    + '<p class="ct-h">👥 这篇在跟谁说话</p>'
    + '<div class="ct-body ph">① <b>做过 SEO 的老板</b>：发现「排第一也没用」的焦虑点，会收藏；<br/>'
    '② <b>刚听说 GEO 的</b>：用最小例子分清两个概念；<br/>'
    '③ <b>投流人 / 运营</b>：这类对比帖常被转发进群。</div>'
)

D2_TAGS = (
    '<p class="ct-h">🏷️ 话题标签（10 个，直接复制）</p>'
    '<div class="ct-body ph" style="word-break:break-all;">'
    '#GEO #SEO #生成式引擎优化 #搜索营销 #豆包 #Kimi #元宝 #中小企业 #品牌营销 #运营干货'
    '</div>'
    '<div style="font-size:11.5px;color:#8a8a85;margin-top:4px;">'
    '本篇加了 #SEO 蹭存量搜索人群；平台词换 Kimi（每篇最多 3，别全列）。</div>'
    + '<p class="ct-h">💬 互动钩子 · B 类「二选一」</p>'
    + '<div class="ct-body ph">'
    '<b>① 结尾抛二选一</b>：「你的客户，是用搜的，还是用问的？」——逼读者对号入座，评论区自然分化成两派。<br/>'
    '<b>② 预埋 3 条评论</b>：<br/>'
    '　·「我们就是，客户现在直接问 AI，搜索流量掉了三成」<br/>'
    '　·「SEO 还在做，但今年明显感觉 AI 抢了入口」<br/>'
    '　·「小批量定制那句太真实了，我们就是吃这口饭的」<br/>'
    '<b>③ 连续 3 篇不重复</b>：Day 1 用 A 类，Day 2 用 B 类。</div>'
)

D2_ACTION = box(
    "#fff8f0", "#ffcfa8", "📈 今日涨粉动作（30 分钟内做完）", "#b8541a",
    '<p style="margin:0 0 6px;"><b>1. 发布时段：20:30–22:30 间随机</b>（抖动 30–90 分钟）。</p>'
    '<p style="margin:0 0 6px;"><b>2. 二选一钩子的关键在「接住反对意见」</b>：'
    '有人杠「SEO 照样重要」，别删，回一句「对，地基还在，只是入口换了」——争论能拉停㽚时长。</p>'
    '<p style="margin:0 0 6px;"><b>3. 评论 3 条同话题笔记</b>：搜「SEO」「搜索营销」下 24h 热门，'
    '带观点长评，引回流。</p>'
    '<p style="margin:0 0 6px;"><b>4. 24h 复盘</b>：重点看<b>评论数</b>——二选一最容易吵起来，'
    '吵起来 = 推给更多人。若评论冷，下篇把「用搜还是用问」换成更扎心的行业。</p>'
    '<p style="margin:6px 0 0;font-size:11.5px;color:#8a8a85;">Day 2 重发版，发布前把正文「常用的 AI」换成具体平台名。</p>'
)

# ============ Day 3 · GEO 怎么来的（溯源 / 故事） ============
D3_POST = """这词「GEO」不是哪个营销号拍脑袋想出来的。

是 2023 年底，一篇正经学术论文里先用的。

那年我也关注了，但没当回事——

因为当时 AI 张口就编，你敢把它当信息入口吗？没人敢。

转折发生在两件事上。

一是 AI 学会了「先查再答」，还给你列出处；二是它被人塞进了上亿人的手机，成了每天要问的入口。

我妈现在买菜前都先问 AI 今天吃啥——入口下沉到这种程度，企业没法装看不见了。

我自己的体感最明显：

去年我查资料还习惯开搜索，今年一半问题直接丢给 AI 了。

入口换了，玩法就得换。

有人说 GEO 是一波流，我看未必。

当年 SEO 也是从「论文里的一个词」慢慢长成一门生意的。

现在早不早？我只能说，你同行里已经有人开始让 AI 只提自己了。"""

D3_TOPIC = (
    '<p><b>今天发「溯源 / 故事」型内容</b>，核心是给概念一个<b>可信的起源</b>'
    '（2023 年底论文）和一个<b>个人体感转折</b>（去年搜、今年问 AI），比「GEO 是趋势」这类空话有说服力。</p>'
    + '<p class="ct-h">📌 标题 3 选 1（A/B 测试用）</p>'
    + '<div class="ct-body ph"><b>主推：</b>「GEO」这词，不是营销号造的<br/>'
    '<b>备选 A：</b>去年我还用搜索，今年一半问题甩给 AI 了<br/>'
    '<b>备选 B：</b>SEO 当年也是论文里的一个词<br/>'
    '<span style="color:#8a8a85;">主推破除「割韭菜」印象；备选 A 用个人变化勾共鸣。</span></div>'
    + COVER_A
    + '<p class="ct-h">👥 这篇在跟谁说话</p>'
    + '<div class="ct-body ph">① <b>怀疑 GEO 是骗局的人</b>：用论文起源打消顾虑；<br/>'
    '② <b>关注趋势的老板</b>：想判断「现在早不早」；<br/>'
    '③ <b>内容 / 投流从业者</b>：爱转这类「来龙去脉」。</div>'
)

D3_TAGS = (
    '<p class="ct-h">🏷️ 话题标签（10 个，直接复制）</p>'
    '<div class="ct-body ph" style="word-break:break-all;">'
    '#GEO #AI搜索 #生成式引擎优化 #行业观察 #豆包 #DeepSeek #元宝 #中小企业 #趋势 #认知'
    '</div>'
    '<div style="font-size:11.5px;color:#8a8a85;margin-top:4px;">本篇偏「趋势 / 认知」吸泛人群，平台词照旧最多 3 个。</div>'
    + '<p class="ct-h">💬 互动钩子 · D 类「溯源 / 暗示」</p>'
    + '<div class="ct-body ph">'
    '<b>① 结尾留钩子不点破</b>：「你同行里已经有人让 AI 只提自己了」——'
    '暗示威胁感，让读者私信或评论问「怎么做到的」。<br/>'
    '<b>② 预埋 3 条评论</b>：<br/>'
    '　·「2023 年底那篇我也看过，当时觉得离钱太远」<br/>'
    '　·「我们行业 AI 确实开始只推那两三家了」<br/>'
    '　·「求展开，怎么让 AI 只提自己」<br/>'
    '<b>③ 连续 3 篇不重复</b>：Day 2 用 B 类，Day 3 用 D 类。</div>'
)

D3_ACTION = box(
    "#fff8f0", "#ffcfa8", "📈 今日涨粉动作（30 分钟内做完）", "#b8541a",
    '<p style="margin:0 0 6px;"><b>1. 发布时段：21:30–23:00 间随机</b>。</p>'
    '<p style="margin:0 0 6px;"><b>2. 溯源帖的命脉是「私信转化」</b>：'
    '结尾那句暗示会引来私信，当天认真回每一条，能直接转铁粉。</p>'
    '<p style="margin:0 0 6px;"><b>3. 评论 3 条同话题笔记</b>：搜「AI趋势」「行业观察」下 24h 热门。</p>'
    '<p style="margin:0 0 6px;"><b>4. 24h 复盘</b>：看<b>私信数 + 收藏数</b>——溯源帖收藏率高说明被当资料存。</p>'
    '<p style="margin:6px 0 0;font-size:11.5px;color:#8a8a85;">Day 3 重发版，发布前把正文「常用的 AI」换成具体平台名。</p>'
)

# ============ Day 4 · 什么企业适合（自检 / 诊断） ============
D4_POST = """不是所有企业都适合做 GEO，先花三秒自测一下。

你客户下单前，会掏手机问 AI 吗？

比如做装修的，客户会问「老破小怎么改省心」；做机械配件的，会问「哪种轴承耐高温」。

会问，就适合。

还有三类，尤其适合：

一是客户爱「比着买」的，比如建材、仪器，AI 一比你就出局；

二是你有内容家底的，白皮书、案例、参数表，都是 AI 眼里的「证据」；

三是产品名本身就是搜索词，比如「XX 牌减速机」，客户直接搜你名。

我见过最可惜的一家：

做食品机械的，技术其实很硬，但网上除了官网啥都没有。

AI 想提他，都找不着素材。

所以判断标准就一句：

你的客户，在掏钱之前，会不会先问 AI 一句？

会，那 GEO 就是你的机会。"""

D4_TOPIC = (
    '<p><b>今天发「自检 / 诊断」型内容</b>，核心是给读者一个<b>三秒能做的判断动作</b>'
    '（客户会不会问 AI），再给三类具体画像，让读者对号入座。</p>'
    + '<p class="ct-h">📌 标题 3 选 1（A/B 测试用）</p>'
    + '<div class="ct-body ph"><b>主推：</b>不是谁都适合 GEO，先花三秒自测<br/>'
    '<b>备选 A：</b>你的客户，掏钱前会不会先问 AI 一句<br/>'
    '<b>备选 B：</b>食品机械那家，技术硬却搜不到，太可惜<br/>'
    '<span style="color:#8a8a85;">主推给动作、戳中「适不适合我」；备选 B 是具象反例，引共鸣。</span></div>'
    + COVER_A
    + '<p class="ct-h">👥 这篇在跟谁说话</p>'
    + '<div class="ct-body ph">① <b>犹豫要不要做的老板</b>：这篇帮他下定论；<br/>'
    '② <b>「内容家底厚」的企业</b>：发现自己其实占优势；<br/>'
    '③ <b>做建材 / 仪器的</b>：被「AI 一比就出局」戳中。</div>'
)

D4_TAGS = (
    '<p class="ct-h">🏷️ 话题标签（10 个，直接复制）</p>'
    '<div class="ct-body ph" style="word-break:break-all;">'
    '#GEO #AI搜索 #生成式引擎优化 #B2B营销 #豆包 #DeepSeek #元宝 #中小企业 #创业避坑 #品牌营销'
    '</div>'
    '<div style="font-size:11.5px;color:#8a8a85;margin-top:4px;">本篇加 #创业避坑 蹭泛人群；平台词最多 3。</div>'
    + '<p class="ct-h">💬 互动钩子 · C 类「自检 / 诊断」</p>'
    + '<div class="ct-body ph">'
    '<b>① 结尾用诊断句收</b>：「会，那 GEO 就是你的机会」——给结论，读者自动站队「适合 / 不适合」。<br/>'
    '<b>② 预埋 3 条评论</b>：<br/>'
    '　·「我们做仪器的，客户真会问 AI 比参数，赶紧做」<br/>'
    '　·「我们是关系型生意，看来先不急」<br/>'
    '　·「食品机械那家太真实，我们也是技术硬没内容」<br/>'
    '<b>③ 连续 3 篇不重复</b>：Day 3 用 D 类，Day 4 用 C 类。</div>'
)

D4_ACTION = box(
    "#fff8f0", "#ffcfa8", "📈 今日涨粉动作（30 分钟内做完）", "#b8541a",
    '<p style="margin:0 0 6px;"><b>1. 发布时段：20:00–22:00 间随机</b>。</p>'
    '<p style="margin:0 0 6px;"><b>2. 自检帖要「接住两类人」</b>：'
    '说适合的，引导他评论行业；说不适合的，回「先攒内容家底」——两类都留得住。</p>'
    '<p style="margin:0 0 6px;"><b>3. 评论 3 条同话题笔记</b>：搜「中小企业」「创业避坑」下 24h 热门。</p>'
    '<p style="margin:0 0 6px;"><b>4. 24h 复盘</b>：看<b>评论行业集中度</b>——'
    '谁报了行业，谁就是下一篇选题的素材来源。</p>'
    '<p style="margin:6px 0 0;font-size:11.5px;color:#8a8a85;">Day 4 重发版，发布前把正文「常用的 AI」换成具体平台名。</p>'
)

# ============ Day 5 · 什么企业别做（挑战 / 劝退） ============
D5_POST = """说点得罪人的。

这三种企业，我劝你先别碰 GEO。

第一类：客户根本不上网查的。

比如某些纯靠招投标、靠关系跑的生意，AI 提不提你，订单照来。

我见过做政府耗材的，三年没碰过线上，单子照样稳。

你折腾这个干啥。

第二类：产品三个月一换的。

AI 刚记住你，你改版了。刚建的「信任」又得重来，性价比太低。

第三类：想一个月见效的。

GEO 不是投流，今天花明天出单。

它是慢慢让 AI 习惯提你，按季度看才明显。

我有个做定制家具的朋友，前两个月啥动静没有，第三个月突然发现 AI 开始带他名字了。

所以真想做，先问自己：

我这生意，客户到底听 AI 的，还是听人的？

听人的，先把人搞定。"""

D5_TOPIC = (
    '<p><b>今天发「挑战 / 劝退」型内容</b>，核心是<b>敢说反话</b>'
    '（劝别做），反而显真诚、拉信任；用三类具体生意画像 + 一个朋友的真实时间线收尾。</p>'
    + '<p class="ct-h">📌 标题 3 选 1（A/B 测试用）</p>'
    + '<div class="ct-body ph"><b>主推：</b>这三种企业，我劝你先别做 GEO<br/>'
    '<b>备选 A：</b>想一个月见效的，GEO 真不适合你<br/>'
    '<b>备选 B：</b>客户听 AI 还是听人？想清楚再砸钱<br/>'
    '<span style="color:#8a8a85;">主推冲突感最足（劝退=真诚）；备选 B 抛灵魂二选一。</span></div>'
    + COVER_A
    + '<p class="ct-h">👥 这篇在跟谁说话</p>'
    + '<div class="ct-body ph">① <b>被割过韭菜的老板</b>：看到「劝你别做」反而信你；<br/>'
    '② <b>犹豫投入的</b>：帮他把预期拉回「按季度」；<br/>'
    '③ <b>同行 / 服务商</b>：这类反共识帖转发率高。</div>'
)

D5_TAGS = (
    '<p class="ct-h">🏷️ 话题标签（10 个，直接复制）</p>'
    '<div class="ct-body ph" style="word-break:break-all;">'
    '#GEO #AI搜索 #生成式引擎优化 #B2B营销 #豆包 #DeepSeek #元宝 #中小企业 #创业避坑 #认知'
    '</div>'
    '<div style="font-size:11.5px;color:#8a8a85;margin-top:4px;">本篇偏「创业避坑 / 认知」，平台词最多 3。</div>'
    + '<p class="ct-h">💬 互动钩子 · E 类「挑战 / 劝退」</p>'
    + '<div class="ct-body ph">'
    '<b>① 结尾用灵魂二选一</b>：「客户听 AI 的，还是听人的？」——逼读者表态，评论区自然站队。<br/>'
    '<b>② 预埋 3 条评论</b>：<br/>'
    '　·「我们就是关系型，看完果断先不做」<br/>'
    '　·「定制家具那个时间点太真实，第三个月才起量」<br/>'
    '　·「终于有人说别盲目做了，前面看的号都在催我砸钱」<br/>'
    '<b>③ 连续 3 篇不重复</b>：Day 4 用 C 类，Day 5 用 E 类（Day 6 也是 E，但隔了一篇，不连续）。</div>'
)

D5_ACTION = box(
    "#fff8f0", "#ffcfa8", "📈 今日涨粉动作（30 分钟内做完）", "#b8541a",
    '<p style="margin:0 0 6px;"><b>1. 发布时段：21:00–22:30 间随机</b>。</p>'
    '<p style="margin:0 0 6px;"><b>2. 劝退帖最怕「被当成凡尔赛」</b>：'
    '认真回每一条「我是不是那三类」，显真诚，信任就来了。</p>'
    '<p style="margin:0 0 6px;"><b>3. 评论 3 条同话题笔记</b>：搜「创业避坑」「中小企业」下 24h 热门。</p>'
    '<p style="margin:0 0 6px;"><b>4. 24h 复盘</b>：看<b>收藏 + 转发</b>——反共识内容靠这两项数破圈。</p>'
    '<p style="margin:6px 0 0;font-size:11.5px;color:#8a8a85;">Day 5 重发版，发布前把正文「常用的 AI」换成具体平台名。</p>'
)

DAYS = [
    (1, "2026-09-02", "小红书 · GEO 日更 Day 1｜客户在豆包里搜不到我", D1_POST, D1_TOPIC, D1_TAGS, D1_ACTION),
    (2, "2026-09-03", "小红书 · GEO 日更 Day 2｜SEO 排前三，AI 却不提他", D2_POST, D2_TOPIC, D2_TAGS, D2_ACTION),
    (3, "2026-09-04", "小红书 · GEO 日更 Day 3｜「GEO」不是营销号造的词", D3_POST, D3_TOPIC, D3_TAGS, D3_ACTION),
    (4, "2026-09-05", "小红书 · GEO 日更 Day 4｜不是谁都适合 GEO，先自测", D4_POST, D4_TOPIC, D4_TAGS, D4_ACTION),
    (5, "2026-09-06", "小红书 · GEO 日更 Day 5｜这三种企业先别做 GEO", D5_POST, D5_TOPIC, D5_TAGS, D5_ACTION),
]

ok = True
for day, date, tag, post, topic, tags, action in DAYS:
    n = len(post.replace("\n", ""))
    in_range = 280 <= n <= 380
    ok = ok and in_range
    entry = {
        "date": date,
        "day": day,
        "tag": tag,
        "blocks": [
            {"h": f"🎯 Day {day} · 阶段目标 1000 粉", "body": box(
                "#eef7ff", "#9ec9ee", f"🎯 Day {day} · 阶段目标 1000 粉", "#0a3d62",
                f'<p style="margin:0 0 4px;"><b>本篇是「易收录」重发版（2026-09-07 改造）。</b>'
                f'原版因结构雷同 + 白底大字报被判营销号、0 数据。'
                f'新版换切入点、压到 {n} 字、加真实场景封面与具象细节。</p>'
                f'<p style="margin:0 0 4px;">· <b>本篇钩子类型</b>：与前后篇不重复（连续 3 篇不重样）。</p>'
                f'<p style="margin:6px 0 0;font-size:11.5px;color:#5f5e5a;">'
                f'发布前把正文「常用的 AI」换成具体平台名（豆包/DeepSeek 等）。</p>')},
            {"h": "📕 今日选题", "body": topic},
            {"h": "✍️ 正文文案（可直接复制）", "body": ta_box(post)},
            {"h": "🏷️ 标签 & 💬 互动钩子", "body": tags},
            {"h": "📈 今日涨粉动作", "body": action},
        ],
    }
    out = HERE / f"day{day:02d}.json"
    out.write_text(json.dumps(entry, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"Day {day}: 正文 {n} 字 {'✅' if in_range else '❌ 超范围'} -> {out.name}")

print("全部通过" if ok else "⚠️ 有篇超出 280–380，请调整")
