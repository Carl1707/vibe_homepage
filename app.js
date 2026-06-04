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
      { col: "1 / 5", row: "1 / 5", wide: 4, tall: 4 },
      { col: "5 / 9", row: "1 / 3", wide: 4, tall: 2 },
      { col: "5 / 9", row: "3 / 5", wide: 4, tall: 2 },
      { col: "9 / 13", row: "1 / 5", wide: 4, tall: 4 },
      { col: "1 / 4", row: "5 / 9", wide: 3, tall: 4 },
      { col: "4 / 7", row: "5 / 7", wide: 3, tall: 2 },
      { col: "4 / 7", row: "7 / 9", wide: 3, tall: 2 },
      { col: "7 / 13", row: "5 / 9", wide: 6, tall: 4 },
      { col: "1 / 5", row: "9 / 13", wide: 4, tall: 4 },
      { col: "5 / 9", row: "9 / 11", wide: 4, tall: 2 },
      { col: "9 / 13", row: "9 / 11", wide: 4, tall: 2 },
      { col: "5 / 7", row: "11 / 13", wide: 2, tall: 2 },
      { col: "7 / 10", row: "11 / 13", wide: 3, tall: 2 },
      { col: "10 / 13", row: "11 / 13", wide: 3, tall: 2 }
    ];

    renderCollectionWall({
      title: wall.title,
      description: wall.description,
      items: wall.books,
      layout,
      label: "BOOK NOTE",
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
      label: "SCREEN NOTE",
      titleSelector: "#film-wall-title",
      descriptionSelector: "#film-wall-description",
      grid: $("#film-wall-grid")
    });
  }

  function setupTheme() {
    $("#theme-button").addEventListener("click", () => {
      const isDim = document.body.classList.toggle("dim");
      setText("#theme-button", isDim ? "切换原始光线" : "切换低光模式");
    });
  }

  function setupBackgroundMusic() {
    const audio = $("#background-audio");
    const toggle = $("#music-toggle");
    if (!audio || !toggle) return;

    toggle.addEventListener("click", async () => {
      try {
        if (audio.paused) {
          await audio.play();
          setText("#music-toggle", "暂停背景音乐");
          setText("#music-status", "正在播放：I Walk This Earth All By Myself");
        } else {
          audio.pause();
          setText("#music-toggle", "播放背景音乐");
          setText("#music-status", "I Walk This Earth All By Myself");
        }
      } catch (error) {
        setText("#music-status", "请先把音频文件放入 assets/audio/");
      }
    });

    audio.addEventListener("error", () => {
      setText("#music-status", "音频文件待添加：assets/audio/i-walk-this-earth-all-by-myself.mp3");
    });
  }

  renderProfile();
  renderSoundWall();
  renderBookWall();
  renderFilmWall();
  setupTheme();
  setupBackgroundMusic();
  setText("#year", new Date().getFullYear());
})();
