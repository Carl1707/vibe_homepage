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
      ["1 / 5", "1 / 5"],
      ["5 / 9", "1 / 3"],
      ["5 / 9", "3 / 5"],
      ["9 / 13", "1 / 5"],
      ["1 / 4", "5 / 9"],
      ["4 / 7", "5 / 7"],
      ["4 / 7", "7 / 9"],
      ["7 / 13", "5 / 9"],
      ["1 / 7", "9 / 13"],
      ["7 / 10", "9 / 11"],
      ["7 / 10", "11 / 13"],
      ["10 / 13", "9 / 13"],
      ["1 / 4", "13 / 15"],
      ["4 / 7", "13 / 15"],
      ["7 / 10", "13 / 15"],
      ["10 / 13", "13 / 15"],
      ["1 / 4", "15 / 17"],
      ["4 / 7", "15 / 17"],
      ["7 / 10", "15 / 17"],
      ["10 / 13", "15 / 17"]
    ];

    setText("#wall-title", wall.title);
    setText("#wall-description", wall.description);

    wall.albums.forEach((album, index) => {
      const card = document.createElement("article");
      card.className = "sound-card";
      card.tabIndex = 0;
      card.setAttribute("aria-label", `${album.artist}《${album.title}》`);
      card.style.setProperty("--col", layout[index][0]);
      card.style.setProperty("--row", layout[index][1]);

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
  setupTheme();
  setupBackgroundMusic();
  setText("#year", new Date().getFullYear());
})();
