const fs = require("fs");

const FALLBACK = "assets/face-fallback.svg";

// 14 contemporary figures; photo=null => use local silhouette fallback
const P = [
  {
    name:"埃隆·马斯克", en:"Elon Musk", photo:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Elon_Musk_-_54820081119_%28cropped%29.jpg/330px-Elon_Musk_-_54820081119_%28cropped%29.jpg",
    tags:["特斯拉","SpaceX","火星移民","全球首富","颠覆式创新"],
    intro:"1971年生于南非，先后创办Zip2、X.com（后合并为PayPal）；2004年入主特斯拉、2002年创立SpaceX，押注电动车与可回收火箭。他以“第一性原理”逼团队把成本打到极限，同时掌管xAI与X平台，是当代最具争议的科技狂人。2025年起为世界首富，2026年6月成为美元计价的全球唯一万亿富翁。",
    highlight:"“如果一件事足够重要，即使胜算不大也要去做。”——他用可回收火箭把发射成本砍掉一个数量级。"
  },
  {
    name:"马云", en:"Jack Ma (Ma Yun)", photo:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/20th_Anniversary_Schwab_Foundation_Gala_Dinner_%2844887783681%29_%28cropped%29.jpg/330px-20th_Anniversary_Schwab_Foundation_Gala_Dinner_%2844887783681%29_%28cropped%29.jpg",
    tags:["阿里巴巴","蚂蚁集团","电商教父","公益","湖畔"],
    intro:"1964年生于杭州，英语老师出身，1999年带18人在公寓里创立阿里巴巴，做出淘宝、天猫、支付宝，把中国中小企业送上全球贸易舞台。2019年卸任董事局主席，近年转向教育与公益。",
    highlight:"“让天下没有难做的生意”——这句信条，和你的外贸之路直接相关。"
  },
  {
    name:"任正非", en:"Ren Zhengfei", photo:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Ren_Zhengfei_%282016%29.jpg/330px-Ren_Zhengfei_%282016%29.jpg",
    tags:["华为","通信设备","深圳","狼性文化","自主研发"],
    intro:"1944年生于贵州，退伍军人，1987年在深圳以2.1万元创办华为。从交换机代理做到全球最大通信设备商，面对多轮制裁坚持“备胎计划”与海思芯片自研。",
    highlight:"“冬天总会过去，但活下来的企业才有春天。”——他把危机感写进公司基因，总部就在你所在的深圳。"
  },
  {
    name:"雷军", en:"Lei Jun", photo:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Lei_Jun_%282026%29_01.jpg/330px-Lei_Jun_%282026%29_01.jpg",
    tags:["小米","智能手机","生态链","营销鬼才","造车"],
    intro:"1969年生于湖北，武汉大学计算机系，早年创办金山软件，2010年创立小米，用“互联网手机+性价比”改写行业，近年跨界造车（小米SU7大卖）。",
    highlight:"“站在风口上，猪都能飞起来。”——他也把这句话升级成“专注、极致、口碑、快”的七字诀。"
  },
  {
    name:"杰夫·贝索斯", en:"Jeff Bezos", photo:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/260202-D-PM193-2205_SECWAR_Arsenal_of_Freedom_Tour_-_Florida_%283x4_cropped_on_Bezos_and_rotated%29.jpg/330px-260202-D-PM193-2205_SECWAR_Arsenal_of_Freedom_Tour_-_Florida_%283x4_cropped_on_Bezos_and_rotated%29.jpg",
    tags:["亚马逊","AWS","蓝色起源","长期主义","电商帝国"],
    intro:"1964年生于美国，1994年从网上卖书起步创立亚马逊，做成全球最大电商与云计算（AWS）公司；2021年卸任CEO，转攻火箭公司蓝色起源。",
    highlight:"他信奉“Day 1”文化——永远像创业第一天那样保持饥饿感，并把决策放眼7年尺度。"
  },
  {
    name:"钟睒睒", en:"Zhong Shanshan", photo:null,
    tags:["农夫山泉","万泰生物","中国首富","低调","营销高手"],
    intro:"1954年生于浙江，做过记者、卖过保健品，1996年创立农夫山泉，靠“大自然的搬运工”一句广告做透饮用水；同时控股疫苗企业万泰生物，曾长期位居中国首富。",
    highlight:"他极少露面却最懂“把水卖出品牌溢价”，是闷声发财的典型。"
  },
  {
    name:"张一鸣", en:"Zhang Yiming", photo:"https://upload.wikimedia.org/wikipedia/commons/e/e0/The_CEO_Magazine_Cover.jpg",
    tags:["字节跳动","TikTok","算法之王","今日头条","全球化"],
    intro:"1983年生于福建，2012年创立字节跳动，做出今日头条与抖音；TikTok风靡全球让他2024年登顶中国首富。2021年卸任CEO，仍握超50%投票权。",
    highlight:"他用“延迟满足感”和强算法中台，把一家中国公司做成真正的全球App工厂——和你做外贸的TikTok Shop息息相关。"
  },
  {
    name:"沃伦·巴菲特", en:"Warren Buffett", photo:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Warren_Buffett_at_the_2015_SelectUSA_Investment_Summit_%28cropped%29.jpg/330px-Warren_Buffett_at_the_2015_SelectUSA_Investment_Summit_%28cropped%29.jpg",
    tags:["价值投资","伯克希尔","长期持有","复利","奥马哈先知"],
    intro:"1930年生于美国，被称为“奥马哈的先知”，以价值投资与长期持有闻名，掌管的伯克希尔成投资界标杆，长年位居全球富豪榜前十。",
    highlight:"“别人贪婪时我恐惧，别人恐惧时我贪婪。”——他用复利把雪球滚了七十年。"
  },
  {
    name:"刘强东", en:"Liu Qiangdong", photo:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Liu_Qiangdong.jpg/330px-Liu_Qiangdong.jpg",
    tags:["京东","自建物流","正品电商","供应链","下沉市场"],
    intro:"1973年生于江苏，1998年从中关村柜台卖光磁产品起家，2013年做成电商京东（JD.com），以自建物流与“正品”口碑立足，和阿里分庭抗礼。",
    highlight:"他赌上全部身家自建仓储配送，把“快”做成京东的护城河。"
  },
  {
    name:"王兴", en:"Wang Xing", photo:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Wang_Xing_in_2009.jpg/330px-Wang_Xing_in_2009.jpg",
    tags:["美团","本地生活","千团大战幸存者","深度思考","无边界"],
    intro:"美团创始人，2010年创立美团，从团购“千团大战”杀出，做成覆盖外卖、到店、酒旅的本地生活超级平台。",
    highlight:"他信奉“既往不恋，纵情向前”，把外卖打成日订单过亿的生意——也是我们此前写的“美团 vs 抖音”商战主角。"
  },
  {
    name:"萨姆·奥尔特曼", en:"Sam Altman", photo:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Meeting_with_Masayoshi_Son_and_Sam_Altman_%28February_3%2C_2025%29_%283x4_cropped_on_Altman%29.jpg/330px-Meeting_with_Masayoshi_Son_and_Sam_Altman_%28February_3%2C_2025%29_%283x4_cropped_on_Altman%29.jpg",
    tags:["OpenAI","ChatGPT","AI时代","YC","创业加速器"],
    intro:"1985年生于美国，2019年起任OpenAI CEO，把生成式AI（ChatGPT）推向全球；早年执掌创业加速器Y Combinator。",
    highlight:"他押注通用人工智能（AGI）会改变一切，是这一轮AI浪潮最显眼的面孔。"
  },
  {
    name:"曹德旺", en:"Cao Dewang", photo:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/%E6%9B%B9%E5%BE%B7%E6%97%BA.jpg/330px-%E6%9B%B9%E5%BE%B7%E6%97%BA.jpg",
    tags:["福耀玻璃","汽车玻璃","实业报国","慈善","美国建厂"],
    intro:"福建人，创立福耀玻璃做成全球最大汽车玻璃供应商，在美国俄亥俄州建厂拍成纪录片《美国工厂》，长期大额捐赠办福耀科技大学。",
    highlight:"“我做玻璃，做到全世界最好就赢了。”——他是少有的把“实业”二字刻进骨子里的企业家。"
  },
  {
    name:"董明珠", en:"Dong Mingzhu", photo:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Dong_Mingzhu_%28cropped%29.JPG/330px-Dong_Mingzhu_%28cropped%29.JPG",
    tags:["格力","空调女王","硬刚营销","品质偏执","中国制造"],
    intro:"1954年生于江苏，从格力一线业务员做到掌门人，把格力做成空调霸主，以“掌握核心科技”和铁腕管理闻名。",
    highlight:"她敢当面怼同行、为品质拍胸脯，是中国制造业最具辨识度的女企业家。"
  },
  {
    name:"黄峥", en:"Colin Huang", photo:null,
    tags:["拼多多","Temu","下沉市场","农业","极致效率"],
    intro:"1980年生于浙江，2015年创立拼多多，用“社交拼团+极致低价”横扫下沉市场，后孵化出海电商Temu引爆欧美。2021年起逐步卸任，转向科研公益。",
    highlight:"Temu的“全托管+低价”打法，正是我们之前写的“Temu vs SHEIN vs TikTok Shop”商战另一方——和你的跨境生意直接相关。"
  }
];

const items = P.map((p, i) => {
  const photo = p.photo || FALLBACK;
  const onerr = p.photo ? ` onerror="this.onerror=null;this.src='${FALLBACK}'"` : "";
  const blocks = [
    {h:"📷 人物照片", body:`<img class="face" src="${photo}" alt="${p.name}"${onerr}>`},
    {h:"🏷 人物标签", body:`<p class="tags">${p.tags.join(" · ")}</p>`},
    {h:"📖 人物介绍", body:`<p>${p.intro}</p>`},
    {h:"🌟 一句话亮点", body:`<p>${p.highlight}</p>`}
  ];
  return {title:`${p.name} ${p.en}`, tag:`第${i+1}天 · 名人故事`, blocks};
});

const inner = JSON.stringify(items, null, 2).replace(/^\s*\[/, "").replace(/\]\s*$/, "");

const t = fs.readFileSync("content.js", "utf8");
const startMarker = "  finance: [";
const s = t.indexOf(startMarker);
if (s < 0) { console.error("finance start not found"); process.exit(1); }
const afterStart = s + startMarker.length;
const m = t.slice(afterStart).match(/\n  \],  diet: \[/);
if (!m) { console.error("finance close not found"); process.exit(1); }
const closePos = afterStart + m.index;
const newText = t.slice(0, afterStart) + "\n" + inner + "\n" + t.slice(closePos);
fs.writeFileSync("content.js", newText);
console.log("finance -> people written, items:", items.length);
