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
      { title: "心中的日月", artist: "王力宏", note: "东方质感的辽阔感，像一段长途旅行。", tone: "sun", size: "tall", cover: "assets/covers/sun-moon-cropped.jpg" },
      { title: "危险世界", artist: "方大同", note: "克制、低频、城市边缘的独白。", tone: "violet", size: "", cover: "assets/covers/dangerous-world.jpg" },
      { title: "Sunflower", artist: "Spider-Verse", note: "明亮但不轻飘，是某些下午的安全感。", tone: "gold", size: "wide", cover: "assets/covers/sunflower.jpg" },
      { title: "黑色柳丁", artist: "陶喆", note: "粗粝、真诚，像把情绪直接接进音箱。", tone: "ink", size: "tall", cover: "assets/covers/black-tangerine.jpg" },
      { title: "愿与愁", artist: "林俊杰", note: "安静地把复杂情绪叠起来。", tone: "blue", size: "", cover: "assets/covers/grief-and-wish-cropped.jpg" },
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
      { title: "城乡", artist: "翁杰", note: "现实感、地域感和生活褶皱。", tone: "earth", size: "wide", cover: "assets/covers/city-country.jpg" },
      { title: "Run On Sentence", artist: "Flawed Mangoes", note: "吉他线条像一句没有停顿的独白，轻微失焦，却一直向前。", tone: "slate", size: "wide", cover: "assets/covers/run-on-sentence.jpg" },
      { title: "园游会", artist: "周杰伦", note: "明亮、轻巧，像夏天傍晚忽然吹来的风。", tone: "garden", size: "", cover: "assets/covers/carnival.jpg" },
      { title: "署前街少年", artist: "赵雷", note: "有街巷、少年和旧时光的温度，朴素却很耐听。", tone: "street", size: "wide", cover: "assets/covers/shu-qian-street-boy.jpg" }
    ]
  },
  bookWall: {
    title: "个人书墙 / Reading Room",
    description:
      "这里像小馆里靠窗的一面书架：历史、科幻、诗歌和小说彼此贴近，组成我理解世界的几种速度。",
    books: [
      { title: "枪炮、病菌与钢铁", artist: "贾雷德·戴蒙德", note: "把文明的偶然性摊开，像一张漫长的世界地图。", tone: "earth", cover: "assets/books/guns-germs-steel.jpg" },
      { title: "三体", artist: "刘慈欣", note: "宇宙尺度下的想象力，也带着冷峻的人类困境。", tone: "aqua", cover: "assets/books/three-body.jpg" },
      { title: "魔戒", artist: "J.R.R. 托尔金", note: "史诗、远行与共同抵抗黑暗的古老浪漫。", tone: "rose", cover: "assets/books/lord-of-the-rings-book.jpg" },
      { title: "哈利波特", artist: "J.K. 罗琳", note: "童年、学院、魔法和永远愿意相信的勇气。", tone: "gold", cover: "assets/books/harry-potter-book.jpg" },
      { title: "马可瓦尔多", artist: "伊塔洛·卡尔维诺", note: "城市缝隙里的轻盈观察，温柔又带一点荒诞。", tone: "peach", cover: "assets/books/marcovaldo.jpg" },
      { title: "百年孤独", artist: "加西亚·马尔克斯", note: "家族、记忆与命运循环成一场热带迷雾。", tone: "crimson", cover: "assets/books/one-hundred-years.jpg" },
      { title: "平凡的世界", artist: "路遥", note: "把普通人的生活写得宽阔，也写得有尊严。", tone: "cream", cover: "assets/books/ordinary-world.jpg" },
      { title: "额尔古纳河右岸", artist: "迟子建", note: "河流、部族和时间深处的苍茫回声。", tone: "blue", cover: "assets/books/erguna-river.jpg" },
      { title: "海子的诗", artist: "海子", note: "麦地、远方和一句句明亮而孤独的召唤。", tone: "sun", cover: "assets/books/haizi-poems.jpg" },
      { title: "受戒", artist: "汪曾祺", note: "清淡、松弛，像一碗有烟火气的白粥。", tone: "ink", cover: "assets/books/shoujie.jpg" },
      { title: "美的历程", artist: "李泽厚", note: "把审美放回历史里，看见中国精神的线条。", tone: "slate", cover: "assets/books/path-of-beauty.jpg" },
      { title: "夜晚的潜水艇", artist: "陈春成", note: "现实微微偏航，进入安静又奇异的深海。", tone: "electric", cover: "assets/books/night-submarine.jpg" },
      { title: "沉默的大多数", artist: "王小波", note: "理性、幽默和一种不愿随波逐流的清醒。", tone: "orange", cover: "assets/books/silent-majority.jpg" },
      { title: "时间移民", artist: "刘慈欣", note: "把未来写成迁徙，也写成对当下的反问。", tone: "green", cover: "assets/books/time-migration.jpg" }
    ]
  },
  filmWall: {
    title: "个人影音墙 / Screen Room",
    description:
      "这一面墙收纳电影带来的情绪光影：机甲、宇宙、史诗、喜剧和现实，都在这里成为生活的另一种背景。",
    films: [
      { title: "环太平洋", artist: "吉尔莫·德尔·托罗", note: "巨物、钢铁和热血，是少年感最直接的燃点。", tone: "aqua", cover: "assets/films/pacific-rim.jpg" },
      { title: "头号玩家", artist: "史蒂文·斯皮尔伯格", note: "把游戏、流行文化和逃离现实揉成一场冒险。", tone: "neon", cover: "assets/films/ready-player-one.jpg" },
      { title: "复仇者联盟", artist: "乔斯·韦登", note: "英雄第一次并肩站在一起，热闹也真诚。", tone: "red", cover: "assets/films/avengers.jpg" },
      { title: "钢铁侠", artist: "乔恩·费儒", note: "一个人的锋芒、幽默和自我重塑。", tone: "crimson", cover: "assets/films/iron-man.jpg" },
      { title: "指环王", artist: "彼得·杰克逊", note: "史诗的重量，也有朋友同行的温度。", tone: "earth", cover: "assets/films/lotr-film.jpg" },
      { title: "至暗时刻", artist: "乔·赖特", note: "历史阴影里的坚持，靠语言点燃微弱的光。", tone: "ink", cover: "assets/films/darkest-hour.jpg" },
      { title: "末代皇帝", artist: "贝纳尔多·贝托鲁奇", note: "宏大时代压过个人命运，华丽又苍凉。", tone: "gold", cover: "assets/films/last-emperor.jpg" },
      { title: "加勒比海盗", artist: "戈尔·维宾斯基", note: "海风、朗姆酒和一场永不太严肃的冒险。", tone: "orange", cover: "assets/films/pirates.jpg" },
      { title: "神偷奶爸", artist: "皮埃尔·柯芬", note: "柔软的亲情藏在一堆黄色小混乱里。", tone: "sun", cover: "assets/films/despicable-me.jpg" },
      { title: "超能陆战队", artist: "唐·霍尔 / 克里斯·威廉姆斯", note: "温柔、治愈，也有技术和陪伴的想象。", tone: "cream", cover: "assets/films/big-hero-6.jpg" },
      { title: "死亡诗社", artist: "彼得·威尔", note: "把自由和诗意种进青春最敏感的地方。", tone: "rose", cover: "assets/films/dead-poets.jpg" },
      { title: "寻梦环游记", artist: "李·昂克里奇", note: "记忆、家人与死亡，被讲得明亮又动人。", tone: "peach", cover: "assets/films/coco.jpg" },
      { title: "星际穿越", artist: "克里斯托弗·诺兰", note: "宇宙的孤独很大，爱仍然有重量。", tone: "slate", cover: "assets/films/interstellar.jpg" },
      { title: "流浪地球", artist: "郭帆", note: "把家园带上路，是属于中文科幻的浪漫。", tone: "blue", cover: "assets/films/wandering-earth.jpg" },
      { title: "三峡好人", artist: "贾樟柯", note: "现实像江水一样缓慢流动，沉默却有力量。", tone: "green", cover: "assets/films/still-life.jpg" },
      { title: "奥本海默", artist: "克里斯托弗·诺兰", note: "天才、责任和历史回声交叠成轰鸣。", tone: "violet", cover: "assets/films/oppenheimer.jpg" },
      { title: "我不是药神", artist: "文牧野", note: "现实疼痛里仍然保留人的温度。", tone: "mint", cover: "assets/films/dying-to-survive.jpg" }
    ]
  }
};
