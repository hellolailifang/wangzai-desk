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
  const before = r.blocks.length;
  r.blocks = r.blocks.filter(b => !(b.h && b.h.includes('安全与注意事项')));
  if (r.blocks.length !== before) changed++;
});
console.log('removed safety block from', changed, 'routes');

const head = t.slice(0, m.index);
const tail = t.slice(m.index + m[0].length);
const newContent = 'const CONTENT = ' + JSON.stringify(C, null, 2).replace(/\n/g, '\n') + ';';
fs.writeFileSync(file, head + newContent + tail);
console.log('written');
