/* Chiens & chats — reconnaître la race en photo (i = img/animaux/<i>.jpg) */
(function(){
const D = '🐕', C = '🐈';
const dog = (i, r, w, f) => ({k:'Chiens', e:D, i, iq:1, q:"Quelle est cette race de chien ?", r, w, f});
const cat = (i, r, w, f) => ({k:'Chats', e:C, i, iq:1, q:"Quelle est cette race de chat ?", r, w, f});
const items = [
 dog('labrador','Labrador',["Golden retriever","Terre-neuve","Rottweiler"],"Originaire de Terre-Neuve, au Canada ; c'est l'un des chiens guides d'aveugles les plus utilisés."),
 dog('berger-allemand','Berger allemand',["Malinois","Husky de Sibérie","Dobermann"],"Le chien de police et de recherche par excellence."),
 dog('golden-retriever','Golden retriever',["Labrador","Setter irlandais","Cocker anglais"],"Créé en Écosse au XIXe siècle pour rapporter le gibier tombé à l'eau."),
 dog('bouledogue-francais','Bouledogue français',["Carlin","Boston terrier","Boxer"],"Ses oreilles « en chauve-souris » le distinguent du bouledogue anglais. Il nage très mal."),
 dog('beagle','Beagle',["Basset hound","Jack russell terrier","Foxhound"],"Un chien de meute anglais au flair redoutable ; Snoopy en est un."),
 dog('caniche','Caniche',["Bichon frisé","Chien d'eau portugais","Lagotto"],"Très intelligent, il existe en quatre tailles, du toy au grand caniche."),
 dog('rottweiler','Rottweiler',["Dobermann","Bouvier bernois","Labrador"],"Il gardait autrefois les troupeaux des bouchers de Rottweil, en Allemagne."),
 dog('teckel','Teckel',["Basset hound","Corgi","Beagle"],"Ses pattes courtes lui permettaient d'entrer dans les terriers de blaireau (Dachs en allemand, d'où son nom anglais, dachshund)."),
 dog('husky-de-siberie','Husky de Sibérie',["Malamute de l'Alaska","Berger allemand","Shiba inu"],"Un chien de traîneau, souvent aux yeux bleus ou vairons (un de chaque couleur)."),
 dog('border-collie','Border collie',["Berger australien","Colley","Berger allemand"],"Un chien de berger réputé le plus intelligent de tous."),
 dog('chihuahua','Chihuahua',["Yorkshire terrier","Carlin","Pinscher nain"],"Le plus petit chien du monde, du nom d'un État du nord du Mexique."),
 dog('dalmatien','Dalmatien',["Braque","Dogue allemand","Pointer"],"Les chiots naissent tout blancs : les taches apparaissent au bout de quelques semaines."),
 dog('carlin','Carlin',["Bouledogue français","Shih tzu","Chihuahua"],"Originaire de Chine ; son museau très court le fait ronfler."),
 dog('bouvier-bernois','Bouvier bernois',["Saint-bernard","Montagne des Pyrénées","Rottweiler"],"Un chien suisse tricolore qui tirait autrefois les charrettes de lait."),
 dog('saint-bernard','Saint-bernard',["Bouvier bernois","Terre-neuve","Dogue allemand"],"Le sauveteur du col du Grand-Saint-Bernard ; le tonnelet d'alcool au cou est une légende."),
 dog('yorkshire-terrier','Yorkshire terrier',["Chihuahua","Shih tzu","Bichon maltais"],"Il chassait les rats dans les filatures du nord de l'Angleterre."),
 dog('dogue-allemand','Dogue allemand',["Dobermann","Dalmatien","Saint-bernard"],"L'un des plus grands chiens du monde : Scooby-Doo en est un."),
 dog('dobermann','Dobermann',["Rottweiler","Berger allemand","Pinscher nain"],"Créé par un percepteur allemand, Louis Dobermann, qui voulait un chien pour le protéger."),
 dog('basset-hound','Basset hound',["Beagle","Teckel","Saint-hubert"],"Ses très longues oreilles aideraient à rabattre les odeurs vers sa truffe."),
 dog('jack-russell-terrier','Jack russell terrier',["Beagle","Fox-terrier","Yorkshire terrier"],"Nommé d'après un pasteur anglais passionné de chasse au renard ; un concentré d'énergie."),
 dog('chow-chow','Chow-chow',["Akita","Spitz","Shiba inu"],"Il a la particularité d'avoir la langue bleu-noir."),
 dog('shiba-inu','Shiba inu',["Akita","Husky de Sibérie","Chow-chow"],"Un petit chien japonais à l'allure de renard, devenu une star d'Internet."),
 dog('levrier-greyhound','Lévrier greyhound',["Whippet","Dobermann","Dalmatien"],"Le chien le plus rapide : environ 70 km/h en pointe."),
 dog('montagne-des-pyrenees','Montagne des Pyrénées',["Bouvier bernois","Saint-bernard","Samoyède"],"Le « patou », gros chien blanc qui protège les troupeaux contre les loups et les ours."),
 dog('bichon-frise','Bichon frisé',["Caniche","Bichon maltais","Samoyède"],"Un petit chien blanc et bouclé qui ne perd presque pas ses poils."),
 cat('maine-coon','Maine coon',["Norvégien","Sibérien","Persan"],"L'un des plus grands chats domestiques ; il vient des États-Unis."),
 cat('siamois','Siamois',["Sacré de Birmanie","Ragdoll","Bengal"],"Originaire de Thaïlande (l'ancien Siam) : corps clair, extrémités foncées et yeux bleus."),
 cat('persan','Persan',["Maine coon","British shorthair","Ragdoll"],"Poil très long et face plate : il demande un brossage quotidien."),
 cat('sphynx','Sphynx',["Devon rex","Siamois","Abyssin"],"Le chat sans poils, apparu au Canada en 1966."),
 cat('bengal','Bengal',["Abyssin","Ocicat","Siamois"],"Issu d'un croisement avec le chat-léopard d'Asie, d'où sa robe tachetée."),
 cat('scottish-fold','Scottish fold',["British shorthair","Chartreux","Persan"],"Ses oreilles sont repliées vers l'avant, à cause d'une mutation génétique."),
 cat('ragdoll','Ragdoll',["Sacré de Birmanie","Siamois","Maine coon"],"Son nom veut dire « poupée de chiffon » : il se laisse aller tout mou quand on le porte."),
 cat('british-shorthair','British shorthair',["Chartreux","Scottish fold","Bleu russe"],"Un chat rond et calme, souvent à la robe gris-bleu."),
 cat('chartreux','Chartreux',["British shorthair","Bleu russe","Korat"],"Une race française au pelage gris-bleu et aux yeux orange cuivré."),
 cat('sacre-de-birmanie','Sacré de Birmanie',["Ragdoll","Siamois","Persan"],"Reconnaissable à ses « gants » blancs aux quatre pattes et à ses yeux bleus.")
];
window.QUIZ = {
  title: 'Chiens & chats', emoji: '🐶', color: '#9A3412', color2: '#FBBF24',
  sub: 'Reconnais les races en photo.',
  modes: [
    { id: 'Chiens', label: 'Races de chiens', emoji: D },
    { id: 'Chats', label: 'Races de chats', emoji: C }
  ],
  items
};
})();
