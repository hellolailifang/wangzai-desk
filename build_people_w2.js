/* 每周刷新 · 名人故事（finance）
   规则：
   - 12 位「锚定人物」的 title 必须与 trade/overseas 中 fam-btn 的 data-fp 完全一致，不可改动
   - 其余 8 位为本周轮换的新人物
   - 照片优先真实维基缩略图；无图者用 assets/face-fallback.svg；本地已有 jpg 作二级兜底
*/
const fs = require('fs');
const path = '/Users/lailifang/WorkBuddy/2026-07-27-09-50-21/content.js';
const t = fs.readFileSync(path, 'utf8');

const W = 'https://upload.wikimedia.org/wikipedia/commons/';
const FB = 'assets/face-fallback.svg';

const raw = [
  // ===== 锚定人物（title 不可改：被企业模块 data-fp 引用）=====
  {
    name: '埃隆·马斯克 Elon Musk',
    photo: W + 'thumb/5/5e/Elon_Musk_-_54820081119_%28cropped%29.jpg/500px-Elon_Musk_-_54820081119_%28cropped%29.jpg',
    alt2: 'assets/people/musk.jpg',
    tags: '特斯拉 · SpaceX · 星链 · xAI · 垂直整合',
    intro: '1971 年生于南非比勒陀利亚，现兼具南非、加拿大、美国身份，工程师出身的连续创业者。截至 2026 年仍在世并活跃于一线经营。他的路径是「Zip2 → X.com/PayPal → SpaceX → 特斯拉 → 星链 → xAI」，几乎每一步都在做别人认为不可能的重资产硬件。',
    achieve: '把特斯拉从濒临破产做成全球最具影响力的电动车企；用猎鹰九号实现一级火箭回收复用，把单位发射成本压到传统方案的零头；星链把低轨卫星互联网做成规模化商业服务；近年长期位居全球富豪榜前列。',
    highlight: '「把问题拆到物理层面再重新算一遍成本」——第一性原理不是口号，是他砍掉电池与火箭成本的具体方法。'
  },
  {
    name: '任正非 Ren Zhengfei',
    photo: W + 'thumb/d/d8/Ren_Zhengfei_%282016%29.jpg/500px-Ren_Zhengfei_%282016%29.jpg',
    alt2: 'assets/people/ren.jpg',
    tags: '华为 · 深圳 · 5G · 海思 · 鸿蒙 · 备胎计划',
    intro: '1944 年生于贵州安顺，工程兵出身。截至 2026 年仍在世。1987 年在深圳以 2.1 万元起家做交换机代理，一路做到全球最大通信设备商。面对外部极限施压，他提前多年布局「备胎计划」，押注海思自研芯片与鸿蒙操作系统。',
    achieve: '把华为带成全球通信与 5G 专利龙头；在断供压力下推动海思麒麟与鸿蒙生态落地，成为国产替代的标志性案例；以全员持股与「灰度管理」建立了独特的组织形态。',
    highlight: '「烧不死的鸟才是凤凰。」——总部就在深圳，这是离旺仔最近的一份硬核样本。'
  },
  {
    name: '雷军 Lei Jun',
    photo: W + 'thumb/4/4f/Lei_Jun_at_Two_Sessions_2025.png/500px-Lei_Jun_at_Two_Sessions_2025.png',
    alt2: 'assets/people/lei.jpg',
    tags: '小米 · 性价比 · IoT 生态链 · 造车 · 产品营销',
    intro: '1969 年生于湖北仙桃，武汉大学计算机系毕业。截至 2026 年仍在世。先带金山软件上市，2010 年创立小米，用「互联网直销 + 极致性价比」改写手机行业；2021 年宣布造车，2024 年小米 SU7 上市即成现象级产品。',
    achieve: '小米长期稳居全球智能手机前三，并搭起全球最大的消费级 IoT 生态链；跨界造车三年内交出爆款；把「感动人心、价格厚道」变成可复制的产品方法论。',
    highlight: '「参数敢公开、价格敢对比」——他把发布会做成了品牌最大的销售渠道。'
  },
  {
    name: '杰夫·贝索斯 Jeff Bezos',
    photo: W + 'thumb/f/fc/260202-D-PM193-2205_SECWAR_Arsenal_of_Freedom_Tour_-_Florida_%283x4_cropped_on_Bezos_and_rotated%29.jpg/500px-260202-D-PM193-2205_SECWAR_Arsenal_of_Freedom_Tour_-_Florida_%283x4_cropped_on_Bezos_and_rotated%29.jpg',
    alt2: 'assets/people/bezos.jpg',
    tags: '亚马逊 · 飞轮效应 · AWS · Day 1 · 蓝色起源',
    intro: '1964 年生于美国新墨西哥州，普林斯顿电气工程与计算机专业毕业，曾在华尔街做量化。截至 2026 年仍在世。1994 年在车库创办亚马逊卖书，把「更多选择—更低价格—更好体验」做成自我强化的飞轮；2021 年卸任 CEO 转任执行董事长，重心转向蓝色起源与投资。',
    achieve: '把亚马逊做成全球最大电商与云计算（AWS）双巨头；用 FBA 与 Marketplace 把第三方卖家变成平台主力——这正是中国跨境卖家出海的主战场；蓝色起源推动可复用火箭商业化。',
    highlight: '「你的利润就是我的机会。」——理解这句话，就理解了亚马逊为什么对卖家又爱又狠。'
  },
  {
    name: '沃伦·巴菲特 Warren Buffett',
    photo: W + 'thumb/d/d4/Warren_Buffett_at_the_2015_SelectUSA_Investment_Summit_%28cropped%29.jpg/500px-Warren_Buffett_at_the_2015_SelectUSA_Investment_Summit_%28cropped%29.jpg',
    alt2: 'assets/people/buffett.jpg',
    tags: '伯克希尔 · 价值投资 · 护城河 · 复利 · 奥马哈',
    intro: '1930 年生于美国内布拉斯加州奥马哈，师从价值投资奠基人本杰明·格雷厄姆。截至 2026 年仍在世。1965 年接手濒临倒闭的纺织厂伯克希尔·哈撒韦，把它改造成横跨保险、铁路、能源与消费的控股集团，并长期持有可口可乐、苹果等核心资产。',
    achieve: '以数十年复利创造了投资史上最长的优异纪录；用保险浮存金做低成本杠杆，形成独特的资本配置模型；每年的《致股东信》成为全球商界公开课。',
    highlight: '「别人贪婪时恐惧，别人恐惧时贪婪。」——对做生意的人，这句话同样适用于备货节奏。'
  },
  {
    name: '萨姆·奥尔特曼 Sam Altman',
    photo: W + '5/5a/Meeting_with_Masayoshi_Son_and_Sam_Altman_%28February_3%2C_2025%29_%283x4_cropped_on_Altman%29.jpg',
    alt2: 'assets/people/altman.jpg',
    tags: 'OpenAI · ChatGPT · YC · 通用人工智能 · 算力',
    intro: '1985 年生于美国芝加哥，斯坦福肄业创业者。截至 2026 年仍在世。early 时期创办 Loopt，后出任知名孵化器 Y Combinator 总裁；2015 年参与创立 OpenAI，2019 年起担任 CEO，主导 GPT 系列与 ChatGPT 的产品化。',
    achieve: '2022 年底推出 ChatGPT，把大模型从论文变成亿级用户的日常工具，直接点燃全球 AI 浪潮；推动 OpenAI 与微软的深度绑定；持续为 AI 算力与基础设施筹措巨额资本。',
    highlight: '「先把东西做出来给人用，再谈完美。」——他证明了产品化速度本身就是壁垒。'
  },
  {
    name: '阳萌 Yang Meng',
    photo: FB,
    tags: '安克创新 Anker · 亚马逊 · 浅海理论 · 品牌出海 · 长沙',
    intro: '北京大学计算机专业毕业，赴美深造后进入谷歌任搜索算法工程师。截至 2026 年仍在世。2011 年回国在长沙创办安克创新，从在亚马逊卖充电配件起步，一步步做成中国消费电子品牌出海的标杆。',
    achieve: '把 Anker 做成亚马逊充电品类的头部品牌，并成功孵化 Soundcore（音频）、eufy（智能家居）、Nebula（投影）等子品牌；2020 年登陆创业板；海外营收占比长期在九成以上。',
    highlight: '「不去深海跟巨头搏杀，在浅海里做到第一再换下一片海。」——这就是他总结的「浅海理论」。'
  },
  {
    name: '王来春 Wang Laichun',
    photo: FB,
    tags: '立讯精密 · 果链 · 精密制造 · 女性企业家 · 广东',
    intro: '1967 年生于广东汕头澄海，1988 年进入富士康深圳工厂当流水线工人，十年间做到课长。截至 2026 年仍在世。1999 年与兄长收购香港立讯，2004 年成立立讯精密，从连接器做起，逐步切入苹果供应链。',
    achieve: '把一家连接器小厂做成全球领先的精密制造企业，业务覆盖声学、无线充电、AirPods 整机代工与汽车线束；从打工妹到千亿市值上市公司掌门人，被视为中国制造升级的缩影。',
    highlight: '「订单是靠良率和交期挣来的。」——她的故事说明，制造业的护城河藏在细节里。'
  },
  {
    name: '周群飞 Zhou Qunfei',
    photo: FB,
    tags: '蓝思科技 · 玻璃盖板 · 湖南 · 白手起家 · 女性企业家',
    intro: '1970 年生于湖南湘乡，家境贫寒，十几岁南下深圳进玻璃加工厂打工。截至 2026 年仍在世。1993 年以极少积蓄创办自己的作坊，2003 年成立蓝思科技，专攻手机视窗防护玻璃。',
    achieve: '抓住触屏手机爆发的窗口，成为全球主要的玻璃盖板供应商，客户覆盖头部手机与消费电子品牌；2015 年蓝思科技上市，她成为备受关注的白手起家女性企业家。',
    highlight: '「别人嫌苦嫌脏的工序，我把它做到最好。」——从打工妹到玻璃女王的全部秘密。'
  },
  {
    name: '刘靖康 Liu Jingkang',
    photo: FB,
    tags: '影石创新 Insta360 · 全景相机 · 深圳 · 90 后创业 · 出海',
    intro: '1991 年生，南京大学软件学院毕业，学生时代就因技术项目为人所知。截至 2026 年仍在世。2015 年在深圳创办影石创新（Insta360），瞄准当时还很小众的全景与运动相机赛道。',
    achieve: '把 Insta360 做成全景相机全球市占率领先的品牌，凭 ONE X、X 系列与 GO 系列在海外社交媒体上打开局面；2025 年公司登陆科创板，成为 90 后创业者中的代表性案例。',
    highlight: '「先想清楚用户会不会愿意把它发到社交平台上。」——传播力被他当成产品指标来做。'
  },
  {
    name: '钟波 Zhong Bo',
    photo: FB,
    tags: '极米科技 XGIMI · 智能投影 · 成都 · 无屏电视 · 出海',
    intro: '电子科技大学毕业，早年在半导体与显示行业做工程师。截至 2026 年仍在世。2013 年在成都创办极米科技，提出「无屏电视」概念，把投影仪从会议室搬进客厅。',
    achieve: '带领极米长期位居中国智能投影市场份额前列，并把产品卖到欧美日等海外市场；2021 年登陆科创板；推动投影行业在亮度、自动对焦与梯形校正上的体验升级。',
    highlight: '「把专业设备变成家电，关键是让用户不用看说明书。」——易用性就是他的差异化。'
  },
  {
    name: '孙中伟 Sun Zhongwei',
    photo: FB,
    tags: '华宝新能源 · Jackery 电小二 · 便携储能 · 深圳 · 户外能源',
    intro: '曾在电池行业深耕多年，具备锂电与电源管理的技术背景。截至 2026 年仍在世。2011 年在深圳创办华宝新能源，2012 年推出面向海外的 Jackery 品牌，切入当时几乎空白的便携储能赛道。',
    achieve: '把 Jackery 做成北美、日本便携储能市场的头部品牌，并以「电小二」布局国内；2022 年公司登陆创业板；踩中露营经济与家庭应急备电两波需求，成为中国新能源产品出海的代表。',
    highlight: '「先在海外把品类教育做透，再回头做国内。」——一条反向的出海路径。'
  },

  // ===== 本周轮换新人物 =====
  {
    name: '黄仁勋 Jensen Huang',
    photo: W + 'thumb/e/e6/Jen-Hsun_Huang_2025.jpg/500px-Jen-Hsun_Huang_2025.jpg',
    tags: 'NVIDIA · GPU · CUDA · AI 算力 · 皮衣',
    intro: '1963 年生于中国台湾台南，幼年随家人移居美国，俄勒冈州立大学电气工程学士、斯坦福硕士。截至 2026 年仍在世。1993 年与两位伙伴在一家餐厅里创办英伟达，长期担任 CEO，是硅谷在任时间最长的创始人 CEO 之一。',
    achieve: '把显卡公司变成 AI 时代的基础设施供应商；2006 年推出 CUDA，用十几年把 GPU 通用计算生态做成事实标准；在生成式 AI 爆发后，英伟达成为全球市值最高的公司之一，其数据中心芯片几乎是大模型训练的默认选择。',
    highlight: '「我们不是在卖芯片，是在卖一整套计算平台。」——CUDA 生态才是那条真正的护城河。'
  },
  {
    name: '梁文锋 Liang Wenfeng',
    photo: FB,
    tags: 'DeepSeek · 幻方量化 · 开源大模型 · 杭州 · 低成本训练',
    intro: '1985 年生于广东湛江，浙江大学电子信息工程专业毕业。截至 2026 年仍在世。他先以量化投资起家，创办幻方量化并积累起大规模 GPU 算力；2023 年成立 DeepSeek（深度求索），全力投入通用大模型研发。',
    achieve: 'DeepSeek 以开源路线和显著更低的训练成本推出高性能模型，2025 年初引发全球关注，直接冲击了「大模型必须靠天价算力堆出来」的行业共识，也让中国开源模型进入国际主流视野。',
    highlight: '「重要的不是追赶，是参与到最前沿的定义里去。」——他用开源撬动了话语权。'
  },
  {
    name: '王传福 Wang Chuanfu',
    photo: W + 'thumb/e/e9/Wang_Chuanfu_IAA_2023_1X7A0154_%28cropped%29.jpg/500px-Wang_Chuanfu_IAA_2023_1X7A0154_%28cropped%29.jpg',
    tags: '比亚迪 · 刀片电池 · 垂直整合 · 新能源车 · 深圳',
    intro: '1966 年生于安徽无为，中南工业大学冶金物理化学专业毕业，曾在北京有色金属研究总院做电池研究。截至 2026 年仍在世。1995 年在深圳创办比亚迪做手机电池，2003 年收购秦川汽车切入整车，被当时几乎所有人质疑。',
    achieve: '把比亚迪做成全球销量领先的新能源汽车企业，并以刀片电池重塑了磷酸铁锂的安全与成本曲线；坚持从电池、电机、电控到芯片的垂直整合；近年加速出海，在多个海外市场建厂设网。',
    highlight: '「技术是根，工程师是本。」——他把研发人数堆到十万级，用工程能力换成本优势。'
  },
  {
    name: '曾毓群 Robin Zeng',
    photo: W + 'thumb/d/d9/Robin_Zeng_2023.jpg/500px-Robin_Zeng_2023.jpg',
    tags: '宁德时代 CATL · 动力电池 · 麒麟电池 · 福建 · 全球第一',
    intro: '1968 年生于福建宁德，上海交通大学船舶工程专业毕业，后获中科院物理学博士。截至 2026 年仍在世。他早年参与创办新能源科技（ATL）做消费电池，2011 年分拆动力电池业务，在家乡宁德创立宁德时代。',
    achieve: '带领宁德时代长期占据全球动力电池装机量第一，客户覆盖特斯拉、宝马、大众等主流车企；推出 CTP、麒麟电池、神行超充等技术；在欧洲布局工厂，把中国电池产业链推向全球。',
    highlight: '办公室挂着「赌性坚强」——但他赌的从来是研发投入，不是运气。'
  },
  {
    name: '汪滔 Frank Wang',
    photo: FB,
    tags: '大疆 DJI · 消费级无人机 · 云台增稳 · 深圳 · 极客',
    intro: '1980 年生于浙江杭州，香港科技大学电子工程专业毕业，毕业设计做的就是直升机飞行控制系统。截至 2026 年仍在世。2006 年在深圳创办大疆，最初只是卖飞控模块给航模爱好者。',
    achieve: '2013 年推出「精灵 Phantom」一体机，把航拍从极客玩具变成大众消费品；大疆长期占据全球消费级无人机绝大部分份额，并把技术延伸到手持云台（Osmo）、影像与行业应用；是中国原创硬件设计走向全球的代表。',
    highlight: '「产品不完美就不发布。」——极致的工程洁癖，换来了一个几乎由他定义的品类。'
  },
  {
    name: '马化腾 Pony Ma',
    photo: W + 'thumb/d/d6/%E9%A9%AC%E5%8C%96%E8%85%BE_Pony_Ma_2019.jpg/500px-%E9%A9%AC%E5%8C%96%E8%85%BE_Pony_Ma_2019.jpg',
    tags: '腾讯 · 微信 · QQ · 社交 · 深圳 · 产品经理',
    intro: '1971 年生于广东汕头，深圳大学计算机专业毕业。截至 2026 年仍在世。1998 年在深圳与四位伙伴创办腾讯，靠 OICQ（后来的 QQ）起家，长期担任董事会主席兼 CEO，以「产品经理型创始人」著称。',
    achieve: '把腾讯做成中国最大的社交与数字内容平台；2011 年支持张小龙团队推出微信，重新定义了移动互联网的入口；构建起涵盖游戏、支付、云与投资的生态，并长期位列全球市值最高的科技公司之一。',
    highlight: '「小步快跑，快速迭代。」——他每天自己泡在产品里提意见，这是腾讯的方法论源头。'
  },
  {
    name: '萨提亚·纳德拉 Satya Nadella',
    photo: W + 'thumb/7/78/MS-Exec-Nadella-Satya-2017-08-31-22_%28cropped%29.jpg/500px-MS-Exec-Nadella-Satya-2017-08-31-22_%28cropped%29.jpg',
    tags: '微软 · Azure · 云优先 · OpenAI · Copilot · 转型',
    intro: '1967 年生于印度海得拉巴，威斯康星大学计算机硕士、芝加哥大学 MBA。截至 2026 年仍在世。1992 年加入微软，长期负责服务器与云业务，2014 年接任 CEO，接手的是一家被认为错过移动时代的巨头。',
    achieve: '用「云优先、移动优先」把微软重心转向 Azure，市值增长十余倍；主动拥抱开源与跨平台，收购 GitHub；重金押注并深度绑定 OpenAI，把 Copilot 铺进 Windows、Office 与开发工具链，让微软重回 AI 时代第一梯队。',
    highlight: '「从『无所不知』转向『无所不学』。」——他靠改文化，救回了一家掉队的巨头。'
  },
  {
    name: '蒂姆·库克 Tim Cook',
    photo: W + 'thumb/f/f7/Tim_Cook_March_2026_%28cropped_2%29.jpg/500px-Tim_Cook_March_2026_%28cropped_2%29.jpg',
    tags: '苹果 · 供应链大师 · 服务业务 · 自研芯片 · 库存周转',
    intro: '1960 年生于美国阿拉巴马州，奥本大学工业工程学士、杜克大学 MBA，曾在 IBM 与康柏负责供应链。截至 2026 年仍在世。1998 年被乔布斯招入苹果整顿运营，2011 年接任 CEO。',
    achieve: '把苹果的库存周转压缩到以天计，建立了教科书级的全球供应链体系；任内苹果成为首家万亿、并持续刷新市值纪录的公司；推动 M 系列自研芯片替换英特尔，并把服务业务做成第二增长曲线。',
    highlight: '「库存是根本性的邪恶。」——对做外贸的人来说，这句话比任何励志格言都实在。'
  }
];

function photoBlock(r) {
  const alt = r.name.split(' ')[0];
  const fallback = r.alt2 || FB;
  const chain = r.photo === FB
    ? `this.onerror=null;this.src='${FB}'`
    : `this.onerror=function(){this.onerror=null;this.src='${FB}'};this.src='${fallback}'`;
  return {
    h: '📷 人物照片',
    body: `<img class="face" src="${r.photo}" alt="${alt}" loading="lazy" referrerpolicy="no-referrer" onerror="${chain}">`
  };
}

const items = raw.map((r, i) => ({
  title: r.name,
  tag: `第${i + 1}天 · 名人故事`,
  blocks: [
    photoBlock(r),
    { h: '🏷 人物标签', body: `<p class="tags">${r.tags}</p>` },
    { h: '📖 人物介绍（在世）', body: `<p>${r.intro}</p>` },
    { h: '🏆 主要成就', body: `<p>${r.achieve}</p>` },
    { h: '🌟 一句话亮点', body: `<p>${r.highlight}</p>` }
  ]
}));

const lib = require('/Users/lailifang/WorkBuddy/2026-07-27-09-50-21/build_lib.js');
lib.replaceArray('finance', items);
console.log('finance written, items: ' + items.length);
console.log('with real photo: ' + raw.filter(r => r.photo !== FB).length + ', fallback: ' + raw.filter(r => r.photo === FB).length);
