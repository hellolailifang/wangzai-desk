const fs = require('fs');
const p = '/Users/lailifang/WorkBuddy/2026-07-27-09-50-21/content.js';
let t = fs.readFileSync(p, 'utf8');
const C = new Function('return ' + t.match(/const CONTENT\s*=\s*(\{[\s\S]*\n\})/)[1])();

let merged = 0;
C.travel.forEach((r, i) => {
  const idxRoute = r.blocks.findIndex(b => b.h && b.h.includes('徒步天数与路线'));
  const idxGear = r.blocks.findIndex(b => b.h && b.h.includes('装备与沿途补给'));
  if (idxRoute >= 0 && idxGear >= 0 && idxGear !== idxRoute) {
    const gear = r.blocks[idxGear];
    const sep = r.blocks[idxRoute].body.trim().endsWith('\n') ? '' : '\n';
    r.blocks[idxRoute].body = r.blocks[idxRoute].body + sep + '\n' + gear.h + '\n' + gear.body;
    r.blocks.splice(idxGear, 1);
    merged++;
  } else {
    console.error('线路', i, '未同时找到天数块与装备块');
    process.exit(1);
  }
});

const json = JSON.stringify(C.travel, null, 2);
const body = '    travel: ' + json.split('\n').map((l, i) => i === 0 ? l : '    ' + l).join('\n');

const re = /    travel: \[[\s\S]*?\n    ],\n  finance: \[/;
if (!re.test(t)) { console.error('travel 段未匹配'); process.exit(1); }
t = t.replace(re, body + ',\n  finance: [');
fs.writeFileSync(p, t);
console.log('合并完成，影响线路数:', merged);
