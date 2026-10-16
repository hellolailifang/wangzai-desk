# 饮食模块 = 减脂食物红宝书（2026-10-16 起改版）

## 一、改版说明（重要）
- **旧版（2026-09-02 起）**：8 周减 10 斤、56 天每日轮换餐单（`build_diet56.py` + `inject_diet.py` + `diet56.json`）。
- **新版（2026-10-16 起）**：用户要的是一份「低卡减脂食材参考」，不是每日餐单。
  改为 **只放 1 条固定内容**（碳水 / 蛋白 / 膳食纤维 三大类 + 简单做法），
  由 `inject_diet_ref.py` 注入。**旧脚本 `inject_diet.py` / `diet56.json` 已作废，不要再跑，会覆盖掉新版。**

## 二、用户画像与原则
- **女 / 目标 90 斤左右 / 深圳 / 主要靠外卖 + 偶尔自煮**。
- 口味：喜辣、不喜甜；喝冰美式与茶；不喝豆浆、豆奶、常温奶（**巴氏鲜奶可以**）。
- 减脂四句原则：**低卡、高蛋白、高纤维、先吃菜和肉最后吃主食**。
- 运动：每周 4 次（2 力量 + 2 有氧）才掉得动；到 90 斤附近转维持期。

## 三、内容结构（1 条，6 个 block）
- `blocks[0]` 📌 剩下你自己研究 —— **会被渲染到最底部**（`todayContent()` 把 blocks[0] 当收尾）。
- `blocks[1]` 🎯 减脂食物红宝书（顶部说明 + 目标 + 原则）。
- `blocks[2]` 🥔 碳水类（主食替代型蔬果 + 低糖水果）。
- `blocks[3]` 🍗 蛋白质类（荤菜/蛋/豆，高蛋白低脂）。
- `blocks[4]` 🥬 膳食纤维类（高纤低卡蔬菜）。
- `blocks[5]` 🍳 低卡做法合集（5 个记牢的做法 + 调味避坑）。

### 轮换逻辑（index.html contentIdx 无需改）
`diet` 走 `dayDiff % arr.length`，现在 `arr.length = 1`，永远返回 0 → 固定展示这份指南。
旧的「换一条」pick 也会被 `manualPick % 1` 归零，不会越界。

## 四、改内容流程
```bash
cd /Users/lailifang/WorkBuddy/wangzai-desk-local
# 1）改 diet/inject_diet_ref.py 里的 blocks 内容
# 2）注入（自动备份 content.js.bak_diet_ref + node --check 校验，失败自动还原）
/Users/lailifang/.workbuddy/binaries/python/versions/3.13.12/bin/python3 diet/inject_diet_ref.py
# 3）部署（升缓存 + 同步 dist + rebase + 推送）
bash xhs/deploy.sh "饮食模块：……"
```

## 五、后续
- 用户说「剩下的自己研究」，所以这是骨架，具体份量/总热量由用户自己算。
- 若日后想回到每日餐单，重新启用 `build_diet56.py` + `inject_diet.py`（注意会覆盖本版）。
