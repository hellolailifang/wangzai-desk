// 给 content.js 的 travel 数组每条路线新增 loc 字段（洲-国家-县或市/区）

const fs = require('fs');
const cPath = '/Users/lailifang/WorkBuddy/2026-07-27-09-50-21/content.js';
let text = fs.readFileSync(cPath, 'utf8');

const LOC = {
  '圣雅各朝圣之路 · 法国线 Camino Francés': '欧洲-西班牙-加利西亚自治区',
  '印加古道 · 马丘比丘 Inca Trail': '南美-秘鲁-库斯科',
  '多洛米蒂 · Alta Via 1（意大利）': '欧洲-意大利-博尔扎诺',
  '环勃朗峰 · TMB（法/意/瑞）': '欧洲-法国·意大利·瑞士-勃朗峰',
  '乞力马扎罗 · 马切姆线（坦桑尼亚）': '非洲-坦桑尼亚-乞力马扎罗区',
  '冰岛 · Laugavegur 地热步道': '欧洲-冰岛-兰德曼纳劳卡',
  '米尔福德步道 · Milford Track（新西兰）': '大洋洲-新西兰-峡湾地区',
  '约翰·缪尔步道 · JMT（美国加州）': '北美洲-美国-加利福尼亚州',
  '珠峰大本营 · EBC（尼泊尔）': '亚洲-尼泊尔-索卢坤布地区',
  '熊野古道 · Kumano Kodo（日本）': '亚洲-日本-和歌山县',
  '虎跳峡高路（云南·香格里拉）': '亚洲-中国-云南-香格里拉市',
  '稻城亚丁 · 长线（四川）': '亚洲-中国-四川-稻城县',
  '武功山 · 高山草甸（江西）': '亚洲-中国-江西-萍乡市',
  '哈巴雪山（云南）': '亚洲-中国-云南-香格里拉市'
};

// 取出 CONTENT 里的 travel 数组
const m = text.match(/const CONTENT\s*=\s*(\{[\s\S]*\n\})/);
if (!m) { console.error('CONTENT 未找到'); process.exit(1); }
let C;
try { C = new Function('return ' + m[1])(); } catch (e) { console.error('解析 CONTENT 失败：', e.message); process.exit(1); }

if (!Array.isArray(C.travel)) { console.error('travel 不是数组'); process.exit(1); }

let changed = 0;
C.travel.forEach(r => {
  if (LOC[r.title]) { r.loc = LOC[r.title]; changed++; }
  else { console.warn('未匹配 loc：', r.title); }
});

// 重新序列化 travel 数组（对象 2 空格缩进）
let json = JSON.stringify(C.travel, null, 2);
json = json.replace(/^\s*\[\s*/, '').replace(/\s*\]\s*$/, '');

const re = /    travel: \[[\s\S]*?\n  \],\n  finance: \[/;
if (!re.test(text)) { console.error('travel 边界未匹配'); process.exit(1); }
const replacement = '    travel: [\n' + json + '\n  ],';
const newText = text.replace(re, replacement + '\n  finance: [');

fs.writeFileSync(cPath, newText, 'utf8');
console.log('OK：已为', changed, '条徒步路线添加 loc');
