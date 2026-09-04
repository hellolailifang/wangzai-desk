#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
小红书违禁词检查工具（旺仔的工作台 · 社媒内容）

用法：
    python3 xhs/check_words.py                 # 检查 content.js 里已注入的全部篇目
    python3 xhs/check_words.py xhs/day04.json  # 检查单个待发布文件
    python3 xhs/check_words.py --strict        # 把 P1 也算作不通过

退出码：有 P0 命中返回 1，否则 0。
词表见 xhs/banned_words.md，要加词直接改下面 WORDS。
"""
import json
import os
import re
import subprocess
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CONTENT_JS = os.path.join(ROOT, 'content.js')

# (词, 级别, 建议替换)
WORDS = [
    # ---------- P0-1 站外引流 ----------
    ("微信", "P0", "评论区交流"),
    ("WeChat", "P0", "评论区交流"),
    ("wechat", "P0", "评论区交流"),
    ("VX", "P0", "评论区交流"),
    ("vx", "P0", "评论区交流"),
    ("加V", "P0", "评论区交流"),
    ("加v", "P0", "评论区交流"),
    ("薇信", "P0", "评论区交流"),
    ("威信", "P0", "评论区交流"),
    ("私信我", "P0", "评论区扣 1"),
    ("私聊", "P0", "评论区交流"),
    ("公众号", "P0", "我的主页"),
    ("二维码", "P0", "评论区置顶"),
    ("扫码", "P0", "评论区置顶"),
    ("加群", "P0", "评论区交流"),
    ("QQ", "P0", "评论区交流"),
    ("qq群", "P0", "评论区交流"),
    ("手机号", "P0", "评论区交流"),
    ("联系方式", "P0", "评论区交流"),
    ("淘宝", "P0", "电商平台"),
    ("天猫", "P0", "电商平台"),
    ("京东", "P0", "电商平台"),
    ("拼多多", "P0", "电商平台"),
    ("抖音", "P0", "短视频平台"),
    ("快手", "P0", "短视频平台"),
    ("加好友", "P0", "评论区交流"),
    ("导流", "P0", "获得曝光"),
    ("留资", "P0", "留下信息"),
    ("站外", "P0", "外部"),
    # ---------- P0-2 绝对化承诺 ----------
    ("保证", "P0", "通常 / 更大概率"),
    ("一定", "P0", "通常 / 大概率"),
    ("必然", "P0", "通常"),
    ("肯定能", "P0", "有机会"),
    ("100%", "P0", "多数情况下"),
    ("百分百", "P0", "多数情况下"),
    ("绝对", "P0", "相对"),
    ("永久", "P0", "长期"),
    ("万能", "P0", "通用"),
    ("零风险", "P0", "风险较低"),
    ("包你", "P0", "有机会"),
    ("包会", "P0", "能上手"),
    ("包过", "P0", "有机会通过"),
    ("彻底解决", "P0", "明显改善"),
    ("完全解决", "P0", "明显改善"),
    ("一劳永逸", "P0", "长期省事"),
    # ---------- P0-3 极限词 ----------
    ("最好", "P0", "更稳 / 相对更优"),
    ("最佳", "P0", "更合适"),
    ("最优", "P0", "更合适"),
    ("最强", "P0", "更稳"),
    ("最省", "P0", "更省"),
    ("最低", "P0", "更低"),
    ("最便宜", "P0", "更便宜"),
    ("排名第一", "P0", "排在靠前"),
    ("No.1", "P0", "靠前"),
    ("NO.1", "P0", "靠前"),
    ("顶级", "P0", "头部"),
    ("顶尖", "P0", "头部"),
    ("极品", "P0", "不错"),
    ("极致", "P0", "到位"),
    ("无敌", "P0", "很能打"),
    ("世界级", "P0", "行业里少见"),
    ("国家级", "P0", "官方层面"),
    ("全网", "P0", "多个平台"),
    ("全行业", "P0", "同行里"),
    ("史无前例", "P0", "少见"),
    ("第一品牌", "P0", "头部品牌"),
    ("销量第一", "P0", "销量靠前"),
    # ---------- P0-4 刻意模糊化品牌名（9/4 新增）----------
    # 模式：拼音首字母 / 形近拆分 / 同音替换。命中即 P0，提示"用全名"。
    ("BaiD", "P0", "百度（写全名）"),
    ("baid", "P0", "百度（写全名）"),
    ("豆x", "P0", "豆包（写全名）"),
    ("豆-x", "P0", "豆包（写全名）"),
    ("豆 X", "P0", "豆包（写全名）"),
    ("DsspSxxx", "P0", "DeepSeek（写全名）"),
    ("Dssp", "P0", "DeepSeek（写全名）"),
    ("DsppSxxx", "P0", "DeepSeek（写全名）"),
    ("文X一言", "P0", "文心一言（写全名）"),
    ("文 X 一言", "P0", "文心一言（写全名）"),
    ("元b", "P0", "元宝（写全名）"),
    ("元-b", "P0", "元宝（写全名）"),
    ("微X", "P0", "微信（写全名）"),
    ("WX", "P0", "微信（写全名；如确指代微信支付可保留）"),
    ("淘b", "P0", "淘宝（写全名）"),
    ("京d", "P0", "京东（写全名）"),
    ("拼dd", "P0", "拼多多（写全名）"),
    # ---------- P0-5 承诺未来行为（9/4 新增）----------
    # 模式：「明天/下篇/下周 + 发/出/讲/公布/更新」。博主承诺未来 = 诱导关注。
    ("明天发", "P0", "改「下一篇换个角度接着拆」"),
    ("明天公布", "P0", "改「下一篇换个角度接着拆」"),
    ("明天给", "P0", "改「下一篇换个角度接着拆」"),
    ("明天更新", "P0", "改「下一篇换个角度接着拆」"),
    ("下篇讲", "P0", "改「下一篇换个角度接着拆」"),
    ("下篇出", "P0", "改「下一篇换个角度接着拆」"),
    ("下篇说", "P0", "改「下一篇换个角度接着拆」"),
    ("下周出", "P0", "改「过几天再聊这个话题」"),
    ("下周更新", "P0", "改「过几天再聊这个话题」"),
    ("下周公布", "P0", "改「过几天再聊这个话题」"),
    ("即将发布", "P0", "改「快写完了」"),
    ("即将上线", "P0", "改「快写完了」"),
    ("关注后看", "P0", "改「评论区扣 1 我整理在置顶」"),
    ("关注我后续", "P0", "改「评论区扣 1 我整理在置顶」"),
    # ---------- P0-6 焦虑营销 / 宿命论（9/4 新增）----------
    # 「不存在 / 等于不存在」作为复合词命中，避免与正常语境混淆
    ("等于不存在", "P0", "改「客户在 AI 里很难找到」"),
    ("就等于不存在", "P0", "改「客户在 AI 里很难找到」"),
    ("= 你不存在", "P0", "改「= 客户找不到你」"),
    ("=你不存在", "P0", "改「= 客户找不到你」"),
    ("不改变就死", "P0", "改「不做这步容易落后」"),
    ("不做就被淘汰", "P0", "改「晚做一步容易落后同行」"),
    # ---------- P1 数据承诺 / 诱导 ----------
    ("暴涨", "P1", "明显变多"),
    ("翻倍", "P1", "明显增加"),
    ("爆单", "P1", "订单变多"),
    ("月入过万", "P1", "收入有起色"),
    ("日入", "P1", "单日营收"),
    ("躺赚", "P1", "稳定产出"),
    ("稳赚", "P1", "比较稳"),
    ("暴富", "P1", "收入上一个台阶"),
    ("被动收入", "P1", "持续带来的咨询"),
    ("零成本", "P1", "成本很低"),
    ("免费送", "P1", "分享"),
    ("免费领", "P1", "可以取用"),
    ("限时", "P1", "这段时间"),
    ("秒杀", "P1", "明显领先"),
    ("清仓", "P1", "处理"),
    ("包邮", "P1", "包配送"),
    ("神器", "P1", "好用的工具"),
    ("黑科技", "P1", "新玩法"),
    ("杀手锏", "P1", "关键动作"),
    ("王炸", "P1", "很关键"),
    ("封神", "P1", "很能打"),
]

# 属于「会复制到小红书发布」的板块：这些命中必须清零
PUBLISH_KEYS = ('标题', '副标题', '正文文案', '标签', '封面', '首图')
TAG_RE = re.compile(r'<[^>]+>')


def is_publish(sec):
    return any(k in sec for k in PUBLISH_KEYS)


def strip_html(s):
    return TAG_RE.sub(' ', s or '')


def load_entries(path=None):
    """返回 [(label, [(section, text), ...]), ...]"""
    if path:
        with open(path, encoding='utf-8') as f:
            data = json.load(f)
        data = data if isinstance(data, list) else [data]
    else:
        data = dump_social_from_content_js()
    out = []
    for e in data:
        label = e.get('title') or e.get('tag') or '?'
        sections = []
        if e.get('title'):
            sections.append(('标题', e['title']))
        if e.get('tag'):
            sections.append(('副标题', e['tag']))
        for i, b in enumerate(e.get('blocks') or []):
            sections.append((b.get('h') or ('块%d' % (i + 1)), b.get('body') or ''))
        out.append((label, sections))
    return out


def dump_social_from_content_js():
    js = r"""
const fs=require('fs');
const src=fs.readFileSync(process.argv[2],'utf8');
const fn=new Function(src+'; return (typeof CONTENT!==\"undefined\")?CONTENT:{};');
console.log(JSON.stringify(fn().social||[]));
"""
    tmp = os.path.join(ROOT, 'xhs', '._dump_social.js')
    with open(tmp, 'w', encoding='utf-8') as f:
        f.write(js)
    try:
        res = subprocess.run(['node', tmp, CONTENT_JS], capture_output=True, text=True, check=True)
        return json.loads(res.stdout or '[]')
    finally:
        if os.path.exists(tmp):
            os.remove(tmp)


def scan(text, strict=False):
    plain = strip_html(text)
    hits = []
    for word, level, suggest in WORDS:
        if level == 'P1' and not strict:
            continue
        start = 0
        while True:
            i = plain.find(word, start)
            if i < 0:
                break
            ctx = plain[max(0, i - 18):i + len(word) + 18].replace('\n', ' ')
            hits.append((level, word, suggest, ctx))
            start = i + len(word)
    return hits


def main():
    args = [a for a in sys.argv[1:]]
    strict = '--strict' in args
    args = [a for a in args if not a.startswith('--')]
    path = args[0] if args else None

    entries = load_entries(path)
    if not entries:
        print('没有找到可检查的篇目。')
        return 0

    total_p0 = total_p1 = 0   # 发布区（会复制到小红书）
    inner = 0                  # 工作台内部看的板块，不影响过审
    print('=' * 68)
    print('小红书违禁词检查 · %s' % (path or 'content.js (社媒内容)'))
    print('=' * 68)
    for label, sections in entries:
        pub_hits, inner_hits = [], []
        for sec, text in sections:
            for level, word, suggest, ctx in scan(text, strict):
                (pub_hits if is_publish(sec) else inner_hits).append((level, sec, word, suggest, ctx))
        if not pub_hits and not inner_hits:
            print('  ✅ %s —— 通过' % label)
            continue
        print('  %s %s' % ('❌' if pub_hits else '⚠️ ', label))
        for level, sec, word, suggest, ctx in pub_hits:
            if level == 'P0':
                total_p0 += 1
            else:
                total_p1 += 1
            print('     📤[%s] %-10s 「%s」→「%s」' % (level, sec, word, suggest))
            print('            …%s…' % ctx.strip())
        for level, sec, word, suggest, ctx in inner_hits:
            inner += 1
            print('     🔧[%s] %-10s 「%s」→「%s」  (内部板块，可不改)' % (level, sec, word, suggest))
    print('-' * 68)
    print('发布区：P0 %d 处（必须改） · P1 %d 处（建议改） ｜ 内部板块命中 %d 处（不影响过审）'
          % (total_p0, total_p1, inner))
    if total_p0:
        print('❌ 发布区存在 P0 命中，发稿前必须处理。')
        return 1
    print('✅ 发布区无 P0 命中，可以发布。')
    return 0


if __name__ == '__main__':
    sys.exit(main())
