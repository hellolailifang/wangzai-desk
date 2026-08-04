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
  const hl = r.blocks.find(b => b.h && b.h.includes('路线亮点'));
  if (!hl) return;
  const before = hl.body;
  // 删除景点名后面的 " ｜ "，保留一个空格与后续 emoji
  hl.body = hl.body.replace(/<\/b>： ｜ /g, '</b>： ');
  if (hl.body !== before) changed++;
});
console.log('fixed leading pipe in', changed, 'routes');

const head = t.slice(0, m.index);
const tail = t.slice(m.index + m[0].length);
const newContent = 'const CONTENT = ' + JSON.stringify(C, null, 2) + ';';
fs.writeFileSync(file, head + newContent + tail);
console.log('written');
