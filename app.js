(function () {
  "use strict";
  var MENU = window.MENU || [];
  var PHONE = window.WHATSAPP || "5531996202280";
  var DESKTOP = window.matchMedia("(min-width: 1024px)");
  var $ = function (s, el) { return (el || document).querySelector(s); };
  var $$ = function (s, el) { return Array.prototype.slice.call((el || document).querySelectorAll(s)); };

  /* ---------- Ícones (SVG de linha, desenhados aqui) ---------- */
  var P = {
    menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
    bag: '<path d="M4.5 2.5h15v19l-2.5-1.6-2.5 1.6-2.5-1.6-2.5 1.6-2.5-1.6-2.5 1.6Z"/><path d="M8 7.5h8M8 11.5h8M8 15.5h5"/>',
    x: '<path d="M6 6l12 12M18 6 6 18"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    minus: '<path d="M5 12h14"/>',
    trash: '<path d="M4.5 7h15M10 11v6M14 11v6M6.5 7l.8 11.6A1.5 1.5 0 0 0 8.8 20h6.4a1.5 1.5 0 0 0 1.5-1.4L17.5 7M9.5 7V5.5A1.5 1.5 0 0 1 11 4h2a1.5 1.5 0 0 1 1.5 1.5V7"/>',
    home: '<path d="M4 11 12 4l8 7"/><path d="M6 9.5V19a1 1 0 0 0 1 1h3.5v-5h3v5H17a1 1 0 0 0 1-1V9.5"/>',
    whatsapp: '<path d="M4.5 19.5l1.1-3.6A8 8 0 1 1 8.4 18.6Z"/><path d="M9.2 8.6c.2-.4.5-.5.8-.5h.5c.2 0 .4.1.5.4l.7 1.6c.1.3 0 .5-.1.7l-.5.6c.6 1.1 1.5 2 2.6 2.6l.6-.5c.2-.2.4-.2.7-.1l1.6.7c.3.1.4.3.4.5v.5c0 .3-.1.6-.5.8-.6.4-1.4.5-2.1.3a8 8 0 0 1-5.3-5.3c-.2-.7-.1-1.5.3-2.1Z"/>',
    espeto: '<path d="M3.5 20.5 20.5 3.5"/><rect x="5.6" y="12.4" width="6" height="6" rx="2" transform="rotate(45 8.6 15.4)"/><rect x="9.6" y="8.4" width="6" height="6" rx="2" transform="rotate(45 12.6 11.4)"/><rect x="13.8" y="4.6" width="5" height="5" rx="1.8" transform="rotate(45 16.3 7.1)"/>',
    porcao: '<path d="M3 12h18a9 8 0 0 1-18 0Z"/><path d="M8 8.5c0-1.3 1-1.7 1-3M12 8.5c0-1.3 1-1.7 1-3M16 8.5c0-1.3 1-1.7 1-3"/>',
    burger: '<path d="M4 11c0-3.9 3.6-6.5 8-6.5s8 2.6 8 6.5Z"/><path d="M3 14.5c1.5 0 1.5 1 3 1s1.5-1 3-1 1.5 1 3 1 1.5-1 3-1 1.5 1 3 1 1.5-1 3-1"/><path d="M4.5 18h15a0 0 0 0 1 0 0 2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2Z"/>',
    prato: '<circle cx="14.5" cy="12" r="6.5"/><circle cx="14.5" cy="12" r="3.2"/><path d="M3 4v4.5A2 2 0 0 0 5 10.5V20M5 4v4M7 4v4.5a2 2 0 0 1-2 2"/>',
    panela: '<path d="M4.5 10.5h15v5.5a4 4 0 0 1-4 4h-7a4 4 0 0 1-4-4Z"/><path d="M2.5 10.5h19M9.5 7.5c0-1 .8-1.4.8-2.5M14 7.5c0-1 .8-1.4.8-2.5"/>',
    copo: '<path d="M6 8.5h12l-1.4 11a1.5 1.5 0 0 1-1.5 1.3H8.9a1.5 1.5 0 0 1-1.5-1.3Z"/><path d="m12.5 8.5 2.2-5.5H18"/><path d="M6.6 13h10.8"/>',
    lata: '<path d="M7.5 5.5h9l.5 2v11l-.5 2h-9l-.5-2v-11Z"/><path d="M7 8h10M7 18h10M10 3.5h4"/>',
    caneca: '<path d="M5 9h10v10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2Z"/><path d="M15 11.5h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2"/><path d="M5 9a2.5 2.5 0 0 1 2.3-3.5A3 3 0 0 1 12.6 5 2.5 2.5 0 0 1 15 9"/><path d="M8.5 12.5v5M11.5 12.5v5"/>',
    taca: '<path d="M4.5 4.5h15L12 13Z"/><path d="M12 13v7M8.5 20h7M7 7.3h10"/>',
    dose: '<path d="M6.5 5h11l-1.5 14a1.3 1.3 0 0 1-1.3 1.1H9.3A1.3 1.3 0 0 1 8 19Z"/><path d="M7.2 11h9.6"/>'
  };
  function icon(n, cls) { return '<svg class="i' + (cls ? " " + cls : "") + '" viewBox="0 0 24 24" aria-hidden="true">' + (P[n] || "") + "</svg>"; }
  function paintIcons(root) {
    $$("[data-icon]", root).forEach(function (el) {
      if (el.getAttribute("data-painted")) return;
      el.insertAdjacentHTML("afterbegin", icon(el.getAttribute("data-icon")));
      el.setAttribute("data-painted", "1");
    });
  }

  /* ---------- Dados ---------- */
  var PRODUCTS = {};   // chave -> { nome, preco, cat }
  var ITEMS = {};      // chave do item -> item
  MENU.forEach(function (cat) {
    cat.total = 0; cat.min = Infinity;
    cat.grupos.forEach(function (g, gi) {
      g.itens = [].concat.apply([], g.itens.map(function (raw) {
        if (Array.isArray(raw) || !raw.variacoes) return [raw];
        return raw.variacoes.map(function (v) { return { nome: raw.nome + " - " + v[0], msgNome: raw.nome + " - " + v[0], preco: v[1], nota: raw.desc }; });
      })).map(function (raw, ii) {
        var it = Array.isArray(raw) ? { nome: raw[0], preco: raw[1], desc: raw[2] || "" } : raw;
        it.key = cat.id + "-" + gi + "-" + ii; it.cat = cat;
        if (it.variacoes) {
          it.variacoes = it.variacoes.map(function (v, vi) {
            var vv = { nome: v[0], preco: v[1], key: it.key + "-v" + vi };
            PRODUCTS[vv.key] = { nome: it.nome + " (" + vv.nome + ")", preco: vv.preco, cat: cat.nome };
            cat.min = Math.min(cat.min, vv.preco);
            return vv;
          });
          it.preco = it.variacoes[0].preco;
        } else {
          PRODUCTS[it.key] = { nome: it.nome, msg: it.msgNome || it.nome, preco: it.preco, cat: cat.nome };
          cat.min = Math.min(cat.min, it.preco);
        }
        ITEMS[it.key] = it; cat.total++;
        return it;
      });
    });
  });

  var brl = function (n) { return "R$ " + n.toFixed(2).replace(".", ",").replace(/\B(?=(\d{3})+(?!\d))/g, "."); };
  var esc = function (s) { return String(s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); };
  var plural = function (n, a, b) { return n + " " + (n === 1 ? a : b); };

  /* ---------- Sacola ---------- */
  // As escolhas duram apenas enquanto esta página permanece aberta, sem recarregar.
  var bag = { itens: {}, ordem: [], obs: "" };
  function qty(k) { return bag.itens[k] || 0; }
  function setQty(k, n) {
    n = Math.max(0, Math.min(99, n));
    var before = totals().q;
    if (n === 0) { delete bag.itens[k]; bag.ordem = bag.ordem.filter(function (x) { return x !== k; }); }
    else { if (!bag.itens[k]) bag.ordem.push(k); bag.itens[k] = n; }
    refresh(totals().q > before);
  }
  function totals() {
    var q = 0, t = 0;
    bag.ordem.forEach(function (k) { q += bag.itens[k]; t += bag.itens[k] * PRODUCTS[k].preco; });
    return { q: q, t: Math.round(t * 100) / 100 };
  }

  /* ---------- Controles de quantidade ---------- */
  function stepper(k, label) {
    var n = qty(k);
    return '<div class="step" role="group" aria-label="Quantidade de ' + esc(label) + '">' +
      '<button type="button" class="' + (n === 1 ? "rm" : "") + '" data-act="dec" data-key="' + k + '" aria-label="' + (n === 1 ? "Remover " : "Diminuir ") + esc(label) + '">' + icon(n === 1 ? "trash" : "minus") + "</button>" +
      '<output class="num">' + n + "</output>" +
      '<button type="button" data-act="inc" data-key="' + k + '" aria-label="Adicionar mais ' + esc(label) + '">' + icon("plus") + "</button></div>";
  }
  function control(k, label) {
    if (!qty(k)) return '<button type="button" class="add" data-act="inc" data-key="' + k + '" aria-label="Adicionar ' + esc(label) + '">' + icon("plus") + "</button>";
    return stepper(k, label);
  }

  /* ---------- Início ---------- */
  function catIcon(c) { return c.icone; }
  function renderHome() {
    var h = "", d = "";
    MENU.forEach(function (c) {
      h += '<li><a class="cat-link" href="#/cardapio/' + c.id + '"><span class="cat-ico">' + icon(catIcon(c)) + '</span>' +
        '<span class="cat-txt"><strong>' + esc(c.nome) + "</strong></span></a></li>";
      d += '<li><a href="#/cardapio/' + c.id + '" data-cat="' + c.id + '">' + '<span class="drawer-ico">' + icon(catIcon(c)) + '</span><span class="drawer-name">' + esc(c.nome) + "</span></a></li>";
    });
    $("#catList").innerHTML = h;
    $("#drawerList").innerHTML = d;
  }

  /* ---------- Cardápio ---------- */
  function productNameHTML(name) {
    var pattern = /\b(?:(?:Lata|Caixa)\s+\d+(?:[.,]\d+)?\s*(?:ml|l)|Long\s+Neck|Latão|KS|\d+(?:[.,]\d+)?\s*(?:gr|g|ml|l|unid\.?|doses?))(?=\s|$)/gi;
    var result = "", last = 0;
    String(name).replace(pattern, function (match, offset) {
      result += esc(name.slice(last, offset)) + '<span class="product-spec">' + esc(match) + "</span>";
      last = offset + match.length;
      return match;
    });
    return result + esc(name.slice(last));
  }
  function descriptionHTML(text) {
    return String(text).split(/([.!?])\s+(?=[A-ZÁÀÂÃÉÊÍÓÔÕÚÜÇ])/).map(function (part, i) {
      if (i % 2) return esc(part) + "<br>";
      return esc(part);
    }).join("");
  }
  function rowHTML(it) {
    var cls = "row";
    var inBag = qty(it.key);
    if (inBag) cls += " in";
    var price = '<span class="row-price">' + brl(it.preco) + "</span>";
    var description = it.desc || "", note = it.nota || "";
    if (it.cat.id === "jantinha") {
      var noteAt = description.indexOf("Observação:");
      if (noteAt >= 0) {
        note = description.slice(noteAt);
        description = description.slice(0, noteAt).trim();
      }
    }
    return '<li class="' + cls + '" data-row="' + it.key + '">' +
      '<div class="row-main">' +
      '<h3 class="row-name">' + productNameHTML(it.nome) + "</h3>" +
      (description ? '<p class="row-desc">' + descriptionHTML(description) + "</p>" : "") +
      (note ? '<p class="row-note">' + descriptionHTML(note) + "</p>" : "") +
      price + "</div>" +
      '<div class="row-ctl" data-ctl="' + it.key + '">' + control(it.key, it.nome) + "</div></li>";
  }
  function renderMenu() {
    var h = "", t = "";
    MENU.forEach(function (c) {
      t += '<a class="tab" href="#/cardapio/' + c.id + '" data-tab="' + c.id + '">' + esc(c.nome) + "</a>";
      h += '<section class="sec" id="sec-' + c.id + '" data-sec="' + c.id + '"><div class="sec-head"><h2>' + esc(c.nome) + "</h2></div>" +
        (c.desc ? '<p class="category-note">' + esc(c.desc) + "</p>" : "");
      c.grupos.forEach(function (g) {
        h += '<div class="grp"' + (g.id ? ' id="grp-' + g.id + '"' : "") + ">" + (g.titulo ? '<h3 class="grp-title">' + esc(g.titulo) + "</h3>" : "") + '<ul class="rows">';
        g.itens.forEach(function (it) { h += rowHTML(it); });
        h += "</ul></div>";
      });
      h += "</section>";
    });
    $("#menuBody").innerHTML = h;
  }

  /* ---------- Scrollspy das abas ---------- */
  var spyLock = 0, activeTab = null, observer = null;
  function setActive(id) {
    if (id === activeTab) return;
    activeTab = id;
    $$(".tab").forEach(function (a) { a.setAttribute("aria-current", a.getAttribute("data-tab") === id ? "true" : "false"); });
    $$("#drawerList a[data-cat]").forEach(function (a) { a.setAttribute("aria-current", a.getAttribute("data-cat") === id ? "true" : "false"); });
  }
  function startSpy() {
    if (observer) observer.disconnect();
    if (!("IntersectionObserver" in window)) return;
    observer = new IntersectionObserver(function (entries) {
      if (Date.now() < spyLock) return;
      entries.forEach(function (e) { if (e.isIntersecting) setActive(e.target.getAttribute("data-sec")); });
    }, { root: $(".layout"), rootMargin: "-8px 0px -65% 0px", threshold: 0 });
    $$(".sec").forEach(function (s) { observer.observe(s); });
  }
  function jump(target, smooth) {
    var el = document.getElementById("sec-" + target) || document.getElementById("grp-" + target);
    if (!el) { $(".layout").scrollTo(0, 0); return; }
    var sec = el.closest(".sec");
    spyLock = Date.now() + (smooth ? 900 : 300);
    setActive(sec.getAttribute("data-sec"));
    var scroller = $(".layout");
    var y = el.getBoundingClientRect().top - scroller.getBoundingClientRect().top + scroller.scrollTop - (el.classList.contains("sec") ? 0 : 12);
    $(".layout").scrollTo({ top: Math.max(0, y), behavior: smooth ? "smooth" : "auto" });
  }

  /* ---------- Rotas ---------- */
  var view = null, currentCat = null;
  function route() {
    var parts = (location.hash || "#/").replace(/^#\/?/, "").split("/");
    closeDrawer();
    if (parts[0] !== "cardapio") {
      view = "home";
      $("#home").hidden = false; $("#menu").hidden = true; $("#appbar").hidden = false;
      setActive(null);
      document.body.classList.remove("in-menu");
      document.title = "Esquina do Espeto - Churrasco & Cerveja";
      $(".layout").scrollTo(0, 0);
    } else {
      var first = view !== "menu";
      view = "menu";
      $("#home").hidden = true; $("#menu").hidden = false; $("#appbar").hidden = false;
      document.body.classList.add("in-menu");
      document.title = "Cardápio · Esquina do Espeto";
      if (first) startSpy();
      var target = parts[1] || MENU[0].id;
      var tEl = document.getElementById("sec-" + target) || document.getElementById("grp-" + target);
      currentCat = tEl ? tEl.closest(".sec").getAttribute("data-sec") : MENU[0].id;
      $$(".sec").forEach(function (sec) { sec.hidden = sec.getAttribute("data-sec") !== currentCat; });
      setActive(currentCat);
      requestAnimationFrame(function () { if (document.getElementById("sec-" + target)) $(".layout").scrollTo(0, 0); else jump(target, !first); });
    }
  }

  /* ---------- Drawer ---------- */
  var scrimFor = null;
  function showScrim(kind) { var s = $("#scrim"); s.hidden = false; s.className = "scrim" + (kind === "opts" ? " top" : ""); scrimFor = kind; }
  function hideScrim() { $("#scrim").hidden = true; scrimFor = null; }
  function openDrawer() {
    $("#drawer").classList.add("open"); $("#drawer").setAttribute("aria-hidden", "false");
    $("#btnMenu").setAttribute("aria-expanded", "true"); showScrim("drawer");
    setTimeout(function () { $("#btnDrawerClose").focus(); }, 60);
  }
  function closeDrawer() {
    if (!$("#drawer").classList.contains("open")) return;
    $("#drawer").classList.remove("open"); $("#drawer").setAttribute("aria-hidden", "true");
    $("#btnMenu").setAttribute("aria-expanded", "false"); hideScrim();
  }

  /* ---------- Sacola (painel) ---------- */
  function openBag() {
    if (DESKTOP.matches) return;
    $("#bag").classList.add("open"); $("#bag").setAttribute("aria-hidden", "false");
    showScrim("bag"); document.body.classList.add("lock");
    setTimeout(function () { $("#btnBagClose").focus(); }, 60);
  }
  function closeBag() {
    if (!$("#bag").classList.contains("open")) return;
    $("#bag").classList.remove("open"); syncBagAria(); hideScrim(); document.body.classList.remove("lock");
  }
  function syncBagAria() { $("#bag").setAttribute("aria-hidden", DESKTOP.matches || $("#bag").classList.contains("open") ? "false" : "true"); }

  function fmtPreco(v) { return 'R$ ' + v.toFixed(2).replace('.', ','); }
  function pad(str, len) { str = String(str); while (str.length < len) str += ' '; return str; }
  function message() {
    var total = totals().t;
    var msg = '*MENU - ESQUINA DO ESPETO*\n';
    msg += '_Pedido feito pelo menu digital_\n\n';
    msg += '`' + pad('Pedido', 17) + 'Valor .' + '`\n';
    MENU.forEach(function (cat) {
      var idsCategoria = bag.ordem.filter(function (k) { return PRODUCTS[k].cat === cat.nome; });
      if (!idsCategoria.length) return;
      msg += '\n> ' + cat.nome + '\n';
      idsCategoria.forEach(function (k) {
        var p = PRODUCTS[k], qty = bag.itens[k];
        var preco = fmtPreco(p.preco * qty);
        msg += '> `' + p.msg + '`\n';
        msg += '> `Quant.: ' + qty + 'x   ' + preco + '`\n';
      });
    });
    msg += '\n`─────────────────────`\n\n';
    msg += '*Total: ' + fmtPreco(total) + '*\n';
    if (bag.obs && bag.obs.trim()) {
      msg += '\n*OBS:*\n' + bag.obs.trim();
    }
    return msg;
  }
  function waUrl() { return `https://wa.me/${PHONE}?text=${encodeURIComponent(message())}`; }
  function sendOrder() {
    const msg = message();
    const url = `https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  }

  function renderBag() {
    var t = totals(), h = "";
    bag.ordem.forEach(function (k) {
      var p = PRODUCTS[k], n = bag.itens[k];
      h += '<li class="bag-item"><div class="bi-name">' + esc(p.nome) + '<span class="bi-unit">' + brl(p.preco) + " cada</span></div>" +
        '<div class="bi-sub">' + brl(n * p.preco) + "</div>" + stepper(k, p.nome) + "</li>";
    });
    $("#bagList").innerHTML = h;
    $("#bagEmpty").hidden = t.q > 0;
    $("#bagForm").hidden = t.q === 0;
    $("#bagFoot").hidden = t.q === 0;
    $("#btnClear").hidden = t.q === 0;
    $("#bagCount").textContent = plural(t.q, "item", "itens");
    $("#bagTotal").textContent = brl(t.t);
    $("#btnSend").href = t.q ? waUrl() : "#";
  }

  /* ---------- Atualização ---------- */
  function refresh(added) {
    var t = totals();
    $$("[data-ctl]").forEach(function (el) {
      var it = ITEMS[el.getAttribute("data-ctl")];
      el.innerHTML = control(it.key, it.nome);
      var inBag = qty(it.key);
      el.parentNode.classList.toggle("in", !!inBag);
    });
    renderBag();
    var bb = $("#bagbar");
    bb.hidden = t.q === 0;
    $("#bbQty").textContent = t.q; $("#bbTotal").textContent = plural(t.q, "item", "itens") + " · " + brl(t.t);
    bb.setAttribute("aria-label", "Finalizar pedido, " + plural(t.q, "item", "itens") + ", " + brl(t.t));
    var dot = $("#bagDot"); dot.hidden = t.q === 0; dot.textContent = t.q;
    if (added && !bb.hidden) { bb.classList.remove("bump"); void bb.offsetWidth; bb.classList.add("bump"); }
  }

  /* ---------- Eventos ---------- */
  document.addEventListener("click", function (e) {
    var b = e.target.closest("[data-act]");
    if (!b) return;
    var act = b.getAttribute("data-act"), k = b.getAttribute("data-key");
    var holder = b.closest("[data-ctl],[data-ctl-opt],.bag-item");
    var path = holder && (holder.getAttribute("data-ctl") ? '[data-ctl="' + holder.getAttribute("data-ctl") + '"]' : holder.getAttribute("data-ctl-opt") ? '[data-ctl-opt="' + k + '"]' : null);
    if (act === "inc") setQty(k, qty(k) + 1);
    if (act === "dec") setQty(k, qty(k) - 1);
    if (path) { var f = $(path + ' [data-act="' + act + '"]') || $(path + " [data-act]"); if (f) f.focus(); }
  });
  $("#btnMenu").addEventListener("click", openDrawer);
  $("#btnDrawerClose").addEventListener("click", closeDrawer);
  $("#drawer").addEventListener("click", function (e) {
    var a = e.target.closest("a"); if (!a) return;
    if (a.getAttribute("href") === location.hash) { e.preventDefault(); closeDrawer(); jump(a.getAttribute("href").split("/")[2], true); }
  });
  $("#btnBagTop").addEventListener("click", openBag);
  $("#bagbar").addEventListener("click", openBag);
  $("#btnBagClose").addEventListener("click", closeBag);
  $("#scrim").addEventListener("click", function () { if (scrimFor === "bag") closeBag(); else closeDrawer(); });
  $("#obs").addEventListener("input", function () { bag.obs = this.value; $("#btnSend").href = waUrl(); });
  $("#btnSend").addEventListener("click", function (e) { e.preventDefault(); if (totals().q) sendOrder(); });
  $("#btnClear").addEventListener("click", function () {
    if (!window.confirm("Limpar o pedido?")) return;
    bag.itens = {}; bag.ordem = []; bag.obs = ""; $("#obs").value = ""; refresh();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key !== "Escape") return;
    if ($("#bag").classList.contains("open")) closeBag(); else if ($("#drawer").classList.contains("open")) closeDrawer();
  });
  (DESKTOP.addEventListener ? DESKTOP.addEventListener.bind(DESKTOP, "change") : DESKTOP.addListener.bind(DESKTOP))(function () { closeBag(); syncBagAria(); });
  window.addEventListener("hashchange", route);

  /* ---------- Início ---------- */
  paintIcons(document);
  renderHome(); renderMenu();
  $("#obs").value = bag.obs || "";
  syncBagAria(); refresh(); route();
  // Compensa a largura da barra de rolagem para alinhar os blocos do pedido.
  var bagScroll = $(".bag-scroll");
  function syncBagInsets() {
    $("#bag").style.setProperty("--bag-scrollbar", Math.max(0, bagScroll.offsetWidth - bagScroll.clientWidth) + "px");
  }
  if ("ResizeObserver" in window) {
    var bagSizeObserver = new ResizeObserver(syncBagInsets);
    bagSizeObserver.observe(bagScroll);
  }
  window.addEventListener("resize", syncBagInsets);
  syncBagInsets();
})();
