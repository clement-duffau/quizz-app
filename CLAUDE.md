# Consignes pour Claude Code — projet « Mes Quiz »

Appli Android (Capacitor 8) qui embarque des quiz en HTML/JS statique, sans bundler.
L'APK est construit par GitHub Actions (`.github/workflows/android.yml`) à chaque push sur `main`
et publié dans les Releases. Il n'y a pas de SDK Android à installer en local.

## Règles
- Tout est en français, ton tutoiement, comme les quiz existants.
- Pas de framework ni de build JS : chaque page est autonome et doit marcher hors ligne
  (pas de CDN, pas de Google Fonts : utiliser `www/shared/fonts/fonts.css`).
- Chaque page de quiz charge, dans le `<head>` et avant tout autre script :
  `../../shared/capacitor.js` puis `../../shared/shell.js` (barre retour, bouton retour Android, voix native).
- La progression est en `localStorage` ; ne jamais renommer une clé existante
  (`quizcult-best-*`, `mm_known_v1`, `mm_best_v1`, `azbuka_alphabet_v1`, `mq-best-*`, `mq-played`, `mq-chrono`).
- Nouveaux quiz : un fichier `www/apps/quiz/data/<nom>.js` + une tuile dans `APPS` de `www/index.html`.
  Vérifier qu'aucune mauvaise réponse n'est égale à la bonne, et qu'il n'y a pas de doublon.
- Les quiz de cours (maths, hyperfréquences, électronique…) n'ont pas leur place ici :
  ils iront dans une seconde appli séparée.
- Ne pas modifier la clé `android/app/mesquiz.keystore` : sinon les mises à jour ne s'installent plus par-dessus.
- Après une modification de `www/`, lancer `npx cap sync android` avant de committer si `android/` a changé.
