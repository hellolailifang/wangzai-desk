# -*- coding: utf-8 -*-
"""
GEO 企业库周更（2026-09-28）：替换 CONTENT.geo 的 Day 3 / Day 4
本轮赛道（均从候选池取，未使用过）：
  Day 3 · 宠物用品出海
  Day 4 · 医疗器械与健康设备
每天 1 家头部(hd) + 5 家腰部(mid)，全部中国企业。
数据口径：拿不准的营收/年份一律用量级描述，不编造精确数字。
"""
import json, shutil

SRC = "content.js"


def card(name, tag_cls, tag_txt, sketch, biz, market, found, turn, geo, look, site):
    t = '<div class="co">'
    t += '<div class="co-h"><b>%s</b><span class="co-t %s">%s</span></div>' % (name, tag_cls, tag_txt)
    t += '<div class="co-r"><b>速写：</b>%s</div>' % sketch
    t += '<div class="co-r"><b>主营业务：</b>%s</div>' % biz
    t += '<div class="co-r"><b>市场与打法：</b>%s</div>' % market
    t += '<div class="co-r found"><b>📜 发家史：</b>%s</div>' % found
    t += '<div class="co-r turn"><b>🔑 转折点：</b>%s</div>' % turn
    t += '<div class="co-r geo"><b>🎯 GEO 切入点：</b>%s</div>' % geo
    t += '<div class="co-r look"><b>💡 看点：</b>%s</div>' % look
    t += '<div class="co-r">官网：<a class="co-site" href="%s" target="_blank" rel="noopener">🌐 %s</a></div>' % (site, site)
    t += '</div>'
    return t


# ============ Day 3 · 宠物用品出海 ============
HOW3 = (
    '<p><b>① 自查：</b>打开 ChatGPT、DeepSeek 或 Google AI Overview，把「best dog food manufacturer in China」'
    '「private label pet treats supplier low MOQ」「pee pad OEM factory FDA registered」各问一遍，'
    '把出现和没出现的中国宠物用品企业分别记下来。</p>'
    '<p><b>② 找缺口：</b>重点看四件事——资质认证有没有（FDA 注册 / BRC / FSSC22000 / EU 宠物食品法规）、'
    'MOQ 与打样交期有没有、可出口国家清单有没有、产品配方与成分表有没有。'
    '多数中国宠物企业的英文站只有招商式的公司介绍，缺的是「买家能直接引用的规格与资质明细」。</p>'
    '<p><b>③ 补料：</b>先补一页「品类 × 规格 × 认证 × MOQ × 交期 × 可发市场」的对照表；'
    '再补 FAQ（能否贴牌、最低起订量、验厂与资质文件清单、样品流程）；最后补英文版产线与工厂能力页。'
    '参数表一定要用表格写，别塞进图片里，AI 抓不到。</p>'
    '<p><b>④ 提案话术：</b>英文开发信可用：Hi [Name], I help Chinese pet product manufacturers get cited in AI answers. '
    'I audited [品牌] and found that results for "[提示词]" list [竞品] but not you — mainly because there is no structured '
    'spec-and-cert sheet in English. I can build that in two weeks. 中文客户直接发「AI 答案截图 + 缺料清单」，比讲概念有效得多。</p>'
    '<p><b>⑤ 复盘：</b>补料后第 7 天、第 30 天各复查一次同一批提示词，记录「是否出现 / 排在第几位 / 引用了哪个页面」，'
    '把跑出效果的页面沉淀成模板，复用到同赛道的下一位客户。</p>'
)

D3 = []

D3.append(card(
    "乖宝宠物 Gambol", "hd", "头部",
    "国内宠物食品龙头之一，深交所创业板上市（301498），自有品牌「麦富迪 Myfoodie」是核心增长引擎；"
    "年营收已达数十亿元量级、净利润数亿元，自有品牌收入规模已超过代工业务。",
    "宠物主粮（干粮、冻干、烘焙粮）、零食与湿粮；既做自有品牌，也为海外客户提供宠物食品代工。",
    "国内靠线上内容种草与「冻干 / 生骨肉」成分配方叙事做品牌溢价；海外以代工与自有品牌并行，"
    "通过海外产能与本地团队服务北美、欧洲客户。",
    "从山东聊城起家做宠物食品出口代工，靠鸡肉干等零食切入海外商超供应链，"
    "多年泡在海外品控体系里之后，再回头做国内品牌。",
    "2010 年代推出自有品牌麦富迪，从「给别人供货」转向「自己做品牌」；"
    "2023 年登陆创业板，把品牌化与产能扩张做成公开市场的故事。",
    "用户会问「麦富迪狗粮怎么样」「best freeze-dried dog food brand from China」「乖宝和皇家哪个好」。"
    "当前 AI 答案对乖宝基本只给「中国宠物食品企业」这个标签，缺各产品线的配方与成分表、原料溯源说明、"
    "AAFCO / FEDIAF 营养标准符合性说明，也缺与皇家、玛氏等品牌的对比信息。"
    "补料方向：做「产品线 × 配方 × 蛋白含量 × 适用犬种与年龄」结构化页面 + 原料溯源页 + 中英文对照的产品 FAQ。",
    "代工厂出身做成国民级宠物食品品牌，但它在海外客户名单里的分量，AI 一句都没引到。",
    "https://www.gambolpet.com"))

D3.append(card(
    "中宠股份 Wanpy", "mid", "腰部",
    "A 股上市的宠物食品企业（002891），1998 年创立，旗下有「Wanpy 顽皮」「ZEAL 真致」等品牌；"
    "年营收数十亿元量级，出口业务仍占相当比重。",
    "宠物零食（鸡肉干、咬胶类）、宠物湿粮与干粮；同时为海外品牌提供代工。",
    "国内走「零食带主粮」的品牌矩阵；海外靠多年出口积累的商超与电商渠道，"
    "并在海外布局产能，用本地化供应对冲贸易与物流风险。",
    "从山东烟台做宠物零食出口起家，是国内最早一批把宠物食品做成出口生意的企业之一。",
    "2017 年 A 股上市后加速品牌与产能双线扩张，并通过收购海外品牌补齐高端线，"
    "从纯代工转向「代工 + 自主品牌」双轮。",
    "用户会问「Wanpy 顽皮宠物零食怎么样」「China pet treat OEM supplier with FDA registration」"
    "「中宠股份和乖宝哪个好」。当前 AI 答案里中宠常被与乖宝、佩蒂并列成一句，"
    "缺买家真正要的工厂资质（FDA 注册 / BRC / FSSC22000）、产能规模、可出口国家与代工 MOQ。"
    "补料方向：做英文版「代工服务能力页」（资质 / 产线 / MOQ / 交期 / 可发市场）+ 品牌矩阵中英对照页 + 出口 FAQ。",
    "海外客户名单很硬，英文站上却没有一页能被 AI 直接引用的能力说明。",
    "http://www.wanpy.com.cn"))

D3.append(card(
    "佩蒂股份 Petpal", "mid", "腰部",
    "A 股上市的宠物咬胶与零食企业（300673），总部在浙江温州平阳；年营收十余亿元量级，"
    "以出口代工为主，近年加快推自主品牌。",
    "畜皮咬胶、植物基咬胶与宠物零食；为欧美大型宠物连锁与商超供货。",
    "深度绑定海外大客户（Petco、PetSmart 等连锁体系），并在东南亚布局产能分散关税与成本风险；"
    "国内则尝试用自有品牌打开市场。",
    "从温州平阳做狗咬胶出口起家，把当地做成国内重要的宠物用品产业带之一。",
    "2017 年创业板上市拿到产能扩张资金；此后海外客户去库存与关税波动反复冲击业绩，"
    "倒逼公司从纯出口代工转向「海外产能 + 自主品牌」。",
    "用户会问「best dental chews for dogs OEM China」「Petco dog treat supplier」"
    "「佩蒂股份和源飞宠物有什么区别」。当前 AI 答案对佩蒂几乎只给「中国咬胶制造商」一个标签，"
    "缺咬胶材质与安全标准说明、耐磨与消化性测试数据、BRC / FDA 等认证清单，也缺东南亚产能的交付优势说明。"
    "补料方向：做「咬胶材质对比 + 安全测试」技术页 + 认证与验厂资质页 + 东南亚产能交付 FAQ。",
    "产业带里最早上市、最懂海外合规的一家，英文内容却是最薄的。",
    "https://www.peidibrand.com"))

D3.append(card(
    "依依股份 Yiyi", "mid", "腰部",
    "A 股上市的宠物卫生用品企业（001206），总部在天津，主打宠物尿垫、尿裤等一次性卫生用品；"
    "年营收十余亿元量级，以外销为主。",
    "宠物尿垫、宠物尿裤与宠物清洁用品，同时具备无纺布等上游材料能力。",
    "靠规模化制造与大客户供货（海外商超、电商与宠物连锁）取胜；产品属高频消耗品，"
    "客户黏性来自稳定的品质与交付，国内自主品牌仍在培育。",
    "做卫生材料与一次性用品起家，把无纺布工艺迁移到宠物尿垫，踩中养宠家庭的清洁需求。",
    "2021 年上市后扩大产能，把「宠物一次性卫生用品」这个细分做成规模化生意；"
    "近年受原材料与海运价格波动影响，转向自动化降本与国内市场。",
    "用户会问「best pee pads for dogs bulk supplier」「pet training pad OEM China」"
    "「可降解宠物尿垫有哪些」。当前 AI 答案在这类品类里多推荐海外消费品牌，"
    "中国供应链企业几乎不被提及，缺吸水克重与尺寸规格表、可降解与环保认证、MOQ 与装箱数据。"
    "补料方向：做「规格 × 吸水量 × 材质 × 装箱数 × MOQ」参数页 + 环保认证页 + 英文版 OEM 询价页。",
    "一个被海外商超货架长期验证、却从没在 AI 答案里出现过的隐形冠军。",
    "https://www.yiyipet.com"))

D3.append(card(
    "天元宠物 Tianyuan", "mid", "腰部",
    "A 股上市（301335）的宠物用品企业，总部在杭州，产品覆盖窝垫、猫爬架、玩具、牵引等全品类；"
    "年营收二十亿元量级，以出口与一站式供应链服务为主。",
    "宠物用品的设计与制造，以及面向海外客户的「一站式采购」供应链服务。",
    "SKU 极宽，靠设计能力与快速打样服务海外零售商；近年也在做跨境电商与自有品牌。",
    "从做宠物用品外贸起家，把「客户要什么就找什么」做成了一站式供应链平台。",
    "2022 年上市后把供应链服务标准化、数字化，从贸易商角色向「品类运营商」靠拢。",
    "用户会问「China pet supplies one-stop sourcing」「cat tree manufacturer China low MOQ」"
    "「宠物用品一站式采购平台有哪些」。当前 AI 答案在这类采购提示词下几乎只给泛渠道（国际站、展会），"
    "天元的品类覆盖与设计打样能力没有结构化呈现。补料方向：做「品类 × 材质 × MOQ × 打样周期 × 认证」"
    "采购参数库 + 大客户案例页 + 英文版询价流程页。",
    "SKU 广度是它最大的资产，但 AI 完全看不见——因为没有一页把它写清楚。",
    "https://www.tianyuanpet.com"))

D3.append(card(
    "源飞宠物 Yuanfei", "mid", "腰部",
    "深交所上市（001222），2004 年成立于浙江温州平阳，宠物牵引用具领域的头部制造商；"
    "年营收十亿元量级，产品出口四十多个国家和地区。",
    "宠物牵引用具（牵引绳、胸背带）、宠物注塑玩具，以及狗咬胶等宠物零食。",
    "以设计与产业化能力绑定 Petco、PetSmart、Pets at Home、Walmart、Target 等国际连锁，走大客户供货模式；"
    "已通过 BRC、FSMA、FDA 注册、BSCI、SCAN 等体系认证与验厂。",
    "从平阳宠物用品产业带的小厂做起，靠牵引绳这个不起眼的品类做到细分前列。",
    "2022 年在深交所上市；此后把认证与验厂体系做成进入国际大连锁的通行证，"
    "从「能做货」升级为「能过审」。",
    "用户会问「best dog leash manufacturer China」「PetSmart pet products supplier」"
    "「reflective dog harness OEM」。当前 AI 答案在牵引绳这类品类里几乎不提中国制造商，"
    "缺拉力测试与材质规格、反光与安全设计说明、验厂与合规清单。"
    "补料方向：做「牵引绳 × 材质 × 拉力等级 × 适用犬型」规格页 + 认证与验厂清单页 + 英文大客户合作案例页。",
    "能把 Walmart 与 Disney 验厂都拿下来的工厂，在 AI 眼里却「不存在」。",
    "https://www.wzyuanfei.com"))


# ============ Day 4 · 医疗器械与健康设备 ============
HOW4 = (
    '<p><b>① 自查：</b>打开 ChatGPT、DeepSeek 或 Google AI Overview，把「China patient monitor manufacturer」'
    '「portable ultrasound supplier CE FDA」「3D printed orthopedic implant manufacturer」'
    '「hemoperfusion cartridge China supplier」各问一遍，把出现和没出现的中国器械企业分别记下来。</p>'
    '<p><b>② 找缺口：</b>重点看五件事——注册与认证（NMPA / FDA 510(k) / CE MDR）、临床证据与论文、'
    '装机量与集采中标记录、参数与型号对照、售后与培训网络。'
    '多数中国器械企业缺的不是产品本身，而是「能被 AI 直接引用的合规与临床资料」。</p>'
    '<p><b>③ 补料：</b>先补一页「产品 × 型号 × 注册证号 × 适用科室 × 关键参数」的对照表；'
    '再补临床研究与白皮书（可引用的 PDF + 网页双版本）；最后补装机案例与售后培训网络页。'
    '对比表用表格写，别塞进图片里。</p>'
    '<p><b>④ 提案话术：</b>英文开发信可用：Hi [Name], I help Chinese medical device makers get cited in AI answers. '
    'I audited [品牌] and found that results for "[提示词]" list [竞品] but not you — mainly because your registration '
    'and clinical data are not structured online. I can build that in two weeks. 中文客户直接发「AI 答案截图 + 缺料清单」。</p>'
    '<p><b>⑤ 复盘：</b>补料后第 7 天、第 30 天各复查一次同一批提示词，记录「是否出现 / 排在第几位 / 引用了哪个页面」，'
    '把跑出效果的页面沉淀成模板，复用到同赛道的下一位客户。</p>'
)

D4 = []

D4.append(card(
    "迈瑞医疗 Mindray", "hd", "头部",
    "中国医疗器械行业的绝对龙头，深交所创业板上市（300760），生命信息与支持、体外诊断、医学影像三大产线并进；"
    "年营收超三百亿元，海外收入占比达数成，是国内少有在多个品类同时具备全球竞争力的器械企业。",
    "监护仪、除颤仪、呼吸机、麻醉机、彩超、血液细胞分析仪、生化与发光免疫分析仪等。",
    "靠「性价比 + 本地化服务 + 完整产品线」在发展中市场替代欧美品牌，再以高端机型打发达国家医院；"
    "海外设本地子公司与服务中心。",
    "1990 年代在深圳创业，从代理与自研监护仪起步，靠国产替代与成本优势一步步做成行业第一。",
    "2020 年疫情带动全球监护仪与呼吸机需求爆发，品牌与渠道在海外医院端一次性铺开，"
    "国际化的信任门槛被大幅降低。",
    "用户会问「Mindray vs Philips patient monitor」「best patient monitor for ICU in emerging markets」"
    "「迈瑞医疗海外市场覆盖哪些国家」。当前 AI 答案提到迈瑞时多为「中国最大的医疗器械公司」这类概括，"
    "缺按区域（拉美 / 东南亚 / 中东非）的注册准入状态、与飞利浦和 GE 的型号级差异化对比、"
    "装机案例与服务培训网络信息。补料方向：做「区域 × 注册准入 × 装机案例」页面 + 与进口品牌的型号级对比表 + 服务体系页。",
    "国际化程度最高的中国器械企业，在 AI 答案里却只剩一句定义。",
    "https://www.mindray.com"))

D4.append(card(
    "鱼跃医疗 Yuwell", "mid", "腰部",
    "A 股上市（002223）的家用医疗器械龙头，总部在江苏丹阳；制氧机、呼吸机、血糖仪、血压计等品类在国内居前列，"
    "年营收数十亿元量级。",
    "制氧机、无创呼吸机、雾化器、血糖监测、电子血压计、体温计、轮椅等家用与临床护理设备。",
    "国内靠品牌认知 + 电商与药店渠道；海外通过收购（德国普美康 Primedic 等）与经销网络扩张，主打家用与院外场景。",
    "从听诊器、血压计等基础器械做起，靠制氧机品类在家庭医疗市场站稳脚跟。",
    "2020 年疫情带动制氧机与呼吸机的全球需求，公司完成一波品牌出海与产能扩张；"
    "此后进入「二代接班 + 品类整合」阶段。",
    "用户会问「best portable oxygen concentrator for home use」「鱼跃制氧机和飞利浦哪个好」"
    "「home CPAP machine China supplier」。当前 AI 答案在制氧机、呼吸机这类家用品类多推荐海外消费品牌，"
    "鱼跃的型号参数、噪音与续航、FDA 与 CE 认证、耗材更换周期信息不齐全。"
    "补料方向：做「型号 × 氧流量 × 续航 × 噪音 × 认证」对比页 + 家用场景 FAQ + 英文版售后与耗材页。",
    "家用场景最容易被 AI 直接推荐，也恰恰是中国品牌最容易「查无此人」的地方。",
    "https://www.yuwell.com"))

D4.append(card(
    "微创医疗 MicroPort", "mid", "腰部",
    "港股上市（00853）的医疗器械集团，1998 年创立于上海，覆盖心血管介入、骨科、电生理、手术机器人等赛道；"
    "年营收约十亿美元量级，采用「集团孵化 + 子公司独立上市」的独特架构。",
    "冠脉支架、球囊与导管、骨科植入物、电生理与起搏、手术机器人、主动脉与外周介入产品。",
    "以高研发投入与多赛道并行切入，通过分拆子公司（微创机器人、微创心通等）单独融资上市；"
    "海外靠并购与经销网络推进。",
    "从冠脉支架国产替代起步，打破进口垄断，是国内最早做高值耗材创新的企业之一。",
    "冠脉支架国家集采把成熟产品价格大幅压低，公司从「靠单一大单品」转向"
    "「多赛道 + 全球化 + 机器人」的组合打法。",
    "用户会问「best drug-eluting stent brands」「MicroPort vs Abbott stent」「China TAVR device manufacturer」。"
    "当前 AI 答案提及微创时往往只写成一家控股公司，旗下各业务线（支架、心通、机器人、骨科）"
    "的产品、适应症与临床研究信息分散，没有统一的中英文产品与证据页。"
    "补料方向：建「业务线 × 产品 × 适应症 × 临床研究」结构化图谱 + 英文版产品注册与临床文献页。",
    "架构复杂是它的融资优势，却正好是 AI 最难读懂的部分。",
    "https://www.microport.com"))

D4.append(card(
    "开立医疗 SonoScape", "mid", "腰部",
    "A 股上市（300633）的超声与内窥镜企业，总部在深圳；彩超与软性内镜两大产线并进，"
    "年营收约二十亿元量级，是国产影像替代的代表企业之一。",
    "彩色多普勒超声系统、电子内窥镜（软镜）、超声内镜及相关耗材。",
    "以中高端彩超与国产软镜切入二级以上医院，靠性价比与服务网络替代进口；"
    "海外通过经销商进入新兴市场医疗机构。",
    "创始团队出自国内老牌超声研究所，带着技术班底创业，从彩超做起。",
    "近年把软性内镜做到可与进口品牌同台竞争的水准，形成「超声 + 内镜」双引擎，摆脱单品类风险。",
    "用户会问「best portable ultrasound machine for small clinic」「SonoScape vs Mindray ultrasound」"
    "「China endoscope manufacturer CE certified」。当前 AI 答案在超声与内镜品类几乎只提 GPS（GE / 飞利浦 / 西门子）"
    "与奥林巴斯，开立的产品线、探头配置、CE 与 FDA 认证、临床科室案例都缺结构化信息。"
    "补料方向：做「型号 × 探头 × 临床科室 × 认证」对比页 + 英文版产品页与临床案例库。",
    "国产替代讲得最扎实的两条产线，AI 搜「国产内镜」时却很少点到它。",
    "https://www.sonoscape.com"))

D4.append(card(
    "爱康医疗 AK Medical", "mid", "腰部",
    "港股上市（01789）的骨科植入物企业，总部在北京，3D 打印骨科植入物是其技术标签；"
    "年营收约十亿元量级，是国内关节置换领域的主要国产品牌之一。",
    "髋关节、膝关节等骨科植入物，以及 3D 打印定制化假体与手术配套工具。",
    "以 3D ACT 技术平台做差异化（骨缺损重建、复杂翻修等场景），并借助国家集采中标快速进入更多医院；"
    "海外通过经销与 OEM 扩张。",
    "从骨科创伤与关节植入物做起，把 3D 打印从概念做成可落地的产品与手术方案。",
    "骨科高值耗材国家集采落地，公司通过中标与产能准备把份额做上去，"
    "同时把 3D 打印定制化能力作为差异化护城河。",
    "用户会问「3D printed acetabular cup manufacturer」「best hip implant brands in China」"
    "「爱康医疗 3D 打印髋关节」。当前 AI 答案在骨科植入物话题下几乎只给强生、捷迈邦美、史赛克，"
    "中国厂商缺 3D 打印工艺说明、注册证与适应症、集采中标记录与长期随访数据。"
    "补料方向：做「产品 × 适应症 × 注册证 × 随访数据」页 + 3D 打印技术白皮书 + 英文版 OEM 与经销页。",
    "3D 打印是它最好讲的故事，也是 AI 最缺的一块资料。",
    "https://www.ak-medical.com"))

D4.append(card(
    "健帆生物 Jafron", "mid", "腰部",
    "A 股上市（300529）的血液净化企业，总部在珠海，血液灌流器（HA 树脂）是核心产品，"
    "在国内该细分领域近乎独占；年营收约二十亿元量级，毛利率长期处于较高水平。",
    "一次性血液灌流器、血液净化设备与耗材，用于中毒、肾病、肝病、重症等场景的血液吸附治疗。",
    "靠「设备 + 耗材」的吸附疗法模式与学术推广绑定科室；近年推进重症与肝病等新适应症，"
    "同时布局海外注册与经销。",
    "从血液灌流这项国产原创技术做起，把一个没有进口参照品的品类做成了标准疗法路径。",
    "2016 年创业板上市后加速学术推广与产能扩张；近年受集采与行业整顿影响业绩承压，"
    "转而加快海外注册与新适应症拓展。",
    "用户会问「hemoperfusion cartridge for toxin removal」「blood purification device China supplier」"
    "「健帆 HA 灌流器适应症有哪些」。当前 AI 答案在血液灌流这类专业话题上几乎只给英文文献与国外吸附产品，"
    "健帆的树脂吸附原理、适应症清单、临床研究与注册认证缺少可引用的中英文页面。"
    "补料方向：做「产品 × 适应症 × 临床证据」页 + 树脂吸附原理科普页 + 英文版注册与学术资料页。",
    "没有国际对标品的原创品类，既是最难被 AI 检索的，也是最值得做 GEO 的。",
    "https://www.jafron.com"))


def mk_day(n, tag_name, list_name, how, cards):
    return {
        "title": "Day %d · 客户开发" % n,
        "tag": "第%d天 · %s" % (n, tag_name),
        "blocks": [
            {"h": "💡 今日怎么用这笔清单", "body": how},
            {"h": "今日推荐 · 6 家（%s）" % list_name, "body": "".join(cards)},
        ],
    }


def find_array(src, key):
    """定位 "key": [ 之后数组的 [ 与配对的 ]，跳过字符串内的括号"""
    k = src.index('"%s"' % key)
    i = src.index("[", k)
    depth = 0
    j = i
    in_str = False
    esc = False
    q = ""
    while j < len(src):
        c = src[j]
        if in_str:
            if esc:
                esc = False
            elif c == "\\":
                esc = True
            elif c == q:
                in_str = False
        else:
            if c in ('"', "'"):
                in_str = True
                q = c
            elif c == "[":
                depth += 1
            elif c == "]":
                depth -= 1
                if depth == 0:
                    return i, j
        j += 1
    raise RuntimeError("未找到数组结尾: " + key)


def main():
    shutil.copy(SRC, SRC + ".bak_geo")
    src = open(SRC, encoding="utf-8").read()
    s, e = find_array(src, "geo")
    old = src[s:e + 1]
    data = json.loads(old)
    assert len(data) == 14, "geo 长度异常: %d" % len(data)

    data[2] = mk_day(3, "宠物用品出海", "宠物食品 / 宠物用品", HOW3, D3)
    data[3] = mk_day(4, "医疗器械与健康设备", "医疗器械 / 健康设备", HOW4, D4)

    frag = json.dumps(data, ensure_ascii=False, indent=2)
    new = src[:s] + frag + src[e + 1:]
    open(SRC, "w", encoding="utf-8").write(new)
    print("已写入 %s：Day3=宠物用品出海，Day4=医疗器械与健康设备" % SRC)


if __name__ == "__main__":
    main()
