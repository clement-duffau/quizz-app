/* Oiseaux — reconnaître l'oiseau en photo (i = img/oiseaux/<i>.jpg) */
(function(){
const J = '🏡', S = '🌳', E = '🦢', R = '🦉';
const b = (k, e, i, r, w, f) => ({k, e, i, iq:1, q:"Quel est cet oiseau ?", r, w, f});
const items = [
 // Au jardin
 b('Jardin',J,'rouge-gorge','Le rouge-gorge',["Le rougequeue noir","Le pinson des arbres","La mésange bleue"],"Très territorial, il chante même l'hiver, parfois la nuit près des lampadaires."),
 b('Jardin',J,'mesange-charbonniere','La mésange charbonnière',["La mésange bleue","La sittelle torchepot","Le verdier"],"Reconnaissable à sa « cravate » noire sur le ventre jaune."),
 b('Jardin',J,'mesange-bleue','La mésange bleue',["La mésange charbonnière","Le rouge-gorge","Le pinson des arbres"],"Une habituée des mangeoires et des nichoirs."),
 b('Jardin',J,'merle-noir','Le merle noir',["L'étourneau","La corneille","Le choucas"],"Le mâle est noir à bec jaune ; la femelle, elle, est brune."),
 b('Jardin',J,'moineau-domestique','Le moineau domestique',["Le pinson des arbres","Le bruant jaune","L'accenteur mouchet"],"Il vit près des humains depuis des millénaires, mais devient plus rare en ville."),
 b('Jardin',J,'pinson-des-arbres','Le pinson des arbres',["Le moineau domestique","Le bouvreuil","Le rouge-gorge"],"Son chant joyeux annonce le printemps."),
 b('Jardin',J,'chardonneret-elegant','Le chardonneret élégant',["Le bouvreuil","Le verdier","Le serin cini"],"Masque rouge et ailes barrées de jaune ; il raffole des graines de chardon."),
 b('Jardin',J,'hirondelle-rustique','L\'hirondelle rustique',["Le martinet noir","L'hirondelle de fenêtre","Le guêpier d'Europe"],"Gorge rouge et longue queue fourchue ; elle passe l'hiver en Afrique."),
 b('Jardin',J,'troglodyte-mignon','Le troglodyte mignon',["Le roitelet","Le moineau domestique","Le rouge-gorge"],"Minuscule, la queue dressée, mais avec un chant très puissant pour sa taille."),
 // Forêts et campagnes
 b('Campagne',S,'martin-pecheur','Le martin-pêcheur',["Le guêpier d'Europe","Le rollier","La mésange bleue"],"Il plonge comme une flèche pour attraper de petits poissons."),
 b('Campagne',S,'huppe-fasciee','La huppe fasciée',["Le geai des chênes","Le pic vert","Le coucou gris"],"Sa crête s'ouvre en éventail ; son nom latin, Upupa, imite son cri « oup-oup-oup »."),
 b('Campagne',S,'coucou-gris','Le coucou gris',["L'épervier","La tourterelle","Le faucon crécerelle"],"Il pond dans le nid d'autres oiseaux, qui élèvent son petit à sa place."),
 b('Campagne',S,'geai-des-chenes','Le geai des chênes',["La pie bavarde","La huppe fasciée","Le rollier"],"Il cache des glands pour l'hiver… et en oublie beaucoup, ce qui plante des chênes."),
 b('Campagne',S,'pic-epeiche','Le pic épeiche',["Le pic vert","La sittelle torchepot","La huppe fasciée"],"Il tambourine sur les troncs pour marquer son territoire."),
 b('Campagne',S,'faisan-de-colchide','Le faisan de Colchide',["La perdrix grise","Le grand tétras","Le paon"],"Venu d'Asie, il a été introduit en Europe pour la chasse."),
 b('Campagne',S,'guepier-d-europe','Le guêpier d\'Europe',["Le martin-pêcheur","Le rollier","La huppe fasciée"],"Il attrape guêpes et abeilles en vol, puis frotte leur dard contre une branche."),
 // Eaux et rivages
 b('Eau',E,'heron-cendre','Le héron cendré',["La cigogne blanche","La grue cendrée","L'aigrette garzette"],"Il vole le cou replié, contrairement à la cigogne qui le tend."),
 b('Eau',E,'cigogne-blanche','La cigogne blanche',["Le héron cendré","La grue cendrée","La spatule blanche"],"Elle niche sur les toits et les clochers ; c'est un emblème de l'Alsace."),
 b('Eau',E,'cygne-tubercule','Le cygne tuberculé',["Le cygne chanteur","L'oie cendrée","Le pélican"],"Son bec orange porte une bosse noire, le « tubercule »."),
 b('Eau',E,'canard-colvert','Le canard colvert',["La sarcelle d'hiver","Le canard souchet","Le tadorne de Belon"],"Le mâle a la tête verte ; c'est l'ancêtre de la plupart des canards domestiques."),
 b('Eau',E,'flamant-rose','Le flamant rose',["La spatule blanche","La cigogne blanche","L'ibis sacré"],"Sa couleur vient des petits crustacés qu'il filtre ; on le voit en Camargue."),
 b('Eau',E,'macareux-moine','Le macareux moine',["Le pingouin torda","Le guillemot de Troïl","Le manchot"],"Son bec devient très coloré en été ; il niche aux Sept-Îles, en Bretagne."),
 // Rapaces
 b('Rapaces',R,'chouette-effraie','La chouette effraie',["La chouette hulotte","Le hibou moyen-duc","Le grand-duc d'Europe"],"Son visage blanc en forme de cœur lui vaut le surnom de « dame blanche »."),
 b('Rapaces',R,'chouette-hulotte','La chouette hulotte',["La chouette effraie","Le grand-duc d'Europe","La chevêche d'Athéna"],"C'est elle qui pousse le « hou-hou-hou » des films la nuit."),
 b('Rapaces',R,'grand-duc-d-europe','Le grand-duc d\'Europe',["Le hibou moyen-duc","La chouette hulotte","La chouette effraie"],"Le plus grand rapace nocturne d'Europe, avec ses aigrettes en forme d'oreilles."),
 b('Rapaces',R,'buse-variable','La buse variable',["Le milan royal","L'aigle royal","Le faucon crécerelle"],"Le rapace le plus courant de France ; on la voit souvent perchée au bord des routes."),
 b('Rapaces',R,'milan-royal','Le milan royal',["La buse variable","Le busard des roseaux","L'aigle botté"],"Reconnaissable en vol à sa longue queue rousse et fourchue.")
];
window.QUIZ = {
  title: 'Oiseaux', emoji: '🐦', color: '#15803D', color2: '#F59E0B',
  sub: 'Reconnais les oiseaux de France en photo.',
  modes: [
    { id: 'Jardin', label: 'Au jardin', emoji: J },
    { id: 'Campagne', label: 'Forêts et campagnes', emoji: S },
    { id: 'Eau', label: 'Eaux et rivages', emoji: E },
    { id: 'Rapaces', label: 'Rapaces', emoji: R }
  ],
  items
};
})();
