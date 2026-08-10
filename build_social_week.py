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
THEME = '图文短视频 × 深圳辣馆连载'

REC_BODY = (
    '<p><b>抓住 8 月最大红利：</b>抖音本月全平台上线「图文短视频」（图片轮播＋文字＋BGM）。'
    '官方给了<b>双流量池</b>——推荐流量 70% ＋ 搜索流量 30%，图文的搜索曝光约是口播视频的 <b>4.2 倍</b>。'
    '更关键的是完播口径换成了「阅读完成率」（用户滑到最后一张即算），比拍视频冲完播率轻松得多，'
    '而你目前的视频完播率是 19.07%。</p>'

    '<p class="ct-h">💡 为什么这周做这个</p>'
    '<div class="ct-body ph">'
    '① 你的短板不是流量，是<b>互动率 1%、流量不转粉</b>——人字拖那条 11.9 万播没留住人，'
    '因为观众<b>没有理由关注你</b>，看完就走。<br/>'
    '② 2026 新算法重看<b>收藏 / 复访 / 铁粉互动</b>，<b>系列化连载</b>是目前最有效的解法：'
    '用户为了追下一期才点关注。<br/>'
    '③ 图文一条 30 分钟就能出，下班后也能稳定日更 2–3 条（日更 2 条约 +15% 流量，3 条约 +30%）。<br/>'
    '④ 深圳 ＋ 爱辣 ＋ 冰美式本来就是你的日常，不用演、素材天然管够。'
    '</div>'

    '<p class="ct-h">🎬 拍摄脚本（图文 6 张）</p>'
    '<div class="ct-body ph">'
    '先定死栏目名：<b>《深圳辣馆打卡 · 第 N 家》</b>，一期只讲一家店。<br/>'
    '① <b>封面</b>：辣菜特写占满画面 ＋ 大字「深圳辣馆 #008」＋ 小字店名 / 人均<br/>'
    '② 图2：门头实拍（让人搜得到、找得着）<br/>'
    '③ 图3–4：招牌菜各一张，配一句真实评价（辣度几级、值不值这个价）<br/>'
    '④ 图5：<b>避雷提醒</b>（排队多久、几点去、哪道别点）——这张收藏率最高<br/>'
    '⑤ 图6：钩子「下一家想看我探哪个区？评论区点单」<br/>'
    '拍摄：手机原相机即可，前 3 张必须高清＋高饱和；一次探店尽量拍够 3 期的量。'
    '</div>'

    '<p class="ct-h">✍️ 标题 / 文案示例（前半句喂搜索，后半句勾点击）</p>'
    '<div class="ct-body ph">'
    '「深圳湘菜推荐 ｜ 这家辣到我灌了三杯冰美式，人均 58」<br/>'
    '「深圳探店 ｜ 藏在写字楼负一层的辣馆，打工人午饭天花板」<br/>'
    '「深圳美食 ｜ 连吃 7 家辣馆后，我只回头了这一家」'
    '</div>'

    '<p class="ct-h">🎲 顺手可蹭的热点</p>'
    '<p>「26 版西游记 / 打工人团建」梗仍在爆（相关话题播放已超 5 亿）。可加拍一条混搭：'
    '<b>「如果师徒四人在深圳吃辣」</b>——唐僧点鸳鸯锅、悟空全红汤、八戒只惦记甜品、沙僧默默买单。'
    '成本极低、蹭现成流量，又不脱离你的美食垂类。</p>'

    '<p class="ct-h">🏷️ 话题标签</p>'
    '<p>#深圳美食 #深圳探店 #深圳辣馆 #打工人午餐 #图文短视频 #城市生活</p>'
)

TODO_BODY = (
    '<p>① <b>今天</b>：给栏目起名，做一张固定封面模板（Canva 或醒图存成模板，之后每期只换图和编号）；<br/>'
    '② <b>本周内</b>：挑 3 家深圳辣馆，一次性拍够 3 期图文素材，周二 / 周四 / 周六各发一条；<br/>'
    '③ 每条标题前半句务必写「深圳＋菜系＋区域」，专吃搜索流量池；<br/>'
    '④ <b>治互动率</b>：结尾固定「下一家点单」，发布后 2 小时内回完前 20 条评论，每条都反问一句；<br/>'
    '⑤ <b>治转粉</b>：主页简介改成「深圳辣馆连载中 · 已探 N 家」，让点进来的人有关注的理由；<br/>'
    '⑥ <b>周日复盘</b>：对比图文的「阅读完成率」和视频的 19.07% 完播率，哪个跑得好就把主力压过去。</p>'
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
