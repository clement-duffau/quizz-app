/* Données du jeu « Plus ou moins ». Valeurs arrondies, sources ouvertes (ONU 2024, encyclopédies).
   Le jeu ne compare que des paires assez éloignées (écart ≥ 15 %, ou ≥ 5 ans pour les dates) :
   les arrondis ne peuvent donc pas changer la bonne réponse. */
window.CHIFFRES = [
 { id:'pop', t:'Population', em:'👥', q:'a plus d’habitants que', u:'habitants', fmt:'M', items:[
  ['🇮🇳 Inde',1450],['🇨🇳 Chine',1420],['🇺🇸 États-Unis',340],['🇮🇩 Indonésie',283],['🇵🇰 Pakistan',251],['🇳🇬 Nigeria',233],
  ['🇧🇷 Brésil',212],['🇧🇩 Bangladesh',174],['🇷🇺 Russie',145],['🇲🇽 Mexique',131],['🇯🇵 Japon',124],['🇵🇭 Philippines',116],
  ['🇨🇩 RD Congo',109],['🇻🇳 Vietnam',101],['🇹🇷 Turquie',87],['🇩🇪 Allemagne',84],['🇹🇭 Thaïlande',72],['🇬🇧 Royaume-Uni',69],
  ['🇫🇷 France',68],['🇿🇦 Afrique du Sud',64],['🇮🇹 Italie',59],['🇪🇸 Espagne',48],['🇦🇷 Argentine',46],['🇨🇦 Canada',40],
  ['🇵🇱 Pologne',38],['🇦🇺 Australie',27],['🇳🇱 Pays-Bas',18],['🇧🇪 Belgique',12],['🇸🇪 Suède',10.6],['🇨🇭 Suisse',8.9],
  ['🇳🇴 Norvège',5.6],['🇮🇪 Irlande',5.2],['🇱🇺 Luxembourg',0.67],['🇮🇸 Islande',0.39],['🇲🇨 Monaco',0.039]
 ]},
 { id:'aire', t:'Superficie', em:'🗺️', q:'est plus grand que', u:'km²', items:[
  ['🇷🇺 Russie',17098000],['🇨🇦 Canada',9985000],['🇧🇷 Brésil',8516000],['🇦🇺 Australie',7692000],['🇮🇳 Inde',3287000],
  ['🇦🇷 Argentine',2780000],['🇩🇿 Algérie',2382000],['🇸🇦 Arabie saoudite',2150000],['🇲🇽 Mexique',1964000],['🇲🇳 Mongolie',1564000],
  ['🇵🇪 Pérou',1285000],['🇪🇬 Égypte',1002000],['🇹🇷 Turquie',784000],['🇫🇷 France métropolitaine',552000],['🇪🇸 Espagne',506000],
  ['🇸🇪 Suède',450000],['🇯🇵 Japon',378000],['🇩🇪 Allemagne',357000],['🇮🇹 Italie',302000],['🇬🇧 Royaume-Uni',244000],
  ['🇬🇷 Grèce',132000],['🇵🇹 Portugal',92000],['🇮🇪 Irlande',70000],['🇨🇭 Suisse',41000],['🇧🇪 Belgique',30700],
  ['🇱🇺 Luxembourg',2590],['🇲🇹 Malte',316],['🇲🇨 Monaco',2],['🇻🇦 Vatican',0.44]
 ]},
 { id:'sommets', t:'Sommets', em:'⛰️', q:'est plus haut que', u:'m', items:[
  ['Everest',8849],['K2',8611],['Aconcagua',6961],['Denali',6190],['Kilimandjaro',5895],['Elbrouz',5642],
  ['Mont Blanc',4806],['Mont Fuji',3776],['Aneto (Pyrénées)',3404],['Olympe',2918],['Mont Ventoux',1910],
  ['Puy de Dôme',1465],['Ben Nevis',1345],['Vésuve',1281],['Mont Saint-Odile',764]
 ]},
 { id:'batiments', t:'Bâtiments et monuments', em:'🏙️', q:'est plus haut que', u:'m', items:[
  ['Burj Khalifa (Dubaï)',828],['Shanghai Tower',632],['One World Trade Center (New York)',541],['Tours Petronas (Kuala Lumpur)',452],
  ['Empire State Building (toit)',381],['Viaduc de Millau (pylône)',343],['Tour Eiffel',330],['Golden Gate Bridge (tours)',227],
  ['Tour Montparnasse',210],['Pyramide de Khéops',139],['Big Ben',96],['Statue de la Liberté (avec socle)',93],
  ['Notre-Dame de Paris (tours)',69],['Tour de Pise',56],['Arc de Triomphe',50],['Colisée',48],['Christ Rédempteur (avec socle)',38]
 ]},
 { id:'fleuves', t:'Fleuves', em:'🌊', q:'est plus long que', u:'km', items:[
  ['Nil',6650],['Yangzi Jiang',6300],['Congo',4700],['Mékong',4350],['Niger',4180],['Mississippi',3730],['Volga',3530],
  ['Danube',2850],['Gange',2525],['Rhin',1230],['Loire',1006],['Rhône',812],['Seine',777],['Garonne',529],['Tamise',346]
 ]},
 { id:'dates', t:'Histoire', em:'⏳', q:'s’est passé après', u:'', date:true, items:[
  ['Victoire de César à Alésia',-52],['Chute de l’Empire romain d’Occident',476],['Couronnement de Charlemagne',800],
  ['Bataille de Hastings',1066],['Mort de Jeanne d’Arc',1431],['Prise de Constantinople',1453],['Premier voyage de Christophe Colomb',1492],
  ['Bataille de Marignan',1515],['Révolution française',1789],['Bataille de Waterloo',1815],['Inauguration de la tour Eiffel',1889],
  ['Début de la Première Guerre mondiale',1914],['Krach de Wall Street',1929],['Débarquement en Normandie',1944],
  ['Premiers pas sur la Lune',1969],['Chute du mur de Berlin',1989],['Arrivée des pièces et billets en euros',2002],['Premier iPhone',2007]
 ]},
 { id:'poids', t:'Poids des animaux', em:'⚖️', q:'est plus lourd que', u:'kg', items:[
  ['Baleine bleue',150000],['Éléphant d’Afrique',6000],['Rhinocéros blanc',2300],['Hippopotame',1500],['Girafe',1200],
  ['Ours polaire',450],['Tigre de Sibérie',250],['Gorille',160],['Autruche',120],['Humain adulte',70],['Loup',40],
  ['Castor',20],['Renard roux',6],['Chat domestique',4],['Lapin',2],['Hérisson',0.8],['Colibri',0.004]
 ]}
];
