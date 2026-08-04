const {execSync} = require("child_process");
const fs = require("fs");

const cur = fs.readFileSync("content.js", "utf8");
const C = eval("(function(){ " + cur.replace(/module\.exports.*/, "") + "; return CONTENT; })()");

const head = execSync("git show HEAD:content.js").toString();
const O = eval("(function(){ " + head.replace(/module\.exports.*/, "") + "; return CONTENT; })()");

// 14 spicy suggestion blocks, indexed to match O.diet days 0..13
const SPICY = [
  {h:"🌶 旺仔辣味备选", body:"<p>午餐把蒸鸡胸换成「藤椒手撕鸡丝」——鸡胸煮熟撕丝，淋藤椒油+生抽+小米辣，麻辣开胃；晚餐嫩豆腐改「剁椒蒸豆腐」，辣味暖胃不寡淡。辣味全靠藤椒/剁椒提味，不额外加油糖。</p>"},
  {h:"🌶 旺仔辣味备选", body:"<p>午餐龙利鱼改「藤椒龙利鱼煲」——鱼块铺番茄+藤椒+小米辣同煮，酸辣鲜；晚餐鸡丝沙拉淋「油泼辣子油醋」，香辣爽口。午后你那杯冰美式照旧，零糖零卡，提神又压辣。</p>"},
  {h:"🌶 旺仔辣味备选", body:"<p>午餐虾仁蒸蛋改「香辣虾仁蒸蛋」，蛋液里点几滴辣椒油；晚餐菌菇汤加一把干辣椒+花椒做成麻辣菌汤。菌菇配辣更下饭，膳食纤维照旧护肠。</p>"},
  {h:"🌶 旺仔辣味备选", body:"<p>午餐彩椒炒牛里脊升级「黑椒辣牛柳」——现磨黑胡椒+少许辣椒粉，铁和辣一起补；晚餐巴沙鱼改「微辣酸菜鱼片」，无刺好入口。补铁期吃辣更暖身。</p>"},
  {h:"🌶 旺仔辣味备选", body:"<p>午餐鸡胸蔬菜卷蘸「蒜辣酱（蒜+小米辣+生抽）」，清爽带辣；晚餐豆腐番茄汤撒辣椒粉+葱花成胡辣豆腐汤。清肠不寡淡，辣味还能促循环。</p>"},
  {h:"🌶 旺仔辣味备选", body:"<p>午餐鱼豆腐煲直接做成「麻辣鱼豆腐煲」——加豆瓣酱+花椒一锅出，省时又过瘾；晚餐鸡胸蔬菜汤撒白胡椒粉+小米辣成胡辣鸡汤。一锅辣到底，深圳湿热天吃着通透。</p>"},
  {h:"🌶 旺仔辣味备选", body:"<p>周末可放开些——午餐蒸鸡胸改「少油辣子鸡丁」，用鸡腿肉更香；晚餐海带豆腐汤加韩式辣酱成辣味海带汤。微放纵但守住低脂，辣味满足感强。</p>"},
  {h:"🌶 旺仔辣味备选", body:"<p>午餐鸡胸番茄意面改「辣味番茄鸡丝意面」——番茄+辣椒碎+黑胡椒；晚餐豆腐冬瓜汤加虾皮+小米辣成辣味虾皮豆腐汤。换口味也能辣，绝不寡淡。</p>"},
  {h:"🌶 旺仔辣味备选", body:"<p>午餐彩椒炒牛里脊改「干煸辣牛柳」——牛肉丝+干辣椒+花椒少油煸，补铁又过瘾；晚餐清蒸鱼淋剁椒豉汁成剁椒鱼。二次补铁配辣，暖身不腻。</p>"},
  {h:"🌶 旺仔辣味备选", body:"<p>午餐鸡胸蔬菜沙拉淋「辣椒油醋汁」；晚餐豆腐番茄汤撒辣椒粉成胡辣版。高效循环也能辣，省事不寡淡。</p>"},
  {h:"🌶 旺仔辣味备选", body:"<p>午餐龙利鱼蒸蛋改「辣味鱼片蒸蛋」，蛋液点辣椒油；晚餐鸡胸蔬菜汤加白胡椒+小米辣成胡辣汤。双蛋白配辣，开胃顶饱。</p>"},
  {h:"🌶 旺仔辣味备选", body:"<p>午餐虾仁炒蛋加小米辣+黑胡椒成香辣虾仁蛋；晚餐豆腐菌菇汤撒辣椒粉成麻辣菌汤。虾仁蛋配辣，下饭一绝。</p>"},
  {h:"🌶 旺仔辣味备选", body:"<p>午餐蒸鸡胸改「麻辣手撕鸡」，淋藤椒油；晚餐巴沙鱼豆腐汤加豆瓣酱成微辣鱼腐汤。玉米照旧控糖，辣味提香。</p>"},
  {h:"🌶 旺仔辣味备选", body:"<p>午餐鸡胸蔬菜卷蘸辣酱；晚餐豆腐番茄汤撒辣椒粉。两周收官也能辣到底——核心公式加一条：旺仔的辣味靠辣椒花椒提味，不靠糖油；午后一杯冰美式，辣得过瘾又清爽。</p>"}
];

if (O.diet.length !== 14) { console.error("expected 14 original days, got", O.diet.length); process.exit(1); }

const newDays = O.diet.map((day, i) => {
  const blocks = day.blocks.map(b => ({h:b.h, body:b.body}));
  // insert spicy block right before the last "💡" rationale block
  const idx = blocks.findIndex(b => b.h.startsWith("💡"));
  const at = idx >= 0 ? idx : blocks.length;
  blocks.splice(at, 0, SPICY[i]);
  return {title: day.title, tag: day.tag, blocks};
});

// keep the Shenzhen restaurant card from current diet (last item) — separate from meals
const shenzhenCard = C.diet[C.diet.length - 1];
const newDiet = newDays.concat([shenzhenCard]);

const literal = JSON.stringify(newDiet, null, 2);

// splice into content.js: replace everything between '  diet: [' and the closing '  ],' before '  overseas: ['
const startMarker = "  diet: [";
const s = cur.indexOf(startMarker);
if (s < 0) { console.error("diet start not found"); process.exit(1); }
const afterStart = s + startMarker.length;
const rest = cur.slice(afterStart);
// find '  ],' that is immediately followed by '  overseas: ['
const closeRe = /\n  \],\n  overseas: \[/;
const m = rest.match(closeRe);
if (!m) { console.error("diet close not found"); process.exit(1); }
const closePos = afterStart + m.index; // points at '\n' before '  ],'
const newText = cur.slice(0, afterStart) + "\n" + literal + "\n" + cur.slice(closePos);

fs.writeFileSync("content.js", newText);
console.log("diet rewritten: days =", newDays.length, "+ shenzhen card =", newDiet.length);
