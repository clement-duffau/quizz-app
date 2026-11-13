/* Aviation & espace */
(function(){
const P = '🛩️', A = '✈️', S = '🚀';
const items = [
 // Pionniers
 {k:'Pionniers',e:P,q:"Qui a réussi le premier vol motorisé et contrôlé, en 1903 ?",r:"Les frères Wright",w:["Clément Ader","Louis Blériot","Alberto Santos-Dumont"],f:"12 secondes et 37 mètres, à Kitty Hawk, en Caroline du Nord."},
 {k:'Pionniers',e:P,q:"Qui a traversé la Manche en avion le premier, en 1909 ?",r:"Louis Blériot",w:["Roland Garros","Henri Farman","Jean Mermoz"],f:"De Calais à Douvres en 37 minutes, sur son Blériot XI."},
 {k:'Pionniers',e:P,q:"Qui a traversé le premier la Méditerranée en avion, en 1913 ?",r:"Roland Garros",w:["Louis Blériot","Jean Mermoz","Georges Guynemer"],f:"De Fréjus à Bizerte (Tunisie) ; le stade de tennis porte son nom."},
 {k:'Pionniers',e:P,q:"Qui a traversé le premier l'Atlantique en solitaire et sans escale, en 1927 ?",r:"Charles Lindbergh",w:["Amelia Earhart","Jean Mermoz","Antoine de Saint-Exupéry"],f:"De New York au Bourget en 33 heures et demie."},
 {k:'Pionniers',e:P,q:"Comment s'appelait l'avion de Charles Lindbergh ?",r:"Spirit of St. Louis",w:["Enola Gay","Flyer","Memphis Belle"],f:"Il n'avait pas de pare-brise avant : le réservoir bouchait la vue, Lindbergh utilisait un périscope."},
 {k:'Pionniers',e:P,q:"Quelle aviatrice a été la première femme à traverser l'Atlantique en solitaire, en 1932 ?",r:"Amelia Earhart",w:["Hélène Boucher","Adrienne Bolland","Bessie Coleman"],f:"Elle a disparu en 1937 au-dessus du Pacifique, pendant un tour du monde."},
 {k:'Pionniers',e:P,q:"Quel pilote de l'Aéropostale, surnommé « l'Archange », a disparu en 1936 au-dessus de l'Atlantique Sud ?",r:"Jean Mermoz",w:["Antoine de Saint-Exupéry","Henri Guillaumet","Roland Garros"],f:"Il avait réalisé en 1930 la première traversée postale de l'Atlantique Sud en hydravion."},
 {k:'Pionniers',e:P,q:"Qui a fait voler la première montgolfière, en 1783 ?",r:"Les frères Montgolfier",w:["Les frères Wright","Les frères Lumière","Les frères Goncourt"],f:"Les premiers passagers : un mouton, un canard et un coq, devant Louis XVI."},
 {k:'Pionniers',e:P,q:"Qui a été le premier à franchir le mur du son, en 1947 ?",r:"Chuck Yeager",w:["Neil Armstrong","Youri Gagarine","John Glenn"],f:"À bord du Bell X-1, un avion-fusée largué depuis un bombardier."},
 {k:'Pionniers',e:P,q:"Qui a inventé le mot « avion » ?",r:"Clément Ader",w:["Louis Blériot","Les frères Wright","Jules Verne"],f:"Du latin avis, « oiseau » ; son Éole a fait un bond en 1890."},
 {k:'Pionniers',e:P,q:"Quel as allemand de 1914-1918 était surnommé le « Baron rouge » ?",r:"Manfred von Richthofen",w:["Ernst Udet","Hermann Göring","Max Immelmann"],f:"80 victoires aériennes, à bord de son triplan Fokker peint en rouge."},
 // Avions
 {k:'Avions',e:A,q:"Quel avion de ligne supersonique était franco-britannique ?",r:"Le Concorde",w:["Le Tupolev Tu-144","La Caravelle","L'Airbus A380"],f:"Le Tu-144 soviétique a volé le premier, mais a été retiré bien plus tôt."},
 {k:'Avions',e:A,q:"À quelle vitesse volait le Concorde en croisière ?",r:"Environ Mach 2",w:["Environ Mach 1","Environ Mach 3","Environ Mach 1,5"],f:"Paris-New York en 3 h 30 environ, contre 8 h pour un avion classique."},
 {k:'Avions',e:A,q:"En quelle année le Concorde a-t-il été retiré du service ?",r:"2003",w:["1995","2000","2010"],f:"Trois ans après l'accident de Gonesse, en juillet 2000."},
 {k:'Avions',e:A,q:"Quel est le plus gros avion de ligne de passagers jamais construit en série ?",r:"L'Airbus A380",w:["Le Boeing 747","Le Boeing 777X","L'Airbus A350"],f:"Deux ponts sur toute la longueur, plus de 850 places au maximum."},
 {k:'Avions',e:A,q:"Dans quelle ville se trouvent les principales chaînes d'assemblage d'Airbus en France ?",r:"Toulouse",w:["Bordeaux","Marseille","Nantes"],f:"Notamment à Blagnac, à côté de l'aéroport."},
 {k:'Avions',e:A,q:"Quel avion est surnommé le « Jumbo Jet » ?",r:"Le Boeing 747",w:["Le Boeing 787","L'Airbus A380","Le Lockheed C-5"],f:"Sa bosse caractéristique abrite le poste de pilotage et un pont supérieur."},
 {k:'Avions',e:A,q:"Quel est le surnom du Boeing 787 ?",r:"Dreamliner",w:["Jumbo Jet","Stratocruiser","Triple Seven"],f:"Son fuselage est en grande partie en matériaux composites."},
 {k:'Avions',e:A,q:"Quel avion a été produit au plus grand nombre d'exemplaires ?",r:"Le Cessna 172",w:["Le Boeing 737","Le Douglas DC-3","Le Spitfire"],f:"Plus de 45 000 exemplaires de ce petit avion de tourisme."},
 {k:'Avions',e:A,q:"Quel géant de l'aviation cargo, avion unique au monde, a été détruit en 2022 ?",r:"L'Antonov An-225 Mriya",w:["L'Airbus Beluga XL","Le Boeing 747 Dreamlifter","Le Lockheed C-5 Galaxy"],f:"Le plus gros avion jamais construit, détruit près de Kiev au début de l'invasion russe."},
 {k:'Avions',e:A,q:"De quelle couleur sont réellement les « boîtes noires » des avions ?",r:"Orange",w:["Noire","Rouge","Jaune"],f:"Une couleur vive pour les retrouver plus facilement dans les débris."},
 {k:'Avions',e:A,q:"Quel mot lance un appel de détresse à la radio ?",r:"Mayday",w:["Pan-pan","Roger","SOS"],f:"De l'anglicisation de « m'aider ». « Pan-pan » signale une urgence moins grave ; SOS est un signal en morse."},
 {k:'Avions',e:A,q:"Dans l'alphabet radio international, quel mot correspond à la lettre B ?",r:"Bravo",w:["Beta","Baker","Boston"],f:"A Alfa, B Bravo, C Charlie, D Delta…"},
 {k:'Avions',e:A,q:"De quelle couleur est le feu de position sur l'aile gauche d'un avion ?",r:"Rouge",w:["Vert","Blanc","Bleu"],f:"Vert à droite, comme pour les bateaux (bâbord rouge, tribord vert)."},
 {k:'Avions',e:A,q:"Mach 1, la vitesse du son au niveau de la mer, vaut environ…",r:"1 225 km/h",w:["980 km/h","1 500 km/h","2 000 km/h"],f:"Elle diminue avec l'altitude, car l'air y est plus froid."},
 // Espace
 {k:'Espace',e:S,q:"Comment s'appelait le vaisseau de Youri Gagarine, premier homme dans l'espace ?",r:"Vostok 1",w:["Soyouz 1","Spoutnik 2","Mercury 7"],f:"108 minutes de vol, un seul tour de la Terre, le 12 avril 1961."},
 {k:'Espace',e:S,q:"Quel a été le premier satellite artificiel, en 1957 ?",r:"Spoutnik 1",w:["Explorer 1","Vostok 1","Telstar"],f:"Une sphère de 58 cm qui émettait un simple « bip-bip »."},
 {k:'Espace',e:S,q:"Quelle chienne a été le premier être vivant mis en orbite, en 1957 ?",r:"Laïka",w:["Belka","Strelka","Zvezdotchka"],f:"Elle n'a pas survécu ; Belka et Strelka sont revenues vivantes en 1960."},
 {k:'Espace',e:S,q:"Qui a été la première femme dans l'espace, en 1963 ?",r:"Valentina Terechkova",w:["Sally Ride","Claudie Haigneré","Svetlana Savitskaïa"],f:"Près de 3 jours en orbite, seule à bord de Vostok 6."},
 {k:'Espace',e:S,q:"Qui a été le premier Français dans l'espace, en 1982 ?",r:"Jean-Loup Chrétien",w:["Thomas Pesquet","Patrick Baudry","Jean-François Clervoy"],f:"À bord de la station soviétique Saliout 7."},
 {k:'Espace',e:S,q:"Qui a été la première Française dans l'espace, en 1996 ?",r:"Claudie Haigneré",w:["Hélène Boucher","Jacqueline Auriol","Adrienne Bolland"],f:"Médecin, elle est ensuite devenue ministre de la Recherche."},
 {k:'Espace',e:S,q:"Combien de missions Thomas Pesquet a-t-il faites à bord de l'ISS ?",r:"2",w:["1","3","4"],f:"Proxima (2016-2017) et Alpha (2021), dont il a été le commandant."},
 {k:'Espace',e:S,q:"Quelle mission a posé les premiers hommes sur la Lune ?",r:"Apollo 11",w:["Apollo 13","Apollo 8","Gemini 4"],f:"Le 21 juillet 1969 (heure de Paris), Neil Armstrong et Buzz Aldrin."},
 {k:'Espace',e:S,q:"Quelle mission lunaire a frôlé la catastrophe en 1970 ?",r:"Apollo 13",w:["Apollo 11","Apollo 1","Apollo 17"],f:"« Houston, on a eu un problème » : l'équipage est rentré sain et sauf."},
 {k:'Espace',e:S,q:"Quelle a été la dernière mission à faire marcher des hommes sur la Lune ?",r:"Apollo 17",w:["Apollo 14","Apollo 15","Apollo 11"],f:"En décembre 1972. Douze hommes au total ont marché sur la Lune."},
 {k:'Espace',e:S,q:"Comment s'appelle le programme américain de retour sur la Lune ?",r:"Artemis",w:["Gemini","Mercury","Skylab"],f:"Artémis est la sœur jumelle d'Apollon dans la mythologie grecque."},
 {k:'Espace',e:S,q:"D'où décollent les fusées Ariane ?",r:"De Kourou, en Guyane",w:["De Cap Canaveral","De Baïkonour","De Toulouse"],f:"Près de l'équateur, où la rotation de la Terre donne un élan supplémentaire."},
 {k:'Espace',e:S,q:"Quelle fusée européenne a fait son premier vol en 2024 ?",r:"Ariane 6",w:["Falcon 9","Soyouz","Atlas V"],f:"Elle succède à Ariane 5, retirée en 2023."},
 {k:'Espace',e:S,q:"À quelle altitude place-t-on conventionnellement la limite de l'espace (ligne de Kármán) ?",r:"100 km",w:["10 km","1 000 km","36 000 km"],f:"36 000 km, c'est l'orbite géostationnaire des satellites de télécommunication."},
 {k:'Espace',e:S,q:"Quel rover de la NASA s'est posé sur Mars en 2021 ?",r:"Perseverance",w:["Curiosity","Spirit","Opportunity"],f:"Il emportait le petit hélicoptère Ingenuity, premier engin à voler sur une autre planète."},
 {k:'Espace',e:S,q:"Quel télescope spatial a été lancé fin 2021 ?",r:"Le James Webb",w:["Hubble","Kepler","Gaia"],f:"Lancé par une Ariane 5 depuis Kourou ; il observe surtout dans l'infrarouge."},
 {k:'Espace',e:S,q:"Quelle entreprise a fondé Elon Musk pour lancer des fusées ?",r:"SpaceX",w:["Blue Origin","Virgin Galactic","Rocket Lab"],f:"Ses fusées Falcon 9 reviennent se poser à la verticale pour être réutilisées."},
 {k:'Espace',e:S,q:"Quelle vitesse faut-il atteindre pour échapper à l'attraction terrestre ?",r:"Environ 11,2 km/s",w:["Environ 7,9 km/s","Environ 3 km/s","Environ 30 km/s"],f:"7,9 km/s suffisent pour rester en orbite basse ; 30 km/s, c'est la vitesse de la Terre autour du Soleil."}
];
window.QUIZ = {
  title: 'Aviation & espace', emoji: '✈️', color: '#334155', color2: '#F97316',
  sub: 'Pionniers, avions et conquête spatiale.',
  modes: [
    { id: 'Pionniers', label: 'Pionniers', emoji: P },
    { id: 'Avions', label: 'Avions et radio', emoji: A },
    { id: 'Espace', label: 'Conquête spatiale', emoji: S }
  ],
  items
};
})();
