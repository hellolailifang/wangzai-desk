const fs = require('fs');
const { JSDOM } = require('jsdom');

const file = 'content.js';
const t = fs.readFileSync(file, 'utf8');

// 提取对象文本（去掉 const CONTENT = 前缀与结尾分号）
const m = t.match(/const\s+CONTENT\s*=\s*(\{[\s\S]*\})\s*;*$/);
if (!m) { console.error('无法定位 CONTENT 对象'); process.exit(1); }
const objText = m[1];
const C = new Function('return ' + objText)();

// 保留文件头注释
const headMatch = t.match(/^([\s\S]*?)const\s+CONTENT\s*=\s*/);
const head = headMatch ? headMatch[1] : '';

// 国民级标杆企业名单（创始人故事最广为人知、'名人感'最强）
const NATIONALS = [
  '华为','小米','阿里巴巴','京东','美团','拼多多','农夫山泉','福耀','格力','比亚迪','美的',
  '大疆','宁德时代','希音','SHEIN','安克','特斯拉','亚马逊','伯克希尔','OpenAI',
  '腾讯','字节','百度','网易','苹果','谷歌','微软','英伟达'
];
function isNational(name) {
  if (!name) return false;
  return NATIONALS.some(k => name.includes(k));
}

// 校验：修改前总数
function countCo(arr) {
  let n = 0;
  arr.forEach(day => {
    const body = (day.blocks && day.blocks[1] && day.blocks[1].body) || '';
    n += (new JSDOM(body).window.document.querySelectorAll('.co').length);
  });
  return n;
}
const beforeTrade = countCo(C.trade);
const beforeOverseas = countCo(C.overseas);

let movedDays = 0, natCards = 0;
function process(arr, mod) {
  arr.forEach((day, di) => {
    const blk = day.blocks && day.blocks[1];
    if (!blk || !blk.body) return;
    const doc = new JSDOM(blk.body).window.document;
    const cos = [...doc.querySelectorAll('.co')];
    if (cos.length < 2) return;
    const nameOf = c => ((c.querySelector('.co-h b') || {}).textContent || '').trim();
    const nat = cos.filter(c => isNational(nameOf(c)));
    const rest = cos.filter(c => !nat.includes(c));
    if (nat.length === 0) return;
    if (nat[0] === cos[0]) return; // 已置顶，跳过
    blk.body = nat.map(c => c.outerHTML).join('\n        ') + '\n        ' + rest.map(c => c.outerHTML).join('\n        ');
    movedDays++;
    natCards += nat.length;
  });
}
process(C.trade, 'trade');
process(C.overseas, 'overseas');

const afterTrade = countCo(C.trade);
const afterOverseas = countCo(C.overseas);

// 写回：保留注释头 + 格式化对象
const out = head + 'const CONTENT = ' + JSON.stringify(C, null, 2) + ';\n';
fs.writeFileSync(file, out);

console.log('修改天数:', movedDays, '| 置顶国民级卡片数:', natCards);
console.log('trade .co 前/后:', beforeTrade, '/', afterTrade);
console.log('overseas .co 前/后:', beforeOverseas, '/', afterOverseas);
console.log('总数一致:', (beforeTrade+beforeOverseas) === (afterTrade+afterOverseas));
