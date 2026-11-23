/* Client-side rendering for the static Masters FC site. Keep content in data.js. */
(() => {
  "use strict";
  const $ = (selector, root = document) => root.querySelector(selector);
  const escapeHTML = value => String(value ?? "").replace(/[&<>"']/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[char]));
  const safeURL = value => {
    const raw = String(value ?? "").trim();
    if (!raw || raw === "#") return raw;
    try {
      const url = new URL(raw, window.location.href);
      if (url.protocol === "https:" || (url.origin === window.location.origin && !raw.startsWith("//"))) return escapeHTML(raw);
    } catch (_) {}
    return "";
  };
  const text = escapeHTML;
  const club = D.club;
  const date = (value, weekday = false) => {
    const parsed = new Date(`${value}T12:00:00`);
    if (Number.isNaN(parsed.getTime())) return "Date TBC";
    return parsed.toLocaleDateString("en-GB", { ...(weekday ? {weekday:"short"} : {}), day:"numeric", month:"short", ...(weekday ? {year:"numeric"} : {}) });
  };
  const resultType = match => match.gf > match.ga ? "win" : match.gf < match.ga ? "loss" : "draw";
  const resultLabel = {win:"Win", loss:"Loss", draw:"Draw"};
  const results = () => [...(D.results || [])].sort((a,b) => b.d.localeCompare(a.d));
  const fixtures = () => [...(D.upcoming || [])].sort((a,b) => a.d.localeCompare(b.d));
  const scoreline = match => match.ha === "H" ? [club.name, `${match.gf} – ${match.ga}`, match.opp] : [match.opp, `${match.ga} – ${match.gf}`, club.name];
  const initials = name => String(name || "MF").trim().split(/\s+/).map(part => part[0] || "").join("").slice(0,2).toUpperCase();
  const photoURL = key => safeURL(D.photos?.[key]);
  const photoSlot = (key, label) => {
    const url = photoURL(key);
    return url ? `<img class="photo" src="${url}" alt="${text(label)}" loading="lazy">` : `<button class="photo-slot" type="button" data-pick="${text(key)}" aria-label="Preview a photo for ${text(label)}"><span>Add photo<br>${text(label)}</span></button>`;
  };
  const partnerCards = () => `<div class="partners">${(D.sponsors || []).map(s => {
    const logo = safeURL(s.logo);
    return `<div class="partner"><span class="partner-name">${logo ? `<img src="${logo}" alt="${text(s.n)}" loading="lazy">` : text(s.n)}</span><small>${text(s.tier)}</small></div>`;
  }).join("")}</div>`;
  const pitch = `<svg class="pitch" viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice" fill="none" stroke="#fff" stroke-width="3" aria-hidden="true"><rect x="30" y="30" width="740" height="440"/><line x1="400" y1="30" x2="400" y2="470"/><circle cx="400" cy="250" r="70"/><rect x="30" y="140" width="110" height="220"/><rect x="660" y="140" width="110" height="220"/></svg>`;
  const matchRow = (match, isResult) => {
    const teams = isResult ? scoreline(match) : [match.ha === "H" ? club.name : match.opp, "vs", match.ha === "H" ? match.opp : club.name];
    const time = isResult ? "FT" : (match.t || "Time TBC");
    return `<article class="match-row"><div><strong>${text(date(match.d))}</strong><div class="muted">${text(time)}</div></div><div><div class="match-teams"><strong>${text(teams[0])}</strong><span class="match-score">${text(teams[1])}</span><strong>${text(teams[2])}</strong></div><div class="muted">${text(match.c || "Competition TBC")} · ${text(match.v || "Venue TBC")}</div></div>${isResult ? `<div class="result ${resultType(match)}">${resultLabel[resultType(match)]}</div>` : ""}</article>`;
  };
  const newsCard = (item, index) => `<button class="card interactive news-card" type="button" data-news="${index}" aria-label="Read: ${text(item.t)}"><span class="news-image">${photoSlot(item.img || "train", "News photo")}</span><span class="news-copy"><span class="badge">${text(item.cat)}</span><span class="news-title">${text(item.t)}</span><span class="muted">${text(date(item.d, true))} · ${text(item.s)}</span></span></button>`;
  const recent = results();
  const storyList = () => (D.news || []).map(newsCard).join("");
  const renderers = {
    home() {
      const next = fixtures()[0];
      const latest = recent[0];
      const score = latest ? scoreline(latest) : [club.name,"–","Opponent TBC"];
      return `<section class="hero">${pitch}<div class="hero-bg">${photoURL("hero") ? `<img class="photo" src="${photoURL("hero")}" alt="Masters FC match action" fetchpriority="high">` : ""}</div><div class="hero-shade"></div><div class="hero-crest" aria-hidden="true">${roundel(170)}</div><div class="container hero-content"><span class="badge accent">${text(club.league)} · ${text(club.season)}</span><h1>${text(club.tagline)}</h1><p>${text(club.intro)}</p><a class="button" href="#fixtures">Match centre</a><a class="button ghost" href="#news">Latest news</a></div></section>
        <section><div class="container grid cols-2 reveal"><article class="card card-pad"><span class="badge">Next fixture</span>${next ? `<div class="match-teams"><strong>${text(next.ha === "H" ? club.name : next.opp)}</strong><span>vs</span><strong>${text(next.ha === "H" ? next.opp : club.name)}</strong></div><p>${text(date(next.d,true))} · ${text(next.t || "Time TBC")}</p><p class="muted">${text(next.v || "Venue TBC")} · ${text(next.c || "Competition TBC")}</p>` : `<h3>To be confirmed</h3><p class="muted">No upcoming fixture has been published yet.</p>`}</article><article class="card card-pad"><span class="badge">Latest result</span><div class="match-teams"><strong>${text(score[0])}</strong><span class="match-score">${text(score[1])}</span><strong>${text(score[2])}</strong></div><p>${latest ? text(date(latest.d,true)) : "No result published"}</p>${latest ? `<p class="muted">${text(latest.v)} · ${text(latest.c)}</p>` : ""}<a class="button dark" href="#news">Read the report</a></article></div></section>
        <section class="section-dark"><div class="container stats reveal">${(D.stats || []).map(stat => `<div><strong class="stat-value">${text(stat[0])}</strong>${text(stat[1])}</div>`).join("")}</div></section>
        <section class="section-soft"><div class="container reveal"><h2>Our partners</h2>${partnerCards()}<p><a class="button dark" href="#partners">Partner with us</a></p></div></section>
        <section><div class="container reveal"><h2>Recent form</h2><p>${recent.slice(0,5).map(match => `<span class="form-chip ${resultType(match)}" title="${text(resultLabel[resultType(match)])} vs ${text(match.opp)}">${resultType(match)[0].toUpperCase()}</span>`).join("") || "No results published yet."}<span class="muted"> Most recent first</span></p></div></section>
        <section class="section-soft"><div class="container grid cols-2 reveal align-center"><div><h2>The club</h2><p>${text((D.about || [""])[0])}</p><a class="button dark" href="#about">Our story</a></div><div class="card aspect">${photoSlot("stadium","Stadium atmosphere")}</div></div></section>
        <section><div class="container reveal"><h2>Latest news</h2><div class="grid cols-3 news-grid">${(D.news || []).slice(0,3).map(newsCard).join("")}</div></div></section>`;
    },
    fixtures() { return `<div class="toolbar"><div class="container"><h1>Match Centre</h1><p>${text(club.league)} · ${text(club.season)}</p></div></div><section><div class="container reveal"><div class="tabs" role="tablist" aria-label="Matches"><button class="tab-button" type="button" role="tab" id="tab-results" aria-controls="panel-results" aria-selected="true" data-tab="results">Results</button><button class="tab-button" type="button" role="tab" id="tab-fixtures" aria-controls="panel-fixtures" aria-selected="false" data-tab="fixtures">Fixtures</button></div><div id="panel-results" role="tabpanel" aria-labelledby="tab-results">${recent.map(match => matchRow(match,true)).join("") || `<p class="empty-state">No results published yet.</p>`}</div><div id="panel-fixtures" role="tabpanel" aria-labelledby="tab-fixtures" hidden>${fixtures().map(match => matchRow(match,false)).join("") || `<p class="empty-state">No upcoming fixtures published yet.</p>`}</div></div></section>`; },
    squad() { return `<div class="toolbar"><div class="container"><h1>The Squad</h1><p>Meet the players and coaching team.</p></div></div><section><div class="container reveal"><label class="visually-hidden" for="player-search">Search players</label><input id="player-search" class="search" type="search" placeholder="Search players" autocomplete="off"><div class="grid cols-4" id="players-grid"></div><h2 class="subheading">Coaching team</h2><div class="grid cols-4">${(D.staff || []).map(person => `<article class="card">${person.photo && safeURL(person.photo) ? `<div class="player-photo"><img class="photo" src="${safeURL(person.photo)}" alt="${text(person.name)}" loading="lazy"></div>` : `<div class="player-photo"><span class="initials">${text(initials(person.name))}</span></div>`}<div class="card-pad"><strong>${text(person.name)}</strong><div class="muted">${text(person.role)}</div></div></article>`).join("")}</div></div></section>`; },
    news() { return `<div class="toolbar"><div class="container"><h1>News</h1><p>Reports and club updates.</p></div></div><section><div class="container grid cols-2 reveal news-grid">${storyList()}</div></section>`; },
    about() { return `<div class="toolbar"><div class="container"><h1>About the club</h1></div></div><section><div class="container grid cols-2 reveal align-center"><div><h2>Our story</h2>${(D.about || []).map(paragraph => `<p>${text(paragraph)}</p>`).join("")}</div><div class="card aspect">${photoSlot("about","Team photo")}</div></div></section><section class="section-soft"><div class="container grid cols-2 reveal"><div class="card aspect">${photoSlot("train","Training session")}</div><div class="card aspect">${photoSlot("celebrate","Match action")}</div></div></section><section><div class="container"><h2>Home ground</h2><p><strong>${text(club.ground)}</strong></p></div></section>`; },
    partners() { return `<div class="toolbar"><div class="container"><h1>Partners</h1><p>The businesses that stand behind ${text(club.name)}.</p></div></div><section><div class="container reveal">${partnerCards()}<h2 class="subheading">Partner with ${text(club.name)}</h2><p>Get in touch to discuss matchday, kit, community and digital partnership opportunities.</p><a class="button dark" href="#contact">Enquire now</a></div></section>`; },
    contact() { return `<div class="toolbar"><div class="container"><h1>Contact</h1></div></div><section><div class="container grid cols-2 reveal"><div><h2>Club office</h2><p>${text(club.city)}<br>${text(club.phone)}<br>${text(club.email)}</p><h3>Follow</h3><p>${Object.entries(club.social || {}).map(([name,url]) => `<a href="${safeURL(url) || "#"}"${url.startsWith("https://") ? ` target="_blank" rel="noopener noreferrer"` : ""}>${text(name)}</a>`).join(" · ")}</p><p class="muted">Contact details marked TBC need confirmation.</p></div><form id="contact-form"><label for="contact-name">Name</label><input id="contact-name" name="name" autocomplete="name" maxlength="100" required><label for="contact-email">Email</label><input id="contact-email" name="email" type="email" autocomplete="email" maxlength="254" required><label for="contact-message">Message</label><textarea id="contact-message" name="message" rows="5" maxlength="3000" required></textarea><button class="button" type="submit">Send message</button><p class="muted" id="form-status" role="status" aria-live="polite">This static demo does not transmit or store messages.</p></form></div></section>`; }
  };
  const pages = [["home","Home"],["fixtures","Match Centre"],["squad","Squad"],["news","News"],["about","About"],["partners","Partners"],["contact","Contact"]];
  function playerCards(filter = "") {
    const grid = $("#players-grid"); if (!grid) return;
    const matches = (D.squad || []).filter(player => `${player.name} ${player.role || ""}`.toLowerCase().includes(filter));
    grid.innerHTML = matches.map(player => `<article class="card"><div class="player-photo">${player.photo && safeURL(player.photo) ? `<img class="photo" src="${safeURL(player.photo)}" alt="${text(player.name)}" loading="lazy">` : `<span class="initials">${text(initials(player.name))}</span>`}${player.n ? `<span class="player-number">${text(player.n)}</span>` : ""}</div><div class="card-pad"><strong>${text(player.name)}</strong><div class="muted">${text(player.role || "")}</div></div></article>`).join("") || `<p class="empty-state">No players match that search.</p>`;
  }
  function drawHeader() {
    $("#hl").innerHTML = shield(36,"header");
    $("#ut").innerHTML = `<span><strong aria-hidden="true">●</strong> ${text(club.league)} ${text(club.season)} · <span class="motto">${text(club.motto)}</span></span><span>${Object.entries(club.social || {}).map(([name,url]) => `<a href="${safeURL(url) || "#"}"${String(url).startsWith("https://") ? ` target="_blank" rel="noopener noreferrer"` : ""}>${text(name)}</a>`).join("")}</span>`;
    const tickerItems = recent.map(match => { const [home,score,away] = scoreline(match); return `<span>${text(home)} <b>${text(score)}</b> ${text(away)}</span>`; }).join("");
    $("#tick").innerHTML = tickerItems ? `<div class="ticker-track" aria-hidden="true"><div class="ticker-group">${tickerItems}</div><div class="ticker-group">${tickerItems}</div></div>` : "";
    $("#foot").innerHTML = `<div class="footer-partners"><h4>Our partners</h4>${partnerCards()}</div><div>${roundel(88)}</div><div><strong>${text(club.name)}</strong><br>${text(club.city)}<br><span class="motto">${text(club.motto)}</span></div><div><h4>Explore</h4>${pages.map(([id,label]) => `<a href="#${id}">${text(label)}</a>`).join("")}</div><div class="footer-note">Unofficial fan-built club website. Verify match and club information with official sources.</div>`;
  }
  function wirePage(page) {
    document.querySelectorAll("[data-tab]").forEach(button => button.addEventListener("click", () => {
      document.querySelectorAll("[data-tab]").forEach(tab => tab.setAttribute("aria-selected", String(tab === button)));
      const resultsPanel = $("#panel-results"), fixturesPanel = $("#panel-fixtures");
      resultsPanel.hidden = button.dataset.tab !== "results";
      fixturesPanel.hidden = button.dataset.tab !== "fixtures";
    }));
    const search = $("#player-search"); if (search) { playerCards(); search.addEventListener("input", event => playerCards(event.target.value.trim().toLowerCase())); }
    const dialog = $("#dlg");
    document.querySelectorAll("[data-news]").forEach(card => card.addEventListener("click", event => {
      if (event.target.closest("[data-pick]")) return;
      const item = D.news[Number(card.dataset.news)]; if (!item) return;
      const sourceURL = safeURL(item.u);
      dialog.innerHTML = `<span class="badge">${text(item.cat)}</span><h2 id="dialog-title" class="subheading">${text(item.t)}</h2><p class="muted">${text(date(item.d,true))}</p><p>${text(item.b)}</p>${sourceURL ? `<p class="source"><a href="${sourceURL}" target="_blank" rel="noopener noreferrer">Source: ${text(item.s)}</a></p>` : `<p class="muted">Source: ${text(item.s)}</p>`}<button class="button dark" type="button" data-close>Close</button>`;
      if (typeof dialog.showModal === "function") dialog.showModal(); else card.focus();
    }));
    dialog.addEventListener("click", event => { if (event.target.matches("[data-close]")) dialog.close(); });
    dialog.addEventListener("click", event => { if (event.target === dialog) dialog.close(); });
    document.querySelectorAll("[data-pick]").forEach(button => button.addEventListener("click", () => { window._photoTarget = button; $("#pf").click(); }));
    const form = $("#contact-form"); if (form) form.addEventListener("submit", event => { event.preventDefault(); $("#form-status").textContent = "This site has no contact backend configured. Your message was not sent or stored."; });
    if ("IntersectionObserver" in window && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add("visible"); observer.unobserve(entry.target); } }), {threshold:.08});
      document.querySelectorAll(".reveal").forEach(element => observer.observe(element));
    } else document.querySelectorAll(".reveal").forEach(element => element.classList.add("visible"));
  }
  function render() {
    const requested = (location.hash || "#home").slice(1);
    const page = Object.hasOwn(renderers, requested) ? requested : "home";
    $("#app").innerHTML = renderers[page]();
    $("#nav").innerHTML = pages.map(([id,label]) => `<a href="#${id}"${id === page ? ` aria-current="page"` : ""}>${text(label)}</a>`).join("");
    $("#nav").classList.remove("open"); $("#mb").setAttribute("aria-expanded","false");
    window.scrollTo({top:0,behavior:matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth"});
    wirePage(page);
  }
  $("#mb").addEventListener("click", () => { const expanded = $("#mb").getAttribute("aria-expanded") === "true"; $("#mb").setAttribute("aria-expanded",String(!expanded)); $("#nav").classList.toggle("open",!expanded); });
  $("#nav").addEventListener("click", event => { if (event.target.closest("a")) { $("#nav").classList.remove("open"); $("#mb").setAttribute("aria-expanded","false"); } });
  $("#pf").addEventListener("change", event => {
    const file = event.target.files?.[0], target = window._photoTarget;
    if (!file || !target) return;
    if (!file.type.startsWith("image/") || file.size > 5 * 1024 * 1024) { target.textContent = "Choose an image smaller than 5 MB."; event.target.value = ""; return; }
    const objectURL = URL.createObjectURL(file);
    const image = document.createElement("img"); image.className = "photo"; image.alt = target.getAttribute("aria-label") || "Selected photo preview"; image.src = objectURL;
    target.replaceWith(image); window._photoTarget = null; event.target.value = "";
  });
  window.addEventListener("hashchange", render);
  drawHeader(); render();
})();
