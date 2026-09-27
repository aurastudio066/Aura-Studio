/* =========================================================
   AURA STUDIO — PORTFOLIO ENGINE
   Reads data/portfolio-data.js, data/typesetting-data.js and
   data/site-config.js. You shouldn't need to edit this file.
   ========================================================= */
(function () {
  "use strict";

  var SITE = window.SITE || {};
  var FILTERS = window.PORTFOLIO_FILTERS || [];
  var src = function (p) { return (window.IMAGE_MAP && window.IMAGE_MAP[p]) || p; };

  var ICON = {
    wa: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="' + (window.WA_PATH || "") + '"/></svg>',
    fb: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="' + (window.FB_PATH || "") + '"/></svg>',
    prev: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 6l-6 6 6 6"/></svg>',
    next: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 6l6 6-6 6"/></svg>',
    share: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 15V3M7 8l5-5 5 5M5 13v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6"/></svg>'
  };

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function waLink(text) {
    return "https://wa.me/" + (SITE.whatsapp || "") + "?text=" + encodeURIComponent(text);
  }

  /* ---------- Build one list of items from both data files ---------- */
  var items = [];
  (window.PORTFOLIO || []).forEach(function (p) {
    if (p.visible === false || !p.image) return;
    var cats = Array.isArray(p.categories) ? p.categories : [p.categories || p.category].filter(Boolean);
    items.push({
      kind: "design", id: p.id, title: p.title, cats: cats,
      meta: [p.size, p.year].filter(Boolean).join(", "),
      desc: p.description || "",
      cover: p.thumb || p.image,
      images: [p.image].concat(p.gallery || []),
      thumbs: [p.thumb || p.image].concat(p.gallery || []),
      tags: [], note: ""
    });
  });
  (window.TYPESETTING || []).forEach(function (d) {
    if (d.visible === false || !d.pages || !d.pages.length) return;
    var th = d.thumbs && d.thumbs.length ? d.thumbs : d.pages;
    items.push({
      kind: "doc", id: d.id, title: d.title, cats: ["typesetting"],
      meta: d.medium + " medium, " + d.type + (d.pageCount ? ", " + d.pageCount + " pages" : ""),
      desc: d.level + " " + d.subject + " " + d.type.toLowerCase() + ", typeset in " + d.medium + ".",
      cover: th[0], images: d.pages, thumbs: th, tags: d.features || [],
      note: d.pageCount ? "Preview of " + d.pages.length + " of " + d.pageCount + " pages." : "",
      medium: d.medium, type: d.type
    });
  });

  function inFilter(it, f) { return f === "all" || it.cats.indexOf(f) !== -1; }

  /* ---------- Filters ---------- */
  var chipsEl = document.getElementById("chips");
  var gridEl = document.getElementById("grid");
  var liveEl = document.getElementById("live");
  var current = "all";

  function renderChips() {
    chipsEl.innerHTML = FILTERS.map(function (f) {
      var n = items.filter(function (it) { return inFilter(it, f.id); }).length;
      if (!n && f.id !== "all") return "";
      return '<button class="chip" type="button" data-f="' + esc(f.id) + '" aria-pressed="' + (f.id === current) + '">' +
        esc(f.label) + ' <span class="n">' + n + "</span></button>";
    }).join("");
  }
  chipsEl.addEventListener("click", function (e) {
    var b = e.target.closest(".chip");
    if (!b) return;
    setFilter(b.getAttribute("data-f"), true);
  });

  function setFilter(f, animate) {
    if (!FILTERS.some(function (x) { return x.id === f; })) f = "all";
    current = f;
    chipsEl.querySelectorAll(".chip").forEach(function (c) {
      c.setAttribute("aria-pressed", String(c.getAttribute("data-f") === f));
    });
    var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (animate && !reduce) {
      gridEl.classList.add("out");
      setTimeout(function () { renderGrid(true); gridEl.classList.remove("out"); }, 160);
    } else {
      renderGrid(false);
    }
    setHash(f === "all" ? "" : f);
  }

  /* ---------- Grid (left-to-right masonry) ---------- */
  var visible = [];
  function colCount() {
    if (window.matchMedia("(min-width: 1100px)").matches) return 4;
    if (window.matchMedia("(min-width: 700px)").matches) return 3;
    return 2;
  }
  var cols = colCount();
  function renderGrid(animate) {
    visible = items.filter(function (it) { return inFilter(it, current); });
    cols = colCount();
    var buckets = [];
    for (var c = 0; c < cols; c++) buckets.push("");
    visible.forEach(function (it, i) {
      buckets[i % cols] += '<button type="button" class="item ' + (it.kind === "doc" ? "doc " : "") + (animate ? "in" : "") +
        '" style="--i:' + Math.min(i, 12) + '" data-i="' + i + '">' +
        '<span class="ph wait"><img src="' + esc(src(it.cover)) + '" alt="' + esc(it.title) + '" loading="lazy" decoding="async"></span>' +
        '<span class="t">' + esc(it.title) + '</span><span class="m">' + esc(it.meta) + "</span></button>";
    });
    if (SITE.facebook) {
      buckets[visible.length % cols] += '<a class="fb-card" href="' + esc(SITE.facebook) + '" target="_blank" rel="noopener">' + ICON.fb +
        "<b>See more of our work on Facebook</b><span>Our page has more recent designs.</span></a>";
    }
    gridEl.innerHTML = buckets.map(function (b) { return '<div class="col">' + b + "</div>"; }).join("");
    /* Cards hold a placeholder shape until their image arrives, so images load only as people scroll */
    gridEl.querySelectorAll(".ph.wait img").forEach(function (img) {
      if (img.complete && img.naturalWidth) img.parentNode.classList.remove("wait");
    });
    liveEl.textContent = "Showing " + visible.length + (visible.length === 1 ? " item" : " items");
  }
  window.addEventListener("resize", function () { if (colCount() !== cols) renderGrid(false); });
  gridEl.addEventListener("load", function (e) {
    if (e.target.tagName === "IMG" && e.target.parentNode.classList) e.target.parentNode.classList.remove("wait");
  }, true);
  gridEl.addEventListener("click", function (e) {
    var b = e.target.closest(".item");
    if (!b) return;
    openItem(Number(b.getAttribute("data-i")), b);
  });

  /* ---------- Lightbox ---------- */
  var lb = document.getElementById("lb");
  var lbImg = document.getElementById("lb-img");
  var lbThumbs = document.getElementById("lb-thumbs");
  var idx = 0, sub = 0, opener = null;

  function openItem(i, fromEl) {
    idx = i; sub = 0; opener = fromEl || null;
    lb.hidden = false;
    document.documentElement.style.overflow = "hidden";
    fillLightbox();
    lb.querySelector(".lb-x").focus();
  }
  function closeLb() {
    lb.hidden = true;
    document.documentElement.style.overflow = "";
    setHash(current === "all" ? "" : current);
    if (opener && document.body.contains(opener)) opener.focus();
  }
  function step(d) {
    if (!visible.length) return;
    idx = (idx + d + visible.length) % visible.length; sub = 0;
    fillLightbox();
  }
  function fillLightbox() {
    var it = visible[idx];
    if (!it) return;
    showImage();
    document.getElementById("lb-count").textContent = (idx + 1) + " of " + visible.length;
    document.getElementById("lb-meta").textContent = it.meta;
    document.getElementById("lb-title").textContent = it.title;
    document.getElementById("lb-desc").textContent = it.desc;
    document.getElementById("lb-note").textContent = it.note;
    document.getElementById("lb-tags").innerHTML = it.tags.map(function (t) { return "<li>" + esc(t) + "</li>"; }).join("");

    if (it.images.length > 1) {
      lbThumbs.hidden = false;
      lbThumbs.innerHTML = it.thumbs.map(function (t, k) {
        return '<button type="button" data-k="' + k + '" aria-label="Show image ' + (k + 1) + '"' +
          (k === sub ? ' aria-current="true"' : "") + '><img src="' + esc(src(t)) + '" alt=""></button>';
      }).join("");
    } else {
      lbThumbs.hidden = true; lbThumbs.innerHTML = "";
    }

    var ask = it.kind === "doc"
      ? "Hi Aura Studio, I saw your " + it.medium + "-medium " + it.type.toLowerCase() + " sample on your website and I'd like typesetting done."
      : 'Hi Aura Studio, I saw "' + it.title + '" on your website and I\'d like something similar.';
    document.getElementById("lb-wa").href = waLink(ask);

    setHash("p-" + it.id);
    var shareUrl = location.href;
    document.getElementById("lb-share").href = "https://wa.me/?text=" + encodeURIComponent(it.title + " by Aura Studio: " + shareUrl);
  }
  function showImage() {
    var it = visible[idx];
    lbImg.src = src(it.images[sub]);
    lbImg.alt = it.title + (it.images.length > 1 ? ", image " + (sub + 1) + " of " + it.images.length : "");
    lbThumbs.querySelectorAll("button").forEach(function (b) {
      if (Number(b.getAttribute("data-k")) === sub) b.setAttribute("aria-current", "true");
      else b.removeAttribute("aria-current");
    });
  }
  lbThumbs.addEventListener("click", function (e) {
    var b = e.target.closest("button");
    if (!b) return;
    sub = Number(b.getAttribute("data-k"));
    showImage();
  });
  lb.querySelector(".lb-x").addEventListener("click", closeLb);
  lb.querySelector(".lb-nav.prev").addEventListener("click", function () { step(-1); });
  lb.querySelector(".lb-nav.next").addEventListener("click", function () { step(1); });

  document.addEventListener("keydown", function (e) {
    if (lb.hidden) return;
    if (e.key === "Escape") { closeLb(); return; }
    if (e.key === "ArrowLeft") step(-1);
    if (e.key === "ArrowRight") step(1);
    if (e.key === "Tab") {
      var f = lb.querySelectorAll("button:not([hidden]), a[href]");
      f = Array.prototype.filter.call(f, function (el) { return el.offsetParent !== null; });
      if (!f.length) return;
      var first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  /* Swipe left or right on the image to move between designs */
  var sx = null, sy = null;
  var stage = lb.querySelector(".lb-stage");
  stage.addEventListener("touchstart", function (e) { sx = e.touches[0].clientX; sy = e.touches[0].clientY; }, { passive: true });
  stage.addEventListener("touchend", function (e) {
    if (sx === null) return;
    var dx = e.changedTouches[0].clientX - sx, dy = e.changedTouches[0].clientY - sy;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) step(dx < 0 ? 1 : -1);
    sx = sy = null;
  });

  /* ---------- Links: #banners opens a filter, #p-land-sale-post opens a design ---------- */
  function setHash(h) {
    try {
      history.replaceState(null, "", h ? "#" + h : location.pathname + location.search);
    } catch (err) { /* some preview frames block this; links still work on the live site */ }
  }
  function readHash() {
    var h = decodeURIComponent((location.hash || "").slice(1));
    if (h.indexOf("p-") === 0) {
      current = "all"; renderChips(); renderGrid(false);
      var i = visible.map(function (it) { return it.id; }).indexOf(h.slice(2));
      if (i !== -1) openItem(i);
      return;
    }
    renderChips();
    setFilter(h || "all", false);
  }

  readHash();
  /* Links that only change the #part (e.g. from the footer or a shared link) */
  window.addEventListener("hashchange", function () {
    if (!lb.hidden) { lb.hidden = true; document.documentElement.style.overflow = ""; }
    readHash();
  });
})();
