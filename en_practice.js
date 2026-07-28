/* =========================================================
   旺仔的工作台 · 英语学习「听 / 说 / 单词」交互训练数据
   与 content.js 中 english 数组一一对应（索引 0-20）。
   每条：lines 听力对话（role+en） / speak 口语跟读目标句 / words 单词卡（w+ph+zh）
   说明：本文件不依赖任何外部库，配合 index.html 的 Web Speech API 使用。
   ========================================================= */
const EN_PRACTICE = {
  0: {
    lines: [
      {role:'A', en:'May I see your passport, please?'},
      {role:'B', en:'Here you are.'},
      {role:'A', en:'Window or aisle seat?'},
      {role:'B', en:'An aisle seat, please.'},
      {role:'A', en:'Your gate is B12. Have a nice flight!'}
    ],
    speak: 'May I see your passport, please?',
    words: [
      {w:'passport', ph:'/ˈpæspɔːt/', zh:'护照'},
      {w:'ticket', ph:'/ˈtɪkɪt/', zh:'机票'},
      {w:'boarding pass', ph:'/ˈbɔːrdɪŋ pæs/', zh:'登机牌'},
      {w:'gate', ph:'/ɡeɪt/', zh:'登机口'},
      {w:'luggage', ph:'/ˈlʌɡɪdʒ/', zh:'行李'},
      {w:'departure', ph:'/dɪˈpɑːrtʃər/', zh:'出发'},
      {w:'arrival', ph:'/əˈraɪvl/', zh:'到达'}
    ]
  },
  1: {
    lines: [
      {role:'R', en:'Good evening, do you have a reservation?'},
      {role:'G', en:'Yes, under the name Wang.'},
      {role:'R', en:'Your room is 805. Here is your key card.'},
      {role:'G', en:'What time is breakfast?'},
      {role:'R', en:'7 to 10, on the second floor.'}
    ],
    speak: 'Do you have a reservation?',
    words: [
      {w:'reservation', ph:'/ˌrezərˈveɪʃn/', zh:'预订'},
      {w:'check in', ph:'/tʃek ɪn/', zh:'入住'},
      {w:'key card', ph:'/kiː kɑːrd/', zh:'房卡'},
      {w:'breakfast', ph:'/ˈbrekfəst/', zh:'早餐'},
      {w:'room service', ph:'/ruːm ˈsɜːrvɪs/', zh:'客房服务'},
      {w:'extra towel', ph:'/ˈekstrə ˈtaʊəl/', zh:'额外毛巾'}
    ]
  },
  2: {
    lines: [
      {role:'W', en:'Are you ready to order?'},
      {role:'G', en:'What do you recommend?'},
      {role:'W', en:'The grilled fish is popular.'},
      {role:'G', en:'I will have that, medium, no spice.'},
      {role:'W', en:'Sure. Anything to drink?'}
    ],
    speak: 'What do you recommend?',
    words: [
      {w:'menu', ph:'/ˈmenjuː/', zh:'菜单'},
      {w:'order', ph:'/ˈɔːrdər/', zh:'点餐'},
      {w:'recommend', ph:'/ˌrekəˈmend/', zh:'推荐'},
      {w:'spicy', ph:'/ˈspaɪsi/', zh:'辣的'},
      {w:'well done', ph:'/wel dʌn/', zh:'全熟'},
      {w:'the bill', ph:'/ðə bɪl/', zh:'账单'},
      {w:'tip', ph:'/tɪp/', zh:'小费'}
    ]
  },
  3: {
    lines: [
      {role:'T', en:'Excuse me, how do I get to the station?'},
      {role:'P', en:'Go straight, then turn left at the bank.'},
      {role:'T', en:'Is it far?'},
      {role:'P', en:'No, about five minutes on foot.'}
    ],
    speak: 'How do I get to the station?',
    words: [
      {w:'subway', ph:'/ˈsʌbweɪ/', zh:'地铁'},
      {w:'bus stop', ph:'/bʌs stɑːp/', zh:'公交站'},
      {w:'crossroad', ph:'/ˈkrɔːsroʊd/', zh:'十字路口'},
      {w:'turn left', ph:'/tɜːrn left/', zh:'左转'},
      {w:'straight', ph:'/streɪt/', zh:'直走'},
      {w:'opposite', ph:'/ˈɑːpəzɪt/', zh:'对面'}
    ]
  },
  4: {
    lines: [
      {role:'S', en:'Can I help you?'},
      {role:'G', en:'How much is this T-shirt?'},
      {role:'S', en:'25 dollars.'},
      {role:'G', en:'That is a bit much. Can you give a discount?'},
      {role:'S', en:'OK, 20 for you.'}
    ],
    speak: 'Can you give a discount?',
    words: [
      {w:'price', ph:'/praɪs/', zh:'价格'},
      {w:'discount', ph:'/ˈdɪskaʊnt/', zh:'折扣'},
      {w:'cash', ph:'/kæʃ/', zh:'现金'},
      {w:'card', ph:'/kɑːrd/', zh:'刷卡'},
      {w:'size', ph:'/saɪz/', zh:'尺码'},
      {w:'receipt', ph:'/rɪˈsiːt/', zh:'收据'},
      {w:'try on', ph:'/traɪ ɑːn/', zh:'试穿'}
    ]
  },
  5: {
    lines: [
      {role:'G', en:'Excuse me, I lost my wallet.'},
      {role:'P', en:'Stay calm. Did you call the police?'},
      {role:'G', en:'Not yet. Can you help me?'},
      {role:'P', en:'Sure, let us go to the station together.'}
    ],
    speak: 'I lost my wallet.',
    words: [
      {w:'help', ph:'/help/', zh:'帮助'},
      {w:'lost', ph:'/lɔːst/', zh:'迷路'},
      {w:'emergency', ph:'/ɪˈmɜːrdʒənsi/', zh:'紧急情况'},
      {w:'hospital', ph:'/ˈhɑːspɪtl/', zh:'医院'},
      {w:'police', ph:'/pəˈliːs/', zh:'警察'},
      {w:'medicine', ph:'/ˈmedɪsn/', zh:'药'},
      {w:'insurance', ph:'/ɪnˈʃʊrəns/', zh:'保险'}
    ]
  },
  6: {
    lines: [
      {role:'A', en:'Good morning. Here is your boarding pass.'},
      {role:'B', en:'Thank you. Where is gate B12?'},
      {role:'A', en:'Go straight, then turn left.'},
      {role:'B', en:'Got it. And breakfast?'},
      {role:'A', en:'The hotel serves it from 7.'}
    ],
    speak: 'Where is gate B12?',
    words: [
      {w:'passport', ph:'/ˈpæspɔːt/', zh:'护照'},
      {w:'boarding pass', ph:'/ˈbɔːrdɪŋ pæs/', zh:'登机牌'},
      {w:'gate', ph:'/ɡeɪt/', zh:'登机口'},
      {w:'reservation', ph:'/ˌrezərˈveɪʃn/', zh:'预订'},
      {w:'menu', ph:'/ˈmenjuː/', zh:'菜单'},
      {w:'discount', ph:'/ˈdɪskaʊnt/', zh:'折扣'},
      {w:'help', ph:'/help/', zh:'帮助'}
    ]
  },
  7: {
    lines: [
      {role:'R', en:'Hello, ABC Company, how may I help?'},
      {role:'W', en:'This is Wang. I would like to book a meeting on Friday.'},
      {role:'R', en:'10 a.m. is available. Shall I confirm?'},
      {role:'W', en:'Yes, please. Thank you.'}
    ],
    speak: 'This is Wang. I would like to book a meeting.',
    words: [
      {w:'appointment', ph:'/əˈpɔɪntmənt/', zh:'预约'},
      {w:'available', ph:'/əˈveɪləbl/', zh:'有空的'},
      {w:'call back', ph:'/kɔːl bæk/', zh:'回电'},
      {w:'message', ph:'/ˈmesɪdʒ/', zh:'留言'},
      {w:'confirm', ph:'/kənˈfɜːrm/', zh:'确认'},
      {w:'reschedule', ph:'/riːˈskedʒuːl/', zh:'改期'},
      {w:'extension', ph:'/ɪkˈstenʃn/', zh:'分机'}
    ]
  },
  8: {
    lines: [
      {role:'W', en:'Dear Mr. Smith, I am writing to confirm our meeting at 10 a.m. on Friday.'},
      {role:'W', en:'Please find the agenda in the attachment.'},
      {role:'W', en:'Kindly let me know if the time works for you.'},
      {role:'W', en:'Best regards, Wang.'}
    ],
    speak: 'I am writing to confirm our meeting.',
    words: [
      {w:'subject', ph:'/ˈsʌbdʒɪkt/', zh:'主题'},
      {w:'attachment', ph:'/əˈtætʃmənt/', zh:'附件'},
      {w:'regards', ph:'/rɪˈɡɑːrdz/', zh:'此致敬礼'},
      {w:'deadline', ph:'/ˈdedlaɪn/', zh:'截止日'},
      {w:'follow up', ph:'/ˈfɑːloʊ ʌp/', zh:'跟进'},
      {w:'apologize', ph:'/əˈpɑːlədʒaɪz/', zh:'致歉'},
      {w:'kindly', ph:'/ˈkaɪndli/', zh:'劳烦'}
    ]
  },
  9: {
    lines: [
      {role:'A', en:'Let me introduce myself. I am Wang from the sales team.'},
      {role:'B', en:'Nice to meet you, Wang. I handle marketing.'},
      {role:'A', en:'Pleased to meet you. Hope we can work together.'}
    ],
    speak: 'I am Wang from the sales team.',
    words: [
      {w:'introduce', ph:'/ˌɪntrəˈdjuːs/', zh:'介绍'},
      {w:'responsibility', ph:'/rɪˌspɑːnsəˈbɪləti/', zh:'职责'},
      {w:'team', ph:'/tiːm/', zh:'团队'},
      {w:'project', ph:'/ˈprɑːdʒekt/', zh:'项目'},
      {w:'in charge of', ph:'/ɪn tʃɑːrdʒ ʌv/', zh:'负责'},
      {w:'pleased', ph:'/pliːzd/', zh:'荣幸'},
      {w:'colleague', ph:'/ˈkɑːliːɡ/', zh:'同事'}
    ]
  },
  10: {
    lines: [
      {role:'H', en:'Welcome to our city! Please try the local specialty.'},
      {role:'G', en:'Thank you, it is delicious.'},
      {role:'H', en:'Let us toast to our cooperation.'},
      {role:'G', en:'Cheers! I look forward to working with you.'}
    ],
    speak: 'Let us toast to our cooperation.',
    words: [
      {w:'host', ph:'/hoʊst/', zh:'招待'},
      {w:'toast', ph:'/toʊst/', zh:'祝酒'},
      {w:'specialty', ph:'/ˈspeʃəlti/', zh:'特色菜'},
      {w:'honor', ph:'/ˈɑːnər/', zh:'荣幸'},
      {w:'cooperation', ph:'/koʊˌɑːpəˈreɪʃn/', zh:'合作'},
      {w:'enjoy', ph:'/ɪnˈdʒɔɪ/', zh:'享用'},
      {w:'delicious', ph:'/dɪˈlɪʃəs/', zh:'美味'}
    ]
  },
  11: {
    lines: [
      {role:'W', en:'I would like to submit my travel expenses.'},
      {role:'F', en:'Sure, do you have all the receipts?'},
      {role:'W', en:'Yes, taxi, hotel and meals.'},
      {role:'F', en:'Great, I will forward it for approval.'}
    ],
    speak: 'I would like to submit my travel expenses.',
    words: [
      {w:'expense', ph:'/ɪkˈspens/', zh:'费用'},
      {w:'reimburse', ph:'/ˌriːɪmˈbɜːrs/', zh:'报销'},
      {w:'receipt', ph:'/rɪˈsiːt/', zh:'发票'},
      {w:'claim', ph:'/kleɪm/', zh:'申领'},
      {w:'budget', ph:'/ˈbʌdʒɪt/', zh:'预算'},
      {w:'approve', ph:'/əˈpruːv/', zh:'批准'},
      {w:'submit', ph:'/səbˈmɪt/', zh:'提交'}
    ]
  },
  12: {
    lines: [
      {role:'A', en:'I think we should launch in June.'},
      {role:'B', en:'I see it differently. Perhaps September is safer.'},
      {role:'A', en:'Good point. Let us consider both.'}
    ],
    speak: 'I see it differently.',
    words: [
      {w:'agree', ph:'/əˈɡriː/', zh:'同意'},
      {w:'disagree', ph:'/ˌdɪsəˈɡriː/', zh:'不同意'},
      {w:'opinion', ph:'/əˈpɪnjən/', zh:'观点'},
      {w:'suggest', ph:'/səˈdʒest/', zh:'建议'},
      {w:'perhaps', ph:'/pərˈhæps/', zh:'也许'},
      {w:'however', ph:'/haʊˈevər/', zh:'然而'},
      {w:'consider', ph:'/kənˈsɪdər/', zh:'考虑'}
    ]
  },
  13: {
    lines: [
      {role:'A', en:'Let me start the meeting. I am Wang from sales.'},
      {role:'B', en:'Nice to meet you. I handle marketing.'},
      {role:'A', en:'I am writing to confirm our plan.'},
      {role:'B', en:'Good. Let us toast to cooperation.'}
    ],
    speak: 'Let me start the meeting.',
    words: [
      {w:'appointment', ph:'/əˈpɔɪntmənt/', zh:'预约'},
      {w:'attachment', ph:'/əˈtætʃmənt/', zh:'附件'},
      {w:'introduce', ph:'/ˌɪntrəˈdjuːs/', zh:'介绍'},
      {w:'toast', ph:'/toʊst/', zh:'祝酒'},
      {w:'expense', ph:'/ɪkˈspens/', zh:'费用'},
      {w:'agree', ph:'/əˈɡriː/', zh:'同意'}
    ]
  },
  14: {
    lines: [
      {role:'B', en:'Our quote is 10,000 dollars.'},
      {role:'S', en:'That is above our budget. Can you do better?'},
      {role:'B', en:'For a long-term deal, I can offer 5 percent off.'},
      {role:'S', en:'Accepted. Let us finalize the terms.'}
    ],
    speak: 'Can you do better on price?',
    words: [
      {w:'quote', ph:'/kwoʊt/', zh:'报价'},
      {w:'negotiate', ph:'/nɪˈɡoʊʃieɪt/', zh:'谈判'},
      {w:'discount', ph:'/ˈdɪskaʊnt/', zh:'折扣'},
      {w:'final offer', ph:'/ˈfaɪnl ˈɔːfər/', zh:'最终价'},
      {w:'win-win', ph:'/wɪn wɪn/', zh:'双赢'},
      {w:'terms', ph:'/tɜːrmz/', zh:'条款'},
      {w:'deal', ph:'/diːl/', zh:'交易'}
    ]
  },
  15: {
    lines: [
      {role:'W', en:'Good morning. Today I will cover three points about our plan.'},
      {role:'W', en:'First, the market. As the chart shows, demand is rising.'},
      {role:'W', en:'Let me highlight the key point. We must move fast.'},
      {role:'W', en:'Any questions?'}
    ],
    speak: 'Today I will cover three points about our plan.',
    words: [
      {w:'present', ph:'/prɪˈzent/', zh:'演示'},
      {w:'chart', ph:'/tʃɑːrt/', zh:'图表'},
      {w:'highlight', ph:'/ˈhaɪlaɪt/', zh:'强调'},
      {w:'key point', ph:'/kiː pɔɪnt/', zh:'要点'},
      {w:'summary', ph:'/ˈsʌməri/', zh:'总结'},
      {w:'question', ph:'/ˈkwestʃən/', zh:'提问'},
      {w:'feedback', ph:'/ˈfiːdbæk/', zh:'反馈'}
    ]
  },
  16: {
    lines: [
      {role:'W', en:'Can everyone hear me? Good. Let us start with the agenda.'},
      {role:'L', en:'Your action item was the report. Status?'},
      {role:'W', en:'Done, I will send the minutes after.'},
      {role:'W', en:'Great, I will delegate the follow-up to Tom.'}
    ],
    speak: 'Can everyone hear me?',
    words: [
      {w:'mute', ph:'/mjuːt/', zh:'静音'},
      {w:'signal', ph:'/ˈsɪɡnəl/', zh:'信号'},
      {w:'agenda', ph:'/əˈdʒendə/', zh:'议程'},
      {w:'action item', ph:'/ˈækʃn ˈaɪtəm/', zh:'待办'},
      {w:'minutes', ph:'/ˈmɪnɪts/', zh:'纪要'},
      {w:'follow up', ph:'/ˈfɑːloʊ ʌp/', zh:'跟进'},
      {w:'delegate', ph:'/ˈdelɪɡeɪt/', zh:'委派'}
    ]
  },
  17: {
    lines: [
      {role:'W', en:'Mr. Smith, welcome! You must be tired from the flight.'},
      {role:'S', en:'A little, thank you.'},
      {role:'W', en:'The car is outside. We arranged a hotel near the office.'},
      {role:'W', en:'Rest well, we will start tomorrow.'}
    ],
    speak: 'You must be tired from the flight.',
    words: [
      {w:'pick up', ph:'/pɪk ʌp/', zh:'接机'},
      {w:'itinerary', ph:'/aɪˈtɪnəreri/', zh:'行程'},
      {w:'hotel', ph:'/hoʊˈtel/', zh:'酒店'},
      {w:'rest', ph:'/rest/', zh:'休息'},
      {w:'schedule', ph:'/ˈskedʒuːl/', zh:'日程'},
      {w:'comfortable', ph:'/ˈkʌmftərbəl/', zh:'舒适'},
      {w:'arrange', ph:'/əˈreɪndʒ/', zh:'安排'}
    ]
  },
  18: {
    lines: [
      {role:'C', en:'The delivery is late again.'},
      {role:'W', en:'We sincerely apologize for the inconvenience.'},
      {role:'W', en:'We will resolve it today and compensate you with a discount.'}
    ],
    speak: 'We sincerely apologize for the inconvenience.',
    words: [
      {w:'complaint', ph:'/kəmˈpleɪnt/', zh:'投诉'},
      {w:'apologize', ph:'/əˈpɑːlədʒaɪz/', zh:'道歉'},
      {w:'inconvenience', ph:'/ˌɪnkənˈviːniəns/', zh:'不便'},
      {w:'resolve', ph:'/rɪˈzɑːlv/', zh:'解决'},
      {w:'compensate', ph:'/ˈkɑːmpenseɪt/', zh:'补偿'},
      {w:'sincere', ph:'/sɪnˈsɪr/', zh:'诚挚'},
      {w:'improve', ph:'/ɪmˈpruːv/', zh:'改进'}
    ]
  },
  19: {
    lines: [
      {role:'S', en:'Friends, I believe in our vision.'},
      {role:'S', en:'The market gives us a rare opportunity.'},
      {role:'S', en:'If we work together, we will achieve what others think impossible.'},
      {role:'S', en:'The future is promising. Let us build it now.'}
    ],
    speak: 'I believe in our vision.',
    words: [
      {w:'vision', ph:'/ˈvɪʒn/', zh:'愿景'},
      {w:'opportunity', ph:'/ˌɑːpərˈtuːnəti/', zh:'机遇'},
      {w:'together', ph:'/təˈɡeðər/', zh:'携手'},
      {w:'inspire', ph:'/ɪnˈspaɪər/', zh:'激励'},
      {w:'future', ph:'/ˈfjuːtʃər/', zh:'未来'},
      {w:'believe', ph:'/bɪˈliːv/', zh:'相信'},
      {w:'achieve', ph:'/əˈtʃiːv/', zh:'达成'}
    ]
  },
  20: {
    lines: [
      {role:'A', en:'Mr. Smith, welcome to China! Let us toast to cooperation.'},
      {role:'B', en:'Cheers! I look forward to the meeting.'},
      {role:'A', en:'Today I will present three points about our plan.'},
      {role:'B', en:'Good. If the price works, we have a deal.'}
    ],
    speak: 'Let us toast to cooperation.',
    words: [
      {w:'welcome', ph:'/ˈwelkəm/', zh:'欢迎'},
      {w:'toast', ph:'/toʊst/', zh:'祝酒'},
      {w:'present', ph:'/prɪˈzent/', zh:'演示'},
      {w:'negotiate', ph:'/nɪˈɡoʊʃieɪt/', zh:'谈判'},
      {w:'believe', ph:'/bɪˈliːv/', zh:'相信'},
      {w:'achieve', ph:'/əˈtʃiːv/', zh:'达成'}
    ]
  }
};
