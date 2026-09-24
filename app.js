(function () {
  "use strict";

  var IG_DM = "https://ig.me/m/victoriaart_gallery";
  var WORKS = window.WORKS || [];
  var ROOMS = window.ROOMS || [];
  var I18N = window.I18N || {};
  var MEDIA = window.MEDIA || {};
  var LANGS = ["en", "pt", "es"];
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- language ---------- */

  function store(key, value) {
    try {
      if (value === undefined) return localStorage.getItem(key);
      localStorage.setItem(key, value);
    } catch (e) { return null; }
  }

  function pickLang() {
    var fromUrl = new URLSearchParams(location.search).get("lang");
    if (LANGS.indexOf(fromUrl) > -1) return fromUrl;
    var saved = store("lang");
    if (LANGS.indexOf(saved) > -1) return saved;
    var prefs = navigator.languages || [navigator.language || "en"];
    for (var i = 0; i < prefs.length; i++) {
      var code = String(prefs[i]).slice(0, 2).toLowerCase();
      if (LANGS.indexOf(code) > -1) return code;
    }
    return "en";
  }

  var lang = pickLang();

  function t(key, vars) {
    var s = (I18N[lang] && I18N[lang][key]) || I18N.en[key] || key;
    if (vars) s = s.replace(/\{(\w+)\}/g, function (_, k) { return vars[k] != null ? vars[k] : ""; });
    return s;
  }
  function local(v) { return v && typeof v === "object" ? (v[lang] || v.en) : v; }
  function medium(m) { return lang === "en" ? m : ((MEDIA[m] && MEDIA[m][lang]) || m); }

  /* ---------- helpers ---------- */

  function el(tag, attrs, children) {
    var node = document.createElement(tag);
    if (attrs) Object.keys(attrs).forEach(function (k) {
      if (k === "text") node.textContent = attrs[k];
      else if (k === "className") node.className = attrs[k];
      else node.setAttribute(k, attrs[k]);
    });
    (children || []).forEach(function (c) { if (c) node.appendChild(c); });
    return node;
  }

  function titleOf(w) { return w.title || t("untitled"); }
  // Untitled works share a name, so their buttons also say where they sit in the collection.
  function viewLabel(w, index) {
    var label = t("view", { title: titleLine(w) }) + ", " + medium(w.medium).toLowerCase();
    if (!w.title) label += ", " + t("count", { i: index + 1, n: WORKS.length });
    return label;
  }
  function titleLine(w) { return titleOf(w) + (w.year ? ", " + w.year : ""); }

  // Written the way the artist lists them: long side first.
  function sizeText(w) { return w.size ? w.size[0] + " × " + w.size[1] + " cm" : null; }

  // Real width of the work in cm, used to hang everything at one scale.
  function widthCm(w) {
    if (!w.size) return 120;
    var long = Math.max(w.size[0], w.size[1]);
    var short = Math.min(w.size[0], w.size[1]);
    return w.w / w.h > 1.04 ? long : short;
  }

  function src(w, px) { return "assets/works/" + w.id + "-" + px + ".webp"; }

  function altText(w) {
    var parts = [titleOf(w) + ", " + t("by"), medium(w.medium).toLowerCase()];
    var s = sizeText(w);
    if (s) parts.push(s);
    return parts.join(", ");
  }

  /* ---------- static text ---------- */

  function applyStatic() {
    document.documentElement.lang = lang === "pt" ? "pt-PT" : lang;
    document.title = t("meta.title");
    var desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", t("meta.description"));

    document.querySelectorAll("[data-i18n]").forEach(function (n) {
      n.textContent = t(n.getAttribute("data-i18n"), { year: new Date().getFullYear() });
    });
    document.querySelectorAll("[data-i18n-html]").forEach(function (n) {
      n.innerHTML = t(n.getAttribute("data-i18n-html"));
    });
    document.querySelectorAll("[data-i18n-attr]").forEach(function (n) {
      n.getAttribute("data-i18n-attr").split(";").forEach(function (pair) {
        var p = pair.split(":");
        n.setAttribute(p[0].trim(), t(p[1].trim()));
      });
    });
    document.querySelectorAll("[data-medium]").forEach(function (n) {
      n.textContent = medium(n.getAttribute("data-medium"));
    });
    document.querySelectorAll("[data-open]").forEach(function (n) {
      var w = WORKS.find(function (x) { return x.id === n.getAttribute("data-open"); });
      if (w) n.setAttribute("aria-label", t("view", { title: titleOf(w) }));
    });
    document.querySelectorAll("[data-lang]").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.getAttribute("data-lang") === lang));
    });
  }

  /* ---------- hero light ---------- */

  var hero = document.querySelector(".hero");
  var heroImg = document.querySelector(".hero-hang img");
  function light() { hero.classList.add("is-lit"); }
  if (hero && heroImg) {
    if (heroImg.complete && heroImg.naturalWidth) requestAnimationFrame(function () { requestAnimationFrame(light); });
    else {
      heroImg.addEventListener("load", light, { once: true });
      heroImg.addEventListener("error", light, { once: true });
    }
    setTimeout(light, 2500);
  }

  /* ---------- collection ---------- */

  var roomsRoot = document.getElementById("rooms");
  var roomsNav = document.getElementById("rooms-nav");
  var order = []; // viewer order follows the hang

  function renderCollection() {
    order = [];
    roomsRoot.replaceChildren();
    roomsNav.replaceChildren();

    ROOMS.forEach(function (room) {
      var works = WORKS.filter(function (w) { return w.room === room.id; });
      if (!works.length) return;

      roomsNav.appendChild(el("li", null, [el("a", { href: "#room-" + room.id }, [
        el("span", { className: "rooms-name", text: local(room.name) }),
        el("span", { className: "rooms-count", text: t("works.count", { n: works.length }) })
      ])]));

      var wall = el("ul", { className: "wall" });
      works.forEach(function (w) {
        var index = order.push(w) - 1;
        var img = el("img", {
          src: src(w, 800),
          alt: altText(w),
          width: String(w.w), height: String(w.h),
          loading: "lazy", decoding: "async"
        });
        if (w.large) {
          img.setAttribute("srcset", src(w, 800) + " 800w, " + src(w, 1800) + " 1800w");
          img.setAttribute("sizes", "(max-width: 600px) 92vw, " + Math.round(widthCm(w) * 3.3) + "px");
        }
        // Fade in only images that actually arrive late.
        if (!img.complete) {
          img.setAttribute("data-loading", "");
          var done = function () { img.removeAttribute("data-loading"); };
          img.addEventListener("load", done, { once: true });
          img.addEventListener("error", done, { once: true });
        }

        var btn = el("button", { type: "button", className: "hang", "aria-label": viewLabel(w, index) }, [img]);
        btn.addEventListener("click", function () { openViewer(index, btn); });

        var s = sizeText(w);
        var caption = el("figcaption", { className: "placard" }, [
          el("span", { className: "placard-title" + (w.title ? "" : " placard-untitled"), text: titleLine(w) }),
          el("span", { text: medium(w.medium) }),
          s ? el("span", { text: s }) : null
        ]);

        var fig = el("figure", { className: "work" }, [btn, caption]);
        fig.style.setProperty("--wcm", widthCm(w));
        fig.style.setProperty("--ar", w.w + " / " + w.h);
        wall.appendChild(el("li", { className: "work-item" }, [fig]));
      });

      var head = el("header", { className: "room-head" }, [
        el("h3", { className: "room-name", id: "room-" + room.id + "-name", text: local(room.name) }),
        el("span", { className: "room-count", text: t("works.count", { n: works.length }) })
      ]);

      roomsRoot.appendChild(el("section", {
        className: "room", id: "room-" + room.id, "aria-labelledby": "room-" + room.id + "-name"
      }, [head, wall]));
    });
  }

  // The hero painting opens in the viewer too.
  document.querySelectorAll("[data-open]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var i = order.findIndex(function (w) { return w.id === btn.getAttribute("data-open"); });
      if (i > -1) openViewer(i, btn);
    });
  });

  /* ---------- viewer ---------- */

  var viewer = document.getElementById("viewer");
  var stage = viewer.querySelector(".viewer-stage");
  var vImg = document.getElementById("viewer-img");
  var vTitle = document.getElementById("viewer-title");
  var vFacts = document.getElementById("viewer-facts");
  var vNote = document.getElementById("viewer-note");
  var vEnquire = document.getElementById("viewer-enquire");
  var vHint = document.getElementById("viewer-hint");
  var vCount = document.getElementById("viewer-count");
  var vLive = document.getElementById("viewer-live");
  var current = 0;
  var returnFocus = null;

  function enquiryMessage(w) {
    var s = sizeText(w);
    var name = w.title ? "“" + w.title + "”" : t("enquire.untitled", { medium: medium(w.medium).toLowerCase() });
    return t("enquire.msg", { name: name, size: s ? " (" + s + ")" : "" });
  }

  function fact(label, value) {
    if (!value) return null;
    return el("div", null, [el("dt", { text: label }), el("dd", { text: String(value) })]);
  }

  // Size the painting to the stage. Small source images may grow a little, never a lot.
  function fit() {
    var w = order[current];
    if (!w || !viewer.open) return;
    var cs = getComputedStyle(stage);
    var availW = stage.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight);
    var stacked = window.matchMedia("(max-width: 860px)").matches &&
      !window.matchMedia("(orientation: landscape) and (max-height: 540px)").matches;
    var availH = stacked
      ? window.innerHeight * 0.62
      : stage.clientHeight - parseFloat(cs.paddingTop) - parseFloat(cs.paddingBottom);
    // Large works are served at 1800px on the long side; others at their source size.
    var cap = w.large ? 1800 / Math.max(w.w, w.h) : 1.6;
    var scale = Math.min(availW / w.w, availH / w.h, cap);
    vImg.style.width = Math.round(w.w * scale) + "px";
    vImg.style.height = Math.round(w.h * scale) + "px";
  }
  window.addEventListener("resize", fit);

  function show(i, announce) {
    current = (i + order.length) % order.length;
    var w = order[current];

    vImg.src = src(w, w.large ? 1800 : 800);
    vImg.alt = altText(w);
    fit();

    vTitle.textContent = titleLine(w);
    vTitle.classList.toggle("is-untitled", !w.title);

    vFacts.replaceChildren.apply(vFacts, [
      fact(t("f.medium"), medium(w.medium)),
      fact(t("f.size"), sizeText(w)),
      fact(t("f.series"), w.series),
      fact(t("f.year"), w.year)
    ].filter(Boolean));

    vNote.textContent = local(w.note) || "";
    vHint.textContent = t("enquire.hint");
    vCount.textContent = t("count", { i: current + 1, n: order.length });
    if (announce) vLive.textContent = titleLine(w) + ". " + vCount.textContent;

    history.replaceState(null, "", location.pathname + location.search + "#work/" + w.id);

    // Warm the neighbours so paging feels instant.
    [current + 1, current - 1].forEach(function (n) {
      var nw = order[(n + order.length) % order.length];
      new Image().src = src(nw, nw.large ? 1800 : 800);
    });
  }

  function openViewer(i, from) {
    returnFocus = from || document.activeElement;
    if (!viewer.open) { viewer.showModal(); document.documentElement.classList.add("viewer-open"); }
    show(i);
    document.getElementById("viewer-close").focus();
  }

  function closeViewer() { if (viewer.open) viewer.close(); }

  viewer.addEventListener("close", function () {
    document.documentElement.classList.remove("viewer-open");
    vLive.textContent = "";
    history.replaceState(null, "", location.pathname + location.search);
    if (returnFocus && document.contains(returnFocus)) returnFocus.focus();
  });

  document.getElementById("viewer-close").addEventListener("click", closeViewer);
  document.getElementById("viewer-prev").addEventListener("click", function () { show(current - 1, true); });
  document.getElementById("viewer-next").addEventListener("click", function () { show(current + 1, true); });

  viewer.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") { e.preventDefault(); show(current + 1, true); }
    if (e.key === "ArrowLeft") { e.preventDefault(); show(current - 1, true); }
  });

  // Tap on the empty stage closes; tapping the painting itself does not.
  stage.addEventListener("click", function (e) { if (e.target === e.currentTarget) closeViewer(); });

  vEnquire.href = IG_DM;
  vEnquire.addEventListener("click", function () {
    var msg = enquiryMessage(order[current]);
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(msg).then(function () {
        vHint.textContent = t("enquire.copied", { msg: msg });
      }, function () {
        vHint.textContent = t("enquire.mention", { msg: msg });
      });
    } else {
      vHint.textContent = t("enquire.mention", { msg: msg });
    }
  });

  /* ---------- switching language ---------- */

  function setLang(next) {
    if (LANGS.indexOf(next) < 0 || next === lang) return;
    lang = next;
    store("lang", lang);
    var url = new URL(location.href);
    if (lang === "en") url.searchParams.delete("lang"); else url.searchParams.set("lang", lang);
    history.replaceState(null, "", url);
    applyStatic();
    renderCollection();
    if (viewer.open) show(current);
  }

  document.querySelectorAll("[data-lang]").forEach(function (b) {
    b.addEventListener("click", function () { setLang(b.getAttribute("data-lang")); });
  });

  /* ---------- start ---------- */

  applyStatic();
  renderCollection();

  // Deep link: #work/<id>
  var m = location.hash.match(/^#work\/([\w-]+)$/);
  if (m) {
    var i = order.findIndex(function (w) { return w.id === m[1]; });
    if (i > -1) openViewer(i);
  }

})();
