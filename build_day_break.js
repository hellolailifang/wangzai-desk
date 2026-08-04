const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, 'content.js');
let t = fs.readFileSync(file, 'utf8');

const m = t.match(/const CONTENT\s*=\s*(\{[\s\S]*\n\})/);
if (!m) { console.log('NO CONTENT'); process.exit(1); }
let C;
try { C = new Function('return ' + m[1])(); } catch (e) { console.log('PARSE ERR', e.message); process.exit(1); }

let changed = 0;
C.travel.forEach(r => {
  const rt = r.blocks.find(b => b.h && b.h.includes('徒步天数与路线'));
  if (!rt) return;
  const before = rt.body;
  // 把 "<b>DayN</b>：地点，约 Xkm" 改成 "<b>DayN</b>：地点<br>约 Xkm"
  // 即地点（第一个逗号前）单独一行，公里信息换行
  rt.body = rt.body.replace(/<b>(Day\d+)<\/b>：(.+?)，约 /g, '<b>$1</b>：$2<br>约 ');
  if (rt.body !== before) changed++;
});
console.log('reformatted day lines in', changed, 'routes');

const head = t.slice(0, m.index);
const tail = t.slice(m.index + m[0].length);
const newContent = 'const CONTENT = ' + JSON.stringify(C, null, 2) + ';';
fs.writeFileSync(file, head + newContent + tail);
console.log('written');
