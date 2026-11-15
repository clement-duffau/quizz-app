/* Géographie */
(function(){
const F = '🌊', M = '⛰️', R = '🏆', P = '🇫🇷';
const items = [
 // Fleuves, mers et lacs
 {k:'Eaux',e:F,q:"Quelle rivière rejoint le Rhône à Lyon ?",r:"La Saône",w:["La Loire","L'Isère","Le Doubs"],f:"Leur confluence est au sud de la Presqu'île ; un quartier entier porte ce nom."},
 {k:'Eaux',e:F,i:'river-thames',q:"Quel fleuve traverse Londres ?",r:"La Tamise",w:["La Severn","La Clyde","Le Rhin"],f:"Elle se jette dans la mer du Nord."},
 {k:'Eaux',e:F,q:"Quel fleuve traverse Vienne, Bratislava, Budapest et Belgrade ?",r:"Le Danube",w:["Le Rhin","L'Elbe","La Vistule"],f:"C'est le fleuve qui traverse le plus de capitales au monde."},
 {k:'Eaux',e:F,q:"Quel est le plus long fleuve d'Europe ?",r:"La Volga",w:["Le Danube","Le Rhin","Le Dniepr"],f:"Environ 3 500 km, entièrement en Russie, jusqu'à la mer Caspienne."},
 {k:'Eaux',e:F,i:'amazon-river',q:"Quel fleuve a de loin le plus grand débit du monde ?",r:"L'Amazone",w:["Le Nil","Le Congo","Le Mississippi"],f:"Il déverse à lui seul près d'un cinquième de l'eau douce qui arrive dans les océans."},
 {k:'Eaux',e:F,q:"Le Nil et quel autre fleuve se disputent le titre de plus long du monde ?",r:"L'Amazone",w:["Le Yangzi Jiang","Le Mississippi","Le Congo"],f:"Tout dépend d'où l'on fait partir la source : les mesures varient selon les études."},
 {k:'Eaux',e:F,q:"Quelle mer borde à la fois la Turquie, la Roumanie et l'Ukraine ?",r:"La mer Noire",w:["La mer Caspienne","La mer Égée","La mer Baltique"],f:"Elle communique avec la Méditerranée par le Bosphore."},
 {k:'Eaux',e:F,i:'dead-sea',q:"Où se trouve le point le plus bas des terres émergées ?",r:"Au bord de la mer Morte",w:["Dans la vallée de la Mort","Au lac Assal","Dans la dépression de Qattara"],f:"Environ 430 m sous le niveau de la mer, et il descend encore chaque année."},
 {k:'Eaux',e:F,q:"Quel détroit sépare la Sicile de l'Italie continentale ?",r:"Le détroit de Messine",w:["Les bouches de Bonifacio","Le canal d'Otrante","Le détroit de Gibraltar"],f:"Environ 3 km au plus étroit ; les bouches de Bonifacio séparent la Corse de la Sardaigne."},
 {k:'Eaux',e:F,q:"Quel détroit traverse la ville d'Istanbul ?",r:"Le Bosphore",w:["Les Dardanelles","Le détroit de Gibraltar","Le détroit de Kertch"],f:"Il relie la mer Noire à la mer de Marmara, entre Europe et Asie."},
 {k:'Eaux',e:F,q:"Quel est le plus grand lac du monde par sa superficie ?",r:"La mer Caspienne",w:["Le lac Supérieur","Le lac Victoria","Le lac Baïkal"],f:"Malgré son nom, c'est un lac : il n'est relié à aucun océan."},
 {k:'Eaux',e:F,i:'lake-baikal',q:"Quel est le lac le plus profond du monde ?",r:"Le lac Baïkal",w:["Le lac Tanganyika","Le lac Léman","Le lac Titicaca"],f:"Plus de 1 600 m de profondeur ; il contient environ un cinquième de l'eau douce liquide de la planète."},
 {k:'Eaux',e:F,i:'suez-canal',q:"Le canal de Suez relie la Méditerranée à…",r:"La mer Rouge",w:["La mer Noire","Le golfe Persique","La mer Caspienne"],f:"Ouvert en 1869, il évite de contourner l'Afrique."},
 {k:'Eaux',e:F,q:"Le canal de Panama relie l'océan Atlantique à…",r:"L'océan Pacifique",w:["L'océan Indien","L'océan Arctique","La mer des Caraïbes"],f:"Ouvert en 1914, il fonctionne avec un système d'écluses."},
 {k:'Eaux',e:F,q:"Quel fleuve se jette dans la Méditerranée en formant la Camargue ?",r:"Le Rhône",w:["La Durance","La Garonne","Le Var"],f:"Il naît en Suisse, dans le glacier du Rhône, et traverse le lac Léman."},
 {k:'Eaux',e:F,i:'niagara-falls',q:"Les chutes du Niagara sont à la frontière entre…",r:"Les États-Unis et le Canada",w:["Les États-Unis et le Mexique","Le Brésil et l'Argentine","La Zambie et le Zimbabwe"],f:"Les chutes d'Iguazú sont entre le Brésil et l'Argentine, celles Victoria entre la Zambie et le Zimbabwe."},
 {k:'Eaux',e:F,i:'grand-canyon',q:"Quel fleuve a creusé le Grand Canyon ?",r:"Le Colorado",w:["Le Mississippi","Le Rio Grande","Le Missouri"],f:"Le canyon atteint environ 1 800 m de profondeur."},
 // Sommets et reliefs
 {k:'Reliefs',e:M,i:'mount-everest',q:"À la frontière de quels pays se trouve l'Everest ?",r:"Le Népal et la Chine",w:["L'Inde et le Népal","Le Népal et le Bhoutan","Le Pakistan et la Chine"],f:"8 849 m ; côté chinois, c'est la région autonome du Tibet."},
 {k:'Reliefs',e:M,i:'k2',q:"Quel est le deuxième plus haut sommet du monde ?",r:"Le K2",w:["Le Kangchenjunga","Le Lhotse","Le Makalu"],f:"8 611 m, dans le Karakoram ; réputé bien plus dangereux que l'Everest."},
 {k:'Reliefs',e:M,q:"Dans quelle chaîne de montagnes se trouve l'Everest ?",r:"L'Himalaya",w:["Le Karakoram","L'Hindou Kouch","Le Pamir"],f:"L'Himalaya compte 10 des 14 sommets de plus de 8 000 m."},
 {k:'Reliefs',e:M,i:'chamonix',q:"Quelle ville française est au pied du mont Blanc ?",r:"Chamonix",w:["Annecy","Grenoble","Albertville"],f:"Elle a accueilli les tout premiers Jeux olympiques d'hiver, en 1924."},
 {k:'Reliefs',e:M,i:'mount-kilimanjaro',q:"Quel est le plus haut sommet d'Afrique ?",r:"Le Kilimandjaro",w:["Le mont Kenya","Le Toubkal","Le mont Cameroun"],f:"5 895 m, en Tanzanie ; c'est un volcan."},
 {k:'Reliefs',e:M,i:'aconcagua',q:"Quel est le plus haut sommet des Amériques ?",r:"L'Aconcagua",w:["Le Denali","Le Chimborazo","Le Huascarán"],f:"6 961 m, en Argentine, dans la cordillère des Andes."},
 {k:'Reliefs',e:M,q:"Quel est le plus haut sommet des Pyrénées ?",r:"L'Aneto",w:["Le Vignemale","Le mont Perdu","Le pic du Midi de Bigorre"],f:"3 404 m, côté espagnol."},
 {k:'Reliefs',e:M,i:'mount-vesuvius',q:"Quel volcan a enseveli Pompéi en l'an 79 ?",r:"Le Vésuve",w:["L'Etna","Le Stromboli","Le Santorin"],f:"La ville, figée sous les cendres, a été redécouverte au XVIIIe siècle."},
 {k:'Reliefs',e:M,i:'mount-etna',q:"Dans quel pays se trouve l'Etna ?",r:"L'Italie",w:["La Grèce","L'Espagne","L'Islande"],f:"En Sicile ; c'est l'un des volcans les plus actifs du monde."},
 {k:'Reliefs',e:M,q:"Quelle chaîne de montagnes marque traditionnellement la limite entre l'Europe et l'Asie ?",r:"L'Oural",w:["Le Caucase","Les Carpates","L'Altaï"],f:"Elle traverse la Russie du nord au sud sur environ 2 500 km."},
 {k:'Reliefs',e:M,q:"Quel est le point culminant du Massif central ?",r:"Le puy de Sancy",w:["Le puy de Dôme","Le Plomb du Cantal","Le mont Mézenc"],f:"1 885 m ; c'est un ancien volcan."},
 {k:'Reliefs',e:M,i:'namib',q:"Dans quel pays se trouve le désert du Namib, aux dunes rouges ?",r:"La Namibie",w:["Le Botswana","Le Mali","L'Égypte"],f:"Considéré comme l'un des plus vieux déserts du monde."},
 {k:'Reliefs',e:M,i:'atacama-desert',q:"Quel désert du Chili est l'un des endroits les plus secs de la planète ?",r:"L'Atacama",w:["Le Namib","Le Mojave","Le Gobi"],f:"Certaines stations n'y ont jamais enregistré de pluie."},
 {k:'Reliefs',e:M,i:'angel-falls',q:"Quelle est la plus haute chute d'eau du monde ?",r:"Le Salto Angel",w:["Les chutes Victoria","Les chutes du Niagara","Les chutes d'Iguazú"],f:"979 m de haut, au Venezuela."},
 {k:'Reliefs',e:M,i:'mount-fuji',q:"Quel est le plus haut sommet du Japon ?",r:"Le mont Fuji",w:["Le mont Aso","Le mont Ontake","Le mont Haku"],f:"3 776 m ; c'est un volcan endormi depuis 1707."},
 // Records
 {k:'Records',e:R,q:"Quel est le deuxième plus grand pays du monde ?",r:"Le Canada",w:["La Chine","Les États-Unis","Le Brésil"],f:"Derrière la Russie, avec près de 10 millions de km²."},
 {k:'Records',e:R,q:"Quel petit État est, comme le Vatican, entièrement entouré par l'Italie ?",r:"Saint-Marin",w:["Monaco","Andorre","Le Liechtenstein"],f:"Elle se présente comme la plus ancienne république du monde encore existante."},
 {k:'Records',e:R,q:"Quel est le pays le plus peuplé d'Afrique ?",r:"Le Nigeria",w:["L'Éthiopie","L'Égypte","La RD Congo"],f:"Plus de 230 millions d'habitants ; Lagos est l'une des plus grandes villes du continent."},
 {k:'Records',e:R,q:"Quel est le plus grand pays d'Afrique ?",r:"L'Algérie",w:["La RD Congo","Le Soudan","La Libye"],f:"Depuis la partition du Soudan en 2011."},
 {k:'Records',e:R,q:"Quel est le plus grand pays d'Amérique du Sud ?",r:"Le Brésil",w:["L'Argentine","Le Pérou","La Colombie"],f:"Il occupe près de la moitié du continent."},
 {k:'Records',e:R,q:"Quel pays compte le plus de fuseaux horaires, territoires d'outre-mer compris ?",r:"La France",w:["La Russie","Les États-Unis","Le Royaume-Uni"],f:"12 fuseaux grâce à ses outre-mer (13 en comptant la terre Adélie) ; la Russie en a 11."},
 {k:'Records',e:R,q:"À quel royaume le Groenland est-il rattaché ?",r:"Le Danemark",w:["La Norvège","Le Royaume-Uni","La Suède"],f:"C'est un territoire autonome, et la plus grande île du monde."},
 {k:'Records',e:R,i:'la-paz',q:"Quelle ville, siège du gouvernement bolivien, est la plus haute du monde de ce genre ?",r:"La Paz",w:["Quito","Bogota","Katmandou"],f:"Vers 3 600 m d'altitude. Sucre est la capitale constitutionnelle de la Bolivie."},
 {k:'Records',e:R,q:"Quel est le continent le plus peuplé ?",r:"L'Asie",w:["L'Afrique","L'Europe","L'Amérique"],f:"Près de 6 humains sur 10 y vivent."},
 {k:'Records',e:R,q:"Quel est le plus grand pays situé entièrement en Europe ?",r:"L'Ukraine",w:["La France","L'Espagne","La Suède"],f:"La Russie et la Turquie sont à cheval sur l'Asie."},
 {k:'Records',e:R,q:"Quel est le pays le plus densément peuplé du monde ?",r:"Monaco",w:["Singapour","Le Bangladesh","Les Pays-Bas"],f:"Environ 38 000 habitants sur 2 km²."},
 {k:'Records',e:R,q:"Combien de pays sont membres de l'ONU ?",r:"193",w:["185","200","207"],f:"Le Vatican et la Palestine y ont un statut d'observateur."},
 {k:'Records',e:R,q:"Quel pays compterait plus de la moitié des lacs du monde ?",r:"Le Canada",w:["La Finlande","La Russie","La Suède"],f:"Des centaines de milliers de lacs, souvent creusés par les glaciers."},
 // France
 {k:'France',e:P,q:"Combien de régions compte la France métropolitaine depuis 2016 ?",r:"13",w:["12","18","22"],f:"18 en comptant les 5 régions d'outre-mer ; il y en avait 22 en métropole avant la réforme."},
 {k:'France',e:P,q:"Quel département porte le numéro 2A ?",r:"La Corse-du-Sud",w:["La Haute-Corse","L'Aisne","L'Ain"],f:"La Haute-Corse est le 2B ; l'Ain le 01 et l'Aisne le 02."},
 {k:'France',e:P,q:"Quel département porte le numéro 75 ?",r:"Paris",w:["Les Yvelines","Les Hauts-de-Seine","La Seine-Saint-Denis"],f:"Les Yvelines sont le 78, les Hauts-de-Seine le 92, la Seine-Saint-Denis le 93."},
 {k:'France',e:P,q:"Quelle est la préfecture des Bouches-du-Rhône (13) ?",r:"Marseille",w:["Aix-en-Provence","Toulon","Arles"],f:"Toulon est la préfecture du Var (83)."},
 {k:'France',e:P,q:"Quel est le chef-lieu de la région Bretagne ?",r:"Rennes",w:["Nantes","Brest","Quimper"],f:"Nantes est le chef-lieu des Pays de la Loire."},
 {k:'France',e:P,q:"Quel est le chef-lieu de la région Grand Est ?",r:"Strasbourg",w:["Metz","Nancy","Reims"],f:"La région réunit l'Alsace, la Lorraine et Champagne-Ardenne."},
 {k:'France',e:P,q:"Quel est le chef-lieu de la région Occitanie ?",r:"Toulouse",w:["Montpellier","Nîmes","Perpignan"],f:"Montpellier était le chef-lieu de l'ancienne région Languedoc-Roussillon."},
 {k:'France',e:P,q:"Quel est le chef-lieu de la région Nouvelle-Aquitaine ?",r:"Bordeaux",w:["Limoges","Poitiers","La Rochelle"],f:"C'est la plus grande région de France métropolitaine."},
 {k:'France',e:P,q:"Quel est le chef-lieu de la région Hauts-de-France ?",r:"Lille",w:["Amiens","Arras","Calais"],f:"La région réunit le Nord-Pas-de-Calais et la Picardie."},
 {k:'France',e:P,q:"Quelle ville est la préfecture de la région Normandie ?",r:"Rouen",w:["Caen","Le Havre","Cherbourg"],f:"Le conseil régional, lui, siège à Caen."},
 {k:'France',e:P,q:"Quel est le chef-lieu de la région Auvergne-Rhône-Alpes ?",r:"Lyon",w:["Clermont-Ferrand","Grenoble","Saint-Étienne"],f:"Lyon est la troisième ville de France par sa population."},
 {k:'France',e:P,q:"Quel département d'outre-mer se trouve en Amérique du Sud ?",r:"La Guyane",w:["La Martinique","La Guadeloupe","Mayotte"],f:"C'est le plus grand département français : environ 84 000 km²."},
 {k:'France',e:P,q:"Dans quel océan se trouve l'île de La Réunion ?",r:"L'océan Indien",w:["L'océan Atlantique","L'océan Pacifique","L'océan Austral"],f:"Son piton de la Fournaise est l'un des volcans les plus actifs du monde."},
 {k:'France',e:P,q:"Avec quel pays la France partage-t-elle sa plus longue frontière terrestre ?",r:"Le Brésil",w:["L'Espagne","La Belgique","La Suisse"],f:"Environ 730 km, grâce à la Guyane. En métropole, c'est l'Espagne, à peine devant la Belgique."},
 {k:'France',e:P,q:"Combien de pays ont une frontière terrestre avec la France métropolitaine ?",r:"8",w:["6","7","9"],f:"Belgique, Luxembourg, Allemagne, Suisse, Italie, Monaco, Andorre et Espagne."},
 {k:'France',e:P,q:"Quelle est la plus grande île de France métropolitaine ?",r:"La Corse",w:["Oléron","Belle-Île-en-Mer","Noirmoutier"],f:"Environ 8 700 km² ; Oléron est la deuxième, très loin derrière."}
];
window.QUIZ = {
  title: 'Géographie', emoji: '🗺️', color: '#2F7D32', color2: '#F2B33D',
  sub: 'Fleuves, sommets, records et France.',
  modes: [
    { id: 'Eaux', label: 'Fleuves, mers et lacs', emoji: F },
    { id: 'Reliefs', label: 'Sommets et déserts', emoji: M },
    { id: 'Records', label: 'Records du monde', emoji: R },
    { id: 'France', label: 'La France', emoji: P }
  ],
  items
};
})();
