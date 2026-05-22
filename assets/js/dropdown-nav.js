(function () {
  const cityLinksHe = [["cities/warsaw.html","ורשה","עיר הבירה"],["cities/krakow.html","קרקוב","עיר מלכותית"],["cities/lodz.html","לודז׳","תעשייה וטקסטיל"],["cities/gdansk.html","גדנסק","נמל וחירות"],["cities/wroclaw.html","ורוצלב","גשרים ואיים"],["cities/poznan.html","פוזנן","ראשית פולין"],["cities/sieradz.html","שייראדז","מורשת יהודית"],["cities/rabka-zdroj.html","ראבקה־זדרוי","עיירת מרפא וזיכרון"]];
  const cityLinksEn = [["cities/warsaw-en.html","Warsaw","Capital city"],["cities/krakow-en.html","Kraków","Royal city"],["cities/lodz-en.html","Łódź","Industry and textiles"],["cities/gdansk-en.html","Gdańsk","Port and freedom"],["cities/wroclaw-en.html","Wrocław","Bridges and islands"],["cities/poznan-en.html","Poznań","Early Poland"],["cities/sieradz-en.html","Sieradz","Jewish heritage"],["cities/rabka-zdroj-en.html","Rabka-Zdrój","Spa town and memory"]];
  function isEnglishPage(){return document.documentElement.lang&&document.documentElement.lang.toLowerCase().startsWith("en");}
  function inCitiesFolder(){return location.pathname.includes("/cities/");}
  function withPrefix(path){return inCitiesFolder()?"../"+path:path;}
  function languageHref(path){return inCitiesFolder()&&!path.includes("/")?path:withPrefix(path);}
  function cityPath(path){return inCitiesFolder()?path.replace("cities/",""):path;}
  function getLanguageTarget(en){const current=location.pathname.split("/").pop()||"index.html";const map={"index.html":"index-en.html","index-en.html":"index.html","jewish-poland.html":"jewish-poland-en.html","jewish-poland-en.html":"jewish-poland.html","jewish-timeline.html":"jewish-timeline-en.html","jewish-timeline-en.html":"jewish-timeline.html","folklore-archive.html":"folklore-archive-en.html","folklore-archive-en.html":"folklore-archive.html","sieradz.html":"sieradz-en.html","sieradz-en.html":"sieradz.html","rabka-zdroj.html":"rabka-zdroj-en.html","rabka-zdroj-en.html":"rabka-zdroj.html"};if(map[current])return map[current];return en?current.replace("-en.html",".html"):current.replace(".html","-en.html");}
  function link(href,label,note,iconClass){const a=document.createElement("a");a.className="geh-menu-link";a.href=href;a.innerHTML=`<span><strong>${label}</strong><small>${note||""}</small></span><span class="geh-pill"><i class="${iconClass||"fa-solid fa-arrow-up-right-from-square"}"></i></span>`;return a;}
  function section(title){const box=document.createElement("section");box.className="geh-menu-section";const h=document.createElement("h2");h.className="geh-menu-title";h.textContent=title;box.appendChild(h);return box;}
  function buildNav(){if(document.querySelector(".geh-nav-shell"))return;const en=isEnglishPage();const homePath=en?"index-en.html":"index.html";const jewishPath=en?"jewish-poland-en.html":"jewish-poland.html";const jewishTimelinePath=en?"jewish-timeline-en.html":"jewish-timeline.html";const folklorePath=en?"folklore-archive-en.html":"folklore-archive.html";const languagePath=getLanguageTarget(en);const nav=document.createElement("div");nav.className="geh-nav-shell";nav.innerHTML=`<div class="geh-nav-inner"><a class="geh-brand" href="${withPrefix(homePath)}" aria-label="${en?"Home":"דף הבית"}"><span class="geh-brand-mark"><i class="fa-solid fa-house"></i></span><span>${en?"Poland Research Hub":"מרכז מחקר פולין"}</span></a><div style="display:flex;align-items:center;gap:.55rem;"><a class="geh-menu-button" href="${languageHref(languagePath)}" aria-label="${en?"Switch to Hebrew":"Switch to English"}" style="text-decoration:none;"><i class="fa-solid fa-language"></i><span>${en?"עברית":"English"}</span></a><button class="geh-menu-button" type="button" aria-expanded="false" aria-controls="gehDropdownMenu"><i class="fa-solid fa-bars"></i><span>${en?"Open navigation":"פתח ניווט"}</span><i class="fa-solid fa-chevron-down" aria-hidden="true"></i></button></div></div><div class="geh-dropdown" id="gehDropdownMenu" hidden><div class="geh-menu-scroll"><div class="geh-menu-grid"></div></div></div>`;document.body.classList.add("geh-old-header-hidden");document.body.insertBefore(nav,document.body.firstChild);const grid=nav.querySelector(".geh-menu-grid");
    const main=section(en?"Main pages":"עמודים ראשיים");main.appendChild(link(withPrefix(homePath),en?"Home":"ראשי",en?"Research index":"אינדקס המחקר","fa-solid fa-house"));main.appendChild(link(withPrefix(en?"poland-en.html":"poland.html"),en?"Poland":"פולין",en?"Country research":"מחקר מדינה","fa-solid fa-flag"));main.appendChild(link(withPrefix("timeline.html"),en?"Timeline":"ציר זמן",en?"Interactive history":"היסטוריה אינטראקטיבית","fa-solid fa-clock-rotate-left"));main.appendChild(link(withPrefix(jewishPath),en?"Jewish Poland":"יהדות פולין",en?"Jewish heritage":"מורשת יהודית","fa-solid fa-star-of-david"));main.appendChild(link(withPrefix(jewishTimelinePath),en?"Jewish Timeline":"ציר זמן יהודי",en?"Expanded Jewish timeline":"ציר זמן יהודי מורחב","fa-solid fa-timeline"));main.appendChild(link(withPrefix(folklorePath),en?"Folklore Archive":"ארכיון פולקלור",en?"Stories, proverbs and memory":"סיפורי עם, פתגמים וזיכרון","fa-solid fa-masks-theater"));main.appendChild(link(withPrefix(en?"sources-en.html":"sources.html"),en?"Sources":"מקורות",en?"Credits and references":"קרדיטים ומקורות","fa-solid fa-link"));main.appendChild(link(withPrefix(en?"about-en.html":"about.html"),en?"About":"אודות",en?"Project information":"מידע על הפרויקט","fa-solid fa-circle-info"));
    const cities=section(en?"City research pages":"דפי מחקר ערים");(en?cityLinksEn:cityLinksHe).forEach(([path,label,note])=>cities.appendChild(link(cityPath(path),label,note,"fa-solid fa-city")));const language=section(en?"Language":"שפה");language.appendChild(link(languageHref(languagePath),en?"עברית":"English",en?"Switch to Hebrew":"מעבר לאנגלית","fa-solid fa-language"));language.appendChild(link("#top",en?"Top of page":"ראש הדף",en?"Return to the beginning":"חזרה לתחילת העמוד","fa-solid fa-arrow-up"));grid.appendChild(main);grid.appendChild(cities);grid.appendChild(language);
    const button=nav.querySelector("button.geh-menu-button");const dropdown=nav.querySelector(".geh-dropdown");function setOpen(open){dropdown.hidden=!open;button.setAttribute("aria-expanded",String(open));button.querySelector("span").textContent=open?(en?"Close navigation":"סגור ניווט"):(en?"Open navigation":"פתח ניווט");}button.addEventListener("click",function(){setOpen(dropdown.hidden);});document.addEventListener("click",function(event){if(!nav.contains(event.target))setOpen(false);});document.addEventListener("keydown",function(event){if(event.key==="Escape")setOpen(false);});}
  function injectRabkaIndexCard(){
    const current=location.pathname.split('/').pop()||'index.html';
    if(current!=="index.html"&&current!=="index-en.html")return;
    if(document.querySelector('a[href="cities/rabka-zdroj.html"],a[href="cities/rabka-zdroj-en.html"]'))return;
    const en=current==="index-en.html";
    const grid=document.querySelector('#cities .grid');
    if(!grid)return;
    const a=document.createElement('a');
    a.href=en?'cities/rabka-zdroj-en.html':'cities/rabka-zdroj.html';
    a.className='city-card';
    a.style.setProperty('--from','#16a34a');
    a.style.setProperty('--to','#0ea5e9');
    a.innerHTML=`<div class="city-content"><span class="icon-bubble"><i class="fa-solid fa-spa text-2xl"></i></span><div><h3 class="text-2xl font-black">${en?'Rabka-Zdrój':'ראבקה־זדרוי'}</h3><p class="text-white/85 text-sm">${en?'Spa town and Jewish memory':'עיירת מרפא וזיכרון יהודי'}</p></div></div>`;
    const sources=grid.querySelector(en?'a[href="sources-en.html"]':'a[href="sources.html"]');
    if(sources)grid.insertBefore(a,sources);else grid.appendChild(a);
  }
  function loadFullFolkloreStories(){
    const isHe=location.pathname.endsWith("folklore-archive.html");
    const isEn=location.pathname.endsWith("folklore-archive-en.html");
    if(!isHe&&!isEn)return;
    const script=document.createElement("script");
    script.src=isEn?"assets/js/folklore-stories-full-en.js?v=20260522j":"assets/js/folklore-stories-full.js?v=20260522h";
    script.onload=function(){
      const data=isEn?window.FOLKLORE_STORIES_FULL_EN:window.FOLKLORE_STORIES_FULL;
      if(!data)return;
      const modal=document.getElementById('storyModal'),title=document.getElementById('modalTitle'),cat=document.getElementById('modalCategory'),body=document.getElementById('modalBody');
      if(!modal||!title||!cat||!body)return;
      document.querySelectorAll('[data-story]').forEach(function(btn){btn.addEventListener('click',function(){const s=data[btn.dataset.story];if(!s)return;setTimeout(function(){cat.textContent=s.cat;title.textContent=s.title;body.innerHTML=s.body;modal.classList.add('open');document.body.style.overflow='hidden';},0);});});
    };
    document.head.appendChild(script);
  }
  if(document.readyState==="loading"){document.addEventListener("DOMContentLoaded",function(){buildNav();injectRabkaIndexCard();loadFullFolkloreStories();});}else{buildNav();injectRabkaIndexCard();loadFullFolkloreStories();}
})();