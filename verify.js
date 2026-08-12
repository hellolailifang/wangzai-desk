/* 完整性校验：确保每个 data-fp 都能在 finance 里查到，且各模块结构完好 */
const lib = require('/Users/lailifang/WorkBuddy/2026-07-27-09-50-21/build_lib.js');
const C = lib.parse();
let bad = 0;

function walkStrings(v, out) {
  if (typeof v === 'string') { out.push(v); return; }
  if (Array.isArray(v)) { v.forEach(x => walkStrings(x, out)); return; }
  if (v && typeof v === 'object') { Object.values(v).forEach(x => walkStrings(x, out)); }
}

const titles = C.finance.map(x => x.title);
const used = new Set();
for (const key of Object.keys(C)) {
  const strs = []; walkStrings(C[key], strs);
  for (const s of strs) {
    const re = /data-fp="([^"]+)"/g; let m;
    while ((m = re.exec(s))) used.add(m[1]);
  }
}
console.log('finance 条目: ' + titles.length + ' | data-fp 引用: ' + used.size);
const missing = [...used].filter(x => !titles.includes(x));
if (missing.length) { console.log('❌ 按钮点不开(finance 缺失): ' + missing.join(', ')); bad++; }
else console.log('✅ 所有 data-fp 都能在 finance 查到');

// finance 结构
const need = ['📷 人物照片', '🏷 人物标签', '📖 人物介绍（在世）', '🏆 主要成就', '🌟 一句话亮点'];
C.finance.forEach(p => {
  const hs = p.blocks.map(b => b.h);
  const miss = need.filter(n => !hs.includes(n));
  if (miss.length) { console.log('❌ ' + p.title + ' 缺块: ' + miss.join(',')); bad++; }
  const photo = p.blocks.find(b => b.h === '📷 人物照片');
  if (photo && !/onerror=/.test(photo.body)) { console.log('❌ ' + p.title + ' 照片无 onerror 兜底'); bad++; }
  if (!/截至\s*2026\s*年仍在世/.test(JSON.stringify(p.blocks))) { console.log('⚠️  ' + p.title + ' 未标注「截至2026年仍在世」'); bad++; }
});

// 企业模块计数一致性
for (const key of ['trade', 'overseas']) {
  C[key].forEach(day => day.blocks.forEach(b => {
    if (!/今日推荐/.test(b.h || '')) return;
    const actual = (b.body.match(/<div class="co">/g) || []).length;
    const claimed = (b.h.match(/今日推荐\s*·\s*(\d+)\s*家/) || [])[1];
    if (claimed && Number(claimed) !== actual) {
      console.log('❌ ' + key + ' ' + day.title + ' 计数不符: 标称 ' + claimed + ' 实际 ' + actual); bad++;
    }
    const hd = (b.body.match(/co-t hd/g) || []).length;
    const sm = (b.body.match(/co-t sm/g) || []).length;
    const tagHd = (day.tag.match(/头部\s*(\d+)/) || [])[1];
    const tagSm = (day.tag.match(/中小\s*(\d+)/) || [])[1];
    if (tagHd !== undefined && Number(tagHd) !== hd) { console.log('❌ ' + key + ' ' + day.title + ' 头部数不符: tag ' + tagHd + ' 实际 ' + hd); bad++; }
    if (tagSm !== undefined && Number(tagSm) !== sm) { console.log('❌ ' + key + ' ' + day.title + ' 中小数不符: tag ' + tagSm + ' 实际 ' + sm); bad++; }
  }));
}

// diet
const spicyMissing = C.diet.filter(d => /^第\d+天/.test(d.title) && !d.blocks.some(b => /辣味备选/.test(b.h)));
if (spicyMissing.length) { console.log('❌ 缺辣味备选: ' + spicyMissing.map(d => d.title).join(',')); bad++; }
else console.log('✅ diet 每天都有辣味备选（' + C.diet.filter(d => /^第\d+天/.test(d.title)).length + ' 天）');
const banned = /豆浆|豆奶|植物奶|常温奶|奶茶/;
C.diet.forEach(d => d.blocks.forEach(b => {
  if (banned.test(b.body) && !/不喝|避开|不碰|跳过|戒|不用|不用喝/.test(b.body)) {
    console.log('⚠️  ' + d.title + ' / ' + b.h + ' 出现忌口词'); }
}));
// 隐私：不应出现具体行政区（作为用户所在地）
const districts = /福田|龙华|南山|罗湖|宝安|盐田|坪山|光明|龙岗/;
C.diet.forEach(d => d.blocks.forEach(b => {
  if (districts.test(b.h || '')) { console.log('❌ 隐私泄露(标题含区名): ' + d.title + ' / ' + b.h); bad++; }
}));

// travel
const tNeed = ['✈️', '🗓', '🗺', '💰', '🏞', '🍜', '⚠️', '🎫'];
C.travel.forEach(p => {
  const hs = p.blocks.map(b => b.h).join(' ');
  const miss = tNeed.filter(n => !hs.includes(n));
  if (miss.length) console.log('⚠️  travel「' + p.title.slice(0, 18) + '」缺: ' + miss.join(' '));
});
console.log('travel 条目: ' + C.travel.length + ' | diet: ' + C.diet.length + ' | trade: ' + C.trade.length + ' | overseas: ' + C.overseas.length);
console.log(bad === 0 ? '\n🎉 校验通过，无致命问题' : '\n❌ 发现 ' + bad + ' 个致命问题');
process.exit(bad === 0 ? 0 : 1);
