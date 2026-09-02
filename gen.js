/* 旺仔工作台 · 每周内容焕新生成器（2026-08-31 周一）
 * 生成 content.js 的 finance / geo(trade) / overseas / diet / travel 五个数组
 * 规则：finance 14 位在世创始人，title 与标杆企业 data-fp 严格一致；
 *       13 家标杆企业（华为/小米/阿里/京东/美团/拼多多/农夫山泉/福耀/格力 + 特斯拉/亚马逊/伯克希尔/OpenAI）必须保留并带正确按钮。
 */
const fs = require('fs');

/* ---------------- 基础工具 ---------------- */
const FB = "assets/face-fallback.svg";
// 创始人 → {title, jpg(本地兜底图，可空), wiki(优先真实缩略图)}
const F = {
  ren:    {t:"任正非 Ren Zhengfei",       jpg:"ren.jpg",     wiki:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Ren_Zhengfei_%282016%29.jpg/500px-Ren_Zhengfei_%282016%29.jpg"},
  lei:    {t:"雷军 Lei Jun",              jpg:"lei.jpg",      wiki:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Lei_Jun_at_Two_Sessions_2025.png/500px-Lei_Jun_at_Two_Sessions_2025.png"},
  ma:     {t:"马云 Jack Ma",              jpg:"ma.jpg",       wiki:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Jack_Ma_2018.jpg/500px-Jack_Ma_2018.jpg"},
  liu:    {t:"刘强东 Liu Qiangdong",      jpg:"liu.jpg",      wiki:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Liu_Qiangdong_WEF_2015.jpg/500px-Liu_Qiangdong_WEF_2015.jpg"},
  wang:   {t:"王兴 Wang Xing",           jpg:"wang.jpg",     wiki:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Wang_Xing.jpg/500px-Wang_Xing.jpg"},
  huang:  {t:"黄峥 Colin Huang",          jpg:"huang.jpg",    wiki:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Colin_Huang.jpg/500px-Colin_Huang.jpg"},
  zhong:  {t:"钟睒睒 Zhong Shanshan",     jpg:"zhong.jpg",    wiki:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Zhong_Shanshan.jpg/500px-Zhong_Shanshan.jpg"},
  cao:    {t:"曹德旺 Cao Dewang",         jpg:"cao.jpg",      wiki:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Cao_Dewang.jpg/500px-Cao_Dewang.jpg"},
  dong:   {t:"董明珠 Dong Mingzhu",       jpg:"dong.jpg",     wiki:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Dong_Mingzhu.jpg/500px-Dong_Mingzhu.jpg"},
  musk:   {t:"埃隆·马斯克 Elon Musk",      jpg:"musk.jpg",     wiki:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Elon_Musk_-_54820081119_%28cropped%29.jpg/500px-Elon_Musk_-_54820081119_%28cropped%29.jpg"},
  bezos:  {t:"杰夫·贝索斯 Jeff Bezos",     jpg:"bezos.jpg",    wiki:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/260202-D-PM193-2205_SECWAR_Arsenal_of_Freedom_Tour_-_Florida_%283x4_cropped_on_Bezos_and_rotated%29.jpg/500px-260202-D-PM193-2205_SECWAR_Arsenal_of_Freedom_Tour_-_Florida_%283x4_cropped_on_Bezos_and_rotated%29.jpg"},
  buffett:{t:"沃伦·巴菲特 Warren Buffett", jpg:"buffett.jpg",  wiki:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Warren_Buffett_at_the_2015_SelectUSA_Investment_Summit_%28cropped%29.jpg/500px-Warren_Buffett_at_the_2015_SelectUSA_Investment_Summit_%28cropped%29.jpg"},
  altman: {t:"萨姆·奥尔特曼 Sam Altman",   jpg:"altman.jpg",   wiki:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Meeting_with_Masayoshi_Son_and_Sam_Altman_%28February_3%2C_2025%29_%283x4_cropped_on_Altman%29.jpg/500px-Meeting_with_Masayoshi_Son_and_Sam_Altman_%28February_3%2C_2025%29_%283x4_cropped_on_Altman%29.jpg"},
  jensen: {t:"黄仁勋 Jensen Huang",       jpg:null,          wiki:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Jen-Hsun_Huang_2025.jpg/500px-Jen-Hsun_Huang_2025.jpg"}
};
function face(key){
  const o = F[key];
  if(o.jpg) return `<img class="face" src="${o.wiki}" alt="${o.t}" loading="lazy" referrerpolicy="no-referrer" onerror="this.onerror=function(){this.onerror=null;this.src='${FB}'};this.src='assets/people/${o.jpg}'">`;
  return `<img class="face" src="${o.wiki}" alt="${o.t}" loading="lazy" referrerpolicy="no-referrer" onerror="this.onerror=null;this.src='${FB}'">`;
}

/* ---------------- 标杆企业卡片 ---------------- */
// fields: name, hd('hd'|'sm'), sketch, biz, play, found, turn, look, site, fpKey
function bench(o){
  const fp = o.fpKey ? ` <button class="fam-btn" data-fp="${F[o.fpKey].t}">📖 名人故事</button>` : "";
  const hdTag = o.hd==='hd' ? '头部' : '中小';
  const p = [];
  p.push(`<div class="co-h"><b>${o.name}</b><span class="co-t ${o.hd}">${hdTag}</span></div>`);
  p.push(`<div class="co-r"><b>速写：</b>${o.sketch}</div>`);
  p.push(`<div class="co-r"><b>主营业务：</b>${o.biz}</div>`);
  p.push(`<div class="co-r"><b>市场与打法：</b>${o.play}</div>`);
  p.push(`<div class="co-r found"><b>📜 发家史：</b>${o.found}</div>`);
  p.push(`<div class="co-r turn"><b>🔑 转折点：</b>${o.turn}</div>`);
  p.push(`<div class="co-r look"><b>💡 看点：</b>${o.look}${fp}</div>`);
  p.push(`<div class="co-r">官网：<a class="co-site" href="${o.site}" target="_blank" rel="noopener">🌐 ${o.site}</a></div>`);
  return `<div class="co">${p.join('')}</div>`;
}
// 普通（伴生）企业卡片
function co(o){
  const hdTag = o.hd==='hd' ? '头部' : '中小';
  const p = [];
  p.push(`<div class="co-h"><b>${o.name}</b><span class="co-t ${o.hd}">${hdTag}</span></div>`);
  p.push(`<div class="co-r"><b>速写：</b>${o.sketch}</div>`);
  if(o.buyer) p.push(`<div class="co-r"><b>采购画像：</b>${o.buyer}</div>`);
  p.push(`<div class="co-r"><b>主营业务：</b>${o.biz}</div>`);
  p.push(`<div class="co-r found"><b>📜 发家史：</b>${o.found}</div>`);
  p.push(`<div class="co-r look"><b>💡 看点：</b>${o.look}</div>`);
  if(o.site) p.push(`<div class="co-r">官网：<a class="co-site" href="${o.site}" target="_blank" rel="noopener">🌐 ${o.site}</a></div>`);
  return `<div class="co">${p.join('')}</div>`;
}

const BENCH = {
  huawei: bench({name:"华为 Huawei",hd:"hd",fpKey:"ren",
    sketch:"全球最大通信设备商；1987｜总部：中国·深圳",
    biz:"运营商设备、手机、鸿蒙、海思芯片　招牌：5G、Mate 系列",
    play:"研发驱动+全员持股；极限施压下推「备胎计划」自研芯片与系统",
    found:"1987 年任正非在深圳以 2.1 万元代理交换机起家，一路做成全球通信龙头。",
    turn:"2019 年后遭遇断供，海思与鸿蒙从备胎转正，国产替代标杆。",
    look:"深圳走出的硬核样本，备胎计划值得每个做制造的人研究。",
    site:"https://www.huawei.com"}),
  xiaomi: bench({name:"小米 Xiaomi",hd:"hd",fpKey:"lei",
    sketch:"全球前三智能手机+AIoT 生态；2010｜总部：中国·北京",
    biz:"手机、IoT、汽车　招牌：SU7、米家生态",
    play:"互联网直销+极致性价比+生态链投资",
    found:"2010 年雷军创立，用性价比改写手机行业格局。",
    turn:"2024 年 SU7 上市即成现象级，跨界造车三年落地。",
    look:"把发布会做成渠道，参数公开、价格透明，是产品方法论样本。",
    site:"https://www.mi.com"}),
  alibaba: bench({name:"阿里巴巴 Alibaba",hd:"hd",fpKey:"ma",
    sketch:"中国电商与云计算双巨头；1999｜总部：中国·杭州",
    biz:"淘宝天猫、阿里云、国际站　招牌：双11、通义千问",
    play:"平台+云+出海；速卖通与阿里国际站做跨境",
    found:"1999 年马云在杭州湖畔花园创业，从 B2B 黄页起家。",
    turn:"2009 年推阿里云，2023 年后重注 AI，通义大模型全面铺开。",
    look:"阿里国际站是中国出海卖家的早期摇篮，值得做外贸的反复研究。",
    site:"https://www.alibabagroup.com"}),
  jd: bench({name:"京东 JD",hd:"hd",fpKey:"liu",
    sketch:"自营电商与物流标杆；1998｜总部：中国·北京",
    biz:"自营零售、京东物流、工业　招牌：211 限时达",
    play:"重资产自建物流，正品+快送体验",
    found:"1998 年刘强东中关村卖光磁起家，2004 年转线上。",
    turn:"2007 年自建物流，把履约体验做成护城河。",
    look:"自营+物流模型，是品牌出海可借鉴的履约样本。",
    site:"https://www.jd.com"}),
  meituan: bench({name:"美团 Meituan",hd:"hd",fpKey:"wang",
    sketch:"本地生活服务超级平台；2010｜总部：中国·北京",
    biz:"外卖、到店、即时零售、骑行　招牌：美团闪购",
    play:"地推铁军+算法调度，做本地即时网络",
    found:"2010 年王兴从团购起家，合并大众点评成霸主。",
    turn:"从团购到外卖再到即时零售，边界持续扩张。",
    look:"本地生活的履约密度，对中国商家出海做同城配送有参照。",
    site:"https://www.meituan.com"}),
  pdd: bench({name:"拼多多 Pinduoduo",hd:"hd",fpKey:"huang",
    sketch:"极致性价比电商；2015｜总部：中国·上海",
    biz:"拼团电商、Temu 出海　招牌：百亿补贴、Temu",
    play:"社交拼团+农业直连+低价供给",
    found:"2015 年黄峥创立，用拼团切下沉市场。",
    turn:"2022 年 Temu 出海北美，廉价供给横扫海外。",
    look:"Temu 是中国供应链出海最猛的样本之一。",
    site:"https://www.pinduoduo.com"}),
  nongfu: bench({name:"农夫山泉 Nongfu",hd:"hd",fpKey:"zhong",
    sketch:"中国包装水与饮料龙头；1996｜总部：中国·杭州",
    biz:"饮用水、茶π、东方树叶　招牌：天然水",
    play:"水源地品牌+广告心智占领",
    found:"1996 年钟睒睒做保健品起家，后转饮用水。",
    turn:"东方树叶无糖茶逆袭，押中健康趋势。",
    look:"把「天然」做成溢价，品牌功底很深。",
    site:"https://www.nongfuspring.com"}),
  fuyao: bench({name:"福耀玻璃 Fuyao",hd:"hd",fpKey:"cao",
    sketch:"全球汽车玻璃龙头；1987｜总部：中国·福清",
    biz:"汽车玻璃、浮法玻璃　招牌：OE 原厂配套",
    play:"专注主业+全球建厂贴近车厂",
    found:"1987 年曹德旺接手小厂，专注汽车玻璃。",
    turn:"赴美建厂（代顿），成中美制造合作样本。",
    look:"专注主业的长期主义典范。",
    site:"https://www.fuyaogroup.com"}),
  gree: bench({name:"格力电器 Gree",hd:"hd",fpKey:"dong",
    sketch:"空调与家电龙头；1991｜总部：中国·珠海",
    biz:"空调、家电、装备　招牌：变频空调",
    play:"掌握核心科技+线下渠道",
    found:"1991 年起于珠海小厂，董明珠从销售做起。",
    turn:"渠道变革+多元化，董明珠成企业招牌。",
    look:"渠道与话语权案例，女性企业家标杆。",
    site:"https://www.gree.com"}),
  tesla: bench({name:"特斯拉 Tesla",hd:"hd",fpKey:"musk",
    sketch:"全球电动车与能源巨头；2003｜总部：美国·得州",
    biz:"电动车、储能、FSD　招牌：Model 3/Y",
    play:"直营+超级工厂+软件 OTA",
    found:"2003 年创立，2004 年马斯克入主推 Roadster 到 Model S。",
    turn:"2019 年上海超级工厂投产，成本骤降、爆款频出。",
    look:"上海工厂是中国供应链反哺全球品牌的经典案例。",
    site:"https://www.tesla.com"}),
  amazon: bench({name:"亚马逊 Amazon",hd:"hd",fpKey:"bezos",
    sketch:"全球电商与云霸主；1994｜总部：美国·西雅图",
    biz:"Marketplace、AWS、广告　招牌：FBA、Prime",
    play:"第三方平台+FBA 物流+AWS 技术底座",
    found:"1994 年贝索斯车库卖书起家。",
    turn:"2006 年 AWS、2005 年 Prime，蜕变为云与广告巨头。",
    look:"FBA/Marketplace 是中国跨境卖家最大的出海主通道。",
    site:"https://www.amazon.com"}),
  berkshire: bench({name:"伯克希尔·哈撒韦 Berkshire",hd:"hd",fpKey:"buffett",
    sketch:"全球投资控股巨头；1965｜总部：美国·内布拉斯加",
    biz:"股票投资、全资收购　招牌：复利、价值投资",
    play:"保险浮存金+长期持有优质企业",
    found:"1956 年巴菲特合伙起家，1965 年接手伯克希尔。",
    turn:"能力圈+安全边际+复利穿越半个世纪。",
    look:"看企业要看现金流与护城河，对分析外贸龙头很有启发。",
    site:"https://www.berkshirehathaway.com"}),
  openai: bench({name:"OpenAI",hd:"hd",fpKey:"altman",
    sketch:"全球 AI 研究与产品领军；2015｜总部：美国·旧金山",
    biz:"GPT 大模型、ChatGPT、API　招牌：ChatGPT、Sora",
    play:"前沿研究+产品化+与微软结盟",
    found:"2015 年以非营利研究起步，2022 年 ChatGPT 引爆生成式 AI。",
    turn:"2023 年 Altman 回归加速商业化，GPT-4o、Sora 持续领先。",
    look:"AI 是外贸人提效的新杠杆，Altman 是这一轮旗手。",
    site:"https://www.openai.com"})
};

/* ---------------- 伴生企业池 ---------------- */
const GEO_EXTRA = [
  {name:"影石 Insta360",hd:"sm",sketch:"全景/运动相机全球新锐；2015｜总部：中国·深圳",biz:"全景相机、运动相机、AI 影像",found:"2015 年刘靖康在深圳创办，凭 ONE X 系列在海外社媒打开局面。",look:"把传播力当产品指标，是 90 后出海代表。"},
  {name:"大疆 DJI",hd:"sm",sketch:"消费级无人机全球绝对龙头；2006｜总部：中国·深圳",biz:"无人机、手持云台、行业应用",found:"2006 年汪滔在深圳创办，2013 年精灵 Phantom 把航拍变大众消费品。",look:"用极致工程洁癖定义一个品类。"},
  {name:"安克 Anker",hd:"sm",sketch:"充电配件出海标杆；2011｜总部：中国·长沙",biz:"充电器、音频、智能家居",found:"前谷歌工程师阳萌 2011 年回国创办，从亚马逊充电配件起家。",look:"先做品类第一再滚雪雪球的范本。"},
  {name:"石头 Roborock",hd:"sm",sketch:"扫地机器人高端出海代表；2014｜总部：中国·北京",biz:"扫拖机器人、洗地机",found:"2014 年脱胎于小米生态链，凭激光导航做高端。",look:"硬科技+品牌溢价出海样本。"},
  {name:"添可 Tineco",hd:"sm",sketch:"智能清洁电器；1998 品牌创立｜总部：中国·苏州",biz:"洗地机、智能料理机",found:"科沃斯旗下高端品牌，用智能交互切入欧美。",look:"传统制造做品牌升级的范本。"},
  {name:"极米 XGIMI",hd:"sm",sketch:"智能投影龙头；2013｜总部：中国·成都",biz:"家用投影、无屏电视",found:"钟波 2013 年提出「无屏电视」，把投影搬进客厅。",look:"把专业设备做成家电。"},
  {name:"传音 Transsion",hd:"sm",sketch:"非洲手机之王；2006｜总部：中国·深圳",biz:"手机、家电、售后服务",found:"专攻新兴市场，深谙本地化（深肤色美颜、多卡多待）。",look:"被忽视的十亿级市场打法。"},
  {name:"海信 Hisense",hd:"sm",sketch:"黑电与白电综合巨头；1969｜总部：中国·青岛",biz:"电视、冰箱、中央空调",found:"从 radios 起家，靠体育营销（世界杯）打开全球。",look:"并购+体育 IP 出海路径。"},
  {name:"TCL",hd:"sm",sketch:"电视与面板双线；1981｜总部：中国·惠州",biz:"TV、面板、家电",found:"从磁带小厂到全球 TV 前列，华星光电补齐面板。",look:"垂直整合对抗周期。"},
  {name:"美的 Midea",hd:"sm",sketch:"白电与机器人综合集团；1968｜总部：中国·佛山",biz:"空调、家电、库卡机器人",found:"从乡镇小厂到全球家电前列，收购东芝白电、库卡。",look:"并购+数字化出海。"},
  {name:"海尔 Haier",hd:"sm",sketch:"全球家电品牌；1984｜总部：中国·青岛",biz:"冰箱、洗衣机、智慧家居",found:"从亏空小厂到收购 GE 家电、斐雪派克。",look:"人单合一模式出海。"},
  {name:"联想 Lenovo",hd:"sm",sketch:"全球 PC 龙头；1984｜总部：中国·北京",biz:"PC、服务器、方案服务",found:"收购 IBM PC 业务走向全球。",look:"中国科技出海最早的成功并购。"},
  {name:"OPPO",hd:"sm",sketch:"全球手机主力；2004｜总部：中国·东莞",biz:"智能手机、影像、IoT",found:"从 MP3 到手机，靠线下+影像深耕东南亚南亚。",look:"渠道深耕型出海。"},
  {name:"vivo",hd:"sm",sketch:"全球手机主力；2009｜总部：中国·东莞",biz:"智能手机、影像",found:"与 OPPO 同源，深耕线下与影像。",look:"同生态双品牌全球打法。"},
  {name:"绿联 UGREEN",hd:"sm",sketch:"数码配件出海品牌；2012｜总部：中国·深圳",biz:"扩展坞、线材、充电",found:"从 3C 配件到 NAS、储能，渠道覆盖亚马逊全球。",look:"小而美配件品牌升级。"},
  {name:"倍思 Baseus",hd:"sm",sketch:"3C 配件设计品牌；2011｜总部：中国·深圳",biz:"充电器、车载、音频",found:"靠设计感+性价比横扫海外数码配件。",look:"设计驱动配件出海。"},
  {name:"公牛 Bull",hd:"sm",sketch:"电工与连接器龙头；1995｜总部：中国·宁波",biz:"插座、开关、新能源",found:"把插座做成安全心智第一。",look:"品类冠军的渠道壁垒。"},
  {name:"名创优品 MINISO",hd:"sm",sketch:"生活百货全球连锁；2013｜总部：中国·广州",biz:"家居、美妆、文创",found:"高频上新+ IP 联名，海外门店快速铺开。",look:"供应链+IP 的零售出海。"},
  {name:"泡泡玛特 POP MART",hd:"sm",sketch:"潮玩 IP 龙头；2010｜总部：中国·北京",biz:"盲盒、艺术家 IP",found:"把潮玩做成全球年轻人的情绪消费。",look:"中国 IP 出海破圈样本。"},
  {name:"希音 SHEIN",hd:"sm",sketch:"跨境快时尚巨头；2008｜总部：新加坡(中国团队)",biz:"女装、服饰全品类",found:"小单快返柔性供应链，TikTok 引爆全球。",look:"实时数据驱动的超快反供应链。"},
  {name:"花西子 Florasis",hd:"sm",sketch:"东方彩妆品牌；2017｜总部：中国·杭州",biz:"彩妆、护肤",found:"以东方美学+社媒打法出海东亚东南亚。",look:"文化美学赋能品牌出海。"},
  {name:"完美日记 Perfect Diary",hd:"sm",sketch:"数字化美妆品牌；2017｜总部：中国·广州",biz:"彩妆、护肤",found:"DTC+私域起家，母公司逸仙拓展多品牌。",look:"DTC 打法出海参照。"},
  {name:"九号 Segway-Ninebot",hd:"sm",sketch:"智能短交通龙头；2012｜总部：中国·北京",biz:"电动滑板、平衡车、割草机器人",found:"收购 Segway 后成全球短交通核心。",look:"并购+技术整合出海。"},
  {name:"科沃斯 Ecovacs",hd:"sm",sketch:"扫地机器人先驱；1998｜总部：中国·苏州",biz:"扫地机、洗地机、空气净化",found:"从代工到自有品牌，海外高端化。",look:"代工转品牌的标杆。"}
];
const OVER_EXTRA = [
  {name:"Monoprice",hd:"sm",sketch:"美国高性价比 3C 配件电商；2002｜总部：美国·加州",buyer:"采购 线材/适配器/音频；渠道 1688/阿里国际站直采",found:"靠超低价线材电商起家，极客圈便宜好用代名词。",look:"中国卖家的直接竞品与参照。"},
  {name:"Satechi",hd:"sm",sketch:"美国高端 3C 配件设计品牌；2007｜总部：美国·加州",buyer:"采购 扩展坞/充电器；深圳 OEM 直采",found:"专做苹果生态配件，踩中生态红利。",look:"轻资产品牌+OEM 打法。"},
  {name:"Twelve South",hd:"sm",sketch:"美国苹果生态配件品牌；2009｜总部：美国·南卡",buyer:"采购 保护壳/支架；深圳 OEM",found:"只做苹果、做精致的小众路线。",look:"垂直生态配件样本。"},
  {name:"Nonda",hd:"sm",sketch:"美国车联网配件品牌；2013｜总部：美国·密歇根",buyer:"采购 车载电子；深圳 OEM",found:"从众筹起步，解决开车小痛点。",look:"美国痛点洞察+中国供应链。"},
  {name:"Wyze",hd:"sm",sketch:"美国智能家居品牌；2017｜总部：美国·西雅图",buyer:"采购 摄像头/传感器；深圳 OEM",found:"前亚马逊员工用极致低价智能硬件走红。",look:"低价智能家居出海。"},
  {name:"Boulanger",hd:"sm",sketch:"法国家电电子零售商；1954｜总部：法国·里尔",buyer:"采购 白电/黑电/智能；集中对华",found:"从修收音机卖家电起家的家族连锁。",look:"法国区域渠道入口。"},
  {name:"AO.com",hd:"sm",sketch:"英国线上家电零售商；2000｜总部：英国·博尔顿",buyer:"采购 大家电/小家电；直接对华",found:"把家电搬上网站的英国早班车。",look:"英国线上家电渠道。"},
  {name:"Crutchfield",hd:"sm",sketch:"美国高端影音专业零售；1974｜总部：美国·弗吉尼亚",buyer:"采购 车载/家庭影音；直接对华 OEM",found:"目录营销起家的发烧音响专家。",look:"重内容重服务的专业零售。"},
  {name:"Best Buy",hd:"sm",sketch:"北美最大消费电子连锁；1966｜总部：美国·明尼苏达",buyer:"采购 全品类 3C；大单直接采购",found:"从音响专卖到全品类电子巨头。",look:"北美线下大卖场主渠道。"},
  {name:"Walmart",hd:"sm",sketch:"全球零售巨头；1962｜总部：美国·阿肯色",buyer:"采购 全品类；供应商严审+EDI",found:"天天低价模式的开创者。",look:"最大体量的采购方，准入门槛高。"},
  {name:"Target",hd:"sm",sketch:"美国中高端连锁零售；1962｜总部：美国·明尼苏达",buyer:"采购 家居/电子/服饰；重设计感",found:"主打 design for all 的差异化零售。",look:"注重设计感的采购方。"},
  {name:"Costco",hd:"sm",sketch:"会员制仓储零售；1976｜总部：美国·华盛顿",buyer:"采购 大包装/自有品牌；少 SKU 大单",found:"靠会员费+精选 SKU 的仓储模式。",look:"大单量、强议价采购方。"},
  {name:"Home Depot",hd:"sm",sketch:"美国家居建材巨头；1978｜总部：美国·佐治亚",buyer:"采购 工具/建材/五金；直接进口",found:"DIY 建材连锁龙头。",look:"五金建材出海重点客户。"},
  {name:"MediaMarkt",hd:"sm",sketch:"欧洲电子连锁；1979｜总部：德国·慕尼黑",buyer:"采购 全品类 3C；欧洲主流渠道",found:"欧洲最大家电电子连锁之一。",look:"欧洲线下主渠道。"},
  {name:"Currys",hd:"sm",sketch:"英国电子零售连锁；1884｜总部：英国",buyer:"采购 电脑/家电/智能；集中进口",found:"从邮政目录到电子连锁的百年零售。",look:"英国综合电子渠道。"},
  {name:"Coolblue",hd:"sm",sketch:"荷比卢电商零售；1999｜总部：荷兰·埃因霍温",buyer:"采购 3C/家电；重服务",found:"靠极致客服体验成长的低地国家电商。",look:"高服务标准采购方。"},
  {name:"bol.com",hd:"sm",sketch:"荷比卢最大电商平台；1999｜总部：荷兰",buyer:"平台卖家；开放第三方",found:"低地国家版「亚马逊」。",look:"欧洲平台卖家入口。"},
  {name:"Zalando",hd:"sm",sketch:"欧洲时尚电商；2008｜总部：德国·柏林",buyer:"采购 服饰/鞋包；品牌直供",found:"欧洲最大时尚电商平台。",look:"服饰出海欧洲平台。"},
  {name:"ASOS",hd:"sm",sketch:"英国时尚电商；2000｜总部：英国·伦敦",buyer:"采购 快时尚服饰；自有+第三方",found:"面向年轻人的线上时尚巨头。",look:"快时尚线上渠道。"},
  {name:"Wayfair",hd:"sm",sketch:"美国家具家居电商；2002｜总部：美国·波士顿",buyer:"采购 家具/家居；中国供应链为主",found:"靠海量 SKU 的家居电商。",look:"家居品类出海主平台。"},
  {name:"Newegg",hd:"sm",sketch:"北美 IT 电商；2001｜总部：美国·加州",buyer:"采购 电脑/配件；极客向",found:"从 DIY 硬件社区成长的电商品牌。",look:"IT 硬件垂直渠道。"},
  {name:"B&H Photo",hd:"sm",sketch:"美国影像器材零售；1973｜总部：美国·纽约",buyer:"采购 相机/配件；专业向",found:"影像爱好者心中的器材圣地。",look:"专业器材采购方。"},
  {name:"Flexport",hd:"sm",sketch:"数字化货代；2013｜总部：美国·旧金山",buyer:"服务 跨境物流；API 对接",found:"用软件重塑国际货运代理。",look:"外贸人的数字物流伙伴。"},
  {name:"Maersk",hd:"sm",sketch:"全球航运巨头；1904｜总部：丹麦·哥本哈根",buyer:"服务 海运/端到端物流",found:"集装箱航运的百年老店。",look:"大货出海的运力基石。"},
  {name:"DHL",hd:"sm",sketch:"全球快递物流；1969｜总部：德国·波恩",buyer:"服务 国际快递/履约",found:"从三个字母的快递网络长成物流巨擘。",look:"小包跨境履约主力。"},
  {name:"Uber",hd:"sm",sketch:"全球出行平台；2009｜总部：美国·旧金山",buyer:"合作 出行/配送生态",found:"共享出行的开创者之一。",look:"海外本地出行参照。"},
  {name:"DoorDash",hd:"sm",sketch:"美国外卖配送平台；2013｜总部：美国·旧金山",buyer:"合作 本地生活配送",found:"美国外卖配送份额领先。",look:"出海做本地生活的对标。"},
  {name:"Airbnb",hd:"sm",sketch:"全球民宿平台；2008｜总部：美国·旧金山",buyer:"合作 住宿生态",found:"把闲置房源做成全球住宿网络。",look:"平台出海范本。"},
  {name:"Booking.com",hd:"sm",sketch:"全球酒店预订平台；1996｜总部：荷兰",buyer:"合作 住宿供应",found:"覆盖全球的在线旅游巨头。",look:"旅游出海渠道。"},
  {name:"Rakuten",hd:"sm",sketch:"日本电商与互联网集团；1997｜总部：日本·东京",buyer:"平台卖家；开放第三方",found:"日本最大电商生态之一。",look:"日本市场入口。"},
  {name:"Mercado Libre",hd:"sm",sketch:"拉美电商巨头；1999｜总部：阿根廷·布宜诺斯艾利斯",buyer:"平台卖家；覆盖西葡语区",found:"拉美版亚马逊，自建支付与物流。",look:"拉美出海主平台。"},
  {name:"Jumia",hd:"sm",sketch:"非洲电商平台；2012｜总部：尼日利亚/新加坡",buyer:"平台卖家；覆盖多国",found:"非洲数字经济的早期探路者。",look:"非洲市场入口。"},
  {name:"Noon",hd:"sm",sketch:"中东电商平台；2017｜总部：沙特/阿联酋",buyer:"平台卖家；中东本土",found:"中东资本支持的本土电商。",look:"中东出海渠道。"},
  {name:"Otto",hd:"sm",sketch:"德国电商零售集团；1949｜总部：德国·汉堡",buyer:"采购 家居/服饰/电子",found:"从邮购目录转型的德国零售巨头。",look:"德国主流电商。"},
  {name:"Takealot",hd:"sm",sketch:"南非电商龙头；2011｜总部：南非",buyer:"平台卖家；南部非洲",found:"南非最大在线零售商。",look:"非洲南部市场入口。"},
  {name:"Grab",hd:"sm",sketch:"东南亚超级应用；2012｜总部：新加坡",buyer:"合作 出行/配送/支付",found:"从打车到金融的东南亚一站式应用。",look:"东南亚平台参照。"},
  {name:"Shopee",hd:"sm",sketch:"东南亚电商平台；2015｜总部：新加坡",buyer:"平台卖家；东南亚六国",found:"Sea 旗下，靠补贴与本地化登顶。",look:"东南亚出海主战场。"},
  {name:"OXXO",hd:"sm",sketch:"墨西哥便利店连锁；1979｜总部：墨西哥",buyer:"合作 线下取货/支付",found:"墨西哥街角的万能便利店。",look:"拉美线下履约节点。"},
  {name:"Magazine Luiza",hd:"sm",sketch:"巴西零售巨头；1957｜总部：巴西",buyer:"采购 家电/电子/家居",found:"从婚纱店到巴西零售龙头。",look:"巴西市场渠道。"}
];

/* ---------------- finance ---------------- */
function finItem(key, day, tags, intro, ach, hi){
  return {
    title: F[key].t,
    tag: `第${day}天 · 名人故事`,
    blocks: [
      {h:"📷 人物照片", body: face(key)},
      {h:"🏷 人物标签", body:`<p class="tags">${tags}</p>`},
      {h:"📖 人物介绍（在世）", body:`<p>${intro}</p>`},
      {h:"🏆 主要成就", body:`<p>${ach}</p>`},
      {h:"🌟 一句话亮点", body:`<p>${hi}</p>`}
    ]
  };
}
const FINANCE = [
  finItem("ren",1,"华为 · 深圳 · 5G · 海思 · 鸿蒙 · 备胎计划",
    "1944 年生于贵州安顺，工程兵出身。截至 2026 年仍在世。1987 年在深圳以 2.1 万元起家做交换机代理，一路把华为带成全球最大通信设备商，面对极限施压提前布局「备胎计划」。",
    "把华为做成全球通信与 5G 专利龙头；断供压力下推动海思麒麟与鸿蒙生态落地；以全员持股与「灰度管理」建立独特组织形态。",
    "「烧不死的鸟才是凤凰。」总部在深圳，这是离旺仔最近的硬核样本。"),
  finItem("lei",2,"小米 · 性价比 · AIoT 生态链 · 造车 · 产品营销",
    "1969 年生于湖北仙桃，武汉大学计算机系毕业。截至 2026 年仍在世。先带金山软件上市，2010 年创立小米，用「互联网直销+极致性价比」改写手机行业；2024 年小米 SU7 上市即成现象级。",
    "小米长期稳居全球智能手机前三，搭起全球最大消费级 AIoT 生态链；跨界造车三年内交出爆款；把「感动人心、价格厚道」变成可复制方法论。",
    "「参数敢公开、价格敢对比。」他把发布会做成了品牌最大的销售渠道。"),
  finItem("ma",3,"阿里巴巴 · 淘宝 · 阿里云 · 蚂蚁 · 通义千问",
    "1964 年生于浙江杭州，杭州师范大学英语专业毕业。截至 2026 年仍在世。1999 年在杭州湖畔花园创办阿里巴巴，从 B2B 黄页做到电商与云计算双巨头，近年把重心转向 AI 与公益。",
    "缔造淘宝天猫与阿里云两大生态；推动中国电商与数字支付普及；卸任后把更多精力投入教育与农业技术。",
    "「今天很残酷，明天更残酷，后天很美好。」他擅长用长期主义讲清一件事。"),
  finItem("liu",4,"京东 · 自营电商 · 京东物流 · 211 限时达",
    "1973 年生于江苏宿迁，中国人民大学社会学系毕业。截至 2026 年仍在世。1998 年在中关村卖光磁产品起家，2004 年转型线上，用重资产自建物流把正品与速度做成标签。",
    "把京东做成中国自营电商与物流标杆；211 限时达重塑用户体验；以供应链能力支撑家电 3C 主战场。",
    "「倒退回去若干年，谁能想到卖光磁的能做成物流帝国。」敢重投入是底色。"),
  finItem("wang",5,"美团 · 本地生活 · 外卖 · 即时零售 · 地推铁军",
    "1979 年生于福建龙岩，清华大学电子工程系毕业。截至 2026 年仍在世。校内网、饭否连续创业后，2010 年创办美团，从团购打到外卖与即时零售，做成本地生活超级平台。",
    "带领美团成为中国本地生活服务霸主；以地推铁军与算法调度构建即时网络；边界从外卖扩张到到店、闪购。",
    "「既往不恋，纵情向前。」他习惯在低谷里把事做透。"),
  finItem("huang",6,"拼多多 · Temu · 极致性价比 · 农业直连",
    "1980 年生于浙江杭州，浙江大学信电系、威斯康星大学计算机硕士。截至 2026 年仍在世。早年创办游戏公司，2015 年创立拼多多，用拼团切下沉市场；2022 年推出 Temu 横扫海外。",
    "拼多多靠社交拼团与低价供给崛起；Temu 把中国供应链以极致性价比输出全球；2024 年后逐步退居二线专注长期研究。",
    "「消费升级不是让上海人过巴黎人的生活，是让安徽人用上好东西。」"),
  finItem("zhong",7,"农夫山泉 · 东方树叶 · 万泰生物 · 首富",
    "1954 年生于浙江诸暨，曾做过记者与保健品。截至 2026 年仍在世。1996 年创办农夫山泉，把「天然水」做成国民心智；同时通过万泰生物布局生物医药。",
    "把农夫山泉做成包装水与无糖茶龙头；东方树叶押中健康趋势逆袭；一度位居中国首富。",
    "「我们不生产水，我们只是大自然的搬运工。」一句广告词撑起溢价。"),
  finItem("cao",8,"福耀玻璃 · 汽车玻璃 · 专注主业 · 赴美建厂",
    "1946 年生于福建福清，辍学后从贩运白木耳起家。截至 2026 年仍在世。1987 年接手小玻璃厂，专注汽车玻璃，做到全球配套龙头，并赴美建厂成中美制造样本。",
    "把福耀做成全球汽车玻璃龙头，配套几乎所有主流车厂；以专注主业对抗多元化诱惑；捐资办学回馈社会。",
    "「我捐给社会的钱，比留在公司的多。」他把专注与慈善都做到极致。"),
  finItem("dong",9,"格力 · 空调 · 渠道变革 · 女性企业家",
    "1954 年生于江苏南京，安徽芜湖长大，毕业于安徽芜湖职业技术学院。截至 2026 年仍在世。从格力一线销售做起，36 岁南下，把格力带成空调龙头，并以强话语权著称。",
    "带领格力长期占据空调行业头部；推动自主渠道与核心科技；以强势风格成为企业招牌与女性企业家标杆。",
    "「好空调，格力造。」她把质量口号变成了企业人格。"),
  finItem("musk",10,"特斯拉 · SpaceX · 星链 · xAI · 第一性原理",
    "1971 年生于南非比勒陀利亚，工程师出身的连续创业者。截至 2026 年仍在世并活跃于一线经营。从 Zip2、X.com/PayPal 到 SpaceX、特斯拉、星链与 xAI，专挑别人眼里的硬骨头。",
    "把特斯拉做成全球电动车标杆；用猎鹰九号实现火箭回收复用；星链做成低轨卫星互联网；稳居全球富豪榜前列。",
    "「把问题拆到物理第一性原理再重新算成本。」砍成本靠算法而非拍脑袋。"),
  finItem("bezos",11,"亚马逊 · 飞轮效应 · AWS · Day 1 · 蓝色起源",
    "1964 年生于美国新墨西哥州，普林斯顿电气工程与计算机专业。截至 2026 年仍在世。1994 年在车库创办亚马逊卖书，把「更多选择—更低价格—更好体验」做成自我强化的飞轮。",
    "把亚马逊做成全球最大电商与云计算（AWS）双巨头；FBA 与 Marketplace 让第三方卖家成平台主力；蓝色起源推动可复用火箭。",
    "「你的利润就是我的机会。」理解这句话就懂了亚马逊对卖家又爱又狠。"),
  finItem("buffett",12,"伯克希尔 · 价值投资 · 护城河 · 复利 · 奥马哈",
    "1930 年生于美国内布拉斯加州奥马哈，师从价值投资奠基人本杰明·格雷厄姆。截至 2026 年仍在世。1965 年接手濒临倒闭的纺织厂伯克希尔，把它改造成横跨保险、铁路、能源与消费的控股集团。",
    "以数十年复利创造投资史最长优异纪录；用保险浮存金做低成本杠杆；每年《致股东信》成全球商界公开课。",
    "「别人贪婪时恐惧，别人恐惧时贪婪。」对做生意的人同样适用备货节奏。"),
  finItem("altman",13,"OpenAI · ChatGPT · YC · 通用人工智能 · 算力",
    "1985 年生于美国芝加哥，斯坦福肄业创业者。截至 2026 年仍在世。早年创办 Loopt，后出任 Y Combinator 总裁；2015 年参与创立 OpenAI，主导 GPT 系列与 ChatGPT 产品化。",
    "2022 年底推出 ChatGPT，把大模型从论文变成亿级用户日常工具，点燃全球 AI 浪潮；持续为算力与基础设施筹措巨额资本。",
    "「先把东西做出来给人用，再谈完美。」产品化速度本身就是壁垒。"),
  finItem("jensen",14,"NVIDIA · GPU · CUDA · AI 算力 · 皮衣",
    "1963 年生于中国台湾台南，幼年移居美国，俄勒冈州立大学电气工程学士、斯坦福硕士。截至 2026 年仍在世。1993 年与伙伴在餐厅创办英伟达，长期任 CEO，是硅谷在任最久的创始人 CEO 之一。",
    "把显卡公司变成 AI 时代基础设施供应商；2006 年推 CUDA，用十几年把 GPU 通用计算做成事实标准；生成式 AI 爆发后成全球市值最高公司之一。",
    "「我们不是在卖芯片，是在卖一整套计算平台。」CUDA 生态才是真正的护城河。")
];

/* ---------------- geo(trade) ---------------- */
const GEO_INTRO = "① 先自查：把「品牌名+品类词」丢进 ChatGPT、Google AI Overview、Perplexity，看 AI 怎么介绍它、引用了哪些来源；② 找缺口：AI 答不上来、参数说错、或只引竞品，就是你的机会；③ 补料：把参数表、对比测评、FAQ 做成结构化内容，铺到 AI 爱引的站点；④ 提案话术：别卖「谷歌排名」，卖「AI 答案里的出现率+引用来源占比」，按季度做前后对比；⑤ 复盘：每月固定 20 条提示词跑一遍，记录品牌被提及率。";
function geoDay(day, theme, benchKeys, extraIdx){
  const benchHtml = benchKeys.map(k=>BENCH[k]).join("\n        ");
  const extras = [];
  for(let i=0;i<(4-benchKeys.length);i++){ extras.push(co(GEO_EXTRA[extraIdx+i])); }
  const body = benchHtml + (extras.length?("\n        "+extras.join("\n        ")):"");
  return {
    title:`Day ${day} · AI 搜索可见性企业`,
    tag:`第${day}天 · ${theme}`,
    blocks:[
      {h:"💡 今日怎么用这份清单", body:`<p>${GEO_INTRO}</p>`},
      {h:`今日推荐 · 4 家（${theme}）`, body: body}
    ]
  };
}
const GEO = [
  geoDay(1,"出海消费电子品牌",["huawei"],0),
  geoDay(2,"便携储能与光储出海",["xiaomi"],4),
  geoDay(3,"跨境 DTC 服饰与时尚",["alibaba"],8),
  geoDay(4,"智能家居与清洁电器",["jd"],12),
  geoDay(5,"本地生活与连锁餐饮",["meituan"],16),
  geoDay(6,"美妆个护国货品牌",["pdd"],19),
  geoDay(7,"母婴与宠物消费",["nongfu"],8),
  geoDay(8,"跨境 SaaS 与工具类",["fuyao"],0),
  geoDay(9,"汽车与新能源车",["gree"],4),
  geoDay(10,"数码配件与影像",[],12),
  geoDay(11,"白电与综合家电",[],16),
  geoDay(12,"潮玩文创与百货",[],19),
  geoDay(13,"非洲与新兴市场",[],0),
  geoDay(14,"柔性供应链与快反",[],4)
];

/* ---------------- overseas ---------------- */
const OVER_INTRO = "① 在 Google / LinkedIn 搜企业名 + sourcing / procurement / purchasing manager，找采购负责人；② 用「阿里巴巴国际站」「中国制造网」对照其采购品类，反向以这些买家为目标做开发；③ 参加「香港电子展」「广交会」「Global Sources」定向约访；④ 用海关数据 / ImportGenius 查其中国进口记录，锁定具体 SKU；⑤ 开发信：Hi [Name], we supply [品类] to EU/US retailers，附 catalog 与合规证书（CE / FCC / RoHS）。";
function overDay(day, theme, benchKey, nSmall, extraIdx){
  const parts = [];
  if(benchKey) parts.push(BENCH[benchKey]);
  for(let i=0;i<nSmall;i++){ parts.push(co(OVER_EXTRA[extraIdx+i])); }
  const body = parts.join("\n        ");
  const head = benchKey ? `头部1 / 中小${nSmall}` : `中小${nSmall}`;
  return {
    title:`Day ${day} · 海外企业推荐（采购中国${theme}）`,
    tag:`第${day}天 · ${head}`,
    blocks:[
      {h:"💡 今日怎么用这笔清单", body:OVER_INTRO},
      {h:`今日推荐 · ${nSmall+(benchKey?1:0)} 家（中小企业为主，含行业标杆）`, body: body}
    ]
  };
}
const OVERSEAS = [
  overDay(1,"消费电子","tesla",5,0),
  overDay(2,"消费电子","amazon",5,5),
  overDay(3,"投资与控股","berkshire",5,10),
  overDay(4,"AI 与软件","openai",5,15),
  overDay(5,"消费电子",null,5,20),
  overDay(6,"家居建材",null,5,25),
  overDay(7,"时尚电商",null,5,0),
  overDay(8,"物流与货运",null,5,5),
  overDay(9,"出行与本地生活",null,5,10),
  overDay(10,"旅游与住宿",null,5,15),
  overDay(11,"拉美与非洲电商",null,5,20),
  overDay(12,"东南亚与中东",null,5,25),
  overDay(13,"欧洲零售",null,5,0),
  overDay(14,"专业器材与 IT",null,5,5)
];

/* ---------------- diet ---------------- */
const DIET_BASE_INTRO = "① 食材在「钱大妈」「美团买菜」「盒马」晚间 8 点后打折囤，性价比最高；② 前一晚备好早餐/午餐，早上省时、午间带饭不踩坑；③ 用餐节奏：早餐 7:30 前、午餐 12:30 前、晚餐 19:00 前，下午 15:00 加餐防暴食；④ 外食用「薄荷健康」查热量，守每日约 1200–1400 kcal 减脂线；胀气时饭后散步 10 分钟助消化。";
const SPICY = [
  "蒸鸡胸别干嚼——切片拌<b>蒜末+小米椒圈+生抽+两滴香醋</b>，秒变蒜香口水鸡片；海带豆腐汤丢几片干辣椒段、白胡椒粉和陈醋，做成酸辣海带汤，喝完微微发汗，深圳湿热天最舒服。辣味全靠鲜辣椒和白胡椒，糖油一律不加。",
  "番茄龙利鱼煲加几颗<b>野山椒</b>和一勺泡椒水，变酸汤龙利鱼，酸辣比麻辣更清爽不上火；鸡丝黄瓜沙拉换<b>蒜蓉辣椒+香醋+生抽</b>凉拌汁；下午那杯冰美式照旧，解腻一流。",
  "虾仁蒸蛋出锅淋一勺<b>辣椒油（自熬，无糖）+蒸鱼豉油</b>，鲜辣开胃；嫩豆腐菌菇汤撒白胡椒+小米辣，暖胃又低卡。配巴氏鲜奶当早餐，胀气就换无糖酸奶。",
  "蒸红薯别只当主食——压成泥拌<b>辣椒面+蒜水+生抽</b>做成辣味薯泥；水煮蛋对半切淋<b>剁椒+香醋</b>。全天多喝温绿茶，避开一切甜饮。",
  "鸡胸炒青椒（少油）撒<b>花椒粉+干辣椒碎</b>，做成简易辣子鸡丁；紫菜蛋花汤加白胡椒和几滴辣油。牛奶统一用巴氏鲜奶（保质期短），不用豆浆豆奶。",
  "龙利鱼换成<b>藤椒汁</b>蒸（藤椒+生抽+少许泡椒水），麻香不燥；玉米+黄瓜沙拉拌<b>辣椒蒜醋汁</b>。下午来杯冰美式压住油腻感。",
  "豆腐海带汤升级成<b>韩式辣味汤</b>底（韩式辣酱少放、不加糖，配蒜末白胡椒）；蒸鸡丝拌<b>油泼辣子+陈醋</b>。巴氏鲜奶照喝，胀气换酸奶。",
  "虾仁不蒸了，用<b>少油爆香蒜片+小米辣</b>快炒，鲜辣下饭；苦瓜清炒丢几粒花椒提香。全天温姜茶一杯暖胃。",
  "鸡胸撕丝拌<b>麻辣花生碎（无糖）+辣椒油+香菜</b>；红薯蘸<b>辣椒面+生抽</b>。膳食纤维够，辣味靠花椒辣椒，零糖零油负担。",
  "番茄汤底加<b>一勺剁椒</b>煮龙利鱼，酸辣暖身；鸡蛋做成<b>辣椒酱油煮蛋</b>。早餐巴氏鲜奶+水煮蛋，蛋白质拉满。",
  "蒸鸡胸切条裹<b>辣椒面+孜然粉（无糖）+少许生抽</b>做成低脂辣条风味；豆腐汤加白胡椒和野山椒。冰美式照旧解腻。",
  "菌菇豆腐汤撒<b>花椒油+小米辣</b>变麻辣鲜汤；虾仁用<b>蒜蓉辣椒</b>轻炒。全天喝水 1.5–2L，避开奶茶碳酸饮料。",
  "鸡丝黄瓜换<b>麻辣凉拌汁（辣椒油+花椒粉+醋+生抽）</b>；蒸红薯蘸辣味生抽。深圳湿重，辣味微微发汗正合适。",
  "龙利鱼<b>泡椒蒸</b>（泡椒+姜丝+生抽），酸辣够味；鸡蛋淋<b>辣椒豉油</b>。牛奶只喝巴氏鲜奶或换无糖酸奶，坚决不碰豆浆豆奶和常温奶。"
];
function dietDay(day, name, meals){
  // meals: [早餐, 午餐, 晚餐, 加餐]
  return {
    title:`第${day}天 · ${name}`,
    tag:`第${day}天 · 饮食定制`,
    blocks:[
      {h:"🛒 采购与执行", body:`<p>${DIET_BASE_INTRO}</p>`},
      {h:"🌅 早餐（7:30-8:30）", body:`<p>${meals[0]}</p>`},
      {h:"🍱 午餐（带饭到公司）", body:`<p>${meals[1]}</p>`},
      {h:"🌙 晚餐（18:30前吃完）", body:`<p>${meals[2]}</p>`},
      {h:"🥤 加餐 · 饮水", body:`<p>${meals[3]}</p>`},
      {h:"🌶 旺仔辣味备选", body:`<p>${SPICY[day-1]}</p>`},
      {h:"💡 为什么这么搭", body:`<p>高蛋白+高纤控热量，辣味全靠鲜辣椒/花椒/白胡椒提味不靠糖油；巴氏鲜奶补优质蛋白与钙，胀气就换无糖酸奶；冰美式与纯茶随便喝，奶茶甜品一律跳过。单日约¥15-22。</p>`}
    ]
  };
}
const DIET_DAYS = [
  ["暖胃启动餐",["温水一杯（可加薄片姜或柠檬）+ 2个水煮蛋 + 燕麦粥（燕麦30g）+ 小番茄5颗。","蒸鸡胸150g（生抽黑胡椒腌好蒸10分钟）+ 清炒冬瓜胡萝卜（少油）+ 糙米饭100g。","嫩豆腐海带冬瓜汤（少盐）+ 蒸红薯半根。","无糖酸奶1杯 + 蓝莓一小把；下午绿茶或乌龙1-2杯；全天温水1.5-2L，避开碳酸饮料奶茶。"]],
  ["鱼蔬轻食",["温巴氏鲜奶（保质期短，无糖）冲燕麦 + 1个水煮蛋 + 黄瓜条几根。","番茄龙利鱼煲（冷冻龙利鱼铺番茄蒸/煮）+ 蒜蓉通心菜（少油）+ 杂粮饭100g。","蒸鸡丝黄瓜玉米沙拉（淋少许油醋）+ 紫菜蛋花汤（少油）。","苹果1个；普洱茶1-2杯；杏仁10g（约7-8颗，控量）。"]],
  ["虾菌养肠",["2个水煮蛋 + 蒸红薯1小个 + 温巴氏鲜奶（胀气换无糖酸奶）+ 圣女果几颗。","虾仁蒸蛋（冻虾仁8-10只+2蛋同蒸）+ 清炒苦瓜（少油）+ 糙米饭100g。","嫩豆腐菌菇汤（香菇/金针菇+白菜，少盐）+ 半根玉米。","无糖酸奶+奇异果；绿茶；核桃2个。"]],
  ["红薯蛋日",["蒸红薯1个 + 2个水煮蛋 + 温巴氏鲜奶 + 小番茄。","鸡胸炒青椒（少油）+ 清炒西兰花 + 糙米饭100g。","紫菜虾皮豆腐汤（少盐）+ 蒸南瓜块。","蓝莓一小把 + 无糖酸奶；乌龙茶1-2杯。"]],
  ["鸡胸轻卡",["2个水煮蛋 + 燕麦粥30g + 黄瓜条 + 温水。","蒸鸡胸150g + 蒜蓉空心菜（少油）+ 杂粮饭100g。","海带芽豆腐汤 + 蒸红薯半根。","苹果半个；绿茶；杏仁8g。"]],
  ["藤椒鱼日",["温巴氏鲜奶冲燕麦 + 1个水煮蛋 + 圣女果。","藤椒汁蒸龙利鱼 + 清炒油麦菜（少油）+ 糙米饭100g。","玉米+黄瓜沙拉（油醋）+ 紫菜蛋花汤。","无糖酸奶+奇异果；普洱茶。"]],
  ["韩辣豆腐日",["2个水煮蛋 + 蒸红薯 + 温巴氏鲜奶 + 小番茄。","鸡丝拌辣椒油（少油）+ 清炒娃娃菜 + 杂粮饭100g。","韩式辣味豆腐汤（辣酱无糖）+ 半根玉米。","蓝莓+无糖酸奶；乌龙茶。"]],
  ["花椒虾仁日",["蒸红薯1个 + 2个水煮蛋 + 温巴氏鲜奶。","蒜片小米辣快炒虾仁 + 清炒苦瓜（少油）+ 糙米饭100g。","嫩豆腐菌菇汤（少盐）+ 蒸南瓜。","苹果1个；绿茶；核桃2个。"]],
  ["辣条鸡丝日",["2个水煮蛋 + 燕麦粥 + 黄瓜条。","鸡胸撕丝拌辣椒孜然（无糖）+ 清炒西兰花 + 杂粮饭100g。","豆腐汤（白胡椒）+ 蒸红薯半根。","无糖酸奶+蓝莓；冰美式1杯（解腻）。"]],
  ["泡椒鱼日",["温巴氏鲜奶 + 1个水煮蛋 + 小番茄。","剁椒番茄煮龙利鱼 + 蒜蓉通心菜（少油）+ 糙米饭100g。","辣椒酱油煮蛋 + 半根玉米。","绿茶；杏仁8g。"]],
  ["麻辣鸡日",["2个水煮蛋 + 蒸红薯 + 温巴氏鲜奶。","鸡胸切条裹辣椒面孜然（无糖）+ 清炒冬瓜 + 杂粮饭100g。","麻辣鲜菌菇豆腐汤 + 蒸南瓜。","无糖酸奶+奇异果；乌龙茶。"]],
  ["野山椒日",["2个水煮蛋 + 燕麦粥 + 黄瓜条。","菌菇豆腐汤（花椒油小米辣）+ 鸡丝凉拌 + 糙米饭100g。","虾仁蒜蓉辣椒轻炒 + 蒸红薯半根。","苹果半个；绿茶1-2杯。"]],
  ["麻辣凉拌日",["温巴氏鲜奶 + 1个水煮蛋 + 圣女果。","鸡丝黄瓜麻辣凉拌汁 + 清炒油麦菜 + 杂粮饭100g。","蒸红薯蘸辣味生抽 + 紫菜汤。","蓝莓+无糖酸奶；冰美式。"]],
  ["泡椒蒸鱼日",["2个水煮蛋 + 蒸红薯 + 温巴氏鲜奶。","泡椒蒸龙利鱼（泡椒+姜丝+生抽）+ 清炒白菜 + 糙米饭100g。","辣椒豉油蛋 + 半根玉米。","乌龙茶；杏仁8g。"]]
];
const SHENZHEN_HOT = {
  title:"深圳辣味美食店推荐",
  tag:"辣味专场 · 人均 / 地址 / 菜系（本周换新）",
  blocks:[
    {h:"📌 怎么用这份清单", body:"<p>按旺仔口味筛的：<b>喜辣、戒甜、不碰奶茶饮料和甜品</b>，咖啡（冰美式优先）和茶随便喝。下面 12 家都是深圳好找、开得久的辣味馆子，按「人均 ｜ 地址 ｜ 菜系推荐」列出。凡是标了甜口的单品（冰粉、甜汤、糖水），直接跳过就行。<b>本周整份清单已换新，和上周不重样。</b></p>"},
    {h:"费大厨辣椒炒肉 · 湘菜", body:"<p>人均约 ¥75 ｜ 地址：深圳多店，各大商圈均有 ｜ 推荐：辣椒炒肉（招牌必点）、小炒黄牛肉。明档现炒，肉嫩椒香，一个人点一荤一素刚好。</p>"},
    {h:"炊烟小炒黄牛肉 · 湘菜", body:"<p>人均约 ¥80 ｜ 地址：深圳多店 ｜ 推荐：小炒黄牛肉、剁椒鱼头、擂辣椒茄子。黄牛肉现切现炒，锅气足，辣度可喊「重辣」。</p>"},
    {h:"周师兄重庆火锅 · 重庆火锅", body:"<p>人均约 ¥150 ｜ 地址：深圳核心商圈多店 ｜ 推荐：鲜毛肚、鸭肠、屠场鲜切牛肉。牛油锅底厚重，正宗重庆味，怕燥点鸳鸯。</p>"},
    {h:"萍姐火锅 · 重庆火锅·市井", body:"<p>人均约 ¥130 ｜ 地址：深圳多店 ｜ 推荐：市井老火锅牛油锅、麻辣牛肉、脑花。装修走怀旧市井风，氛围热闹。</p>"},
    {h:"朱光玉火锅馆 · 重庆火锅", body:"<p>人均约 ¥140 ｜ 地址：深圳多店 ｜ 推荐：番茄鸳鸯、麻辣锅底、耙鸡爪。锅底香料足，适合约朋友慢慢涮。</p>"},
    {h:"巴奴毛肚火锅 · 川渝火锅", body:"<p>人均约 ¥150 ｜ 地址：深圳多店 ｜ 推荐：野山菌汤+麻辣锅、毛肚、绣球菌。主打「产品主义」，毛肚七上八下最脆。</p>"},
    {h:"八合里海记牛肉火锅 · 潮汕牛肉", body:"<p>人均约 ¥110 ｜ 地址：深圳本土起家，门店极多 ｜ 推荐：吊龙、匙柄、胸口朥，配<b>沙茶+辣椒圈</b>蘸料。现切黄牛，涮八秒，鲜甜带劲。</p>"},
    {h:"椒爱水煮鱼 · 川菜", body:"<p>人均约 ¥85 ｜ 地址：深圳多店 ｜ 推荐：水煮鱼（鲈鱼）、辣子鸡、毛血旺。鱼片嫩滑、红油透亮，麻辣直给，配米饭一流。</p>"},
    {h:"太二酸菜鱼 · 酸辣", body:"<p>人均约 ¥80 ｜ 地址：深圳多店 ｜ 推荐：老坛子酸菜鱼（鲈鱼）、藤椒鱼。酸辣开胃、鱼片无刺，甜品一律跳过。</p>"},
    {h:"鱼酷活鱼烤鱼 · 烤鱼", body:"<p>人均约 ¥95 ｜ 地址：深圳多店 ｜ 推荐：麻辣/藤椒烤鱼（清江鱼）、配菜加土豆宽粉。现杀活鱼，麻辣汁收得浓。</p>"},
    {h:"黄记煌三汁焖锅 · 焖锅", body:"<p>人均约 ¥90 ｜ 地址：深圳多店 ｜ 推荐：麻辣/香辣焖鸡翅、焖牛蛙。一锅焖出，酱汁咸辣浓郁，懒人友好。</p>"},
    {h:"蜀大侠火锅 · 成都火锅", body:"<p>人均约 ¥130 ｜ 地址：深圳多店 ｜ 推荐：九宫格牛油锅、耙牛肉、鹅肠。环境偏江湖气，辣度稳。</p>"},
    {h:"☕ 配饮清单（不甜的那种）", body:"<p>吃辣配什么：<b>冰美式</b>最解腻——Manner、Seesaw、%Arabica 在深圳各商圈都有，本地独立咖啡馆集中在南头古城、华侨城创意园一带。想喝茶就选<b>纯茶</b>：普洱、乌龙、单丛都压得住辣味，tea'stone 一类纯茶馆可以坐；便利店选无糖乌龙/茉莉茶。<b>奶茶、果茶、糖水一律跳过。</b></p>"}
  ]
};
// 保留原始 14 天基础三餐方案（从备份读取），仅替换「🌶 旺仔辣味备选」块 + 深圳店卡
const bk = (function(){
  try { return (new Function('return '+fs.readFileSync('content.js.bak','utf8').match(/const CONTENT = (\{[\s\S]*\});?\s*$/)[1]))(); }
  catch(e){ return null; }
})();
let DIET;
if(bk && Array.isArray(bk.diet)){
  const baseDays = bk.diet.filter(e=>/^第\d+天/.test(e.title)).slice(0,14);
  DIET = baseDays.map((day,i)=>{
    const blocks = day.blocks.map(b=>{
      if(b.h && b.h.indexOf('🌶')===0){ return {h:b.h, body:`<p>${SPICY[i]}</p>`}; }
      return b;
    });
    return {title:day.title, tag:day.tag, blocks};
  }).concat([SHENZHEN_HOT]);
} else {
  DIET = DIET_DAYS.map((d,i)=>dietDay(i+1, d[0], d[1])).concat([SHENZHEN_HOT]);
}

/* ---------------- travel ---------------- */
const T_PREP = "① 装备分层：排汗内层+保暖中层+防风外层，登山鞋提前磨合；登山杖、头灯、雨衣、保温毯必带。② 体能循序渐进，出发前 4-6 周做负重爬坡训练。③ 买含高原/救援的户外保险（如「美亚」「安联」高危运动险）。④ 离线下载「两步路 / AllTrails / Gaia GPS」轨迹与「MAPS.ME」地图；把行程告知家人。⑤ 出境路线查签证与徒步许可（permit），部分限流需提前数月预约。⑥ 轻量化但留安全冗余：急救包+个人药品随身。";
const TRAVEL = [
  {title:"安娜普纳环线 · 尼泊尔 Annapurna Circuit",loc:"亚洲-尼泊尔-甘达基专区",
   blocks:[
    {h:"🎒 行前通用准备",body:`<p>${T_PREP}</p>`},
    {h:"🌏 当地民俗文化·传统礼仪",body:"尼泊尔以印度教为主，进寺庙脱鞋、不穿鞋踩门槛；绕佛塔/玛尼堆请顺时针。山区居民多信藏传佛教，拍照先征得同意。"},
    {h:"✈️ 从深圳出发·如何到达",body:"<p>深圳→加德满都（经成都/昆明/广州或曼谷中转），往返机票约 ¥3500-6000；落地后乘车到 Besishahar 开始徒步。</p>\n\n💰 参考费用（人均）：山区客栈 ¥40-90/晚、餐 ¥25-50/天；18 天含机票人均约 ¥9000-14000。"},
    {h:"🗓 最佳徒步季节",body:"3-5 月：春暖、高山杜鹃盛开，推荐；10-11 月：秋高气爽、雪山最清晰；避开 6-9 月雨季与 12-2 月严寒。"},
    {h:"🗺 徒步天数与路线",body:"<p><b>总里程约 160-230km，12-21 天，翻越 Thorong La 垭口（5416m）。</b></p><ul><li><b>Day1-5</b>：Besishahar→Chame，海拔缓升，河谷与森林。</li><li><b>Day6-10</b>：Chame→Manang，进入高海拔适应区。</li><li><b>Day11-13</b>：翻 Thorong La 到 Muktinath，⚠️ 垭口风大缺氧，早出发。</li><li><b>Day14+</b>：经 Jomsom 飞或乘车撤离。</li></ul>\n\n🍱 补给：山区茶馆解决食宿，能量棒+坚果随身。"},
    {h:"💰 价格预算（深圳出发）",body:"<p>深圳往返机票 <b>¥3500-6000</b>；客栈 ¥40-90/晚、餐 ¥25-50；徒步 12-21 天 <b>总预算约 ¥9000-14000</b>（不含向导）。请背夫/向导另计 ¥200-350/天。</p>"},
    {h:"🏞 路线亮点·必看风景",body:"<ul><li><b>Thorong La 垭口</b>：👍 5416m 雪域成就感 ｜ 👎 高反风险 ｜ ⚠️ 早出早归</li><li><b>Manang 高原湖泊</b>：👍 蓝湖倒影 ｜ 👎 需适应 ｜ ⚠️ 别跑跳</li><li><b> Muktinath 神庙</b>：👍 印度教佛教交汇 ｜ 👎 人多 ｜ ⚠️ 尊重宗教</li></ul>"},
    {h:"🍜 当地美食·吃什么",body:"<p>Dal Bhat（豆汤饭，徒步者主食管饱）、Momo 蒸饺、Thukpa 面汤。正餐偏碳水管饱，辣度适中带点孜然香，饮品自配无糖茶或冰美式。</p>"},
    {h:"⚠️ 安全与注意",body:"<p>① <b>高反是头号风险</b>——海拔 3000m 以上每天升幅别超 500m，出现头痛恶心立刻下撤；② 垭口天气多变，防风保暖层必带；③ 现金带够，山区无 ATM；④ 饮用水务必净水片/煮沸，防肠胃病。</p>"},
    {h:"🎫 实操：许可 · 预约 · 证件",body:"<p>① 持<b>有效期6个月以上护照</b>办尼泊尔落地签或电子签；② 进 Annapurna 保护区办 <b>ACAP 许可</b>与 <b>TIMS 卡</b>（办证点设在加都/博卡拉）；③ 背夫向导可在博卡拉当地旅行社雇佣；④ 离线地图+保险单打印随身。</p>"}
   ],images:["assets/scene/route_00_0.jpg","assets/scene/route_00_1.jpg","assets/scene/route_00_2.jpg","assets/route_0.svg"]},
  {title:"多洛米蒂 · 阿尔塔维亚1 Alta Via 1",loc:"欧洲-意大利-南蒂罗尔",
   blocks:[
    {h:"🎒 行前通用准备",body:`<p>${T_PREP}</p>`},
    {h:"🌏 当地民俗文化·传统礼仪",body:"南蒂罗尔德语区与意大利语区交融，入山屋（Rifugio）请脱鞋、轻声；垃圾分类严格，请配合屋主。"},
    {h:"✈️ 从深圳出发·如何到达",body:"<p>深圳→米兰/慕尼黑/威尼斯转火车到 Cortina d'Ampezzo 或 Lago di Braies 起点的公交；往返机票约 ¥5000-9000。</p>\n\n💰 参考费用（人均）：山屋 €30-60/晚、半餐 €15-25；10 天含机票人均约 ¥16000-24000。"},
    {h:"🗓 最佳徒步季节",body:"7-9 月：雪线退、步道全开，推荐；6 月与 9 月人少但高垭口仍可能有残雪；避开 10-5 月冬季封山。"},
    {h:"🗺 徒步天数与路线",body:"<p><b>总里程约 120km，8-12 天，多个 2500m+ 垭口。</b></p><ul><li><b>Day1-3</b>：Lago di Braies→Cortina，湖光山色经典段。</li><li><b>Day4-7</b>：翻越几座钢索辅助垭口（Via Ferrata），⚠️ 需安全带与头盔。</li><li><b>Day8-12</b>：抵 Belluno 方向撤离。</li></ul>\n\n🍱 补给：山屋可住宿用餐，自带能量棒与水。"},
    {h:"💰 价格预算（深圳出发）",body:"<p>深圳往返机票 <b>¥5000-9000</b>；山屋 €30-60/晚；徒步 8-12 天 <b>总预算约 ¥16000-24000</b>。旺季山屋务必提前 2-3 月预订。</p>"},
    {h:"🏞 路线亮点·必看风景",body:"<ul><li><b>三峰群 Tre Cime</b>：👍 标志性岩塔 ｜ 👎 游客多 ｜ ⚠️ 早去</li><li><b>Lago di Braies</b>：👍 翡翠湖 ｜ 👎 停车难 ｜ ⚠️ 早到</li><li><b>钢索垭口</b>：👍 刺激视野 ｜ 👎 需装备 ｜ ⚠️ 恐高慎选</li></ul>"},
    {h:"🍜 当地美食·吃什么",body:"<p>意面、Knödel 面包团、Speck 烟熏火腿、Apple strudel（偏甜可少尝）。山屋半膳管饱，咖啡随处有。"},
    {h:"⚠️ 安全与注意",body:"<p>① 钢索段需 <b>Via Ferrata 安全带+头盔</b>，无装备勿上；② 雷雨高发，垭口遇雷雨立即下撤；③ 山屋旺季爆满，务必提前订；④ 欧洲物价高，现金卡都带。</p>"},
    {h:"🎫 实操：许可 · 预约 · 证件",body:"<p>① 办<b>申根签证</b>（按主要停留国）；② 山屋通过 Rifugio 官网或预订平台提前 2-3 月订；③ 购买含登山救援的旅行险；④ 离线地图 Komoot/Outdooractive 下载。</p>"}
   ],images:["assets/scene/route_01_0.jpg","assets/scene/route_01_1.jpg","assets/scene/route_01_2.jpg","assets/route_1.svg"]},
  {title:"冰岛环岛 · 1号公路 Route 1",loc:"欧洲-冰岛-全境",
   blocks:[
    {h:"🎒 行前通用准备",body:`<p>${T_PREP}</p>`},
    {h:"🌏 当地民俗文化·传统礼仪",body:"冰岛人低调友善，泡温泉（如蓝湖）前必须冲净身体；户外尊重私有地，勿擅闯牧场。"},
    {h:"✈️ 从深圳出发·如何到达",body:"<p>深圳→哥本哈根/伦敦/巴黎转机雷克雅未克；往返机票约 ¥6000-10000；落地租两车自驾环岛。</p>\n\n💰 参考费用（人均）：租车分摊 ¥300-500/天、营地 ¥150-300/晚；10 天含机票人均约 ¥18000-26000。"},
    {h:"🗓 最佳徒步季节",body:"6-8 月：极昼、路况最佳，推荐；9 月秋色+可能见极光；避开 11-3 月暴风雪与极夜。"},
    {h:"🗺 徒步天数与路线",body:"<p><b>环岛约 1300km 自驾+徒步点，8-12 天。</b></p><ul><li><b>Day1-3</b>：黄金圈+南岸瀑布（Skógafoss、Seljalandsfoss）。</li><li><b>Day4-6</b>：东峡湾徒步+钻石冰沙滩。</li><li><b>Day7-10</b>：米湖地热区+斯奈山半岛。</li></ul>\n\n🍱 补给：小镇超市（Bonus）采购，野营自炊省钱。"},
    {h:"💰 价格预算（深圳出发）",body:"<p>深圳往返机票 <b>¥6000-10000</b>；租车分摊 ¥300-500/天；环岛 8-12 天 <b>总预算约 ¥18000-26000</b>。冰岛物价高，自炊明显省钱。</p>"},
    {h:"🏞 路线亮点·必看风景",body:"<ul><li><b>杰古沙龙冰沙滩</b>：👍 蓝冰奇观 ｜ 👎 风大冷 ｜ ⚠️ 别靠浪</li><li><b>斯奈山半岛</b>：👍 火山冰川同框 ｜ 👎 路远 ｜ ⚠️ 早出</li><li><b>米湖</b>：👍 地热地貌 ｜ 👎 硫磺味 ｜ ⚠️ 走木栈道</li></ul>"},
    {h:"🍜 当地美食·吃什么",body:"<p>羊肉汤、热狗（Bæjarins Beztu）、海鲜浓汤管暖。冰岛甜点偏甜可少尝，主食管饱。"},
    {h:"⚠️ 安全与注意",body:"<p>① <b>风速极大</b>，车门易被吹坏、徒步易被吹倒，看天气预报（vedur.is）；② 冰沙滩「疯狗浪」夺命，远离水线；③ 地热区只走木栈道；④ 油价高，满油再进内陆。</p>"},
    {h:"🎫 实操：许可 · 预约 · 证件",body:"<p>① 持<b>护照</b>免签停留≤90天（中国护照需提前办申根/过境签，建议先查最新政策）；② 租车需国际驾照认证件+信用卡；③ 营地/蓝湖提前订；④ 下载 1337 紧急 App 与离线地图。</p>"}
   ],images:["assets/scene/route_02_0.jpg","assets/scene/route_02_1.jpg","assets/scene/route_02_2.jpg","assets/route_2.svg"]},
  {title:"熊野古道 · 日本 Kumano Kodo",loc:"亚洲-日本-和歌山",
   blocks:[
    {h:"🎒 行前通用准备",body:`<p>${T_PREP}</p>`},
    {h:"🌏 当地民俗文化·传统礼仪",body:"神道教与佛教交融，进鸟居脱帽、净手漱口后再参拜；熊野三山是世界遗产，请保持肃静。"},
    {h:"✈️ 从深圳出发·如何到达",body:"<p>深圳→大阪/关西机场，转 JR/巴士到田边或新宫开始；往返机票约 ¥2000-4000。</p>\n\n💰 参考费用（人均）：民宿 ¥300-600/晚、餐 ¥60-120/天；6 天含机票人均约 ¥6000-10000。"},
    {h:"🗓 最佳徒步季节",body:"3-5 月与 10-11 月：气候宜人、红叶绿意，推荐；夏季湿热多蚊；冬季部分山路湿滑。"},
    {h:"🗺 徒步天数与路线",body:"<p><b>中边路约 30-40km，4-6 天，起伏山林古道。</b></p><ul><li><b>Day1-2</b>：田边→近露/野中，石阶古道。</li><li><b>Day3-4</b>：翻越高野山方向，参拜发心门。</li><li><b>Day5-6</b>：抵熊野本宫大社、那智大社。</li></ul>\n\n🍱 补给：沿线和歌山小镇餐馆、便利店充足。"},
    {h:"💰 价格预算（深圳出发）",body:"<p>深圳往返机票 <b>¥2000-4000</b>；民宿 ¥300-600/晚；4-6 天 <b>总预算约 ¥6000-10000</b>，是日本近程高性价比之选。</p>"},
    {h:"🏞 路线亮点·必看风景",body:"<ul><li><b>那智瀑布</b>：👍 日本第一落差 ｜ 👎 人多 ｜ ⚠️ 早去</li><li><b>高野山奥之院</b>：👍 千年杉道 ｜ 👎 雨多 ｜ ⚠️ 静默</li><li><b>本宫大社</b>：👍 世界遗产 ｜ 👎 需换乘 ｜ ⚠️ 查巴士</li></ul>"},
    {h:"🍜 当地美食·吃什么",body:"<p>麦饭（香菇饭）、熊野古道便当、关西拉面。辣度低，可自加七味粉提味；甜食（和果子）偏甜少尝。"},
    {h:"⚠️ 安全与注意",body:"<p>① 古道石阶湿滑，<b>防水登山鞋+护膝</b>必备；② 山区信号弱，离线地图+纸质地图；③ 夏季蚊虫多，驱蚊+长袖；④ 公共交通班次少，提前查时刻表。</p>"},
    {h:"🎫 实操：许可 · 预约 · 证件",body:"<p>① 持<b>有效期6个月以上护照</b>办日本单次/三年签；② 熊野古道不需特别 permit，但住宿（民宿/温泉旅馆）旺季提前订；③ 买 JR Pass 或 ICOCA 交通卡；④ 下载「Japan Travel」离线地图。</p>"}
   ],images:["assets/scene/route_03_0.jpg","assets/scene/route_03_1.jpg","assets/scene/route_03_2.jpg","assets/route_3.svg"]},
  {title:"阿尔卑斯高山徒步 · 瑞士 Eiger Trail",loc:"欧洲-瑞士-伯尔尼高地",
   blocks:[
    {h:"🎒 行前通用准备",body:`<p>${T_PREP}</p>`},
    {h:"🌏 当地民俗文化·传统礼仪",body:"瑞士山屋文化成熟，进屋脱鞋；公共区间保持安静，垃圾分类细致。"},
    {h:"✈️ 从深圳出发·如何到达",body:"<p>深圳→苏黎世/日内瓦，火车到 Grindelwald/采尔马特；往返机票约 ¥5000-9000。</p>\n\n💰 参考费用（人均）：山屋/客栈 CHF 60-120/晚、餐饮偏贵；7 天含机票人均约 ¥20000-30000。"},
    {h:"🗓 最佳徒步季节",body:"7-9 月：雪退步道全开，推荐；6 月与 9 月人少；10 月后高海拔积雪封路。"},
    {h:"🗺 徒步天数与路线",body:"<p><b>采尔马特/格林德瓦周边 5-8 天，单段 8-20km。</b></p><ul><li><b>Day1-2</b>：Eiger Trail（艾格北壁脚下），仰望峰壁。</li><li><b>Day3-5</b>：五湖步道、高山牧场环线。</li><li><b>Day6-8</b>：齿轨火车登少女峰/马特洪峰观景。</li></ul>\n\n🍱 补给：山屋与缆车站餐厅，自带水与能量棒。"},
    {h:"💰 价格预算（深圳出发）",body:"<p>深圳往返机票 <b>¥5000-9000</b>；瑞士物价高，山屋 CHF 60-120/晚；7 天 <b>总预算约 ¥20000-30000</b>。建议买 Swiss Travel Pass 省交通费。</p>"},
    {h:"🏞 路线亮点·必看风景",body:"<ul><li><b>马特洪峰</b>：👍 金字塔峰 ｜ 👎 排队 ｜ ⚠️ 早缆车</li><li><b>艾格北壁</b>：👍 史诗岩壁 ｜ 👎 风大 ｜ ⚠️ 保暖</li><li><b>高山湖泊</b>：👍 倒影绝景 ｜ 👎 人多 ｜ ⚠️ 错峰</li></ul>"},
    {h:"🍜 当地美食·吃什么",body:"<p>奶酪火锅（Fondue）、Rösti 土豆饼、香肠。偏油腻管饱，配茶解腻；甜点偏甜少尝。"},
    {h:"⚠️ 安全与注意",body:"<p>① 高山天气瞬变，<b>防风硬壳+头灯</b>必带；② 部分路段临崖，恐高慎行；③ 瑞士极贵，现金卡都备；④ 齿轨火车时刻固定，提前查。</p>"},
    {h:"🎫 实操：许可 · 预约 · 证件",body:"<p>① 办<b>申根签证</b>；② 高山山屋（SAC  hut）官网提前订；③ 买 Swiss Travel Pass；④ 下载 SwitzerlandMobility 离线轨迹。</p>"}
   ],images:["assets/scene/route_04_0.jpg","assets/scene/route_04_1.jpg","assets/scene/route_04_2.jpg","assets/route_4.svg"]},
  {title:"清迈+素可泰文化徒步 · 泰国",loc:"亚洲-泰国-清迈",
   blocks:[
    {h:"🎒 行前通用准备",body:`<p>${T_PREP}</p>`},
    {h:"🌏 当地民俗文化·传统礼仪",body:"泰国尊佛，进寺庙遮肩膝、脱鞋；不高声、不指佛像；王室肖像请尊重。"},
    {h:"✈️ 从深圳出发·如何到达",body:"<p>深圳→清迈（直飞或经曼谷），往返机票约 ¥1500-3500；素可泰可乘火车/巴士。</p>\n\n💰 参考费用（人均）：guesthouse ¥80-200/晚、餐 ¥25-60/天；8 天含机票人均约 ¥5000-9000。"},
    {h:"🗓 最佳徒步季节",body:"11-2 月：凉季干爽，推荐；3-5 月极热；6-10 月雨季湿热多阵雨。"},
    {h:"🗺 徒步天数与路线",body:"<p><b>清迈古城+素可泰遗址，7-9 天，以城市步行+周边山径为主。</b></p><ul><li><b>Day1-3</b>：清迈古城寺庙、素贴山双龙寺步道。</li><li><b>Day4-5</b>：因他暖山（泰国最高峰）轻徒步。</li><li><b>Day6-8</b>：火车赴素可泰历史公园骑行+步行。</li></ul>\n\n🍱 补给：夜市与街边摊极丰富，注意肠胃。"},
    {h:"💰 价格预算（深圳出发）",body:"<p>深圳往返机票 <b>¥1500-3500</b>；住宿便宜；7-9 天 <b>总预算约 ¥5000-9000</b>，是高性价比热带文化线。</p>"},
    {h:"🏞 路线亮点·必看风景",body:"<ul><li><b>素贴山</b>：👍 俯瞰清迈 ｜ 👎 人多 ｜ ⚠️ 早去</li><li><b>素可泰遗址</b>：👍 暹罗古都 ｜ 👎 暴晒 ｜ ⚠️ 带伞</li><li><b>因他暖</b>：👍 凉润森林 ｜ 👎 远 ｜ ⚠️ 包车</li></ul>"},
    {h:"🍜 当地美食·吃什么",body:"<p>冬阴功（可喊「不太辣」也行）、咖喱面 Khao Soi、芒果糯米饭（偏甜少尝）。泰北菜香料足，配冰美式解辣一流。"},
    {h:"⚠️ 安全与注意",body:"<p>① 热带<b>防晒防蚊</b>第一，登革热季尤甚；② 饮用水喝瓶装；③ 寺庙着装遮肩膝；④ 租摩托需国际驾照，谨慎骑行。</p>"},
    {h:"🎫 实操：许可 · 预约 · 证件",body:"<p>① 中国护照可办<b>泰国电子签/落地签</b>（按最新政策）；② 古城步行无需 permit；③ 因他暖可报一日游或包车；④ 下载 Grab 打车+离线地图。</p>"}
   ],images:["assets/scene/route_05_0.jpg","assets/scene/route_05_1.jpg","assets/scene/route_05_2.jpg","assets/route_5.svg"]},
  {title:"下龙湾+河内 · 越南",loc:"亚洲-越南-广宁",
   blocks:[
    {h:"🎒 行前通用准备",body:`<p>${T_PREP}</p>`},
    {h:"🌏 当地民俗文化·传统礼仪",body:"越南受儒释道与法式影响，进寺脱鞋；大街过马路「慢步匀速」让车流绕你。"},
    {h:"✈️ 从深圳出发·如何到达",body:"<p>深圳→河内/海防（直飞或经南宁陆路），往返机票约 ¥1200-3000；下龙湾从河内乘车 3-4h。</p>\n\n💰 参考费用（人均）：酒店 ¥120-300/晚、餐 ¥30-80/天；7 天含机票人均约 ¥5000-8000。"},
    {h:"🗓 最佳徒步季节",body:"10-4 月：干凉季，推荐；5-9 月湿热多台风雨。"},
    {h:"🗺 徒步天数与路线",body:"<p><b>河内老城步行+下龙湾巡航，6-8 天。</b></p><ul><li><b>Day1-3</b>：河内老城区、还剑湖、三十六行街徒步。</li><li><b>Day4-6</b>：下龙湾乘船/皮划艇探喀斯特。</li><li><b>Day7-8</b>：返河内或北上沙坝（如需徒步）。</li></ul>\n\n🍱 补给：河内街头咖啡与粉面极便宜。"},
    {h:"💰 价格预算（深圳出发）",body:"<p>深圳往返机票 <b>¥1200-3000</b>；越南物价低；6-8 天 <b>总预算约 ¥5000-8000</b>。</p>"},
    {h:"🏞 路线亮点·必看风景",body:"<ul><li><b>下龙湾</b>：👍 海上桂林 ｜ 👎 游船多 ｜ ⚠️ 选小众航线</li><li><b>还剑湖</b>：👍 老城心脏 ｜ 👎 商业化 ｜ ⚠️ 清晨去</li><li><b>沙坝梯田</b>：👍 云海梯田 ｜ 👎 路远 ｜ ⚠️ 另排行程</li></ul>"},
    {h:"🍜 当地美食·吃什么",body:"<p>Pho 牛肉粉、Bun Cha 烤肉米粉、越南咖啡（炼乳甜可换黑咖啡）。米粉多辛香料，配冰美式解腻。"},
    {h:"⚠️ 安全与注意",body:"<p>① 过马路极危险，<b>匀速慢行</b>别停；② 防飞车抢包，斜挎包前背；③ 只喝瓶装水；④ 下龙湾选正规游船，查天气。</p>"},
    {h:"🎫 实操：许可 · 预约 · 证件",body:"<p>① 中国护照可办<b>越南电子签（E-visa）</b>；② 河内步行无需 permit；③ 下龙湾船票官网/代理订；④ 下载 Grab+离线地图。</p>"}
   ],images:["assets/scene/route_06_0.jpg","assets/scene/route_06_1.jpg","assets/scene/route_06_2.jpg","assets/route_6.svg"]},
  {title:"京那巴鲁山 · 马来西亚沙巴",loc:"亚洲-马来西亚-沙巴",
   blocks:[
    {h:"🎒 行前通用准备",body:`<p>${T_PREP}</p>`},
    {h:"🌏 当地民俗文化·传统礼仪",body:"沙巴多元族群，入原住民村落先征得同意；清真寺入内需脱鞋、女性披肩。"},
    {h:"✈️ 从深圳出发·如何到达",body:"<p>深圳→亚庇（沙巴）直飞，往返机票约 ¥1500-3500；登山从亚庇乘车 2h 到神山公园。</p>\n\n💰 参考费用（人均）：公园小屋 ¥200-400/晚、餐 ¥40-90/天；5 天含机票人均约 ¥5000-8000。"},
    {h:"🗓 最佳徒步季节",body:"3-9 月：干季清晰，推荐；10-2 月雨季多雾路滑。"},
    {h:"🗺 徒步天数与路线",body:"<p><b>神山（4095m）2 天 1 夜登顶，配周边热带雨林步道。</b></p><ul><li><b>Day1</b>：Timpohon 门→宿 Laban Rata（3270m），6-8h。</li><li><b>Day2</b>：凌晨冲顶 Low's Peak 看日出，后下撤。</li><li><b>Day3-5</b>：波令温泉/雨林吊桥轻松走。</li></ul>\n\n🍱 补给：小屋有餐，自带高能量零食。"},
    {h:"💰 价格预算（深圳出发）",body:"<p>深圳往返机票 <b>¥1500-3500</b>；登山需向导费+许可（约 ¥600-1000）；5 天 <b>总预算约 ¥5000-8000</b>。</p>"},
    {h:"🏞 路线亮点·必看风景",body:"<ul><li><b>Low's Peak</b>：👍 东南亚最高峰日出 ｜ 👎 需许可 ｜ ⚠️ 高原反应</li><li><b>波令温泉</b>：👍 登后放松 ｜ 👎 远 ｜ ⚠️ 自带泳衣</li><li><b>雨林吊桥</b>：👍 生态丰富 ｜ 👎 湿热 ｜ ⚠️ 防蚊</li></ul>"},
    {h:"🍜 当地美食·吃什么",body:"<p>沙捞越面、椰浆饭 Nasi Lemak、肉骨茶（巴生风味偏药膳）。辣度中上，配冰美式；甜品偏甜少尝。"},
    {h:"⚠️ 安全与注意",body:"<p>① 登顶<b>必须向导+许可</b>，每日限额，提前 2-3 月订；② 4095m 有高反，下降时别猛；③ 热带防蚊防蚂蟥；④ 雨林步道湿滑穿防滑鞋。</p>"},
    {h:"🎫 实操：许可 · 预约 · 证件",body:"<p>① 中国护照<b>免签入境马来西亚</b>（按最新政策，可停留30天）；② 神山登顶通过沙巴公园官网订向导+ permit；③ 亚庇机场取现金/卡；④ 下载离线地图。</p>"}
   ],images:["assets/scene/route_07_0.jpg","assets/scene/route_07_1.jpg","assets/scene/route_07_2.jpg","assets/route_7.svg"]},
  {title:"林贾尼火山 · 印尼巴厘岛+龙目岛",loc:"亚洲-印尼-西努沙登加拉",
   blocks:[
    {h:"🎒 行前通用准备",body:`<p>${T_PREP}</p>`},
    {h:"🌏 当地民俗文化·传统礼仪",body:"印尼以伊斯兰为主，进村遮肩膝；火山视为圣山，请尊重当地祈福习俗。"},
    {h:"✈️ 从深圳出发·如何到达",body:"<p>深圳→巴厘岛/龙目岛（经雅加达或直飞），往返机票约 ¥2000-4500；林贾尼从龙目岛圣吉吉乘车到 Senaru。</p>\n\n💰 参考费用（人均）：向导营 ¥300-500/天、客栈 ¥120-300/晚；6 天含机票人均约 ¥7000-11000。"},
    {h:"🗓 最佳徒步季节",body:"4-10 月：干季清晰，推荐；11-3 月雨季泥泞危险。"},
    {h:"🗺 徒步天数与路线",body:"<p><b>林贾尼（3726m）3 天 2 夜，火山口湖 Segara Anak。</b></p><ul><li><b>Day1</b>：Senaru→Pelawangan 营地（2600m）。</li><li><b>Day2</b>：凌晨冲顶看日出，下到火山口湖温泉。</li><li><b>Day3</b>：撤至 Senaru；巴厘岛侧另排梯田/火山徒步。</li></ul>\n\n🍱 补给：向导营供餐，自带能量棒。"},
    {h:"💰 价格预算（深圳出发）",body:"<p>深圳往返机票 <b>¥2000-4500</b>；林贾尼需向导营（强制）；6 天 <b>总预算约 ¥7000-11000</b>。</p>"},
    {h:"🏞 路线亮点·必看风景",body:"<ul><li><b>火山口湖</b>：👍 碧湖温泉 ｜ 👎 陡降 ｜ ⚠️ 护膝</li><li><b> summit 日出</b>：👍 云海火山 ｜ 👎 冷 ｜ ⚠️ 凌晨出发</li><li><b>巴厘梯田</b>：👍 翠绿层叠 ｜ 👎 晒 ｜ ⚠️ 早去</li></ul>"},
    {h:"🍜 当地美食·吃什么",body:"<p>椰浆饭、沙爹串、印尼炒饭 Nasi Goreng。香料重辣度可调，配冰美式；甜食（椰糖糕）偏甜少尝。"},
    {h:"⚠️ 安全与注意",body:"<p>① 林贾尼<b>强制向导</b>，雨季禁止登山；② 火山口边缘松动，勿靠近；③ 热带防蚊+饮水净化；④ 巴厘岛交通乱，谨慎租摩托。</p>"},
    {h:"🎫 实操：许可 · 预约 · 证件",body:"<p>① 中国护照赴印尼可办<b>落地签/电子签</b>（停留30天）；② 林贾尼经 Rinjani trek 官方代理订向导+ permit；③ 巴厘侧景点到处可走；④ 下载离线地图+ Grab。</p>"}
   ],images:["assets/scene/route_08_0.jpg","assets/scene/route_08_1.jpg","assets/scene/route_08_2.jpg","assets/route_8.svg"]},
  {title:"卡帕多奇亚+棉花堡 · 土耳其",loc:"亚洲-土耳其-内夫谢希尔",
   blocks:[
    {h:"🎒 行前通用准备",body:`<p>${T_PREP}</p>`},
    {h:"🌏 当地民俗文化·传统礼仪",body:"土耳其跨亚欧，清真寺入内脱鞋、女性披肩；集市砍价是文化，微笑应对。"},
    {h:"✈️ 从深圳出发·如何到达",body:"<p>深圳→伊斯坦布尔转内夫谢希尔/代尼兹利（或伊兹密尔），往返机票约 ¥4000-7000。</p>\n\n💰 参考费用（人均）：洞穴酒店 ¥250-600/晚、餐 ¥50-120/天；9 天含机票人均约 ¥12000-18000。"},
    {h:"🗓 最佳徒步季节",body:"4-6 月与 9-10 月：温和少雨，推荐；7-8 月酷热；冬季偶尔雪。"},
    {h:"🗺 徒步天数与路线",body:"<p><b>卡帕多奇亚峡谷步道+棉花堡，8-10 天。</b></p><ul><li><b>Day1-4</b>：格雷梅露天博物馆、玫瑰谷/鸽谷徒步、热气球。</li><li><b>Day5-7</b>：南下代尼兹利，棉花堡钙华台步行。</li><li><b>Day8-10</b>：以弗所古城遗址。</li></ul>\n\n🍱 补给：小镇餐馆与烤串摊充足。"},
    {h:"💰 价格预算（深圳出发）",body:"<p>深圳往返机票 <b>¥4000-7000</b>；洞穴酒店体验价高；8-10 天 <b>总预算约 ¥12000-18000</b>。</p>"},
    {h:"🏞 路线亮点·必看风景",body:"<ul><li><b>热气球</b>：👍 精灵烟囱日出 ｜ 👎 贵/看天 ｜ ⚠️ 早订</li><li><b>棉花堡</b>：👍 雪白钙华 ｜ 👎 人多 ｜ ⚠️ 赤脚走</li><li><b>以弗所</b>：👍 罗马废墟 ｜ 👎 晒 ｜ ⚠️ 带水</li></ul>"},
    {h:"🍜 当地美食·吃什么",body:"<p>烤肉串 Kebab、瓦罐牛肉、土耳其披萨 pide。香料足可喊少辣；甜点（巴克拉瓦）极甜只尝一小块，配红茶/冰美式。"},
    {h:"⚠️ 安全与注意",body:"<p>① 热气球受风影响常取消，留弹性；② 夏季暴晒，防晒补水；③ 集市防扒手、砍价别急；④ 偏远步道信号弱，离线地图。</p>"},
    {h:"🎫 实操：许可 · 预约 · 证件",body:"<p>① 中国护照赴土耳其可办<b>电子签（E-visa）</b>，停留30天；② 热气球/洞穴酒店提前订；③ 境内交通用大巴/租车；④ 下载离线地图+翻译 App。</p>"}
   ],images:["assets/scene/route_09_0.jpg","assets/scene/route_09_1.jpg","assets/scene/route_09_2.jpg","assets/route_9.svg"]},
  {title:"佩特拉+瓦迪拉姆 · 约旦",loc:"亚洲-约旦-马安",
   blocks:[
    {h:"🎒 行前通用准备",body:`<p>${T_PREP}</p>`},
    {h:"🌏 当地民俗文化·传统礼仪",body:"约旦以伊斯兰为主，着装保守、入寺脱鞋；贝都因人待客热情，拍照先问。"},
    {h:"✈️ 从深圳出发·如何到达",body:"<p>深圳→安曼（经迪拜/伊斯坦布尔/多哈转），往返机票约 ¥4000-7000；佩特拉从安曼乘车 3h。</p>\n\n💰 参考费用（人均）：客栈 ¥200-450/晚、餐 ¥50-110/天；8 天含机票人均约 ¥12000-17000。"},
    {h:"🗓 最佳徒步季节",body:"3-5 月与 9-11 月：温和，推荐；6-8 月酷热；冬季夜冷。"},
    {h:"🗺 徒步天数与路线",body:"<p><b>佩特拉古城+瓦迪拉姆沙漠，7-9 天。</b></p><ul><li><b>Day1-3</b>：佩特拉蛇道、宝库、修道院徒步（日均 15-20km）。</li><li><b>Day4-6</b>：瓦迪拉姆吉普车+徒步穿越红沙岩。</li><li><b>Day7-9</b>：死海漂浮+安曼城堡山。</li></ul>\n\n🍱 补给：佩特拉镇餐厅、沙漠营供餐。"},
    {h:"💰 价格预算（深圳出发）",body:"<p>深圳往返机票 <b>¥4000-7000</b>；佩特拉门票按天数计价偏高；7-9 天 <b>总预算约 ¥12000-17000</b>。</p>"},
    {h:"🏞 路线亮点·必看风景",body:"<ul><li><b>卡兹尼宝库</b>：👍 玫瑰古城门面 ｜ 👎 人多 ｜ ⚠️ 早进</li><li><b>修道院 Ad Deir</b>：👍 巨构震撼 ｜ 👎 爬 800 级 ｜ ⚠️ 体力</li><li><b>瓦迪拉姆</b>：👍 火星地貌 ｜ 👎 暴晒 ｜ ⚠️ 防晒</li></ul>"},
    {h:"🍜 当地美食·吃什么",body:"<p>鹰嘴豆泥 Hummus、烤肉、曼萨夫（国菜，偏香浓）。香料足，配冰美式；甜点（果仁蜜饼）极甜只尝一点。"},
    {h:"⚠️ 安全与注意",body:"<p>① 沙漠<b>白天极晒、夜间骤冷</b>，分层着装+大量水；② 佩特拉台阶多，防滑鞋；③ 约旦总体安全但远离边境；④ 现金为主，带第纳尔。</p>"},
    {h:"🎫 实操：许可 · 预约 · 证件",body:"<p>① 中国护照可办<b>约旦落地签/电子签</b>（停留30天）；② 佩特拉门票在门口买（1/2/3日票）；③ 瓦迪拉姆吉普游找正规营；④ 下载离线地图。</p>"}
   ],images:["assets/scene/route_10_0.jpg","assets/scene/route_10_1.jpg","assets/scene/route_10_2.jpg","assets/route_10.svg"]},
  {title:"罗卡角+里斯本 · 葡萄牙",loc:"欧洲-葡萄牙-里斯本",
   blocks:[
    {h:"🎒 行前通用准备",body:`<p>${T_PREP}</p>`},
    {h:"🌏 当地民俗文化·传统礼仪",body:"葡萄牙人松弛友善，法朵餐厅请保持安静；小费非强制，凑整即可。"},
    {h:"✈️ 从深圳出发·如何到达",body:"<p>深圳→里斯本（经迪拜/巴黎/阿姆斯特丹转），往返机票约 ¥5000-9000。</p>\n\n💰 参考费用（人均）：旅馆 ¥250-500/晚、餐 ¥70-150/天；8 天含机票人均约 ¥15000-22000。"},
    {h:"🗓 最佳徒步季节",body:"5-6 月与 9-10 月：温暖少人，推荐；7-8 月游客爆满；冬季多雨但温和。"},
    {h:"🗺 徒步天数与路线",body:"<p><b>里斯本老城坡道+辛特拉山径+罗卡角，7-9 天。</b></p><ul><li><b>Day1-3</b>：里斯本 Alfama 坡道、电车道徒步。</li><li><b>Day4-6</b>：辛特拉佩纳宫、摩尔城堡山径。</li><li><b>Day7-9</b>：罗卡角（欧洲大陆最西端）+ 卡斯凯什海岸。</li></ul>\n\n🍱 补给：葡式蛋挞+海鲜饭管饱。"},
    {h:"💰 价格预算（深圳出发）",body:"<p>深圳往返机票 <b>¥5000-9000</b>；南欧物价适中；7-9 天 <b>总预算约 ¥15000-22000</b>。</p>"},
    {h:"🏞 路线亮点·必看风景",body:"<ul><li><b>罗卡角</b>：👍 陆止于此海始于斯 ｜ 👎 风大 ｜ ⚠️ 护栏外勿近</li><li><b>佩纳宫</b>：👍 童话城堡 ｜ 👎 排队 ｜ ⚠️ 早去</li><li><b>25 号电车道</b>：👍 老城俯瞰 ｜ 👎 挤 ｜ ⚠️ 错峰</li></ul>"},
    {h:"🍜 当地美食·吃什么",body:"<p>葡式蛋挞（偏甜少尝）、海鲜饭 Arroz de Marisco、烤沙丁鱼。配绿酒 Vinho Verde 或冰美式；主食管饱。"},
    {h:"⚠️ 安全与注意",body:"<p>① 老城坡陡石滑，<b>防滑鞋</b>必备；② 电车扒手多，背包前背；③ 海风大，海岸崖边勿越栏；④ 南欧午休，景点避开正午。</p>"},
    {h:"🎫 实操：许可 · 预约 · 证件",body:"<p>① 办<b>申根签证</b>；② 辛特拉景点官网提前订免排；③ 里斯本用步行+电车；④ 下载离线地图。</p>"}
   ],images:["assets/scene/route_11_0.jpg","assets/scene/route_11_1.jpg","assets/scene/route_11_2.jpg","assets/route_11.svg"]},
  {title:"撒哈拉+马拉喀什 · 摩洛哥",loc:"非洲-摩洛哥-德拉",
   blocks:[
    {h:"🎒 行前通用准备",body:`<p>${T_PREP}</p>`},
    {h:"🌏 当地民俗文化·传统礼仪",body:"摩洛哥伊斯兰为主，着装遮肩膝；老城麦地那易迷路，向导带路；集市砍价是文化。"},
    {h:"✈️ 从深圳出发·如何到达",body:"<p>深圳→卡萨布兰卡/马拉喀什（经迪拜/巴黎转），往返机票约 ¥4500-8000。</p>\n\n💰 参考费用（人均）：里亚德庭院民宿 ¥200-450/晚、餐 ¥50-120/天；9 天含机票人均约 ¥13000-19000。"},
    {h:"🗓 最佳徒步季节",body:"3-5 月与 9-11 月：沙漠温和，推荐；6-8 月酷热；冬季夜冷至冰点。"},
    {h:"🗺 徒步天数与路线",body:"<p><b>马拉喀什老城+梅尔祖卡沙漠，8-10 天。</b></p><ul><li><b>Day1-3</b>：马拉喀什麦地那、库图比亚清真寺周边步行。</li><li><b>Day4-6</b>：驱车翻阿特拉斯山到梅尔祖卡，骑骆驼进沙丘。</li><li><b>Day7-10</b>：沙漠营徒步+返回。</li></ul>\n\n🍱 补给：里亚德供餐，塔吉锅管饱。"},
    {h:"💰 价格预算（深圳出发）",body:"<p>深圳往返机票 <b>¥4500-8000</b>；沙漠营+租车另计；8-10 天 <b>总预算约 ¥13000-19000</b>。</p>"},
    {h:"🏞 路线亮点·必看风景",body:"<ul><li><b>梅尔祖卡沙丘</b>：👍 橙红沙海日出 ｜ 👎 暴晒 ｜ ⚠️ 防晒水</li><li><b>阿特拉斯山</b>：👍 雪峰峡谷 ｜ 👎 盘路 ｜ ⚠️ 晕车药</li><li><b>老城麦地那</b>：👍 迷宫市集 ｜ 👎 易迷路 ｜ ⚠️ 跟向导</li></ul>"},
    {h:"🍜 当地美食·吃什么",body:"<p>塔吉锅 Tagine、库斯库斯、薄荷甜茶（甜可少喝）。香料丰富辣度温和，配冰美式；甜茶偏甜适量。"},
    {h:"⚠️ 安全与注意",body:"<p>① 沙漠<b>昼夜温差极大</b>，保暖层必带+大量水；② 老城扒手与「热心向导」多，跟正规团；③ 只喝瓶装水；④ 女性着装保守更自在。</p>"},
    {h:"🎫 实操：许可 · 预约 · 证件",body:"<p>① 中国护照赴摩洛哥<b>免签</b>（停留90天）；② 沙漠营通过马拉喀什正规旅行社订；③ 境内长途用 CTM 大巴/包车；④ 下载离线地图+翻译。</p>"}
   ],images:["assets/scene/route_12_0.jpg","assets/scene/route_12_1.jpg","assets/scene/route_12_2.jpg","assets/route_12.svg"]},
  {title:"黄山+徽州古道 · 中国安徽",loc:"亚洲-中国-安徽",
   blocks:[
    {h:"🎒 行前通用准备",body:`<p>${T_PREP}</p>`},
    {h:"🌏 当地民俗文化·传统礼仪",body:"徽州古建与祠堂文化厚重，入村勿攀刻碑刻；山区寺庙清静，低声慢行。"},
    {h:"✈️ 从深圳出发·如何到达",body:"<p>深圳→黄山北（高铁约 6-7h）或飞黄山机场；市内转景区巴士。往返交通约 ¥800-2500。</p>\n\n💰 参考费用（人均）：山上酒店 ¥400-900/晚、餐 ¥60-150/天；5 天含交通人均约 ¥4000-7000。"},
    {h:"🗓 最佳徒步季节",body:"4-5 月与 10-11 月：云海杜鹃/秋色，推荐；7-8 月湿热多雷；冬季雪景美但路滑封部分段。"},
    {h:"🗺 徒步天数与路线",body:"<p><b>黄山风景区+徽杭古道，4-6 天。</b></p><ul><li><b>Day1-3</b>：黄山后山云谷索道上，经始信峰、光明顶、西海大峡谷，宿山顶看日出。</li><li><b>Day4-6</b>：徽杭古道（绩溪→清凉峰）轻徒步，访宏村/西递。</li></ul>\n\n🍱 补给：山顶酒店供餐贵，自带能量棒与水。"},
    {h:"💰 价格预算（深圳出发）",body:"<p>深圳往返交通 <b>¥800-2500</b>；黄山门票+索道约 ¥400-600；4-6 天 <b>总预算约 ¥4000-7000</b>，是高性价比近程线。</p>"},
    {h:"🏞 路线亮点·必看风景",body:"<ul><li><b>光明顶日出</b>：👍 云海金光 ｜ 👎 冷/挤 ｜ ⚠️ 凌晨占位</li><li><b>西海大峡谷</b>：👍 险峻栈道 ｜ 👎 耗体力 ｜ ⚠️ 下行护膝</li><li><b>宏村</b>：👍 画里乡村 ｜ 👎 商业化 ｜ ⚠️ 早进</li></ul>"},
    {h:"🍜 当地美食·吃什么",body:"<p>徽州臭鳜鱼、毛豆腐、笋干烧肉，咸鲜重油管饱；辣度低可自加辣。配黄山毛峰或冰美式解腻。"},
    {h:"⚠️ 安全与注意",body:"<p>① 山顶<b>风大温低</b>，即便夏季也带冲锋衣；② 西海大峡谷台阶陡，恐高慎行；③ 雷雨天勿登高峰；④ 古道部分段信号弱，离线地图。</p>"},
    {h:"🎫 实操：许可 · 预约 · 证件",body:"<p>① 国内游带<b>身份证</b>；② 黄山门票/索道/山顶房旺季提前在官方小程序订；③ 徽杭古道部分收费段购票；④ 下载「两步路」离线轨迹。</p>"}
   ],images:["assets/scene/route_13_0.jpg","assets/scene/route_13_1.jpg","assets/scene/route_13_2.jpg","assets/route_13.svg"]}
];

/* ---------------- 组装并写回 ---------------- */
const src = fs.readFileSync('content.js','utf8');
const m = src.match(/const CONTENT = (\{[\s\S]*\});?\s*$/);
if(!m){ console.error("无法定位 CONTENT 对象"); process.exit(2); }
let CONTENT;
try { CONTENT = (new Function('return '+m[1]))(); }
catch(e){ console.error("解析原 CONTENT 失败:", e.message); process.exit(2); }

CONTENT.finance = FINANCE;
CONTENT.geo = GEO;
CONTENT.overseas = OVERSEAS;
CONTENT.diet = DIET;
CONTENT.travel = TRAVEL;

const header = "/* =========================================================\n   旺仔的工作台 · 内容数据 CONTENT（每周自动焕新）\n   生成时间：2026-08-31｜finance/geo/overseas/diet/travel 已刷新\n   ========================================================= */\n";
const out = header + "const CONTENT = " + JSON.stringify(CONTENT, null, 2) + ";\n";
fs.writeFileSync('content.js', out, 'utf8');
console.log("content.js 已生成：finance", FINANCE.length, "geo", GEO.length, "overseas", OVERSEAS.length, "diet", DIET.length, "travel", TRAVEL.length);
