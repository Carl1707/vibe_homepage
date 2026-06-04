/*
 * 这里是全站内容配置。
 * albums 里的 cover 可以留空使用抽象封面，也可以改成本地封面路径，例如 assets/covers/after-hours.jpg。
 */
window.SITE_CONTENT = {
  profile: {
    greeting: "待填充自我介绍",
    nickname: "About Me",
    role: "这里之后可以写姓名、专业、兴趣方向和个人关键词。",
    intro: [
      "这一块先留作个人介绍入口，后续可以替换成真实的姓名、经历、项目方向或联系方式。",
      "下面的 Sound Wall 负责表达生活气质：哪些声音构成了我的背景音。"
    ],
    tags: ["姓名待填", "专业待填", "兴趣待填", "联系方式待填"]
  },
  soundWall: {
    title: "个人唱片墙 / Sound Wall",
    description:
      "一个克制、干净、带有个人情绪的声音档案。这里的专辑和歌曲乱序排列，像一块音乐记忆拼贴：它们共同构成我生活里的背景音。",
    albums: [
      { title: "After Hours", artist: "The Weeknd", note: "夜路、霓虹和迟来的自省。", tone: "red", size: "feature", cover: "assets/covers/after-hours.jpg" },
      { title: "心中的日月", artist: "王力宏", note: "东方质感的辽阔感，像一段长途旅行。", tone: "sun", size: "tall", cover: "assets/covers/sun-moon.jpg" },
      { title: "危险世界", artist: "方大同", note: "克制、低频、城市边缘的独白。", tone: "violet", size: "", cover: "assets/covers/dangerous-world.jpg" },
      { title: "Sunflower", artist: "Spider-Verse", note: "明亮但不轻飘，是某些下午的安全感。", tone: "gold", size: "wide", cover: "assets/covers/sunflower.jpg" },
      { title: "黑色柳丁", artist: "陶喆", note: "粗粝、真诚，像把情绪直接接进音箱。", tone: "ink", size: "tall", cover: "assets/covers/black-tangerine.jpg" },
      { title: "愿与愁", artist: "林俊杰", note: "安静地把复杂情绪叠起来。", tone: "blue", size: "", cover: "assets/covers/grief-and-wish.jpg" },
      { title: "Starboy", artist: "The Weeknd", note: "冷光、速度感和一点危险的漂亮。", tone: "electric", size: "", cover: "assets/covers/starboy.jpg" },
      { title: "回到未来", artist: "方大同", note: "复古和未来感之间的松弛摆动。", tone: "mint", size: "wide", cover: "assets/covers/back-to-wonderland.jpg" },
      { title: "改变自己", artist: "王力宏", note: "像一次清醒的自我更新。", tone: "green", size: "", cover: "assets/covers/change-me.jpg" },
      { title: "IMGOOD别担心我", artist: "Rapeter", note: "把没说出口的话压进轻快节奏里。", tone: "peach", size: "", cover: "assets/covers/imgood.jpg" },
      { title: "Blinding Lights", artist: "The Weeknd", note: "夜晚车窗外不断后退的灯。", tone: "neon", size: "wide", cover: "assets/covers/blinding-lights.jpg" },
      { title: "新地球", artist: "林俊杰", note: "宏大、明亮，也带一点孤独的科幻感。", tone: "aqua", size: "feature", cover: "assets/covers/genesis.jpg" },
      { title: "I'm OK", artist: "陶喆", note: "把随性和锋利放在同一面。", tone: "orange", size: "", cover: "assets/covers/im-ok.jpg" },
      { title: "盖世英雄", artist: "王力宏", note: "戏剧化、热闹，也很有舞台感。", tone: "crimson", size: "tall", cover: "assets/covers/heroes-earth.jpg" },
      { title: "梦想家 The Dreamer", artist: "方大同", note: "柔软、明亮，适合把心放慢一点。", tone: "cream", size: "", cover: "assets/covers/dreamer.jpg" },
      { title: "Self Love", artist: "Spider-Verse", note: "在混乱里把自己接住。", tone: "rose", size: "", cover: "assets/covers/self-love.jpg" },
      { title: "城乡", artist: "翁杰", note: "现实感、地域感和生活褶皱。", tone: "earth", size: "wide", cover: "assets/covers/city-country.jpg" }
    ]
  }
};
