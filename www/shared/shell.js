/* Mes Quiz — coque commune injectée dans chaque quiz.
   1) barre du haut « ‹ Mes Quiz » pour revenir à l'accueil
   2) dans l'appli Android : remplace la synthèse vocale du navigateur
      (absente de la WebView Android) par le moteur de voix natif. */
(function () {
  'use strict';
  var cap = window.Capacitor;
  var native = !!(cap && cap.isNativePlatform && cap.isNativePlatform());

  // ---------- Synthèse vocale native ----------
  var plug = function (n) { try { return cap.registerPlugin ? cap.registerPlugin(n) : cap.Plugins[n]; } catch (e) { return cap.Plugins && cap.Plugins[n]; } };
  var TTS = native && plug('TextToSpeech');
  var APP = native && plug('App');
  if (TTS) {
    var Utter = function (text) { this.text = text || ''; this.lang = ''; this.rate = 1; this.pitch = 1; this.volume = 1; this.voice = null; };
    var synth = {
      speaking: false, pending: false, paused: false, onvoiceschanged: null,
      getVoices: function () { return [{ name: 'Android', lang: 'ru-RU', localService: true, default: true, voiceURI: 'android-ru' }]; },
      speak: function (u) {
        synth.speaking = true;
        TTS.speak({ text: u.text, lang: u.lang || 'fr-FR', rate: u.rate || 1, pitch: u.pitch || 1, volume: u.volume == null ? 1 : u.volume, queueStrategy: 0 })
          .catch(function () {})
          .then(function () { synth.speaking = false; if (typeof u.onend === 'function') u.onend(); });
      },
      cancel: function () { synth.speaking = false; try { TTS.stop(); } catch (e) {} },
      pause: function () {}, resume: function () {}
    };
    try {
      Object.defineProperty(window, 'speechSynthesis', { value: synth, configurable: true, writable: true });
      Object.defineProperty(window, 'SpeechSynthesisUtterance', { value: Utter, configurable: true, writable: true });
    } catch (e) { window.speechSynthesis = synth; window.SpeechSynthesisUtterance = Utter; }
  }

  // ---------- Effets sonores (validés par Clément) : MQS.play('ok' | 'bad' | 'fin') ----------
  var me = document.currentScript;
  var base = me && me.src ? me.src.replace(/[^\/]*$/, '') + 'sons/' : '../../shared/sons/';
  var FILES = { ok: 'bonne-reponse.mp3', bad: 'erreur.mp3', fin: 'fin.mp3' }, cache = {};
  function sfxOn() { try { return localStorage.getItem('mq-sfx') !== '0'; } catch (e) { return true; } }
  function sfxSet(v) { try { localStorage.setItem('mq-sfx', v ? '1' : '0'); } catch (e) {} }
  function play(n) {
    if (!sfxOn() || !FILES[n]) return;
    try {
      var a = cache[n] || (cache[n] = new Audio(base + FILES[n]));
      a.volume = 0.7; a.currentTime = 0;
      var p = a.play(); if (p && p.catch) p.catch(function () {});
    } catch (e) {}
  }
  window.MQS = { play: play, on: sfxOn, set: sfxSet };

  // ---------- Barre « retour à l'accueil » ----------
  var home = me && me.getAttribute('data-home') || '../../index.html';
  var css = '' +
    ':root{padding-top:0!important}' +
    '#mq-bar{position:sticky;top:0;z-index:15;display:flex;align-items:center;gap:8px;' +
      'padding:calc(6px + env(safe-area-inset-top,0px)) 12px 6px;font:600 15px/1.2 system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;' +
      'background:rgba(246,244,238,.86);color:#1d1b16;border-bottom:1px solid rgba(0,0,0,.08);' +
      '-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px)}' +
    '#mq-bar a{display:inline-flex;align-items:center;gap:6px;color:inherit;text-decoration:none;padding:7px 12px 7px 8px;border-radius:999px;background:rgba(0,0,0,.06)}' +
    '#mq-bar a:active{transform:scale(.96)}' +
    '#mq-bar a svg{width:18px;height:18px}' +
    '#mq-bar span{opacity:.6;font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;flex:1;min-width:0}' +
    '#mq-bar #mq-sfx{flex:none;border:0;background:rgba(0,0,0,.06);border-radius:999px;width:38px;height:34px;font-size:17px;cursor:pointer;color:inherit}' +
    '@media (prefers-color-scheme:dark){#mq-bar #mq-sfx{background:rgba(255,255,255,.08)}}' +
    '@media (prefers-color-scheme:dark){#mq-bar{background:rgba(20,19,24,.86);color:#f2efe8;border-bottom-color:rgba(255,255,255,.08)}#mq-bar a{background:rgba(255,255,255,.08)}}';
  function mount() {
    if (document.getElementById('mq-bar')) return;
    var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);
    var bar = document.createElement('div'); bar.id = 'mq-bar';
    var title = (document.querySelector('meta[name="mq-title"]') || {}).content || document.title.split(/[—–:]/)[0].trim();
    bar.innerHTML = '<a href="' + home + '" aria-label="Retour à Mes Quiz"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>Mes Quiz</a><span></span>';
    bar.querySelector('span').textContent = title;
    var sb = document.createElement('button'); sb.id = 'mq-sfx';
    var paint = function () { var on = sfxOn(); sb.textContent = on ? '🔔' : '🔕'; sb.setAttribute('aria-label', on ? 'Couper les effets sonores' : 'Activer les effets sonores'); sb.setAttribute('aria-pressed', on); };
    sb.addEventListener('click', function () { sfxSet(!sfxOn()); paint(); if (sfxOn()) play('ok'); });
    paint(); bar.appendChild(sb);
    document.body.insertBefore(bar, document.body.firstChild);
  }
  if (document.body) mount(); else document.addEventListener('DOMContentLoaded', mount);

  // ---------- Bouton retour Android : remonter, sinon revenir à l'accueil ----------
  if (APP) {
    APP.addListener('backButton', function (ev) {
      if (ev && ev.canGoBack) history.back(); else location.href = home;
    });
  }
})();
