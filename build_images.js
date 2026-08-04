const fs = require('fs');
const p = '/Users/lailifang/WorkBuddy/2026-07-27-09-50-21/content.js';
let t = fs.readFileSync(p, 'utf8');
const C = new Function('return ' + t.match(/const CONTENT\s*=\s*(\{[\s\S]*\n\})/)[1])();

C.travel.forEach((r, i) => {
  const sc = String(i + 1).padStart(2, '0');
  const photos = [];
  for (let j = 1; j <= 5; j++) {
    // Picsum：真实摄影图库，seed 固定保证图片固定、横图 1200x675(16:9)
    photos.push(`https://picsum.photos/seed/hiking-${sc}-${j}/1200/675`);
  }
  photos.push(`assets/route_${i}.svg`); // 第 6 张：本地 SVG 路线示意图
  r.images = photos;
});

const json = JSON.stringify(C.travel, null, 2);
const body = '    travel: ' + json.split('\n').map((l, i) => i === 0 ? l : '    ' + l).join('\n');

const re = /    travel: \[[\s\S]*?\n    ],\n  finance: \[/;
if (!re.test(t)) { console.error('travel 段未匹配'); process.exit(1); }
t = t.replace(re, body + ',\n  finance: [');
fs.writeFileSync(p, t);
console.log('已为', C.travel.length, '条路线写入 images 字段（各 6 张：5 实景 + 1 路线图）');
