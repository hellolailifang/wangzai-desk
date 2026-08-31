// 注入 fresh.json 到 content.js 与 en_practice.js（只换 body，保留 h 标签与 data-fp 按钮）
const fs = require('fs');
const path = 'content.js';
const src = fs.readFileSync(path, 'utf8');
const CONTENT = (new Function(src + '; return CONTENT;'))();
const fresh = JSON.parse(fs.readFileSync('fresh.json', 'utf8'));

// ---------- finance：保留标题/照片/标签结构，仅换后 4 块 body ----------
const FIN_H = ["📷 人物照片","🏷 人物标签","📖 人物介绍（在世）","🏆 主要成就","🌟 一句话亮点"];
CONTENT.finance.forEach((entry, i) => {
  const f = fresh.finance[i];
  const photo = entry.blocks[0]; // 保留原照片块（含 onerror 兜底）
  entry.blocks = [
    photo,
    { h: FIN_H[1], body: '<p class="tags">' + f.tags + '</p>' },
    { h: FIN_H[2], body: '<p>' + f.intro + '</p>' },
    { h: FIN_H[3], body: '<p>' + f.ach + '</p>' },
    { h: FIN_H[4], body: '<p>' + f.highlight + '</p>' },
  ];
});

// ---------- diet：14 天辣味备选换 body；深圳店卡整块替换 ----------
CONTENT.diet.slice(0, 14).forEach((day, i) => {
  const blk = day.blocks.find(b => b.h.includes('旺仔辣味备选'));
  if (blk) blk.body = fresh.diet_spicy[i];
});
CONTENT.diet[14].blocks = fresh.shenzhen.map(b => ({ h: b.h, body: b.body }));

// ---------- travel：保留标题/地点/图片/行前通用准备块，换其余 9 块 body ----------
CONTENT.travel.forEach((t, i) => {
  const tb = fresh.travel[i];
  for (let j = 1; j <= 9; j++) {
    t.blocks[j].body = tb[j - 1];
  }
});

// ---------- 写出 content.js（保留原始注释头） ----------
const header = '/* =========================================================\n' +
  '   旺仔的工作台 · 内容数据 CONTENT（每周自动焕新）\n' +
  '   生成时间：' + new Date().toISOString().slice(0, 10) + '｜finance/diet/travel 已刷新\n' +
  '   ========================================================= */\n';
fs.writeFileSync(path, header + 'const CONTENT = ' + JSON.stringify(CONTENT, null, 2) + ';\n', 'utf8');
console.log('content.js written. finance=', CONTENT.finance.length, 'diet=', CONTENT.diet.length, 'travel=', CONTENT.travel.length);

// ---------- en_practice.js ----------
const epath = 'en_practice.js';
const esrc = fs.readFileSync(epath, 'utf8');
const EN = (new Function(esrc + '; return EN_PRACTICE;'))();
for (let i = 0; i < 21; i++) EN[i] = fresh.en[i];
const eheader = '/* =========================================================\n' +
  '   旺仔的工作台 · 英语学习「听 / 说 / 单词」交互训练数据\n' +
  '   与 content.js 中 english 数组一一对应（索引 0-20）。\n' +
  '   每周焕新：' + new Date().toISOString().slice(0, 10) + ' 生成，21 天外贸/差旅/商务场景全新对话\n' +
  '   ========================================================= */\n';
fs.writeFileSync(epath, eheader + 'const EN_PRACTICE = ' + JSON.stringify(EN, null, 2) + ';\n', 'utf8');
console.log('en_practice.js written. days=', Object.keys(EN).length);
