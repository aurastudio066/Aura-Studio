/* =========================================================
   AURA STUDIO — HOMEPAGE BEHAVIOUR
   Builds the services, featured work, categories, typesetting
   samples and packages from the data files, and sends the
   contact form to WhatsApp. You shouldn't need to edit this file.
   ========================================================= */
(function () {
  "use strict";
  var A = window.AURA, $ = A.$, $$ = A.$$, esc = A.esc, wa = A.wa, svg = A.svg, paintIcons = A.paintIcons;
  var PORTFOLIO = (window.PORTFOLIO || []).filter(function (p) { return p.visible !== false; });
  var DOCS = (window.TYPESETTING || []).filter(function (d) { return d.visible !== false; });
  var src = function (p) { return (window.IMAGE_MAP && window.IMAGE_MAP[p]) || p; };
  var PORTFOLIO_URL = window.PORTFOLIO_URL || "portfolio.html";
  var PLATFORM_ICON = { Facebook: window.FB_PATH, TikTok: window.TT_PATH, Instagram: window.IG_PATH };
  var CHECK = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>';

  /* ---------- 4. Services ---------- */
  var SERVICES = window.SERVICES || [];
  function symbolHtml(s) {
    return esc(s).replace(/([\u0D80-\u0DFF\u200D]+)/g, '<span class="si">$1</span>');
  }
  $("#services-list").innerHTML = SERVICES.map(function (s) {
    var hasEx = !!s.examples;
    var href = hasEx ? PORTFOLIO_URL + "#" + s.examples : wa("Hi Aura Studio, I'd like to ask about " + s.title + ".");
    return '<li><a class="svc" href="' + esc(href) + '"' + (hasEx ? "" : ' target="_blank" rel="noopener"') + ">" +
      '<span class="sym" aria-hidden="true"><span class="sym-in">' + symbolHtml(s.symbol || "") + "</span></span>" +
      "<b>" + esc(s.title) + '</b><span class="tx">' + esc(s.text) + "</span>" +
      '<span class="go">' + (hasEx ? "See examples" : "Ask about this") + "</span></a></li>";
  }).join("");
  /* Phones show the first 6 services, with a button for the rest */
  var svcList = $("#services-list");
  if (SERVICES.length > 6) {
    svcList.classList.add("collapsed");
    var more = document.createElement("button");
    more.type = "button"; more.className = "btn btn-line more-svc";
    more.textContent = "Show all " + SERVICES.length + " services";
    more.addEventListener("click", function () {
      svcList.classList.remove("collapsed"); more.remove();
      var next = svcList.querySelectorAll(".svc")[6]; if (next) next.focus();
    });
    svcList.insertAdjacentElement("afterend", more);
  }
  var select = $("#f-service");
  SERVICES.forEach(function (s) {
    var o = document.createElement("option"); o.value = s.title; o.textContent = s.title; select.appendChild(o);
  });

  /* ---------- 5. Featured work ---------- */
  $("#featured").innerHTML = PORTFOLIO.filter(function (p) { return p.featured; }).slice(0, 8).map(function (p, i) {
    return '<a class="wk" href="' + esc(PORTFOLIO_URL + "#p-" + p.id) + '">' +
      '<span class="mat"><img src="' + esc(src(p.thumb || p.image)) + '" alt="' + esc(p.title) + '" loading="' + (i < 2 ? "eager" : "lazy") + '" decoding="async"></span>' +
      '<span class="t">' + esc(p.title) + '</span><span class="m">' + esc(p.size || "") + "</span></a>";
  }).join("");

  /* ---------- 6. Design categories ---------- */
  function countFor(f) {
    if (f === "typesetting") return DOCS.length;
    return PORTFOLIO.filter(function (p) {
      var c = Array.isArray(p.categories) ? p.categories : [p.categories || p.category];
      return c.indexOf(f) !== -1;
    }).length;
  }
  $("#cats").innerHTML = (window.DESIGN_CATEGORIES || []).map(function (c) {
    var n = countFor(c.filter);
    var unit = c.filter === "typesetting" ? (n === 1 ? "document" : "documents") : (n === 1 ? "design" : "designs");
    return '<li><a class="cat" href="' + esc(PORTFOLIO_URL + "#" + c.filter) + '">' +
      '<span class="mat"><img src="' + esc(src(c.cover)) + '" alt="" loading="lazy" decoding="async"></span>' +
      "<b>" + esc(c.title) + '</b><span class="n">' + n + " " + unit + "</span></a></li>";
  }).join("");

  /* ---------- 7. Typesetting & academic work ---------- */
  var tabs = $$(".seg [role=tab]"), panel = $("#ts-panel");
  function listJoin(a) { return a.length < 2 ? a.join("") : a.slice(0, -1).join(", ") + " and " + a[a.length - 1]; }
  function renderTs(medium) {
    tabs.forEach(function (t) {
      var on = t.getAttribute("data-medium") === medium;
      t.setAttribute("aria-selected", String(on)); t.tabIndex = on ? 0 : -1;
      if (on) panel.setAttribute("aria-labelledby", t.id);
    });
    if (medium === "Campus") {
      panel.innerHTML =
        '<ul class="campus">' +
        "<li><b>Assignment formatting and typesetting</b><span>Clean headings, tables, figures, references and page layout.</span></li>" +
        "<li><b>Presentation slide design</b><span>Clear, well-designed slides for your presentations and vivas.</span></li>" +
        "<li><b>Academic posters</b><span>Research and project posters, ready to print.</span></li></ul>" +
        '<p class="ts-note">Formatting and design only. The content stays yours.</p>' +
        '<div class="ts-actions"><a class="btn btn-solid" href="' + esc(wa("Hi Aura Studio, I'd like help with a campus assignment, presentation or poster.")) + '" target="_blank" rel="noopener"><span class="i-wa"></span>Send your draft on WhatsApp</a></div>';
      paintIcons(panel);
      return;
    }
    var docs = DOCS.filter(function (d) { return d.medium === medium; });
    var types = [];
    docs.forEach(function (d) { var t = /^[A-Z]{2}/.test(d.type) ? d.type : d.type.charAt(0).toLowerCase() + d.type.slice(1); if (types.indexOf(t) === -1) types.push(t); });
    var feats = [];
    docs.forEach(function (d) { (d.features || []).forEach(function (f) { if (feats.indexOf(f) === -1) feats.push(f); }); });
    panel.innerHTML =
      '<div class="pages">' + docs.slice(0, 3).map(function (d) {
        var th = (d.thumbs && d.thumbs[0]) || d.pages[0];
        return '<a href="' + esc(PORTFOLIO_URL + "#p-" + d.id) + '" aria-label="' + esc(d.title) + '"><img src="' + esc(src(th)) + '" alt="" loading="lazy" decoding="async"></a>';
      }).join("") + "</div>" +
      '<p class="ts-sum">' + docs.length + " " + medium + "-medium sample" + (docs.length === 1 ? "" : "s") + ": " + listJoin(types.slice(0, 4).map(function (t) { return /s$/.test(t) ? t : t + "s"; })) + ".</p>" +
      '<ul class="tags">' + feats.slice(0, 6).map(function (f) { return "<li>" + esc(f) + "</li>"; }).join("") + "</ul>" +
      '<div class="ts-actions"><a class="btn btn-line" href="' + esc(PORTFOLIO_URL + "#typesetting") + '">See typesetting samples</a>' +
      '<a class="btn btn-solid" href="' + esc(wa("Hi Aura Studio, I'd like " + medium + " typesetting done.")) + '" target="_blank" rel="noopener"><span class="i-wa"></span>Ask about typesetting</a></div>';
    paintIcons(panel);
  }
  tabs.forEach(function (t, i) {
    t.addEventListener("click", function () { renderTs(t.getAttribute("data-medium")); });
    t.addEventListener("keydown", function (e) {
      var d = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
      if (!d) return;
      var n = tabs[(i + d + tabs.length) % tabs.length]; n.focus(); renderTs(n.getAttribute("data-medium"));
    });
  });
  renderTs("Sinhala");

  /* ---------- 8. Packages ---------- */
  var PACKAGES = window.PACKAGES || [];
  if (!PACKAGES.length) { $("#packages").hidden = true; $(".pk-title").hidden = true; }
  $("#packages").innerHTML = PACKAGES.map(function (p) {
    var lines = (p.includes || []);
    var ready = lines.filter(function (line) { return !/\[[^\]]*\]/.test(line); });
    var items = ready.map(function (line) { return "<li>" + CHECK + "<span>" + esc(line) + "</span></li>"; }).join("");
    if (ready.length < lines.length) items += '<li class="ask">' + CHECK + "<span>Ask us on WhatsApp for the full details</span></li>";
    var plats = (p.platforms || []);
    return '<article class="pkg"><div class="pkg-top"><p class="pkg-name">' + esc(p.name) + "</p></div>" +
      '<div class="pl" role="img" aria-label="' + esc(plats.join(", ")) + '">' + plats.map(function (x) { return svg(PLATFORM_ICON[x]); }).join("") +
      '<span class="pl-t">' + esc(plats.join(" + ")) + "</span></div>" +
      "<ul>" + items + "</ul>" +
      '<a class="btn btn-mist" href="' + esc(wa("Hi Aura Studio, I'm interested in the " + p.name + " package.")) + '" target="_blank" rel="noopener"><span class="i-wa"></span>Get this package</a></article>';
  }).join("");

  /* ---------- 12. Contact form → WhatsApp ---------- */
  var form = $("#form");
  var rules = [
    ["f-name", "e-name", function (v) { return v.trim() ? "" : "Enter your name."; }],
    ["f-phone", "e-phone", function (v) { return v.replace(/\D/g, "").length >= 9 ? "" : "Enter a phone number we can reach you on."; }],
    ["f-email", "e-email", function (v) { return !v.trim() || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) ? "" : "Check the email address, or leave it empty."; }],
    ["f-service", "e-service", function (v) { return v ? "" : "Choose the service you need."; }],
    ["f-msg", "e-msg", function (v) { return v.trim() ? "" : "Tell us a little about what you need."; }]
  ];
  function check(r) {
    var input = document.getElementById(r[0]), msg = r[2](input.value);
    document.getElementById(r[1]).textContent = msg;
    input.closest(".field").classList.toggle("bad", !!msg);
    input.setAttribute("aria-invalid", msg ? "true" : "false");
    if (msg) input.setAttribute("aria-describedby", r[1]); else input.removeAttribute("aria-describedby");
    return !msg;
  }
  rules.forEach(function (r) {
    var input = document.getElementById(r[0]);
    input.addEventListener("input", function () { if (input.closest(".field").classList.contains("bad")) check(r); });
    input.addEventListener("change", function () { if (input.closest(".field").classList.contains("bad")) check(r); });
  });
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var firstBad = null;
    rules.forEach(function (r) { if (!check(r) && !firstBad) firstBad = document.getElementById(r[0]); });
    if (firstBad) { firstBad.focus(); return; }
    var v = function (id) { return document.getElementById(id).value.trim(); };
    var text = "Hi Aura Studio,\n\nName: " + v("f-name") + "\nPhone: " + v("f-phone") +
      (v("f-email") ? "\nEmail: " + v("f-email") : "") + "\nService: " + v("f-service") + "\n\n" + v("f-msg");
    var link = wa(text);
    var w = window.open(link, "_blank");
    if (w) { try { w.opener = null; } catch (err) { /* ignore */ } }
    var status = $("#form-status");
    status.innerHTML = 'WhatsApp should now be open with your message. If it didn\'t open, <a href="' + esc(link) + '" target="_blank" rel="noopener">tap here to send it</a>.';
    if (!w) window.location.href = link;
  });

  /* Paint icons inside the sections built above */
  paintIcons(document);

  /* Reveal sections once as they reach the screen */
  if ("IntersectionObserver" in window) {
    var targets = $$(".sec > .wrap, .sec > .cats-scroll, .cta-inner");
    targets.forEach(function (t) { t.classList.add("rv"); });
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("seen"); io.unobserve(en.target); } });
    }, { threshold: 0.08, rootMargin: "0px 0px -40px 0px" });
    targets.forEach(function (t) { io.observe(t); });
  }
})();
