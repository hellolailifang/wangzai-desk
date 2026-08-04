# -*- coding: utf-8 -*-
"""生成 AI 学习模块的每日内容，注入 content.js，替换原 reading 模块。"""
import json, io, os

# ---------- 通用 SVG 样式 ----------
SVG_HEAD = ('<svg viewBox="0 0 600 230" width="100%" style="max-width:560px;height:auto;'
            'display:block;margin:10px auto;border-radius:12px;background:#f4fbff;" '
            'xmlns="http://www.w3.org/2000/svg">')
SVG_HEAD_T = ('<svg viewBox="0 0 600 210" width="100%" style="max-width:560px;height:auto;'
              'display:block;margin:10px auto;border-radius:12px;background:#f4fbff;" '
              'xmlns="http://www.w3.org/2000/svg">')

def box(x, y, w, h, fill, stroke, t, fs=15, tc="#0a3d62"):
    return (f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="12" fill="{fill}" '
            f'stroke="{stroke}" stroke-width="2"/>'
            f'<text x="{x+w/2}" y="{y+h/2+5}" text-anchor="middle" font-size="{fs}" '
            f'font-weight="700" fill="{tc}">{t}</text>')

def arrow(x1, y1, x2, y2, color="#1b6ca8"):
    return (f'<line x1="{x1}" y1="{y1}" x2="{x2}" y2="{y2}" stroke="{color}" '
            f'stroke-width="3" marker-end="url(#ah)"/>')

DEF_ARROW = ('<defs><marker id="ah" markerWidth="10" markerHeight="10" refX="7" refY="3" '
             'orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#1b6ca8"/></marker>'
             '<marker id="ag" markerWidth="10" markerHeight="10" refX="7" refY="3" '
             'orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#e76f51"/></marker></defs>')

# ============ 各课图解 ============
svg_l1 = (SVG_HEAD + DEF_ARROW +
    '<rect x="14" y="14" width="572" height="202" rx="14" fill="#eaf6fb" stroke="#48cae4" stroke-width="2"/>'
    '<text x="300" y="46" text-anchor="middle" font-size="18" font-weight="700" fill="#0a3d62">人工智能 Artificial Intelligence</text>'
    '<rect x="70" y="62" width="430" height="118" rx="12" fill="#d6effa" stroke="#1b6ca8" stroke-width="2"/>'
    '<text x="285" y="94" text-anchor="middle" font-size="15" font-weight="700" fill="#0a3d62">机器学习 Machine Learning</text>'
    '<rect x="140" y="110" width="290" height="52" rx="10" fill="#bde0fe" stroke="#0a3d62" stroke-width="2"/>'
    '<text x="285" y="142" text-anchor="middle" font-size="14" font-weight="700" fill="#0a3d62">深度学习 Deep Learning</text>'
    '<rect x="508" y="150" width="80" height="48" rx="10" fill="#fff" stroke="#adb5bd" stroke-width="2"/>'
    '<text x="548" y="178" text-anchor="middle" font-size="12" fill="#495057">规则系统</text>'
    '<text x="300" y="206" text-anchor="middle" font-size="12" fill="#1b6ca8">AI 是大帽子；ML 让机器从数据学规律；DL 用神经网络学更复杂模式</text>'
    '</svg>')

svg_l2 = (SVG_HEAD_T + DEF_ARROW +
    box(20, 80, 130, 56, "#d6effa", "#1b6ca8", "数据·清洗") +
    arrow(150, 108, 200, 108) +
    box(200, 80, 150, 56, "#bde0fe", "#0a3d62", "训练模型") +
    arrow(350, 108, 400, 108) +
    box(400, 80, 150, 56, "#d6effa", "#1b6ca8", "预测·推理") +
    arrow(475, 136, 275, 168, "#e76f51") +
    '<text x="275" y="190" text-anchor="middle" font-size="12" fill="#e76f51">用测试集评估效果，不好就回头调模型</text>'
    '<text x="300" y="44" text-anchor="middle" font-size="14" font-weight="700" fill="#0a3d62">机器学习三步闭环：给数据 → 训模型 → 拿去用，再复盘</text>'
    '</svg>')

# 神经网络
nodes = []
def nn_layer(x, ys, r=14):
    s = ''
    for y in ys:
        nodes.append((x, y))
        s += f'<circle cx="{x}" cy="{y}" r="{r}" fill="#bde0fe" stroke="#0a3d62" stroke-width="2"/>'
    return s
nn_lines = ''
def nn_connect(x1, ys1, x2, ys2):
    s = ''
    for y1 in ys1:
        for y2 in ys2:
            s += f'<line x1="{x1}" y1="{y1}" x2="{x2}" y2="{y2}" stroke="#90caf9" stroke-width="1.5"/>'
    return s
l_in = [70, 110, 150]
l_h1 = [50, 90, 130, 170]
l_h2 = [50, 90, 130, 170]
l_out = [80, 140]
svg_l3 = (SVG_HEAD + DEF_ARROW +
    '<text x="300" y="30" text-anchor="middle" font-size="14" font-weight="700" fill="#0a3d62">神经网络：一层层“神经元”把输入变成输出</text>' +
    nn_connect(80, l_in, 230, l_h1) + nn_connect(230, l_h1, 380, l_h2) + nn_connect(380, l_h2, 530, l_out) +
    nn_layer(80, l_in) + nn_layer(230, l_h1) + nn_layer(380, l_h2) + nn_layer(530, l_out) +
    '<text x="80" y="200" text-anchor="middle" font-size="12" fill="#495057">输入层</text>'
    '<text x="230" y="200" text-anchor="middle" font-size="12" fill="#495057">隐藏层</text>'
    '<text x="380" y="200" text-anchor="middle" font-size="12" fill="#495057">隐藏层</text>'
    '<text x="530" y="200" text-anchor="middle" font-size="12" fill="#495057">输出层</text>'
    '</svg>')

svg_l4 = (SVG_HEAD_T + DEF_ARROW +
    box(20, 80, 110, 56, "#d6effa", "#1b6ca8", "文本输入") +
    arrow(130, 108, 175, 108) +
    box(175, 80, 120, 56, "#bde0fe", "#0a3d62", "Token·向量") +
    arrow(295, 108, 340, 108) +
    box(340, 70, 130, 76, "#ffd6a5", "#e76f51", "Transformer", 14) +
    arrow(470, 108, 510, 108) +
    box(510, 80, 70, 56, "#d6effa", "#1b6ca8", "生成") +
    '<text x="300" y="44" text-anchor="middle" font-size="13" font-weight="700" fill="#0a3d62">大模型先把文字切成 token，再用注意力“读懂”关系，逐字生成回答</text>'
    '<text x="300" y="190" text-anchor="middle" font-size="12" fill="#1b6ca8">训练分两步：海量文本“预训练”打底 + 任务“微调/对齐”定型</text>'
    '</svg>')

svg_l5 = (SVG_HEAD + DEF_ARROW +
    '<circle cx="300" cy="115" r="52" fill="#bde0fe" stroke="#0a3d62" stroke-width="2"/>'
    '<text x="300" y="110" text-anchor="middle" font-size="13" font-weight="700" fill="#0a3d62">生成式</text>'
    '<text x="300" y="128" text-anchor="middle" font-size="13" font-weight="700" fill="#0a3d62">AI</text>' +
    arrow(352, 100, 420, 70) + box(420, 50, 150, 44, "#d6effa", "#1b6ca8", "文本 文章/代码/对话") +
    arrow(352, 130, 420, 150) + box(420, 130, 150, 44, "#d6effa", "#1b6ca8", "图像 绘画/设计") +
    arrow(248, 100, 180, 70, "#1b6ca8") + box(30, 50, 150, 44, "#d6effa", "#1b6ca8", "音频 语音/音乐") +
    arrow(248, 130, 180, 150, "#1b6ca8") + box(30, 130, 150, 44, "#d6effa", "#1b6ca8", "视频 生成/剪辑") +
    '<text x="300" y="206" text-anchor="middle" font-size="12" fill="#1b6ca8">同一个大模型，能跨文字、图像、声音、视频多种模态“创作”</text>'
    '</svg>')

svg_l6 = (SVG_HEAD_T + DEF_ARROW +
    # 左：烂提示
    '<rect x="20" y="40" width="255" height="120" rx="12" fill="#fff" stroke="#adb5bd" stroke-width="2"/>'
    '<text x="147" y="66" text-anchor="middle" font-size="13" font-weight="700" fill="#e76f51">❌ 模糊提示</text>'
    '<text x="147" y="96" text-anchor="middle" font-size="13" fill="#495057">“帮我写点东西”</text>'
    '<text x="147" y="128" text-anchor="middle" font-size="12" fill="#868e96">→ 结果空泛、跑题</text>'
    # 右：好提示
    '<rect x="325" y="40" width="255" height="120" rx="12" fill="#fff" stroke="#1b6ca8" stroke-width="2"/>'
    '<text x="452" y="66" text-anchor="middle" font-size="13" font-weight="700" fill="#1b6ca8">✅ 结构化提示</text>'
    '<text x="452" y="92" text-anchor="middle" font-size="12" fill="#0a3d62">角色＋任务＋约束＋示例</text>'
    '<text x="452" y="114" text-anchor="middle" font-size="12" fill="#1b6ca8">→ 聚焦、可控、好用</text>'
    '<text x="300" y="190" text-anchor="middle" font-size="12" fill="#1b6ca8">把需求说清楚，AI 的产出质量天差地别</text>'
    '</svg>')

svg_l7 = (SVG_HEAD + DEF_ARROW +
    '<circle cx="300" cy="115" r="46" fill="#bde0fe" stroke="#0a3d62" stroke-width="2"/>'
    '<text x="300" y="111" text-anchor="middle" font-size="12" font-weight="700" fill="#0a3d62">大模型</text>'
    '<text x="300" y="128" text-anchor="middle" font-size="11" fill="#0a3d62">大脑</text>' +
    # 环形 5 节点
    box(300, 18, 110, 40, "#fff", "#1b6ca8", "① 感知") +
    box(470, 95, 110, 40, "#fff", "#1b6ca8", "② 规划") +
    box(390, 185, 110, 40, "#fff", "#1b6ca8", "③ 行动") +
    box(110, 185, 110, 40, "#fff", "#1b6ca8", "④ 用工具") +
    box(30, 95, 110, 40, "#fff", "#1b6ca8", "⑤ 记忆") +
    arrow(410, 38, 478, 95, "#1b6ca8") +
    arrow(580, 135, 540, 185, "#1b6ca8") +
    arrow(390, 225, 220, 205, "#1b6ca8") +
    arrow(110, 135, 140, 185, "#1b6ca8") +
    arrow(140, 95, 300, 58, "#1b6ca8") +
    '<text x="300" y="206" text-anchor="middle" font-size="12" fill="#1b6ca8">Agent 自己转圈：看懂环境→想步骤→动手→调工具→记住，循环直到完成</text>'
    '</svg>')

# ============ 内容数据 ============
AI = [
 {
  "title": "什么是人工智能：从规则到学习",
  "tag": "第1天 · AI 入门",
  "blocks": [
    {"h": "💡 今日学习提示",
     "body": "<p>第 1 天先建立「全局地图」：不用急着懂算法，先把 AI / 机器学习 / 深度学习 三者的包含关系记牢。后面 6 天都是在这张地图上往下钻。</p>"},
    {"h": "🖼️ 一图看懂 AI 是什么",
     "body": svg_l1 + "<p>最外层是<b>人工智能（AI）</b>——让机器表现出「像人一样智能」行为的大目标；中间层<b>机器学习（ML）</b>是实现 AI 的主流路径：不写死规则，而是让机器从数据里自己找规律；最内层<b>深度学习（DL）</b>是 ML 的一个分支，用「神经网络」去学特别复杂的模式（比如认图、听懂话）。</p>"},
    {"h": "📖 图文讲解：两条路线",
     "body": "<p>① <b>规则系统</b>（右上角灰框）：人把「如果…就…」一条条写死，比如早期垃圾邮件过滤器。好处是可解释，坏处是一碰到没写过的情形就傻了。</p><p>② <b>机器学习</b>：人不写规则，只给「大量例子」，机器自己归纳规律。今天你用的人脸解锁、短视频推荐，背后都是 ML。一句话记忆：<b>规则靠人写，学习靠数据喂。</b></p>"},
    {"h": "🏢 相关企业：商汤科技 & 百度",
     "body": "<p><b>商汤科技（SenseTime）</b>：国内计算机视觉龙头，把「看得懂图像」的 AI 用到手机、汽车、城市安防。它证明了中国公司能在感知智能这条赛道站到世界前列。</p><p><b>百度（Baidu）</b>：最早 All in AI 的国内大厂，自研「文心」大模型与飞桨深度学习框架，把 AI 能力做成云上工具，供中小企业直接调用。</p><p>👉 看点：一家擅长「视觉」，一家擅长「平台+大模型」，正好对应 AI 的两类打法。</p>"},
    {"h": "🛠️ 动手实践",
     "body": "<p>打开手机相册的「搜图」（按物体/地点搜照片），它就是视觉 AI。今天试着搜一个词（如「猫」「海边」），感受一下机器「看懂图」的能力，并想想它背后是规则还是学习。</p>"}
  ]
 },
 {
  "title": "机器学习是怎么「学」的",
  "tag": "第2天 · 机器学习",
  "blocks": [
    {"h": "💡 今日学习提示",
     "body": "<p>记住一句万能话：<b>机器学习 = 数据 + 模型 + 评估</b>。今天重点理解「为什么要用测试集」，这是新手最容易踩的坑。</p>"},
    {"h": "🖼️ 机器学习三步闭环",
     "body": svg_l2 + "<p>把「数据」喂给算法，训出一个<b>模型</b>；模型对没见过的新数据做<b>预测</b>；再用<b>测试集</b>（训练时没用过的数据）评估准不准。不准就回头调，如此循环。</p>"},
    {"h": "📖 图文讲解：过拟合与泛化",
     "body": "<p>如果模型把<b>训练数据背得滚瓜烂熟</b>、但碰到新题就翻车，叫<b>过拟合</b>——就像死记硬背押题卷、真考试就废。所以我们一定要用「没见过的题」（测试集）来考它。</p><p>好模型的标准是<b>泛化</b>：在陌生数据上也稳。这跟人学习一模一样——能举一反三，才算真学会。</p>"},
    {"h": "🏢 相关企业：第四范式 & 华为",
     "body": "<p><b>第四范式（4Paradigm）</b>：主打「企业级机器学习平台」，把建模、训练、上线全流程打包，让银行、零售等传统企业也能用 AI 做风控、推荐，而不必养一支算法团队。</p><p><b>华为</b>：用「昇腾」AI 芯片 + 「盘古」大模型，走「算力+模型」双底座路线，重点服务工业、气象、政务等大宗场景。</p><p>👉 看点：一家卖「平台/方法论」，一家卖「算力+大模型」，是 ML 落地中国的两种关键供给。</p>"},
    {"h": "🛠️ 动手实践",
     "body": "<p>用 Excel 随便造 20 行「身高→体重」数据，画散点图加一条趋势线。你刚做的，就是最简单的「监督学习」——从例子里找出输入到输出的映射。</p>"}
  ]
 },
 {
  "title": "深度学习与神经网络",
  "tag": "第3天 · 深度学习",
  "blocks": [
    {"h": "💡 今日学习提示",
     "body": "<p>不用推导公式。今天只要建立直觉：<b>神经网络 = 很多层简单的计算叠加</b>，叠得越深，能表达的模式越复杂。</p>"},
    {"h": "🖼️ 神经网络长什么样",
     "body": svg_l3 + "<p>左边<b>输入层</b>接收原始信号（如一个像素、一个词）；中间<b>隐藏层</b>一层层抽取特征——浅层认边缘，中层认部件，深层认整体；右边<b>输出层</b>给出结论（是猫/不是猫）。层与层之间全连接，权重就是「该怎么组合」的答案。</p>"},
    {"h": "📖 图文讲解：为什么「深」有用",
     "body": "<p>单层网络表达能力有限；把多层叠起来，就能用简单变换组合出极复杂的函数。2012 年深度学习引爆图像识别，关键就是：<b>更深的网络 + 海量数据 + GPU 算力</b>三者凑齐。</p><p>代价是「黑箱」——我们知道它答得对，却难说清每一层到底在想什么。这正是可解释性研究要解决的。</p>"},
    {"h": "🏢 相关企业：英伟达 NVIDIA & 寒武纪",
     "body": "<p><b>英伟达（NVIDIA）</b>：GPU 是训练深度学习不可或缺的算力心脏，其 CUDA 生态几乎成了行业标配，是这一轮 AI 浪潮最大的「卖铲人」。</p><p><b>寒武纪（Cambricon）</b>：国产 AI 芯片代表，专攻云端/边缘的 AI 加速，是「算力自主」版图里的关键一环。</p><p>👉 看点：深度学习火不火，先看「卖铲子」的芯片厂——它们处在整条产业链的咽喉位置。</p>"},
    {"h": "🛠️ 动手实践",
     "body": "<p>在手机 App「Google 猜画小歌 / 你画我猜」里随便画个物体让 AI 猜。感受一下：它并不需要你画得多像，只要关键特征被网络捕捉到就能认出——这就是特征学习的妙处。</p>"}
  ]
 },
 {
  "title": "大语言模型 LLM 与 Transformer",
  "tag": "第4天 · 大模型",
  "blocks": [
    {"h": "💡 今日学习提示",
     "body": "<p>今天的关键词是 <b>Transformer / 注意力 / 预训练</b>。记住：ChatGPT 这类产品，本质是一个「被喂了全互联网文本、学会预测下一个词」的超大型神经网络。</p>"},
    {"h": "🖼️ 大模型怎么读文字",
     "body": svg_l4 + "<p>文字先被切成 <b>Token</b>（词或字），变成数字向量（Embedding）；<b>Transformer 的自注意力机制</b>让每个词都能「看」上下文里相关的词；最后模型一个字一个字地<b>生成</b>回答。</p>"},
    {"h": "📖 图文讲解：预训练与微调",
     "body": "<p>① <b>预训练</b>：在海量文本上练「接话」的基本功，学到语法、常识、世界知识。② <b>微调 / 对齐</b>：再用人工标注的小数据，把模型调成「有用、诚实、安全」。</p><p>为什么大模型啥都能聊？因为它在预训练阶段「读」过了人类绝大部分公开文字，相当于一个读了无数本书的超级通才。它的局限也来自训练数据——没见过的，它就会「一本正经地编」。</p>"},
    {"h": "🏢 相关企业：OpenAI & 阿里通义",
     "body": "<p><b>OpenAI</b>：GPT 系列的缔造者，把 LLM 推向大众，定义了「对话式 AI」的产品形态，也带动了全球大模型军备竞赛。</p><p><b>阿里「通义千问（Qwen）」</b>：国内开源大模型的代表之一，把能力强、可私有部署的模型开放出来，降低了中小企业用大模型的门槛。</p><p>👉 看点：一家定义范式，一家推动「开源+自主可控」，分别代表闭源领跑与开放生态两种路线。</p>"},
    {"h": "🛠️ 动手实践",
     "body": "<p>让同一个大模型连续做三件事：①翻译一句话 ②把它改成诗 ③解释刚才的翻译为什么对。你会直观感受到「一个模型，多面能力」——这正是 LLM 的魅力。</p>"}
  ]
 },
 {
  "title": "生成式 AI 与多模态",
  "tag": "第5天 · 多模态",
  "blocks": [
    {"h": "💡 今日学习提示",
     "body": "<p>今天拓展「AI 能创作什么」。记住一个词：<b>多模态</b>——同一套 AI 能力，可以跨越文字、图像、声音、视频。</p>"},
    {"h": "🖼️ 一个中心，四种输出",
     "body": svg_l5 + "<p>生成式 AI 的核心是「根据指令生成新内容」。过去一个模型只做一件事，现在的大模型能<b>跨模态</b>：你用文字下指令，它产出图、文、音、视频。</p>"},
    {"h": "📖 图文讲解：扩散模型与跨模态",
     "body": "<p>文生图大多靠<b>扩散模型</b>：从一团噪声开始，一步步「去噪」逼近你描述的画面。跨模态的诀窍是「对齐」——把文字、图像塞进同一个语义空间，于是「猫」这个词和猫的图片能互相找到。</p><p>落到产品上就是：一句话出海报、一段描述出短片。创作的门槛被砍到历史最低。</p>"},
    {"h": "🏢 相关企业：字节跳动 & 微软",
     "body": "<p><b>字节跳动</b>：旗下「豆包」对话、「即梦」文生图/视频，把生成式 AI 直接嵌进抖音系的亿级流量产品，验证「AI 原生」内容创作的可行性。</p><p><b>微软（Microsoft）</b>：把 Copilot 植入 Office / Windows，让 AI 帮你写文档、做 PPT、汇总邮件，是「AI 融入工作流」的全球样板。</p><p>👉 看点：一家把 AI 用在「内容消费」，一家用在「办公生产」，覆盖生成式 AI 的两大落地战场。</p>"},
    {"h": "🛠️ 动手实践",
     "body": "<p>用任意文生图工具，输入同一句提示「赛博朋克风格的深圳夜晚」生成一张图；再试着加/减一个词（如「下雨」「霓虹」），观察画面如何因指令变化——这就是多模态创作的「可控性」。</p>"}
  ]
 },
 {
  "title": "提示词工程：怎么把 AI 用好",
  "tag": "第6天 · 提示词",
  "blocks": [
    {"h": "💡 今日学习提示",
     "body": "<p>今天学「和 AI 对话的手艺」。记住公式：<b>好答案 = 清晰角色 + 明确任务 + 必要约束 + 参考示例</b>。</p>"},
    {"h": "🖼️ 同样的 AI，不同的问法",
     "body": svg_l6 + "<p>左边「帮我写点东西」太模糊，AI 只能瞎猜；右边把<b>角色、任务、格式、边界</b>都给清，产出立刻聚焦好用。模型没变，变的是你的提问。</p>"},
    {"h": "📖 图文讲解：几个实用技巧",
     "body": "<p>① <b>给角色</b>：＂你是有 10 年经验的健身教练…＂能框定语气与专业度。② <b>拆步骤</b>：让它「先列提纲再写」，比直接要成品更稳。③ <b>上示例</b>：给 1–2 个样板，它马上懂你要的格式。④ <b>设边界</b>：限定字数、风格、不能做什么。</p><p>进阶还能用<b>思维链（CoT）</b>：让模型「一步步想」，复杂推理题准确率明显提升。</p>"},
    {"h": "🏢 相关企业：Anthropic & 月之暗面",
     "body": "<p><b>Anthropic</b>：Claude 的打造者，提出 <b>Constitutional AI</b>，强调「安全、可控、可解释」，在长文本与遵循指令上口碑突出，是提示词「对齐」研究的领头羊。</p><p><b>月之暗面（Moonshot / Kimi）</b>：以「超长上下文」出圈，能一次读几十万字再回答，把「给足材料再问」变成了顺手的事。</p><p>👉 看点：一家定义「安全对齐」标准，一家把「长上下文」做成差异点——都是围绕「如何更好地驾驭大模型」。</p>"},
    {"h": "🛠️ 动手实践",
     "body": "<p>挑一件你今天要写的事（周报/朋友圈/邮件），先用一句话模糊地让 AI 写，再用「角色+任务+格式+示例」重写一遍提示。对比两份结果，把让你满意的那版提示存进备忘录，以后复用。</p>"}
  ]
 },
 {
  "title": "AI Agent 智能体：会自己干活的 AI",
  "tag": "第7天 · 智能体",
  "blocks": [
    {"h": "💡 今日学习提示",
     "body": "<p>最后一天看到「AI 的终点形态」：从「你问它答」升级成「你下目标，它自己跑完」。记住五个字：<b>感知·规划·行动·工具·记忆</b>。</p>"},
    {"h": "🖼️ Agent 是怎么转圈的",
     "body": svg_l7 + "<p>智能体以<b>大模型为大脑</b>：先<b>感知</b>环境与目标，<b>规划</b>出步骤，<b>行动</b>并执行，过程中<b>调用工具</b>（搜索、写代码、发邮件），再把结果写进<b>记忆</b>，循环直到任务完成。</p>"},
    {"h": "📖 图文讲解：Agent 与「普通对话」的区别",
     "body": "<p>普通大模型是「被动答题机」；<b>Agent 是能主动闭环的执行者</b>：它会自己决定下一步、自己查资料、自己调用软件，而不是等你一步步喂指令。</p><p>关键能力有三：<b>规划</b>（把大目标拆小）、<b>工具使用</b>（会联网/会跑代码）、<b>记忆</b>（跨步骤不忘事）。这三者凑齐，AI 才从「参谋」变成「员工」。</p>"},
    {"h": "🏢 相关企业：腾讯 & Google",
     "body": "<p><b>腾讯</b>：自研「混元」大模型，并把 Agent 能力嵌进微信、企点等场景，做「能调用业务系统、帮人跑流程」的智能体，是国内「Agent+超级 App」的典型实践。</p><p><b>Google</b>：以 Gemini 多模态模型为底座，推出 Project Astra / 各类 Agent 框架，探索「能看能听、自主完成多步任务」的下一代助手。</p><p>👉 看点：一家把 Agent 接进国民级应用，一家用全栈多模态押注「通用智能体」，代表中美两条演进路径。</p>"},
    {"h": "🛠️ 动手实践",
     "body": "<p>试一个带「工具」的 Agent（如能联网/能跑代码的助手），给它一个真实小目标：＂帮我查本周深圳天气，挑一个不下雨的晚上，写一句约饭文案＂。看它如何自己分解、查数据、产出——这就是 Agent 的工作方式。</p>"}
  ]
 }
]

# ============ 注入 content.js ============
ROOT = os.path.dirname(os.path.abspath(__file__))
path = os.path.join(ROOT, "content.js")
with io.open(path, "r", encoding="utf-8") as f:
    text = f.read()

start = text.index('  "reading": [')
end = text.index('  "trade": [')
new_block = ('  "ai": ' + json.dumps(AI, ensure_ascii=False, indent=2) + ',\n\n')
text = text[:start] + new_block + text[end:]

with io.open(path, "w", encoding="utf-8") as f:
    f.write(text)

print("OK: 已用 CONTENT.ai 替换 reading，共 %d 课。" % len(AI))
