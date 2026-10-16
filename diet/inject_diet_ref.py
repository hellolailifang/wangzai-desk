#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""把「旺仔的饮食」模块内容整体替换为：减脂食物红宝书（碳水/蛋白/膳食纤维 三大类）。

用法：python3 diet/inject_diet_ref.py
自带备份（content.js.bak_diet_ref）与 node --check 语法校验，失败自动还原。

设计说明：
- 用户要的是一份「低卡减脂食材参考」，不是每日轮换餐单，所以只放 1 条（arr.length=1）。
- contentIdx 对 diet 走 dayDiff % arr.length，len=1 永远返回 0，等于固定展示这份指南；
  旧的「换一条」pick 也会被 manualPick % 1 归零，不会越界。
- blocks[0] 会被 todayContent() 渲染到最底部，所以把「收尾/剩下你自己研究」放 blocks[0]。
"""
import json
import re
import shutil
import subprocess
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
CONTENT = ROOT / "content.js"
NODE = "/Users/lailifang/.workbuddy/binaries/node/versions/22.22.2/bin/node"


def find_key_span(src, key):
    """括号配平扫描定位 diet: [ ... ] 的 [ 与 ] 下标（兼容带引号/无引号写法，跳过字符串内括号）。"""
    m = re.search(r'["\']?%s["\']?\s*:\s*\[' % re.escape(key), src)
    if not m:
        return None
    start = m.end() - 1
    depth, i = 0, start
    in_str, quote, esc = False, "", False
    while i < len(src):
        c = src[i]
        if in_str:
            if esc:
                esc = False
            elif c == "\\":
                esc = True
            elif c == quote:
                in_str = False
        else:
            if c in "\"'":
                in_str, quote = True, c
            elif c == "[":
                depth += 1
            elif c == "]":
                depth -= 1
                if depth == 0:
                    return start, i
        i += 1
    return None


# ── 内容：三大类低卡减脂食材参考 ───────────────────────────────────────────
BLUE = "background:#eef7ff;border:1px solid #9ec9ee;border-radius:12px;padding:12px 14px;font-size:12.5px;line-height:1.85;color:#2c2c2a;"
BEIGE = "background:#fff8f0;border:1px solid #ffd0a6;border-radius:12px;padding:12px 14px;font-size:12.5px;line-height:1.8;color:#2c2c2a;"
GREEN = "background:#f2f9f2;border:1px solid #a8d5a2;border-radius:12px;padding:12px 14px;font-size:12.5px;line-height:1.8;color:#2c2c2a;"
PURPLE = "background:#f7f5ff;border:1px solid #c3b5e8;border-radius:12px;padding:12px 14px;font-size:12.5px;line-height:1.85;color:#2c2c2a;"

entry = {
    "title": "减脂食物红宝书 · 旺仔的饮食",
    "tag": "低卡食材 · 碳水 / 蛋白 / 膳食纤维 三大类",
    "blocks": [
        {  # blocks[0] → 渲染到最底部
            "h": "📌 剩下你自己研究",
            "body": (
                '<div style="' + BEIGE + '">'
                "上面是按「低卡 + 减脂 + 深圳好买」给你筛的骨架，<b>份量、一天总热量、怎么搭配你自己算</b>"
                '（随便一个热量 APP 搜一下就有）。几个提醒：<br/>'
                "· 运动别停，每周 4 次（2 力量 + 2 有氧）才掉得动；<br/>"
                "· 体重到 90 斤附近就转「维持期」，别再往下硬压；<br/>"
                "· 深圳盒马 / 美团买菜 / 钱大妈都能买到上面这些，外卖也点得到。<br/>"
                "<b>剩下怎么组合、怎么算热量，你自己研究就好。🐶</b></div>"
            ),
        },
        {  # blocks[1] → 顶部说明
            "h": "🎯 减脂食物红宝书",
            "body": (
                '<div style="' + BLUE + '">'
                "目标 <b>90 斤左右</b>、人在 <b>深圳</b>、主要靠外卖 + 偶尔自煮。原则就四句："
                "<b>低卡、高蛋白、高纤维、先吃菜和肉最后吃主食</b>。"
                "下面按你说的三大类，列能买的蔬果和荤菜 + 简单做法，<b>剩下的你自己研究</b>。</div>"
            ),
        },
        {
            "h": "🥔 碳水类 · 当主食吃，别当菜",
            "body": (
                '<div style="' + BEIGE + '">'
                "<b>低卡主食替代（蒸 / 煮就行）：</b><br/>"
                "· 贝贝南瓜 — 蒸 15 分钟，替代半碗米饭<br/>"
                "· 红薯 / 紫薯 — 蒸或微波，替代主食<br/>"
                "· 玉米（水果玉米）— 水煮，替代主食<br/>"
                "· 山药 / 芋头 — 蒸，替代主食<br/>"
                "· 莲藕 — 凉拌或清炒，当主食算热量<br/>"
                "<b>低糖水果（加餐吃）：</b><br/>"
                "· 苹果 / 柚子 / 蓝莓 / 草莓 — 低糖，饿了啃一个<br/>"
                "· 香蕉 — 只运动前后吃，日常别当加餐<br/>"
                '<span style="color:#b8541a;">⚠️ 避坑：土豆、南瓜别炒着吸油吃，要当主食；'
                "榴莲、荔枝、葡萄高糖少碰。</span></div>"
            ),
        },
        {
            "h": "🍗 蛋白质类 · 饱腹、保肌肉",
            "body": (
                '<div style="' + BLUE + '">'
                "<b>荤菜 / 蛋 / 豆（高蛋白低脂蛋白源）：</b><br/>"
                "· 鸡胸肉 — 水煮撕丝拌黄瓜 + 醋辣，或喷油壶少油煎<br/>"
                "· 虾仁 / 巴沙鱼 / 龙利鱼 — 清蒸或水煮，零难度<br/>"
                "· 鸡蛋 — 水煮 / 蒸蛋，每天 1–2 个<br/>"
                "· 瘦牛肉 — 卤或水煮牛肉片，少油<br/>"
                "· 豆腐 / 毛豆 / 鹰嘴豆 — 植物蛋白，凉拌或煮汤<br/>"
                "· 巴氏鲜奶 / 无糖希腊酸奶 — 饮品 + 加餐<br/>"
                "· 菌菇（金针菇 / 香菇）— 也算一点蛋白，煮汤<br/>"
                '<span style="color:#1b6ca8;">外卖点单：潮汕牛肉火锅（吊龙 / 嫩肉）、'
                "清汤麻辣烫加鹌鹑蛋 + 豆腐。</span></div>"
            ),
        },
        {
            "h": "🥬 膳食纤维类 · 多吃不胖，管饱",
            "body": (
                '<div style="' + GREEN + '">'
                "<b>高纤低卡蔬菜（放心吃到一大盘）：</b><br/>"
                "· 西兰花 — 水煮或蒜蓉少油炒<br/>"
                "· 菠菜 / 油麦菜 / 生菜 — 白灼或凉拌<br/>"
                "· 黄瓜 / 小番茄 — 生吃当零食<br/>"
                "· 芹菜 / 芦笋 / 秋葵 — 焯水凉拌<br/>"
                "· 冬瓜 / 海带 / 紫菜 — 煮汤，冬瓜还利水<br/>"
                "· 菌菇类 — 煮汤或炒，体积大热量低<br/>"
                '<span style="color:#2b6cb0;">外卖：白灼青菜、凉拌海带丝、菌菇汤。</span></div>'
            ),
        },
        {
            "h": "🍳 低卡做法合集 · 记这 5 个就够",
            "body": (
                '<div style="' + PURPLE + '">'
                "1. <b>水煮 / 清蒸</b>：鸡胸、鱼、蛋、菜，最省热量<br/>"
                "2. <b>凉拌</b>：醋 + 蒜 + 小米椒 + 极少油，黄瓜海带菠菜<br/>"
                "3. <b>喷油壶少油煎</b>：肉片表面喷一层，不粘锅<br/>"
                "4. <b>白灼</b>：开水烫 30 秒捞起，蘸生抽辣碟<br/>"
                "5. <b>炖汤去浮油</b>：冬瓜菌菇汤，喝前撇掉油<br/>"
                '<span style="color:#7a5fb0;">调味随便加：辣椒面 / 孜然 / 醋 / 蒜。'
                "<b>沙茶酱、麻酱、花生碎是热量炸弹，别碰。</b></span></div>"
            ),
        },
    ],
}

entries = [entry]


def main():
    src = CONTENT.read_text(encoding="utf-8")
    span = find_key_span(src, "diet")
    if not span:
        print('!! 未能在 content.js 中定位到 diet: [')
        raise SystemExit(2)
    start, end = span

    shutil.copy(CONTENT, ROOT / "content.js.bak_diet_ref")
    print("已备份 content.js -> content.js.bak_diet_ref")

    frag = json.dumps(entries, ensure_ascii=False, indent=2)
    frag = "\n".join("  " + ln for ln in frag.split("\n"))
    new_src = src[:start] + "\n" + frag + src[end + 1:]
    CONTENT.write_text(new_src, encoding="utf-8")

    r = subprocess.run([NODE, "--check", "content.js"], cwd=ROOT, capture_output=True, text=True)
    if r.returncode != 0:
        print("!! 语法错误，已还原备份\n", r.stderr)
        shutil.copy(ROOT / "content.js.bak_diet_ref", CONTENT)
        raise SystemExit(3)
    print("node --check 通过")

    chk = subprocess.run(
        [NODE, "-e",
         "const fs=require('fs');eval(fs.readFileSync('content.js','utf8').replace('const CONTENT','var CONTENT'));"
         "const a=CONTENT.diet;console.log('diet 条数:',a.length);"
         "console.log('title:',a[0].title);"
         "console.log('tag:',a[0].tag);"
         "console.log('blocks:',a[0].blocks.length,'(blocks[0] 渲染到底部)');"],
        cwd=ROOT, capture_output=True, text=True)
    print(chk.stdout.strip() or chk.stderr.strip())


if __name__ == "__main__":
    main()
