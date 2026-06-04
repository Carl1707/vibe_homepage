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

  function renderData() {
    const data = content.data;
    setText("#data-title", data.title);
    setText("#chart-title", data.chartTitle);
    setText("#data-label", data.label);
    setText("#data-unit", data.unit);
    setText("#data-description", data.description);

    const entries = data.entries.map((entry) => ({
      label: entry.label,
      value: Math.max(0, Number(entry.value) || 0)
    }));
    const max = Math.max(...entries.map((entry) => entry.value), 1);

    entries.forEach((entry, index) => {
      const item = document.createElement("div");
      item.className = "bar-item";
      item.style.setProperty("--bar-size", `${(entry.value / max) * 100}%`);
      item.style.setProperty("--delay", `${index * 80}ms`);

      const value = document.createElement("span");
      value.className = "bar-value";
      value.textContent = entry.value;

      const bar = document.createElement("span");
      bar.className = "bar";
      bar.setAttribute("aria-hidden", "true");

      const label = document.createElement("span");
      label.className = "bar-label";
      label.textContent = entry.label;

      item.append(value, bar, label);
      $("#bar-chart").appendChild(item);
    });

    data.insights.forEach((insight) => {
      const item = document.createElement("li");
      item.textContent = insight;
      $("#insights").appendChild(item);
    });
  }

  function setupTheme() {
    $("#theme-button").addEventListener("click", () => {
      const isNight = document.body.classList.toggle("night");
      setText("#theme-button", isNight ? "切换白天营业" : "切换夜间营业");
    });
  }

  function setupMoodEgg() {
    const slider = $("#mood-range");
    const moods = content.egg.moods;
    setText("#egg-title", content.egg.title);
    setText("#egg-description", content.egg.description);

    function dropStamp() {
      const stamp = document.createElement("span");
      stamp.className = "stamp";
      stamp.textContent = "VIBE";
      stamp.style.left = `${10 + Math.random() * 80}%`;
      stamp.style.setProperty("--rotate", `${-18 + Math.random() * 36}deg`);
      $("#stamp-field").appendChild(stamp);
      setTimeout(() => stamp.remove(), 1600);
    }

    function updateMood() {
      const value = Number(slider.value);
      const mood = moods.find((item) => value <= item.max) || moods[moods.length - 1];
      setText("#mood-emoji", mood.emoji);
      setText("#mood-text", mood.text);
      if (value > 82) dropStamp();
    }

    slider.addEventListener("input", updateMood);
    document.querySelectorAll("[data-mood]").forEach((button) => {
      button.addEventListener("click", () => {
        slider.value = button.dataset.mood;
        updateMood();
      });
    });
    updateMood();
  }

  renderProfile();
  renderData();
  setupTheme();
  setupMoodEgg();
  setText("#year", new Date().getFullYear());
})();
