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
    setText("#photo-caption", profile.photoCaption);

    const portrait = $("#portrait");
    portrait.src = profile.portrait;
    portrait.alt = profile.portraitAlt;

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

    let quoteIndex = 0;
    $("#quote-button").addEventListener("click", () => {
      setText("#quote", profile.quotes[quoteIndex % profile.quotes.length]);
      quoteIndex += 1;
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
    setText("#wall-title", wall.title);
    setText("#wall-description", wall.description);

    wall.albums.forEach((album, index) => {
      const card = document.createElement("article");
      card.className = `sound-card ${album.size || ""}`.trim();
      card.tabIndex = 0;
      card.setAttribute("aria-label", `${album.artist}《${album.title}》`);

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

  renderProfile();
  renderSoundWall();
  setupTheme();
  setText("#year", new Date().getFullYear());
})();
