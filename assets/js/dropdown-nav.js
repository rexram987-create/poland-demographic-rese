(function () {
  const cityLinksHe = [
    ["cities/warsaw.html", "ורשה", "עיר הבירה"],
    ["cities/krakow.html", "קרקוב", "עיר מלכותית"],
    ["cities/lodz.html", "לודז׳", "תעשייה וטקסטיל"],
    ["cities/gdansk.html", "גדנסק", "נמל וחירות"],
    ["cities/wroclaw.html", "ורוצלב", "גשרים ואיים"],
    ["cities/poznan.html", "פוזנן", "ראשית פולין"]
  ];

  const cityLinksEn = [
    ["cities/warsaw-en.html", "Warsaw", "Capital city"],
    ["cities/krakow-en.html", "Kraków", "Royal city"],
    ["cities/lodz-en.html", "Łódź", "Industry and textiles"],
    ["cities/gdansk-en.html", "Gdańsk", "Port and freedom"],
    ["cities/wroclaw-en.html", "Wrocław", "Bridges and islands"],
    ["cities/poznan-en.html", "Poznań", "Early Poland"]
  ];

  function isEnglishPage() {
    return document.documentElement.lang && document.documentElement.lang.toLowerCase().startsWith("en");
  }

  function inCitiesFolder() {
    return location.pathname.includes("/cities/");
  }

  function withPrefix(path) {
    return inCitiesFolder() ? "../" + path : path;
  }

  function cityPath(path) {
    return inCitiesFolder() ? path.replace("cities/", "") : path;
  }

  function link(href, label, note, iconClass) {
    const a = document.createElement("a");
    a.className = "geh-menu-link";
    a.href = href;
    a.innerHTML = `<span><strong>${label}</strong><small>${note || ""}</small></span><span class="geh-pill"><i class="${iconClass || "fa-solid fa-arrow-up-right-from-square"}"></i></span>`;
    return a;
  }

  function section(title) {
    const box = document.createElement("section");
    box.className = "geh-menu-section";
    const h = document.createElement("h2");
    h.className = "geh-menu-title";
    h.textContent = title;
    box.appendChild(h);
    return box;
  }

  function buildNav() {
    if (document.querySelector(".geh-nav-shell")) return;

    const en = isEnglishPage();
    const nav = document.createElement("div");
    nav.className = "geh-nav-shell";
    nav.innerHTML = `
      <div class="geh-nav-inner">
        <a class="geh-brand" href="${withPrefix("index.html")}" aria-label="${en ? "Home" : "דף הבית"}">
          <span class="geh-brand-mark"><i class="fa-solid fa-earth-europe"></i></span>
          <span>${en ? "Poland Research Hub" : "מרכז מחקר פולין"}</span>
        </a>
        <button class="geh-menu-button" type="button" aria-expanded="false" aria-controls="gehDropdownMenu">
          <i class="fa-solid fa-bars"></i>
          <span>${en ? "Open navigation" : "פתח ניווט"}</span>
          <i class="fa-solid fa-chevron-down" aria-hidden="true"></i>
        </button>
      </div>
      <div class="geh-dropdown" id="gehDropdownMenu" hidden>
        <div class="geh-menu-scroll">
          <div class="geh-menu-grid"></div>
        </div>
      </div>
    `;

    document.body.classList.add("geh-old-header-hidden");
    document.body.insertBefore(nav, document.body.firstChild);

    const grid = nav.querySelector(".geh-menu-grid");

    const main = section(en ? "Main pages" : "עמודים ראשיים");
    main.appendChild(link(withPrefix("index.html"), en ? "Home" : "ראשי", en ? "Research index" : "אינדקס המחקר", "fa-solid fa-house"));
    main.appendChild(link(withPrefix(en ? "poland-en.html" : "poland.html"), en ? "Poland" : "פולין", en ? "Country research" : "מחקר מדינה", "fa-solid fa-flag"));
    main.appendChild(link(withPrefix("timeline.html"), en ? "Timeline" : "ציר זמן", en ? "Interactive history" : "היסטוריה אינטראקטיבית", "fa-solid fa-clock-rotate-left"));
    main.appendChild(link(withPrefix(en ? "sources-en.html" : "sources.html"), en ? "Sources" : "מקורות", en ? "Credits and references" : "קרדיטים ומקורות", "fa-solid fa-link"));
    main.appendChild(link(withPrefix(en ? "about-en.html" : "about.html"), en ? "About" : "אודות", en ? "Project information" : "מידע על הפרויקט", "fa-solid fa-circle-info"));

    const cities = section(en ? "City research pages" : "דפי מחקר ערים");
    (en ? cityLinksEn : cityLinksHe).forEach(([path, label, note]) => {
      cities.appendChild(link(cityPath(path), label, note, "fa-solid fa-city"));
    });

    const language = section(en ? "Language" : "שפה");
    const current = location.pathname.split("/").pop() || "index.html";
    const other = en ? current.replace("-en.html", ".html") : current.replace(".html", "-en.html");
    language.appendChild(link(other, en ? "עברית" : "English", en ? "Switch to Hebrew" : "מעבר לאנגלית", "fa-solid fa-language"));
    language.appendChild(link("#top", en ? "Top of page" : "ראש הדף", en ? "Return to the beginning" : "חזרה לתחילת העמוד", "fa-solid fa-arrow-up"));

    grid.appendChild(main);
    grid.appendChild(cities);
    grid.appendChild(language);

    const button = nav.querySelector(".geh-menu-button");
    const dropdown = nav.querySelector(".geh-dropdown");

    function setOpen(open) {
      dropdown.hidden = !open;
      button.setAttribute("aria-expanded", String(open));
      button.querySelector("span").textContent = open ? (en ? "Close navigation" : "סגור ניווט") : (en ? "Open navigation" : "פתח ניווט");
    }

    button.addEventListener("click", function () {
      setOpen(dropdown.hidden);
    });

    document.addEventListener("click", function (event) {
      if (!nav.contains(event.target)) setOpen(false);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") setOpen(false);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", buildNav);
  } else {
    buildNav();
  }
})();
