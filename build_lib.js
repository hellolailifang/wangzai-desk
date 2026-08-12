/* 共用工具：把 CONTENT 里某个顶层数组整段替换掉。
   content.js 的顶层键是带引号的（如 "finance": [ ），且数组收尾形如  }],
   所以用「下一个顶层键的位置 → 往回找最后一个 ]」来定位结束点，最稳。 */
const fs = require('fs');
const FILE = '/Users/lailifang/WorkBuddy/2026-07-27-09-50-21/content.js';

const ORDER = ['english', 'ai', 'trade', 'news', 'travel', 'finance', 'diet', 'overseas', 'social'];

function read() { return fs.readFileSync(FILE, 'utf8'); }

function parse(text) {
  const src = text || read();
  return new Function('module', 'exports', 'window', src + '\n;return CONTENT;')({ exports: {} }, {}, {});
}

function replaceArray(key, items) {
  const t = read();
  const startMarker = '  "' + key + '": [';
  const s = t.indexOf(startMarker);
  if (s < 0) throw new Error('start marker not found for ' + key);
  const afterStart = s + startMarker.length;

  // 找下一个顶层键的起点
  const idx = ORDER.indexOf(key);
  let nextPos = -1;
  for (let i = idx + 1; i < ORDER.length; i++) {
    const cand = t.indexOf('\n  "' + ORDER[i] + '": [', afterStart);
    const cand2 = t.indexOf('\n  ' + ORDER[i] + ': [', afterStart);
    const p = [cand, cand2].filter(x => x >= 0).sort((a, b) => a - b)[0];
    if (p !== undefined) { nextPos = p; break; }
  }
  if (nextPos < 0) nextPos = t.lastIndexOf('};'); // 最后一个键
  const closeBracket = t.lastIndexOf(']', nextPos);
  if (closeBracket < 0 || closeBracket <= afterStart) throw new Error('close bracket not found for ' + key);

  const inner = JSON.stringify(items, null, 2).replace(/^\s*\[\n?/, '').replace(/\n?\s*\]\s*$/, '');
  const out = t.slice(0, afterStart) + '\n' + inner + '\n  ' + t.slice(closeBracket);
  fs.writeFileSync(FILE, out);
  return items.length;
}

module.exports = { read, parse, replaceArray, FILE };
