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

  function updateNowPlaying(album) {
    setText("#now-title", album.title);
    setText("#now-artist", album.artist);
    setText("#now-note", album.note);
    const panel = $("#now");
    panel.classList.remove("pulse");
    void panel.offsetWidth;
    panel.classList.add("pulse");
  }

  function createCover(album) {
    const cover = document.createElement("div");
    cover.className = `album-cover tone-${album.tone}`;
    if (album.cover) {
      cover.style.backgroundImage = `url("${album.cover}")`;
      cover.classList.add("has-image");
    } else {
      cover.innerHTML = `
        <span class="cover-orbit"></span>
        <span class="cover-title">${album.title}</span>
      `;
    }
    return cover;
  }

  function renderSoundWall() {
    const wall = content.soundWall;
    setText("#wall-title", wall.title);
    setText("#wall-description", wall.description);
    setText("#egg-title", content.egg.title);
    setText("#egg-description", content.egg.description);

    wall.albums.forEach((album, index) => {
      const card = document.createElement("button");
      card.type = "button";
      card.className = `album-card ${album.size || ""}`;
      card.setAttribute("aria-label", `播放 ${album.title}`);
      card.style.setProperty("--tilt", `${[-1.7, 1.1, -0.8, 1.9, -1.2][index % 5]}deg`);
      card.appendChild(createCover(album));

      const info = document.createElement("span");
      info.className = "album-info";
      info.innerHTML = `
        <strong>${album.title}</strong>
        <span>${album.artist}</span>
        <em>${album.note}</em>
      `;
      card.appendChild(info);
      card.addEventListener("click", () => updateNowPlaying(album));
      $("#sound-wall").appendChild(card);
    });

    updateNowPlaying(wall.albums[0]);
  }

  function setupTheme() {
    $("#theme-button").addEventListener("click", () => {
      const isNight = document.body.classList.toggle("soft-light");
      setText("#theme-button", isNight ? "切回深夜模式" : "切换夜间聚光");
    });
  }

  function setupShuffle() {
    const albums = content.soundWall.albums;
    $("#shuffle-button").addEventListener("click", () => {
      const album = albums[Math.floor(Math.random() * albums.length)];
      updateNowPlaying(album);
      setText("#shuffle-result", `唱针落在《${album.title}》：${album.note}`);
    });
  }

  renderProfile();
  renderSoundWall();
  setupTheme();
  setupShuffle();
  setText("#year", new Date().getFullYear());
})();
