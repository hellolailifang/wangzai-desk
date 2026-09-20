#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""小红书 GEO 日更发布前自查（对应旺仔 09-15 反馈：不被收录 / 去 AI 味 / 去营销味 /
口语化 / 讲故事（强钩子开头、不讲课、让人想读完））。

读 xhs/dayNN.json 的 blocks[2]（正文文案，即会复制到小红书的那段），跑一轮硬指标自检，
逐项报 PASS / WARN。多跑两遍 = 改完再跑一次，直到全绿。

用法：python3 xhs/selfcheck.py xhs/day10.json
"""
import html
import json
import re
import sys
from pathlib import Path

MKT_WORDS = [
    "干货满满", "保姆级", "一文看懂", "深度解析", "必看", "手把手",
    "揭秘", "吐血整理", "看完就懂", "强烈推荐", "全网最", "速看",
    "干货预警", "纯干货", "万字", "建议收藏", "划重点", "小白必看",
    "保姆式", "全方位", "爆款", "引流",
]
SELF_DOUBT = ["想多了", "不敢下结论", "说不准", "我也不确定", "样本", "我也不敢", "可能我想",
              "不敢说", "不见得", "没十足把握", "不敢下", "不一定"]
IMPERFECT = ["我那会儿还挺自信", "挺懵", "随手写", "发了像没发", "差点", "懵", "失神", "分不清",
             "咯噔一下", "看了好久", "人就没了", "白纸一张", "有点慌", "松了口气",
             "破防", "挺尬", "尬", "扎心", "委屈", "不好意思", "有点虚", "嫌它"]
SOften = ["你们要是", "你们那行", "你要是有空", "你们里", "你们做"]
INVITE = ["聊聊", "讲讲", "说说", "跟我聊", "我还挺想听", "回来跟我说", "甩评论区", "跟我说说"]
CONCRETE_TIME = ["上周", "前天", "今晚", "昨天", "今天", "早上", "晚上", "两周", "五天",
                 "那天", "昨晚", "半夜", "凌晨", "上次", "有次", "上个月", "前个月", "前几天", "今早"]
# 故事化开头：首段必须含「具体场景/事件锚点」，且不能以「元开场」起头（像在报选题）
SCENE_OPEN = ["前天", "昨天", "上周", "那天", "昨晚", "半夜", "凌晨", "上次", "有次", "上个月",
              "前个月", "前几天", "今早", "刚", "有天", "加我", "问：", "问:", "点开", "刷到", "划到",
              "微信上", "群里", "客户", "老板"]
META_OPEN = ["今天", "这篇", "说一下", "聊聊", "很多人", "你有没有", "g e o", "GEO 是", "其实",
             "来讲", "咱们", "给大家", "分享一个"]
# 说教/讲义感标记：出现任一即告警（像在上课而非唠嗑）
LECTURE_MARK = ["也就是说", "说白了", "本质上", "换句话说", "换言之", "究其原因", "核心在于",
                "简单来说就是", "总结一下", "划重点", "知识点", "敲黑板"]


def strip_ta(text):
    """从 textarea 块里抠出正文纯文本（还原 HTML 实体，计数才准）。"""
    m = re.search(r">([\s\S]*?)</textarea>", text)
    t = m.group(1) if m else re.sub(r"<[^>]+>", "", text)
    return html.unescape(t)


def kw_and_title(e):
    """从 blocks[3] 取核心搜索词，从 blocks[1] 取主推标题。"""
    kw = title = None
    try:
        b3 = e["blocks"][3]["body"]
        m = re.search(r"核心搜索词：</b>([^<]+)", b3)
        if m:
            kw = m.group(1).strip()
    except Exception:
        pass
    b1 = e["blocks"][1]["body"]
    m = re.search(r"主推(?:（🔍 搜索向）)?：</b>([^<]+)", b1)
    if m:
        title = m.group(1).strip()
    return kw, title


def audit(path):
    data = json.loads(Path(path).read_text(encoding="utf-8"))
    if isinstance(data, dict):
        data = [data]
    for e in data:
        post_block = e["blocks"][2]["body"]
        post = strip_ta(post_block)
        print("=" * 60)
        print(f"自检 {e.get('tag') or e.get('title')}  (day={e.get('day')})")
        print("=" * 60)

        # 1. 字数
        n = len(post.replace("\n", ""))
        ok = 420 <= n <= 560
        print(f"[{'PASS' if ok else 'WARN'}] 正文字数 = {n}  (要求 420–560)")

        # 2. 破折号
        dash = post.count("——")
        ok = dash <= 1
        print(f"[{'PASS' if ok else 'WARN'}] 破折号 —— = {dash} 个  (要求 ≤1)")

        # 3. 营销词
        hits = [w for w in MKT_WORDS if w in post]
        print(f"[{'PASS' if not hits else 'WARN'}] 营销味词命中 {len(hits)} 个：{hits}")

        # 4. 自我否定 / 留口子
        sd = [w for w in SELF_DOUBT if w in post]
        print(f"[{'PASS' if sd else 'WARN'}] 自我否定/留口子 命中：{sd}")

        # 5. 不完美 / 污点
        imp = [w for w in IMPERFECT if w in post]
        print(f"[{'PASS' if imp else 'WARN'}] 不完美/污点细节 命中：{imp}")

        # 6. 具象细节
        digits = re.findall(r"\d+", post)
        quotes = re.findall(r"[「\"][^」\"]+[」\"]", post)
        ctime = [w for w in CONCRETE_TIME if w in post]
        print(f"[{'PASS' if (digits or quotes or ctime) else 'WARN'}] 具象细节：数字 {digits} / 引语 {quotes} / 时间锚点 {ctime}")

        # 7. 结尾三段式
        tail = post[-120:]
        sof = [w for w in SOften if w in tail]
        inv = [w for w in INVITE if w in tail]
        print(f"[{'PASS' if (sof and inv) else 'WARN'}] 结尾三段式：软化{tail and sof} 邀请{tail and inv}")

        # 8. 段落长短交错（均匀切块 = AI 特征）
        paras = [p for p in post.split("\n\n") if p.strip()]
        lens = [len(p.replace("\n", "")) for p in paras]
        if len(lens) >= 3:
            avg = sum(lens) / len(lens)
            spread = max(lens) - min(lens)
            uniform = spread < 0.5 * avg and len(set(lens)) <= 2
            print(f"[{'PASS' if not uniform else 'WARN'}] 段落 {len(paras)} 段，长度 {lens}；"
                  f"长短交错={'否(疑似均匀切块)' if uniform else '是'}")
        else:
            print(f"[WARN] 段落数过少（{len(paras)}），无法判断是否交错")

        # 9. 故事化开头（强钩子）：首段含场景锚点，且不以元开场起头
        first_para = (paras[0] if paras else post).strip()
        has_scene = any(w in first_para for w in SCENE_OPEN)
        starts_meta = any(first_para.startswith(w) for w in META_OPEN)
        ok9 = has_scene and not starts_meta
        print(f"[{'PASS' if ok9 else 'WARN'}] 故事化开头：首段场景锚点={has_scene} "
              f"非元开场={not starts_meta}（首段：{first_para[:24]}…）")

        # 10. 去说教（讲义感）：禁止说教标记，且「因为+所以」堆砌≤4
        lec = [w for w in LECTURE_MARK if w in post]
        cause = post.count("因为") + post.count("所以")
        ok10 = (not lec) and (cause <= 4)
        print(f"[{'PASS' if ok10 else 'WARN'}] 去说教：说教标记{lec or '无'} "
              f"｜因为/所以共 {cause} 处（≤4）")


        # 11. 搜索关键词布局（2026-09-20 新增：核心词是否真的埋进去了）
        kw, title = kw_and_title(e)
        if not kw:
            print("[WARN] 搜索词：blocks[3] 里没找到「核心搜索词」，本篇没做搜索词布局")
        else:
            cnt = post.count(kw)
            in_head = kw in post[:120]
            print(f"[{'PASS' if 2 <= cnt <= 6 else 'WARN'}] 搜索词「{kw}」正文出现 {cnt} 次  (要求 2–6，别堆砌)")
            print(f"[{'PASS' if in_head else 'WARN'}] 搜索词进了正文前 120 字：{in_head}")
            if title:
                ok_t = kw in title[:20]
                print(f"[{'PASS' if ok_t else 'WARN'}] 搜索词进了标题前 20 字：{ok_t}（标题：{title}）")
            else:
                print("[WARN] 没取到主推标题，无法检查标题埋词")
        # 12. 板块完整性：必须有 🔍 搜索关键词板块
        heads = [b.get("h", "") for b in e["blocks"]]
        has_seo = any("搜索关键词" in h for h in heads)
        print(f"[{'PASS' if has_seo else 'WARN'}] 含 🔍 搜索关键词板块：{has_seo}（板块：{heads}）")


if __name__ == "__main__":
    audit(sys.argv[1] if len(sys.argv) > 1 else "xhs/day14.json")
