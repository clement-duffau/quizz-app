/* Animaux & nature */
(function(){
const R = '🏆', B = '🐣', C = '🧬', P = '🌳';
const items = [
 // Records
 {k:'Records',e:R,q:"Quel oiseau a la plus grande envergure ?",r:"L'albatros hurleur",w:["Le condor des Andes","L'aigle royal","Le pélican"],f:"Plus de 3 m d'une aile à l'autre ; il plane des heures sans battre des ailes."},
 {k:'Records',e:R,q:"Quel animal atteint plus de 300 km/h en piqué ?",r:"Le faucon pèlerin",w:["L'aigle royal","Le martinet","L'albatros"],f:"C'est l'animal le plus rapide du monde."},
 {k:'Records',e:R,q:"Quel animal a le plus gros cerveau du monde ?",r:"Le cachalot",w:["L'éléphant d'Afrique","La baleine bleue","L'orque"],f:"Environ 8 kg, contre 1,4 kg pour un humain."},
 {k:'Records',e:R,q:"Quel est le plus gros animal terrestre ?",r:"L'éléphant d'Afrique",w:["Le rhinocéros blanc","L'hippopotame","La girafe"],f:"Un grand mâle peut dépasser 6 tonnes."},
 {k:'Records',e:R,q:"Quel est l'animal le plus haut ?",r:"La girafe",w:["L'éléphant","L'autruche","Le dromadaire"],f:"Jusqu'à environ 5,5 m ; son cou ne compte pourtant que 7 vertèbres, comme le nôtre."},
 {k:'Records',e:R,q:"Quel oiseau est capable de voler en marche arrière ?",r:"Le colibri",w:["Le martinet","L'hirondelle","Le faucon crécerelle"],f:"Ses ailes battent jusqu'à 50 à 80 fois par seconde."},
 {k:'Records',e:R,q:"Quel est le plus grand poisson du monde ?",r:"Le requin-baleine",w:["Le grand requin blanc","La raie manta","L'esturgeon"],f:"Plus de 12 m, et pourtant inoffensif : il filtre le plancton."},
 {k:'Records',e:R,q:"Quel est le plus petit oiseau du monde ?",r:"Le colibri d'Elena",w:["Le roitelet","La mésange bleue","Le troglodyte"],f:"Environ 5 à 6 cm et 2 grammes, à Cuba."},
 {k:'Records',e:R,q:"Quel mammifère est réputé le plus lent du monde ?",r:"Le paresseux",w:["Le koala","Le hérisson","La taupe"],f:"Si lent que des algues poussent dans son pelage, ce qui le camoufle."},
 {k:'Records',e:R,q:"Quel vertébré détient le record de longévité connu ?",r:"Le requin du Groenland",w:["La tortue géante","La baleine boréale","Le perroquet ara"],f:"Plusieurs siècles : les estimations vont d'environ 270 à 500 ans."},
 {k:'Records',e:R,q:"Quel animal peut dormir jusqu'à environ 20 heures par jour ?",r:"Le koala",w:["Le chat","Le panda géant","Le hérisson"],f:"Les feuilles d'eucalyptus apportent très peu d'énergie : il l'économise."},
 {k:'Records',e:R,q:"Quel oiseau pond les plus gros œufs ?",r:"L'autruche",w:["L'émeu","Le manchot empereur","Le cygne"],f:"Un œuf pèse environ 1,5 kg, l'équivalent d'une vingtaine d'œufs de poule."},
 // Petits, femelles et cris
 {k:'Bébés & cris',e:B,q:"Comment s'appelle le petit du cerf ?",r:"Le faon",w:["Le marcassin","Le levraut","Le chevreau"],f:"Il naît avec un pelage tacheté qui le camoufle."},
 {k:'Bébés & cris',e:B,q:"Comment s'appelle le petit du sanglier ?",r:"Le marcassin",w:["Le porcelet","Le faon","Le louveteau"],f:"Reconnaissable à son pelage rayé, dit « en livrée »."},
 {k:'Bébés & cris',e:B,q:"Comment s'appelle le petit du lièvre ?",r:"Le levraut",w:["Le lapereau","Le renardeau","Le souriceau"],f:"Le petit du lapin, lui, est le lapereau."},
 {k:'Bébés & cris',e:B,q:"Comment s'appelle le petit de la chèvre ?",r:"Le chevreau",w:["L'agneau","Le faon","Le porcelet"],f:"On dit aussi « cabri »."},
 {k:'Bébés & cris',e:B,q:"Comment s'appelle le petit de l'oie ?",r:"L'oison",w:["Le caneton","Le poussin","Le dindonneau"],f:"Le petit du canard est le caneton."},
 {k:'Bébés & cris',e:B,q:"Comment s'appelle le petit de l'âne ?",r:"L'ânon",w:["Le poulain","Le chevreau","Le veau"],f:"Le petit du cheval est le poulain."},
 {k:'Bébés & cris',e:B,q:"Comment s'appelle la femelle du sanglier ?",r:"La laie",w:["La biche","La hase","La chèvre"],f:"Le mâle adulte est un « solitaire » ou un « vieux sanglier »."},
 {k:'Bébés & cris',e:B,q:"Comment s'appelle la femelle du lièvre ?",r:"La hase",w:["La lapine","La laie","La biche"],f:"Un mot qui vient de l'allemand Hase, « lièvre »."},
 {k:'Bébés & cris',e:B,q:"Le cerf…",r:"brame",w:["barrit","hennit","glapit"],f:"Le brame s'entend surtout en automne, à la saison des amours."},
 {k:'Bébés & cris',e:B,q:"L'éléphant…",r:"barrit",w:["brame","rugit","mugit"],f:"Le barrissement porte à plusieurs kilomètres."},
 {k:'Bébés & cris',e:B,q:"L'âne…",r:"brait",w:["hennit","bêle","mugit"],f:"D'où le mot « braire » : crier fort et désagréablement."},
 {k:'Bébés & cris',e:B,q:"La grenouille…",r:"coasse",w:["croasse","caquette","siffle"],f:"Attention : c'est le corbeau qui croasse !"},
 {k:'Bébés & cris',e:B,q:"Le corbeau…",r:"croasse",w:["coasse","roucoule","hulule"],f:"Et la grenouille coasse : il n'y a qu'un « r » de différence."},
 {k:'Bébés & cris',e:B,q:"La pie…",r:"jacasse",w:["caquette","roucoule","brame"],f:"D'où l'expression « jacasser » pour quelqu'un de bavard."},
 {k:'Bébés & cris',e:B,q:"Le renard…",r:"glapit",w:["barrit","brame","rugit"],f:"Son cri aigu ressemble à un aboiement étranglé."},
 {k:'Bébés & cris',e:B,q:"Le pigeon…",r:"roucoule",w:["croasse","jacasse","glapit"],f:"Roucouler se dit aussi de deux amoureux qui se murmurent des mots doux."},
 // Classification
 {k:'Classification',e:C,q:"La baleine est…",r:"Un mammifère",w:["Un poisson","Un reptile","Un amphibien"],f:"Elle respire de l'air et allaite ses petits."},
 {k:'Classification',e:C,q:"L'araignée est…",r:"Un arachnide",w:["Un insecte","Un crustacé","Un myriapode"],f:"Pas d'antennes, et un corps en deux parties, comme les scorpions et les tiques."},
 {k:'Classification',e:C,q:"De quoi la coccinelle se nourrit-elle surtout ?",r:"De pucerons",w:["De feuilles","De nectar","De fourmis"],f:"Une coccinelle peut en dévorer des dizaines par jour : l'alliée des jardiniers."},
 {k:'Classification',e:C,q:"La grenouille est…",r:"Un amphibien",w:["Un reptile","Un poisson","Un mammifère"],f:"Le têtard vit dans l'eau avec des branchies, l'adulte respire avec des poumons et par la peau."},
 {k:'Classification',e:C,q:"Le crocodile est…",r:"Un reptile",w:["Un amphibien","Un mammifère","Un poisson"],f:"Ses plus proches parents vivants sont… les oiseaux."},
 {k:'Classification',e:C,q:"Quelle est la particularité de l'ornithorynque ?",r:"C'est un mammifère qui pond des œufs",w:["C'est un oiseau qui ne vole pas","C'est un poisson qui respire de l'air","C'est un reptile à poils"],f:"Comme l'échidné, c'est un monotrème. Le mâle a même un ergot venimeux."},
 {k:'Classification',e:C,q:"Le homard est…",r:"Un crustacé",w:["Un mollusque","Un insecte","Un poisson"],f:"Comme le crabe et la crevette, il a une carapace et dix pattes."},
 {k:'Classification',e:C,q:"L'escargot est…",r:"Un mollusque",w:["Un insecte","Un crustacé","Un ver"],f:"Comme la moule, l'huître ou la pieuvre."},
 {k:'Classification',e:C,q:"Combien de bras a une pieuvre ?",r:"8",w:["10","6","12"],f:"La seiche et le calmar en ont 10 (8 bras et 2 tentacules)."},
 {k:'Classification',e:C,q:"Combien d'yeux ont la plupart des araignées ?",r:"8",w:["2","4","12"],f:"Ce qui ne les empêche pas, pour beaucoup, d'avoir une vue médiocre."},
 {k:'Classification',e:C,q:"Le requin est…",r:"Un poisson",w:["Un mammifère","Un reptile","Un cétacé"],f:"Un poisson cartilagineux : son squelette n'a pas d'os."},
 {k:'Classification',e:C,q:"Où vit l'ours polaire ?",r:"En Arctique",w:["En Antarctique","Aux deux pôles","En Patagonie"],f:"Les manchots vivent dans l'hémisphère Sud : ours et manchots ne se croisent jamais dans la nature."},
 {k:'Classification',e:C,q:"De quoi le panda géant se nourrit-il surtout ?",r:"De bambou",w:["D'eucalyptus","De poissons","De fruits"],f:"Il en mange jusqu'à 15 à 30 kg par jour."},
 {k:'Classification',e:C,q:"De quoi le koala se nourrit-il ?",r:"De feuilles d'eucalyptus",w:["De bambou","D'insectes","D'herbe"],f:"Ces feuilles sont toxiques pour la plupart des autres animaux."},
 {k:'Classification',e:C,q:"Comment respire le dauphin ?",r:"Avec des poumons, par un évent",w:["Avec des branchies","Par la peau","Avec des branchies et des poumons"],f:"Il doit remonter à la surface pour respirer ; il dort avec un seul hémisphère du cerveau à la fois."},
 // Plantes et arbres
 {k:'Plantes',e:P,q:"Quel arbre d'Afrique stocke des milliers de litres d'eau dans son tronc ?",r:"Le baobab",w:["Le séquoia","L'acajou","Le flamboyant"],f:"Il peut vivre plus de 1 000 ans ; son fruit s'appelle « pain de singe »."},
 {k:'Plantes',e:P,q:"Comment s'appelle le pigment vert des plantes ?",r:"La chlorophylle",w:["Le carotène","La mélanine","L'hémoglobine"],f:"Elle capte la lumière pour la photosynthèse."},
 {k:'Plantes',e:P,q:"Quel est le fruit du chêne ?",r:"Le gland",w:["La faîne","La châtaigne","La samare"],f:"Les geais en enterrent des réserves… et en oublient beaucoup, ce qui plante de nouveaux chênes."},
 {k:'Plantes',e:P,q:"Quel est le fruit du hêtre ?",r:"La faîne",w:["Le gland","La noisette","Le marron"],f:"Une petite noix triangulaire, comestible en petite quantité une fois grillée."},
 {k:'Plantes',e:P,q:"Le marron d'Inde, fruit du marronnier…",r:"n'est pas comestible",w:["se mange grillé","sert à faire la crème de marrons","est un agrume"],f:"La châtaigne vendue « marron » au marché vient du châtaignier."},
 {k:'Plantes',e:P,q:"Pour un botaniste, la tomate est…",r:"Un fruit",w:["Une racine","Une tige","Une graine"],f:"Elle se forme à partir de la fleur et contient les graines, comme le concombre ou l'avocat."},
 {k:'Plantes',e:P,q:"Quel arbre a sa feuille sur le drapeau du Canada ?",r:"L'érable",w:["Le chêne","Le bouleau","Le platane"],f:"Sa sève sert à faire le sirop d'érable."},
 {k:'Plantes',e:P,q:"Un arbre qui perd ses feuilles en hiver a des feuilles…",r:"Caduques",w:["Persistantes","Résineuses","Sempervirentes"],f:"Les arbres à feuilles persistantes, comme le pin ou le houx, les gardent toute l'année."},
 {k:'Plantes',e:P,q:"Quelle plante carnivore referme ses feuilles sur les insectes ?",r:"La dionée",w:["L'ortie","La fougère","Le lierre"],f:"Surnommée « attrape-mouche » ; le piège se ferme en une fraction de seconde."},
 {k:'Plantes',e:P,q:"De quelle fleur vient le safran ?",r:"D'un crocus",w:["Du coquelicot","Du tournesol","De la tulipe"],f:"Il faut environ 150 fleurs pour 1 g de safran, d'où son prix."},
 {k:'Plantes',e:P,q:"La vanille est le fruit…",r:"D'une orchidée",w:["D'un palmier","D'une fougère","D'un cactus"],f:"Au Mexique, son pays d'origine, elle était pollinisée par une abeille locale ; ailleurs, on la pollinise à la main."},
 {k:'Plantes',e:P,q:"Quel arbre fournit le liège des bouchons ?",r:"Le chêne-liège",w:["Le bouleau","Le pin maritime","Le platane"],f:"On récolte son écorce tous les 9 ans environ, sans abattre l'arbre."},
 {k:'Plantes',e:P,q:"Quelle fleur est l'emblème des Pays-Bas ?",r:"La tulipe",w:["La rose","L'iris","Le tournesol"],f:"Venue de l'Empire ottoman, elle a provoqué au XVIIe siècle une folle spéculation, la « tulipomanie »."},
 {k:'Plantes',e:P,q:"Quels arbres sont les plus vieux connus, avec près de 5 000 ans ?",r:"Des pins Bristlecone",w:["Des oliviers","Des chênes","Des baobabs"],f:"Ils poussent en Californie, dans les montagnes Blanches, dans un climat très rude."}
];
window.QUIZ = {
  title: 'Animaux & nature', emoji: '🐾', color: '#C2410C', color2: '#FACC15',
  sub: 'Records, petits, cris, plantes.',
  modes: [
    { id: 'Records', label: 'Records du vivant', emoji: R },
    { id: 'Bébés & cris', label: 'Petits et cris', emoji: B },
    { id: 'Classification', label: 'Qui est qui ?', emoji: C },
    { id: 'Plantes', label: 'Plantes et arbres', emoji: P }
  ],
  items
};
})();
