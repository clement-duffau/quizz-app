/* Marques & tech — origines, fondateurs, dates (texte seulement) */
(function(){
const F = '👤', D = '📅', O = '🏷️', P = '🌐';
const items = [
 // Fondateurs
 {k:'Fondateurs',e:F,q:"Qui a fondé Apple avec Steve Jobs en 1976 ?",r:"Steve Wozniak",w:["Bill Gates","Paul Allen","Larry Page"],f:"Un troisième associé, Ronald Wayne, a revendu ses parts au bout de 12 jours."},
 {k:'Fondateurs',e:F,q:"Qui a fondé Microsoft avec Bill Gates ?",r:"Paul Allen",w:["Steve Ballmer","Steve Wozniak","Gordon Moore"],f:"En 1975, à Albuquerque, avant de déménager près de Seattle."},
 {k:'Fondateurs',e:F,q:"Qui sont les fondateurs de Google ?",r:"Larry Page et Sergey Brin",w:["Bill Gates et Paul Allen","Steve Jobs et Steve Wozniak","Jeff Bezos et Elon Musk"],f:"Deux doctorants de Stanford, en 1998."},
 {k:'Fondateurs',e:F,q:"Qui a fondé Amazon ?",r:"Jeff Bezos",w:["Elon Musk","Jack Ma","Larry Ellison"],f:"En 1994, dans un garage, pour vendre des livres en ligne."},
 {k:'Fondateurs',e:F,q:"Qui a créé Facebook en 2004 ?",r:"Mark Zuckerberg",w:["Jack Dorsey","Evan Spiegel","Kevin Systrom"],f:"Depuis sa chambre d'étudiant à Harvard."},
 {k:'Fondateurs',e:F,q:"Qui a créé le noyau Linux ?",r:"Linus Torvalds",w:["Richard Stallman","Dennis Ritchie","Ken Thompson"],f:"En 1991, alors étudiant à Helsinki."},
 {k:'Fondateurs',e:F,q:"Qui a inventé le World Wide Web ?",r:"Tim Berners-Lee",w:["Vint Cerf","Bill Gates","Marc Andreessen"],f:"Au CERN, près de Genève, en 1989."},
 {k:'Fondateurs',e:F,q:"Qui a fondé Nvidia et la dirige encore ?",r:"Jensen Huang",w:["Lisa Su","Satya Nadella","Tim Cook"],f:"Cofondée en 1993 ; Lisa Su dirige AMD."},
 {k:'Fondateurs',e:F,q:"Quels pionniers ont fondé Intel en 1968 ?",r:"Robert Noyce et Gordon Moore",w:["Hewlett et Packard","Page et Brin","Gates et Allen"],f:"Gordon Moore a donné son nom à la « loi de Moore »."},
 {k:'Fondateurs',e:F,q:"Qui a créé le langage Python ?",r:"Guido van Rossum",w:["James Gosling","Bjarne Stroustrup","Dennis Ritchie"],f:"Le nom vient des Monty Python, pas du serpent."},
 {k:'Fondateurs',e:F,q:"Qui a créé le langage C ?",r:"Dennis Ritchie",w:["Guido van Rossum","Linus Torvalds","Alan Turing"],f:"Aux Bell Labs, au début des années 1970, pour écrire Unix."},
 {k:'Fondateurs',e:F,q:"Qui a fondé Spotify ?",r:"Daniel Ek et Martin Lorentzon",w:["Reed Hastings","Sean Parker","Niklas Zennström"],f:"En Suède, en 2006."},
 {k:'Fondateurs',e:F,q:"Quels frères ont fondé Ubisoft ?",r:"Les frères Guillemot",w:["Les frères Lumière","Les frères Dassler","Les frères Bogdanoff"],f:"En 1986, en Bretagne."},
 // Dates
 {k:'Dates',e:D,q:"En quelle année le premier iPhone a-t-il été présenté ?",r:"2007",w:["2004","2009","2001"],f:"Steve Jobs l'a présenté en janvier 2007."},
 {k:'Dates',e:D,q:"En quelle année YouTube a-t-il été lancé ?",r:"2005",w:["2001","2008","2010"],f:"La première vidéo, « Me at the zoo », dure 19 secondes. Google l'a racheté en 2006."},
 {k:'Dates',e:D,q:"En quelle année Wikipédia a-t-elle été lancée ?",r:"2001",w:["1995","2004","1998"],f:"Par Jimmy Wales et Larry Sanger."},
 {k:'Dates',e:D,q:"En quelle année est sorti Windows 95 ?",r:"1995",w:["1993","1997","1990"],f:"Il a introduit le bouton Démarrer et la barre des tâches."},
 {k:'Dates',e:D,q:"Quand le Minitel a-t-il été déployé en France ?",r:"Au début des années 1980",w:["Dans les années 1960","Au milieu des années 1990","En 2000"],f:"Il a été arrêté définitivement en 2012."},
 {k:'Dates',e:D,q:"En quelle année Facebook a-t-il racheté Instagram ?",r:"2012",w:["2010","2015","2018"],f:"Pour environ 1 milliard de dollars, alors que l'appli avait 13 employés."},
 {k:'Dates',e:D,q:"En quelle année Twitter a-t-il été renommé X ?",r:"2023",w:["2019","2021","2022"],f:"Après son rachat par Elon Musk fin 2022."},
 {k:'Dates',e:D,q:"En quelle année Facebook est-il devenu Meta ?",r:"2021",w:["2018","2019","2023"],f:"Le réseau social garde le nom Facebook, c'est le groupe qui change."},
 {k:'Dates',e:D,q:"En quelle année est sortie la première PlayStation au Japon ?",r:"1994",w:["1990","1998","2000"],f:"Fin 1994 au Japon, en 1995 en Europe."},
 {k:'Dates',e:D,q:"Quand Atari a-t-il sorti le jeu Pong ?",r:"1972",w:["1965","1980","1985"],f:"Un des premiers grands succès du jeu vidéo."},
 {k:'Dates',e:D,q:"En quelle année Google a-t-il racheté Android ?",r:"2005",w:["2008","2002","2011"],f:"Le premier téléphone Android est sorti en 2008."},
 {k:'Dates',e:D,q:"Quand Netflix a-t-il été fondé ?",r:"1997",w:["2007","2010","1990"],f:"Au départ, il louait des DVD envoyés par la poste."},
 // Origines des noms
 {k:'Noms',e:O,q:"D'où vient le nom « Google » ?",r:"Du mot « googol », 10 puissance 100",w:["D'un jouet d'enfance","Du nom d'un chien","D'une abréviation de « Go Global »"],f:"Un 1 suivi de cent zéros, pour évoquer l'immensité du web."},
 {k:'Noms',e:O,q:"D'où vient le nom « Bluetooth » ?",r:"D'un roi viking danois",w:["De la couleur du premier prototype","D'un dentifrice","D'un ingénieur norvégien"],f:"Harald « à la dent bleue ». Le logo mêle ses initiales en runes."},
 {k:'Noms',e:O,q:"Que signifie « Samsung » en coréen ?",r:"Trois étoiles",w:["Grand soleil","Dragon d'or","Montagne bleue"],f:"L'entreprise est née en 1938… comme épicerie et commerce de poisson séché."},
 {k:'Noms',e:O,q:"D'où vient le nom « Sony » ?",r:"Du latin « sonus », le son",w:["Des initiales des fondateurs","D'une ville japonaise","Du mot anglais « sunny »"],f:"Mélangé à « sonny », un mot d'argot américain de l'époque."},
 {k:'Noms',e:O,q:"D'où vient le nom « Nokia » ?",r:"D'une ville et d'une rivière finlandaises",w:["D'un mot japonais","Du fondateur","D'un sigle"],f:"L'entreprise a commencé en 1865… comme papeterie."},
 {k:'Noms',e:O,q:"Que veut dire « Lego » ?",r:"« Joue bien » en danois",w:["« Brique » en latin","« Construis » en suédois","Le nom du fondateur"],f:"De « leg godt ». Et en latin, « lego » veut dire « j'assemble »."},
 {k:'Noms',e:O,q:"D'où vient le nom « IKEA » ?",r:"Des initiales du fondateur, de sa ferme et de son village",w:["D'un mot suédois pour « maison »","D'un dieu nordique","D'une rivière"],f:"Ingvar Kamprad, Elmtaryd, Agunnaryd."},
 {k:'Noms',e:O,q:"D'où vient le nom « Adidas » ?",r:"Du surnom du fondateur, Adi Dassler",w:["De « All Day I Dream About Sport »","D'un dieu grec","D'une ville allemande"],f:"Son frère Rudolf, fâché avec lui, a fondé Puma."},
 {k:'Noms',e:O,q:"D'où vient le nom « Intel » ?",r:"De « Integrated Electronics »",w:["De « Intelligence »","De « International Telecom »","Du nom d'un fondateur"],f:"Le nom a été adopté peu après la création en 1968."},
 {k:'Noms',e:O,q:"D'où vient le nom « Tesla » ?",r:"Du physicien Nikola Tesla",w:["D'une abréviation","D'un modèle de voiture","D'une ville"],f:"Le tesla est aussi l'unité du champ magnétique."},
 {k:'Noms',e:O,q:"D'où vient le nom « Asus » ?",r:"De « Pegasus », le cheval ailé",w:["De « Asia United Systems »","Du fondateur","D'une ville taïwanaise"],f:"On a retiré « Peg » pour être en tête des listes alphabétiques."},
 {k:'Noms',e:O,q:"D'où vient le nom « Amazon » ?",r:"Du fleuve, le plus grand du monde",w:["D'une guerrière de la mythologie","Du fondateur","D'un mot espagnol"],f:"L'entreprise s'est d'abord appelée Cadabra, mais le nom faisait trop penser à « cadaver »."},
 {k:'Noms',e:O,q:"Que signifie « Xiaomi » en chinois ?",r:"Petit grain de millet",w:["Petit dragon","Ciel bleu","Grand téléphone"],f:"Une allusion à un proverbe bouddhiste sur les petites choses."},
 // Pays d'origine
 {k:'Pays',e:P,q:"De quel pays vient Samsung ?",r:"Corée du Sud",w:["Japon","Chine","Taïwan"],f:"Basé à Suwon, près de Séoul."},
 {k:'Pays',e:P,q:"De quel pays vient Nokia ?",r:"Finlande",w:["Suède","Norvège","Danemark"],f:"Son grand rival historique, Ericsson, est suédois."},
 {k:'Pays',e:P,q:"De quel pays vient Spotify ?",r:"Suède",w:["Norvège","États-Unis","Pays-Bas"],f:"Siège à Stockholm."},
 {k:'Pays',e:P,q:"De quel pays vient Philips ?",r:"Pays-Bas",w:["Belgique","Allemagne","Danemark"],f:"Fondé à Eindhoven en 1891 pour fabriquer des ampoules."},
 {k:'Pays',e:P,q:"Dans quel pays se trouve TSMC, le géant de la fabrication de puces ?",r:"Taïwan",w:["Corée du Sud","Japon","Chine"],f:"Il fabrique les puces d'Apple, Nvidia ou AMD."},
 {k:'Pays',e:P,q:"De quel pays vient ARM, dont les processeurs équipent les smartphones ?",r:"Royaume-Uni",w:["États-Unis","Japon","Pays-Bas"],f:"Né à Cambridge."},
 {k:'Pays',e:P,q:"De quel pays vient Logitech ?",r:"Suisse",w:["Belgique","États-Unis","Irlande"],f:"Fondé en 1981 dans le canton de Vaud."},
 {k:'Pays',e:P,q:"De quel pays vient Lenovo ?",r:"Chine",w:["Taïwan","Japon","Corée du Sud"],f:"Il a racheté la division PC d'IBM en 2005."},
 {k:'Pays',e:P,q:"De quel pays vient Nintendo ?",r:"Japon",w:["Corée du Sud","États-Unis","Chine"],f:"Fondé à Kyoto en 1889… pour fabriquer des cartes à jouer."},
 {k:'Pays',e:P,q:"De quel pays vient l'appli TikTok ?",r:"Chine",w:["Corée du Sud","Japon","Singapour"],f:"Éditée par ByteDance ; la version chinoise s'appelle Douyin."},
 {k:'Pays',e:P,q:"De quel pays vient Ubisoft ?",r:"France",w:["Canada","Belgique","Suisse"],f:"Son plus grand studio est aujourd'hui à Montréal."},
 {k:'Pays',e:P,q:"De quel pays vient Huawei ?",r:"Chine",w:["Taïwan","Corée du Sud","Singapour"],f:"Fondé en 1987 à Shenzhen."}
];
window.QUIZ = {
  title: 'Marques & tech', emoji: '💡', color: '#0F8A7E', color2: '#FFB020',
  sub: 'Fondateurs, dates, origine des noms.',
  modes: [
    { id: 'Fondateurs', label: 'Fondateurs', emoji: F },
    { id: 'Dates', label: 'Dates clés', emoji: D },
    { id: 'Noms', label: 'Origine des noms', emoji: O },
    { id: 'Pays', label: 'Pays d’origine', emoji: P }
  ],
  items
};
})();
