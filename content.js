/* =========================================================
   旺仔的工作台 · 各模块"每日内容"数据
   每条目结构：{ title, tag, blocks:[ {h, body} ] }
   body 支持 HTML（<p> <ul><li> <div class="ph"> 等）
   英语/旅行为英文；其余为中文。内容按"使用天数"选取，每日更新。
   ========================================================= */
const CONTENT = {

  /* ===================== 1. 英语学习 ===================== */
  english: [
    {
      title:'Lesson 1 · 机场出发', tag:'Lv.1 入门 · 旅行生存 · 60min',
      blocks:[
    {h:'📱 练起来（资源+今日可做）', body:'<p>① App「多邻国 Duolingo」每天 10 分钟保持语感；② 口语用「HelloTalk」找母语者互练；③ 听力：播客「ESL Pod」「The English We Speak」或 YouTube 频道；④ 今日任务：把本课对话大声读 3 遍并录音，挑 1 句用到生活里；不会的句型截图问 AI 立刻拆解。</p>'},
        {h:'热身 Warm-up (5min)', body:'<p>对着镜子用英语说三句话：你的名字、你来自哪里、你要去哪里。<br>例：I am Wang. / I am from China. / I am going to Tokyo.</p>'},
        {h:'核心词汇 Vocabulary (15min)', body:'<ul><li>passport 护照</li><li>ticket 机票</li><li>boarding pass 登机牌</li><li>gate 登机口</li><li>luggage 行李</li><li>departure 出发</li><li>arrival 到达</li><li>window / aisle 靠窗 / 靠走道</li></ul>'},
        {h:'情景对话 Dialogue (20min)', body:'<div class="ph">A: May I see your passport, please?<br>B: Here you are.<br>A: Window or aisle seat?<br>B: Aisle, please.<br>A: Your gate is B12. Have a nice flight!</div>'},
        {h:'语法点睛 Grammar (10min)', body:'<p><b>be 动词</b>：I <b>am</b> / He/She/It <b>is</b> / You/We/They <b>are</b>。<br>国籍形容词：Chinese, Japanese, American, British。别说 "I am China"，要说 "I am <b>from</b> China"。</p>'},
        {h:'今日任务 Task (10min)', body:'<p>写 3 句自我介绍并朗读录音：①名字 ②来自 ③此行目的。完成后可反复朗读练习。</p>'}
      ]
    },
    {
      title:'Lesson 2 · 入住酒店', tag:'Lv.1 入门 · 旅行生存 · 60min',
      blocks:[
    {h:'📱 练起来（资源+今日可做）', body:'<p>① App「多邻国 Duolingo」每天 10 分钟保持语感；② 口语用「HelloTalk」找母语者互练；③ 听力：播客「ESL Pod」「The English We Speak」或 YouTube 频道；④ 今日任务：把本课对话大声读 3 遍并录音，挑 1 句用到生活里；不会的句型截图问 AI 立刻拆解。</p>'},
        {h:'热身 Warm-up (5min)', body:'<p>用英语说出你想要的房间：安静、高楼、大床。<br>I want a quiet room on a high floor with a big bed.</p>'},
        {h:'核心词汇 Vocabulary (15min)', body:'<ul><li>reservation 预订</li><li>check in / out 入住 / 退房</li><li>key card 房卡</li><li>breakfast 早餐</li><li>wi-fi password 无线密码</li><li>room service 客房服务</li><li>extra towel 额外毛巾</li></ul>'},
        {h:'情景对话 Dialogue (20min)', body:'<div class="ph">R: Good evening, do you have a reservation?<br>G: Yes, under the name Wang.<br>R: Your room is 805. Here is your key card.<br>G: What time is breakfast?<br>R: 7 to 10, on the second floor.</div>'},
        {h:'语法点睛 Grammar (10min)', body:'<p><b>Have / has</b> 表示"有"：I <b>have</b> a reservation. / She <b>has</b> a key card. 问句把 do/does 提前：Do you have...?</p>'},
        {h:'今日任务 Task (10min)', body:'<p>模拟前台对话，分别扮演前台与你，各说 4 句。用上 reservation / check in / breakfast。</p>'}
      ]
    },
    {
      title:'Lesson 3 · 餐厅点餐', tag:'Lv.1 入门 · 旅行生存 · 60min',
      blocks:[
    {h:'📱 练起来（资源+今日可做）', body:'<p>① App「多邻国 Duolingo」每天 10 分钟保持语感；② 口语用「HelloTalk」找母语者互练；③ 听力：播客「ESL Pod」「The English We Speak」或 YouTube 频道；④ 今日任务：把本课对话大声读 3 遍并录音，挑 1 句用到生活里；不会的句型截图问 AI 立刻拆解。</p>'},
        {h:'热身 Warm-up (5min)', body:'<p>用英语点一杯水、一份牛排、不要洋葱。<br>A glass of water, a steak, no onions, please.</p>'},
        {h:'核心词汇 Vocabulary (15min)', body:'<ul><li>menu 菜单</li><li>order 点餐 / 订单</li><li>recommend 推荐</li><li>spicy 辣的</li><li>well done / medium 全熟 / 五分熟</li><li>the bill 账单</li><li>tip 小费</li></ul>'},
        {h:'情景对话 Dialogue (20min)', body:'<div class="ph">W: Are you ready to order?<br>G: What do you recommend?<br>W: The grilled fish is popular.<br>G: I will have that, medium, no spice.<br>W: Sure. Anything to drink?</div>'},
        {h:'语法点睛 Grammar (10min)', body:'<p><b>可数 / 不可数名词</b>：water（不可数）用 a glass of water；steak（可数）用 a steak。I would like = 我想要（更礼貌）。</p>'},
        {h:'今日任务 Task (10min)', body:'<p>用英文写一段"完整点餐"：入座→看菜单→问推荐→点主菜与饮料→要账单。不少于 6 句。</p>'}
      ]
    },
    {
      title:'Lesson 4 · 问路与交通', tag:'Lv.1 入门 · 旅行生存 · 60min',
      blocks:[
    {h:'📱 练起来（资源+今日可做）', body:'<p>① App「多邻国 Duolingo」每天 10 分钟保持语感；② 口语用「HelloTalk」找母语者互练；③ 听力：播客「ESL Pod」「The English We Speak」或 YouTube 频道；④ 今日任务：把本课对话大声读 3 遍并录音，挑 1 句用到生活里；不会的句型截图问 AI 立刻拆解。</p>'},
        {h:'热身 Warm-up (5min)', body:'<p>用英语问：地铁站在哪里？怎么去博物馆？<br>Where is the subway station? / How can I get to the museum?</p>'},
        {h:'核心词汇 Vocabulary (15min)', body:'<ul><li>subway / metro 地铁</li><li>bus stop 公交站</li><li>crossroad 十字路口</li><li>turn left / right 左转 / 右转</li><li>straight 直走</li><li>opposite 对面</li><li>near / far 近 / 远</li></ul>'},
        {h:'情景对话 Dialogue (20min)', body:'<div class="ph">T: Excuse me, how do I get to the station?<br>P: Go straight, then turn left at the bank.<br>T: Is it far?<br>P: No, about five minutes on foot.</div>'},
        {h:'语法点睛 Grammar (10min)', body:'<p><b>祈使句</b>表指令：Go straight. Turn left. 回答距离用 It is + 时间/距离：It is five minutes away.</p>'},
        {h:'今日任务 Task (10min)', body:'<p>画一张简单地图，并用英文写出从"酒店"到"火车站"的 4 步指引。</p>'}
      ]
    },
    {
      title:'Lesson 5 · 购物与砍价', tag:'Lv.1 入门 · 旅行生存 · 60min',
      blocks:[
    {h:'📱 练起来（资源+今日可做）', body:'<p>① App「多邻国 Duolingo」每天 10 分钟保持语感；② 口语用「HelloTalk」找母语者互练；③ 听力：播客「ESL Pod」「The English We Speak」或 YouTube 频道；④ 今日任务：把本课对话大声读 3 遍并录音，挑 1 句用到生活里；不会的句型截图问 AI 立刻拆解。</p>'},
        {h:'热身 Warm-up (5min)', body:'<p>用英语问价格、说太贵了。<br>How much is this? / That is too expensive.</p>'},
        {h:'核心词汇 Vocabulary (15min)', body:'<ul><li>price 价格</li><li>discount 折扣</li><li>cash / card 现金 / 刷卡</li><li>size 尺码</li><li>receipt 收据</li><li>cheaper 更便宜</li><li>try on 试穿</li></ul>'},
        {h:'情景对话 Dialogue (20min)', body:'<div class="ph">S: Can I help you?<br>G: How much is this T-shirt?<br>S: 25 dollars.<br>G: That is a bit much. Can you give a discount?<br>S: OK, 20 for you.</div>'},
        {h:'语法点睛 Grammar (10min)', body:'<p><b>比较级</b>：cheap → cheaper（更便宜），expensive → more expensive。Can you...? 是礼貌请求句式。</p>'},
        {h:'今日任务 Task (10min)', body:'<p>模拟购物：问价→嫌贵→要折扣→成交，全程英文，至少 5 个来回。</p>'}
      ]
    },
    {
      title:'Lesson 6 · 紧急求助', tag:'Lv.1 入门 · 旅行生存 · 60min',
      blocks:[
    {h:'📱 练起来（资源+今日可做）', body:'<p>① App「多邻国 Duolingo」每天 10 分钟保持语感；② 口语用「HelloTalk」找母语者互练；③ 听力：播客「ESL Pod」「The English We Speak」或 YouTube 频道；④ 今日任务：把本课对话大声读 3 遍并录音，挑 1 句用到生活里；不会的句型截图问 AI 立刻拆解。</p>'},
        {h:'热身 Warm-up (5min)', body:'<p>用英语说出：我迷路了 / 我需要医生 / 帮我报警。<br>I am lost. / I need a doctor. / Please call the police.</p>'},
        {h:'核心词汇 Vocabulary (15min)', body:'<ul><li>help 帮助</li><li>lost 迷路</li><li>emergency 紧急情况</li><li>hospital 医院</li><li>police 警察</li><li>medicine 药</li><li>insurance 保险</li></ul>'},
        {h:'情景对话 Dialogue (20min)', body:'<div class="ph">G: Excuse me, I lost my wallet.<br>P: Stay calm. Did you call the police?<br>G: Not yet. Can you help me?<br>P: Sure, let us go to the station together.</div>'},
        {h:'语法点睛 Grammar (10min)', body:'<p><b>祈使句求助</b>：Help me. / Call the police. / Stay calm. 用动词原形开头，简洁有力。</p>'},
        {h:'今日任务 Task (10min)', body:'<p>背熟 5 句救命英文并写下来：迷路、生病、被盗、报警、找大使馆。</p>'}
      ]
    },
    {
      title:'Lesson 7 · 旅行小对话综合', tag:'Lv.1 入门 · 复习 · 60min',
      blocks:[
    {h:'📱 练起来（资源+今日可做）', body:'<p>① App「多邻国 Duolingo」每天 10 分钟保持语感；② 口语用「HelloTalk」找母语者互练；③ 听力：播客「ESL Pod」「The English We Speak」或 YouTube 频道；④ 今日任务：把本课对话大声读 3 遍并录音，挑 1 句用到生活里；不会的句型截图问 AI 立刻拆解。</p>'},
        {h:'热身 Warm-up (5min)', body:'<p>快速复述前 6 课各一个关键词：机场、酒店、餐厅、问路、购物、求助。</p>'},
        {h:'本周词汇总览 (15min)', body:'<ul><li>passport / boarding pass / gate</li><li>reservation / check in / key card</li><li>menu / order / bill / tip</li><li>subway / turn left / straight</li><li>price / discount / receipt</li><li>help / hospital / police</li></ul>'},
        {h:'综合对话 Dialogue (20min)', body:'<div class="ph">把前 6 课串成一段"一日旅行"：到达→入住→午餐→问路→购物→求助。每场景 2 句即可。</div>'},
        {h:'语法点睛 Grammar (10min)', body:'<p>复习：be 动词、have/has、祈使句、比较级。这四类是旅行英语的骨架。</p>'},
        {h:'今日任务 Task (10min)', body:'<p>用语音录一段 1 分钟"我的旅行 day 1"英文日记，包含 3 个本课词汇。</p>'}
      ]
    },
    {
      title:'Lesson 8 · 电话与预约', tag:'Lv.2 基础 · 职场+旅行 · 60min',
      blocks:[
    {h:'📱 练起来（资源+今日可做）', body:'<p>① App「多邻国 Duolingo」每天 10 分钟保持语感；② 口语用「HelloTalk」找母语者互练；③ 听力：播客「ESL Pod」「The English We Speak」或 YouTube 频道；④ 今日任务：把本课对话大声读 3 遍并录音，挑 1 句用到生活里；不会的句型截图问 AI 立刻拆解。</p>'},
        {h:'热身 Warm-up (5min)', body:'<p>用英语打电话开场：你好，我是旺仔，想预约明天。<br>Hello, this is Wang. I would like to book for tomorrow.</p>'},
        {h:'核心词汇 Vocabulary (15min)', body:'<ul><li>appointment 预约</li><li>available 有空的</li><li>call back 回电</li><li>message 留言</li><li>confirm 确认</li><li>reschedule 改期</li><li>extension 分机</li></ul>'},
        {h:'情景对话 Dialogue (20min)', body:'<div class="ph">R: Hello, ABC Company, how may I help?<br>W: This is Wang. I would like to book a meeting on Friday.<br>R: 10 a.m. is available. Shall I confirm?<br>W: Yes, please. Thank you.</div>'},
        {h:'语法点睛 Grammar (10min)', body:'<p><b>电话专用语</b>：This is...（我是），not "I am". Would like to...（想做），比 want 更正式礼貌。</p>'},
        {h:'今日任务 Task (10min)', body:'<p>写一段电话预约脚本（开场→说明目的→确认时间→道谢），至少 6 句。</p>'}
      ]
    },
    {
      title:'Lesson 9 · 商务邮件基础', tag:'Lv.2 基础 · 职场 · 60min',
      blocks:[
    {h:'📱 练起来（资源+今日可做）', body:'<p>① App「多邻国 Duolingo」每天 10 分钟保持语感；② 口语用「HelloTalk」找母语者互练；③ 听力：播客「ESL Pod」「The English We Speak」或 YouTube 频道；④ 今日任务：把本课对话大声读 3 遍并录音，挑 1 句用到生活里；不会的句型截图问 AI 立刻拆解。</p>'},
        {h:'热身 Warm-up (5min)', body:'<p>用英语写出邮件主题：关于周五会议 / 附件请查收。<br>Re: Friday meeting / Please find the attachment.</p>'},
        {h:'核心词汇 Vocabulary (15min)', body:'<ul><li>subject 主题</li><li>attachment 附件</li><li>regards 此致敬礼</li><li>deadline 截止日</li><li>follow up 跟进</li><li>apologize 致歉</li><li>kindly 劳烦</li></ul>'},
        {h:'情景邮件 Email (20min)', body:'<div class="ph">Subject: Re: Friday Meeting<br>Dear Mr. Smith,<br>I am writing to confirm our meeting at 10 a.m. on Friday. Please find the agenda in the attachment. Kindly let me know if the time works for you.<br>Best regards,<br>Wang</div>'},
        {h:'语法点睛 Grammar (10min)', body:'<p><b>邮件礼貌三件套</b>：I am writing to...（我写此信是为了）；Please find...（请查收）；Kindly...（劳烦）。避免缩写 I am→I\'m 在正式邮件中。</p>'},
        {h:'今日任务 Task (10min)', body:'<p>写一封英文邮件：向客户确认会议时间并附上议程，使用上述三件套。</p>'}
      ]
    },
    {
      title:'Lesson 10 · 会议与自我介绍', tag:'Lv.2 基础 · 职场 · 60min',
      blocks:[
    {h:'📱 练起来（资源+今日可做）', body:'<p>① App「多邻国 Duolingo」每天 10 分钟保持语感；② 口语用「HelloTalk」找母语者互练；③ 听力：播客「ESL Pod」「The English We Speak」或 YouTube 频道；④ 今日任务：把本课对话大声读 3 遍并录音，挑 1 句用到生活里；不会的句型截图问 AI 立刻拆解。</p>'},
        {h:'热身 Warm-up (5min)', body:'<p>用英语做 30 秒自我介绍：姓名、职位、负责什么。<br>I am Wang, a project manager in charge of overseas sales.</p>'},
        {h:'核心词汇 Vocabulary (15min)', body:'<ul><li>introduce 介绍</li><li>responsibility 职责</li><li>team 团队</li><li>project 项目</li><li>in charge of 负责</li><li>pleased 荣幸</li><li>colleague 同事</li></ul>'},
        {h:'情景对话 Dialogue (20min)', body:'<div class="ph">A: Let me introduce myself. I am Wang from the sales team.<br>B: Nice to meet you, Wang. I handle marketing.<br>A: Pleased to meet you. Hope we can work together.</div>'},
        {h:'语法点睛 Grammar (10min)', body:'<p><b>现在时表职责</b>：I <b>handle</b> marketing. / I <b>am in charge of</b> sales. 用一般现在时描述当前职责。</p>'},
        {h:'今日任务 Task (10min)', body:'<p>写并背诵一段 1 分钟英文自我介绍，含姓名、部门、职责、一句合作意愿。</p>'}
      ]
    },
    {
      title:'Lesson 11 · 商务宴请', tag:'Lv.2 基础 · 职场+旅行 · 60min',
      blocks:[
    {h:'📱 练起来（资源+今日可做）', body:'<p>① App「多邻国 Duolingo」每天 10 分钟保持语感；② 口语用「HelloTalk」找母语者互练；③ 听力：播客「ESL Pod」「The English We Speak」或 YouTube 频道；④ 今日任务：把本课对话大声读 3 遍并录音，挑 1 句用到生活里；不会的句型截图问 AI 立刻拆解。</p>'},
        {h:'热身 Warm-up (5min)', body:'<p>用英语敬酒与招待：欢迎来中国 / 为合作干杯。<br>Welcome to China. / Cheers to our cooperation.</p>'},
        {h:'核心词汇 Vocabulary (15min)', body:'<ul><li>host 招待</li><li>toast 祝酒</li><li>specialty 特色菜</li><li>honor 荣幸</li><li>cooperation 合作</li><li>enjoy 享用</li><li>delicious 美味</li></ul>'},
        {h:'情景对话 Dialogue (20min)', body:'<div class="ph">H: Welcome to our city! Please try the local specialty.<br>G: Thank you, it is delicious. <br>H: Let us toast to our cooperation.<br>G: Cheers! I look forward to working with you.</div>'},
        {h:'语法点睛 Grammar (10min)', body:'<p><b>招待客套话</b>：Please help yourself.（请随意）；I look forward to...（我期待）。Toast 作动词"祝酒"。</p>'},
        {h:'今日任务 Task (10min)', body:'<p>写一段英文"宴请开场白"：欢迎→介绍特色→敬酒→表达合作期待，6 句左右。</p>'}
      ]
    },
    {
      title:'Lesson 12 · 差旅与报销', tag:'Lv.2 基础 · 职场 · 60min',
      blocks:[
    {h:'📱 练起来（资源+今日可做）', body:'<p>① App「多邻国 Duolingo」每天 10 分钟保持语感；② 口语用「HelloTalk」找母语者互练；③ 听力：播客「ESL Pod」「The English We Speak」或 YouTube 频道；④ 今日任务：把本课对话大声读 3 遍并录音，挑 1 句用到生活里；不会的句型截图问 AI 立刻拆解。</p>'},
        {h:'热身 Warm-up (5min)', body:'<p>用英语说：我要报销出租车费 / 请签这张单子。<br>I need to claim the taxi fare. / Please sign this form.</p>'},
        {h:'核心词汇 Vocabulary (15min)', body:'<ul><li>expense 费用</li><li>reimburse 报销</li><li>receipt 发票</li><li>claim 申领</li><li>budget 预算</li><li>approve 批准</li><li>submit 提交</li></ul>'},
        {h:'情景对话 Dialogue (20min)', body:'<div class="ph">W: I would like to submit my travel expenses.<br>F: Sure, do you have all the receipts?<br>W: Yes, taxi, hotel and meals.<br>F: Great, I will forward it for approval.</div>'},
        {h:'语法点睛 Grammar (10min)', body:'<p><b>would like to + 动词</b>：I would like to submit...（我想提交）。表达工作诉求时既清楚又礼貌。</p>'},
        {h:'今日任务 Task (10min)', body:'<p>用英语列一份差旅报销清单（3 类费用 + 金额），并写一句提交说明。</p>'}
      ]
    },
    {
      title:'Lesson 13 · 表达观点与同意', tag:'Lv.2 基础 · 职场 · 60min',
      blocks:[
    {h:'📱 练起来（资源+今日可做）', body:'<p>① App「多邻国 Duolingo」每天 10 分钟保持语感；② 口语用「HelloTalk」找母语者互练；③ 听力：播客「ESL Pod」「The English We Speak」或 YouTube 频道；④ 今日任务：把本课对话大声读 3 遍并录音，挑 1 句用到生活里；不会的句型截图问 AI 立刻拆解。</p>'},
        {h:'热身 Warm-up (5min)', body:'<p>用英语表达：我同意 / 我有个不同看法。<br>I agree. / I see it differently.</p>'},
        {h:'核心词汇 Vocabulary (15min)', body:'<ul><li>agree 同意</li><li>disagree 不同意</li><li>opinion 观点</li><li>suggest 建议</li><li>perhaps 也许</li><li>however 然而</li><li>consider 考虑</li></ul>'},
        {h:'情景对话 Dialogue (20min)', body:'<div class="ph">A: I think we should launch in June.<br>B: I see it differently. Perhaps September is safer.<br>A: Good point. Let us consider both.</div>'},
        {h:'语法点睛 Grammar (10min)', body:'<p><b>委婉表达异议</b>：I see it differently. / Perhaps... is better. 比直接说 "You are wrong" 更职业。</p>'},
        {h:'今日任务 Task (10min)', body:'<p>就"项目是否提前"写 4 句英文：你的观点 + 一个替代建议 + 让步。</p>'}
      ]
    },
    {
      title:'Lesson 14 · 职场基础复习', tag:'Lv.2 基础 · 复习 · 60min',
      blocks:[
    {h:'📱 练起来（资源+今日可做）', body:'<p>① App「多邻国 Duolingo」每天 10 分钟保持语感；② 口语用「HelloTalk」找母语者互练；③ 听力：播客「ESL Pod」「The English We Speak」或 YouTube 频道；④ 今日任务：把本课对话大声读 3 遍并录音，挑 1 句用到生活里；不会的句型截图问 AI 立刻拆解。</p>'},
        {h:'热身 Warm-up (5min)', body:'<p>快速说出本周关键词：appointment, attachment, introduce, toast, expense, agree。</p>'},
        {h:'本周句型总览 (15min)', body:'<ul><li>This is Wang.（电话自称）</li><li>I am writing to...（邮件目的）</li><li>I am in charge of...（职责）</li><li>would like to...（礼貌诉求）</li><li>I see it differently.（委婉异议）</li></ul>'},
        {h:'综合演练 Role-play (20min)', body:'<div class="ph">模拟一场 3 分钟英文会议：开场介绍→确认议程→表达一个观点→约定跟进。两人分饰。</div>'},
        {h:'语法点睛 Grammar (10min)', body:'<p>复习：电话自称、邮件三件套、一般现在时职责、would like to、委婉异议。这是职场英语地基。</p>'},
        {h:'今日任务 Task (10min)', body:'<p>录一段 2 分钟英文"周会发言"：汇报进展→提一点建议→确认下一步。</p>'}
      ]
    },
    {
      title:'Lesson 15 · 商务谈判', tag:'Lv.3 进阶 · 职场 · 60min',
      blocks:[
    {h:'📱 练起来（资源+今日可做）', body:'<p>① App「多邻国 Duolingo」每天 10 分钟保持语感；② 口语用「HelloTalk」找母语者互练；③ 听力：播客「ESL Pod」「The English We Speak」或 YouTube 频道；④ 今日任务：把本课对话大声读 3 遍并录音，挑 1 句用到生活里；不会的句型截图问 AI 立刻拆解。</p>'},
        {h:'热身 Warm-up (5min)', body:'<p>用英语开价与还价：我们的报价是… / 能否再优惠？<br>Our quote is... / Can you do better on price?</p>'},
        {h:'核心词汇 Vocabulary (15min)', body:'<ul><li>quote 报价</li><li>negotiate 谈判</li><li>discount 折扣</li><li>final offer 最终价</li><li>win-win 双赢</li><li>terms 条款</li><li>deal 交易</li></ul>'},
        {h:'情景对话 Dialogue (20min)', body:'<div class="ph">B: Our quote is 10,000 dollars.<br>S: That is above our budget. Can you do better?<br>B: For a long-term deal, I can offer 5% off.<br>S: Accepted. Let us finalize the terms.</div>'},
        {h:'语法点睛 Grammar (10min)', body:'<p><b>条件句 If</b>：If you order more, I can lower the price. 用 if 引出交换条件，是谈判核心结构。</p>'},
        {h:'今日任务 Task (10min)', body:'<p>写一段英文还价对话（4 句）：指出预算不足→要求折扣→给出长期合作诱饵→成交。</p>'}
      ]
    },
    {
      title:'Lesson 16 · 英文演示', tag:'Lv.3 进阶 · 职场 · 60min',
      blocks:[
    {h:'📱 练起来（资源+今日可做）', body:'<p>① App「多邻国 Duolingo」每天 10 分钟保持语感；② 口语用「HelloTalk」找母语者互练；③ 听力：播客「ESL Pod」「The English We Speak」或 YouTube 频道；④ 今日任务：把本课对话大声读 3 遍并录音，挑 1 句用到生活里；不会的句型截图问 AI 立刻拆解。</p>'},
        {h:'热身 Warm-up (5min)', body:'<p>用英语开场演示：今天我讲三点 / 请看这张图。<br>Today I will cover three points. / Please look at this chart.</p>'},
        {h:'核心词汇 Vocabulary (15min)', body:'<ul><li>present 演示</li><li>chart 图表</li><li>highlight 强调</li><li>key point 要点</li><li>summary 总结</li><li>question 提问</li><li>feedback 反馈</li></ul>'},
        {h:'情景演示 Talk (20min)', body:'<div class="ph">Good morning. Today I will cover three points about our plan. First, the market. As the chart shows, demand is rising. Let me highlight the key point: we must move fast. Any questions?</div>'},
        {h:'语法点睛 Grammar (10min)', body:'<p><b>连接词</b>：First / Second / Finally 让结构清晰；As the chart shows... 用 as 引证。演示靠逻辑词撑起骨架。</p>'},
        {h:'今日任务 Task (10min)', body:'<p>写一段 1.5 分钟英文演示提纲：开场→3 要点→总结→邀请提问。</p>'}
      ]
    },
    {
      title:'Lesson 17 · 电话会议', tag:'Lv.3 进阶 · 职场 · 60min',
      blocks:[
    {h:'📱 练起来（资源+今日可做）', body:'<p>① App「多邻国 Duolingo」每天 10 分钟保持语感；② 口语用「HelloTalk」找母语者互练；③ 听力：播客「ESL Pod」「The English We Speak」或 YouTube 频道；④ 今日任务：把本课对话大声读 3 遍并录音，挑 1 句用到生活里；不会的句型截图问 AI 立刻拆解。</p>'},
        {h:'热身 Warm-up (5min)', body:'<p>用英语在会议中发言：我能听到吗？/ 轮到我了。<br>Can everyone hear me? / It is my turn.</p>'},
        {h:'核心词汇 Vocabulary (15min)', body:'<ul><li>mute 静音</li><li>signal 信号</li><li>agenda 议程</li><li>action item 待办</li><li>minutes 纪要</li><li>follow up 跟进</li><li>delegate 委派</li></ul>'},
        {h:'情景会议 Meeting (20min)', body:'<div class="ph">W: Can everyone hear me? Good. Let us start with the agenda. Lisa, your action item was the report—status?<br>L: Done, I will send the minutes after.<br>W: Great, I will delegate the follow-up to Tom.</div>'},
        {h:'语法点睛 Grammar (10min)', body:'<p><b>被动与将来</b>：The report <b>was</b> done. / I <b>will send</b> the minutes. 会议中多用被动表客观、will 表承诺。</p>'},
        {h:'今日任务 Task (10min)', body:'<p>写一段英文会议纪录（3 条 action items，含负责人与时限）。</p>'}
      ]
    },
    {
      title:'Lesson 18 · 客户接待', tag:'Lv.3 进阶 · 职场+旅行 · 60min',
      blocks:[
    {h:'📱 练起来（资源+今日可做）', body:'<p>① App「多邻国 Duolingo」每天 10 分钟保持语感；② 口语用「HelloTalk」找母语者互练；③ 听力：播客「ESL Pod」「The English We Speak」或 YouTube 频道；④ 今日任务：把本课对话大声读 3 遍并录音，挑 1 句用到生活里；不会的句型截图问 AI 立刻拆解。</p>'},
        {h:'热身 Warm-up (5min)', body:'<p>用英语接机：一路辛苦了 / 车在外面。<br>Welcome, you must be tired. / The car is outside.</p>'},
        {h:'核心词汇 Vocabulary (15min)', body:'<ul><li>pick up 接机</li><li>itinerary 行程</li><li>hotel 酒店</li><li>rest 休息</li><li>schedule 日程</li><li>comfortable 舒适</li><li>arrange 安排</li></ul>'},
        {h:'情景对话 Dialogue (20min)', body:'<div class="ph">W: Mr. Smith, welcome! You must be tired from the flight.<br>S: A little, thank you.<br>W: The car is outside. We arranged a hotel near the office. Rest well, we will start tomorrow.</div>'},
        {h:'语法点睛 Grammar (10min)', body:'<p><b>情态动词关心</b>：You must be tired.（你一定累了）；We arranged...（我们已安排）。must be 表合理推测。</p>'},
        {h:'今日任务 Task (10min)', body:'<p>写一段英文接机+安排行程的对话（4 句），含问候、接送、住宿、次日安排。</p>'}
      ]
    },
    {
      title:'Lesson 19 · 投诉与处理', tag:'Lv.3 进阶 · 职场 · 60min',
      blocks:[
    {h:'📱 练起来（资源+今日可做）', body:'<p>① App「多邻国 Duolingo」每天 10 分钟保持语感；② 口语用「HelloTalk」找母语者互练；③ 听力：播客「ESL Pod」「The English We Speak」或 YouTube 频道；④ 今日任务：把本课对话大声读 3 遍并录音，挑 1 句用到生活里；不会的句型截图问 AI 立刻拆解。</p>'},
        {h:'热身 Warm-up (5min)', body:'<p>用英语道歉与补救：很抱歉给您不便 / 我们马上处理。<br>We apologize for the inconvenience. / We will fix it right away.</p>'},
        {h:'核心词汇 Vocabulary (15min)', body:'<ul><li>complaint 投诉</li><li>apologize 道歉</li><li>inconvenience 不便</li><li>resolve 解决</li><li>compensate 补偿</li><li>sincere 诚挚</li><li>improve 改进</li></ul>'},
        {h:'情景对话 Dialogue (20min)', body:'<div class="ph">C: The delivery is late again.<br>W: We sincerely apologize for the inconvenience. We will resolve it today and compensate you with a discount.</div>'},
        {h:'语法点睛 Grammar (10min)', body:'<p><b>道歉结构</b>：We apologize for + 名词。承诺用 will：We will resolve it. 先认错、再行动、后补偿。</p>'},
        {h:'今日任务 Task (10min)', body:'<p>写一段英文"处理客户投诉"回复（5 句）：致歉→说明原因→补救措施→补偿→感谢理解。</p>'}
      ]
    },
    {
      title:'Lesson 20 · 英文演讲', tag:'Lv.3 进阶 · 职场 · 60min',
      blocks:[
    {h:'📱 练起来（资源+今日可做）', body:'<p>① App「多邻国 Duolingo」每天 10 分钟保持语感；② 口语用「HelloTalk」找母语者互练；③ 听力：播客「ESL Pod」「The English We Speak」或 YouTube 频道；④ 今日任务：把本课对话大声读 3 遍并录音，挑 1 句用到生活里；不会的句型截图问 AI 立刻拆解。</p>'},
        {h:'热身 Warm-up (5min)', body:'<p>用英语做有力结尾：让我们携手 / 未来可期。<br>Let us work together. / The future is promising.</p>'},
        {h:'核心词汇 Vocabulary (15min)', body:'<ul><li>vision 愿景</li><li>opportunity 机遇</li><li>together 携手</li><li>inspire 激励</li><li>future 未来</li><li>believe 相信</li><li>achieve 达成</li></ul>'},
        {h:'情景演讲 Speech (20min)', body:'<div class="ph">Friends, I believe in our vision. The market gives us a rare opportunity. If we work together, we will achieve what others think impossible. The future is promising—let us build it now.</div>'},
        {h:'语法点睛 Grammar (10min)', body:'<p><b>激励性排比</b>：If we... we will... 条件+将来，制造希望感。短句 + 强动词（believe / achieve）最有力量。</p>'},
        {h:'今日任务 Task (10min)', body:'<p>写一段 1 分钟英文"团队动员"演讲，含愿景、机遇、号召行动，至少 6 句。</p>'}
      ]
    },
    {
      title:'Lesson 21 · 综合实战', tag:'Lv.3 进阶 · 毕业演练 · 60min',
      blocks:[
    {h:'📱 练起来（资源+今日可做）', body:'<p>① App「多邻国 Duolingo」每天 10 分钟保持语感；② 口语用「HelloTalk」找母语者互练；③ 听力：播客「ESL Pod」「The English We Speak」或 YouTube 频道；④ 今日任务：把本课对话大声读 3 遍并录音，挑 1 句用到生活里；不会的句型截图问 AI 立刻拆解。</p>'},
        {h:'热身 Warm-up (5min)', body:'<p>回顾三级跃迁：Lv.1 旅行生存 → Lv.2 职场基础 → Lv.3 进阶沟通。</p>'},
        {h:'能力地图 (15min)', body:'<ul><li>生存：机场/酒店/餐厅/问路/购物/求助</li><li>职场：电话/邮件/会议/宴请/报销/异议</li><li>进阶：谈判/演示/会务/接待/投诉/演讲</li></ul>'},
        {h:'毕业任务 Capstone (20min)', body:'<div class="ph">模拟"带客户访华一日"：接机(18)→宴请(11)→会议演示(16)→处理一个投诉(19)。用英文串起四个场景，每场景 2-3 句。</div>'},
        {h:'语法点睛 Grammar (10min)', body:'<p>把三阶段句型混用：would like to / if 条件句 / will 承诺 / must be 推测。流利来自"场景—句型"的条件反射。</p>'},
        {h:'今日任务 Task (10min)', body:'<p>录一段 3 分钟英文"客户访华全程"独白，覆盖接机到送别，作为阶段成果存档。</p>'}
      ]
    }
  ],

  /* ===================== 2. 每日阅读 ===================== */
  reading: [
    {title:'百年变局中的中国道路', tag:'第1天 · 历史·时政', blocks:[
      {h:'导读', body:'<p>一个国家的道路选择，从来不是书斋里的思辨，而是被历史境遇逼出来的答案。读懂今天的中国，要先读懂它曾经面对的绝境与抉择。</p>'},
      {h:'正文', body:'<p>1840 年之后的一百年，是一个古老文明被迫回应"生存还是灭亡"的一百年。器物不如人，便学器物；制度不如人，便改制度；文化不如人，便疑文化。一次次撞击之后，中国人终于明白：照搬任何一种外来模板都无法安顿这片土地。</p><p>真正的转折，源于把普遍原理与脚下土壤结合的能力。不是谁的理论更动听，而是谁的方案能在这片土地上让多数人活下去、站起来、有尊严。这便是"道路"二字的重量——它是对苦难的回应，也是对未来的承诺。</p>'},
      {h:'今日思考', body:'<p>①你如何理解"道路是逼出来的答案"？②面对困境时，你更倾向照搬现成方案，还是先弄清自己的土壤？写 100 字。</p>'},
      {h:'📚 延伸阅读', body:'<p>金一南《为什么是中国》——从鸦片战争讲到大国崛起，正可对照今天的"道路"主题；想看全球视角，读《枪炮、病菌与钢铁》(贾雷德·戴蒙德)。</p>'},
      {h:'📖 怎么读更有效', body:'<p>读史政类先扫目录建框架；拿 3 张便签做"概念/事件/我的关联"三栏笔记；读完用 100 字写"这和我的选择有什么关系"。</p>'}
    ]},
    {title:'长征：精神的坐标', tag:'第2天 · 历史', blocks:[
      {h:'导读', body:'<p>长征常被误读为一次单纯的军事转移。它的真正遗产，是一支队伍在绝境中重建信念的方式。</p>'},
      {h:'正文', body:'<p>翻过雪山的不是脚力，而是不愿跪着活着的意志。长征把"不可能"走成了"走过了"，它留给后人的不是地图，而是一种姿态：当所有方向都看似死路时，仍要迈出下一步。</p><p>这种姿态比任何战果都珍贵。因为一个组织、一个人，迟早都会遇上自己的"草地"与"大渡河"。那时决定成败的，往往不是资源，而是是否在绝境中仍相信前方有路。</p>'},
      {h:'今日思考', body:'<p>你人生中的"草地"是什么？当时靠什么走出来的？写 100 字。</p>'},
      {h:'📚 延伸阅读', body:'<p>王树增《长征》——最详实的长征全景纪实；或看纪录片《苦难辉煌》配套理解那段绝境中的信念。</p>'},
      {h:'📖 怎么读更有效', body:'<p>这类叙事书可用"人物线"读法：跟住一个人物，看他如何在绝境中做决定，再问"换作我会怎样"。</p>'}
    ]},
    {title:'为什么要读历史', tag:'第3天 · 方法论', blocks:[
      {h:'导读', body:'<p>读史不是背年代，而是借别人的得失，给自己的抉择多一盏灯。</p>'},
      {h:'正文', body:'<p>历史最朴素的功用，是告诉你"看上去新鲜的事，往往换过衣服来过"。房价、通胀、地缘摩擦、技术焦虑，放在长周期里都有影子。读懂周期的人，不易在狂热时盲从，也不易在低谷时绝望。</p><p>更进一步，历史让人学会"第二层思考"：当所有人看到一个结果，去想它为何发生；当所有人追捧一个叙事，去想谁被忽略了。这种能力，比记住任何结论都值钱。</p>'},
      {h:'今日思考', body:'<p>最近一次你"随大流"的决定是什么？若重来会怎么想？写 100 字。</p>'},
      {h:'📚 延伸阅读', body:'<p>黄仁宇《万历十五年》——教你看"大历史"的底层逻辑；或《人类简史》(尤瓦尔·赫拉利)看长周期规律。</p>'},
      {h:'📖 怎么读更有效', body:'<p>读历史问三问：当时人面临什么约束？他选了什么？若信息相同我能否做得更好？把答案写进"决策错题本"。</p>'}
    ]},
    {title:'科技自立的逻辑', tag:'第4天 · 时政·科技', blocks:[
      {h:'导读', body:'<p>"卡脖子"三个字背后，是一个关于依赖与主动权的永恒命题。</p>'},
      {h:'正文', body:'<p>任何关键能力，若长期寄托于他人，和平时期是效率，危机时刻就是命门。这不是反对开放，而是提醒：开放是为了壮大自己，不是把自己变成别人的附庸。</p><p>真正的自立，不是样样自己造，而是在"造不造得出来"这件事上拥有选择权。有了选择权，合作才是平等的；失去它，再热闹的合作也只是等待被定价的筹码。</p>'},
      {h:'今日思考', body:'<p>你所在的领域，哪些能力是"必须有选择权"的？写 100 字。</p>'},
      {h:'📚 延伸阅读', body:'<p>《中国制造2025》官方解读文件（工信部官网）；或《光变》——一部中国液晶产业突围史，正是"自立"的微观样本。</p>'},
      {h:'📖 怎么读更有效', body:'<p>科技时政类，先读"政策原文/白皮书"再看解读，避免被二手情绪带偏；用"依赖—选择权"框架分析你所在行业。</p>'}
    ]},
    {title:'海洋意识与国家命运', tag:'第5天 · 历史·地缘', blocks:[
      {h:'导读', body:'<p>一个背海而居的文明，何时开始"面朝大海"，往往标记着它的视野边界。</p>'},
      {h:'正文', body:'<p>近代的屈辱，很大一部分来自海上。当别人从浪涛间驶来，而我们仍把海洋视为天堑而非通途，视野的差距便成了命运的差距。</p><p>重新理解海洋，不只是造几艘船，而是承认：现代国家的命脉，系于对广阔世界的连接能力。能走向深蓝的，从来不只是舰队，更是一个民族敢于向外张望的心气。</p>'},
      {h:'今日思考', body:'<p>"面朝大海"对你个人意味着什么？你是否在主动拓展自己的"连接半径"？写 100 字。</p>'},
      {h:'📚 延伸阅读', body:'<p>林肯·佩恩《海洋与文明》——一部以海为线的世界史；或马汉《海权论》看海洋如何塑造强国。</p>'},
      {h:'📖 怎么读更有效', body:'<p>地缘类书用"地图+时间轴"配合读：边读边在地图上标关键水道与节点，理解力翻倍。</p>'}
    ]},
    {title:'改革的勇气与耐心', tag:'第6天 · 时政', blocks:[
      {h:'导读', body:'<p>改革是最容易被误解的词之一：人们要它的结果，却常常拒绝它的过程。</p>'},
      {h:'正文', body:'<p>任何深层变革，都是在旧结构与新可能之间走钢丝。太快，社会会撕裂；太慢，机会会溜走。真正难的，是在"不变会死"与"乱变会崩"之间，找到那条窄而对的路。</p><p>所以改革既是勇气，也是耐心。勇气让人敢于动刀，耐心让人懂得何时收力。二者缺一，好的初衷都会走向反面。</p>'},
      {h:'今日思考', body:'<p>你最近一次"既要又要"的两难是什么？你是怎么平衡的？写 100 字。</p>'},
      {h:'📚 延伸阅读', body:'<p>吴晓波《激荡三十年》——看改革如何在试错中前行；或《转型中的地方政府》理解改革的制度逻辑。</p>'},
      {h:'📖 怎么读更有效', body:'<p>读改革史问："阻力来自哪类利益？"放到你公司/团队的变革里，往往能照见同样的博弈。</p>'}
    ]},
    {title:'读鲁迅：铁屋中的醒者', tag:'第7天 · 文学', blocks:[
      {h:'导读', body:'<p>鲁迅从不像鸡汤作者那样许诺光明，他只是不肯对黑暗装睡。</p>'},
      {h:'正文', body:'<p>"假如一间铁屋子，绝无窗户而万难破毁，里面有许多熟睡的人们……"这是他著名的诘问。他的答案不是乐观，而是：因为有人醒了，便不能装作没看见。</p><p>这种清醒的钝痛，恰恰是成熟阅读的入口。真正的好文字不哄你开心，它逼你睁开眼，看清屋子的形状，然后自己决定要不要推窗。</p>'},
      {h:'今日思考', body:'<p>你是否有过"不愿装睡"的时刻？那次你看到了什么"铁屋"？写 100 字。</p>'},
      {h:'📚 延伸阅读', body:'<p>鲁迅《呐喊》《彷徨》短篇小说集；想读懂他，配读《鲁迅全集》中《野草》与杂文，看"铁屋"隐喻的来处。</p>'},
      {h:'📖 怎么读更有效', body:'<p>读文学别只摘金句，要问"作者在对谁说话"。鲁迅的文章多是对"看客"与"醒者"两类的剖白，对照自己属于哪边。</p>'}
    ]},
    {title:'文明的韧性与更新', tag:'第8天 · 历史', blocks:[
      {h:'导读', body:'<p>一种文明能延续数千年，靠的不是不变，而是不断把自己重新讲一遍的能力。</p>'},
      {h:'正文', body:'<p>许多古文明消失，是因为它们把某套规则当成了永恒。而能走到今天的，往往在危机中学会了"自我更新"——保留内核，扬弃外壳。</p><p>这对个人也是警讯：你赖以成功的经验，会不会在某天变成困住你的壳？真正的韧性，是敢于在恰当的时候，亲手改写自己的剧本。</p>'},
      {h:'今日思考', body:'<p>你有哪些"曾经有用、如今成壳"的习惯或观念？写 100 字。</p>'},
      {h:'📚 延伸阅读', body:'<p>费孝通《乡土中国》——理解中国社会的底层结构为何"韧"；或《文明的冲突》(亨廷顿)看文明如何自我更新。</p>'},
      {h:'📖 怎么读更有效', body:'<p>读文明类，画一张"内核—外壳"对照表：哪些千年未变？哪些已被替换？再映射到自己身上。</p>'}
    ]},
    {title:'大国的取舍', tag:'第9天 · 时政·地缘', blocks:[
      {h:'导读', body:'<p>大国之间从没有"全都要"的童话，只有权衡与排序。</p>'},
      {h:'正文', body:'<p>资源、注意力、时间都是有限的。一个国家把力量投向哪里，背后是它对"什么最威胁生存、什么最关乎未来"的判断。误判优先级，比敌人本身更危险。</p><p>个人同理：你声称重视的事，是否真的分到了最好的精力？很多时候，我们不是输给对手，而是输给了自己混乱的优先级。</p>'},
      {h:'今日思考', body:'<p>把你本周的时间花销排个序，和你的"声称重视"对得上吗？写 100 字。</p>'},
      {h:'📚 延伸阅读', body:'<p>基辛格《论中国》——看大国如何做战略取舍；或《大棋局》(布热津斯基)理解地缘优先级。</p>'},
      {h:'📖 怎么读更有效', body:'<p>读地缘用"优先级清单"法：列出书中角色最看重的 3 件事，再列你自己的，对比落差。</p>'}
    ]},
    {title:'苦难的意义边界', tag:'第10天 · 文学·思辨', blocks:[
      {h:'导读', body:'<p>歌颂苦难是危险的，但回避苦难的教训同样愚蠢。</p>'},
      {h:'正文', body:'<p>苦难本身不值得赞美，值得赞美的是人在苦难中没有塌掉的那部分——那种把伤口变成视野的过程。把苦当做勋章去炫耀，是对受苦者的轻慢；把苦当做养分去消化，才是对命运的尊重。</p><p>所以读人物、读历史，要看的不是他吃了多少苦，而是苦在他身上结出了什么果。</p>'},
      {h:'今日思考', body:'<p>你经历过的某次困难，后来"结出了什么果"？写 100 字。</p>'},
      {h:'📚 延伸阅读', body:'<p>维克多·弗兰克尔《活出意义来》——集中营幸存者的意义疗法，正是"苦难结出果"的范本。</p>'},
      {h:'📖 怎么读更有效', body:'<p>读人物传记先找"转折点"：哪件事让他/她从受苦转向意义？把那一段抄下来，写你的平行情境。</p>'}
    ]},
    {title:'现代化的另一面', tag:'第11天 · 时政·社会', blocks:[
      {h:'导读', body:'<p>现代化不只意味着更富，也意味着要回答更难的"人与人的关系"问题。</p>'},
      {h:'正文', body:'<p>当物质丰裕不再是首要难题，焦虑却未必减少——因为人开始追问意义、公平与尊严。这是富裕社会的共同课题，没有标准答案。</p><p>读懂这一点，便不会简单地用 GDP 丈量一切。一个社会的成色，最终要看它如何安顿那些"钱买不到"的东西：信任、尊严、希望。</p>'},
      {h:'今日思考', body:'<p>你所在的圈子，最稀缺的"钱买不到"的东西是什么？写 100 字。</p>'},
      {h:'📚 延伸阅读', body:'<p>韩炳哲《倦怠社会》——解释为什么富了却更累；或《效率悖论》看现代性的暗面。</p>'},
      {h:'📖 怎么读更有效', body:'<p>社会类议题用"你身边的样本"验证：书中说的焦虑/尊严，在你同事、家人身上是否成立？</p>'}
    ]},
    {title:'读史使人审慎', tag:'第12天 · 方法论', blocks:[
      {h:'导读', body:'<p>审慎不是怯懦，而是知道"看上去稳的操作"可能埋着什么样的雷。</p>'},
      {h:'正文', body:'<p>历史上太多崩塌，始于一个被集体忽略的微小失衡：财政、信任、生态、人心，皆有临界点。盛世往往最危险，因为乐观会让人停止警惕。</p><p>所以真正的成熟，是在顺境里保留一分"出事假设"：如果现在这套逻辑错了，最先裂开的是哪道缝？提前想清楚，便少挨一记闷棍。</p>'},
      {h:'今日思考', body:'<p>你当前最顺的一件事里，藏着什么潜在风险？写 100 字。</p>'},
      {h:'📚 延伸阅读', body:'<p>当年明月《明朝那些事儿》——在故事里看盛世如何埋雷；或《资治通鉴》选段（熊逸解读版更易懂）。</p>'},
      {h:'📖 怎么读更有效', body:'<p>读史做"预演失败"练习：挑一个盛世，写下"它若崩，第一道裂缝在哪"，再对照真实结局。</p>'}
    ]},
    {title:'个人与时代', tag:'第13天 · 文学·思辨', blocks:[
      {h:'导读', body:'<p>我们常高估时代对个人的碾压，也常低估个人在时代里的余地。</p>'},
      {h:'正文', body:'<p>同一片浪潮，有人被拍碎，有人借势而起。差别不全在运气，而在是否提前练就了"踏浪"的本领：见识、定力、可迁移的能力。</p><p>所以与其抱怨风口没来，不如先问自己：当风口真来的那天，我是不是那只已经被风选中的鹰？时代从不辜负有准备的人，它只是冷酷地筛选他们。</p>'},
      {h:'今日思考', body:'<p>你正在为哪个"可能的风口"偷偷准备？写 100 字。</p>'},
      {h:'📚 延伸阅读', body:'<p>马尔科姆·格拉德威尔《异类》——讲"时机+准备"如何造就成功；或《纳瓦尔宝典》看个人如何借势能。</p>'},
      {h:'📖 怎么读更有效', body:'<p>读"个人与时代"类，做"能力清单"：列出 3 项可迁移能力，标出哪项还缺，本周补一项。</p>'}
    ]},
    {title:'为什么是"长期"', tag:'第14天 · 方法论·收官', blocks:[
      {h:'导读', body:'<p>两周的阅读，若只留下一个词，我希望是"长期"。</p>'},
      {h:'正文', body:'<p>无论是国家道路、文明韧性，还是个人成长，真正的果实都长在时间的另一头。急功近利的人总在收割别人种下的树，而持续浇灌的人，终会拥有自己的森林。</p><p>这两周你读的不是故事，而是一组"慢变量"：它们不喧哗，却决定结局。愿你在往后的日子，少被眼前的浪花迷惑，多看水下的暗流与方向。</p>'},
      {h:'今日思考', body:'<p>列一件你愿意为它"长期主义"的事，并写下今天能做的第一步。写 100 字。</p>'},
      {h:'📚 延伸阅读', body:'<p>《长期主义》(詹姆斯·卡斯)或《纳瓦尔宝典》——把"长期"从口号变成可执行的决策原则。</p>'},
      {h:'📖 两周复盘', body:'<p>把 14 天里最有共鸣的 3 本/篇，建一个"我的书单"备忘录；每本写一句"为什么留"。这就是你自己的思想坐标系。</p>'}
    ]}
  ],
  /* ===================== 3. 运动锻炼 ===================== */
  /* ===================== 3. 外贸企业（中国） ===================== */
  /* ===================== 3. 外贸企业（中国） ===================== */
  trade: [
    {title:'Day 1 · 外贸企业推荐（中国）', tag:'第1天 · 中小 6 / 头部 0', blocks:[
    {h:'💡 今日怎么用这笔清单', body:'<p>① 在「阿里巴巴国际站」「中国制造网(Made-in-China)」搜这些企业的主营品类，找同类供应商或可合作的买家；② 开发信模板：Hi [Name], we are a factory supplying [品类], MOQ [X], 附 catalog 与检测报告；③ 关注「广交会」线上展厅定向联系；④ 合作前用「天眼查/企查查」核验资质与经营异常，再下单。</p>'},
      {h:'今日推荐 · 6 家（中小企业为主，含行业标杆）', body:`
        <div class="co"><div class="co-h"><b>新宝股份</b><span class="co-t sm">中小</span></div>
        <div class="co-r">创立：1995 年 ｜ 总部：佛山</div>
        <div class="co-r">主营：小家电（电热水壶、咖啡机、面包机），全球小家电代工龙头</div>
        <div class="co-r">出口市场：欧美商超、全球</div>
        <div class="co-r">出海打法：研产销一体化 + ODM 代工</div>
        <div class="co-r">官网：<a class="co-site" href="https://donlim.com" target="_blank" rel="noopener">🌐 donlim.com</a></div>
        <div class="co-r reason">推荐理由：出口规模长年居前，"中国小家电卖遍全球"的研究范本。</div></div>
        <div class="co"><div class="co-h"><b>小熊电器</b><span class="co-t sm">中小</span></div>
        <div class="co-r">创立：2006 年 ｜ 总部：佛山</div>
        <div class="co-r">主营：创意小家电（酸奶机、养生壶、电炖盅）</div>
        <div class="co-r">出口市场：国内 + 跨境</div>
        <div class="co-r">出海打法：细分场景差异化 + 品牌化</div>
        <div class="co-r">官网：<a class="co-site" href="https://bear.com.cn" target="_blank" rel="noopener">🌐 bear.com.cn</a></div>
        <div class="co-r reason">推荐理由：小品类如何做品牌出海的代表。</div></div>
        <div class="co"><div class="co-h"><b>浙江永强</b><span class="co-t sm">中小</span></div>
        <div class="co-r">创立：2001 年 ｜ 总部：台州</div>
        <div class="co-r">主营：户外休闲家具、遮阳伞</div>
        <div class="co-r">出口市场：北美（沃尔玛等商超）</div>
        <div class="co-r">出海打法：海外仓 + 批发大件非标品</div>
        <div class="co-r">官网：<span class="co-site none">🌐 官网建议搜索「浙江永强」</span></div>
        <div class="co-r reason">推荐理由：大件非标品出海样本，可研究海外仓与批发打法。</div></div>
        <div class="co"><div class="co-h"><b>乐歌股份</b><span class="co-t sm">中小</span></div>
        <div class="co-r">创立：2002 年 ｜ 总部：宁波</div>
        <div class="co-r">主营：人体工学升降桌</div>
        <div class="co-r">出口市场：欧美 DTC</div>
        <div class="co-r">出海打法：独立站 + 海外仓直营</div>
        <div class="co-r">官网：<a class="co-site" href="https://loctek.com" target="_blank" rel="noopener">🌐 loctek.com</a></div>
        <div class="co-r reason">推荐理由：DTC 品牌出海标杆，研究"独立站 + 海外仓"打法。</div></div>
        <div class="co"><div class="co-h"><b>中宠股份</b><span class="co-t sm">中小</span></div>
        <div class="co-r">创立：1998 年 ｜ 总部：烟台</div>
        <div class="co-r">主营：宠物零食、主粮（Wanpy）</div>
        <div class="co-r">出口市场：全球</div>
        <div class="co-r">出海打法：OEM + 自主品牌双线</div>
        <div class="co-r">官网：<a class="co-site" href="https://wanpy.com" target="_blank" rel="noopener">🌐 wanpy.com</a></div>
        <div class="co-r reason">推荐理由：宠物食品出海代表，研究 OEM→品牌路径。</div></div>
        <div class="co"><div class="co-h"><b>九安医疗</b><span class="co-t sm">中小</span></div>
        <div class="co-r">创立：1995 年 ｜ 总部：天津</div>
        <div class="co-r">主营：电子血压计、额温枪（iHealth 曾美国爆单）</div>
        <div class="co-r">出口市场：北美</div>
        <div class="co-r">出海打法：单品引爆 + 数字健康</div>
        <div class="co-r">官网：<a class="co-site" href="https://jiuan.com" target="_blank" rel="noopener">🌐 jiuan.com</a></div>
        <div class="co-r reason">推荐理由：硬件 + 数字健康出海样本，"单品引爆"路径。</div></div>
      `}
    ]},
    {title:'Day 2 · 外贸企业推荐（中国）', tag:'第2天 · 中小 6 / 头部 0', blocks:[
    {h:'💡 今日怎么用这笔清单', body:'<p>① 在「阿里巴巴国际站」「中国制造网(Made-in-China)」搜这些企业的主营品类，找同类供应商或可合作的买家；② 开发信模板：Hi [Name], we are a factory supplying [品类], MOQ [X], 附 catalog 与检测报告；③ 关注「广交会」线上展厅定向联系；④ 合作前用「天眼查/企查查」核验资质与经营异常，再下单。</p>'},
      {h:'今日推荐 · 6 家（中小企业为主，含行业标杆）', body:`
        <div class="co"><div class="co-h"><b>北鼎股份</b><span class="co-t sm">中小</span></div>
        <div class="co-r">创立：2003 年 ｜ 总部：深圳</div>
        <div class="co-r">主营：高端小家电（养生壶、蒸炖锅）</div>
        <div class="co-r">出口市场：国内 + 跨境</div>
        <div class="co-r">出海打法：定位溢价成功</div>
        <div class="co-r">官网：<a class="co-site" href="https://buydeem.com" target="_blank" rel="noopener">🌐 buydeem.com</a></div>
        <div class="co-r reason">推荐理由：学"中国制造如何做高端品牌"。</div></div>
        <div class="co"><div class="co-h"><b>德昌股份</b><span class="co-t sm">中小</span></div>
        <div class="co-r">创立：2002 年 ｜ 总部：宁波</div>
        <div class="co-r">主营：吸尘器、汽车电机，深度绑定国际品牌</div>
        <div class="co-r">出口市场：全球</div>
        <div class="co-r">出海打法：隐形冠军式代工</div>
        <div class="co-r">官网：<span class="co-site none">🌐 官网建议搜索「德昌股份」</span></div>
        <div class="co-r reason">推荐理由："隐形冠军"式代工出海样本。</div></div>
        <div class="co"><div class="co-h"><b>莱克电气</b><span class="co-t sm">中小</span></div>
        <div class="co-r">创立：1994 年 ｜ 总部：苏州</div>
        <div class="co-r">主营：吸尘器、小家电，自主品牌 + 代工并行</div>
        <div class="co-r">出口市场：全球</div>
        <div class="co-r">出海打法：技术 + 品牌双线</div>
        <div class="co-r">官网：<a class="co-site" href="https://lexy.com.cn" target="_blank" rel="noopener">🌐 lexy.com.cn</a></div>
        <div class="co-r reason">推荐理由：技术型小家电出海，研究"技术 + 品牌"。</div></div>
        <div class="co"><div class="co-h"><b>恒林股份</b><span class="co-t sm">中小</span></div>
        <div class="co-r">创立：1998 年 ｜ 总部：湖州</div>
        <div class="co-r">主营：办公椅、沙发，出口龙头</div>
        <div class="co-r">出口市场：欧美</div>
        <div class="co-r">出海打法：大件家具跨境与供应链</div>
        <div class="co-r">官网：<a class="co-site" href="https://henglin.com" target="_blank" rel="noopener">🌐 henglin.com</a></div>
        <div class="co-r reason">推荐理由：大件家具跨境供应链研究范本。</div></div>
        <div class="co"><div class="co-h"><b>佩蒂股份</b><span class="co-t sm">中小</span></div>
        <div class="co-r">创立：2002 年 ｜ 总部：温州</div>
        <div class="co-r">主营：宠物咬胶、食品</div>
        <div class="co-r">出口市场：全球</div>
        <div class="co-r">出海打法：OEM→品牌</div>
        <div class="co-r">官网：<a class="co-site" href="https://petpal.com.cn" target="_blank" rel="noopener">🌐 petpal.com.cn</a></div>
        <div class="co-r reason">推荐理由：宠物零食 OEM→品牌，研究宠物食品出海。</div></div>
        <div class="co"><div class="co-h"><b>鱼跃医疗</b><span class="co-t sm">中小</span></div>
        <div class="co-r">创立：1998 年 ｜ 总部：镇江</div>
        <div class="co-r">主营：制氧机、血压计、轮椅</div>
        <div class="co-r">出口市场：海外</div>
        <div class="co-r">出海打法：家用医疗器械合规出海</div>
        <div class="co-r">官网：<a class="co-site" href="https://yuwell.com" target="_blank" rel="noopener">🌐 yuwell.com</a></div>
        <div class="co-r reason">推荐理由：家用医疗器械合规出海样本。</div></div>
      `}
    ]},
    {title:'Day 3 · 外贸企业推荐（中国）', tag:'第3天 · 中小 5 / 头部 1', blocks:[
    {h:'💡 今日怎么用这笔清单', body:'<p>① 在「阿里巴巴国际站」「中国制造网(Made-in-China)」搜这些企业的主营品类，找同类供应商或可合作的买家；② 开发信模板：Hi [Name], we are a factory supplying [品类], MOQ [X], 附 catalog 与检测报告；③ 关注「广交会」线上展厅定向联系；④ 合作前用「天眼查/企查查」核验资质与经营异常，再下单。</p>'},
      {h:'今日推荐 · 6 家（中小企业为主，含行业标杆）', body:`
        <div class="co"><div class="co-h"><b>海尔智家</b><span class="co-t hd">头部</span></div>
        <div class="co-r">创立：1984 年 ｜ 总部：青岛</div>
        <div class="co-r">主营：白色家电、智能家居，全球布局</div>
        <div class="co-r">出口市场：全球（海外并购 + 本地工厂）</div>
        <div class="co-r">出海打法：海外并购 + 本地化</div>
        <div class="co-r">官网：<a class="co-site" href="https://haier.com" target="_blank" rel="noopener">🌐 haier.com</a></div>
        <div class="co-r reason">推荐理由："中国品牌全球化"范式，必研究。</div></div>
        <div class="co"><div class="co-h"><b>绿联科技</b><span class="co-t sm">中小</span></div>
        <div class="co-r">创立：2012 年 ｜ 总部：深圳</div>
        <div class="co-r">主营：3C 数码配件（线材、拓展坞）</div>
        <div class="co-r">出口市场：亚马逊 + 独立站</div>
        <div class="co-r">出海打法：选品 + 品牌化</div>
        <div class="co-r">官网：<a class="co-site" href="https://ugreen.com" target="_blank" rel="noopener">🌐 ugreen.com</a></div>
        <div class="co-r reason">推荐理由：数码配件跨境电商标杆，研究选品与品牌化。</div></div>
        <div class="co"><div class="co-h"><b>科沃斯</b><span class="co-t sm">中小</span></div>
        <div class="co-r">创立：1998 年 ｜ 总部：苏州</div>
        <div class="co-r">主营：扫地机器人、服务机器人（科沃斯 / 添可）</div>
        <div class="co-r">出口市场：欧美</div>
        <div class="co-r">出海打法：双品牌运营</div>
        <div class="co-r">官网：<a class="co-site" href="https://ecovacs.com" target="_blank" rel="noopener">🌐 ecovacs.com</a></div>
        <div class="co-r reason">推荐理由：智能硬件打欧美样本，研究"双品牌"出海。</div></div>
        <div class="co"><div class="co-h"><b>永艺股份</b><span class="co-t sm">中小</span></div>
        <div class="co-r">创立：2001 年 ｜ 总部：湖州</div>
        <div class="co-r">主营：办公椅，出口主力</div>
        <div class="co-r">出口市场：欧美</div>
        <div class="co-r">出海打法：大件家具跨境</div>
        <div class="co-r">官网：<a class="co-site" href="https://yongyi.com" target="_blank" rel="noopener">🌐 yongyi.com</a></div>
        <div class="co-r reason">推荐理由：大件家具跨境供应链研究范本。</div></div>
        <div class="co"><div class="co-h"><b>乖宝宠物</b><span class="co-t sm">中小</span></div>
        <div class="co-r">创立：2006 年 ｜ 总部：聊城</div>
        <div class="co-r">主营：宠物食品（麦富迪 Myfoodie）</div>
        <div class="co-r">出口市场：全球</div>
        <div class="co-r">出海打法：品牌化运营</div>
        <div class="co-r">官网：<a class="co-site" href="https://myfoodie.com" target="_blank" rel="noopener">🌐 myfoodie.com</a></div>
        <div class="co-r reason">推荐理由：宠物食品品牌化出海代表。</div></div>
        <div class="co"><div class="co-h"><b>东方生物</b><span class="co-t sm">中小</span></div>
        <div class="co-r">创立：2005 年 ｜ 总部：湖州</div>
        <div class="co-r">主营：体外诊断试剂（POCT）</div>
        <div class="co-r">出口市场：欧美</div>
        <div class="co-r">出海打法：合规 + 渠道</div>
        <div class="co-r">官网：<a class="co-site" href="https://orientgene.com" target="_blank" rel="noopener">🌐 orientgene.com</a></div>
        <div class="co-r reason">推荐理由：IVD 合规与渠道出海样本。</div></div>
      `}
    ]},
    {title:'Day 4 · 外贸企业推荐（中国）', tag:'第4天 · 中小 6 / 头部 0', blocks:[
    {h:'💡 今日怎么用这笔清单', body:'<p>① 在「阿里巴巴国际站」「中国制造网(Made-in-China)」搜这些企业的主营品类，找同类供应商或可合作的买家；② 开发信模板：Hi [Name], we are a factory supplying [品类], MOQ [X], 附 catalog 与检测报告；③ 关注「广交会」线上展厅定向联系；④ 合作前用「天眼查/企查查」核验资质与经营异常，再下单。</p>'},
      {h:'今日推荐 · 6 家（中小企业为主，含行业标杆）', body:`
        <div class="co"><div class="co-h"><b>奥佳华</b><span class="co-t sm">中小</span></div>
        <div class="co-r">创立：1996 年 ｜ 总部：厦门</div>
        <div class="co-r">主营：按摩器具、健康椅（OGAWA）</div>
        <div class="co-r">出口市场：全球</div>
        <div class="co-r">出海打法：健康品类全球渠道</div>
        <div class="co-r">官网：<a class="co-site" href="https://ogawa.com.cn" target="_blank" rel="noopener">🌐 ogawa.com.cn</a></div>
        <div class="co-r reason">推荐理由：按摩器具全球渠道出海样本。</div></div>
        <div class="co"><div class="co-h"><b>石头科技</b><span class="co-t sm">中小</span></div>
        <div class="co-r">创立：2014 年 ｜ 总部：北京</div>
        <div class="co-r">主营：扫地机器人，高端化出海</div>
        <div class="co-r">出口市场：欧美</div>
        <div class="co-r">出海打法：技术溢价 + 品牌</div>
        <div class="co-r">官网：<a class="co-site" href="https://roborock.com" target="_blank" rel="noopener">🌐 roborock.com</a></div>
        <div class="co-r reason">推荐理由："技术溢价 + 品牌"打法代表。</div></div>
        <div class="co"><div class="co-h"><b>麒盛科技</b><span class="co-t sm">中小</span></div>
        <div class="co-r">创立：2005 年 ｜ 总部：嘉兴</div>
        <div class="co-r">主营：智能电动床</div>
        <div class="co-r">出口市场：北美</div>
        <div class="co-r">出海打法：睡眠科技品类</div>
        <div class="co-r">官网：<a class="co-site" href="https://keesonofficial.com" target="_blank" rel="noopener">🌐 keesonofficial.com</a></div>
        <div class="co-r reason">推荐理由：睡眠科技品类出海，研究智能床跨境。</div></div>
        <div class="co"><div class="co-h"><b>梦百合</b><span class="co-t sm">中小</span></div>
        <div class="co-r">创立：2003 年 ｜ 总部：南通</div>
        <div class="co-r">主营：记忆绵床垫（Mlily）</div>
        <div class="co-r">出口市场：欧美</div>
        <div class="co-r">出海打法：大件床垫跨境</div>
        <div class="co-r">官网：<a class="co-site" href="https://mlily.com" target="_blank" rel="noopener">🌐 mlily.com</a></div>
        <div class="co-r reason">推荐理由：大件床垫跨境样本。</div></div>
        <div class="co"><div class="co-h"><b>博拓生物</b><span class="co-t sm">中小</span></div>
        <div class="co-r">创立：2008 年 ｜ 总部：杭州</div>
        <div class="co-r">主营：体外诊断、POCT</div>
        <div class="co-r">出口市场：欧美</div>
        <div class="co-r">出海打法：诊断合规出海</div>
        <div class="co-r">官网：<a class="co-site" href="https://ballotdx.com" target="_blank" rel="noopener">🌐 ballotdx.com</a></div>
        <div class="co-r reason">推荐理由：诊断试剂合规出海代表。</div></div>
        <div class="co"><div class="co-h"><b>致欧科技</b><span class="co-t sm">中小</span></div>
        <div class="co-r">创立：2010 年 ｜ 总部：郑州</div>
        <div class="co-r">主营：家居家具跨境电商（SONGMICS），欧洲站标杆</div>
        <div class="co-r">出口市场：欧洲</div>
        <div class="co-r">出海打法：多品类家居运营</div>
        <div class="co-r">官网：<a class="co-site" href="https://songmics.com" target="_blank" rel="noopener">🌐 songmics.com</a></div>
        <div class="co-r reason">推荐理由：多品类家居出海范本，研究欧洲站运营。</div></div>
      `}
    ]},
    {title:'Day 5 · 外贸企业推荐（中国）', tag:'第5天 · 中小 6 / 头部 0', blocks:[
    {h:'💡 今日怎么用这笔清单', body:'<p>① 在「阿里巴巴国际站」「中国制造网(Made-in-China)」搜这些企业的主营品类，找同类供应商或可合作的买家；② 开发信模板：Hi [Name], we are a factory supplying [品类], MOQ [X], 附 catalog 与检测报告；③ 关注「广交会」线上展厅定向联系；④ 合作前用「天眼查/企查查」核验资质与经营异常，再下单。</p>'},
      {h:'今日推荐 · 6 家（中小企业为主，含行业标杆）', body:`
        <div class="co"><div class="co-h"><b>九号公司</b><span class="co-t sm">中小</span></div>
        <div class="co-r">创立：2012 年 ｜ 总部：北京</div>
        <div class="co-r">主营：电动滑板车、平衡车（Segway-Ninebot）</div>
        <div class="co-r">出口市场：全球</div>
        <div class="co-r">出海打法：短交通全球品牌</div>
        <div class="co-r">官网：<a class="co-site" href="https://ninebot.com" target="_blank" rel="noopener">🌐 ninebot.com</a></div>
        <div class="co-r reason">推荐理由："短交通"全球品牌样本，研究硬件出海。</div></div>
        <div class="co"><div class="co-h"><b>浙江正特</b><span class="co-t sm">中小</span></div>
        <div class="co-r">创立：2006 年 ｜ 总部：台州</div>
        <div class="co-r">主营：户外遮阳、休闲家具</div>
        <div class="co-r">出口市场：欧美</div>
        <div class="co-r">出海打法：户外品类跨境</div>
        <div class="co-r">官网：<span class="co-site none">🌐 官网建议搜索「浙江正特」</span></div>
        <div class="co-r reason">推荐理由：户外品类出海，研究遮阳家具跨境。</div></div>
        <div class="co"><div class="co-h"><b>源飞宠物</b><span class="co-t sm">中小</span></div>
        <div class="co-r">创立：2002 年 ｜ 总部：温州</div>
        <div class="co-r">主营：宠物牵引用具、零食</div>
        <div class="co-r">出口市场：全球</div>
        <div class="co-r">出海打法：OEM 出海</div>
        <div class="co-r">官网：<span class="co-site none">🌐 官网建议搜索「源飞宠物」</span></div>
        <div class="co-r reason">推荐理由：宠物用品 OEM 出海代表。</div></div>
        <div class="co"><div class="co-h"><b>可孚医疗</b><span class="co-t sm">中小</span></div>
        <div class="co-r">创立：2009 年 ｜ 总部：长沙</div>
        <div class="co-r">主营：家用医疗器械</div>
        <div class="co-r">出口市场：跨境</div>
        <div class="co-r">出海打法：健康消费出海</div>
        <div class="co-r">官网：<a class="co-site" href="https://cofoe.com" target="_blank" rel="noopener">🌐 cofoe.com</a></div>
        <div class="co-r reason">推荐理由：健康消费出海样本。</div></div>
        <div class="co"><div class="co-h"><b>赛维时代</b><span class="co-t sm">中小</span></div>
        <div class="co-r">创立：2012 年 ｜ 总部：深圳</div>
        <div class="co-r">主营：跨境电商（服饰、3C、美妆）多品类</div>
        <div class="co-r">出口市场：全球</div>
        <div class="co-r">出海打法：泛品类运营</div>
        <div class="co-r">官网：<span class="co-site none">🌐 官网建议搜索「赛维时代」</span></div>
        <div class="co-r reason">推荐理由："泛品类运营"范本，研究综合卖家打法。</div></div>
        <div class="co"><div class="co-h"><b>华宝新能</b><span class="co-t sm">中小</span></div>
        <div class="co-r">创立：2011 年 ｜ 总部：深圳</div>
        <div class="co-r">主营：便携储能电源（Jackery）</div>
        <div class="co-r">出口市场：欧美</div>
        <div class="co-r">出海打法：新能源消费品牌</div>
        <div class="co-r">官网：<a class="co-site" href="https://jackery.com" target="_blank" rel="noopener">🌐 jackery.com</a></div>
        <div class="co-r reason">推荐理由：新能源消费出海标杆，研究储能品牌化。</div></div>
      `}
    ]},
    {title:'Day 6 · 外贸企业推荐（中国）', tag:'第6天 · 中小 5 / 头部 1', blocks:[
    {h:'💡 今日怎么用这笔清单', body:'<p>① 在「阿里巴巴国际站」「中国制造网(Made-in-China)」搜这些企业的主营品类，找同类供应商或可合作的买家；② 开发信模板：Hi [Name], we are a factory supplying [品类], MOQ [X], 附 catalog 与检测报告；③ 关注「广交会」线上展厅定向联系；④ 合作前用「天眼查/企查查」核验资质与经营异常，再下单。</p>'},
      {h:'今日推荐 · 6 家（中小企业为主，含行业标杆）', body:`
        <div class="co"><div class="co-h"><b>美的集团</b><span class="co-t hd">头部</span></div>
        <div class="co-r">创立：1968 年 ｜ 总部：佛山</div>
        <div class="co-r">主营：家电全品类、暖通空调、工业机器人</div>
        <div class="co-r">出口市场：全球（海外工厂）</div>
        <div class="co-r">出海打法：研发 + 海外工厂</div>
        <div class="co-r">官网：<a class="co-site" href="https://midea.com" target="_blank" rel="noopener">🌐 midea.com</a></div>
        <div class="co-r reason">推荐理由：研发布局 + 海外工厂，综合出海范本，必研究。</div></div>
        <div class="co"><div class="co-h"><b>久祺股份</b><span class="co-t sm">中小</span></div>
        <div class="co-r">创立：2000 年 ｜ 总部：杭州</div>
        <div class="co-r">主营：自行车、童车、电助力车</div>
        <div class="co-r">出口市场：欧美</div>
        <div class="co-r">出海打法：两轮出行出海</div>
        <div class="co-r">官网：<span class="co-site none">🌐 官网建议搜索「久祺股份」</span></div>
        <div class="co-r reason">推荐理由：两轮出行出海，研究自行车跨境。</div></div>
        <div class="co"><div class="co-h"><b>星徽股份</b><span class="co-t sm">中小</span></div>
        <div class="co-r">创立：1994 年 ｜ 总部：佛山</div>
        <div class="co-r">主营：滑轨、铰链 + 跨境电商（泽宝）</div>
        <div class="co-r">出口市场：全球</div>
        <div class="co-r">出海打法：五金→品牌转型</div>
        <div class="co-r">官网：<span class="co-site none">🌐 官网建议搜索「星徽股份」</span></div>
        <div class="co-r reason">推荐理由："五金 → 品牌"转型样本。</div></div>
        <div class="co"><div class="co-h"><b>玉马遮阳</b><span class="co-t sm">中小</span></div>
        <div class="co-r">创立：2014 年 ｜ 总部：台州</div>
        <div class="co-r">主营：遮阳面料、遮光帘</div>
        <div class="co-r">出口市场：全球</div>
        <div class="co-r">出海打法：细分材料出海</div>
        <div class="co-r">官网：<span class="co-site none">🌐 官网建议搜索「玉马遮阳」</span></div>
        <div class="co-r reason">推荐理由：细分材料出海，研究面料跨境。</div></div>
        <div class="co"><div class="co-h"><b>派能科技</b><span class="co-t sm">中小</span></div>
        <div class="co-r">创立：2009 年 ｜ 总部：上海</div>
        <div class="co-r">主营：储能电池系统</div>
        <div class="co-r">出口市场：欧美 B2B</div>
        <div class="co-r">出海打法：储能 B2B 海外</div>
        <div class="co-r">官网：<a class="co-site" href="https://pylontech.com" target="_blank" rel="noopener">🌐 pylontech.com</a></div>
        <div class="co-r reason">推荐理由：储能 B2B 海外样本。</div></div>
        <div class="co"><div class="co-h"><b>傲基科技</b><span class="co-t sm">中小</span></div>
        <div class="co-r">创立：2010 年 ｜ 总部：深圳</div>
        <div class="co-r">主营：跨境电商（家居、3C），多品牌矩阵</div>
        <div class="co-r">出口市场：全球</div>
        <div class="co-r">出海打法：多品牌矩阵</div>
        <div class="co-r">官网：<a class="co-site" href="https://aukey.com" target="_blank" rel="noopener">🌐 aukey.com</a></div>
        <div class="co-r reason">推荐理由：多品牌矩阵出海范本。</div></div>
      `}
    ]},
    {title:'Day 7 · 外贸企业推荐（中国）', tag:'第7天 · 中小 6 / 头部 0', blocks:[
    {h:'💡 今日怎么用这笔清单', body:'<p>① 在「阿里巴巴国际站」「中国制造网(Made-in-China)」搜这些企业的主营品类，找同类供应商或可合作的买家；② 开发信模板：Hi [Name], we are a factory supplying [品类], MOQ [X], 附 catalog 与检测报告；③ 关注「广交会」线上展厅定向联系；④ 合作前用「天眼查/企查查」核验资质与经营异常，再下单。</p>'},
      {h:'今日推荐 · 6 家（中小企业为主，含行业标杆）', body:`
        <div class="co"><div class="co-h"><b>奋达科技</b><span class="co-t sm">中小</span></div>
        <div class="co-r">创立：1993 年 ｜ 总部：深圳</div>
        <div class="co-r">主营：电声、智能音箱、小家电</div>
        <div class="co-r">出口市场：全球</div>
        <div class="co-r">出海打法：硬件代工转品牌</div>
        <div class="co-r">官网：<a class="co-site" href="https://fenda.com" target="_blank" rel="noopener">🌐 fenda.com</a></div>
        <div class="co-r reason">推荐理由：声学 + 小家电出海，研究硬件代工转品牌。</div></div>
        <div class="co"><div class="co-h"><b>朝阳科技</b><span class="co-t sm">中小</span></div>
        <div class="co-r">创立：2005 年 ｜ 总部：东莞</div>
        <div class="co-r">主营：电声配件（耳机、音箱）</div>
        <div class="co-r">出口市场：全球</div>
        <div class="co-r">出海打法：声学配件出海</div>
        <div class="co-r">官网：<span class="co-site none">🌐 官网建议搜索「朝阳科技」</span></div>
        <div class="co-r reason">推荐理由：声学配件出海样本。</div></div>
        <div class="co"><div class="co-h"><b>中源家居</b><span class="co-t sm">中小</span></div>
        <div class="co-r">创立：2001 年 ｜ 总部：杭州</div>
        <div class="co-r">主营：沙发、功能沙发</div>
        <div class="co-r">出口市场：欧美</div>
        <div class="co-r">出海打法：功能沙发跨境</div>
        <div class="co-r">官网：<span class="co-site none">🌐 官网建议搜索「中源家居」</span></div>
        <div class="co-r reason">推荐理由：功能沙发跨境出海代表。</div></div>
        <div class="co"><div class="co-h"><b>子不语</b><span class="co-t sm">中小</span></div>
        <div class="co-r">创立：2011 年 ｜ 总部：杭州</div>
        <div class="co-r">主营：跨境电商服装</div>
        <div class="co-r">出口市场：欧美</div>
        <div class="co-r">出海打法：女装选品</div>
        <div class="co-r">官网：<a class="co-site" href="https://zibuyu.com" target="_blank" rel="noopener">🌐 zibuyu.com</a></div>
        <div class="co-r reason">推荐理由：跨境服装出海，研究女装选品。</div></div>
        <div class="co"><div class="co-h"><b>奥泰生物</b><span class="co-t sm">中小</span></div>
        <div class="co-r">创立：2008 年 ｜ 总部：杭州</div>
        <div class="co-r">主营：体外诊断试剂</div>
        <div class="co-r">出口市场：欧美</div>
        <div class="co-r">出海打法：IVD 出海</div>
        <div class="co-r">官网：<a class="co-site" href="https://alltest.com.cn" target="_blank" rel="noopener">🌐 alltest.com.cn</a></div>
        <div class="co-r reason">推荐理由：IVD 出海样本。</div></div>
        <div class="co"><div class="co-h"><b>健盛集团</b><span class="co-t sm">中小</span></div>
        <div class="co-r">创立：1993 年 ｜ 总部：杭州</div>
        <div class="co-r">主营：棉袜、无缝内衣（代工）</div>
        <div class="co-r">出口市场：全球</div>
        <div class="co-r">出海打法：隐形冠军代工</div>
        <div class="co-r">官网：<span class="co-site none">🌐 官网建议搜索「健盛集团」</span></div>
        <div class="co-r reason">推荐理由："隐形冠军"针织代工出海。</div></div>
      `}
    ]},
    {title:'Day 8 · 外贸企业推荐（中国）', tag:'第8天 · 中小 6 / 头部 0', blocks:[
    {h:'💡 今日怎么用这笔清单', body:'<p>① 在「阿里巴巴国际站」「中国制造网(Made-in-China)」搜这些企业的主营品类，找同类供应商或可合作的买家；② 开发信模板：Hi [Name], we are a factory supplying [品类], MOQ [X], 附 catalog 与检测报告；③ 关注「广交会」线上展厅定向联系；④ 合作前用「天眼查/企查查」核验资质与经营异常，再下单。</p>'},
      {h:'今日推荐 · 6 家（中小企业为主，含行业标杆）', body:`
        <div class="co"><div class="co-h"><b>比依电器</b><span class="co-t sm">中小</span></div>
        <div class="co-r">创立：2001 年 ｜ 总部：宁波</div>
        <div class="co-r">主营：油炸锅、空气炸锅（代工）</div>
        <div class="co-r">出口市场：全球</div>
        <div class="co-r">出海打法：厨房小家电代工</div>
        <div class="co-r">官网：<span class="co-site none">🌐 官网建议搜索「比依电器」</span></div>
        <div class="co-r reason">推荐理由：厨房小家电代工出海样本。</div></div>
        <div class="co"><div class="co-h"><b>富佳股份</b><span class="co-t sm">中小</span></div>
        <div class="co-r">创立：2002 年 ｜ 总部：宁波</div>
        <div class="co-r">主营：吸尘器、扫地机（代工）</div>
        <div class="co-r">出口市场：全球</div>
        <div class="co-r">出海打法：清洁电器代工</div>
        <div class="co-r">官网：<span class="co-site none">🌐 官网建议搜索「富佳股份」</span></div>
        <div class="co-r reason">推荐理由：清洁电器代工出海代表。</div></div>
        <div class="co"><div class="co-h"><b>银都股份</b><span class="co-t sm">中小</span></div>
        <div class="co-r">创立：2003 年 ｜ 总部：杭州</div>
        <div class="co-r">主营：商用餐饮设备（制冰机、展示柜）</div>
        <div class="co-r">出口市场：全球 B2B</div>
        <div class="co-r">出海打法：商用设备渠道</div>
        <div class="co-r">官网：<span class="co-site none">🌐 官网建议搜索「银都股份」</span></div>
        <div class="co-r reason">推荐理由：商用设备出海，研究 B2B 渠道。</div></div>
        <div class="co"><div class="co-h"><b>金麒麟</b><span class="co-t sm">中小</span></div>
        <div class="co-r">创立：1999 年 ｜ 总部：济南</div>
        <div class="co-r">主营：汽车刹车片</div>
        <div class="co-r">出口市场：全球</div>
        <div class="co-r">出海打法：汽车售后市场</div>
        <div class="co-r">官网：<span class="co-site none">🌐 官网建议搜索「金麒麟」</span></div>
        <div class="co-r reason">推荐理由：汽车配件出海，研究售后市场。</div></div>
        <div class="co"><div class="co-h"><b>锋龙股份</b><span class="co-t sm">中小</span></div>
        <div class="co-r">创立：2003 年 ｜ 总部：绍兴</div>
        <div class="co-r">主营：园林机械、汽车零部件</div>
        <div class="co-r">出口市场：全球</div>
        <div class="co-r">出海打法：户外动力设备</div>
        <div class="co-r">官网：<span class="co-site none">🌐 官网建议搜索「锋龙股份」</span></div>
        <div class="co-r reason">推荐理由：户外动力设备出海样本。</div></div>
        <div class="co"><div class="co-h"><b>孚日股份</b><span class="co-t sm">中小</span></div>
        <div class="co-r">创立：1987 年 ｜ 总部：潍坊</div>
        <div class="co-r">主营：毛巾、家纺</div>
        <div class="co-r">出口市场：全球</div>
        <div class="co-r">出海打法：家纺出口大户</div>
        <div class="co-r">官网：<span class="co-site none">🌐 官网建议搜索「孚日股份」</span></div>
        <div class="co-r reason">推荐理由：家纺出口大户，研究纺织品出海。</div></div>
      `}
    ]},
    {title:'Day 9 · 外贸企业推荐（中国）', tag:'第9天 · 中小 5 / 头部 1', blocks:[
    {h:'💡 今日怎么用这笔清单', body:'<p>① 在「阿里巴巴国际站」「中国制造网(Made-in-China)」搜这些企业的主营品类，找同类供应商或可合作的买家；② 开发信模板：Hi [Name], we are a factory supplying [品类], MOQ [X], 附 catalog 与检测报告；③ 关注「广交会」线上展厅定向联系；④ 合作前用「天眼查/企查查」核验资质与经营异常，再下单。</p>'},
      {h:'今日推荐 · 6 家（中小企业为主，含行业标杆）', body:`
        <div class="co"><div class="co-h"><b>比亚迪</b><span class="co-t hd">头部</span></div>
        <div class="co-r">创立：1995 年 ｜ 总部：深圳</div>
        <div class="co-r">主营：新能源汽车、动力电池、储能</div>
        <div class="co-r">出口市场：全球</div>
        <div class="co-r">出海打法：汽车出海打法</div>
        <div class="co-r">官网：<a class="co-site" href="https://byd.com" target="_blank" rel="noopener">🌐 byd.com</a></div>
        <div class="co-r reason">推荐理由：高端制造全球化标杆，研究汽车出海打法，必研究。</div></div>
        <div class="co"><div class="co-h"><b>涛涛车业</b><span class="co-t sm">中小</span></div>
        <div class="co-r">创立：2015 年 ｜ 总部：丽水</div>
        <div class="co-r">主营：全地形车、电动滑板车</div>
        <div class="co-r">出口市场：欧美</div>
        <div class="co-r">出海打法：户外动力出海</div>
        <div class="co-r">官网：<span class="co-site none">🌐 官网建议搜索「涛涛车业」</span></div>
        <div class="co-r reason">推荐理由："户外动力"出海代表。</div></div>
        <div class="co"><div class="co-h"><b>春风动力</b><span class="co-t sm">中小</span></div>
        <div class="co-r">创立：2003 年 ｜ 总部：杭州</div>
        <div class="co-r">主营：全地形车、摩托车</div>
        <div class="co-r">出口市场：欧美</div>
        <div class="co-r">出海打法：动力运动品类</div>
        <div class="co-r">官网：<a class="co-site" href="https://cfmoto.com" target="_blank" rel="noopener">🌐 cfmoto.com</a></div>
        <div class="co-r reason">推荐理由：动力运动品类出海样本。</div></div>
        <div class="co"><div class="co-h"><b>真爱美家</b><span class="co-t sm">中小</span></div>
        <div class="co-r">创立：2001 年 ｜ 总部：金华</div>
        <div class="co-r">主营：毛毯、家纺</div>
        <div class="co-r">出口市场：全球</div>
        <div class="co-r">出海打法：家纺出海</div>
        <div class="co-r">官网：<span class="co-site none">🌐 官网建议搜索「真爱美家」</span></div>
        <div class="co-r reason">推荐理由：家纺出海，研究毛毯跨境。</div></div>
        <div class="co"><div class="co-h"><b>众望布艺</b><span class="co-t sm">中小</span></div>
        <div class="co-r">创立：1999 年 ｜ 总部：杭州</div>
        <div class="co-r">主营：装饰布艺、沙发布</div>
        <div class="co-r">出口市场：全球</div>
        <div class="co-r">出海打法：面料出海</div>
        <div class="co-r">官网：<span class="co-site none">🌐 官网建议搜索「众望布艺」</span></div>
        <div class="co-r reason">推荐理由：面料出海，研究布艺跨境。</div></div>
        <div class="co"><div class="co-h"><b>申洲国际</b><span class="co-t sm">中小</span></div>
        <div class="co-r">创立：1990 年 ｜ 总部：宁波</div>
        <div class="co-r">主营：针织面料、成衣代工（Nike/Adidas 核心供应商）</div>
        <div class="co-r">出口市场：全球</div>
        <div class="co-r">出海打法：隐形冠军代工</div>
        <div class="co-r">官网：<span class="co-site none">🌐 官网建议搜索「申洲国际」</span></div>
        <div class="co-r reason">推荐理由："隐形冠军"代工出海典范。</div></div>
      `}
    ]},
    {title:'Day 10 · 外贸企业推荐（中国）', tag:'第10天 · 中小 5 / 头部 1', blocks:[
    {h:'💡 今日怎么用这笔清单', body:'<p>① 在「阿里巴巴国际站」「中国制造网(Made-in-China)」搜这些企业的主营品类，找同类供应商或可合作的买家；② 开发信模板：Hi [Name], we are a factory supplying [品类], MOQ [X], 附 catalog 与检测报告；③ 关注「广交会」线上展厅定向联系；④ 合作前用「天眼查/企查查」核验资质与经营异常，再下单。</p>'},
      {h:'今日推荐 · 6 家（中小企业为主，含行业标杆）', body:`
        <div class="co"><div class="co-h"><b>华为技术</b><span class="co-t hd">头部</span></div>
        <div class="co-r">创立：1987 年 ｜ 总部：深圳</div>
        <div class="co-r">主营：通信设备、消费电子、云服务</div>
        <div class="co-r">出口市场：全球</div>
        <div class="co-r">出海打法：科技出海 + 合规范式</div>
        <div class="co-r">官网：<a class="co-site" href="https://huawei.com" target="_blank" rel="noopener">🌐 huawei.com</a></div>
        <div class="co-r reason">推荐理由：科技出海与合规范式（受地缘影响仍具研究价值），必研究。</div></div>
        <div class="co"><div class="co-h"><b>英派斯</b><span class="co-t sm">中小</span></div>
        <div class="co-r">创立：1993 年 ｜ 总部：青岛</div>
        <div class="co-r">主营：健身器材</div>
        <div class="co-r">出口市场：全球</div>
        <div class="co-r">出海打法：运动器材出海</div>
        <div class="co-r">官网：<span class="co-site none">🌐 官网建议搜索「英派斯」</span></div>
        <div class="co-r reason">推荐理由：运动器材出海样本。</div></div>
        <div class="co"><div class="co-h"><b>巨星科技</b><span class="co-t sm">中小</span></div>
        <div class="co-r">创立：1993 年 ｜ 总部：杭州</div>
        <div class="co-r">主营：手工具，出口龙头</div>
        <div class="co-r">出口市场：全球</div>
        <div class="co-r">出海打法：五金工具全球渠道</div>
        <div class="co-r">官网：<a class="co-site" href="https://greatstar.com" target="_blank" rel="noopener">🌐 greatstar.com</a></div>
        <div class="co-r reason">推荐理由：五金工具全球渠道范本。</div></div>
        <div class="co"><div class="co-h"><b>泉峰控股</b><span class="co-t sm">中小</span></div>
        <div class="co-r">创立：1997 年 ｜ 总部：南京</div>
        <div class="co-r">主营：电动工具（EGO 品牌）</div>
        <div class="co-r">出口市场：欧美</div>
        <div class="co-r">出海打法：OPE 锂电化品牌</div>
        <div class="co-r">官网：<a class="co-site" href="https://chervon.com" target="_blank" rel="noopener">🌐 chervon.com</a></div>
        <div class="co-r reason">推荐理由："OPE 锂电化"品牌出海代表。</div></div>
        <div class="co"><div class="co-h"><b>通达创智</b><span class="co-t sm">中小</span></div>
        <div class="co-r">创立：2013 年 ｜ 总部：厦门</div>
        <div class="co-r">主营：体育用品、家居用品</div>
        <div class="co-r">出口市场：全球</div>
        <div class="co-r">出海打法：制造 + 品牌</div>
        <div class="co-r">官网：<span class="co-site none">🌐 官网建议搜索「通达创智」</span></div>
        <div class="co-r reason">推荐理由：制造 + 品牌出海样本。</div></div>
        <div class="co"><div class="co-h"><b>钱江摩托</b><span class="co-t sm">中小</span></div>
        <div class="co-r">创立：1985 年 ｜ 总部：台州</div>
        <div class="co-r">主营：摩托车，出口主力</div>
        <div class="co-r">出口市场：全球</div>
        <div class="co-r">出海打法：两轮出海</div>
        <div class="co-r">官网：<a class="co-site" href="https://qjmotor.com" target="_blank" rel="noopener">🌐 qjmotor.com</a></div>
        <div class="co-r reason">推荐理由：两轮出海，研究摩托车跨境。</div></div>
      `}
    ]},
    {title:'Day 11 · 外贸企业推荐（中国）', tag:'第11天 · 中小 5 / 头部 1', blocks:[
    {h:'💡 今日怎么用这笔清单', body:'<p>① 在「阿里巴巴国际站」「中国制造网(Made-in-China)」搜这些企业的主营品类，找同类供应商或可合作的买家；② 开发信模板：Hi [Name], we are a factory supplying [品类], MOQ [X], 附 catalog 与检测报告；③ 关注「广交会」线上展厅定向联系；④ 合作前用「天眼查/企查查」核验资质与经营异常，再下单。</p>'},
      {h:'今日推荐 · 6 家（中小企业为主，含行业标杆）', body:`
        <div class="co"><div class="co-h"><b>大疆创新</b><span class="co-t hd">头部</span></div>
        <div class="co-r">创立：2006 年 ｜ 总部：深圳</div>
        <div class="co-r">主营：消费级无人机、影像云台</div>
        <div class="co-r">出口市场：全球</div>
        <div class="co-r">出海打法：硬科技品牌</div>
        <div class="co-r">官网：<a class="co-site" href="https://dji.com" target="_blank" rel="noopener">🌐 dji.com</a></div>
        <div class="co-r reason">推荐理由：硬科技品牌出海绝对龙头，范式必研究。</div></div>
        <div class="co"><div class="co-h"><b>通拓科技</b><span class="co-t sm">中小</span></div>
        <div class="co-r">创立：2003 年 ｜ 总部：深圳</div>
        <div class="co-r">主营：跨境电商（家居、3C）</div>
        <div class="co-r">出口市场：全球</div>
        <div class="co-r">出海打法：泛品类运营</div>
        <div class="co-r">官网：<a class="co-site" href="https://tomtop.com" target="_blank" rel="noopener">🌐 tomtop.com</a></div>
        <div class="co-r reason">推荐理由："泛品类"运营范本。</div></div>
        <div class="co"><div class="co-h"><b>有棵树</b><span class="co-t sm">中小</span></div>
        <div class="co-r">创立：2010 年 ｜ 总部：深圳</div>
        <div class="co-r">主营：跨境电商（服饰、玩具）</div>
        <div class="co-r">出口市场：全球</div>
        <div class="co-r">出海打法：多品类出海</div>
        <div class="co-r">官网：<span class="co-site none">🌐 官网建议搜索「有棵树」</span></div>
        <div class="co-r reason">推荐理由：多品类出海，研究玩具 + 服饰选品。</div></div>
        <div class="co"><div class="co-h"><b>大业股份</b><span class="co-t sm">中小</span></div>
        <div class="co-r">创立：2003 年 ｜ 总部：绍兴</div>
        <div class="co-r">主营：胎圈钢丝、钢帘线</div>
        <div class="co-r">出口市场：全球</div>
        <div class="co-r">出海打法：工业材料出海</div>
        <div class="co-r">官网：<span class="co-site none">🌐 官网建议搜索「大业股份」</span></div>
        <div class="co-r reason">推荐理由：工业材料出海样本。</div></div>
        <div class="co"><div class="co-h"><b>嘉益股份</b><span class="co-t sm">中小</span></div>
        <div class="co-r">创立：2004 年 ｜ 总部：金华</div>
        <div class="co-r">主营：不锈钢保温杯</div>
        <div class="co-r">出口市场：全球</div>
        <div class="co-r">出海打法：杯壶出海</div>
        <div class="co-r">官网：<span class="co-site none">🌐 官网建议搜索「嘉益股份」</span></div>
        <div class="co-r reason">推荐理由：杯壶出海代表。</div></div>
        <div class="co"><div class="co-h"><b>拓邦股份</b><span class="co-t sm">中小</span></div>
        <div class="co-r">创立：1996 年 ｜ 总部：深圳</div>
        <div class="co-r">主营：智能控制器</div>
        <div class="co-r">出口市场：全球</div>
        <div class="co-r">出海打法：控制器模组出海</div>
        <div class="co-r">官网：<a class="co-site" href="https://topband.com" target="_blank" rel="noopener">🌐 topband.com</a></div>
        <div class="co-r reason">推荐理由：电子控制模组出海样本。</div></div>
      `}
    ]},
    {title:'Day 12 · 外贸企业推荐（中国）', tag:'第12天 · 中小 5 / 头部 1', blocks:[
    {h:'💡 今日怎么用这笔清单', body:'<p>① 在「阿里巴巴国际站」「中国制造网(Made-in-China)」搜这些企业的主营品类，找同类供应商或可合作的买家；② 开发信模板：Hi [Name], we are a factory supplying [品类], MOQ [X], 附 catalog 与检测报告；③ 关注「广交会」线上展厅定向联系；④ 合作前用「天眼查/企查查」核验资质与经营异常，再下单。</p>'},
      {h:'今日推荐 · 6 家（中小企业为主，含行业标杆）', body:`
        <div class="co"><div class="co-h"><b>宁德时代</b><span class="co-t hd">头部</span></div>
        <div class="co-r">创立：2011 年 ｜ 总部：宁德</div>
        <div class="co-r">主营：动力电池、储能系统</div>
        <div class="co-r">出口市场：全球</div>
        <div class="co-r">出海打法：新能源出海</div>
        <div class="co-r">官网：<a class="co-site" href="https://catl.com" target="_blank" rel="noopener">🌐 catl.com</a></div>
        <div class="co-r reason">推荐理由：储能 / 电池全球龙头，研究新能源出海，必研究。</div></div>
        <div class="co"><div class="co-h"><b>和而泰</b><span class="co-t sm">中小</span></div>
        <div class="co-r">创立：2000 年 ｜ 总部：深圳</div>
        <div class="co-r">主营：智能控制器</div>
        <div class="co-r">出口市场：全球</div>
        <div class="co-r">出海打法：控制器模组出海</div>
        <div class="co-r">官网：<span class="co-site none">🌐 官网建议搜索「和而泰」</span></div>
        <div class="co-r reason">推荐理由：控制器模组出海样本。</div></div>
        <div class="co"><div class="co-h"><b>朗科科技</b><span class="co-t sm">中小</span></div>
        <div class="co-r">创立：1999 年 ｜ 总部：深圳</div>
        <div class="co-r">主营：存储、U 盘（专利）</div>
        <div class="co-r">出口市场：全球</div>
        <div class="co-r">出海打法：专利型出海</div>
        <div class="co-r">官网：<a class="co-site" href="https://netac.com" target="_blank" rel="noopener">🌐 netac.com</a></div>
        <div class="co-r reason">推荐理由：专利型出海代表。</div></div>
        <div class="co"><div class="co-h"><b>雷柏科技</b><span class="co-t sm">中小</span></div>
        <div class="co-r">创立：2002 年 ｜ 总部：深圳</div>
        <div class="co-r">主营：无线外设（鼠标、键盘）</div>
        <div class="co-r">出口市场：全球</div>
        <div class="co-r">出海打法：外设品牌出海</div>
        <div class="co-r">官网：<a class="co-site" href="https://rapoo.com" target="_blank" rel="noopener">🌐 rapoo.com</a></div>
        <div class="co-r reason">推荐理由：外设品牌出海样本。</div></div>
        <div class="co"><div class="co-h"><b>瀛通通讯</b><span class="co-t sm">中小</span></div>
        <div class="co-r">创立：2010 年 ｜ 总部：东莞</div>
        <div class="co-r">主营：电声线材</div>
        <div class="co-r">出口市场：全球</div>
        <div class="co-r">出海打法：声学配件出海</div>
        <div class="co-r">官网：<span class="co-site none">🌐 官网建议搜索「瀛通通讯」</span></div>
        <div class="co-r reason">推荐理由：声学配件出海代表。</div></div>
        <div class="co"><div class="co-h"><b>辰奕智能</b><span class="co-t sm">中小</span></div>
        <div class="co-r">创立：2010 年 ｜ 总部：惠州</div>
        <div class="co-r">主营：智能遥控器</div>
        <div class="co-r">出口市场：全球</div>
        <div class="co-r">出海打法：控制器出海</div>
        <div class="co-r">官网：<span class="co-site none">🌐 官网建议搜索「辰奕智能」</span></div>
        <div class="co-r reason">推荐理由：控制器出海，研究遥控器跨境。</div></div>
      `}
    ]},
    {title:'Day 13 · 外贸企业推荐（中国）', tag:'第13天 · 中小 5 / 头部 1', blocks:[
    {h:'💡 今日怎么用这笔清单', body:'<p>① 在「阿里巴巴国际站」「中国制造网(Made-in-China)」搜这些企业的主营品类，找同类供应商或可合作的买家；② 开发信模板：Hi [Name], we are a factory supplying [品类], MOQ [X], 附 catalog 与检测报告；③ 关注「广交会」线上展厅定向联系；④ 合作前用「天眼查/企查查」核验资质与经营异常，再下单。</p>'},
      {h:'今日推荐 · 6 家（中小企业为主，含行业标杆）', body:`
        <div class="co"><div class="co-h"><b>希音（SHEIN）</b><span class="co-t hd">头部</span></div>
        <div class="co-r">创立：2008 年 ｜ 总部：广州</div>
        <div class="co-r">主营：跨境快时尚服装电商</div>
        <div class="co-r">出口市场：全球</div>
        <div class="co-r">出海打法：柔性供应链 + 实时数据</div>
        <div class="co-r">官网：<a class="co-site" href="https://shein.com" target="_blank" rel="noopener">🌐 shein.com</a></div>
        <div class="co-r reason">推荐理由：柔性供应链 + 实时数据出海范式，必研究。</div></div>
        <div class="co"><div class="co-h"><b>德艺文创</b><span class="co-t sm">中小</span></div>
        <div class="co-r">创立：1995 年 ｜ 总部：福州</div>
        <div class="co-r">主营：文创、家居工艺品</div>
        <div class="co-r">出口市场：全球</div>
        <div class="co-r">出海打法：工艺出海</div>
        <div class="co-r">官网：<span class="co-site none">🌐 官网建议搜索「德艺文创」</span></div>
        <div class="co-r reason">推荐理由：工艺出海样本。</div></div>
        <div class="co"><div class="co-h"><b>共创草坪</b><span class="co-t sm">中小</span></div>
        <div class="co-r">创立：2011 年 ｜ 总部：淮安</div>
        <div class="co-r">主营：人造草坪</div>
        <div class="co-r">出口市场：全球</div>
        <div class="co-r">出海打法：建材出海</div>
        <div class="co-r">官网：<a class="co-site" href="https://cggrass.com" target="_blank" rel="noopener">🌐 cggrass.com</a></div>
        <div class="co-r reason">推荐理由：建材出海，研究草坪跨境。</div></div>
        <div class="co"><div class="co-h"><b>家联科技</b><span class="co-t sm">中小</span></div>
        <div class="co-r">创立：2009 年 ｜ 总部：宁波</div>
        <div class="co-r">主营：生物降解餐饮具</div>
        <div class="co-r">出口市场：全球</div>
        <div class="co-r">出海打法：环保耗材</div>
        <div class="co-r">官网：<span class="co-site none">🌐 官网建议搜索「家联科技」</span></div>
        <div class="co-r reason">推荐理由：环保耗材出海代表。</div></div>
        <div class="co"><div class="co-h"><b>恒鑫生活</b><span class="co-t sm">中小</span></div>
        <div class="co-r">创立：1997 年 ｜ 总部：合肥</div>
        <div class="co-r">主营：纸杯、可降解餐饮具</div>
        <div class="co-r">出口市场：全球</div>
        <div class="co-r">出海打法：环保包装</div>
        <div class="co-r">官网：<span class="co-site none">🌐 官网建议搜索「恒鑫生活」</span></div>
        <div class="co-r reason">推荐理由：环保包装出海样本。</div></div>
        <div class="co"><div class="co-h"><b>浙江自然</b><span class="co-t sm">中小</span></div>
        <div class="co-r">创立：1992 年 ｜ 总部：台州</div>
        <div class="co-r">主营：充气床垫、户外睡垫</div>
        <div class="co-r">出口市场：全球</div>
        <div class="co-r">出海打法：户外睡眠</div>
        <div class="co-r">官网：<span class="co-site none">🌐 官网建议搜索「浙江自然」</span></div>
        <div class="co-r reason">推荐理由：户外睡眠出海代表。</div></div>
      `}
    ]},
    {title:'Day 14 · 外贸企业推荐（中国）', tag:'第14天 · 中小 5 / 头部 1', blocks:[
    {h:'💡 今日怎么用这笔清单', body:'<p>① 在「阿里巴巴国际站」「中国制造网(Made-in-China)」搜这些企业的主营品类，找同类供应商或可合作的买家；② 开发信模板：Hi [Name], we are a factory supplying [品类], MOQ [X], 附 catalog 与检测报告；③ 关注「广交会」线上展厅定向联系；④ 合作前用「天眼查/企查查」核验资质与经营异常，再下单。</p>'},
      {h:'今日推荐 · 6 家（中小企业为主，含行业标杆）', body:`
        <div class="co"><div class="co-h"><b>安克创新</b><span class="co-t hd">头部</span></div>
        <div class="co-r">创立：2011 年 ｜ 总部：长沙</div>
        <div class="co-r">主营：充电配件、智能硬件（Anker）</div>
        <div class="co-r">出口市场：全球</div>
        <div class="co-r">出海打法：品牌化 + 渠道</div>
        <div class="co-r">官网：<a class="co-site" href="https://anker.com" target="_blank" rel="noopener">🌐 anker.com</a></div>
        <div class="co-r reason">推荐理由：品牌化 + 渠道出海标杆，必研究。</div></div>
        <div class="co"><div class="co-h"><b>欧圣电气</b><span class="co-t sm">中小</span></div>
        <div class="co-r">创立：2009 年 ｜ 总部：苏州</div>
        <div class="co-r">主营：空压机、小型发电机</div>
        <div class="co-r">出口市场：全球</div>
        <div class="co-r">出海打法：动力设备出海</div>
        <div class="co-r">官网：<span class="co-site none">🌐 官网建议搜索「欧圣电气」</span></div>
        <div class="co-r reason">推荐理由：动力设备出海样本。</div></div>
        <div class="co"><div class="co-h"><b>雅艺科技</b><span class="co-t sm">中小</span></div>
        <div class="co-r">创立：2011 年 ｜ 总部：金华</div>
        <div class="co-r">主营：火盆、户外家具</div>
        <div class="co-r">出口市场：全球</div>
        <div class="co-r">出海打法：户外品类</div>
        <div class="co-r">官网：<span class="co-site none">🌐 官网建议搜索「雅艺科技」</span></div>
        <div class="co-r reason">推荐理由：户外品类出海代表。</div></div>
        <div class="co"><div class="co-h"><b>依依股份</b><span class="co-t sm">中小</span></div>
        <div class="co-r">创立：1990 年 ｜ 总部：天津</div>
        <div class="co-r">主营：宠物垫、卫生护理用品</div>
        <div class="co-r">出口市场：全球</div>
        <div class="co-r">出海打法：宠物耗材</div>
        <div class="co-r">官网：<span class="co-site none">🌐 官网建议搜索「依依股份」</span></div>
        <div class="co-r reason">推荐理由：宠物耗材出海样本。</div></div>
        <div class="co"><div class="co-h"><b>英维克</b><span class="co-t sm">中小</span></div>
        <div class="co-r">创立：2009 年 ｜ 总部：深圳</div>
        <div class="co-r">主营：精密温控（机房空调）</div>
        <div class="co-r">出口市场：全球</div>
        <div class="co-r">出海打法：工业温控</div>
        <div class="co-r">官网：<a class="co-site" href="https://envicool.com" target="_blank" rel="noopener">🌐 envicool.com</a></div>
        <div class="co-r reason">推荐理由：工业温控出海代表。</div></div>
        <div class="co"><div class="co-h"><b>哈尔斯</b><span class="co-t sm">中小</span></div>
        <div class="co-r">创立：1996 年 ｜ 总部：金华</div>
        <div class="co-r">主营：不锈钢保温杯（HAERS），出口龙头</div>
        <div class="co-r">出口市场：全球</div>
        <div class="co-r">出海打法：杯壶 OEM→品牌</div>
        <div class="co-r">官网：<a class="co-site" href="https://haers.com" target="_blank" rel="noopener">🌐 haers.com</a></div>
        <div class="co-r reason">推荐理由：杯壶 OEM→品牌，研究保温杯出海。</div></div>
      `}
    ]},
  ],

  /* ============ 4. 全球新闻热点 ===================== */
  news: [
    {title:'全球供应链的重构', tag:'第1天 · 经济·地缘', blocks:[
    {h:'🔍 怎么读这条新闻', body:'<p>① 先辨信源：优先官方媒体（新华社/央视）、主流通讯社（路透/美联）；营销号、群聊截图先打问号；② 一条新闻问三问：谁发的？证据呢？和我/市场有什么关系？③ 追实时用「央视新闻」「人民日报」公众号或 BBC/Reuters 官网，少看二次剪辑；④ 重大事件等 24 小时再看定论，避免被反转打脸。</p>'},
      {h:'热点', body:'<p>"Just in time"（准时制）供应链在疫情与地缘冲击下暴露脆弱，各国开始把"效率优先"调整为"安全+效率"。</p>'},
      {h:'关键看点', body:'<ul><li>近岸外包(nearshoring)与友岸外包(friend-shoring)升温</li><li>半导体、新能源被多国列为战略资产</li><li>企业从"成本最低"转向"风险可控"</li></ul>'},
      {h:'为何重要', body:'<p>供应链地图的重画，直接决定未来十年的产业迁移、就业与物价。它离普通人的菜篮子和工资条，比新闻标题近得多。</p>'}
    ]},
    {title:'人工智能的拐点', tag:'第2天 · 科技', blocks:[
    {h:'🔍 怎么读这条新闻', body:'<p>① 先辨信源：优先官方媒体（新华社/央视）、主流通讯社（路透/美联）；营销号、群聊截图先打问号；② 一条新闻问三问：谁发的？证据呢？和我/市场有什么关系？③ 追实时用「央视新闻」「人民日报」公众号或 BBC/Reuters 官网，少看二次剪辑；④ 重大事件等 24 小时再看定论，避免被反转打脸。</p>'},
      {h:'热点', body:'<p>大模型从"会聊天"走向"能干活"，Agent（智能体）开始接管流程型任务，生产力范式正在切换。</p>'},
      {h:'关键看点', body:'<ul><li>算力、数据、能源成为新"石油"</li><li>白领工作的边界被重新定义</li><li>监管与安全问题同步升温</li></ul>'},
      {h:'为何重要', body:'<p>这轮技术不是又一个 App，而是可能重写"人如何工作"。早理解、早驾驭者，将拿到新红利。</p>'}
    ]},
    {title:'能源转型的拉锯', tag:'第3天 · 气候·经济', blocks:[
    {h:'🔍 怎么读这条新闻', body:'<p>① 先辨信源：优先官方媒体（新华社/央视）、主流通讯社（路透/美联）；营销号、群聊截图先打问号；② 一条新闻问三问：谁发的？证据呢？和我/市场有什么关系？③ 追实时用「央视新闻」「人民日报」公众号或 BBC/Reuters 官网，少看二次剪辑；④ 重大事件等 24 小时再看定论，避免被反转打脸。</p>'},
      {h:'热点', body:'<p>新能源装机狂飙，但电网、储能、关键矿物仍卡脖子，"转型"与"保供"长期拉锯。</p>'},
      {h:'关键看点', body:'<ul><li>光伏、风电成本持续下探</li><li>锂、镍、稀土成地缘焦点</li><li>极端天气抬高能源安全权重</li></ul>'},
      {h:'为何重要', body:'<p>能源是工业的血液。谁掌握清洁且自主的能源体系，谁就握住未来制造与话语权的底牌。</p>'}
    ]},
    {title:'人口结构的长波', tag:'第4天 · 社会', blocks:[
    {h:'🔍 怎么读这条新闻', body:'<p>① 先辨信源：优先官方媒体（新华社/央视）、主流通讯社（路透/美联）；营销号、群聊截图先打问号；② 一条新闻问三问：谁发的？证据呢？和我/市场有什么关系？③ 追实时用「央视新闻」「人民日报」公众号或 BBC/Reuters 官网，少看二次剪辑；④ 重大事件等 24 小时再看定论，避免被反转打脸。</p>'},
      {h:'热点', body:'<p>多国步入老龄化与低生育率，劳动力收缩、养老金承压，人口红利转向"人才红利"难题。</p>'},
      {h:'关键看点', body:'<ul><li>延迟退休与机器人补位并行</li><li>银发经济成新蓝海</li><li>移民政策成为政治焦点</li></ul>'},
      {h:'为何重要', body:'<p>人口是最慢的变量，却是最硬的约束。它决定消费结构、资产价格与一国几十年后的样子。</p>'}
    ]},
    {title:'货币与地缘', tag:'第5天 · 金融·地缘', blocks:[
    {h:'🔍 怎么读这条新闻', body:'<p>① 先辨信源：优先官方媒体（新华社/央视）、主流通讯社（路透/美联）；营销号、群聊截图先打问号；② 一条新闻问三问：谁发的？证据呢？和我/市场有什么关系？③ 追实时用「央视新闻」「人民日报」公众号或 BBC/Reuters 官网，少看二次剪辑；④ 重大事件等 24 小时再看定论，避免被反转打脸。</p>'},
      {h:'热点', body:'<p>多极化趋势下，结算货币多元化讨论升温，黄金与数字货币被重新定价。</p>'},
      {h:'关键看点', body:'<ul><li>美元地位面临缓慢侵蚀而非崩溃</li><li>央行购金��历史高位</li><li>跨境支付系统多线并行</li></ul>'},
      {h:'为何重要', body:'<p>货币即权力。结算体系的松动，意味着全球财富与影响力的版图正在悄悄重排。</p>'}
    ]},
    {title:'粮食安全警钟', tag:'第6天 · 农业·气候', blocks:[
    {h:'🔍 怎么读这条新闻', body:'<p>① 先辨信源：优先官方媒体（新华社/央视）、主流通讯社（路透/美联）；营销号、群聊截图先打问号；② 一条新闻问三问：谁发的？证据呢？和我/市场有什么关系？③ 追实时用「央视新闻」「人民日报」公众号或 BBC/Reuters 官网，少看二次剪辑；④ 重大事件等 24 小时再看定论，避免被反转打脸。</p>'},
      {h:'热点', body:'<p>极端气候与地缘冲突叠加，小麦、稻米等主粮价格波动加剧，"舌尖上的安全"被重新重视。</p>'},
      {h:'关键看点', body:'<ul><li>主产区天气成为价格催化剂</li><li>种子与耕地是隐形战略资源</li><li>垂直农业、合成蛋白受资本青睐</li></ul>'},
      {h:'为何重要', body:'<p>粮价是百价之基。它牵动通胀、社会稳定与外交筹码，是最朴素也最致命的安全线。</p>'}
    ]},
    {title:'太空：新边疆', tag:'第7天 · 科技·地缘', blocks:[
    {h:'🔍 怎么读这条新闻', body:'<p>① 先辨信源：优先官方媒体（新华社/央视）、主流通讯社（路透/美联）；营销号、群聊截图先打问号；② 一条新闻问三问：谁发的？证据呢？和我/市场有什么关系？③ 追实时用「央视新闻」「人民日报」公众号或 BBC/Reuters 官网，少看二次剪辑；④ 重大事件等 24 小时再看定论，避免被反转打脸。</p>'},
      {h:'热点', body:'<p>商业航天爆发，低轨卫星星座与月球探测升温，太空从科研走向产业与战略角力。</p>'},
      {h:'关键看点', body:'<ul><li>卫星互联网改写连接格局</li><li>近地轨道资源稀缺性上升</li><li>太空规则制定权成新战场</li></ul>'},
      {h:'为何重要', body:'<p>谁定义太空规则，谁就定义下一代通信、导航与安全的底层秩序。</p>'}
    ]},
    {title:'数据与主权', tag:'第8天 · 科技·治理', blocks:[
    {h:'🔍 怎么读这条新闻', body:'<p>① 先辨信源：优先官方媒体（新华社/央视）、主流通讯社（路透/美联）；营销号、群聊截图先打问号；② 一条新闻问三问：谁发的？证据呢？和我/市场有什么关系？③ 追实时用「央视新闻」「人民日报」公众号或 BBC/Reuters 官网，少看二次剪辑；④ 重大事件等 24 小时再看定论，避免被反转打脸。</p>'},
      {h:'热点', body:'<p>"数据本地化"与"跨境流动"之争加剧，数据被视作与领土、税收并列的主权议题。</p>'},
      {h:'关键看点', body:'<ul><li>各国加紧数据出境监管</li><li>大型平台面临拆分与限权讨论</li><li>个人隐私 vs 公共安全的边界重划</li></ul>'},
      {h:'为何重要', body:'<p>数据是数字时代的石油与身份证。它的归属与流向，将定义个人自由与国家治理的边界。</p>'}
    ]},
    {title:'制造业回流之辩', tag:'第9天 · 经济', blocks:[
    {h:'🔍 怎么读这条新闻', body:'<p>① 先辨信源：优先官方媒体（新华社/央视）、主流通讯社（路透/美联）；营销号、群聊截图先打问号；② 一条新闻问三问：谁发的？证据呢？和我/市场有什么关系？③ 追实时用「央视新闻」「人民日报」公众号或 BBC/Reuters 官网，少看二次剪辑；④ 重大事件等 24 小时再看定论，避免被反转打脸。</p>'},
      {h:'热点', body:'<p>"再工业化"成多国共识，但回流成本高、周期长，效果参差，政策与现实持续博弈。</p>'},
      {h:'关键看点', body:'<ul><li>补贴竞赛白热化</li><li>高端制造(芯片、电池)优先回流</li><li>劳动力技能错配成瓶颈</li></ul>'},
      {h:'为何重要', body:'<p>工厂在哪里，就业与产业链话语权就在哪里。制造业的去留，是一国经济韧性的晴雨表。</p>'}
    ]},
    {title:'全球不平等', tag:'第10天 · 社会·经济', blocks:[
    {h:'🔍 怎么读这条新闻', body:'<p>① 先辨信源：优先官方媒体（新华社/央视）、主流通讯社（路透/美联）；营销号、群聊截图先打问号；② 一条新闻问三问：谁发的？证据呢？和我/市场有什么关系？③ 追实时用「央视新闻」「人民日报」公众号或 BBC/Reuters 官网，少看二次剪辑；④ 重大事件等 24 小时再看定论，避免被反转打脸。</p>'},
      {h:'热点', body:'<p>技术红利分配不均，贫富差距在多个经济体内部扩大，"被落下的人"成为政治变量。</p>'},
      {h:'关键看点', body:'<ul><li>资产型富人与工资型中产分化</li><li>教育回报差距拉大</li><li>民粹与保护主义获得土壤</li></ul>'},
      {h:'为何重要', body:'<p>不平等积累到临界点，会反噬增长与稳定。它解释了许多看似突兀的政治风向。</p>'}
    ]},
    {title:'生物科技的边界', tag:'第11天 · 科技·伦理', blocks:[
    {h:'🔍 怎么读这条新闻', body:'<p>① 先辨信源：优先官方媒体（新华社/央视）、主流通讯社（路透/美联）；营销号、群聊截图先打问号；② 一条新闻问三问：谁发的？证据呢？和我/市场有什么关系？③ 追实时用「央视新闻」「人民日报」公众号或 BBC/Reuters 官网，少看二次剪辑；④ 重大事件等 24 小时再看定论，避免被反转打脸。</p>'},
      {h:'热点', body:'<p>基因编辑、AI 制药、长寿研究突飞猛进，能力跑在伦理与法规前面。</p>'},
      {h:'关键看点', body:'<ul><li>个性化医疗走向普及</li><li>合成生物学打开新产业</li><li>"设计生命"引发伦理激辩</li></ul>'},
      {h:'为何重要', body:'<p>生命科学的突破，可能比信息技术更深刻地改变"人是什么"。规则如何定，至关重要。</p>'}
    ]},
    {title:'城市与气候适应', tag:'第12天 · 气候·城市', blocks:[
    {h:'🔍 怎么读这条新闻', body:'<p>① 先辨信源：优先官方媒体（新华社/央视）、主流通讯社（路透/美联）；营销号、群聊截图先打问号；② 一条新闻问三问：谁发的？证据呢？和我/市场有什么关系？③ 追实时用「央视新闻」「人民日报」公众号或 BBC/Reuters 官网，少看二次剪辑；④ 重大事件等 24 小时再看定论，避免被反转打脸。</p>'},
      {h:'热点', body:'<p>热岛、内涝、海平面上升倒逼城市重做"硬件"，韧性城市成万亿级投资方向。</p>'},
      {h:'关键看点', body:'<ul><li>海绵城市、地下空间受重视</li><li>绿色建筑标准升级</li><li>气候移民初现端倪</li></ul>'},
      {h:'为何重要', body:'<p>未来三十年，城市的气候适应力，将直接决定房产价值、公共健康与生活品质。</p>'}
    ]},
    {title:'教育与技能错配', tag:'第13天 · 社会', blocks:[
    {h:'🔍 怎么读这条新闻', body:'<p>① 先辨信源：优先官方媒体（新华社/央视）、主流通讯社（路透/美联）；营销号、群聊截图先打问号；② 一条新闻问三问：谁发的？证据呢？和我/市场有什么关系？③ 追实时用「央视新闻」「人民日报」公众号或 BBC/Reuters 官网，少看二次剪辑；④ 重大事件等 24 小时再看定论，避免被反转打脸。</p>'},
      {h:'热点', body:'<p>学校教的与岗位要的脱节加剧，"终身学习"从口号变成生存必需。</p>'},
      {h:'关键看点', body:'<ul><li>AI 相关技能需求暴涨</li><li>传统学历溢价放缓</li><li>微证书、在职培训兴起</li></ul>'},
      {h:'为何重要', body:'<p>在变化加速的时代，比"学什么"更重要的是"持续学的能力"。这恰是这份工作台存在的意义。</p>'}
    ]},
    {title:'多极世界的秩序', tag:'第14天 · 地缘·收官', blocks:[
    {h:'🔍 怎么读这条新闻', body:'<p>① 先辨信源：优先官方媒体（新华社/央视）、主流通讯社（路透/美联）；营销号、群聊截图先打问号；② 一条新闻问三问：谁发的？证据呢？和我/市场有什么关系？③ 追实时用「央视新闻」「人民日报」公众号或 BBC/Reuters 官网，少看二次剪辑；④ 重大事件等 24 小时再看定论，避免被反转打脸。</p>'},
      {h:'热点', body:'<p>单极时代落幕，多中心格局成型，规则、联盟、贸易线都在重组。</p>'},
      {h:'关键看点', body:'<ul><li>区域合作机制此消彼长</li><li>"选边"压力与"战略自主"并存</li><li>全球治理赤字扩大</li></ul>'},
      {h:'为何重要', body:'<p>理解秩序如何重组，才能看懂新闻里的每一场博弈。两周 14 个议题，是观察世界的 14 个透镜。</p>'},
      {h:'说明', body:'<p style="color:#888;font-size:12px">本模块为精选"全球议题"分析库，按日轮播；实时新闻需联网获取。可作为看世界的思维框架。</p>'}
    ]}
  ],

  /* ===================== 5. 全球旅行（英文） ===================== */
  travel: [
    {title:'京都·日本', tag:'第1天 · 旅行灵感', blocks:[
    {h:'🎫 实操指南', body:'<p>① 国内游在「携程/飞猪/去哪儿」比价订票；出境用「Skyscanner」搜全网最低价；② 签证查「中国领事服务网」(cs.mfa.gov.cn)看目的国要求，东南亚多落地签/电子签；③ 换汇用「XE」看实时汇率，境外刷卡走 Visa/银联免货币转换费；④ 行程用「Google 地图/高德」提前离线下载，订酒店看「Booking/Agoda」的含早与免费取消政策。</p>'},
      {h:'为什么去', body:'<p>千年古都，寺庙、町屋、红叶与抹茶。节奏慢，适合放空，也适合暴走式散步（对代谢友好）。</p>'},
      {h:'实用小贴士', body:'<ul><li>交通：买"京都巴士一日券"，市内基本靠巴士</li><li>最佳季节：3–4 月樱花、11 月红叶</li><li>预算参考：人均每天约 ¥600–900（不含机票）</li></ul>'},
      {h:'必看打卡', body:'<ul><li>伏见稻荷大社千本鸟居（早起人少）</li><li>清水寺 + 二三年坂老街</li><li>岚山竹林与渡月桥</li></ul>'},
      {h:'小提醒', body:'<p>走路多，穿舒服的鞋；抹茶甜品虽好，肠胃敏感时别一次吃太多冰的。</p>'}
    ]},
    {title:'大理·云南', tag:'第2天 · 旅行灵感', blocks:[
    {h:'🎫 实操指南', body:'<p>① 国内游在「携程/飞猪/去哪儿」比价订票；出境用「Skyscanner」搜全网最低价；② 签证查「中国领事服务网」(cs.mfa.gov.cn)看目的国要求，东南亚多落地签/电子签；③ 换汇用「XE」看实时汇率，境外刷卡走 Visa/银联免货币转换费；④ 行程用「Google 地图/高德」提前离线下载，订酒店看「Booking/Agoda」的含早与免费取消政策。</p>'},
      {h:'为什么去', body:'<p>洱海、苍山、风花雪月。慢生活 + 环海骑行，是天然的有氧减脂假期。</p>'},
      {h:'实用小贴士', body:'<ul><li>交通：大理有高铁站/机场，深圳飞约 2h</li><li>最佳季节：3–5 月、9–11 月</li><li>预算参考：人均每天 ¥300–500</li></ul>'},
      {h:'必看打卡', body:'<ul><li>洱海生态廊道骑行</li><li>喜洲古镇吃破酥粑粑</li><li>双廊看海、苍山感通索道</li></ul>'},
      {h:'小提醒', body:'<p>高原紫外线强，注意防晒；洱海边风大带薄外套；饮食偏酸辣，易胀气时少辣。</p>'}
    ]},
    {title:'清迈·泰国', tag:'第3天 · 旅行灵感', blocks:[
    {h:'🎫 实操指南', body:'<p>① 国内游在「携程/飞猪/去哪儿」比价订票；出境用「Skyscanner」搜全网最低价；② 签证查「中国领事服务网」(cs.mfa.gov.cn)看目的国要求，东南亚多落地签/电子签；③ 换汇用「XE」看实时汇率，境外刷卡走 Visa/银联免货币转换费；④ 行程用「Google 地图/高德」提前离线下载，订酒店看「Booking/Agoda」的含早与免费取消政策。</p>'},
      {h:'为什么去', body:'<p>古城、咖啡馆、寺庙与夜市，物价低、节奏慢，是"数字游民式"度假范本。</p>'},
      {h:'实用小贴士', body:'<ul><li>交通：红色双条车(red truck)便宜好用</li><li>最佳季节：11–2 月凉季</li><li>预算参考：人均每天 ¥250–450</li><li>常用语：你好 Sawasdee（萨瓦迪卡）、谢谢 Khop khun（考彭）</li></ul>'},
      {h:'必看打卡', body:'<ul><li>塔佩门与古城寺庙</li><li>宁曼路咖啡街区</li><li>素贴山双龙寺、周六夜市</li></ul>'},
      {h:'小提醒', body:'<p>街边小吃丰富但注意卫生，肠胃敏感先从熟食热食开始；进寺庙着装端庄。</p>'}
    ]},
    {title:'成都·四川', tag:'第4天 · 旅行灵感', blocks:[
    {h:'🎫 实操指南', body:'<p>① 国内游在「携程/飞猪/去哪儿」比价订票；出境用「Skyscanner」搜全网最低价；② 签证查「中国领事服务网」(cs.mfa.gov.cn)看目的国要求，东南亚多落地签/电子签；③ 换汇用「XE」看实时汇率，境外刷卡走 Visa/银联免货币转换费；④ 行程用「Google 地图/高德」提前离线下载，订酒店看「Booking/Agoda」的含早与免费取消政策。</p>'},
      {h:'为什么去', body:'<p>熊猫、茶馆、麻辣与慢生活。看熊猫要早起，喝盖碗茶发呆，是治愈系旅行。</p>'},
      {h:'实用小贴士', body:'<ul><li>交通：地铁覆盖好，市内基本够用</li><li>最佳季节：3–6 月、9–11 月</li><li>预算参考：人均每天 ¥350–550</li></ul>'},
      {h:'必看打卡', body:'<ul><li>成都大熊猫繁育基地（7:30 开门）</li><li>宽窄巷子、锦里</li><li>人民公园鹤鸣茶社喝盖碗茶</li></ul>'},
      {h:'小提醒', body:'<p>火锅麻辣对胀气不友好，可点半辣/鸳鸯锅、多配蔬菜；茶馆久坐发呆也挺好。</p>'}
    ]},
    {title:'巴黎·法国', tag:'第5天 · 旅行灵感', blocks:[
    {h:'🎫 实操指南', body:'<p>① 国内游在「携程/飞猪/去哪儿」比价订票；出境用「Skyscanner」搜全网最低价；② 签证查「中国领事服务网」(cs.mfa.gov.cn)看目的国要求，东南亚多落地签/电子签；③ 换汇用「XE」看实时汇率，境外刷卡走 Visa/银联免货币转换费；④ 行程用「Google 地图/高德」提前离线下载，订酒店看「Booking/Agoda」的含早与免费取消政策。</p>'},
      {h:'为什么去', body:'<p>艺术、咖啡、塞纳河与"慢旅行"的范本。走走停停，博物馆与街头皆风景。</p>'},
      {h:'实用小贴士', body:'<ul><li>交通：买 Paris Visite 地铁卡</li><li>最佳季节：4–6 月、9–10 月</li><li>预算参考：人均每天 ¥1000–1500</li><li>常用语：你好 Bonjour（崩茹）、谢谢 Merci（梅西）</li></ul>'},
      {h:'必看打卡', body:'<ul><li>卢浮宫与奥赛博物馆</li><li>塞纳河散步、蒙马特高地</li><li>凡尔赛宫</li></ul>'},
      {h:'小提醒', body:'<p>进店先说 Bonjour 再问；走路多穿舒适鞋；甜点好吃，适量即可。</p>'}
    ]},
    {title:'厦门·福建', tag:'第6天 · 旅行灵感', blocks:[
    {h:'🎫 实操指南', body:'<p>① 国内游在「携程/飞猪/去哪儿」比价订票；出境用「Skyscanner」搜全网最低价；② 签证查「中国领事服务网」(cs.mfa.gov.cn)看目的国要求，东南亚多落地签/电子签；③ 换汇用「XE」看实时汇率，境外刷卡走 Visa/银联免货币转换费；④ 行程用「Google 地图/高德」提前离线下载，订酒店看「Booking/Agoda」的含早与免费取消政策。</p>'},
      {h:'为什么去', body:'<p>海岛、老别墅、鼓浪屿与慢节奏。适合周末短途——深圳高铁北站约 3.5 小时直达。</p>'},
      {h:'实用小贴士', body:'<ul><li>交通：深圳北→厦门北高铁</li><li>最佳季节：10–12 月、3–5 月</li><li>预算参考：人均每天 ¥400–700</li></ul>'},
      {h:'必看打卡', body:'<ul><li>鼓浪屿、环岛路骑行</li><li>沙坡尾艺术区、南普陀寺</li><li>曾厝垵小吃街</li></ul>'},
      {h:'小提醒', body:'<p>海鲜丰富但易胀气，配姜茶/热饮助消化；海边风大注意保暖。</p>'}
    ]},
    {title:'新加坡', tag:'第7天 · 旅行灵感', blocks:[
    {h:'🎫 实操指南', body:'<p>① 国内游在「携程/飞猪/去哪儿」比价订票；出境用「Skyscanner」搜全网最低价；② 签证查「中国领事服务网」(cs.mfa.gov.cn)看目的国要求，东南亚多落地签/电子签；③ 换汇用「XE」看实时汇率，境外刷卡走 Visa/银联免货币转换费；④ 行程用「Google 地图/高德」提前离线下载，订酒店看「Booking/Agoda」的含早与免费取消政策。</p>'},
      {h:'为什么去', body:'<p>干净、安全、花园城市，中英通用，适合轻松无压力的家庭式度假。</p>'},
      {h:'实用小贴士', body:'<ul><li>交通：EZ-Link 卡坐 MRT 最方便</li><li>最佳季节：全年可去，避开 5–9 月酷热</li><li>预算参考：人均每天 ¥900–1300</li></ul>'},
      {h:'必看打卡', body:'<ul><li>滨海湾花园、鱼尾狮</li><li>牛车水、圣淘沙</li><li>小印度彩色街区</li></ul>'},
      {h:'小提醒', body:'<p>自来水可直饮；热带炎热但步行多有遮荫；海南鸡饭、叻沙好吃，分量适中。</p>'}
    ]},
    {title:'西安·陕西', tag:'第8天 · 旅行灵感', blocks:[
    {h:'🎫 实操指南', body:'<p>① 国内游在「携程/飞猪/去哪儿」比价订票；出境用「Skyscanner」搜全网最低价；② 签证查「中国领事服务网」(cs.mfa.gov.cn)看目的国要求，东南亚多落地签/电子签；③ 换汇用「XE」看实时汇率，境外刷卡走 Visa/银联免货币转换费；④ 行程用「Google 地图/高德」提前离线下载，订酒店看「Booking/Agoda」的含早与免费取消政策。</p>'},
      {h:'为什么去', body:'<p>十三朝古都，兵马俑、城墙与面食王国，历史感拉满。</p>'},
      {h:'实用小贴士', body:'<ul><li>交通：地铁 + 旅游专线</li><li>最佳季节：3–5 月、9–11 月</li><li>预算参考：人均每天 ¥400–600</li></ul>'},
      {h:'必看打卡', body:'<ul><li>秦始皇兵马俑</li><li>西安城墙骑行、回民街</li><li>大雁塔、陕西历史博物馆</li></ul>'},
      {h:'小提醒', body:'<p>面食管饱，减脂期可少油少辣、多配蔬菜；碑林一带散步助消化。</p>'}
    ]},
    {title:'伦敦·英国', tag:'第9天 · 旅行灵感', blocks:[
    {h:'🎫 实操指南', body:'<p>① 国内游在「携程/飞猪/去哪儿」比价订票；出境用「Skyscanner」搜全网最低价；② 签证查「中国领事服务网」(cs.mfa.gov.cn)看目的国要求，东南亚多落地签/电子签；③ 换汇用「XE」看实时汇率，境外刷卡走 Visa/银联免货币转换费；④ 行程用「Google 地图/高德」提前离线下载，订酒店看「Booking/Agoda」的含早与免费取消政策。</p>'},
      {h:'为什么去', body:'<p>博物馆免费、泰晤士河、公园与英伦氛围，沉浸感强。</p>'},
      {h:'实用小贴士', body:'<ul><li>交通：Oyster 卡 / 银行卡拍地铁</li><li>最佳季节：5–9 月</li><li>预算参考：人均每天 ¥1100–1600</li><li>常用语：你好 Hello、谢谢 Thank you、地铁叫 Tube</li></ul>'},
      {h:'必看打卡', body:'<ul><li>大英博物馆（免费）</li><li>泰晤士河步行（伦敦眼→塔桥）</li><li>海德公园、Borough Market</li></ul>'},
      {h:'小提醒', body:'<p>天气多变带外套；步行多；Market 小吃多，选热的熟食更护肠胃。</p>'}
    ]},
    {title:'三亚·海南', tag:'第10天 · 旅行灵感', blocks:[
    {h:'🎫 实操指南', body:'<p>① 国内游在「携程/飞猪/去哪儿」比价订票；出境用「Skyscanner」搜全网最低价；② 签证查「中国领事服务网」(cs.mfa.gov.cn)看目的国要求，东南亚多落地签/电子签；③ 换汇用「XE」看实时汇率，境外刷卡走 Visa/银联免货币转换费；④ 行程用「Google 地图/高德」提前离线下载，订酒店看「Booking/Agoda」的含早与免费取消政策。</p>'},
      {h:'为什么去', body:'<p>国内海岛度假，阳光沙滩潜水，冬天避寒首选。</p>'},
      {h:'实用小贴士', body:'<ul><li>交通：凤凰机场，深圳飞约 1.5h</li><li>最佳季节：11–3 月</li><li>预算参考：人均每天 ¥600–1000</li></ul>'},
      {h:'必看打卡', body:'<ul><li>亚龙湾、蜈支洲岛潜水</li><li>椰梦长廊看日落</li><li>南山文化苑</li></ul>'},
      {h:'小提醒', body:'<p>海边注意防晒补水；海鲜大餐配姜茶；下水前别吃太胀。</p>'}
    ]},
    {title:'东京·日本', tag:'第11天 · 旅行灵感', blocks:[
    {h:'🎫 实操指南', body:'<p>① 国内游在「携程/飞猪/去哪儿」比价订票；出境用「Skyscanner」搜全网最低价；② 签证查「中国领事服务网」(cs.mfa.gov.cn)看目的国要求，东南亚多落地签/电子签；③ 换汇用「XE」看实时汇率，境外刷卡走 Visa/银联免货币转换费；④ 行程用「Google 地图/高德」提前离线下载，订酒店看「Booking/Agoda」的含早与免费取消政策。</p>'},
      {h:'为什么去', body:'<p>传统与现代并存，美食、美术馆与极便利的公共交通，一个人也安心。</p>'},
      {h:'实用小贴士', body:'<ul><li>交通：Suica 卡坐 JR/地铁</li><li>最佳季节：3–4 月樱花、10–11 月红叶</li><li>预算参考：人均每天 ¥800–1200</li><li>常用语：你好 Konnichiwa、谢谢 Arigato、厕所在哪 Toire wa doko</li></ul>'},
      {h:'必看打卡', body:'<ul><li>浅草寺、涩谷十字路口</li><li>teamLab 数字艺术馆</li><li>上野公园、筑地/丰洲市场</li></ul>'},
      {h:'小提醒', body:'<p>走路极多，舒适鞋必备；便利店轻食健康，控糖控油友好。</p>'}
    ]},
    {title:'苏州·江苏', tag:'第12天 · 旅行灵感', blocks:[
    {h:'🎫 实操指南', body:'<p>① 国内游在「携程/飞猪/去哪儿」比价订票；出境用「Skyscanner」搜全网最低价；② 签证查「中国领事服务网」(cs.mfa.gov.cn)看目的国要求，东南亚多落地签/电子签；③ 换汇用「XE」看实时汇率，境外刷卡走 Visa/银联免货币转换费；④ 行程用「Google 地图/高德」提前离线下载，订酒店看「Booking/Agoda」的含早与免费取消政策。</p>'},
      {h:'为什么去', body:'<p>园林、水乡与安静的江南。高铁约 6 小时，适合慢旅行。</p>'},
      {h:'实用小贴士', body:'<ul><li>交通：深圳北→苏州北高铁</li><li>最佳季节：3–5 月、9–11 月</li><li>预算参考：人均每天 ¥400–600</li></ul>'},
      {h:'必看打卡', body:'<ul><li>拙政园、留园</li><li>平江路、周庄/同里水乡</li><li>虎丘</li></ul>'},
      {h:'小提醒', body:'<p>园林步行舒缓，对代谢友好；苏式点心精致，少量多样尝鲜即可。</p>'}
    ]},
    {title:'巴厘岛·印尼', tag:'第13天 · 旅行灵感', blocks:[
    {h:'🎫 实操指南', body:'<p>① 国内游在「携程/飞猪/去哪儿」比价订票；出境用「Skyscanner」搜全网最低价；② 签证查「中国领事服务网」(cs.mfa.gov.cn)看目的国要求，东南亚多落地签/电子签；③ 换汇用「XE」看实时汇率，境外刷卡走 Visa/银联免货币转换费；④ 行程用「Google 地图/高德」提前离线下载，订酒店看「Booking/Agoda」的含早与免费取消政策。</p>'},
      {h:'为什么去', body:'<p>热带海岛、瑜伽与梯田，身心 reset 的好地方。</p>'},
      {h:'实用小贴士', body:'<ul><li>交通：包车最方便</li><li>最佳季节：4–10 月旱季</li><li>预算参考：人均每天 ¥500–900</li><li>常用语：你好 Halo、谢谢 Terima kasih（德拉玛卡西）</li></ul>'},
      {h:'必看打卡', body:'<ul><li>乌布梯田、海神庙日落</li><li>德格拉朗秋千</li><li>金巴兰海滩</li></ul>'},
      {h:'小提醒', body:'<p>进寺庙需围纱笼；湿热多喝水；当地瑜伽课程对胀气/代谢有帮助。</p>'}
    ]},
    {title:'重庆·四川', tag:'第14天 · 旅行灵感', blocks:[
    {h:'🎫 实操指南', body:'<p>① 国内游在「携程/飞猪/去哪儿」比价订票；出境用「Skyscanner」搜全网最低价；② 签证查「中国领事服务网」(cs.mfa.gov.cn)看目的国要求，东南亚多落地签/电子签；③ 换汇用「XE」看实时汇率，境外刷卡走 Visa/银联免货币转换费；④ 行程用「Google 地图/高德」提前离线下载，订酒店看「Booking/Agoda」的含早与免费取消政策。</p>'},
      {h:'为什么去', body:'<p>山城、轻轨穿楼、火锅与魔幻夜景。8D 城市，走路就是锻炼。</p>'},
      {h:'实用小贴士', body:'<ul><li>交通：轻轨 + 打车</li><li>最佳季节：3–5 月、10–11 月</li><li>预算参考：人均每天 ¥400–600</li></ul>'},
      {h:'必看打卡', body:'<ul><li>洪崖洞夜景、李子坝轻轨</li><li>长江索道、磁器口古镇</li><li>南山一棵树看全城</li></ul>'},
      {h:'小提醒', body:'<p>火锅重油重辣，胀气/减脂期选清汤或鸳鸯、多蔬菜；爬坡上坎天然有氧。</p>'}
    ]}
  ],

  /* ===================== 6. 理财知识 ===================== */
  finance: [
    {title:'第1课 · 先存后花', tag:'第1天 · 入门', blocks:[
      {h:'核心概念', body:'<p>理财第一步不是"买什么"，而是"先留下什么"。工资到账先转一笔到储蓄账户，再安排支出；而非花剩了才存。两者的差别，是"被动省钱"和"靠意志力省钱"的差别。</p>'},
      {h:'为什么重要', body:'<p>靠意志力存钱几乎必败——因为意志力是消耗品。把存钱变成"系统自动扣款"，你就不需要每次都战胜自己。</p>'},
      {h:'🛠 具体怎么做', body:'<ul><li>开一个独立的储蓄账户（银行二类户，或余额宝/零钱通等货币基金），和工资卡分开，减少"手痒就花"</li><li>在银行 APP 设"智能转账/约定转账"：每月工资到账日自动转 10% 过去</li><li>比例从 10% 起步，习惯后再加；关键是"先转走、看不见"</li></ul>'},
      {h:'📌 去哪学/用什么', body:'<p>书：《小狗钱钱》（博多·舍费尔，最适合入门）；APP：先用「钱迹」或「随手记」记一周账，摸清钱去哪。</p>'},
      {h:'今日行动', body:'<p>今天开好储蓄账户，并设置一笔自动转账（哪怕只 100 元）。</p>'}
    ]},
    {title:'第2课 · 复利奇迹', tag:'第2天 · 入门', blocks:[
      {h:'核心概念', body:'<p>复利 = 利滚利。每月定投 1000 元、年化 8%，30 年后约 150 万，其中大半是"利"不是"本"。时间是最强的杠杆。</p>'},
      {h:'为什么重要', body:'<p>越早开始，雪球滚得越大。25 岁开始和 35 岁开始，最终差距可能差一倍——不是因为你多投了，而是时间更长。</p>'},
      {h:'🛠 具体怎么做', body:'<ul><li>微信搜小程序「复利计算器」，输入你的每月定投额、年化(先按 6-8% 保守估)、年数，算出"30 年后数字"</li><li>把结果写下来贴在显眼处，作为定投的动力锚</li></ul>'},
      {h:'📌 去哪学', body:'<p>书：《指数基金投资指南》（银行螺丝钉）；概念演示：B站搜"复利 可视化"。</p>'},
      {h:'今日行动', body:'<p>算出自己的"30 年数字"，写进手机备忘录。</p>'}
    ]},
    {title:'第3课 · 认识通胀', tag:'第3天 · 入门', blocks:[
      {h:'核心概念', body:'<p>通胀让钱悄悄缩水。长期 3% 通胀下，今天的 100 元 20 年后只值约 55 元。只存现金，会被时间偷走购买力。</p>'},
      {h:'为什么重要', body:'<p>防守通胀需要"资产"（股票、房产、黄金、宽基指数）带来高于通胀的回报，而不是把全部钱放活期。</p>'},
      {h:'🛠 具体怎么做', body:'<ul><li>估算你现有"现金/活期"占比是否过高（比如超过 6 个月开销的部分，基本在贬值）</li><li>了解一类抗通胀资产：沪深300等宽基指数、黄金ETF、核心地段房产</li></ul>'},
      {h:'📌 去哪看数据', body:'<p>国家统计局官网(nationaldata.stats.gov.cn)查历年 CPI；书：《漫步华尔街》（伯顿·麦基尔）。</p>'},
      {h:'今日行动', body:'<p>算一下：你的现金占净资产多少？超过 30% 就要警惕。</p>'}
    ]},
    {title:'第4课 · 记账与预算', tag:'第4天 · 基础', blocks:[
      {h:'核心概念', body:'<p>不记账就谈不上预算。先看清钱去哪了，再用"50/30/20"：必需 50%、想要 30%、储蓄 20%。</p>'},
      {h:'为什么重要', body:'<p>你管不住看不见的支出。很多人"不知道钱花哪了"，本质是没数据。</p>'},
      {h:'🛠 具体怎么做', body:'<ul><li>下载「钱迹」或「随手记」，导出本月账单，按餐饮/交通/购物/订阅分类汇总</li><li>标出 3 笔"可省未省"的开支，下月从最大的一笔砍起</li><li>把储蓄那 20% 设为"不可动用"项</li></ul>'},
      {h:'📌 去哪学', body:'<p>B站搜"50/30/20 预算 实操"；模板：微信小程序「预算本」。</p>'},
      {h:'今日行动', body:'<p>分类本月账单，标出 3 笔可省开支。</p>'}
    ]},
    {title:'第5课 · 应急金', tag:'第5天 · 基础', blocks:[
      {h:'核心概念', body:'<p>应急金 = 3-6 个月生活费，放在随时能取的地方（货币基金/T+0）。它是你敢于投资、不怕失业的底气。</p>'},
      {h:'为什么重要', body:'<p>没有应急金，一次意外（失业/生病）就能逼你贱卖投资或借高息债。</p>'},
      {h:'🛠 具体怎么做', body:'<ul><li>算出自家 6 个月最低开销（房租/房贷+吃饭+水电+通勤+保险）</li><li>把钱放在余额宝/零钱通/银行 T+0 理财，收益略高于活期且随时可取</li></ul>'},
      {h:'📌 去哪学', body:'<p>搜索"应急金 3-6 个月 怎么放"，看货币基金与活期的区别。</p>'},
      {h:'今日行动', body:'<p>算出"6 个月最低开销"这个具体数字，写下来。</p>'}
    ]},
    {title:'第6课 · 保险的本质', tag:'第6天 · 基础', blocks:[
      {h:'核心概念', body:'<p>保险是"用小钱转移大风险"，不是理财增值工具。优先顺序：医疗险 > 意外险 > 重疾险 > 寿险，先保"人"再谈"钱"。</p>'},
      {h:'为什么重要', body:'<p>一场大病可能清空多年积蓄。保险让"极端风险"不摧毁整个家庭财务。</p>'},
      {h:'🛠 具体怎么做', body:'<ul><li>打开「支付宝→蚂蚁保」或「微信→微保」，先给自己配医疗+意外（年轻人年保费通常几百元）</li><li>先保家庭经济支柱（赚钱的人），再考虑孩子</li><li>看清"免赔额"与"免责条款"，别只看保额</li></ul>'},
      {h:'📌 避坑/去哪学', body:'<p>避坑：别把"理财型保险"当投资主力（收益低、流动性差）。书：《好好花钱》。</p>'},
      {h:'今日行动', body:'<p>盘点你/家人已有保单，写下缺口（谁还没保？缺哪种？）。</p>'}
    ]},
    {title:'第7课 · 风险与收益', tag:'第7天 · 基础', blocks:[
      {h:'核心概念', body:'<p>高收益必伴高风险。"稳赚不赔、收益超高"都是红旗。任何投资前先问：它靠什么赚钱？说不清就是骗局。</p>'},
      {h:'为什么重要', body:'<p>亏 30% 需要赚 43% 才能回本。控制回撤，比追求高收益更影响长期结果。</p>'},
      {h:'🛠 具体怎么做', body:'<ul><li>给自己的风险偏好打分：保守/稳健/进取</li><li>问自己：这笔钱多久要用？亏 30% 我睡得着吗？答案决定能碰多"险"的资产</li><li>遇到"保本高收益"直接拉黑</li></ul>'},
      {h:'📌 去哪学', body:'<p>证监会投资者教育基地（investor.szse.cn / 上交所投资者教育）；书：《漫步华尔街》。</p>'},
      {h:'今日行动', body:'<p>给风险偏好打分，并拒绝一个你不懂的高收益诱惑。</p>'}
    ]},
    {title:'第8课 · 股票是什么', tag:'第8天 · 进阶', blocks:[
      {h:'核心概念', body:'<p>买股票=成为公司小股东，赚"企业成长+分红"。短期价格由情绪决定，长期由利润决定。</p>'},
      {h:'为什么重要', body:'<p>权益资产是长期跑赢通胀的主要工具，但波动大，需要理解再下手。</p>'},
      {h:'🛠 具体怎么做', body:'<ul><li>开户：券商 APP（华泰/东方财富/中信）线上几分钟完成</li><li>先用"模拟盘"（同花顺/东方财富模拟）练手，不投真钱</li><li>学读关键指标：营收、净利润、ROE（净资产收益率）、负债率</li></ul>'},
      {h:'📌 去哪学/看', body:'<p>书：《手把手教你读财报》（唐朝）；社区：「雪球」看别人怎么分析公司；网站：东方财富网查财报。</p>'},
      {h:'今日行动', body:'<p>选一家你熟悉的公司，读它的主营业务和近三年营收趋势。</p>'}
    ]},
    {title:'第9课 · 指数基金(ETF)', tag:'第9天 · 进阶', blocks:[
      {h:'核心概念', body:'<p>ETF 是一篮子股票，买它等于"买下整个市场"，费用低、分散好，适合多数普通人长期持有。</p>'},
      {h:'为什么重要', body:'<p>长期看，多数主动基金跑不赢指数。普通人买宽基指数+定投，是性价比最高的方式。</p>'},
      {h:'🛠 具体怎么做', body:'<ul><li>证券账户里买沪深300ETF(代码 510300)、标普500ETF(代码 513500)等</li><li>每月固定金额定投，跌时多买份额、涨时少买，长期摊平成本（"微笑曲线"）</li><li>用「天天基金」「且慢」设置自动定投</li></ul>'},
      {h:'📌 去哪学', body:'<p>书：《指数基金投资指南》（银行螺丝钉）；平台：且慢、天天基金定投教程。</p>'},
      {h:'今日行动', body:'<p>了解 1-2 只宽基指数（沪深300、标普500），记下代码。</p>'}
    ]},
    {title:'第10课 · 资产配置', tag:'第10天 · 进阶', blocks:[
      {h:'核心概念', body:'<p>资产配置 = 把鸡蛋放不同篮子（股/债/现金/黄金）。它决定组合 90% 的长期波动，比选个股更重要。</p>'},
      {h:'为什么重要', body:'<p>单押一只股票可能归零；分散配置让"黑天鹅"只啄掉一根羽毛。</p>'},
      {h:'🛠 具体怎么做', body:'<ul><li>年轻可多配权益（股/ETF，如 70-80%），随年龄增加债券与现金</li><li>黄金作对冲（5-10%）；用「且慢」看一个"四笔钱"组合示例</li><li>画出你理想的大类资产比例</li></ul>'},
      {h:'📌 去哪学', body:'<p>书：《资产配置投资实践》；工具：且慢"四笔钱"框架。</p>'},
      {h:'今日行动', body:'<p>画出你理想的大类资产比例（股/债/现金/黄金各多少）。</p>'}
    ]},
    {title:'第11课 · 债务管理', tag:'第11天 · 进阶', blocks:[
      {h:'核心概念', body:'<p>债分"好债"(低息、撬动资产如房贷)与"坏债"(高息消费贷、信用卡循环)。理财要先清坏债。</p>'},
      {h:'为什么重要', body:'<p>信用卡循环利息年化可能 18%+，比任何投资都贵。坏债是财富的黑洞。</p>'},
      {h:'🛠 具体怎么做', body:'<ul><li>信用卡"全额还款"，绝不"最低还款"</li><li>高息债务优先于投资还清（先还 15% 以上的）</li><li>登录「中国人民银行征信中心」(pbccrc.org.cn)查一次个人征信，看清负债全貌</li></ul>'},
      {h:'📌 去哪查', body:'<p>个人征信：中国人民银行征信中心官网(pbccrc.org.cn)，每年可免费查 2 次。</p>'},
      {h:'今日行动', body:'<p>列出所有负债与利率，按从高到低排清还顺序。</p>'}
    ]},
    {title:'第12课 · 税务意识（重点）', tag:'第13天 · 守门', blocks:[
      {h:'核心概念', body:'<p>税后收益才是真收益。个税、专项附加扣除、个人养老金税优，都是"懂税=多留钱"的直接杠杆。很多人每年白白多缴几千上万元。</p>'},
      {h:'为什么重要', body:'<p>不懂税，等于主动放弃一部分收入。国家给的扣除额度，不填就是亏。</p>'},
      {h:'🛠 具体怎么操作（一步步来）', body:'<ul><li><b>① 下载官方 APP</b>：应用商店搜"个人所得税"（国家税务总局出品，认准官方），注册并人脸识别</li><li><b>② 填报专项附加扣除</b>：首页→"专项附加扣除填报"→选年度→按实际勾选：子女教育 / 继续教育 / 大病医疗 / 住房贷款利息 / 住房租金 / 赡养老人 / 3岁以下婴幼儿照护。每一项都能税前扣除、直接省税</li><li><b>③ 每年 3-6 月做"综合所得年度汇算"</b>：首页→"综合所得年度汇算"，多退少补——很多人能退几百到几千元，千万别漏</li><li><b>④ 开通个人养老金</b>：在银行 APP 或"国家社会保险公共服务平台"开个人养老金账户，年缴上限 12000 元，可税前扣除（退休领取时按 3% 低税率）</li></ul>'},
      {h:'📌 权威渠道/去哪学', body:'<p>官网：国家税务总局(www.chinatax.gov.cn)「政策法规」栏目；官方公众号：「国家税务总局」「中国税务」；实操视频：B站搜"个税专项附加扣除 填报教程"。想系统学，看《中国税法》入门章节或税务局免费公开课。</p>'},
      {h:'今日行动', body:'<p>今天就下载"个人所得税"APP，先看完"专项附加扣除"有哪些项，记下你符合条件的 1-2 项，下周汇算时填报。这一步可能直接帮你退到税。</p>'}
    ]},
    {title:'第13课 · 防骗识局', tag:'第13天 · 守门', blocks:[
      {h:'核心概念', body:'<p>你看中它的利息，它看中你的本金。任何投资前先想：它靠什么赚钱？说不清就是骗局。</p>'},
      {h:'为什么重要', body:'<p>诈骗专挑"想赚快钱"的人。红旗清单能帮你挡掉 90% 的坑。</p>'},
      {h:'🛠 具体怎么做', body:'<ul><li>红旗：承诺"稳赚不赔"、收益远高于市场(>10% 且保本)、催你"马上交钱别告诉家人"、拉人头返利(传销)</li><li>遇推销先对照红旗；拿不准就搜"项目名+骗局"</li></ul>'},
      {h:'📌 官方防线', body:'<p>下载官方「国家反诈中心」APP（应用商店搜，公安部出品）；关注公众号「国家反诈中心」。被骗前可一键举报预警。</p>'},
      {h:'今日行动', body:'<p>把"红旗清单"存进手机备忘录，下次遇推销先对照。</p>'}
    ]},
    {title:'第14课 · 财富心法', tag:'第14天 · 收官', blocks:[
      {h:'核心心法', body:'<ul><li>先存后花，自动化</li><li>早开始，信复利</li><li>留应急金，保家人</li><li>分散配置，控风险</li><li>持续学习，远离骗局</li><li>懂税，留住该留的钱</li></ul>'},
      {h:'为什么重要', body:'<p>理财不是一夜暴富，而是用纪律把"小钱"养成"自由"。</p>'},
      {h:'🛠 落到执行', body:'<ul><li>从今天起挑 1 条执行：存钱自动化 / 指数定投 / 清高息债 / 下载个税 APP 填报</li><li>把 14 课浓缩成 3 条，写进你的年度计划</li></ul>'},
      {h:'📌 复盘', body:'<p>回顾这 14 课，哪 3 条对你最有用？在备忘录建一个"我的理财原则"清单。</p>'},
      {h:'今日行动', body:'<p>从这 14 课里挑 1 条，今天立刻执行。</p>'}
    ]}
  ],  diet: [
    {title:'第1天 · 暖胃启动餐', tag:'第1天 · 饮食定制', blocks:[
    {h:'🛒 采购与执行', body:'<p>① 食材在「钱大妈」「美团买菜」「盒马」晚间 8 点后打折囤，性价比最高；② 前一晚备好早餐/午餐，早上省时、午间带饭不踩坑；③ 用餐节奏：早餐 7:30 前、午餐 12:30 前、晚餐 19:00 前，下午 15:00 加餐防暴食；④ 外食用「薄荷健康」查热量，守每日约 1200–1400 kcal 减脂线；胀气时饭后散步 10 分钟助消化。</p>'},
      {h:'🌅 早餐（7:30-8:30）', body:'<p>温水一杯（可加薄片姜或柠檬）+ 2个水煮蛋 + 燕麦粥（燕麦30g煮成粥）+ 小番茄5颗。蛋白质优先的早餐能拉高食物热效应，帮一上午的代谢点火。</p>'},
      {h:'🍱 午餐（带饭到福田）', body:'<p>蒸鸡胸150g（前一晚用少许生抽、黑胡椒腌好，蒸10分钟）+ 清炒冬瓜胡萝卜（少油）+ 糙米饭100g。装饭盒带去公司，比外卖省一半还低脂。</p>'},
      {h:'🌙 晚餐（18:30前吃完）', body:'<p>嫩豆腐海带冬瓜汤（嫩豆腐半盒+冬瓜+海带苗，少盐）+ 蒸红薯半根。清淡好消化，睡前不胀。</p>'},
      {h:'🥤 加餐 · 饮水', body:'<p>上午：无糖酸奶1杯 + 蓝莓一小把（益生菌护肠胃、缓解胀气）。下午：绿茶或乌龙1-2杯。全天温水1.5-2L，避开碳酸饮料、奶茶和口香糖。</p>'},
      {h:'💡 为什么这么搭', body:'<p>高蛋白早餐点燃代谢；姜茶暖胃促循环；蒸煮代替油炸控油；豆腐海带补碘（碘足甲状腺才肯工作=代谢正常）；酸奶益生菌改善腹胀。食材农贸市场或钱大妈都能买，单日约¥15-20。</p>'}
    ]},
    {title:'第2天 · 鱼蔬轻食', tag:'第2天 · 饮食定制', blocks:[
    {h:'🛒 采购与执行', body:'<p>① 食材在「钱大妈」「美团买菜」「盒马」晚间 8 点后打折囤，性价比最高；② 前一晚备好早餐/午餐，早上省时、午间带饭不踩坑；③ 用餐节奏：早餐 7:30 前、午餐 12:30 前、晚餐 19:00 前，下午 15:00 加餐防暴食；④ 外食用「薄荷健康」查热量，守每日约 1200–1400 kcal 减脂线；胀气时饭后散步 10 分钟助消化。</p>'},
      {h:'🌅 早餐', body:'<p>温植物奶（或无糖脱脂奶）冲燕麦 + 1个水煮蛋 + 黄瓜条几根。植物奶比豆浆更不易胀气。</p>'},
      {h:'🍱 午餐（带饭）', body:'<p>番茄龙利鱼煲（冷冻龙利鱼块铺番茄上蒸/煮）+ 蒜蓉通心菜（少油）+ 杂粮饭100g。鱼几乎无刺、低脂高蛋白。</p>'},
      {h:'🌙 晚餐', body:'<p>蒸鸡丝黄瓜玉米沙拉（鸡胸蒸熟撕丝+熟玉米粒+黄瓜，淋少许油醋）+ 紫菜蛋花汤（少油）。</p>'},
      {h:'🥤 加餐 · 饮水', body:'<p>苹果1个；普洱茶1-2杯（去腻促代谢）；杏仁10g（约7-8颗，健康脂肪但控量）。</p>'},
      {h:'💡 为什么这么搭', body:'<p>鱼和鸡双蛋白；通心菜高纤饱腹；普洱助脂肪代谢；苹果果胶养肠道；坚果防暴食。单日约¥18。</p>'}
    ]},
    {title:'第3天 · 虾菌养肠', tag:'第3天 · 饮食定制', blocks:[
    {h:'🛒 采购与执行', body:'<p>① 食材在「钱大妈」「美团买菜」「盒马」晚间 8 点后打折囤，性价比最高；② 前一晚备好早餐/午餐，早上省时、午间带饭不踩坑；③ 用餐节奏：早餐 7:30 前、午餐 12:30 前、晚餐 19:00 前，下午 15:00 加餐防暴食；④ 外食用「薄荷健康」查热量，守每日约 1200–1400 kcal 减脂线；胀气时饭后散步 10 分钟助消化。</p>'},
      {h:'🌅 早餐', body:'<p>2个水煮蛋 + 蒸红薯1小个 + 温豆浆（无糖，胀气明显就换植物奶）+ 圣女果几颗。</p>'},
      {h:'🍱 午餐（带饭）', body:'<p>虾仁蒸蛋（冻虾仁8-10只+2个蛋同蒸）+ 清炒苦瓜（少油，深圳湿热正好）+ 糙米饭100g。</p>'},
      {h:'🌙 晚餐', body:'<p>嫩豆腐菌菇汤（豆腐+香菇/金针菇+白菜，少盐）+ 半根玉米。</p>'},
      {h:'🥤 加餐 · 饮水', body:'<p>无糖酸奶+奇异果；绿茶；核桃2个。</p>'},
      {h:'💡 为什么这么搭', body:'<p>虾仁低脂高蛋白还补锌和碘（都和代谢相关）；菌菇多糖益肠道菌群、缓解腹胀；苦瓜低糖清热；玉米替精米稳血糖。冻虾仁便宜，单日约¥20。</p>'}
    ]},
    {title:'第4天 · 补铁促代谢', tag:'第4天 · 饮食定制', blocks:[
    {h:'🛒 采购与执行', body:'<p>① 食材在「钱大妈」「美团买菜」「盒马」晚间 8 点后打折囤，性价比最高；② 前一晚备好早餐/午餐，早上省时、午间带饭不踩坑；③ 用餐节奏：早餐 7:30 前、午餐 12:30 前、晚餐 19:00 前，下午 15:00 加餐防暴食；④ 外食用「薄荷健康」查热量，守每日约 1200–1400 kcal 减脂线；胀气时饭后散步 10 分钟助消化。</p>'},
      {h:'🌅 早餐', body:'<p>燕麦+脱脂奶 + 1个蛋 + 香蕉1根（熟香蕉助消化，绿香蕉易胀）。</p>'},
      {h:'🍱 午餐（带饭）', body:'<p>彩椒炒牛里脊（牛肉80g少油快炒，补铁！女生易缺铁→代谢慢怕冷）+ 糙米饭 + 凉拌黄瓜。</p>'},
      {h:'🌙 晚餐', body:'<p>清蒸巴沙鱼 + 蒜蓉西兰花（少量）+ 蒸南瓜。</p>'},
      {h:'🥤 加餐 · 饮水', body:'<p>苹果1个；乌龙茶；杏仁10g。</p>'},
      {h:'💡 为什么这么搭', body:'<p>瘦牛肉补铁和蛋白质，铁足代谢才旺；彩椒维C帮铁吸收；巴沙鱼无刺低脂；南瓜低GI。成本约¥20。</p>'}
    ]},
    {title:'第5天 · 清肠低脂', tag:'第5天 · 饮食定制', blocks:[
    {h:'🛒 采购与执行', body:'<p>① 食材在「钱大妈」「美团买菜」「盒马」晚间 8 点后打折囤，性价比最高；② 前一晚备好早餐/午餐，早上省时、午间带饭不踩坑；③ 用餐节奏：早餐 7:30 前、午餐 12:30 前、晚餐 19:00 前，下午 15:00 加餐防暴食；④ 外食用「薄荷健康」查热量，守每日约 1200–1400 kcal 减脂线；胀气时饭后散步 10 分钟助消化。</p>'},
      {h:'🌅 早餐', body:'<p>2个蛋 + 无糖全麦面包1片 + 温柠檬水 + 小黄瓜。</p>'},
      {h:'🍱 午餐（带饭）', body:'<p>鸡胸蔬菜卷（鸡丝+生菜+黄瓜用全麦薄饼卷，或配杂粮饭）+ 番茄1个。</p>'},
      {h:'🌙 晚餐', body:'<p>豆腐番茄汤 + 蒸红薯 + 凉拌木耳（促清肠）。</p>'},
      {h:'🥤 加餐 · 饮水', body:'<p>无糖酸奶+草莓；绿茶；核桃2个。</p>'},
      {h:'💡 为什么这么搭', body:'<p>木耳膳食纤维清肠道、缓解腹胀；全麦缓释碳水稳血糖；番茄番茄红素抗氧化。单日约¥16。</p>'}
    ]},
    {title:'第6天 · 一锅出省事', tag:'第6天 · 饮食定制', blocks:[
    {h:'🛒 采购与执行', body:'<p>① 食材在「钱大妈」「美团买菜」「盒马」晚间 8 点后打折囤，性价比最高；② 前一晚备好早餐/午餐，早上省时、午间带饭不踩坑；③ 用餐节奏：早餐 7:30 前、午餐 12:30 前、晚餐 19:00 前，下午 15:00 加餐防暴食；④ 外食用「薄荷健康」查热量，守每日约 1200–1400 kcal 减脂线；胀气时饭后散步 10 分钟助消化。</p>'},
      {h:'🌅 早餐', body:'<p>燕麦粥 + 1个蛋 + 温姜茶 + 蓝莓。</p>'},
      {h:'🍱 午餐（带饭）', body:'<p>鱼豆腐煲（龙利鱼/巴沙鱼+嫩豆腐+白菜同煮一锅）+ 糙米饭。适合加班前一次做好的带饭。</p>'},
      {h:'🌙 晚餐', body:'<p>鸡胸蔬菜汤（鸡丝+冬瓜+胡萝卜）+ 半根玉米。</p>'},
      {h:'🥤 加餐 · 饮水', body:'<p>苹果1个；普洱茶；杏仁10g。</p>'},
      {h:'💡 为什么这么搭', body:'<p>鱼+豆腐双蛋白；冬瓜利水消水肿（深圳湿热易水肿，常被误认胀气）；一锅出省时。单日约¥18。</p>'}
    ]},
    {title:'第7天 · 周末稍丰', tag:'第7天 · 饮食定制', blocks:[
    {h:'🛒 采购与执行', body:'<p>① 食材在「钱大妈」「美团买菜」「盒马」晚间 8 点后打折囤，性价比最高；② 前一晚备好早餐/午餐，早上省时、午间带饭不踩坑；③ 用餐节奏：早餐 7:30 前、午餐 12:30 前、晚餐 19:00 前，下午 15:00 加餐防暴食；④ 外食用「薄荷健康」查热量，守每日约 1200–1400 kcal 减脂线；胀气时饭后散步 10 分钟助消化。</p>'},
      {h:'🌅 早餐', body:'<p>蔬菜蛋饼（蛋2+碎菠菜/西葫芦少油煎）+ 温豆浆（无糖少量）。</p>'},
      {h:'🍱 午餐', body:'<p>蒸鸡胸 + 清炒时蔬（菜心/通心菜）+ 红薯。</p>'},
      {h:'🌙 晚餐', body:'<p>海带豆腐汤 + 蒸南瓜 + 凉拌黄瓜。</p>'},
      {h:'🥤 加餐 · 饮水', body:'<p>无糖酸奶+猕猴桃；绿茶。</p>'},
      {h:'💡 为什么这么搭', body:'<p>周末可稍丰富，菠菜补叶酸铁、南瓜低GI，仍保持低脂高纤节奏。单日约¥17。</p>'}
    ]},
    {title:'第8天 · 换口味', tag:'第8天 · 饮食定制', blocks:[
    {h:'🛒 采购与执行', body:'<p>① 食材在「钱大妈」「美团买菜」「盒马」晚间 8 点后打折囤，性价比最高；② 前一晚备好早餐/午餐，早上省时、午间带饭不踩坑；③ 用餐节奏：早餐 7:30 前、午餐 12:30 前、晚餐 19:00 前，下午 15:00 加餐防暴食；④ 外食用「薄荷健康」查热量，守每日约 1200–1400 kcal 减脂线；胀气时饭后散步 10 分钟助消化。</p>'},
      {h:'🌅 早餐', body:'<p>燕麦+植物奶 + 1个蛋 + 香蕉。</p>'},
      {h:'🍱 午餐（带饭）', body:'<p>鸡胸番茄全麦意面（全麦面少量+鸡丝+番茄，少油）+ 西兰花少量。</p>'},
      {h:'🌙 晚餐', body:'<p>豆腐冬瓜汤 + 蒸红薯 + 凉拌木耳。</p>'},
      {h:'🥤 加餐 · 饮水', body:'<p>无糖酸奶+蓝莓；绿茶；杏仁。</p>'},
      {h:'💡 为什么这么搭', body:'<p>全麦面换口味但控量；番茄促代谢；木耳清肠。单日约¥18。</p>'}
    ]},
    {title:'第9天 · 再补铁', tag:'第9天 · 饮食定制', blocks:[
    {h:'🛒 采购与执行', body:'<p>① 食材在「钱大妈」「美团买菜」「盒马」晚间 8 点后打折囤，性价比最高；② 前一晚备好早餐/午餐，早上省时、午间带饭不踩坑；③ 用餐节奏：早餐 7:30 前、午餐 12:30 前、晚餐 19:00 前，下午 15:00 加餐防暴食；④ 外食用「薄荷健康」查热量，守每日约 1200–1400 kcal 减脂线；胀气时饭后散步 10 分钟助消化。</p>'},
      {h:'🌅 早餐', body:'<p>蛋2 + 蒸红薯 + 温柠檬姜茶 + 圣女果。</p>'},
      {h:'🍱 午餐（带饭）', body:'<p>彩椒炒牛里脊（80g少油）+ 糙米 + 凉拌黄瓜。</p>'},
      {h:'🌙 晚餐', body:'<p>清蒸鱼 + 蒜蓉通心菜 + 蒸南瓜。</p>'},
      {h:'🥤 加餐 · 饮水', body:'<p>无糖酸奶+奇异果；普洱；杏仁。</p>'},
      {h:'💡 为什么这么搭', body:'<p>牛肉补铁二次强化；通心菜高纤；普洱去腻。单日约¥21。</p>'}
    ]},
    {title:'第10天 · 高效循环', tag:'第10天 · 饮食定制', blocks:[
    {h:'🛒 采购与执行', body:'<p>① 食材在「钱大妈」「美团买菜」「盒马」晚间 8 点后打折囤，性价比最高；② 前一晚备好早餐/午餐，早上省时、午间带饭不踩坑；③ 用餐节奏：早餐 7:30 前、午餐 12:30 前、晚餐 19:00 前，下午 15:00 加餐防暴食；④ 外食用「薄荷健康」查热量，守每日约 1200–1400 kcal 减脂线；胀气时饭后散步 10 分钟助消化。</p>'},
      {h:'🌅 早餐', body:'<p>蛋2 + 燕麦+脱脂奶 + 小番茄。</p>'},
      {h:'🍱 午餐（带饭）', body:'<p>鸡胸蔬菜沙拉（熟：鸡丝+玉米+黄瓜，油醋少）+ 杂粮饭。</p>'},
      {h:'🌙 晚餐', body:'<p>豆腐番茄汤 + 蒸红薯 + 凉拌木耳。</p>'},
      {h:'🥤 加餐 · 饮水', body:'<p>苹果1个；绿茶；核桃2个。</p>'},
      {h:'💡 为什么这么搭', body:'<p>重复高效组合，油醋代替沙拉酱控脂，木耳清肠。单日约¥16。</p>'}
    ]},
    {title:'第11天 · 鱼蛋双蛋白', tag:'第11天 · 饮食定制', blocks:[
    {h:'🛒 采购与执行', body:'<p>① 食材在「钱大妈」「美团买菜」「盒马」晚间 8 点后打折囤，性价比最高；② 前一晚备好早餐/午餐，早上省时、午间带饭不踩坑；③ 用餐节奏：早餐 7:30 前、午餐 12:30 前、晚餐 19:00 前，下午 15:00 加餐防暴食；④ 外食用「薄荷健康」查热量，守每日约 1200–1400 kcal 减脂线；胀气时饭后散步 10 分钟助消化。</p>'},
      {h:'🌅 早餐', body:'<p>燕麦+脱脂奶 + 1个蛋 + 蓝莓。</p>'},
      {h:'🍱 午餐（带饭）', body:'<p>龙利鱼蒸蛋（鱼碎+2蛋同蒸）+ 清炒苦瓜 + 糙米。</p>'},
      {h:'🌙 晚餐', body:'<p>鸡胸蔬菜汤（鸡丝+冬瓜+海带）+ 半根玉米。</p>'},
      {h:'🥤 加餐 · 饮水', body:'<p>无糖酸奶+草莓；乌龙；杏仁。</p>'},
      {h:'💡 为什么这么搭', body:'<p>鱼蛋双蛋白；苦瓜清热下火；海带补碘助代谢。单日约¥19。</p>'}
    ]},
    {title:'第12天 · 虾仁蛋', tag:'第12天 · 饮食定制', blocks:[
    {h:'🛒 采购与执行', body:'<p>① 食材在「钱大妈」「美团买菜」「盒马」晚间 8 点后打折囤，性价比最高；② 前一晚备好早餐/午餐，早上省时、午间带饭不踩坑；③ 用餐节奏：早餐 7:30 前、午餐 12:30 前、晚餐 19:00 前，下午 15:00 加餐防暴食；④ 外食用「薄荷健康」查热量，守每日约 1200–1400 kcal 减脂线；胀气时饭后散步 10 分钟助消化。</p>'},
      {h:'🌅 早餐', body:'<p>蛋2 + 无糖全麦1片 + 温豆浆（少量）+ 小黄瓜。</p>'},
      {h:'🍱 午餐（带饭）', body:'<p>虾仁炒蛋（冻虾仁+2蛋少油）+ 清炒西兰花少量 + 糙米。</p>'},
      {h:'🌙 晚餐', body:'<p>豆腐菌菇汤 + 蒸南瓜 + 凉拌黄瓜。</p>'},
      {h:'🥤 加餐 · 饮水', body:'<p>苹果1个；普洱；核桃2个。</p>'},
      {h:'💡 为什么这么搭', body:'<p>虾仁蛋优质蛋白；南瓜低GI；黄瓜补水。单日约¥22。</p>'}
    ]},
    {title:'第13天 · 鱼腐玉米', tag:'第13天 · 饮食定制', blocks:[
    {h:'🛒 采购与执行', body:'<p>① 食材在「钱大妈」「美团买菜」「盒马」晚间 8 点后打折囤，性价比最高；② 前一晚备好早餐/午餐，早上省时、午间带饭不踩坑；③ 用餐节奏：早餐 7:30 前、午餐 12:30 前、晚餐 19:00 前，下午 15:00 加餐防暴食；④ 外食用「薄荷健康」查热量，守每日约 1200–1400 kcal 减脂线；胀气时饭后散步 10 分钟助消化。</p>'},
      {h:'🌅 早餐', body:'<p>燕麦粥 + 1个蛋 + 温姜茶 + 小番茄。</p>'},
      {h:'🍱 午餐（带饭）', body:'<p>蒸鸡胸 + 清炒通心菜 + 红薯。</p>'},
      {h:'🌙 晚餐', body:'<p>巴沙鱼豆腐汤 + 蒸玉米 + 凉拌木耳。</p>'},
      {h:'🥤 加餐 · 饮水', body:'<p>无糖酸奶+猕猴桃；绿茶；杏仁。</p>'},
      {h:'💡 为什么这么搭', body:'<p>鱼豆腐双蛋白；玉米替米饭控糖；木耳清肠。单日约¥18。</p>'}
    ]},
    {title:'第14天 · 两周收官', tag:'第14天 · 饮食定制', blocks:[
    {h:'🛒 采购与执行', body:'<p>① 食材在「钱大妈」「美团买菜」「盒马」晚间 8 点后打折囤，性价比最高；② 前一晚备好早餐/午餐，早上省时、午间带饭不踩坑；③ 用餐节奏：早餐 7:30 前、午餐 12:30 前、晚餐 19:00 前，下午 15:00 加餐防暴食；④ 外食用「薄荷健康」查热量，守每日约 1200–1400 kcal 减脂线；胀气时饭后散步 10 分钟助消化。</p>'},
      {h:'🌅 早餐', body:'<p>蛋2 + 燕麦+脱脂奶 + 蓝莓 + 圣女果。</p>'},
      {h:'🍱 午餐（带饭）', body:'<p>鸡胸蔬菜卷（鸡丝+生菜+番茄全麦薄饼）。</p>'},
      {h:'🌙 晚餐', body:'<p>豆腐番茄汤 + 蒸红薯 + 凉拌黄瓜。</p>'},
      {h:'🥤 加餐 · 饮水', body:'<p>苹果1个；乌龙；核桃2个。</p>'},
      {h:'💡 为什么这么搭', body:'<p>两周循环完成。核心公式：高蛋白早餐点燃代谢 + 蒸煮低脂控油 + 益生菌护肠消胀 + 控糖控盐。可继续循环或按口味微调。单日平均¥15-22，深圳随处可买。</p>'}
    ]}
  ],
  overseas: [
{title:'Day 1 · 海外企业推荐（采购中国消费电子）', tag:'第1天 · 中小 4 / 头部 1', blocks:[
{h:'💡 今日怎么用这笔清单', body:'① 在 Google / LinkedIn 搜企业名 + sourcing / procurement / purchasing manager，找采购负责人；② 用「阿里巴巴国际站」「中国制造网」对照其采购品类，反向以这些买家为目标做开发；③ 参加「香港电子展」「广交会」「Global Sources」定向约访；④ 用海关数据 / ImportGenius 查其中国进口记录，锁定具体 SKU；⑤ 开发信：Hi [Name], we supply [品类] to EU/US retailers，附 catalog 与合规证书（CE / FCC / RoHS）。'},
{h:'今日推荐 · 5 家（中小企业为主，含行业标杆）', body:`
        <div class="co"><div class="co-h"><b>Monoprice</b><span class="co-t sm">中小</span></div><div class="co-r">创立：2002 ｜ 总部：美国·加州</div><div class="co-r">企业介绍：高性价比线材/配件进口商</div><div class="co-r">采购的产品：线材/适配器/音频配件</div><div class="co-r">采购渠道：1688/阿里国际站直采</div><div class="co-r">官网：<a class="co-site" href="https://www.monoprice.com" target="_blank" rel="noopener">🌐 https://www.monoprice.com</a></div><div class="co-r reason">推荐理由：纯进口商选品与定价研究</div></div>
        <div class="co"><div class="co-h"><b>Crutchfield</b><span class="co-t sm">中小</span></div><div class="co-r">创立：1974 ｜ 总部：美国·弗吉尼亚</div><div class="co-r">企业介绍：汽车/家庭影音专业零售商</div><div class="co-r">采购的产品：车载电子/扬声器/配件</div><div class="co-r">采购渠道：直接对华 OEM</div><div class="co-r">官网：<a class="co-site" href="https://www.crutchfield.com" target="_blank" rel="noopener">🌐 https://www.crutchfield.com</a></div><div class="co-r reason">推荐理由：垂直品类专业渠道研究</div></div>
        <div class="co"><div class="co-h"><b>B&H Photo Video</b><span class="co-t sm">中小</span></div><div class="co-r">创立：1973 ｜ 总部：美国·纽约</div><div class="co-r">企业介绍：专业影像/电子大经销商</div><div class="co-r">采购的产品：相机配件/音频/智能家居</div><div class="co-r">采购渠道：直接对华 + 港展</div><div class="co-r">官网：<a class="co-site" href="https://www.bhphotovideo.com" target="_blank" rel="noopener">🌐 https://www.bhphotovideo.com</a></div><div class="co-r reason">推荐理由：专业品类大 SKU 采购</div></div>
        <div class="co"><div class="co-h"><b>Newegg</b><span class="co-t sm">中小</span></div><div class="co-r">创立：2001 ｜ 总部：美国·加州</div><div class="co-r">企业介绍：电商/DIY 硬件平台</div><div class="co-r">采购的产品：PC 配件/外设/组件</div><div class="co-r">采购渠道：直接对华工厂</div><div class="co-r">官网：<a class="co-site" href="https://www.newegg.com" target="_blank" rel="noopener">🌐 https://www.newegg.com</a></div><div class="co-r reason">推荐理由：线上 3C 渠道与华强北联动</div></div>
        <div class="co"><div class="co-h"><b>Best Buy</b><span class="co-t hd">头部</span></div><div class="co-r">创立：1966 ｜ 总部：美国·明尼苏达</div><div class="co-r">企业介绍：北美最大消费电子零售商，全品类渠道之王</div><div class="co-r">采购的产品：全品类消费电子（耳机/音箱/电视/智能配件），含 ONN 等自牌</div><div class="co-r">采购渠道：直接对华 OEM/ODM 采购 + 深圳/华中等采购团队</div><div class="co-r">官网：<a class="co-site" href="https://www.bestbuy.com" target="_blank" rel="noopener">🌐 https://www.bestbuy.com</a></div><div class="co-r reason">推荐理由：研究大买家的采购规格、合规与自牌打法</div></div>
      `}
]},
{title:'Day 2 · 海外企业推荐（采购中国消费电子）', tag:'第2天 · 中小 4 / 头部 1', blocks:[
{h:'💡 今日怎么用这笔清单', body:'① 在 Google / LinkedIn 搜企业名 + sourcing / procurement / purchasing manager，找采购负责人；② 用「阿里巴巴国际站」「中国制造网」对照其采购品类，反向以这些买家为目标做开发；③ 参加「香港电子展」「广交会」「Global Sources」定向约访；④ 用海关数据 / ImportGenius 查其中国进口记录，锁定具体 SKU；⑤ 开发信：Hi [Name], we supply [品类] to EU/US retailers，附 catalog 与合规证书（CE / FCC / RoHS）。'},
{h:'今日推荐 · 5 家（中小企业为主，含行业标杆）', body:`
        <div class="co"><div class="co-h"><b>Satechi</b><span class="co-t sm">中小</span></div><div class="co-r">创立：2007 ｜ 总部：美国·加州</div><div class="co-r">企业介绍：苹果生态配件品牌（OEM 中国）</div><div class="co-r">采购的产品：扩展坞/充电器/支架</div><div class="co-r">采购渠道：深圳 OEM 直采</div><div class="co-r">官网：<a class="co-site" href="https://satechi.net" target="_blank" rel="noopener">🌐 https://satechi.net</a></div><div class="co-r reason">推荐理由：轻资产品牌 + OEM 打法</div></div>
        <div class="co"><div class="co-h"><b>Twelve South</b><span class="co-t sm">中小</span></div><div class="co-r">创立：2009 ｜ 总部：美国·南卡</div><div class="co-r">企业介绍：苹果高端配件品牌</div><div class="co-r">采购的产品：保护壳/支架（OEM 中国）</div><div class="co-r">采购渠道：深圳 OEM</div><div class="co-r">官网：<a class="co-site" href="https://www.twelvesouth.com" target="_blank" rel="noopener">🌐 https://www.twelvesouth.com</a></div><div class="co-r reason">推荐理由：小众高端配件品牌路径</div></div>
        <div class="co"><div class="co-h"><b>iFixit</b><span class="co-t sm">中小</span></div><div class="co-r">创立：2003 ｜ 总部：美国·加州</div><div class="co-r">企业介绍：维修工具/配件社区</div><div class="co-r">采购的产品：工具/配件/备件</div><div class="co-r">采购渠道：直接对华采购</div><div class="co-r">官网：<a class="co-site" href="https://www.ifixit.com" target="_blank" rel="noopener">🌐 https://www.ifixit.com</a></div><div class="co-r reason">推荐理由：维修权生态与配件采购</div></div>
        <div class="co"><div class="co-h"><b>Voltaic Systems</b><span class="co-t sm">中小</span></div><div class="co-r">创立：2006 ｜ 总部：美国·纽约</div><div class="co-r">企业介绍：太阳能充电宝/背包品牌</div><div class="co-r">采购的产品：太阳能板/锂电池包（OEM 中国）</div><div class="co-r">采购渠道：中国 OEM</div><div class="co-r">官网：<a class="co-site" href="https://voltaicsystems.com" target="_blank" rel="noopener">🌐 https://voltaicsystems.com</a></div><div class="co-r reason">推荐理由：细分功能电子 OEM 研究</div></div>
        <div class="co"><div class="co-h"><b>Walmart</b><span class="co-t hd">头部</span></div><div class="co-r">创立：1962 ｜ 总部：美国·阿肯色</div><div class="co-r">企业介绍：全球最大零售商，消费电子海量采购方</div><div class="co-r">采购的产品：消费电子全品类（电视/耳机/智能家电），自牌 ONN 占大头</div><div class="co-r">采购渠道：全球采购办（深圳/华中）+ 工厂直采</div><div class="co-r">官网：<a class="co-site" href="https://www.walmart.com" target="_blank" rel="noopener">🌐 https://www.walmart.com</a></div><div class="co-r reason">推荐理由：研究大卖场如何做贴牌消费电子</div></div>
      `}
]},
{title:'Day 3 · 海外企业推荐（采购中国消费电子）', tag:'第3天 · 中小 4 / 头部 1', blocks:[
{h:'💡 今日怎么用这笔清单', body:'① 在 Google / LinkedIn 搜企业名 + sourcing / procurement / purchasing manager，找采购负责人；② 用「阿里巴巴国际站」「中国制造网」对照其采购品类，反向以这些买家为目标做开发；③ 参加「香港电子展」「广交会」「Global Sources」定向约访；④ 用海关数据 / ImportGenius 查其中国进口记录，锁定具体 SKU；⑤ 开发信：Hi [Name], we supply [品类] to EU/US retailers，附 catalog 与合规证书（CE / FCC / RoHS）。'},
{h:'今日推荐 · 5 家（中小企业为主，含行业标杆）', body:`
        <div class="co"><div class="co-h"><b>Nonda</b><span class="co-t sm">中小</span></div><div class="co-r">创立：2013 ｜ 总部：美国·密歇根</div><div class="co-r">企业介绍：车载智能电子品牌</div><div class="co-r">采购的产品：车载充电/胎压监测（OEM 中国）</div><div class="co-r">采购渠道：深圳 OEM</div><div class="co-r">官网：<a class="co-site" href="https://www.nonda.co" target="_blank" rel="noopener">🌐 https://www.nonda.co</a></div><div class="co-r reason">推荐理由：车载电子跨境品牌</div></div>
        <div class="co"><div class="co-h"><b>Wyze</b><span class="co-t sm">中小</span></div><div class="co-r">创立：2017 ｜ 总部：美国·西雅图</div><div class="co-r">企业介绍：智能家居品牌（制造中国）</div><div class="co-r">采购的产品：摄像头/传感器/智能设备</div><div class="co-r">采购渠道：深圳 OEM 直采</div><div class="co-r">官网：<a class="co-site" href="https://www.wyze.com" target="_blank" rel="noopener">🌐 https://www.wyze.com</a></div><div class="co-r reason">推荐理由：极低价智能硬件打法</div></div>
        <div class="co"><div class="co-h"><b>Roku</b><span class="co-t sm">中小</span></div><div class="co-r">创立：2002 ｜ 总部：美国·加州</div><div class="co-r">企业介绍：流媒体设备品牌（中国制造）</div><div class="co-r">采购的产品：机顶盒/遥控/配件</div><div class="co-r">采购渠道：代工厂（中国）直采</div><div class="co-r">官网：<a class="co-site" href="https://www.roku.com" target="_blank" rel="noopener">🌐 https://www.roku.com</a></div><div class="co-r reason">推荐理由：流媒体硬件 + 内容分成模式</div></div>
        <div class="co"><div class="co-h"><b>Belkin</b><span class="co-t sm">中小</span></div><div class="co-r">创立：1983 ｜ 总部：美国·加州</div><div class="co-r">企业介绍：连接配件品牌（现属鸿海）</div><div class="co-r">采购的产品：充电器/线缆/路由（OEM 中国）</div><div class="co-r">采购渠道：鸿海体系 + 对华采购</div><div class="co-r">官网：<a class="co-site" href="https://www.belkin.com" target="_blank" rel="noopener">🌐 https://www.belkin.com</a></div><div class="co-r reason">推荐理由：被代工厂收购的品牌案例</div></div>
        <div class="co"><div class="co-h"><b>Target</b><span class="co-t hd">头部</span></div><div class="co-r">创立：1962 ｜ 总部：美国·明尼苏达</div><div class="co-r">企业介绍：美国第二大零售商，中高端自牌突出</div><div class="co-r">采购的产品：智能家电/耳机/充电配件 自牌</div><div class="co-r">采购渠道：直接对华采购 + 代采商</div><div class="co-r">官网：<a class="co-site" href="https://www.target.com" target="_blank" rel="noopener">🌐 https://www.target.com</a></div><div class="co-r reason">推荐理由：研究中高端自牌消费电子选品</div></div>
      `}
]},
{title:'Day 4 · 海外企业推荐（采购中国消费电子）', tag:'第4天 · 中小 4 / 头部 1', blocks:[
{h:'💡 今日怎么用这笔清单', body:'① 在 Google / LinkedIn 搜企业名 + sourcing / procurement / purchasing manager，找采购负责人；② 用「阿里巴巴国际站」「中国制造网」对照其采购品类，反向以这些买家为目标做开发；③ 参加「香港电子展」「广交会」「Global Sources」定向约访；④ 用海关数据 / ImportGenius 查其中国进口记录，锁定具体 SKU；⑤ 开发信：Hi [Name], we supply [品类] to EU/US retailers，附 catalog 与合规证书（CE / FCC / RoHS）。'},
{h:'今日推荐 · 5 家（中小企业为主，含行业标杆）', body:`
        <div class="co"><div class="co-h"><b>Boulanger</b><span class="co-t sm">中小</span></div><div class="co-r">创立：1954 ｜ 总部：法国·里尔</div><div class="co-r">企业介绍：法国家电电子连锁</div><div class="co-r">采购的产品：白电/黑电/智能</div><div class="co-r">采购渠道：集中对华</div><div class="co-r">官网：<a class="co-site" href="https://www.boulanger.com" target="_blank" rel="noopener">🌐 https://www.boulanger.com</a></div><div class="co-r reason">推荐理由：法国 regional 渠道</div></div>
        <div class="co"><div class="co-h"><b>AO.com</b><span class="co-t sm">中小</span></div><div class="co-r">创立：2000 ｜ 总部：英国·博尔顿</div><div class="co-r">企业介绍：在线家电零售商</div><div class="co-r">采购的产品：大家电/小家电</div><div class="co-r">采购渠道：直接对华</div><div class="co-r">官网：<a class="co-site" href="https://www.ao.com" target="_blank" rel="noopener">🌐 https://www.ao.com</a></div><div class="co-r reason">推荐理由：线上家电配送模式</div></div>
        <div class="co"><div class="co-h"><b>Euronics</b><span class="co-t sm">中小</span></div><div class="co-r">创立：1990s ｜ 总部：荷兰·阿姆斯特丹</div><div class="co-r">企业介绍：欧洲采购联盟（成员制）</div><div class="co-r">采购的产品：全品类家电电子</div><div class="co-r">采购渠道：联合招标对华</div><div class="co-r">官网：<a class="co-site" href="https://www.euronics.com" target="_blank" rel="noopener">🌐 https://www.euronics.com</a></div><div class="co-r reason">推荐理由：采购联盟如何集采中国货</div></div>
        <div class="co"><div class="co-h"><b>Worten</b><span class="co-t sm">中小</span></div><div class="co-r">创立：1996 ｜ 总部：葡萄牙·里斯本</div><div class="co-r">企业介绍：葡/西电子连锁</div><div class="co-r">采购的产品：全品类消费电子</div><div class="co-r">采购渠道：对华采购</div><div class="co-r">官网：<a class="co-site" href="https://www.worten.pt" target="_blank" rel="noopener">🌐 https://www.worten.pt</a></div><div class="co-r reason">推荐理由：南欧渠道</div></div>
        <div class="co"><div class="co-h"><b>MediaMarkt（CECONOMY）</b><span class="co-t hd">头部</span></div><div class="co-r">创立：1979 ｜ 总部：德国·慕尼黑</div><div class="co-r">企业介绍：欧洲最大消费电子连锁，覆盖德/荷/比等</div><div class="co-r">采购的产品：全品类消费电子 + 自有配件</div><div class="co-r">采购渠道：集中招标采购，大量中国 OEM</div><div class="co-r">官网：<a class="co-site" href="https://www.mediamarkt.de" target="_blank" rel="noopener">🌐 https://www.mediamarkt.de</a></div><div class="co-r reason">推荐理由：研究欧洲渠道采购标准与 CE/GS 认证</div></div>
      `}
]},
{title:'Day 5 · 海外企业推荐（采购中国消费电子）', tag:'第5天 · 中小 4 / 头部 1', blocks:[
{h:'💡 今日怎么用这笔清单', body:'① 在 Google / LinkedIn 搜企业名 + sourcing / procurement / purchasing manager，找采购负责人；② 用「阿里巴巴国际站」「中国制造网」对照其采购品类，反向以这些买家为目标做开发；③ 参加「香港电子展」「广交会」「Global Sources」定向约访；④ 用海关数据 / ImportGenius 查其中国进口记录，锁定具体 SKU；⑤ 开发信：Hi [Name], we supply [品类] to EU/US retailers，附 catalog 与合规证书（CE / FCC / RoHS）。'},
{h:'今日推荐 · 5 家（中小企业为主，含行业标杆）', body:`
        <div class="co"><div class="co-h"><b>Power</b><span class="co-t sm">中小</span></div><div class="co-r">创立：1991 ｜ 总部：荷兰/比利时</div><div class="co-r">企业介绍：荷比电子连锁</div><div class="co-r">采购的产品：全品类</div><div class="co-r">采购渠道：直接对华</div><div class="co-r">官网：<a class="co-site" href="https://www.power.nl" target="_blank" rel="noopener">🌐 https://www.power.nl</a></div><div class="co-r reason">推荐理由：低地国家渠道</div></div>
        <div class="co"><div class="co-h"><b>Coolblue</b><span class="co-t sm">中小</span></div><div class="co-r">创立：1999 ｜ 总部：荷兰·埃因霍温</div><div class="co-r">企业介绍：荷比电商/零售商</div><div class="co-r">采购的产品：全品类电子</div><div class="co-r">采购渠道：直接对华 + 自有仓</div><div class="co-r">官网：<a class="co-site" href="https://www.coolblue.nl" target="_blank" rel="noopener">🌐 https://www.coolblue.nl</a></div><div class="co-r reason">推荐理由：极致服务电商的采购</div></div>
        <div class="co"><div class="co-h"><b>Komplett</b><span class="co-t sm">中小</span></div><div class="co-r">创立：1996 ｜ 总部：挪威·桑德尔福德</div><div class="co-r">企业介绍：北欧电商/零售商</div><div class="co-r">采购的产品：PC/外设/家电</div><div class="co-r">采购渠道：对华采购</div><div class="co-r">官网：<a class="co-site" href="https://www.komplett.no" target="_blank" rel="noopener">🌐 https://www.komplett.no</a></div><div class="co-r reason">推荐理由：北欧渠道</div></div>
        <div class="co"><div class="co-h"><b>Cyberport</b><span class="co-t sm">中小</span></div><div class="co-r">创立：1998 ｜ 总部：德国·柏林</div><div class="co-r">企业介绍：德国 IT 零售商</div><div class="co-r">采购的产品：PC/外设/组件</div><div class="co-r">采购渠道：对华采购</div><div class="co-r">官网：<a class="co-site" href="https://www.cyberport.de" target="_blank" rel="noopener">🌐 https://www.cyberport.de</a></div><div class="co-r reason">推荐理由：德国 3C 渠道</div></div>
        <div class="co"><div class="co-h"><b>Currys</b><span class="co-t hd">头部</span></div><div class="co-r">创立：1884 ｜ 总部：英国·伦敦</div><div class="co-r">企业介绍：英国最大电子零售商</div><div class="co-r">采购的产品：电脑/家电/智能设备全品类</div><div class="co-r">采购渠道：直接对华 + 香港电子展</div><div class="co-r">官网：<a class="co-site" href="https://www.currys.co.uk" target="_blank" rel="noopener">🌐 https://www.currys.co.uk</a></div><div class="co-r reason">推荐理由：研究英国市场准入与脱欧后合规</div></div>
      `}
]},
{title:'Day 6 · 海外企业推荐（采购中国消费电子）', tag:'第6天 · 中小 4 / 头部 1', blocks:[
{h:'💡 今日怎么用这笔清单', body:'① 在 Google / LinkedIn 搜企业名 + sourcing / procurement / purchasing manager，找采购负责人；② 用「阿里巴巴国际站」「中国制造网」对照其采购品类，反向以这些买家为目标做开发；③ 参加「香港电子展」「广交会」「Global Sources」定向约访；④ 用海关数据 / ImportGenius 查其中国进口记录，锁定具体 SKU；⑤ 开发信：Hi [Name], we supply [品类] to EU/US retailers，附 catalog 与合规证书（CE / FCC / RoHS）。'},
{h:'今日推荐 · 5 家（中小企业为主，含行业标杆）', body:`
        <div class="co"><div class="co-h"><b>Alternate</b><span class="co-t sm">中小</span></div><div class="co-r">创立：1986 ｜ 总部：德国·亚琛</div><div class="co-r">企业介绍：德国硬件电商</div><div class="co-r">采购的产品：组件/外设</div><div class="co-r">采购渠道：对华</div><div class="co-r">官网：<a class="co-site" href="https://www.alternate.de" target="_blank" rel="noopener">🌐 https://www.alternate.de</a></div><div class="co-r reason">推荐理由：德系硬件电商</div></div>
        <div class="co"><div class="co-h"><b>LDLC</b><span class="co-t sm">中小</span></div><div class="co-r">创立：1996 ｜ 总部：法国·里昂</div><div class="co-r">企业介绍：法国 IT 电商</div><div class="co-r">采购的产品：组件/外设</div><div class="co-r">采购渠道：对华</div><div class="co-r">官网：<a class="co-site" href="https://www.ldlc.com" target="_blank" rel="noopener">🌐 https://www.ldlc.com</a></div><div class="co-r reason">推荐理由：法系硬件电商</div></div>
        <div class="co"><div class="co-h"><b>Materiel.net</b><span class="co-t sm">中小</span></div><div class="co-r">创立：1999 ｜ 总部：法国·巴黎</div><div class="co-r">企业介绍：法国硬件电商</div><div class="co-r">采购的产品：组件/外设</div><div class="co-r">采购渠道：对华</div><div class="co-r">官网：<a class="co-site" href="https://www.materiel.net" target="_blank" rel="noopener">🌐 https://www.materiel.net</a></div><div class="co-r reason">推荐理由：法系专业电商</div></div>
        <div class="co"><div class="co-h"><b>Sharaf DG</b><span class="co-t sm">中小</span></div><div class="co-r">创立：2001 ｜ 总部：阿联酋·迪拜</div><div class="co-r">企业介绍：阿联酋电子连锁</div><div class="co-r">采购的产品：全品类</div><div class="co-r">采购渠道：对华 + 港展</div><div class="co-r">官网：<a class="co-site" href="https://www.sharafdg.com" target="_blank" rel="noopener">🌐 https://www.sharafdg.com</a></div><div class="co-r reason">推荐理由：海湾渠道与迪拜转口</div></div>
        <div class="co"><div class="co-h"><b>JB Hi-Fi</b><span class="co-t hd">头部</span></div><div class="co-r">创立：1974 ｜ 总部：澳大利亚·墨尔本</div><div class="co-r">企业介绍：澳洲最大电子零售商</div><div class="co-r">采购的产品：全品类消费电子</div><div class="co-r">采购渠道：直接对华采购 + 澳本地仓</div><div class="co-r">官网：<a class="co-site" href="https://www.jbhifi.com.au" target="_blank" rel="noopener">🌐 https://www.jbhifi.com.au</a></div><div class="co-r reason">推荐理由：研究南半球大买家采购节奏与澳标 RCM</div></div>
      `}
]},
{title:'Day 7 · 海外企业推荐（采购中国消费电子）', tag:'第7天 · 中小 4 / 头部 1', blocks:[
{h:'💡 今日怎么用这笔清单', body:'① 在 Google / LinkedIn 搜企业名 + sourcing / procurement / purchasing manager，找采购负责人；② 用「阿里巴巴国际站」「中国制造网」对照其采购品类，反向以这些买家为目标做开发；③ 参加「香港电子展」「广交会」「Global Sources」定向约访；④ 用海关数据 / ImportGenius 查其中国进口记录，锁定具体 SKU；⑤ 开发信：Hi [Name], we supply [品类] to EU/US retailers，附 catalog 与合规证书（CE / FCC / RoHS）。'},
{h:'今日推荐 · 5 家（中小企业为主，含行业标杆）', body:`
        <div class="co"><div class="co-h"><b>Virgin Megastore</b><span class="co-t sm">中小</span></div><div class="co-r">创立：2001 ｜ 总部：阿联酋/中东</div><div class="co-r">企业介绍：中东电子/文化连锁</div><div class="co-r">采购的产品：消费电子/耳机</div><div class="co-r">采购渠道：对华采购</div><div class="co-r">官网：<a class="co-site" href="https://www.virginmegastore.ae" target="_blank" rel="noopener">🌐 https://www.virginmegastore.ae</a></div><div class="co-r reason">推荐理由：中东零售</div></div>
        <div class="co"><div class="co-h"><b>Jumbo Electronics</b><span class="co-t sm">中小</span></div><div class="co-r">创立：1974 ｜ 总部：阿联酋·迪拜</div><div class="co-r">企业介绍：阿联酋电子零售商</div><div class="co-r">采购的产品：全品类</div><div class="co-r">采购渠道：对华</div><div class="co-r">官网：<a class="co-site" href="https://www.jumbomegastore.com" target="_blank" rel="noopener">🌐 https://www.jumbomegastore.com</a></div><div class="co-r reason">推荐理由：海湾老牌渠道</div></div>
        <div class="co"><div class="co-h"><b>Axiom Telecom</b><span class="co-t sm">中小</span></div><div class="co-r">创立：1997 ｜ 总部：阿联酋·迪拜</div><div class="co-r">企业介绍：中东手机/配件分销商</div><div class="co-r">采购的产品：手机配件/智能设备</div><div class="co-r">采购渠道：对华直采</div><div class="co-r">官网：<a class="co-site" href="https://www.axiomtelecom.com" target="_blank" rel="noopener">🌐 https://www.axiomtelecom.com</a></div><div class="co-r reason">推荐理由：中东手机渠道研究</div></div>
        <div class="co"><div class="co-h"><b>X-cite</b><span class="co-t sm">中小</span></div><div class="co-r">创立：2001 ｜ 总部：科威特</div><div class="co-r">企业介绍：科威特电子连锁</div><div class="co-r">采购的产品：全品类</div><div class="co-r">采购渠道：对华</div><div class="co-r">官网：<a class="co-site" href="https://www.xcite.com" target="_blank" rel="noopener">🌐 https://www.xcite.com</a></div><div class="co-r reason">推荐理由：海湾小国渠道</div></div>
        <div class="co"><div class="co-h"><b>Fnac Darty</b><span class="co-t hd">头部</span></div><div class="co-r">创立：1954 ｜ 总部：法国·巴黎</div><div class="co-r">企业介绍：法国最大电子/文化零售商（Fnac+Darty）</div><div class="co-r">采购的产品：智能设备/耳机/家电</div><div class="co-r">采购渠道：集中对华采购</div><div class="co-r">官网：<a class="co-site" href="https://www.fnac.com" target="_blank" rel="noopener">🌐 https://www.fnac.com</a></div><div class="co-r reason">推荐理由：研究法国市场与售后（反修权）合规</div></div>
      `}
]},
{title:'Day 8 · 海外企业推荐（采购中国消费电子）', tag:'第8天 · 中小 5 / 头部 0', blocks:[
{h:'💡 今日怎么用这笔清单', body:'① 在 Google / LinkedIn 搜企业名 + sourcing / procurement / purchasing manager，找采购负责人；② 用「阿里巴巴国际站」「中国制造网」对照其采购品类，反向以这些买家为目标做开发；③ 参加「香港电子展」「广交会」「Global Sources」定向约访；④ 用海关数据 / ImportGenius 查其中国进口记录，锁定具体 SKU；⑤ 开发信：Hi [Name], we supply [品类] to EU/US retailers，附 catalog 与合规证书（CE / FCC / RoHS）。'},
{h:'今日推荐 · 5 家（中小企业为主，含行业标杆）', body:`
        <div class="co"><div class="co-h"><b>B.Tech</b><span class="co-t sm">中小</span></div><div class="co-r">创立：1997 ｜ 总部：埃及·开罗</div><div class="co-r">企业介绍：埃及电子零售商</div><div class="co-r">采购的产品：家电/消费电子</div><div class="co-r">采购渠道：对华</div><div class="co-r">官网：<a class="co-site" href="https://www.btech.com" target="_blank" rel="noopener">🌐 https://www.btech.com</a></div><div class="co-r reason">推荐理由：北非市场</div></div>
        <div class="co"><div class="co-h"><b>Eros Group</b><span class="co-t sm">中小</span></div><div class="co-r">创立：1967 ｜ 总部：阿联酋·迪拜</div><div class="co-r">企业介绍：阿联酋家电分销商</div><div class="co-r">采购的产品：大家电/小家电</div><div class="co-r">采购渠道：对华</div><div class="co-r">官网：<a class="co-site" href="https://www.erosgroup.ae" target="_blank" rel="noopener">🌐 https://www.erosgroup.ae</a></div><div class="co-r reason">推荐理由：海湾家电分销</div></div>
        <div class="co"><div class="co-h"><b>Magazine Luiza</b><span class="co-t sm">中小</span></div><div class="co-r">创立：1957 ｜ 总部：巴西·圣保罗</div><div class="co-r">企业介绍：巴西零售巨头</div><div class="co-r">采购的产品：全品类电子/家电</div><div class="co-r">采购渠道：对华 + 本地组装</div><div class="co-r">官网：<a class="co-site" href="https://www.magazineluiza.com.br" target="_blank" rel="noopener">🌐 https://www.magazineluiza.com.br</a></div><div class="co-r reason">推荐理由：巴西市场与高关税应对</div></div>
        <div class="co"><div class="co-h"><b>Americanas</b><span class="co-t sm">中小</span></div><div class="co-r">创立：1929 ｜ 总部：巴西·里约</div><div class="co-r">企业介绍：巴西零售</div><div class="co-r">采购的产品：全品类</div><div class="co-r">采购渠道：对华</div><div class="co-r">官网：<a class="co-site" href="https://www.americanas.com.br" target="_blank" rel="noopener">🌐 https://www.americanas.com.br</a></div><div class="co-r reason">推荐理由：巴西电商渠道</div></div>
        <div class="co"><div class="co-h"><b>Casas Bahia</b><span class="co-t sm">中小</span></div><div class="co-r">创立：1952 ｜ 总部：巴西·圣保罗</div><div class="co-r">企业介绍：巴西家电电子连锁</div><div class="co-r">采购的产品：家电/消费电子</div><div class="co-r">采购渠道：对华</div><div class="co-r">官网：<a class="co-site" href="https://www.casasbahia.com.br" target="_blank" rel="noopener">🌐 https://www.casasbahia.com.br</a></div><div class="co-r reason">推荐理由：巴西大众渠道</div></div>
      `}
]},
{title:'Day 9 · 海外企业推荐（采购中国消费电子）', tag:'第9天 · 中小 5 / 头部 0', blocks:[
{h:'💡 今日怎么用这笔清单', body:'① 在 Google / LinkedIn 搜企业名 + sourcing / procurement / purchasing manager，找采购负责人；② 用「阿里巴巴国际站」「中国制造网」对照其采购品类，反向以这些买家为目标做开发；③ 参加「香港电子展」「广交会」「Global Sources」定向约访；④ 用海关数据 / ImportGenius 查其中国进口记录，锁定具体 SKU；⑤ 开发信：Hi [Name], we supply [品类] to EU/US retailers，附 catalog 与合规证书（CE / FCC / RoHS）。'},
{h:'今日推荐 · 5 家（中小企业为主，含行业标杆）', body:`
        <div class="co"><div class="co-h"><b>Fast Shop</b><span class="co-t sm">中小</span></div><div class="co-r">创立：1992 ｜ 总部：巴西·圣保罗</div><div class="co-r">企业介绍：巴西高端电子零售</div><div class="co-r">采购的产品：高端电子/家电</div><div class="co-r">采购渠道：对华</div><div class="co-r">官网：<a class="co-site" href="https://www.fastshop.com.br" target="_blank" rel="noopener">🌐 https://www.fastshop.com.br</a></div><div class="co-r reason">推荐理由：巴西中高端渠道</div></div>
        <div class="co"><div class="co-h"><b>Falabella</b><span class="co-t sm">中小</span></div><div class="co-r">创立：1889 ｜ 总部：智利·圣地亚哥</div><div class="co-r">企业介绍：南美零售集团</div><div class="co-r">采购的产品：全品类</div><div class="co-r">采购渠道：对华</div><div class="co-r">官网：<a class="co-site" href="https://www.falabella.com" target="_blank" rel="noopener">🌐 https://www.falabella.com</a></div><div class="co-r reason">推荐理由：南美多国渠道</div></div>
        <div class="co"><div class="co-h"><b>Liverpool</b><span class="co-t sm">中小</span></div><div class="co-r">创立：1847 ｜ 总部：墨西哥·墨西哥城</div><div class="co-r">企业介绍：墨西哥高端百货</div><div class="co-r">采购的产品：消费电子/家电</div><div class="co-r">采购渠道：对华 + 近岸</div><div class="co-r">官网：<a class="co-site" href="https://www.liverpool.com.mx" target="_blank" rel="noopener">🌐 https://www.liverpool.com.mx</a></div><div class="co-r reason">推荐理由：墨国市场与美墨近岸</div></div>
        <div class="co"><div class="co-h"><b>Coppel</b><span class="co-t sm">中小</span></div><div class="co-r">创立：1941 ｜ 总部：墨西哥·库利亚坎</div><div class="co-r">企业介绍：墨西哥大众零售（分期）</div><div class="co-r">采购的产品：家电/电子</div><div class="co-r">采购渠道：对华</div><div class="co-r">官网：<a class="co-site" href="https://www.coppel.com" target="_blank" rel="noopener">🌐 https://www.coppel.com</a></div><div class="co-r reason">推荐理由：分期付款渠道模式</div></div>
        <div class="co"><div class="co-h"><b>Sears Mexico</b><span class="co-t sm">中小</span></div><div class="co-r">创立：1947 ｜ 总部：墨西哥</div><div class="co-r">企业介绍：墨西哥电子百货</div><div class="co-r">采购的产品：家电/电子</div><div class="co-r">采购渠道：对华</div><div class="co-r">官网：<a class="co-site" href="https://www.sears.com.mx" target="_blank" rel="noopener">🌐 https://www.sears.com.mx</a></div><div class="co-r reason">推荐理由：墨国渠道</div></div>
      `}
]},
{title:'Day 10 · 海外企业推荐（采购中国消费电子）', tag:'第10天 · 中小 5 / 头部 0', blocks:[
{h:'💡 今日怎么用这笔清单', body:'① 在 Google / LinkedIn 搜企业名 + sourcing / procurement / purchasing manager，找采购负责人；② 用「阿里巴巴国际站」「中国制造网」对照其采购品类，反向以这些买家为目标做开发；③ 参加「香港电子展」「广交会」「Global Sources」定向约访；④ 用海关数据 / ImportGenius 查其中国进口记录，锁定具体 SKU；⑤ 开发信：Hi [Name], we supply [品类] to EU/US retailers，附 catalog 与合规证书（CE / FCC / RoHS）。'},
{h:'今日推荐 · 5 家（中小企业为主，含行业标杆）', body:`
        <div class="co"><div class="co-h"><b>Bic Camera</b><span class="co-t sm">中小</span></div><div class="co-r">创立：1968 ｜ 总部：日本·东京</div><div class="co-r">企业介绍：日本电子连锁</div><div class="co-r">采购的产品：全品类（含中国 OEM）</div><div class="co-r">采购渠道：直接对华采购</div><div class="co-r">官网：<a class="co-site" href="https://www.biccamera.com" target="_blank" rel="noopener">🌐 https://www.biccamera.com</a></div><div class="co-r reason">推荐理由：日本渠道与品质要求</div></div>
        <div class="co"><div class="co-h"><b>Yodobashi</b><span class="co-t sm">中小</span></div><div class="co-r">创立：1960 ｜ 总部：日本·东京</div><div class="co-r">企业介绍：日本电子连锁</div><div class="co-r">采购的产品：全品类</div><div class="co-r">采购渠道：对华</div><div class="co-r">官网：<a class="co-site" href="https://www.yodobashi.com" target="_blank" rel="noopener">🌐 https://www.yodobashi.com</a></div><div class="co-r reason">推荐理由：日本大店模式</div></div>
        <div class="co"><div class="co-h"><b>Yamada Denki</b><span class="co-t sm">中小</span></div><div class="co-r">创立：1973 ｜ 总部：日本·东京</div><div class="co-r">企业介绍：日本家电连锁</div><div class="co-r">采购的产品：家电/电子</div><div class="co-r">采购渠道：对华</div><div class="co-r">官网：<a class="co-site" href="https://www.yamada-denki.jp" target="_blank" rel="noopener">🌐 https://www.yamada-denki.jp</a></div><div class="co-r reason">推荐理由：日本家电渠道</div></div>
        <div class="co"><div class="co-h"><b>Joshin</b><span class="co-t sm">中小</span></div><div class="co-r">创立：1952 ｜ 总部：日本·大阪</div><div class="co-r">企业介绍：日本电子连锁</div><div class="co-r">采购的产品：全品类</div><div class="co-r">采购渠道：对华</div><div class="co-r">官网：<a class="co-site" href="https://www.joshin.co.jp" target="_blank" rel="noopener">🌐 https://www.joshin.co.jp</a></div><div class="co-r reason">推荐理由：日本区域渠道</div></div>
        <div class="co"><div class="co-h"><b>Edion</b><span class="co-t sm">中小</span></div><div class="co-r">创立：2002 ｜ 总部：日本·大阪</div><div class="co-r">企业介绍：日本家电连锁</div><div class="co-r">采购的产品：家电/电子</div><div class="co-r">采购渠道：对华</div><div class="co-r">官网：<a class="co-site" href="https://www.edion.com" target="_blank" rel="noopener">🌐 https://www.edion.com</a></div><div class="co-r reason">推荐理由：日本西日本渠道</div></div>
      `}
]},
{title:'Day 11 · 海外企业推荐（采购中国消费电子）', tag:'第11天 · 中小 5 / 头部 0', blocks:[
{h:'💡 今日怎么用这笔清单', body:'① 在 Google / LinkedIn 搜企业名 + sourcing / procurement / purchasing manager，找采购负责人；② 用「阿里巴巴国际站」「中国制造网」对照其采购品类，反向以这些买家为目标做开发；③ 参加「香港电子展」「广交会」「Global Sources」定向约访；④ 用海关数据 / ImportGenius 查其中国进口记录，锁定具体 SKU；⑤ 开发信：Hi [Name], we supply [品类] to EU/US retailers，附 catalog 与合规证书（CE / FCC / RoHS）。'},
{h:'今日推荐 · 5 家（中小企业为主，含行业标杆）', body:`
        <div class="co"><div class="co-h"><b>Nojima</b><span class="co-t sm">中小</span></div><div class="co-r">创立：1980 ｜ 总部：日本·横滨</div><div class="co-r">企业介绍：日本电子连锁</div><div class="co-r">采购的产品：全品类</div><div class="co-r">采购渠道：对华</div><div class="co-r">官网：<a class="co-site" href="https://www.nojima.co.jp" target="_blank" rel="noopener">🌐 https://www.nojima.co.jp</a></div><div class="co-r reason">推荐理由：日本渠道</div></div>
        <div class="co"><div class="co-h"><b>Lotte Hi-Mart</b><span class="co-t sm">中小</span></div><div class="co-r">创立：1993 ｜ 总部：韩国·首尔</div><div class="co-r">企业介绍：韩国电子连锁</div><div class="co-r">采购的产品：全品类（含中国 OEM）</div><div class="co-r">采购渠道：直接对华</div><div class="co-r">官网：<a class="co-site" href="https://www.hmart.co.kr" target="_blank" rel="noopener">🌐 https://www.hmart.co.kr</a></div><div class="co-r reason">推荐理由：韩国渠道与韩标</div></div>
        <div class="co"><div class="co-h"><b>Electromart</b><span class="co-t sm">中小</span></div><div class="co-r">创立：1997 ｜ 总部：韩国·首尔</div><div class="co-r">企业介绍：韩国电子连锁</div><div class="co-r">采购的产品：全品类</div><div class="co-r">采购渠道：对华</div><div class="co-r">官网：<a class="co-site" href="https://www.emart.com" target="_blank" rel="noopener">🌐 https://www.emart.com</a></div><div class="co-r reason">推荐理由：韩国渠道</div></div>
        <div class="co"><div class="co-h"><b>Croma</b><span class="co-t sm">中小</span></div><div class="co-r">创立：2006 ｜ 总部：印度·孟买</div><div class="co-r">企业介绍：印度电子连锁（Tata）</div><div class="co-r">采购的产品：全品类</div><div class="co-r">采购渠道：对华 + 印度组装</div><div class="co-r">官网：<a class="co-site" href="https://www.croma.com" target="_blank" rel="noopener">🌐 https://www.croma.com</a></div><div class="co-r reason">推荐理由：印度市场与 PLI 政策</div></div>
        <div class="co"><div class="co-h"><b>Reliance Digital</b><span class="co-t sm">中小</span></div><div class="co-r">创立：2007 ｜ 总部：印度·孟买</div><div class="co-r">企业介绍：印度电子零售</div><div class="co-r">采购的产品：全品类</div><div class="co-r">采购渠道：对华</div><div class="co-r">官网：<a class="co-site" href="https://www.reliancedigital.in" target="_blank" rel="noopener">🌐 https://www.reliancedigital.in</a></div><div class="co-r reason">推荐理由：印度大渠道</div></div>
      `}
]},
{title:'Day 12 · 海外企业推荐（采购中国消费电子）', tag:'第12天 · 中小 5 / 头部 0', blocks:[
{h:'💡 今日怎么用这笔清单', body:'① 在 Google / LinkedIn 搜企业名 + sourcing / procurement / purchasing manager，找采购负责人；② 用「阿里巴巴国际站」「中国制造网」对照其采购品类，反向以这些买家为目标做开发；③ 参加「香港电子展」「广交会」「Global Sources」定向约访；④ 用海关数据 / ImportGenius 查其中国进口记录，锁定具体 SKU；⑤ 开发信：Hi [Name], we supply [品类] to EU/US retailers，附 catalog 与合规证书（CE / FCC / RoHS）。'},
{h:'今日推荐 · 5 家（中小企业为主，含行业标杆）', body:`
        <div class="co"><div class="co-h"><b>Vijay Sales</b><span class="co-t sm">中小</span></div><div class="co-r">创立：1980 ｜ 总部：印度·孟买</div><div class="co-r">企业介绍：印度电子连锁</div><div class="co-r">采购的产品：家电/电子</div><div class="co-r">采购渠道：对华</div><div class="co-r">官网：<a class="co-site" href="https://www.vijaysales.com" target="_blank" rel="noopener">🌐 https://www.vijaysales.com</a></div><div class="co-r reason">推荐理由：印度区域渠道</div></div>
        <div class="co"><div class="co-h"><b>Poorvika</b><span class="co-t sm">中小</span></div><div class="co-r">创立：2004 ｜ 总部：印度·金奈</div><div class="co-r">企业介绍：印度手机电子连锁</div><div class="co-r">采购的产品：手机/配件</div><div class="co-r">采购渠道：对华</div><div class="co-r">官网：<a class="co-site" href="https://www.poorvika.com" target="_blank" rel="noopener">🌐 https://www.poorvika.com</a></div><div class="co-r reason">推荐理由：印度手机渠道</div></div>
        <div class="co"><div class="co-h"><b>Senheng</b><span class="co-t sm">中小</span></div><div class="co-r">创立：1989 ｜ 总部：马来西亚·吉隆坡</div><div class="co-r">企业介绍：马来西亚电子连锁</div><div class="co-r">采购的产品：全品类</div><div class="co-r">采购渠道：对华 + 港展</div><div class="co-r">官网：<a class="co-site" href="https://www.senheng.com.my" target="_blank" rel="noopener">🌐 https://www.senheng.com.my</a></div><div class="co-r reason">推荐理由：东南亚渠道</div></div>
        <div class="co"><div class="co-h"><b>Power Buy</b><span class="co-t sm">中小</span></div><div class="co-r">创立：1993 ｜ 总部：泰国·曼谷</div><div class="co-r">企业介绍：泰国电子连锁</div><div class="co-r">采购的产品：全品类</div><div class="co-r">采购渠道：对华</div><div class="co-r">官网：<a class="co-site" href="https://www.powerbuy.co.th" target="_blank" rel="noopener">🌐 https://www.powerbuy.co.th</a></div><div class="co-r reason">推荐理由：泰国渠道</div></div>
        <div class="co"><div class="co-h"><b>Banana</b><span class="co-t sm">中小</span></div><div class="co-r">创立：1994 ｜ 总部：泰国·曼谷</div><div class="co-r">企业介绍：泰国 IT 连锁</div><div class="co-r">采购的产品：PC/外设</div><div class="co-r">采购渠道：对华</div><div class="co-r">官网：<a class="co-site" href="https://www.banana.it" target="_blank" rel="noopener">🌐 https://www.banana.it</a></div><div class="co-r reason">推荐理由：泰国 IT 渠道</div></div>
      `}
]},
{title:'Day 13 · 海外企业推荐（采购中国消费电子）', tag:'第13天 · 中小 5 / 头部 0', blocks:[
{h:'💡 今日怎么用这笔清单', body:'① 在 Google / LinkedIn 搜企业名 + sourcing / procurement / purchasing manager，找采购负责人；② 用「阿里巴巴国际站」「中国制造网」对照其采购品类，反向以这些买家为目标做开发；③ 参加「香港电子展」「广交会」「Global Sources」定向约访；④ 用海关数据 / ImportGenius 查其中国进口记录，锁定具体 SKU；⑤ 开发信：Hi [Name], we supply [品类] to EU/US retailers，附 catalog 与合规证书（CE / FCC / RoHS）。'},
{h:'今日推荐 · 5 家（中小企业为主，含行业标杆）', body:`
        <div class="co"><div class="co-h"><b>The Gioi Di Dong (MWG)</b><span class="co-t sm">中小</span></div><div class="co-r">创立：2004 ｜ 总部：越南·胡志明</div><div class="co-r">企业介绍：越南最大电子零售</div><div class="co-r">采购的产品：手机/电子全品类</div><div class="co-r">采购渠道：对华</div><div class="co-r">官网：<a class="co-site" href="https://www.thegioididong.com" target="_blank" rel="noopener">🌐 https://www.thegioididong.com</a></div><div class="co-r reason">推荐理由：越南渠道龙头</div></div>
        <div class="co"><div class="co-h"><b>Nguyen Kim</b><span class="co-t sm">中小</span></div><div class="co-r">创立：1992 ｜ 总部：越南·胡志明</div><div class="co-r">企业介绍：越南电子连锁</div><div class="co-r">采购的产品：全品类</div><div class="co-r">采购渠道：对华</div><div class="co-r">官网：<a class="co-site" href="https://www.nguyenkim.com" target="_blank" rel="noopener">🌐 https://www.nguyenkim.com</a></div><div class="co-r reason">推荐理由：越南渠道</div></div>
        <div class="co"><div class="co-h"><b>Harvey Norman</b><span class="co-t sm">中小</span></div><div class="co-r">创立：1982 ｜ 总部：澳大利亚·悉尼</div><div class="co-r">企业介绍：澳新家电电子连锁</div><div class="co-r">采购的产品：全品类</div><div class="co-r">采购渠道：直接对华</div><div class="co-r">官网：<a class="co-site" href="https://www.harveynorman.com.au" target="_blank" rel="noopener">🌐 https://www.harveynorman.com.au</a></div><div class="co-r reason">推荐理由：澳新渠道与 RCM 认证</div></div>
        <div class="co"><div class="co-h"><b>The Good Guys</b><span class="co-t sm">中小</span></div><div class="co-r">创立：1973 ｜ 总部：澳大利亚</div><div class="co-r">企业介绍：澳洲电子连锁（属 JB Hi-Fi）</div><div class="co-r">采购的产品：全品类</div><div class="co-r">采购渠道：对华</div><div class="co-r">官网：<a class="co-site" href="https://www.thegoodguys.com.au" target="_blank" rel="noopener">🌐 https://www.thegoodguys.com.au</a></div><div class="co-r reason">推荐理由：澳洲渠道</div></div>
        <div class="co"><div class="co-h"><b>Mighty Ape</b><span class="co-t sm">中小</span></div><div class="co-r">创立：2000 ｜ 总部：新西兰·奥克兰</div><div class="co-r">企业介绍：新西兰电商</div><div class="co-r">采购的产品：全品类电子</div><div class="co-r">采购渠道：对华</div><div class="co-r">官网：<a class="co-site" href="https://www.mightyape.co.nz" target="_blank" rel="noopener">🌐 https://www.mightyape.co.nz</a></div><div class="co-r reason">推荐理由：新西兰电商</div></div>
      `}
]},
{title:'Day 14 · 海外企业推荐（采购中国消费电子）', tag:'第14天 · 中小 5 / 头部 0', blocks:[
{h:'💡 今日怎么用这笔清单', body:'① 在 Google / LinkedIn 搜企业名 + sourcing / procurement / purchasing manager，找采购负责人；② 用「阿里巴巴国际站」「中国制造网」对照其采购品类，反向以这些买家为目标做开发；③ 参加「香港电子展」「广交会」「Global Sources」定向约访；④ 用海关数据 / ImportGenius 查其中国进口记录，锁定具体 SKU；⑤ 开发信：Hi [Name], we supply [品类] to EU/US retailers，附 catalog 与合规证书（CE / FCC / RoHS）。'},
{h:'今日推荐 · 5 家（中小企业为主，含行业标杆）', body:`
        <div class="co"><div class="co-h"><b>PB Tech</b><span class="co-t sm">中小</span></div><div class="co-r">创立：1993 ｜ 总部：新西兰·奥克兰</div><div class="co-r">企业介绍：新西兰 IT 零售商</div><div class="co-r">采购的产品：PC/外设</div><div class="co-r">采购渠道：对华</div><div class="co-r">官网：<a class="co-site" href="https://www.pbtech.co.nz" target="_blank" rel="noopener">🌐 https://www.pbtech.co.nz</a></div><div class="co-r reason">推荐理由：新西兰 IT 渠道</div></div>
        <div class="co"><div class="co-h"><b>Scorptec</b><span class="co-t sm">中小</span></div><div class="co-r">创立：1999 ｜ 总部：澳大利亚·墨尔本</div><div class="co-r">企业介绍：澳洲 IT 电商</div><div class="co-r">采购的产品：组件/外设</div><div class="co-r">采购渠道：对华</div><div class="co-r">官网：<a class="co-site" href="https://www.scorptec.com.au" target="_blank" rel="noopener">🌐 https://www.scorptec.com.au</a></div><div class="co-r reason">推荐理由：澳洲硬件电商</div></div>
        <div class="co"><div class="co-h"><b>MSY</b><span class="co-t sm">中小</span></div><div class="co-r">创立：1996 ｜ 总部：澳大利亚·墨尔本</div><div class="co-r">企业介绍：澳洲 IT 零售商</div><div class="co-r">采购的产品：组件/外设</div><div class="co-r">采购渠道：对华</div><div class="co-r">官网：<a class="co-site" href="https://www.msy.com.au" target="_blank" rel="noopener">🌐 https://www.msy.com.au</a></div><div class="co-r reason">推荐理由：澳洲硬件零售</div></div>
        <div class="co"><div class="co-h"><b>Computer Alliance</b><span class="co-t sm">中小</span></div><div class="co-r">创立：1996 ｜ 总部：澳大利亚·布里斯班</div><div class="co-r">企业介绍：澳洲 IT 零售商</div><div class="co-r">采购的产品：PC/外设</div><div class="co-r">采购渠道：对华</div><div class="co-r">官网：<a class="co-site" href="https://www.computeralliance.com.au" target="_blank" rel="noopener">🌐 https://www.computeralliance.com.au</a></div><div class="co-r reason">推荐理由：澳洲区域 IT 渠道</div></div>
        <div class="co"><div class="co-h"><b>JW Computers</b><span class="co-t sm">中小</span></div><div class="co-r">创立：1993 ｜ 总部：澳大利亚·悉尼</div><div class="co-r">企业介绍：澳洲 IT 零售商</div><div class="co-r">采购的产品：PC/外设</div><div class="co-r">采购渠道：对华</div><div class="co-r">官网：<a class="co-site" href="https://www.jw.com.au" target="_blank" rel="noopener">🌐 https://www.jw.com.au</a></div><div class="co-r reason">推荐理由：澳洲区域 IT 渠道</div></div>
      `}
]}
  ]
};