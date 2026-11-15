/* Littérature */
(function(){
const A = '✒️', P = '🎭', C = '📜';
const items = [
 // Auteurs et œuvres
 {k:'Auteurs',e:A,q:"Qui a écrit « Madame Bovary » ?",r:"Gustave Flaubert",w:["Stendhal","Honoré de Balzac","Guy de Maupassant"],f:"Le roman lui a valu un procès pour « outrage à la morale » en 1857 ; il a été acquitté."},
 {k:'Auteurs',e:A,q:"Qui a écrit « Le Rouge et le Noir » ?",r:"Stendhal",w:["Gustave Flaubert","Honoré de Balzac","Émile Zola"],f:"Stendhal est un pseudonyme : il s'appelait Henri Beyle."},
 {k:'Auteurs',e:A,q:"Qui a écrit « Les Trois Mousquetaires » ?",r:"Alexandre Dumas",w:["Victor Hugo","Jules Verne","Eugène Sue"],f:"Il a aussi écrit « Le Comte de Monte-Cristo », publié en feuilleton dans les journaux."},
 {k:'Auteurs',e:A,q:"Qui a écrit « À la recherche du temps perdu » ?",r:"Marcel Proust",w:["André Gide","Colette","Louis-Ferdinand Céline"],f:"Sept tomes, et la fameuse madeleine qui fait remonter les souvenirs d'enfance."},
 {k:'Auteurs',e:A,q:"Qui a écrit le conte philosophique « Candide » ?",r:"Voltaire",w:["Jean-Jacques Rousseau","Denis Diderot","Montesquieu"],f:"Il se termine par : « Il faut cultiver notre jardin. »"},
 {k:'Auteurs',e:A,q:"Qui a écrit le recueil « Les Fleurs du mal » ?",r:"Charles Baudelaire",w:["Arthur Rimbaud","Paul Verlaine","Stéphane Mallarmé"],f:"Publié en 1857, il a été condamné pour six poèmes jugés immoraux."},
 {k:'Auteurs',e:A,q:"Qui a écrit « Le Bourgeois gentilhomme » ?",r:"Molière",w:["Jean Racine","Pierre Corneille","Marivaux"],f:"M. Jourdain y découvre qu'il fait de la prose sans le savoir."},
 {k:'Auteurs',e:A,q:"Qui a écrit « Cyrano de Bergerac » ?",r:"Edmond Rostand",w:["Molière","Alfred de Musset","Victor Hugo"],f:"Créée en 1897, la pièce raconte l'amour secret d'un poète au très long nez."},
 {k:'Auteurs',e:A,q:"Qui a écrit « Don Quichotte » ?",r:"Miguel de Cervantes",w:["Lope de Vega","Pedro Calderón","Federico García Lorca"],f:"Paru en 1605, c'est souvent présenté comme le premier roman moderne."},
 {k:'Auteurs',e:A,q:"Qui a écrit « Guerre et Paix » ?",r:"Léon Tolstoï",w:["Fiodor Dostoïevski","Anton Tchekhov","Alexandre Pouchkine"],f:"Un roman immense sur la Russie pendant les guerres napoléoniennes."},
 {k:'Auteurs',e:A,q:"Qui a écrit « Crime et Châtiment » ?",r:"Fiodor Dostoïevski",w:["Léon Tolstoï","Nicolas Gogol","Ivan Tourgueniev"],f:"Raskolnikov, un étudiant pauvre de Saint-Pétersbourg, commet un meurtre."},
 {k:'Auteurs',e:A,q:"Qui a écrit « 1984 », où « Big Brother vous regarde » ?",r:"George Orwell",w:["Aldous Huxley","Ray Bradbury","H. G. Wells"],f:"Publié en 1949 ; Orwell a aussi écrit « La Ferme des animaux »."},
 {k:'Auteurs',e:A,q:"Qui a écrit la saga « Harry Potter » ?",r:"J. K. Rowling",w:["J. R. R. Tolkien","Philip Pullman","C. S. Lewis"],f:"Le premier tome a été refusé par une douzaine d'éditeurs avant de paraître en 1997."},
 {k:'Auteurs',e:A,q:"Qui a écrit « Le Seigneur des anneaux » ?",r:"J. R. R. Tolkien",w:["C. S. Lewis","J. K. Rowling","George R. R. Martin"],f:"Professeur à Oxford, il a aussi inventé plusieurs langues elfiques."},
 {k:'Auteurs',e:A,q:"Qui a écrit « La Divine Comédie » ?",r:"Dante",w:["Pétrarque","Boccace","Virgile"],f:"Un voyage à travers l'Enfer, le Purgatoire et le Paradis, guidé par Virgile."},
 {k:'Auteurs',e:A,q:"Qui a écrit « Bel-Ami » ?",r:"Guy de Maupassant",w:["Émile Zola","Gustave Flaubert","Alphonse Daudet"],f:"Flaubert avait été son mentor."},
 {k:'Auteurs',e:A,q:"Qui a écrit « Le Père Goriot » ?",r:"Honoré de Balzac",w:["Émile Zola","Stendhal","Gustave Flaubert"],f:"L'un des romans de « La Comédie humaine », qui en compte plus de 90."},
 // Personnages
 {k:'Personnages',e:P,q:"Qui est le sonneur de cloches de Notre-Dame de Paris, chez Victor Hugo ?",r:"Quasimodo",w:["Frollo","Gavroche","Phoebus"],f:"Il est amoureux de la belle Esmeralda."},
 {k:'Personnages',e:P,q:"Comment s'appelle l'écuyer de Don Quichotte ?",r:"Sancho Panza",w:["Rossinante","Dulcinée","Lazarillo"],f:"Rossinante est le cheval de Don Quichotte, Dulcinée la dame de ses pensées."},
 {k:'Personnages',e:P,q:"Comment s'appelle le sous-marin du capitaine Nemo ?",r:"Le Nautilus",w:["Le Pourquoi-Pas ?","La Méduse","Le Calypso"],f:"Un sous-marin électrique imaginé par Jules Verne en 1869."},
 {k:'Personnages',e:P,q:"En combien de jours Phileas Fogg fait-il le tour du monde ?",r:"80",w:["60","100","180"],f:"Un pari fait dans un club londonien, chez Jules Verne (1872)."},
 {k:'Personnages',e:P,q:"Comment s'appelle le jeune Gascon qui rejoint les trois mousquetaires ?",r:"D'Artagnan",w:["Athos","Porthos","Aramis"],f:"Athos, Porthos et Aramis sont les trois mousquetaires."},
 {k:'Personnages',e:P,q:"Quel nom prend Edmond Dantès après son évasion du château d'If ?",r:"Le comte de Monte-Cristo",w:["Le comte de Rochefort","Le marquis de Carabas","Le baron de Münchhausen"],f:"Il a découvert un trésor caché sur l'île de Monte-Cristo."},
 {k:'Personnages',e:P,q:"Qui a écrit « Le Petit Poucet » et « Cendrillon » au XVIIe siècle ?",r:"Charles Perrault",w:["Les frères Grimm","Hans Christian Andersen","Jean de La Fontaine"],f:"Ses « Contes de ma mère l'Oye » ont paru en 1697."},
 {k:'Personnages',e:P,q:"Qui a écrit « La Petite Sirène » ?",r:"Hans Christian Andersen",w:["Les frères Grimm","Charles Perrault","Lewis Carroll"],f:"Sa statue est devenue le symbole de Copenhague, où Andersen a vécu."},
 {k:'Personnages',e:P,q:"Qui a écrit « Alice au pays des merveilles » ?",r:"Lewis Carroll",w:["J. M. Barrie","Roald Dahl","Charles Dickens"],f:"Il était aussi mathématicien à Oxford."},
 {k:'Personnages',e:P,q:"Qui a créé Peter Pan ?",r:"J. M. Barrie",w:["Lewis Carroll","Rudyard Kipling","Roald Dahl"],f:"Le garçon qui ne voulait pas grandir apparaît d'abord au théâtre en 1904."},
 {k:'Personnages',e:P,q:"Dans quel livre de Rudyard Kipling apparaît Mowgli ?",r:"Le Livre de la jungle",w:["Croc-Blanc","L'Appel de la forêt","Les Aventures de Tom Sawyer"],f:"Élevé par des loups, il est l'ami de Baloo l'ours et de Bagheera la panthère."},
 {k:'Personnages',e:P,q:"Qui a écrit « L'Île au trésor » ?",r:"Robert Louis Stevenson",w:["Daniel Defoe","Jules Verne","Herman Melville"],f:"Avec le pirate Long John Silver et son perroquet."},
 {k:'Personnages',e:P,q:"Qui a écrit « Robinson Crusoé » ?",r:"Daniel Defoe",w:["Jonathan Swift","Robert Louis Stevenson","Walter Scott"],f:"Inspiré de l'histoire vraie d'un marin abandonné sur une île du Pacifique."},
 {k:'Personnages',e:P,q:"Quel capitaine poursuit la baleine blanche Moby Dick ?",r:"Achab",w:["Nemo","Crochet","Flint"],f:"Il a perdu une jambe à cause d'elle, dans le roman d'Herman Melville (1851)."},
 {k:'Personnages',e:P,q:"Qui a écrit « Dracula » ?",r:"Bram Stoker",w:["Mary Shelley","Edgar Allan Poe","Oscar Wilde"],f:"Un roman de 1897 de l'Irlandais Bram Stoker, écrit sous forme de lettres et de journaux intimes."},
 {k:'Personnages',e:P,q:"Qui a écrit « Frankenstein » ?",r:"Mary Shelley",w:["Jane Austen","Emily Brontë","Bram Stoker"],f:"Elle l'a commencé à 18 ans. Frankenstein est le nom du savant, pas de la créature."},
 {k:'Personnages',e:P,q:"Qui a créé le gentleman cambrioleur Arsène Lupin ?",r:"Maurice Leblanc",w:["Gaston Leroux","Arthur Conan Doyle","Georges Simenon"],f:"Lupin est apparu en 1905 dans un magazine."},
 {k:'Personnages',e:P,q:"Qui a créé le commissaire Maigret ?",r:"Georges Simenon",w:["Maurice Leblanc","Agatha Christie","Fred Vargas"],f:"Un auteur belge qui a écrit plus de 70 enquêtes de Maigret."},
 {k:'Personnages',e:P,q:"Qui a créé le détective belge Hercule Poirot ?",r:"Agatha Christie",w:["Arthur Conan Doyle","Georges Simenon","Dorothy L. Sayers"],f:"Elle est l'autrice de fiction la plus vendue de tous les temps."},
 // Citations et poésie
 {k:'Citations',e:C,q:"Qui a écrit « Je pense, donc je suis » ?",r:"René Descartes",w:["Blaise Pascal","Michel de Montaigne","Voltaire"],f:"Dans le « Discours de la méthode », en 1637."},
 {k:'Citations',e:C,q:"Qui a écrit « Le cœur a ses raisons que la raison ne connaît point » ?",r:"Blaise Pascal",w:["René Descartes","La Rochefoucauld","Jean-Jacques Rousseau"],f:"Dans ses « Pensées », publiées après sa mort."},
 {k:'Citations',e:C,q:"Dans quelle pièce de Shakespeare entend-on « Être ou ne pas être » ?",r:"Hamlet",w:["Macbeth","Le Roi Lear","Othello"],f:"Le prince du Danemark hésite à venger son père."},
 {k:'Citations',e:C,q:"Dans quelle pièce entend-on « Rodrigue, as-tu du cœur ? » ?",r:"Le Cid",w:["Andromaque","Phèdre","Horace"],f:"Une tragédie de Pierre Corneille (1637)."},
 {k:'Citations',e:C,q:"À quel mouvement littéraire appartient Émile Zola ?",r:"Le naturalisme",w:["Le romantisme","Le symbolisme","Le surréalisme"],f:"Il voulait décrire la société avec la précision d'un scientifique."},
 {k:'Citations',e:C,q:"À quel fabuliste de l'Antiquité La Fontaine a-t-il emprunté beaucoup de ses fables ?",r:"Ésope",w:["Homère","Platon","Ovide"],f:"Un Grec du VIe siècle avant notre ère, dont on ne sait presque rien."},
 {k:'Citations',e:C,q:"Qui a écrit les « Essais » ?",r:"Michel de Montaigne",w:["François Rabelais","Blaise Pascal","René Descartes"],f:"« Parce que c'était lui, parce que c'était moi », écrit-il de son ami La Boétie."},
 {k:'Citations',e:C,q:"Qui a créé les géants Gargantua et Pantagruel ?",r:"François Rabelais",w:["Michel de Montaigne","Pierre de Ronsard","François Villon"],f:"D'où l'adjectif « gargantuesque » pour un repas énorme."},
 {k:'Citations',e:C,q:"Combien de syllabes compte un alexandrin ?",r:"12",w:["10","8","14"],f:"Le vers classique de la tragédie française, chez Racine ou Corneille."},
 {k:'Citations',e:C,q:"Combien de vers compte un sonnet ?",r:"14",w:["12","10","16"],f:"Deux quatrains puis deux tercets."},
 {k:'Citations',e:C,q:"Combien de membres compte l'Académie française ?",r:"40",w:["30","50","100"],f:"On les surnomme « les Immortels » ; l'Académie a été fondée par Richelieu en 1635."}
];
window.QUIZ = {
  title: 'Littérature', emoji: '📚', color: '#7C2D12', color2: '#FBBF24',
  sub: 'Auteurs, personnages, citations et poésie.',
  modes: [
    { id: 'Auteurs', label: 'Auteurs et œuvres', emoji: A },
    { id: 'Personnages', label: 'Personnages et contes', emoji: P },
    { id: 'Citations', label: 'Citations et poésie', emoji: C }
  ],
  items
};
})();
