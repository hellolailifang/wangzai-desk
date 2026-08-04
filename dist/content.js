/* =========================================================
   旺仔的工作台 · 各模块"每日内容"数据
   每条目结构：{ title, tag, blocks:[ {h, body} ] }
   body 支持 HTML（<p> <ul><li> <div class="ph"> 等）
   英语/旅行为英文；其余为中文。内容按"使用天数"选取，每日更新。
   ========================================================= */
const CONTENT = {
  "english": [
    {
      "title": "Lesson 1 · 机场出发",
      "tag": "Lv.1 入门 · 旅行生存 · 60min",
      "blocks": [
        {
          "h": "📱 主动练起来（口语 + 听力 + 词汇）",
          "body": "<p>① <b>主动口语</b>：用「HelloTalk / Tandem」找母语者每天 5 分钟互练；本课跟读 3 句并录音自查；② <b>主动听力</b>：每天 10 分钟播客「ESL Pod / The English We Speak」并跟读；本课 10 句听力训练；③ <b>今日 12-15 词</b>：用下方单词卡盖住中文自测；④ 巩固：App「多邻国 Duolingo」每日 10 分钟；⑤ 不会的句型截图问 AI 立刻拆解。</p>"
        },
        {
          "h": "语法点睛 Grammar (10min)",
          "body": "<p><b>be 动词</b>：I <b>am</b> / He/She/It <b>is</b> / You/We/They <b>are</b>。<br>国籍形容词：Chinese, Japanese, American, British。别说 \"I am China\"，要说 \"I am <b>from</b> China\"。</p>"
        },
        {
          "h": "今日任务 Task (10min)",
          "body": "<p>写 3 句自我介绍并朗读录音：①名字 ②来自 ③此行目的。完成后可反复朗读练习。</p>"
        }
      ]
    },
    {
      "title": "Lesson 2 · 入住酒店",
      "tag": "Lv.1 入门 · 旅行生存 · 60min",
      "blocks": [
        {
          "h": "📱 主动练起来（口语 + 听力 + 词汇）",
          "body": "<p>① <b>主动口语</b>：用「HelloTalk / Tandem」找母语者每天 5 分钟互练；本课跟读 3 句并录音自查；② <b>主动听力</b>：每天 10 分钟播客「ESL Pod / The English We Speak」并跟读；本课 10 句听力训练；③ <b>今日 12-15 词</b>：用下方单词卡盖住中文自测；④ 巩固：App「多邻国 Duolingo」每日 10 分钟；⑤ 不会的句型截图问 AI 立刻拆解。</p>"
        },
        {
          "h": "语法点睛 Grammar (10min)",
          "body": "<p><b>Have / has</b> 表示\"有\"：I <b>have</b> a reservation. / She <b>has</b> a key card. 问句把 do/does 提前：Do you have...?</p>"
        },
        {
          "h": "今日任务 Task (10min)",
          "body": "<p>模拟前台对话，分别扮演前台与你，各说 4 句。用上 reservation / check in / breakfast。</p>"
        }
      ]
    },
    {
      "title": "Lesson 3 · 餐厅点餐",
      "tag": "Lv.1 入门 · 旅行生存 · 60min",
      "blocks": [
        {
          "h": "📱 主动练起来（口语 + 听力 + 词汇）",
          "body": "<p>① <b>主动口语</b>：用「HelloTalk / Tandem」找母语者每天 5 分钟互练；本课跟读 3 句并录音自查；② <b>主动听力</b>：每天 10 分钟播客「ESL Pod / The English We Speak」并跟读；本课 10 句听力训练；③ <b>今日 12-15 词</b>：用下方单词卡盖住中文自测；④ 巩固：App「多邻国 Duolingo」每日 10 分钟；⑤ 不会的句型截图问 AI 立刻拆解。</p>"
        },
        {
          "h": "语法点睛 Grammar (10min)",
          "body": "<p><b>可数 / 不可数名词</b>：water（不可数）用 a glass of water；steak（可数）用 a steak。I would like = 我想要（更礼貌）。</p>"
        },
        {
          "h": "今日任务 Task (10min)",
          "body": "<p>用英文写一段\"完整点餐\"：入座→看菜单→问推荐→点主菜与饮料→要账单。不少于 6 句。</p>"
        }
      ]
    },
    {
      "title": "Lesson 4 · 问路与交通",
      "tag": "Lv.1 入门 · 旅行生存 · 60min",
      "blocks": [
        {
          "h": "📱 主动练起来（口语 + 听力 + 词汇）",
          "body": "<p>① <b>主动口语</b>：用「HelloTalk / Tandem」找母语者每天 5 分钟互练；本课跟读 3 句并录音自查；② <b>主动听力</b>：每天 10 分钟播客「ESL Pod / The English We Speak」并跟读；本课 10 句听力训练；③ <b>今日 12-15 词</b>：用下方单词卡盖住中文自测；④ 巩固：App「多邻国 Duolingo」每日 10 分钟；⑤ 不会的句型截图问 AI 立刻拆解。</p>"
        },
        {
          "h": "语法点睛 Grammar (10min)",
          "body": "<p><b>祈使句</b>表指令：Go straight. Turn left. 回答距离用 It is + 时间/距离：It is five minutes away.</p>"
        },
        {
          "h": "今日任务 Task (10min)",
          "body": "<p>画一张简单地图，并用英文写出从\"酒店\"到\"火车站\"的 4 步指引。</p>"
        }
      ]
    },
    {
      "title": "Lesson 5 · 购物与砍价",
      "tag": "Lv.1 入门 · 旅行生存 · 60min",
      "blocks": [
        {
          "h": "📱 主动练起来（口语 + 听力 + 词汇）",
          "body": "<p>① <b>主动口语</b>：用「HelloTalk / Tandem」找母语者每天 5 分钟互练；本课跟读 3 句并录音自查；② <b>主动听力</b>：每天 10 分钟播客「ESL Pod / The English We Speak」并跟读；本课 10 句听力训练；③ <b>今日 12-15 词</b>：用下方单词卡盖住中文自测；④ 巩固：App「多邻国 Duolingo」每日 10 分钟；⑤ 不会的句型截图问 AI 立刻拆解。</p>"
        },
        {
          "h": "语法点睛 Grammar (10min)",
          "body": "<p><b>比较级</b>：cheap → cheaper（更便宜），expensive → more expensive。Can you...? 是礼貌请求句式。</p>"
        },
        {
          "h": "今日任务 Task (10min)",
          "body": "<p>模拟购物：问价→嫌贵→要折扣→成交，全程英文，至少 5 个来回。</p>"
        }
      ]
    },
    {
      "title": "Lesson 6 · 紧急求助",
      "tag": "Lv.1 入门 · 旅行生存 · 60min",
      "blocks": [
        {
          "h": "📱 主动练起来（口语 + 听力 + 词汇）",
          "body": "<p>① <b>主动口语</b>：用「HelloTalk / Tandem」找母语者每天 5 分钟互练；本课跟读 3 句并录音自查；② <b>主动听力</b>：每天 10 分钟播客「ESL Pod / The English We Speak」并跟读；本课 10 句听力训练；③ <b>今日 12-15 词</b>：用下方单词卡盖住中文自测；④ 巩固：App「多邻国 Duolingo」每日 10 分钟；⑤ 不会的句型截图问 AI 立刻拆解。</p>"
        },
        {
          "h": "语法点睛 Grammar (10min)",
          "body": "<p><b>祈使句求助</b>：Help me. / Call the police. / Stay calm. 用动词原形开头，简洁有力。</p>"
        },
        {
          "h": "今日任务 Task (10min)",
          "body": "<p>背熟 5 句救命英文并写下来：迷路、生病、被盗、报警、找大使馆。</p>"
        }
      ]
    },
    {
      "title": "Lesson 7 · 旅行小对话综合",
      "tag": "Lv.1 入门 · 复习 · 60min",
      "blocks": [
        {
          "h": "📱 主动练起来（口语 + 听力 + 词汇）",
          "body": "<p>① <b>主动口语</b>：用「HelloTalk / Tandem」找母语者每天 5 分钟互练；本课跟读 3 句并录音自查；② <b>主动听力</b>：每天 10 分钟播客「ESL Pod / The English We Speak」并跟读；本课 10 句听力训练；③ <b>今日 12-15 词</b>：用下方单词卡盖住中文自测；④ 巩固：App「多邻国 Duolingo」每日 10 分钟；⑤ 不会的句型截图问 AI 立刻拆解。</p>"
        },
        {
          "h": "语法点睛 Grammar (10min)",
          "body": "<p>复习：be 动词、have/has、祈使句、比较级。这四类是旅行英语的骨架。</p>"
        },
        {
          "h": "今日任务 Task (10min)",
          "body": "<p>用语音录一段 1 分钟\"我的旅行 day 1\"英文日记，包含 3 个本课词汇。</p>"
        }
      ]
    },
    {
      "title": "Lesson 8 · 电话与预约",
      "tag": "Lv.2 基础 · 职场+旅行 · 60min",
      "blocks": [
        {
          "h": "📱 主动练起来（口语 + 听力 + 词汇）",
          "body": "<p>① <b>主动口语</b>：用「HelloTalk / Tandem」找母语者每天 5 分钟互练；本课跟读 3 句并录音自查；② <b>主动听力</b>：每天 10 分钟播客「ESL Pod / The English We Speak」并跟读；本课 10 句听力训练；③ <b>今日 12-15 词</b>：用下方单词卡盖住中文自测；④ 巩固：App「多邻国 Duolingo」每日 10 分钟；⑤ 不会的句型截图问 AI 立刻拆解。</p>"
        },
        {
          "h": "语法点睛 Grammar (10min)",
          "body": "<p><b>电话专用语</b>：This is...（我是），not \"I am\". Would like to...（想做），比 want 更正式礼貌。</p>"
        },
        {
          "h": "今日任务 Task (10min)",
          "body": "<p>写一段电话预约脚本（开场→说明目的→确认时间→道谢），至少 6 句。</p>"
        }
      ]
    },
    {
      "title": "Lesson 9 · 商务邮件基础",
      "tag": "Lv.2 基础 · 职场 · 60min",
      "blocks": [
        {
          "h": "📱 主动练起来（口语 + 听力 + 词汇）",
          "body": "<p>① <b>主动口语</b>：用「HelloTalk / Tandem」找母语者每天 5 分钟互练；本课跟读 3 句并录音自查；② <b>主动听力</b>：每天 10 分钟播客「ESL Pod / The English We Speak」并跟读；本课 10 句听力训练；③ <b>今日 12-15 词</b>：用下方单词卡盖住中文自测；④ 巩固：App「多邻国 Duolingo」每日 10 分钟；⑤ 不会的句型截图问 AI 立刻拆解。</p>"
        },
        {
          "h": "语法点睛 Grammar (10min)",
          "body": "<p><b>邮件礼貌三件套</b>：I am writing to...（我写此信是为了）；Please find...（请查收）；Kindly...（劳烦）。避免缩写 I am→I'm 在正式邮件中。</p>"
        },
        {
          "h": "今日任务 Task (10min)",
          "body": "<p>写一封英文邮件：向客户确认会议时间并附上议程，使用上述三件套。</p>"
        }
      ]
    },
    {
      "title": "Lesson 10 · 会议与自我介绍",
      "tag": "Lv.2 基础 · 职场 · 60min",
      "blocks": [
        {
          "h": "📱 主动练起来（口语 + 听力 + 词汇）",
          "body": "<p>① <b>主动口语</b>：用「HelloTalk / Tandem」找母语者每天 5 分钟互练；本课跟读 3 句并录音自查；② <b>主动听力</b>：每天 10 分钟播客「ESL Pod / The English We Speak」并跟读；本课 10 句听力训练；③ <b>今日 12-15 词</b>：用下方单词卡盖住中文自测；④ 巩固：App「多邻国 Duolingo」每日 10 分钟；⑤ 不会的句型截图问 AI 立刻拆解。</p>"
        },
        {
          "h": "语法点睛 Grammar (10min)",
          "body": "<p><b>现在时表职责</b>：I <b>handle</b> marketing. / I <b>am in charge of</b> sales. 用一般现在时描述当前职责。</p>"
        },
        {
          "h": "今日任务 Task (10min)",
          "body": "<p>写并背诵一段 1 分钟英文自我介绍，含姓名、部门、职责、一句合作意愿。</p>"
        }
      ]
    },
    {
      "title": "Lesson 11 · 商务宴请",
      "tag": "Lv.2 基础 · 职场+旅行 · 60min",
      "blocks": [
        {
          "h": "📱 主动练起来（口语 + 听力 + 词汇）",
          "body": "<p>① <b>主动口语</b>：用「HelloTalk / Tandem」找母语者每天 5 分钟互练；本课跟读 3 句并录音自查；② <b>主动听力</b>：每天 10 分钟播客「ESL Pod / The English We Speak」并跟读；本课 10 句听力训练；③ <b>今日 12-15 词</b>：用下方单词卡盖住中文自测；④ 巩固：App「多邻国 Duolingo」每日 10 分钟；⑤ 不会的句型截图问 AI 立刻拆解。</p>"
        },
        {
          "h": "语法点睛 Grammar (10min)",
          "body": "<p><b>招待客套话</b>：Please help yourself.（请随意）；I look forward to...（我期待）。Toast 作动词\"祝酒\"。</p>"
        },
        {
          "h": "今日任务 Task (10min)",
          "body": "<p>写一段英文\"宴请开场白\"：欢迎→介绍特色→敬酒→表达合作期待，6 句左右。</p>"
        }
      ]
    },
    {
      "title": "Lesson 12 · 差旅与报销",
      "tag": "Lv.2 基础 · 职场 · 60min",
      "blocks": [
        {
          "h": "📱 主动练起来（口语 + 听力 + 词汇）",
          "body": "<p>① <b>主动口语</b>：用「HelloTalk / Tandem」找母语者每天 5 分钟互练；本课跟读 3 句并录音自查；② <b>主动听力</b>：每天 10 分钟播客「ESL Pod / The English We Speak」并跟读；本课 10 句听力训练；③ <b>今日 12-15 词</b>：用下方单词卡盖住中文自测；④ 巩固：App「多邻国 Duolingo」每日 10 分钟；⑤ 不会的句型截图问 AI 立刻拆解。</p>"
        },
        {
          "h": "语法点睛 Grammar (10min)",
          "body": "<p><b>would like to + 动词</b>：I would like to submit...（我想提交）。表达工作诉求时既清楚又礼貌。</p>"
        },
        {
          "h": "今日任务 Task (10min)",
          "body": "<p>用英语列一份差旅报销清单（3 类费用 + 金额），并写一句提交说明。</p>"
        }
      ]
    },
    {
      "title": "Lesson 13 · 表达观点与同意",
      "tag": "Lv.2 基础 · 职场 · 60min",
      "blocks": [
        {
          "h": "📱 主动练起来（口语 + 听力 + 词汇）",
          "body": "<p>① <b>主动口语</b>：用「HelloTalk / Tandem」找母语者每天 5 分钟互练；本课跟读 3 句并录音自查；② <b>主动听力</b>：每天 10 分钟播客「ESL Pod / The English We Speak」并跟读；本课 10 句听力训练；③ <b>今日 12-15 词</b>：用下方单词卡盖住中文自测；④ 巩固：App「多邻国 Duolingo」每日 10 分钟；⑤ 不会的句型截图问 AI 立刻拆解。</p>"
        },
        {
          "h": "语法点睛 Grammar (10min)",
          "body": "<p><b>委婉表达异议</b>：I see it differently. / Perhaps... is better. 比直接说 \"You are wrong\" 更职业。</p>"
        },
        {
          "h": "今日任务 Task (10min)",
          "body": "<p>就\"项目是否提前\"写 4 句英文：你的观点 + 一个替代建议 + 让步。</p>"
        }
      ]
    },
    {
      "title": "Lesson 14 · 职场基础复习",
      "tag": "Lv.2 基础 · 复习 · 60min",
      "blocks": [
        {
          "h": "📱 主动练起来（口语 + 听力 + 词汇）",
          "body": "<p>① <b>主动口语</b>：用「HelloTalk / Tandem」找母语者每天 5 分钟互练；本课跟读 3 句并录音自查；② <b>主动听力</b>：每天 10 分钟播客「ESL Pod / The English We Speak」并跟读；本课 10 句听力训练；③ <b>今日 12-15 词</b>：用下方单词卡盖住中文自测；④ 巩固：App「多邻国 Duolingo」每日 10 分钟；⑤ 不会的句型截图问 AI 立刻拆解。</p>"
        },
        {
          "h": "本周句型总览 (15min)",
          "body": "<ul><li>This is Wang.（电话自称）</li><li>I am writing to...（邮件目的）</li><li>I am in charge of...（职责）</li><li>would like to...（礼貌诉求）</li><li>I see it differently.（委婉异议）</li></ul>"
        },
        {
          "h": "语法点睛 Grammar (10min)",
          "body": "<p>复习：电话自称、邮件三件套、一般现在时职责、would like to、委婉异议。这是职场英语地基。</p>"
        },
        {
          "h": "今日任务 Task (10min)",
          "body": "<p>录一段 2 分钟英文\"周会发言\"：汇报进展→提一点建议→确认下一步。</p>"
        }
      ]
    },
    {
      "title": "Lesson 15 · 商务谈判",
      "tag": "Lv.3 进阶 · 职场 · 60min",
      "blocks": [
        {
          "h": "📱 主动练起来（口语 + 听力 + 词汇）",
          "body": "<p>① <b>主动口语</b>：用「HelloTalk / Tandem」找母语者每天 5 分钟互练；本课跟读 3 句并录音自查；② <b>主动听力</b>：每天 10 分钟播客「ESL Pod / The English We Speak」并跟读；本课 10 句听力训练；③ <b>今日 12-15 词</b>：用下方单词卡盖住中文自测；④ 巩固：App「多邻国 Duolingo」每日 10 分钟；⑤ 不会的句型截图问 AI 立刻拆解。</p>"
        },
        {
          "h": "语法点睛 Grammar (10min)",
          "body": "<p><b>条件句 If</b>：If you order more, I can lower the price. 用 if 引出交换条件，是谈判核心结构。</p>"
        },
        {
          "h": "今日任务 Task (10min)",
          "body": "<p>写一段英文还价对话（4 句）：指出预算不足→要求折扣→给出长期合作诱饵→成交。</p>"
        }
      ]
    },
    {
      "title": "Lesson 16 · 英文演示",
      "tag": "Lv.3 进阶 · 职场 · 60min",
      "blocks": [
        {
          "h": "📱 主动练起来（口语 + 听力 + 词汇）",
          "body": "<p>① <b>主动口语</b>：用「HelloTalk / Tandem」找母语者每天 5 分钟互练；本课跟读 3 句并录音自查；② <b>主动听力</b>：每天 10 分钟播客「ESL Pod / The English We Speak」并跟读；本课 10 句听力训练；③ <b>今日 12-15 词</b>：用下方单词卡盖住中文自测；④ 巩固：App「多邻国 Duolingo」每日 10 分钟；⑤ 不会的句型截图问 AI 立刻拆解。</p>"
        },
        {
          "h": "语法点睛 Grammar (10min)",
          "body": "<p><b>连接词</b>：First / Second / Finally 让结构清晰；As the chart shows... 用 as 引证。演示靠逻辑词撑起骨架。</p>"
        },
        {
          "h": "今日任务 Task (10min)",
          "body": "<p>写一段 1.5 分钟英文演示提纲：开场→3 要点→总结→邀请提问。</p>"
        }
      ]
    },
    {
      "title": "Lesson 17 · 电话会议",
      "tag": "Lv.3 进阶 · 职场 · 60min",
      "blocks": [
        {
          "h": "📱 主动练起来（口语 + 听力 + 词汇）",
          "body": "<p>① <b>主动口语</b>：用「HelloTalk / Tandem」找母语者每天 5 分钟互练；本课跟读 3 句并录音自查；② <b>主动听力</b>：每天 10 分钟播客「ESL Pod / The English We Speak」并跟读；本课 10 句听力训练；③ <b>今日 12-15 词</b>：用下方单词卡盖住中文自测；④ 巩固：App「多邻国 Duolingo」每日 10 分钟；⑤ 不会的句型截图问 AI 立刻拆解。</p>"
        },
        {
          "h": "语法点睛 Grammar (10min)",
          "body": "<p><b>被动与将来</b>：The report <b>was</b> done. / I <b>will send</b> the minutes. 会议中多用被动表客观、will 表承诺。</p>"
        },
        {
          "h": "今日任务 Task (10min)",
          "body": "<p>写一段英文会议纪录（3 条 action items，含负责人与时限）。</p>"
        }
      ]
    },
    {
      "title": "Lesson 18 · 客户接待",
      "tag": "Lv.3 进阶 · 职场+旅行 · 60min",
      "blocks": [
        {
          "h": "📱 主动练起来（口语 + 听力 + 词汇）",
          "body": "<p>① <b>主动口语</b>：用「HelloTalk / Tandem」找母语者每天 5 分钟互练；本课跟读 3 句并录音自查；② <b>主动听力</b>：每天 10 分钟播客「ESL Pod / The English We Speak」并跟读；本课 10 句听力训练；③ <b>今日 12-15 词</b>：用下方单词卡盖住中文自测；④ 巩固：App「多邻国 Duolingo」每日 10 分钟；⑤ 不会的句型截图问 AI 立刻拆解。</p>"
        },
        {
          "h": "语法点睛 Grammar (10min)",
          "body": "<p><b>情态动词关心</b>：You must be tired.（你一定累了）；We arranged...（我们已安排）。must be 表合理推测。</p>"
        },
        {
          "h": "今日任务 Task (10min)",
          "body": "<p>写一段英文接机+安排行程的对话（4 句），含问候、接送、住宿、次日安排。</p>"
        }
      ]
    },
    {
      "title": "Lesson 19 · 投诉与处理",
      "tag": "Lv.3 进阶 · 职场 · 60min",
      "blocks": [
        {
          "h": "📱 主动练起来（口语 + 听力 + 词汇）",
          "body": "<p>① <b>主动口语</b>：用「HelloTalk / Tandem」找母语者每天 5 分钟互练；本课跟读 3 句并录音自查；② <b>主动听力</b>：每天 10 分钟播客「ESL Pod / The English We Speak」并跟读；本课 10 句听力训练；③ <b>今日 12-15 词</b>：用下方单词卡盖住中文自测；④ 巩固：App「多邻国 Duolingo」每日 10 分钟；⑤ 不会的句型截图问 AI 立刻拆解。</p>"
        },
        {
          "h": "语法点睛 Grammar (10min)",
          "body": "<p><b>道歉结构</b>：We apologize for + 名词。承诺用 will：We will resolve it. 先认错、再行动、后补偿。</p>"
        },
        {
          "h": "今日任务 Task (10min)",
          "body": "<p>写一段英文\"处理客户投诉\"回复（5 句）：致歉→说明原因→补救措施→补偿→感谢理解。</p>"
        }
      ]
    },
    {
      "title": "Lesson 20 · 英文演讲",
      "tag": "Lv.3 进阶 · 职场 · 60min",
      "blocks": [
        {
          "h": "📱 主动练起来（口语 + 听力 + 词汇）",
          "body": "<p>① <b>主动口语</b>：用「HelloTalk / Tandem」找母语者每天 5 分钟互练；本课跟读 3 句并录音自查；② <b>主动听力</b>：每天 10 分钟播客「ESL Pod / The English We Speak」并跟读；本课 10 句听力训练；③ <b>今日 12-15 词</b>：用下方单词卡盖住中文自测；④ 巩固：App「多邻国 Duolingo」每日 10 分钟；⑤ 不会的句型截图问 AI 立刻拆解。</p>"
        },
        {
          "h": "语法点睛 Grammar (10min)",
          "body": "<p><b>激励性排比</b>：If we... we will... 条件+将来，制造希望感。短句 + 强动词（believe / achieve）最有力量。</p>"
        },
        {
          "h": "今日任务 Task (10min)",
          "body": "<p>写一段 1 分钟英文\"团队动员\"演讲，含愿景、机遇、号召行动，至少 6 句。</p>"
        }
      ]
    },
    {
      "title": "Lesson 21 · 综合实战",
      "tag": "Lv.3 进阶 · 毕业演练 · 60min",
      "blocks": [
        {
          "h": "📱 主动练起来（口语 + 听力 + 词汇）",
          "body": "<p>① <b>主动口语</b>：用「HelloTalk / Tandem」找母语者每天 5 分钟互练；本课跟读 3 句并录音自查；② <b>主动听力</b>：每天 10 分钟播客「ESL Pod / The English We Speak」并跟读；本课 10 句听力训练；③ <b>今日 12-15 词</b>：用下方单词卡盖住中文自测；④ 巩固：App「多邻国 Duolingo」每日 10 分钟；⑤ 不会的句型截图问 AI 立刻拆解。</p>"
        },
        {
          "h": "语法点睛 Grammar (10min)",
          "body": "<p>把三阶段句型混用：would like to / if 条件句 / will 承诺 / must be 推测。流利来自\"场景—句型\"的条件反射。</p>"
        },
        {
          "h": "今日任务 Task (10min)",
          "body": "<p>录一段 3 分钟英文\"客户访华全程\"独白，覆盖接机到送别，作为阶段成果存档。</p>"
        }
      ]
    }
  ],
  "ai": [
  {
    "title": "什么是人工智能：从规则到学习",
    "tag": "第1天 · AI 入门",
    "blocks": [
      {
        "h": "💡 今日学习提示",
        "body": "<p>第 1 天先建立「全局地图」：不用急着懂算法，先把 AI / 机器学习 / 深度学习 三者的包含关系记牢。后面 6 天都是在这张地图上往下钻。</p>"
      },
      {
        "h": "🖼️ 一图看懂 AI 是什么",
        "body": "<svg viewBox=\"0 0 600 230\" width=\"100%\" style=\"max-width:560px;height:auto;display:block;margin:10px auto;border-radius:12px;background:#f4fbff;\" xmlns=\"http://www.w3.org/2000/svg\"><defs><marker id=\"ah\" markerWidth=\"10\" markerHeight=\"10\" refX=\"7\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L8,3 L0,6 Z\" fill=\"#1b6ca8\"/></marker><marker id=\"ag\" markerWidth=\"10\" markerHeight=\"10\" refX=\"7\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L8,3 L0,6 Z\" fill=\"#e76f51\"/></marker></defs><rect x=\"14\" y=\"14\" width=\"572\" height=\"202\" rx=\"14\" fill=\"#eaf6fb\" stroke=\"#48cae4\" stroke-width=\"2\"/><text x=\"300\" y=\"46\" text-anchor=\"middle\" font-size=\"18\" font-weight=\"700\" fill=\"#0a3d62\">人工智能 Artificial Intelligence</text><rect x=\"70\" y=\"62\" width=\"430\" height=\"118\" rx=\"12\" fill=\"#d6effa\" stroke=\"#1b6ca8\" stroke-width=\"2\"/><text x=\"285\" y=\"94\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"700\" fill=\"#0a3d62\">机器学习 Machine Learning</text><rect x=\"140\" y=\"110\" width=\"290\" height=\"52\" rx=\"10\" fill=\"#bde0fe\" stroke=\"#0a3d62\" stroke-width=\"2\"/><text x=\"285\" y=\"142\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"#0a3d62\">深度学习 Deep Learning</text><rect x=\"508\" y=\"150\" width=\"80\" height=\"48\" rx=\"10\" fill=\"#fff\" stroke=\"#adb5bd\" stroke-width=\"2\"/><text x=\"548\" y=\"178\" text-anchor=\"middle\" font-size=\"12\" fill=\"#495057\">规则系统</text><text x=\"300\" y=\"206\" text-anchor=\"middle\" font-size=\"12\" fill=\"#1b6ca8\">AI 是大帽子；ML 让机器从数据学规律；DL 用神经网络学更复杂模式</text></svg><p>最外层是<b>人工智能（AI）</b>——让机器表现出「像人一样智能」行为的大目标；中间层<b>机器学习（ML）</b>是实现 AI 的主流路径：不写死规则，而是让机器从数据里自己找规律；最内层<b>深度学习（DL）</b>是 ML 的一个分支，用「神经网络」去学特别复杂的模式（比如认图、听懂话）。</p>"
      },
      {
        "h": "📖 图文讲解：两条路线",
        "body": "<p>① <b>规则系统</b>（右上角灰框）：人把「如果…就…」一条条写死，比如早期垃圾邮件过滤器。好处是可解释，坏处是一碰到没写过的情形就傻了。</p><p>② <b>机器学习</b>：人不写规则，只给「大量例子」，机器自己归纳规律。今天你用的人脸解锁、短视频推荐，背后都是 ML。一句话记忆：<b>规则靠人写，学习靠数据喂。</b></p>"
      },
      {
        "h": "🏢 相关企业：商汤科技 & 百度",
        "body": "<p><b>商汤科技（SenseTime）</b>：国内计算机视觉龙头，把「看得懂图像」的 AI 用到手机、汽车、城市安防。它证明了中国公司能在感知智能这条赛道站到世界前列。</p><p><b>百度（Baidu）</b>：最早 All in AI 的国内大厂，自研「文心」大模型与飞桨深度学习框架，把 AI 能力做成云上工具，供中小企业直接调用。</p><p>👉 看点：一家擅长「视觉」，一家擅长「平台+大模型」，正好对应 AI 的两类打法。</p>"
      },
      {
        "h": "🛠️ 动手实践",
        "body": "<p>打开手机相册的「搜图」（按物体/地点搜照片），它就是视觉 AI。今天试着搜一个词（如「猫」「海边」），感受一下机器「看懂图」的能力，并想想它背后是规则还是学习。</p>"
      }
    ]
  },
  {
    "title": "机器学习是怎么「学」的",
    "tag": "第2天 · 机器学习",
    "blocks": [
      {
        "h": "💡 今日学习提示",
        "body": "<p>记住一句万能话：<b>机器学习 = 数据 + 模型 + 评估</b>。今天重点理解「为什么要用测试集」，这是新手最容易踩的坑。</p>"
      },
      {
        "h": "🖼️ 机器学习三步闭环",
        "body": "<svg viewBox=\"0 0 600 210\" width=\"100%\" style=\"max-width:560px;height:auto;display:block;margin:10px auto;border-radius:12px;background:#f4fbff;\" xmlns=\"http://www.w3.org/2000/svg\"><defs><marker id=\"ah\" markerWidth=\"10\" markerHeight=\"10\" refX=\"7\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L8,3 L0,6 Z\" fill=\"#1b6ca8\"/></marker><marker id=\"ag\" markerWidth=\"10\" markerHeight=\"10\" refX=\"7\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L8,3 L0,6 Z\" fill=\"#e76f51\"/></marker></defs><rect x=\"20\" y=\"80\" width=\"130\" height=\"56\" rx=\"12\" fill=\"#d6effa\" stroke=\"#1b6ca8\" stroke-width=\"2\"/><text x=\"85.0\" y=\"113.0\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"700\" fill=\"#0a3d62\">数据·清洗</text><line x1=\"150\" y1=\"108\" x2=\"200\" y2=\"108\" stroke=\"#1b6ca8\" stroke-width=\"3\" marker-end=\"url(#ah)\"/><rect x=\"200\" y=\"80\" width=\"150\" height=\"56\" rx=\"12\" fill=\"#bde0fe\" stroke=\"#0a3d62\" stroke-width=\"2\"/><text x=\"275.0\" y=\"113.0\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"700\" fill=\"#0a3d62\">训练模型</text><line x1=\"350\" y1=\"108\" x2=\"400\" y2=\"108\" stroke=\"#1b6ca8\" stroke-width=\"3\" marker-end=\"url(#ah)\"/><rect x=\"400\" y=\"80\" width=\"150\" height=\"56\" rx=\"12\" fill=\"#d6effa\" stroke=\"#1b6ca8\" stroke-width=\"2\"/><text x=\"475.0\" y=\"113.0\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"700\" fill=\"#0a3d62\">预测·推理</text><line x1=\"475\" y1=\"136\" x2=\"275\" y2=\"168\" stroke=\"#e76f51\" stroke-width=\"3\" marker-end=\"url(#ah)\"/><text x=\"275\" y=\"190\" text-anchor=\"middle\" font-size=\"12\" fill=\"#e76f51\">用测试集评估效果，不好就回头调模型</text><text x=\"300\" y=\"44\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"#0a3d62\">机器学习三步闭环：给数据 → 训模型 → 拿去用，再复盘</text></svg><p>把「数据」喂给算法，训出一个<b>模型</b>；模型对没见过的新数据做<b>预测</b>；再用<b>测试集</b>（训练时没用过的数据）评估准不准。不准就回头调，如此循环。</p>"
      },
      {
        "h": "📖 图文讲解：过拟合与泛化",
        "body": "<p>如果模型把<b>训练数据背得滚瓜烂熟</b>、但碰到新题就翻车，叫<b>过拟合</b>——就像死记硬背押题卷、真考试就废。所以我们一定要用「没见过的题」（测试集）来考它。</p><p>好模型的标准是<b>泛化</b>：在陌生数据上也稳。这跟人学习一模一样——能举一反三，才算真学会。</p>"
      },
      {
        "h": "🏢 相关企业：第四范式 & 华为",
        "body": "<p><b>第四范式（4Paradigm）</b>：主打「企业级机器学习平台」，把建模、训练、上线全流程打包，让银行、零售等传统企业也能用 AI 做风控、推荐，而不必养一支算法团队。</p><p><b>华为</b>：用「昇腾」AI 芯片 + 「盘古」大模型，走「算力+模型」双底座路线，重点服务工业、气象、政务等大宗场景。</p><p>👉 看点：一家卖「平台/方法论」，一家卖「算力+大模型」，是 ML 落地中国的两种关键供给。</p>"
      },
      {
        "h": "🛠️ 动手实践",
        "body": "<p>用 Excel 随便造 20 行「身高→体重」数据，画散点图加一条趋势线。你刚做的，就是最简单的「监督学习」——从例子里找出输入到输出的映射。</p>"
      }
    ]
  },
  {
    "title": "深度学习与神经网络",
    "tag": "第3天 · 深度学习",
    "blocks": [
      {
        "h": "💡 今日学习提示",
        "body": "<p>不用推导公式。今天只要建立直觉：<b>神经网络 = 很多层简单的计算叠加</b>，叠得越深，能表达的模式越复杂。</p>"
      },
      {
        "h": "🖼️ 神经网络长什么样",
        "body": "<svg viewBox=\"0 0 600 230\" width=\"100%\" style=\"max-width:560px;height:auto;display:block;margin:10px auto;border-radius:12px;background:#f4fbff;\" xmlns=\"http://www.w3.org/2000/svg\"><defs><marker id=\"ah\" markerWidth=\"10\" markerHeight=\"10\" refX=\"7\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L8,3 L0,6 Z\" fill=\"#1b6ca8\"/></marker><marker id=\"ag\" markerWidth=\"10\" markerHeight=\"10\" refX=\"7\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L8,3 L0,6 Z\" fill=\"#e76f51\"/></marker></defs><text x=\"300\" y=\"30\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"#0a3d62\">神经网络：一层层“神经元”把输入变成输出</text><line x1=\"80\" y1=\"70\" x2=\"230\" y2=\"50\" stroke=\"#90caf9\" stroke-width=\"1.5\"/><line x1=\"80\" y1=\"70\" x2=\"230\" y2=\"90\" stroke=\"#90caf9\" stroke-width=\"1.5\"/><line x1=\"80\" y1=\"70\" x2=\"230\" y2=\"130\" stroke=\"#90caf9\" stroke-width=\"1.5\"/><line x1=\"80\" y1=\"70\" x2=\"230\" y2=\"170\" stroke=\"#90caf9\" stroke-width=\"1.5\"/><line x1=\"80\" y1=\"110\" x2=\"230\" y2=\"50\" stroke=\"#90caf9\" stroke-width=\"1.5\"/><line x1=\"80\" y1=\"110\" x2=\"230\" y2=\"90\" stroke=\"#90caf9\" stroke-width=\"1.5\"/><line x1=\"80\" y1=\"110\" x2=\"230\" y2=\"130\" stroke=\"#90caf9\" stroke-width=\"1.5\"/><line x1=\"80\" y1=\"110\" x2=\"230\" y2=\"170\" stroke=\"#90caf9\" stroke-width=\"1.5\"/><line x1=\"80\" y1=\"150\" x2=\"230\" y2=\"50\" stroke=\"#90caf9\" stroke-width=\"1.5\"/><line x1=\"80\" y1=\"150\" x2=\"230\" y2=\"90\" stroke=\"#90caf9\" stroke-width=\"1.5\"/><line x1=\"80\" y1=\"150\" x2=\"230\" y2=\"130\" stroke=\"#90caf9\" stroke-width=\"1.5\"/><line x1=\"80\" y1=\"150\" x2=\"230\" y2=\"170\" stroke=\"#90caf9\" stroke-width=\"1.5\"/><line x1=\"230\" y1=\"50\" x2=\"380\" y2=\"50\" stroke=\"#90caf9\" stroke-width=\"1.5\"/><line x1=\"230\" y1=\"50\" x2=\"380\" y2=\"90\" stroke=\"#90caf9\" stroke-width=\"1.5\"/><line x1=\"230\" y1=\"50\" x2=\"380\" y2=\"130\" stroke=\"#90caf9\" stroke-width=\"1.5\"/><line x1=\"230\" y1=\"50\" x2=\"380\" y2=\"170\" stroke=\"#90caf9\" stroke-width=\"1.5\"/><line x1=\"230\" y1=\"90\" x2=\"380\" y2=\"50\" stroke=\"#90caf9\" stroke-width=\"1.5\"/><line x1=\"230\" y1=\"90\" x2=\"380\" y2=\"90\" stroke=\"#90caf9\" stroke-width=\"1.5\"/><line x1=\"230\" y1=\"90\" x2=\"380\" y2=\"130\" stroke=\"#90caf9\" stroke-width=\"1.5\"/><line x1=\"230\" y1=\"90\" x2=\"380\" y2=\"170\" stroke=\"#90caf9\" stroke-width=\"1.5\"/><line x1=\"230\" y1=\"130\" x2=\"380\" y2=\"50\" stroke=\"#90caf9\" stroke-width=\"1.5\"/><line x1=\"230\" y1=\"130\" x2=\"380\" y2=\"90\" stroke=\"#90caf9\" stroke-width=\"1.5\"/><line x1=\"230\" y1=\"130\" x2=\"380\" y2=\"130\" stroke=\"#90caf9\" stroke-width=\"1.5\"/><line x1=\"230\" y1=\"130\" x2=\"380\" y2=\"170\" stroke=\"#90caf9\" stroke-width=\"1.5\"/><line x1=\"230\" y1=\"170\" x2=\"380\" y2=\"50\" stroke=\"#90caf9\" stroke-width=\"1.5\"/><line x1=\"230\" y1=\"170\" x2=\"380\" y2=\"90\" stroke=\"#90caf9\" stroke-width=\"1.5\"/><line x1=\"230\" y1=\"170\" x2=\"380\" y2=\"130\" stroke=\"#90caf9\" stroke-width=\"1.5\"/><line x1=\"230\" y1=\"170\" x2=\"380\" y2=\"170\" stroke=\"#90caf9\" stroke-width=\"1.5\"/><line x1=\"380\" y1=\"50\" x2=\"530\" y2=\"80\" stroke=\"#90caf9\" stroke-width=\"1.5\"/><line x1=\"380\" y1=\"50\" x2=\"530\" y2=\"140\" stroke=\"#90caf9\" stroke-width=\"1.5\"/><line x1=\"380\" y1=\"90\" x2=\"530\" y2=\"80\" stroke=\"#90caf9\" stroke-width=\"1.5\"/><line x1=\"380\" y1=\"90\" x2=\"530\" y2=\"140\" stroke=\"#90caf9\" stroke-width=\"1.5\"/><line x1=\"380\" y1=\"130\" x2=\"530\" y2=\"80\" stroke=\"#90caf9\" stroke-width=\"1.5\"/><line x1=\"380\" y1=\"130\" x2=\"530\" y2=\"140\" stroke=\"#90caf9\" stroke-width=\"1.5\"/><line x1=\"380\" y1=\"170\" x2=\"530\" y2=\"80\" stroke=\"#90caf9\" stroke-width=\"1.5\"/><line x1=\"380\" y1=\"170\" x2=\"530\" y2=\"140\" stroke=\"#90caf9\" stroke-width=\"1.5\"/><circle cx=\"80\" cy=\"70\" r=\"14\" fill=\"#bde0fe\" stroke=\"#0a3d62\" stroke-width=\"2\"/><circle cx=\"80\" cy=\"110\" r=\"14\" fill=\"#bde0fe\" stroke=\"#0a3d62\" stroke-width=\"2\"/><circle cx=\"80\" cy=\"150\" r=\"14\" fill=\"#bde0fe\" stroke=\"#0a3d62\" stroke-width=\"2\"/><circle cx=\"230\" cy=\"50\" r=\"14\" fill=\"#bde0fe\" stroke=\"#0a3d62\" stroke-width=\"2\"/><circle cx=\"230\" cy=\"90\" r=\"14\" fill=\"#bde0fe\" stroke=\"#0a3d62\" stroke-width=\"2\"/><circle cx=\"230\" cy=\"130\" r=\"14\" fill=\"#bde0fe\" stroke=\"#0a3d62\" stroke-width=\"2\"/><circle cx=\"230\" cy=\"170\" r=\"14\" fill=\"#bde0fe\" stroke=\"#0a3d62\" stroke-width=\"2\"/><circle cx=\"380\" cy=\"50\" r=\"14\" fill=\"#bde0fe\" stroke=\"#0a3d62\" stroke-width=\"2\"/><circle cx=\"380\" cy=\"90\" r=\"14\" fill=\"#bde0fe\" stroke=\"#0a3d62\" stroke-width=\"2\"/><circle cx=\"380\" cy=\"130\" r=\"14\" fill=\"#bde0fe\" stroke=\"#0a3d62\" stroke-width=\"2\"/><circle cx=\"380\" cy=\"170\" r=\"14\" fill=\"#bde0fe\" stroke=\"#0a3d62\" stroke-width=\"2\"/><circle cx=\"530\" cy=\"80\" r=\"14\" fill=\"#bde0fe\" stroke=\"#0a3d62\" stroke-width=\"2\"/><circle cx=\"530\" cy=\"140\" r=\"14\" fill=\"#bde0fe\" stroke=\"#0a3d62\" stroke-width=\"2\"/><text x=\"80\" y=\"200\" text-anchor=\"middle\" font-size=\"12\" fill=\"#495057\">输入层</text><text x=\"230\" y=\"200\" text-anchor=\"middle\" font-size=\"12\" fill=\"#495057\">隐藏层</text><text x=\"380\" y=\"200\" text-anchor=\"middle\" font-size=\"12\" fill=\"#495057\">隐藏层</text><text x=\"530\" y=\"200\" text-anchor=\"middle\" font-size=\"12\" fill=\"#495057\">输出层</text></svg><p>左边<b>输入层</b>接收原始信号（如一个像素、一个词）；中间<b>隐藏层</b>一层层抽取特征——浅层认边缘，中层认部件，深层认整体；右边<b>输出层</b>给出结论（是猫/不是猫）。层与层之间全连接，权重就是「该怎么组合」的答案。</p>"
      },
      {
        "h": "📖 图文讲解：为什么「深」有用",
        "body": "<p>单层网络表达能力有限；把多层叠起来，就能用简单变换组合出极复杂的函数。2012 年深度学习引爆图像识别，关键就是：<b>更深的网络 + 海量数据 + GPU 算力</b>三者凑齐。</p><p>代价是「黑箱」——我们知道它答得对，却难说清每一层到底在想什么。这正是可解释性研究要解决的。</p>"
      },
      {
        "h": "🏢 相关企业：英伟达 NVIDIA & 寒武纪",
        "body": "<p><b>英伟达（NVIDIA）</b>：GPU 是训练深度学习不可或缺的算力心脏，其 CUDA 生态几乎成了行业标配，是这一轮 AI 浪潮最大的「卖铲人」。</p><p><b>寒武纪（Cambricon）</b>：国产 AI 芯片代表，专攻云端/边缘的 AI 加速，是「算力自主」版图里的关键一环。</p><p>👉 看点：深度学习火不火，先看「卖铲子」的芯片厂——它们处在整条产业链的咽喉位置。</p>"
      },
      {
        "h": "🛠️ 动手实践",
        "body": "<p>在手机 App「Google 猜画小歌 / 你画我猜」里随便画个物体让 AI 猜。感受一下：它并不需要你画得多像，只要关键特征被网络捕捉到就能认出——这就是特征学习的妙处。</p>"
      }
    ]
  },
  {
    "title": "大语言模型 LLM 与 Transformer",
    "tag": "第4天 · 大模型",
    "blocks": [
      {
        "h": "💡 今日学习提示",
        "body": "<p>今天的关键词是 <b>Transformer / 注意力 / 预训练</b>。记住：ChatGPT 这类产品，本质是一个「被喂了全互联网文本、学会预测下一个词」的超大型神经网络。</p>"
      },
      {
        "h": "🖼️ 大模型怎么读文字",
        "body": "<svg viewBox=\"0 0 600 210\" width=\"100%\" style=\"max-width:560px;height:auto;display:block;margin:10px auto;border-radius:12px;background:#f4fbff;\" xmlns=\"http://www.w3.org/2000/svg\"><defs><marker id=\"ah\" markerWidth=\"10\" markerHeight=\"10\" refX=\"7\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L8,3 L0,6 Z\" fill=\"#1b6ca8\"/></marker><marker id=\"ag\" markerWidth=\"10\" markerHeight=\"10\" refX=\"7\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L8,3 L0,6 Z\" fill=\"#e76f51\"/></marker></defs><rect x=\"20\" y=\"80\" width=\"110\" height=\"56\" rx=\"12\" fill=\"#d6effa\" stroke=\"#1b6ca8\" stroke-width=\"2\"/><text x=\"75.0\" y=\"113.0\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"700\" fill=\"#0a3d62\">文本输入</text><line x1=\"130\" y1=\"108\" x2=\"175\" y2=\"108\" stroke=\"#1b6ca8\" stroke-width=\"3\" marker-end=\"url(#ah)\"/><rect x=\"175\" y=\"80\" width=\"120\" height=\"56\" rx=\"12\" fill=\"#bde0fe\" stroke=\"#0a3d62\" stroke-width=\"2\"/><text x=\"235.0\" y=\"113.0\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"700\" fill=\"#0a3d62\">Token·向量</text><line x1=\"295\" y1=\"108\" x2=\"340\" y2=\"108\" stroke=\"#1b6ca8\" stroke-width=\"3\" marker-end=\"url(#ah)\"/><rect x=\"340\" y=\"70\" width=\"130\" height=\"76\" rx=\"12\" fill=\"#ffd6a5\" stroke=\"#e76f51\" stroke-width=\"2\"/><text x=\"405.0\" y=\"113.0\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"#0a3d62\">Transformer</text><line x1=\"470\" y1=\"108\" x2=\"510\" y2=\"108\" stroke=\"#1b6ca8\" stroke-width=\"3\" marker-end=\"url(#ah)\"/><rect x=\"510\" y=\"80\" width=\"70\" height=\"56\" rx=\"12\" fill=\"#d6effa\" stroke=\"#1b6ca8\" stroke-width=\"2\"/><text x=\"545.0\" y=\"113.0\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"700\" fill=\"#0a3d62\">生成</text><text x=\"300\" y=\"44\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#0a3d62\">大模型先把文字切成 token，再用注意力“读懂”关系，逐字生成回答</text><text x=\"300\" y=\"190\" text-anchor=\"middle\" font-size=\"12\" fill=\"#1b6ca8\">训练分两步：海量文本“预训练”打底 + 任务“微调/对齐”定型</text></svg><p>文字先被切成 <b>Token</b>（词或字），变成数字向量（Embedding）；<b>Transformer 的自注意力机制</b>让每个词都能「看」上下文里相关的词；最后模型一个字一个字地<b>生成</b>回答。</p>"
      },
      {
        "h": "📖 图文讲解：预训练与微调",
        "body": "<p>① <b>预训练</b>：在海量文本上练「接话」的基本功，学到语法、常识、世界知识。② <b>微调 / 对齐</b>：再用人工标注的小数据，把模型调成「有用、诚实、安全」。</p><p>为什么大模型啥都能聊？因为它在预训练阶段「读」过了人类绝大部分公开文字，相当于一个读了无数本书的超级通才。它的局限也来自训练数据——没见过的，它就会「一本正经地编」。</p>"
      },
      {
        "h": "🏢 相关企业：OpenAI & 阿里通义",
        "body": "<p><b>OpenAI</b>：GPT 系列的缔造者，把 LLM 推向大众，定义了「对话式 AI」的产品形态，也带动了全球大模型军备竞赛。</p><p><b>阿里「通义千问（Qwen）」</b>：国内开源大模型的代表之一，把能力强、可私有部署的模型开放出来，降低了中小企业用大模型的门槛。</p><p>👉 看点：一家定义范式，一家推动「开源+自主可控」，分别代表闭源领跑与开放生态两种路线。</p>"
      },
      {
        "h": "🛠️ 动手实践",
        "body": "<p>让同一个大模型连续做三件事：①翻译一句话 ②把它改成诗 ③解释刚才的翻译为什么对。你会直观感受到「一个模型，多面能力」——这正是 LLM 的魅力。</p>"
      }
    ]
  },
  {
    "title": "生成式 AI 与多模态",
    "tag": "第5天 · 多模态",
    "blocks": [
      {
        "h": "💡 今日学习提示",
        "body": "<p>今天拓展「AI 能创作什么」。记住一个词：<b>多模态</b>——同一套 AI 能力，可以跨越文字、图像、声音、视频。</p>"
      },
      {
        "h": "🖼️ 一个中心，四种输出",
        "body": "<svg viewBox=\"0 0 600 230\" width=\"100%\" style=\"max-width:560px;height:auto;display:block;margin:10px auto;border-radius:12px;background:#f4fbff;\" xmlns=\"http://www.w3.org/2000/svg\"><defs><marker id=\"ah\" markerWidth=\"10\" markerHeight=\"10\" refX=\"7\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L8,3 L0,6 Z\" fill=\"#1b6ca8\"/></marker><marker id=\"ag\" markerWidth=\"10\" markerHeight=\"10\" refX=\"7\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L8,3 L0,6 Z\" fill=\"#e76f51\"/></marker></defs><circle cx=\"300\" cy=\"115\" r=\"52\" fill=\"#bde0fe\" stroke=\"#0a3d62\" stroke-width=\"2\"/><text x=\"300\" y=\"110\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#0a3d62\">生成式</text><text x=\"300\" y=\"128\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#0a3d62\">AI</text><line x1=\"352\" y1=\"100\" x2=\"420\" y2=\"70\" stroke=\"#1b6ca8\" stroke-width=\"3\" marker-end=\"url(#ah)\"/><rect x=\"420\" y=\"50\" width=\"150\" height=\"44\" rx=\"12\" fill=\"#d6effa\" stroke=\"#1b6ca8\" stroke-width=\"2\"/><text x=\"495.0\" y=\"77.0\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"700\" fill=\"#0a3d62\">文本 文章/代码/对话</text><line x1=\"352\" y1=\"130\" x2=\"420\" y2=\"150\" stroke=\"#1b6ca8\" stroke-width=\"3\" marker-end=\"url(#ah)\"/><rect x=\"420\" y=\"130\" width=\"150\" height=\"44\" rx=\"12\" fill=\"#d6effa\" stroke=\"#1b6ca8\" stroke-width=\"2\"/><text x=\"495.0\" y=\"157.0\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"700\" fill=\"#0a3d62\">图像 绘画/设计</text><line x1=\"248\" y1=\"100\" x2=\"180\" y2=\"70\" stroke=\"#1b6ca8\" stroke-width=\"3\" marker-end=\"url(#ah)\"/><rect x=\"30\" y=\"50\" width=\"150\" height=\"44\" rx=\"12\" fill=\"#d6effa\" stroke=\"#1b6ca8\" stroke-width=\"2\"/><text x=\"105.0\" y=\"77.0\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"700\" fill=\"#0a3d62\">音频 语音/音乐</text><line x1=\"248\" y1=\"130\" x2=\"180\" y2=\"150\" stroke=\"#1b6ca8\" stroke-width=\"3\" marker-end=\"url(#ah)\"/><rect x=\"30\" y=\"130\" width=\"150\" height=\"44\" rx=\"12\" fill=\"#d6effa\" stroke=\"#1b6ca8\" stroke-width=\"2\"/><text x=\"105.0\" y=\"157.0\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"700\" fill=\"#0a3d62\">视频 生成/剪辑</text><text x=\"300\" y=\"206\" text-anchor=\"middle\" font-size=\"12\" fill=\"#1b6ca8\">同一个大模型，能跨文字、图像、声音、视频多种模态“创作”</text></svg><p>生成式 AI 的核心是「根据指令生成新内容」。过去一个模型只做一件事，现在的大模型能<b>跨模态</b>：你用文字下指令，它产出图、文、音、视频。</p>"
      },
      {
        "h": "📖 图文讲解：扩散模型与跨模态",
        "body": "<p>文生图大多靠<b>扩散模型</b>：从一团噪声开始，一步步「去噪」逼近你描述的画面。跨模态的诀窍是「对齐」——把文字、图像塞进同一个语义空间，于是「猫」这个词和猫的图片能互相找到。</p><p>落到产品上就是：一句话出海报、一段描述出短片。创作的门槛被砍到历史最低。</p>"
      },
      {
        "h": "🏢 相关企业：字节跳动 & 微软",
        "body": "<p><b>字节跳动</b>：旗下「豆包」对话、「即梦」文生图/视频，把生成式 AI 直接嵌进抖音系的亿级流量产品，验证「AI 原生」内容创作的可行性。</p><p><b>微软（Microsoft）</b>：把 Copilot 植入 Office / Windows，让 AI 帮你写文档、做 PPT、汇总邮件，是「AI 融入工作流」的全球样板。</p><p>👉 看点：一家把 AI 用在「内容消费」，一家用在「办公生产」，覆盖生成式 AI 的两大落地战场。</p>"
      },
      {
        "h": "🛠️ 动手实践",
        "body": "<p>用任意文生图工具，输入同一句提示「赛博朋克风格的深圳夜晚」生成一张图；再试着加/减一个词（如「下雨」「霓虹」），观察画面如何因指令变化——这就是多模态创作的「可控性」。</p>"
      }
    ]
  },
  {
    "title": "提示词工程：怎么把 AI 用好",
    "tag": "第6天 · 提示词",
    "blocks": [
      {
        "h": "💡 今日学习提示",
        "body": "<p>今天学「和 AI 对话的手艺」。记住公式：<b>好答案 = 清晰角色 + 明确任务 + 必要约束 + 参考示例</b>。</p>"
      },
      {
        "h": "🖼️ 同样的 AI，不同的问法",
        "body": "<svg viewBox=\"0 0 600 210\" width=\"100%\" style=\"max-width:560px;height:auto;display:block;margin:10px auto;border-radius:12px;background:#f4fbff;\" xmlns=\"http://www.w3.org/2000/svg\"><defs><marker id=\"ah\" markerWidth=\"10\" markerHeight=\"10\" refX=\"7\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L8,3 L0,6 Z\" fill=\"#1b6ca8\"/></marker><marker id=\"ag\" markerWidth=\"10\" markerHeight=\"10\" refX=\"7\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L8,3 L0,6 Z\" fill=\"#e76f51\"/></marker></defs><rect x=\"20\" y=\"40\" width=\"255\" height=\"120\" rx=\"12\" fill=\"#fff\" stroke=\"#adb5bd\" stroke-width=\"2\"/><text x=\"147\" y=\"66\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#e76f51\">❌ 模糊提示</text><text x=\"147\" y=\"96\" text-anchor=\"middle\" font-size=\"13\" fill=\"#495057\">“帮我写点东西”</text><text x=\"147\" y=\"128\" text-anchor=\"middle\" font-size=\"12\" fill=\"#868e96\">→ 结果空泛、跑题</text><rect x=\"325\" y=\"40\" width=\"255\" height=\"120\" rx=\"12\" fill=\"#fff\" stroke=\"#1b6ca8\" stroke-width=\"2\"/><text x=\"452\" y=\"66\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#1b6ca8\">✅ 结构化提示</text><text x=\"452\" y=\"92\" text-anchor=\"middle\" font-size=\"12\" fill=\"#0a3d62\">角色＋任务＋约束＋示例</text><text x=\"452\" y=\"114\" text-anchor=\"middle\" font-size=\"12\" fill=\"#1b6ca8\">→ 聚焦、可控、好用</text><text x=\"300\" y=\"190\" text-anchor=\"middle\" font-size=\"12\" fill=\"#1b6ca8\">把需求说清楚，AI 的产出质量天差地别</text></svg><p>左边「帮我写点东西」太模糊，AI 只能瞎猜；右边把<b>角色、任务、格式、边界</b>都给清，产出立刻聚焦好用。模型没变，变的是你的提问。</p>"
      },
      {
        "h": "📖 图文讲解：几个实用技巧",
        "body": "<p>① <b>给角色</b>：＂你是有 10 年经验的健身教练…＂能框定语气与专业度。② <b>拆步骤</b>：让它「先列提纲再写」，比直接要成品更稳。③ <b>上示例</b>：给 1–2 个样板，它马上懂你要的格式。④ <b>设边界</b>：限定字数、风格、不能做什么。</p><p>进阶还能用<b>思维链（CoT）</b>：让模型「一步步想」，复杂推理题准确率明显提升。</p>"
      },
      {
        "h": "🏢 相关企业：Anthropic & 月之暗面",
        "body": "<p><b>Anthropic</b>：Claude 的打造者，提出 <b>Constitutional AI</b>，强调「安全、可控、可解释」，在长文本与遵循指令上口碑突出，是提示词「对齐」研究的领头羊。</p><p><b>月之暗面（Moonshot / Kimi）</b>：以「超长上下文」出圈，能一次读几十万字再回答，把「给足材料再问」变成了顺手的事。</p><p>👉 看点：一家定义「安全对齐」标准，一家把「长上下文」做成差异点——都是围绕「如何更好地驾驭大模型」。</p>"
      },
      {
        "h": "🛠️ 动手实践",
        "body": "<p>挑一件你今天要写的事（周报/朋友圈/邮件），先用一句话模糊地让 AI 写，再用「角色+任务+格式+示例」重写一遍提示。对比两份结果，把让你满意的那版提示存进备忘录，以后复用。</p>"
      }
    ]
  },
  {
    "title": "AI Agent 智能体：会自己干活的 AI",
    "tag": "第7天 · 智能体",
    "blocks": [
      {
        "h": "💡 今日学习提示",
        "body": "<p>最后一天看到「AI 的终点形态」：从「你问它答」升级成「你下目标，它自己跑完」。记住五个字：<b>感知·规划·行动·工具·记忆</b>。</p>"
      },
      {
        "h": "🖼️ Agent 是怎么转圈的",
        "body": "<svg viewBox=\"0 0 600 230\" width=\"100%\" style=\"max-width:560px;height:auto;display:block;margin:10px auto;border-radius:12px;background:#f4fbff;\" xmlns=\"http://www.w3.org/2000/svg\"><defs><marker id=\"ah\" markerWidth=\"10\" markerHeight=\"10\" refX=\"7\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L8,3 L0,6 Z\" fill=\"#1b6ca8\"/></marker><marker id=\"ag\" markerWidth=\"10\" markerHeight=\"10\" refX=\"7\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L8,3 L0,6 Z\" fill=\"#e76f51\"/></marker></defs><circle cx=\"300\" cy=\"115\" r=\"46\" fill=\"#bde0fe\" stroke=\"#0a3d62\" stroke-width=\"2\"/><text x=\"300\" y=\"111\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#0a3d62\">大模型</text><text x=\"300\" y=\"128\" text-anchor=\"middle\" font-size=\"11\" fill=\"#0a3d62\">大脑</text><rect x=\"300\" y=\"18\" width=\"110\" height=\"40\" rx=\"12\" fill=\"#fff\" stroke=\"#1b6ca8\" stroke-width=\"2\"/><text x=\"355.0\" y=\"43.0\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"700\" fill=\"#0a3d62\">① 感知</text><rect x=\"470\" y=\"95\" width=\"110\" height=\"40\" rx=\"12\" fill=\"#fff\" stroke=\"#1b6ca8\" stroke-width=\"2\"/><text x=\"525.0\" y=\"120.0\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"700\" fill=\"#0a3d62\">② 规划</text><rect x=\"390\" y=\"185\" width=\"110\" height=\"40\" rx=\"12\" fill=\"#fff\" stroke=\"#1b6ca8\" stroke-width=\"2\"/><text x=\"445.0\" y=\"210.0\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"700\" fill=\"#0a3d62\">③ 行动</text><rect x=\"110\" y=\"185\" width=\"110\" height=\"40\" rx=\"12\" fill=\"#fff\" stroke=\"#1b6ca8\" stroke-width=\"2\"/><text x=\"165.0\" y=\"210.0\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"700\" fill=\"#0a3d62\">④ 用工具</text><rect x=\"30\" y=\"95\" width=\"110\" height=\"40\" rx=\"12\" fill=\"#fff\" stroke=\"#1b6ca8\" stroke-width=\"2\"/><text x=\"85.0\" y=\"120.0\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"700\" fill=\"#0a3d62\">⑤ 记忆</text><line x1=\"410\" y1=\"38\" x2=\"478\" y2=\"95\" stroke=\"#1b6ca8\" stroke-width=\"3\" marker-end=\"url(#ah)\"/><line x1=\"580\" y1=\"135\" x2=\"540\" y2=\"185\" stroke=\"#1b6ca8\" stroke-width=\"3\" marker-end=\"url(#ah)\"/><line x1=\"390\" y1=\"225\" x2=\"220\" y2=\"205\" stroke=\"#1b6ca8\" stroke-width=\"3\" marker-end=\"url(#ah)\"/><line x1=\"110\" y1=\"135\" x2=\"140\" y2=\"185\" stroke=\"#1b6ca8\" stroke-width=\"3\" marker-end=\"url(#ah)\"/><line x1=\"140\" y1=\"95\" x2=\"300\" y2=\"58\" stroke=\"#1b6ca8\" stroke-width=\"3\" marker-end=\"url(#ah)\"/><text x=\"300\" y=\"206\" text-anchor=\"middle\" font-size=\"12\" fill=\"#1b6ca8\">Agent 自己转圈：看懂环境→想步骤→动手→调工具→记住，循环直到完成</text></svg><p>智能体以<b>大模型为大脑</b>：先<b>感知</b>环境与目标，<b>规划</b>出步骤，<b>行动</b>并执行，过程中<b>调用工具</b>（搜索、写代码、发邮件），再把结果写进<b>记忆</b>，循环直到任务完成。</p>"
      },
      {
        "h": "📖 图文讲解：Agent 与「普通对话」的区别",
        "body": "<p>普通大模型是「被动答题机」；<b>Agent 是能主动闭环的执行者</b>：它会自己决定下一步、自己查资料、自己调用软件，而不是等你一步步喂指令。</p><p>关键能力有三：<b>规划</b>（把大目标拆小）、<b>工具使用</b>（会联网/会跑代码）、<b>记忆</b>（跨步骤不忘事）。这三者凑齐，AI 才从「参谋」变成「员工」。</p>"
      },
      {
        "h": "🏢 相关企业：腾讯 & Google",
        "body": "<p><b>腾讯</b>：自研「混元」大模型，并把 Agent 能力嵌进微信、企点等场景，做「能调用业务系统、帮人跑流程」的智能体，是国内「Agent+超级 App」的典型实践。</p><p><b>Google</b>：以 Gemini 多模态模型为底座，推出 Project Astra / 各类 Agent 框架，探索「能看能听、自主完成多步任务」的下一代助手。</p><p>👉 看点：一家把 Agent 接进国民级应用，一家用全栈多模态押注「通用智能体」，代表中美两条演进路径。</p>"
      },
      {
        "h": "🛠️ 动手实践",
        "body": "<p>试一个带「工具」的 Agent（如能联网/能跑代码的助手），给它一个真实小目标：＂帮我查本周深圳天气，挑一个不下雨的晚上，写一句约饭文案＂。看它如何自己分解、查数据、产出——这就是 Agent 的工作方式。</p>"
      }
    ]
  }
],

  "trade": [
    {
      "title": "Day 1 · 3C跨境企业推荐",
      "tag": "第1天 · 充电与配件品牌",
      "blocks": [
        {
          "h": "💡 今日怎么用这笔清单",
          "body": "<p>① 在「亚马逊」「品牌独立站」「阿里巴巴国际站」搜这些品牌的主营品类（充电器/配件/储能/相机），找同类供应商或可合作渠道；② 开发信模板：Hi [Name], we supply [品类] with OEM/private-label, MOQ [X], 附 catalog 与认证（CE/FCC/UL）；③ 关注「CES」「广交会」「环球资源电子展」定向联系；④ 合作前用「天眼查/企查查」核验资质与经营异常，并核查商标/专利授权。</p>"
        },
        {
          "h": "今日推荐 · 4 家（跨境 3C 充电/配件品牌）",
          "body": "<div class=\"co\"><div class=\"co-h\"><b>安克创新</b><span class=\"co-t hd\">头部</span></div><div class=\"co-r\"><b>速写：</b>2011 年创立于长沙，前 Google 工程师阳萌创办；从亚马逊充电配件起家，现为全球移动充电与智能硬件出海标杆。</div><div class=\"co-r\"><b>主营业务：</b>移动充电（充电器/充电宝/数据线）、音频（Soundcore）、智能家居（eufy）；招牌：Anker 氮化镓充电器、MagGo 磁吸充电。</div><div class=\"co-r\"><b>市场与打法：</b>以亚马逊为根基，用「浅海理论」从充电逐步拓展到音频、智能家居；海外营收占比 95%+，研发与品牌双驱动。</div><div class=\"co-r found\"><b>📜 发家史：</b>2011 年阳萌在亚马逊卖充电配件，发现市面产品又丑又贵，以极简设计与高可靠切中海外用户，Anker 很快做成亚马逊充电品类第一。</div><div class=\"co-r turn\"><b>🔑 转折点：</b>2020 年创业板上市后，从单一充电扩张到音频、智能家居、安防，用「浅海理论」选细分赛道做第一，避免与巨头硬刚。</div><div class=\"co-r look\"><b>💡 看点：</b>中国品牌出海范本：用「浅海理论」在细分品类做第一再滚雪球，证明中国制造也能卖品牌溢价。<button class=\"fam-btn\" data-fp=\"阳萌 Yang Meng\">📖 名人故事</button></div><div class=\"co-r\">官网：<a class=\"co-site\" href=\"https://www.anker.com\" target=\"_blank\" rel=\"noopener\">🌐 https://www.anker.com</a></div></div>\n        <div class=\"co\"><div class=\"co-h\"><b>绿联科技</b><span class=\"co-t hd\">头部</span></div><div class=\"co-r\"><b>速写：</b>2012 年创立于深圳，张清森创办；从电脑周边与数据线起家，现为数码配件全品类出海品牌。</div><div class=\"co-r\"><b>主营业务：</b>数据线、扩展坞、充电器、NAS 私有云、音频配件；招牌：Type-C 扩展坞、百瓦氮化镓充电器。</div><div class=\"co-r\"><b>市场与打法：</b>天猫国内基本盘 + 亚马逊/独立站出海双线；供应链与性价比并重，SKU 极宽。</div><div class=\"co-r found\"><b>📜 发家史：</b>早期靠 3C 配件代工与电商积累，抓住 Type-C 与多设备互联趋势，用高性价比配件快速铺开海内外。</div><div class=\"co-r turn\"><b>🔑 转折点：</b>从一根数据线做到全品类配件，2024 年登陆创业板，把「数码周边」做成规模生意。</div><div class=\"co-r look\"><b>💡 看点：</b>配件赛道的「品类收割机」，SKU 宽、性价比高，是研究中企 3C 配件出海的标本。</div><div class=\"co-r\">官网：<a class=\"co-site\" href=\"https://www.ugreen.com\" target=\"_blank\" rel=\"noopener\">🌐 https://www.ugreen.com</a></div></div>\n        <div class=\"co\"><div class=\"co-h\"><b>倍思 Baseus</b><span class=\"co-t sm\">中小</span></div><div class=\"co-r\"><b>速写：</b>2011 年创立于深圳，何世友创办；专注 3C 数码配件的设计型品牌。</div><div class=\"co-r\"><b>主营业务：</b>充电器、车载支架、音频、数据线；招牌：磁吸无线充、伸缩数据线。</div><div class=\"co-r\"><b>市场与打法：</b>海外独立站 + 亚马逊双线；以「设计感 + 性价比」切入年轻用户。</div><div class=\"co-r found\"><b>📜 发家史：</b>从手机壳/支架等小配件起步，靠工业设计与快迭代做出辨识度，在海外 3C 配件圈站稳。</div><div class=\"co-r turn\"><b>🔑 转折点：</b>从配件小品类扩展到充电与车载全场景，靠设计驱动在红海配件里做出品牌感。</div><div class=\"co-r look\"><b>💡 看点：</b>用「设计型配件」撕开红海，是 3C 配件品牌化的代表。</div><div class=\"co-r\">官网：<a class=\"co-site\" href=\"https://www.baseus.com\" target=\"_blank\" rel=\"noopener\">🌐 https://www.baseus.com</a></div></div>\n        <div class=\"co\"><div class=\"co-h\"><b>罗马仕 Romoss</b><span class=\"co-t sm\">中小</span></div><div class=\"co-r\"><b>速写：</b>深圳起家的移动电源品牌，专注充电宝与便携充电。</div><div class=\"co-r\"><b>主营业务：</b>移动电源、充电器、数据线；招牌：高容量充电宝、快充充电器。</div><div class=\"co-r\"><b>市场与打法：</b>亚马逊 + 独立站出海，主打大容量与高性价比。</div><div class=\"co-r found\"><b>📜 发家史：</b>借智能手机普及与「电量焦虑」，以高容量充电宝在亚马逊做得风生水起。</div><div class=\"co-r turn\"><b>🔑 转折点：</b>从单一充电宝扩展到快充与户外电源，跟随储能趋势延展品类。</div><div class=\"co-r look\"><b>💡 看点：</b>充电宝出海老牌，是观察「电量经济」跨境卖家的样本。</div><div class=\"co-r\">官网：<a class=\"co-site\" href=\"https://www.romoss.com\" target=\"_blank\" rel=\"noopener\">🌐 https://www.romoss.com</a></div></div>"
        }
      ]
    },
    {
      "title": "Day 2 · 3C跨境企业推荐",
      "tag": "第2天 · 亚马逊精品卖家/品牌",
      "blocks": [
        {
          "h": "💡 今日怎么用这笔清单",
          "body": "<p>① 在「亚马逊」「品牌独立站」「阿里巴巴国际站」搜这些品牌的主营品类（充电器/配件/储能/相机），找同类供应商或可合作渠道；② 开发信模板：Hi [Name], we supply [品类] with OEM/private-label, MOQ [X], 附 catalog 与认证（CE/FCC/UL）；③ 关注「CES」「广交会」「环球资源电子展」定向联系；④ 合作前用「天眼查/企查查」核验资质与经营异常，并核查商标/专利授权。</p>"
        },
        {
          "h": "今日推荐 · 4 家（亚马逊精品/品牌）",
          "body": "<div class=\"co\"><div class=\"co-h\"><b>傲基科技</b><span class=\"co-t sm\">中小</span></div><div class=\"co-r\"><b>速写：</b>2010 年创立于深圳，陆海传创办；早期跨境 3C 配件大卖，旗下 Aukey 品牌。</div><div class=\"co-r\"><b>主营业务：</b>充电、车载、音频、智能家居配件；招牌：Aukey 充电配件。</div><div class=\"co-r\"><b>市场与打法：</b>亚马逊精品 + 多渠道；曾为亚马逊 3C 大卖，后调整合规与渠道。</div><div class=\"co-r found\"><b>📜 发家史：</b>靠 3C 配件在亚马逊起量，是早期跨境大卖代表之一。</div><div class=\"co-r turn\"><b>🔑 转折点：</b>经历平台合规与库存波动后，转向品牌化与多渠道，2024 年在港交所上市。</div><div class=\"co-r look\"><b>💡 看点：</b>跨境大卖「从铺货到品牌」转型的典型案例。</div><div class=\"co-r\">官网：<a class=\"co-site\" href=\"https://www.aukey.com\" target=\"_blank\" rel=\"noopener\">🌐 https://www.aukey.com</a></div></div>\n        <div class=\"co\"><div class=\"co-h\"><b>泽宝技术</b><span class=\"co-t sm\">中小</span></div><div class=\"co-r\"><b>速写：</b>2007 年创立于深圳，孙才金创办；亚马逊精品模式代表，旗下多品牌矩阵。</div><div class=\"co-r\"><b>主营业务：</b>充电（RavPower）、个护（Viva）、美妆（Anjou）、投影（Vankyo）等；招牌：RavPower 充电。</div><div class=\"co-r\"><b>市场与打法：</b>亚马逊精品 + 品牌矩阵；2018 年被星徽股份收购。</div><div class=\"co-r found\"><b>📜 发家史：</b>以 RavPower 等品牌在亚马逊精品赛道起家，靠差异化选品做高客单。</div><div class=\"co-r turn\"><b>🔑 转折点：</b>被星徽股份收购后进入资本市场，但也经历平台封号与库存挑战。</div><div class=\"co-r look\"><b>💡 看点：</b>亚马逊精品「多品牌矩阵」打法的样本，亦是大卖并购案例。</div><div class=\"co-r\">官网：<a class=\"co-site\" href=\"https://www.ravpower.com\" target=\"_blank\" rel=\"noopener\">🌐 https://www.ravpower.com</a></div></div>\n        <div class=\"co\"><div class=\"co-h\"><b>帕拓逊</b><span class=\"co-t sm\">中小</span></div><div class=\"co-r\"><b>速写：</b>跨境通旗下 3C 品牌，主营耳机与数码配件。</div><div class=\"co-r\"><b>主营业务：</b>蓝牙耳机、充电器、手机配件；招牌：Patozon 耳机。</div><div class=\"co-r\"><b>市场与打法：</b>亚马逊为主，依托跨境通供应链与渠道。</div><div class=\"co-r found\"><b>📜 发家史：</b>作为跨境通收购的 3C 品牌资产，延续亚马逊精品路线。</div><div class=\"co-r turn\"><b>🔑 转折点：</b>在跨境通体系内调整定位，聚焦耳机等高频 3C 品类。</div><div class=\"co-r look\"><b>💡 看点：</b>大卖体系内 3C 品牌运作的缩影。</div><div class=\"co-r\">官网：<a class=\"co-site\" href=\"https://www.patozon.com\" target=\"_blank\" rel=\"noopener\">🌐 https://www.patozon.com</a></div></div>\n        <div class=\"co\"><div class=\"co-h\"><b>通拓科技</b><span class=\"co-t sm\">中小</span></div><div class=\"co-r\"><b>速写：</b>2004 年创立于深圳，廖新辉创办；老牌综合跨境卖家。</div><div class=\"co-r\"><b>主营业务：</b>3C 数码、家居、玩具等泛品类；招牌：Tomtop 综合站。</div><div class=\"co-r\"><b>市场与打法：</b>自营平台 + 第三方平台铺货；曾被华鼎股份收购。</div><div class=\"co-r found\"><b>📜 发家史：</b>早期做 B2C 综合站起家，是跨境铺货模式老兵。</div><div class=\"co-r turn\"><b>🔑 转折点：</b>经历资本运作与转型，从泛铺货走向精细化运营。</div><div class=\"co-r look\"><b>💡 看点：</b>综合铺货型卖家的「活化石」，适合研究中早期跨境打法。</div><div class=\"co-r\">官网：<a class=\"co-site\" href=\"https://www.tomtop.com\" target=\"_blank\" rel=\"noopener\">🌐 https://www.tomtop.com</a></div></div>"
        }
      ]
    },
    {
      "title": "Day 3 · 3C跨境企业推荐",
      "tag": "第3天 · 综合型跨境卖家",
      "blocks": [
        {
          "h": "💡 今日怎么用这笔清单",
          "body": "<p>① 在「亚马逊」「品牌独立站」「阿里巴巴国际站」搜这些品牌的主营品类（充电器/配件/储能/相机），找同类供应商或可合作渠道；② 开发信模板：Hi [Name], we supply [品类] with OEM/private-label, MOQ [X], 附 catalog 与认证（CE/FCC/UL）；③ 关注「CES」「广交会」「环球资源电子展」定向联系；④ 合作前用「天眼查/企查查」核验资质与经营异常，并核查商标/专利授权。</p>"
        },
        {
          "h": "今日推荐 · 4 家（综合型跨境卖家）",
          "body": "<div class=\"co\"><div class=\"co-h\"><b>有棵树</b><span class=\"co-t sm\">中小</span></div><div class=\"co-r\"><b>速写：</b>2010 年创立于深圳，肖四清创办；综合型跨境卖家。</div><div class=\"co-r\"><b>主营业务：</b>3C、家居、母婴等泛品类；招牌：多平台店铺矩阵。</div><div class=\"co-r\"><b>市场与打法：</b>亚马逊/eBay/独立站多平台；被天泽信息（现有棵树）收购。</div><div class=\"co-r found\"><b>📜 发家史：</b>从 eBay 卖家起家，靠多平台铺货做大规模。</div><div class=\"co-r turn\"><b>🔑 转折点：</b>被天泽信息收购后整合，经历商誉与库存出清。</div><div class=\"co-r look\"><b>💡 看点：</b>多平台铺货卖家的代表，亦是跨境并购整合案例。</div><div class=\"co-r\">官网：<a class=\"co-site\" href=\"https://www.youkeshu.com\" target=\"_blank\" rel=\"noopener\">🌐 https://www.youkeshu.com</a></div></div>\n        <div class=\"co\"><div class=\"co-h\"><b>三态股份</b><span class=\"co-t sm\">中小</span></div><div class=\"co-r\"><b>速写：</b>2007 年创立于深圳；跨境卖家 + 物流服务商。</div><div class=\"co-r\"><b>主营业务：</b>3C、服饰等泛品 + 跨境物流；招牌：Suntop 卖家 + 专线物流。</div><div class=\"co-r\"><b>市场与打法：</b>卖货 + 物流双轮；2023 年登陆创业板。</div><div class=\"co-r found\"><b>📜 发家史：</b>从 eBay 卖家起步，逐步叠加自有物流，形成「商流 + 物流」闭环。</div><div class=\"co-r turn\"><b>🔑 转折点：</b>2023 年上市，把跨境物流能力做成独立增长曲线。</div><div class=\"co-r look\"><b>💡 看点：</b>「卖家 + 物流」一体化的稀缺样本。</div><div class=\"co-r\">官网：<a class=\"co-site\" href=\"https://www.suntop.com\" target=\"_blank\" rel=\"noopener\">🌐 https://www.suntop.com</a></div></div>\n        <div class=\"co\"><div class=\"co-h\"><b>易佰网络</b><span class=\"co-t sm\">中小</span></div><div class=\"co-r\"><b>速写：</b>2011 年创立于长沙；泛品铺货 + 精品的跨境卖家，被华凯易佰收购。</div><div class=\"co-r\"><b>主营业务：</b>3C、家居、汽配等泛品类；招牌：高 SKU 泛品矩阵。</div><div class=\"co-r\"><b>市场与打法：</b>泛品铺货 + 数据化选品；依托华凯易佰资本平台。</div><div class=\"co-r found\"><b>📜 发家史：</b>以海量 SKU 铺货起家，靠系统化的选品与库存管理控成本。</div><div class=\"co-r turn\"><b>🔑 转折点：</b>被华凯易佰收购后，用数字化中台提升周转与毛利。</div><div class=\"co-r look\"><b>💡 看点：</b>泛品铺货「数据化」运营的标杆。</div><div class=\"co-r\">官网：<a class=\"co-site\" href=\"https://www.yibai.com\" target=\"_blank\" rel=\"noopener\">🌐 https://www.yibai.com</a></div></div>\n        <div class=\"co\"><div class=\"co-h\"><b>跨境通</b><span class=\"co-t hd\">头部</span></div><div class=\"co-r\"><b>速写：</b>2014 年于太原由百圆裤业转型而来；A 股「跨境第一股」。</div><div class=\"co-r\"><b>主营业务：</b>旗下环球易购（ZAFUL/Pandawill）、帕拓逊等；招牌：ZAFUL 快时尚 + 3C。</div><div class=\"co-r\"><b>市场与打法：</b>自有平台 + 收购品牌；曾是中国跨境龙头。</div><div class=\"co-r found\"><b>📜 发家史：</b>从裤业转型跨境电商，靠收购快速做大，一度是行业标杆。</div><div class=\"co-r turn\"><b>🔑 转折点：</b>经历扩张后遗症与债务压力，逐步瘦身聚焦核心资产。</div><div class=\"co-r look\"><b>💡 看点：</b>中国跨境资本化的「第一股」，也是激进扩张反例。</div><div class=\"co-r\">官网：<a class=\"co-site\" href=\"https://www.globalegrow.com\" target=\"_blank\" rel=\"noopener\">🌐 https://www.globalegrow.com</a></div></div>"
        }
      ]
    },
    {
      "title": "Day 4 · 3C跨境企业推荐",
      "tag": "第4天 · 独立站与平台型出海",
      "blocks": [
        {
          "h": "💡 今日怎么用这笔清单",
          "body": "<p>① 在「亚马逊」「品牌独立站」「阿里巴巴国际站」搜这些品牌的主营品类（充电器/配件/储能/相机），找同类供应商或可合作渠道；② 开发信模板：Hi [Name], we supply [品类] with OEM/private-label, MOQ [X], 附 catalog 与认证（CE/FCC/UL）；③ 关注「CES」「广交会」「环球资源电子展」定向联系；④ 合作前用「天眼查/企查查」核验资质与经营异常，并核查商标/专利授权。</p>"
        },
        {
          "h": "今日推荐 · 4 家（独立站与平台型出海）",
          "body": "<div class=\"co\"><div class=\"co-h\"><b>棒谷 Banggood</b><span class=\"co-t sm\">中小</span></div><div class=\"co-r\"><b>速写：</b>2009 年创立于广州；以独立站见长的综合跨境卖家。</div><div class=\"co-r\"><b>主营业务：</b>3C 数码、遥控模型、服饰等；招牌：Banggood 独立站。</div><div class=\"co-r\"><b>市场与打法：</b>自营独立站 + 联盟营销；早期独立站流量打法老手。</div><div class=\"co-r found\"><b>📜 发家史：</b>靠 Banggood 独立站与论坛/联盟引流，在 3C 与模型圈积累口碑。</div><div class=\"co-r turn\"><b>🔑 转折点：</b>在平台卖家崛起后，持续经营独立站自有流量。</div><div class=\"co-r look\"><b>💡 看点：</b>独立站打法的早期代表，适合研究「站外流量」。</div><div class=\"co-r\">官网：<a class=\"co-site\" href=\"https://www.banggood.com\" target=\"_blank\" rel=\"noopener\">🌐 https://www.banggood.com</a></div></div>\n        <div class=\"co\"><div class=\"co-h\"><b>兰亭集势</b><span class=\"co-t hd\">头部</span></div><div class=\"co-r\"><b>速写：</b>2007 年创立于北京，郭去疾创办；中概跨境第一股（2013 纽交所）。</div><div class=\"co-r\"><b>主营业务：</b>婚纱起家，扩展至 3C、服饰、家居；招牌：LightInTheBox。</div><div class=\"co-r\"><b>市场与打法：</b>独立站 + 全球配送；后被卓尔集团收购。</div><div class=\"co-r found\"><b>📜 发家史：</b>以婚纱定制切入跨境，2013 年成为纽交所上市的首家中国跨境企业。</div><div class=\"co-r turn\"><b>🔑 转折点：</b>从婚纱转型全品类，并引入卓尔资源做供应链协同。</div><div class=\"co-r look\"><b>💡 看点：</b>中国跨境「出海第一股」的兴衰样本。</div><div class=\"co-r\">官网：<a class=\"co-site\" href=\"https://www.lightinthebox.com\" target=\"_blank\" rel=\"noopener\">🌐 https://www.lightinthebox.com</a></div></div>\n        <div class=\"co\"><div class=\"co-h\"><b>赛维时代</b><span class=\"co-t sm\">中小</span></div><div class=\"co-r\"><b>速写：</b>2012 年创立于深圳，陈文平创办；品牌矩阵型跨境卖家。</div><div class=\"co-r\"><b>主营业务：</b>服饰 + 3C 数码（相机配件、音频）；招牌：多品牌矩阵。</div><div class=\"co-r\"><b>市场与打法：</b>亚马逊 + 独立站 + 品牌孵化；2023 年创业板上市。</div><div class=\"co-r found\"><b>📜 发家史：</b>从服饰铺货起家，逐步孵化垂直品牌，覆盖服饰与 3C。</div><div class=\"co-r turn\"><b>🔑 转折点：</b>2023 年上市，把「品牌矩阵 + 柔性供应链」做成核心竞争力。</div><div class=\"co-r look\"><b>💡 看点：</b>从铺货到「品牌矩阵」升级的范本。</div><div class=\"co-r\">官网：<a class=\"co-site\" href=\"https://www.sailvan.com\" target=\"_blank\" rel=\"noopener\">🌐 https://www.sailvan.com</a></div></div>\n        <div class=\"co\"><div class=\"co-h\"><b>闪魔</b><span class=\"co-t sm\">中小</span></div><div class=\"co-r\"><b>速写：</b>深圳起家的手机配件品牌，钢化膜与保护类见长。</div><div class=\"co-r\"><b>主营业务：</b>钢化膜、手机壳、保护配件；招牌：高清钢化膜。</div><div class=\"co-r\"><b>市场与打法：</b>亚马逊 + 国内电商；以高性价比耗材复购取胜。</div><div class=\"co-r found\"><b>📜 发家史：</b>抓住智能手机贴膜刚需，用高性价比钢化膜在亚马逊与国内起量。</div><div class=\"co-r turn\"><b>🔑 转折点：</b>从贴膜扩展到全系手机保护配件，做宽耗材赛道。</div><div class=\"co-r look\"><b>💡 看点：</b>手机「耗材配件」跨境卖家的样本。</div><div class=\"co-r\">官网：<a class=\"co-site\" href=\"https://www.mocoll.com\" target=\"_blank\" rel=\"noopener\">🌐 https://www.mocoll.com</a></div></div>"
        }
      ]
    },
    {
      "title": "Day 5 · 3C跨境企业推荐",
      "tag": "第5天 · 便携储能出海",
      "blocks": [
        {
          "h": "💡 今日怎么用这笔清单",
          "body": "<p>① 在「亚马逊」「品牌独立站」「阿里巴巴国际站」搜这些品牌的主营品类（充电器/配件/储能/相机），找同类供应商或可合作渠道；② 开发信模板：Hi [Name], we supply [品类] with OEM/private-label, MOQ [X], 附 catalog 与认证（CE/FCC/UL）；③ 关注「CES」「广交会」「环球资源电子展」定向联系；④ 合作前用「天眼查/企查查」核验资质与经营异常，并核查商标/专利授权。</p>"
        },
        {
          "h": "今日推荐 · 4 家（便携储能出海）",
          "body": "<div class=\"co\"><div class=\"co-h\"><b>华宝新能源</b><span class=\"co-t hd\">头部</span></div><div class=\"co-r\"><b>速写：</b>2003 年创立于深圳，孙中伟创办；便携储能龙头，Jackery 品牌。</div><div class=\"co-r\"><b>主营业务：</b>便携储能电源、太阳能板；招牌：Jackery 户外电源。</div><div class=\"co-r\"><b>市场与打法：</b>北美独立站 + 亚马逊；户外与应急场景出海强势。</div><div class=\"co-r found\"><b>📜 发家史：</b>从充电宝/电池业务切入，看到「户外带电」需求，创立 Jackery 做便携储能。</div><div class=\"co-r turn\"><b>🔑 转折点：</b>押中露营与应急储能风口，Jackery 成北美便携储能头部。</div><div class=\"co-r look\"><b>💡 看点：</b>把「带电的户外生活」做成全球品类的范本。<button class=\"fam-btn\" data-fp=\"孙中伟 Sun Zhongwei\">📖 名人故事</button></div><div class=\"co-r\">官网：<a class=\"co-site\" href=\"https://www.jackery.com\" target=\"_blank\" rel=\"noopener\">🌐 https://www.jackery.com</a></div></div>\n        <div class=\"co\"><div class=\"co-h\"><b>正浩科技</b><span class=\"co-t hd\">头部</span></div><div class=\"co-r\"><b>速写：</b>2017 年创立于深圳，王雷创办；便携与家庭储能新锐。</div><div class=\"co-r\"><b>主营业务：</b>便携储能、户外电源、家庭储能；招牌：DELTA/RIVER 系列。</div><div class=\"co-r\"><b>市场与打法：</b>海外众筹 + 独立站 + 亚马逊；技术驱动高客单。</div><div class=\"co-r found\"><b>📜 发家史：</b>创始团队出自港科大，以高倍率快充技术切入便携储能，靠众筹引爆。</div><div class=\"co-r turn\"><b>🔑 转折点：</b>用「半小时充满」的快充差异化，在海外高端储能站稳。</div><div class=\"co-r look\"><b>💡 看点：</b>用技术差异化打高端储能的新锐样本。</div><div class=\"co-r\">官网：<a class=\"co-site\" href=\"https://www.ecoflow.com\" target=\"_blank\" rel=\"noopener\">🌐 https://www.ecoflow.com</a></div></div>\n        <div class=\"co\"><div class=\"co-h\"><b>征拓 Zendure</b><span class=\"co-t sm\">中小</span></div><div class=\"co-r\"><b>速写：</b>深圳起家的便携储能品牌，主打设计与快充。</div><div class=\"co-r\"><b>主营业务：</b>便携储能、移动电源；招牌：SuperBase 系列。</div><div class=\"co-r\"><b>市场与打法：</b>海外众筹 + 独立站；设计驱动的储能品牌。</div><div class=\"co-r found\"><b>📜 发家史：</b>以「可叠堆、可上飞机」的模块化储能设计切入海外众筹。</div><div class=\"co-r turn\"><b>🔑 转折点：</b>从移动电源延伸到家庭备用储能，走设计差异化路线。</div><div class=\"co-r look\"><b>💡 看点：</b>储能赛道「设计派」的代表。</div><div class=\"co-r\">官网：<a class=\"co-site\" href=\"https://www.zendure.com\" target=\"_blank\" rel=\"noopener\">🌐 https://www.zendure.com</a></div></div>\n        <div class=\"co\"><div class=\"co-h\"><b>紫米 ZMI</b><span class=\"co-t sm\">中小</span></div><div class=\"co-r\"><b>速写：</b>小米生态链的充电品牌，主打移动电源与充电配件。</div><div class=\"co-r\"><b>主营业务：</b>移动电源、充电器、数据线；招牌：ZMI 充电宝。</div><div class=\"co-r\"><b>市场与打法：</b>依托小米渠道 + 自有出海；性价比充电配件。</div><div class=\"co-r found\"><b>📜 发家史：</b>作为小米生态链企业，以高性价比充电宝快速起量。</div><div class=\"co-r turn\"><b>🔑 转折点：</b>在充电配件红海里靠品控与性价比留存，随小米出海。</div><div class=\"co-r look\"><b>💡 看点：</b>生态链充电品牌的样本。</div><div class=\"co-r\">官网：<a class=\"co-site\" href=\"https://www.zmi.com\" target=\"_blank\" rel=\"noopener\">🌐 https://www.zmi.com</a></div></div>"
        }
      ]
    },
    {
      "title": "Day 6 · 3C跨境企业推荐",
      "tag": "第6天 · 影像与音频出海",
      "blocks": [
        {
          "h": "💡 今日怎么用这笔清单",
          "body": "<p>① 在「亚马逊」「品牌独立站」「阿里巴巴国际站」搜这些品牌的主营品类（充电器/配件/储能/相机），找同类供应商或可合作渠道；② 开发信模板：Hi [Name], we supply [品类] with OEM/private-label, MOQ [X], 附 catalog 与认证（CE/FCC/UL）；③ 关注「CES」「广交会」「环球资源电子展」定向联系；④ 合作前用「天眼查/企查查」核验资质与经营异常，并核查商标/专利授权。</p>"
        },
        {
          "h": "今日推荐 · 4 家（影像与音频出海）",
          "body": "<div class=\"co\"><div class=\"co-h\"><b>影石创新</b><span class=\"co-t hd\">头部</span></div><div class=\"co-r\"><b>速写：</b>2015 年创立于深圳，刘靖康创办；全景/运动相机龙头。</div><div class=\"co-r\"><b>主营业务：</b>消费级全景相机、运动相机、VR 相机；招牌：Insta360 ONE/X 系列。</div><div class=\"co-r\"><b>市场与打法：</b>海外占比高，亚马逊 + 独立站 + 专业渠道；90 后团队。</div><div class=\"co-r found\"><b>📜 发家史：</b>创始人刘靖康从南京大学创业，用全景拼接算法做出消费级全景相机。</div><div class=\"co-r turn\"><b>🔑 转折点：</b>从全景相机切入运动/VR 场景，海外营收为主，2025 年登陆科创板。</div><div class=\"co-r look\"><b>💡 看点：</b>90 后掌舵的影像独角兽，中国智造出海新势力。<button class=\"fam-btn\" data-fp=\"刘靖康 Liu Jingkang\">📖 名人故事</button></div><div class=\"co-r\">官网：<a class=\"co-site\" href=\"https://www.insta360.com\" target=\"_blank\" rel=\"noopener\">🌐 https://www.insta360.com</a></div></div>\n        <div class=\"co\"><div class=\"co-h\"><b>韶音科技</b><span class=\"co-t hd\">头部</span></div><div class=\"co-r\"><b>速写：</b>2004 年创立于深圳，陈皞创办；骨传导耳机开创者。</div><div class=\"co-r\"><b>主营业务：</b>骨传导运动耳机、通讯耳机；招牌：Shokz OpenRun。</div><div class=\"co-r\"><b>市场与打法：</b>海外运动与军警渠道 + 亚马逊；技术壁垒高。</div><div class=\"co-r found\"><b>📜 发家史：</b>早年做军工/特种耳机，把骨传导技术转民用做运动耳机。</div><div class=\"co-r turn\"><b>🔑 转折点：</b>用「开放聆听」的骨传导差异化，在运动耳机高端站稳。</div><div class=\"co-r look\"><b>💡 看点：</b>用底层技术做品类开创的样本。</div><div class=\"co-r\">官网：<a class=\"co-site\" href=\"https://www.shokz.com\" target=\"_blank\" rel=\"noopener\">🌐 https://www.shokz.com</a></div></div>\n        <div class=\"co\"><div class=\"co-h\"><b>万魔声学</b><span class=\"co-t sm\">中小</span></div><div class=\"co-r\"><b>速写：</b>深圳起家的音频品牌，主打高性价比耳机。</div><div class=\"co-r\"><b>主营业务：</b>入耳/头戴耳机、TWS；招牌：1MORE 三单元耳机。</div><div class=\"co-r\"><b>市场与打法：</b>国内 + 海外电商；ODM 起家转品牌。</div><div class=\"co-r found\"><b>📜 发家史：</b>从为国际品牌代工音频起步，积累声学能力后做自有品牌。</div><div class=\"co-r turn\"><b>🔑 转折点：</b>以「发烧级调音 + 亲民价」在 TWS 红海里突围。</div><div class=\"co-r look\"><b>💡 看点：</b>声学 ODM 转品牌的样本。</div><div class=\"co-r\">官网：<a class=\"co-site\" href=\"https://www.1more.com\" target=\"_blank\" rel=\"noopener\">🌐 https://www.1more.com</a></div></div>\n        <div class=\"co\"><div class=\"co-h\"><b>图拉斯</b><span class=\"co-t sm\">中小</span></div><div class=\"co-r\"><b>速写：</b>深圳起家的 3C 配件品牌，设计与防护见长。</div><div class=\"co-r\"><b>主营业务：</b>手机壳、支架、充电配件；招牌：磁吸支架/防摔壳。</div><div class=\"co-r\"><b>市场与打法：</b>亚马逊 + 独立站；设计驱动的中高端配件。</div><div class=\"co-r found\"><b>📜 发家史：</b>从手机保护类配件起步，以精致设计与防护卖点做品牌。</div><div class=\"co-r turn\"><b>🔑 转折点：</b>从配件小品类扩展到磁吸与车载全场景。</div><div class=\"co-r look\"><b>💡 看点：</b>配件「设计溢价」路线的代表。</div><div class=\"co-r\">官网：<a class=\"co-site\" href=\"https://www.torras.com\" target=\"_blank\" rel=\"noopener\">🌐 https://www.torras.com</a></div></div>"
        }
      ]
    },
    {
      "title": "Day 7 · 3C跨境企业推荐",
      "tag": "第7天 · 智能家居与小家电出海",
      "blocks": [
        {
          "h": "💡 今日怎么用这笔清单",
          "body": "<p>① 在「亚马逊」「品牌独立站」「阿里巴巴国际站」搜这些品牌的主营品类（充电器/配件/储能/相机），找同类供应商或可合作渠道；② 开发信模板：Hi [Name], we supply [品类] with OEM/private-label, MOQ [X], 附 catalog 与认证（CE/FCC/UL）；③ 关注「CES」「广交会」「环球资源电子展」定向联系；④ 合作前用「天眼查/企查查」核验资质与经营异常，并核查商标/专利授权。</p>"
        },
        {
          "h": "今日推荐 · 4 家（智能家居与小家电出海）",
          "body": "<div class=\"co\"><div class=\"co-h\"><b>添可 Tineco</b><span class=\"co-t hd\">头部</span></div><div class=\"co-r\"><b>速写：</b>科沃斯旗下智能清洁品牌，洗地机出海强势。</div><div class=\"co-r\"><b>主营业务：</b>洗地机、无线吸尘器、智能料理；招牌：Tineco 洗地机。</div><div class=\"co-r\"><b>市场与打法：</b>海外独立站 + 亚马逊；高端智能清洁。</div><div class=\"co-r found\"><b>📜 发家史：</b>作为科沃斯孵化品牌，把洗地机做成高端智能品类出海。</div><div class=\"co-r turn\"><b>🔑 转折点：</b>借洗地机风口在海外高端清洁市场快速放量。</div><div class=\"co-r look\"><b>💡 看点：</b>中国家电「智能升级出海」的样本。</div><div class=\"co-r\">官网：<a class=\"co-site\" href=\"https://www.tineco.com\" target=\"_blank\" rel=\"noopener\">🌐 https://www.tineco.com</a></div></div>\n        <div class=\"co\"><div class=\"co-h\"><b>石头科技</b><span class=\"co-t hd\">头部</span></div><div class=\"co-r\"><b>速写：</b>2014 年创立于北京；扫地机器人出海标杆。</div><div class=\"co-r\"><b>主营业务：</b>扫地/拖地机器人；招牌：Roborock S 系列。</div><div class=\"co-r\"><b>市场与打法：</b>海外高端 + 亚马逊；技术驱动的扫地机龙头。</div><div class=\"co-r found\"><b>📜 发家史：</b>脱胎于小米生态链，以激光导航扫地机在海外做高端。</div><div class=\"co-r turn\"><b>🔑 转折点：</b>从代工小米到自有高端品牌，海外营收占比高，2020 年科创板上市。</div><div class=\"co-r look\"><b>💡 看点：</b>扫地机「中国智造出海」的标杆。</div><div class=\"co-r\">官网：<a class=\"co-site\" href=\"https://www.roborock.com\" target=\"_blank\" rel=\"noopener\">🌐 https://www.roborock.com</a></div></div>\n        <div class=\"co\"><div class=\"co-h\"><b>卧安机器人</b><span class=\"co-t sm\">中小</span></div><div class=\"co-r\"><b>速写：</b>深圳起家的智能家居机器人品牌。</div><div class=\"co-r\"><b>主营业务：</b>智能开关、窗帘机器人、安防传感器；招牌：SwitchBot 机器人。</div><div class=\"co-r\"><b>市场与打法：</b>海外众筹 + 独立站 + 亚马逊；DIY 智能家居。</div><div class=\"co-r found\"><b>📜 发家史：</b>从「让旧家电变智能」的机器人配件切入海外众筹。</div><div class=\"co-r turn\"><b>🔑 转折点：</b>用模块化机器人降低智能家居门槛，在海外 DIY 圈走红。</div><div class=\"co-r look\"><b>💡 看点：</b>智能家居「轻改造」出海样本。</div><div class=\"co-r\">官网：<a class=\"co-site\" href=\"https://www.switch-bot.com\" target=\"_blank\" rel=\"noopener\">🌐 https://www.switch-bot.com</a></div></div>\n        <div class=\"co\"><div class=\"co-h\"><b>科沃斯</b><span class=\"co-t hd\">头部</span></div><div class=\"co-r\"><b>速写：</b>1998 年创立于苏州；扫地机器人龙头，添可母公司。</div><div class=\"co-r\"><b>主营业务：</b>扫地机器人、窗宝、洗地机；招牌：DEEBOT 地宝。</div><div class=\"co-r\"><b>市场与打法：</b>国内 + 海外双线；服务机器人出海。</div><div class=\"co-r found\"><b>📜 发家史：</b>从代工吸尘器起步，2000 年代做自有扫地机器人品牌。</div><div class=\"co-r turn\"><b>🔑 转折点：</b>用服务机器人多品类（地宝/窗宝/添可）构建出海矩阵。</div><div class=\"co-r look\"><b>💡 看点：</b>中国服务机器人出海龙头。</div><div class=\"co-r\">官网：<a class=\"co-site\" href=\"https://www.ecovacs.com\" target=\"_blank\" rel=\"noopener\">🌐 https://www.ecovacs.com</a></div></div>"
        }
      ]
    },
    {
      "title": "Day 8 · 3C跨境企业推荐",
      "tag": "第8天 · 个护与新锐品牌",
      "blocks": [
        {
          "h": "💡 今日怎么用这笔清单",
          "body": "<p>① 在「亚马逊」「品牌独立站」「阿里巴巴国际站」搜这些品牌的主营品类（充电器/配件/储能/相机），找同类供应商或可合作渠道；② 开发信模板：Hi [Name], we supply [品类] with OEM/private-label, MOQ [X], 附 catalog 与认证（CE/FCC/UL）；③ 关注「CES」「广交会」「环球资源电子展」定向联系；④ 合作前用「天眼查/企查查」核验资质与经营异常，并核查商标/专利授权。</p>"
        },
        {
          "h": "今日推荐 · 4 家（个护与新锐品牌）",
          "body": "<div class=\"co\"><div class=\"co-h\"><b>徕芬 Laifen</b><span class=\"co-t sm\">中小</span></div><div class=\"co-r\"><b>速写：</b>2019 年创立于东莞，叶洪新创办；高速吹风机新锐。</div><div class=\"co-r\"><b>主营业务：</b>高速吹风机、电动牙刷；招牌：Laifen 高速吹风机。</div><div class=\"co-r\"><b>市场与打法：</b>国内爆红 + 亚马逊/独立站出海；性价比技术流。</div><div class=\"co-r found\"><b>📜 发家史：</b>以「把高速电机平民化」切入吹风机，国内迅速走红后出海。</div><div class=\"co-r turn\"><b>🔑 转折点：</b>用自研高速电机把高端吹风机价格打下来，复制到海外。</div><div class=\"co-r look\"><b>💡 看点：</b>用供应链优势做「技术平权」出海的新锐。</div><div class=\"co-r\">官网：<a class=\"co-site\" href=\"https://www.laifen.com\" target=\"_blank\" rel=\"noopener\">🌐 https://www.laifen.com</a></div></div>\n        <div class=\"co\"><div class=\"co-h\"><b>极米科技</b><span class=\"co-t hd\">头部</span></div><div class=\"co-r\"><b>速写：</b>2013 年创立于成都，钟波创办；智能投影龙头。</div><div class=\"co-r\"><b>主营业务：</b>智能投影仪、激光电视；招牌：XGIMI H/Z 系列。</div><div class=\"co-r\"><b>市场与打法：</b>国内第一 + 出海日欧美；2021 年科创板上市。</div><div class=\"co-r found\"><b>📜 发家史：</b>创始人钟波从晨讯离职，押注「无屏电视」做智能投影。</div><div class=\"co-r turn\"><b>🔑 转折点：</b>把投影从会议室搬进客厅，国内登顶后加速出海。</div><div class=\"co-r look\"><b>💡 看点：</b>中国智能投影出海标杆。<button class=\"fam-btn\" data-fp=\"钟波 Zhong Bo\">📖 名人故事</button></div><div class=\"co-r\">官网：<a class=\"co-site\" href=\"https://www.xgimi.com\" target=\"_blank\" rel=\"noopener\">🌐 https://www.xgimi.com</a></div></div>\n        <div class=\"co\"><div class=\"co-h\"><b>摩飞 Morphy</b><span class=\"co-t sm\">中小</span></div><div class=\"co-r\"><b>速写：</b>英国品牌（中国运营），跨境小家电代表。</div><div class=\"co-r\"><b>主营业务：</b>榨汁杯、电热水壶、料理小家电；招牌：便携榨汁杯。</div><div class=\"co-r\"><b>市场与打法：</b>国内代理 + 跨境出海；颜值小家电。</div><div class=\"co-r found\"><b>📜 发家史：</b>以「便携榨汁杯」在社交电商爆红，带动复古小家电出海。</div><div class=\"co-r turn\"><b>🔑 转折点：</b>靠高颜值小家电在跨境与礼赠场景做高客单。</div><div class=\"co-r look\"><b>💡 看点：</b>「颜值小家电」跨境样本。</div><div class=\"co-r\">官网：<a class=\"co-site\" href=\"https://www.morphyrichards.com.cn\" target=\"_blank\" rel=\"noopener\">🌐 https://www.morphyrichards.com.cn</a></div></div>\n        <div class=\"co\"><div class=\"co-h\"><b>品胜 Pisen</b><span class=\"co-t sm\">中小</span></div><div class=\"co-r\"><b>速写：</b>2003 年创立于深圳；数码电池与配件老牌。</div><div class=\"co-r\"><b>主营业务：</b>手机电池、充电器、数据线；招牌：品胜充电宝/电池。</div><div class=\"co-r\"><b>市场与打法：</b>国内渠道 + 出海；性价比耗材。</div><div class=\"co-r found\"><b>📜 发家史：</b>从手机电池/充电起家，是 3C 配件国民品牌之一。</div><div class=\"co-r turn\"><b>🔑 转折点：</b>从单一电池扩展到全系充电配件，随电商出海。</div><div class=\"co-r look\"><b>💡 看点：</b>3C 配件「国民品牌」的出海延伸。</div><div class=\"co-r\">官网：<a class=\"co-site\" href=\"https://www.pisen.com.cn\" target=\"_blank\" rel=\"noopener\">🌐 https://www.pisen.com.cn</a></div></div>"
        }
      ]
    },
    {
      "title": "Day 9 · 3C跨境企业推荐",
      "tag": "第9天 · 制造龙头·果链与精密制造",
      "blocks": [
        {
          "h": "💡 今日怎么用这笔清单",
          "body": "<p>① 在「亚马逊」「品牌独立站」「阿里巴巴国际站」搜这些品牌的主营品类（充电器/配件/储能/相机），找同类供应商或可合作渠道；② 开发信模板：Hi [Name], we supply [品类] with OEM/private-label, MOQ [X], 附 catalog 与认证（CE/FCC/UL）；③ 关注「CES」「广交会」「环球资源电子展」定向联系；④ 合作前用「天眼查/企查查」核验资质与经营异常，并核查商标/专利授权。</p>"
        },
        {
          "h": "今日推荐 · 4 家（制造龙头·果链与精密制造）",
          "body": "<div class=\"co\"><div class=\"co-h\"><b>立讯精密</b><span class=\"co-t hd\">头部</span></div><div class=\"co-r\"><b>速写：</b>1999 年创立，王来春创办；果链核心与精密制造龙头。</div><div class=\"co-r\"><b>主营业务：</b>连接器、AirPods/Apple Watch 组装、汽车电子；招牌：AirPods 主力代工。</div><div class=\"co-r\"><b>市场与打法：</b>大客户绑定 + 纵向一体化；从连接器到整机代工。</div><div class=\"co-r found\"><b>📜 发家史：</b>创始人王来春出自富士康，1999 年创业做连接器起家。</div><div class=\"co-r turn\"><b>🔑 转折点：</b>切入 AirPods 代工并做到主力供应商，借并购向整车与通信扩张。</div><div class=\"co-r look\"><b>💡 看点：</b>从打工妹到「代工女王」的标杆，中国制造升级样本。<button class=\"fam-btn\" data-fp=\"王来春 Wang Laichun\">📖 名人故事</button></div><div class=\"co-r\">官网：<a class=\"co-site\" href=\"https://www.luxshare-ict.com\" target=\"_blank\" rel=\"noopener\">🌐 https://www.luxshare-ict.com</a></div></div>\n        <div class=\"co\"><div class=\"co-h\"><b>歌尔股份</b><span class=\"co-t hd\">头部</span></div><div class=\"co-r\"><b>速写：</b>2001 年创立于潍坊；声学与 VR/AR 代工龙头。</div><div class=\"co-r\"><b>主营业务：</b>声学器件、VR/AR 头显、智能硬件；招牌：Meta/PSVR 代工。</div><div class=\"co-r\"><b>市场与打法：</b>大客户代工 + 声学技术壁垒；潍坊产业链。</div><div class=\"co-r found\"><b>📜 发家史：</b>从麦克风/扬声器元器件做起，逐步进入国际大厂声学与头显供应链。</div><div class=\"co-r turn\"><b>🔑 转折点：</b>押注 VR/AR 赛道，成为全球头部头显代工厂。</div><div class=\"co-r look\"><b>💡 看点：</b>中国声学 + XR 制造的隐形冠军。</div><div class=\"co-r\">官网：<a class=\"co-site\" href=\"https://www.goertek.com\" target=\"_blank\" rel=\"noopener\">🌐 https://www.goertek.com</a></div></div>\n        <div class=\"co\"><div class=\"co-h\"><b>蓝思科技</b><span class=\"co-t hd\">头部</span></div><div class=\"co-r\"><b>速写：</b>2003 年创立，周群飞创办；全球手机玻璃盖板龙头。</div><div class=\"co-r\"><b>主营业务：</b>手机前后盖玻璃、车载玻璃、蓝宝石；招牌：视窗防护玻璃。</div><div class=\"co-r\"><b>市场与打法：</b>大客户绑定 + 新材料延展；从手机到车载/穿戴。</div><div class=\"co-r found\"><b>📜 发家史：</b>创始人周群飞从手表玻璃创业，抓住手机玻璃化浪潮。</div><div class=\"co-r turn\"><b>🔑 转折点：</b>随智能手机玻璃化成为盖板龙头，并拓展车载与穿戴玻璃。</div><div class=\"co-r look\"><b>💡 看点：</b>从打工到「玻璃女王」的标杆，硬科技制造样本。<button class=\"fam-btn\" data-fp=\"周群飞 Zhou Qunfei\">📖 名人故事</button></div><div class=\"co-r\">官网：<a class=\"co-site\" href=\"https://www.lens.com.cn\" target=\"_blank\" rel=\"noopener\">🌐 https://www.lens.com.cn</a></div></div>\n        <div class=\"co\"><div class=\"co-h\"><b>比亚迪电子</b><span class=\"co-t hd\">头部</span></div><div class=\"co-r\"><b>速写：</b>2007 年分拆于比亚迪；电子制造服务龙头。</div><div class=\"co-r\"><b>主营业务：</b>手机/平板金属结构件、整机组装、汽车电子；招牌：金属中框/组装。</div><div class=\"co-r\"><b>市场与打法：</b>大客户代工 + 垂直整合；依托比亚迪体系。</div><div class=\"co-r found\"><b>📜 发家史：</b>从比亚迪内部电子部门分拆，做手机金属件与组装起家。</div><div class=\"co-r turn\"><b>🔑 转折点：</b>借金属一体化与组装能力，切入更多品牌客户与汽车电子。</div><div class=\"co-r look\"><b>💡 看点：</b>垂直整合型 EMS 的代表。</div><div class=\"co-r\">官网：<a class=\"co-site\" href=\"https://www.byd.com\" target=\"_blank\" rel=\"noopener\">🌐 https://www.byd.com</a></div></div>"
        }
      ]
    },
    {
      "title": "Day 10 · 3C跨境企业推荐",
      "tag": "第10天 · 制造龙头·ODM 与 EMS",
      "blocks": [
        {
          "h": "💡 今日怎么用这笔清单",
          "body": "<p>① 在「亚马逊」「品牌独立站」「阿里巴巴国际站」搜这些品牌的主营品类（充电器/配件/储能/相机），找同类供应商或可合作渠道；② 开发信模板：Hi [Name], we supply [品类] with OEM/private-label, MOQ [X], 附 catalog 与认证（CE/FCC/UL）；③ 关注「CES」「广交会」「环球资源电子展」定向联系；④ 合作前用「天眼查/企查查」核验资质与经营异常，并核查商标/专利授权。</p>"
        },
        {
          "h": "今日推荐 · 4 家（制造龙头·ODM 与电子制造服务）",
          "body": "<div class=\"co\"><div class=\"co-h\"><b>闻泰科技</b><span class=\"co-t hd\">头部</span></div><div class=\"co-r\"><b>速写：</b>2007 年创立于嘉兴；ODM 与半导体双主业。</div><div class=\"co-r\"><b>主营业务：</b>手机/笔电 ODM、功率半导体（安世）；招牌：手机 ODM 龙头。</div><div class=\"co-r\"><b>市场与打法：</b>ODM 规模 + 半导体并购；嘉兴/无锡布局。</div><div class=\"co-r found\"><b>📜 发家史：</b>从手机方案设计（IDH）起家，做到全球手机 ODM 龙头。</div><div class=\"co-r turn\"><b>🔑 转折点：</b>收购安世半导体，切入功率半导体，形成「ODM + 半导体」双轮。</div><div class=\"co-r look\"><b>💡 看点：</b>从 ODM 走向半导体的升级样本。</div><div class=\"co-r\">官网：<a class=\"co-site\" href=\"https://www.wingtech.com\" target=\"_blank\" rel=\"noopener\">🌐 https://www.wingtech.com</a></div></div>\n        <div class=\"co\"><div class=\"co-h\"><b>工业富联</b><span class=\"co-t hd\">头部</span></div><div class=\"co-r\"><b>速写：</b>2018 年上市；富士康工业互联网主体。</div><div class=\"co-r\"><b>主营业务：</b>云计算服务器、通信设备、精密制造；招牌：AI 服务器代工。</div><div class=\"co-r\"><b>市场与打法：</b>大客户绑定 + 智能制造；郑州/深圳基地。</div><div class=\"co-r found\"><b>📜 发家史：</b>承接富士康大陆电子制造资产，2018 年 A 股上市。</div><div class=\"co-r turn\"><b>🔑 转折点：</b>乘 AI 算力浪潮，成为 AI 服务器与网络设备核心代工厂。</div><div class=\"co-r look\"><b>💡 看点：</b>电子制造向「智能制造 + 算力」升级的样本。</div><div class=\"co-r\">官网：<a class=\"co-site\" href=\"https://www.fii-foxconn.com\" target=\"_blank\" rel=\"noopener\">🌐 https://www.fii-foxconn.com</a></div></div>\n        <div class=\"co\"><div class=\"co-h\"><b>领益智造</b><span class=\"co-t hd\">头部</span></div><div class=\"co-r\"><b>速写：</b>深圳起家的精密制造龙头，消费电子功能件。</div><div class=\"co-r\"><b>主营业务：</b>精密结构件、模切、散热/充电模组；招牌：手机功能件。</div><div class=\"co-r\"><b>市场与打法：</b>大客户代工 + 横向并购；从功能件到总成。</div><div class=\"co-r found\"><b>📜 发家史：</b>从模切/结构小件做起，并购扩张成消费电子功能件龙头。</div><div class=\"co-r turn\"><b>🔑 转折点：</b>从单一功能件延伸到模组与总成，并布局新能源与汽车。</div><div class=\"co-r look\"><b>💡 看点：</b>消费电子「功能件隐形冠军」升级样本。</div><div class=\"co-r\">官网：<a class=\"co-site\" href=\"https://www.lingyiitech.com\" target=\"_blank\" rel=\"noopener\">🌐 https://www.lingyiitech.com</a></div></div>\n        <div class=\"co\"><div class=\"co-h\"><b>光弘科技</b><span class=\"co-t sm\">中小</span></div><div class=\"co-r\"><b>速写：</b>惠州起家的 EMS 电子制造服务商。</div><div class=\"co-r\"><b>主营业务：</b>手机/网通/汽车电子代工；招牌：品牌 EMS 服务。</div><div class=\"co-r\"><b>市场与打法：</b>大客户 EMS + 多基地；惠州/印度布局。</div><div class=\"co-r found\"><b>📜 发家史：</b>从消费电子代工起步，做品牌客户的 EMS 服务。</div><div class=\"co-r turn\"><b>🔑 转折点：</b>拓展网通与汽车电子代工，海外建厂贴近客户。</div><div class=\"co-r look\"><b>💡 看点：</b>中型 EMS 出海跟随客户的样本。</div><div class=\"co-r\">官网：<a class=\"co-site\" href=\"https://www.ktk.com.cn\" target=\"_blank\" rel=\"noopener\">🌐 https://www.ktk.com.cn</a></div></div>"
        }
      ]
    },
    {
      "title": "Day 11 · 3C跨境企业推荐",
      "tag": "第11天 · 通信与手机出海",
      "blocks": [
        {
          "h": "💡 今日怎么用这笔清单",
          "body": "<p>① 在「亚马逊」「品牌独立站」「阿里巴巴国际站」搜这些品牌的主营品类（充电器/配件/储能/相机），找同类供应商或可合作渠道；② 开发信模板：Hi [Name], we supply [品类] with OEM/private-label, MOQ [X], 附 catalog 与认证（CE/FCC/UL）；③ 关注「CES」「广交会」「环球资源电子展」定向联系；④ 合作前用「天眼查/企查查」核验资质与经营异常，并核查商标/专利授权。</p>"
        },
        {
          "h": "今日推荐 · 4 家（通信与手机出海标杆）",
          "body": "<div class=\"co\"><div class=\"co-h\"><b>华为</b><span class=\"co-t hd\">头部</span></div><div class=\"co-r\"><b>速写：</b>1987 年任正非创立于深圳；全球通信与智能终端巨头。</div><div class=\"co-r\"><b>主营业务：</b>运营商网络、手机与消费者业务、华为云、智能汽车；招牌：5G/鸿蒙/Mate。</div><div class=\"co-r\"><b>市场与打法：</b>全球运营商 + 消费者双线；研发驱动、压强式投入。</div><div class=\"co-r found\"><b>📜 发家史：</b>1987 年任正非以 2.1 万元创立，靠代理交换机起家，以「农村包围城市」做大。</div><div class=\"co-r turn\"><b>🔑 转折点：</b>2019 年被美制裁后转向鸿蒙与国产供应链，把「备胎」转正，走通自主可控。</div><div class=\"co-r look\"><b>💡 看点：</b>中国硬科技出海与自主可控的范本。<button class=\"fam-btn\" data-fp=\"任正非 Ren Zhengfei\">📖 名人故事</button></div><div class=\"co-r\">官网：<a class=\"co-site\" href=\"https://www.huawei.com\" target=\"_blank\" rel=\"noopener\">🌐 https://www.huawei.com</a></div></div>\n        <div class=\"co\"><div class=\"co-h\"><b>小米</b><span class=\"co-t hd\">头部</span></div><div class=\"co-r\"><b>速写：</b>2010 年雷军创立于北京；手机与 AIoT 生态巨头。</div><div class=\"co-r\"><b>主营业务：</b>手机、AIoT（电视/穿戴/配件）、汽车；招牌：Redmi/小米生态。</div><div class=\"co-r\"><b>市场与打法：</b>性价比 + 生态链 + 全球扩张；印度/欧洲强势。</div><div class=\"co-r found\"><b>📜 发家史：</b>雷军 2010 年联合创办，以「铁人三项」互联网模式做高性价比手机。</div><div class=\"co-r turn\"><b>🔑 转折点：</b>从手机扩展到 AIoT 与汽车，并借生态链把 3C 配件卖向全球。</div><div class=\"co-r look\"><b>💡 看点：</b>用「生态链 + 性价比」把 3C 卖遍全球的样本。<button class=\"fam-btn\" data-fp=\"雷军 Lei Jun\">📖 名人故事</button></div><div class=\"co-r\">官网：<a class=\"co-site\" href=\"https://www.mi.com\" target=\"_blank\" rel=\"noopener\">🌐 https://www.mi.com</a></div></div>\n        <div class=\"co\"><div class=\"co-h\"><b>TCL</b><span class=\"co-t hd\">头部</span></div><div class=\"co-r\"><b>速写：</b>1981 年创立于惠州；TV 与面板出海龙头。</div><div class=\"co-r\"><b>主营业务：</b>电视、面板（TCL 华星）、手机；招牌：Mini LED 电视。</div><div class=\"co-r\"><b>市场与打法：</b>品牌出海 + 体育营销；北美/欧洲 TV 强势。</div><div class=\"co-r found\"><b>📜 发家史：</b>从磁带/电话起家，2000 年代通过并购（汤姆逊/阿尔卡特）走向全球。</div><div class=\"co-r turn\"><b>🔑 转折点：</b>押注大屏与 Mini LED，并自研面板（华星）向上游延伸。</div><div class=\"co-r look\"><b>💡 看点：</b>中国家电「品牌 + 面板」出海的标杆。</div><div class=\"co-r\">官网：<a class=\"co-site\" href=\"https://www.tcl.com\" target=\"_blank\" rel=\"noopener\">🌐 https://www.tcl.com</a></div></div>\n        <div class=\"co\"><div class=\"co-h\"><b>传音控股</b><span class=\"co-t hd\">头部</span></div><div class=\"co-r\"><b>速写：</b>2006 年创立于深圳；「非洲手机之王」。</div><div class=\"co-r\"><b>主营业务：</b>手机（TECNO/itel/Infinix）、数码配件；招牌：深肤色拍照手机。</div><div class=\"co-r\"><b>市场与打法：</b>聚焦非洲与新兴市场；本地化运营。</div><div class=\"co-r found\"><b>📜 发家史：</b>避开国内红海，锁定非洲，做深肤色拍照与长续航等本地化功能。</div><div class=\"co-r turn\"><b>🔑 转折点：</b>从非洲扩展到南亚/中东，成新兴市场手机龙头，2019 年科创板上市。</div><div class=\"co-r look\"><b>💡 看点：</b>「下沉市场本地化」出海的极致样本。</div><div class=\"co-r\">官网：<a class=\"co-site\" href=\"https://www.transsion.com\" target=\"_blank\" rel=\"noopener\">🌐 https://www.transsion.com</a></div></div>"
        }
      ]
    },
    {
      "title": "Day 12 · 3C跨境企业推荐",
      "tag": "第12天 · 无人机/安防/光电",
      "blocks": [
        {
          "h": "💡 今日怎么用这笔清单",
          "body": "<p>① 在「亚马逊」「品牌独立站」「阿里巴巴国际站」搜这些品牌的主营品类（充电器/配件/储能/相机），找同类供应商或可合作渠道；② 开发信模板：Hi [Name], we supply [品类] with OEM/private-label, MOQ [X], 附 catalog 与认证（CE/FCC/UL）；③ 关注「CES」「广交会」「环球资源电子展」定向联系；④ 合作前用「天眼查/企查查」核验资质与经营异常，并核查商标/专利授权。</p>"
        },
        {
          "h": "今日推荐 · 4 家（无人机/安防/光电龙头）",
          "body": "<div class=\"co\"><div class=\"co-h\"><b>大疆 DJI</b><span class=\"co-t hd\">头部</span></div><div class=\"co-r\"><b>速写：</b>2006 年汪滔创立于深圳；全球消费级无人机霸主。</div><div class=\"co-r\"><b>主营业务：</b>消费/行业无人机、云台、影像；招牌：Mavic/Air 系列。</div><div class=\"co-r\"><b>市场与打法：</b>全球品牌 + 技术壁垒；深圳研发。</div><div class=\"co-r found\"><b>📜 发家史：</b>汪滔从香港科大创业，把多旋翼飞控做成消费级无人机。</div><div class=\"co-r turn\"><b>🔑 转折点：</b>用飞控与影像技术垄断消费无人机，并向行业应用延伸。</div><div class=\"co-r look\"><b>💡 看点：</b>中国硬科技「品类开创者」出海标杆。</div><div class=\"co-r\">官网：<a class=\"co-site\" href=\"https://www.dji.com\" target=\"_blank\" rel=\"noopener\">🌐 https://www.dji.com</a></div></div>\n        <div class=\"co\"><div class=\"co-h\"><b>海康威视</b><span class=\"co-t hd\">头部</span></div><div class=\"co-r\"><b>速写：</b>2001 年创立于杭州；全球安防龙头。</div><div class=\"co-r\"><b>主营业务：</b>视频监控、AI 摄像头、物联感知；招牌：安防解决方案。</div><div class=\"co-r\"><b>市场与打法：</b>全球渠道 + 政府/行业客户；海外本地化。</div><div class=\"co-r found\"><b>📜 发家史：</b>脱胎于中电科，做视频压缩板卡起家，成长为安防龙头。</div><div class=\"co-r turn\"><b>🔑 转折点：</b>从硬件到「视频 + AI」物联，海外多区域本地化运营。</div><div class=\"co-r look\"><b>💡 看点：</b>中国安防出海龙头。</div><div class=\"co-r\">官网：<a class=\"co-site\" href=\"https://www.hikvision.com\" target=\"_blank\" rel=\"noopener\">🌐 https://www.hikvision.com</a></div></div>\n        <div class=\"co\"><div class=\"co-h\"><b>舜宇光学</b><span class=\"co-t hd\">头部</span></div><div class=\"co-r\"><b>速写：</b>1984 年创立于宁波；光学镜头与模组龙头。</div><div class=\"co-r\"><b>主营业务：</b>手机镜头、车载镜头、光学模组；招牌：手机/车载光学。</div><div class=\"co-r\"><b>市场与打法：</b>大客户绑定 + 光学技术；宁波产业链。</div><div class=\"co-r found\"><b>📜 发家史：</b>从光学冷加工小厂做起，切入手机与车载镜头。</div><div class=\"co-r turn\"><b>🔑 转折点：</b>受益手机多摄与汽车智能化，成光学镜头核心供应商。</div><div class=\"co-r look\"><b>💡 看点：</b>中国光学「隐形冠军」出海样本。</div><div class=\"co-r\">官网：<a class=\"co-site\" href=\"https://www.sunnyoptical.com\" target=\"_blank\" rel=\"noopener\">🌐 https://www.sunnyoptical.com</a></div></div>\n        <div class=\"co\"><div class=\"co-h\"><b>冠捷科技</b><span class=\"co-t hd\">头部</span></div><div class=\"co-r\"><b>速写：</b>显示器制造龙头，AOC/PHILIPS 品牌运营。</div><div class=\"co-r\"><b>主营业务：</b>显示器、电视代工与品牌；招牌：AOC 显示器。</div><div class=\"co-r\"><b>市场与打法：</b>品牌 + EMS 双线；全球显示制造。</div><div class=\"co-r found\"><b>📜 发家史：</b>从显示器代工起家，运营 AOC 等品牌并收购 PHILIPS 显示业务。</div><div class=\"co-r turn\"><b>🔑 转折点：</b>在显示红海里以规模与品牌运营守住地位，并拓展商用显示。</div><div class=\"co-r look\"><b>💡 看点：</b>中国显示制造的全球样本。</div><div class=\"co-r\">官网：<a class=\"co-site\" href=\"https://www.tpv-tech.com\" target=\"_blank\" rel=\"noopener\">🌐 https://www.tpv-tech.com</a></div></div>"
        }
      ]
    },
    {
      "title": "Day 13 · 3C跨境企业推荐",
      "tag": "第13天 · 电池与能源部件",
      "blocks": [
        {
          "h": "💡 今日怎么用这笔清单",
          "body": "<p>① 在「亚马逊」「品牌独立站」「阿里巴巴国际站」搜这些品牌的主营品类（充电器/配件/储能/相机），找同类供应商或可合作渠道；② 开发信模板：Hi [Name], we supply [品类] with OEM/private-label, MOQ [X], 附 catalog 与认证（CE/FCC/UL）；③ 关注「CES」「广交会」「环球资源电子展」定向联系；④ 合作前用「天眼查/企查查」核验资质与经营异常，并核查商标/专利授权。</p>"
        },
        {
          "h": "今日推荐 · 4 家（电池与能源部件）",
          "body": "<div class=\"co\"><div class=\"co-h\"><b>欣旺达</b><span class=\"co-t hd\">头部</span></div><div class=\"co-r\"><b>速写：</b>1997 年创立于深圳；锂电池 Pack 与储能龙头。</div><div class=\"co-r\"><b>主营业务：</b>手机/笔电电池、动力电池、储能；招牌：3C 电池 Pack。</div><div class=\"co-r\"><b>市场与打法：</b>大客户绑定 + 动力/储能延展；深圳/惠州基地。</div><div class=\"co-r found\"><b>📜 发家史：</b>从锂电池 Pack 起家，做进手机与笔电大厂供应链。</div><div class=\"co-r turn\"><b>🔑 转折点：</b>从 3C 电池延伸到动力电池与储能，构建能源矩阵。</div><div class=\"co-r look\"><b>💡 看点：</b>3C 电池 Pack 龙头的能源化升级样本。</div><div class=\"co-r\">官网：<a class=\"co-site\" href=\"https://www.sunwoda.com\" target=\"_blank\" rel=\"noopener\">🌐 https://www.sunwoda.com</a></div></div>\n        <div class=\"co\"><div class=\"co-h\"><b>亿纬锂能</b><span class=\"co-t hd\">头部</span></div><div class=\"co-r\"><b>速写：</b>2001 年创立于惠州；锂原电池与动力电池龙头。</div><div class=\"co-r\"><b>主营业务：</b>锂原电池、动力/储能电池；招牌：圆柱/方形电芯。</div><div class=\"co-r\"><b>市场与打法：</b>技术驱动 + 多场景电池；惠州布局。</div><div class=\"co-r found\"><b>📜 发家史：</b>从锂原电池（电表/胎压）起家，扩展到动力与储能。</div><div class=\"co-r turn\"><b>🔑 转折点：</b>押注圆柱与储能电芯，进入国际车企与储能供应链。</div><div class=\"co-r look\"><b>💡 看点：</b>从锂原到动力/储能的电池样本。</div><div class=\"co-r\">官网：<a class=\"co-site\" href=\"https://www.evebattery.com\" target=\"_blank\" rel=\"noopener\">🌐 https://www.evebattery.com</a></div></div>\n        <div class=\"co\"><div class=\"co-h\"><b>德赛电池</b><span class=\"co-t sm\">中小</span></div><div class=\"co-r\"><b>速写：</b>惠州起家的锂电池 Pack 企业（德赛集团）。</div><div class=\"co-r\"><b>主营业务：</b>手机/笔电电池 Pack、储能；招牌：3C 电池Pack。</div><div class=\"co-r\"><b>市场与打法：</b>大客户代工 + 新能源；惠州基地。</div><div class=\"co-r found\"><b>📜 发家史：</b>依托德赛集团电子背景，做电池 Pack 起家。</div><div class=\"co-r turn\"><b>🔑 转折点：</b>从 3C 电池 Pack 向储能与动力电池延展。</div><div class=\"co-r look\"><b>💡 看点：</b>3C 电池 Pack 出海配套样本。</div><div class=\"co-r\">官网：<a class=\"co-site\" href=\"https://www.desay.com\" target=\"_blank\" rel=\"noopener\">🌐 https://www.desay.com</a></div></div>\n        <div class=\"co\"><div class=\"co-h\"><b>深科技</b><span class=\"co-t sm\">中小</span></div><div class=\"co-r\"><b>速写：</b>深圳起家的 EMS 与存储封测企业。</div><div class=\"co-r\"><b>主营业务：</b>硬盘/存储封测、EMS、新能源；招牌：高端制造服务。</div><div class=\"co-r\"><b>市场与打法：</b>大客户 EMS + 封测；深圳/成都布局。</div><div class=\"co-r found\"><b>📜 发家史：</b>从外资电子代工起家，发展为本土高端 EMS 与封测。</div><div class=\"co-r turn\"><b>🔑 转折点：</b>切入存储封测与高端制造，服务国际大厂。</div><div class=\"co-r look\"><b>💡 看点：</b>本土高端 EMS 与封测样本。</div><div class=\"co-r\">官网：<a class=\"co-site\" href=\"https://www.kaifa.com\" target=\"_blank\" rel=\"noopener\">🌐 https://www.kaifa.com</a></div></div>"
        }
      ]
    },
    {
      "title": "Day 14 · 3C跨境企业推荐",
      "tag": "第14天 · 新锐手机与游戏出海",
      "blocks": [
        {
          "h": "💡 今日怎么用这笔清单",
          "body": "<p>① 在「亚马逊」「品牌独立站」「阿里巴巴国际站」搜这些品牌的主营品类（充电器/配件/储能/相机），找同类供应商或可合作渠道；② 开发信模板：Hi [Name], we supply [品类] with OEM/private-label, MOQ [X], 附 catalog 与认证（CE/FCC/UL）；③ 关注「CES」「广交会」「环球资源电子展」定向联系；④ 合作前用「天眼查/企查查」核验资质与经营异常，并核查商标/专利授权。</p>"
        },
        {
          "h": "今日推荐 · 4 家（新锐手机与游戏出海品牌）",
          "body": "<div class=\"co\"><div class=\"co-h\"><b>realme</b><span class=\"co-t sm\">中小</span></div><div class=\"co-r\"><b>速写：</b>OPPO 系出海手机品牌，2018 年成立。</div><div class=\"co-r\"><b>主营业务：</b>智能手机、AIoT；招牌：性价比潮玩手机。</div><div class=\"co-r\"><b>市场与打法：</b>聚焦新兴市场 + 线上；印度/东南亚强势。</div><div class=\"co-r found\"><b>📜 发家史：</b>作为 OPPO 出海子品牌，主打年轻与性价比快速起量。</div><div class=\"co-r turn\"><b>🔑 转折点：</b>在印度/东南亚以「潮玩 + 快迭代」站稳，反向输入国内。</div><div class=\"co-r look\"><b>💡 看点：</b>手机「子品牌出海」的样本。</div><div class=\"co-r\">官网：<a class=\"co-site\" href=\"https://www.realme.com\" target=\"_blank\" rel=\"noopener\">🌐 https://www.realme.com</a></div></div>\n        <div class=\"co\"><div class=\"co-h\"><b>一加 OnePlus</b><span class=\"co-t sm\">中小</span></div><div class=\"co-r\"><b>速写：</b>OPPO 系高端手机品牌，2013 年成立。</div><div class=\"co-r\"><b>主营业务：</b>智能手机、耳机；招牌：旗舰 Killer。</div><div class=\"co-r\"><b>市场与打法：</b>海外社区 + 旗舰策略；欧美/印度强势。</div><div class=\"co-r found\"><b>📜 发家史：</b>以「不将就」旗舰与海外论坛社区起家，积累极客口碑。</div><div class=\"co-r turn\"><b>🔑 转折点：</b>从极客旗舰扩展到主流价位，并入 OPPO 体系协同。</div><div class=\"co-r look\"><b>💡 看点：</b>手机「社区出海」的范本。</div><div class=\"co-r\">官网：<a class=\"co-site\" href=\"https://www.oneplus.com\" target=\"_blank\" rel=\"noopener\">🌐 https://www.oneplus.com</a></div></div>\n        <div class=\"co\"><div class=\"co-h\"><b>黑鲨 Black Shark</b><span class=\"co-t sm\">中小</span></div><div class=\"co-r\"><b>速写：</b>游戏手机品牌（小米生态），2018 年成立。</div><div class=\"co-r\"><b>主营业务：</b>游戏手机、游戏外设；招牌：磁动力肩键。</div><div class=\"co-r\"><b>市场与打法：</b>国内 + 出海；游戏垂直人群。</div><div class=\"co-r found\"><b>📜 发家史：</b>依托小米生态做游戏手机细分赛道，靠外设创新出圈。</div><div class=\"co-r turn\"><b>🔑 转折点：</b>在游戏手机红海里以散热与外设差异化，拓展海外。</div><div class=\"co-r look\"><b>💡 看点：</b>手机「垂直细分出海」样本。</div><div class=\"co-r\">官网：<a class=\"co-site\" href=\"https://www.blackshark.com\" target=\"_blank\" rel=\"noopener\">🌐 https://www.blackshark.com</a></div></div>\n        <div class=\"co\"><div class=\"co-h\"><b>红魔 Red Magic</b><span class=\"co-t sm\">中小</span></div><div class=\"co-r\"><b>速写：</b>努比亚/中兴系游戏手机品牌。</div><div class=\"co-r\"><b>主营业务：</b>游戏手机、游戏配件；招牌：内置风扇散热。</div><div class=\"co-r\"><b>市场与打法：</b>国内 + 出海；游戏电竞人群。</div><div class=\"co-r found\"><b>📜 发家史：</b>以「内置风扇」主动散热切入游戏手机，做出差异化。</div><div class=\"co-r turn\"><b>🔑 转折点：</b>从游戏手机扩展到电竞生态与外设，拓展海外。</div><div class=\"co-r look\"><b>💡 看点：</b>游戏手机「性能差异化」出海样本。</div><div class=\"co-r\">官网：<a class=\"co-site\" href=\"https://www.redmagic.gg\" target=\"_blank\" rel=\"noopener\">🌐 https://www.redmagic.gg</a></div></div>"
        }
      ]
    }
  ],
  "news": [
    {
      "title": "全球供应链的重构",
      "tag": "第1天 · 经济·地缘",
      "blocks": [
        {
          "h": "🔍 怎么读这条新闻",
          "body": "<p>① 先辨信源：优先官方媒体（新华社/央视）、主流通讯社（路透/美联）；营销号、群聊截图先打问号；② 一条新闻问三问：谁发的？证据呢？和我/市场有什么关系？③ 追实时用「央视新闻」「人民日报」公众号或 BBC/Reuters 官网，少看二次剪辑；④ 重大事件等 24 小时再看定论，避免被反转打脸。</p>"
        },
        {
          "h": "热点",
          "body": "<p>\"Just in time\"（准时制）供应链在疫情与地缘冲击下暴露脆弱，各国开始把\"效率优先\"调整为\"安全+效率\"。</p>"
        },
        {
          "h": "关键看点",
          "body": "<ul><li>近岸外包(nearshoring)与友岸外包(friend-shoring)升温</li><li>半导体、新能源被多国列为战略资产</li><li>企业从\"成本最低\"转向\"风险可控\"</li></ul>"
        },
        {
          "h": "为何重要",
          "body": "<p>供应链地图的重画，直接决定未来十年的产业迁移、就业与物价。它离普通人的菜篮子和工资条，比新闻标题近得多。</p>"
        }
      ]
    },
    {
      "title": "人工智能的拐点",
      "tag": "第2天 · 科技",
      "blocks": [
        {
          "h": "🔍 怎么读这条新闻",
          "body": "<p>① 先辨信源：优先官方媒体（新华社/央视）、主流通讯社（路透/美联）；营销号、群聊截图先打问号；② 一条新闻问三问：谁发的？证据呢？和我/市场有什么关系？③ 追实时用「央视新闻」「人民日报」公众号或 BBC/Reuters 官网，少看二次剪辑；④ 重大事件等 24 小时再看定论，避免被反转打脸。</p>"
        },
        {
          "h": "热点",
          "body": "<p>大模型从\"会聊天\"走向\"能干活\"，Agent（智能体）开始接管流程型任务，生产力范式正在切换。</p>"
        },
        {
          "h": "关键看点",
          "body": "<ul><li>算力、数据、能源成为新\"石油\"</li><li>白领工作的边界被重新定义</li><li>监管与安全问题同步升温</li></ul>"
        },
        {
          "h": "为何重要",
          "body": "<p>这轮技术不是又一个 App，而是可能重写\"人如何工作\"。早理解、早驾驭者，将拿到新红利。</p>"
        }
      ]
    },
    {
      "title": "🔥 跨境平台三国杀：Temu vs SHEIN vs TikTok Shop",
      "tag": "商战 · 跨境电商",
      "blocks": [
        {
          "h": "🔍 怎么读这条新闻",
          "body": "<p>① 先辨信源：优先官方媒体（新华社/央视）、主流通讯社（路透/美联）；营销号、群聊截图先打问号；② 一条新闻问三问：谁发的？证据呢？和我/市场有什么关系？③ 追实时用「央视新闻」「人民日报」公众号或 BBC/Reuters 官网，少看二次剪辑；④ 重大事件等 24 小时再看定论，避免被反转打脸。</p>"
        },
        {
          "h": "🔥 商战现场",
          "body": "<p>拼多多旗下 Temu、快时尚 SHEIN、字节的 TikTok Shop 在海外贴身肉搏：Temu 用全托管+极致低价横扫欧美，SHEIN 守柔性快反供应链，TikTok Shop 拿短视频流量切内容电商的蛋糕。三方抢的是同一批中国工厂与海外用户。</p>"
        },
        {
          "h": "关键看点",
          "body": "<ul><li>全托管 vs 半托管之争，谁更轻、谁更控货</li><li>低价补贴换规模，烧钱换市场能撑多久</li><li>小包裹关税、数据与合规，是三方共同的天花板</li></ul>"
        },
        {
          "h": "为何重要",
          "body": "<p>这三家本质是中国供应链出海的三种打法。做外贸/跨境的人，看的不是热闹，是选平台、定渠道、避风险的活教材——商战怎么打，订单就往哪流。</p>"
        }
      ]
    },
    {
      "title": "能源转型的拉锯",
      "tag": "第3天 · 气候·经济",
      "blocks": [
        {
          "h": "🔍 怎么读这条新闻",
          "body": "<p>① 先辨信源：优先官方媒体（新华社/央视）、主流通讯社（路透/美联）；营销号、群聊截图先打问号；② 一条新闻问三问：谁发的？证据呢？和我/市场有什么关系？③ 追实时用「央视新闻」「人民日报」公众号或 BBC/Reuters 官网，少看二次剪辑；④ 重大事件等 24 小时再看定论，避免被反转打脸。</p>"
        },
        {
          "h": "热点",
          "body": "<p>新能源装机狂飙，但电网、储能、关键矿物仍卡脖子，\"转型\"与\"保供\"长期拉锯。</p>"
        },
        {
          "h": "关键看点",
          "body": "<ul><li>光伏、风电成本持续下探</li><li>锂、镍、稀土成地缘焦点</li><li>极端天气抬高能源安全权重</li></ul>"
        },
        {
          "h": "为何重要",
          "body": "<p>能源是工业的血液。谁掌握清洁且自主的能源体系，谁就握住未来制造与话语权的底牌。</p>"
        }
      ]
    },
    {
      "title": "人口结构的长波",
      "tag": "第4天 · 社会",
      "blocks": [
        {
          "h": "🔍 怎么读这条新闻",
          "body": "<p>① 先辨信源：优先官方媒体（新华社/央视）、主流通讯社（路透/美联）；营销号、群聊截图先打问号；② 一条新闻问三问：谁发的？证据呢？和我/市场有什么关系？③ 追实时用「央视新闻」「人民日报」公众号或 BBC/Reuters 官网，少看二次剪辑；④ 重大事件等 24 小时再看定论，避免被反转打脸。</p>"
        },
        {
          "h": "热点",
          "body": "<p>多国步入老龄化与低生育率，劳动力收缩、养老金承压，人口红利转向\"人才红利\"难题。</p>"
        },
        {
          "h": "关键看点",
          "body": "<ul><li>延迟退休与机器人补位并行</li><li>银发经济成新蓝海</li><li>移民政策成为政治焦点</li></ul>"
        },
        {
          "h": "为何重要",
          "body": "<p>人口是最慢的变量，却是最硬的约束。它决定消费结构、资产价格与一国几十年后的样子。</p>"
        }
      ]
    },
    {
      "title": "🔥 芯片算力大战：英伟达 vs 自研阵营",
      "tag": "商战 · 半导体",
      "blocks": [
        {
          "h": "🔍 怎么读这条新闻",
          "body": "<p>① 先辨信源：优先官方媒体（新华社/央视）、主流通讯社（路透/美联）；营销号、群聊截图先打问号；② 一条新闻问三问：谁发的？证据呢？和我/市场有什么关系？③ 追实时用「央视新闻」「人民日报」公众号或 BBC/Reuters 官网，少看二次剪辑；④ 重大事件等 24 小时再看定论，避免被反转打脸。</p>"
        },
        {
          "h": "🔥 商战现场",
          "body": "<p>生成式 AI 引爆算力饥渴，英伟达靠 GPU+CUDA 生态一家独大；华为昇腾、AMD、谷歌 TPU、亚马逊 Trainium 集体围攻，国产替代与「去英伟达化」同步提速。</p>"
        },
        {
          "h": "关键看点",
          "body": "<ul><li>CUDA 生态护城河 vs 开源框架（PyTorch / 昇腾 CANN）突围</li><li>高端制程受限下的架构与封装创新</li><li>云厂商自研芯片，把「租算力」变「自己造」</li></ul>"
        },
        {
          "h": "为何重要",
          "body": "<p>算力是 AI 时代的「军火」。这场商战决定的不只是股价，更是各国科技主权的底牌，也直接影响你用的每个 AI 工具的成本与可得性。</p>"
        }
      ]
    },
    {
      "title": "货币与地缘",
      "tag": "第5天 · 金融·地缘",
      "blocks": [
        {
          "h": "🔍 怎么读这条新闻",
          "body": "<p>① 先辨信源：优先官方媒体（新华社/央视）、主流通讯社（路透/美联）；营销号、群聊截图先打问号；② 一条新闻问三问：谁发的？证据呢？和我/市场有什么关系？③ 追实时用「央视新闻」「人民日报」公众号或 BBC/Reuters 官网，少看二次剪辑；④ 重大事件等 24 小时再看定论，避免被反转打脸。</p>"
        },
        {
          "h": "热点",
          "body": "<p>多极化趋势下，结算货币多元化讨论升温，黄金与数字货币被重新定价。</p>"
        },
        {
          "h": "关键看点",
          "body": "<ul><li>美元地位面临缓慢侵蚀而非崩溃</li><li>央行购金��历史高位</li><li>跨境支付系统多线并行</li></ul>"
        },
        {
          "h": "为何重要",
          "body": "<p>货币即权力。结算体系的松动，意味着全球财富与影响力的版图正在悄悄重排。</p>"
        }
      ]
    },
    {
      "title": "粮食安全警钟",
      "tag": "第6天 · 农业·气候",
      "blocks": [
        {
          "h": "🔍 怎么读这条新闻",
          "body": "<p>① 先辨信源：优先官方媒体（新华社/央视）、主流通讯社（路透/美联）；营销号、群聊截图先打问号；② 一条新闻问三问：谁发的？证据呢？和我/市场有什么关系？③ 追实时用「央视新闻」「人民日报」公众号或 BBC/Reuters 官网，少看二次剪辑；④ 重大事件等 24 小时再看定论，避免被反转打脸。</p>"
        },
        {
          "h": "热点",
          "body": "<p>极端气候与地缘冲突叠加，小麦、稻米等主粮价格波动加剧，\"舌尖上的安全\"被重新重视。</p>"
        },
        {
          "h": "关键看点",
          "body": "<ul><li>主产区天气成为价格催化剂</li><li>种子与耕地是隐形战略资源</li><li>垂直农业、合成蛋白受资本青睐</li></ul>"
        },
        {
          "h": "为何重要",
          "body": "<p>粮价是百价之基。它牵动通胀、社会稳定与外交筹码，是最朴素也最致命的安全线。</p>"
        }
      ]
    },
    {
      "title": "🔥 电动车价格战：比亚迪 vs 特斯拉",
      "tag": "商战 · 新能源",
      "blocks": [
        {
          "h": "🔍 怎么读这条新闻",
          "body": "<p>① 先辨信源：优先官方媒体（新华社/央视）、主流通讯社（路透/美联）；营销号、群聊截图先打问号；② 一条新闻问三问：谁发的？证据呢？和我/市场有什么关系？③ 追实时用「央视新闻」「人民日报」公众号或 BBC/Reuters 官网，少看二次剪辑；④ 重大事件等 24 小时再看定论，避免被反转打脸。</p>"
        },
        {
          "h": "🔥 商战现场",
          "body": "<p>比亚迪凭垂直整合与多品牌矩阵在国内碾压，特斯拉用降价+低成本制造守住份额；双方在欧洲、东南亚、拉美正面交锋，价格战从国内卷到全球。</p>"
        },
        {
          "h": "关键看点",
          "body": "<ul><li>垂直整合（自产电池/芯片）vs 软件定义汽车的两条路线</li><li>出海建厂与关税博弈，谁先本地化谁更稳</li><li>盈利与份额的跷跷板：降价换量能撑多久</li></ul>"
        },
        {
          "h": "为何重要",
          "body": "<p>电动车是继手机后最卷的制造业。看懂这场仗，就看懂中国制造的升级与全球化怎么打，也看懂你下一辆车的价格锚点。</p>"
        }
      ]
    },
    {
      "title": "太空：新边疆",
      "tag": "第7天 · 科技·地缘",
      "blocks": [
        {
          "h": "🔍 怎么读这条新闻",
          "body": "<p>① 先辨信源：优先官方媒体（新华社/央视）、主流通讯社（路透/美联）；营销号、群聊截图先打问号；② 一条新闻问三问：谁发的？证据呢？和我/市场有什么关系？③ 追实时用「央视新闻」「人民日报」公众号或 BBC/Reuters 官网，少看二次剪辑；④ 重大事件等 24 小时再看定论，避免被反转打脸。</p>"
        },
        {
          "h": "热点",
          "body": "<p>商业航天爆发，低轨卫星星座与月球探测升温，太空从科研走向产业与战略角力。</p>"
        },
        {
          "h": "关键看点",
          "body": "<ul><li>卫星互联网改写连接格局</li><li>近地轨道资源稀缺性上升</li><li>太空规则制定权成新战场</li></ul>"
        },
        {
          "h": "为何重要",
          "body": "<p>谁定义太空规则，谁就定义下一代通信、导航与安全的底层秩序。</p>"
        }
      ]
    },
    {
      "title": "数据与主权",
      "tag": "第8天 · 科技·治理",
      "blocks": [
        {
          "h": "🔍 怎么读这条新闻",
          "body": "<p>① 先辨信源：优先官方媒体（新华社/央视）、主流通讯社（路透/美联）；营销号、群聊截图先打问号；② 一条新闻问三问：谁发的？证据呢？和我/市场有什么关系？③ 追实时用「央视新闻」「人民日报」公众号或 BBC/Reuters 官网，少看二次剪辑；④ 重大事件等 24 小时再看定论，避免被反转打脸。</p>"
        },
        {
          "h": "热点",
          "body": "<p>\"数据本地化\"与\"跨境流动\"之争加剧，数据被视作与领土、税收并列的主权议题。</p>"
        },
        {
          "h": "关键看点",
          "body": "<ul><li>各国加紧数据出境监管</li><li>大型平台面临拆分与限权讨论</li><li>个人隐私 vs 公共安全的边界重划</li></ul>"
        },
        {
          "h": "为何重要",
          "body": "<p>数据是数字时代的石油与身份证。它的归属与流向，将定义个人自由与国家治理的边界。</p>"
        }
      ]
    },
    {
      "title": "🔥 咖啡价格战：瑞幸 vs 库迪（9.9 元）",
      "tag": "商战 · 消费",
      "blocks": [
        {
          "h": "🔍 怎么读这条新闻",
          "body": "<p>① 先辨信源：优先官方媒体（新华社/央视）、主流通讯社（路透/美联）；营销号、群聊截图先打问号；② 一条新闻问三问：谁发的？证据呢？和我/市场有什么关系？③ 追实时用「央视新闻」「人民日报」公众号或 BBC/Reuters 官网，少看二次剪辑；④ 重大事件等 24 小时再看定论，避免被反转打脸。</p>"
        },
        {
          "h": "🔥 商战现场",
          "body": "<p>库迪以「9.9 元咖啡」贴脸开大，瑞幸被迫应战，把现磨咖啡打到奶茶价；战火从价格烧到点位、联名与供应链。旺仔你爱冰美式，正是这场商战最大的受益者。</p>"
        },
        {
          "h": "关键看点",
          "body": "<ul><li>万店规模下的供应链与加盟效率定生死</li><li>低价是获客手段，还是盈利陷阱</li><li>茶饮（蜜雪/霸王茶姬）与咖啡的边界正在模糊</li></ul>"
        },
        {
          "h": "为何重要",
          "body": "<p>一杯咖啡的价格，是消费降级的缩影，也是「规模+效率」商业模型的现场教学。你喝的每杯冰美式，背后都是烧钱抢市场的算计。</p>"
        }
      ]
    },
    {
      "title": "制造业回流之辩",
      "tag": "第9天 · 经济",
      "blocks": [
        {
          "h": "🔍 怎么读这条新闻",
          "body": "<p>① 先辨信源：优先官方媒体（新华社/央视）、主流通讯社（路透/美联）；营销号、群聊截图先打问号；② 一条新闻问三问：谁发的？证据呢？和我/市场有什么关系？③ 追实时用「央视新闻」「人民日报」公众号或 BBC/Reuters 官网，少看二次剪辑；④ 重大事件等 24 小时再看定论，避免被反转打脸。</p>"
        },
        {
          "h": "热点",
          "body": "<p>\"再工业化\"成多国共识，但回流成本高、周期长，效果参差，政策与现实持续博弈。</p>"
        },
        {
          "h": "关键看点",
          "body": "<ul><li>补贴竞赛白热化</li><li>高端制造(芯片、电池)优先回流</li><li>劳动力技能错配成瓶颈</li></ul>"
        },
        {
          "h": "为何重要",
          "body": "<p>工厂在哪里，就业与产业链话语权就在哪里。制造业的去留，是一国经济韧性的晴雨表。</p>"
        }
      ]
    },
    {
      "title": "全球不平等",
      "tag": "第10天 · 社会·经济",
      "blocks": [
        {
          "h": "🔍 怎么读这条新闻",
          "body": "<p>① 先辨信源：优先官方媒体（新华社/央视）、主流通讯社（路透/美联）；营销号、群聊截图先打问号；② 一条新闻问三问：谁发的？证据呢？和我/市场有什么关系？③ 追实时用「央视新闻」「人民日报」公众号或 BBC/Reuters 官网，少看二次剪辑；④ 重大事件等 24 小时再看定论，避免被反转打脸。</p>"
        },
        {
          "h": "热点",
          "body": "<p>技术红利分配不均，贫富差距在多个经济体内部扩大，\"被落下的人\"成为政治变量。</p>"
        },
        {
          "h": "关键看点",
          "body": "<ul><li>资产型富人与工资型中产分化</li><li>教育回报差距拉大</li><li>民粹与保护主义获得土壤</li></ul>"
        },
        {
          "h": "为何重要",
          "body": "<p>不平等积累到临界点，会反噬增长与稳定。它解释了许多看似突兀的政治风向。</p>"
        }
      ]
    },
    {
      "title": "🔥 本地生活商战：美团 vs 抖音",
      "tag": "商战 · 平台",
      "blocks": [
        {
          "h": "🔍 怎么读这条新闻",
          "body": "<p>① 先辨信源：优先官方媒体（新华社/央视）、主流通讯社（路透/美联）；营销号、群聊截图先打问号；② 一条新闻问三问：谁发的？证据呢？和我/市场有什么关系？③ 追实时用「央视新闻」「人民日报」公众号或 BBC/Reuters 官网，少看二次剪辑；④ 重大事件等 24 小时再看定论，避免被反转打脸。</p>"
        },
        {
          "h": "🔥 商战现场",
          "body": "<p>抖音用短视频流量切外卖与到店团购，正面撞击美团的本地生活护城河；美团以即时配送和商家网络反守为攻，双方抢的是「附近的人」的每一单。</p>"
        },
        {
          "h": "关键看点",
          "body": "<ul><li>内容种草（抖音）vs 交易履约（美团），谁更能闭环</li><li>即时零售成新战场，30 分钟达重塑习惯</li><li>商家被平台「二选一」夹在中间</li></ul>"
        },
        {
          "h": "为何重要",
          "body": "<p>本地生活是离普通人最近的平台战争。它决定小店去哪接单、你点餐贵不贵，也是「流量为王」还是「履约为王」的终极验证。</p>"
        }
      ]
    },
    {
      "title": "生物科技的边界",
      "tag": "第11天 · 科技·伦理",
      "blocks": [
        {
          "h": "🔍 怎么读这条新闻",
          "body": "<p>① 先辨信源：优先官方媒体（新华社/央视）、主流通讯社（路透/美联）；营销号、群聊截图先打问号；② 一条新闻问三问：谁发的？证据呢？和我/市场有什么关系？③ 追实时用「央视新闻」「人民日报」公众号或 BBC/Reuters 官网，少看二次剪辑；④ 重大事件等 24 小时再看定论，避免被反转打脸。</p>"
        },
        {
          "h": "热点",
          "body": "<p>基因编辑、AI 制药、长寿研究突飞猛进，能力跑在伦理与法规前面。</p>"
        },
        {
          "h": "关键看点",
          "body": "<ul><li>个性化医疗走向普及</li><li>合成生物学打开新产业</li><li>\"设计生命\"引发伦理激辩</li></ul>"
        },
        {
          "h": "为何重要",
          "body": "<p>生命科学的突破，可能比信息技术更深刻地改变\"人是什么\"。规则如何定，至关重要。</p>"
        }
      ]
    },
    {
      "title": "城市与气候适应",
      "tag": "第12天 · 气候·城市",
      "blocks": [
        {
          "h": "🔍 怎么读这条新闻",
          "body": "<p>① 先辨信源：优先官方媒体（新华社/央视）、主流通讯社（路透/美联）；营销号、群聊截图先打问号；② 一条新闻问三问：谁发的？证据呢？和我/市场有什么关系？③ 追实时用「央视新闻」「人民日报」公众号或 BBC/Reuters 官网，少看二次剪辑；④ 重大事件等 24 小时再看定论，避免被反转打脸。</p>"
        },
        {
          "h": "热点",
          "body": "<p>热岛、内涝、海平面上升倒逼城市重做\"硬件\"，韧性城市成万亿级投资方向。</p>"
        },
        {
          "h": "关键看点",
          "body": "<ul><li>海绵城市、地下空间受重视</li><li>绿色建筑标准升级</li><li>气候移民初现端倪</li></ul>"
        },
        {
          "h": "为何重要",
          "body": "<p>未来三十年，城市的气候适应力，将直接决定房产价值、公共健康与生活品质。</p>"
        }
      ]
    },
    {
      "title": "🔥 高端手机商战：华为 vs 苹果",
      "tag": "商战 · 消费电子",
      "blocks": [
        {
          "h": "🔍 怎么读这条新闻",
          "body": "<p>① 先辨信源：优先官方媒体（新华社/央视）、主流通讯社（路透/美联）；营销号、群聊截图先打问号；② 一条新闻问三问：谁发的？证据呢？和我/市场有什么关系？③ 追实时用「央视新闻」「人民日报」公众号或 BBC/Reuters 官网，少看二次剪辑；④ 重大事件等 24 小时再看定论，避免被反转打脸。</p>"
        },
        {
          "h": "🔥 商战现场",
          "body": "<p>华为麒麟回归、Mate 系列强势反攻高端，苹果在中国市场遭遇最硬挑战；双方抢的不只是销量，更是高端用户的心智与生态黏性。</p>"
        },
        {
          "h": "关键看点",
          "body": "<ul><li>自研芯片+鸿蒙生态 vs iOS 封闭护城河</li><li>影像、卫星通信、端侧 AI 成新卖点</li><li>中国市场成为双方全球战略的胜负手</li></ul>"
        },
        {
          "h": "为何重要",
          "body": "<p>高端机的商战，是一场「软硬一体+生态」的国力级对决。它折射出供应链自主与品牌溢价的此消彼长，也直接影响你换机时的选择。</p>"
        }
      ]
    },
    {
      "title": "教育与技能错配",
      "tag": "第13天 · 社会",
      "blocks": [
        {
          "h": "🔍 怎么读这条新闻",
          "body": "<p>① 先辨信源：优先官方媒体（新华社/央视）、主流通讯社（路透/美联）；营销号、群聊截图先打问号；② 一条新闻问三问：谁发的？证据呢？和我/市场有什么关系？③ 追实时用「央视新闻」「人民日报」公众号或 BBC/Reuters 官网，少看二次剪辑；④ 重大事件等 24 小时再看定论，避免被反转打脸。</p>"
        },
        {
          "h": "热点",
          "body": "<p>学校教的与岗位要的脱节加剧，\"终身学习\"从口号变成生存必需。</p>"
        },
        {
          "h": "关键看点",
          "body": "<ul><li>AI 相关技能需求暴涨</li><li>传统学历溢价放缓</li><li>微证书、在职培训兴起</li></ul>"
        },
        {
          "h": "为何重要",
          "body": "<p>在变化加速的时代，比\"学什么\"更重要的是\"持续学的能力\"。这恰是这份工作台存在的意义。</p>"
        }
      ]
    },
    {
      "title": "多极世界的秩序",
      "tag": "第14天 · 地缘·收官",
      "blocks": [
        {
          "h": "🔍 怎么读这条新闻",
          "body": "<p>① 先辨信源：优先官方媒体（新华社/央视）、主流通讯社（路透/美联）；营销号、群聊截图先打问号；② 一条新闻问三问：谁发的？证据呢？和我/市场有什么关系？③ 追实时用「央视新闻」「人民日报」公众号或 BBC/Reuters 官网，少看二次剪辑；④ 重大事件等 24 小时再看定论，避免被反转打脸。</p>"
        },
        {
          "h": "热点",
          "body": "<p>单极时代落幕，多中心格局成型，规则、联盟、贸易线都在重组。</p>"
        },
        {
          "h": "关键看点",
          "body": "<ul><li>区域合作机制此消彼长</li><li>\"选边\"压力与\"战略自主\"并存</li><li>全球治理赤字扩大</li></ul>"
        },
        {
          "h": "为何重要",
          "body": "<p>理解秩序如何重组，才能看懂新闻里的每一场博弈。两周 14 个议题，是观察世界的 14 个透镜。</p>"
        },
        {
          "h": "说明",
          "body": "<p style=\"color:#888;font-size:12px\">本模块为精选\"全球议题\"分析库，按日轮播；实时新闻需联网获取。可作为看世界的思维框架。</p>"
        }
      ]
    }
  ],
  "travel": [
    {
      "title": "圣雅各朝圣之路 · 法国线 Camino Francés",
      "tag": "第1天 · 全球徒步路线",
      "loc": "欧洲-西班牙-加利西亚自治区",
      "blocks": [
        {
          "h": "🎒 行前通用准备",
          "body": "<p>① 装备分层：排汗内层+保暖中层+防风外层，登山鞋提前磨合；登山杖、头灯、雨衣、保温毯必带。② 体能循序渐进，出发前 4-6 周做负重爬坡训练。③ 买含高原/救援的户外保险（如「美亚」「安联」高危运动险）。④ 离线下载「两步路 / AllTrails / Gaia GPS」轨迹与「MAPS.ME」地图；把行程告知家人。⑤ 出境路线查签证与徒步许可（permit），部分限流需提前数月预约。⑥ 轻量化但留安全冗余：急救包+个人药品随身。</p>"
        },
        {
          "h": "🌏 当地民俗文化·传统礼仪",
          "body": "沿途教堂可参与晚祷，入内请保持安静、脱帽；\"Buen Camino\"是朝圣者互道祝福的通用礼仪。终点圣地亚哥主教座堂周日有朝圣者弥撒，可着徒步装出席；贝壳是朝圣符号，请尊重其宗教含义，勿当普通纪念品戏谑。"
        },
        {
          "h": "🚉 从深圳出发·如何到达",
          "body": "<p>深圳宝安→巴黎/马德里转机到潘普洛纳(Pamplona)或法国侧起点圣让皮耶德波尔(St-Jean-Pied-de-Port)。全程约 16-20h，往返机票 ¥5000-9000。也可飞马德里再火车北上。</p>\n\n💰 参考费用（人均）：朝圣客栈(albergue)€10-20/晚、餐€10-15/天；30 天含机票人均约 ¥1.2-2 万。 completion 证书免费，但需最后 100km 徒步抵达。"
        },
        {
          "h": "🗓 最佳徒步季节",
          "body": "4-6 月：春暖、绿意浓，推荐；9-10 月：秋高气爽、人少；避开 7-8 月酷暑与朝圣旺季"
        },
        {
          "h": "🥾 徒步天数与路线",
          "body": "<p><b>总里程约 780km，30-35 天，日均 20-28km，总体起伏平缓。</b></p><ul><li><b>Day1</b>：圣让皮耶德波尔→龙塞斯瓦列斯<br>约 24km，翻越庇里牛斯山口；住山间 Refuge；⚠️ 海拔骤升+风雨，慢走适应。</li><li><b>Day2</b>：龙塞斯瓦列斯→潘普洛纳<br>约 21km，古城住宿；⚠️ 早订。</li><li><b>Day3</b>：潘普洛纳→埃斯特利亚<br>约 22km；住民宿。</li><li><b>Day4</b>：埃斯特利亚→洛格罗尼奥<br>约 28km（葡萄酒之乡）；住 casa rural。</li><li><b>Day5+</b>：经布尔戈斯、莱昂、阿斯托加向萨里亚推进；<b>最后 100km（萨里亚→圣地亚哥）约 110km / 5 天</b>可拿证书；沿途 albergue 朝圣客栈（出示 credencial 护照，多 22:00 关门）。</li></ul>\n\n🍱 装备与沿途补给：轻装（12-15kg）、贝壳标志与 credencial 朝圣护照必带；沿途咖啡馆、酒吧补给充足，别错过本地 pintxos 小吃。"
        },
        {
          "h": "🏞 路线亮点·必看风景",
          "body": "<ul><li><b>中世纪古镇（潘普洛纳/布尔戈斯）</b>： 👍 历史厚重、配套成熟 ｜ 👎 旺季人挤人 ｜ ⚠️ 住宿早订</li><li><b>里昂河平原葡萄园</b>： 👍 风景开阔、可品酒 ｜ 👎 夏季暴晒 ｜ ⚠️ 多补水</li><li><b>圣地亚哥大教堂</b>： 👍 仪式感强、终点打卡 ｜ 👎 需步行最后 100km 才拿证书 ｜ ⚠️ 保管朝圣护照</li></ul>"
        }
      ],
      "images": [
        "assets/scene/route_00_0.jpg",
        "assets/scene/route_00_1.jpg",
        "assets/scene/route_00_2.jpg",
        "assets/route_0.svg"
      ]
    },
    {
      "title": "印加古道 · 马丘比丘 Inca Trail",
      "tag": "第2天 · 全球徒步路线",
      "loc": "南美-秘鲁-库斯科",
      "blocks": [
        {
          "h": "🎒 行前通用准备",
          "body": "<p>① 装备分层：排汗内层+保暖中层+防风外层，登山鞋提前磨合；登山杖、头灯、雨衣、保温毯必带。② 体能循序渐进，出发前 4-6 周做负重爬坡训练。③ 买含高原/救援的户外保险（如「美亚」「安联」高危运动险）。④ 离线下载「两步路 / AllTrails / Gaia GPS」轨迹与「MAPS.ME」地图；把行程告知家人。⑤ 出境路线查签证与徒步许可（permit），部分限流需提前数月预约。⑥ 轻量化但留安全冗余：急救包+个人药品随身。</p>"
        },
        {
          "h": "🌏 当地民俗文化·传统礼仪",
          "body": "库斯科及周边多盖丘亚原住民，可用\"Rimaykullayki\"问候；古柯叶是当地待客与抗高反的习俗，可礼貌接受但不宜过量。马丘比丘等遗址严禁攀爬、刻划；进入村落请先征得同意再拍照。"
        },
        {
          "h": "🚉 从深圳出发·如何到达",
          "body": "<p>深圳→利马(Lima)转库斯科(Cusco)（海拔 3399m，需适应 2 天），再乘车到起点 KM82。往返机票 ¥9000-14000。</p>\n\n💰 参考费用（人均）：强制向导团约 $500-700（含许可 $200+），含背夫、餐食与帐篷。"
        },
        {
          "h": "🗓 最佳徒步季节",
          "body": "5-9 月旱季最佳、路干景明；2 月封路维护；避开雨季（12-3 月）泥泞"
        },
        {
          "h": "🥾 徒步天数与路线",
          "body": "<p><b>4 天 3 夜约 43km，最高 Warmiwañusca 隘口 4200m。</b></p><ul><li><b>Day1</b>：KM82→瓦伊瓦什<br>约 11km，渐入云雾森林；住营地帐篷；⚠️ 起步即适应海拔。</li><li><b>Day2</b>：瓦伊瓦什→帕凯马约<br>约 12km，翻越 4200m 隘口（全程最难）；住营地；⚠️ 高反预警。</li><li><b>Day3</b>：帕凯马约→Wiñay Wayna<br>约 16km，印加遗址群；住营地；⚠️ 遗迹不可攀爬。</li><li><b>Day4</b>：Wiñay Wayna→太阳门→马丘比丘<br>约 5km，凌晨出发看日出；⚠️ 马丘比丘需预约时段。</li></ul>\n\n🍱 装备与沿途补给：帐篷睡袋由背夫扛；自带头灯、保暖层、能量棒；备好高原反应药。"
        },
        {
          "h": "🏞 路线亮点·必看风景",
          "body": "<ul><li><b>马丘比丘</b>： 👍 世界新七大奇迹、日出绝美 ｜ 👎 限时预约、限流 ｜ ⚠️ 不攀爬石墙</li><li><b>Wiñay Wayna</b>： 👍 梯田遗址依山临谷 ｜ 👎 需向导带领 ｜ ⚠️ 尊重遗址</li><li><b>云雾森林</b>： 👍 生态多样、羊驼出没 ｜ 👎 潮湿蚊虫多 ｜ ⚠️ 防蚊</li></ul>"
        }
      ],
      "images": [
        "assets/scene/route_01_0.jpg",
        "assets/scene/route_01_1.jpg",
        "assets/scene/route_01_2.jpg",
        "assets/route_1.svg"
      ]
    },
    {
      "title": "多洛米蒂 · Alta Via 1（意大利）",
      "tag": "第3天 · 全球徒步路线",
      "loc": "欧洲-意大利-博尔扎诺",
      "blocks": [
        {
          "h": "🎒 行前通用准备",
          "body": "<p>① 装备分层：排汗内层+保暖中层+防风外层，登山鞋提前磨合；登山杖、头灯、雨衣、保温毯必带。② 体能循序渐进，出发前 4-6 周做负重爬坡训练。③ 买含高原/救援的户外保险（如「美亚」「安联」高危运动险）。④ 离线下载「两步路 / AllTrails / Gaia GPS」轨迹与「MAPS.ME」地图；把行程告知家人。⑤ 出境路线查签证与徒步许可（permit），部分限流需提前数月预约。⑥ 轻量化但留安全冗余：急救包+个人药品随身。</p>"
        },
        {
          "h": "🌏 当地民俗文化·传统礼仪",
          "body": "南蒂罗尔地区德语、意大利语并用，用\"Grüß Gott\"或\"Ciao\"都受欢迎；山屋(Hütte)用餐按指示入座、饭后自觉清理桌面。牧场多为私有，勿翻越栅栏或进入草场。"
        },
        {
          "h": "🚉 从深圳出发·如何到达",
          "body": "<p>深圳→米兰/威尼斯转火车或巴士到多洛米蒂小镇（如 Lago di Braies 起点）。往返 ¥6000-10000。</p>\n\n💰 参考费用（人均）：山屋 Rifugio €50-80/晚（含早晚餐）；12 天含机票人均约 ¥1.5-2.5 万。"
        },
        {
          "h": "🗓 最佳徒步季节",
          "body": "7-9 月：雪融、山屋开放，最佳；其余月份高海拔积雪封路"
        },
        {
          "h": "🥾 徒步天数与路线",
          "body": "<p><b>约 120km，10-12 天，自北向南穿越石灰岩峰林，多铁索段(via ferrata)，累计爬升大。</b></p><ul><li><b>Day1</b>：布赖斯湖→三峰区<br>约 14km，经典峰景；住山屋；⚠️ 铁索初体验。</li><li><b>Day2</b>：三峰环线→Rifugio Locatelli<br>约 10km，铁索段；住山屋；⚠️ 恐高慎行。</li><li><b>Day3</b>：→Cortina 方向<br>约 16km，高山草甸；住山屋。</li><li><b>Day4+</b>：继续南下经多个垭口与山屋，末段下坡至谷地；⚠️ 山屋务必提前预订。</li></ul>\n\n🍱 装备与沿途补给：山屋半食宿，自带路餐；铁索段需安全带/头盔；硬底登山鞋。"
        },
        {
          "h": "🏞 路线亮点·必看风景",
          "body": "<ul><li><b>三峰 La Famiglia</b>： 👍 标志性群峰、镜湖倒影 ｜ 👎 游客多需早到 ｜ ⚠️ 日出前占位</li><li><b>刀锋山脊</b>： 👍 险峻壮观 ｜ 👎 需铁索装备与技术 ｜ ⚠️ 恐高慎行</li><li><b>布赖斯湖 Lago di Braies</b>： 👍 明信片级湖景 ｜ 👎 旺季停车难 ｜ ⚠️ 早去避开人潮</li></ul>"
        }
      ],
      "images": [
        "assets/scene/route_02_0.jpg",
        "assets/scene/route_02_1.jpg",
        "assets/scene/route_02_2.jpg",
        "assets/route_2.svg"
      ]
    },
    {
      "title": "环勃朗峰 · TMB（法/意/瑞）",
      "tag": "第4天 · 全球徒步路线",
      "loc": "欧洲-法国·意大利·瑞士-勃朗峰",
      "blocks": [
        {
          "h": "🎒 行前通用准备",
          "body": "<p>① 装备分层：排汗内层+保暖中层+防风外层，登山鞋提前磨合；登山杖、头灯、雨衣、保温毯必带。② 体能循序渐进，出发前 4-6 周做负重爬坡训练。③ 买含高原/救援的户外保险（如「美亚」「安联」高危运动险）。④ 离线下载「两步路 / AllTrails / Gaia GPS」轨迹与「MAPS.ME」地图；把行程告知家人。⑤ 出境路线查签证与徒步许可（permit），部分限流需提前数月预约。⑥ 轻量化但留安全冗余：急救包+个人药品随身。</p>"
        },
        {
          "h": "🌏 当地民俗文化·传统礼仪",
          "body": "途经法、意、瑞三国村镇，入山屋请脱鞋、小声交谈；法语\"Bonjour\"、意语\"Buongiorno\"、德语\"Grüezi\"通用。周日小镇多静默，避免大声喧哗与夜间走动。"
        },
        {
          "h": "🚉 从深圳出发·如何到达",
          "body": "<p>深圳→日内瓦转巴士/火车到霞慕尼(Chamonix)起点。往返 ¥6000-9000。</p>\n\n💰 参考费用（人均）：山屋 €40-70/晚 + 餐饮；10 天含机票人均约 ¥1.5-2.5 万。"
        },
        {
          "h": "🗓 最佳徒步季节",
          "body": "6 月中旬-9 月山屋开放；7-8 月最热闹但人多"
        },
        {
          "h": "🥾 徒步天数与路线",
          "body": "<p><b>约 170km，7-11 天，环勃朗峰一圈，翻越多个山口，最高约 2665m。</b></p><ul><li><b>Day1</b>：霞慕尼→Les Houches→Bionnassay<br>约 15km，初见勃朗峰；住山屋；⚠️ 关注天气。</li><li><b>Day2</b>：→Contamines<br>约 18km，河谷森林；住山屋。</li><li><b>Day3</b>：→翻垭口进入意大利侧 Courmayeur<br>约 22km；住山屋；⚠️ 雪坡小心。</li><li><b>Day4</b>：Courmayeur→Bonnatti 山屋<br>约 20km，意式风情；住山屋。</li><li><b>Day5</b>：→瑞士 Champex<br>约 24km，森林湖泊；住山屋。</li><li><b>Day6+</b>：返回法国霞慕尼，约 20km；⚠️ 跨境随身带护照。</li></ul>\n\n🍱 装备与沿途补给：可轻装（有行李托运服务）；路餐自备；沿途奶酪火锅补给扎实。"
        },
        {
          "h": "🏞 路线亮点·必看风景",
          "body": "<ul><li><b>勃朗峰冰川</b>： 👍 欧洲最高峰、冰舌壮观 ｜ 👎 多云时常难见 ｜ ⚠️ 早出发看日照金山</li><li><b>阿尔卑斯牧场</b>： 👍 草甸牛羊、奶酪坊 ｜ 👎 牛铃吵、偶有狗 ｜ ⚠️ 保持距离</li><li><b>三国风情</b>： 👍 一程看遍法意瑞 ｜ 👎 货币换汇麻烦 ｜ ⚠️ 护照随身</li></ul>"
        }
      ],
      "images": [
        "assets/scene/route_03_0.jpg",
        "assets/scene/route_03_1.jpg",
        "assets/scene/route_03_2.jpg",
        "assets/route_3.svg"
      ]
    },
    {
      "title": "乞力马扎罗 · 马切姆线（坦桑尼亚）",
      "tag": "第5天 · 全球徒步路线",
      "loc": "非洲-坦桑尼亚-乞力马扎罗区",
      "blocks": [
        {
          "h": "🎒 行前通用准备",
          "body": "<p>① 装备分层：排汗内层+保暖中层+防风外层，登山鞋提前磨合；登山杖、头灯、雨衣、保温毯必带。② 体能循序渐进，出发前 4-6 周做负重爬坡训练。③ 买含高原/救援的户外保险（如「美亚」「安联」高危运动险）。④ 离线下载「两步路 / AllTrails / Gaia GPS」轨迹与「MAPS.ME」地图；把行程告知家人。⑤ 出境路线查签证与徒步许可（permit），部分限流需提前数月预约。⑥ 轻量化但留安全冗余：急救包+个人药品随身。</p>"
        },
        {
          "h": "🌏 当地民俗文化·传统礼仪",
          "body": "以斯瓦希里语\"Jambo / Hakuna Matata\"问候；向导与背夫的小费是重要文化（建议行程结束统一致谢）。进入村庄衣着保守，勿对当地人随意拍摄。"
        },
        {
          "h": "🚉 从深圳出发·如何到达",
          "body": "<p>深圳→内罗毕/亚的斯亚贝巴转机到乞力马扎罗机场(KIA)→莫希(Moshi)。往返 ¥7000-11000。</p>\n\n💰 参考费用（人均）：强制向导背夫团 $2000-4000（含许可 $800+）。"
        },
        {
          "h": "🗓 最佳徒步季节",
          "body": "1-3 月、6-10 月旱季；4-5 月、11 月为雨季，路滑"
        },
        {
          "h": "🥾 徒步天数与路线",
          "body": "<p><b>7-9 天登顶 5895m（非洲最高峰），马切姆线风景好、适应佳。</b></p><ul><li><b>Day1</b>：莫希→马切姆营地(3000m)<br>约 11km，雨林段；住帐篷；⚠️ 防蚂蟥。</li><li><b>Day2</b>：→希拉营地(3840m)<br>约 9km，植被变化；住帐篷；⚠️ 注意海拔。</li><li><b>Day3</b>：→Barranco(3950m)<br>约 11km，熔岩塔适应；住帐篷。</li><li><b>Day4</b>：→Barafu(4600m)<br>约 9km，翻 Barranco 墙；住帐篷；⚠️ 高反预警。</li><li><b>Day5</b>：Barafu→Uhuru 峰(5895m)→Mweka<br>约 7km 上+下山，夜爬冲顶；⚠️ 高反/失温。</li><li><b>Day6</b>：下撤→莫希<br>约 10km。</li></ul>\n\n🍱 装备与沿途补给：背夫扛装备；自带 -10℃ 睡袋、羽绒、葡萄糖；备高反药。"
        },
        {
          "h": "🏞 路线亮点·必看风景",
          "body": "<ul><li><b>Uhuru 峰</b>： 👍 非洲之巅、赤道雪山 ｜ 👎 高反风险大 ｜ ⚠️ 缓慢上升、补葡萄糖</li><li><b>五带垂直景观</b>： 👍 雨林→荒原→冰川一览 ｜ 👎 体力消耗大 ｜ ⚠️ 分层着装</li><li><b>莫希咖啡庄园</b>： 👍 顺路品咖 ｜ 👎 需额外时间 ｜ ⚠️ 无</li></ul>"
        }
      ],
      "images": [
        "assets/scene/route_04_0.jpg",
        "assets/scene/route_04_1.jpg",
        "assets/scene/route_04_2.jpg",
        "assets/route_4.svg"
      ]
    },
    {
      "title": "冰岛 · Laugavegur 地热步道",
      "tag": "第6天 · 全球徒步路线",
      "loc": "欧洲-冰岛-兰德曼纳劳卡",
      "blocks": [
        {
          "h": "🎒 行前通用准备",
          "body": "<p>① 装备分层：排汗内层+保暖中层+防风外层，登山鞋提前磨合；登山杖、头灯、雨衣、保温毯必带。② 体能循序渐进，出发前 4-6 周做负重爬坡训练。③ 买含高原/救援的户外保险（如「美亚」「安联」高危运动险）。④ 离线下载「两步路 / AllTrails / Gaia GPS」轨迹与「MAPS.ME」地图；把行程告知家人。⑤ 出境路线查签证与徒步许可（permit），部分限流需提前数月预约。⑥ 轻量化但留安全冗余：急救包+个人药品随身。</p>"
        },
        {
          "h": "🌏 当地民俗文化·传统礼仪",
          "body": "地热温泉多为混浴，入水前淋浴是硬性礼仪；自然敬畏深入骨髓，勿移动火山岩、勿踩踏苔藓。私人牧场勿擅入，关门请随手带好。"
        },
        {
          "h": "🚉 从深圳出发·如何到达",
          "body": "<p>深圳→雷克雅未克转巴士到 Landmannalaugar 起点。往返 ¥7000-11000。</p>\n\n💰 参考费用（人均）：山屋 ISK 2000-8000/晚≈¥100-400；4 天含机票人均约 ¥1.2-1.8 万。"
        },
        {
          "h": "🗓 最佳徒步季节",
          "body": "6-9 月通行，其余积雪封路；7 月最佳，蚊虫少"
        },
        {
          "h": "🥾 徒步天数与路线",
          "body": "<p><b>55km，3-4 天，穿越地热温泉、火山熔岩、黑沙与冰川，色彩斑斓。</b></p><ul><li><b>Day1</b>：Landmannalaugar→Hrafntinnusker<br>约 12km，地热彩山；住山屋；⚠️ 风大。</li><li><b>Day2</b>：→Álftavatn<br>约 18km，黑沙冰川；住山屋；⚠️ 涉水。</li><li><b>Day3</b>：→Emstrur<br>约 15km，火山峡谷；住山屋。</li><li><b>Day4</b>：→Þórsmörk<br>约 10km，森林河谷；住山屋；⚠️ 过河。</li></ul>\n\n🍱 装备与沿途补给：山屋自炊，自带炉头与粮食；防水装备必备（风大）。"
        },
        {
          "h": "🏞 路线亮点·必看风景",
          "body": "<ul><li><b>彩虹山/流纹岩</b>： 👍 色彩奇幻 ｜ 👎 风大寒冷 ｜ ⚠️ 全防水</li><li><b>Eyjafjallajökull 火山</b>： 👍 著名火山地貌 ｜ 👎 无常景 ｜ ⚠️ 无</li><li><b>天然温泉泡池</b>： 👍 徒步后放松 ｜ 👎 有时排队 ｜ ⚠️ 防滑</li></ul>"
        }
      ],
      "images": [
        "assets/scene/route_05_0.jpg",
        "assets/scene/route_05_1.jpg",
        "assets/scene/route_05_2.jpg",
        "assets/route_5.svg"
      ]
    },
    {
      "title": "米尔福德步道 · Milford Track（新西兰）",
      "tag": "第7天 · 全球徒步路线",
      "loc": "大洋洲-新西兰-峡湾地区",
      "blocks": [
        {
          "h": "🎒 行前通用准备",
          "body": "<p>① 装备分层：排汗内层+保暖中层+防风外层，登山鞋提前磨合；登山杖、头灯、雨衣、保温毯必带。② 体能循序渐进，出发前 4-6 周做负重爬坡训练。③ 买含高原/救援的户外保险（如「美亚」「安联」高危运动险）。④ 离线下载「两步路 / AllTrails / Gaia GPS」轨迹与「MAPS.ME」地图；把行程告知家人。⑤ 出境路线查签证与徒步许可（permit），部分限流需提前数月预约。⑥ 轻量化但留安全冗余：急救包+个人药品随身。</p>"
        },
        {
          "h": "🌏 当地民俗文化·传统礼仪",
          "body": "尊重毛利文化，多地有\"不带走一草一木\"的传统；步道全程由 DOC 管理，须登记、守安静。遇到向导讲解请耐心聆听，勿抢路或喧哗。"
        },
        {
          "h": "🚉 从深圳出发·如何到达",
          "body": "<p>深圳→奥克兰/皇后镇转机到蒂阿瑙，再乘船接驳到步道起点。往返 ¥9000-13000。</p>\n\n💰 参考费用（人均）：小屋预订费约 NZ$200-300/人；含机票人均约 ¥1.8-2.5 万（向导团更贵）。"
        },
        {
          "h": "🗓 最佳徒步季节",
          "body": "10 月-次年 4 月（Great Walk 季）；11-3 月最佳，雨水也多"
        },
        {
          "h": "🥾 徒步天数与路线",
          "body": "<p><b>53.5km，4 天 3 夜（单向），穿越峡湾雨林、瀑布与麦金农通道，需预订 hut。</b></p><ul><li><b>Day1</b>：蒂阿瑙湖畔→Glade House<br>约 5km，雨林平路；住 hut；⚠️ 沙蝇。</li><li><b>Day2</b>：→Dumas Corner<br>约 16km，麦金农通道前；住 hut。</li><li><b>Day3</b>：→Mintaro<br>约 14km，翻麦金农通道(1070m)；住 hut；⚠️ 天气多变。</li><li><b>Day4</b>：→巨噪峡湾<br>约 18km，Sutherland 瀑布；船接；⚠️ 雨天路滑。</li></ul>\n\n🍱 装备与沿途补给：小屋自炊；沙蝇多带驱虫；全程防水是刚需。"
        },
        {
          "h": "🏞 路线亮点·必看风景",
          "body": "<ul><li><b>Sutherland Falls</b>： 👍 世界最高瀑布之一 ｜ 👎 需走完全程 ｜ ⚠️ 无</li><li><b>米特峰峡湾</b>： 👍 世界顶级景观 ｜ 👎 阴雨常见 ｜ ⚠️ 全程防水</li><li><b>原始雨林</b>： 👍 负氧离子爆棚 ｜ 👎 沙蝇多 ｜ ⚠️ 驱虫</li></ul>"
        }
      ],
      "images": [
        "assets/scene/route_06_0.jpg",
        "assets/scene/route_06_1.jpg",
        "assets/scene/route_06_2.jpg",
        "assets/route_6.svg"
      ]
    },
    {
      "title": "约翰·缪尔步道 · JMT（美国加州）",
      "tag": "第8天 · 全球徒步路线",
      "loc": "北美洲-美国-加利福尼亚州",
      "blocks": [
        {
          "h": "🎒 行前通用准备",
          "body": "<p>① 装备分层：排汗内层+保暖中层+防风外层，登山鞋提前磨合；登山杖、头灯、雨衣、保温毯必带。② 体能循序渐进，出发前 4-6 周做负重爬坡训练。③ 买含高原/救援的户外保险（如「美亚」「安联」高危运动险）。④ 离线下载「两步路 / AllTrails / Gaia GPS」轨迹与「MAPS.ME」地图；把行程告知家人。⑤ 出境路线查签证与徒步许可（permit），部分限流需提前数月预约。⑥ 轻量化但留安全冗余：急救包+个人药品随身。</p>"
        },
        {
          "h": "🌏 当地民俗文化·传统礼仪",
          "body": "美国国家公园奉行 Leave No Trace（无痕山林）：垃圾全带出、食物须锁熊罐；优胜美地一带原住民为塞拉米沃克奇，尊重其圣地。公共场合保持低声。"
        },
        {
          "h": "🚉 从深圳出发·如何到达",
          "body": "<p>深圳→旧金山转车到优胜美地(Yosemite)入口。往返 ¥8000-12000。</p>\n\n💰 参考费用（人均）：长距离重装，沿途小镇 resupply 邮寄补给；含机票人均约 ¥2-3 万。"
        },
        {
          "h": "🗓 最佳徒步季节",
          "body": "7-9 月雪融、通行许可开放；早秋最佳，蚊虫少"
        },
        {
          "h": "🥾 徒步天数与路线",
          "body": "<p><b>约 340km，约 21 天，优胜美地谷→惠特尼峰(4421m)，纵贯内华达山脉；需抽签 permit。</b></p><ul><li><b>Day1</b>：优胜美地谷→Tuolumne Meadows<br>约 30km，半圆顶视野；住营地；⚠️ permit。</li><li><b>Day5</b>：→Reds Meadow<br>约 27km，可泡温泉；住营地。</li><li><b>Day10</b>：→Evolution Basin<br>约 30km，高山湖群；住营地。</li><li><b>Day15</b>：→Muir Trail Ranch resupply<br>约 25km，补给点；⚠️ 防熊罐。</li><li><b>Day21</b>：→惠特尼峰(4421m)终点<br>约 22km，登顶；⚠️ 末段残雪。</li></ul>\n\n🍱 装备与沿途补给：防熊罐(bear canister)强制；重装自炊；沿途小镇 resupply 点。"
        },
        {
          "h": "🏞 路线亮点·必看风景",
          "body": "<ul><li><b>半圆顶 Half Dome</b>： 👍 标志 cables 体验 ｜ 👎 需额外许可、恐高慎 ｜ ⚠️ 抓稳钢缆</li><li><b>内华达高山湖群</b>： 👍 湖水清澈 ｜ 👎 长线略枯燥 ｜ ⚠️ 勤补水</li><li><b>惠特尼峰</b>： 👍 美国本土最高 ｜ 👎 末段有雪 ｜ ⚠️ 早出发</li></ul>"
        }
      ],
      "images": [
        "assets/scene/route_07_0.jpg",
        "assets/scene/route_07_1.jpg",
        "assets/scene/route_07_2.jpg",
        "assets/route_7.svg"
      ]
    },
    {
      "title": "珠峰大本营 · EBC（尼泊尔）",
      "tag": "第9天 · 全球徒步路线",
      "loc": "亚洲-尼泊尔-索卢坤布地区",
      "blocks": [
        {
          "h": "🎒 行前通用准备",
          "body": "<p>① 装备分层：排汗内层+保暖中层+防风外层，登山鞋提前磨合；登山杖、头灯、雨衣、保温毯必带。② 体能循序渐进，出发前 4-6 周做负重爬坡训练。③ 买含高原/救援的户外保险（如「美亚」「安联」高危运动险）。④ 离线下载「两步路 / AllTrails / Gaia GPS」轨迹与「MAPS.ME」地图；把行程告知家人。⑤ 出境路线查签证与徒步许可（permit），部分限流需提前数月预约。⑥ 轻量化但留安全冗余：急救包+个人药品随身。</p>"
        },
        {
          "h": "🌏 当地民俗文化·传统礼仪",
          "body": "以合十礼\"Namaste\"问候；遇玛尼堆、经幡须顺时针绕行。寺院不可手指佛像、不可踩门槛；夏尔巴向导是高山灵魂，务必尊重其经验与禁忌。"
        },
        {
          "h": "🚉 从深圳出发·如何到达",
          "body": "<p>深圳→加德满都(KTM)飞卢卡拉(Lukla)小飞机到起点（航班易取消，留缓冲）。往返 ¥5000-8000。</p>\n\n💰 参考费用（人均）：许可 $100(TIMS)+ 向导约 $1200-2000 全包（茶馆 trekking）。"
        },
        {
          "h": "🗓 最佳徒步季节",
          "body": "3-5 月、9-11 月春秋最佳；6-9 月雨季，12-2 月严寒"
        },
        {
          "h": "🥾 徒步天数与路线",
          "body": "<p><b>12-14 天，约 130km（往返），最高 5364m EBC，途经 Namche、Gorak Shep。</b></p><ul><li><b>Day1</b>：卢卡拉(2860)→Phakding<br>约 8km，河谷；住茶馆；⚠️ 飞行波动。</li><li><b>Day2</b>：→Namche(3440)<br>约 11km，爬升大；住茶馆；⚠️ 适应。</li><li><b>Day3</b>：Namche 适应→Tengboche<br>约 10km，寺庙；⚠️ 海拔。</li><li><b>Day4</b>：→Dingboche(4410)<br>约 12km，高原草甸；住茶馆。</li><li><b>Day5</b>：适应日→Lobuche<br>约 8km。</li><li><b>Day6</b>：→Gorak Shep→EBC(5364)<br>约 12km，终点；⚠️ 高反。</li><li><b>Day7+</b>：原路返回卢卡拉。</li></ul>\n\n🍱 装备与沿途补给：茶馆住宿不需帐篷；自带羽绒、能量棒；海拔高需安排 acclimatization 日。"
        },
        {
          "h": "🏞 路线亮点·必看风景",
          "body": "<ul><li><b>珠峰 / EBC</b>： 👍 世界之巅脚下的震撼 ｜ 👎 高反剧烈 ｜ ⚠️ 慢行、多喝水</li><li><b>昆布冰川</b>： 👍 壮观冰塔林 ｜ 👎 危险不可近 ｜ ⚠️ 远观</li><li><b>Tengboche 寺庙</b>： 👍 夏尔巴文化 ｜ 👎 需着装得体 ｜ ⚠️ 尊重习俗</li></ul>"
        }
      ],
      "images": [
        "assets/scene/route_08_0.jpg",
        "assets/scene/route_08_1.jpg",
        "assets/scene/route_08_2.jpg",
        "assets/route_8.svg"
      ]
    },
    {
      "title": "熊野古道 · Kumano Kodo（日本）",
      "tag": "第10天 · 全球徒步路线",
      "loc": "亚洲-日本-和歌山县",
      "blocks": [
        {
          "h": "🎒 行前通用准备",
          "body": "<p>① 装备分层：排汗内层+保暖中层+防风外层，登山鞋提前磨合；登山杖、头灯、雨衣、保温毯必带。② 体能循序渐进，出发前 4-6 周做负重爬坡训练。③ 买含高原/救援的户外保险（如「美亚」「安联」高危运动险）。④ 离线下载「两步路 / AllTrails / Gaia GPS」轨迹与「MAPS.ME」地图；把行程告知家人。⑤ 出境路线查签证与徒步许可（permit），部分限流需提前数月预约。⑥ 轻量化但留安全冗余：急救包+个人药品随身。</p>"
        },
        {
          "h": "🌏 当地民俗文化·传统礼仪",
          "body": "神道与佛教参诣道：入鸟居前鞠躬、在净手亭舀水漱口（不饮）；参拜时安静、不喧哗。部分路段着白色\"白衣\"持\"金刚杖\"为古礼，可体验但勿模仿宗教动作。"
        },
        {
          "h": "🚉 从深圳出发·如何到达",
          "body": "<p>深圳→关西机场转 JR/巴士到和歌山田边或新宫。往返 ¥2500-4500。</p>\n\n💰 参考费用（人均）：温泉民宿 ¥400-800/晚；4 天人均约 ¥6000-10000。"
        },
        {
          "h": "🗓 最佳徒步季节",
          "body": "3-5 月、10-11 月最佳；避开夏季台风与湿热"
        },
        {
          "h": "🥾 徒步天数与路线",
          "body": "<p><b>千年朝圣古道，分段走 3-4 天（如中边路 Nakahechi），穿越杉木林到熊野三山，难度低-中。</b></p><ul><li><b>Day1</b>：田边→滝尻王子<br>约 15km，杉木古道；住民宿；⚠️ 湿滑。</li><li><b>Day2</b>：→近露王子<br>约 18km，青苔石阶；住民宿。</li><li><b>Day3</b>：→本宫大社<br>约 20km，朝圣核心；住温泉旅馆；⚠️ 礼仪。</li><li><b>Day4</b>：→那智大瀑<br>约 12km，瀑布壮观；住旅馆；⚠️ 体力。</li></ul>\n\n🍱 装备与沿途补给：轻装日归；沿途温泉旅馆食宿；便当补给方便。"
        },
        {
          "h": "🏞 路线亮点·必看风景",
          "body": "<ul><li><b>那智大瀑</b>： 👍 日本第一瀑 ｜ 👎 台阶多 ｜ ⚠️ 防滑</li><li><b>青苔参道</b>： 👍 千年氛围 ｜ 👎 阴湿 ｜ ⚠️ 无</li><li><b>温泉旅馆</b>： 👍 泡汤解乏 ｜ 👎 小店多收现金 ｜ ⚠️ 备足现金</li></ul>"
        }
      ],
      "images": [
        "assets/scene/route_09_0.jpg",
        "assets/scene/route_09_1.jpg",
        "assets/scene/route_09_2.jpg",
        "assets/route_9.svg"
      ]
    },
    {
      "title": "虎跳峡高路（云南·香格里拉）",
      "tag": "第11天 · 全球徒步路线",
      "loc": "亚洲-中国-云南-香格里拉市",
      "blocks": [
        {
          "h": "🎒 行前通用准备",
          "body": "<p>① 装备分层：排汗内层+保暖中层+防风外层，登山鞋提前磨合；登山杖、头灯、雨衣、保温毯必带。② 体能循序渐进，出发前 4-6 周做负重爬坡训练。③ 买含高原/救援的户外保险（如「美亚」「安联」高危运动险）。④ 离线下载「两步路 / AllTrails / Gaia GPS」轨迹与「MAPS.ME」地图；把行程告知家人。⑤ 出境路线查签证与徒步许可（permit），部分限流需提前数月预约。⑥ 轻量化但留安全冗余：急救包+个人药品随身。</p>"
        },
        {
          "h": "🌏 当地民俗文化·传统礼仪",
          "body": "纳西、藏文化交织：转经筒、玛尼堆须顺时针；进寺院脱帽、不指佛像。藏民家访忌踩门槛、忌吹口哨（民间认为招\"风\"）。"
        },
        {
          "h": "🚉 从深圳出发·如何到达",
          "body": "<p>深圳北→昆明/丽江高铁，丽江乘车到虎跳峡镇约 1.5h。往返 ¥1500-2500。</p>\n\n💰 参考费用（人均）：沿途客栈 ¥80-150/晚；2 天人均约 ¥1500-2500。"
        },
        {
          "h": "🗓 最佳徒步季节",
          "body": "4-6 月、9-11 月最佳；避开 7-8 月雨季塌方风险"
        },
        {
          "h": "🥾 徒步天数与路线",
          "body": "<p><b>约 22km，2 天，沿金沙江峡谷、玉龙雪山观景，上虎跳→中虎跳，难度中等。</b></p><ul><li><b>Day1</b>：桥头→28 道拐→中途客栈(Tina's)<br>约 12km，爬升陡；住客栈；⚠️ 碎石滑。</li><li><b>Day2</b>：→上虎跳→下虎跳<br>约 10km，峡谷观景；住客栈；⚠️ 峡谷风大。</li></ul>\n\n🍱 装备与沿途补给：轻装；沿途客栈可补给；带能量棒与水。"
        },
        {
          "h": "🏞 路线亮点·必看风景",
          "body": "<ul><li><b>上虎跳</b>： 👍 江水咆哮最猛 ｜ 👎 人最多 ｜ ⚠️ 护栏外勿近</li><li><b>28 道拐</b>： 👍 俯瞰峡谷全景 ｜ 👎 陡、费膝盖 ｜ ⚠️ 慢行</li><li><b>玉龙雪山观景</b>： 👍 雪峰对峙 ｜ 👎 看运气 ｜ ⚠️ 无</li></ul>"
        }
      ],
      "images": [
        "assets/scene/route_10_0.jpg",
        "assets/scene/route_10_1.jpg",
        "assets/scene/route_10_2.jpg",
        "assets/route_10.svg"
      ]
    },
    {
      "title": "稻城亚丁 · 长线（四川）",
      "tag": "第12天 · 全球徒步路线",
      "loc": "亚洲-中国-四川-稻城县",
      "blocks": [
        {
          "h": "🎒 行前通用准备",
          "body": "<p>① 装备分层：排汗内层+保暖中层+防风外层，登山鞋提前磨合；登山杖、头灯、雨衣、保温毯必带。② 体能循序渐进，出发前 4-6 周做负重爬坡训练。③ 买含高原/救援的户外保险（如「美亚」「安联」高危运动险）。④ 离线下载「两步路 / AllTrails / Gaia GPS」轨迹与「MAPS.ME」地图；把行程告知家人。⑤ 出境路线查签证与徒步许可（permit），部分限流需提前数月预约。⑥ 轻量化但留安全冗余：急救包+个人药品随身。</p>"
        },
        {
          "h": "🌏 当地民俗文化·传统礼仪",
          "body": "藏族神山崇拜：仙乃日、央迈勇、夏诺多吉为神山，不可手指直指、不可捡玛尼石带走；转山须顺时针。天葬台严禁围观与拍照。"
        },
        {
          "h": "🚉 从深圳出发·如何到达",
          "body": "<p>深圳→成都转机稻城亚丁机场（世界最高民用机场 4411m）或陆路前往。往返 ¥1500-3000。</p>\n\n💰 参考费用（人均）：门票+观光车 ¥266；2 天人均约 ¥2000-3500。"
        },
        {
          "h": "🗓 最佳徒步季节",
          "body": "9-10 月秋色最佳；4-5 月高山杜鹃；冬季大雪封山"
        },
        {
          "h": "🥾 徒步天数与路线",
          "body": "<p><b>2-3 天，牛奶海 4600m、五色海 4700m，洛绒牛场→央迈勇，海拔高，慢走缓升。</b></p><ul><li><b>Day1</b>：景区→洛绒牛场→牛奶海<br>约 10km（可骑马+徒步）；住景区/香格里拉镇；⚠️ 高反。</li><li><b>Day2</b>：→五色海→返回<br>约 8km，彩海；⚠️ 天气影响观景。</li></ul>\n\n🍱 装备与沿途补给：氧气瓶备用；保暖层必带；景区内补给少，自带路餐。"
        },
        {
          "h": "🏞 路线亮点·必看风景",
          "body": "<ul><li><b>牛奶海</b>： 👍 蓝绿渐变圣湖 ｜ 👎 海拔高、累 ｜ ⚠️ 慢行</li><li><b>五色海</b>： 👍 色彩奇幻 ｜ 👎 受天气影响 ｜ ⚠️ 无</li><li><b>三神山</b>： 👍 雪峰倒影 ｜ 👎 远观 ｜ ⚠️ 无</li></ul>"
        }
      ],
      "images": [
        "assets/scene/route_11_0.jpg",
        "assets/scene/route_11_1.jpg",
        "assets/scene/route_11_2.jpg",
        "assets/route_11.svg"
      ]
    },
    {
      "title": "武功山 · 高山草甸（江西）",
      "tag": "第13天 · 全球徒步路线",
      "loc": "亚洲-中国-江西-萍乡市",
      "blocks": [
        {
          "h": "🎒 行前通用准备",
          "body": "<p>① 装备分层：排汗内层+保暖中层+防风外层，登山鞋提前磨合；登山杖、头灯、雨衣、保温毯必带。② 体能循序渐进，出发前 4-6 周做负重爬坡训练。③ 买含高原/救援的户外保险（如「美亚」「安联」高危运动险）。④ 离线下载「两步路 / AllTrails / Gaia GPS」轨迹与「MAPS.ME」地图；把行程告知家人。⑤ 出境路线查签证与徒步许可（permit），部分限流需提前数月预约。⑥ 轻量化但留安全冗余：急救包+个人药品随身。</p>"
        },
        {
          "h": "🌏 当地民俗文化·传统礼仪",
          "body": "赣西客家文化；山间草甸为生态敏感区，切勿在核心草甸露营踩踏。当地农家可体验擂茶，主人敬茶需双手接、轻啜以示礼。"
        },
        {
          "h": "🚉 从深圳出发·如何到达",
          "body": "<p>深圳北→萍乡北高铁约 5h（¥400），转巴士到沈子村/龙山村入口。往返 ¥800-1500。</p>\n\n💰 参考费用（人均）：帐篷/客栈 ¥100-200/晚；2 天人均约 ¥800-1500。"
        },
        {
          "h": "🗓 最佳徒步季节",
          "body": "5-10 月最佳，9 月帐篷节；避开冬季结冰期"
        },
        {
          "h": "🥾 徒步天数与路线",
          "body": "<p><b>约 30km，2 天（沈子村→金顶→发云界），10 万亩高山草甸、云海日出，难度中等。</b></p><ul><li><b>Day1</b>：沈子村→金顶<br>约 18km，草甸云海；住帐篷/客栈；⚠️ 风大。</li><li><b>Day2</b>：金顶→发云界→羊狮慕<br>约 12km，草甸连绵；住客栈。</li></ul>\n\n🍱 装备与沿途补给：轻装；山顶客栈/帐篷；补给点较多，可轻量化。"
        },
        {
          "h": "🏞 路线亮点·必看风景",
          "body": "<ul><li><b>高山草甸</b>： 👍 亚洲第一、云海 ｜ 👎 风大 ｜ ⚠️ 保暖</li><li><b>帐篷节</b>： 👍 人气旺、活动多 ｜ 👎 人多 ｜ ⚠️ 早订</li><li><b>星空</b>： 👍 银河清晰 ｜ 👎 夜间冷 ｜ ⚠️ 装备到位</li></ul>"
        }
      ],
      "images": [
        "assets/scene/route_12_0.jpg",
        "assets/scene/route_12_1.jpg",
        "assets/scene/route_12_2.jpg",
        "assets/route_12.svg"
      ]
    },
    {
      "title": "哈巴雪山（云南）",
      "tag": "第14天 · 全球徒步路线",
      "loc": "亚洲-中国-云南-香格里拉市",
      "blocks": [
        {
          "h": "🎒 行前通用准备",
          "body": "<p>① 装备分层：排汗内层+保暖中层+防风外层，登山鞋提前磨合；登山杖、头灯、雨衣、保温毯必带。② 体能循序渐进，出发前 4-6 周做负重爬坡训练。③ 买含高原/救援的户外保险（如「美亚」「安联」高危运动险）。④ 离线下载「两步路 / AllTrails / Gaia GPS」轨迹与「MAPS.ME」地图；把行程告知家人。⑤ 出境路线查签证与徒步许可（permit），部分限流需提前数月预约。⑥ 轻量化但留安全冗余：急救包+个人药品随身。</p>"
        },
        {
          "h": "🌏 当地民俗文化·传统礼仪",
          "body": "纳西、藏文化交汇：登山前当地有敬山神习俗，尊重向导安排；神山禁大声呼喊、禁采挖植物。藏家访不踩门槛，遇经幡顺时针绕行。"
        },
        {
          "h": "🚉 从深圳出发·如何到达",
          "body": "<p>深圳→丽江/香格里拉，再车到哈巴村约 4-5h。往返 ¥1500-2500。</p>\n\n💰 参考费用（人均）：向导/协作 ¥1500-2500（含装备）；3 天人均约 ¥2500-4000。"
        },
        {
          "h": "🗓 最佳徒步季节",
          "body": "10-12 月、2-4 月雪况好、可见度高；避开雨季"
        },
        {
          "h": "🥾 徒步天数与路线",
          "body": "<p><b>2-3 天，登顶 5396m（入门级雪山），大本营 4100m→顶峰，难度中高（需冰爪）。</b></p><ul><li><b>Day1</b>：哈巴村(2700)→大本营(4100)<br>约 15km，林地爬升；住大本营（有伙食）；⚠️ 适应海拔。</li><li><b>Day2</b>：大本营→顶峰(5396)→下撤<br>约 12km，冰爪路段；⚠️ 雪坡安全。</li></ul>\n\n🍱 装备与沿途补给：冰爪、头盔、羽绒由协作提供；自带能量；大本营有伙食。"
        },
        {
          "h": "🏞 路线亮点·必看风景",
          "body": "<ul><li><b>顶峰</b>： 👍 入门雪山、成就感强 ｜ 👎 凌晨冲顶冷 ｜ ⚠️ 协作陪同</li><li><b>玉龙雪山同框</b>： 👍 双峰远景 ｜ 👎 看运气 ｜ ⚠️ 无</li><li><b>高山杜鹃</b>： 👍 春色烂漫 ｜ 👎 仅春季 ｜ ⚠️ 无</li></ul>"
        }
      ],
      "images": [
        "assets/scene/route_13_0.jpg",
        "assets/scene/route_13_1.jpg",
        "assets/scene/route_13_2.jpg",
        "assets/route_13.svg"
      ]
    }
  ],
  "finance": [
    {
      "title": "埃隆·马斯克 Elon Musk",
      "tag": "第1天 · 名人故事",
      "blocks": [
        {
          "h": "📷 人物照片",
          "body": "<img class=\"face\" src=\"assets/people/musk.jpg\" alt=\"埃隆·马斯克\" onerror=\"this.onerror=null;this.src='assets/face-fallback.svg'\">"
        },
        {
          "h": "🏷 人物标签",
          "body": "<p class=\"tags\">特斯拉 · SpaceX · xAI · 火星移民 · 全球首富</p>"
        },
        {
          "h": "📖 人物介绍（在世）",
          "body": "<p>1971年生于南非比勒陀利亚，拥有南非、加拿大、美国三重背景，企业家兼工程师。截至2026年仍在世、活跃经营。早年创办Zip2、X.com（后与Confinity合并为PayPal）；2002年创立SpaceX，2004年投资并主导特斯拉；近年又创办xAI、收购X平台。以“第一性原理”推动电动车、可回收火箭与人工智能。</p>"
        },
        {
          "h": "🏆 主要成就",
          "body": "<p>把特斯拉做成全球市值最高的车企；用猎鹰火箭实现一级助推器回收，把发射成本砍掉一个数量级；2025年起稳居全球首富，2026年6月成为美元计价史上首位万亿富翁；以星链（Starlink）重塑全球卫星互联网。</p>"
        },
        {
          "h": "🌟 一句话亮点",
          "body": "<p>“如果一件事足够重要，即使胜算不大也要去做。”——他用可回收火箭把发射成本砍掉一个数量级。</p>"
        }
      ]
    },
    {
      "title": "马云 Jack Ma (Ma Yun)",
      "tag": "第2天 · 名人故事",
      "blocks": [
        {
          "h": "📷 人物照片",
          "body": "<img class=\"face\" src=\"assets/people/ma.jpg\" alt=\"马云\" onerror=\"this.onerror=null;this.src='assets/face-fallback.svg'\">"
        },
        {
          "h": "🏷 人物标签",
          "body": "<p class=\"tags\">阿里巴巴 · 蚂蚁集团 · 淘宝 · 电商教父 · 公益</p>"
        },
        {
          "h": "📖 人物介绍（在世）",
          "body": "<p>1964年生于浙江杭州，英语教师出身。截至2026年仍在世。1999年在杭州公寓里带18人创办阿里巴巴，做出B2B、淘宝、天猫、支付宝，搭建起中国电商与移动支付的基础设施。2019年卸任董事局主席，近年重心转向教育、乡村教师与公益。</p>"
        },
        {
          "h": "🏆 主要成就",
          "body": "<p>创立阿里巴巴并带其成为万亿级电商帝国；孵化支付宝，奠定中国移动支付与数字金融的底座；以“让天下没有难做的生意”理念，把千万中小商家送上全球贸易舞台——与你的外贸之路直接相关。</p>"
        },
        {
          "h": "🌟 一句话亮点",
          "body": "<p>“让天下没有难做的生意”——这句信条，和你的外贸之路直接相关。</p>"
        }
      ]
    },
    {
      "title": "任正非 Ren Zhengfei",
      "tag": "第3天 · 名人故事",
      "blocks": [
        {
          "h": "📷 人物照片",
          "body": "<img class=\"face\" src=\"assets/people/ren.jpg\" alt=\"任正非\" onerror=\"this.onerror=null;this.src='assets/face-fallback.svg'\">"
        },
        {
          "h": "🏷 人物标签",
          "body": "<p class=\"tags\">华为 · 通信设备 · 深圳 · 海思芯片 · 狼性文化</p>"
        },
        {
          "h": "📖 人物介绍（在世）",
          "body": "<p>1944年生于贵州安顺，退伍军人、工程师。截至2026年仍在世。1987年在深圳以2.1万元创办华为，从代理交换机起步，一步步做到全球最大通信设备商。面对多轮外部制裁，他主导“备胎计划”、押注海思自研芯片与鸿蒙系统。</p>"
        },
        {
          "h": "🏆 主要成就",
          "body": "<p>把华为从深圳小作坊带成全球通信与5G龙头；在极限施压下坚持自主研发，海思麒麟芯片、鸿蒙操作系统成为国产替代标杆；以“冬天论”与全员持股把危机感写进公司基因。</p>"
        },
        {
          "h": "🌟 一句话亮点",
          "body": "<p>“冬天总会过去，但活下来的企业才有春天。”——总部就在你所在的深圳。</p>"
        }
      ]
    },
    {
      "title": "雷军 Lei Jun",
      "tag": "第4天 · 名人故事",
      "blocks": [
        {
          "h": "📷 人物照片",
          "body": "<img class=\"face\" src=\"assets/people/lei.jpg\" alt=\"雷军\" onerror=\"this.onerror=null;this.src='assets/face-fallback.svg'\">"
        },
        {
          "h": "🏷 人物标签",
          "body": "<p class=\"tags\">小米 · 智能手机 · 生态链 · 造车 · 营销鬼才</p>"
        },
        {
          "h": "📖 人物介绍（在世）",
          "body": "<p>1969年生于湖北仙桃，武汉大学计算机系毕业。截至2026年仍在世。早年创办金山软件并带领上市，2010年创立小米，用“互联网手机+极致性价比”改写行业格局；2021年起跨界造车，2024年小米SU7上市即成爆款。</p>"
        },
        {
          "h": "🏆 主要成就",
          "body": "<p>把小米做成全球前三的智能手机厂商与最大消费级IoT生态；2024年小米汽车SU7一炮而红，一年内跻身中国新能源第一梯队；以“专注、极致、口碑、快”的七字诀成为一代创业范本。</p>"
        },
        {
          "h": "🌟 一句话亮点",
          "body": "<p>“站在风口上，猪都能飞起来。”——他也把这句话升级成七字诀。</p>"
        }
      ]
    },
    {
      "title": "杰夫·贝索斯 Jeff Bezos",
      "tag": "第5天 · 名人故事",
      "blocks": [
        {
          "h": "📷 人物照片",
          "body": "<img class=\"face\" src=\"assets/people/bezos.jpg\" alt=\"杰夫·贝索斯\" onerror=\"this.onerror=null;this.src='assets/face-fallback.svg'\">"
        },
        {
          "h": "🏷 人物标签",
          "body": "<p class=\"tags\">亚马逊 · AWS · 蓝色起源 · 长期主义 · 电商帝国</p>"
        },
        {
          "h": "📖 人物介绍（在世）",
          "body": "<p>1964年生于美国新墨西哥州，普林斯顿大学毕业。截至2026年仍在世。1994年从网上卖书起步创立亚马逊，将其做成全球最大电商与云计算（AWS）公司；2021年卸任CEO，转攻火箭公司蓝色起源，并收购《华盛顿邮报》。</p>"
        },
        {
          "h": "🏆 主要成就",
          "body": "<p>创立亚马逊，重塑全球零售与物流；以AWS开创云计算时代，长期贡献亚马逊绝大部分利润；以“Day 1”文化与7年决策尺度，把长期主义刻进企业DNA。</p>"
        },
        {
          "h": "🌟 一句话亮点",
          "body": "<p>他信奉“Day 1”文化——永远像创业第一天那样保持饥饿感。</p>"
        }
      ]
    },
    {
      "title": "钟睒睒 Zhong Shanshan",
      "tag": "第6天 · 名人故事",
      "blocks": [
        {
          "h": "📷 人物照片",
          "body": "<img class=\"face\" src=\"assets/people/zhong.jpg\" alt=\"钟睒睒\">"
        },
        {
          "h": "🏷 人物标签",
          "body": "<p class=\"tags\">农夫山泉 · 万泰生物 · 中国首富 · 营销高手 · 低调</p>"
        },
        {
          "h": "📖 人物介绍（在世）",
          "body": "<p>1954年生于浙江诸暨，做过记者、卖过保健品。截至2026年仍在世。1996年创立农夫山泉，靠“大自然的搬运工”一句广告做透包装饮用水；同时控股疫苗企业万泰生物，曾两度位居中国首富，却极少公开露面。</p>"
        },
        {
          "h": "🏆 主要成就",
          "body": "<p>把农夫山泉做成中国包装饮用水第一品牌；通过万泰生物掌握国产HPV疫苗关键产能；以极低的公众曝光做到极高的商业掌控，是“闷声发财”的典型。</p>"
        },
        {
          "h": "🌟 一句话亮点",
          "body": "<p>他极少露面却最懂“把水卖出品牌溢价”。</p>"
        }
      ]
    },
    {
      "title": "张一鸣 Zhang Yiming",
      "tag": "第7天 · 名人故事",
      "blocks": [
        {
          "h": "📷 人物照片",
          "body": "<img class=\"face\" src=\"assets/people/zhang.jpg\" alt=\"张一鸣\" onerror=\"this.onerror=null;this.src='assets/face-fallback.svg'\">"
        },
        {
          "h": "🏷 人物标签",
          "body": "<p class=\"tags\">字节跳动 · TikTok · 算法 · 今日头条 · 全球化</p>"
        },
        {
          "h": "📖 人物介绍（在世）",
          "body": "<p>1983年生于福建龙岩，南开大学毕业。截至2026年仍在世。2012年创立字节跳动，做出今日头条与抖音；TikTok风靡全球让他2024年登顶中国首富。2021年卸任CEO，仍持有超50%投票权，退居幕后把控战略。</p>"
        },
        {
          "h": "🏆 主要成就",
          "body": "<p>创立字节跳动并打造抖音/TikTok双引擎，TikTok成为全球下载量最高的App；以强算法中台把公司做成真正的“全球App工厂”——与你做外贸的TikTok Shop息息相关；登顶中国首富。</p>"
        },
        {
          "h": "🌟 一句话亮点",
          "body": "<p>他用“延迟满足感”把一家中国公司做成全球App工厂。</p>"
        }
      ]
    },
    {
      "title": "沃伦·巴菲特 Warren Buffett",
      "tag": "第8天 · 名人故事",
      "blocks": [
        {
          "h": "📷 人物照片",
          "body": "<img class=\"face\" src=\"assets/people/buffett.jpg\" alt=\"沃伦·巴菲特\" onerror=\"this.onerror=null;this.src='assets/face-fallback.svg'\">"
        },
        {
          "h": "🏷 人物标签",
          "body": "<p class=\"tags\">价值投资 · 伯克希尔 · 复利 · 奥马哈先知 · 长期持有</p>"
        },
        {
          "h": "📖 人物介绍（在世）",
          "body": "<p>1930年生于美国内布拉斯加州奥马哈，哥伦比亚大学商学院毕业。截至2026年仍在世，已年逾九旬仍担任伯克希尔·哈撒韦董事长。以价值投资与长期持有闻名，被尊称为“奥马哈的先知”。</p>"
        },
        {
          "h": "🏆 主要成就",
          "body": "<p>掌舵伯克希尔·哈撒韦近六十年，把一家纺织厂改造为横跨保险、能源、消费的万亿投资帝国；以年化约20%的长期复利成为投资界标杆；长年位居全球富豪榜前列并承诺捐出绝大部分财富。</p>"
        },
        {
          "h": "🌟 一句话亮点",
          "body": "<p>“别人贪婪时我恐惧，别人恐惧时我贪婪。”——他用复利把雪球滚了七十年。</p>"
        }
      ]
    },
    {
      "title": "刘强东 Liu Qiangdong",
      "tag": "第9天 · 名人故事",
      "blocks": [
        {
          "h": "📷 人物照片",
          "body": "<img class=\"face\" src=\"assets/people/liu.jpg\" alt=\"刘强东\" onerror=\"this.onerror=null;this.src='assets/face-fallback.svg'\">"
        },
        {
          "h": "🏷 人物标签",
          "body": "<p class=\"tags\">京东 · 自建物流 · 正品电商 · 供应链 · 下沉市场</p>"
        },
        {
          "h": "📖 人物介绍（在世）",
          "body": "<p>1973年生于江苏宿迁，中国人民大学毕业。截至2026年仍在世。1998年从中关村柜台卖光磁产品起家，2004年转型线上，2013年做成电商京东（JD.com），以自建物流与“正品”口碑立足。</p>"
        },
        {
          "h": "🏆 主要成就",
          "body": "<p>创立京东并建成行业标杆的自建仓储配送体系，把“快”做成护城河；以“正品+自营”对抗平台假货质疑，与阿里分庭抗礼；京东物流独立上市后成为中国供应链基础设施的重要一环。</p>"
        },
        {
          "h": "🌟 一句话亮点",
          "body": "<p>他赌上全部身家自建仓储配送，把“快”做成京东的护城河。</p>"
        }
      ]
    },
    {
      "title": "王兴 Wang Xing",
      "tag": "第10天 · 名人故事",
      "blocks": [
        {
          "h": "📷 人物照片",
          "body": "<img class=\"face\" src=\"assets/people/wang.jpg\" alt=\"王兴\" onerror=\"this.onerror=null;this.src='assets/face-fallback.svg'\">"
        },
        {
          "h": "🏷 人物标签",
          "body": "<p class=\"tags\">美团 · 本地生活 · 千团大战幸存者 · 深度思考 · 无边界</p>"
        },
        {
          "h": "📖 人物介绍（在世）",
          "body": "<p>1979年生于福建龙岩，清华大学毕业、曾留学美国。截至2026年仍在世。校内网、饭否之后，2010年创立美团，从团购“千团大战”杀出，做成覆盖外卖、到店、酒旅的本地生活超级平台。</p>"
        },
        {
          "h": "🏆 主要成就",
          "body": "<p>带领美团在惨烈的千团大战中胜出，并做成日订单过亿的外卖帝国；以“无边界”扩张覆盖到店、酒旅、买菜、打车等本地生活全场景；是“美团 vs 抖音”本地生活商战的主角。</p>"
        },
        {
          "h": "🌟 一句话亮点",
          "body": "<p>他信奉“既往不恋，纵情向前”，把外卖打成日订单过亿的生意。</p>"
        }
      ]
    },
    {
      "title": "萨姆·奥尔特曼 Sam Altman",
      "tag": "第11天 · 名人故事",
      "blocks": [
        {
          "h": "📷 人物照片",
          "body": "<img class=\"face\" src=\"assets/people/altman.jpg\" alt=\"萨姆·奥尔特曼\" onerror=\"this.onerror=null;this.src='assets/face-fallback.svg'\">"
        },
        {
          "h": "🏷 人物标签",
          "body": "<p class=\"tags\">OpenAI · ChatGPT · YC · AGI · AI时代</p>"
        },
        {
          "h": "📖 人物介绍（在世）",
          "body": "<p>1985年生于美国密苏里州，斯坦福辍学创业。截至2026年仍在世。2014–2019年执掌创业加速器Y Combinator，2019年起任OpenAI CEO，把生成式AI（ChatGPT）推向全球。</p>"
        },
        {
          "h": "🏆 主要成就",
          "body": "<p>执掌OpenAI发布ChatGPT，引爆全球生成式AI浪潮；推动GPT系列与Sora等多模态模型迭代；以“超级智能/AGI”叙事成为这一轮AI革命最显眼的面孔；同时以个人投资布局核能、生物科技等前沿领域。</p>"
        },
        {
          "h": "🌟 一句话亮点",
          "body": "<p>他押注通用人工智能（AGI）会改变一切，是这一轮AI浪潮最显眼的面孔。</p>"
        }
      ]
    },
    {
      "title": "曹德旺 Cao Dewang",
      "tag": "第12天 · 名人故事",
      "blocks": [
        {
          "h": "📷 人物照片",
          "body": "<img class=\"face\" src=\"assets/people/cao.jpg\" alt=\"曹德旺\" onerror=\"this.onerror=null;this.src='assets/face-fallback.svg'\">"
        },
        {
          "h": "🏷 人物标签",
          "body": "<p class=\"tags\">福耀玻璃 · 汽车玻璃 · 实业报国 · 慈善 · 美国建厂</p>"
        },
        {
          "h": "📖 人物介绍（在世）",
          "body": "<p>1946年生于福建福清，少年辍学、白手起家。截至2026年仍在世。1987年创立福耀玻璃，做成全球最大汽车玻璃供应商，并在美国俄亥俄州建厂，把“中国工厂”开到汽车工业腹地。</p>"
        },
        {
          "h": "🏆 主要成就",
          "body": "<p>把福耀玻璃做成全球汽车玻璃市占率第一；在美国建厂拍成纪录片《美国工厂》并获奥斯卡；捐资创办福耀科技大学，长期大额捐赠慈善，是少有的把“实业”刻进骨子里的企业家。</p>"
        },
        {
          "h": "🌟 一句话亮点",
          "body": "<p>“我做玻璃，做到全世界最好就赢了。”——他是少有的把“实业”二字刻进骨子里的企业家。</p>"
        }
      ]
    },
    {
      "title": "董明珠 Dong Mingzhu",
      "tag": "第13天 · 名人故事",
      "blocks": [
        {
          "h": "📷 人物照片",
          "body": "<img class=\"face\" src=\"assets/people/dong.jpg\" alt=\"董明珠\" onerror=\"this.onerror=null;this.src='assets/face-fallback.svg'\">"
        },
        {
          "h": "🏷 人物标签",
          "body": "<p class=\"tags\">格力 · 空调女王 · 硬刚营销 · 品质偏执 · 中国制造</p>"
        },
        {
          "h": "📖 人物介绍（在世）",
          "body": "<p>1954年生于江苏南京，36岁加入格力做一线业务员。截至2026年仍在世。从业务员一路做到掌门人，把格力做成空调霸主，以“掌握核心科技”和铁腕管理闻名。</p>"
        },
        {
          "h": "🏆 主要成就",
          "body": "<p>掌舵格力成为全球空调销量长期第一的龙头企业；坚持自研压缩机等核心部件，把“中国制造”品质叙事推向大众；以极强个人IP与硬刚式营销成为中国制造业最具辨识度的女企业家。</p>"
        },
        {
          "h": "🌟 一句话亮点",
          "body": "<p>她敢当面怼同行、为品质拍胸脯，是中国制造业最具辨识度的女企业家。</p>"
        }
      ]
    },
    {
      "title": "黄峥 Colin Huang",
      "tag": "第14天 · 名人故事",
      "blocks": [
        {
          "h": "📷 人物照片",
          "body": "<img class=\"face\" src=\"assets/people/huang.jpg\" alt=\"黄峥\">"
        },
        {
          "h": "🏷 人物标签",
          "body": "<p class=\"tags\">拼多多 · Temu · 下沉市场 · 农业 · 极致效率</p>"
        },
        {
          "h": "📖 人物介绍（在世）",
          "body": "<p>1980年生于浙江杭州，浙江大学、威斯康星大学留学。截至2026年仍在世。2015年创立拼多多，用“社交拼团+极致低价”横扫下沉市场；后孵化出海电商Temu引爆欧美。2021年起卸任董事长，转向科研与公益。</p>"
        },
        {
          "h": "🏆 主要成就",
          "body": "<p>创立拼多多并以“农地云拼”模式重塑农产品上行链路；孵化Temu，以“全托管+低价”打法横扫欧美，成为跨境电商黑马——正是“Temu vs SHEIN vs TikTok Shop”商战的关键一方；登顶中国富豪榜前列。</p>"
        },
        {
          "h": "🌟 一句话亮点",
          "body": "<p>Temu的“全托管+低价”打法，与你的跨境生意直接相关。</p>"
        }
      ]
    }
  ,
    {
      "title": "阳萌 Yang Meng",
      "tag": "新增 · 名人故事",
      "blocks": [
        {
          "h": "🏷 人物标签",
          "body": "<p>安克创新创始人 · 前 Google 工程师 · 长沙</p>"
        },
        {
          "h": "📖 人物介绍（在世）",
          "body": "<p>湖南人，1980 年代生，曾就职 Google 美国总部。2011 年在长沙创立海翼（安克前身），从亚马逊充电配件切入出海，截至 2026 年仍活跃经营。</p>"
        },
        {
          "h": "🏆 主要成就",
          "body": "<p>把 Anker 做成全球移动充电第一品牌，2020 年带领安克创新登陆创业板；以「浅海理论」指导品类扩张，海外营收占比 95%+。</p>"
        },
        {
          "h": "🌟 一句话亮点",
          "body": "<p>「在细分品类里做第一，再滚雪球。」——从一根充电线到全球智能硬件品牌。</p>"
        }
      ]
    },
    {
      "title": "王来春 Wang Laichun",
      "tag": "新增 · 名人故事",
      "blocks": [
        {
          "h": "🏷 人物标签",
          "body": "<p>立讯精密创始人 · 富士康出身 · 汕头</p>"
        },
        {
          "h": "📖 人物介绍（在世）",
          "body": "<p>1967 年生于广东汕头，1988 年进入富士康，从产线工人做起；1999 年创立立讯精密，截至 2026 年仍掌舵。</p>"
        },
        {
          "h": "🏆 主要成就",
          "body": "<p>把立讯做成果链核心（AirPods/Apple Watch 主力代工），2023 年跻身《财富》世界 500 强；被称为「代工女王」。</p>"
        },
        {
          "h": "🌟 一句话亮点",
          "body": "<p>「从打工妹到代工女王」——中国制造升级的标杆人物。</p>"
        }
      ]
    },
    {
      "title": "周群飞 Zhou Qunfei",
      "tag": "新增 · 名人故事",
      "blocks": [
        {
          "h": "🏷 人物标签",
          "body": "<p>蓝思科技创始人 · 玻璃女王 · 浏阳</p>"
        },
        {
          "h": "📖 人物介绍（在世）",
          "body": "<p>1970 年生于湖南浏阳，早年做手表玻璃，1993 年前后创业，2003 年创立蓝思科技，截至 2026 年仍掌舵。</p>"
        },
        {
          "h": "🏆 主要成就",
          "body": "<p>全球手机玻璃盖板龙头，2015 年创业板上市并一度成为中国女首富。</p>"
        },
        {
          "h": "🌟 一句话亮点",
          "body": "<p>「从打工到千亿女首富」——硬科技制造的传奇。</p>"
        }
      ]
    },
    {
      "title": "刘靖康 Liu Jingkang",
      "tag": "新增 · 名人故事",
      "blocks": [
        {
          "h": "🏷 人物标签",
          "body": "<p>影石创新创始人 · 90 后 · 南京</p>"
        },
        {
          "h": "📖 人物介绍（在世）",
          "body": "<p>1991 年生于广东，南京大学毕业，2015 年创立影石创新，主推 Insta360 全景/运动相机，截至 2026 年仍掌舵。</p>"
        },
        {
          "h": "🏆 主要成就",
          "body": "<p>把中国全景相机做到全球领先，海外营收占比高，2025 年登陆科创板；是少见的 90 后上市公司创始人。</p>"
        },
        {
          "h": "🌟 一句话亮点",
          "body": "<p>「90 后掌舵的影像独角兽」——中国智造出海新势力。</p>"
        }
      ]
    },
    {
      "title": "钟波 Zhong Bo",
      "tag": "新增 · 名人故事",
      "blocks": [
        {
          "h": "🏷 人物标签",
          "body": "<p>极米科技创始人 · 成都</p>"
        },
        {
          "h": "📖 人物介绍（在世）",
          "body": "<p>1980 年代生，曾任职晨讯科技，2013 年创立极米，押注「无屏电视」智能投影，截至 2026 年仍掌舵。</p>"
        },
        {
          "h": "🏆 主要成就",
          "body": "<p>把极米做成中国智能投影第一，2021 年科创板上市，并加速出海日欧美。</p>"
        },
        {
          "h": "🌟 一句话亮点",
          "body": "<p>「把投影搬进客厅」——重新定义家用大屏。</p>"
        }
      ]
    },
    {
      "title": "孙中伟 Sun Zhongwei",
      "tag": "新增 · 名人故事",
      "blocks": [
        {
          "h": "🏷 人物标签",
          "body": "<p>华宝新能源创始人 · Jackery · 深圳</p>"
        },
        {
          "h": "📖 人物介绍（在世）",
          "body": "<p>1970 年代生，2003 年创立华宝新能源，早期做充电宝/电池业务，截至 2026 年仍掌舵。</p>"
        },
        {
          "h": "🏆 主要成就",
          "body": "<p>创立便携储能品牌 Jackery，成北美便携储能头部，2022 年带领华宝新能登陆创业板。</p>"
        },
        {
          "h": "🌟 一句话亮点",
          "body": "<p>「把带电的户外生活做成全球品类」——便携储能的开创者之一。</p>"
        }
      ]
    }],
  "diet": [
    {
      "title": "第1天 · 暖胃启动餐",
      "tag": "第1天 · 饮食定制",
      "blocks": [
        {
          "h": "🛒 采购与执行",
          "body": "<p>① 食材在「钱大妈」「美团买菜」「盒马」晚间 8 点后打折囤，性价比最高；② 前一晚备好早餐/午餐，早上省时、午间带饭不踩坑；③ 用餐节奏：早餐 7:30 前、午餐 12:30 前、晚餐 19:00 前，下午 15:00 加餐防暴食；④ 外食用「薄荷健康」查热量，守每日约 1200–1400 kcal 减脂线；胀气时饭后散步 10 分钟助消化。</p>"
        },
        {
          "h": "🌅 早餐（7:30-8:30）",
          "body": "<p>温水一杯（可加薄片姜或柠檬）+ 2个水煮蛋 + 燕麦粥（燕麦30g煮成粥）+ 小番茄5颗。蛋白质优先的早餐能拉高食物热效应，帮一上午的代谢点火。</p>"
        },
        {
          "h": "🍱 午餐（带饭到福田）",
          "body": "<p>蒸鸡胸150g（前一晚用少许生抽、黑胡椒腌好，蒸10分钟）+ 清炒冬瓜胡萝卜（少油）+ 糙米饭100g。装饭盒带去公司，比外卖省一半还低脂。</p>"
        },
        {
          "h": "🌙 晚餐（18:30前吃完）",
          "body": "<p>嫩豆腐海带冬瓜汤（嫩豆腐半盒+冬瓜+海带苗，少盐）+ 蒸红薯半根。清淡好消化，睡前不胀。</p>"
        },
        {
          "h": "🥤 加餐 · 饮水",
          "body": "<p>上午：无糖酸奶1杯 + 蓝莓一小把（益生菌护肠胃、缓解胀气）。下午：绿茶或乌龙1-2杯。全天温水1.5-2L，避开碳酸饮料、奶茶和口香糖。</p>"
        },
        {
          "h": "🌶 旺仔辣味备选",
          "body": "<p>午餐把蒸鸡胸换成「藤椒手撕鸡丝」——鸡胸煮熟撕丝，淋藤椒油+生抽+小米辣，麻辣开胃；晚餐嫩豆腐改「剁椒蒸豆腐」，辣味暖胃不寡淡。辣味全靠藤椒/剁椒提味，不额外加油糖。</p>"
        },
        {
          "h": "💡 为什么这么搭",
          "body": "<p>高蛋白早餐点燃代谢；姜茶暖胃促循环；蒸煮代替油炸控油；豆腐海带补碘（碘足甲状腺才肯工作=代谢正常）；酸奶益生菌改善腹胀。食材农贸市场或钱大妈都能买，单日约¥15-20。</p>"
        }
      ]
    },
    {
      "title": "第2天 · 鱼蔬轻食",
      "tag": "第2天 · 饮食定制",
      "blocks": [
        {
          "h": "🛒 采购与执行",
          "body": "<p>① 食材在「钱大妈」「美团买菜」「盒马」晚间 8 点后打折囤，性价比最高；② 前一晚备好早餐/午餐，早上省时、午间带饭不踩坑；③ 用餐节奏：早餐 7:30 前、午餐 12:30 前、晚餐 19:00 前，下午 15:00 加餐防暴食；④ 外食用「薄荷健康」查热量，守每日约 1200–1400 kcal 减脂线；胀气时饭后散步 10 分钟助消化。</p>"
        },
        {
          "h": "🌅 早餐",
          "body": "<p>温燕麦奶（或无糖巴氏鲜奶）冲燕麦 + 1个水煮蛋 + 黄瓜条几根。燕麦奶比普通奶更温和、不易胀气。</p>"
        },
        {
          "h": "🍱 午餐（带饭）",
          "body": "<p>番茄龙利鱼煲（冷冻龙利鱼块铺番茄上蒸/煮）+ 蒜蓉通心菜（少油）+ 杂粮饭100g。鱼几乎无刺、低脂高蛋白。</p>"
        },
        {
          "h": "🌙 晚餐",
          "body": "<p>蒸鸡丝黄瓜玉米沙拉（鸡胸蒸熟撕丝+熟玉米粒+黄瓜，淋少许油醋）+ 紫菜蛋花汤（少油）。</p>"
        },
        {
          "h": "🥤 加餐 · 饮水",
          "body": "<p>苹果1个；普洱茶1-2杯（去腻促代谢）；杏仁10g（约7-8颗，健康脂肪但控量）。</p>"
        },
        {
          "h": "🌶 旺仔辣味备选",
          "body": "<p>午餐龙利鱼改「藤椒龙利鱼煲」——鱼块铺番茄+藤椒+小米辣同煮，酸辣鲜；晚餐鸡丝沙拉淋「油泼辣子油醋」，香辣爽口。午后你那杯冰美式或热茶照旧，零糖零卡，提神又压辣。</p>"
        },
        {
          "h": "💡 为什么这么搭",
          "body": "<p>鱼和鸡双蛋白；通心菜高纤饱腹；普洱助脂肪代谢；苹果果胶养肠道；坚果防暴食。单日约¥18。</p>"
        }
      ]
    },
    {
      "title": "第3天 · 虾菌养肠",
      "tag": "第3天 · 饮食定制",
      "blocks": [
        {
          "h": "🛒 采购与执行",
          "body": "<p>① 食材在「钱大妈」「美团买菜」「盒马」晚间 8 点后打折囤，性价比最高；② 前一晚备好早餐/午餐，早上省时、午间带饭不踩坑；③ 用餐节奏：早餐 7:30 前、午餐 12:30 前、晚餐 19:00 前，下午 15:00 加餐防暴食；④ 外食用「薄荷健康」查热量，守每日约 1200–1400 kcal 减脂线；胀气时饭后散步 10 分钟助消化。</p>"
        },
        {
          "h": "🌅 早餐",
          "body": "<p>2个水煮蛋 + 蒸红薯1小个 + 温巴氏鲜奶（无糖，胀气就换无糖酸奶）+ 圣女果几颗。</p>"
        },
        {
          "h": "🍱 午餐（带饭）",
          "body": "<p>虾仁蒸蛋（冻虾仁8-10只+2个蛋同蒸）+ 清炒苦瓜（少油，深圳湿热正好）+ 糙米饭100g。</p>"
        },
        {
          "h": "🌙 晚餐",
          "body": "<p>嫩豆腐菌菇汤（豆腐+香菇/金针菇+白菜，少盐）+ 半根玉米。</p>"
        },
        {
          "h": "🥤 加餐 · 饮水",
          "body": "<p>无糖酸奶+奇异果；绿茶；核桃2个。</p>"
        },
        {
          "h": "🌶 旺仔辣味备选",
          "body": "<p>午餐虾仁蒸蛋改「香辣虾仁蒸蛋」，蛋液里点几滴辣椒油；晚餐菌菇汤加一把干辣椒+花椒做成麻辣菌汤。菌菇配辣更下饭，膳食纤维照旧护肠。</p>"
        },
        {
          "h": "💡 为什么这么搭",
          "body": "<p>虾仁低脂高蛋白还补锌和碘（都和代谢相关）；菌菇多糖益肠道菌群、缓解腹胀；苦瓜低糖清热；玉米替精米稳血糖。冻虾仁便宜，单日约¥20。</p>"
        }
      ]
    },
    {
      "title": "第4天 · 补铁促代谢",
      "tag": "第4天 · 饮食定制",
      "blocks": [
        {
          "h": "🛒 采购与执行",
          "body": "<p>① 食材在「钱大妈」「美团买菜」「盒马」晚间 8 点后打折囤，性价比最高；② 前一晚备好早餐/午餐，早上省时、午间带饭不踩坑；③ 用餐节奏：早餐 7:30 前、午餐 12:30 前、晚餐 19:00 前，下午 15:00 加餐防暴食；④ 外食用「薄荷健康」查热量，守每日约 1200–1400 kcal 减脂线；胀气时饭后散步 10 分钟助消化。</p>"
        },
        {
          "h": "🌅 早餐",
          "body": "<p>燕麦+脱脂奶 + 1个蛋 + 香蕉1根（熟香蕉助消化，绿香蕉易胀）。</p>"
        },
        {
          "h": "🍱 午餐（带饭）",
          "body": "<p>彩椒炒牛里脊（牛肉80g少油快炒，补铁！女生易缺铁→代谢慢怕冷）+ 糙米饭 + 凉拌黄瓜。</p>"
        },
        {
          "h": "🌙 晚餐",
          "body": "<p>清蒸巴沙鱼 + 蒜蓉西兰花（少量）+ 蒸南瓜。</p>"
        },
        {
          "h": "🥤 加餐 · 饮水",
          "body": "<p>苹果1个；乌龙茶；杏仁10g。</p>"
        },
        {
          "h": "🌶 旺仔辣味备选",
          "body": "<p>午餐彩椒炒牛里脊升级「黑椒辣牛柳」——现磨黑胡椒+少许辣椒粉，铁和辣一起补；晚餐巴沙鱼改「微辣酸菜鱼片」，无刺好入口。补铁期吃辣更暖身。</p>"
        },
        {
          "h": "💡 为什么这么搭",
          "body": "<p>瘦牛肉补铁和蛋白质，铁足代谢才旺；彩椒维C帮铁吸收；巴沙鱼无刺低脂；南瓜低GI。成本约¥20。</p>"
        }
      ]
    },
    {
      "title": "第5天 · 清肠低脂",
      "tag": "第5天 · 饮食定制",
      "blocks": [
        {
          "h": "🛒 采购与执行",
          "body": "<p>① 食材在「钱大妈」「美团买菜」「盒马」晚间 8 点后打折囤，性价比最高；② 前一晚备好早餐/午餐，早上省时、午间带饭不踩坑；③ 用餐节奏：早餐 7:30 前、午餐 12:30 前、晚餐 19:00 前，下午 15:00 加餐防暴食；④ 外食用「薄荷健康」查热量，守每日约 1200–1400 kcal 减脂线；胀气时饭后散步 10 分钟助消化。</p>"
        },
        {
          "h": "🌅 早餐",
          "body": "<p>2个蛋 + 无糖全麦面包1片 + 温柠檬水 + 小黄瓜。</p>"
        },
        {
          "h": "🍱 午餐（带饭）",
          "body": "<p>鸡胸蔬菜卷（鸡丝+生菜+黄瓜用全麦薄饼卷，或配杂粮饭）+ 番茄1个。</p>"
        },
        {
          "h": "🌙 晚餐",
          "body": "<p>豆腐番茄汤 + 蒸红薯 + 凉拌木耳（促清肠）。</p>"
        },
        {
          "h": "🥤 加餐 · 饮水",
          "body": "<p>无糖酸奶+草莓；绿茶；核桃2个。</p>"
        },
        {
          "h": "🌶 旺仔辣味备选",
          "body": "<p>午餐鸡胸蔬菜卷蘸「蒜辣酱（蒜+小米辣+生抽）」，清爽带辣；晚餐豆腐番茄汤撒辣椒粉+葱花成胡辣豆腐汤。清肠不寡淡，辣味还能促循环。</p>"
        },
        {
          "h": "💡 为什么这么搭",
          "body": "<p>木耳膳食纤维清肠道、缓解腹胀；全麦缓释碳水稳血糖；番茄番茄红素抗氧化。单日约¥16。</p>"
        }
      ]
    },
    {
      "title": "第6天 · 一锅出省事",
      "tag": "第6天 · 饮食定制",
      "blocks": [
        {
          "h": "🛒 采购与执行",
          "body": "<p>① 食材在「钱大妈」「美团买菜」「盒马」晚间 8 点后打折囤，性价比最高；② 前一晚备好早餐/午餐，早上省时、午间带饭不踩坑；③ 用餐节奏：早餐 7:30 前、午餐 12:30 前、晚餐 19:00 前，下午 15:00 加餐防暴食；④ 外食用「薄荷健康」查热量，守每日约 1200–1400 kcal 减脂线；胀气时饭后散步 10 分钟助消化。</p>"
        },
        {
          "h": "🌅 早餐",
          "body": "<p>燕麦粥 + 1个蛋 + 温姜茶 + 蓝莓。</p>"
        },
        {
          "h": "🍱 午餐（带饭）",
          "body": "<p>鱼豆腐煲（龙利鱼/巴沙鱼+嫩豆腐+白菜同煮一锅）+ 糙米饭。适合加班前一次做好的带饭。</p>"
        },
        {
          "h": "🌙 晚餐",
          "body": "<p>鸡胸蔬菜汤（鸡丝+冬瓜+胡萝卜）+ 半根玉米。</p>"
        },
        {
          "h": "🥤 加餐 · 饮水",
          "body": "<p>苹果1个；普洱茶；杏仁10g。</p>"
        },
        {
          "h": "🌶 旺仔辣味备选",
          "body": "<p>午餐鱼豆腐煲直接做成「麻辣鱼豆腐煲」——加豆瓣酱+花椒一锅出，省时又过瘾；晚餐鸡胸蔬菜汤撒白胡椒粉+小米辣成胡辣鸡汤。一锅辣到底，深圳湿热天吃着通透。</p>"
        },
        {
          "h": "💡 为什么这么搭",
          "body": "<p>鱼+豆腐双蛋白；冬瓜利水消水肿（深圳湿热易水肿，常被误认胀气）；一锅出省时。单日约¥18。</p>"
        }
      ]
    },
    {
      "title": "第7天 · 周末稍丰",
      "tag": "第7天 · 饮食定制",
      "blocks": [
        {
          "h": "🛒 采购与执行",
          "body": "<p>① 食材在「钱大妈」「美团买菜」「盒马」晚间 8 点后打折囤，性价比最高；② 前一晚备好早餐/午餐，早上省时、午间带饭不踩坑；③ 用餐节奏：早餐 7:30 前、午餐 12:30 前、晚餐 19:00 前，下午 15:00 加餐防暴食；④ 外食用「薄荷健康」查热量，守每日约 1200–1400 kcal 减脂线；胀气时饭后散步 10 分钟助消化。</p>"
        },
        {
          "h": "🌅 早餐",
          "body": "<p>蔬菜蛋饼（蛋2+碎菠菜/西葫芦少油煎）+ 温巴氏鲜奶（无糖少量）。</p>"
        },
        {
          "h": "🍱 午餐",
          "body": "<p>蒸鸡胸 + 清炒时蔬（菜心/通心菜）+ 红薯。</p>"
        },
        {
          "h": "🌙 晚餐",
          "body": "<p>海带豆腐汤 + 蒸南瓜 + 凉拌黄瓜。</p>"
        },
        {
          "h": "🥤 加餐 · 饮水",
          "body": "<p>无糖酸奶+猕猴桃；绿茶。</p>"
        },
        {
          "h": "🌶 旺仔辣味备选",
          "body": "<p>周末可放开些——午餐蒸鸡胸改「少油辣子鸡丁」，用鸡腿肉更香；晚餐海带豆腐汤加韩式辣酱成辣味海带汤。微放纵但守住低脂，辣味满足感强。</p>"
        },
        {
          "h": "💡 为什么这么搭",
          "body": "<p>周末可稍丰富，菠菜补叶酸铁、南瓜低GI，仍保持低脂高纤节奏。单日约¥17。</p>"
        }
      ]
    },
    {
      "title": "第8天 · 换口味",
      "tag": "第8天 · 饮食定制",
      "blocks": [
        {
          "h": "🛒 采购与执行",
          "body": "<p>① 食材在「钱大妈」「美团买菜」「盒马」晚间 8 点后打折囤，性价比最高；② 前一晚备好早餐/午餐，早上省时、午间带饭不踩坑；③ 用餐节奏：早餐 7:30 前、午餐 12:30 前、晚餐 19:00 前，下午 15:00 加餐防暴食；④ 外食用「薄荷健康」查热量，守每日约 1200–1400 kcal 减脂线；胀气时饭后散步 10 分钟助消化。</p>"
        },
        {
          "h": "🌅 早餐",
          "body": "<p>燕麦+巴氏鲜奶 + 1个蛋 + 香蕉。</p>"
        },
        {
          "h": "🍱 午餐（带饭）",
          "body": "<p>鸡胸番茄全麦意面（全麦面少量+鸡丝+番茄，少油）+ 西兰花少量。</p>"
        },
        {
          "h": "🌙 晚餐",
          "body": "<p>豆腐冬瓜汤 + 蒸红薯 + 凉拌木耳。</p>"
        },
        {
          "h": "🥤 加餐 · 饮水",
          "body": "<p>无糖酸奶+蓝莓；绿茶；杏仁。</p>"
        },
        {
          "h": "🌶 旺仔辣味备选",
          "body": "<p>午餐鸡胸番茄意面改「辣味番茄鸡丝意面」——番茄+辣椒碎+黑胡椒；晚餐豆腐冬瓜汤加虾皮+小米辣成辣味虾皮豆腐汤。换口味也能辣，绝不寡淡。</p>"
        },
        {
          "h": "💡 为什么这么搭",
          "body": "<p>全麦面换口味但控量；番茄促代谢；木耳清肠。单日约¥18。</p>"
        }
      ]
    },
    {
      "title": "第9天 · 再补铁",
      "tag": "第9天 · 饮食定制",
      "blocks": [
        {
          "h": "🛒 采购与执行",
          "body": "<p>① 食材在「钱大妈」「美团买菜」「盒马」晚间 8 点后打折囤，性价比最高；② 前一晚备好早餐/午餐，早上省时、午间带饭不踩坑；③ 用餐节奏：早餐 7:30 前、午餐 12:30 前、晚餐 19:00 前，下午 15:00 加餐防暴食；④ 外食用「薄荷健康」查热量，守每日约 1200–1400 kcal 减脂线；胀气时饭后散步 10 分钟助消化。</p>"
        },
        {
          "h": "🌅 早餐",
          "body": "<p>蛋2 + 蒸红薯 + 温柠檬姜茶 + 圣女果。</p>"
        },
        {
          "h": "🍱 午餐（带饭）",
          "body": "<p>彩椒炒牛里脊（80g少油）+ 糙米 + 凉拌黄瓜。</p>"
        },
        {
          "h": "🌙 晚餐",
          "body": "<p>清蒸鱼 + 蒜蓉通心菜 + 蒸南瓜。</p>"
        },
        {
          "h": "🥤 加餐 · 饮水",
          "body": "<p>无糖酸奶+奇异果；普洱；杏仁。</p>"
        },
        {
          "h": "🌶 旺仔辣味备选",
          "body": "<p>午餐彩椒炒牛里脊改「干煸辣牛柳」——牛肉丝+干辣椒+花椒少油煸，补铁又过瘾；晚餐清蒸鱼淋剁椒豉汁成剁椒鱼。二次补铁配辣，暖身不腻。</p>"
        },
        {
          "h": "💡 为什么这么搭",
          "body": "<p>牛肉补铁二次强化；通心菜高纤；普洱去腻。单日约¥21。</p>"
        }
      ]
    },
    {
      "title": "第10天 · 高效循环",
      "tag": "第10天 · 饮食定制",
      "blocks": [
        {
          "h": "🛒 采购与执行",
          "body": "<p>① 食材在「钱大妈」「美团买菜」「盒马」晚间 8 点后打折囤，性价比最高；② 前一晚备好早餐/午餐，早上省时、午间带饭不踩坑；③ 用餐节奏：早餐 7:30 前、午餐 12:30 前、晚餐 19:00 前，下午 15:00 加餐防暴食；④ 外食用「薄荷健康」查热量，守每日约 1200–1400 kcal 减脂线；胀气时饭后散步 10 分钟助消化。</p>"
        },
        {
          "h": "🌅 早餐",
          "body": "<p>蛋2 + 燕麦+脱脂奶 + 小番茄。</p>"
        },
        {
          "h": "🍱 午餐（带饭）",
          "body": "<p>鸡胸蔬菜沙拉（熟：鸡丝+玉米+黄瓜，油醋少）+ 杂粮饭。</p>"
        },
        {
          "h": "🌙 晚餐",
          "body": "<p>豆腐番茄汤 + 蒸红薯 + 凉拌木耳。</p>"
        },
        {
          "h": "🥤 加餐 · 饮水",
          "body": "<p>苹果1个；绿茶；核桃2个。</p>"
        },
        {
          "h": "🌶 旺仔辣味备选",
          "body": "<p>午餐鸡胸蔬菜沙拉淋「辣椒油醋汁」；晚餐豆腐番茄汤撒辣椒粉成胡辣版。高效循环也能辣，省事不寡淡。</p>"
        },
        {
          "h": "💡 为什么这么搭",
          "body": "<p>重复高效组合，油醋代替沙拉酱控脂，木耳清肠。单日约¥16。</p>"
        }
      ]
    },
    {
      "title": "第11天 · 鱼蛋双蛋白",
      "tag": "第11天 · 饮食定制",
      "blocks": [
        {
          "h": "🛒 采购与执行",
          "body": "<p>① 食材在「钱大妈」「美团买菜」「盒马」晚间 8 点后打折囤，性价比最高；② 前一晚备好早餐/午餐，早上省时、午间带饭不踩坑；③ 用餐节奏：早餐 7:30 前、午餐 12:30 前、晚餐 19:00 前，下午 15:00 加餐防暴食；④ 外食用「薄荷健康」查热量，守每日约 1200–1400 kcal 减脂线；胀气时饭后散步 10 分钟助消化。</p>"
        },
        {
          "h": "🌅 早餐",
          "body": "<p>燕麦+脱脂奶 + 1个蛋 + 蓝莓。</p>"
        },
        {
          "h": "🍱 午餐（带饭）",
          "body": "<p>龙利鱼蒸蛋（鱼碎+2蛋同蒸）+ 清炒苦瓜 + 糙米。</p>"
        },
        {
          "h": "🌙 晚餐",
          "body": "<p>鸡胸蔬菜汤（鸡丝+冬瓜+海带）+ 半根玉米。</p>"
        },
        {
          "h": "🥤 加餐 · 饮水",
          "body": "<p>无糖酸奶+草莓；乌龙；杏仁。</p>"
        },
        {
          "h": "🌶 旺仔辣味备选",
          "body": "<p>午餐龙利鱼蒸蛋改「辣味鱼片蒸蛋」，蛋液点辣椒油；晚餐鸡胸蔬菜汤加白胡椒+小米辣成胡辣汤。双蛋白配辣，开胃顶饱。</p>"
        },
        {
          "h": "💡 为什么这么搭",
          "body": "<p>鱼蛋双蛋白；苦瓜清热下火；海带补碘助代谢。单日约¥19。</p>"
        }
      ]
    },
    {
      "title": "第12天 · 虾仁蛋",
      "tag": "第12天 · 饮食定制",
      "blocks": [
        {
          "h": "🛒 采购与执行",
          "body": "<p>① 食材在「钱大妈」「美团买菜」「盒马」晚间 8 点后打折囤，性价比最高；② 前一晚备好早餐/午餐，早上省时、午间带饭不踩坑；③ 用餐节奏：早餐 7:30 前、午餐 12:30 前、晚餐 19:00 前，下午 15:00 加餐防暴食；④ 外食用「薄荷健康」查热量，守每日约 1200–1400 kcal 减脂线；胀气时饭后散步 10 分钟助消化。</p>"
        },
        {
          "h": "🌅 早餐",
          "body": "<p>蛋2 + 无糖全麦1片 + 温巴氏鲜奶（少量）+ 小黄瓜。</p>"
        },
        {
          "h": "🍱 午餐（带饭）",
          "body": "<p>虾仁炒蛋（冻虾仁+2蛋少油）+ 清炒西兰花少量 + 糙米。</p>"
        },
        {
          "h": "🌙 晚餐",
          "body": "<p>豆腐菌菇汤 + 蒸南瓜 + 凉拌黄瓜。</p>"
        },
        {
          "h": "🥤 加餐 · 饮水",
          "body": "<p>苹果1个；普洱；核桃2个。</p>"
        },
        {
          "h": "🌶 旺仔辣味备选",
          "body": "<p>午餐虾仁炒蛋加小米辣+黑胡椒成香辣虾仁蛋；晚餐豆腐菌菇汤撒辣椒粉成麻辣菌汤。虾仁蛋配辣，下饭一绝。</p>"
        },
        {
          "h": "💡 为什么这么搭",
          "body": "<p>虾仁蛋优质蛋白；南瓜低GI；黄瓜补水。单日约¥22。</p>"
        }
      ]
    },
    {
      "title": "第13天 · 鱼腐玉米",
      "tag": "第13天 · 饮食定制",
      "blocks": [
        {
          "h": "🛒 采购与执行",
          "body": "<p>① 食材在「钱大妈」「美团买菜」「盒马」晚间 8 点后打折囤，性价比最高；② 前一晚备好早餐/午餐，早上省时、午间带饭不踩坑；③ 用餐节奏：早餐 7:30 前、午餐 12:30 前、晚餐 19:00 前，下午 15:00 加餐防暴食；④ 外食用「薄荷健康」查热量，守每日约 1200–1400 kcal 减脂线；胀气时饭后散步 10 分钟助消化。</p>"
        },
        {
          "h": "🌅 早餐",
          "body": "<p>燕麦粥 + 1个蛋 + 温姜茶 + 小番茄。</p>"
        },
        {
          "h": "🍱 午餐（带饭）",
          "body": "<p>蒸鸡胸 + 清炒通心菜 + 红薯。</p>"
        },
        {
          "h": "🌙 晚餐",
          "body": "<p>巴沙鱼豆腐汤 + 蒸玉米 + 凉拌木耳。</p>"
        },
        {
          "h": "🥤 加餐 · 饮水",
          "body": "<p>无糖酸奶+猕猴桃；绿茶；杏仁。</p>"
        },
        {
          "h": "🌶 旺仔辣味备选",
          "body": "<p>午餐蒸鸡胸改「麻辣手撕鸡」，淋藤椒油；晚餐巴沙鱼豆腐汤加豆瓣酱成微辣鱼腐汤。玉米照旧控糖，辣味提香。</p>"
        },
        {
          "h": "💡 为什么这么搭",
          "body": "<p>鱼豆腐双蛋白；玉米替米饭控糖；木耳清肠。单日约¥18。</p>"
        }
      ]
    },
    {
      "title": "第14天 · 两周收官",
      "tag": "第14天 · 饮食定制",
      "blocks": [
        {
          "h": "🛒 采购与执行",
          "body": "<p>① 食材在「钱大妈」「美团买菜」「盒马」晚间 8 点后打折囤，性价比最高；② 前一晚备好早餐/午餐，早上省时、午间带饭不踩坑；③ 用餐节奏：早餐 7:30 前、午餐 12:30 前、晚餐 19:00 前，下午 15:00 加餐防暴食；④ 外食用「薄荷健康」查热量，守每日约 1200–1400 kcal 减脂线；胀气时饭后散步 10 分钟助消化。</p>"
        },
        {
          "h": "🌅 早餐",
          "body": "<p>蛋2 + 燕麦+脱脂奶 + 蓝莓 + 圣女果。</p>"
        },
        {
          "h": "🍱 午餐（带饭）",
          "body": "<p>鸡胸蔬菜卷（鸡丝+生菜+番茄全麦薄饼）。</p>"
        },
        {
          "h": "🌙 晚餐",
          "body": "<p>豆腐番茄汤 + 蒸红薯 + 凉拌黄瓜。</p>"
        },
        {
          "h": "🥤 加餐 · 饮水",
          "body": "<p>苹果1个；乌龙；核桃2个。</p>"
        },
        {
          "h": "🌶 旺仔辣味备选",
          "body": "<p>午餐鸡胸蔬菜卷蘸辣酱；晚餐豆腐番茄汤撒辣椒粉。两周收官也能辣到底——核心公式加一条：旺仔的辣味靠辣椒花椒提味，不靠糖油；午后一杯冰美式或热茶，辣得过瘾又清爽。</p>"
        },
        {
          "h": "💡 为什么这么搭",
          "body": "<p>两周循环完成。核心公式：高蛋白早餐点燃代谢 + 蒸煮低脂控油 + 益生菌护肠消胀 + 控糖控盐。可继续循环或按口味微调。单日平均¥15-22，深圳随处可买。</p>"
        }
      ]
    },
    {
      "title": "深圳辣味美食店推荐",
      "tag": "辣味专场 · 附人均 / 地址 / 菜系",
      "blocks": [
        {
          "h": "📌 怎么用这份清单",
          "body": "<p>旺仔喜辣、戒甜、不碰奶茶饮料甜品，爱咖啡（冰美式优先）也爱茶。下面 10 家都是深圳好找的辣味/酸辣店，按「人均 · 地址 · 菜系推荐」列出；标注的甜口单品是你不吃的那类，直接跳过即可。</p>"
        },
        {
          "h": "怂火锅厂 · 川渝火锅",
          "body": "<p>人均约 ¥130 ｜ 地址：南山海岸城、福田卓悦中心、龙华等（深圳本土网红，多店） ｜ 推荐：番茄鸳鸯锅、麻辣牛肉、鲜切黄喉，锅底可选特辣。</p>"
        },
        {
          "h": "巴奴毛肚火锅 · 川渝火锅",
          "body": "<p>人均约 ¥150 ｜ 地址：福田星河 COCO Park、南山等多店 ｜ 推荐：经典毛肚、野山菌汤、拽面，菌汤鲜辣不腻。</p>"
        },
        {
          "h": "费大厨辣椒炒肉 · 湘菜",
          "body": "<p>人均约 ¥70 ｜ 地址：万象天地、海岸城、龙华壹方天地等多店 ｜ 推荐：辣椒炒肉（招牌）、剁椒鱼头、擂辣椒茄子。</p>"
        },
        {
          "h": "炊烟小炒黄牛肉 · 湘菜",
          "body": "<p>人均约 ¥80 ｜ 地址：福田、南山多店 ｜ 推荐：小炒黄牛肉、剁椒芋头排骨，鲜辣下饭。</p>"
        },
        {
          "h": "太二酸菜鱼 · 川渝酸菜鱼",
          "body": "<p>人均约 ¥80 ｜ 地址：各大商圈均有 ｜ 推荐：老坛子酸菜鱼、辣子鸡；甜口冰粉你不吃甜，可换无糖酸梅汤。</p>"
        },
        {
          "h": "探鱼 · 重庆烤鱼",
          "body": "<p>人均约 ¥90 ｜ 地址：海岸城、欢乐海岸等 ｜ 推荐：麻辣烤鱼、凌波鱼；焦糖类甜口慎点（你不吃甜品）。</p>"
        },
        {
          "h": "谭仔云南米线 · 云南酸辣",
          "body": "<p>人均约 ¥35 ｜ 地址：上梅林、车公庙等地铁沿线多店 ｜ 推荐：麻辣米线、酸辣米线，可加辣加酸，便宜大碗。</p>"
        },
        {
          "h": "云海肴 · 云南菜",
          "body": "<p>人均约 ¥90 ｜ 地址：万象城、海岸城等 ｜ 推荐：汽锅鸡、傣味烤鱼、牛肝菌，酸辣鲜香。</p>"
        },
        {
          "h": "杨记隆府 · 重庆江湖菜",
          "body": "<p>人均约 ¥100 ｜ 地址：福田、南山 ｜ 推荐：招牌辣子鸡、毛血旺、辣子肥肠，麻辣霸道。</p>"
        },
        {
          "h": "蕉叶 · 泰式酸辣",
          "body": "<p>人均约 ¥120 ｜ 地址：福田、罗湖 ｜ 推荐：冬阴功、青咖喱、青木瓜沙拉（辣版）；芒果甜品你不吃甜可跳过。</p>"
        }
      ]
    }
  ],
  "overseas": [
    {
      "title": "Day 1 · 海外企业推荐（采购中国消费电子）",
      "tag": "第1天 · 中小 4 / 头部 2",
      "blocks": [
        {
          "h": "💡 今日怎么用这笔清单",
          "body": "① 在 Google / LinkedIn 搜企业名 + sourcing / procurement / purchasing manager，找采购负责人；② 用「阿里巴巴国际站」「中国制造网」对照其采购品类，反向以这些买家为目标做开发；③ 参加「香港电子展」「广交会」「Global Sources」定向约访；④ 用海关数据 / ImportGenius 查其中国进口记录，锁定具体 SKU；⑤ 开发信：Hi [Name], we supply [品类] to EU/US retailers，附 catalog 与合规证书（CE / FCC / RoHS）。"
        },
        {
          "h": "今日推荐 · 6 家（中小企业为主，含行业标杆）",
          "body": "<div class=\"co\"><div class=\"co-h\"><b>特斯拉 Tesla</b><span class=\"co-t hd\">头部</span></div><div class=\"co-r\"><b>速写：</b>全球电动车与能源巨头；2003 ｜ 总部：美国·得州</div><div class=\"co-r\"><b>主营业务：</b>电动车、储能、自动驾驶　招牌：Model 3/Y、FSD</div><div class=\"co-r\"><b>市场与打法：</b>直营+超级工厂+软件OTA；上海超级工厂是全球化关键</div><div class=\"co-r found\"><b>📜 发家史：</b>2003 年特斯拉创立，2004 年马斯克入主并力推 Roadster 到 Model S，把电车从\"玩具\"做成\"性能怪兽\"。</div><div class=\"co-r turn\"><b>🔑 转折点：</b>2019 年上海超级工厂投产，产能与成本骤降，Model 3/Y 成全球爆款；马斯克同时押注 SpaceX、xAI，是跨界狂人。</div><div class=\"co-r look\"><b>💡 看点：</b>上海工厂是中国供应链反哺全球品牌的经典案例，出海必读。<button class=\"fam-btn\" data-fp=\"埃隆·马斯克 Elon Musk\">📖 名人故事</button></div><div class=\"co-r\">官网：<a class=\"co-site\" href=\"https://www.tesla.com\" target=\"_blank\" rel=\"noopener\">🌐 https://www.tesla.com</a></div></div>\n        <div class=\"co\"><div class=\"co-h\"><b>Monoprice</b><span class=\"co-t sm\">中小</span></div><div class=\"co-r\"><b>速写：</b>美国高性价比 3C 与线缆配件电商（被 DTC 收购）；2002 ｜ 总部：美国·加州</div><div class=\"co-r\"><b>企业简介：</b>高性价比线材/配件进口商</div><div class=\"co-r\"><b>采购画像：</b>采购 线材/适配器/音频配件；渠道 1688/阿里国际站直采　招牌：HDMI 线、显示器、音频配件，主打低价高质</div><div class=\"co-r found\"><b>📜 发家史：</b>2002 年，Monoprice 在美国加州创立，靠超低价线材、HDMI 线与 3C 配件电商起家，用工厂直供、砍掉品牌溢价的打法走红，一度是极客圈便宜好用的代名词。</div><div class=\"co-r turn\"><b>🔑 转折点：</b>它以无品牌高性价比模式被多次转手（曾被乐天收购又卖出），成为平价 3C 渠道样本，也折射出纯价格模式的脆弱，缺乏品牌忠诚，易被后来者替代。</div><div class=\"co-r look\"><b>💡 看点：</b>低价不低质的配件模式，是中国卖家的直接竞品与参照；推荐：纯进口商选品与定价研究</div><div class=\"co-r\">官网：<a class=\"co-site\" href=\"https://www.monoprice.com\" target=\"_blank\" rel=\"noopener\">🌐 https://www.monoprice.com</a></div></div>\n        <div class=\"co\"><div class=\"co-h\"><b>Crutchfield</b><span class=\"co-t sm\">中小</span></div><div class=\"co-r\"><b>速写：</b>美国高端影音与汽车音响专业零售商（目录营销起家）；1974 ｜ 总部：美国·弗吉尼亚</div><div class=\"co-r\"><b>企业简介：</b>汽车/家庭影音专业零售商</div><div class=\"co-r\"><b>采购画像：</b>采购 车载电子/扬声器/配件；渠道 直接对华 OEM　招牌：发烧音响、电视、智能家居，重内容与客服</div><div class=\"co-r found\"><b>📜 发家史：</b>1974 年，Bill Crutchfield 在美国弗吉尼亚以邮购汽车音响起家，靠一份厚厚的目录和把参数写清楚的专业精神，在音响发烧友里建立信任。</div><div class=\"co-r turn\"><b>🔑 转折点：</b>Crutchfield 靠极致的客服与详尽的选购指南（甚至帮客户算好安装件），做成美国最被信任的专业影音渠道，在电商时代反而因专业加服务活得滋润，是慢生意的长青样本。</div><div class=\"co-r look\"><b>💡 看点：</b>用专业内容加极致服务做高客单，值得研究其测评体系；推荐：垂直品类专业渠道研究</div><div class=\"co-r\">官网：<a class=\"co-site\" href=\"https://www.crutchfield.com\" target=\"_blank\" rel=\"noopener\">🌐 https://www.crutchfield.com</a></div></div>\n        <div class=\"co\"><div class=\"co-h\"><b>B&amp;H Photo Video</b><span class=\"co-t sm\">中小</span></div><div class=\"co-r\"><b>速写：</b>纽约专业影像与 IT 器材零售商；1973 ｜ 总部：美国·纽约</div><div class=\"co-r\"><b>企业简介：</b>专业影像/电子大经销商</div><div class=\"co-r\"><b>采购画像：</b>采购 相机配件/音频/智能家居；渠道 直接对华 + 港展　招牌：相机、镜头、专业设备，全球摄影师首选</div><div class=\"co-r found\"><b>📜 发家史：</b>1973 年，Herman Schreiber 在纽约创办一家相机小店，靠犹太安息日闭店等另类规则和极度专业，在摄影师圈子里积累口碑。</div><div class=\"co-r turn\"><b>🔑 转折点：</b>B&amp;H 从单店做到专业影像/电子超级卖场加巨型线上目录，是影音发烧友与专业摄影师的朝圣地，靠品类极全、不缺货、专家客服在亚马逊时代守住专业市场。</div><div class=\"co-r look\"><b>💡 看点：</b>专业垂直电商的标杆，看其商品信息与社区运营；推荐：专业品类大 SKU 采购</div><div class=\"co-r\">官网：<a class=\"co-site\" href=\"https://www.bhphotovideo.com\" target=\"_blank\" rel=\"noopener\">🌐 https://www.bhphotovideo.com</a></div></div>\n        <div class=\"co\"><div class=\"co-h\"><b>Newegg</b><span class=\"co-t sm\">中小</span></div><div class=\"co-r\"><b>速写：</b>北美 IT/DIY 硬件电商（华人创办）；2001 ｜ 总部：美国·加州</div><div class=\"co-r\"><b>企业简介：</b>电商/DIY 硬件平台</div><div class=\"co-r\"><b>采购画像：</b>采购 PC 配件/外设/组件；渠道 直接对华工厂　招牌：电脑配件、显卡、整机，极客用户多</div><div class=\"co-r found\"><b>📜 发家史：</b>2001 年，Fred Chang（张法俊）创办 Newegg，专注 PC 硬件电商，从服务北美 DIY 极客社区起家，靠真货加快评加极客氛围做成重镇。</div><div class=\"co-r turn\"><b>🔑 转折点：</b>Newegg 靠服务 DIY 社区做成北美 3C 电商一极，2022 年通过 SPAC 上市；但它也因品类偏窄、竞争加剧而起伏，是中国 3C 卖家重要的出海平台之一。</div><div class=\"co-r look\"><b>💡 看点：</b>中国卖家熟悉的平台，研究北美 DIY 硬件渠道；推荐：线上 3C 渠道与华强北联动</div><div class=\"co-r\">官网：<a class=\"co-site\" href=\"https://www.newegg.com\" target=\"_blank\" rel=\"noopener\">🌐 https://www.newegg.com</a></div></div>\n        <div class=\"co\"><div class=\"co-h\"><b>Best Buy</b><span class=\"co-t hd\">头部</span></div><div class=\"co-r\"><b>速写：</b>美国最大的消费电子连锁零售商；1966 ｜ 总部：美国·明尼苏达</div><div class=\"co-r\"><b>企业简介：</b>北美最大消费电子零售商，全品类渠道之王</div><div class=\"co-r\"><b>采购画像：</b>采购 全品类消费电子（耳机/音箱/电视/智能配件），含 ONN 等自牌；渠道 直接对华 OEM/ODM 采购 + 深圳/华中等采购团队　招牌：门店加线上，Geek Squad 上门服务，家电/数码/游戏</div><div class=\"co-r\"><b>规模：</b>全美约 1000 家门店，年销售数百亿美元</div><div class=\"co-r found\"><b>📜 发家史：</b>1966 年，理查德·舒尔茨在美国明尼苏达州圣保罗开出一家叫音乐之声 Sound of Music 的音频专卖小店，卖音箱和唱片，第一年就因为一场龙卷风把库存清仓打折而尝到低价引流的甜头。1981 年一场仓库火灾后，他干脆把剩余库存大幅打折、做成了轰动当地的促销，这次意外营销让他看清了低价加大流量的零售本质。</div><div class=\"co-r turn\"><b>🔑 转折点：</b>1983 年公司更名 Best Buy，并改用仓储式大卖场加自助选购加天天低价模式，把价格打透明、把门店开成大盒子 superstore，用规模碾压传统高价专卖店，最终登顶北美消费电子零售，并在 2000 年代后靠以旧换新加会员加服务抵御电商冲击。</div><div class=\"co-r look\"><b>💡 看点：</b>价格匹配与会员体系是护城河；中国品牌多走 Vendor Central 或贸易商入其供应链；推荐：研究大买家的采购规格、合规与自牌打法</div><div class=\"co-r\">官网：<a class=\"co-site\" href=\"https://www.bestbuy.com\" target=\"_blank\" rel=\"noopener\">🌐 https://www.bestbuy.com</a></div></div>"
        }
      ]
    },
    {
      "title": "Day 2 · 海外企业推荐（采购中国消费电子）",
      "tag": "第2天 · 中小 4 / 头部 2",
      "blocks": [
        {
          "h": "💡 今日怎么用这笔清单",
          "body": "① 在 Google / LinkedIn 搜企业名 + sourcing / procurement / purchasing manager，找采购负责人；② 用「阿里巴巴国际站」「中国制造网」对照其采购品类，反向以这些买家为目标做开发；③ 参加「香港电子展」「广交会」「Global Sources」定向约访；④ 用海关数据 / ImportGenius 查其中国进口记录，锁定具体 SKU；⑤ 开发信：Hi [Name], we supply [品类] to EU/US retailers，附 catalog 与合规证书（CE / FCC / RoHS）。"
        },
        {
          "h": "今日推荐 · 6 家（中小企业为主，含行业标杆）",
          "body": "<div class=\"co\"><div class=\"co-h\"><b>亚马逊 Amazon</b><span class=\"co-t hd\">头部</span></div><div class=\"co-r\"><b>速写：</b>全球电商与云计算霸主；1994 ｜ 总部：美国·西雅图</div><div class=\"co-r\"><b>主营业务：</b>电商 Marketplace、AWS、广告　招牌：FBA、Prime</div><div class=\"co-r\"><b>市场与打法：</b>第三方卖家平台 + FBA 物流 + AWS 技术底座</div><div class=\"co-r found\"><b>📜 发家史：</b>1994 年，贝索斯在西雅图车库卖书起家，以\"地球上最大的商店\"愿景做电商，长期\"Day 1\"式扩张。</div><div class=\"co-r turn\"><b>🔑 转折点：</b>2006 年推 AWS、2005 年推 Prime，从零售商蜕变为\"卖铲子\"的云与广告巨头，FBA 是中国卖家出海的主场。</div><div class=\"co-r look\"><b>💡 看点：</b>FBA/Marketplace 是中国跨境卖家最大的出海通道，必研究。<button class=\"fam-btn\" data-fp=\"杰夫·贝索斯 Jeff Bezos\">📖 名人故事</button></div><div class=\"co-r\">官网：<a class=\"co-site\" href=\"https://www.amazon.com\" target=\"_blank\" rel=\"noopener\">🌐 https://www.amazon.com</a></div></div>\n        <div class=\"co\"><div class=\"co-h\"><b>Satechi</b><span class=\"co-t sm\">中小</span></div><div class=\"co-r\"><b>速写：</b>美国（华裔创立）高端 3C 配件设计品牌；2007 ｜ 总部：美国·加州</div><div class=\"co-r\"><b>企业简介：</b>苹果生态配件品牌（OEM 中国）</div><div class=\"co-r\"><b>采购画像：</b>采购 扩展坞/充电器/支架；渠道 深圳 OEM 直采　招牌：铝合金扩展坞、充电器，设计感强</div><div class=\"co-r found\"><b>📜 发家史：</b>2007 年，Satechi 创立于加州，专做苹果生态配件（拓展坞、支架、充电器），踩中 iPhone/Mac 生态扩张的红利。它只做和苹果沾边的配件。</div><div class=\"co-r turn\"><b>🔑 转折点：</b>它借苹果生态红利加深圳 OEM 直采，做成轻资产配件品牌，是美国品牌加中国制造的典型的只做设计与营销，供应链全在深圳。</div><div class=\"co-r look\"><b>💡 看点：</b>中国团队做的海外品牌，是中国出海者的自己人参照；推荐：轻资产品牌 + OEM 打法</div><div class=\"co-r\">官网：<a class=\"co-site\" href=\"https://satechi.net\" target=\"_blank\" rel=\"noopener\">🌐 https://satechi.net</a></div></div>\n        <div class=\"co\"><div class=\"co-h\"><b>Twelve South</b><span class=\"co-t sm\">中小</span></div><div class=\"co-r\"><b>速写：</b>美国苹果生态配件设计品牌；2009 ｜ 总部：美国·南卡</div><div class=\"co-r\"><b>企业简介：</b>苹果高端配件品牌</div><div class=\"co-r\"><b>采购画像：</b>采购 保护壳/支架（OEM 中国）；渠道 深圳 OEM　招牌：Mac/iPad 支架、保护壳，简约设计</div><div class=\"co-r found\"><b>📜 发家史：</b>2009 年，Twelve South 创立于南卡，做苹果高端配件（笔记本支架、保护壳），从只做苹果、做精致的小众路线起家。</div><div class=\"co-r turn\"><b>🔑 转折点：</b>它以果链配件里的高级感定位，成为小众高端样本，证明小品类加高溢价加强设计也能在美国市场立住，是深圳 OEM 承接的设计型客户。</div><div class=\"co-r look\"><b>💡 看点：</b>小众精品配件品牌，看设计溢价打法；推荐：小众高端配件品牌路径</div><div class=\"co-r\">官网：<a class=\"co-site\" href=\"https://www.twelvesouth.com\" target=\"_blank\" rel=\"noopener\">🌐 https://www.twelvesouth.com</a></div></div>\n        <div class=\"co\"><div class=\"co-h\"><b>iFixit</b><span class=\"co-t sm\">中小</span></div><div class=\"co-r\"><b>速写：</b>美国维修指南与配件平台；2003 ｜ 总部：美国·加州</div><div class=\"co-r\"><b>企业简介：</b>维修工具/配件社区</div><div class=\"co-r\"><b>采购画像：</b>采购 工具/配件/备件；渠道 直接对华采购　招牌：拆解教程、维修工具与零件，倡导可维修权</div><div class=\"co-r found\"><b>📜 发家史：</b>2003 年，Kyle Wiens 创办 iFixit，从拆解指南与维修社区起步，靠教人修手机/电脑积累海量流量与口碑。</div><div class=\"co-r turn\"><b>🔑 转折点：</b>iFixit 以维修权（Right to Repair）倡导加工具售卖，做成独特的维修社区品牌，并给厂商打分（可维修指数），从社区长成影响政策的公共力量，是内容与电商的另类样本。</div><div class=\"co-r look\"><b>💡 看点：</b>用内容加零件建社区，研究测评与信任经济；推荐：维修权生态与配件采购</div><div class=\"co-r\">官网：<a class=\"co-site\" href=\"https://www.ifixit.com\" target=\"_blank\" rel=\"noopener\">🌐 https://www.ifixit.com</a></div></div>\n        <div class=\"co\"><div class=\"co-h\"><b>Voltaic Systems</b><span class=\"co-t sm\">中小</span></div><div class=\"co-r\"><b>速写：</b>美国太阳能充电装备品牌；2006 ｜ 总部：美国·纽约</div><div class=\"co-r\"><b>企业简介：</b>太阳能充电宝/背包品牌</div><div class=\"co-r\"><b>采购画像：</b>采购 太阳能板/锂电池包（OEM 中国）；渠道 中国 OEM　招牌：太阳能背包、充电板，户外与救援场景</div><div class=\"co-r found\"><b>📜 发家史：</b>2006 年，Voltaic 在纽约创立，做太阳能充电产品（太阳能背包、充电板），从给户外与救灾场景供离网供电起步。它押注太阳能加便携的细分。</div><div class=\"co-r turn\"><b>🔑 转折点：</b>它以太阳能背包/充电宝 OEM 中国（深圳供应链），是细分功能电子出海案例，踩中户外加应急加环保三重需求，但市场偏小众。</div><div class=\"co-r look\"><b>💡 看点：</b>细分绿色能源配件，看 niche 品牌出海；推荐：细分功能电子 OEM 研究</div><div class=\"co-r\">官网：<a class=\"co-site\" href=\"https://voltaicsystems.com\" target=\"_blank\" rel=\"noopener\">🌐 https://voltaicsystems.com</a></div></div>\n        <div class=\"co\"><div class=\"co-h\"><b>Walmart</b><span class=\"co-t hd\">头部</span></div><div class=\"co-r\"><b>速写：</b>全球最大零售商，美国零售霸主；1962 ｜ 总部：美国·阿肯色</div><div class=\"co-r\"><b>企业简介：</b>全球最大零售商，消费电子海量采购方</div><div class=\"co-r\"><b>采购画像：</b>采购 消费电子全品类（电视/耳机/智能家电），自牌 ONN 占大头；渠道 全球采购办（深圳/华中）+ 工厂直采　招牌：超市加电商加山姆会员店，全品类低价</div><div class=\"co-r\"><b>规模：</b>全球约 1 万加门店，年营收超 6000 亿美元</div><div class=\"co-r found\"><b>📜 发家史：</b>1962 年，山姆·沃尔顿在美国阿肯色州本顿维尔开出第一家沃尔玛折扣店，口号直白：低价卖给穷人也能赚钱。他早年经营杂货店和 Ben Franklin 加盟店，把天天低价 EDLP 刻进了基因。</div><div class=\"co-r turn\"><b>🔑 转折点：</b>沃尔玛的关键转折不是某次并购，而是把天天低价和一套超前于时代的卫星供应链、配送中心绑在一起，1970 年代就发射自用卫星做实时库存与补货，再用自有品牌（ONN、Great Value）吃掉利润，最终长成全球最大的零售商，也是中国制造业最大的海外买家之一。</div><div class=\"co-r look\"><b>💡 看点：</b>天天低价加卫星供应链；中国卖家多经第三方或自营供货，是体量最大的出海入口；推荐：研究大卖场如何做贴牌消费电子</div><div class=\"co-r\">官网：<a class=\"co-site\" href=\"https://www.walmart.com\" target=\"_blank\" rel=\"noopener\">🌐 https://www.walmart.com</a></div></div>"
        }
      ]
    },
    {
      "title": "Day 3 · 海外企业推荐（采购中国消费电子）",
      "tag": "第3天 · 中小 4 / 头部 2",
      "blocks": [
        {
          "h": "💡 今日怎么用这笔清单",
          "body": "① 在 Google / LinkedIn 搜企业名 + sourcing / procurement / purchasing manager，找采购负责人；② 用「阿里巴巴国际站」「中国制造网」对照其采购品类，反向以这些买家为目标做开发；③ 参加「香港电子展」「广交会」「Global Sources」定向约访；④ 用海关数据 / ImportGenius 查其中国进口记录，锁定具体 SKU；⑤ 开发信：Hi [Name], we supply [品类] to EU/US retailers，附 catalog 与合规证书（CE / FCC / RoHS）。"
        },
        {
          "h": "今日推荐 · 6 家（中小企业为主，含行业标杆）",
          "body": "<div class=\"co\"><div class=\"co-h\"><b>伯克希尔·哈撒韦 Berkshire</b><span class=\"co-t hd\">头部</span></div><div class=\"co-r\"><b>速写：</b>全球投资控股巨头；1965（哈撒韦）/1956（巴菲特合伙）｜ 总部：美国·内布拉斯加</div><div class=\"co-r\"><b>主营业务：</b>股票投资、全资收购（保险+实业）　招牌：复利、价值投资</div><div class=\"co-r\"><b>市场与打法：</b>保险浮存金+长期持有优质企业；看中消费/金融/能源现金流</div><div class=\"co-r found\"><b>📜 发家史：</b>1956 年巴菲特以 10 万美元起家做合伙投资，1965 年接手纺织厂伯克希尔，把它改造为投资控股平台。</div><div class=\"co-r turn\"><b>🔑 转折点：</b>以\"能力圈+安全边际+复利\"穿越半个世纪，重仓可口可乐、苹果等，年化回报长年跑赢大盘，是价值投资的活标本。</div><div class=\"co-r look\"><b>💡 看点：</b>看企业要看现金流与护城河，对分析外贸龙头很有启发。<button class=\"fam-btn\" data-fp=\"沃伦·巴菲特 Warren Buffett\">📖 名人故事</button></div><div class=\"co-r\">官网：<a class=\"co-site\" href=\"https://www.berkshirehathaway.com\" target=\"_blank\" rel=\"noopener\">🌐 https://www.berkshirehathaway.com</a></div></div>\n        <div class=\"co\"><div class=\"co-h\"><b>Nonda</b><span class=\"co-t sm\">中小</span></div><div class=\"co-r\"><b>速写：</b>美国（华裔）车联网与车载配件品牌；2013 ｜ 总部：美国·密歇根</div><div class=\"co-r\"><b>企业简介：</b>车载智能电子品牌</div><div class=\"co-r\"><b>采购画像：</b>采购 车载充电/胎压监测（OEM 中国）；渠道 深圳 OEM　招牌：车载诊断、胎压、充电配件</div><div class=\"co-r found\"><b>📜 发家史：</b>2013 年，Nonda 在密歇根创立，做车载智能电子（胎压监测、车载充电），从众筹起步，靠解决开车小痛点起量。它用众筹验证需求。</div><div class=\"co-r turn\"><b>🔑 转折点：</b>它靠众筹加深圳 OEM 做车载电子，是车载电子跨境品牌，体现出美国痛点洞察加中国供应链的硬件出海打法。</div><div class=\"co-r look\"><b>💡 看点：</b>汽车配件出海样本，看车载智能品类；推荐：车载电子跨境品牌</div><div class=\"co-r\">官网：<a class=\"co-site\" href=\"https://www.nonda.co\" target=\"_blank\" rel=\"noopener\">🌐 https://www.nonda.co</a></div></div>\n        <div class=\"co\"><div class=\"co-h\"><b>Wyze</b><span class=\"co-t sm\">中小</span></div><div class=\"co-r\"><b>速写：</b>美国智能摄像头与智能家居品牌（华裔团队）；2017 ｜ 总部：美国·西雅图</div><div class=\"co-r\"><b>企业简介：</b>智能家居品牌（制造中国）</div><div class=\"co-r\"><b>采购画像：</b>采购 摄像头/传感器/智能设备；渠道 深圳 OEM 直采　招牌：低价智能摄像头、门锁、传感器</div><div class=\"co-r found\"><b>📜 发家史：</b>2017 年，几位前亚马逊员工在西雅图创立 Wyze，用极致低价智能硬件（20 美元的摄像头对标 Nest 一两百美元）快速走红。</div><div class=\"co-r turn\"><b>🔑 转折点：</b>Wyze 用低价加订阅服务对标 Nest 迅速走红，是低价智能家居打法的代表；但也伴随隐私争议与服务器泄露风波，说明便宜背后的成本取舍。</div><div class=\"co-r look\"><b>💡 看点：</b>小米式低价智能家居打法在美复制，中国团队标杆；推荐：极低价智能硬件打法</div><div class=\"co-r\">官网：<a class=\"co-site\" href=\"https://www.wyze.com\" target=\"_blank\" rel=\"noopener\">🌐 https://www.wyze.com</a></div></div>\n        <div class=\"co\"><div class=\"co-h\"><b>Roku</b><span class=\"co-t sm\">中小</span></div><div class=\"co-r\"><b>速写：</b>美国流媒体电视平台与硬件公司；2002 ｜ 总部：美国·加州</div><div class=\"co-r\"><b>企业简介：</b>流媒体设备品牌（中国制造）</div><div class=\"co-r\"><b>采购画像：</b>采购 机顶盒/遥控/配件；渠道 代工厂（中国）直采　招牌：电视棒、系统 OS，聚合流媒体内容</div><div class=\"co-r found\"><b>📜 发家史：</b>2002 年，Anthony Wood 创办 Roku，最早给 Netflix 做机顶盒（Netflix 后来放弃硬件），Roku 转而做独立流媒体播放器。</div><div class=\"co-r turn\"><b>🔑 转折点：</b>关键转折是放弃硬件血拼、转为操作系统加广告平台模式，把 Roku OS 装进低价电视、靠广告与订阅分成赚钱，这才是它真正赚钱的引擎，也从硬件商变成电视界的安卓。</div><div class=\"co-r look\"><b>💡 看点：</b>硬件加平台模式，看中国电视/盒子品牌的海外竞争环境；推荐：流媒体硬件 + 内容分成模式</div><div class=\"co-r\">官网：<a class=\"co-site\" href=\"https://www.roku.com\" target=\"_blank\" rel=\"noopener\">🌐 https://www.roku.com</a></div></div>\n        <div class=\"co\"><div class=\"co-h\"><b>Belkin</b><span class=\"co-t sm\">中小</span></div><div class=\"co-r\"><b>速写：</b>美国老牌 3C 配件品牌（现属富士康）；1983 ｜ 总部：美国·加州</div><div class=\"co-r\"><b>企业简介：</b>连接配件品牌（现属鸿海）</div><div class=\"co-r\"><b>采购画像：</b>采购 充电器/线缆/路由（OEM 中国）；渠道 鸿海体系 + 对华采购　招牌：充电器、线缆、路由器配件</div><div class=\"co-r found\"><b>📜 发家史：</b>1983 年，Chet Pipkin 在车库创办 Belkin，做连接配件（线材、集线器），从给电脑用户解决连线痛点起步，成长为配件大牌。</div><div class=\"co-r turn\"><b>🔑 转折点：</b>2018 年 Belkin 被代工厂鸿海 Foxconn 收购，是品牌被代工厂收编的典型案例，也折射出配件品牌在供应链面前的弱势。</div><div class=\"co-r look\"><b>💡 看点：</b>被代工厂收购的配件品牌，研究产业链纵向整合；推荐：被代工厂收购的品牌案例</div><div class=\"co-r\">官网：<a class=\"co-site\" href=\"https://www.belkin.com\" target=\"_blank\" rel=\"noopener\">🌐 https://www.belkin.com</a></div></div>\n        <div class=\"co\"><div class=\"co-h\"><b>Target</b><span class=\"co-t hd\">头部</span></div><div class=\"co-r\"><b>速写：</b>美国第二大折扣百货（偏中产设计感）；1962 ｜ 总部：美国·明尼苏达</div><div class=\"co-r\"><b>企业简介：</b>美国第二大零售商，中高端自牌突出</div><div class=\"co-r\"><b>采购画像：</b>采购 智能家电/耳机/充电配件 自牌；渠道 直接对华采购 + 代采商　招牌：家居、服饰、电子、自有品牌</div><div class=\"co-r found\"><b>📜 发家史：</b>根基可追溯到 1902 年 George Dayton 在明尼苏达开的 Dayton 百货；1962 年才开出第一家 Target 折扣店，定位刻意与沃尔玛错开，它不选最便宜，而要有点设计感。</div><div class=\"co-r turn\"><b>🔑 转折点：</b>Target 把自己做成平价里的时髦（upscale discount / cheap chic）：用设计师联名（如 1999 年与设计师 Isaac Mizrahi 合作引爆）、自有品牌（如儿童品牌 Cat &amp; Jack、家居 Threshold）和更讲究的门店体验，拿下对品质敏感的中产，避免陷入纯价格战，成为红圈靶心式的生活方式零售商。</div><div class=\"co-r look\"><b>💡 看点：</b>对供应商合规/设计/ESG 要求高，是中国品牌进美国中产的跳板；推荐：研究中高端自牌消费电子选品</div><div class=\"co-r\">官网：<a class=\"co-site\" href=\"https://www.target.com\" target=\"_blank\" rel=\"noopener\">🌐 https://www.target.com</a></div></div>"
        }
      ]
    },
    {
      "title": "Day 4 · 海外企业推荐（采购中国消费电子）",
      "tag": "第4天 · 中小 4 / 头部 2",
      "blocks": [
        {
          "h": "💡 今日怎么用这笔清单",
          "body": "① 在 Google / LinkedIn 搜企业名 + sourcing / procurement / purchasing manager，找采购负责人；② 用「阿里巴巴国际站」「中国制造网」对照其采购品类，反向以这些买家为目标做开发；③ 参加「香港电子展」「广交会」「Global Sources」定向约访；④ 用海关数据 / ImportGenius 查其中国进口记录，锁定具体 SKU；⑤ 开发信：Hi [Name], we supply [品类] to EU/US retailers，附 catalog 与合规证书（CE / FCC / RoHS）。"
        },
        {
          "h": "今日推荐 · 6 家（中小企业为主，含行业标杆）",
          "body": "<div class=\"co\"><div class=\"co-h\"><b>OpenAI</b><span class=\"co-t hd\">头部</span></div><div class=\"co-r\"><b>速写：</b>全球 AI 研究与产品领军；2015 ｜ 总部：美国·旧金山</div><div class=\"co-r\"><b>主营业务：</b>GPT 大模型、ChatGPT、API　招牌：ChatGPT、Sora</div><div class=\"co-r\"><b>市场与打法：</b>前沿研究 + 产品化 + 与微软结盟；API 赋能千行百业</div><div class=\"co-r found\"><b>📜 发家史：</b>2015 年 OpenAI 以非营利研究起步，2022 年 ChatGPT 引爆生成式 AI，把大模型带进普通人生活。</div><div class=\"co-r turn\"><b>🔑 转折点：</b>2023 年\"宫斗\"后 Altman 回归并加速商业化，GPT-4o、Sora 持续领先；AI 正重写外贸（客服、选品、营销）。</div><div class=\"co-r look\"><b>💡 看点：</b>AI 是外贸人提效的新杠杆，老板 Altman 是这一轮技术周期的旗手。<button class=\"fam-btn\" data-fp=\"萨姆·奥尔特曼 Sam Altman\">📖 名人故事</button></div><div class=\"co-r\">官网：<a class=\"co-site\" href=\"https://openai.com\" target=\"_blank\" rel=\"noopener\">🌐 https://openai.com</a></div></div>\n        <div class=\"co\"><div class=\"co-h\"><b>Boulanger</b><span class=\"co-t sm\">中小</span></div><div class=\"co-r\"><b>速写：</b>法国电子与家电零售商；1954 ｜ 总部：法国·里尔</div><div class=\"co-r\"><b>企业简介：</b>法国家电电子连锁</div><div class=\"co-r\"><b>采购画像：</b>采购 白电/黑电/智能；渠道 集中对华　招牌：家电、影音、IT，重体验与服务</div><div class=\"co-r found\"><b>📜 发家史：</b>1954 年，Boulanger 始于法国里尔的一家家族家电店，从修收音机、卖家电起家，靠本地口碑生长。它从维修铺子长成连锁。</div><div class=\"co-r turn\"><b>🔑 转折点：</b>它靠多门店加服务化转型，成为法国区域家电电子连锁，在 Fnac Darty、Amazon 夹击下以本地服务加安装守住份额。</div><div class=\"co-r look\"><b>💡 看点：</b>法国市场入口，看欧洲本地零售的服务文化；推荐：法国 regional 渠道</div><div class=\"co-r\">官网：<a class=\"co-site\" href=\"https://www.boulanger.com\" target=\"_blank\" rel=\"noopener\">🌐 https://www.boulanger.com</a></div></div>\n        <div class=\"co\"><div class=\"co-h\"><b>AO.com</b><span class=\"co-t sm\">中小</span></div><div class=\"co-r\"><b>速写：</b>英国线上家电零售商；2000 ｜ 总部：英国·博尔顿</div><div class=\"co-r\"><b>企业简介：</b>在线家电零售商</div><div class=\"co-r\"><b>采购画像：</b>采购 大家电/小家电；渠道 直接对华　招牌：大家电、厨电，配送安装一体</div><div class=\"co-r found\"><b>📜 发家史：</b>2000 年，AO.com 创立于英国博尔顿，做线上家电零售，从把家电搬上网站起步，靠透明价格起量。它踩中英国线上家电的早班车。</div><div class=\"co-r turn\"><b>🔑 转折点：</b>它以自建物流与配送/安装服务建立口碑，是英国线上家电代表，2014 年上市，靠专业配送大家电对抗亚马逊。</div><div class=\"co-r look\"><b>💡 看点：</b>英国家电线上渠道，研究欧洲大件物流；推荐：线上家电配送模式</div><div class=\"co-r\">官网：<a class=\"co-site\" href=\"https://www.ao.com\" target=\"_blank\" rel=\"noopener\">🌐 https://www.ao.com</a></div></div>\n        <div class=\"co\"><div class=\"co-h\"><b>Euronics</b><span class=\"co-t sm\">中小</span></div><div class=\"co-r\"><b>速写：</b>欧洲独立家电零售商采购联盟；1990s ｜ 总部：荷兰·阿姆斯特丹</div><div class=\"co-r\"><b>企业简介：</b>欧洲采购联盟（成员制）</div><div class=\"co-r\"><b>采购画像：</b>采购 全品类家电电子；渠道 联合招标对华　招牌：多国本地家电卖场联合采购</div><div class=\"co-r found\"><b>📜 发家史：</b>1990 年代，Euronics 由欧洲多国独立零售商组成采购联盟，目的是用联合招标集采中国货来对抗全国连锁。它是小零售商抱团的产物。</div><div class=\"co-r turn\"><b>🔑 转折点：</b>它靠联合集采与联合采购对抗全国连锁，以规模换低价，是小零售商抱团对抗巨头的中国货采购通道。</div><div class=\"co-r look\"><b>💡 看点：</b>联盟式渠道，中国品牌需借本地成员进入；推荐：采购联盟如何集采中国货</div><div class=\"co-r\">官网：<a class=\"co-site\" href=\"https://www.euronics.com\" target=\"_blank\" rel=\"noopener\">🌐 https://www.euronics.com</a></div></div>\n        <div class=\"co\"><div class=\"co-h\"><b>Worten</b><span class=\"co-t sm\">中小</span></div><div class=\"co-r\"><b>速写：</b>葡萄牙/西班牙消费电子与家电连锁；1996 ｜ 总部：葡萄牙·里斯本</div><div class=\"co-r\"><b>企业简介：</b>葡/西电子连锁</div><div class=\"co-r\"><b>采购画像：</b>采购 全品类消费电子；渠道 对华采购　招牌：IT、家电、影音，伊比利亚半岛主力</div><div class=\"co-r found\"><b>📜 发家史：</b>1996 年，Worten 起步于葡萄牙/西班牙的电子连锁，从葡语区家电电子门店起家，依托 Sonae 集团。它是伊比利亚半岛的线下入口。</div><div class=\"co-r turn\"><b>🔑 转折点：</b>作为 Sonae 旗下电子臂，Worten 覆盖伊比利亚半岛的家电电子渠道，是葡语/西语区的重要线下入口，也是中国品牌进入伊比利亚的跳板。</div><div class=\"co-r look\"><b>💡 看点：</b>南欧市场入口，看西欧外围国家渠道；推荐：南欧渠道</div><div class=\"co-r\">官网：<a class=\"co-site\" href=\"https://www.worten.pt\" target=\"_blank\" rel=\"noopener\">🌐 https://www.worten.pt</a></div></div>\n        <div class=\"co\"><div class=\"co-h\"><b>MediaMarkt（CECONOMY）</b><span class=\"co-t hd\">头部</span></div><div class=\"co-r\"><b>速写：</b>欧洲最大的消费电子连锁（德国系）；1979 ｜ 总部：德国·慕尼黑</div><div class=\"co-r\"><b>企业简介：</b>欧洲最大消费电子连锁，覆盖德/荷/比等</div><div class=\"co-r\"><b>采购画像：</b>采购 全品类消费电子 + 自有配件；渠道 集中招标采购，大量中国 OEM　招牌：门店遍布德/西/意等，家电/数码/游戏</div><div class=\"co-r\"><b>规模：</b>欧洲数百家门店，CECONOMY 旗下</div><div class=\"co-r found\"><b>📜 发家史：</b>1979 年，Leopold Stiefel 等人在德国慕尼黑开出第一家 MediaMarkt，用别生气、来 MediaMarkt 的凶悍广告和公开比价砸开市场，门店里把价格牌明晃晃挂出来，颠覆了德国传统报价不透明的家电卖场。</div><div class=\"co-r turn\"><b>🔑 转折点：</b>它有两招很特别：一是门店经理享有极大自主权（像内部加盟，可自主定价与采购），二是员工认购股份的员工股东模式；这套组合让它成为欧洲最大的消费电子连锁，后与 Saturn 合并、再分拆出 CECONOMY 上市。</div><div class=\"co-r look\"><b>💡 看点：</b>欧洲线下霸主；进入需强本地合规与账期管理，是中国品牌的欧洲天花板渠道；推荐：研究欧洲渠道采购标准与 CE/GS 认证</div><div class=\"co-r\">官网：<a class=\"co-site\" href=\"https://www.mediamarkt.de\" target=\"_blank\" rel=\"noopener\">🌐 https://www.mediamarkt.de</a></div></div>"
        }
      ]
    },
    {
      "title": "Day 5 · 海外企业推荐（采购中国消费电子）",
      "tag": "第5天 · 中小 4 / 头部 1",
      "blocks": [
        {
          "h": "💡 今日怎么用这笔清单",
          "body": "① 在 Google / LinkedIn 搜企业名 + sourcing / procurement / purchasing manager，找采购负责人；② 用「阿里巴巴国际站」「中国制造网」对照其采购品类，反向以这些买家为目标做开发；③ 参加「香港电子展」「广交会」「Global Sources」定向约访；④ 用海关数据 / ImportGenius 查其中国进口记录，锁定具体 SKU；⑤ 开发信：Hi [Name], we supply [品类] to EU/US retailers，附 catalog 与合规证书（CE / FCC / RoHS）。"
        },
        {
          "h": "今日推荐 · 5 家（中小企业为主，含行业标杆）",
          "body": "\n        <div class=\"co\"><div class=\"co-h\"><b>Power</b><span class=\"co-t sm\">中小</span></div><div class=\"co-r\"><b>速写：</b>荷兰消费电子零售商；1991 ｜ 总部：荷兰/比利时</div><div class=\"co-r\"><b>企业简介：</b>荷比电子连锁</div><div class=\"co-r\"><b>采购画像：</b>采购 全品类；渠道 直接对华　招牌：线上加门店，IT/家电/游戏</div><div class=\"co-r found\"><b>📜 发家史：</b>1991 年，Power 创立于荷兰/比利时，做电子连锁，从低地国家的家电电子门店起家。它是荷比地区的区域连锁。</div><div class=\"co-r turn\"><b>🔑 转折点：</b>它以荷比地区的门店网络，成为当地 3C 渠道之一，后并入荷兰零售集团，体现出欧洲区域连锁的整合并购趋势。</div><div class=\"co-r look\"><b>💡 看点：</b>低地国家渠道样本，看荷兰的物流枢纽角色；推荐：低地国家渠道</div><div class=\"co-r\">官网：<a class=\"co-site\" href=\"https://www.power.nl\" target=\"_blank\" rel=\"noopener\">🌐 https://www.power.nl</a></div></div>\n        <div class=\"co\"><div class=\"co-h\"><b>Coolblue</b><span class=\"co-t sm\">中小</span></div><div class=\"co-r\"><b>速写：</b>荷兰起家的家电与 IT 电商（重服务）；1999 ｜ 总部：荷兰·埃因霍温</div><div class=\"co-r\"><b>企业简介：</b>荷比电商/零售商</div><div class=\"co-r\"><b>采购画像：</b>采购 全品类电子；渠道 直接对华 + 自有仓　招牌：次日达、自己配送、贴心客服</div><div class=\"co-r found\"><b>📜 发家史：</b>1999 年，Coolblue 创立于荷兰埃因霍温，做电商，从把电子产品卖得有趣起步，靠极致的退换货与客服出名。它把客服做成卖点。</div><div class=\"co-r turn\"><b>🔑 转折点：</b>它以一切为了你的微笑的变态服务加自建物流，成为荷比卢领先网店，证明服务极致化能对抗亚马逊。</div><div class=\"co-r look\"><b>💡 看点：</b>极致服务体验电商范本，研究欧洲 DTC 的本地化；推荐：极致服务电商的采购</div><div class=\"co-r\">官网：<a class=\"co-site\" href=\"https://www.coolblue.nl\" target=\"_blank\" rel=\"noopener\">🌐 https://www.coolblue.nl</a></div></div>\n        <div class=\"co\"><div class=\"co-h\"><b>Komplett</b><span class=\"co-t sm\">中小</span></div><div class=\"co-r\"><b>速写：</b>北欧（挪威）IT/家电电商；1996 ｜ 总部：挪威·桑德尔福德</div><div class=\"co-r\"><b>企业简介：</b>北欧电商/零售商</div><div class=\"co-r\"><b>采购画像：</b>采购 PC/外设/家电；渠道 对华采购　招牌：电脑、家电、组件，北欧市场</div><div class=\"co-r found\"><b>📜 发家史：</b>1996 年，Komplett 创立于挪威，做线上 IT 零售，从北欧电商加自有仓起步，服务游戏与硬件玩家。它从挪威一国做起。</div><div class=\"co-r turn\"><b>🔑 转折点：</b>它以北欧电商加自有仓，成为斯堪的纳维亚的 3C 渠道，靠本地化物流与品类深度在寒冷市场里扎根。</div><div class=\"co-r look\"><b>💡 看点：</b>北欧高客单市场，研究寒冷地区电商；推荐：北欧渠道</div><div class=\"co-r\">官网：<a class=\"co-site\" href=\"https://www.komplett.no\" target=\"_blank\" rel=\"noopener\">🌐 https://www.komplett.no</a></div></div>\n        <div class=\"co\"><div class=\"co-h\"><b>Cyberport</b><span class=\"co-t sm\">中小</span></div><div class=\"co-r\"><b>速写：</b>德国消费电子连锁；1998 ｜ 总部：德国·柏林</div><div class=\"co-r\"><b>企业简介：</b>德国 IT 零售商</div><div class=\"co-r\"><b>采购画像：</b>采购 PC/外设/组件；渠道 对华采购　招牌：IT、家电、通讯，德国本土</div><div class=\"co-r found\"><b>📜 发家史：</b>1998 年，Cyberport 创立于德国柏林，做 IT 零售，从德国 3C 电商/门店起步，服务德语区硬件玩家。它是柏林的硬件店。</div><div class=\"co-r turn\"><b>🔑 转折点：</b>它以德国 3C 电商/门店服务德语区，是欧洲 DIY 配件市场的一环，体现德国硬件发烧文化。</div><div class=\"co-r look\"><b>💡 看点：</b>德国区域渠道，看本地化零售；推荐：德国 3C 渠道</div><div class=\"co-r\">官网：<a class=\"co-site\" href=\"https://www.cyberport.de\" target=\"_blank\" rel=\"noopener\">🌐 https://www.cyberport.de</a></div></div>\n        <div class=\"co\"><div class=\"co-h\"><b>Currys</b><span class=\"co-t hd\">头部</span></div><div class=\"co-r\"><b>速写：</b>英国/爱尔兰最大的电子与家电零售商；1884 ｜ 总部：英国·伦敦</div><div class=\"co-r\"><b>企业简介：</b>英国最大电子零售商</div><div class=\"co-r\"><b>采购画像：</b>采购 电脑/家电/智能设备全品类；渠道 直接对华 + 香港电子展　招牌：PC、家电、服务，门店加线上</div><div class=\"co-r found\"><b>📜 发家史：</b>前身可追到 1884 年 Henry Curry 在莱斯特做的自行车生意，后来一路演进到家电与电子产品零售；20 世纪靠以旧换新加分期的普惠金融打开大众市场。</div><div class=\"co-r turn\"><b>🔑 转折点：</b>关键转折是 2000 年代与 Dixons 合并组成 Dixons Carphone（后精简为 Currys），靠卖电器加装维服务加分期金融打包，把硬件加服务做成护城河，稳坐英国最大电子连锁位置，并在电商冲击下靠上门安装/维修守住阵地。</div><div class=\"co-r look\"><b>💡 看点：</b>英国市场核心渠道，进入需满足英国合规与售后；推荐：研究英国市场准入与脱欧后合规</div><div class=\"co-r\">官网：<a class=\"co-site\" href=\"https://www.currys.co.uk\" target=\"_blank\" rel=\"noopener\">🌐 https://www.currys.co.uk</a></div></div>\n      "
        }
      ]
    },
    {
      "title": "Day 6 · 海外企业推荐（采购中国消费电子）",
      "tag": "第6天 · 中小 4 / 头部 1",
      "blocks": [
        {
          "h": "💡 今日怎么用这笔清单",
          "body": "① 在 Google / LinkedIn 搜企业名 + sourcing / procurement / purchasing manager，找采购负责人；② 用「阿里巴巴国际站」「中国制造网」对照其采购品类，反向以这些买家为目标做开发；③ 参加「香港电子展」「广交会」「Global Sources」定向约访；④ 用海关数据 / ImportGenius 查其中国进口记录，锁定具体 SKU；⑤ 开发信：Hi [Name], we supply [品类] to EU/US retailers，附 catalog 与合规证书（CE / FCC / RoHS）。"
        },
        {
          "h": "今日推荐 · 5 家（中小企业为主，含行业标杆）",
          "body": "\n        <div class=\"co\"><div class=\"co-h\"><b>Alternate</b><span class=\"co-t sm\">中小</span></div><div class=\"co-r\"><b>速写：</b>德国 IT 硬件电商；1986 ｜ 总部：德国·亚琛</div><div class=\"co-r\"><b>企业简介：</b>德国硬件电商</div><div class=\"co-r\"><b>采购画像：</b>采购 组件/外设；渠道 对华　招牌：电脑、组件、外设，极客向</div><div class=\"co-r found\"><b>📜 发家史：</b>1986 年，Alternate 创立于德国亚琛，做硬件电商，是欧洲最早的 DIY 配件网店之一，从邮购目录走到线上。它是德国老牌 3C 网店。</div><div class=\"co-r turn\"><b>🔑 转折点：</b>它以德系硬件电商起家，靠专业选品与社区在德国长青，是欧洲老牌 3C 网店的代表。</div><div class=\"co-r look\"><b>💡 看点：</b>德国 DIY 硬件渠道，类比 Newegg；推荐：德系硬件电商</div><div class=\"co-r\">官网：<a class=\"co-site\" href=\"https://www.alternate.de\" target=\"_blank\" rel=\"noopener\">🌐 https://www.alternate.de</a></div></div>\n        <div class=\"co\"><div class=\"co-h\"><b>LDLC</b><span class=\"co-t sm\">中小</span></div><div class=\"co-r\"><b>速写：</b>法国 IT/游戏电商；1996 ｜ 总部：法国·里昂</div><div class=\"co-r\"><b>企业简介：</b>法国 IT 电商</div><div class=\"co-r\"><b>采购画像：</b>采购 组件/外设；渠道 对华　招牌：电脑、组件、外设</div><div class=\"co-r found\"><b>📜 发家史：</b>1996 年，LDLC 创立于法国里昂，做 IT 电商，从法文社区加专业内容起步，服务法国硬件玩家。它靠论坛社区起家。</div><div class=\"co-r turn\"><b>🔑 转折点：</b>它以法文社区加专业内容，做成法国头部硬件电商，靠内容种草加自营物流立足。</div><div class=\"co-r look\"><b>💡 看点：</b>法国极客渠道，看法语市场；推荐：法系硬件电商</div><div class=\"co-r\">官网：<a class=\"co-site\" href=\"https://www.ldlc.com\" target=\"_blank\" rel=\"noopener\">🌐 https://www.ldlc.com</a></div></div>\n        <div class=\"co\"><div class=\"co-h\"><b>Materiel.net</b><span class=\"co-t sm\">中小</span></div><div class=\"co-r\"><b>速写：</b>法国 IT 组件电商；1999 ｜ 总部：法国·巴黎</div><div class=\"co-r\"><b>企业简介：</b>法国硬件电商</div><div class=\"co-r\"><b>采购画像：</b>采购 组件/外设；渠道 对华　招牌：电脑硬件、外设</div><div class=\"co-r found\"><b>📜 发家史：</b>1999 年，Materiel.net 创立于法国巴黎，做 IT 电商，从专业硬件选品起步，面向发烧友。它是法国专业级 3C 电商。</div><div class=\"co-r turn\"><b>🔑 转折点：</b>它以专业硬件选品，成为法国专业级 3C 电商，与 LDLC 等形成法国硬件电商的竞争格局。</div><div class=\"co-r look\"><b>💡 看点：</b>法国小众硬件渠道；推荐：法系专业电商</div><div class=\"co-r\">官网：<a class=\"co-site\" href=\"https://www.materiel.net\" target=\"_blank\" rel=\"noopener\">🌐 https://www.materiel.net</a></div></div>\n        <div class=\"co\"><div class=\"co-h\"><b>Sharaf DG</b><span class=\"co-t sm\">中小</span></div><div class=\"co-r\"><b>速写：</b>阿联酋（迪拜）电子零售商；2001 ｜ 总部：阿联酋·迪拜</div><div class=\"co-r\"><b>企业简介：</b>阿联酋电子连锁</div><div class=\"co-r\"><b>采购画像：</b>采购 全品类；渠道 对华 + 港展　招牌：IT、家电、手机，海湾地区主力</div><div class=\"co-r found\"><b>📜 发家史：</b>2001 年，Sharaf DG 创立于迪拜，做电子连锁，从海湾地区的电器门店起步，借迪拜转口贸易红利。它是迪拜的线下电子大店。</div><div class=\"co-r turn\"><b>🔑 转折点：</b>它借迪拜转口与华为等中国品牌合作，成为海湾地区主流电子渠道，是中国品牌进入中东的线下入口。</div><div class=\"co-r look\"><b>💡 看点：</b>中东富裕市场入口，研究海湾渠道与免税红利；推荐：海湾渠道与迪拜转口</div><div class=\"co-r\">官网：<a class=\"co-site\" href=\"https://www.sharafdg.com\" target=\"_blank\" rel=\"noopener\">🌐 https://www.sharafdg.com</a></div></div>\n        <div class=\"co\"><div class=\"co-h\"><b>JB Hi-Fi</b><span class=\"co-t hd\">头部</span></div><div class=\"co-r\"><b>速写：</b>澳大利亚最大的电子与家电连锁；1974 ｜ 总部：澳大利亚·墨尔本</div><div class=\"co-r\"><b>企业简介：</b>澳洲最大电子零售商</div><div class=\"co-r\"><b>采购画像：</b>采购 全品类消费电子；渠道 直接对华采购 + 澳本地仓　招牌：IT、家电、游戏、影音，低价高周转</div><div class=\"co-r\"><b>规模：</b>澳洲百余家门店，年销售数十亿澳元</div><div class=\"co-r found\"><b>📜 发家史：</b>1974 年，John Barbuto 在墨尔本开出第一家 JB Hi-Fi（名字取自他名字缩写），主打平价 hi-fi 音响，走堆货加低价加懂行店员的路线，在澳洲电器连锁的缝隙里生长。</div><div class=\"co-r turn\"><b>🔑 转折点：</b>JB Hi-Fi 用低毛利、高周转、门店像仓库的打法在澳洲站稳，再向新西兰扩张并收购 The Good Guys（2016），成为澳新地区消费电子零售老大，把便宜又全做成国民心智。</div><div class=\"co-r look\"><b>💡 看点：</b>低价加高坪效碾压对手，是中国品牌进澳洲的首选渠道；推荐：研究南半球大买家采购节奏与澳标 RCM</div><div class=\"co-r\">官网：<a class=\"co-site\" href=\"https://www.jbhifi.com.au\" target=\"_blank\" rel=\"noopener\">🌐 https://www.jbhifi.com.au</a></div></div>\n      "
        }
      ]
    },
    {
      "title": "Day 7 · 海外企业推荐（采购中国消费电子）",
      "tag": "第7天 · 中小 4 / 头部 1",
      "blocks": [
        {
          "h": "💡 今日怎么用这笔清单",
          "body": "① 在 Google / LinkedIn 搜企业名 + sourcing / procurement / purchasing manager，找采购负责人；② 用「阿里巴巴国际站」「中国制造网」对照其采购品类，反向以这些买家为目标做开发；③ 参加「香港电子展」「广交会」「Global Sources」定向约访；④ 用海关数据 / ImportGenius 查其中国进口记录，锁定具体 SKU；⑤ 开发信：Hi [Name], we supply [品类] to EU/US retailers，附 catalog 与合规证书（CE / FCC / RoHS）。"
        },
        {
          "h": "今日推荐 · 5 家（中小企业为主，含行业标杆）",
          "body": "\n        <div class=\"co\"><div class=\"co-h\"><b>Virgin Megastore</b><span class=\"co-t sm\">中小</span></div><div class=\"co-r\"><b>速写：</b>中东/北非的 Virgin 品牌零售（音乐/电子/书）；2001 ｜ 总部：阿联酋/中东</div><div class=\"co-r\"><b>企业简介：</b>中东电子/文化连锁</div><div class=\"co-r\"><b>采购画像：</b>采购 消费电子/耳机；渠道 对华采购　招牌：黎凡特、海湾的娱乐与电子卖场</div><div class=\"co-r found\"><b>📜 发家史：</b>2001 年，Virgin Megastore 以维珍品牌授权进入中东，从音像文化店起步，带着维珍的潮流调性。它把唱片店搬到了中东。</div><div class=\"co-r turn\"><b>🔑 转折点：</b>它从音像文化店转型为中东电子/娱乐连锁，在沙特、阿联酋等地把书+唱片+电子混搭，迎合年轻消费。</div><div class=\"co-r look\"><b>💡 看点：</b>中东品牌化零售，看区域文化差异；推荐：中东零售</div><div class=\"co-r\">官网：<a class=\"co-site\" href=\"https://www.virginmegastore.ae\" target=\"_blank\" rel=\"noopener\">🌐 https://www.virginmegastore.ae</a></div></div>\n        <div class=\"co\"><div class=\"co-h\"><b>Jumbo Electronics</b><span class=\"co-t sm\">中小</span></div><div class=\"co-r\"><b>速写：</b>阿联酋消费电子零售商；1974 ｜ 总部：阿联酋·迪拜</div><div class=\"co-r\"><b>企业简介：</b>阿联酋电子零售商</div><div class=\"co-r\"><b>采购画像：</b>采购 全品类；渠道 对华　招牌：手机、IT、家电，本地连锁</div><div class=\"co-r found\"><b>📜 发家史：</b>1974 年，Jumbo Electronics 创立于迪拜，做电子分销与零售，从海湾地区的电器分销起家，是老牌渠道。它是海湾的老买手。</div><div class=\"co-r turn\"><b>🔑 转折点：</b>它以海湾家电分销网络，长期对接中国白电出口，是中国大家电进入海湾的老买手。</div><div class=\"co-r look\"><b>💡 看点：</b>海湾本地渠道补充；推荐：海湾老牌渠道</div><div class=\"co-r\">官网：<a class=\"co-site\" href=\"https://www.jumbomegastore.com\" target=\"_blank\" rel=\"noopener\">🌐 https://www.jumbomegastore.com</a></div></div>\n        <div class=\"co\"><div class=\"co-h\"><b>Axiom Telecom</b><span class=\"co-t sm\">中小</span></div><div class=\"co-r\"><b>速写：</b>中东手机分销与零售龙头；1997 ｜ 总部：阿联酋·迪拜</div><div class=\"co-r\"><b>企业简介：</b>中东手机/配件分销商</div><div class=\"co-r\"><b>采购画像：</b>采购 手机配件/智能设备；渠道 对华直采　招牌：智能手机、配件，海湾分销网络</div><div class=\"co-r found\"><b>📜 发家史：</b>1997 年，Axiom Telecom 创立于迪拜，做手机分销，从海湾手机批发起步，踩中功能机/智能机普及。它是海湾的手机渠道商。</div><div class=\"co-r turn\"><b>🔑 转折点：</b>它以中东手机/配件分销网络，成为区域手机渠道关键一环，是中国手机品牌（华为、小米、传音）进入海湾的重要伙伴。</div><div class=\"co-r look\"><b>💡 看点：</b>中东手机渠道关键一环，研究分销体系；推荐：中东手机渠道研究</div><div class=\"co-r\">官网：<a class=\"co-site\" href=\"https://www.axiomtelecom.com\" target=\"_blank\" rel=\"noopener\">🌐 https://www.axiomtelecom.com</a></div></div>\n        <div class=\"co\"><div class=\"co-h\"><b>X-cite</b><span class=\"co-t sm\">中小</span></div><div class=\"co-r\"><b>速写：</b>科威特电子零售商；2001 ｜ 总部：科威特</div><div class=\"co-r\"><b>企业简介：</b>科威特电子连锁</div><div class=\"co-r\"><b>采购画像：</b>采购 全品类；渠道 对华　招牌：IT、家电、手机</div><div class=\"co-r found\"><b>📜 发家史：</b>2001 年，X-cite 创立于科威特，做电子连锁，从科威特门店网络起步，覆盖海湾小国市场。它是科威特的主流 3C 店。</div><div class=\"co-r turn\"><b>🔑 转折点：</b>它以科威特门店网络，成为海湾小国主流 3C 渠道，是高端电子（苹果、游戏机）在海湾的入口。</div><div class=\"co-r look\"><b>💡 看点：</b>海湾小国渠道样本；推荐：海湾小国渠道</div><div class=\"co-r\">官网：<a class=\"co-site\" href=\"https://www.xcite.com\" target=\"_blank\" rel=\"noopener\">🌐 https://www.xcite.com</a></div></div>\n        <div class=\"co\"><div class=\"co-h\"><b>Fnac Darty</b><span class=\"co-t hd\">头部</span></div><div class=\"co-r\"><b>速写：</b>法国最大的文化加电子加家电零售集团；1954 ｜ 总部：法国·巴黎</div><div class=\"co-r\"><b>企业简介：</b>法国最大电子/文化零售商（Fnac+Darty）</div><div class=\"co-r\"><b>采购画像：</b>采购 智能设备/耳机/家电；渠道 集中对华采购　招牌：书店加电子加家电（Darty 维修口碑），法国/比利时/瑞士</div><div class=\"co-r found\"><b>📜 发家史：</b>Fnac 1954 年由 André Essel 等人创办，从巴黎的文化/音像产品（书、唱片、影音）起家，带着文化百货的调性；Darty 则更早（1957）做家电，并以 30 天内最便宜的价格承诺出名。</div><div class=\"co-r turn\"><b>🔑 转折点：</b>2016 年两者合并为 Fnac Darty，把文化娱乐加家电电子两条线合流，并借电商与门店网络成为法国乃至欧洲法语区最具影响力的零售集团之一，既卖书也卖冰箱。</div><div class=\"co-r look\"><b>💡 看点：</b>Darty 维修 garantie 是信任招牌；进入法国市场难绕开的渠道；推荐：研究法国市场与售后（反修权）合规</div><div class=\"co-r\">官网：<a class=\"co-site\" href=\"https://www.fnac.com\" target=\"_blank\" rel=\"noopener\">🌐 https://www.fnac.com</a></div></div>\n      "
        }
      ]
    },
    {
      "title": "Day 8 · 海外企业推荐（采购中国消费电子）",
      "tag": "第8天 · 中小 5 / 头部 1",
      "blocks": [
        {
          "h": "💡 今日怎么用这笔清单",
          "body": "① 在 Google / LinkedIn 搜企业名 + sourcing / procurement / purchasing manager，找采购负责人；② 用「阿里巴巴国际站」「中国制造网」对照其采购品类，反向以这些买家为目标做开发；③ 参加「香港电子展」「广交会」「Global Sources」定向约访；④ 用海关数据 / ImportGenius 查其中国进口记录，锁定具体 SKU；⑤ 开发信：Hi [Name], we supply [品类] to EU/US retailers，附 catalog 与合规证书（CE / FCC / RoHS）。"
        },
        {
          "h": "今日推荐 · 5 家（中小企业为主，含行业标杆）",
          "body": "\n        <div class=\"co\"><div class=\"co-h\"><b>B.Tech</b><span class=\"co-t sm\">中小</span></div><div class=\"co-r\"><b>速写：</b>埃及领先的家电与电子零售商；1997 ｜ 总部：埃及·开罗</div><div class=\"co-r\"><b>企业简介：</b>埃及电子零售商</div><div class=\"co-r\"><b>采购画像：</b>采购 家电/消费电子；渠道 对华　招牌：家电、空调、手机，本土连锁</div><div class=\"co-r found\"><b>📜 发家史：</b>1997 年，B.Tech 创立于埃及开罗，做电子零售，从北非本土连锁起步，是埃及消费电子的重要渠道。它是北非的连锁电器店。</div><div class=\"co-r turn\"><b>🔑 转折点：</b>它以本土连锁覆盖北非市场，是埃及消费电子的重要渠道，也是中国品牌进入北非（埃及、摩洛哥）的落地伙伴。</div><div class=\"co-r look\"><b>💡 看点：</b>北非最大市场入口，研究阿拉伯语与本地支付；推荐：北非市场</div><div class=\"co-r\">官网：<a class=\"co-site\" href=\"https://www.btech.com\" target=\"_blank\" rel=\"noopener\">🌐 https://www.btech.com</a></div></div>\n        <div class=\"co\"><div class=\"co-h\"><b>Eros Group</b><span class=\"co-t sm\">中小</span></div><div class=\"co-r\"><b>速写：</b>阿联酋家电与空调分销集团；1967 ｜ 总部：阿联酋·迪拜</div><div class=\"co-r\"><b>企业简介：</b>阿联酋家电分销商</div><div class=\"co-r\"><b>采购画像：</b>采购 大家电/小家电；渠道 对华　招牌：代理 LG、Whirlpool 等，海湾分销</div><div class=\"co-r found\"><b>📜 发家史：</b>1967 年，Eros Group 创立于迪拜，做家电分销，从海湾地区的白电分销起家，是老牌贸易商。它是海湾的白电中间商。</div><div class=\"co-r turn\"><b>🔑 转折点：</b>它以海湾家电分销网络，长期对接中国白电出口（美的、海尔等），是中国制造卖进中东的关键中间商。</div><div class=\"co-r look\"><b>💡 看点：</b>海湾代理制渠道，看品牌总代模式；推荐：海湾家电分销</div><div class=\"co-r\">官网：<a class=\"co-site\" href=\"https://www.erosgroup.ae\" target=\"_blank\" rel=\"noopener\">🌐 https://www.erosgroup.ae</a></div></div>\n        <div class=\"co\"><div class=\"co-h\"><b>Magazine Luiza</b><span class=\"co-t sm\">中小</span></div><div class=\"co-r\"><b>速写：</b>巴西最大的零售与电商集团之一（Magalu）；1957 ｜ 总部：巴西·圣保罗</div><div class=\"co-r\"><b>企业简介：</b>巴西零售巨头</div><div class=\"co-r\"><b>采购画像：</b>采购 全品类电子/家电；渠道 对华 + 本地组装　招牌：家电、电子、全品类，线上线下融合</div><div class=\"co-r found\"><b>📜 发家史：</b>1957 年，Trajano 家族在巴西内陆小城创立 Magazine Luiza（原名 Lojas Mercado），从一家小百货起家，靠分期付款贴近普通家庭。</div><div class=\"co-r turn\"><b>🔑 转折点：</b>真正的转折是激进数字化转型，自建物流、上线 App、做社交电商加门店提货，从区域百货长成巴西电商巨头，并在疫情中进一步放量，是拉美传统零售数字化的标杆。</div><div class=\"co-r look\"><b>💡 看点：</b>拉美最大市场入口，研究巴西税复杂与本地仓；推荐：巴西市场与高关税应对</div><div class=\"co-r\">官网：<a class=\"co-site\" href=\"https://www.magazineluiza.com.br\" target=\"_blank\" rel=\"noopener\">🌐 https://www.magazineluiza.com.br</a></div></div>\n        <div class=\"co\"><div class=\"co-h\"><b>Americanas</b><span class=\"co-t sm\">中小</span></div><div class=\"co-r\"><b>速写：</b>巴西老牌零售/电商集团；1929 ｜ 总部：巴西·里约</div><div class=\"co-r\"><b>企业简介：</b>巴西零售</div><div class=\"co-r\"><b>采购画像：</b>采购 全品类；渠道 对华　招牌：全品类、家电电子，门店加线上</div><div class=\"co-r found\"><b>📜 发家史：</b>1929 年，Americanas 创立于巴西，做大众零售，从街边小店长成覆盖全国的连锁，靠低价加密集门店深入人心。它是巴西国民商店。</div><div class=\"co-r turn\"><b>🔑 转折点：</b>它以门店加电商双线成为巴西国民级零售，覆盖最广的下沉市场；但 2023 年曝出巨额财务造假危机，成为巴西零售史上的重大事件，也提醒规模不等于健康。</div><div class=\"co-r look\"><b>💡 看点：</b>巴西大众渠道，注意其曾财务风波的供应链风险；推荐：巴西电商渠道</div><div class=\"co-r\">官网：<a class=\"co-site\" href=\"https://www.americanas.com.br\" target=\"_blank\" rel=\"noopener\">🌐 https://www.americanas.com.br</a></div></div>\n        <div class=\"co\"><div class=\"co-h\"><b>Casas Bahia</b><span class=\"co-t sm\">中小</span></div><div class=\"co-r\"><b>速写：</b>巴西家电与家具零售商（偏大众/分期）；1952 ｜ 总部：巴西·圣保罗</div><div class=\"co-r\"><b>企业简介：</b>巴西家电电子连锁</div><div class=\"co-r\"><b>采购画像：</b>采购 家电/消费电子；渠道 对华　招牌：家电、家具，分期付款文化</div><div class=\"co-r found\"><b>📜 发家史：</b>1952 年，波兰裔移民 Samuel Klein 在巴西创立 Casas Bahia，从圣保罗周边的小家电店起步，专做低收入人群生意。</div><div class=\"co-r turn\"><b>🔑 转折点：</b>它以面向低收入人群的分期付款模式，做成巴西大众家电霸主（后并入 Via 集团），用先买后付把冰箱电视卖进贫民社区，是巴西特有的普惠金融式零售。</div><div class=\"co-r look\"><b>💡 看点：</b>巴西分期消费文化样本，研究拉美信贷渠道；推荐：巴西大众渠道</div><div class=\"co-r\">官网：<a class=\"co-site\" href=\"https://www.casasbahia.com.br\" target=\"_blank\" rel=\"noopener\">🌐 https://www.casasbahia.com.br</a></div></div>\n      "
        }
      ]
    },
    {
      "title": "Day 9 · 海外企业推荐（采购中国消费电子）",
      "tag": "第9天 · 中小 5 / 头部 1",
      "blocks": [
        {
          "h": "💡 今日怎么用这笔清单",
          "body": "① 在 Google / LinkedIn 搜企业名 + sourcing / procurement / purchasing manager，找采购负责人；② 用「阿里巴巴国际站」「中国制造网」对照其采购品类，反向以这些买家为目标做开发；③ 参加「香港电子展」「广交会」「Global Sources」定向约访；④ 用海关数据 / ImportGenius 查其中国进口记录，锁定具体 SKU；⑤ 开发信：Hi [Name], we supply [品类] to EU/US retailers，附 catalog 与合规证书（CE / FCC / RoHS）。"
        },
        {
          "h": "今日推荐 · 5 家（中小企业为主，含行业标杆）",
          "body": "\n        <div class=\"co\"><div class=\"co-h\"><b>Fast Shop</b><span class=\"co-t sm\">中小</span></div><div class=\"co-r\"><b>速写：</b>巴西电子零售商；1992 ｜ 总部：巴西·圣保罗</div><div class=\"co-r\"><b>企业简介：</b>巴西高端电子零售</div><div class=\"co-r\"><b>采购画像：</b>采购 高端电子/家电；渠道 对华　招牌：IT、家电、手机</div><div class=\"co-r found\"><b>📜 发家史：</b>1992 年，Fast Shop 创立于巴西，做高端电子零售，从体验式门店起步，瞄准中高收入人群。它走精品路线。</div><div class=\"co-r turn\"><b>🔑 转折点：</b>它以高端定位与体验式门店，成为巴西中高端 3C 渠道，在 Magazine Luiza、Americanas 的夹击中走精品路线。</div><div class=\"co-r look\"><b>💡 看点：</b>巴西电子渠道补充；推荐：巴西中高端渠道</div><div class=\"co-r\">官网：<a class=\"co-site\" href=\"https://www.fastshop.com.br\" target=\"_blank\" rel=\"noopener\">🌐 https://www.fastshop.com.br</a></div></div>\n        <div class=\"co\"><div class=\"co-h\"><b>Falabella</b><span class=\"co-t sm\">中小</span></div><div class=\"co-r\"><b>速写：</b>智利/南美百货与电商巨头；1889 ｜ 总部：智利·圣地亚哥</div><div class=\"co-r\"><b>企业简介：</b>南美零售集团</div><div class=\"co-r\"><b>采购画像：</b>采购 全品类；渠道 对华　招牌：百货、家居、金融，覆盖智利/秘鲁/哥伦比亚</div><div class=\"co-r found\"><b>📜 发家史：</b>1889 年，Falabella 创立于智利圣地亚哥，起家是百货公司，靠布匹与百货在安第斯山脉脚下生长，是拉美最老牌零售之一。</div><div class=\"co-r turn\"><b>🔑 转折点：</b>它以全渠道加 marketplace 加金融服务（自有信用卡 CMR）长成覆盖智利、秘鲁、哥伦比亚、阿根廷的多国零售集团，是零售加金融模式的拉美范本。</div><div class=\"co-r look\"><b>💡 看点：</b>南美多国渠道，研究安第斯市场；推荐：南美多国渠道</div><div class=\"co-r\">官网：<a class=\"co-site\" href=\"https://www.falabella.com\" target=\"_blank\" rel=\"noopener\">🌐 https://www.falabella.com</a></div></div>\n        <div class=\"co\"><div class=\"co-h\"><b>Liverpool</b><span class=\"co-t sm\">中小</span></div><div class=\"co-r\"><b>速写：</b>墨西哥高端百货集团；1847 ｜ 总部：墨西哥·墨西哥城</div><div class=\"co-r\"><b>企业简介：</b>墨西哥高端百货</div><div class=\"co-r\"><b>采购画像：</b>采购 消费电子/家电；渠道 对华 + 近岸　招牌：家电、服饰、美妆，中高产</div><div class=\"co-r found\"><b>📜 发家史：</b>1847 年，Liverpool 创立于墨西哥城，是老牌百货，从进口百货起家，靠比美国货便宜吸引中产。它有一百多年的历史。</div><div class=\"co-r turn\"><b>🔑 转折点：</b>它以中高端定位加自有信用卡体系，成为墨西哥零售 icon，用百货加金融黏住中产家庭，历经百年仍是墨国零售旗帜。</div><div class=\"co-r look\"><b>💡 看点：</b>墨西哥中产入口，研究近岸外包红利；推荐：墨国市场与美墨近岸</div><div class=\"co-r\">官网：<a class=\"co-site\" href=\"https://www.liverpool.com.mx\" target=\"_blank\" rel=\"noopener\">🌐 https://www.liverpool.com.mx</a></div></div>\n        <div class=\"co\"><div class=\"co-h\"><b>Coppel</b><span class=\"co-t sm\">中小</span></div><div class=\"co-r\"><b>速写：</b>墨西哥大众百货（分期付款强）；1941 ｜ 总部：墨西哥·库利亚坎</div><div class=\"co-r\"><b>企业简介：</b>墨西哥大众零售（分期）</div><div class=\"co-r\"><b>采购画像：</b>采购 家电/电子；渠道 对华　招牌：家电、电子、家具，覆盖下沉</div><div class=\"co-r found\"><b>📜 发家史：</b>1941 年，Coppel 创立于墨西哥，做大众零售，从家族鞋店起家，专攻下沉市场与普通家庭。它靠赊销起家。</div><div class=\"co-r turn\"><b>🔑 转折点：</b>它以分期赊销切入下沉市场，是墨西哥门店最多的连锁之一，用周付加送货上门把家电卖进低收入社区，是墨版先买后付。</div><div class=\"co-r look\"><b>💡 看点：</b>墨西哥下沉加分期样本，看拉美信贷零售；推荐：分期付款渠道模式</div><div class=\"co-r\">官网：<a class=\"co-site\" href=\"https://www.coppel.com\" target=\"_blank\" rel=\"noopener\">🌐 https://www.coppel.com</a></div></div>\n        <div class=\"co\"><div class=\"co-h\"><b>Sears Mexico</b><span class=\"co-t sm\">中小</span></div><div class=\"co-r\"><b>速写：</b>墨西哥 Sears 百货（当地运营）；1947 ｜ 总部：墨西哥</div><div class=\"co-r\"><b>企业简介：</b>墨西哥电子百货</div><div class=\"co-r\"><b>采购画像：</b>采购 家电/电子；渠道 对华　招牌：家电、服饰、家居，城市门店</div><div class=\"co-r found\"><b>📜 发家史：</b>1947 年，Sears 进入墨西哥，曾隶属美国 Sears，从美式百货起步，是墨西哥现代零售的启蒙者之一。它把美式百货带进墨西哥。</div><div class=\"co-r turn\"><b>🔑 转折点：</b>2022 年从美国 Sears 分拆独立，继续深耕墨西哥家电电子，在 Liverpool、Coppel 竞争中以美式百货底蕴维持地位。</div><div class=\"co-r look\"><b>💡 看点：</b>墨西哥老牌渠道，研究本地零售惯性；推荐：墨国渠道</div><div class=\"co-r\">官网：<a class=\"co-site\" href=\"https://www.sears.com.mx\" target=\"_blank\" rel=\"noopener\">🌐 https://www.sears.com.mx</a></div></div>\n      "
        }
      ]
    },
    {
      "title": "Day 10 · 海外企业推荐（采购中国消费电子）",
      "tag": "第10天 · 中小 5 / 头部 1",
      "blocks": [
        {
          "h": "💡 今日怎么用这笔清单",
          "body": "① 在 Google / LinkedIn 搜企业名 + sourcing / procurement / purchasing manager，找采购负责人；② 用「阿里巴巴国际站」「中国制造网」对照其采购品类，反向以这些买家为目标做开发；③ 参加「香港电子展」「广交会」「Global Sources」定向约访；④ 用海关数据 / ImportGenius 查其中国进口记录，锁定具体 SKU；⑤ 开发信：Hi [Name], we supply [品类] to EU/US retailers，附 catalog 与合规证书（CE / FCC / RoHS）。"
        },
        {
          "h": "今日推荐 · 5 家（中小企业为主，含行业标杆）",
          "body": "\n        <div class=\"co\"><div class=\"co-h\"><b>Bic Camera</b><span class=\"co-t sm\">中小</span></div><div class=\"co-r\"><b>速写：</b>日本大型家电/相机/游戏综合电器店；1968 ｜ 总部：日本·东京</div><div class=\"co-r\"><b>企业简介：</b>日本电子连锁</div><div class=\"co-r\"><b>采购画像：</b>采购 全品类（含中国 OEM）；渠道 直接对华采购　招牌：全国门店，积分返点文化，秋叶原等地标</div><div class=\"co-r found\"><b>📜 发家史：</b>1968 年，Bic Camera 创立于东京，做相机/电子连锁，从相机专门店起步，踩中日本相机大国的黄金期。它是相机制造国的连锁店。</div><div class=\"co-r turn\"><b>🔑 转折点：</b>它以超大型门店加积分卡忠诚度，做成日本电子零售巨头，并把业态延伸到药妆、酒类，成为什么都能卖的量贩电子店。</div><div class=\"co-r look\"><b>💡 看点：</b>日本渠道重服务与信任，进入需极致品质与合规；推荐：日本渠道与品质要求</div><div class=\"co-r\">官网：<a class=\"co-site\" href=\"https://www.biccamera.com\" target=\"_blank\" rel=\"noopener\">🌐 https://www.biccamera.com</a></div></div>\n        <div class=\"co\"><div class=\"co-h\"><b>Yodobashi</b><span class=\"co-t sm\">中小</span></div><div class=\"co-r\"><b>速写：</b>日本大型家电/相机/游戏综合电器店；1960 ｜ 总部：日本·东京</div><div class=\"co-r\"><b>企业简介：</b>日本电子连锁</div><div class=\"co-r\"><b>采购画像：</b>采购 全品类；渠道 对华　招牌：秋叶原地标，全品类加积分返点</div><div class=\"co-r found\"><b>📜 发家史：</b>1960 年，Yodobashi 创立于东京，做相机起家，从淀桥相机小店长成综合电子卖场。它是东京的标志性电器店。</div><div class=\"co-r turn\"><b>🔑 转折点：</b>它以巨型 Yodobashi Camera 门店加齐全品类加强势线上，成为日本综合电子卖场，靠品类全、不缺货、积分对抗 Bic Camera 与电商。</div><div class=\"co-r look\"><b>💡 看点：</b>日本渠道重服务与信任，进入需极致品质与合规；推荐：日本大店模式</div><div class=\"co-r\">官网：<a class=\"co-site\" href=\"https://www.yodobashi.com\" target=\"_blank\" rel=\"noopener\">🌐 https://www.yodobashi.com</a></div></div>\n        <div class=\"co\"><div class=\"co-h\"><b>Yamada Denki</b><span class=\"co-t sm\">中小</span></div><div class=\"co-r\"><b>速写：</b>日本家电量贩连锁；1973 ｜ 总部：日本·东京</div><div class=\"co-r\"><b>企业简介：</b>日本家电连锁</div><div class=\"co-r\"><b>采购画像：</b>采购 家电/电子；渠道 对华　招牌：家电、IT、手机，全国门店</div><div class=\"co-r found\"><b>📜 发家史：</b>1973 年，Yamada Denki 创立于日本，做家电连锁，从群马县的地方门店起步，靠 Tecc Land 巨型门店扩张。它一度是日本最大家电连锁。</div><div class=\"co-r turn\"><b>🔑 转折点：</b>它一度成日本最大家电连锁，但电商与同业的夹击让它后来收缩，是线下量贩被线上颠覆的日本样本。</div><div class=\"co-r look\"><b>💡 看点：</b>日本量贩店样本，研究日本零售规则；推荐：日本家电渠道</div><div class=\"co-r\">官网：<a class=\"co-site\" href=\"https://www.yamada-denki.jp\" target=\"_blank\" rel=\"noopener\">🌐 https://www.yamada-denki.jp</a></div></div>\n        <div class=\"co\"><div class=\"co-h\"><b>Joshin</b><span class=\"co-t sm\">中小</span></div><div class=\"co-r\"><b>速写：</b>日本关西家电连锁；1952 ｜ 总部：日本·大阪</div><div class=\"co-r\"><b>企业简介：</b>日本电子连锁</div><div class=\"co-r\"><b>采购画像：</b>采购 全品类；渠道 对华　招牌：家电、影音、游戏</div><div class=\"co-r found\"><b>📜 发家史：</b>1952 年，Joshin 创立于大阪，做电子连锁，从关西区域门店起步，靠本地口碑生长。它是关西的老牌电器店。</div><div class=\"co-r turn\"><b>🔑 转折点：</b>它以关西区域深耕，成为日本西日本重要电子渠道，在巨头夹缝中以区域密度加服务立足。</div><div class=\"co-r look\"><b>💡 看点：</b>日本区域渠道；推荐：日本区域渠道</div><div class=\"co-r\">官网：<a class=\"co-site\" href=\"https://www.joshin.co.jp\" target=\"_blank\" rel=\"noopener\">🌐 https://www.joshin.co.jp</a></div></div>\n        <div class=\"co\"><div class=\"co-h\"><b>Edion</b><span class=\"co-t sm\">中小</span></div><div class=\"co-r\"><b>速写：</b>日本中国地方（关西/中国地方）家电连锁；2002 ｜ 总部：日本·大阪</div><div class=\"co-r\"><b>企业简介：</b>日本家电连锁</div><div class=\"co-r\"><b>采购画像：</b>采购 家电/电子；渠道 对华　招牌：家电、IT</div><div class=\"co-r found\"><b>📜 发家史：</b>2002 年，Edion 由关西多家区域电子连锁（如石丸、Midori）合并而成，是典型的同业整合产物。它是关西抱团的结果。</div><div class=\"co-r turn\"><b>🔑 转折点：</b>它通过同业整合，做成覆盖西日本的家电电子集团，是日本家电连锁抱团取暖对抗全国巨头的代表。</div><div class=\"co-r look\"><b>💡 看点：</b>日本区域渠道补充；推荐：日本西日本渠道</div><div class=\"co-r\">官网：<a class=\"co-site\" href=\"https://www.edion.com\" target=\"_blank\" rel=\"noopener\">🌐 https://www.edion.com</a></div></div>\n      "
        }
      ]
    },
    {
      "title": "Day 11 · 海外企业推荐（采购中国消费电子）",
      "tag": "第11天 · 中小 5 / 头部 0",
      "blocks": [
        {
          "h": "💡 今日怎么用这笔清单",
          "body": "① 在 Google / LinkedIn 搜企业名 + sourcing / procurement / purchasing manager，找采购负责人；② 用「阿里巴巴国际站」「中国制造网」对照其采购品类，反向以这些买家为目标做开发；③ 参加「香港电子展」「广交会」「Global Sources」定向约访；④ 用海关数据 / ImportGenius 查其中国进口记录，锁定具体 SKU；⑤ 开发信：Hi [Name], we supply [品类] to EU/US retailers，附 catalog 与合规证书（CE / FCC / RoHS）。"
        },
        {
          "h": "今日推荐 · 5 家（中小企业为主，含行业标杆）",
          "body": "\n        <div class=\"co\"><div class=\"co-h\"><b>Nojima</b><span class=\"co-t sm\">中小</span></div><div class=\"co-r\"><b>速写：</b>日本家电与手机连锁；1980 ｜ 总部：日本·横滨</div><div class=\"co-r\"><b>企业简介：</b>日本电子连锁</div><div class=\"co-r\"><b>采购画像：</b>采购 全品类；渠道 对华　招牌：家电、手机、IT</div><div class=\"co-r found\"><b>📜 发家史：</b>1980 年，Nojima 创立于日本，做电子零售，从神奈川的地方门店起步，靠并购扩张。它是关东的连锁。</div><div class=\"co-r turn\"><b>🔑 转折点：</b>它以并购扩张加关东布局，成为日本主流电子连锁之一，体现日本区域连锁并购整合的生存之道。</div><div class=\"co-r look\"><b>💡 看点：</b>日本渠道补充；推荐：日本渠道</div><div class=\"co-r\">官网：<a class=\"co-site\" href=\"https://www.nojima.co.jp\" target=\"_blank\" rel=\"noopener\">🌐 https://www.nojima.co.jp</a></div></div>\n        <div class=\"co\"><div class=\"co-h\"><b>Lotte Hi-Mart</b><span class=\"co-t sm\">中小</span></div><div class=\"co-r\"><b>速写：</b>韩国最大的家电专营连锁（乐天系）；1993 ｜ 总部：韩国·首尔</div><div class=\"co-r\"><b>企业简介：</b>韩国电子连锁</div><div class=\"co-r\"><b>采购画像：</b>采购 全品类（含中国 OEM）；渠道 直接对华　招牌：家电、IT、手机，韩国全覆盖</div><div class=\"co-r found\"><b>📜 发家史：</b>1993 年，Lotte Hi-Mart 创立于韩国，做家电连锁，从家电专卖起步，是韩国家电大卖场模式的开创者之一。它是韩国的家电大卖场。</div><div class=\"co-r turn\"><b>🔑 转折点：</b>2012 年被乐天 Lotte 收购，借助集团生态（百货、食品、金融）成韩国家电渠道龙头，是集团协同的胜利。</div><div class=\"co-r look\"><b>💡 看点：</b>韩国市场核心渠道，研究韩系品牌竞争；推荐：韩国渠道与韩标</div><div class=\"co-r\">官网：<a class=\"co-site\" href=\"https://www.hmart.co.kr\" target=\"_blank\" rel=\"noopener\">🌐 https://www.hmart.co.kr</a></div></div>\n        <div class=\"co\"><div class=\"co-h\"><b>Electromart</b><span class=\"co-t sm\">中小</span></div><div class=\"co-r\"><b>速写：</b>韩国电子连锁；1997 ｜ 总部：韩国·首尔</div><div class=\"co-r\"><b>企业简介：</b>韩国电子连锁</div><div class=\"co-r\"><b>采购画像：</b>采购 全品类；渠道 对华　招牌：IT、家电、手机</div><div class=\"co-r found\"><b>📜 发家史：</b>1997 年，Electromart 创立于韩国，做电子连锁，从新世界 Shinsegae 体系支撑的门店起步。它背靠百货巨头。</div><div class=\"co-r turn\"><b>🔑 转折点：</b>它以新世界集团（百货巨头）体系支撑，成为韩国主流 3C 渠道，与 Hi-Mart 形成双雄竞争。</div><div class=\"co-r look\"><b>💡 看点：</b>韩国渠道补充；推荐：韩国渠道</div><div class=\"co-r\">官网：<a class=\"co-site\" href=\"https://www.emart.com\" target=\"_blank\" rel=\"noopener\">🌐 https://www.emart.com</a></div></div>\n        <div class=\"co\"><div class=\"co-h\"><b>Croma</b><span class=\"co-t sm\">中小</span></div><div class=\"co-r\"><b>速写：</b>印度高端电子与家电连锁（塔塔系）；2006 ｜ 总部：印度·孟买</div><div class=\"co-r\"><b>企业简介：</b>印度电子连锁（Tata）</div><div class=\"co-r\"><b>采购画像：</b>采购 全品类；渠道 对华 + 印度组装　招牌：IT、家电、手机，门店加线上</div><div class=\"co-r found\"><b>📜 发家史：</b>2006 年，Croma 由 Tata 在印度创立，做电子连锁，从塔塔零售体系下的门店起步，背靠印度最大财阀之一。它出身财阀。</div><div class=\"co-r turn\"><b>🔑 转折点：</b>它借塔塔零售体系做全渠道，是印度重要电子零售商，靠财阀信用加线下体验对抗亚马逊与 Flipkart。</div><div class=\"co-r look\"><b>💡 看点：</b>印度高端渠道，研究印度制造与关税；推荐：印度市场与 PLI 政策</div><div class=\"co-r\">官网：<a class=\"co-site\" href=\"https://www.croma.com\" target=\"_blank\" rel=\"noopener\">🌐 https://www.croma.com</a></div></div>\n        <div class=\"co\"><div class=\"co-h\"><b>Reliance Digital</b><span class=\"co-t sm\">中小</span></div><div class=\"co-r\"><b>速写：</b>印度信实集团（Jio）旗下电子零售；2007 ｜ 总部：印度·孟买</div><div class=\"co-r\"><b>企业简介：</b>印度电子零售</div><div class=\"co-r\"><b>采购画像：</b>采购 全品类；渠道 对华　招牌：全品类电子家电，门店加线上</div><div class=\"co-r found\"><b>📜 发家史：</b>2007 年，Reliance Digital 由信实 Reliance 在印度创立，从信实零售旗下的电子门店起步，背靠印度最大民营企业。</div><div class=\"co-r turn\"><b>🔑 转折点：</b>它背靠信实零售规模与 Jio 生态（电信加数字），快速铺成印度大渠道，把电信用户转化为电子产品买家，是生态协同的印度样本。</div><div class=\"co-r look\"><b>💡 看点：</b>印度最大财团渠道，体量即门槛；推荐：印度大渠道</div><div class=\"co-r\">官网：<a class=\"co-site\" href=\"https://www.reliancedigital.in\" target=\"_blank\" rel=\"noopener\">🌐 https://www.reliancedigital.in</a></div></div>\n      "
        }
      ]
    },
    {
      "title": "Day 12 · 海外企业推荐（采购中国消费电子）",
      "tag": "第12天 · 中小 5 / 头部 0",
      "blocks": [
        {
          "h": "💡 今日怎么用这笔清单",
          "body": "① 在 Google / LinkedIn 搜企业名 + sourcing / procurement / purchasing manager，找采购负责人；② 用「阿里巴巴国际站」「中国制造网」对照其采购品类，反向以这些买家为目标做开发；③ 参加「香港电子展」「广交会」「Global Sources」定向约访；④ 用海关数据 / ImportGenius 查其中国进口记录，锁定具体 SKU；⑤ 开发信：Hi [Name], we supply [品类] to EU/US retailers，附 catalog 与合规证书（CE / FCC / RoHS）。"
        },
        {
          "h": "今日推荐 · 5 家（中小企业为主，含行业标杆）",
          "body": "\n        <div class=\"co\"><div class=\"co-h\"><b>Vijay Sales</b><span class=\"co-t sm\">中小</span></div><div class=\"co-r\"><b>速写：</b>印度西部电子连锁；1980 ｜ 总部：印度·孟买</div><div class=\"co-r\"><b>企业简介：</b>印度电子连锁</div><div class=\"co-r\"><b>采购画像：</b>采购 家电/电子；渠道 对华　招牌：家电、IT、手机</div><div class=\"co-r found\"><b>📜 发家史：</b>1980 年，Vijay Sales 创立于孟买，做电子连锁，从家族电器店起步，靠口碑在西部生长。它是孟买的老牌电器店。</div><div class=\"co-r turn\"><b>🔑 转折点：</b>它以区域低价连锁，成为印度西部的家电电子渠道，在 Croma、Reliance 夹击中以本地低价守住份额。</div><div class=\"co-r look\"><b>💡 看点：</b>印度区域强势渠道；推荐：印度区域渠道</div><div class=\"co-r\">官网：<a class=\"co-site\" href=\"https://www.vijaysales.com\" target=\"_blank\" rel=\"noopener\">🌐 https://www.vijaysales.com</a></div></div>\n        <div class=\"co\"><div class=\"co-h\"><b>Poorvika</b><span class=\"co-t sm\">中小</span></div><div class=\"co-r\"><b>速写：</b>印度南部手机与电子连锁；2004 ｜ 总部：印度·金奈</div><div class=\"co-r\"><b>企业简介：</b>印度手机电子连锁</div><div class=\"co-r\"><b>采购画像：</b>采购 手机/配件；渠道 对华　招牌：智能手机、配件，南印强</div><div class=\"co-r found\"><b>📜 发家史：</b>2004 年，Poorvika 创立于金奈，做手机电子连锁，从南印手机门店起步，踩中印度功能机换智能机浪潮。它是南印的手机连锁。</div><div class=\"co-r turn\"><b>🔑 转折点：</b>它以手机品类深耕，成为印度南方重要手机渠道，是手机专卖加分期在南印的代表。</div><div class=\"co-r look\"><b>💡 看点：</b>印度区域渠道，看南印市场；推荐：印度手机渠道</div><div class=\"co-r\">官网：<a class=\"co-site\" href=\"https://www.poorvika.com\" target=\"_blank\" rel=\"noopener\">🌐 https://www.poorvika.com</a></div></div>\n        <div class=\"co\"><div class=\"co-h\"><b>Senheng</b><span class=\"co-t sm\">中小</span></div><div class=\"co-r\"><b>速写：</b>马来西亚电子连锁（伟力/哪吒）；1989 ｜ 总部：马来西亚·吉隆坡</div><div class=\"co-r\"><b>企业简介：</b>马来西亚电子连锁</div><div class=\"co-r\"><b>采购画像：</b>采购 全品类；渠道 对华 + 港展　招牌：家电、手机、IT，大马覆盖</div><div class=\"co-r found\"><b>📜 发家史：</b>1989 年，Senheng 创立于吉隆坡，做电子连锁，从马来家族电器店起步，靠会员体系生长。它是马来西亚的电器连锁。</div><div class=\"co-r turn\"><b>🔑 转折点：</b>它以会员 App 加多品类，成为马来西亚主流电子渠道，是会员制加全品类的东南亚样本。</div><div class=\"co-r look\"><b>💡 看点：</b>东南亚渠道样本，研究东盟市场；推荐：东南亚渠道</div><div class=\"co-r\">官网：<a class=\"co-site\" href=\"https://www.senheng.com.my\" target=\"_blank\" rel=\"noopener\">🌐 https://www.senheng.com.my</a></div></div>\n        <div class=\"co\"><div class=\"co-h\"><b>Power Buy</b><span class=\"co-t sm\">中小</span></div><div class=\"co-r\"><b>速写：</b>泰国电子零售商（中央零售系）；1993 ｜ 总部：泰国·曼谷</div><div class=\"co-r\"><b>企业简介：</b>泰国电子连锁</div><div class=\"co-r\"><b>采购画像：</b>采购 全品类；渠道 对华　招牌：家电、IT、手机</div><div class=\"co-r found\"><b>📜 发家史：</b>1993 年，Power Buy 创立于曼谷，属 Central 集团，做电子连锁，从泰国中产门店起步。它背靠 Central 百货。</div><div class=\"co-r turn\"><b>🔑 转折点：</b>它以泰国中产定位，成为当地电子连锁之一，借 Central 百货客流做店中店加独立店组合。</div><div class=\"co-r look\"><b>💡 看点：</b>泰国市场入口；推荐：泰国渠道</div><div class=\"co-r\">官网：<a class=\"co-site\" href=\"https://www.powerbuy.co.th\" target=\"_blank\" rel=\"noopener\">🌐 https://www.powerbuy.co.th</a></div></div>\n        <div class=\"co\"><div class=\"co-h\"><b>Banana</b><span class=\"co-t sm\">中小</span></div><div class=\"co-r\"><b>速写：</b>泰国/东盟 IT 零售连锁；1994 ｜ 总部：泰国·曼谷</div><div class=\"co-r\"><b>企业简介：</b>泰国 IT 连锁</div><div class=\"co-r\"><b>采购画像：</b>采购 PC/外设；渠道 对华　招牌：IT、手机、配件</div><div class=\"co-r found\"><b>📜 发家史：</b>1994 年，Banana 创立于曼谷，做 IT 连锁，从 PC/外设门店起步，踩中泰国 PC 普及期。它是泰国的 IT 店。</div><div class=\"co-r turn\"><b>🔑 转折点：</b>它以 PC/外设门店，成为泰国 IT 零售渠道，在消费电子与 IT 分野中占据攒机/外设市场。</div><div class=\"co-r look\"><b>💡 看点：</b>东盟 IT 渠道；推荐：泰国 IT 渠道</div><div class=\"co-r\">官网：<a class=\"co-site\" href=\"https://www.banana.it\" target=\"_blank\" rel=\"noopener\">🌐 https://www.banana.it</a></div></div>\n      "
        }
      ]
    },
    {
      "title": "Day 13 · 海外企业推荐（采购中国消费电子）",
      "tag": "第13天 · 中小 5 / 头部 0",
      "blocks": [
        {
          "h": "💡 今日怎么用这笔清单",
          "body": "① 在 Google / LinkedIn 搜企业名 + sourcing / procurement / purchasing manager，找采购负责人；② 用「阿里巴巴国际站」「中国制造网」对照其采购品类，反向以这些买家为目标做开发；③ 参加「香港电子展」「广交会」「Global Sources」定向约访；④ 用海关数据 / ImportGenius 查其中国进口记录，锁定具体 SKU；⑤ 开发信：Hi [Name], we supply [品类] to EU/US retailers，附 catalog 与合规证书（CE / FCC / RoHS）。"
        },
        {
          "h": "今日推荐 · 5 家（中小企业为主，含行业标杆）",
          "body": "\n        <div class=\"co\"><div class=\"co-h\"><b>The Gioi Di Dong (MWG)</b><span class=\"co-t sm\">中小</span></div><div class=\"co-r\"><b>速写：</b>越南最大的电子与家电零售集团；2004 ｜ 总部：越南·胡志明</div><div class=\"co-r\"><b>企业简介：</b>越南最大电子零售</div><div class=\"co-r\"><b>采购画像：</b>采购 手机/电子全品类；渠道 对华　招牌：手机、家电、IT，越南全覆盖（Thế Giới Di Động）</div><div class=\"co-r found\"><b>📜 发家史：</b>2004 年，Nguyen Duc Tai 在越南创立 The Gioi Di Dong（移动世界），从手机专卖小店起步，靠极致零售运营（统一话术、强考核）起量。</div><div class=\"co-r turn\"><b>🔑 转折点：</b>它以极致零售运营加 Dien May Xanh 蓝领家电连锁扩张，做成越南第一零售商，并孵化 Bach Hoa Xanh 社区便利店，从卖手机长成越南零售巨无霸。</div><div class=\"co-r look\"><b>💡 看点：</b>越南渠道霸主，研究东盟本土品牌崛起；推荐：越南渠道龙头</div><div class=\"co-r\">官网：<a class=\"co-site\" href=\"https://www.thegioididong.com\" target=\"_blank\" rel=\"noopener\">🌐 https://www.thegioididong.com</a></div></div>\n        <div class=\"co\"><div class=\"co-h\"><b>Nguyen Kim</b><span class=\"co-t sm\">中小</span></div><div class=\"co-r\"><b>速写：</b>越南家电零售连锁；1992 ｜ 总部：越南·胡志明</div><div class=\"co-r\"><b>企业简介：</b>越南电子连锁</div><div class=\"co-r\"><b>采购画像：</b>采购 全品类；渠道 对华　招牌：家电、IT、手机</div><div class=\"co-r found\"><b>📜 发家史：</b>1992 年，Nguyen Kim 创立于越南，做电子连锁，从胡志明市家电门店起步，是越南早期家电卖场之一。它是越南的老牌电器店。</div><div class=\"co-r turn\"><b>🔑 转折点：</b>2015 年，Nguyen Kim 被 MWG 收购，并入越南零售龙头体系，成为 MWG 大家电版图的拼图，体现越南零售的整合潮。</div><div class=\"co-r look\"><b>💡 看点：</b>越南渠道补充；推荐：越南渠道</div><div class=\"co-r\">官网：<a class=\"co-site\" href=\"https://www.nguyenkim.com\" target=\"_blank\" rel=\"noopener\">🌐 https://www.nguyenkim.com</a></div></div>\n        <div class=\"co\"><div class=\"co-h\"><b>Harvey Norman</b><span class=\"co-t sm\">中小</span></div><div class=\"co-r\"><b>速写：</b>澳大利亚/新西兰家居与电子连锁；1982 ｜ 总部：澳大利亚·悉尼</div><div class=\"co-r\"><b>企业简介：</b>澳新家电电子连锁</div><div class=\"co-r\"><b>采购画像：</b>采购 全品类；渠道 直接对华　招牌：家具、家电、IT、bedding</div><div class=\"co-r found\"><b>📜 发家史：</b>1982 年，Gerry Harvey 在澳洲悉尼创立 Harvey Norman，从家具加家电加电脑的混合大卖场起步，靠一店卖全屋的体验。它是澳新的混合大卖场。</div><div class=\"co-r turn\"><b>🔑 转折点：</b>它以 franchise 加自持物业模式（加盟商经营、公司持物业），成为澳新地区家电电子龙头，把重资产门店做成护城河。</div><div class=\"co-r look\"><b>💡 看点：</b>澳新大件加电子混合渠道；推荐：澳新渠道与 RCM 认证</div><div class=\"co-r\">官网：<a class=\"co-site\" href=\"https://www.harveynorman.com.au\" target=\"_blank\" rel=\"noopener\">🌐 https://www.harveynorman.com.au</a></div></div>\n        <div class=\"co\"><div class=\"co-h\"><b>The Good Guys</b><span class=\"co-t sm\">中小</span></div><div class=\"co-r\"><b>速写：</b>澳洲家电与电子连锁（被 JB 收购）；1973 ｜ 总部：澳大利亚</div><div class=\"co-r\"><b>企业简介：</b>澳洲电子连锁（属 JB Hi-Fi）</div><div class=\"co-r\"><b>采购画像：</b>采购 全品类；渠道 对华　招牌：家电、IT</div><div class=\"co-r found\"><b>📜 发家史：</b>1973 年，The Good Guys 创立于澳洲，做电子连锁，从便宜大家电加活泼广告起步，是澳洲国民家电店。它靠便宜大声量起家。</div><div class=\"co-r turn\"><b>🔑 转折点：</b>2016 年，The Good Guys 被 JB Hi-Fi 收购，归入澳新电子零售老大旗下，是澳洲零售整合的标志性一役。</div><div class=\"co-r look\"><b>💡 看点：</b>澳洲渠道，已被 JB Hi-Fi 收入；推荐：澳洲渠道</div><div class=\"co-r\">官网：<a class=\"co-site\" href=\"https://www.thegoodguys.com.au\" target=\"_blank\" rel=\"noopener\">🌐 https://www.thegoodguys.com.au</a></div></div>\n        <div class=\"co\"><div class=\"co-h\"><b>Mighty Ape</b><span class=\"co-t sm\">中小</span></div><div class=\"co-r\"><b>速写：</b>新西兰电商（书籍/IT/游戏）；2000 ｜ 总部：新西兰·奥克兰</div><div class=\"co-r\"><b>企业简介：</b>新西兰电商</div><div class=\"co-r\"><b>采购画像：</b>采购 全品类电子；渠道 对华　招牌：图书、游戏、IT，新西兰为主</div><div class=\"co-r found\"><b>📜 发家史：</b>2000 年，Mighty Ape 创立于新西兰，做电商，从图书/电子线上起家，是新西兰最早一批网店。它是新西兰的早期电商。</div><div class=\"co-r turn\"><b>🔑 转折点：</b>2020 年，Mighty Ape 被 Kogan 收购，并入澳洲电商版图，是新西兰小市场被邻国巨头收编的案例。</div><div class=\"co-r look\"><b>💡 看点：</b>新西兰小市场渠道；推荐：新西兰电商</div><div class=\"co-r\">官网：<a class=\"co-site\" href=\"https://www.mightyape.co.nz\" target=\"_blank\" rel=\"noopener\">🌐 https://www.mightyape.co.nz</a></div></div>\n      "
        }
      ]
    },
    {
      "title": "Day 14 · 海外企业推荐（采购中国消费电子）",
      "tag": "第14天 · 中小 5 / 头部 0",
      "blocks": [
        {
          "h": "💡 今日怎么用这笔清单",
          "body": "① 在 Google / LinkedIn 搜企业名 + sourcing / procurement / purchasing manager，找采购负责人；② 用「阿里巴巴国际站」「中国制造网」对照其采购品类，反向以这些买家为目标做开发；③ 参加「香港电子展」「广交会」「Global Sources」定向约访；④ 用海关数据 / ImportGenius 查其中国进口记录，锁定具体 SKU；⑤ 开发信：Hi [Name], we supply [品类] to EU/US retailers，附 catalog 与合规证书（CE / FCC / RoHS）。"
        },
        {
          "h": "今日推荐 · 5 家（中小企业为主，含行业标杆）",
          "body": "\n        <div class=\"co\"><div class=\"co-h\"><b>PB Tech</b><span class=\"co-t sm\">中小</span></div><div class=\"co-r\"><b>速写：</b>新西兰 IT/电子电商与零售；1993 ｜ 总部：新西兰·奥克兰</div><div class=\"co-r\"><b>企业简介：</b>新西兰 IT 零售商</div><div class=\"co-r\"><b>采购画像：</b>采购 PC/外设；渠道 对华　招牌：电脑、组件、外设</div><div class=\"co-r found\"><b>📜 发家史：</b>1993 年，PB Tech 创立于新西兰，做 IT 零售，从本地 IT 电商/门店起步，服务玩家与中小企业。它是新西兰的 IT 店。</div><div class=\"co-r turn\"><b>🔑 转折点：</b>它以新西兰本地 IT 电商/门店，成为新西兰主要 3C 渠道，靠本地库存加快配送对抗澳洲巨头的跨境渗透。</div><div class=\"co-r look\"><b>💡 看点：</b>新西兰 IT 渠道标杆；推荐：新西兰 IT 渠道</div><div class=\"co-r\">官网：<a class=\"co-site\" href=\"https://www.pbtech.co.nz\" target=\"_blank\" rel=\"noopener\">🌐 https://www.pbtech.co.nz</a></div></div>\n        <div class=\"co\"><div class=\"co-h\"><b>Scorptec</b><span class=\"co-t sm\">中小</span></div><div class=\"co-r\"><b>速写：</b>澳大利亚 IT 硬件电商；1999 ｜ 总部：澳大利亚·墨尔本</div><div class=\"co-r\"><b>企业简介：</b>澳洲 IT 电商</div><div class=\"co-r\"><b>采购画像：</b>采购 组件/外设；渠道 对华　招牌：电脑、组件、外设</div><div class=\"co-r found\"><b>📜 发家史：</b>1999 年，Scorptec 创立于澳洲墨尔本，做 IT 电商，从硬件玩法加线上起步，服务 DIY 玩家。它是澳洲的极客硬件店。</div><div class=\"co-r turn\"><b>🔑 转折点：</b>它以硬件玩法加线上，成为澳洲 DIY 配件电商，是澳洲极客硬件市场的一极。</div><div class=\"co-r look\"><b>💡 看点：</b>澳洲 DIY 硬件渠道；推荐：澳洲硬件电商</div><div class=\"co-r\">官网：<a class=\"co-site\" href=\"https://www.scorptec.com.au\" target=\"_blank\" rel=\"noopener\">🌐 https://www.scorptec.com.au</a></div></div>\n        <div class=\"co\"><div class=\"co-h\"><b>MSY</b><span class=\"co-t sm\">中小</span></div><div class=\"co-r\"><b>速写：</b>澳大利亚低价 IT 配件零售商；1996 ｜ 总部：澳大利亚·墨尔本</div><div class=\"co-r\"><b>企业简介：</b>澳洲 IT 零售商</div><div class=\"co-r\"><b>采购画像：</b>采购 组件/外设；渠道 对华　招牌：电脑组件、外设，极致低价</div><div class=\"co-r found\"><b>📜 发家史：</b>1996 年，MSY 创立于澳洲，做 IT 零售，从极致低价硬件起步，靠薄利多销在玩家圈出名。它是澳洲的低价 PC 店。</div><div class=\"co-r turn\"><b>🔑 转折点：</b>它以极致低价硬件，成为澳洲预算型 PC 配件渠道，但低价加槽点服务也成双刃剑，在电商冲击下式微。</div><div class=\"co-r look\"><b>💡 看点：</b>价格屠夫模式，研究澳洲预算型买家与口碑双刃剑；推荐：澳洲硬件零售</div><div class=\"co-r\">官网：<a class=\"co-site\" href=\"https://www.msy.com.au\" target=\"_blank\" rel=\"noopener\">🌐 https://www.msy.com.au</a></div></div>\n        <div class=\"co\"><div class=\"co-h\"><b>Computer Alliance</b><span class=\"co-t sm\">中小</span></div><div class=\"co-r\"><b>速写：</b>澳大利亚昆士兰 IT 零售商；1996 ｜ 总部：澳大利亚·布里斯班</div><div class=\"co-r\"><b>企业简介：</b>澳洲 IT 零售商</div><div class=\"co-r\"><b>采购画像：</b>采购 PC/外设；渠道 对华　招牌：电脑、组件、维修</div><div class=\"co-r found\"><b>📜 发家史：</b>1996 年，Computer Alliance 创立于布里斯班，做 IT 零售，从昆士兰本地门店起步，服务区域玩家。它是昆士兰的本地店。</div><div class=\"co-r turn\"><b>🔑 转折点：</b>它以区域 IT 门店，服务昆士兰市场，是澳洲各州本地 IT 店生态的缩影。</div><div class=\"co-r look\"><b>💡 看点：</b>澳洲区域 IT 渠道；推荐：澳洲区域 IT 渠道</div><div class=\"co-r\">官网：<a class=\"co-site\" href=\"https://www.computeralliance.com.au\" target=\"_blank\" rel=\"noopener\">🌐 https://www.computeralliance.com.au</a></div></div>\n        <div class=\"co\"><div class=\"co-h\"><b>JW Computers</b><span class=\"co-t sm\">中小</span></div><div class=\"co-r\"><b>速写：</b>澳大利亚 IT 零售商；1993 ｜ 总部：澳大利亚·悉尼</div><div class=\"co-r\"><b>企业简介：</b>澳洲 IT 零售商</div><div class=\"co-r\"><b>采购画像：</b>采购 PC/外设；渠道 对华　招牌：电脑、组件、外设</div><div class=\"co-r found\"><b>📜 发家史：</b>1993 年，JW Computers 创立于悉尼，做 IT 零售，从悉尼本地门店起步，是澳洲老牌 PC 卖家。它是悉尼的老牌电脑店。</div><div class=\"co-r turn\"><b>🔑 转折点：</b>它以悉尼本地 IT 门店，成为澳洲区域 3C 渠道，体现各州本地店加全国电商并存的澳洲零售格局。</div><div class=\"co-r look\"><b>💡 看点：</b>澳洲 IT 渠道补充；推荐：澳洲区域 IT 渠道</div><div class=\"co-r\">官网：<a class=\"co-site\" href=\"https://www.jw.com.au\" target=\"_blank\" rel=\"noopener\">🌐 https://www.jw.com.au</a></div></div>\n      "
        }
      ]
    }
  ],
  social: [
  {
    "title": "抖音内容推荐 · 第 1 周｜街头采访 / 路人问卷",
    "tag": "第1周 · 每周一篇",
    "blocks": [
      {
        "h": "📊 我的抖音账号分析（153146893）",
        "body": "<div class=\"co\"><div class=\"co-h\"><b>抖音账号 · 153146893</b><span class=\"co-t hd\">待同步</span></div><div class=\"co-r\"><b>粉丝数：</b>【待补充，发我创作者后台截图】</div><div class=\"co-r\"><b>获赞总数：</b>【待补充】</div><div class=\"co-r\"><b>作品数：</b>【待补充】</div><div class=\"co-r\"><b>近30天播放：</b>【待补充】</div><div class=\"co-r\"><b>近30天涨粉：</b>【待补充】</div><div class=\"co-r\"><b>爆款方向：</b>【待补充：哪类视频数据最好】</div><div class=\"co-r look\"><b>💡 同步方式：</b>把抖音「创作者后台」的账号概览 / 近30天数据截图发给我，我整理成真实分析卡片并更新到这里（含涨粉曲线、爆款拆解、内容建议）。</div></div>"
      },
      {
        "h": "🔥 本周推荐：街头采访 / 路人问卷",
        "body": "<p>街头采访天然带「冲突感 + 代入感」，容易引发评论区站队，是冷启动期性价比最高的涨粉形式之一。</p><p class=\"ct-h\">🎬 拍摄脚本（60s）</p><div class=\"ct-body ph\">① 0-3s 抛反差问题（如「在深圳，月薪多少才敢点一杯冰美式？」）<br/>② 3-40s 随机采访 3-5 人，保留真实反应与原声<br/>③ 40-55s 收尾金句 + 引导关注<br/>④ 55-60s 引导评论区投票</div><p class=\"ct-h\">✍️ 标题 / 文案示例</p><p>「在深圳打拼的你，最想对三年前的自己说什么？」 #深圳 #街头采访 #城市故事</p><p class=\"ct-h\">🏷️ 话题标签</p><p>#深圳 #街头采访 #城市生活 #共鸣 #vlog</p>"
      },
      {
        "h": "✅ 本周行动清单",
        "body": "<p>① 今天定选题并写 3 条备选标题；② 拍 1 条粗剪版，先看完播率；③ 结合你在深圳、爱辣、爱咖啡的调性，把「城市生活 / 美食探店 / 打工日常」揉进去更真实；④ 发布后 2 小时内回复前 20 条评论，撬动互动权重；⑤ 复盘：哪一句/哪个画面停留最久，下周复用。</p>"
      }
    ]
  },
  {
    "title": "抖音内容推荐 · 第 2 周｜知识干货拆解",
    "tag": "第2周 · 每周一篇",
    "blocks": [
      {
        "h": "📊 我的抖音账号分析（153146893）",
        "body": "<div class=\"co\"><div class=\"co-h\"><b>抖音账号 · 153146893</b><span class=\"co-t hd\">待同步</span></div><div class=\"co-r\"><b>粉丝数：</b>【待补充，发我创作者后台截图】</div><div class=\"co-r\"><b>获赞总数：</b>【待补充】</div><div class=\"co-r\"><b>作品数：</b>【待补充】</div><div class=\"co-r\"><b>近30天播放：</b>【待补充】</div><div class=\"co-r\"><b>近30天涨粉：</b>【待补充】</div><div class=\"co-r\"><b>爆款方向：</b>【待补充：哪类视频数据最好】</div><div class=\"co-r look\"><b>💡 同步方式：</b>把抖音「创作者后台」的账号概览 / 近30天数据截图发给我，我整理成真实分析卡片并更新到这里（含涨粉曲线、爆款拆解、内容建议）。</div></div>"
      },
      {
        "h": "🔥 本周推荐：知识干货拆解",
        "body": "<p>把一个复杂概念拆成「3 步 / 3 个误区」，是建立专业人设、拿到搜索流量的稳妥打法。</p><p class=\"ct-h\">🎬 拍摄脚本（60s）</p><div class=\"ct-body ph\">① 0-3s 抛痛点（「90% 的人都搞错了一点」）<br/>② 3-35s 用类比讲清概念，配字幕卡点<br/>③ 35-50s 给可抄作业的行动点<br/>④ 50-60s 引导收藏 + 关注</div><p class=\"ct-h\">✍️ 标题 / 文案示例</p><p>「3 分钟讲清一件事：为什么你刷到的短视频越来越『懂你』？」 #干货 #科普 #涨知识</p><p class=\"ct-h\">🏷️ 话题标签</p><p>#知识科普 #干货分享 #职场 #自我提升 #短视频</p>"
      },
      {
        "h": "✅ 本周行动清单",
        "body": "<p>① 今天定选题并写 3 条备选标题；② 拍 1 条粗剪版，先看完播率；③ 结合你在深圳、爱辣、爱咖啡的调性，把「城市生活 / 美食探店 / 打工日常」揉进去更真实；④ 发布后 2 小时内回复前 20 条评论，撬动互动权重；⑤ 复盘：哪一句/哪个画面停留最久，下周复用。</p>"
      }
    ]
  },
  {
    "title": "抖音内容推荐 · 第 3 周｜幕后花絮 / 工作日常",
    "tag": "第3周 · 每周一篇",
    "blocks": [
      {
        "h": "📊 我的抖音账号分析（153146893）",
        "body": "<div class=\"co\"><div class=\"co-h\"><b>抖音账号 · 153146893</b><span class=\"co-t hd\">待同步</span></div><div class=\"co-r\"><b>粉丝数：</b>【待补充，发我创作者后台截图】</div><div class=\"co-r\"><b>获赞总数：</b>【待补充】</div><div class=\"co-r\"><b>作品数：</b>【待补充】</div><div class=\"co-r\"><b>近30天播放：</b>【待补充】</div><div class=\"co-r\"><b>近30天涨粉：</b>【待补充】</div><div class=\"co-r\"><b>爆款方向：</b>【待补充：哪类视频数据最好】</div><div class=\"co-r look\"><b>💡 同步方式：</b>把抖音「创作者后台」的账号概览 / 近30天数据截图发给我，我整理成真实分析卡片并更新到这里（含涨粉曲线、爆款拆解、内容建议）。</div></div>"
      },
      {
        "h": "🔥 本周推荐：幕后花絮 / 工作日常",
        "body": "<p>「真实感」是算法偏爱的人设资产。展示过程比展示结果更容易让人记住你这个人。</p><p class=\"ct-h\">🎬 拍摄脚本（60s）</p><div class=\"ct-body ph\">① 0-3s 一个反差开场（乱糟糟的桌面 / 一堆待办）<br/>② 3-40s 快剪一天关键节点，保留环境音<br/>③ 40-55s 一句真心话收尾<br/>④ 55-60s 引导「你的一天怎么过？」</div><p class=\"ct-h\">✍️ 标题 / 文案示例</p><p>「深圳打工人的真实一天：咖啡续命，辣椒下饭」 #vlog #幕后 #打工人</p><p class=\"ct-h\">🏷️ 话题标签</p><p>#深圳生活 #打工日常 #vlog #真实记录 #咖啡</p>"
      },
      {
        "h": "✅ 本周行动清单",
        "body": "<p>① 今天定选题并写 3 条备选标题；② 拍 1 条粗剪版，先看完播率；③ 结合你在深圳、爱辣、爱咖啡的调性，把「城市生活 / 美食探店 / 打工日常」揉进去更真实；④ 发布后 2 小时内回复前 20 条评论，撬动互动权重；⑤ 复盘：哪一句/哪个画面停留最久，下周复用。</p>"
      }
    ]
  },
  {
    "title": "抖音内容推荐 · 第 4 周｜热点跟拍 / 挑战赛",
    "tag": "第4周 · 每周一篇",
    "blocks": [
      {
        "h": "📊 我的抖音账号分析（153146893）",
        "body": "<div class=\"co\"><div class=\"co-h\"><b>抖音账号 · 153146893</b><span class=\"co-t hd\">待同步</span></div><div class=\"co-r\"><b>粉丝数：</b>【待补充，发我创作者后台截图】</div><div class=\"co-r\"><b>获赞总数：</b>【待补充】</div><div class=\"co-r\"><b>作品数：</b>【待补充】</div><div class=\"co-r\"><b>近30天播放：</b>【待补充】</div><div class=\"co-r\"><b>近30天涨粉：</b>【待补充】</div><div class=\"co-r\"><b>爆款方向：</b>【待补充：哪类视频数据最好】</div><div class=\"co-r look\"><b>💡 同步方式：</b>把抖音「创作者后台」的账号概览 / 近30天数据截图发给我，我整理成真实分析卡片并更新到这里（含涨粉曲线、爆款拆解、内容建议）。</div></div>"
      },
      {
        "h": "🔥 本周推荐：热点跟拍 / 挑战赛",
        "body": "<p>跟热点拿的是「搜索 + 推荐」双流量，关键是快（24h 内）且带自己的角度，不硬蹭。</p><p class=\"ct-h\">🎬 拍摄脚本（60s）</p><div class=\"ct-body ph\">① 0-3s 直接上热点画面 / 原声<br/>② 3-30s 给你的独特解读或翻拍<br/>③ 30-50s 落到你的领域（美食 / 城市 / 职场）<br/>④ 50-60s 引导参与挑战</div><p class=\"ct-h\">✍️ 标题 / 文案示例</p><p>「挑战 X  Day1：用深圳的辣味打开它」 #热点 #挑战赛 #跟拍</p><p class=\"ct-h\">🏷️ 话题标签</p><p>#热点 #挑战 #趋势 #参与挑战 #流量</p>"
      },
      {
        "h": "✅ 本周行动清单",
        "body": "<p>① 今天定选题并写 3 条备选标题；② 拍 1 条粗剪版，先看完播率；③ 结合你在深圳、爱辣、爱咖啡的调性，把「城市生活 / 美食探店 / 打工日常」揉进去更真实；④ 发布后 2 小时内回复前 20 条评论，撬动互动权重；⑤ 复盘：哪一句/哪个画面停留最久，下周复用。</p>"
      }
    ]
  },
  {
    "title": "抖音内容推荐 · 第 5 周｜好物种草 / 开箱",
    "tag": "第5周 · 每周一篇",
    "blocks": [
      {
        "h": "📊 我的抖音账号分析（153146893）",
        "body": "<div class=\"co\"><div class=\"co-h\"><b>抖音账号 · 153146893</b><span class=\"co-t hd\">待同步</span></div><div class=\"co-r\"><b>粉丝数：</b>【待补充，发我创作者后台截图】</div><div class=\"co-r\"><b>获赞总数：</b>【待补充】</div><div class=\"co-r\"><b>作品数：</b>【待补充】</div><div class=\"co-r\"><b>近30天播放：</b>【待补充】</div><div class=\"co-r\"><b>近30天涨粉：</b>【待补充】</div><div class=\"co-r\"><b>爆款方向：</b>【待补充：哪类视频数据最好】</div><div class=\"co-r look\"><b>💡 同步方式：</b>把抖音「创作者后台」的账号概览 / 近30天数据截图发给我，我整理成真实分析卡片并更新到这里（含涨粉曲线、爆款拆解、内容建议）。</div></div>"
      },
      {
        "h": "🔥 本周推荐：好物种草 / 开箱",
        "body": "<p>种草类内容离转化最近。结构清晰（痛点-展示-对比-下单理由）转化率最高。</p><p class=\"ct-h\">🎬 拍摄脚本（60s）</p><div class=\"ct-body ph\">① 0-3s 抛痛点（「你是不是也…」）<br/>② 3-35s 开箱 + 真实试用，突出 1 个记忆点<br/>③ 35-50s 和替代品对比<br/>④ 50-60s 给明确购买理由 / 链接</div><p class=\"ct-h\">✍️ 标题 / 文案示例</p><p>「深圳出差党必备：这瓶冰美式替我续命」 #好物 #开箱 #种草</p><p class=\"ct-h\">🏷️ 话题标签</p><p>#好物种草 #开箱 #测评 #生活好物 #带货</p>"
      },
      {
        "h": "✅ 本周行动清单",
        "body": "<p>① 今天定选题并写 3 条备选标题；② 拍 1 条粗剪版，先看完播率；③ 结合你在深圳、爱辣、爱咖啡的调性，把「城市生活 / 美食探店 / 打工日常」揉进去更真实；④ 发布后 2 小时内回复前 20 条评论，撬动互动权重；⑤ 复盘：哪一句/哪个画面停留最久，下周复用。</p>"
      }
    ]
  },
  {
    "title": "抖音内容推荐 · 第 6 周｜评论区选题 / 用户故事",
    "tag": "第6周 · 每周一篇",
    "blocks": [
      {
        "h": "📊 我的抖音账号分析（153146893）",
        "body": "<div class=\"co\"><div class=\"co-h\"><b>抖音账号 · 153146893</b><span class=\"co-t hd\">待同步</span></div><div class=\"co-r\"><b>粉丝数：</b>【待补充，发我创作者后台截图】</div><div class=\"co-r\"><b>获赞总数：</b>【待补充】</div><div class=\"co-r\"><b>作品数：</b>【待补充】</div><div class=\"co-r\"><b>近30天播放：</b>【待补充】</div><div class=\"co-r\"><b>近30天涨粉：</b>【待补充】</div><div class=\"co-r\"><b>爆款方向：</b>【待补充：哪类视频数据最好】</div><div class=\"co-r look\"><b>💡 同步方式：</b>把抖音「创作者后台」的账号概览 / 近30天数据截图发给我，我整理成真实分析卡片并更新到这里（含涨粉曲线、爆款拆解、内容建议）。</div></div>"
      },
      {
        "h": "🔥 本周推荐：评论区选题 / 用户故事",
        "body": "<p>把粉丝的评论变成下一条视频，是低成本、高互动的选题永动机，也能显著提升粉丝粘性。</p><p class=\"ct-h\">🎬 拍摄脚本（60s）</p><div class=\"ct-body ph\">① 0-3s 念一条高赞评论开场<br/>② 3-40s 认真回应 / 延展成故事<br/>③ 40-55s 抛新话题反邀评论<br/>④ 55-60s 点名感谢粉丝</div><p class=\"ct-h\">✍️ 标题 / 文案示例</p><p>「评论区点名：那位说在深圳吃不到辣的兄弟，这期给你」 #互动 #用户故事</p><p class=\"ct-h\">🏷️ 话题标签</p><p>#评论区 #粉丝互动 #用户故事 #社群 #陪伴</p>"
      },
      {
        "h": "✅ 本周行动清单",
        "body": "<p>① 今天定选题并写 3 条备选标题；② 拍 1 条粗剪版，先看完播率；③ 结合你在深圳、爱辣、爱咖啡的调性，把「城市生活 / 美食探店 / 打工日常」揉进去更真实；④ 发布后 2 小时内回复前 20 条评论，撬动互动权重；⑤ 复盘：哪一句/哪个画面停留最久，下周复用。</p>"
      }
    ]
  },
  {
    "title": "抖音内容推荐 · 第 7 周｜数据复盘 / 方法论",
    "tag": "第7周 · 每周一篇",
    "blocks": [
      {
        "h": "📊 我的抖音账号分析（153146893）",
        "body": "<div class=\"co\"><div class=\"co-h\"><b>抖音账号 · 153146893</b><span class=\"co-t hd\">待同步</span></div><div class=\"co-r\"><b>粉丝数：</b>【待补充，发我创作者后台截图】</div><div class=\"co-r\"><b>获赞总数：</b>【待补充】</div><div class=\"co-r\"><b>作品数：</b>【待补充】</div><div class=\"co-r\"><b>近30天播放：</b>【待补充】</div><div class=\"co-r\"><b>近30天涨粉：</b>【待补充】</div><div class=\"co-r\"><b>爆款方向：</b>【待补充：哪类视频数据最好】</div><div class=\"co-r look\"><b>💡 同步方式：</b>把抖音「创作者后台」的账号概览 / 近30天数据截图发给我，我整理成真实分析卡片并更新到这里（含涨粉曲线、爆款拆解、内容建议）。</div></div>"
      },
      {
        "h": "🔥 本周推荐：数据复盘 / 方法论",
        "body": "<p>定期把「哪类内容跑得好」讲出来，既能吸同行粉，也让算法认定你是垂类优质创作者。</p><p class=\"ct-h\">🎬 拍摄脚本（60s）</p><div class=\"ct-body ph\">① 0-3s 亮一张数据图（播放 / 涨粉）<br/>② 3-35s 拆 2 条爆款的共同点<br/>③ 35-50s 给可复用的方法论<br/>④ 50-60s 引导「你下期想看我测什么？」</div><p class=\"ct-h\">✍️ 标题 / 文案示例</p><p>「做抖音 30 天，我踩过的 3 个坑（附数据）」 #复盘 #方法论 #创作者</p><p class=\"ct-h\">🏷️ 话题标签</p><p>#数据复盘 #方法论 #创作者 #成长 #干货</p>"
      },
      {
        "h": "✅ 本周行动清单",
        "body": "<p>① 今天定选题并写 3 条备选标题；② 拍 1 条粗剪版，先看完播率；③ 结合你在深圳、爱辣、爱咖啡的调性，把「城市生活 / 美食探店 / 打工日常」揉进去更真实；④ 发布后 2 小时内回复前 20 条评论，撬动互动权重；⑤ 复盘：哪一句/哪个画面停留最久，下周复用。</p>"
      }
    ]
  }
]
};
