// Shared header/footer + page behaviors
(function () {
  const C = window.CLUB;
  const page = document.body.dataset.page;

  const ICONS = {
    sparkles: '<path d="M9.94 14.06 8 20l-1.94-5.94L0 12l6.06-1.94L8 4l1.94 6.06L16 12z" transform="translate(2 -1) scale(.85)"/><path d="M19 15v4M17 17h4"/>',
    heart: '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>',
    users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
    pin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
    arrow: '<path d="M5 12h14M12 5l7 7-7 7"/>',
    clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
    menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
    x: '<path d="M18 6 6 18M6 6l12 12"/>',
  };
  const icon = (n) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[n]}</svg>`;
  window.icon = icon;

  const NAV = [["index.html", "Home", "home"], ["events.html", "Events", "events"], ["impact.html", "Our impact", "impact"], ["about.html", "About us", "about"]];

  // ----- Header -----
  const header = document.createElement("header");
  header.className = "site-header";
  header.innerHTML = `
    <div class="container">
      <a class="brand" href="index.html">
        <span class="brand-logo"><img src="assets/bee.svg" alt=""></span>
        <span><div class="brand-kicker">Mission San Jose</div><div class="brand-name">Key Club</div></span>
      </a>
      <nav class="nav" id="nav">
        ${NAV.map(([h, t, k]) => `<a href="${h}"${k === page ? ' aria-current="page"' : ""}>${t}</a>`).join("")}
      </nav>
      <a class="btn btn-primary header-cta" href="join.html">Join the hive</a>
      <button class="menu-toggle" aria-label="Open menu" aria-expanded="false" aria-controls="nav">${icon("menu")}</button>
    </div>`;
  document.body.prepend(header);
  const toggle = header.querySelector(".menu-toggle");
  const nav = header.querySelector(".nav");
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open);
    toggle.innerHTML = icon(open ? "x" : "menu");
  });
  if (!nav.querySelector('a[href="join.html"]')) {
    const j = document.createElement("a");
    j.href = "join.html"; j.textContent = "Join the hive"; j.className = "nav-join";
    if (page === "join") j.setAttribute("aria-current", "page");
    nav.appendChild(j);
  }
  // hide mobile-only join link on desktop
  const style = document.createElement("style");
  style.textContent = "@media (min-width:1081px){.nav-join{display:none!important}}";
  document.head.appendChild(style);

  // ----- Footer -----
  const footer = document.createElement("footer");
  footer.className = "site-footer";
  footer.innerHTML = `
    <div class="container">
      <div>
        <div class="footer-brand"><span class="brand-logo"><img src="assets/bee.svg" alt=""></span>MSJ Key Club</div>
        <p>Student-led service that strengthens our school and our community.</p>
      </div>
      <div>
        <h4 class="footer-title">Explore</h4>
        <ul class="footer-links">
          <li><a href="events.html">Events</a></li><li><a href="impact.html">Our impact</a></li><li><a href="about.html">About us</a></li>
        </ul>
      </div>
      <div class="footer-meet">
        <h4 class="footer-title">Meet with us</h4>
        <strong>${C.meeting.day}</strong><div>${C.meeting.place}</div>
      </div>
    </div>`;
  document.body.appendChild(footer);

  // ----- Fill [data-icon] placeholders -----
  document.querySelectorAll("[data-icon]").forEach((el) => (el.innerHTML = icon(el.dataset.icon)));
  // ----- Fill [data-link] hrefs from data.js -----
  document.querySelectorAll("[data-link]").forEach((el) => (el.href = C.links[el.dataset.link] || "#"));
  document.querySelectorAll("[data-text]").forEach((el) => {
    const v = el.dataset.text.split(".").reduce((o, k) => (o ? o[k] : ""), C);
    if (v) el.textContent = v;
  });

  // ----- Reveal on scroll -----
  const io = new IntersectionObserver((entries) => entries.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
  }), { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
})();

// ----- Helpers used by individual pages -----
window.KC = {
  esc: (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])),
  parseDate: (iso) => { const [y, m, d] = iso.split("-").map(Number); return new Date(y, m - 1, d); },
  upcoming: () => {
    const today = new Date(); today.setHours(0, 0, 0, 0);
    return window.CLUB.events
      .filter((e) => KC.parseDate(e.date) >= today)
      .sort((a, b) => KC.parseDate(a.date) - KC.parseDate(b.date));
  },
  eventCard: (e) => {
    const d = KC.parseDate(e.date);
    const m = d.toLocaleString("en-US", { month: "short" });
    const wd = d.toLocaleString("en-US", { weekday: "long" });
    return `<article class="event">
      <div class="event-date"><div class="m">${m}</div><div class="d">${d.getDate()}</div></div>
      <div>
        <span class="tag">${KC.esc(e.category)}</span>
        <h3>${KC.esc(e.title)}</h3>
        <div class="meta">
          <span>${icon("clock")}${wd} · ${KC.esc(e.time)}</span>
          <span>${icon("pin")}${KC.esc(e.place)}</span>
          ${e.hours ? `<span>${icon("heart")}${e.hours} service hrs</span>` : ""}
        </div>
        <p style="color:var(--muted);margin:12px 0 0">${KC.esc(e.description)}</p>
      </div>
      <a class="btn btn-outline" href="${KC.calLink(e)}" target="_blank" rel="noopener">Add to calendar</a>
    </article>`;
  },
  calLink: (e) => {
    const d = e.date.replace(/-/g, "");
    const next = KC.parseDate(e.date); next.setDate(next.getDate() + 1);
    const end = `${next.getFullYear()}${String(next.getMonth() + 1).padStart(2, "0")}${String(next.getDate()).padStart(2, "0")}`;
    const p = new URLSearchParams({ action: "TEMPLATE", text: `MSJ Key Club: ${e.title}`, dates: `${d}/${end}`, details: `${e.time} — ${e.description}`, location: e.place });
    return `https://calendar.google.com/calendar/render?${p}`;
  },
  countUp: (el, target, prefix = "", suffix = "") => {
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fmt = (n) => prefix + Math.round(n).toLocaleString() + suffix;
    if (reduce) { el.textContent = fmt(target); return; }
    const start = performance.now(), dur = 1400;
    const step = (t) => {
      const p = Math.min(1, (t - start) / dur);
      el.textContent = fmt(target * (1 - Math.pow(1 - p, 3)));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  },
};
