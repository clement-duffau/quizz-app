/* Arts & musique */
(function(){
const P = '🎨', C = '🎻', R = '🎸';
const items = [
 // Peinture et sculpture
 {k:'Peinture',e:P,q:"Qui a peint la série des Nymphéas ?",r:"Claude Monet",w:["Auguste Renoir","Édouard Manet","Edgar Degas"],f:"Il les a peints dans son jardin de Giverny ; les plus grands sont au musée de l'Orangerie."},
 {k:'Peinture',e:P,q:"Quel mouvement doit son nom au tableau « Impression, soleil levant » ?",r:"L'impressionnisme",w:["Le cubisme","Le fauvisme","Le pointillisme"],f:"Un critique s'en était moqué en 1874 ; le nom est resté."},
 {k:'Peinture',e:P,q:"Qui a peint « La Jeune Fille à la perle » ?",r:"Johannes Vermeer",w:["Rembrandt","Jan van Eyck","Pierre Paul Rubens"],f:"Un peintre hollandais du XVIIe siècle dont on connaît à peine 35 tableaux."},
 {k:'Peinture',e:P,q:"Qui a peint « Le Cri » ?",r:"Edvard Munch",w:["Gustav Klimt","Vassily Kandinsky","Egon Schiele"],f:"Un peintre norvégien ; il en a réalisé plusieurs versions."},
 {k:'Peinture',e:P,q:"Qui a peint les célèbres montres molles de « La Persistance de la mémoire » ?",r:"Salvador Dalí",w:["René Magritte","Joan Miró","Max Ernst"],f:"Une figure du surréalisme, célèbre aussi pour sa moustache."},
 {k:'Peinture',e:P,q:"Quel peintre a écrit « Ceci n'est pas une pipe » sous une pipe ?",r:"René Magritte",w:["Salvador Dalí","Marcel Duchamp","Pablo Picasso"],f:"Le tableau s'appelle « La Trahison des images » : c'est une image de pipe, pas une pipe."},
 {k:'Peinture',e:P,q:"Quel peintre viennois a peint « Le Baiser », couvert de feuilles d'or ?",r:"Gustav Klimt",w:["Egon Schiele","Edvard Munch","Alfons Mucha"],f:"Rodin a sculpté un autre « Baiser », en marbre."},
 {k:'Peinture',e:P,q:"Qui a peint « La Liberté guidant le peuple » ?",r:"Eugène Delacroix",w:["Théodore Géricault","Jacques-Louis David","Gustave Courbet"],f:"Il évoque les Trois Glorieuses, la révolution de juillet 1830."},
 {k:'Peinture',e:P,q:"Qui a peint « Le Radeau de la Méduse » ?",r:"Théodore Géricault",w:["Eugène Delacroix","Jacques-Louis David","Jean-Auguste-Dominique Ingres"],f:"Il s'inspire d'un vrai naufrage, celui de la frégate La Méduse en 1816."},
 {k:'Peinture',e:P,q:"Qui a peint « La Naissance de Vénus » ?",r:"Sandro Botticelli",w:["Raphaël","Le Titien","Léonard de Vinci"],f:"Elle est exposée à la galerie des Offices, à Florence."},
 {k:'Peinture',e:P,q:"Qui a sculpté la statue de la Liberté de New York ?",r:"Auguste Bartholdi",w:["Auguste Rodin","Gustave Eiffel","Camille Claudel"],f:"Gustave Eiffel en a conçu la structure métallique intérieure."},
 {k:'Peinture',e:P,q:"Quel musée parisien, installé dans une ancienne gare, est consacré au XIXe siècle ?",r:"Le musée d'Orsay",w:["Le Centre Pompidou","Le musée de l'Orangerie","Le Petit Palais"],f:"La gare d'Orsay a été construite pour l'Exposition universelle de 1900."},
 {k:'Peinture',e:P,q:"Quel mouvement Picasso et Braque ont-ils inventé ?",r:"Le cubisme",w:["Le surréalisme","Le fauvisme","L'expressionnisme"],f:"Les objets y sont montrés sous plusieurs angles à la fois, en formes géométriques."},
 {k:'Peinture',e:P,q:"Quel artiste du pop art a peint des boîtes de soupe Campbell ?",r:"Andy Warhol",w:["Roy Lichtenstein","Keith Haring","Jeff Koons"],f:"Il a aussi multiplié les portraits de Marilyn Monroe."},
 {k:'Peinture',e:P,q:"Quel peintre est célèbre pour ses danseuses de l'Opéra ?",r:"Edgar Degas",w:["Auguste Renoir","Henri de Toulouse-Lautrec","Édouard Manet"],f:"Il a aussi sculpté « La Petite Danseuse de quatorze ans »."},
 {k:'Peinture',e:P,q:"Quel artiste a dessiné les affiches du Moulin-Rouge ?",r:"Henri de Toulouse-Lautrec",w:["Alfons Mucha","Edgar Degas","Georges Seurat"],f:"Il fréquentait les cabarets de Montmartre."},
 {k:'Peinture',e:P,q:"Comment s'appelle la technique de Seurat, faite de petits points de couleur ?",r:"Le pointillisme",w:["Le fauvisme","Le cubisme","Le clair-obscur"],f:"De près, on voit des points ; de loin, l'œil mélange les couleurs."},
 // Musique classique
 {k:'Classique',e:C,q:"Qui a composé l'opéra « La Flûte enchantée » ?",r:"Mozart",w:["Haydn","Schubert","Haendel"],f:"Créé à Vienne en 1791, quelques semaines avant sa mort."},
 {k:'Classique',e:C,q:"Quel compositeur a continué à composer après être devenu sourd ?",r:"Beethoven",w:["Mozart","Chopin","Vivaldi"],f:"Il était presque totalement sourd quand il a écrit sa 9e symphonie."},
 {k:'Classique',e:C,q:"Qui a composé le « Boléro » ?",r:"Maurice Ravel",w:["Claude Debussy","Erik Satie","Georges Bizet"],f:"Le même thème est répété en crescendo pendant environ un quart d'heure."},
 {k:'Classique',e:C,q:"Qui a composé l'opéra « Carmen » ?",r:"Georges Bizet",w:["Giuseppe Verdi","Giacomo Puccini","Jacques Offenbach"],f:"Un échec à sa création en 1875… devenu l'un des opéras les plus joués au monde."},
 {k:'Classique',e:C,q:"Qui a composé « Clair de lune », extrait de la Suite bergamasque ?",r:"Claude Debussy",w:["Maurice Ravel","Frédéric Chopin","Erik Satie"],f:"À ne pas confondre avec la « Sonate au clair de lune » de Beethoven."},
 {k:'Classique',e:C,q:"Qui a composé le ballet « Le Lac des cygnes » ?",r:"Piotr Tchaïkovski",w:["Sergueï Prokofiev","Igor Stravinsky","Sergueï Rachmaninov"],f:"Il a aussi composé « Casse-Noisette » et « La Belle au bois dormant »."},
 {k:'Classique',e:C,q:"Qui a composé le conte musical « Pierre et le Loup » ?",r:"Sergueï Prokofiev",w:["Piotr Tchaïkovski","Nikolaï Rimski-Korsakov","Modeste Moussorgski"],f:"Chaque personnage est joué par un instrument : le loup par les cors, le canard par le hautbois."},
 {k:'Classique',e:C,q:"Quel ballet de Stravinsky a fait scandale à Paris en 1913 ?",r:"Le Sacre du printemps",w:["L'Oiseau de feu","Petrouchka","Casse-Noisette"],f:"Le public, choqué par la musique et la danse, a chahuté pendant la première."},
 {k:'Classique',e:C,q:"Quel compositeur et pianiste polonais a écrit des nocturnes et des polonaises ?",r:"Frédéric Chopin",w:["Franz Liszt","Robert Schumann","Ignacy Paderewski"],f:"Il a passé la seconde moitié de sa vie à Paris."},
 {k:'Classique',e:C,q:"Qui a composé l'opéra « La Traviata » ?",r:"Giuseppe Verdi",w:["Giacomo Puccini","Gioachino Rossini","Vincenzo Bellini"],f:"Inspiré de « La Dame aux camélias » d'Alexandre Dumas fils."},
 {k:'Classique',e:C,q:"Qui a composé l'opéra « Madame Butterfly » ?",r:"Giacomo Puccini",w:["Giuseppe Verdi","Gioachino Rossini","Georges Bizet"],f:"Il a aussi composé « La Bohème » et « Tosca »."},
 {k:'Classique',e:C,q:"Combien de cordes a un violon ?",r:"4",w:["5","6","3"],f:"Accordées en sol, ré, la, mi."},
 {k:'Classique',e:C,q:"Pour quel instrument Bach a-t-il écrit sa célèbre Toccata et fugue en ré mineur ?",r:"L'orgue",w:["Le clavecin","Le piano","Le violon"],f:"Elle est devenue la musique « de film d'horreur » par excellence."},
 {k:'Classique',e:C,q:"Quel est le plus grand instrument à cordes de l'orchestre ?",r:"La contrebasse",w:["Le violoncelle","L'alto","La harpe"],f:"On en joue debout ou assis sur un tabouret haut."},
 {k:'Classique',e:C,q:"Combien de touches compte un piano classique ?",r:"88",w:["76","96","100"],f:"52 blanches et 36 noires, sur un peu plus de sept octaves."},
 {k:'Classique',e:C,q:"Quelle est la fréquence de référence du « la » des musiciens ?",r:"440 Hz",w:["400 Hz","432 Hz","512 Hz"],f:"C'est la note du diapason sur laquelle l'orchestre s'accorde."},
 // Chanson, pop et rock
 {k:'Pop & rock',e:R,q:"De quelle ville viennent les Beatles ?",r:"Liverpool",w:["Manchester","Londres","Birmingham"],f:"Ils ont débuté au Cavern Club au début des années 1960."},
 {k:'Pop & rock',e:R,q:"Qui a sorti l'album « Thriller » en 1982 ?",r:"Michael Jackson",w:["Prince","Stevie Wonder","Lionel Richie"],f:"Souvent cité comme l'album le plus vendu de l'histoire."},
 {k:'Pop & rock',e:R,q:"Qui était le chanteur du groupe Queen ?",r:"Freddie Mercury",w:["Mick Jagger","David Bowie","Elton John"],f:"Né à Zanzibar ; « Bohemian Rhapsody » reste leur titre le plus célèbre."},
 {k:'Pop & rock',e:R,q:"Quel duo français se produisait avec des casques de robots ?",r:"Daft Punk",w:["Justice","Air","Cassius"],f:"Leur album « Random Access Memories » a reçu le Grammy de l'album de l'année en 2014."},
 {k:'Pop & rock',e:R,q:"Qui a chanté « La Vie en rose » ?",r:"Édith Piaf",w:["Dalida","Barbara","Juliette Gréco"],f:"Surnommée « la Môme Piaf » ; elle a aussi chanté « Non, je ne regrette rien »."},
 {k:'Pop & rock',e:R,q:"Quel chanteur belge a écrit « Ne me quitte pas » ?",r:"Jacques Brel",w:["Georges Brassens","Charles Aznavour","Léo Ferré"],f:"Un titre de 1959, repris dans le monde entier."},
 {k:'Pop & rock',e:R,q:"Quel chanteur était surnommé le « King » du rock'n'roll ?",r:"Elvis Presley",w:["Chuck Berry","Johnny Cash","Little Richard"],f:"Sa maison de Graceland, à Memphis, est devenue un musée."},
 {k:'Pop & rock',e:R,q:"Qui a chanté « La Bohème » en 1965 ?",r:"Charles Aznavour",w:["Gilbert Bécaud","Jacques Brel","Serge Gainsbourg"],f:"Une chanson sur la vie d'artiste à Montmartre."},
 {k:'Pop & rock',e:R,q:"Quel groupe suédois a gagné l'Eurovision 1974 avec « Waterloo » ?",r:"ABBA",w:["Roxette","Ace of Base","Europe"],f:"Le nom du groupe vient des initiales de ses quatre membres."},
 {k:'Pop & rock',e:R,q:"Sous quel titre « Comme d'habitude » de Claude François a-t-elle fait le tour du monde ?",r:"My Way",w:["Yesterday","Imagine","Let It Be"],f:"Avec des paroles anglaises de Paul Anka, chantée par Frank Sinatra."},
 {k:'Pop & rock',e:R,q:"Quel jour a lieu la Fête de la musique ?",r:"Le 21 juin",w:["Le 14 juillet","Le 1er mai","Le 21 mars"],f:"Créée en France en 1982, le jour du solstice d'été."},
 {k:'Pop & rock',e:R,q:"Quel groupe a pour chanteur Mick Jagger ?",r:"The Rolling Stones",w:["The Who","The Kinks","The Doors"],f:"Leur logo, une bouche tirant la langue, date de 1971."},
 {k:'Pop & rock',e:R,q:"Qui a composé et chanté « Imagine » en 1971 ?",r:"John Lennon",w:["Paul McCartney","Bob Dylan","David Bowie"],f:"Un an après la séparation des Beatles."},
 {k:'Pop & rock',e:R,q:"De quel instrument Jimi Hendrix était-il un virtuose ?",r:"La guitare électrique",w:["La batterie","La basse","L'orgue Hammond"],f:"Il lui arrivait de jouer avec les dents, ou la guitare derrière le dos."}
];
window.QUIZ = {
  title: 'Arts & musique', emoji: '🎨', color: '#BE185D', color2: '#FBBF24',
  sub: 'Peintres, compositeurs et chansons.',
  modes: [
    { id: 'Peinture', label: 'Peinture et sculpture', emoji: P },
    { id: 'Classique', label: 'Musique classique', emoji: C },
    { id: 'Pop & rock', label: 'Chanson, pop et rock', emoji: R }
  ],
  items
};
})();
