(function () {
  const content = window.SITE_CONTENT;
  if (!content) return;

  const $ = (selector) => document.querySelector(selector);

  function setText(selector, value) {
    const node = $(selector);
    if (node) node.textContent = value;
  }

  function renderProfile() {
    const profile = content.profile;
    setText("#greeting", profile.greeting);
    setText("#nickname", profile.nickname);
    setText("#role", profile.role);

    profile.intro.forEach((line) => {
      const paragraph = document.createElement("p");
      paragraph.textContent = line;
      $("#intro-list").appendChild(paragraph);
    });

    profile.tags.forEach((tag) => {
      const chip = document.createElement("span");
      chip.textContent = tag;
      $("#tags").appendChild(chip);
    });
  }

  function createCover(album, index) {
    const cover = document.createElement("div");
    cover.className = `cover-art tone-${album.tone}`;
    cover.setAttribute("aria-hidden", "true");
    cover.style.setProperty("--image-shift", `${[-1, 1, 0, 2, -2][index % 5]}%`);

    if (album.cover) {
      cover.style.setProperty("--cover-image", `url("${album.cover}")`);
      cover.classList.add("with-image");
      return cover;
    }

    const ring = document.createElement("span");
    ring.className = "record-ring";
    const title = document.createElement("span");
    title.className = "cover-title";
    title.textContent = album.title;
    const artist = document.createElement("span");
    artist.className = "cover-artist";
    artist.textContent = album.artist;
    cover.append(ring, title, artist);
    return cover;
  }

  function renderSoundWall() {
    const wall = content.soundWall;
    const layout = [
      { col: "1 / 5", row: "1 / 5", wide: 4, tall: 4 },
      { col: "5 / 9", row: "1 / 3", wide: 4, tall: 2 },
      { col: "5 / 9", row: "3 / 5", wide: 4, tall: 2 },
      { col: "9 / 13", row: "1 / 5", wide: 4, tall: 4 },
      { col: "1 / 4", row: "5 / 9", wide: 3, tall: 4 },
      { col: "4 / 7", row: "5 / 7", wide: 3, tall: 2 },
      { col: "4 / 7", row: "7 / 9", wide: 3, tall: 2 },
      { col: "7 / 13", row: "5 / 9", wide: 6, tall: 4 },
      { col: "1 / 7", row: "9 / 13", wide: 6, tall: 4 },
      { col: "7 / 10", row: "9 / 11", wide: 3, tall: 2 },
      { col: "7 / 10", row: "11 / 13", wide: 3, tall: 2 },
      { col: "10 / 13", row: "9 / 13", wide: 3, tall: 4 },
      { col: "1 / 4", row: "13 / 15", wide: 3, tall: 2 },
      { col: "4 / 7", row: "13 / 15", wide: 3, tall: 2 },
      { col: "7 / 10", row: "13 / 15", wide: 3, tall: 2 },
      { col: "10 / 13", row: "13 / 15", wide: 3, tall: 2 },
      { col: "1 / 4", row: "15 / 17", wide: 3, tall: 2 },
      { col: "4 / 7", row: "15 / 17", wide: 3, tall: 2 },
      { col: "7 / 10", row: "15 / 17", wide: 3, tall: 2 },
      { col: "10 / 13", row: "15 / 17", wide: 3, tall: 2 }
    ];

    setText("#wall-title", wall.title);
    setText("#wall-description", wall.description);

    wall.albums.forEach((album, index) => {
      const placement = layout[index];
      const card = document.createElement("article");
      card.className = "sound-card";
      card.tabIndex = 0;
      card.setAttribute("aria-label", `${album.artist}《${album.title}》`);
      card.style.setProperty("--col", placement.col);
      card.style.setProperty("--row", placement.row);
      if (placement.tall <= 2) card.classList.add("is-short");
      if (placement.wide <= 3) card.classList.add("is-narrow");

      const cover = createCover(album, index);
      const overlay = document.createElement("div");
      overlay.className = "sound-overlay";

      const type = document.createElement("p");
      type.className = "card-label";
      type.textContent = "SOUND MEMORY";

      const title = document.createElement("h3");
      title.textContent = album.title;

      const artist = document.createElement("p");
      artist.className = "artist";
      artist.textContent = album.artist;

      const note = document.createElement("p");
      note.className = "album-note";
      note.textContent = album.note;

      overlay.append(type, title, artist, note);
      card.append(cover, overlay);
      $("#sound-wall-grid").appendChild(card);
    });
  }

  function createCollectionCard(item, placement, index, label) {
    const card = document.createElement("article");
    card.className = "sound-card collection-card";
    card.tabIndex = 0;
    card.setAttribute("aria-label", `${item.artist}《${item.title}》`);
    if (item.cover) {
      const coverSlug = item.cover
        .split("/")
        .pop()
        .replace(/\.[^.]+$/, "")
        .toLowerCase();
      card.classList.add(`cover-${coverSlug}`);
    }
    card.style.setProperty("--col", placement.col);
    card.style.setProperty("--row", placement.row);
    if (placement.tall <= 2) card.classList.add("is-short");
    if (placement.wide <= 3) card.classList.add("is-narrow");

    const cover = createCover(item, index);
    const overlay = document.createElement("div");
    overlay.className = "sound-overlay";

    const type = document.createElement("p");
    type.className = "card-label";
    type.textContent = label;

    const title = document.createElement("h3");
    title.textContent = item.title;

    const artist = document.createElement("p");
    artist.className = "artist";
    artist.textContent = item.artist;

    const note = document.createElement("p");
    note.className = "album-note";
    note.textContent = item.note;

    overlay.append(type, title, artist, note);
    card.append(cover, overlay);
    return card;
  }

  function renderCollectionWall(config) {
    setText(config.titleSelector, config.title);
    setText(config.descriptionSelector, config.description);

    config.items.forEach((item, index) => {
      const placement = config.layout[index];
      config.grid.appendChild(createCollectionCard(item, placement, index, config.label));
    });
  }

  function renderBookWall() {
    const wall = content.bookWall;
    const layout = [
      { col: "1 / 4", row: "1 / 7", wide: 3, tall: 6 },
      { col: "4 / 7", row: "1 / 7", wide: 3, tall: 6 },
      { col: "7 / 10", row: "1 / 7", wide: 3, tall: 6 },
      { col: "10 / 13", row: "1 / 7", wide: 3, tall: 6 },
      { col: "1 / 4", row: "7 / 13", wide: 3, tall: 6 },
      { col: "4 / 7", row: "7 / 13", wide: 3, tall: 6 },
      { col: "1 / 3", row: "13 / 17", wide: 2, tall: 4 },
      { col: "10 / 13", row: "7 / 13", wide: 3, tall: 6 },
      { col: "3 / 5", row: "13 / 17", wide: 2, tall: 4 },
      { col: "5 / 7", row: "13 / 17", wide: 2, tall: 4 },
      { col: "7 / 10", row: "7 / 13", wide: 3, tall: 6 },
      { col: "7 / 9", row: "13 / 17", wide: 2, tall: 4 },
      { col: "9 / 11", row: "13 / 17", wide: 2, tall: 4 },
      { col: "11 / 13", row: "13 / 17", wide: 2, tall: 4 }
    ];

    renderCollectionWall({
      title: wall.title,
      description: wall.description,
      items: wall.books,
      layout,
      label: "BOOK MEMORY",
      titleSelector: "#book-wall-title",
      descriptionSelector: "#book-wall-description",
      grid: $("#book-wall-grid")
    });
  }

  function renderFilmWall() {
    const wall = content.filmWall;
    const layout = [
      { col: "1 / 5", row: "1 / 5", wide: 4, tall: 4 },
      { col: "5 / 9", row: "1 / 3", wide: 4, tall: 2 },
      { col: "5 / 9", row: "3 / 5", wide: 4, tall: 2 },
      { col: "9 / 13", row: "1 / 5", wide: 4, tall: 4 },
      { col: "1 / 4", row: "5 / 9", wide: 3, tall: 4 },
      { col: "4 / 7", row: "5 / 7", wide: 3, tall: 2 },
      { col: "4 / 7", row: "7 / 9", wide: 3, tall: 2 },
      { col: "7 / 13", row: "5 / 9", wide: 6, tall: 4 },
      { col: "1 / 5", row: "9 / 13", wide: 4, tall: 4 },
      { col: "5 / 8", row: "9 / 11", wide: 3, tall: 2 },
      { col: "8 / 10", row: "9 / 11", wide: 2, tall: 2 },
      { col: "10 / 13", row: "9 / 11", wide: 3, tall: 2 },
      { col: "5 / 7", row: "11 / 13", wide: 2, tall: 2 },
      { col: "7 / 10", row: "11 / 13", wide: 3, tall: 2 },
      { col: "10 / 13", row: "11 / 13", wide: 3, tall: 2 },
      { col: "1 / 7", row: "13 / 17", wide: 6, tall: 4 },
      { col: "7 / 13", row: "13 / 17", wide: 6, tall: 4 }
    ];

    renderCollectionWall({
      title: wall.title,
      description: wall.description,
      items: wall.films,
      layout,
      label: "SCREEN MEMORY",
      titleSelector: "#film-wall-title",
      descriptionSelector: "#film-wall-description",
      grid: $("#film-wall-grid")
    });
  }

  function setupDailyOrder() {
    const buttons = Array.from(document.querySelectorAll("[data-mood]"));
    if (!buttons.length) return;

    const moodProfiles = {
      quiet: {
        label: "安静",
        keywords: ["安静", "柔软", "温柔", "孤独", "夜晚", "诗", "慢", "治愈", "清淡", "松弛", "梦", "远方"],
        summary: "安静 / 远行 / 慢慢进入状态",
        note: "适合一个人把灯调暗，慢慢进入状态。"
      },
      brave: {
        label: "热血",
        keywords: ["热血", "英雄", "冒险", "燃点", "勇气", "舞台", "抵抗", "并肩", "锋芒", "速度"],
        summary: "热血 / 冒险 / 把节奏点亮",
        note: "适合把注意力拉回来，给今天加一点向前的劲。"
      },
      "sci-fi": {
        label: "科幻",
        keywords: ["宇宙", "科幻", "未来", "技术", "机器人", "机甲", "新地球", "迁徙", "尺度", "星际"],
        summary: "科幻 / 宇宙 / 向未知处走",
        note: "适合留给想象力，一个人看见更大的世界。"
      },
      real: {
        label: "现实",
        keywords: ["现实", "历史", "生活", "普通", "责任", "文明", "世界", "城市", "江水", "命运", "地域"],
        summary: "现实 / 历史 / 看见生活褶皱",
        note: "适合把目光落回地面，认真看一看真实的人和事。"
      },
      light: {
        label: "轻一点",
        keywords: ["明亮", "轻", "夏天", "童年", "喜剧", "下午", "安全感", "柔软", "温柔", "热闹"],
        summary: "明亮 / 轻快 / 给心情透口气",
        note: "适合不赶路的时候，让一小段轻快把心情托起来。"
      }
    };

    const includesMood = (item, keywords) => {
      const text = `${item.title} ${item.artist} ${item.note} ${item.tone}`.toLowerCase();
      return keywords.some((keyword) => text.includes(keyword.toLowerCase()));
    };

    const pick = (items, profile) => {
      const matched = items.filter((item) => includesMood(item, profile.keywords));
      const source = matched.length ? matched : items;
      return source[Math.floor(Math.random() * source.length)];
    };

    const formatItem = (item) => `${item.title} / ${item.artist}`;

    function renderOrder(mood) {
      const profile = moodProfiles[mood] || moodProfiles.quiet;
      const sound = pick(content.soundWall.albums, profile);
      const book = pick(content.bookWall.books, profile);
      const film = pick(content.filmWall.films, profile);

      setText("#order-kicker", `今日关键词 · ${profile.label}`);
      setText("#order-keyword", profile.summary);
      setText("#order-sound", formatItem(sound));
      setText("#order-book", formatItem(book));
      setText("#order-film", formatItem(film));
      setText("#order-note", profile.note);

      buttons.forEach((button) => {
        const isActive = button.dataset.mood === mood;
        button.classList.toggle("active", isActive);
        button.setAttribute("aria-pressed", String(isActive));
      });
    }

    buttons.forEach((button) => {
      button.setAttribute("aria-pressed", "false");
      button.addEventListener("click", () => renderOrder(button.dataset.mood));
    });

    renderOrder("quiet");
  }

  function setupTheme() {
    const button = $("#theme-button");
    const savedTheme = window.localStorage.getItem("vibe-homepage-theme");

    function applyTheme(theme) {
      const isDay = theme === "day";
      document.body.classList.toggle("theme-day", isDay);
      document.body.classList.toggle("theme-night", !isDay);
      document.body.classList.remove("dim");
      setText("#theme-button", isDay ? "切换夜间主题" : "切换日间主题");
      button.setAttribute("aria-pressed", String(isDay));
    }

    applyTheme(savedTheme === "day" ? "day" : "night");

    button.addEventListener("click", () => {
      const nextTheme = document.body.classList.contains("theme-day") ? "night" : "day";
      applyTheme(nextTheme);
      window.localStorage.setItem("vibe-homepage-theme", nextTheme);
    });
  }

  renderProfile();
  renderSoundWall();
  renderBookWall();
  renderFilmWall();
  setupDailyOrder();
  setupTheme();
  setText("#year", new Date().getFullYear());
})();
