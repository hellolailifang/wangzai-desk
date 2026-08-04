const fs = require('fs');
const path = 'content.js';
const t = fs.readFileSync(path, 'utf8');

// photo URLs from current content (维基真实照；无图者用本地剪影)
const P = {
  musk: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Elon_Musk_-_54820081119_%28cropped%29.jpg/330px-Elon_Musk_-_54820081119_%28cropped%29.jpg',
  ma: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/20th_Anniversary_Schwab_Foundation_Gala_Dinner_%2844887783681%29_%28cropped%29.jpg/330px-20th_Anniversary_Schwab_Foundation_Gala_Dinner_%2844887783681%29_%28cropped%29.jpg',
  ren: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Ren_Zhengfei_%282016%29.jpg/330px-Ren_Zhengfei_%282016%29.jpg',
  lei: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Lei_Jun_%282026%29_01.jpg/330px-Lei_Jun_%282026%29_01.jpg',
  bezos: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/260202-D-PM193-2205_SECWAR_Arsenal_of_Freedom_Tour_-_Florida_%283x4_cropped_on_Bezos_and_rotated%29.jpg/330px-260202-D-PM193-2205_SECWAR_Arsenal_of_Freedom_Tour_-_Florida_%283x4_cropped_on_Bezos_and_rotated%29.jpg',
  fy: 'assets/face-fallback.svg',
  zhang: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/The_CEO_Magazine_Cover.jpg',
  buffett: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Warren_Buffett_at_the_2015_SelectUSA_Investment_Summit_%28cropped%29.jpg/330px-Warren_Buffett_at_the_2015_SelectUSA_Investment_Summit_%28cropped%29.jpg',
  liu: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Liu_Qiangdong.jpg/330px-Liu_Qiangdong.jpg',
  wang: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Wang_Xing_in_2009.jpg/330px-Wang_Xing_in_2009.jpg',
  altman: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Meeting_with_Masayoshi_Son_and_Sam_Altman_%28February_3%2C_2025%29_%283x4_cropped_on_Altman%29.jpg/330px-Meeting_with_Masayoshi_Son_and_Sam_Altman_%28February_3%2C_2025%29_%283x4_cropped_on_Altman%29.jpg',
  cao: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/%E6%9B%B9%E5%BE%B7%E6%97%BA.jpg/330px-%E6%9B%B9%E5%BE%B7%E6%97%BA.jpg',
  dong: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Dong_Mingzhu_%28cropped%29.JPG/330px-Dong_Mingzhu_%28cropped%29.JPG',
  huang: 'assets/face-fallback.svg'
};

const raw = [
  {
    photo: P.musk, name: '埃隆·马斯克 Elon Musk',
    tags: '特斯拉 · SpaceX · xAI · 火星移民 · 全球首富',
    intro: '1971年生于南非比勒陀利亚，拥有南非、加拿大、美国三重背景，企业家兼工程师。截至2026年仍在世、活跃经营。早年创办Zip2、X.com（后与Confinity合并为PayPal）；2002年创立SpaceX，2004年投资并主导特斯拉；近年又创办xAI、收购X平台。以“第一性原理”推动电动车、可回收火箭与人工智能。',
    achieve: '把特斯拉做成全球市值最高的车企；用猎鹰火箭实现一级助推器回收，把发射成本砍掉一个数量级；2025年起稳居全球首富，2026年6月成为美元计价史上首位万亿富翁；以星链（Starlink）重塑全球卫星互联网。',
    highlight: '“如果一件事足够重要，即使胜算不大也要去做。”——他用可回收火箭把发射成本砍掉一个数量级。'
  },
  {
    photo: P.ma, name: '马云 Jack Ma (Ma Yun)',
    tags: '阿里巴巴 · 蚂蚁集团 · 淘宝 · 电商教父 · 公益',
    intro: '1964年生于浙江杭州，英语教师出身。截至2026年仍在世。1999年在杭州公寓里带18人创办阿里巴巴，做出B2B、淘宝、天猫、支付宝，搭建起中国电商与移动支付的基础设施。2019年卸任董事局主席，近年重心转向教育、乡村教师与公益。',
    achieve: '创立阿里巴巴并带其成为万亿级电商帝国；孵化支付宝，奠定中国移动支付与数字金融的底座；以“让天下没有难做的生意”理念，把千万中小商家送上全球贸易舞台——与你的外贸之路直接相关。',
    highlight: '“让天下没有难做的生意”——这句信条，和你的外贸之路直接相关。'
  },
  {
    photo: P.ren, name: '任正非 Ren Zhengfei',
    tags: '华为 · 通信设备 · 深圳 · 海思芯片 · 狼性文化',
    intro: '1944年生于贵州安顺，退伍军人、工程师。截至2026年仍在世。1987年在深圳以2.1万元创办华为，从代理交换机起步，一步步做到全球最大通信设备商。面对多轮外部制裁，他主导“备胎计划”、押注海思自研芯片与鸿蒙系统。',
    achieve: '把华为从深圳小作坊带成全球通信与5G龙头；在极限施压下坚持自主研发，海思麒麟芯片、鸿蒙操作系统成为国产替代标杆；以“冬天论”与全员持股把危机感写进公司基因。',
    highlight: '“冬天总会过去，但活下来的企业才有春天。”——总部就在你所在的深圳。'
  },
  {
    photo: P.lei, name: '雷军 Lei Jun',
    tags: '小米 · 智能手机 · 生态链 · 造车 · 营销鬼才',
    intro: '1969年生于湖北仙桃，武汉大学计算机系毕业。截至2026年仍在世。早年创办金山软件并带领上市，2010年创立小米，用“互联网手机+极致性价比”改写行业格局；2021年起跨界造车，2024年小米SU7上市即成爆款。',
    achieve: '把小米做成全球前三的智能手机厂商与最大消费级IoT生态；2024年小米汽车SU7一炮而红，一年内跻身中国新能源第一梯队；以“专注、极致、口碑、快”的七字诀成为一代创业范本。',
    highlight: '“站在风口上，猪都能飞起来。”——他也把这句话升级成七字诀。'
  },
  {
    photo: P.bezos, name: '杰夫·贝索斯 Jeff Bezos',
    tags: '亚马逊 · AWS · 蓝色起源 · 长期主义 · 电商帝国',
    intro: '1964年生于美国新墨西哥州，普林斯顿大学毕业。截至2026年仍在世。1994年从网上卖书起步创立亚马逊，将其做成全球最大电商与云计算（AWS）公司；2021年卸任CEO，转攻火箭公司蓝色起源，并收购《华盛顿邮报》。',
    achieve: '创立亚马逊，重塑全球零售与物流；以AWS开创云计算时代，长期贡献亚马逊绝大部分利润；以“Day 1”文化与7年决策尺度，把长期主义刻进企业DNA。',
    highlight: '他信奉“Day 1”文化——永远像创业第一天那样保持饥饿感。'
  },
  {
    photo: P.fy, name: '钟睒睒 Zhong Shanshan',
    tags: '农夫山泉 · 万泰生物 · 中国首富 · 营销高手 · 低调',
    intro: '1954年生于浙江诸暨，做过记者、卖过保健品。截至2026年仍在世。1996年创立农夫山泉，靠“大自然的搬运工”一句广告做透包装饮用水；同时控股疫苗企业万泰生物，曾两度位居中国首富，却极少公开露面。',
    achieve: '把农夫山泉做成中国包装饮用水第一品牌；通过万泰生物掌握国产HPV疫苗关键产能；以极低的公众曝光做到极高的商业掌控，是“闷声发财”的典型。',
    highlight: '他极少露面却最懂“把水卖出品牌溢价”。'
  },
  {
    photo: P.zhang, name: '张一鸣 Zhang Yiming',
    tags: '字节跳动 · TikTok · 算法 · 今日头条 · 全球化',
    intro: '1983年生于福建龙岩，南开大学毕业。截至2026年仍在世。2012年创立字节跳动，做出今日头条与抖音；TikTok风靡全球让他2024年登顶中国首富。2021年卸任CEO，仍持有超50%投票权，退居幕后把控战略。',
    achieve: '创立字节跳动并打造抖音/TikTok双引擎，TikTok成为全球下载量最高的App；以强算法中台把公司做成真正的“全球App工厂”——与你做外贸的TikTok Shop息息相关；登顶中国首富。',
    highlight: '他用“延迟满足感”把一家中国公司做成全球App工厂。'
  },
  {
    photo: P.buffett, name: '沃伦·巴菲特 Warren Buffett',
    tags: '价值投资 · 伯克希尔 · 复利 · 奥马哈先知 · 长期持有',
    intro: '1930年生于美国内布拉斯加州奥马哈，哥伦比亚大学商学院毕业。截至2026年仍在世，已年逾九旬仍担任伯克希尔·哈撒韦董事长。以价值投资与长期持有闻名，被尊称为“奥马哈的先知”。',
    achieve: '掌舵伯克希尔·哈撒韦近六十年，把一家纺织厂改造为横跨保险、能源、消费的万亿投资帝国；以年化约20%的长期复利成为投资界标杆；长年位居全球富豪榜前列并承诺捐出绝大部分财富。',
    highlight: '“别人贪婪时我恐惧，别人恐惧时我贪婪。”——他用复利把雪球滚了七十年。'
  },
  {
    photo: P.liu, name: '刘强东 Liu Qiangdong',
    tags: '京东 · 自建物流 · 正品电商 · 供应链 · 下沉市场',
    intro: '1973年生于江苏宿迁，中国人民大学毕业。截至2026年仍在世。1998年从中关村柜台卖光磁产品起家，2004年转型线上，2013年做成电商京东（JD.com），以自建物流与“正品”口碑立足。',
    achieve: '创立京东并建成行业标杆的自建仓储配送体系，把“快”做成护城河；以“正品+自营”对抗平台假货质疑，与阿里分庭抗礼；京东物流独立上市后成为中国供应链基础设施的重要一环。',
    highlight: '他赌上全部身家自建仓储配送，把“快”做成京东的护城河。'
  },
  {
    photo: P.wang, name: '王兴 Wang Xing',
    tags: '美团 · 本地生活 · 千团大战幸存者 · 深度思考 · 无边界',
    intro: '1979年生于福建龙岩，清华大学毕业、曾留学美国。截至2026年仍在世。校内网、饭否之后，2010年创立美团，从团购“千团大战”杀出，做成覆盖外卖、到店、酒旅的本地生活超级平台。',
    achieve: '带领美团在惨烈的千团大战中胜出，并做成日订单过亿的外卖帝国；以“无边界”扩张覆盖到店、酒旅、买菜、打车等本地生活全场景；是“美团 vs 抖音”本地生活商战的主角。',
    highlight: '他信奉“既往不恋，纵情向前”，把外卖打成日订单过亿的生意。'
  },
  {
    photo: P.altman, name: '萨姆·奥尔特曼 Sam Altman',
    tags: 'OpenAI · ChatGPT · YC · AGI · AI时代',
    intro: '1985年生于美国密苏里州，斯坦福辍学创业。截至2026年仍在世。2014–2019年执掌创业加速器Y Combinator，2019年起任OpenAI CEO，把生成式AI（ChatGPT）推向全球。',
    achieve: '执掌OpenAI发布ChatGPT，引爆全球生成式AI浪潮；推动GPT系列与Sora等多模态模型迭代；以“超级智能/AGI”叙事成为这一轮AI革命最显眼的面孔；同时以个人投资布局核能、生物科技等前沿领域。',
    highlight: '他押注通用人工智能（AGI）会改变一切，是这一轮AI浪潮最显眼的面孔。'
  },
  {
    photo: P.cao, name: '曹德旺 Cao Dewang',
    tags: '福耀玻璃 · 汽车玻璃 · 实业报国 · 慈善 · 美国建厂',
    intro: '1946年生于福建福清，少年辍学、白手起家。截至2026年仍在世。1987年创立福耀玻璃，做成全球最大汽车玻璃供应商，并在美国俄亥俄州建厂，把“中国工厂”开到汽车工业腹地。',
    achieve: '把福耀玻璃做成全球汽车玻璃市占率第一；在美国建厂拍成纪录片《美国工厂》并获奥斯卡；捐资创办福耀科技大学，长期大额捐赠慈善，是少有的把“实业”刻进骨子里的企业家。',
    highlight: '“我做玻璃，做到全世界最好就赢了。”——他是少有的把“实业”二字刻进骨子里的企业家。'
  },
  {
    photo: P.dong, name: '董明珠 Dong Mingzhu',
    tags: '格力 · 空调女王 · 硬刚营销 · 品质偏执 · 中国制造',
    intro: '1954年生于江苏南京，36岁加入格力做一线业务员。截至2026年仍在世。从业务员一路做到掌门人，把格力做成空调霸主，以“掌握核心科技”和铁腕管理闻名。',
    achieve: '掌舵格力成为全球空调销量长期第一的龙头企业；坚持自研压缩机等核心部件，把“中国制造”品质叙事推向大众；以极强个人IP与硬刚式营销成为中国制造业最具辨识度的女企业家。',
    highlight: '她敢当面怼同行、为品质拍胸脯，是中国制造业最具辨识度的女企业家。'
  },
  {
    photo: P.huang, name: '黄峥 Colin Huang',
    tags: '拼多多 · Temu · 下沉市场 · 农业 · 极致效率',
    intro: '1980年生于浙江杭州，浙江大学、威斯康星大学留学。截至2026年仍在世。2015年创立拼多多，用“社交拼团+极致低价”横扫下沉市场；后孵化出海电商Temu引爆欧美。2021年起卸任董事长，转向科研与公益。',
    achieve: '创立拼多多并以“农地云拼”模式重塑农产品上行链路；孵化Temu，以“全托管+低价”打法横扫欧美，成为跨境电商黑马——正是“Temu vs SHEIN vs TikTok Shop”商战的关键一方；登顶中国富豪榜前列。',
    highlight: 'Temu的“全托管+低价”打法，与你的跨境生意直接相关。'
  }
];

function photoBlock(src, alt) {
  if (src === 'assets/face-fallback.svg') {
    return { h: '📷 人物照片', body: `<img class="face" src="assets/face-fallback.svg" alt="${alt}">` };
  }
  return { h: '📷 人物照片', body: `<img class="face" src="${src}" alt="${alt}" onerror="this.onerror=null;this.src='assets/face-fallback.svg'">` };
}

const items = raw.map((r, i) => ({
  title: r.name,
  tag: `第${i + 1}天 · 名人故事`,
  blocks: [
    photoBlock(r.photo, r.name.split(' ')[0]),
    { h: '🏷 人物标签', body: `<p class="tags">${r.tags}</p>` },
    { h: '📖 人物介绍（在世）', body: `<p>${r.intro}</p>` },
    { h: '🏆 主要成就', body: `<p>${r.achieve}</p>` },
    { h: '🌟 一句话亮点', body: `<p>${r.highlight}</p>` }
  ]
}));

const inner = JSON.stringify(items, null, 2)
  .replace(/^\s*\[/, '')
  .replace(/\]\s*$/, '');

const startMarker = '  finance: [';
const s = t.indexOf(startMarker);
if (s < 0) { console.error('start not found'); process.exit(1); }
const afterStart = s + startMarker.length;
const m = t.slice(afterStart).match(/  \],\s*  diet: \[/);
if (!m) { console.error('close not found'); process.exit(1); }
const closePos = afterStart + m.index;

const newText = t.slice(0, afterStart) + '\n' + inner + '\n' + t.slice(closePos);
fs.writeFileSync(path, newText);
console.log('written, items:', items.length);
