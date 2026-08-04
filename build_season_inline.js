const fs = require('fs');
const p = '/Users/lailifang/WorkBuddy/2026-07-27-09-50-21/content.js';
let t = fs.readFileSync(p, 'utf8');
const C = new Function('return ' + t.match(/const CONTENT\s*=\s*(\{[\s\S]*\n\})/)[1])();

let cnt = 0;
C.travel.forEach((r) => {
  const rt = r.blocks.find(b => b.h && b.h.includes('最佳徒步季节'));
  const items = [...rt.body.matchAll(/<li>([\s\S]*?)<\/li>/g)].map(m => m[1].trim());
  if (items.length >= 2) {
    rt.body = items.join('；');
    cnt++;
  }
});

const json = JSON.stringify(C.travel, null, 2);
const body = '    travel: ' + json.split('\n').map((l, i) => i === 0 ? l : '    ' + l).join('\n');

const re = /    travel: \[[\s\S]*?\n    ],\n  finance: \[/;
if (!re.test(t)) { console.error('travel 段未匹配'); process.exit(1); }
t = t.replace(re, body + ',\n  finance: [');
fs.writeFileSync(p, t);
console.log('已合并为单行的线路数:', cnt);
