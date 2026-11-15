/* Mes Quiz — journal de progression commun à tous les quiz.
   Chaque partie terminée appelle MQJ.log({ a, m, g, n, s }) :
     a = identifiant du quiz (voir APPS), m = mode, g = bonnes réponses, n = questions, s = score.
   Tout reste dans le localStorage du téléphone, sous des clés nouvelles :
     mq-journal-v1  (historique), mq-profile-v1 (pseudo, avatar, objectif du jour).
   Ne jamais renommer ces clés. */
(function () {
  'use strict';
  var KEY = 'mq-journal-v1', PKEY = 'mq-profile-v1', MAX_GAMES = 600;

  // Catalogue des quiz : sert à l'accueil et au profil.
  // g = rubrique de l'accueil, href relatif à www/
  var APPS = [
    { id: 'defi',      g: 'today', href: 'apps/quiz/index.html?t=defi',     em: '🗓️', t: 'Défi du jour', s: '10 questions, les mêmes pour tous', c: '#DC2626' },
    { id: 'revision',  g: 'today', href: 'apps/quiz/index.html?t=revision', em: '🔁', t: 'Révision du jour', s: 'Tes erreurs, au bon moment', c: '#7C3AED' },
    { id: 'vraifaux',  g: 'jeux',  href: 'apps/jeux/index.html?j=vf',       em: '⚖️', t: 'Vrai ou faux', s: '60 secondes chrono', c: '#0891B2' },
    { id: 'plusmoins', g: 'jeux',  href: 'apps/jeux/index.html?j=pm',       em: '📈', t: 'Plus ou moins', s: 'Le plus grand, le plus ancien…', c: '#65A30D' },
    { id: 'duel',      g: 'jeux',  href: 'apps/jeux/index.html?j=duel',     em: '🤝', t: 'Duel à deux', s: 'Sur le même téléphone', c: '#DB2777' },
    { id: 'culture',   g: 'mine',  href: 'apps/culture/index.html',   em: '🧠', t: 'Culture G & acronymes', s: 'HDMI, LASER, géo, histoire…', c: '#3B2EF0' },
    { id: 'militaire', g: 'mine',  href: 'apps/militaire/index.html', em: '🛡️', t: 'Matériel militaire', s: 'Fiches, photos et quiz', c: '#1F5673' },
    { id: 'russe',     g: 'mine',  href: 'apps/russe/index.html',     em: 'Я', t: 'Russe', s: 'Alphabet, mots et phrases', c: '#2456D6' },
    { id: 'drapeaux',  g: 'more',  href: 'apps/quiz/index.html?t=drapeaux', em: '🚩', t: 'Drapeaux & capitales', s: '97 pays, 3 modes', c: '#D6332B' },
    { id: 'sciences',  g: 'more',  href: 'apps/quiz/index.html?t=sciences', em: '🔭', t: 'Sciences & espace', s: 'Planètes, chimie, unités', c: '#5B3FD9' },
    { id: 'tech',      g: 'more',  href: 'apps/quiz/index.html?t=tech',     em: '💡', t: 'Marques & tech', s: 'Fondateurs et origines', c: '#0F8A7E' },
    { id: 'histoire',  g: 'more',  href: 'apps/quiz/index.html?t=histoire', em: '⏳', t: 'Histoire & dates', s: 'De Alésia à l’euro', c: '#B5522A' },
    { id: 'geo',       g: 'more',  href: 'apps/quiz/index.html?t=geo',      em: '🗺️', t: 'Géographie', s: 'Fleuves, sommets, records', c: '#2F7D32' },
    { id: 'nature',    g: 'more',  href: 'apps/quiz/index.html?t=nature',   em: '🐾', t: 'Animaux & nature', s: 'Records, petits et cris', c: '#C2410C' },
    { id: 'sport',     g: 'more',  href: 'apps/quiz/index.html?t=sport',    em: '⚽', t: 'Sport', s: 'Règles, records, légendes', c: '#0E7490' },
    { id: 'langue',    g: 'more',  href: 'apps/quiz/index.html?t=langue',   em: '🗣️', t: 'Langue française', s: 'Expressions et pièges', c: '#9D174D' },
    { id: 'aviation',  g: 'more',  href: 'apps/quiz/index.html?t=aviation', em: '✈️', t: 'Aviation & espace', s: 'Pionniers, avions, fusées', c: '#334155' },
    { id: 'mythologie', g: 'more',  href: 'apps/quiz/index.html?t=mythologie', em: '⚡', t: 'Mythologies', s: 'Grecs, Vikings, Égypte', c: '#6D28D9' },
    { id: 'arts',      g: 'more',  href: 'apps/quiz/index.html?t=arts',     em: '🎨', t: 'Arts & musique', s: 'Tableaux en images, musique', c: '#BE185D' },
    { id: 'cuisine',   g: 'more',  href: 'apps/quiz/index.html?t=cuisine',  em: '🍽️', t: 'Gastronomie', s: 'Spécialités et cuisines du monde', c: '#B45309' },
    { id: 'monuments', g: 'more',  href: 'apps/quiz/index.html?t=monuments', em: '🏛️', t: 'Monuments du monde', s: 'Reconnais-les en photo', c: '#0F766E' },
    { id: 'animaux',   g: 'more',  href: 'apps/quiz/index.html?t=animaux',  em: '🐶', t: 'Chiens & chats', s: 'Les races en photo', c: '#9A3412' },
    { id: 'cinema',    g: 'more',  href: 'apps/quiz/index.html?t=cinema',   em: '🎬', t: 'Cinéma & BD', s: 'Films, dessins animés, BD', c: '#1E3A8A' },
    { id: 'litterature', g: 'fresh', href: 'apps/quiz/index.html?t=litterature', em: '📚', t: 'Littérature', s: 'Auteurs, personnages, citations', c: '#7C2D12' },
    { id: 'jeuxvideo', g: 'fresh', href: 'apps/quiz/index.html?t=jeuxvideo', em: '🕹️', t: 'Jeux vidéo', s: 'Mario, Tetris, Minecraft…', c: '#4338CA' },
    { id: 'france',    g: 'fresh', href: 'apps/quiz/index.html?t=france',   em: '🇫🇷', t: 'La France en photos', s: 'Monuments, paysages, villes', c: '#1D4ED8' },
    { id: 'oiseaux',   g: 'fresh', href: 'apps/quiz/index.html?t=oiseaux',  em: '🐦', t: 'Oiseaux', s: 'Les oiseaux de France en photo', c: '#15803D' }
  ];

  function read(k) { try { return JSON.parse(localStorage.getItem(k)); } catch (e) { return null; } }
  function write(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
  function pad(n) { return (n < 10 ? '0' : '') + n; }
  function dayKey(d) { d = d || new Date(); return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()); }
  function addDays(d, n) { var x = new Date(d.getFullYear(), d.getMonth(), d.getDate()); x.setDate(x.getDate() + n); return x; }
  function blank() { return { v: 1, since: dayKey(), days: {}, apps: {}, games: [], tot: { p: 0, g: 0, n: 0, perfect: 0, night: 0, early: 0 } }; }

  function load() {
    var j = read(KEY);
    if (!j || j.v !== 1) j = blank();
    j.days = j.days || {}; j.apps = j.apps || {}; j.games = j.games || []; j.tot = j.tot || blank().tot;
    return j;
  }

  function log(e) {
    if (!e || !e.a || !(e.n > 0)) return null;
    var j = load(), now = new Date(), dk = dayKey(now);
    var g = Math.max(0, Math.min(e.g | 0, e.n | 0)), n = e.n | 0;
    var day = j.days[dk] || (j.days[dk] = { p: 0, g: 0, n: 0, a: {} });
    day.p++; day.g += g; day.n += n; day.a[e.a] = (day.a[e.a] || 0) + 1;
    var ap = j.apps[e.a] || (j.apps[e.a] = { p: 0, g: 0, n: 0, best: 0, first: dk, last: dk });
    ap.p++; ap.g += g; ap.n += n; ap.last = dk; ap.best = Math.max(ap.best || 0, Math.round(g / n * 100));
    j.tot.p++; j.tot.g += g; j.tot.n += n;
    if (g === n && n >= 5) j.tot.perfect++;
    var h = now.getHours();
    if (h >= 23 || h < 4) j.tot.night++;
    if (h >= 5 && h < 7) j.tot.early++;
    j.games.push({ t: now.getTime(), a: e.a, m: e.m ? String(e.m).slice(0, 40) : '', g: g, n: n, s: e.s | 0 });
    if (j.games.length > MAX_GAMES) j.games = j.games.slice(-MAX_GAMES);
    write(KEY, j);
    return j;
  }

  // Série de jours consécutifs avec au moins une partie (aujourd'hui ou hier compris)
  function streak(j) {
    j = j || load();
    var d = new Date(), n = 0;
    if (!j.days[dayKey(d)]) d = addDays(d, -1);
    while (j.days[dayKey(d)]) { n++; d = addDays(d, -1); }
    return n;
  }
  function bestStreak(j) {
    j = j || load();
    var keys = Object.keys(j.days).sort(), best = 0, cur = 0, prev = null;
    keys.forEach(function (k) {
      var p = k.split('-'), d = new Date(+p[0], +p[1] - 1, +p[2]);
      cur = prev && dayKey(addDays(prev, 1)) === k ? cur + 1 : 1;
      best = Math.max(best, cur); prev = d;
    });
    return best;
  }

  function profile() {
    var p = read(PKEY) || {};
    return { name: p.name || '', avatar: p.avatar || '🦊', goal: p.goal || 3 };
  }
  function saveProfile(p) { write(PKEY, { name: String(p.name || '').slice(0, 24), avatar: p.avatar || '🦊', goal: Math.max(1, Math.min(20, p.goal | 0 || 3)) }); }

  // Niveau : basé sur le nombre total de bonnes réponses
  function level(good) {
    var lv = 1, need = 20, acc = 0;
    while (good >= acc + need) { acc += need; lv++; need = Math.round(need * 1.25); }
    return { lv: lv, cur: good - acc, need: need };
  }

  function app(id) { for (var i = 0; i < APPS.length; i++) if (APPS[i].id === id) return APPS[i]; return { id: id, em: '❓', t: id, c: '#666' }; }

  function reset() { try { localStorage.removeItem(KEY); } catch (e) {} }

  window.MQJ = { APPS: APPS, app: app, load: load, log: log, streak: streak, bestStreak: bestStreak, dayKey: dayKey, addDays: addDays,
    profile: profile, saveProfile: saveProfile, level: level, reset: reset };
})();
