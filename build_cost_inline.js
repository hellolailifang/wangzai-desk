const fs = require('fs');
const p = '/Users/lailifang/WorkBuddy/2026-07-27-09-50-21/content.js';
let t = fs.readFileSync(p, 'utf8');
const C = new Function('return ' + t.match(/const CONTENT\s*=\s*(\{[\s\S]*\n\})/)[1])();

let cnt = 0;
C.travel.forEach((r) => {
  const rt = r.blocks.find(b => b.h && b.h.includes('从深圳出发'));
  const before = rt.body;
  // 把 "参考费用（人均）\n<p>内容</p>" 改为 "参考费用（人均）：内容"（💰 在标题前，保留）
  rt.body = rt.body.replace(/参考费用（人均）\s*\n?<p>([\s\S]*?)<\/p>/g, '参考费用（人均）：$1');
  if (rt.body !== before) cnt++;
});

const json = JSON.stringify(C.travel, null, 2);
const body = '    travel: ' + json.split('\n').map((l, i) => i === 0 ? l : '    ' + l).join('\n');

const re = /    travel: \[[\s\S]*?\n    ],\n  finance: \[/;
if (!re.test(t)) { console.error('travel 段未匹配'); process.exit(1); }
t = t.replace(re, body + ',\n  finance: [');
fs.writeFileSync(p, t);
console.log('已改为冒号同行形式的线路数:', cnt);
