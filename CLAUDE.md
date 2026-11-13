# Consignes pour Claude Code — projet « Mes Quiz »

Appli Android (Capacitor 8) qui embarque des quiz en HTML/JS statique, sans bundler.
L'APK est construit par GitHub Actions (`.github/workflows/android.yml`) à chaque push sur `main`
et publié dans les Releases. Il n'y a pas de SDK Android à installer en local.

## Règles
- Tout est en français, ton tutoiement, comme les quiz existants.
- Pas de framework ni de build JS : chaque page est autonome et doit marcher hors ligne
  (pas de CDN, pas de Google Fonts : utiliser `www/shared/fonts/fonts.css`).
- Chaque page de quiz charge, dans le `<head>` et avant tout autre script :
  `../../shared/capacitor.js` puis `../../shared/shell.js` (barre retour, bouton retour Android, voix native),
  puis `../../shared/journal.js` (historique des parties pour la page Profil).
- Chaque fin de partie appelle `MQJ.log({ a: <id du quiz>, m: <mode>, g: <bonnes réponses>, n: <questions>, s: <score> })`.
- La progression est en `localStorage` ; ne jamais renommer une clé existante
  (`quizcult-best-*`, `mm_known_v1`, `mm_best_v1`, `azbuka_alphabet_v1`, `mq-best-*`, `mq-played`, `mq-chrono`,
  `mq-journal-v1`, `mq-profile-v1`, `mq-miss-*`).
- Nouveaux quiz : un fichier `www/apps/quiz/data/<nom>.js` + une entrée dans `APPS` de `www/shared/journal.js`
  (catalogue commun à l'accueil et au profil ; l'`id` doit être égal à `<nom>`).
  Vérifier qu'aucune mauvaise réponse n'est égale à la bonne, et qu'il n'y a pas de doublon.
- Les quiz de cours (maths, hyperfréquences, électronique…) n'ont pas leur place ici :
  ils iront dans une seconde appli séparée.
- Pas de question en double avec les autres quiz (Culture G et Sciences couvrent déjà beaucoup de records et de dates).
- Photos du quiz militaire : `www/apps/militaire/img/<slug>.jpg` (≤ 720 px, JPEG ~75 %), décrites dans `img/credits.js`
  (auteur, licence, page Commons). Garder les crédits à jour : ils s'affichent sous chaque photo et dans le catalogue.
- Ne pas modifier la clé `android/app/mesquiz.keystore` : sinon les mises à jour ne s'installent plus par-dessus.
- Après une modification de `www/`, lancer `npx cap sync android` avant de committer si `android/` a changé.
