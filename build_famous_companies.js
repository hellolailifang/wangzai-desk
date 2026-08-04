// 将「名人创办的标杆企业」注入 trade/overseas 模块，并在「看点」行加「📖 名人故事」按钮。
// 做法：在每天推荐块（反引号模板字符串）的闭合反引号前插入企业 .co HTML；并把当天计数 +1、头部数 +1。
// 原格式 100% 不动，仅追加。
const fs = require('fs');
const FILE = 'content.js';
let t = fs.readFileSync(FILE, 'utf8');

function co(name, sizeCls, sizeText, suxie, zhuyao, dafa, fajia, zhuanzhe, kandian, site, fp) {
  return `<div class="co"><div class="co-h"><b>${name}</b><span class="co-t ${sizeCls}">${sizeText}</span></div>`
    + `<div class="co-r"><b>速写：</b>${suxie}</div>`
    + `<div class="co-r"><b>主营业务：</b>${zhuyao}</div>`
    + `<div class="co-r"><b>市场与打法：</b>${dafa}</div>`
    + `<div class="co-r found"><b>📜 发家史：</b>${fajia}</div>`
    + `<div class="co-r turn"><b>🔑 转折点：</b>${zhuanzhe}</div>`
    + `<div class="co-r look"><b>💡 看点：</b>${kandian}<button class="fam-btn" data-fp="${fp}">📖 名人故事</button></div>`
    + `<div class="co-r">官网：<a class="co-site" href="${site}" target="_blank" rel="noopener">🌐 ${site}</a></div></div>`;
}

// 13 家：trade 第1-9天 + overseas 第1-4天
const inserts = [
  { arr: 'trade', day: 1, oldCount: 6, oldHead: 0, newHead: 1, html: co(
    '华为', 'hd', '头部',
    '全球通信设备与智能终端巨头；1987 ｜ 总部：深圳',
    '运营商网络设备、手机与消费者业务、华为云、智能汽车　招牌：5G/光通信、Mate 系列、鸿蒙系统',
    '全球运营商 + 消费者双线；研发驱动、压强式投入、狼性文化',
    '1987 年，任正非在深圳以 2.1 万元创立华为，靠代理香港交换机起家。以"农村包围城市"从县镇邮电局切入，用低价与服务啃下国内，再出海攻城。',
    '2003 年挺进手机、自研海思芯片，2019 年被美制裁后全面转向鸿蒙与国产供应链，把"备胎"转正，走通硬科技自主之路。',
    '从代理小厂到全球通信一哥，是中国硬科技出海与自主可控的范本。',
    'https://www.huawei.com', '任正非 Ren Zhengfei') },

  { arr: 'trade', day: 2, oldCount: 6, oldHead: 0, newHead: 1, html: co(
    '小米', 'hd', '头部',
    '智能手机与 AIoT 生态巨头；2010 ｜ 总部：北京',
    '手机、IoT 与生活消费品、互联网服务　招牌：Redmi、米家生态、汽车',
    '线上性价比起家 + 生态链投资；"铁人三项"硬件+新零售+互联网',
    '2010 年，雷军联合创始团队在北京创立小米，以"为发烧而生"和电商抢购模式，用极致性价比撕开智能手机红海。',
    '2014 年登顶国内手机销量第一；2021 年宣布造车，2024 年 SU7 爆款，从手机厂跃迁为"人车家全生态"。',
    '用互联网思维做硬件、用生态链织网，是中国新消费电子打法的教科书。',
    'https://www.mi.com', '雷军 Lei Jun') },

  { arr: 'trade', day: 3, oldCount: 6, oldHead: 0, newHead: 1, html: co(
    '阿里巴巴', 'hd', '头部',
    '全球电商与云计算巨头；1999 ｜ 总部：杭州',
    '国内/跨境电商（淘宝、天猫、阿里国际站、速卖通）、阿里云、菜鸟　招牌：双11、云计算',
    '平台生态 + 跨境（阿里国际站、速卖通、Trendyol）+ 云技术输出',
    '1999 年，马云在杭州湖畔花园创办阿里巴巴，从 B2B 外贸黄页（阿里巴巴国际站）起家，后来淘宝打败 eBay、天猫做品质商城。',
    '2009 年推双11、2014 年纽交所上市、阿里云成国内云一哥；近年分拆与"AI 驱动"战略，继续连接全球中小买家。',
    '从外贸 B2B 到全球电商+云，是中小外贸人最早触达海外买家的平台。',
    'https://www.alibabagroup.com', '马云 Jack Ma (Ma Yun)') },

  { arr: 'trade', day: 4, oldCount: 6, oldHead: 0, newHead: 1, html: co(
    '京东', 'hd', '头部',
    '中国自营电商与供应链巨头；1998 ｜ 总部：北京',
    '自营零售、京东物流、跨境（Joybuy/全球售）　招牌：211 限时达、正品自营',
    '重资产自建物流 + 正品心智；京东工业/国际做 B2B 出海',
    '1998 年，刘强东在中关村卖光磁产品起家，2004 年转线上，以"正品+自建仓储物流"对抗淘宝的 C2C 集市模式。',
    '2007 年自建物流是豪赌，后来"211 限时达"成护城河；2014 年上市，并借供应链能力切入工业与跨境。',
    '用重供应链做体验壁垒，对做 B2B/工业品出海的卖家很有参考价值。',
    'https://www.jd.com', '刘强东 Liu Qiangdong') },

  { arr: 'trade', day: 5, oldCount: 6, oldHead: 0, newHead: 1, html: co(
    '美团', 'hd', '头部',
    '中国本地生活服务巨头；2010 ｜ 总部：北京',
    '外卖、到店、闪购、美团优选、境外（Keeta）　招牌：外卖配送网络',
    '高频本地生活 + 即时零售 + 无人机/自动配送；出海做中东（Keeta）',
    '2010 年，王兴创办美团，从团购（千团大战）胜出，再并购大众点评，把战场扩到外卖与到店。',
    '外卖规模战打赢后，借配送网络做即时零售，并把模式复制到港澳与中东（Keeta），是"中国模式出海"的代表。',
    '本地生活的"超级 App"打法，对想做海外即时配送/服务出海的人是样本。',
    'https://www.meituan.com', '王兴 Wang Xing') },

  { arr: 'trade', day: 6, oldCount: 6, oldHead: 0, newHead: 1, html: co(
    '拼多多', 'hd', '头部',
    '中国社交电商与出海巨头；2015 ｜ 总部：上海',
    '拼团电商、Temu 跨境全托管　招牌：百亿补贴、Temu',
    '社交裂变 + 极致低价 + 全托管（Temu）；"前端聚单、后端压供应链"',
    '2015 年，黄峥创立拼多多，用"拼团+微信裂变"切入下沉市场，靠低价白牌逆袭阿里京东。',
    '2022 年推出 Temu，以全托管模式席卷欧美，把中国供应链的极致低价直接打进海外，是近年最猛的出海黑马。',
    'Temu 的全托管打法，是跨境卖家绕不开的新变量，必读。',
    'https://www.pinduoduo.com', '黄峥 Colin Huang') },

  { arr: 'trade', day: 7, oldCount: 6, oldHead: 0, newHead: 1, html: co(
    '农夫山泉', 'hd', '头部',
    '中国包装饮用水与饮料龙头；1996 ｜ 总部：杭州',
    '饮用水、茶π、东方树叶、农夫果园　招牌：天然水、无糖茶',
    '水源地品牌化 + 无糖茶风口；"大自然的搬运工"心智',
    '1996 年，钟睒睒在杭州创立农夫山泉，以"天然水"定位差异于纯净水，靠水源地故事建品牌。',
    '无糖茶（东方树叶）踩中健康趋势爆发，2020 年港股上市，钟睒睒数度登顶中国首富，证明"水+品牌"的复利。',
    '用"水源地+心智"做消费品长牛，是品牌出海可借鉴的打法。',
    'https://www.nongfuspring.com', '钟睒睒 Zhong Shanshan') },

  { arr: 'trade', day: 8, oldCount: 6, oldHead: 0, newHead: 1, html: co(
    '福耀玻璃', 'hd', '头部',
    '全球汽车玻璃龙头；1987 ｜ 总部：福建福清',
    '汽车玻璃（OEM+AM）　招牌：全球市占率第一',
    '专注汽车玻璃 + 全球建厂（美/俄/德）；"一片玻璃做到极致"',
    '1987 年，曹德旺在福建福清创立福耀，从乡镇小厂专攻汽车玻璃，硬刚进口替代。',
    '在美国俄亥俄州建厂并拍成《美国工厂》拿下奥斯卡，是中国制造出海"本地化建厂"的标杆样本。',
    '制造业出海"走出去建厂+本地化"的范本，实业家的代表。',
    'https://www.fuyaogroup.com', '曹德旺 Cao Dewang') },

  { arr: 'trade', day: 9, oldCount: 6, oldHead: 0, newHead: 1, html: co(
    '格力', 'hd', '头部',
    '中国空调与家电龙头；1991 ｜ 总部：珠海',
    '空调、家电、智能装备　招牌：格力空调',
    '技术标签 + 自建渠道（经销商体系）+ 硬核营销',
    '1991 年格力在珠海成立，董明珠从业务员做起，靠"淡季打款""区域经销"把空调做到全国第一。',
    '董明珠接任后押注自主研发与品质，把格力做成"掌握核心科技"的空调代名词，并跨界新能源与装备。',
    '制造业"渠道+技术"双轮，是传统家电出海可参考的路径。',
    'https://www.gree.com', '董明珠 Dong Mingzhu') },

  { arr: 'overseas', day: 1, oldCount: 5, oldHead: 1, newHead: 2, html: co(
    '特斯拉 Tesla', 'hd', '头部',
    '全球电动车与能源巨头；2003 ｜ 总部：美国·得州',
    '电动车、储能、自动驾驶　招牌：Model 3/Y、FSD',
    '直营+超级工厂+软件OTA；上海超级工厂是全球化关键',
    '2003 年特斯拉创立，2004 年马斯克入主并力推 Roadster 到 Model S，把电车从"玩具"做成"性能怪兽"。',
    '2019 年上海超级工厂投产，产能与成本骤降，Model 3/Y 成全球爆款；马斯克同时押注 SpaceX、xAI，是跨界狂人。',
    '上海工厂是中国供应链反哺全球品牌的经典案例，出海必读。',
    'https://www.tesla.com', '埃隆·马斯克 Elon Musk') },

  { arr: 'overseas', day: 2, oldCount: 5, oldHead: 1, newHead: 2, html: co(
    '亚马逊 Amazon', 'hd', '头部',
    '全球电商与云计算霸主；1994 ｜ 总部：美国·西雅图',
    '电商 Marketplace、AWS、广告　招牌：FBA、Prime',
    '第三方卖家平台 + FBA 物流 + AWS 技术底座',
    '1994 年，贝索斯在西雅图车库卖书起家，以"地球上最大的商店"愿景做电商，长期"Day 1"式扩张。',
    '2006 年推 AWS、2005 年推 Prime，从零售商蜕变为"卖铲子"的云与广告巨头，FBA 是中国卖家出海的主场。',
    'FBA/Marketplace 是中国跨境卖家最大的出海通道，必研究。',
    'https://www.amazon.com', '杰夫·贝索斯 Jeff Bezos') },

  { arr: 'overseas', day: 3, oldCount: 5, oldHead: 1, newHead: 2, html: co(
    '伯克希尔·哈撒韦 Berkshire', 'hd', '头部',
    '全球投资控股巨头；1965（哈撒韦）/1956（巴菲特合伙）｜ 总部：美国·内布拉斯加',
    '股票投资、全资收购（保险+实业）　招牌：复利、价值投资',
    '保险浮存金+长期持有优质企业；看中消费/金融/能源现金流',
    '1956 年巴菲特以 10 万美元起家做合伙投资，1965 年接手纺织厂伯克希尔，把它改造为投资控股平台。',
    '以"能力圈+安全边际+复利"穿越半个世纪，重仓可口可乐、苹果等，年化回报长年跑赢大盘，是价值投资的活标本。',
    '看企业要看现金流与护城河，对分析外贸龙头很有启发。',
    'https://www.berkshirehathaway.com', '沃伦·巴菲特 Warren Buffett') },

  { arr: 'overseas', day: 4, oldCount: 5, oldHead: 1, newHead: 2, html: co(
    'OpenAI', 'hd', '头部',
    '全球 AI 研究与产品领军；2015 ｜ 总部：美国·旧金山',
    'GPT 大模型、ChatGPT、API　招牌：ChatGPT、Sora',
    '前沿研究 + 产品化 + 与微软结盟；API 赋能千行百业',
    '2015 年 OpenAI 以非营利研究起步，2022 年 ChatGPT 引爆生成式 AI，把大模型带进普通人生活。',
    '2023 年"宫斗"后 Altman 回归并加速商业化，GPT-4o、Sora 持续领先；AI 正重写外贸（客服、选品、营销）。',
    'AI 是外贸人提效的新杠杆，老板 Altman 是这一轮技术周期的旗手。',
    'https://openai.com', '萨姆·奥尔特曼 Sam Altman') },
];

function insertDay(arrName, dayNum, html, oldCount, oldHead, newHead) {
  const dayTitle = arrName === 'trade'
    ? `Day ${dayNum} · 外贸企业推荐（中国）`
    : `Day ${dayNum} · 海外企业推荐（采购中国消费电子）`;
  const di = t.indexOf(`title:'${dayTitle}'`);
  if (di < 0) throw new Error('day not found: ' + dayTitle);

  const rb = t.indexOf('今日推荐', di);
  if (rb < 0) throw new Error('今日推荐 not found in ' + dayTitle);
  const bo = t.indexOf('`', rb);                 // body 模板字符串起始反引号
  if (bo < 0) throw new Error('body backtick not found');
  const bc = t.indexOf('`', bo + 1);             // 闭合反引号
  if (bc < 0) throw new Error('closing backtick not found');

  // 在闭合反引号前插入新企业
  const insertStr = '\n        ' + html + '\n        ';
  t = t.slice(0, bc) + insertStr + t.slice(bc);

  // 计数 +1
  const newCount = oldCount + 1;
  const hAnchor = `今日推荐 · ${oldCount} 家`;
  const hi = t.indexOf(hAnchor, di);
  if (hi < 0) throw new Error('count h not found in ' + dayTitle);
  t = t.slice(0, hi) + `今日推荐 · ${newCount} 家` + t.slice(hi + hAnchor.length);

  // 头部数更新
  const tagAnchor = `头部 ${oldHead}`;
  const ti = t.indexOf(tagAnchor, di);
  if (ti < 0) throw new Error('tag head not found in ' + dayTitle);
  t = t.slice(0, ti) + `头部 ${newHead}` + t.slice(ti + tagAnchor.length);

  console.log(`✓ ${arrName} Day${dayNum}: +1企业, 计数 ${oldCount}->${newCount}, 头部 ${oldHead}->${newHead}`);
}

inserts.forEach(it => insertDay(it.arr, it.day, it.html, it.oldCount, it.oldHead, it.newHead));

fs.writeFileSync(FILE, t);
console.log('written content.js, bytes=', t.length);
