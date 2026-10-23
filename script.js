// Joseph Waweru portfolio — page behaviour.
// Content lives in data/content.js; this file only renders it and wires up interactions.
import { profile, education, skills, foundations, projects, approach } from "./data/content.js";

const $ = (sel, root = document) => root.querySelector(sel);
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Escape text before inserting it as HTML.
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const isUrl = (u) => typeof u === "string" && /^https?:\/\//.test(u.trim());

/* ---------- Render: education ---------- */
function renderEducation() {
  const el = $("#education-list");
  if (!el) return;
  el.innerHTML = education
    .filter((e) => e.degree)
    .map((e) => {
      const meta = [e.institution, e.years].filter(Boolean).map(esc).join(", ");
      return `
      <div class="edu__item">
        <span class="edu__icon"><i data-lucide="graduation-cap" aria-hidden="true"></i></span>
        <div>
          <p class="edu__degree">${esc(e.degree)}</p>
          ${meta ? `<p class="edu__meta">${meta}</p>` : ""}
        </div>
      </div>`;
    })
    .join("");
}

/* ---------- Render: skills ---------- */
function renderSkills() {
  $("#skills-list").innerHTML = skills
    .map(
      (g) => `
      <article class="skill reveal">
        <h3><i data-lucide="${esc(g.icon)}" aria-hidden="true"></i>${esc(g.group)}</h3>
        <ul>${g.items.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>
      </article>`
    )
    .join("");
}

/* ---------- Render: degree foundations ---------- */
function renderFoundations() {
  const el = $("#foundations-list");
  if (!el) return;
  el.innerHTML = foundations
    .map(
      (g) => `
      <article class="found__card reveal">
        <h4><i data-lucide="${esc(g.icon)}" aria-hidden="true"></i>${esc(g.group)}</h4>
        <ul>${g.items.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>
      </article>`
    )
    .join("");
}

/* ---------- Render: projects ---------- */
function linkButtons(p) {
  const cls = "btn btn--ghost";
  const out = [];
  if (isUrl(p.repo)) out.push(`<a class="${cls}" href="${esc(p.repo)}" target="_blank" rel="noopener"><i data-lucide="github" aria-hidden="true"></i> GitHub</a>`);
  if (isUrl(p.demo)) out.push(`<a class="${cls}" href="${esc(p.demo)}" target="_blank" rel="noopener"><i data-lucide="external-link" aria-hidden="true"></i> Live demo</a>`);
  return out.join("");
}

function renderProjects() {
  $("#projects-list").innerHTML = projects
    .map((p) => {
      const live = /live|shipped/i.test(p.status);
      return `
      <article class="project reveal">
        <div class="project__top">
          <span class="project__icon"><i data-lucide="${esc(p.icon)}" aria-hidden="true"></i></span>
          <p class="badge${live ? " is-live" : ""}">${esc(p.status)}</p>
        </div>
        <h3>${esc(p.title)}</h3>
        <p class="project__summary">${esc(p.summary)}</p>
        <div class="tags">${p.tags.map((t) => `<span>${esc(t)}</span>`).join("")}</div>
        <div class="project__actions">
          <button class="btn btn--primary" type="button" data-project="${esc(p.id)}">View details</button>
          ${linkButtons(p)}
        </div>
      </article>`;
    })
    .join("");
}

/* ---------- Render: approach ---------- */
function renderApproach() {
  $("#approach-list").innerHTML = approach
    .map((s) => `<li class="reveal"><h3>${esc(s.title)}</h3><p>${esc(s.text)}</p></li>`)
    .join("");
}

/* ---------- Profile-driven bits ---------- */
function applyProfile() {
  const cv = $("#cv-btn");
  if (profile.cvPath) {
    cv.href = profile.cvPath;
    cv.hidden = false;
  }
  const socials = [];
  if (isUrl(profile.links.github)) socials.push(`<a class="btn btn--ghost" href="${esc(profile.links.github)}" target="_blank" rel="noopener"><i data-lucide="github" aria-hidden="true"></i> GitHub</a>`);
  if (isUrl(profile.links.linkedin)) socials.push(`<a class="btn btn--ghost" href="${esc(profile.links.linkedin)}" target="_blank" rel="noopener"><i data-lucide="linkedin" aria-hidden="true"></i> LinkedIn</a>`);
  $("#socials").innerHTML = socials.join("");
  $("#year").textContent = new Date().getFullYear();
}

/* ---------- Mobile navigation ---------- */
function setupNav() {
  const toggle = $(".nav__toggle");
  const links = $("#nav-links");
  const close = () => {
    links.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open menu");
  };
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });
  links.addEventListener("click", (e) => { if (e.target.closest("a")) close(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });

  // Highlight the section currently in view.
  const navLinks = [...links.querySelectorAll('a[href^="#"]')];
  const sections = navLinks.map((a) => $(a.getAttribute("href"))).filter(Boolean);
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        navLinks.forEach((a) => a.classList.toggle("is-active", a.getAttribute("href") === "#" + en.target.id));
      });
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );
  sections.forEach((s) => io.observe(s));
}

/* ---------- Project details dialog ---------- */
function setupModal() {
  const modal = $("#project-modal");
  let lastFocus = null;
  document.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-project]");
    if (!btn) return;
    const p = projects.find((x) => x.id === btn.dataset.project);
    if (!p) return;
    lastFocus = btn;
    $("#modal-status").textContent = p.status;
    $("#modal-title").textContent = p.title;
    $("#modal-summary").textContent = p.summary;
    $("#modal-features").innerHTML = p.features.map((f) => `<li>${esc(f)}</li>`).join("");
    $("#modal-tags").innerHTML = p.tags.map((t) => `<span>${esc(t)}</span>`).join("");
    const links = linkButtons(p);
    $("#modal-links").innerHTML = links || `<p class="modal__note">Code and demo links will be added when this project is published.</p>`;
    refreshIcons();
    if (typeof modal.showModal === "function") modal.showModal();
    else modal.setAttribute("open", "");
  });
  const close = () => { modal.close ? modal.close() : modal.removeAttribute("open"); };
  $("#modal-close").addEventListener("click", close);
  modal.addEventListener("click", (e) => { if (e.target === modal) close(); });
  modal.addEventListener("close", () => lastFocus && lastFocus.focus());
}

/* ---------- Copy email ---------- */
function setupCopy() {
  const btn = $("#copy-btn");
  const status = $("#copy-status");
  const label = btn.querySelector("span");
  btn.addEventListener("click", async () => {
    let ok = false;
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(profile.email);
        ok = true;
      }
    } catch (_) { /* fall through to the legacy method */ }
    if (!ok) {
      const ta = document.createElement("textarea");
      ta.value = profile.email;
      ta.setAttribute("readonly", "");
      ta.style.position = "absolute"; ta.style.left = "-9999px";
      document.body.appendChild(ta);
      ta.select();
      try { ok = document.execCommand("copy"); } catch (_) { ok = false; }
      ta.remove();
    }
    status.textContent = ok ? `Copied ${profile.email}` : `Couldn't copy automatically. The email is ${profile.email}`;
    if (ok) { label.textContent = "Copied"; setTimeout(() => (label.textContent = "Copy email"), 2000); }
  });
}

/* ---------- Hero terminal: plays once on load ---------- */
function playTerminal() {
  const el = $("#term");
  if (!el || reduceMotion) return;
  const lines = [
    { t: '$ ask "What is our refund policy?"', cls: "c" },
    { t: "→ api      POST /v1/answer        200", cls: "" },
    { t: "→ retrieve 4 passages from policies/", cls: "" },
    { t: "→ model    grounded answer ready", cls: "" },
    { t: "✓ done     1 source cited", cls: "ok" },
  ];
  el.innerHTML = "";
  let i = 0;
  const next = () => {
    if (i >= lines.length) { el.insertAdjacentHTML("beforeend", '<span class="caret"></span>'); return; }
    const { t, cls } = lines[i++];
    const span = document.createElement("span");
    if (cls) span.className = cls;
    el.appendChild(span);
    el.appendChild(document.createTextNode("\n"));
    let c = 0;
    const speed = i === 1 ? 32 : 12;
    const type = () => {
      span.textContent = t.slice(0, ++c);
      if (c < t.length) setTimeout(type, speed);
      else setTimeout(next, i === 1 ? 380 : 260);
    };
    type();
  };
  setTimeout(next, 500);
}

/* ---------- Architecture diagram: a request travels the pipeline ---------- */
// interface → API → retrieval → API → model → response, for the wide and the mobile diagram.
const ROUTES = {
  "arch-dot": [[85, 110], [370, 110], [370, 235], [370, 110], [650, 110], [915, 110]],
  "arch-dot-v": [[170, 36], [170, 143], [102, 253], [170, 143], [170, 367], [170, 488]],
};

function animateDot(dot, pts) {
  const seg = 900; // ms per segment
  let start = null;
  let running = false;
  const frame = (ts) => {
    if (!running) return;
    if (start === null) start = ts;
    const total = seg * (pts.length - 1) + 800; // short pause at the end of each run
    const t = (ts - start) % total;
    const idx = Math.min(Math.floor(t / seg), pts.length - 2);
    const k = Math.min((t - idx * seg) / seg, 1);
    const e = k < 0.5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2; // ease in-out
    const [x1, y1] = pts[idx];
    const [x2, y2] = pts[idx + 1];
    dot.setAttribute("cx", x1 + (x2 - x1) * e);
    dot.setAttribute("cy", y1 + (y2 - y1) * e);
    requestAnimationFrame(frame);
  };
  // Only animate while this diagram is on screen (the hidden variant never intersects).
  new IntersectionObserver(([en]) => {
    if (en.isIntersecting && !running) { running = true; start = null; requestAnimationFrame(frame); }
    else if (!en.isIntersecting) running = false;
  }).observe(dot.closest("svg"));
}

function animateArchitecture() {
  if (reduceMotion || !("IntersectionObserver" in window)) return;
  Object.entries(ROUTES).forEach(([id, pts]) => {
    const dot = document.getElementById(id);
    if (dot) { dot.setAttribute("cx", pts[0][0]); dot.setAttribute("cy", pts[0][1]); animateDot(dot, pts); }
  });
}

/* ---------- Reveal on scroll ---------- */
function setupReveal() {
  const els = document.querySelectorAll(".reveal");
  if (reduceMotion || !("IntersectionObserver" in window)) { els.forEach((e) => e.classList.add("is-in")); return; }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); } });
  }, { rootMargin: "0px 0px -8% 0px" });
  els.forEach((e) => io.observe(e));
}

/* ---------- Icons (Lucide). The page stays fully usable if the library fails to load. ---------- */
function refreshIcons() {
  if (window.lucide && typeof window.lucide.createIcons === "function") window.lucide.createIcons();
}

renderEducation();
renderSkills();
renderFoundations();
renderProjects();
renderApproach();
applyProfile();
setupNav();
setupModal();
setupCopy();
setupReveal();
playTerminal();
animateArchitecture();
if (document.readyState === "complete") refreshIcons();
else window.addEventListener("load", refreshIcons);
