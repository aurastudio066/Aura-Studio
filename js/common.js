/* =========================================================
   AURA STUDIO — SHARED BEHAVIOUR (both pages)
   Icons, WhatsApp / Facebook / phone links, navigation,
   mobile menu and the floating WhatsApp button.
   Contact details come from data/site-config.js.
   ========================================================= */
(function () {
  "use strict";
  document.documentElement.classList.add("js");
  var SITE = window.SITE || {};

  function $(s, el) { return (el || document).querySelector(s); }
  function $$(s, el) { return Array.prototype.slice.call((el || document).querySelectorAll(s)); }
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function wa(text) { return "https://wa.me/" + (SITE.whatsapp || "") + "?text=" + encodeURIComponent(text || "Hi Aura Studio"); }
  function svg(path) { return path ? '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="' + path + '"/></svg>' : ""; }
  var ICONS = { "i-wa": window.WA_PATH, "i-fb": window.FB_PATH, "i-tt": window.TT_PATH, "i-ig": window.IG_PATH };

  function paintIcons(root) {
    Object.keys(ICONS).forEach(function (cls) {
      $$("." + cls, root).forEach(function (el) { if (!el.firstChild) el.innerHTML = svg(ICONS[cls]); });
    });
  }
  function wireLinks(root) {
    $$(".js-wa", root).forEach(function (a) { a.href = wa(a.getAttribute("data-msg")); });
    [["js-fb", SITE.facebook], ["js-tt", SITE.tiktok], ["js-ig", SITE.instagram]].forEach(function (pair) {
      $$("." + pair[0], root).forEach(function (a) {
        if (pair[1]) a.href = pair[1];
        else (a.closest("li") || a).hidden = true;   /* no link yet: hide it */
      });
    });
    $$(".js-tel", root).forEach(function (a) { a.href = "tel:" + (SITE.phoneLink || ""); });
    $$(".js-phone", root).forEach(function (s) { s.textContent = SITE.phoneDisplay || ""; });
  }

  /* Shared helpers for home.js */
  window.AURA = { $: $, $$: $$, esc: esc, wa: wa, svg: svg, paintIcons: paintIcons, wireLinks: wireLinks };

  paintIcons(document);
  wireLinks(document);

  /* Navigation: transparent over a dark hero, solid after it */
  var nav = $("#nav"), hero = $(".hero");
  if (nav && hero) {
    var ticking = false;
    var navState = function () {
      ticking = false;
      nav.classList.toggle("scrolled", window.scrollY > hero.offsetHeight - nav.offsetHeight - 10);
    };
    window.addEventListener("scroll", function () { if (!ticking) { ticking = true; requestAnimationFrame(navState); } }, { passive: true });
    navState();
  }

  /* Mobile menu */
  var menu = $("#menu"), menuBtn = $("#menu-btn");
  if (menu && menuBtn) {
    var setMenu = function (open) {
      menu.hidden = !open;
      document.documentElement.classList.toggle("menu-open", open);
      document.documentElement.style.overflow = open ? "hidden" : "";
      menuBtn.setAttribute("aria-expanded", String(open));
      menuBtn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    };
    menuBtn.addEventListener("click", function () { setMenu(menu.hidden); });
    menu.addEventListener("click", function (e) { if (e.target.closest("a")) setMenu(false); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && !menu.hidden) { setMenu(false); menuBtn.focus(); } });
    window.addEventListener("resize", function () { if (window.innerWidth >= 980 && !menu.hidden) setMenu(false); });
  }

  /* Floating WhatsApp button steps aside near the contact form and footer */
  var fab = $("#wa-fab");
  if (fab && "IntersectionObserver" in window) {
    var near = new Set();
    var fo = new IntersectionObserver(function (es) {
      es.forEach(function (en) { if (en.isIntersecting) near.add(en.target); else near.delete(en.target); });
      fab.classList.toggle("away", near.size > 0);
    }, { threshold: 0.05 });
    [$("#contact"), $(".footer")].forEach(function (el) { if (el) fo.observe(el); });
  }
})();
