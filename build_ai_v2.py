#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""重写 CONTENT.ai：面向小白、可落地的 AI 学习 7 天课。"""
import json, re

SVG_PREFIX = '<svg viewBox="0 0 280 120" xmlns="http://www.w3.org/2000/svg">\n  <rect width="280" height="120" rx="12" fill="#eaf6fb" stroke="#0a3d62" stroke-width="2"/>'

def box(x, y, w, h, fill, stroke, text, tx=None, ty=None, tc="#0a3d62", fs="12"):
    tx = tx or (x + w/2)
    ty = ty or (y + h/2 + 4)
    return (f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="8" fill="{fill}" stroke="{stroke}" stroke-width="2"/>'
            f'<text x="{tx}" y="{ty}" text-anchor="middle" fill="{tc}" font-size="{fs}" font-weight="bold">{text}</text>')

SVG_L1 = (SVG_PREFIX +
    box(20, 30, 70, 50, "#48cae4", "#0a3d62", "角色") +
    '<line x1="92" y1="55" x2="108" y2="55" stroke="#0a3d62" stroke-width="2"/>'+
    '<polygon points="108,55 100,50 100,60" fill="#0a3d62"/>'+
    box(115, 30, 70, 50, "#1b6ca8", "#0a3d62", "任务", tc="#ffffff") +
    '<line x1="187" y1="55" x2="203" y2="55" stroke="#0a3d62" stroke-width="2"/>'+
    '<polygon points="203,55 195,50 195,60" fill="#0a3d62"/>'+
    box(210, 30, 50, 50, "#ffd166", "#0a3d62", "要求") +
    '</svg>')

SVG_L2 = (SVG_PREFIX +
    box(20, 35, 60, 45, "#48cae4", "#0a3d62", "定位") +
    '<text x="90" y="62" text-anchor="middle" fill="#0a3d62" font-size="18">+</text>'+
    box(105, 35, 60, 45, "#1b6ca8", "#0a3d62", "AI", tc="#ffffff") +
    '<text x="175" y="62" text-anchor="middle" fill="#0a3d62" font-size="18">=</text>'+
    box(190, 35, 70, 45, "#ffd166", "#0a3d62", "10个选题") +
    '</svg>')

SVG_L3 = (SVG_PREFIX +
    '<rect x="20" y="40" width="240" height="36" rx="8" fill="#ffffff" stroke="#0a3d62" stroke-width="2"/>'+
    box(22, 42, 50, 32, "#ffd166", "#0a3d62", "钩子") +
    box(76, 42, 50, 32, "#48cae4", "#0a3d62", "痛点") +
    box(130, 42, 60, 32, "#1b6ca8", "#0a3d62", "干货", tc="#ffffff") +
    box(194, 42, 62, 32, "#ff9f1c", "#0a3d62", "行动") +
    '</svg>')

SVG_L4 = (SVG_PREFIX +
    box(20, 35, 75, 45, "#48cae4", "#0a3d62", "文字 prompt") +
    '<line x1="97" y1="57" x2="115" y2="57" stroke="#0a3d62" stroke-width="2"/>'+
    '<polygon points="115,57 107,52 107,62" fill="#0a3d62"/>'+
    box(120, 30, 55, 55, "#1b6ca8", "#0a3d62", "AI", tc="#ffffff") +
    '<line x1="177" y1="57" x2="195" y2="57" stroke="#0a3d62" stroke-width="2"/>'+
    '<polygon points="195,57 187,52 187,62" fill="#0a3d62"/>'+
    box(200, 35, 60, 45, "#ffd166", "#0a3d62", "封面图") +
    '</svg>')

SVG_L5 = (SVG_PREFIX +
    box(15, 35, 70, 45, "#48cae4", "#0a3d62", "爆款文案") +
    '<line x1="87" y1="57" x2="105" y2="57" stroke="#0a3d62" stroke-width="2"/>'+
    '<polygon points="105,57 97,52 97,62" fill="#0a3d62"/>'+
    box(110, 30, 55, 55, "#1b6ca8", "#0a3d62", "AI", tc="#ffffff") +
    '<line x1="167" y1="57" x2="185" y2="57" stroke="#0a3d62" stroke-width="2"/>'+
    '<polygon points="185,57 177,52 177,62" fill="#0a3d62"/>'+
    box(190, 35, 75, 45, "#ffd166", "#0a3d62", "复盘结论") +
    '</svg>')

SVG_L6 = (SVG_PREFIX +
    box(15, 35, 70, 45, "#48cae4", "#0a3d62", "字幕") +
    box(95, 35, 70, 45, "#1b6ca8", "#0a3d62", "配音", tc="#ffffff") +
    box(175, 35, 90, 45, "#ffd166", "#0a3d62", "数字人辅助") +
    '</svg>')

SVG_L7 = (SVG_PREFIX +
    box(20, 35, 70, 45, "#48cae4", "#0a3d62", "模板") +
    '<line x1="92" y1="57" x2="108" y2="57" stroke="#0a3d62" stroke-width="2"/>'+
    '<polygon points="108,57 100,52 100,62" fill="#0a3d62"/>'+
    box(115, 35, 70, 45, "#1b6ca8", "#0a3d62", "复用", tc="#ffffff") +
    '<line x1="187" y1="57" x2="203" y2="57" stroke="#0a3d62" stroke-width="2"/>'+
    '<polygon points="203,57 195,52 195,62" fill="#0a3d62"/>'+
    box(210, 35, 50, 45, "#ffd166", "#0a3d62", "优化") +
    '</svg>')

def lesson(n, title, tag, svg, intro, demo_prompt, pitfall, tools):
    return {
        "title": title,
        "tag": tag,
        "blocks": [
            {
                "h": "今日复盘",
                "body": f"<h3>今日复盘</h3><p>{intro.split('。')[0]}。</p><p><b>明天预告：</b>继续把 AI 变成你的抖音生产力工具。</p>"
            },
            {
                "h": f"第{n}天 · 今天就能做",
                "body": f"{svg}<h3>3 分钟看懂</h3><p>{intro}</p><h3>今天落地</h3><p>打开 <b>{tools}</b>，复制下面这段 prompt 直接发给它：</p><blockquote style='background:#eaf6fb;border-left:4px solid #0a3d62;padding:10px 14px;margin:10px 0;border-radius:6px;font-size:13px;line-height:1.6'>{demo_prompt}</blockquote><h3>避坑提醒</h3><p>{pitfall}</p>"
            },
            {
                "h": "动手清单",
                "body": f"<h3>今日动手清单</h3><ul style='padding-left:18px;line-height:1.8'><li>完成上面的 prompt 并得到结果</li><li>把最满意的一条结果保存到手机备忘录</li><li>标出 1 个你觉得「最像人话」或「最有用」的点</li></ul>"
            }
        ]
    }

CONTENT_AI = [
    lesson(1,
        title="第1课：AI 不是魔法，先学会「好好说话」",
        tag="提示词入门 · 今天就能用",
        svg=SVG_L1,
        intro="AI 本质上是一个「接话器」。你描述得越清楚，它回答越准。记住公式：<b>角色 + 任务 + 要求</b>。不要只说「帮我写个文案」，要让 AI 知道你是谁、给谁看、要什么风格。",
        demo_prompt="你是一位深圳抖音文案高手。我在深圳做城市探店账号，爱喝咖啡、爱吃辣。请帮我写一条 15 秒口播文案，主题是「深圳周末最值得去的一家咖啡馆」，语气像朋友聊天，结尾要有行动号召。控制在 120 字以内。",
        pitfall="不要问太开放的问题，比如「咖啡怎么拍」。越具体，AI 越聪明；把平台、字数、语气、人群都说清楚。",
        tools="豆包 / Kimi"
    ),
    lesson(2,
        title="第2课：10 分钟让 AI 给你 10 个选题",
        tag="选题库 · 爆款从选题开始",
        svg=SVG_L2,
        intro="AI 能把你的定位 + 平台热点 + 内容形式组合成选题。选题不要拍脑袋，要让它基于你的账号标签和受众来批量生成。",
        demo_prompt="我在深圳做抖音，账号定位是城市生活/美食探店，爱喝咖啡、爱吃辣。请给我 10 个 8 月可拍的选题，每个配 3 个爆款标题，要求贴近 20-30 岁深圳打工人，有争议、有好奇、有共鸣。",
        pitfall="AI 给的大路货选题往往相似，你要加入自己的经历、观点和城市细节做差异化。",
        tools="豆包 / 通义 / Kimi"
    ),
    lesson(3,
        title="第3课：AI 写脚本，但你来把关",
        tag="脚本工作流 · 爆款结构",
        svg=SVG_L3,
        intro="爆款短视频结构 = <b>钩子（前3秒） + 痛点/好奇 + 干货 + 行动号召</b>。AI 出初稿，你改人话，千万别直接念 AI 稿。",
        demo_prompt="你是抖音爆款脚本写手。选题：深圳最辣的 3 家小馆子。目标人群：20-30 岁深圳打工人。要求：前 3 秒用反常识钩子，中间给 3 家店名 + 一句话推荐理由，结尾引导评论「你还知道哪家更辣」。语气像朋友聊天，60 秒口播。输出：口播稿 + 3 个标题。",
        pitfall="AI 会编假店名、假地址、假价格，凡是涉及真实信息必须人工核对。",
        tools="Kimi / 豆包"
    ),
    lesson(4,
        title="第4课：不用 PS，AI 做封面图",
        tag="AI 生图 · 视觉包装",
        svg=SVG_L4,
        intro="文生图工具根据 prompt 出图。公式：<b>主体 + 场景 + 风格 + 色调</b>。豆包、即梦、可灵都能用，不需要任何设计基础。",
        demo_prompt="一张现代感封面图，深圳咖啡店窗外街景，一杯冰美式放在木桌上，暖色调，日系清新风格，高清，16:9，适合抖音封面。",
        pitfall="人物手指、文字、招牌常出错；一次生成 5-10 张再挑 1 张，不要指望第一张就完美。",
        tools="豆包 / 即梦 / 可灵"
    ),
    lesson(5,
        title="第5课：把同行爆款「喂」给 AI 做复盘",
        tag="信息处理 · 竞品分析",
        svg=SVG_L5,
        intro="AI 能读长文、看视频文案、总结爆款逻辑。关键不是抄，是找规律：它为什么火？哪 3 点我能借鉴？哪些不适合我？",
        demo_prompt="下面是一条抖音爆款视频的文案。请帮我分析：① 这条视频为什么火？② 我可以借鉴哪 3 点？③ 哪些不适合我的账号？请用 bullet point 回答。\\n\\n【把爆款文案粘贴在这里】",
        pitfall="不要照抄同行，要结合自己的账号定位和旺仔的个人特色（爱辣、爱咖啡、深圳）。",
        tools="Kimi / 豆包"
    ),
    lesson(6,
        title="第6课：AI 字幕/配音/数字人，一人成军",
        tag="效率工具 · 剪辑加速",
        svg=SVG_L6,
        intro="剪映「图文成片」、豆包「音色克隆」、度加「AI 剪辑」能大幅降低剪辑门槛。新手先学 1-2 个就够了，不要贪多。",
        demo_prompt="（本节课以工具操作为主）把昨天拍好的视频导入剪映，点击「识别字幕」一键生成字幕；或打开豆包「音色克隆」，录制 30 秒自己的声音，让 AI 帮你读一段口播。",
        pitfall="AI 配音可能没情绪，关键片段建议自己配；数字人目前更像辅助，不要让它完全替代真人出镜。",
        tools="剪映 / 豆包 / 度加"
    ),
    lesson(7,
        title="第7课：把 6 天串成你的 AI 工作流",
        tag="SOP · 持续迭代",
        svg=SVG_L7,
        intro="模板化是提高效率的关键。把 prompt、选题、脚本、封面、复盘固定成文档，每次复用并优化，AI 才会越用越顺手。",
        demo_prompt="帮我整理一份「旺仔抖音 AI 工作 SOP」文档，包含：① 选题 prompt 模板 ② 脚本 prompt 模板 ③ 封面图 prompt 模板 ④ 复盘问题清单。每项用 checklist 形式输出，方便每次复用。",
        pitfall="模板不是死板的，每拍 10 条就要升级一次 prompt，否则观众会腻、数据会掉。",
        tools="腾讯文档 / 飞书文档"
    )
]

# 按行替换 content.js 中的 "ai": [ ... ] 区块
with open('content.js', 'r', encoding='utf-8') as f:
    lines = f.readlines()

start_idx = next(i for i, l in enumerate(lines) if l.strip() == '"ai": [')
end_idx = next(i for i in range(start_idx + 1, len(lines)) if re.match(r'  "[a-z_]+": \[', lines[i]))

new_json_lines = json.dumps(CONTENT_AI, ensure_ascii=False, indent=2).split('\n')
new_json_lines[0] = '  "ai": ['
new_json_lines[-1] = '],'
new_json_lines.append('\n')  # 保留与下一个顶层 key 之间的空行

new_lines = lines[:start_idx] + [l + '\n' if not l.endswith('\n') else l for l in new_json_lines] + lines[end_idx:]

with open('content.js', 'w', encoding='utf-8') as f:
    f.writelines(new_lines)

print('CONTENT.ai 已重写，共', len(CONTENT_AI), '课')
print('第一课标题:', CONTENT_AI[0]['title'])
print('最后课标题:', CONTENT_AI[-1]['title'])
