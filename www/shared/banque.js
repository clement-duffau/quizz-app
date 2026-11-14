/* Mes Quiz — banque de questions commune et révision espacée.
   MQB.load(id) charge un quiz du moteur commun (data/<id>.js + crédits photo) ; MQB.loadAll(ids) en charge plusieurs.
   MQB.srs : mémoire des erreurs de tous les quiz, qui reviennent après 1, 3, 7, 14 puis 30 jours.
   Clés localStorage : mq-srs-v1 (révision), mq-defi-v1 (défi du jour). Ne jamais les renommer. */
(function () {
  'use strict';
  var me = document.currentScript;
  // Dossier apps/quiz/ vu depuis la page qui charge ce script
  var QUIZ = me && me.src ? me.src.replace(/shared\/banque\.js.*$/, 'apps/quiz/') : '../quiz/';
  var cache = {}, chain = Promise.resolve();

  function read(k) { try { return JSON.parse(localStorage.getItem(k)); } catch (e) { return null; } }
  function write(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
  function addScript(src) {
    return new Promise(function (ok) { var s = document.createElement('script'); s.src = src; s.onload = s.onerror = function () { ok(); }; document.head.appendChild(s); });
  }
  var qid = function (q) { return (q.i || q.b || '') + '|' + q.q; };

  // Identifiants des quiz du moteur commun, d'après le catalogue
  function ids() {
    return (window.MQJ ? MQJ.APPS : []).filter(function (a) { return /apps\/quiz\/index\.html\?t=/.test(a.href) && !/t=(defi|revision)$/.test(a.href); }).map(function (a) { return a.id; });
  }
  // Les fichiers de données posent tous window.QUIZ : on les charge l'un après l'autre
  function load(id) {
    if (cache[id]) return Promise.resolve(cache[id]);
    chain = chain.then(function () {
      if (cache[id]) return;
      var prev = window.QUIZ; window.QUIZ = null;
      return addScript(QUIZ + 'data/' + encodeURIComponent(id) + '.js').then(function () {
        var Q = window.QUIZ; window.QUIZ = prev;
        if (!Q) return;
        Q.items.forEach(function (it) { it.src = id; });
        cache[id] = Q;
        if (Q.items.some(function (it) { return it.i; })) return addScript(QUIZ + 'img/' + encodeURIComponent(id) + '/credits.js');
      });
    });
    return chain.then(function () { return cache[id] || null; });
  }
  function loadAll(list) { return Promise.all((list || ids()).map(load)).then(function (qs) { return qs.filter(Boolean); }); }

  // ---------- Dates locales ----------
  function day(d) { d = d || new Date(); return d.getFullYear() + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + ('0' + d.getDate()).slice(-2); }
  function plus(n) { var d = new Date(); d.setDate(d.getDate() + n); return day(d); }

  // ---------- Révision espacée ----------
  var SKEY = 'mq-srs-v1', STEPS = [1, 3, 7, 14, 30];
  function srsLoad() {
    var s = read(SKEY) || {};
    if (!s._import) {   // première fois : on reprend les erreurs déjà mémorisées par chaque quiz
      try {
        Object.keys(localStorage).forEach(function (k) {
          if (k.indexOf('mq-miss-') !== 0) return;
          (read(k) || []).forEach(function (q) { var key = k.slice(8) + '§' + q; if (!s[key]) s[key] = { b: 0, d: day() }; });
        });
      } catch (e) {}
      s._import = 1; write(SKEY, s);
    }
    return s;
  }
  var srs = {
    key: function (quiz, q) { return quiz + '§' + qid(q); },
    // Une erreur dans un quiz : la question reviendra demain
    miss: function (quiz, q) { var s = srsLoad(); s[srs.key(quiz, q)] = { b: 0, d: plus(1) }; write(SKEY, s); },
    // Réponse pendant la révision : on espace, ou on recommence
    review: function (key, ok) {
      var s = srsLoad(), e = s[key] || { b: 0 };
      // erreur → demain ; puis réussites → +3, +7, +14, +30 jours ; la 5e réussite la retire de la révision
      if (ok) { e.b++; if (e.b >= STEPS.length) delete s[key]; else { e.d = plus(STEPS[e.b]); s[key] = e; } }
      else s[key] = { b: 0, d: plus(1) };
      write(SKEY, s);
    },
    due: function () { var s = srsLoad(), t = day(); return Object.keys(s).filter(function (k) { return k !== '_import' && s[k].d <= t; }); },
    total: function () { return Object.keys(srsLoad()).filter(function (k) { return k !== '_import'; }).length; }
  };

  // ---------- Défi du jour : même tirage pour tout le monde, d'après la date ----------
  function rng(seed) { return function () { seed |= 0; seed = seed + 0x6D2B79F5 | 0; var t = Math.imul(seed ^ seed >>> 15, 1 | seed); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
  function seedOf(s) { var h = 2166136261; for (var i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; }
  var DKEY = 'mq-defi-v1';
  var defi = {
    today: day,
    rng: function (salt) { return rng(seedOf('mesquiz-' + day() + (salt || ''))); },
    get: function (d) { return (read(DKEY) || {})[d || day()] || null; },
    save: function (r) { var all = read(DKEY) || {}; if (!all[day()]) { all[day()] = r; write(DKEY, all); return true; } return false; },
    streak: function () { var all = read(DKEY) || {}, n = 0, d = new Date(); if (!all[day(d)]) d.setDate(d.getDate() - 1); while (all[day(d)]) { n++; d.setDate(d.getDate() - 1); } return n; }
  };

  // ---------- Partage (plugin Capacitor, sinon partage du navigateur, sinon copie) ----------
  function share(text, title) {
    var cap = window.Capacitor, S = null;
    try { if (cap && cap.isNativePlatform && cap.isNativePlatform()) S = cap.registerPlugin('Share'); } catch (e) {}
    if (S) return S.share({ title: title || 'Mes Quiz', text: text, dialogTitle: 'Partager' }).then(function () { return 'shared'; }, function () { return 'cancel'; });
    if (navigator.share) return navigator.share({ title: title || 'Mes Quiz', text: text }).then(function () { return 'shared'; }, function () { return 'cancel'; });
    return copy(text);
  }
  function copy(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) return navigator.clipboard.writeText(text).then(function () { return 'copied'; }, function () { return 'fail'; });
    return Promise.resolve('fail');
  }

  window.MQB = { ids: ids, load: load, loadAll: loadAll, qid: qid, day: day, plus: plus, srs: srs, defi: defi, share: share, copy: copy, base: QUIZ };
})();
