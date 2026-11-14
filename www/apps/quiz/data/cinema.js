/* Cinéma & BD */
(function(){
const C = '🎬', A = '🧸', B = '💬';
const items = [
 // Cinéma
 {k:'Cinéma',e:C,q:"Qui a réalisé « Titanic » (1997) ?",r:"James Cameron",w:["Steven Spielberg","Ridley Scott","Christopher Nolan"],f:"Il a aussi réalisé « Avatar », le plus gros succès de l'histoire au box-office mondial."},
 {k:'Cinéma',e:C,q:"Qui a réalisé « Les Dents de la mer » (1975) ?",r:"Steven Spielberg",w:["George Lucas","Francis Ford Coppola","John Carpenter"],f:"Le requin mécanique tombait si souvent en panne qu'on le voit très peu… ce qui rend le film encore plus angoissant."},
 {k:'Cinéma',e:C,q:"Qui a créé la saga « Star Wars » ?",r:"George Lucas",w:["Steven Spielberg","J. J. Abrams","James Cameron"],f:"Le premier film est sorti en 1977 ; Disney a racheté la saga en 2012."},
 {k:'Cinéma',e:C,q:"Qui a réalisé « Le Parrain » (1972) ?",r:"Francis Ford Coppola",w:["Martin Scorsese","Brian De Palma","Sergio Leone"],f:"Marlon Brando y joue Vito Corleone, rôle qui lui vaut l'Oscar."},
 {k:'Cinéma',e:C,q:"Quel film français a fait le plus d'entrées en France ?",r:"Bienvenue chez les Ch'tis",w:["Intouchables","La Grande Vadrouille","Les Visiteurs"],f:"Plus de 20 millions d'entrées en 2008 ; seul « Titanic » a fait mieux en France."},
 {k:'Cinéma',e:C,q:"Qui a réalisé « Le Voyage dans la Lune » en 1902 ?",r:"Georges Méliès",w:["Louis Lumière","Charlie Chaplin","Abel Gance"],f:"L'image de la fusée plantée dans l'œil de la Lune est l'une des plus célèbres du cinéma muet."},
 {k:'Cinéma',e:C,q:"Comment s'appelle le célèbre personnage de Charlie Chaplin ?",r:"Charlot",w:["Monsieur Hulot","Fantômas","Le Kid"],f:"Chapeau melon, canne, moustache et chaussures trop grandes."},
 {k:'Cinéma',e:C,q:"Qui a créé et joué Monsieur Hulot ?",r:"Jacques Tati",w:["Louis de Funès","Bourvil","Pierre Richard"],f:"Dans « Les Vacances de M. Hulot » (1953), puis « Mon oncle » (Oscar du film étranger)."},
 {k:'Cinéma',e:C,q:"Quelle est la plus haute récompense du Festival de Cannes ?",r:"La Palme d'or",w:["Le Lion d'or","L'Ours d'or","Le César d'honneur"],f:"Le Lion d'or récompense le meilleur film à Venise, l'Ours d'or à Berlin."},
 {k:'Cinéma',e:C,q:"Comment s'appellent les récompenses du cinéma français ?",r:"Les César",w:["Les Oscars","Les Molières","Les Victoires"],f:"Les Molières récompensent le théâtre, les Victoires la musique."},
 {k:'Cinéma',e:C,q:"Quel est le matricule de James Bond ?",r:"007",w:["001","009","700"],f:"Le double zéro signifie qu'il a le « permis de tuer »."},
 {k:'Cinéma',e:C,q:"Qui a joué James Bond dans le premier film de la série, en 1962 ?",r:"Sean Connery",w:["Roger Moore","Pierce Brosnan","Daniel Craig"],f:"Le film s'appelle « James Bond 007 contre Dr No »."},
 {k:'Cinéma',e:C,q:"Quel duo d'acteurs joue dans « La Grande Vadrouille » (1966) ?",r:"Bourvil et Louis de Funès",w:["Jean Gabin et Lino Ventura","Gérard Depardieu et Pierre Richard","Jean-Paul Belmondo et Alain Delon"],f:"Une comédie sur l'Occupation, longtemps le plus grand succès du cinéma français."},
 {k:'Cinéma',e:C,q:"Pour quel film Jean Dujardin a-t-il reçu l'Oscar du meilleur acteur ?",r:"The Artist",w:["OSS 117","Brice de Nice","Un balcon sur la mer"],f:"En 2012, pour un film muet et en noir et blanc : une première pour un acteur français."},
 {k:'Cinéma',e:C,q:"Pour quel rôle Marion Cotillard a-t-elle reçu l'Oscar de la meilleure actrice ?",r:"Édith Piaf dans « La Môme »",w:["Lili dans « Taxi »","Stéphanie dans « De rouille et d'os »","Mal dans « Inception »"],f:"En 2008 : c'était la première fois que l'Oscar de la meilleure actrice récompensait un rôle joué en français."},
 {k:'Cinéma',e:C,q:"Quel film détient le record de recettes au box-office mondial ?",r:"Avatar",w:["Avengers : Endgame","Titanic","Star Wars : Le Réveil de la Force"],f:"Le film de James Cameron (2009) a rapporté près de 3 milliards de dollars."},
 // Dessins animés
 {k:'Animation',e:A,q:"Quel a été le premier long-métrage d'animation de Disney, en 1937 ?",r:"Blanche-Neige et les Sept Nains",w:["Pinocchio","Cendrillon","Bambi"],f:"On le surnommait « la folie de Disney » : tout le monde pensait que ce serait un échec."},
 {k:'Animation',e:A,q:"Quel a été le premier long-métrage entièrement en images de synthèse, en 1995 ?",r:"Toy Story",w:["Shrek","Le Monde de Nemo","1001 pattes"],f:"Produit par le studio Pixar."},
 {k:'Animation',e:A,q:"Quel studio a produit « Shrek » ?",r:"DreamWorks",w:["Pixar","Disney","Illumination"],f:"Le film se moque gentiment des contes de fées… et de Disney."},
 {k:'Animation',e:A,q:"De quel film viennent les Minions ?",r:"Moi, moche et méchant",w:["Shrek","Madagascar","L'Âge de glace"],f:"Une partie de l'animation a été réalisée à Paris, au studio Illumination Mac Guff."},
 {k:'Animation',e:A,q:"Quel réalisateur a fondé le studio Ghibli avec Isao Takahata ?",r:"Hayao Miyazaki",w:["Osamu Tezuka","Akira Toriyama","Makoto Shinkai"],f:"Le logo du studio, c'est Totoro."},
 {k:'Animation',e:A,q:"Quel film de Miyazaki a reçu l'Oscar du meilleur film d'animation en 2003 ?",r:"Le Voyage de Chihiro",w:["Mon voisin Totoro","Princesse Mononoké","Le Château ambulant"],f:"Il a aussi reçu l'Ours d'or à Berlin, une rareté pour un dessin animé."},
 {k:'Animation',e:A,q:"Dans « Le Roi lion », comment s'appelle le père de Simba ?",r:"Mufasa",w:["Scar","Rafiki","Zazu"],f:"Scar est son oncle, Rafiki le vieux mandrill sage, Zazu le calao."},
 {k:'Animation',e:A,q:"Dans quelle ville se passe « Ratatouille » ?",r:"Paris",w:["Lyon","Rome","Marseille"],f:"Rémy, un rat, rêve de devenir grand chef cuisinier."},
 {k:'Animation',e:A,q:"En quelle année Mickey est-il apparu dans « Steamboat Willie » ?",r:"1928",w:["1920","1937","1945"],f:"L'un des premiers dessins animés avec un son synchronisé."},
 {k:'Animation',e:A,q:"Quel Pokémon jaune lance des éclairs ?",r:"Pikachu",w:["Salamèche","Bulbizarre","Carapuce"],f:"Son nom vient de « pika », le bruit d'une étincelle, et « chu », le cri d'une souris, en japonais."},
 {k:'Animation',e:A,q:"Dans quelle ville vivent les Simpson ?",r:"Springfield",w:["Shelbyville","Quahog","South Park"],f:"Il existe des dizaines de Springfield aux États-Unis : on ne sait pas dans quel État elle se trouve."},
 {k:'Animation',e:A,q:"Où vit Bob l'éponge ?",r:"Dans un ananas",w:["Dans un coquillage","Dans une boîte de conserve","Sous un rocher"],f:"Au fond de l'océan, à Bikini Bottom ; c'est son ami Patrick qui vit sous un rocher."},
 // Bande dessinée
 {k:'BD',e:B,q:"Comment s'appelle le chien de Tintin ?",r:"Milou",w:["Idéfix","Rantanplan","Bill"],f:"Idéfix est le chien d'Obélix, Rantanplan celui de Lucky Luke, Bill celui de Boule."},
 {k:'BD',e:B,q:"D'où vient le pseudonyme « Hergé » ?",r:"Des initiales de Georges Remi, inversées (R.G.)",w:["D'un village belge","D'un personnage de roman","D'un mot flamand"],f:"Le créateur de Tintin a publié sa première aventure en 1929."},
 {k:'BD',e:B,q:"Qui a écrit les scénarios d'Astérix, dessinés par Albert Uderzo ?",r:"René Goscinny",w:["Hergé","Jean-Michel Charlier","Jacques Martin"],f:"Goscinny a aussi écrit Lucky Luke et le Petit Nicolas."},
 {k:'BD',e:B,q:"Quel druide prépare la potion magique dans Astérix ?",r:"Panoramix",w:["Assurancetourix","Abraracourcix","Agecanonix"],f:"Assurancetourix est le barde, Abraracourcix le chef du village."},
 {k:'BD',e:B,q:"Comment s'appelle le capitaine ami de Tintin ?",r:"Haddock",w:["Nemo","Crochet","Achab"],f:"Célèbre pour ses jurons : « Mille millions de mille sabords ! »"},
 {k:'BD',e:B,q:"Dans quel album Tintin marche-t-il sur la Lune ?",r:"On a marché sur la Lune",w:["Objectif Lune","Le Temple du Soleil","Vol 714 pour Sydney"],f:"Paru en 1954, quinze ans avant Neil Armstrong. « Objectif Lune » raconte la préparation du voyage."},
 {k:'BD',e:B,q:"Quel cow-boy « tire plus vite que son ombre » ?",r:"Lucky Luke",w:["Blueberry","Buffalo Bill","Jerry Spring"],f:"Créé par le Belge Morris en 1946 ; depuis 1983, il mâchouille un brin d'herbe au lieu d'une cigarette."},
 {k:'BD',e:B,q:"Combien de frères Dalton y a-t-il dans Lucky Luke ?",r:"4",w:["3","5","2"],f:"Joe, William, Jack et Averell, du plus petit au plus grand."},
 {k:'BD',e:B,q:"Qui a créé Gaston Lagaffe ?",r:"André Franquin",w:["Peyo","Hergé","Morris"],f:"Gaston apparaît en 1957 dans le journal de Spirou."},
 {k:'BD',e:B,q:"Qui a créé les Schtroumpfs ?",r:"Peyo",w:["André Franquin","Albert Uderzo","Jean Roba"],f:"Ils apparaissent en 1958 dans une aventure de Johan et Pirlouit."},
 {k:'BD',e:B,q:"Comment s'appelle le sorcier ennemi des Schtroumpfs ?",r:"Gargamel",w:["Azraël","Olrik","Rastapopoulos"],f:"Azraël est son chat ; Olrik est l'ennemi de Blake et Mortimer, Rastapopoulos celui de Tintin."},
 {k:'BD',e:B,q:"Dans quelle ville a lieu le grand festival international de la bande dessinée ?",r:"Angoulême",w:["Bruxelles","Lyon","Saint-Malo"],f:"Chaque année en janvier, depuis 1974."},
 {k:'BD',e:B,q:"Qui a créé Titeuf ?",r:"Zep",w:["Riad Sattouf","Tome et Janry","Boulet"],f:"Un dessinateur suisse ; Titeuf est apparu en 1992."},
 {k:'BD',e:B,q:"Quel est le plat préféré de Garfield ?",r:"Les lasagnes",w:["Les pizzas","Les croquettes","Les hamburgers"],f:"Le chat paresseux de Jim Davis, apparu en 1978, déteste aussi les lundis."},
 {k:'BD',e:B,q:"Dans quelle ville Superman travaille-t-il comme journaliste ?",r:"Metropolis",w:["Gotham City","Central City","Star City"],f:"Sous le nom de Clark Kent, au journal Daily Planet. Gotham City est la ville de Batman."}
];
window.QUIZ = {
  title: 'Cinéma & BD', emoji: '🎬', color: '#1E3A8A', color2: '#FACC15',
  sub: 'Films, dessins animés et bandes dessinées.',
  modes: [
    { id: 'Cinéma', label: 'Cinéma', emoji: C },
    { id: 'Animation', label: 'Dessins animés', emoji: A },
    { id: 'BD', label: 'Bande dessinée', emoji: B }
  ],
  items
};
})();
