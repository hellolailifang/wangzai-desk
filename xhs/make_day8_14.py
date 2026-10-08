# -*- coding: utf-8 -*-
# 生成 Day 8–14 的 geo(客户开发) + overseas(开发方向) 篇目，注入 content.js
# 风格严格对齐现有元素：单引号 key、2/4/6/8 空格缩进、body 单行、<br>\n 分隔
import io, sys

INDUSTRIES = [
  {
    'day': 8,
    'cn': '工业机器人 / 自动化产线',
    'en': 'industrial robots / automation',
    'short': '机器人',
    'geo_intro': '今天开发方向是「工业机器人 / 自动化产线」。这 6 家都是真实存在、且有自动化出海基因的目标：1 家龙头当标杆，5 家腰部当可开发客户。先打开它们官网/阿里国际站，看英文内容缺什么，再用「海外买家在 AI 里搜不到你」开场。',
    'companies': [
      ('头部', '埃斯顿 / Estun', '国产工业机器人本体与运动控制龙头，南京起家。海外集成商会搜"Estun robot supplier China"，埃斯顿英文产品页有基础，但焊接/码垛等应用案例 FAQ 浅，GEO 可补答案位。'),
      ('腰部', '汇川技术 / Inovance', '伺服、变频器与 SCARA 机器人巨头，深圳。海外工程师常问"China servo drive supplier"，汇川英文偏产品型录，缺选型 FAQ + 行业解决方案这类 AI 最爱引的内容。'),
      ('腰部', '新松机器人 / SIASUN', '中科院背景的国产机器人标杆，沈阳。海外搜"Siasun industrial robot"品牌认知靠展会，英文结构化工艺页少，GEO 能帮它从展会流量沉淀到 AI 答案。'),
      ('腰部', '拓斯达 / Topstar', '东莞自动化集成商，注塑机械手与产线为主。海外买家搜"automation integrator China"，拓斯达英文案例故事几乎空白，正是 GEO 可打的内容缺口。'),
      ('腰部', '埃夫特 / EFORT', '芜湖机器人本体企业，通过欧洲收购铺海外。海外搜"Efort robot"，英文权威技术内容不足，长尾应用词答案位被同行占。'),
      ('腰部', '广州数控 / GSK', '数控系统与机器人供应商，广州。海外搜"GSK CNC robot"，英文站偏传统型录，缺可被 AI 直接引用的精度/负载/案例 FAQ。'),
    ],
    'os_intro': '今天先打「工业机器人 / 自动化产线」——它是最容易被 AI 推荐上来的中国智能装备，没有之一。先把 llms.txt + FAQPage 铺起来，再去「开发地址」捞工厂/买家。Day1–Day14 可点，前后方向一目了然。',
    'os_profile': '你（维卓 GEO 销售，客户群=中国出海制造企业；GEO 为主，SEO/独立站为辅）。下面这个方向，最该推 GEO 👇<br><br>'
                  '中国是全球最大的工业机器人应用与制造国，汽车、3C、锂电、光伏产线都在批量上机器人。海外集成商、设备采购在 ChatGPT/Perplexity 问"best industrial robot supplier in China"时，答案常被海外媒体或大英文站占位，你的官网常常不在场——这就是 GEO 的空位。'
                  '适合 GEO 的原因：① 参数高度标准化（负载、臂展、重复定位精度），AI 最爱引用可比数据；② 行业解决方案（焊接、码垛、上下料）是长尾高频问题；③ 出海建厂与本地服务是决策关键点，内容会被反复检索。',
  },
  {
    'day': 9,
    'cn': '电动工具 / 五金工具',
    'en': 'power tools / hardware',
    'short': '电动工具',
    'geo_intro': '今天开发方向是「电动工具 / 五金工具」。海外 DIY 玩家、专业技工、采购在 AI 里搜"best cordless drill China"时，答案常被 Amazon 榜单和海外品牌占位。这 6 家是国内电动工具出海主力，头部当品牌标杆、腰部当可开发工厂。谈单抓手：英文站只有参数、没有 buyer 评测/场景 FAQ。',
    'companies': [
      ('头部', '巨星科技 / GreatStar', '手工具与电动工具双线巨头，杭州，收购 Arrow/Lista 等海外品牌。海外搜"GreatStar tools"多品牌分散，中国母公司认知弱，GEO 可把品牌答案位收口。'),
      ('腰部', '泉峰控股 / Chervon', '南京电动工具 ODM 龙头，EGO/DEVON 自有品牌出海。海外搜"Chervon power tools"品牌强，但"made by Chervon China"溯源内容少，GEO 可补。'),
      ('腰部', '宝时得 / Positec', '苏州企业，Worx 品牌全球知名。海外搜"Worx tools"认知高，但"Positec China 制造商"英文权威内容缺，GEO 可建信任背书。'),
      ('腰部', '东成 / Dongcheng', '江苏启东电动工具主力厂，国内销量大、出海加速。海外搜"Dongcheng power tool"，英文站基础，长尾词答案位是空白。'),
      ('腰部', '锐奇股份 / RiKi', '上海电动工具企业，创业板上市。海外搜"Riki power tools China"，英文内容薄，缺产品对比与场景 FAQ。'),
      ('腰部', '创科实业 / TTI', '港资巨头，RYOBI/Milwaukee 背后智造基地。海外搜"TTI power tools"品牌强，但中国智造溯源故事少，GEO 可做品牌背书。'),
    ],
    'os_intro': '今天先打「电动工具 / 五金工具」——标准化程度高、海外 DIY 市场巨大，AI 答案位争夺最激烈的方向之一。先把 llms.txt + FAQPage 铺起来，再去「开发地址」捞工厂/买家。Day1–Day14 可点，前后方向一目了然。',
    'os_profile': '你（维卓 GEO 销售，客户群=中国出海制造企业；GEO 为主，SEO/独立站为辅）。下面这个方向，最该推 GEO 👇<br><br>'
                  '中国是全球电动工具最大生产基地，ODM/OEM 供给了欧美大半市场。海外 DIY 玩家和专业技工在 ChatGPT/Perplexity 问"best cordless drill brand"时，答案几乎被海外品牌和电商平台占据，代工厂自身隐形。'
                  '适合 GEO 的原因：① SKU 极多、参数可比（电压、扭矩、电池平台），AI 引用意愿高；② 品牌出海与代工溯源是信任分歧点，内容需求强；③ 评测/场景/兼容 FAQ 是长尾高频问题，正是工厂英文站的空白。',
  },
  {
    'day': 10,
    'cn': '泵 / 阀门 / 流体控制',
    'en': 'pumps & valves / fluid control',
    'short': '泵阀',
    'geo_intro': '今天开发方向是「泵 / 阀门 / 流体控制」。海外工程公司、水处理和工业采购在 AI 里搜"centrifugal pump supplier China"时，答案常被欧美老牌占位。这 6 家是国内泵阀出海活跃主体，头部当设备商标杆、腰部当可开发工厂。谈单切入点：英文站只有型录，没有选型 FAQ/工况曲线/材质说明。',
    'companies': [
      ('头部', '南方泵业 / CNP', '不锈钢离心泵龙头，杭州（中金环境）。海外搜"CNP pump China"，英文产品页有基础，但应用工况 FAQ 浅，GEO 可补。'),
      ('腰部', '新界泵业 / Shimge', '浙江农用与民用水泵主力，出海比例高。海外搜"Shimge water pump"，英文站基础，长尾词答案位空白。'),
      ('腰部', '利欧股份 / Leo', '浙江泵业（工业/市政/水利），业务广。海外搜"Leo pump"，英文案例故事少，GEO 可建。'),
      ('腰部', '凯泉泵业 / Kaiquan', '上海泵阀企业，非上市但体量大。海外搜"Kaiquan pump"，英文内容薄，缺 AI 可引用的选型内容。'),
      ('腰部', '伟隆股份 / Wilong', '青岛阀门企业（给排水/消防），上市。海外搜"Wilong valve"，英文站需强化材质与认证页。'),
      ('腰部', '江苏神通 / Shentong', '核电/冶金/石化特种阀门，上市。海外搜"Shentong valve"，专业领域英文权威内容缺，GEO 可打。'),
    ],
    'os_intro': '今天先打「泵 / 阀门 / 流体控制」——工业刚需、认证门槛高、海外工程采购长决策周期，最该做 GEO 的 B2B 方向之一。先把 llms.txt + FAQPage 铺起来，再去「开发地址」捞工厂/买家。Day1–Day14 可点，前后方向一目了然。',
    'os_profile': '你（维卓 GEO 销售，客户群=中国出海制造企业；GEO 为主，SEO/独立站为辅）。下面这个方向，最该推 GEO 👇<br><br>'
                  '中国是全球泵阀制造大国，从民用水泵到核电特种阀门都有完整产业链。海外 EPC、水厂、工厂采购在 ChatGPT/Perplexity 问"reliable valve supplier China"时，答案常被欧美老牌占据，国产优质厂隐形。'
                  '适合 GEO 的原因：① 认证是硬门槛（CE、API、UL），AI 最爱引用；② 工况参数（流量、扬程、材质）高度可比，长尾词多；③ 采购决策周期长（数月），内容会被反复检索对比。',
  },
  {
    'day': 11,
    'cn': '包装机械 / 包装设备',
    'en': 'packaging machinery',
    'short': '包装机械',
    'geo_intro': '今天开发方向是「包装机械 / 包装设备」。海外食品、饮料、日化工厂在 AI 里搜"bottling line supplier China"时，答案被海外设备商占位。这 6 家是国内包装机械出海主力，头部当设备商标杆、腰部当可开发工厂。谈单抓手：英文站只有设备参数，没有整线方案/产能 FAQ。',
    'companies': [
      ('头部', '达意隆 / Tech-Long', '广州饮料包装机械龙头，上市。海外搜"Tech-Long filling machine"，英文有基础但长尾应用浅，GEO 可补。'),
      ('腰部', '新美星 / Newamstar', '张家港灌装包装线企业，上市。海外搜"Newamstar bottling"，英文案例少，缺整线方案内容。'),
      ('腰部', '中亚股份 / Zhongya', '杭州包装机械，上市。海外搜"Zhongya packaging"，英文偏型录，AI 难直接引用。'),
      ('腰部', '永创智能 / Youngsun', '杭州包装设备，上市。海外搜"Youngsun packing machine"，英文内容薄，长尾词空白。'),
      ('腰部', '博实股份 / Boshi', '哈尔滨粉粒料包装机器人，上市。海外搜"Boshi packaging robot"，英文案例缺，GEO 可打。'),
      ('腰部', '东方精工 / OFG', '佛山瓦楞纸箱包装设备，上市。海外搜"Dongfang corrugated"，英文站基础，缺应用 FAQ。'),
    ],
    'os_intro': '今天先打「包装机械 / 包装设备」——食品饮料出海带动的设备刚需，参数标准化、海外建厂多，GEO 价值高。先把 llms.txt + FAQPage 铺起来，再去「开发地址」捞工厂/买家。Day1–Day14 可点，前后方向一目了然。',
    'os_profile': '你（维卓 GEO 销售，客户群=中国出海制造企业；GEO 为主，SEO/独立站为辅）。下面这个方向，最该推 GEO 👇<br><br>'
                  '中国包装机械在饮料、食品、日化领域全球竞争力强，整线出海（东南亚、中东、非洲建厂）活跃。海外工厂主在 ChatGPT/Perplexity 问"turnkey packaging line China"时，答案常被欧洲老牌（Krones 等）占位，国产设备商隐形。'
                  '适合 GEO 的原因：① 整线方案、产能、兼容包材等参数高度可比；② 交钥匙工程需要大量解释性内容（AI 最爱引）；③ 出海建厂案例是信任背书，长尾检索高频。',
  },
  {
    'day': 12,
    'cn': '紧固件 / 轴承 / 传动件',
    'en': 'fasteners / bearings / transmission',
    'short': '紧固传动',
    'geo_intro': '今天开发方向是「紧固件 / 轴承 / 传动件」。海外机械、汽车、维修采购在 AI 里搜"bearing supplier China"时，答案被平台与欧美品牌占位。这 6 家是国内紧固/轴承/传动出海代表，头部当标杆、腰部当可开发工厂。谈单切入点：英文站只有型号表，没有选型 FAQ/载荷曲线/应用案例。',
    'companies': [
      ('头部', '晋亿实业 / Gem-Year', '紧固件龙头，浙江，上市。海外搜"Gem-Year fastener"，英文产品页有但应用 FAQ 浅，GEO 可补。'),
      ('腰部', '人本股份 / C&U', '温州轴承巨头（最大民企之一）。海外搜"C&U bearing"，英文内容薄，缺 AI 可引用选型内容。'),
      ('腰部', '瓦轴 / ZWZ', '辽宁轴承国企，历史悠久。海外搜"ZWZ bearing"，英文站传统型录，GEO 可现代化。'),
      ('腰部', '双环传动 / Shuanghuan', '浙江齿轮与传动件，上市。海外搜"Shuanghuan gear"，英文案例少，长尾词空白。'),
      ('腰部', '杭齿前进 / Advance', '杭州齿轮箱与传动，上市。海外搜"Advance gearbox"，英文内容薄，缺应用 FAQ。'),
      ('腰部', '力星股份 / LiXing', '江苏轴承滚动体（精密钢球/滚子），上市。海外搜"LiXing bearing roller"，专业英文权威内容缺，GEO 可打。'),
    ],
    'os_intro': '今天先打「紧固件 / 轴承 / 传动件」——工业底层件、SKU 海量、海外维修与制造刚需，最该做 GEO 的长尾金矿。先把 llms.txt + FAQPage 铺起来，再去「开发地址」捞工厂/买家。Day1–Day14 可点，前后方向一目了然。',
    'os_profile': '你（维卓 GEO 销售，客户群=中国出海制造企业；GEO 为主，SEO/独立站为辅）。下面这个方向，最该推 GEO 👇<br><br>'
                  '紧固件、轴承、传动件是机械的"工业大米"，中国产量全球第一，但海外买家在 ChatGPT/Perplexity 问"best bearing supplier in China"时，答案被平台和大品牌占据，工厂隐形。'
                  '适合 GEO 的原因：① SKU 海量、型号/载荷/精度参数极可比，长尾词爆炸；② 选型、替代、维保 FAQ 是高频问题，工厂英文站几乎空白；③ 认证（ISO、ABEC 等级）是硬门槛，AI 引用意愿高。',
  },
  {
    'day': 13,
    'cn': '激光设备 / 激光加工',
    'en': 'laser equipment / laser processing',
    'short': '激光',
    'geo_intro': '今天开发方向是「激光设备 / 激光加工」。海外制造、钣金、光伏工厂在 AI 里搜"fiber laser cutter supplier China"时，答案被平台与大英文站占位。这 6 家是国内激光装备出海主力，头部当设备商标杆、腰部当可开发工厂。谈单抓手：英文站只有参数，没有工艺 FAQ/材料切割案例。',
    'companies': [
      ('头部', '大族激光 / Han’s Laser', '深圳激光设备龙头，上市。海外搜"Han’s Laser"，品牌强但长尾应用（切割/焊接）英文页浅，GEO 可补。'),
      ('腰部', '华工科技 / Hgtech', '武汉激光与光通信，上市。海外搜"Hgtech laser"，英文内容薄，缺工艺 FAQ。'),
      ('腰部', '锐科激光 / Raycus', '武汉光纤激光器，上市。海外搜"Raycus fiber laser"，英文偏型录，AI 难引用。'),
      ('腰部', '联赢激光 / UW Laser', '深圳激光焊接，上市。海外搜"UW laser welding"，英文案例少，GEO 可打。'),
      ('腰部', '海目星 / Hymson', '深圳激光切割与锂电设备，上市。海外搜"Hymson laser"，英文站基础，长尾空白。'),
      ('腰部', '帝尔激光 / DR Laser', '武汉光伏激光设备，上市。海外搜"DR Laser solar"，专业英文权威内容缺，GEO 可建。'),
    ],
    'os_intro': '今天先打「激光设备 / 激光加工」——中国智造出海的名片之一，参数透明、海外钣金厂刚需，GEO 价值高。先把 llms.txt + FAQPage 铺起来，再去「开发地址」捞工厂/买家。Day1–Day14 可点，前后方向一目了然。',
    'os_profile': '你（维卓 GEO 销售，客户群=中国出海制造企业；GEO 为主，SEO/独立站为辅）。下面这个方向，最该推 GEO 👇<br><br>'
                  '中国激光设备全球份额领先，从打标、切割到焊接、光伏专用全面出海。海外钣金厂、制造企业在 ChatGPT/Perplexity 问"best fiber laser cutter China"时，答案常被平台（如 Machinio）和大英文站占位，设备商自身隐形。'
                  '适合 GEO 的原因：① 功率、幅面、精度参数高度可比，AI 引用意愿高；② 材料工艺 FAQ（切多厚、配什么气体）是长尾高频；③ 海外建厂与本地服务案例是信任背书，检索高频。',
  },
  {
    'day': 14,
    'cn': '3D 打印 / 增材制造',
    'en': '3D printing / additive manufacturing',
    'short': '3D打印',
    'geo_intro': '今天开发方向是「3D 打印 / 增材制造」。海外工程师、创客、医疗牙科在 AI 里搜"metal 3D printing service China"时，答案被海外服务商占位。这 6 家是国内增材制造出海代表，头部当标杆、腰部当可开发工厂。谈单切入点：英文站只有设备参数，没有材料/工艺/应用案例 FAQ。',
    'companies': [
      ('头部', '铂力特 / BLT', '西安金属 3D 打印龙头，科创板。海外搜"BLT 3D printing"，英文技术页有但应用案例浅，GEO 可补。'),
      ('腰部', '华曙高科 / Farsoon', '长沙金属与尼龙 3D 打印，科创板。海外搜"Farsoon additive"，英文有但长尾少，GEO 可扩。'),
      ('腰部', '创想三维 / Creality', '深圳消费级 3D 打印龙头，全球知名。海外搜"Creality 3D printer"品牌强，但"made in China GEO"溯源内容少。'),
      ('腰部', '先临三维 / Shining3D', '杭州 3D 扫描与打印，上市辅导。海外搜"Shining3D scanner"，英文内容薄，缺应用 FAQ。'),
      ('腰部', '易加三维 / Eplus3D', '杭州金属 3D 打印，出海活跃。海外搜"Eplus3D metal printing"，英文站基础，长尾空白。'),
      ('腰部', '联泰科技 / UnionTech', '上海光固化 3D 打印（SLA），老牌。海外搜"UnionTech SLA"，英文案例少，GEO 可打。'),
    ],
    'os_intro': '今天先打「3D 打印 / 增材制造」——设计端与制造端都高度依赖搜索，海外创客与工程师天天在 AI 里问，最该做 GEO 的新兴方向。先把 llms.txt + FAQPage 铺起来，再去「开发地址」捞工厂/买家。Day1–Day14 可点，前后方向一目了然。',
    'os_profile': '你（维卓 GEO 销售，客户群=中国出海制造企业；GEO 为主，SEO/独立站为辅）。下面这个方向，最该推 GEO 👇<br><br>'
                  '中国 3D 打印从消费级到金属级全面崛起，Creality 等品牌已深入海外创客圈。海外工程师、牙科、小批量制造在 ChatGPT/Perplexity 问"best 3D printing service China"时，答案常被海外服务商占位，中国智造隐形。'
                  '适合 GEO 的原因：① 材料、工艺、精度参数极可比，AI 引用意愿高；② 应用案例（拓扑优化、随形冷却）是长尾高频问题；③ 设计到制造的链路长，内容会被反复检索。',
  },
]

BR = '<br>\\n'  # JS 源码里字面 \n 转义

def esc(s):
    # 保险：JS 单引号字符串内若出现 ASCII 单引号，转义为 \' 避免语法破坏
    return s.replace("'", "\\'")

def fmt_geo(ind):
    comps = BR.join(
        '<b>%s %s · %s</b> — %s' % ('🏢' if r == '头部' else '⭐', r, name, desc)
        for (r, name, desc) in ind['companies']
    )
    comps = esc(comps)
    return (
        "    {\n"
        "      title: '%s',\n" % esc('Day %d · 客户开发（%s）' % (ind['day'], ind['cn']))
        + "      tag: '%s',\n" % esc('第%d天 · %s（%s）' % (ind['day'], ind['cn'], ind['en']))
        + "      short: '%s',\n" % esc(ind['short'])
        + "      blocks: [\n"
        + "        {\n"
        + "          h: '💡 今日怎么用这笔清单',\n"
        + "          body: '%s'\n" % esc(ind['geo_intro'])
        + "        },\n"
        + "        {\n"
        + "          h: '今日推荐 · 6 家（%s）',\n" % esc(ind['cn'])
        + "          body: '%s'\n" % comps
        + "        }\n"
        + "      ]\n"
        + "    }"
    )

def fmt_os(ind):
    return (
        "    {\n"
        "      title: '%s',\n" % esc('Day %d · 开发方向（%s）' % (ind['day'], ind['cn']))
        + "      tag: '%s',\n" % esc('第%d天 · %s（%s）' % (ind['day'], ind['cn'], ind['en']))
        + "      short: '%s',\n" % esc(ind['short'])
        + "      blocks: [\n"
        + "        {\n"
        + "          h: '🎯 今天怎么打这个方向',\n"
        + "          body: '%s'\n" % esc(ind['os_intro'])
        + "        },\n"
        + "        {\n"
        + "          h: '🏭 行业画像 · 为什么最该做 GEO',\n"
        + "          body: '%s'\n" % esc(ind['os_profile'])
        + "        }\n"
        + "      ]\n"
        + "    }"
    )

def find_close(s, open_pos):
    assert s[open_pos] == '['
    depth = 0
    i = open_pos
    n = len(s)
    while i < n:
        c = s[i]
        if c == '\\':
            i += 2
            continue
        if c == "'":
            i += 1
            while i < n:
                if s[i] == '\\':
                    i += 2
                    continue
                if s[i] == "'":
                    i += 1
                    break
                i += 1
            continue
        if c == '[':
            depth += 1
        elif c == ']':
            depth -= 1
            if depth == 0:
                return i
        i += 1
    return -1

def inject(arr_name, fmt_fn, src):
    key = '%s: [' % arr_name
    kpos = src.index(key)
    open_pos = src.index('[', kpos)
    close = find_close(src, open_pos)
    if close < 0:
        raise RuntimeError('找不到 %s 数组结束' % arr_name)
    block = ',\n'.join(fmt_fn(ind) for ind in INDUSTRIES)
    # 在结束 ] 前插入：先补一个逗号 + 新块
    new = src[:close] + ',\n' + block + src[close:]
    return new

def main():
    f = 'content.js'
    src = io.open(f, encoding='utf-8').read()
    src2 = inject('geo', fmt_geo, src)
    src3 = inject('overseas', fmt_os, src2)
    io.open(f, 'w', encoding='utf-8').write(src3)
    # 自校验：统计新标题数量
    import re
    added = len(re.findall(r"Day (8|9|10|11|12|13|14) · (客户开发|开发方向)", src3))
    print('已注入 geo+overseas 新篇目，新增标题命中数 =', added, '(应为 14)')
    print('content.js 字节数 =', len(src3))

if __name__ == '__main__':
    main()
