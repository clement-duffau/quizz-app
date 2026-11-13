/* Langue française */
(function(){
const X = '💬', O = '✍️', M = '📜';
const items = [
 // Expressions
 {k:'Expressions',e:X,q:"« Poser un lapin » à quelqu'un, c'est…",r:"Ne pas venir au rendez-vous",w:["Lui faire une farce","Partir en courant","Lui offrir un cadeau"],f:"Au XIXe siècle, « poser un lapin » voulait dire partir sans payer."},
 {k:'Expressions',e:X,q:"« Avoir le cafard », c'est…",r:"Être triste, avoir des idées noires",w:["Avoir peur des insectes","Être malade","Avoir très faim"],f:"Popularisée par Baudelaire dans Les Fleurs du mal."},
 {k:'Expressions',e:X,q:"« Tomber dans les pommes », c'est…",r:"S'évanouir",w:["Avoir de la chance","Se tromper","Tomber amoureux"],f:"Peut-être une déformation de « tomber dans les pâmes », c'est-à-dire se pâmer."},
 {k:'Expressions',e:X,q:"Quelque chose qui « coûte les yeux de la tête » est…",r:"Très cher",w:["Très douloureux","Très beau","Très difficile"],f:"On dit aussi « coûter un bras »."},
 {k:'Expressions',e:X,q:"« Avoir un poil dans la main », c'est…",r:"Être paresseux",w:["Être très poilu","Être très habile","Être avare"],f:"Une main qui ne travaille jamais aurait le temps d'y laisser pousser un poil."},
 {k:'Expressions',e:X,q:"« Mettre la puce à l'oreille », c'est…",r:"Éveiller un soupçon",w:["Chuchoter un secret","Agacer quelqu'un","Faire peur"],f:"Au Moyen Âge, l'expression évoquait d'abord… le désir amoureux."},
 {k:'Expressions',e:X,q:"Être « au bout du rouleau », c'est…",r:"Être épuisé",w:["Avoir fini son travail","Être très riche","Être en retard"],f:"Le rouleau, c'est peut-être celui d'un parchemin arrivé à sa fin."},
 {k:'Expressions',e:X,q:"« Prendre ses jambes à son cou », c'est…",r:"S'enfuir en courant",w:["Faire de la gymnastique","Trébucher","Faire le grand écart"],f:"Une image de quelqu'un qui court si vite que ses jambes semblent monter jusqu'au cou."},
 {k:'Expressions',e:X,q:"« Avoir la main verte », c'est…",r:"Être doué pour le jardinage",w:["Être jaloux","Avoir de l'argent","Être malade"],f:"Être « vert de jalousie », en revanche, c'est être envieux."},
 {k:'Expressions',e:X,q:"« Raconter des salades », c'est…",r:"Mentir",w:["Parler de cuisine","Bavarder","Se plaindre"],f:"La salade est un mélange : on mélange le vrai et le faux."},
 {k:'Expressions',e:X,q:"« Se mettre le doigt dans l'œil », c'est…",r:"Se tromper lourdement",w:["Se blesser","Pleurer","Espionner"],f:"Souvent complété par « jusqu'au coude »."},
 {k:'Expressions',e:X,q:"« Donner sa langue au chat », c'est…",r:"Renoncer à trouver la réponse",w:["Se taire","Révéler un secret","Parler trop"],f:"Autrefois on disait « jeter sa langue aux chiens »."},
 {k:'Expressions',e:X,q:"« Ne pas avoir sa langue dans sa poche », c'est…",r:"Avoir de la répartie",w:["Être muet","Mentir souvent","Parler plusieurs langues"],f:"Quelqu'un qui répond du tac au tac."},
 {k:'Expressions',e:X,q:"Être « chocolat », c'est…",r:"Être privé de ce qu'on espérait",w:["Être bronzé","Être gourmand","Être ravi"],f:"L'expression viendrait du clown Chocolat, toujours dupé par son partenaire Foottit."},
 {k:'Expressions',e:X,q:"« Quand les poules auront des dents », cela veut dire…",r:"Jamais",w:["Bientôt","Au printemps","Dans très longtemps, mais sûrement"],f:"Les poules n'ont pas de dents… même si leurs lointains ancêtres dinosaures en avaient."},
 {k:'Expressions',e:X,q:"« Les carottes sont cuites » signifie…",r:"Il n'y a plus d'espoir",w:["Le repas est prêt","Tout va bien","C'est très facile"],f:"Au XVIIe siècle, « avoir ses carottes cuites » voulait dire être sur le point de mourir."},
 {k:'Expressions',e:X,q:"« Avoir le melon », c'est…",r:"Être prétentieux",w:["Avoir mal à la tête","Être chauve","Avoir très chaud"],f:"Comme « avoir la grosse tête »."},
 {k:'Expressions',e:X,q:"« Se faire rouler dans la farine », c'est…",r:"Se faire duper",w:["Se salir","Faire un gâteau","Rire aux éclats"],f:"La farine, c'est le maquillage qui sert à tromper."},
 {k:'Expressions',e:X,q:"« Faire la grasse matinée », c'est…",r:"Dormir tard le matin",w:["Manger beaucoup au petit déjeuner","Se lever très tôt","Cuisiner gras"],f:"« Gras » a ici le sens ancien d'abondant, confortable."},
 // Orthographe et grammaire
 {k:'Orthographe',e:O,q:"Situation où il faut choisir entre deux solutions aussi mauvaises : un…",r:"dilemme",w:["dilemne","dilème","dillemme"],f:"Pas de « n » : le mot vient du grec lêmma, « proposition »."},
 {k:'Orthographe',e:O,q:"Préposition qui signifie « en dépit de » :",r:"malgré",w:["malgrés","malgrée","mal gré"],f:"Elle est invariable, toujours sans « s »."},
 {k:'Orthographe',e:O,q:"« Les fleurs que j'ai ___ sont fanées. »",r:"cueillies",w:["cueillis","cueilli","cueillie"],f:"Avec avoir, le participe s'accorde avec le complément placé avant : « que » = les fleurs."},
 {k:'Orthographe',e:O,q:"« Elles se sont ___ les mains. »",r:"lavé",w:["lavées","lavés","laver"],f:"Le complément « les mains » est placé après le verbe : pas d'accord."},
 {k:'Orthographe',e:O,q:"« Il faut que tu ___ à l'heure. »",r:"sois",w:["soit","es","seras"],f:"Subjonctif : que je sois, que tu sois, qu'il soit."},
 {k:'Orthographe',e:O,q:"« ___ à moi, je reste ici. »",r:"Quant",w:["Quand","Qu'en","Kant"],f:"« Quant à » = en ce qui concerne. « Quand » indique le moment."},
 {k:'Orthographe',e:O,q:"Comment écrit-on le nombre 80 ?",r:"quatre-vingts",w:["quatre-vingt","quatres-vingts","quatre-vingtx"],f:"« Vingt » prend un « s » quand il est multiplié et termine le nombre."},
 {k:'Orthographe',e:O,q:"Comment écrit-on le nombre 81 ?",r:"quatre-vingt-un",w:["quatre-vingts-un","quatre-vingt-et-un","quatres-vingt-un"],f:"Rien ne suit « vingt » ? Il prend un « s ». Sinon, non. Et pas de « et » après 80."},
 {k:'Orthographe',e:O,q:"Comment écrit-on le nombre 200 ?",r:"deux cents",w:["deux cent","deux cens","deux sans"],f:"Comme « vingt » : « cent » prend un « s » quand il est multiplié et termine le nombre."},
 {k:'Orthographe',e:O,q:"Quel est le pluriel de « un cheval » ?",r:"des chevaux",w:["des chevals","des chevauxs","des chevaus"],f:"Mais on dit des festivals, des carnavals, des bals et des chacals."},
 {k:'Orthographe',e:O,q:"Quel est le pluriel de « un bijou » ?",r:"des bijoux",w:["des bijous","des bijou","des bijouxs"],f:"Les sept en -x : bijou, caillou, chou, genou, hibou, joujou, pou."},
 {k:'Orthographe',e:O,q:"Quel est le pluriel de « un festival » ?",r:"des festivals",w:["des festivaux","des festivales","des festivauxs"],f:"Une exception au pluriel en -aux, comme bal, carnaval et chacal."},
 {k:'Orthographe',e:O,q:"Quel est le pluriel de « un œil » ?",r:"des yeux",w:["des œils","des oeux","des yeuxs"],f:"« Œils » existe dans quelques mots composés : des œils-de-bœuf (fenêtres rondes)."},
 {k:'Orthographe',e:O,q:"Le mot « autoroute » est…",r:"Féminin",w:["Masculin","Les deux","Invariable"],f:"Une autoroute, comme une route."},
 {k:'Orthographe',e:O,q:"Le mot « pétale » est…",r:"Masculin",w:["Féminin","Les deux","Invariable"],f:"Un pétale : on se trompe souvent !"},
 {k:'Orthographe',e:O,q:"Le mot « astérisque » est…",r:"Masculin",w:["Féminin","Les deux","Invariable"],f:"Un astérisque, ce petit signe * qui renvoie à une note."},
 {k:'Orthographe',e:O,q:"Le mot « apogée » est…",r:"Masculin",w:["Féminin","Les deux","Invariable"],f:"Atteindre son apogée : un mot masculin malgré sa finale en -ée, comme « lycée » ou « musée »."},
 // Mots et origines
 {k:'Mots',e:M,q:"De quelle langue vient le mot « algèbre » ?",r:"L'arabe",w:["Le grec","Le latin","Le persan"],f:"De al-jabr, dans le titre d'un traité du mathématicien al-Khwârizmî."},
 {k:'Mots',e:M,q:"De quelle langue vient le mot « robot » ?",r:"Le tchèque",w:["Le russe","L'allemand","Le japonais"],f:"Inventé pour une pièce de Karel Čapek en 1920, de robota, « corvée »."},
 {k:'Mots',e:M,q:"De quelle langue vient le mot « kayak » ?",r:"L'inuktitut (langue inuite)",w:["Le finnois","Le norvégien","Le russe"],f:"Et c'est un palindrome : il se lit dans les deux sens."},
 {k:'Mots',e:M,q:"De quelle langue vient le mot « mammouth » ?",r:"Le russe",w:["L'anglais","Le mongol","L'inuktitut"],f:"Les premiers spécimens connus venaient de Sibérie."},
 {k:'Mots',e:M,q:"De quelle langue vient le mot « chocolat » ?",r:"Le nahuatl, la langue des Aztèques",w:["L'arabe","Le portugais","Le quechua"],f:"Arrivé en français par l'espagnol, comme « tomate » et « avocat »."},
 {k:'Mots',e:M,q:"Que signifie « procrastiner » ?",r:"Remettre au lendemain",w:["Travailler en avance","Se plaindre","Exagérer"],f:"Du latin cras, « demain »."},
 {k:'Mots',e:M,q:"Que signifie « ubuesque » ?",r:"Absurde et grotesque",w:["Gigantesque","Très ancien","Joyeux"],f:"D'après Ubu roi, la pièce d'Alfred Jarry (1896)."},
 {k:'Mots',e:M,q:"Qu'est-ce que la « sérendipité » ?",r:"Une découverte heureuse faite par hasard",w:["Une grande tristesse","Un calme absolu","Une peur du vide"],f:"Comme la pénicilline, découverte par Alexander Fleming."},
 {k:'Mots',e:M,q:"Qu'est-ce qu'un palindrome ?",r:"Un mot qui se lit dans les deux sens",w:["Un mot qui a deux sens","Un mot emprunté à l'étranger","Un mot très long"],f:"Kayak, radar, rotor, ressasser…"},
 {k:'Mots',e:M,q:"Qu'est-ce qu'un oxymore ?",r:"Deux mots de sens contraire réunis",w:["Une exagération","Une répétition","Une comparaison"],f:"« Cette obscure clarté qui tombe des étoiles » (Corneille)."},
 {k:'Mots',e:M,q:"Quel est le contraire de « prolixe » ?",r:"Concis",w:["Bavard","Verbeux","Prolifique"],f:"Prolixe : qui parle ou écrit trop longuement."},
 {k:'Mots',e:M,q:"Comment s'appellent les habitants de Saint-Étienne ?",r:"Les Stéphanois",w:["Les Saint-Étiennois","Les Étiennais","Les Foréziens"],f:"Du grec Stephanos, qui a donné Étienne."},
 {k:'Mots',e:M,q:"Comment s'appellent les habitants de Monaco ?",r:"Les Monégasques",w:["Les Monacais","Les Monaciens","Les Monaquois"],f:"La langue locale, le monégasque, est encore enseignée à l'école."},
 {k:'Mots',e:M,q:"Comment s'appellent les habitants de Besançon ?",r:"Les Bisontins",w:["Les Besançonnais","Les Bisontais","Les Vésontiens"],f:"De Vesontio, le nom latin de la ville."},
 {k:'Mots',e:M,q:"Comment s'appellent les habitants de Charleville-Mézières ?",r:"Les Carolomacériens",w:["Les Charlevillois","Les Mézièrois","Les Ardennais"],f:"Un gentilé formé sur le latin de Charles (Carolus) et de Mézières (Maceriae)."},
 {k:'Mots',e:M,q:"Comment s'appellent les habitants de Madagascar ?",r:"Les Malgaches",w:["Les Madagascariens","Les Malgasiens","Les Madagasques"],f:"Leur langue est aussi le malgache."}
];
window.QUIZ = {
  title: 'Langue française', emoji: '🗣️', color: '#9D174D', color2: '#F59E0B',
  sub: 'Expressions, pièges d’orthographe, mots.',
  modes: [
    { id: 'Expressions', label: 'Expressions', emoji: X },
    { id: 'Orthographe', label: 'Pièges d’orthographe', emoji: O },
    { id: 'Mots', label: 'Mots et origines', emoji: M }
  ],
  items
};
})();
