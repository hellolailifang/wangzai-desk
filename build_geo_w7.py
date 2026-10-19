#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# build_geo_w7.py — 2026-10-19（周一）手动周更：旺仔指令「更新个人工作台」
# 替换 CONTENT.geo（客户开发）与 CONTENT.overseas（开发方向）Day1-Day7 为 7 个新赛道；
# Day8-Day14 保留不动。全部企业官网 URL 已于 2026-10-19 逐个核实（curl + 搜索）。
import json, re, shutil, subprocess, sys, os

REPO = "/Users/lailifang/WorkBuddy/wangzai-desk-local"
NODE = "/Users/lailifang/.workbuddy/binaries/node/versions/22.22.2/bin/node"

OV_HEADS = ["🎯 今天怎么打这个方向", "🏭 行业画像 · 为什么最该做 GEO",
            "⚠️ 行业痛点 · 谈单前先搞懂客户在怕什么", "🧭 买家决策链路 · GEO 命中场景",
            "⚡ GEO 切入点（4 步，写深）", "📍 客户开发地址（去哪找买家 / 工厂）",
            "🤝 销售抓手（谈单可直接用）"]

def co_line(tier, name, text):
    if tier == "hd":
        return "<b>🏢 头部 · %s</b> — %s" % (name, text)
    return "<b>⭐ 腰部 · %s</b> — %s" % (name, text)

# ============================================================
# Day1 半导体设备与核心零部件
# ============================================================
T1 = {
"name": "半导体设备与核心零部件", "short": "半导体",
"ov": [
"""今天先打「半导体设备与核心零部件」——AI 搜索热度最高的制造业赛道之一，海外 fab 采购与工艺工程师天天在 ChatGPT 里问「Chinese semiconductor equipment suppliers」。先把 llms.txt + Schema 铺起来，再去「开发地址」捞零部件/材料厂。Day1–Day7 可点，前后方向一目了然。""",
"""你（维卓 GEO 销售，客户群=中国出海制造企业；GEO 为主，SEO/独立站为辅）。下面这个方向，最该推 GEO 👇<br><br>中国半导体设备与零部件正处在「国产替代 + 出海验证」双周期：刻蚀、清洗、薄膜设备追赶国际大厂，零部件、靶材、气体系统打入全球供应链。海外晶圆厂、设备厂的采购与工艺工程师在 ChatGPT/Perplexity 问「semiconductor equipment parts supplier China」「sputtering target manufacturer」时，答案常被美日韩企业与英文目录占据，中国厂商的英文技术内容普遍单薄——这就是 GEO 的空位。适合 GEO 的原因：① 技术参数密集（精度、洁净度、认证），AI 最爱引用结构化参数；② 认证门槛极高（SEMI、ISO、客户稽核），是硬证据；③ 买家是工程师/采购，决策链专业且长，内容被反复检索。""",
"""① 买家在 ChatGPT 搜「semiconductor precision parts manufacturer China」「UHP gas delivery system supplier」时，答案多为美日韩厂商与 Thomasnet 类目录；国内零部件厂英文站大多停留在「公司简介 + 产品列表」，没有可被 AI 引用的工艺参数页。<br>
② 技术语言不通：厂内人人懂纳米级精度、氦检漏、SEMI 标准，官网却只有「技术领先、质量可靠」，FAQ、白皮书、工艺边界说明一概没有，AI 没有「硬证据」可引。<br>
③ 客户集中度高（大设备厂/大 fab），销售不敢高调，成功案例、服务客户类型都不写，海外新客户搜不到任何第三方佐证。<br>
④ 出海刚起步：SEMICON 展会、LinkedIn 英文内容是少数触点，官网英文版更新慢、认证证书散在 PDF 里，AI 抓不到。""",
"""海外采购工程师 / 供应商质量（SQE）在「找供应商」前的典型研究路径（每一步都是 AI 命中场景）：<br>
1. <b>立项筛名单</b>：搜「semiconductor equipment components supplier China」「top Chinese sputtering target manufacturers」→ 要短名单；<br>
2. <b>比参数</b>：搜「UHP gas line surface roughness requirement」「sputtering target purity 5N vs 6N」→ 比纯度/精度/洁净度；<br>
3. <b>查认证</b>：搜「SEMI S2 certified equipment parts supplier」→ 认证是硬门槛；<br>
4. <b>找深度资料</b>：搜「quartz parts for etch chamber supplier」「gas delivery panel manufacturer」→ 要看案例与工艺细节。<br>
<b>这类行业为什么最该做 GEO</b>：技术门槛高、参数标准化、买家是工程师/采购、决策周期长——AI 在每一步都参与，且答案稳定可被反复引用。""",
"""<b style="display:block;margin:4px 0 2px;">① 技术适配 · 让 AI 读得懂、读得动</b>
· 根目录放 <b>llms.txt</b>：用大白话告诉 GPT/Claude/Perplexity 你的核心工艺（精密机加/表面处理/焊接/超高纯管阀件）、材料体系、目标行业、哪些页面可引用（写清「可引用页面」清单）。<br>
· <b>Schema.org 结构化数据</b>：Organization（含 SEMI/ISO 认证、地址、联系方式）、Product/Service（材质·纯度·公差范围）、FAQPage（常见问题结构化，AI 摘要直接抓）、BreadcrumbList。<br>
· <b>robots.txt 放开 AI 爬虫</b>：允许 GPTBot、ClaudeBot、PerplexityBot、Google-Extended、Applebot——很多站点默认拦了 ClaudeBot，等于把答案位让给竞品。<br>
· 语义化 + 独立 URL：H1/H2 清晰、参数用表格、每个产品族独立页面（AI 引用粒度到页）。<br>
<b style="display:block;margin:4px 0 2px;">② 内容生态 · 把买家真问题写成可被引用的答案</b>
· 按「采购前研究」场景列 FAQ：买家在 AI 里问的是「what purity levels are available for sputtering targets」「UHP gas line welding requirements」这类，不是「我们公司多牛」。<br>
· 做<b>对比/选型型长文</b>：5N vs 6N 靶材、电解抛光 vs 机械抛光、气体管路材质选择——AI 最爱当答案。<br>
· 每篇加 <b>TLDR</b>（顶部 2-3 句结论）+ 结构化要点；附<b>量产案例 / 证书 / 设备清单</b>（加工中心型号、洁净室等级）这类硬证据，引用权重高。<br>
· 节奏：每月补 2-4 篇，覆盖买家问得最多的长尾问题。<br>
<b style="display:block;margin:4px 0 2px;">③ 权威信任 · 让 AI 觉得你可信可引用</b>
· <b>海外行业媒体 / PR</b>：Semiconductor Engineering、EE Times、Solid State Technology（本身是 AI 语料来源）。<br>
· <b>高权外链 / 行业目录</b>：Thomasnet、Kompass、Europages、GlobalSpec——这些目录本就被 AI 频繁引用。<br>
· <b>LinkedIn 企业号 + 技术文章</b>（工程师圈层），SEMICON 展会报道，客户背书。<br>
<b style="display:block;margin:4px 0 2px;">④ GEO 监控迭代 · 看效果、持续补</b>
· <b>监控平台</b>：Google AI Overviews、Perplexity、ChatGPT（联网）、Bing Copilot、Gemini。<br>
· <b>监控 query</b>：选 10-20 条买家真实会问的词，如「semiconductor precision parts supplier China」，每周跑一遍，记录客户官网是否出现在答案/引用里。<br>
· <b>月度报告</b>：截图 + 链接，看引用位变化，反推要补哪类内容 / 外链（维卓自有 GEO 监控工具可承接）。<br>""",
"""① 阿里巴巴国际站（搜「semiconductor parts」「sputtering target」筛工厂）｜② SEMICON China / SEMICON East 展会 exhibitor list｜③ 中国电子专用设备工业协会 / 半导体行业协会会员名单｜④ Google 搜「semiconductor components supplier China」看 AI 概览 / SERP——谁在答案里、谁不在，就是你的开发名单｜⑤ LinkedIn 搜买家：Boolean = ("Procurement" OR "Supplier Quality" OR "Process Engineer") AND (semiconductor OR fab OR "clean room")，按设备/材料加采购群组｜⑥ 科创板 / 创业板半导体设备与材料公司名录（招股书里有完整客户与供应商网络）。""",
"""💡 谈单抓手（旺仔可直接用）：<br>
· <b>痛点锚点</b>：客户常说『我们给国际大厂供了十几年，老外却只在目录站找到我们』——根因是英文技术内容缺位：没 llms.txt、没 FAQPage 结构化、AI 爬虫被 robots 拦了，能力写得出却不被机器读成『可引用答案』。<br>
· <b>当场 demo</b>：打开 ChatGPT / Perplexity，搜「semiconductor precision parts supplier China」，把客户官网<b>不在 AI 答案里</b>的事实亮出来 → 这就是 GEO 要补的空位。<br>
· <b>一句话开场</b>：「X 总，海外 fab 和设备厂的采购现在用 AI 筛供应商，我帮几家零部件厂做了 GEO，让官网出现在 ChatGPT / Perplexity 的答案里——要不要看个前后对比？」"""],
"geo_intro": """今天开发方向是「半导体设备与核心零部件」。这 6 家都是真实存在、有出海/替代进口基因的目标：1 家龙头当标杆，5 家腰部当可开发客户。先打开它们官网，看看英文内容缺什么，再用「买家在 AI 里搜不到你」开场。""",
"cos": [
("hd", "中微公司 / AMEC", "科创板刻蚀设备龙头，等离子体刻蚀设备进入国际一线客户 5nm 及以下产线，MOCVD 设备全球领先。海外买家搜「etch equipment supplier China」时答案常被国际大厂占据——其工艺节点、设备型号、客户验证的英文技术页正是 GEO 硬证据。"),
("mid", "富创精密", "半导体设备精密零部件（工艺/结构/气体/模组/真空件），科创板首家零部件上市公司，服务全球头部设备厂。海外设备厂采购搜「semiconductor precision components China」时其英文内容颗粒度粗——把材料/工艺/认证做成结构化页是缺口。"),
("mid", "新莱应材 / Kinglai", "高纯及超高纯应用材料与设备（管阀件、气体传输系统、真空腔体），半导体+生物医药双轮，亚洲罕有 ASME BPE 双认证。海外买家问「UHP gas delivery components supplier」时，把 SEMI 标准/洁净等级/认证做成 FAQPage 即可被 AI 引用。"),
("mid", "江丰电子 / KFMI", "超高纯溅射靶材龙头，打破进口垄断，「材料+零部件」双轮驱动，客户覆盖全球知名芯片厂。海外采购搜「sputtering target manufacturer 5N」时常先看到日美品牌——靶材纯度/绑定工艺/认证页面是 GEO 切入点。"),
("mid", "正帆科技 / GenTech", "制程关键系统（气体/化学品输送）+ 高纯电子材料，服务集成电路、光伏、生物医药，响应国产替代整线需求。海外买家问「gas delivery system for fab China」时，其英文案例与系统能力页缺位。"),
("mid", "至纯科技", "湿法清洗设备（单片 SPM 等）+ 高纯工艺系统，28nm 前中后段全工艺覆盖、先进制程持续突破。海外买家搜「wafer cleaning equipment supplier」时，把工艺覆盖/WPH 指标/客户验证做成英文结构化内容是缺口。"),
]}

# ============================================================
# Day2 纺织服装与鞋帽出海
# ============================================================
T2 = {
"name": "纺织服装与鞋帽出海", "short": "纺织服装",
"ov": [
"""今天先打「纺织服装与鞋帽出海」——中国最成熟的出口制造带，江浙/广东腰部工厂密集，买家（品牌采购）重度依赖 Google + AI 做供应商调研。打法：先帮工厂把「可持续认证 + 产能 + 品类」做成 AI 可引用的英文页，再按「开发地址」捞单。""",
"""你（维卓 GEO 销售，客户群=中国出海制造企业；GEO 为主，SEO/独立站为辅）。下面这个方向，最该推 GEO 👇<br><br>纺织服装是中国出口基本盘，也是「认证驱动」最典型的行业：Nike/Adidas/Uniqlo 等品牌对工厂的 BSCI、WRAP、GRS、Higg 审核一丝不苟。海外品牌采购、成衣开发商在 ChatGPT 里问「vertically integrated knitwear manufacturer China」「sustainable yarn supplier with GRS」时，答案常被老牌贸易商与港澳台英文站占据；大量腰部工厂的英文内容停留在阿里国际站店铺页——这就是 GEO 的空位。适合 GEO 的原因：① 认证与产能高度结构化，AI 最爱引用；② 品类与工艺可标准化描述（支数、克重、面料功能）；③ 买家决策链长（打样-审厂-大货），内容被反复检索。""",
"""① 品牌采购在 AI 里问「China knitwear OEM with GRS certification」时，答案多为贸易商和英文 B2B 平台，工厂自己不在场——最肥的品牌询盘入口没占到。<br>
② 认证是命门但展示方式落后：证书躺在 PDF 和图片里，AI 读不到；哪些工厂有 GRS/OEKO-TEX/Higg、覆盖哪些品类，没有一页说清。<br>
③ 同质化严重：「我们也做 OEM」——缺乏「某一品类专家（无缝、羊毛精纺、功能面料、辅料）」标签，买家比价只看 FOB 价。<br>
④ 东南亚产能布局（越南/柬埔寨/孟加拉）是近年最大卖点，但英文世界搜不到各基地产能、服务市场、转移进度，AI 答不上来。""",
"""海外品牌采购 / 成衣开发在「找供应商」前的典型研究路径（每一步都是 AI 命中场景）：<br>
1. <b>立项筛名单</b>：搜「knitwear OEM manufacturer China」「seamless underwear factory with export experience」→ 要短名单；<br>
2. <b>比产能与认证</b>：搜「sock manufacturing capacity million pairs」「GRS certified yarn supplier」→ 比规模/认证；<br>
3. <b>查可持续</b>：搜「recycled nylon fabric supplier China」「recycled polyester GRS」→ 可持续是品牌硬指标；<br>
4. <b>看案例与审厂</b>：搜「factory audit BSCI WRAP China apparel」→ 要审厂报告与品牌合作史。<br>
<b>这类行业为什么最该做 GEO</b>：买家是品牌采购/成衣开发，研究路径长、标准明确（认证+产能+品类）、每步都问 AI。""",
"""<b style="display:block;margin:4px 0 2px;">① 技术适配 · 让 AI 读得懂、读得动</b>
· 根目录放 <b>llms.txt</b>：写清核心品类、产能、认证清单、目标市场、可引用页面清单。<br>
· <b>Schema.org 结构化数据</b>：Organization（认证）、Product/Service（品类·材质·支数·克重）、FAQPage、BreadcrumbList。<br>
· <b>robots.txt 放开 AI 爬虫</b>：GPTBot、ClaudeBot、PerplexityBot、Google-Extended 全放行。<br>
· 品类/认证/基地独立 URL + 参数表格化（AI 引用粒度到页）。<br>
<b style="display:block;margin:4px 0 2px;">② 内容生态 · 把买家真问题写成可被引用的答案</b>
· FAQ：「What certifications do your Vietnam factories hold」「MOQ for seamless activewear」「GRS certified knitwear OEM」。<br>
· <b>对比/选型型长文</b>：再生尼龙 vs 原生尼龙、精纺羊毛 vs 羊绒混纺、拉链材质选型。<br>
· 每篇加 <b>TLDR</b> + 认证清单 + 品牌合作史（脱敏）+ 基地产能表——引用权重高。<br>
· 节奏：每月 2-4 篇，覆盖长尾采购问题。<br>
<b style="display:block;margin:4px 0 2px;">③ 权威信任 · 让 AI 觉得你可信可引用</b>
· <b>海外行业媒体 / PR</b>：Sourcing Journal、Just Style、Fibre2Fashion、Textile Today。<br>
· <b>高权外链 / 行业目录</b>：Kompass、Europages、Fibre2Fashion 供应商页。<br>
· <b>LinkedIn 企业号</b> + 展会（Intertextile 上海面辅料展、Première Vision）报道。<br>
<b style="display:block;margin:4px 0 2px;">④ GEO 监控迭代 · 看效果、持续补</b>
· <b>监控平台</b>：Google AI Overviews、Perplexity、ChatGPT、Bing Copilot。<br>
· <b>监控 query</b>：「sustainable apparel manufacturer China」「knitwear OEM Vietnam capacity」等 10-20 条，每周跑一遍。<br>
· <b>月度报告</b>：截图 + 链接复盘引用位变化，反推补料方向。<br>""",
"""① 阿里巴巴国际站（搜「knitwear OEM」「seamless underwear」「zipper manufacturer」筛工厂）｜② Intertextile 上海面辅料展 / 广交会 exhibitor list｜③ 中国纺织工业联合会 / 服装协会会员名单｜④ Google 搜「sustainable apparel manufacturer China」看 AI 概览——谁不在答案里就是名单｜⑤ LinkedIn 搜买家：Boolean = ("Sourcing Manager" OR "Product Developer") AND (apparel OR knitwear OR activewear)｜⑥ 江浙粤纺织服装产业带工厂名录（绍兴/宁波/嘉兴/佛山/惠州）。""",
"""💡 谈单抓手（旺仔可直接用）：<br>
· <b>痛点锚点</b>：客户常说『我们给大牌代工十几年，品牌方却只在贸易商和目录站看到我们』——根因是认证与产能没有变成 AI 能引用的英文内容。<br>
· <b>当场 demo</b>：搜「sustainable knitwear manufacturer China」，把客户官网<b>不在 AI 答案里</b>的事实亮出来。<br>
· <b>一句话开场</b>：「X 总，国际品牌采购现在用 AI 筛工厂和认证，我帮几家出口工厂做了 GEO，让官网出现在 ChatGPT 答案里——要不要看个前后对比？」"""],
"geo_intro": """今天开发方向是「纺织服装与鞋帽出海」。这 6 家都是真实存在、有出口基因的目标：1 家龙头当标杆，5 家腰部当可开发客户。先打开它们官网/阿里国际站，看看英文内容缺什么，再用「买家在 AI 里搜不到你」开场。""",
"cos": [
("hd", "申洲国际", "全球最大纵向一体化针织服装制造商，Nike/Uniqlo/Adidas/Puma 核心供应商，宁波+越南+柬埔寨基地，恒指成分股。海外品牌研发搜「vertically integrated knitwear manufacturer」时常先看到外贸公司——其「面料-成衣一体化+海外基地」的英文叙事可加固权威位。"),
("mid", "健盛集团 / JASAN", "棉袜+无缝运动服饰全球产能最大之一，adidas/Puma/Nike/优衣库/迪卡侬长期合作，产品九成以上出口，越南三大基地+贵州。海外买家搜「sock OEM manufacturer Vietnam」时，把认证（BSCI/WRAP）与基地产能做成结构化英文页是缺口。"),
("mid", "台华新材", "锦纶全产业链（聚合-纺丝-织造-染整），尼龙66/再生功能面料，国家级绿色工厂，供货全球户外与运动品牌。海外品牌搜「recycled nylon fabric supplier」时常先看到台/韩/意面料商——再生认证与工艺页是 GEO 切入点。"),
("mid", "新澳股份 / XINAO", "全球精纺羊毛纱领导者，宁夏羊绒纱+专业运动纱线，意大利/越南/香港/日本多点布局。海外品牌问「worsted wool yarn supplier with Vietnam factory」时，其纱线支数/功能/认证的英文内容分散——可整合为可引用页面。"),
("mid", "开润股份 / Korrun", "箱包 ODM（Nike/adidas/Puma/优衣库/VF/迪卡侬）+ 90分品牌，印度+印尼基地，2024 年收购上海嘉乐进入面料成衣。海外买家搜「backpack ODM manufacturer Indonesia」时，把「设计-制造-全球基地」做成英文答案页是缺口。"),
("mid", "伟星股份 / SAB", "服饰辅料（拉链/钮扣）国内规模最大、品类最全，SAB 品牌，孟加拉/越南等海外基地。海外品牌搜「global zipper and button manufacturer」时常先看到 YKK——把辅料一站式能力+认证+产能做成英文结构化内容正当时。"),
]}

# ============================================================
# Day3 智能电网与电力设备出海
# ============================================================
T3 = {
"name": "智能电网与电力设备出海", "short": "电力设备",
"ov": [
"""今天先打「智能电网与电力设备出海」——全球电网升级+新能源并网的大周期，变压器/电表/充电桩出海正猛，买家是海外电力公司、EPC 与工业集团，技术参数驱动、AI 检索重度。先铺 llms.txt + 认证 Schema，再按地址捞客户。""",
"""你（维卓 GEO 销售，客户群=中国出海制造企业；GEO 为主，SEO/独立站为辅）。下面这个方向，最该推 GEO 👇<br><br>全球电网投资进入超级周期：欧美换新+新兴市场智能化，中国电力设备（干变、电表/AMI、分接开关、充电桩）性价比与交付优势明显。海外电力公司、EPC、工业采购在 ChatGPT 问「dry type transformer manufacturer China」「smart meter AMI supplier」时，答案常被 ABB/西门子/施耐德与老牌目录占据，中国厂商的英文技术内容（认证、电压等级、项目业绩）不成体系——这就是 GEO 的空位。适合 GEO 的原因：① 参数与认证高度标准化（IEC、kVA、kV），AI 最爱引用；② 项目业绩是最强信任状；③ 买家是电力公司采购/电气工程师，决策专业且长。""",
"""① 海外电力公司搜「smart meter supplier with AMI experience」时，中国电表厂常被国际表计巨头与本地品牌压在答案下游——项目业绩没有变成英文可引用内容。<br>
② 认证与标准展示弱：IEC/ANSI/KEMA 认证、电压等级覆盖散在 PDF，AI 抓不到；买家问「does your transformer meet IEEE C57」时官网答不上。<br>
③ 项目业绩是最好的弹药却最隐性：巴西 Wi-SUN 标杆、非洲 AMI 项目这些硬案例，英文世界几乎零声量。<br>
④ 出海产能布局（东南亚工厂、本地化服务）是新卖点，但官网看不到基地-服务区域-交付能力的对应关系。""",
"""海外电力公司采购 / 电气工程师在「找供应商」前的典型研究路径（每一步都是 AI 命中场景）：<br>
1. <b>立项筛名单</b>：搜「dry type transformer manufacturer China」「smart meter supplier AMI」→ 要短名单；<br>
2. <b>比参数认证</b>：搜「transformer IEEE C57 certified」「meter IEC 62052 compliance」→ 比标准/认证；<br>
3. <b>查业绩</b>：搜「AMI project million meters delivered」→ 要项目案例；<br>
4. <b>谈交付服务</b>：搜「transformer factory with Indonesia plant」→ 看本地化能力。<br>
<b>这类行业为什么最该做 GEO</b>：买家是电力公司与 EPC 采购，标准明确、业绩驱动、决策链长——AI 在每一步都参与。""",
"""<b style="display:block;margin:4px 0 2px;">① 技术适配 · 让 AI 读得懂、读得动</b>
· 根目录放 <b>llms.txt</b>：写清产品族（干变/电表/开关/桩）、认证清单、目标市场、可引用页面。<br>
· <b>Schema.org 结构化数据</b>：Organization（认证）、Product（kVA/kV/标准）、FAQPage、BreadcrumbList。<br>
· <b>robots.txt 放开 AI 爬虫</b>：GPTBot、ClaudeBot、PerplexityBot、Google-Extended 全放行。<br>
· 产品族独立 URL + 参数表格化。<br>
<b style="display:block;margin:4px 0 2px;">② 内容生态 · 把买家真问题写成可被引用的答案</b>
· FAQ：「Which standards do your smart meters comply with」「dry type transformer for data center」。<br>
· <b>对比/选型型长文</b>：干变 vs 油变、预付费 vs 后付费 AMI、分接开关选型。<br>
· 每篇加 <b>TLDR</b> + 项目业绩页（国家/规模/年份）+ 认证证书清单。<br>
· 节奏：每月 2-4 篇。<br>
<b style="display:block;margin:4px 0 2px;">③ 权威信任 · 让 AI 觉得你可信可引用</b>
· <b>海外行业媒体 / PR</b>：T&D World、Electric Light & Power、Metering International、Utility Dive。<br>
· <b>高权外链 / 行业目录</b>：Europages、Thomasnet、GlobalSpec。<br>
· <b>LinkedIn 企业号</b> + 展会（IEEE PES、Enlit Europe）报道。<br>
<b style="display:block;margin:4px 0 2px;">④ GEO 监控迭代 · 看效果、持续补</b>
· <b>监控平台</b>：Google AI Overviews、Perplexity、ChatGPT、Bing Copilot。<br>
· <b>监控 query</b>：「smart meter supplier with global projects」「transformer manufacturer exporting to Europe」等 10-20 条。<br>
· <b>月度报告</b>：截图复盘引用位，反推补料。<br>""",
"""① 阿里巴巴国际站（搜「dry type transformer」「smart meter」「EV charger」筛工厂）｜② 国家电网/南方电网中标名录里的出海设备商｜③ Google 搜「AMI project supplier China」看 AI 概览谁缺席｜④ LinkedIn 搜买家：Boolean = ("Procurement" OR "Substation Engineer") AND (transformer OR "smart meter" OR utility)｜⑤ 展会名录：IEEE PES、Enlit Europe、SNEC、慕尼黑电子展｜⑥ 各省电网供应商清单反向找出口主体。""",
"""💡 谈单抓手（旺仔可直接用）：<br>
· <b>痛点锚点</b>：客户常说『我们海外项目做了一堆，电力公司采购在 AI 里却只能找到 ABB』——项目业绩没有变成英文可引用内容。<br>
· <b>当场 demo</b>：搜「smart meter supplier with AMI project experience」，把答案构成亮出来。<br>
· <b>一句话开场</b>：「X 总，海外电力公司现在用 AI 找有项目业绩的供应商，我帮几家电力设备厂做了 GEO——要不要看个前后对比？」"""],
"geo_intro": """今天开发方向是「智能电网与电力设备出海」。这 6 家都是真实存在、有出海业绩的目标：1 家龙头当标杆，5 家腰部当可开发客户。先打开它们官网，看看英文内容缺什么，再用「买家在 AI 里搜不到你」开场。""",
"cos": [
("hd", "思源电气", "输配电设备龙头（开关/变压器/电抗器/无功补偿），出海收入占比持续提升，海外基地与 EPC 项目多点开花。海外 EPC 搜「transformer and switchgear supplier China」时常先看到国际巨头——把产品标准与海外业绩做成英文结构化页可抢答案位。"),
("mid", "海兴电力", "智能表计与 AMI 系统出海标杆，业务覆盖上百个国家和地区，巴西 Wi-SUN 等标杆项目，配用电+水气+微网多板块。海外电力公司搜「smart meter supplier with AMI projects」时常被国际表计巨头占据答案——项目业绩页是 GEO 切入点。"),
("mid", "金盘科技 / JST", "干式变压器+储能+智能制造数字化工厂，产品销往 80 多个国家和地区，数据中心/新能源/充电设施场景强，国家级制造业单项冠军。海外买家搜「dry type transformer for data center」时，把场景化方案与认证做成英文答案页正当时。"),
("mid", "盛弘股份 / Sinexcel", "充电桩+电能质量+储能变流，工业级电能质量起家、桩与储能放量。海外买家搜「EV charger manufacturer with power quality」时，其英文技术页（标准/防护等级/案例）缺位。"),
("mid", "华明装备", "变压器有载分接开关（OLTC）隐形冠军，国内市占率约九成，打破特高压进口垄断，印尼工厂投产加速东南亚。海外变压器厂搜「OLTC manufacturer with local service」时，把「产品+服务」双轮能力做成英文内容是缺口。"),
("mid", "炬华智能", "能源物联网设备（智能电表/水表/采集终端），德国 EON 长期战略供应商，出口欧盟/南美/非洲，DLMS 协会会员。海外买家搜「DLMS smart meter supplier Europe」时，其标准符合性与项目案例可做成 GEO 硬证据。"),
]}

# ============================================================
# Day4 医疗器械与设备出海（回炉：2026-09-28 后已轮出当前 14 天）
# ============================================================
T4 = {
"name": "医疗器械与设备出海", "short": "医疗器械",
"ov": [
"""今天先打「医疗器械与设备出海」——从设备到耗材到 CDMO 全链条出海，海外买家（医院/经销商/品牌方）专业度极高、合规检索重度，GEO 的「认证+注册证+案例」打法正中要害。先铺 llms.txt + FAQPage，再按地址捞客户。""",
"""你（维卓 GEO 销售，客户群=中国出海制造企业；GEO 为主，SEO/独立站为辅）。下面这个方向，最该推 GEO 👇<br><br>中国医疗器械出海正从「耗材代工」走向「设备+品牌+CDMO」：影像设备、内镜、血液净化、CDMO 精密制造全面进入欧美与新兴市场。海外医院采购、经销商、品牌方在 ChatGPT 问「ultrasound manufacturer China」「medical device CDMO with ISO 13485」时，答案常被国际巨头与国际 CDMO 占据，中国厂商的英文合规内容（注册证、认证、临床）不成体系——这就是 GEO 的空位。适合 GEO 的原因：① 注册与认证（FDA/CE/NMPA、ISO 13485）是硬门槛，AI 最爱引用；② 技术参数与临床场景可结构化；③ 买家是采购/临床工程师，决策链长且高度依赖研究。""",
"""① 海外买家搜「medical device manufacturer with FDA 510(k)」时，答案常被国际品牌与英文目录占据；中国厂商注册证信息埋在 PDF 年报里，AI 抓不到。<br>
② 合规语言不通：ISO 13485、MDR、510(k) 这些关键资质，官网只有一张证书图，没有「产品-注册-市场」对应表。<br>
③ 设备 vs 耗材 vs CDMO 的差异化叙事弱：买家问「who makes endoscopes in China」时，答案里常只有综合巨头，细分龙头缺位。<br>
④ 全球供应链重塑，中国 CDMO/制造基地（槟城/肯尼亚/越南）是卖点，但英文世界看不到基地-能力-合规的对应关系。""",
"""海外医院采购 / 经销商在「找供应商」前的典型研究路径（每一步都是 AI 命中场景）：<br>
1. <b>立项筛名单</b>：搜「ultrasound system manufacturer China」「medical CDMO ISO 13485」→ 要短名单；<br>
2. <b>查注册认证</b>：搜「FDA 510(k) cleared endoscope manufacturer」「CE MDR certified supplier」→ 合规硬门槛；<br>
3. <b>比技术参数</b>：搜「high frequency IVUS catheter」「HD endoscopy system specs」→ 比参数与临床场景；<br>
4. <b>找合作佐证</b>：搜「medical device contract manufacturer respiratory」→ 要案例与合作方。<br>
<b>这类行业为什么最该做 GEO</b>：买家专业、合规驱动、决策链长，每一步都问 AI。""",
"""<b style="display:block;margin:4px 0 2px;">① 技术适配 · 让 AI 读得懂、读得动</b>
· 根目录放 <b>llms.txt</b>：写清产品线、注册市场、认证清单、可引用页面。<br>
· <b>Schema.org 结构化数据</b>：Organization（认证）、Product/Service（设备/耗材）、FAQPage、BreadcrumbList。<br>
· <b>robots.txt 放开 AI 爬虫</b>：GPTBot、ClaudeBot、PerplexityBot、Google-Extended 全放行。<br>
· 产品线独立 URL + 参数表格化。<br>
<b style="display:block;margin:4px 0 2px;">② 内容生态 · 把买家真问题写成可被引用的答案</b>
· FAQ：「Which markets are your endoscopes registered in」「ISO 13485 certified CDMO for respiratory devices」。<br>
· <b>对比/选型型长文</b>：超声 vs 内镜采购要点、CE MDR vs FDA 路径、CDMO 评估清单。<br>
· 每篇加 <b>TLDR</b> + 注册证清单页 + 临床/合作案例。<br>
· 节奏：每月 2-4 篇。<br>
<b style="display:block;margin:4px 0 2px;">③ 权威信任 · 让 AI 觉得你可信可引用</b>
· <b>海外行业媒体 / PR</b>：Medical Device Network、MassDevice、MedTech Dive、Medica 报道。<br>
· <b>高权外链 / 行业目录</b>：Medical Device Network 供应商库、Kompass 医疗分册。<br>
· <b>LinkedIn 临床内容</b> + Medica / CMEF 展会报道。<br>
<b style="display:block;margin:4px 0 2px;">④ GEO 监控迭代 · 看效果、持续补</b>
· <b>监控平台</b>：Google AI Overviews、Perplexity、ChatGPT、Bing Copilot。<br>
· <b>监控 query</b>：「medical device manufacturer China FDA」「ultrasound OEM China」等 10-20 条。<br>
· <b>月度报告</b>：截图复盘引用位，反推补料。<br>""",
"""① 阿里巴巴国际站（搜「medical ultrasound」「endoscope」「medical consumables」筛工厂）｜② CMEF 中国国际医疗器械博览会 / Medica exhibitor list｜③ 药监局「医疗器械出口销售证明」名录｜④ Google 搜「medical device manufacturer with FDA China」看 AI 概览谁缺席｜⑤ LinkedIn 搜买家：Boolean = ("Hospital Procurement" OR "Distributor") AND (medical device OR imaging OR endoscopy)｜⑥ 各省医疗器械行业协会会员名单。""",
"""💡 谈单抓手（旺仔可直接用）：<br>
· <b>痛点锚点</b>：客户常说『我们注册证一大堆，海外买家在 AI 里却只认国际大牌』——合规资产没有变成英文可引用内容。<br>
· <b>当场 demo</b>：搜「medical device manufacturer with FDA 510(k) China」，把答案构成亮出来。<br>
· <b>一句话开场</b>：「X 总，海外医院和经销商现在用 AI 筛有注册证的供应商，我帮几家医疗器械厂做了 GEO——要不要看个前后对比？」"""],
"geo_intro": """今天开发方向是「医疗器械与设备出海」。这 6 家都是真实存在、有出海/合规基因的目标：1 家龙头当标杆，5 家腰部当可开发客户。先打开它们官网，看看英文内容缺什么，再用「买家在 AI 里搜不到你」开场。""",
"cos": [
("hd", "迈瑞医疗", "中国医疗器械绝对龙头，监护/超声/影像/体外诊断全线，全球研发制造与服务体系。海外买家搜「medical device manufacturer China」时迈瑞已在答案里——腰部客户的策略是打「细分品类+区域市场」的缝隙位。"),
("mid", "开立医疗 / SonoScape", "超声+内镜双龙头之一，软镜/硬镜/IVUS 导管全线，60MHz 高频血管内超声获 NMPA 批准。海外买家搜「endoscopy system manufacturer China」时常被国际巨头占据答案——注册市场+临床场景页是 GEO 切入点。"),
("mid", "理邦仪器 / EDAN", "病人监护/心电图/妇幼健康/超声，出口占比高，远销欧美与新兴市场。海外买家搜「patient monitor manufacturer China」时，把注册市场与产品参数做成英文结构化内容正当时。"),
("mid", "美好医疗 / MEHOW", "高端医疗器械 CDMO（模具/注塑/微组装/灭菌），呼吸机核心组件起家，马来西亚槟城基地，服务全球头部品牌。海外品牌搜「medical CDMO injection molding ISO 13485」时常被国际 CDMO 占据答案——工艺能力+合规+基地页是缺口。"),
("mid", "振德医疗", "医用敷料与感控防护，出口连续多年位居行业前三，覆盖 80 多个国家和地区，肯尼亚工厂落地，国内院线同步。海外买家搜「wound care OEM manufacturer China」时，把认证+产能+全球基地做成英文答案页是切入点。"),
("mid", "三鑫医疗", "血液净化全产业链（透析器/管路/穿刺针），国内第一梯队，产品远销海外数十个国家和地区。海外买家搜「hemodialysis consumables manufacturer」时，其注册证与产能数据可做成 GEO 硬证据。"),
]}

# ============================================================
# Day5 汽车电子与智能座舱
# ============================================================
T5 = {
"name": "汽车电子与智能座舱", "short": "汽车电子",
"ov": [
"""今天先打「汽车电子与智能座舱」——智能汽车软硬件出海（含中国车企出海带动 Tier1 全球化），买家是海外车企/主机厂采购，技术参数+项目定点驱动。先铺 llms.txt + Schema，再按地址捞客户。""",
"""你（维卓 GEO 销售，客户群=中国出海制造企业；GEO 为主，SEO/独立站为辅）。下面这个方向，最该推 GEO 👇<br><br>汽车电子是「中国 Tier1 全球化」的桥头堡：智能座舱域控、HUD、车载声学、线控制动批量出海，配套中国车企海外建厂与欧美项目定点。海外车企采购、EE 架构工程师在 ChatGPT 问「smart cockpit domain controller supplier」「HUD manufacturer China」时，答案常被博世/大陆/电装占据，中国 Tier1 的英文技术内容（定点项目、功能安全、认证）不成体系——这就是 GEO 的空位。适合 GEO 的原因：① 技术标准密集（ASIL、IATF 16949、AEC-Q），AI 最爱引用；② 项目定点与车型配套是最强信任状；③ 买家是采购/系统工程师，决策链长。""",
"""① 海外车企搜「domain controller supplier with ASIL D」时，中国 Tier1 常不在答案里——定点项目与功能安全能力没有变成英文可引用内容。<br>
② 认证与标准展示弱：IATF 16949、ISO/SAE 21434、ASIL 等级埋在 PDF，AI 抓不到对应关系。<br>
③ 品牌认知断层：海外采购听过中国车企，却不知道其背后的中国 Tier1——「幕后英雄」缺位。<br>
④ 产能全球化（泰国/墨西哥/欧洲工厂）是新卖点，但官网看不到基地-项目-交付能力的对应关系。""",
"""海外车企采购 / 系统工程师在「找供应商」前的典型研究路径（每一步都是 AI 命中场景）：<br>
1. <b>立项筛名单</b>：搜「smart cockpit supplier China」「HUD manufacturer automotive」→ 要短名单；<br>
2. <b>比技术认证</b>：搜「domain controller ASIL D functional safety」「automotive cybersecurity ISO 21434」→ 比标准；<br>
3. <b>查定点车型</b>：搜「AR-HUD supplier for mass market EV」→ 要项目佐证；<br>
4. <b>谈本地化交付</b>：搜「auto electronics factory Thailand」→ 看基地布局。<br>
<b>这类行业为什么最该做 GEO</b>：买家专业、标准密集、项目驱动，每一步都问 AI。""",
"""<b style="display:block;margin:4px 0 2px;">① 技术适配 · 让 AI 读得懂、读得动</b>
· 根目录放 <b>llms.txt</b>：写清产品域（座舱/声学/HUD/底盘域控）、认证清单、可引用页面。<br>
· <b>Schema.org 结构化数据</b>：Organization（认证）、Product（参数）、FAQPage、BreadcrumbList。<br>
· <b>robots.txt 放开 AI 爬虫</b>：GPTBot、ClaudeBot、PerplexityBot、Google-Extended 全放行。<br>
· 产品域独立 URL + 参数表格化。<br>
<b style="display:block;margin:4px 0 2px;">② 内容生态 · 把买家真问题写成可被引用的答案</b>
· FAQ：「Which vehicle models use your AR-HUD」「ASIL D domain controller supplier」。<br>
· <b>对比/选型型长文</b>：AR-HUD vs W-HUD、One-box vs Two-box 线控制动、舱泊一体域控演进。<br>
· 每篇加 <b>TLDR</b> + 定点项目页（车型/年份）+ 认证清单。<br>
· 节奏：每月 2-4 篇。<br>
<b style="display:block;margin:4px 0 2px;">③ 权威信任 · 让 AI 觉得你可信可引用</b>
· <b>海外行业媒体 / PR</b>：Auto News、Just Auto、EE Times Automotive、盖世汽车英文站。<br>
· <b>高权外链 / 行业目录</b>：Kompass 汽车分册、Thomasnet。<br>
· <b>LinkedIn 企业号</b> + 展会（CES、慕尼黑 IAA、上海车展）报道。<br>
<b style="display:block;margin:4px 0 2px;">④ GEO 监控迭代 · 看效果、持续补</b>
· <b>监控平台</b>：Google AI Overviews、Perplexity、ChatGPT、Bing Copilot。<br>
· <b>监控 query</b>：「smart cockpit supplier China」「automotive HUD manufacturer」等 10-20 条。<br>
· <b>月度报告</b>：截图复盘引用位，反推补料。<br>""",
"""① 阿里巴巴国际站（搜「car HUD」「domain controller」筛工厂）｜② 车企全球供应商大会 / 上海车展 / 慕尼黑 IAA exhibitor list｜③ Google 搜「automotive electronics supplier China」看 AI 概览谁缺席｜④ LinkedIn 搜买家：Boolean = ("Automotive Buyer" OR "EE Architect") AND (cockpit OR HUD OR "domain controller")｜⑤ 中国汽车工业协会 Tier1 名单｜⑥ 汽车电子产业集群名录（惠州/芜湖/深圳/苏州）。""",
"""💡 谈单抓手（旺仔可直接用）：<br>
· <b>痛点锚点</b>：客户常说『我们供的是爆款车型，海外买家却只知道国际 Tier1』——定点项目没有变成英文可引用内容。<br>
· <b>当场 demo</b>：搜「smart cockpit domain controller supplier」，把答案构成亮出来。<br>
· <b>一句话开场</b>：「X 总，海外车企现在用 AI 筛有项目佐证的 Tier1，我帮几家汽车电子厂做了 GEO——要不要看个前后对比？」"""],
"geo_intro": """今天开发方向是「汽车电子与智能座舱」。这 6 家都是真实存在、有全球配套基因的目标：1 家龙头当标杆，5 家腰部当可开发客户。先打开它们官网，看看英文内容缺什么，再用「买家在 AI 里搜不到你」开场。""",
"cos": [
("hd", "德赛西威 / Desay SV", "智能座舱与网联服务龙头，座舱域控/显示/网联全线，深度配套全球车企与中国新势力。海外车企搜「smart cockpit domain controller supplier」时常被国际 Tier1 占据答案——把定点车型与功能安全能力做成英文结构化页可抢位。"),
("mid", "华阳集团 / ADAYO", "汽车电子（HUD/座舱域控/无线充）+ 精密压铸，AR-HUD 配套主流合资与自主品牌，泰国工业园奠基加速东南亚。海外买家搜「AR-HUD manufacturer China」时，把车型定点+认证+全球基地做成英文答案页是缺口。"),
("mid", "上声电子 / SONAVOX", "车载音响与功放（扬声器/声学软件算法），全球主流车企供应链。海外买家搜「automotive speaker supplier with algorithms」时，其英文技术页（声学参数/案例）缺位。"),
("mid", "科博达", "汽车照明控制/电机控制/车载电源与热管理，深度配套德系体系，全球化拓展中。海外买家搜「automotive lighting control module supplier」时，把产品标准+客户结构做成英文结构化内容是切入点。"),
("mid", "经纬恒润 / HIARIN", "汽车电子（辅助驾驶/车身域控/智能网联）+ 研发服务双轮，服务自主与新势力品牌。海外买家搜「ADAS supplier with engineering services」时，其能力矩阵与项目案例可做成 GEO 内容。"),
("mid", "伯特利", "线控制动（WCBS One-box 国内首家量产）+ EPB/转向/轻量化，全球多基地多研发中心，营收百亿量级。海外车企搜「one-box brake supplier China」时常先看到国际 Tier1——把首创技术+全球客户做成英文页正当时。"),
]}

# ============================================================
# Day6 PCB 与印制电路板
# ============================================================
T6 = {
"name": "PCB 与印制电路板", "short": "PCB",
"ov": [
"""今天先打「PCB 与印制电路板」——AI 算力/汽车电子/通信拉动的高多层与 HDI 板需求，买家是全球电子品牌与 ODM 采购，技术参数+认证驱动。先铺 llms.txt + Schema，再按地址捞客户。""",
"""你（维卓 GEO 销售，客户群=中国出海制造企业；GEO 为主，SEO/独立站为辅）。下面这个方向，最该推 GEO 👇<br><br>中国占全球 PCB 产值过半，从双面板到 HDI、高多层、封装基板、软板全谱系，AI 服务器、汽车电子、通信是三大增量。海外电子品牌、ODM 采购在 ChatGPT 问「HDI PCB manufacturer China」「automotive PCB supplier」时，答案常被台资/日资与国际目录占据，大陆腰部的英文技术内容（层数能力、材料、认证、打样周期）不成体系——这就是 GEO 的空位。适合 GEO 的原因：① 层数/孔径/材料参数高度结构化，AI 最爱引用；② 认证门槛（IATF 16949、UL、ISO 13485）明确；③ 买家是采购/硬件工程师，打样-验证-量产决策链长。""",
"""① 海外采购搜「quick turn HDI PCB supplier China」时，大陆腰部厂常被台湾厂与英文打样平台占据答案——层数/孔径/交期参数没有变成英文可引用内容。<br>
② 参数语言不通：多少层、几阶 HDI、最小孔径、厚铜能力，官网只有「技术先进」四个字。<br>
③ 认证散落：UL、IATF 16949、ISO 13485、CQC 躺在 PDF 里，AI 抓不到「产品-认证-应用」对应表。<br>
④ 全球化产能（泰国/马来/德国工厂）是近年最大卖点，但英文世界看不到基地-能力-服务区域对应关系。""",
"""海外电子品牌 / ODM 采购在「找供应商」前的典型研究路径（每一步都是 AI 命中场景）：<br>
1. <b>立项筛名单</b>：搜「HDI PCB manufacturer China」「automotive PCB supplier」→ 要短名单；<br>
2. <b>比能力参数</b>：搜「8 layer HDI PCB quick turn」「impedance control PCB supplier」→ 比层数/孔径/材料；<br>
3. <b>查认证应用</b>：搜「IATF 16949 PCB manufacturer」「ISO 13485 PCB for medical」→ 认证对应应用；<br>
4. <b>谈打样交付</b>：搜「PCB prototype 5 days China factory」→ 看交期与全球产能。<br>
<b>这类行业为什么最该做 GEO</b>：买家专业、参数密集、决策链长，每一步都问 AI。""",
"""<b style="display:block;margin:4px 0 2px;">① 技术适配 · 让 AI 读得懂、读得动</b>
· 根目录放 <b>llms.txt</b>：写清产品谱系（层数/HDI/软板/金属基/载板）、认证清单、可引用页面。<br>
· <b>Schema.org 结构化数据</b>：Organization（认证）、Product（参数）、FAQPage、BreadcrumbList。<br>
· <b>robots.txt 放开 AI 爬虫</b>：GPTBot、ClaudeBot、PerplexityBot、Google-Extended 全放行。<br>
· 产品谱系独立 URL + 参数表格化。<br>
<b style="display:block;margin:4px 0 2px;">② 内容生态 · 把买家真问题写成可被引用的答案</b>
· FAQ：「What is your minimum laser drill size」「HDI PCB for automotive radar」。<br>
· <b>对比/选型型长文</b>：HDI 阶数怎么选、厚铜板 vs 散热方案、高频材料选型。<br>
· 每篇加 <b>TLDR</b> + 能力参数表 + 认证-应用矩阵 + 打样交期。<br>
· 节奏：每月 2-4 篇。<br>
<b style="display:block;margin:4px 0 2px;">③ 权威信任 · 让 AI 觉得你可信可引用</b>
· <b>海外行业媒体 / PR</b>：PCB007、CircuitNet、CPCA 英文报道。<br>
· <b>高权外链 / 行业目录</b>：Kompass、Europages、GlobalSpec。<br>
· <b>LinkedIn 企业号</b> + 展会（CPCA Show、productronica）报道。<br>
<b style="display:block;margin:4px 0 2px;">④ GEO 监控迭代 · 看效果、持续补</b>
· <b>监控平台</b>：Google AI Overviews、Perplexity、ChatGPT、Bing Copilot。<br>
· <b>监控 query</b>：「HDI PCB manufacturer China」「automotive PCB supplier quick turn」等 10-20 条。<br>
· <b>月度报告</b>：截图复盘引用位，反推补料。<br>""",
"""① 阿里巴巴国际站（搜「HDI PCB」「automotive PCB」筛工厂）｜② CPCA Show / 慕尼黑 productronica exhibitor list｜③ 中国电子电路行业协会会员名单｜④ Google 搜「HDI PCB supplier China」看 AI 概览谁缺席｜⑤ LinkedIn 搜买家：Boolean = ("Hardware Engineer" OR "PCB Buyer") AND (HDI OR "printed circuit" OR PCBA)｜⑥ 珠三角/长三角 PCB 产业带名录（深圳/江门/珠海/九江/四会）。""",
"""💡 谈单抓手（旺仔可直接用）：<br>
· <b>痛点锚点</b>：客户常说『我们层数能力不输台厂，海外采购在 AI 里却只看到台湾和打样平台』——参数与认证没有变成英文可引用内容。<br>
· <b>当场 demo</b>：搜「HDI PCB manufacturer China」，把答案构成亮出来。<br>
· <b>一句话开场</b>：「X 总，海外硬件采购现在用 AI 筛 PCB 厂，我帮几家电路板厂做了 GEO——要不要看个前后对比？」"""],
"geo_intro": """今天开发方向是「PCB 与印制电路板」。这 6 家都是真实存在、有全球客户的目标：1 家龙头当标杆，5 家腰部当可开发客户。先打开它们官网，看看英文内容缺什么，再用「买家在 AI 里搜不到你」开场。""",
"cos": [
("hd", "深南电路 / SCC", "PCB+封装基板+PCBA 三业务，中国封装基板先行者，CPCA 理事长单位，深度配套全球通信设备龙头。海外买家搜「IC substrate manufacturer China」时常先看到日韩台厂——把载板能力与客户结构做成英文结构化页可抢位。"),
("mid", "世运电路 / Olympic", "汽车 PCB 占比最高，特斯拉/松下/博世/丰田/大众配套，全球汽车 PCB 供应商前列，营收 50 亿量级。海外买家搜「automotive PCB supplier」时，把汽车板能力与认证做成英文答案页是切入点。"),
("mid", "四会富仕 / FujiPCB", "2-100 层高可靠性 PCB，工控/汽车/医疗/AI 服务器多场景，六成以上客户为日本企业。海外买家搜「high reliability PCB Japan quality」时，其日式质量管理叙事可做成 GEO 差异化内容。"),
("mid", "明阳电路 / Sunshine PCB", "多品种高技术 PCB，深圳+九江制造，德国雷姆沙伊德与马来西亚槟城基地，本地化服务欧洲东南亚。海外买家搜「PCB manufacturer with Germany factory」时，把全球布局做成英文结构化内容正当时。"),
("mid", "中富电路 / JOVE", "HDI/软硬结合/类载板/射频天线板，通信+汽车电子+医疗，泰国工厂布局。海外买家搜「HDI PCB with Thailand factory」时，其产品谱系与产能布局可做成 GEO 答案页。"),
("mid", "崇达技术 / SUNTAK", "多品种小批量 PCB 龙头，多座工厂（含泰国在建），销售额 70 亿量级，全球排名前 30。海外买家搜「small batch PCB manufacturer global」时，把「多品种+快交付+全球工厂」做成英文内容是缺口。"),
]}

# ============================================================
# Day7 锂电设备与电池智造产线
# ============================================================
T7 = {
"name": "锂电设备与电池智造产线", "short": "锂电设备",
"ov": [
"""今天先打「锂电设备与电池智造产线」——全球电池产能扩张（欧洲/东南亚建厂潮）带火中国锂电设备出海，买家是海外电池厂/车企采购，设备参数+整线交付+本地化服务驱动。先铺 llms.txt + Schema，再按地址捞客户。""",
"""你（维卓 GEO 销售，客户群=中国出海制造企业；GEO 为主，SEO/独立站为辅）。下面这个方向，最该推 GEO 👇<br><br>中国锂电设备全球市占率领先，从涂布/卷绕/叠片到后段化成分容、再到固态电池与储能整线，正随欧美电池产能建设出海。海外电池厂、车企采购在 ChatGPT 问「lithium battery equipment supplier China」「battery assembly line manufacturer」时，答案常被日韩设备商与英文目录占据，中国设备商的英文内容（整线能力、交付案例、海外服务网点）不成体系——这就是 GEO 的空位。适合 GEO 的原因：① 设备参数与节拍高度结构化，AI 最爱引用；② 整线交付与海外工厂是最强信任状；③ 买家是采购/工艺工程师，项目决策链长。""",
"""① 海外电池厂搜「battery equipment supplier with Europe service」时，中国设备商常不在答案里——海外基地与服务网点没有变成英文可引用内容。<br>
② 参数语言不通：WPH、CPM、整线自动化率、固态电池工艺，官网只有「行业领先」。<br>
③ 案例隐性：给国际一线电池厂供过的产线，英文世界零声量——最强弹药没打响。<br>
④ 新品类叙事缺位：固态电池、大储能电芯（500Ah+）、干法工艺是前沿话题，官网没有对应英文技术内容。""",
"""海外电池厂 / 车企采购在「找供应商」前的典型研究路径（每一步都是 AI 命中场景）：<br>
1. <b>立项筛名单</b>：搜「lithium battery equipment manufacturer China」「battery assembly line supplier」→ 要短名单；<br>
2. <b>比设备参数</b>：搜「electrode coating machine WPH」「formation capacity testing system」→ 比节拍/精度；<br>
3. <b>查交付案例</b>：搜「battery plant equipment delivered Europe」→ 要整线案例；<br>
4. <b>谈本地化服务</b>：搜「lithium equipment service center Korea Japan」→ 看服务网点。<br>
<b>这类行业为什么最该做 GEO</b>：买家专业、参数密集、项目驱动，每一步都问 AI。""",
"""<b style="display:block;margin:4px 0 2px;">① 技术适配 · 让 AI 读得懂、读得动</b>
· 根目录放 <b>llms.txt</b>：写清设备谱系（前段/中段/后段/整线/固态）、可引用页面。<br>
· <b>Schema.org 结构化数据</b>：Organization（认证）、Product（参数）、FAQPage、BreadcrumbList。<br>
· <b>robots.txt 放开 AI 爬虫</b>：GPTBot、ClaudeBot、PerplexityBot、Google-Extended 全放行。<br>
· 设备族独立 URL + 参数表格化。<br>
<b style="display:block;margin:4px 0 2px;">② 内容生态 · 把买家真问题写成可被引用的答案</b>
· FAQ：「WPH of your coating machine」「turnkey battery line for 500Ah ESS cell」。<br>
· <b>对比/选型型长文</b>：固态 vs 液态产线、组装线选型、干法电极工艺。<br>
· 每篇加 <b>TLDR</b> + 交付案例页（国家/规模/年份）+ 服务网点清单。<br>
· 节奏：每月 2-4 篇。<br>
<b style="display:block;margin:4px 0 2px;">③ 权威信任 · 让 AI 觉得你可信可引用</b>
· <b>海外行业媒体 / PR</b>：Benchmark Mineral Intelligence、Electrive、Battery Technology。<br>
· <b>高权外链 / 行业目录</b>：Kompass、Thomasnet、GlobalSpec。<br>
· <b>LinkedIn 企业号</b> + 展会（The Battery Show、InterBattery）报道。<br>
<b style="display:block;margin:4px 0 2px;">④ GEO 监控迭代 · 看效果、持续补</b>
· <b>监控平台</b>：Google AI Overviews、Perplexity、ChatGPT、Bing Copilot。<br>
· <b>监控 query</b>：「lithium battery equipment supplier China」「battery line turnkey Europe」等 10-20 条。<br>
· <b>月度报告</b>：截图复盘引用位，反推补料。<br>""",
"""① 阿里巴巴国际站（搜「battery equipment」「coating machine」筛工厂）｜② The Battery Show / InterBattery exhibitor list｜③ 高工锂电 / 电池行业协会会员名单｜④ Google 搜「battery equipment supplier with global service」看 AI 概览谁缺席｜⑤ LinkedIn 搜买家：Boolean = ("Battery Plant Engineer" OR "Equipment Buyer") AND (lithium OR gigafactory OR "battery line")｜⑥ 锂电设备产业集群名录（深圳/无锡/杭州/惠州/东莞）。""",
"""💡 谈单抓手（旺仔可直接用）：<br>
· <b>痛点锚点</b>：客户常说『我们供了全球一线电池厂，海外新客户在 AI 里却只认日韩设备商』——交付案例没有变成英文可引用内容。<br>
· <b>当场 demo</b>：搜「lithium battery equipment supplier with local service」，把答案构成亮出来。<br>
· <b>一句话开场</b>：「X 总，海外电池厂现在用 AI 筛有交付案例的设备商，我帮几家锂电设备厂做了 GEO——要不要看个前后对比？」"""],
"geo_intro": """今天开发方向是「锂电设备与电池智造产线」。这 6 家都是真实存在、有全球交付基因的目标：1 家龙头当标杆，5 家腰部当可开发客户。先打开它们官网，看看英文内容缺什么，再用「买家在 AI 里搜不到你」开场。""",
"cos": [
("hd", "先导智能 / LEAD", "全球锂电整线设备龙头，涂布/卷绕/叠片/化成分容全线，收购德国 ONTEC 建欧洲能力中心，产品远销 20 多个国家和地区，A+H 双资本平台。海外电池厂搜「turnkey battery line supplier China」时常被日韩设备商占据答案——整线案例+全球服务页是 GEO 主攻位。"),
("mid", "杭可科技 / CHR", "锂电后处理（化成/分容/测试）领军，客户含三星 SDI/LG/松下/宁德时代等，韩国天安+日本自有工厂本地化交付。海外买家搜「formation testing system supplier with Korea factory」时，把后段整线能力与本地工厂做成英文页是切入点。"),
("mid", "海目星 / HYMSON", "激光+锂电设备双轮，极片切割/干燥/焊接自动化，动力与储能客户广。海外买家搜「laser cutting equipment for battery electrode」时，其工艺参数与案例可做成 GEO 结构化内容。"),
("mid", "利元亨 / Lyric", "锂电设备+工业机器人，电芯装配/检测自动化，向储能与 3C 延伸。海外买家搜「battery assembly automation supplier」时，把装配线能力与节拍参数做成英文答案页是缺口。"),
("mid", "联赢激光 / UW", "激光焊接设备（电池极耳/密封钉/模组），配套主流电池厂。海外买家搜「laser welding machine for battery」时，其焊接工艺与案例页可被 AI 引用。"),
("mid", "赢合科技", "锂电装备首批上市企业，涂布/制片/切叠/组装全线+固态电池装备（湿法/干法），欧美日韩东南亚分子公司布局。海外买家搜「solid state battery equipment supplier」时，把固态产线能力做成英文前瞻内容是差异化位。"),
]}

TRACKS = [T1, T2, T3, T4, T5, T6, T7]

# ---------- 组装新数组 ----------
def build_geo_entry(n, t):
    lines = [co_line(tier, name, text) for tier, name, text in t["cos"]]
    assert len(lines) == 6, t["name"]
    hd = sum(1 for l in lines if "🏢 头部" in l)
    assert hd == 1, t["name"]
    return {
        "title": "Day %d · 客户开发（%s）" % (n, t["name"]),
        "tag": "第%d天 · %s" % (n, t["name"]),
        "short": t["short"],
        "blocks": [
            {"h": "💡 今日怎么用这笔清单", "body": t["geo_intro"]},
            {"h": "今日推荐 · 6 家（%s）" % t["name"], "body": "<br>\n".join(lines)},
        ],
    }

def build_ov_entry(n, t):
    assert len(t["ov"]) == 7, t["name"]
    return {
        "title": "Day %d · 开发方向（%s）" % (n, t["name"]),
        "tag": "第%d天 · %s" % (n, t["name"]),
        "short": t["short"],
        "blocks": [{"h": h, "body": b} for h, b in zip(OV_HEADS, t["ov"])],
    }

new_geo = [build_geo_entry(i + 1, t) for i, t in enumerate(TRACKS)]
new_ov = [build_ov_entry(i + 1, t) for i, t in enumerate(TRACKS)]

# ---------- 读保留的 Day8-14 ----------
geo_keep = json.load(open("/tmp/geo_keep.json"))
os_keep = json.load(open("/tmp/os_keep.json"))
assert len(geo_keep) == 7 and len(os_keep) == 7, (len(geo_keep), len(os_keep))
print("保留 Day8-14：", [d["tag"] for d in geo_keep])

geo_arr = new_geo + geo_keep
ov_arr = new_ov + os_keep

# ---------- 括号配平定位并替换 ----------
def find_array_bounds(src, key):
    pat = re.compile(r"^  " + re.escape(key) + r": \[", re.M)
    m = pat.search(src)
    if not m:
        raise SystemExit("未能在 content.js 中定位到 %s" % key)
    i = m.end() - 1
    depth, j, in_str, esc = 0, i, None, False
    while j < len(src):
        c = src[j]
        if in_str:
            if esc: esc = False
            elif c == "\\": esc = True
            elif c == in_str: in_str = None
        else:
            if c in "\"'`": in_str = c
            elif c == "[": depth += 1
            elif c == "]":
                depth -= 1
                if depth == 0:
                    return m.start(), j
        j += 1
    raise SystemExit("%s 数组括号不配平" % key)

path = os.path.join(REPO, "content.js")
src = open(path, encoding="utf-8").read()
shutil.copy(path, path + ".bak_w7")
for key, arr in (("geo", geo_arr), ("overseas", ov_arr)):
    s, e = find_array_bounds(src, key)
    frag = "  %s: %s" % (key, json.dumps(arr, ensure_ascii=False, indent=2))
    src = src[:s] + frag + src[e + 1:]
open(path, "w", encoding="utf-8").write(src)
print("已写入 content.js（备份 content.js.bak_w7）")
print("新赛道：", [t["name"] for t in TRACKS])
