/* Mythologies */
(function(){
const G = '⚡', H = '🦸', A = '🌍';
const items = [
 // Dieux grecs et romains
 {k:'Dieux',e:G,q:"Qui est le roi des dieux de l'Olympe ?",r:"Zeus",w:["Poséidon","Hadès","Apollon"],f:"Il manie la foudre ; les Romains l'appellent Jupiter."},
 {k:'Dieux',e:G,q:"Quel dieu grec règne sur la mer, armé d'un trident ?",r:"Poséidon",w:["Zeus","Hermès","Arès"],f:"Neptune chez les Romains ; il provoque aussi les tremblements de terre."},
 {k:'Dieux',e:G,q:"Quel dieu règne sur les Enfers ?",r:"Hadès",w:["Thanatos","Cronos","Héphaïstos"],f:"Son chien Cerbère garde l'entrée de son royaume."},
 {k:'Dieux',e:G,q:"Quelle déesse de la sagesse protège la ville d'Athènes ?",r:"Athéna",w:["Artémis","Héra","Aphrodite"],f:"Elle serait sortie tout armée du crâne de Zeus ; sa chouette est son symbole."},
 {k:'Dieux',e:G,q:"Quelle est la déesse de l'amour et de la beauté ?",r:"Aphrodite",w:["Héra","Déméter","Perséphone"],f:"Née de l'écume de la mer ; Vénus chez les Romains."},
 {k:'Dieux',e:G,q:"Quel dieu aux sandales ailées est le messager des dieux ?",r:"Hermès",w:["Apollon","Dionysos","Éros"],f:"Il protège aussi les voyageurs, les marchands… et les voleurs."},
 {k:'Dieux',e:G,q:"Quel dieu boiteux travaille à la forge des dieux ?",r:"Héphaïstos",w:["Arès","Hermès","Prométhée"],f:"Il forge les éclairs de Zeus ; c'est le mari d'Aphrodite."},
 {k:'Dieux',e:G,q:"Quel dieu grec est celui du vin et de la fête ?",r:"Dionysos",w:["Apollon","Pan","Hermès"],f:"Bacchus chez les Romains, d'où les « bacchanales »."},
 {k:'Dieux',e:G,q:"Quelle déesse de la chasse est la sœur jumelle d'Apollon ?",r:"Artémis",w:["Athéna","Héra","Déméter"],f:"Diane chez les Romains, toujours armée de son arc."},
 {k:'Dieux',e:G,q:"Quelle déesse, épouse de Zeus, protège le mariage ?",r:"Héra",w:["Déméter","Léto","Perséphone"],f:"Junon chez les Romains, d'où le mois de juin."},
 {k:'Dieux',e:G,q:"Quel est l'équivalent romain d'Arès, dieu de la guerre ?",r:"Mars",w:["Mercure","Vulcain","Saturne"],f:"Il a donné son nom au mois de mars et à la planète rouge."},
 {k:'Dieux',e:G,q:"Quel Titan a volé le feu des dieux pour le donner aux hommes ?",r:"Prométhée",w:["Atlas","Cronos","Épiméthée"],f:"Puni, il est enchaîné sur un rocher où un aigle lui dévore le foie chaque jour."},
 {k:'Dieux',e:G,q:"Quel Titan est condamné à porter le ciel sur ses épaules ?",r:"Atlas",w:["Prométhée","Cronos","Hypérion"],f:"Il a donné son nom aux recueils de cartes et à une chaîne de montagnes."},
 {k:'Dieux',e:G,q:"Sur quelle montagne vivent les dieux grecs ?",r:"L'Olympe",w:["Le Parnasse","Le mont Ida","Le mont Athos"],f:"Le plus haut sommet de Grèce, à 2 918 m."},
 {k:'Dieux',e:G,q:"Quel Titan dévorait ses enfants à leur naissance ?",r:"Cronos",w:["Ouranos","Atlas","Océan"],f:"Zeus, caché par sa mère, lui échappe puis le renverse."},
 // Héros et créatures
 {k:'Héros',e:H,q:"Quel héros a accompli les douze travaux ?",r:"Héraclès",w:["Persée","Thésée","Achille"],f:"Hercule chez les Romains : il étouffe notamment le lion de Némée."},
 {k:'Héros',e:H,q:"Qui a tué le Minotaure dans le labyrinthe de Crète ?",r:"Thésée",w:["Héraclès","Persée","Jason"],f:"Il retrouve la sortie grâce au fil que lui a donné Ariane."},
 {k:'Héros',e:H,q:"Qui a tranché la tête de Méduse ?",r:"Persée",w:["Thésée","Ulysse","Bellérophon"],f:"Il évite son regard en l'observant dans le reflet de son bouclier."},
 {k:'Héros',e:H,q:"Quel est le seul point faible d'Achille ?",r:"Le talon",w:["Le genou","L'épaule","La nuque"],f:"Sa mère l'avait plongé dans le Styx en le tenant par le talon."},
 {k:'Héros',e:H,q:"Quel héros met dix ans à rentrer chez lui, à Ithaque, après la guerre de Troie ?",r:"Ulysse",w:["Achille","Énée","Ajax"],f:"Son voyage est raconté dans l'Odyssée d'Homère."},
 {k:'Héros',e:H,q:"Quelle ruse permet aux Grecs de prendre Troie ?",r:"Un cheval de bois géant",w:["Un tunnel sous les remparts","Un siège par la famine","Une échelle géante"],f:"Des soldats cachés dans le cheval ouvrent les portes de la ville pendant la nuit."},
 {k:'Héros',e:H,q:"Qui mène les Argonautes à la recherche de la Toison d'or ?",r:"Jason",w:["Thésée","Persée","Orphée"],f:"Leur navire s'appelle l'Argo, d'où leur nom."},
 {k:'Héros',e:H,q:"Comment s'appelle le chien à trois têtes qui garde les Enfers ?",r:"Cerbère",w:["Orthos","Fenrir","Ladon"],f:"Orphée l'endort avec sa lyre, Héraclès le capture lors de son dernier travail."},
 {k:'Héros',e:H,q:"Quelle créature est mi-homme, mi-cheval ?",r:"Le centaure",w:["Le satyre","Le minotaure","Le faune"],f:"Le satyre est mi-homme, mi-bouc ; le minotaure a une tête de taureau."},
 {k:'Héros',e:H,q:"Comment s'appelle le cheval ailé de la mythologie grecque ?",r:"Pégase",w:["Bucéphale","Sleipnir","Arion"],f:"Il serait né du sang de Méduse ; Bucéphale était le cheval d'Alexandre le Grand."},
 {k:'Héros',e:H,q:"Quel monstre voit repousser deux têtes pour chaque tête coupée ?",r:"L'hydre de Lerne",w:["La Chimère","Scylla","Typhon"],f:"Héraclès en vient à bout en brûlant chaque cou tranché."},
 {k:'Héros',e:H,q:"Qui résout l'énigme du Sphinx ?",r:"Œdipe",w:["Thésée","Ulysse","Persée"],f:"La réponse : l'homme, qui marche à quatre pattes, puis sur deux, puis avec une canne."},
 {k:'Héros',e:H,q:"Qui s'approche trop près du soleil avec des ailes collées à la cire ?",r:"Icare",w:["Dédale","Phaéton","Bellérophon"],f:"Son père Dédale, qui avait fabriqué les ailes, lui avait pourtant dit de ne pas monter trop haut."},
 {k:'Héros',e:H,q:"Qui descend aux Enfers pour ramener son épouse Eurydice ?",r:"Orphée",w:["Héraclès","Thésée","Ulysse"],f:"Il la perd pour toujours en se retournant trop tôt pour la regarder."},
 {k:'Héros',e:H,q:"Quelles créatures attirent les marins vers les récifs par leur chant ?",r:"Les sirènes",w:["Les nymphes","Les muses","Les harpies"],f:"Ulysse se fait attacher au mât de son navire pour les écouter sans danger."},
 // Ailleurs dans le monde
 {k:'Ailleurs',e:A,q:"Quel dieu nordique du tonnerre manie un marteau ?",r:"Thor",w:["Odin","Loki","Freyr"],f:"Son marteau s'appelle Mjöllnir ; il a donné son nom au jeudi en anglais (Thursday)."},
 {k:'Ailleurs',e:A,q:"Quel dieu nordique, père des dieux, n'a qu'un œil ?",r:"Odin",w:["Thor","Tyr","Baldr"],f:"Il a sacrifié un œil pour boire à la source de la sagesse."},
 {k:'Ailleurs',e:A,q:"Quel est le dieu nordique de la ruse et de la malice ?",r:"Loki",w:["Heimdall","Freyr","Tyr"],f:"Il provoque la mort de Baldr, le plus aimé des dieux."},
 {k:'Ailleurs',e:A,q:"Où vont les guerriers vikings morts au combat ?",r:"Au Valhalla",w:["À Midgard","À Yggdrasil","Au Bifröst"],f:"La grande salle d'Odin, où ils festoient en attendant la fin du monde."},
 {k:'Ailleurs',e:A,q:"Comment s'appelle l'arbre géant qui relie les mondes nordiques ?",r:"Yggdrasil",w:["Bifröst","Asgard","Mjöllnir"],f:"Un frêne immense : ses racines et ses branches relient les neuf mondes."},
 {k:'Ailleurs',e:A,q:"Comment s'appelle la bataille de la fin du monde chez les Vikings ?",r:"Le Ragnarök",w:["Le Valhalla","Le Midgard","La Walpurgis"],f:"Dieux et géants s'y affrontent, puis un nouveau monde renaît."},
 {k:'Ailleurs',e:A,q:"Quel est le grand dieu du soleil en Égypte ancienne ?",r:"Rê (Râ)",w:["Osiris","Anubis","Thot"],f:"Il traverse le ciel chaque jour sur sa barque, et le monde souterrain chaque nuit."},
 {k:'Ailleurs',e:A,q:"Quel dieu égyptien à tête de chacal veille sur les morts ?",r:"Anubis",w:["Horus","Thot","Seth"],f:"Il pèse le cœur des défunts face à une plume, celle de Maât."},
 {k:'Ailleurs',e:A,q:"Quel dieu égyptien a une tête de faucon ?",r:"Horus",w:["Anubis","Thot","Sobek"],f:"Son œil est un symbole de protection ; Sobek, lui, a une tête de crocodile."},
 {k:'Ailleurs',e:A,q:"Quel dieu égyptien, tué par son frère Seth, devient le roi des morts ?",r:"Osiris",w:["Horus","Rê","Amon"],f:"Son épouse Isis rassemble les morceaux de son corps."},
 {k:'Ailleurs',e:A,q:"Quel dieu égyptien à tête d'ibis est le dieu de l'écriture ?",r:"Thot",w:["Anubis","Horus","Ptah"],f:"Les Égyptiens lui attribuaient l'invention des hiéroglyphes."},
 {k:'Ailleurs',e:A,q:"Quelle déesse égyptienne a une tête de chat ?",r:"Bastet",w:["Isis","Sekhmet","Hathor"],f:"Sekhmet, elle, a une tête de lionne. Les chats étaient vénérés et parfois momifiés."},
 {k:'Ailleurs',e:A,q:"Quel dieu aztèque est un serpent à plumes ?",r:"Quetzalcóatl",w:["Huitzilopochtli","Tlaloc","Xipe Totec"],f:"Les Mayas l'appelaient Kukulcán."},
 {k:'Ailleurs',e:A,q:"Dans le folklore japonais, quel animal magique peut avoir jusqu'à neuf queues ?",r:"Le renard",w:["Le chat","Le tanuki","Le dragon"],f:"Le kitsune gagne une queue tous les cent ans environ, et des pouvoirs avec."},
 {k:'Ailleurs',e:A,q:"De quel folklore vient la sorcière Baba Yaga, dans sa maison sur pattes de poule ?",r:"Le folklore slave",w:["Le folklore celte","Le folklore nordique","Le folklore grec"],f:"Elle apparaît dans de nombreux contes russes."}
];
window.QUIZ = {
  title: 'Mythologies', emoji: '🏛️', color: '#6D28D9', color2: '#F59E0B',
  sub: 'Dieux, héros et créatures du monde entier.',
  modes: [
    { id: 'Dieux', label: 'Dieux grecs et romains', emoji: G },
    { id: 'Héros', label: 'Héros et créatures', emoji: H },
    { id: 'Ailleurs', label: 'Vikings, Égypte et ailleurs', emoji: A }
  ],
  items
};
})();
