const fs = require('fs');
const path = '/Users/lailifang/WorkBuddy/2026-07-27-09-50-21/content.js';
let s = fs.readFileSync(path, 'utf8');

// backup
fs.writeFileSync(path + '.newsbak', s);

// load CONTENT
const CONTENT = eval('(function(){ ' + s.replace(/module\.exports.*/, '') + '; return CONTENT; })()');
const orig = CONTENT.news;
console.log('orig news count:', orig.length);

const HOWTO = ('① 先辨信源：优先官方媒体（新华社/央视）、主流通讯社（路透/美联）；营销号、群聊截图先打问号；'
  + '② 一条新闻问三问：谁发的？证据呢？和我/市场有什么关系？'
  + '③ 追实时用「央视新闻」「人民日报」公众号或 BBC/Reuters 官网，少看二次剪辑；'
  + '④ 重大事件等 24 小时再看定论，避免被反转打脸。');

const ul = (arr) => '<ul>' + arr.map(x => '<li>' + x + '</li>').join('') + '</ul>';

function bw(title, tag, hot, points, why) {
  return {
    title, tag,
    blocks: [
      { h: '🔍 怎么读这条新闻', body: '<p>' + HOWTO + '</p>' },
      { h: '🔥 商战现场', body: '<p>' + hot + '</p>' },
      { h: '关键看点', body: ul(points) },
      { h: '为何重要', body: '<p>' + why + '</p>' }
    ]
  };
}

const bwItems = [
  bw('🔥 跨境平台三国杀：Temu vs SHEIN vs TikTok Shop', '商战 · 跨境电商',
    '拼多多旗下 Temu、快时尚 SHEIN、字节的 TikTok Shop 在海外贴身肉搏：Temu 用全托管+极致低价横扫欧美，SHEIN 守柔性快反供应链，TikTok Shop 拿短视频流量切内容电商的蛋糕。三方抢的是同一批中国工厂与海外用户。',
    ['全托管 vs 半托管之争，谁更轻、谁更控货',
     '低价补贴换规模，烧钱换市场能撑多久',
     '小包裹关税、数据与合规，是三方共同的天花板'],
    '这三家本质是中国供应链出海的三种打法。做外贸/跨境的人，看的不是热闹，是选平台、定渠道、避风险的活教材——商战怎么打，订单就往哪流。'),

  bw('🔥 芯片算力大战：英伟达 vs 自研阵营', '商战 · 半导体',
    '生成式 AI 引爆算力饥渴，英伟达靠 GPU+CUDA 生态一家独大；华为昇腾、AMD、谷歌 TPU、亚马逊 Trainium 集体围攻，国产替代与「去英伟达化」同步提速。',
    ['CUDA 生态护城河 vs 开源框架（PyTorch / 昇腾 CANN）突围',
     '高端制程受限下的架构与封装创新',
     '云厂商自研芯片，把「租算力」变「自己造」'],
    '算力是 AI 时代的「军火」。这场商战决定的不只是股价，更是各国科技主权的底牌，也直接影响你用的每个 AI 工具的成本与可得性。'),

  bw('🔥 电动车价格战：比亚迪 vs 特斯拉', '商战 · 新能源',
    '比亚迪凭垂直整合与多品牌矩阵在国内碾压，特斯拉用降价+低成本制造守住份额；双方在欧洲、东南亚、拉美正面交锋，价格战从国内卷到全球。',
    ['垂直整合（自产电池/芯片）vs 软件定义汽车的两条路线',
     '出海建厂与关税博弈，谁先本地化谁更稳',
     '盈利与份额的跷跷板：降价换量能撑多久'],
    '电动车是继手机后最卷的制造业。看懂这场仗，就看懂中国制造的升级与全球化怎么打，也看懂你下一辆车的价格锚点。'),

  bw('🔥 咖啡价格战：瑞幸 vs 库迪（9.9 元）', '商战 · 消费',
    '库迪以「9.9 元咖啡」贴脸开大，瑞幸被迫应战，把现磨咖啡打到奶茶价；战火从价格烧到点位、联名与供应链。旺仔你爱冰美式，正是这场商战最大的受益者。',
    ['万店规模下的供应链与加盟效率定生死',
     '低价是获客手段，还是盈利陷阱',
     '茶饮（蜜雪/霸王茶姬）与咖啡的边界正在模糊'],
    '一杯咖啡的价格，是消费降级的缩影，也是「规模+效率」商业模型的现场教学。你喝的每杯冰美式，背后都是烧钱抢市场的算计。'),

  bw('🔥 本地生活商战：美团 vs 抖音', '商战 · 平台',
    '抖音用短视频流量切外卖与到店团购，正面撞击美团的本地生活护城河；美团以即时配送和商家网络反守为攻，双方抢的是「附近的人」的每一单。',
    ['内容种草（抖音）vs 交易履约（美团），谁更能闭环',
     '即时零售成新战场，30 分钟达重塑习惯',
     '商家被平台「二选一」夹在中间'],
    '本地生活是离普通人最近的平台战争。它决定小店去哪接单、你点餐贵不贵，也是「流量为王」还是「履约为王」的终极验证。'),

  bw('🔥 高端手机商战：华为 vs 苹果', '商战 · 消费电子',
    '华为麒麟回归、Mate 系列强势反攻高端，苹果在中国市场遭遇最硬挑战；双方抢的不只是销量，更是高端用户的心智与生态黏性。',
    ['自研芯片+鸿蒙生态 vs iOS 封闭护城河',
     '影像、卫星通信、端侧 AI 成新卖点',
     '中国市场成为双方全球战略的胜负手'],
    '高端机的商战，是一场「软硬一体+生态」的国力级对决。它折射出供应链自主与品牌溢价的此消彼长，也直接影响你换机时的选择。')
];

// interleave: O O B, O O B ... (7 pairs of originals, last pair has no bw)
const result = [];
for (let k = 0; k < 7; k++) {
  result.push(orig[2 * k]);
  result.push(orig[2 * k + 1]);
  if (k < 6) result.push(bwItems[k]);
}
console.log('new news count:', result.length, '| 商战 share:', (bwItems.length / result.length * 100).toFixed(0) + '%');

// serialize with 4-space item indent to match file
let raw = JSON.stringify(result, null, 2);
let lines = raw.split('\n');
let inner = lines.slice(1, -1).join('\n');           // drop outer [ ]
inner = inner.split('\n').map(l => '  ' + l).join('\n'); // +2 indent -> 4-space

// splice: replace only the old-items region [start, closeStart) with new items,
// keeping the existing '  ],' + comment + following module intact.
const startMarker = '  news: [';
const start = s.indexOf(startMarker) + startMarker.length;
const rest = s.slice(start);
// news close is '  ],' followed (after optional comment) by the next module key `\w: [`
const mm = rest.match(/\n  \],\n[\s\S]*?\n(\s*)\w+: \[/);
if (!mm) { console.error('closing not found'); process.exit(1); }
const closeStart = start + mm.index; // points at '\n' right before '  ],'

const newText = s.slice(0, start) + '\n' + inner + s.slice(closeStart);
fs.writeFileSync(path, newText);
console.log('written bytes:', newText.length);
