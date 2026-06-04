/*
 * Sound Wall 内容配置。
 * cover 可填写真实封面路径，例如 assets/covers/after-hours.jpg。
 * 如果 cover 为空，页面会使用 tone 生成抽象封面占位。
 */
window.SITE_CONTENT = {
  profile: {
    greeting: "个人唱片墙",
    nickname: "Sound Wall",
    role: "这些音乐构成了我的生活背景音",
    portrait: "assets/sound-avatar.svg",
    portraitAlt: "唱片与声波组成的个人声音档案视觉",
    photoCaption: "这里可以换成你的头像，也可以换成一张耳机、唱片或房间角落的照片。",
    intro: [
      "比起用几句话介绍自己，我更想先把一些声音放在这里。",
      "它们陪我走路、写作业、发呆、通勤，也在很多普通的日子里悄悄构成气氛。",
      "这面墙不是听歌排名，而是一份关于生活背景音的个人档案。"
    ],
    tags: ["华语 R&B", "夜晚耳机", "城市散步", "情绪档案"],
    quotes: [
      "如果一句话说不清自己，就先放一首歌。",
      "真正反复听的歌，通常都藏着一段生活。",
      "这不是年度报告，是我自己的背景音采样。"
    ]
  },
  soundWall: {
    title: "个人唱片墙 / Sound Wall",
    description:
      "用不完全规整的唱片拼贴，记录那些组成我第一印象的旋律、专辑和情绪。鼠标悬停会轻微放大，点击任意卡片会把它放到 Now Spinning。",
    albums: [
      { title: "After Hours", artist: "The Weeknd", note: "夜路、霓虹和迟来的自省。", tone: "red", size: "feature", cover: "" },
      { title: "心中的日月", artist: "王力宏", note: "有东方质感的辽阔感，像一段长途旅行。", tone: "sun", size: "tall", cover: "" },
      { title: "危险世界", artist: "方大同", note: "克制、低频、城市边缘的独白。", tone: "violet", size: "", cover: "" },
      { title: "Sunflower", artist: "Spider-Verse", note: "明亮但不轻飘，是某些下午的安全感。", tone: "gold", size: "wide", cover: "" },
      { title: "黑色柳丁", artist: "陶喆", note: "粗粝、真诚，像把情绪直接接进音箱。", tone: "ink", size: "tall", cover: "" },
      { title: "愿与愁", artist: "林俊杰", note: "安静地把复杂情绪叠起来。", tone: "blue", size: "", cover: "" },
      { title: "Starboy", artist: "The Weeknd", note: "冷光、速度感和一点危险的漂亮。", tone: "electric", size: "", cover: "" },
      { title: "回到未来", artist: "方大同", note: "复古和未来感之间的松弛摆动。", tone: "mint", size: "wide", cover: "" },
      { title: "改变自己", artist: "王力宏", note: "更像一次清醒的自我更新。", tone: "green", size: "", cover: "" },
      { title: "IMGOOD别担心我", artist: "Rapeter", note: "把没说出口的话压进轻快节奏里。", tone: "peach", size: "", cover: "" },
      { title: "Blinding Lights", artist: "The Weeknd", note: "像夜晚车窗外不断后退的灯。", tone: "neon", size: "wide", cover: "" },
      { title: "新地球", artist: "林俊杰", note: "宏大、明亮，也带一点孤独的科幻感。", tone: "aqua", size: "feature", cover: "" },
      { title: "I'm OK", artist: "陶喆", note: "把随性和锋利放在同一面。", tone: "orange", size: "", cover: "" },
      { title: "盖世英雄", artist: "王力宏", note: "戏剧化、热闹，也很有舞台感。", tone: "crimson", size: "tall", cover: "" },
      { title: "梦想家 The Dreamer", artist: "方大同", note: "柔软、明亮，适合把心放慢一点。", tone: "cream", size: "", cover: "" },
      { title: "Self Love", artist: "Spider-Verse", note: "在混乱里把自己接住。", tone: "rose", size: "", cover: "" },
      { title: "城乡", artist: "翁杰", note: "现实感、地域感和生活褶皱。", tone: "earth", size: "wide", cover: "" }
    ]
  },
  egg: {
    title: "隐藏彩蛋：唱针落下",
    description:
      "点击任意唱片或随机按钮，页面会把它放到 Now Spinning。这个小交互像唱针落下，提醒你：我的第一印象也可以由声音组成。"
  }
};
