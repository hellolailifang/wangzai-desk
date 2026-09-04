#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
社媒内容发布排期：判断休息日 / 法定节假日，算出「今天需要备好哪几天的内容」。

规则（旺仔 2026-09-04 拍板）：
  1. 每天都要能提前看到下一天的内容 —— 想提前做主图
  2. 遇到双休 / 法定节假日，休息前一天就要把整个休息期的内容备好（休息期间只用手机）
  3. 长假（连续休息 ≥4 天）不必日更，隔天一篇即可，但页面要有内容更新

用法：
    python3 xhs/schedule.py              # 打印今天需要生成的日期
    python3 xhs/schedule.py --json       # 输出 JSON，供自动化脚本调用
"""
import argparse
import datetime as dt
import json
import os
import sys

# --- 2026 年放假安排（国务院办公厅 2025-11-04 发布） ---
HOLIDAYS_2026 = [
    ("元旦",   "2026-01-01", "2026-01-03"),
    ("春节",   "2026-02-15", "2026-02-23"),
    ("清明节", "2026-04-04", "2026-04-06"),
    ("劳动节", "2026-05-01", "2026-05-05"),
    ("端午节", "2026-06-19", "2026-06-21"),
    ("中秋节", "2026-09-25", "2026-09-27"),
    ("国庆节", "2026-10-01", "2026-10-07"),
]
# 调休要上班的周末
MAKEUP_WORKDAYS_2026 = [
    "2026-01-04", "2026-02-14", "2026-02-28",
    "2026-05-09", "2026-09-20", "2026-10-10",
]

LONG_REST_DAYS = 4   # 连续休息 ≥ 这个天数就算长假，隔天更


def _d(s):
    return dt.date.fromisoformat(s)


def holiday_ranges():
    return [(name, _d(a), _d(b)) for name, a, b in HOLIDAYS_2026]


def holiday_name(d):
    for name, a, b in holiday_ranges():
        if a <= d <= b:
            return name
    return None


def is_rest_day(d):
    """是否休息日：法定放假区间内，或周末（且不是调休上班日）"""
    s = d.isoformat()
    if holiday_name(d):
        return True
    if s in MAKEUP_WORKDAYS_2026:
        return False
    return d.weekday() >= 5     # 5=周六 6=周日


def rest_reason(d):
    h = holiday_name(d)
    if h:
        return h + "假期"
    if d.isoformat() in MAKEUP_WORKDAYS_2026:
        return "调休上班"
    if d.weekday() >= 5:
        return "双休"
    return "工作日"


def plan_dates(today=None, have=None, long_rest=LONG_REST_DAYS):
    """
    返回今天需要备好的发布日期列表（含今天与明天）。
    today: date，默认今天
    have:  已经生成过的日期集合（'YYYY-MM-DD'）
    """
    today = today or dt.date.today()
    have = set(have or [])
    one = dt.timedelta(days=1)
    tomorrow = today + one

    need = []
    for d in (today, tomorrow):          # 规则 1：永远提前备好下一天
        if d.isoformat() not in have:
            need.append(d)

    # 规则 2：从明天开始向后扫连续休息段
    block = []
    d = tomorrow
    while is_rest_day(d) and len(block) < 40:
        block.append(d)
        d += one
    if block:
        # 规则 3：长假隔天更，短假每天都有
        pick = block[::2] if len(block) >= long_rest else block
        for x in pick:
            if x.isoformat() not in have and x not in need:
                need.append(x)

    need.sort()
    return need


def describe(dates):
    return [{"date": d.isoformat(), "weekday": "周" + "一二三四五六日"[d.weekday()],
             "reason": rest_reason(d)} for d in dates]


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--json', action='store_true')
    ap.add_argument('--date', help='模拟日期 YYYY-MM-DD')
    ap.add_argument('--have', help='已生成的日期，逗号分隔')
    args = ap.parse_args()

    today = _d(args.date) if args.date else dt.date.today()
    have = [x for x in (args.have or '').split(',') if x]
    need = plan_dates(today, have)

    if args.json:
        print(json.dumps({"today": today.isoformat(), "need": describe(need)},
                         ensure_ascii=False))
        return 0
    print('今天 %s（%s · %s）' % (today.isoformat(), "周" + "一二三四五六日"[today.weekday()], rest_reason(today)))
    if not need:
        print('  ✅ 内容已备齐，无需新增')
    for d in need:
        print('  📝 需要生成 %s（%s · %s）' % (d.isoformat(), "周" + "一二三四五六日"[d.weekday()], rest_reason(d)))
    return 0


if __name__ == '__main__':
    sys.exit(main())
