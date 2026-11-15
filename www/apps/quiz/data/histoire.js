/* Histoire & dates */
(function(){
const A = '🏛️', M = '🏰', C = '⚙️', X = '🌍', I = '💡', P = '🧑‍🎓';
const items = [
 // Antiquité & Moyen Âge (format : on montre l'événement, on cherche l'année)
 {k:'Dates',e:A,i:'battle-of-alesia',q:"Victoire de Jules César sur Vercingétorix à Alésia : en quelle année ?",r:"52 av. J.-C.",w:["52 apr. J.-C.","44 av. J.-C.","300 av. J.-C."],f:"Vercingétorix se rend à César ; la Gaule devient romaine."},
 {k:'Dates',e:A,q:"Assassinat de Jules César aux ides de mars : en quelle année ?",r:"44 av. J.-C.",w:["52 av. J.-C.","14 apr. J.-C.","100 av. J.-C."],f:"Poignardé au Sénat, notamment par Brutus."},
 {k:'Dates',e:A,q:"Chute de l'Empire romain d'Occident : en quelle année ?",r:"476",w:["410","800","1453"],f:"Le dernier empereur, Romulus Augustule, est déposé."},
 {k:'Dates',e:M,i:'charlemagne',q:"Couronnement de Charlemagne comme empereur : en quelle année ?",r:"800",w:["768","843","987"],f:"À Rome, le jour de Noël, par le pape Léon III."},
 {k:'Dates',e:M,i:'bayeux-tapestry',q:"Bataille de Hastings, conquête de l'Angleterre par Guillaume de Normandie : en quelle année ?",r:"1066",w:["1095","1215","987"],f:"Racontée sur la tapisserie de Bayeux."},
 {k:'Dates',e:M,i:'magna-carta',q:"Signature de la Magna Carta en Angleterre : en quelle année ?",r:"1215",w:["1066","1348","1453"],f:"Elle limite pour la première fois le pouvoir du roi."},
 {k:'Dates',e:M,i:'joan-of-arc',q:"Jeanne d'Arc meurt sur le bûcher à Rouen : en quelle année ?",r:"1431",w:["1429","1453","1337"],f:"Elle avait environ 19 ans. Elle a été canonisée en 1920."},
 {k:'Dates',e:M,i:'fall-of-constantinople',q:"Prise de Constantinople par les Ottomans : en quelle année ?",r:"1453",w:["1492","1204","1517"],f:"Souvent retenue comme la fin du Moyen Âge."},
 // Époque moderne
 {k:'Dates',e:M,q:"Bataille de Marignan, victoire de François Ier : en quelle année ?",r:"1515",w:["1525","1492","1559"],f:"La date la plus célèbre des écoliers français."},
 {k:'Dates',e:M,q:"Martin Luther publie ses 95 thèses : en quelle année ?",r:"1517",w:["1492","1598","1648"],f:"Le point de départ de la Réforme protestante."},
 {k:'Dates',e:M,q:"Henri IV signe l'édit de Nantes : en quelle année ?",r:"1598",w:["1572","1610","1685"],f:"Il accorde la liberté de culte aux protestants ; Louis XIV le révoque en 1685."},
 {k:'Dates',e:M,q:"Assassinat d'Henri IV par Ravaillac : en quelle année ?",r:"1610",w:["1598","1643","1589"],f:"Rue de la Ferronnerie à Paris, son carrosse bloqué par un embouteillage."},
 {k:'Dates',e:X,i:'united-states-declaration-of-independence',q:"Déclaration d'indépendance des États-Unis : en quelle année ?",r:"1776",w:["1789","1783","1492"],f:"Le 4 juillet, devenu la fête nationale américaine."},
 {k:'Dates',e:X,i:'battle-of-waterloo',q:"Bataille de Waterloo, défaite finale de Napoléon : en quelle année ?",r:"1815",w:["1805","1812","1804"],f:"En Belgique actuelle. Il finit ses jours à Sainte-Hélène."},
 {k:'Dates',e:X,q:"Abolition définitive de l'esclavage en France : en quelle année ?",r:"1848",w:["1794","1815","1905"],f:"Grâce notamment à Victor Schœlcher. Une première abolition de 1794 avait été annulée en 1802."},
 {k:'Dates',e:X,q:"Commune de Paris : en quelle année ?",r:"1871",w:["1848","1830","1789"],f:"Une insurrection de deux mois, écrasée lors de la « Semaine sanglante »."},
 // XXe siècle
 {k:'Dates',e:X,q:"Loi de séparation des Églises et de l'État en France : en quelle année ?",r:"1905",w:["1882","1946","1789"],f:"Le fondement de la laïcité à la française."},
 {k:'Dates',e:X,i:'titanic',q:"Naufrage du Titanic : en quelle année ?",r:"1912",w:["1905","1914","1921"],f:"Dans la nuit du 14 au 15 avril, lors de son voyage inaugural."},
 {k:'Dates',e:X,q:"Révolution russe d'Octobre : en quelle année ?",r:"1917",w:["1905","1922","1914"],f:"Les bolcheviks de Lénine prennent le pouvoir."},
 {k:'Dates',e:X,q:"Krach boursier de Wall Street : en quelle année ?",r:"1929",w:["1933","1918","1939"],f:"Le début de la Grande Dépression."},
 {k:'Dates',e:X,q:"Les Françaises votent pour la première fois : en quelle année ?",r:"1945",w:["1918","1936","1958"],f:"Le droit de vote leur a été accordé en 1944."},
 {k:'Dates',e:X,q:"Traité de Rome, naissance de la CEE : en quelle année ?",r:"1957",w:["1945","1992","1951"],f:"Six pays fondateurs, dont la France et l'Allemagne de l'Ouest."},
 {k:'Dates',e:X,q:"Indépendance de l'Algérie : en quelle année ?",r:"1962",w:["1954","1958","1968"],f:"Après les accords d'Évian et le référendum de juillet 1962."},
 {k:'Dates',e:X,q:"Abolition de la peine de mort en France : en quelle année ?",r:"1981",w:["1968","1974","1995"],f:"Loi portée par le garde des Sceaux Robert Badinter."},
 {k:'Dates',e:X,i:'chernobyl-disaster',q:"Catastrophe nucléaire de Tchernobyl : en quelle année ?",r:"1986",w:["1979","1991","2011"],f:"En Ukraine soviétique. 2011, c'est Fukushima."},
 {k:'Dates',e:X,q:"Libération de Nelson Mandela : en quelle année ?",r:"1990",w:["1985","1994","1980"],f:"Après 27 ans de prison. Il devient président de l'Afrique du Sud en 1994."},
 {k:'Dates',e:X,q:"Mise en circulation des pièces et billets en euros : en quelle année ?",r:"2002",w:["1999","2000","1992"],f:"L'euro existait déjà depuis 1999, mais seulement pour les virements."},
 // Inventions
 {k:'Inventions',e:I,i:'alexander-graham-bell',q:"Qui a déposé le brevet du téléphone en 1876 ?",r:"Graham Bell",w:["Thomas Edison","Nikola Tesla","Samuel Morse"],f:"L'Italien Antonio Meucci revendiquait l'invention avant lui."},
 {k:'Inventions',e:I,i:'thomas-edison',q:"Qui a mis au point une ampoule électrique durable en 1879 ?",r:"Thomas Edison",w:["Nikola Tesla","Benjamin Franklin","Alessandro Volta"],f:"Joseph Swan travaillait sur la même idée en Angleterre au même moment."},
 {k:'Inventions',e:I,q:"Qui a inventé la pile électrique en 1800 ?",r:"Alessandro Volta",w:["André-Marie Ampère","Benjamin Franklin","Michael Faraday"],f:"Son nom a donné le volt."},
 {k:'Inventions',e:I,q:"Qui a inventé le paratonnerre ?",r:"Benjamin Franklin",w:["Thomas Edison","Nikola Tesla","Isaac Newton"],f:"Vers 1752, après sa célèbre expérience du cerf-volant."},
 {k:'Inventions',e:I,i:'louis-pasteur',q:"Qui a présenté le premier vaccin contre la rage en 1885 ?",r:"Louis Pasteur",w:["Edward Jenner","Robert Koch","Alexander Fleming"],f:"Sur le jeune Joseph Meister, mordu par un chien enragé."},
 {k:'Inventions',e:I,q:"Qui a fait la première projection publique de cinéma payante en 1895 ?",r:"Les frères Lumière",w:["Georges Méliès","Thomas Edison","Les frères Pathé"],f:"Au Salon indien du Grand Café, à Paris."},
 {k:'Inventions',e:I,i:'alfred-nobel',q:"Qui a inventé la dynamite ?",r:"Alfred Nobel",w:["Marie Curie","Antoine Lavoisier","Louis Pasteur"],f:"Sa fortune finance aujourd'hui les prix Nobel."},
 {k:'Inventions',e:I,i:'louis-braille',q:"Qui a inventé un système d'écriture pour les aveugles ?",r:"Louis Braille",w:["Valentin Haüy","Jean-François Champollion","Victor Hugo"],f:"Il l'a mis au point à environ 15 ans, à partir du code de Charles Barbier."},
 {k:'Inventions',e:I,i:'view-from-the-window-at-le-gras',q:"Qui a réalisé la plus ancienne photographie connue ?",r:"Nicéphore Niépce",w:["Louis Daguerre","Les frères Lumière","Nadar"],f:"Vers 1827, depuis une fenêtre de sa maison en Bourgogne."},
 {k:'Inventions',e:I,q:"Qui a inventé le stéthoscope ?",r:"René Laennec",w:["Louis Pasteur","Claude Bernard","Ambroise Paré"],f:"En 1816, avec… un cahier roulé en tube."},
 {k:'Inventions',e:I,i:'pascal-s-calculator',q:"Qui a inventé la Pascaline, une des premières machines à calculer ?",r:"Blaise Pascal",w:["René Descartes","Gottfried Leibniz","Charles Babbage"],f:"Vers 1642, pour aider son père, collecteur d'impôts."},
 {k:'Inventions',e:I,q:"Qui a réalisé les premières liaisons radio à grande distance ?",r:"Guglielmo Marconi",w:["Heinrich Hertz","Nikola Tesla","Édouard Branly"],f:"Il traverse l'Atlantique par radio en 1901 ; Nobel en 1909."},
 {k:'Inventions',e:I,q:"Qui a fait voler le premier avion motorisé en 1903 ?",r:"Les frères Wright",w:["Clément Ader","Louis Blériot","Les frères Montgolfier"],f:"Le vol a duré 12 secondes. Les Montgolfier, c'était la montgolfière en 1783."},
 {k:'Inventions',e:I,i:'james-watt',q:"Qui a amélioré la machine à vapeur au XVIIIe siècle ?",r:"James Watt",w:["Denis Papin","George Stephenson","Robert Fulton"],f:"Son nom a donné le watt, l'unité de puissance."},
 // Personnages
 {k:'Personnages',e:P,q:"Qui était Vercingétorix ?",r:"Un chef gaulois",w:["Un empereur romain","Un roi franc","Un druide breton"],f:"Il unit les tribus gauloises contre César."},
 {k:'Personnages',e:P,q:"De quel royaume était roi Alexandre le Grand ?",r:"La Macédoine",w:["Athènes","Sparte","La Perse"],f:"Il a conquis un empire allant de la Grèce à l'Inde avant 33 ans."},
 {k:'Personnages',e:P,i:'hannibal',q:"Quel général carthaginois a franchi les Alpes avec des éléphants ?",r:"Hannibal",w:["Spartacus","Attila","Scipion"],f:"En 218 av. J.-C., pour attaquer Rome."},
 {k:'Personnages',e:P,q:"Quel empire Gengis Khan a-t-il fondé ?",r:"L'Empire mongol",w:["L'Empire ottoman","L'Empire perse","L'Empire chinois des Ming"],f:"Le plus grand empire d'un seul tenant de l'histoire."},
 {k:'Personnages',e:P,i:'louis-xiv',q:"Quel roi a fait construire le château de Versailles tel qu'on le connaît ?",r:"Louis XIV",w:["Louis XIII","François Ier","Louis XVI"],f:"Son père Louis XIII y avait un simple pavillon de chasse."},
 {k:'Personnages',e:P,i:'marie-curie',q:"Qui est la première femme à avoir reçu un prix Nobel ?",r:"Marie Curie",w:["Irène Joliot-Curie","Rosalind Franklin","Simone Veil"],f:"En 1903, puis un second en 1911 : physique puis chimie."},
 {k:'Personnages',e:P,q:"Qui a prononcé le discours « I have a dream » en 1963 ?",r:"Martin Luther King",w:["Malcolm X","John F. Kennedy","Barack Obama"],f:"Devant le Lincoln Memorial à Washington."},
 {k:'Personnages',e:P,q:"Dans quelle ville John F. Kennedy a-t-il été assassiné ?",r:"Dallas",w:["Washington","New York","Chicago"],f:"Le 22 novembre 1963."},
 {k:'Personnages',e:P,i:'mahatma-gandhi',q:"Qui a mené l'Inde vers l'indépendance par la non-violence ?",r:"Gandhi",w:["Mustafa Kemal","Le Dalaï-Lama","Bouddha"],f:"L'Inde devient indépendante en 1947."},
 {k:'Personnages',e:P,i:'winston-churchill',q:"Quel Premier ministre britannique a dirigé le pays pendant la Seconde Guerre mondiale ?",r:"Winston Churchill",w:["Neville Chamberlain","Margaret Thatcher","Clement Attlee"],f:"« Je n'ai rien d'autre à offrir que du sang, du labeur, des larmes et de la sueur. »"},
 {k:'Personnages',e:P,q:"Qui a mené la révolte qui a conduit à l'indépendance d'Haïti ?",r:"Toussaint Louverture",w:["Simón Bolívar","Che Guevara","Victor Schœlcher"],f:"Mort en captivité au fort de Joux, dans le massif du Jura, en 1803, juste avant l'indépendance de 1804."},
 {k:'Personnages',e:P,q:"Quelle ministre a porté la loi autorisant l'IVG en France en 1975 ?",r:"Simone Veil",w:["Simone de Beauvoir","Gisèle Halimi","Édith Cresson"],f:"Elle a ensuite été la première présidente du Parlement européen élu."},
 {k:'Personnages',e:P,i:'abraham-lincoln',q:"Quel président américain a mené l'abolition de l'esclavage ?",r:"Abraham Lincoln",w:["George Washington","Thomas Jefferson","Ulysses Grant"],f:"Le 13e amendement est adopté en 1865, l'année de son assassinat."}
];
window.QUIZ = {
  title: 'Histoire & dates', emoji: '⏳', color: '#B5522A', color2: '#E8B13A',
  sub: 'Grandes dates, inventions et personnages.',
  modes: [
    { id: 'Dates', label: 'Grandes dates', emoji: '📅' },
    { id: 'Inventions', label: 'Inventions', emoji: I },
    { id: 'Personnages', label: 'Personnages', emoji: P }
  ],
  items
};
})();
