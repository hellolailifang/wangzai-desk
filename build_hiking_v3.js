const fs = require('fs');
const p = '/Users/lailifang/WorkBuddy/2026-07-27-09-50-21/content.js';
let t = fs.readFileSync(p, 'utf8');
const C = new Function('return ' + t.match(/const CONTENT\s*=\s*(\{[\s\S]*\n\})/)[1])();

// 14 条路线的当地民俗文化/传统礼仪（与 travel 数组顺序一致）
const CULTURE = [
  // 0 圣雅各朝圣之路（西班牙·加利西亚）
  '沿途教堂可参与晚祷，入内请保持安静、脱帽；"Buen Camino"是朝圣者互道祝福的通用礼仪。终点圣地亚哥主教座堂周日有朝圣者弥撒，可着徒步装出席；贝壳是朝圣符号，请尊重其宗教含义，勿当普通纪念品戏谑。',
  // 1 印加古道·马丘比丘（秘鲁·库斯科）
  '库斯科及周边多盖丘亚原住民，可用"Rimaykullayki"问候；古柯叶是当地待客与抗高反的习俗，可礼貌接受但不宜过量。马丘比丘等遗址严禁攀爬、刻划；进入村落请先征得同意再拍照。',
  // 2 多洛米蒂（意大利·博尔扎诺）
  '南蒂罗尔地区德语、意大利语并用，用"Grüß Gott"或"Ciao"都受欢迎；山屋(Hütte)用餐按指示入座、饭后自觉清理桌面。牧场多为私有，勿翻越栅栏或进入草场。',
  // 3 环勃朗峰 TMB（法/意/瑞）
  '途经法、意、瑞三国村镇，入山屋请脱鞋、小声交谈；法语"Bonjour"、意语"Buongiorno"、德语"Grüezi"通用。周日小镇多静默，避免大声喧哗与夜间走动。',
  // 4 乞力马扎罗（坦桑尼亚·乞力马扎罗区）
  '以斯瓦希里语"Jambo / Hakuna Matata"问候；向导与背夫的小费是重要文化（建议行程结束统一致谢）。进入村庄衣着保守，勿对当地人随意拍摄。',
  // 5 冰岛 Laugavegur
  '地热温泉多为混浴，入水前淋浴是硬性礼仪；自然敬畏深入骨髓，勿移动火山岩、勿踩踏苔藓。私人牧场勿擅入，关门请随手带好。',
  // 6 米尔福德步道（新西兰·峡湾）
  '尊重毛利文化，多地有"不带走一草一木"的传统；步道全程由 DOC 管理，须登记、守安静。遇到向导讲解请耐心聆听，勿抢路或喧哗。',
  // 7 JMT 约翰·缪尔步道（美国·加州）
  '美国国家公园奉行 Leave No Trace（无痕山林）：垃圾全带出、食物须锁熊罐；优胜美地一带原住民为塞拉米沃克奇，尊重其圣地。公共场合保持低声。',
  // 8 珠峰 EBC（尼泊尔·索卢坤布）
  '以合十礼"Namaste"问候；遇玛尼堆、经幡须顺时针绕行。寺院不可手指佛像、不可踩门槛；夏尔巴向导是高山灵魂，务必尊重其经验与禁忌。',
  // 9 熊野古道（日本·和歌山）
  '神道与佛教参诣道：入鸟居前鞠躬、在净手亭舀水漱口（不饮）；参拜时安静、不喧哗。部分路段着白色"白衣"持"金刚杖"为古礼，可体验但勿模仿宗教动作。',
  // 10 虎跳峡高路（中国·云南·香格里拉）
  '纳西、藏文化交织：转经筒、玛尼堆须顺时针；进寺院脱帽、不指佛像。藏民家访忌踩门槛、忌吹口哨（民间认为招"风"）。',
  // 11 稻城亚丁（中国·四川·稻城）
  '藏族神山崇拜：仙乃日、央迈勇、夏诺多吉为神山，不可手指直指、不可捡玛尼石带走；转山须顺时针。天葬台严禁围观与拍照。',
  // 12 武功山（中国·江西·萍乡）
  '赣西客家文化；山间草甸为生态敏感区，切勿在核心草甸露营踩踏。当地农家可体验擂茶，主人敬茶需双手接、轻啜以示礼。',
  // 13 哈巴雪山（中国·云南·香格里拉）
  '纳西、藏文化交汇：登山前当地有敬山神习俗，尊重向导安排；神山禁大声呼喊、禁采挖植物。藏家访不踩门槛，遇经幡顺时针绕行。'
];

if (CULTURE.length !== C.travel.length) { console.error('CULTURE 数量不匹配'); process.exit(1); }

C.travel.forEach((r, i) => {
  // 1) 亮点块三行合一
  const hl = r.blocks.find(b => b.h && b.h.includes('路线亮点'));
  if (hl) {
    hl.body = hl.body.replace(/<br>(👍|👎|⚠️)\s*/g, ' ｜ $1 ');
  }
  // 2) 在"从深圳出发"前插入民俗文化块（index 1）
  const idxTransport = r.blocks.findIndex(b => b.h && b.h.includes('从深圳出发'));
  if (idxTransport < 0) { console.error('线路', i, '未找到交通块'); process.exit(1); }
  r.blocks.splice(idxTransport, 0, {
    h: '🌏 当地民俗文化·传统礼仪',
    body: CULTURE[i]
  });
});

const json = JSON.stringify(C.travel, null, 2);
const body = '    travel: ' + json.split('\n').map((l, i) => i === 0 ? l : '    ' + l).join('\n');

const re = /    travel: \[[\s\S]*?\n    ],\n  finance: \[/;
if (!re.test(t)) { console.error('travel 段未匹配'); process.exit(1); }
t = t.replace(re, body + ',\n  finance: [');
fs.writeFileSync(p, t);
console.log('完成：亮点三行合一 + 插入民俗文化块，共', C.travel.length, '条');
