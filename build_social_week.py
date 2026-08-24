# -*- coding: utf-8 -*-
"""每周更新 CONTENT.social 的最后一条（抖音内容推荐）。

用法：改下面的 TITLE / REC_H / REC_BODY / TODO_BODY 后执行
    python3 build_social_week.py

规则（务必遵守）：
  - blocks[0] 账号分析卡片<原样保留>，抖音后台真实数据由旺仔手动提供，不得编造
  - 只替换 title / tag / blocks[1] / blocks[2]
  - 周序号自动 = 原最后一条的周序号 + 1
"""
import json, io, re

PATH = '/Users/lailifang/WorkBuddy/2026-07-27-09-50-21/content.js'

# ======== 每周只改这一段 ========
THEME = '反精致 · 深圳打工人真实日常 vlog'

REC_BODY = (
    '<p><b>8 月算法就一个信号：拼真实、拼细分，不拼精致。</b>抖音 2026 趋势报告写得明白——'
    '<b>反完美素人内容的互动率比精致摆拍高约 40%</b>；TikTok 的「Locked In」浪潮也在说同一件事：'
    '展示努力比展示完美更火。而你那条爆款「义工日记·被遗弃的小白狗」恰恰就是这个基因——'
    '<b>真实 ＋ 情感</b>。这周把它平移到「打工人日常」。</p>'

    '<p class="ct-h">💡 为什么这周做这个</p>'
    '<div class="ct-body ph">'
    '① <b>踩中当下爆点：</b>8/13「精神离职」冲上抖音热榜第一——模板是「如果不考虑前途，我梦想的职业是____」，'
    '最高单条 50 万赞，热门答案里就有<b>咖啡师</b>。你爱冰美式，天然能接这波（「打工人的咖啡师梦」）。<br/>'
    '② <b>白嫖 BGM 热点：</b>8 月抖音热歌《咖啡不睡觉》就是「打工人与咖啡的日常」，直接当背景音乐蹭现成流量。<br/>'
    '③ <b>治你的两个硬伤：</b>后台显示你<b>封面点击仅 1.52%</b>、<b>完播率低于同类</b>——'
    '精致 vlog 的封面没人点，真实冲突的封面才有人点；开头 3 秒抛冲突能直接救完播。<br/>'
    '④ 深圳 ＋ 打工人 ＋ 冰美式本就是你的日常，不用演，素材天天有。'
    '</div>'

    '<p class="ct-h">🎬 拍摄脚本（真实 vlog · 竖屏 30–60 秒）</p>'
    '<div class="ct-body ph">'
    '先定死栏目名：<b>《深圳打工人的不完美一天 · EP1》</b>，一期只讲一段真实日常。<br/>'
    '① <b>开头 3 秒</b>：素颜 / 刚起床 / 挤地铁的真实画面 ＋ 一句冲突台词（「说好今天搞事业的，结果……」）——这 3 秒决定完播率；<br/>'
    '② <b>中段</b>：一个真实场景（通勤 / 午饭 / 下班后的冰美式续命），不精致剪辑，保留原声和环境音；<br/>'
    '③ <b>转折</b>：一笔带过的「小崩溃 / 小摆烂」（点了冰美式却开会忘了喝），真实感全在这一笔；<br/>'
    '④ <b>收尾钩子</b>：「你是哪种打工人？评论区对号入座」＋ 下期预告；<br/>'
    '⑤ <b>封面</b>：直接截视频里最「狼狈」或最有情绪的帧，加白字大字标题，<b>绝不磨皮</b>。'
    '</div>'

    '<p class="ct-h">✍️ 标题 / 文案示例（真实感优先，别端着）</p>'
    '<div class="ct-body ph">'
    '「深圳打工人 ｜ 说好今天搞事业的，结果在咖啡馆刷了一小时手机」<br/>'
    '「精神离职第 N 天 ｜ 如果不考虑前途，我想当个咖啡师（先把这杯冰美式喝了）」<br/>'
    '「深圳打工日记 ｜ 月薪 __，但今天我只想好好喝杯咖啡」'
    '</div>'

    '<p class="ct-h">🎲 顺手可蹭的热点</p>'
    '<p>① <b>「精神离职」</b>：拍一条「打工人的咖啡师梦」混剪，配《咖啡不睡觉》BGM，成本极低、接现成热度，又不脱离你的咖啡 / 美食垂类；<br/>'
    '② <b>本地生活带货</b>：探到的辣馆 / 咖啡店顺手挂抖音团购（抖省省），真实探店 ＝ 小收入，和你的探店内容天然衔接。</p>'

    '<p class="ct-h">🏷️ 话题标签</p>'
    '<p>#深圳打工日记 #打工人日常 #反精致 #活人感 #精神离职 #深圳咖啡 #城市生活</p>'
)

TODO_BODY = (
    '<p>① <b>今天</b>：定栏目名《深圳打工人的不完美一天》，拍一条「起床 → 地铁 → 冰美式续命」的 30 秒样片，封面用最狼狈那帧；<br/>'
    '② <b>本周内</b>：借「精神离职」热点拍 1 条「我的咖啡师梦」混剪（用《咖啡不睡觉》BGM），周二 / 周四择一发；<br/>'
    '③ <b>封面铁律</b>：绝不磨皮，第一帧就要有冲突 / 情绪，目标把封面点击从 1.52% 拉到 3%+；<br/>'
    '④ <b>开头 3 秒必须抛冲突</b>救完播（你完播率现在低于同类）；<br/>'
    '⑤ <b>探店带货</b>：探到的店顺手挂团购链接（抖省省），把真实探店变成小收入；<br/>'
    '⑥ <b>周日复盘</b>：对比这周真实 vlog 和上周图文的完播率 / 封面点击，哪个高就把主力压过去。</p>'
)
# ======== 以上是每周要改的内容 ========


def find_last_entry(s):
    """返回最后一条抖音推荐条目的 (start, end, week_no)。"""
    hits = list(re.finditer(r'"title":\s*"抖音内容推荐 · 第 (\d+) 周', s))
    if not hits:
        raise SystemExit('未找到抖音内容推荐条目')
    m = hits[-1]
    week = int(m.group(1))
    start = s.rindex('{', 0, m.start())
    i, depth, in_str, esc = start, 0, False, False
    while i < len(s):
        c = s[i]
        if in_str:
            if esc:
                esc = False
            elif c == '\\':
                esc = True
            elif c == '"':
                in_str = False
        else:
            if c == '"':
                in_str = True
            elif c == '{':
                depth += 1
            elif c == '}':
                depth -= 1
                if depth == 0:
                    return start, i + 1, week
        i += 1
    raise SystemExit('花括号未配对')


def main():
    s = io.open(PATH, encoding='utf-8').read()
    start, end, old_week = find_last_entry(s)
    entry = json.loads(s[start:end])

    account_card = entry['blocks'][0]           # 账号分析卡片：原样保留，绝不改
    assert '抖音账号分析' in account_card['h'], '首个 block 不是账号分析卡片，已中止'

    week = old_week + 1
    entry['title'] = '抖音内容推荐 · 第 %d 周｜%s' % (week, THEME)
    entry['tag'] = '第%d周 · 每周一篇' % week
    entry['blocks'] = [
        account_card,
        {'h': '🔥 本周推荐：%s' % THEME, 'body': REC_BODY},
        {'h': '✅ 本周行动清单', 'body': TODO_BODY},
    ]

    txt = json.dumps(entry, ensure_ascii=False, indent=2)
    txt = '\n'.join(('  ' + ln) if i else ln for i, ln in enumerate(txt.split('\n')))

    io.open(PATH, 'w', encoding='utf-8').write(s[:start] + txt + s[end:])
    print('OK  第 %d 周 -> 第 %d 周｜%s' % (old_week, week, THEME))
    print('    账号分析卡片已原样保留（%d 字符）' % len(account_card['body']))


if __name__ == '__main__':
    main()
