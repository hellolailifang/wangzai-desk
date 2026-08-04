const fs = require('fs');
const dir = '/Users/lailifang/WorkBuddy/2026-07-27-09-50-21/assets';

function extractStops(r) {
  const rt = r.blocks.find(b => b.h && b.h.includes('徒步天数与路线'));
  const lis = (rt.body.match(/<li>[\s\S]*?<\/li>/g) || []);
  const nodes = [];
  lis.forEach(li => {
    const txt = li.replace(/<[^>]+>/g, '');
    const m = txt.match(/Day\d+[：:]\s*([^；，]+)/);
    if (!m) return;
    const seg = m[1];
    const parts = seg.split(/[→、—\-]/).map(s => s.trim()).filter(Boolean);
    parts.forEach(p => {
      p = p.replace(/[（(][^）)]*[）)]/g, '').trim();
      if (p && !/^(约|住|km|⚠|翻越|初见|河谷|爬升|林地|海拔|可骑|渐入|全程|凌晨)/.test(p)) nodes.push(p);
    });
  });
  const uniq = [];
  nodes.forEach(n => { if (uniq[uniq.length - 1] !== n) uniq.push(n); });
  return uniq.slice(0, 7);
}

function esc(s) { return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }

function makeSVG(title, stops) {
  const W = 800, H = 450;
  const n = Math.max(stops.length, 2);
  const xs = stops.map((_, i) => 50 + (W - 100) * (i / (n - 1)));
  const ys = stops.map((_, i) => 230 + 95 * Math.sin(i * 1.25 + 0.6));
  // 路径
  let d = `M ${xs[0].toFixed(1)} ${ys[0].toFixed(1)}`;
  for (let i = 1; i < n; i++) {
    const cx = (xs[i - 1] + xs[i]) / 2;
    d += ` Q ${cx.toFixed(1)} ${(ys[i - 1] - 40).toFixed(1)} ${xs[i].toFixed(1)} ${ys[i].toFixed(1)}`;
  }
  // 节点与标签
  const labelAll = n <= 5;
  let dots = '', labels = '';
  stops.forEach((s, i) => {
    dots += `<circle cx="${xs[i].toFixed(1)}" cy="${ys[i].toFixed(1)}" r="7" fill="#fff" stroke="#e8622c" stroke-width="3"/>`;
    const show = labelAll || i % 2 === 0 || i === n - 1;
    if (show) {
      let name = s.length > 12 ? s.slice(0, 11) + '…' : s;
      const ry = ys[i] - 16;
      const rot = n > 5 ? ` transform="rotate(-32 ${xs[i].toFixed(1)} ${ry.toFixed(1)})"` : '';
      labels += `<text x="${xs[i].toFixed(1)}" y="${ry.toFixed(1)}" font-size="13" fill="#1f3a4d" text-anchor="middle" font-family="-apple-system,Helvetica,Arial,sans-serif"${rot}>${esc(name)}</text>`;
    }
  });
  const head = title.split('·')[0].trim();
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}">
  <defs>
    <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#bfe3f2"/><stop offset="0.6" stop-color="#e9f6ef"/><stop offset="1" stop-color="#d7efe0"/>
    </linearGradient>
    <linearGradient id="path" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#e8622c"/><stop offset="1" stop-color="#f0a500"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#sky)"/>
  <path d="${d}" fill="none" stroke="url(#path)" stroke-width="5" stroke-linecap="round" stroke-dasharray="2 9"/>
  ${dots}
  ${labels}
  <text x="50" y="40" font-size="22" font-weight="700" fill="#13384d" font-family="-apple-system,Helvetica,Arial,sans-serif">${esc(head)}</text>
  <text x="52" y="62" font-size="13" fill="#5a6b76" font-family="-apple-system,Helvetica,Arial,sans-serif">徒步路线示意图 · Route Map</text>
  <text x="${W - 50}" y="${H - 22}" font-size="12" fill="#8aa0ad" text-anchor="end" font-family="-apple-system,Helvetica,Arial,sans-serif">示意图，实际路线以地图为准</text>
</svg>`;
}

const t = fs.readFileSync('/Users/lailifang/WorkBuddy/2026-07-27-09-50-21/content.js', 'utf8');
const C = new Function('return ' + t.match(/const CONTENT\s*=\s*(\{[\s\S]*\n\})/)[1])();
C.travel.forEach((r, i) => {
  const stops = extractStops(r);
  if (stops.length < 2) stops.push('起点', '终点');
  const svg = makeSVG(r.title, stops);
  fs.writeFileSync(`${dir}/route_${i}.svg`, svg);
  console.log(i, r.title.split('·')[0].trim(), '=>', JSON.stringify(stops));
});
console.log('生成 SVG 路线图完成，共', C.travel.length, '张');
