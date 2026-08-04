const fs = require('fs');
const p = '/Users/lailifang/WorkBuddy/2026-07-27-09-50-21/content.js';
let t = fs.readFileSync(p, 'utf8');

// 解析 CONTENT
const m = t.match(/const CONTENT\s*=\s*(\{[\s\S]*\n\})/);
const C = new Function('return ' + m[1])();

let merged = 0;
C.travel.forEach(r => {
  const bl = r.blocks;
  const idxTransport = bl.findIndex(b => b.h && b.h.includes('从深圳出发'));
  const idxCost = bl.findIndex(b => b.h && b.h.includes('参考费用'));
  if (idxTransport >= 0 && idxCost >= 0 && idxCost !== idxTransport) {
    // 把费用块内容追加到交通块 body 后面
    const costBlock = bl[idxCost];
    const sep = bl[idxTransport].body.trim().endsWith('\n') ? '' : '\n';
    bl[idxTransport].body = bl[idxTransport].body + sep + '\n' + costBlock.h + '\n' + costBlock.body;
    // 删除费用块
    bl.splice(idxCost, 1);
    merged++;
  }
});

// 重新生成 travel 段文本（4 空格前缀 + 2 空格 JSON 缩进，保持一致风格）
const json = JSON.stringify(C.travel, null, 2);
const body = '    travel: ' + json.split('\n').map((l, i) => i === 0 ? l : '    ' + l).join('\n');

// 正则替换整段 travel（4 空格开头，到 finance 之前）
const re = /    travel: \[[\s\S]*?\n  \],\n  finance: \[/;
if (!re.test(t)) { console.error('travel 段未匹配，停止'); process.exit(1); }
t = t.replace(re, body + ',\n  finance: [');

fs.writeFileSync(p, t);
console.log('合并完成，影响线路数:', merged);
