/* Sport */
(function(){
const R = '📏', L = '🏅', C = '🏆';
const items = [
 // Règles
 {k:'Règles',e:R,q:"Combien de joueurs par équipe sont sur le terrain au football ?",r:"11",w:["10","12","9"],f:"Dont un gardien de but."},
 {k:'Règles',e:R,q:"Combien de joueurs par équipe au rugby à XIII ?",r:"13",w:["15","11","12"],f:"Comme son nom l'indique ; le rugby à XV en aligne 15."},
 {k:'Règles',e:R,q:"Combien de joueurs par équipe sont sur le terrain au basket ?",r:"5",w:["6","7","4"],f:"Les changements sont illimités pendant le match."},
 {k:'Règles',e:R,q:"Combien de joueurs par équipe sont sur le terrain au volley ?",r:"6",w:["5","7","4"],f:"Les joueurs tournent d'une position à chaque fois que l'équipe reprend le service."},
 {k:'Règles',e:R,q:"Combien de joueurs par équipe sont sur le terrain au handball ?",r:"7",w:["6","5","8"],f:"6 joueurs de champ et 1 gardien."},
 {k:'Règles',e:R,q:"Combien dure un match de rugby, hors prolongations ?",r:"80 minutes",w:["90 minutes","70 minutes","60 minutes"],f:"Deux mi-temps de 40 minutes."},
 {k:'Règles',e:R,q:"Combien de points rapporte un essai au rugby à XV ?",r:"5",w:["3","4","7"],f:"La transformation qui suit en rapporte 2 de plus."},
 {k:'Règles',e:R,q:"Combien de points rapporte un lancer franc réussi au basket ?",r:"1",w:["2","3","0,5"],f:"Il se tire sans opposition, depuis une ligne à 4,60 m du panneau."},
 {k:'Règles',e:R,q:"Au tennis, quel score vient après 15 et 30 ?",r:"40",w:["45","35","50"],f:"Une origine incertaine : on parle souvent d'une horloge dont l'aiguille avançait d'un quart d'heure."},
 {k:'Règles',e:R,q:"Au tennis, comment dit-on 40 partout ?",r:"Égalité",w:["Avantage","Jeu blanc","Balle de break"],f:"Les anglophones disent « deuce »."},
 {k:'Règles',e:R,q:"À quelle hauteur est fixé un panier de basket ?",r:"3,05 m",w:["2,90 m","3,20 m","3,50 m"],f:"Soit 10 pieds, la hauteur choisie par l'inventeur du jeu en 1891."},
 {k:'Règles',e:R,q:"Au golf, comment appelle-t-on un trou réussi en un coup sous le par ?",r:"Un birdie",w:["Un eagle","Un bogey","Un albatros"],f:"Eagle : 2 coups sous le par ; bogey : 1 coup au-dessus."},
 {k:'Règles',e:R,q:"Combien de trous compte un parcours de golf classique ?",r:"18",w:["9","12","21"],f:"Le nombre a été fixé à St Andrews, en Écosse, au XVIIIe siècle."},
 {k:'Règles',e:R,q:"À quelle distance du but se tire un penalty au football ?",r:"11 m",w:["9,15 m","16,5 m","12 m"],f:"9,15 m est la distance du mur sur coup franc ; 16,5 m, la profondeur de la surface de réparation."},
 {k:'Règles',e:R,q:"Combien de sets faut-il gagner pour remporter un match masculin de Grand Chelem ?",r:"3",w:["2","4","5"],f:"Les matchs se jouent donc au meilleur des 5 sets."},
 {k:'Règles',e:R,q:"Au volley, en combien de points se joue un set (sauf le 5e) ?",r:"25",w:["21","15","30"],f:"Avec 2 points d'écart ; le set décisif se joue en 15 points."},
 {k:'Règles',e:R,q:"Que récompense le maillot vert du Tour de France ?",r:"Le classement par points",w:["Le meilleur grimpeur","Le meilleur jeune","Le leader au classement général"],f:"Il revient en général à un sprinteur."},
 {k:'Règles',e:R,q:"Que récompense le maillot à pois rouges du Tour de France ?",r:"Le meilleur grimpeur",w:["Le meilleur sprinteur","Le meilleur jeune","Le leader au classement général"],f:"Le maillot jaune habille le leader du classement général, le blanc le meilleur jeune."},
 {k:'Règles',e:R,q:"Combien dure un round en boxe professionnelle masculine ?",r:"3 minutes",w:["2 minutes","4 minutes","5 minutes"],f:"Avec une minute de repos entre chaque round."},
 // Légendes
 {k:'Légendes',e:L,q:"Qui détient le record du monde du 100 m ?",r:"Usain Bolt",w:["Carl Lewis","Asafa Powell","Yohan Blake"],f:"9 s 58, à Berlin en 2009."},
 {k:'Légendes',e:L,q:"Quel est le record du monde du 100 m masculin ?",r:"9 s 58",w:["9 s 63","9 s 69","9 s 72"],f:"Établi par Usain Bolt en 2009, soit plus de 37 km/h de moyenne."},
 {k:'Légendes',e:L,q:"Quel sportif est le plus médaillé de l'histoire des Jeux olympiques ?",r:"Michael Phelps",w:["Mark Spitz","Carl Lewis","Larissa Latynina"],f:"28 médailles en natation, dont 23 en or."},
 {k:'Légendes',e:L,q:"Quel joueur a remporté 8 Ballons d'or, un record ?",r:"Lionel Messi",w:["Cristiano Ronaldo","Michel Platini","Johan Cruyff"],f:"Cristiano Ronaldo en a remporté 5."},
 {k:'Légendes',e:L,q:"Qui a gagné Roland-Garros 14 fois ?",r:"Rafael Nadal",w:["Novak Djokovic","Björn Borg","Roger Federer"],f:"Un record inégalé dans un même tournoi du Grand Chelem."},
 {k:'Légendes',e:L,q:"Lequel de ces pilotes a été 7 fois champion du monde de Formule 1 ?",r:"Lewis Hamilton",w:["Ayrton Senna","Alain Prost","Sebastian Vettel"],f:"À égalité avec Michael Schumacher."},
 {k:'Légendes',e:L,q:"Qui a marqué un triplé en finale de la Coupe du monde 2022 ?",r:"Kylian Mbappé",w:["Lionel Messi","Olivier Giroud","Antoine Griezmann"],f:"Le deuxième triplé en finale de l'histoire, après l'Anglais Geoff Hurst en 1966."},
 {k:'Légendes',e:L,q:"Dans quel sport Teddy Riner est-il plusieurs fois champion olympique ?",r:"Le judo",w:["La lutte","La boxe","Le karaté"],f:"Il a aussi gagné plus de dix titres de champion du monde."},
 {k:'Légendes',e:L,q:"Dans quel sport Léon Marchand a-t-il gagné 4 titres olympiques à Paris en 2024 ?",r:"La natation",w:["L'athlétisme","Le cyclisme sur piste","L'aviron"],f:"Dont deux titres le même soir, à deux heures d'intervalle."},
 {k:'Légendes',e:L,q:"Dans quel sport Tony Parker a-t-il fait carrière en NBA ?",r:"Le basket",w:["Le handball","Le volley","Le tennis"],f:"Quatre titres NBA avec les San Antonio Spurs."},
 {k:'Légendes',e:L,q:"Dans quel sport Jeannie Longo s'est-elle illustrée ?",r:"Le cyclisme",w:["Le ski","L'athlétisme","La natation"],f:"Championne olympique sur route en 1996, et plus de 50 titres de championne de France."},
 {k:'Légendes',e:L,q:"Dans quel sport Mohamed Ali était-il champion ?",r:"La boxe",w:["La lutte","Le judo","Le MMA"],f:"« Vole comme un papillon, pique comme une abeille. »"},
 {k:'Légendes',e:L,q:"De quel pays était Pelé ?",r:"Le Brésil",w:["L'Argentine","Le Portugal","L'Uruguay"],f:"Seul joueur à avoir gagné trois Coupes du monde (1958, 1962, 1970)."},
 {k:'Légendes',e:L,q:"Contre quelle équipe Maradona a-t-il marqué la « main de Dieu » en 1986 ?",r:"L'Angleterre",w:["L'Allemagne","L'Italie","Le Brésil"],f:"Dans le même match, il marque aussi l'un des plus beaux buts de l'histoire."},
 {k:'Légendes',e:L,q:"Combien de Tours de France Bernard Hinault a-t-il gagnés ?",r:"5",w:["3","4","7"],f:"Comme Jacques Anquetil, Eddy Merckx et Miguel Indurain."},
 {k:'Légendes',e:L,q:"Quel coureur est le dernier Français à avoir gagné le Tour de France, en 1985 ?",r:"Bernard Hinault",w:["Laurent Fignon","Richard Virenque","Thibaut Pinot"],f:"Laurent Fignon avait perdu le Tour 1989 pour 8 secondes."},
 // Compétitions
 {k:'Compétitions',e:C,q:"Quelle ville accueille les Jeux olympiques d'été de 2028 ?",r:"Los Angeles",w:["Brisbane","Madrid","Rome"],f:"Brisbane accueillera ceux de 2032."},
 {k:'Compétitions',e:C,q:"Où se dérouleront les Jeux olympiques d'hiver de 2030 ?",r:"Dans les Alpes françaises",w:["À Milan et Cortina","À Salt Lake City","À Sapporo"],f:"Milan-Cortina accueille ceux de 2026, Salt Lake City ceux de 2034."},
 {k:'Compétitions',e:C,q:"Quel pays a gagné la Coupe du monde de football 2022 ?",r:"L'Argentine",w:["La France","La Croatie","Le Brésil"],f:"Victoire aux tirs au but après un 3-3 contre la France."},
 {k:'Compétitions',e:C,q:"Quel pays a gagné le plus de Coupes du monde de football ?",r:"Le Brésil",w:["L'Allemagne","L'Italie","L'Argentine"],f:"5 titres : 1958, 1962, 1970, 1994 et 2002."},
 {k:'Compétitions',e:C,q:"Contre qui la France a-t-elle gagné la finale de la Coupe du monde 1998 ?",r:"Le Brésil",w:["L'Italie","La Croatie","L'Allemagne"],f:"3-0 au Stade de France, avec un doublé de Zinédine Zidane."},
 {k:'Compétitions',e:C,q:"Quelle équipe ne joue PAS le Tournoi des Six Nations ?",r:"L'Afrique du Sud",w:["L'Italie","L'Écosse","Le pays de Galles"],f:"Les six : Angleterre, Écosse, France, Irlande, Italie et pays de Galles."},
 {k:'Compétitions',e:C,q:"Qui a gagné la Coupe du monde de rugby 2023, organisée en France ?",r:"L'Afrique du Sud",w:["La Nouvelle-Zélande","La France","L'Irlande"],f:"Son quatrième titre, un record."},
 {k:'Compétitions',e:C,q:"Sur quelle surface se joue Wimbledon ?",r:"Le gazon",w:["La terre battue","Le dur","La moquette"],f:"C'est le plus ancien tournoi de tennis du monde (1877)."},
 {k:'Compétitions',e:C,q:"Les 24 Heures du Mans sont une course…",r:"D'endurance automobile",w:["Cycliste","De voile","À pied"],f:"Créée en 1923 ; trois pilotes se relaient sur chaque voiture."},
 {k:'Compétitions',e:C,q:"Qu'est-ce que le Vendée Globe ?",r:"Un tour du monde à la voile, en solitaire et sans escale",w:["Une course cycliste en Vendée","Un rallye-raid en Afrique","Une transat en équipage"],f:"Départ et arrivée aux Sables-d'Olonne, tous les quatre ans."},
 {k:'Compétitions',e:C,q:"Le Super Bowl est la finale de quel sport ?",r:"Le football américain",w:["Le baseball","Le basket","Le hockey sur glace"],f:"L'événement le plus regardé de l'année aux États-Unis."},
 {k:'Compétitions',e:C,q:"La coupe Stanley récompense les champions de quel sport ?",r:"Le hockey sur glace",w:["Le baseball","Le football américain","Le curling"],f:"Le plus vieux trophée du sport professionnel nord-américain (1893)."},
 {k:'Compétitions',e:C,q:"La Ryder Cup oppose l'Europe aux États-Unis dans quel sport ?",r:"Le golf",w:["Le tennis","La voile","Le polo"],f:"Une compétition par équipes, tous les deux ans."},
 {k:'Compétitions',e:C,q:"La coupe Davis est une compétition de…",r:"Tennis",w:["Golf","Voile","Ski"],f:"Une compétition par équipes nationales, créée en 1900."},
 {k:'Compétitions',e:C,q:"Combien de temps sépare deux Jeux olympiques d'été ?",r:"4 ans",w:["2 ans","3 ans","5 ans"],f:"Seule exception récente : Tokyo, repoussé de 2020 à 2021."}
];
window.QUIZ = {
  title: 'Sport', emoji: '⚽', color: '#0E7490', color2: '#FBBF24',
  sub: 'Règles, légendes et grandes compétitions.',
  modes: [
    { id: 'Règles', label: 'Règles du jeu', emoji: R },
    { id: 'Légendes', label: 'Légendes et records', emoji: L },
    { id: 'Compétitions', label: 'Compétitions', emoji: C }
  ],
  items
};
})();
