/* Jeux vidéo */
(function(){
const N = '🍄', H = '🕹️', M = '🎮';
const items = [
 // Nintendo et ses héros
 {k:'Nintendo',e:N,q:"Qui a créé Mario ?",r:"Shigeru Miyamoto",w:["Hideo Kojima","Satoru Iwata","Hironobu Sakaguchi"],f:"Il a aussi créé Zelda et Donkey Kong."},
 {k:'Nintendo',e:N,q:"Quel est le métier de Mario ?",r:"Plombier",w:["Électricien","Maçon","Boulanger"],f:"Dans « Donkey Kong » (1981), sa toute première apparition, il était charpentier et s'appelait Jumpman."},
 {k:'Nintendo',e:N,q:"Comment s'appelle le frère de Mario ?",r:"Luigi",w:["Wario","Toad","Yoshi"],f:"Plus grand, habillé en vert, et souvent plus froussard."},
 {k:'Nintendo',e:N,q:"Comment s'appelle le grand méchant des jeux Mario ?",r:"Bowser",w:["Wario","Ganon","Docteur Eggman"],f:"Le roi des Koopas, qui enlève régulièrement la princesse Peach."},
 {k:'Nintendo',e:N,q:"Que fait le Super Champignon à Mario ?",r:"Il le fait grandir",w:["Il le rend invincible","Il lui permet de voler","Il lui fait lancer des boules de feu"],f:"L'étoile rend invincible, la fleur de feu permet de lancer des boules de feu."},
 {k:'Nintendo',e:N,q:"Comment s'appelle le héros de « The Legend of Zelda » ?",r:"Link",w:["Zelda","Ganon","Epona"],f:"Zelda est la princesse, Ganon le méchant, Epona la jument de Link."},
 {k:'Nintendo',e:N,q:"Quel personnage rose de Nintendo aspire ses ennemis pour copier leurs pouvoirs ?",r:"Kirby",w:["Rondoudou","Yoshi","Toad"],f:"Créé en 1992 par Masahiro Sakurai."},
 {k:'Nintendo',e:N,q:"Que lance Donkey Kong sur Mario dans le jeu d'arcade de 1981 ?",r:"Des tonneaux",w:["Des bananes","Des pierres","Des noix de coco"],f:"Le jeu qui a fait connaître Nintendo aux États-Unis."},
 {k:'Nintendo',e:N,q:"Avant les jeux vidéo, que fabriquait Nintendo à sa création en 1889 ?",r:"Des cartes à jouer",w:["Des jouets en bois","Des téléviseurs","Des machines à coudre"],f:"Des cartes japonaises appelées hanafuda, à Kyoto."},
 {k:'Nintendo',e:N,q:"En quelle année est sortie la première Game Boy ?",r:"1989",w:["1985","1992","1995"],f:"Livrée avec « Tetris », elle s'est vendue à plus de 100 millions d'exemplaires (avec la Game Boy Color)."},
 {k:'Nintendo',e:N,q:"Combien de Pokémon comptait la première génération ?",r:"151",w:["100","150","251"],f:"Le 151e, Mew, était caché dans le jeu."},
 // Grands classiques
 {k:'Classiques',e:H,q:"Qui a inventé Tetris, en 1984 ?",r:"Alekseï Pajitnov",w:["Shigeru Miyamoto","Nolan Bushnell","Toru Iwatani"],f:"Un ingénieur soviétique, à Moscou ; il n'a touché de droits qu'à partir de 1996."},
 {k:'Classiques',e:H,q:"Combien de fantômes poursuivent Pac-Man ?",r:"4",w:["3","5","6"],f:"Blinky, Pinky, Inky et Clyde, chacun avec sa façon de chasser."},
 {k:'Classiques',e:H,q:"Que mange Pac-Man pour pouvoir dévorer les fantômes ?",r:"Une super pac-gomme",w:["Une cerise","Une banane","Un champignon"],f:"Les fantômes deviennent bleus et fuient pendant quelques secondes."},
 {k:'Classiques',e:H,q:"De quel pays vient le jeu « Space Invaders » (1978) ?",r:"Le Japon",w:["Les États-Unis","Le Royaume-Uni","La France"],f:"Créé par Tomohiro Nishikado pour la société Taito."},
 {k:'Classiques',e:H,q:"Quel hérisson bleu est la mascotte de Sega ?",r:"Sonic",w:["Crash","Spyro","Knuckles"],f:"Créé en 1991 pour concurrencer Mario ; Knuckles est un échidné rouge."},
 {k:'Classiques',e:H,q:"Comment s'appelle l'ennemi de Sonic ?",r:"Le docteur Eggman (Robotnik)",w:["Bowser","Ganon","Wario"],f:"Il transforme les animaux en robots."},
 {k:'Classiques',e:H,q:"Dans quelle série d'aventure joue-t-on l'archéologue Lara Croft ?",r:"Tomb Raider",w:["Uncharted","Resident Evil","Prince of Persia"],f:"Le premier épisode est sorti en 1996."},
 {k:'Classiques',e:H,q:"Que signifie « GTA » ?",r:"Grand Theft Auto",w:["Great Tactical Action","Game Time Arena","Global Traffic Adventure"],f:"« Vol de voiture » en jargon policier américain ; une série écossaise, du studio Rockstar North."},
 {k:'Classiques',e:H,q:"Quel jeu met en scène des oiseaux lancés sur des cochons ?",r:"Angry Birds",w:["Flappy Bird","Cut the Rope","Fruit Ninja"],f:"Sorti en 2009 sur téléphone."},
 {k:'Classiques',e:H,q:"De quel pays vient Angry Birds ?",r:"La Finlande",w:["La Suède","Le Danemark","La Norvège"],f:"Du studio Rovio, à Espoo, près d'Helsinki."},
 // Jeux d'aujourd'hui
 {k:'Aujourd’hui',e:M,q:"Dans Minecraft, quelle créature verte explose quand elle s'approche ?",r:"Le creeper",w:["Le zombie","L'enderman","Le squelette"],f:"Il serait né d'une erreur de modélisation d'un cochon."},
 {k:'Aujourd’hui',e:M,q:"Quel éditeur français a créé « Assassin's Creed » ?",r:"Ubisoft",w:["Activision","Electronic Arts","Square Enix"],f:"Le premier épisode a été développé au studio de Montréal en 2007."},
 {k:'Aujourd’hui',e:M,q:"Quel personnage sans bras ni jambes a été créé par le Français Michel Ancel ?",r:"Rayman",w:["Sonic","Crash Bandicoot","Kirby"],f:"Ses mains et ses pieds flottent ; les Lapins crétins sont nés dans un de ses jeux."},
 {k:'Aujourd’hui',e:M,q:"Quel studio a créé « Fortnite » ?",r:"Epic Games",w:["Riot Games","Valve","Blizzard"],f:"Le mode « Battle Royale » est sorti en 2017."},
 {k:'Aujourd’hui',e:M,q:"Quel studio a créé « League of Legends » ?",r:"Riot Games",w:["Blizzard","Valve","Epic Games"],f:"L'un des jeux les plus joués en compétition (e-sport)."},
 {k:'Aujourd’hui',e:M,q:"Quel jeu de construction en cubes a été créé par le Suédois Markus Persson ?",r:"Minecraft",w:["Roblox","Terraria","Lego Worlds"],f:"Racheté par Microsoft en 2014 pour 2,5 milliards de dollars."},
 {k:'Aujourd’hui',e:M,q:"Dans « Animal Crossing », quel personnage te prête de l'argent pour agrandir ta maison ?",r:"Tom Nook",w:["Marie","Kéké","Méli"],f:"Un tanuki commerçant ; on le rembourse en clochettes, la monnaie du jeu."},
 {k:'Aujourd’hui',e:M,q:"Comment s'appelle la console hybride de Nintendo sortie en 2017, à la fois portable et de salon ?",r:"La Switch",w:["La Wii U","La GameCube","La 3DS"],f:"Elle se glisse dans un socle pour jouer sur la télévision."},
 {k:'Aujourd’hui',e:M,q:"Dans « Among Us », comment appelle-t-on les joueurs qui sabotent le vaisseau ?",r:"Les imposteurs",w:["Les traîtres","Les espions","Les saboteurs"],f:"Les autres sont les « crewmates », qui doivent les démasquer."}
];
window.QUIZ = {
  title: 'Jeux vidéo', emoji: '🎮', color: '#4338CA', color2: '#22C55E',
  sub: 'Nintendo, grands classiques et jeux d’aujourd’hui.',
  modes: [
    { id: 'Nintendo', label: 'Nintendo et ses héros', emoji: N },
    { id: 'Classiques', label: 'Grands classiques', emoji: H },
    { id: 'Aujourd’hui', label: 'Jeux d’aujourd’hui', emoji: M }
  ],
  items
};
})();
