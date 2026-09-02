/* 旺仔工作台 · 英语学习 EN_PRACTICE 生成器（2026-08-31 周一）
 * 21 天，每天 10 句对话(role/en/zh) + 3 跟读 + 12 单词，外贸/差旅/商务场景
 */
const fs = require('fs');

// 每天: lines[10], speak[3], words[12]
const DAYS = [
  { // 0 机场出发
    lines:[
      ["A","Good morning, may I see your passport and ticket?","早上好，请出示您的护照和机票好吗？"],
      ["B","Sure, here you are.","好的，给您。"],
      ["A","Will you be checking any bags?","您要托运行李吗？"],
      ["B","Just one suitcase.","只托运一个行李箱。"],
      ["A","Window or aisle seat?","靠窗还是靠走道？"],
      ["B","Aisle, please.","请给我靠走道的。"],
      ["A","Your gate is C7, boarding at 10:40.","您的登机口是 C7，10:40 登机。"],
      ["B","How do I get to the gate?","怎么去登机口？"],
      ["A","Take the shuttle train to Terminal 2.","坐捷运列车到 T2 航站楼。"],
      ["B","Thank you, have a good day.","谢谢，祝您一天愉快。"]
    ],
    speak:["May I see your passport and ticket?","Window or aisle seat?","How do I get to the gate?"],
    words:[["passport","/ˈpæspɔːrt/","护照"],["ticket","/ˈtɪkɪt/","机票"],["boarding pass","/ˈbɔːrdɪŋ pæs/","登机牌"],["gate","/ɡeɪt/","登机口"],["luggage","/ˈlʌɡɪdʒ/","行李"],["suitcase","/ˈsuːtkeɪs/","行李箱"],["aisle seat","/aɪl siːt/","靠走道座位"],["window seat","/ˈwɪndoʊ siːt/","靠窗座位"],["terminal","/ˈtɜːrmɪnl/","航站楼"],["shuttle","/ˈʃʌtl/","穿梭/捷运"],["depart","/dɪˈpɑːrt/","出发"],["boarding","/ˈbɔːrdɪŋ/","登机"]]
  },
  { // 1 入住酒店
    lines:[
      ["A","Good evening, do you have a reservation?","晚上好，您有预订吗？"],
      ["B","Yes, under the name Li.","有，用 Li 这个名字预订的。"],
      ["A","Your room is 1210. Here is your key card.","您的房间是 1210，这是您的房卡。"],
      ["B","What time is breakfast served?","早餐几点供应？"],
      ["A","6:30 to 10, on the third floor.","6:30 到 10 点，在三楼。"],
      ["B","Could I get a wake-up call at 7?","能帮我设早上 7 点的叫早电话吗？"],
      ["A","Certainly, 7 a.m. sharp.","当然，7 点整。"],
      ["B","Is there a socket for my laptop?","房间有笔记本电脑的插座吗？"],
      ["A","Yes, by the desk, and USB ports too.","有，在书桌旁，还有 USB 接口。"],
      ["B","Great, thank you.","好的，谢谢。"]
    ],
    speak:["Do you have a reservation?","What time is breakfast served?","Could I get a wake-up call at 7?"],
    words:[["reservation","/ˌrezərˈveɪʃn/","预订"],["key card","/kiː kɑːrd/","房卡"],["reception","/rɪˈsepʃn/","前台"],["wake-up call","/weɪk ʌp kɔːl/","叫早电话"],["socket","/ˈsɑːkɪt/","插座"],["floor","/flɔːr/","楼层"],["lobby","/ˈlɑːbi/","大堂"],["check in","/tʃek ɪn/","入住"],["check out","/tʃek aʊt/","退房"],["bellboy","/ˈbelbɔɪ/","行李员"],["laundry","/ˈlɔːndri/","洗衣"],["mini-bar","/ˈmɪni bɑːr/","迷你吧"]]
  },
  { // 2 餐厅点餐
    lines:[
      ["A","A table for two, please.","请安排两人桌。"],
      ["B","By the window okay?","靠窗可以吗？"],
      ["A","Perfect. Could I see the menu?","很好。可以看下菜单吗？"],
      ["B","Here you are. Today's special is grilled fish.","给您。今日特餐是烤鱼。"],
      ["A","I'll have the fish, medium.","我要那份鱼，七分熟。"],
      ["B","Anything to drink?","喝点什么？"],
      ["A","Sparkling water, no ice.","气泡水，不加冰。"],
      ["B","And for dessert?","甜点呢？"],
      ["A","No thanks, just the bill please.","不用了，请结账。"],
      ["B","Sure, I'll bring it over.","好的，我拿过来。"]
    ],
    speak:["A table for two, please.","Could I see the menu?","Just the bill please."],
    words:[["menu","/ˈmenjuː/","菜单"],["special","/ˈspeʃl/","特色菜"],["medium","/ˈmiːdiəm/","中等熟度"],["dessert","/dɪˈzɜːrt/","甜点"],["bill","/bɪl/","账单"],["tip","/tɪp/","小费"],["appetizer","/ˈæpɪtaɪzər/","前菜"],["main course","/meɪn kɔːrs/","主菜"],["sparkling","/ˈspɑːrklɪŋ/","起泡的"],["reserve","/rɪˈzɜːrv/","预订"],["allergy","/ˈælərdʒi/","过敏"],["spicy","/ˈspaɪsi/","辣的"]]
  },
  { // 3 问路交通
    lines:[
      ["A","Excuse me, how do I get to the trade fair?","打扰一下，去展会怎么走？"],
      ["B","Take Metro Line 2 to International Expo.","坐地铁 2 号线到国际会展中心。"],
      ["A","Is it far from here?","离这儿远吗？"],
      ["B","About twenty minutes.","大概二十分钟。"],
      ["A","Should I transfer?","需要换乘吗？"],
      ["B","No, it's a direct line.","不用，直达。"],
      ["A","Which exit should I take?","我该走哪个出口？"],
      ["B","Exit C leads to the south gate.","C 出口通向南门。"],
      ["A","Got it, thanks a lot.","明白了，多谢。"],
      ["B","You're welcome, safe travels.","不客气，一路顺风。"]
    ],
    speak:["How do I get to the trade fair?","Is it far from here?","Which exit should I take?"],
    words:[["metro","/ˈmetroʊ/","地铁"],["transfer","/trænsˈfɜːr/","换乘"],["exit","/ˈeɡzɪt/","出口"],["direction","/dəˈrekʃn/","方向"],["straight","/streɪt/","直走"],["corner","/ˈkɔːrnər/","拐角"],["crossing","/ˈkrɔːsɪŋ/","十字路口"],["north","/nɔːrθ/","北"],["south","/saʊθ/","南"],["block","/blɑːk/","街区"],["navigate","/ˈnævɪɡeɪt/","导航"],["landmark","/ˈlændmɑːrk/","地标"]]
  },
  { // 4 购物砍价
    lines:[
      ["A","How much is this power bank?","这个充电宝多少钱？"],
      ["B","180 yuan each.","每个 180 元。"],
      ["A","That's a bit high. Any discount?","有点贵。有折扣吗？"],
      ["B","If you take three, 150 each.","拿三个的话，每个 150。"],
      ["A","Can you do 130?","130 行吗？"],
      ["B","Okay, 140, final price.","行，140，最低了。"],
      ["A","Deal. I'll take five.","成交。我要五个。"],
      ["B","Cash or scan?","现金还是扫码？"],
      ["A","I'll scan.","我扫码。"],
      ["B","Done, thank you.","好了，谢谢。"]
    ],
    speak:["How much is this power bank?","Any discount?","Can you do 130?"],
    words:[["price","/praɪs/","价格"],["discount","/ˈdɪskaʊnt/","折扣"],["wholesale","/ˈhoʊlseɪl/","批发"],["retail","/ˈriːteɪl/","零售"],["bargain","/ˈbɑːrɡɪn/","讨价还价"],["sample","/ˈsæmpl/","样品"],["moq","/ˌem oʊ ˈkjuː/","最小起订量"],["unit","/ˈjuːnɪt/","单位"],["invoice","/ˈɪnvɔɪs/","发票"],["refund","/ˈriːfʌnd/","退款"],["cashier","/kæˈʃɪr/","收银员"],["receipt","/rɪˈsiːt/","收据"]]
  },
  { // 5 紧急求助
    lines:[
      ["A","Sir, are you okay? You look pale.","先生，您没事吧？脸色不太好。"],
      ["B","I feel dizzy and my chest hurts.","我头晕，胸口疼。"],
      ["A","Let me call an ambulance.","我帮您叫救护车。"],
      ["B","My medicine is in the left pocket.","我的药在左边口袋里。"],
      ["A","Got it. Help is on the way.","找到了。救援在路上。"],
      ["B","Thank you, I'm so sorry for the trouble.","谢谢，给你添麻烦了。"],
      ["A","Don't worry, just breathe slowly.","别担心，慢慢呼吸。"],
      ["B","Where is the nearest hospital?","最近的医院在哪？"],
      ["A","Two blocks ahead, turn right.","往前两个街区，右转。"],
      ["B","I'll remember that.","我记住了。"]
    ],
    speak:["Are you okay?","Let me call an ambulance.","Where is the nearest hospital?"],
    words:[["ambulance","/ˈæmbjələns/","救护车"],["emergency","/ɪˈmɜːrdʒənsi/","紧急情况"],["dizzy","/ˈdɪzi/","头晕的"],["faint","/feɪnt/","昏厥"],["pocket","/ˈpɑːkɪt/","口袋"],["breathe","/briːð/","呼吸"],["hospital","/ˈhɑːspɪtl/","医院"],["pharmacy","/ˈfɑːrməsi/","药房"],["insurance","/ɪnˈʃʊrəns/","保险"],["police","/pəˈliːs/","警察"],["report","/rɪˈpɔːrt/","报案"],["contact","/ˈkɑːntækt/","联系"]]
  },
  { // 6 展会摊位
    lines:[
      ["A","Hi, I'm Leo from Shenzhen. Nice to meet you.","您好，我是深圳的 Leo，很高兴认识您。"],
      ["B","Welcome! What line of business are you in?","欢迎！您做哪一行？"],
      ["A","We manufacture smart home devices.","我们生产智能家居设备。"],
      ["B","Interesting. Do you have a catalog?","有意思。有产品目录吗？"],
      ["A","Sure, here's our latest one.","有，这是我们最新的。"],
      ["B","What's your MOQ and lead time?","最小起订量和交期是多少？"],
      ["A","MOQ 500 units, 25 days.","最小 500 台，25 天。"],
      ["B","Could you send a quotation later?","稍后能发一份报价吗？"],
      ["A","Absolutely, may I have your card?","当然，能留张名片吗？"],
      ["B","Of course, here you go.","当然，给您。"]
    ],
    speak:["What line of business are you in?","What's your MOQ and lead time?","Could you send a quotation later?"],
    words:[["booth","/buːð/","展位"],["catalog","/ˈkætəlɔːɡ/","目录"],["manufacture","/ˌmænjuˈfæktʃər/","制造"],["quotation","/kwoʊˈteɪʃn/","报价"],["lead time","/liːd taɪm/","交期"],["business card","/ˈbɪznəs kɑːrd/","名片"],["exhibit","/ɪɡˈzɪbɪt/","展品"],["supplier","/səˈplaɪər/","供应商"],["prospect","/ˈprɑːspekt/","潜在客户"],["brochure","/broʊˈʃʊr/","宣传册"],["sign up","/saɪn ʌp/","登记"],["follow up","/ˈfɑːloʊ ʌp/","跟进"]]
  },
  { // 7 验厂看产线
    lines:[
      ["A","This is our assembly line for earbuds.","这是我们的耳机组装线。"],
      ["B","What's your monthly capacity?","月产能多少？"],
      ["A","Around 300,000 units per month.","大约每月 30 万台。"],
      ["B","How do you control quality?","你们怎么控质量？"],
      ["A","Every unit is tested before packing.","每台出厂前都经过测试。"],
      ["B","Can we audit the warehouse?","能看一下仓库吗？"],
      ["A","Sure, this way please.","可以，这边请。"],
      ["B","The hygiene looks good.","卫生状况不错。"],
      ["A","We follow ISO 9001 strictly.","我们严格执行 ISO 9001。"],
      ["B","Impressive, thank you.","很不错，谢谢。"]
    ],
    speak:["What's your monthly capacity?","How do you control quality?","Can we audit the warehouse?"],
    words:[["assembly","/əˈsembli/","组装"],["capacity","/kəˈpæsəti/","产能"],["quality","/ˈkwɑːləti/","质量"],["warehouse","/ˈwerhaʊs/","仓库"],["hygiene","/ˈhaɪdʒiːn/","卫生"],["audit","/ˈɔːdɪt/","审核"],["certificate","/sərˈtɪfɪkət/","证书"],["defect","/dɪˈfekt/","瑕疵"],["inspection","/ɪnˈspekʃn/","检验"],["packing","/ˈpækɪŋ/","包装"],["raw material","/rɔː məˈtɪriəl/","原料"],["output","/ˈaʊtpʊt/","产量"]]
  },
  { // 8 报价谈判
    lines:[
      ["A","Here's our best quotation for 1,000 units.","这是 1000 台的优惠报价。"],
      ["B","Could you break down the cost?","能拆分一下成本吗？"],
      ["A","Sure: material 40%, labor 25%, overhead 15%.","可以：材料 40%、人工 25%、管理费 15%。"],
      ["B","If we order 5,000, what's the unit price?","如果订 5000，单价多少？"],
      ["A","It drops to 22 dollars each.","降到每台 22 美元。"],
      ["B","Can you include free samples?","能包样品吗？"],
      ["A","Yes, 3 samples included.","可以，含 3 件样品。"],
      ["B","What are your payment terms?","付款条件呢？"],
      ["A","30% deposit, 70% before shipment.","30% 定金，70% 发货前付清。"],
      ["B","That works for us.","这个我们可以接受。"]
    ],
    speak:["Could you break down the cost?","What's the unit price for 5,000?","What are your payment terms?"],
    words:[["quotation","/kwoʊˈteɪʃn/","报价"],["cost","/kɔːst/","成本"],["deposit","/dɪˈpɑːzɪt/","定金"],["shipment","/ˈʃɪpmənt/","发货"],["unit price","/ˈjuːnɪt praɪs/","单价"],["overhead","/ˈoʊvərhed/","管理费"],["terms","/tɜːrmz/","条款"],["negotiate","/nɪˈɡoʊʃieɪt/","谈判"],["margin","/ˈmɑːrdʒɪn/","利润"],["currency","/ˈkɜːrənsi/","货币"],["FOB","/ef oʊ biː/","离岸价"],["CIF","/siː aɪ ef/","到岸价"]]
  },
  { // 9 邮件跟进
    lines:[
      ["A","I'm drafting a follow-up email to the client.","我在起草给客户的跟进邮件。"],
      ["B","Keep it short and clear.","简短清晰就好。"],
      ["A","Should I attach the updated catalog?","要附上更新后的目录吗？"],
      ["B","Yes, and a one-page spec sheet.","要，再加一页规格表。"],
      ["A","What subject line works best?","主题行怎么写比较好？"],
      ["B","Quote follow-up: smart sensor MOQ 500.","写：报价跟进—智能传感器 最小500。"],
      ["A","Good. I'll send it this afternoon.","好，今天下午发。"],
      ["B","Set a reminder to call if no reply in 3 days.","设个提醒，三天没回就电话。"],
      ["A","Noted. Anything else?","记下了。还有别的吗？"],
      ["B","No, that's all.","没了，就这些。"]
    ],
    speak:["Should I attach the updated catalog?","What subject line works best?","I'll send it this afternoon."],
    words:[["draft","/dræft/","起草"],["follow-up","/ˈfɑːloʊ ʌp/","跟进"],["attach","/əˈtætʃ/","附上"],["subject","/ˈsʌbdʒekt/","主题"],["spec sheet","/spɛk ʃiːt/","规格表"],["reminder","/rɪˈmaɪndər/","提醒"],["reply","/rɪˈplaɪ/","回复"],["client","/ˈklaɪənt/","客户"],["inbox","/ˈɪnbɑːks/","收件箱"],["confirm","/kənˈfɜːrm/","确认"],["attachment","/əˈtætʃmənt/","附件"],["deadline","/ˈdedlaɪn/","截止日"]]
  },
  { // 10 付款与贸易术语
    lines:[
      ["A","Do you accept PayPal or T/T?","你们收 PayPal 还是电汇？"],
      ["B","We prefer T/T for bulk orders.","大单我们更接受电汇。"],
      ["A","Is the price FOB or CIF?","价格是 FOB 还是 CIF？"],
      ["B","FOB Shenzhen by default.","默认深圳 FOB。"],
      ["A","Who covers the insurance?","保险谁出？"],
      ["B","Buyer's side under FOB.","FOB 下由买方承担。"],
      ["A","Can we use a letter of credit?","能用信用证吗？"],
      ["B","Yes, for first orders only.","可以，但仅限首单。"],
      ["A","Understood, I'll arrange the deposit.","明白，我来安排定金。"],
      ["B","Great, thank you.","好的，谢谢。"]
    ],
    speak:["Do you accept PayPal or T/T?","Is the price FOB or CIF?","Can we use a letter of credit?"],
    words:[["PayPal","/ˈpeɪpæl/","贝宝"],["T/T","/tiː tiː/","电汇"],["letter of credit","/ˈletər əv ˈkredɪt/","信用证"],["insurance","/ɪnˈʃʊrəns/","保险"],["bulk","/bʌlk/","大宗"],["default","/dɪˈfɔːlt/","默认"],["freight","/freɪt/","运费"],["customs","/ˈkʌstəmz/","海关"],["duty","/ˈduːti/","关税"],["declare","/dɪˈkler/","申报"],["cargo","/ˈkɑːrɡoʊ/","货物"],["settlement","/ˈsetlmənt/","结算"]]
  },
  { // 11 物流运输
    lines:[
      ["A","When can you ship the order?","订单什么时候能发？"],
      ["B","Within 5 days after deposit.","收到定金后 5 天内。"],
      ["A","Which port do you use?","走哪个港口？"],
      ["B","Yantian, Shenzhen.","深圳盐田。"],
      ["A","Sea or air freight?","海运还是空运？"],
      ["B","Sea for this volume, 18 days to LA.","这个量走海运，到洛杉矶 18 天。"],
      ["A","Can you handle customs clearance?","能代办清关吗？"],
      ["B","Yes, we work with a local broker.","可以，我们有本地代理。"],
      ["A","Please share the tracking number.","请提供追踪单号。"],
      ["B","Will do once it sails.","一开船就发您。"]
    ],
    speak:["When can you ship the order?","Which port do you use?","Can you handle customs clearance?"],
    words:[["ship","/ʃɪp/","发货"],["port","/pɔːrt/","港口"],["freight","/freɪt/","货运"],["seafreight","/siː freɪt/","海运"],["airfreight","/er freɪt/","空运"],["clearance","/ˈklɪrəns/","清关"],["broker","/ˈbroʊkər/","代理"],["tracking","/ˈtrækɪŋ/","追踪"],["container","/kənˈteɪnər/","集装箱"],["ETA","/iː tiː eɪ/","预计到达"],["vessel","/ˈvesl/","船"],["liner","/ˈlaɪnər/","班轮"]]
  },
  { // 12 视频会议
    lines:[
      ["A","Can you see and hear me clearly?","能看清听清我吗？"],
      ["B","Yes, the video is sharp.","可以，画面很清晰。"],
      ["A","Let's review the prototype together.","我们一起看下样品。"],
      ["B","Looks good, but the button feels stiff.","不错，但按键偏硬。"],
      ["A","Noted, we'll soften the spring.","记下了，我们把弹簧调软。"],
      ["B","Could you share the 3D file?","能共享下 3D 文件吗？"],
      ["A","Sure, sending the link now.","可以，现在发链接。"],
      ["B","Got it. When's the revised sample ready?","收到了。改版样品何时好？"],
      ["A","Two weeks from today.","从今天起两周。"],
      ["B","Perfect, talk soon.","好，回头聊。"]
    ],
    speak:["Can you see and hear me clearly?","Could you share the 3D file?","When's the revised sample ready?"],
    words:[["video call","/ˈvɪdioʊ kɔːl/","视频通话"],["prototype","/ˈproʊtətaɪp/","样品/原型"],["screen","/skriːn/","屏幕"],["share","/ʃer/","共享"],["mute","/mjuːt/","静音"],["spring","/sprɪŋ/","弹簧"],["revise","/rɪˈvaɪz/","修改"],["link","/lɪŋk/","链接"],["file","/faɪl/","文件"],["feedback","/ˈfiːdbæk/","反馈"],["camera","/ˈkæmərə/","摄像头"],["lag","/læɡ/","卡顿"]]
  },
  { // 13 打样改版
    lines:[
      ["A","We received the first sample yesterday.","我们昨天收到首批样品。"],
      ["B","How does it compare to the spec?","和规格比怎么样？"],
      ["A","Color is 5% darker than approved.","颜色比确认样深了 5%。"],
      ["B","Can you adjust before mass production?","量产前能调吗？"],
      ["A","Yes, we'll reprint the panel.","可以，我们重印面板。"],
      ["B","Also the logo position is off by 2mm.","还有 logo 位置偏了 2 毫米。"],
      ["A","We'll fix the jig immediately.","我们马上修治具。"],
      ["B","Send photos after correction, okay?","改完发照片，好吗？"],
      ["A","Of course, within two days.","当然，两天内。"],
      ["B","Appreciated.","辛苦了。"]
    ],
    speak:["How does it compare to the spec?","Can you adjust before mass production?","Send photos after correction, okay?"],
    words:[["sample","/ˈsæmpl/","样品"],["spec","/spɛk/","规格"],["mass production","/mæs prəˈdʌkʃn/","量产"],["reprint","/riːˈprɪnt/","重印"],["logo","/ˈloʊɡoʊ/","标志"],["jig","/dʒɪɡ/","治具"],["tolerance","/ˈtɑːlərəns/","公差"],["approve","/əˈpruːv/","确认"],["correction","/kəˈrekʃn/","修正"],["panel","/ˈpænl/","面板"],["batch","/bætʃ/","批次"],["defect","/dɪˈfekt/","瑕疵"]]
  },
  { // 14 客诉处理
    lines:[
      ["A","We got a complaint about broken clips.","收到投诉，夹子有断裂。"],
      ["B","How many units are affected?","影响多少台？"],
      ["A","About 40 out of 1,000.","1000 台里约 40 台。"],
      ["B","Send us photos and batch numbers.","发照片和批号给我们。"],
      ["A","Already forwarded.","已经转过去了。"],
      ["B","We'll ship free replacements next week.","下周我们免费补发。"],
      ["A","And the root cause?","根本原因呢？"],
      ["B","Mold worn out, now replaced.","模具磨损，已更换。"],
      ["A","Good, please prevent recurrence.","好，请避免再发生。"],
      ["B","We've tightened QC.","我们已加强质检。"]
    ],
    speak:["How many units are affected?","Send us photos and batch numbers.","We'll ship free replacements next week."],
    words:[["complaint","/kəmˈpleɪnt/","投诉"],["affected","/əˈfektɪd/","受影响的"],["replacement","/rɪˈpleɪsmənt/","替换品"],["batch number","/bætʃ ˈnʌmbər/","批号"],["root cause","/ruːt kɔːz/","根本原因"],["mold","/moʊld/","模具"],["recurrence","/rɪˈkʌrəns/","复发"],["tighten","/ˈtaɪtn/","加强"],["compensate","/ˈkɑːmpenseɪt/","补偿"],["warranty","/ˈwɔːrənti/","保修"],["return","/rɪˈtɜːrn/","退货"],["resolve","/rɪˈzɑːlv/","解决"]]
  },
  { // 15 商务宴请
    lines:[
      ["A","Welcome to Shenzhen, let's have dinner.","欢迎来深圳，一起吃个饭。"],
      ["B","Thank you, that's very kind.","谢谢，太客气了。"],
      ["A","Do you prefer spicy or mild?","您吃辣还是清淡？"],
      ["B","Spicy is great, I love it.","辣的很好，我就爱辣。"],
      ["A","Then we'll order Sichuan hotpot.","那我们点川渝火锅。"],
      ["B","Perfect choice!","好选择！"],
      ["A","Try this, dip it in the sauce.","尝尝这个，蘸料吃。"],
      ["B","Delicious, what's in it?","好吃，里面是什么？"],
      ["A","Beef and tripe, our specialty.","牛肉和毛肚，我们的招牌。"],
      ["B","I'll remember this meal.","这顿我记下了。"]
    ],
    speak:["Do you prefer spicy or mild?","Then we'll order Sichuan hotpot.","Try this, dip it in the sauce."],
    words:[["banquet","/ˈbæŋkwɪt/","宴请"],["spicy","/ˈspaɪsi/","辣的"],["mild","/maɪld/","清淡的"],["hotpot","/ˈhɑːtpɑːt/","火锅"],["sauce","/sɔːs/","蘸料"],["specialty","/ˈspeʃlti/","招牌菜"],["toast","/toʊst/","敬酒"],["hospitality","/ˌhɑːspɪˈtæləti/","款待"],["appetite","/ˈæpɪtaɪt/","胃口"],["flavor","/ˈfleɪvər/","风味"],["treat","/triːt/","请客"],["cheers","/tʃɪrz/","干杯"]]
  },
  { // 16 市场调研
    lines:[
      ["A","What's the top-selling category here?","这里最畅销的品类是什么？"],
      ["B","Wireless earbuds and chargers.","无线耳机和充电器。"],
      ["A","Who are the main competitors?","主要竞争对手是谁？"],
      ["B","Two local brands and one from Korea.","两个本地品牌和一个韩国品牌。"],
      ["A","What price range sells best?","什么价位最好卖？"],
      ["B","20 to 40 dollars.","20 到 40 美元。"],
      ["A","Any gap in the market?","市场有空白吗？"],
      ["B","Eco-friendly cases are rising.","环保壳在上升。"],
      ["A","Good insight, thanks.","很有洞察，谢谢。"],
      ["B","Anytime, happy to help.","不客气，乐意帮忙。"]
    ],
    speak:["What's the top-selling category here?","Who are the main competitors?","Any gap in the market?"],
    words:[["category","/ˈkætəɡɔːri/","品类"],["competitor","/kəmˈpetɪtər/","竞争者"],["price range","/praɪs reɪndʒ/","价位"],["gap","/ɡæp/","空白/缺口"],["eco-friendly","/ˈiːkoʊ ˈfrendli/","环保的"],["insight","/ˈɪnsaɪt/","洞察"],["trend","/trend/","趋势"],["demand","/dɪˈmænd/","需求"],["niche","/niːʃ/","细分市场"],["survey","/ˈsɜːrveɪ/","调研"],["segment","/ˈseɡmənt/","细分"],["share","/ʃer/","份额"]]
  },
  { // 17 清关单证
    lines:[
      ["A","Which documents do we need for clearance?","清关需要哪些单据？"],
      ["B","Commercial invoice and packing list.","商业发票和装箱单。"],
      ["A","Do we need a certificate of origin?","需要原产地证吗？"],
      ["B","Yes, for the tariff preference.","要，为了关税优惠。"],
      ["A","What about the HS code?","HS 编码呢？"],
      ["B","Use 8518.30 for earbuds.","耳机用 8518.30。"],
      ["A","Who files the declaration?","谁报关？"],
      ["B","Our broker handles it.","我们的代理处理。"],
      ["A","How long does clearance take?","清关要多久？"],
      ["B","Usually two to three days.","通常两三天。"]
    ],
    speak:["Which documents do we need for clearance?","Do we need a certificate of origin?","What about the HS code?"],
    words:[["document","/ˈdɑːkjumənt/","单据"],["invoice","/ˈɪnvɔɪs/","发票"],["packing list","/ˈpækɪŋ lɪst/","装箱单"],["certificate of origin","/sərˈtɪfɪkət əv ˈɔːrɪdʒɪn/","原产地证"],["HS code","/eɪtʃ es koʊd/","HS编码"],["declaration","/ˌdekləˈreɪʃn/","申报"],["tariff","/ˈtærɪf/","关税"],["preference","/ˈprefrəns/","优惠"],["broker","/ˈbroʊkər/","报关行"],["clear","/klɪr/","清关"],["bonded","/ˈbɑːndɪd/","保税的"],["release","/rɪˈliːs/","放行"]]
  },
  { // 18 客户回访
    lines:[
      ["A","Hi Mark, how's the new batch selling?","Mark 你好，新批次卖得怎样？"],
      ["B","Pretty well, almost sold out.","不错，快卖光了。"],
      ["A","Glad to hear that. Any feedback?","很高兴听到。有反馈吗？"],
      ["B","Customers want a longer cable.","客户想要更长的线。"],
      ["A","We can offer 1.5m as an option.","我们可以提供 1.5 米选项。"],
      ["B","Nice, send a quote for 3,000.","好，发 3000 的报价。"],
      ["A","Will do today. Reorder soon?","今天发。要续订吗？"],
      ["B","Yes, same spec, next month.","要，同规格，下个月。"],
      ["A","Perfect, I'll prepare the contract.","好，我来准备合同。"],
      ["B","Looking forward to it.","期待合作。"]
    ],
    speak:["How's the new batch selling?","Any feedback?","Will do today. Reorder soon?"],
    words:[["reorder","/riːˈɔːrdər/","续订"],["batch","/bætʃ/","批次"],["feedback","/ˈfiːdbæk/","反馈"],["option","/ˈɑːpʃn/","选项"],["contract","/ˈkɑːntrækt/","合同"],["reorder","/riːˈɔːrdər/","返单"],["loyal","/ˈlɔɪəl/","忠诚的"],["repeat","/rɪˈpiːt/","重复的"],["season","/ˈsiːzn/","季节"],["forecast","/ˈfɔːrkæst/","预测"],["restock","/riːˈstɑːk/","补货"],["relationship","/rɪˈleɪʃnʃɪp/","关系"]]
  },
  { // 19 签约
    lines:[
      ["A","Let's go through the contract clause by clause.","我们逐条过一下合同。"],
      ["B","Start with delivery terms.","从交货条款开始。"],
      ["A","Shipment within 30 days of PO.","收到订单后 30 天内发货。"],
      ["B","And penalty for delay?","延误罚则呢？"],
      ["A","0.5% per week, capped at 5%.","每周 0.5%，上限 5%。"],
      ["B","Acceptable. What about IP?","可以。知识产权呢？"],
      ["A","Your design stays your property.","您的设计归您所有。"],
      ["B","Good. Where do we sign?","好。在哪签？"],
      ["A","Two copies, both parties sign here.","两份，双方在此签署。"],
      ["B","Done, pleasure working with you.","签好了，合作愉快。"]
    ],
    speak:["Let's go through the contract clause by clause.","And penalty for delay?","What about IP?"],
    words:[["clause","/klɔːz/","条款"],["delivery","/dɪˈlɪvəri/","交货"],["penalty","/ˈpenəlti/","罚款"],["delay","/dɪˈleɪ/","延误"],["cap","/kæp/","上限"],["IP","/aɪ piː/","知识产权"],["property","/ˈprɑːpərti/","财产"],["sign","/saɪn/","签署"],["copy","/ˈkɑːpi/","副本"],["party","/ˈpɑːrti/","方"],["valid","/ˈvælɪd/","有效的"],["renew","/rɪˈnuː/","续约"]]
  },
  { // 20 复盘收尾
    lines:[
      ["A","The Canton Fair was a success.","广交会很成功。"],
      ["B","How many leads did we collect?","收了多少条线索？"],
      ["A","Over 80, 20 are hot.","80 多条，20 条是重点。"],
      ["B","Let's prioritize the hot ones.","重点客户优先跟进。"],
      ["A","I'll assign them to the team.","我分配给团队。"],
      ["B","Send thank-you notes this week.","这周发感谢信。"],
      ["A","And update the CRM.","并更新 CRM。"],
      ["B","What's next quarter's plan?","下季度计划呢？"],
      ["A","Expand to the EU market.","拓展欧洲市场。"],
      ["B","Sounds like a plan.","听起来不错。"]
    ],
    speak:["The Canton Fair was a success.","How many leads did we collect?","Let's prioritize the hot ones."],
    words:[["lead","/liːd/","线索"],["hot lead","/hɑːt liːd/","重点客户"],["prioritize","/praɪˈɔːrətaɪz/","优先"],["assign","/əˈsaɪn/","分配"],["thank-you note","/ˈθæŋk juː noʊt/","感谢信"],["CRM","/siː ɑːr em/","客户管理系统"],["quarter","/ˈkwɔːrtər/","季度"],["expand","/ɪkˈspænd/","拓展"],["market","/ˈmɑːrkɪt/","市场"],["review","/rɪˈvjuː/","复盘"],["goal","/ɡoʊl/","目标"],["summary","/ˈsʌməri/","总结"]]
  }
];

// 组装 EN_PRACTICE
const EN = {};
DAYS.forEach((d,i)=>{
  EN[String(i)] = {
    lines: d.lines.map(([role,en,zh])=>({role,en,zh})),
    speak: d.speak.slice(0,3),
    words: d.words.map(([w,ph,zh])=>({w,ph,zh}))
  };
});

const header = "/* =========================================================\n   旺仔的工作台 · 英语学习「听 / 说 / 单词」交互训练数据\n   与 content.js 中 english 数组一一对应（索引 0-20）。\n   每周焕新：2026-08-31 生成，21 天外贸/差旅/商务场景全新对话\n   ========================================================= */\n";
const out = header + "const EN_PRACTICE = " + JSON.stringify(EN, null, 2) + ";\n";
fs.writeFileSync('en_practice.js', out, 'utf8');

// 自检
let totalLines=0, totalWords=0, bad=0;
Object.values(EN).forEach(d=>{
  if(d.lines.length!==10) bad++;
  if(d.speak.length!==3) bad++;
  if(d.words.length!==12) bad++;
  totalLines+=d.lines.length; totalWords+=d.words.length;
});
console.log(`EN_PRACTICE 生成: ${Object.keys(EN).length} 天, 句=${totalLines}, 词=${totalWords}, 结构异常=${bad}`);
