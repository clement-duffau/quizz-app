# Mes Quiz

Appli Android qui regroupe mes quiz :

| Quiz | Contenu |
|---|---|
| 🧠 Culture G & acronymes | 38 acronymes, 98 questions de culture générale, chrono et combos |
| 🛡️ Matériel militaire | 69 équipements : fiches chiffrées avec photo, quiz, catalogue |
| Я Russe | L'alphabet (7 leçons), puis 21 leçons façon Duolingo : 194 mots avec accent tonique et prononciation, phrases à assembler, écoute, paires, « écoute et écris » au clavier cyrillique (voix Android) |
| 🚩 Drapeaux & capitales | 97 pays : drapeaux, capitales, capitale → pays |
| 🔭 Sciences & espace | Espace, chimie, physique & unités, vivant |
| 💡 Marques & tech | Fondateurs, dates clés, origine des noms, pays d'origine |
| ⏳ Histoire & dates | Grandes dates, inventions, personnages |
| 🗺️ Géographie | Fleuves, sommets, records du monde, la France |
| 🐾 Animaux & nature | Records du vivant, petits et cris, classification, plantes |
| ⚽ Sport | Règles, légendes, grandes compétitions |
| 🗣️ Langue française | Expressions, pièges d'orthographe, mots et origines |
| ✈️ Aviation & espace | Pionniers, avions et radio, conquête spatiale |
| 🏛️ Mythologies | Dieux grecs et romains, héros et créatures, Vikings, Égypte et ailleurs |
| 🎨 Arts & musique | Peinture et sculpture, 20 tableaux en images, musique classique, chanson, pop et rock |
| 🍽️ Gastronomie | Spécialités françaises, cuisines du monde, produits et techniques |
| 🏛️ Monuments du monde | 36 monuments à reconnaître en photo |
| 🐶 Chiens & chats | 35 races à reconnaître en photo |
| 🎬 Cinéma & BD | Films, dessins animés, bande dessinée |
| 📚 Littérature | Auteurs et œuvres, personnages et contes, citations et poésie |
| 🕹️ Jeux vidéo | Nintendo, grands classiques, jeux d'aujourd'hui |
| 🇫🇷 La France en photos | 28 monuments, paysages et villes de France |
| 🐦 Oiseaux | 27 oiseaux de France à reconnaître en photo |

Et aussi :

- **Aujourd'hui** (en haut de l'accueil) : le **défi du jour** (10 questions de 10 quiz, les mêmes pour tout le monde,
  score à partager) et la **révision du jour** (tes erreurs de tous les quiz reviennent après 1, 3, 7, 14 puis 30 jours).
- **Jeux** : Vrai ou faux (60 secondes), Plus ou moins (population, superficie, sommets, fleuves, dates…), Duel à deux.
- **Sauvegarde** dans le profil : exporter la progression dans un fichier, la réimporter sur un autre téléphone.

- **Mon profil** (carte en haut de l'accueil) : pseudo et avatar, niveau, série de jours 🔥, objectif du jour,
  graphique jour après jour, calendrier, progression par quiz, badges et dernières parties.
- **À revoir** : dans les quiz à modes, les questions ratées reviennent jusqu'à ce qu'elles soient réussies.
- **Effets sonores** (bonne réponse, erreur, fin de partie) dans tous les quiz, à couper avec le bouton 🔔 en haut à droite.
- **Photos** dans la correction de nombreuses questions (histoire, sciences, géographie, nature, aviation, mythologie, gastronomie, arts).
- **Photos** des équipements militaires (Wikimedia Commons, crédits dans le catalogue) et un quiz « Photos seulement ».

## Installer l'appli sur le téléphone

À chaque `push` sur `main`, GitHub construit l'APK tout seul (onglet **Actions**, ~5 min)
et le publie dans **Releases**.

1. Sur le téléphone, ouvrir `https://github.com/clement-duffau/quizz-app/releases/latest`.
2. Toucher **MesQuiz.apk** pour le télécharger, puis l'ouvrir.
3. La première fois, Android demande d'autoriser l'installation depuis le navigateur : accepter.

Les versions suivantes s'installent par-dessus sans perdre la progression
(l'APK est toujours signé avec la même clé, `android/app/mesquiz.keystore`).

Pour la voix russe : *Paramètres → Système → Langues → Synthèse vocale* (moteur Google),
puis télécharger la voix russe si elle n'y est pas.

## Structure

```
www/                      l'appli web (ce que contient l'APK)
  index.html              écran d'accueil
  apps/profil/index.html  page profil, progression et sauvegarde
  apps/jeux/              Vrai ou faux, Plus ou moins, Duel (+ chiffres.js)
  apps/culture|militaire|russe/index.html   les quiz existants (fichiers uniques)
  apps/militaire/img/     photos des équipements + credits.js
  apps/russe/cours.js     leçons de russe après l'alphabet (mots, phrases, astuces)
  apps/quiz/index.html    moteur commun des nouveaux quiz (?t=drapeaux…)
  apps/quiz/data/*.js     les questions de chaque nouveau quiz
  apps/quiz/img/<quiz>/   photos des quiz illustrés + credits.js
  shared/shell.js         barre « ‹ Mes Quiz », bouton retour Android, voix native
  shared/journal.js       catalogue des quiz + historique des parties (profil)
  shared/banque.js        banque de questions, révision espacée, défi du jour, partage
  shared/fonts/           polices embarquées (l'appli marche hors ligne)
android/                  projet Android généré par Capacitor
.github/workflows/android.yml   construction automatique de l'APK
```

## Ajouter un quiz

Créer `www/apps/quiz/data/<nom>.js` sur le modèle de `histoire.js`
(une question = `{k: catégorie, q, r: bonne réponse, w: [3 mauvaises ou plus], f: anecdote}`),
puis ajouter son entrée dans `APPS` de `www/shared/journal.js` (même `id` que le nom du fichier).

## Tester sur PC

```
npm install
npm run serve        # puis ouvrir http://localhost:8080
```
