/* La France en photos (i = img/france/<i>.jpg, photo dans la question) */
(function(){
const C = '🏰', N = '🏞️', V = '🏙️';
const items = [
 // Châteaux et monuments
 {k:'Monuments',e:C,i:'chateau-de-chambord',iq:1,q:"Quel est ce château de la Loire ?",r:"Chambord",w:["Chenonceau","Amboise","Blois"],f:"Commencé en 1519 pour François Ier ; son escalier à double révolution est souvent attribué à Léonard de Vinci."},
 {k:'Monuments',e:C,i:'chateau-de-versailles',iq:1,q:"Comment s'appelle la célèbre galerie de ce château ?",r:"La galerie des Glaces",w:["La galerie d'Apollon","La Grande Galerie","La galerie François Ier"],f:"357 miroirs ; le traité de Versailles y a été signé en 1919."},
 {k:'Monuments',e:C,i:'chateau-de-chenonceau',iq:1,q:"Comment surnomme-t-on ce château qui enjambe le Cher ?",r:"Le château des Dames",w:["Le château du Roi-Soleil","Le château des Templiers","Le château des Brumes"],f:"Diane de Poitiers puis Catherine de Médicis l'ont façonné."},
 {k:'Monuments',e:C,i:'cite-de-carcassonne',iq:1,q:"Dans quelle région se trouve cette cité médiévale fortifiée ?",r:"L'Occitanie",w:["La Provence-Alpes-Côte d'Azur","La Nouvelle-Aquitaine","La Bretagne"],f:"Dans l'Aude ; l'architecte Viollet-le-Duc l'a restaurée au XIXe siècle."},
 {k:'Monuments',e:C,i:'pont-du-gard',iq:1,q:"À quoi servait cet ouvrage romain ?",r:"À transporter de l'eau",w:["À faire passer une route","À défendre une ville","À accueillir des spectacles"],f:"Un aqueduc du Ier siècle, qui amenait l'eau à Nîmes sur environ 50 km."},
 {k:'Monuments',e:C,i:'sacre-cur',iq:1,q:"Sur quelle butte parisienne se dresse cette basilique ?",r:"Montmartre",w:["Montparnasse","La Butte-aux-Cailles","Belleville"],f:"Sa pierre blanchit à la pluie : elle reste blanche malgré la pollution."},
 {k:'Monuments',e:C,i:'notre-dame-de-paris',iq:1,q:"En quelle année un incendie a-t-il fait tomber la flèche de cette cathédrale ?",r:"2019",w:["2015","2017","2021"],f:"Restaurée en cinq ans, elle a rouvert ses portes en décembre 2024."},
 {k:'Monuments',e:C,i:'arenes-de-nimes',iq:1,q:"Dans quelle ville se trouve cet amphithéâtre romain ?",r:"Nîmes",w:["Orange","Lyon","Fréjus"],f:"L'un des amphithéâtres romains les mieux conservés au monde ; on y donne encore des spectacles."},
 {k:'Monuments',e:C,i:'palais-des-papes',iq:1,q:"Dans quelle ville se trouve ce palais, résidence des papes au XIVe siècle ?",r:"Avignon",w:["Arles","Aix-en-Provence","Lyon"],f:"Sept papes se sont succédé à Avignon ; c'est l'un des plus grands palais gothiques du monde."},
 {k:'Monuments',e:C,i:'pont-d-avignon',iq:1,q:"Ce pont célèbre grâce à une chanson est inachevé. Combien lui reste-t-il d'arches ?",r:"4",w:["1","12","22"],f:"Il en comptait 22 ; les crues du Rhône ont emporté les autres."},
 {k:'Monuments',e:C,i:'lascaux',iq:1,q:"De quand datent ces peintures de la grotte de Lascaux ?",r:"De la Préhistoire",w:["De l'Antiquité romaine","Du Moyen Âge","De la Renaissance"],f:"Environ 17 000 ans ; découvertes en 1940 par des adolescents. On visite aujourd'hui des copies."},
 {k:'Monuments',e:C,i:'chateau-de-fontainebleau',iq:1,q:"Quel empereur a fait ses adieux à sa garde dans la cour de ce château, en 1814 ?",r:"Napoléon Ier",w:["Napoléon III","Charles Quint","Louis-Philippe"],f:"Le château a été habité par les souverains pendant huit siècles."},
 {k:'Monuments',e:C,i:'cathedrale-de-chartres',iq:1,q:"Pour quoi cette cathédrale est-elle surtout célèbre ?",r:"Ses vitraux et leur « bleu de Chartres »",w:["Sa tour penchée","Ses gargouilles géantes","Son toit doré"],f:"Plus de 170 vitraux, en grande partie du XIIIe siècle."},
 {k:'Monuments',e:C,i:'cathedrale-de-strasbourg',iq:1,q:"Pendant plus de deux siècles, cette cathédrale a été…",r:"Le plus haut édifice du monde",w:["La plus ancienne d'Europe","Entièrement en marbre blanc","Construite en un an"],f:"142 m de haut, de 1647 à 1874 ; en grès rose des Vosges."},
 {k:'Monuments',e:C,i:'haut-knigsbourg',iq:1,q:"Dans quelle région se dresse ce château fort ?",r:"L'Alsace",w:["La Lorraine","La Bourgogne","Le Jura"],f:"Reconstruit au début du XXe siècle par l'empereur allemand Guillaume II."},
 {k:'Monuments',e:C,i:'hospices-de-beaune',iq:1,q:"Dans quelle région se trouvent ces toits de tuiles vernissées colorées ?",r:"La Bourgogne",w:["L'Alsace","La Provence","La Bretagne"],f:"Un hôpital fondé en 1443 ; ses vins sont vendus aux enchères chaque novembre."},
 // Paysages
 {k:'Nature',e:N,i:'dune-du-pilat',iq:1,q:"Près de quel bassin se trouve cette dune, la plus haute d'Europe ?",r:"Le bassin d'Arcachon",w:["La baie de Somme","Le golfe du Morbihan","L'étang de Berre"],f:"Environ 100 m de haut ; elle avance chaque année vers la forêt."},
 {k:'Nature',e:N,i:'etretat',iq:1,q:"Dans quelle région se trouvent ces falaises et leur arche ?",r:"La Normandie",w:["La Bretagne","Les Hauts-de-France","Les Pays de la Loire"],f:"Sur la côte d'Albâtre ; l'« Aiguille creuse » cache le trésor d'Arsène Lupin."},
 {k:'Nature',e:N,i:'gorges-du-verdon',iq:1,q:"La rivière de ces gorges doit son nom à sa couleur. Laquelle ?",r:"Le vert",w:["Le bleu","Le blanc","Le noir"],f:"Des gorges profondes jusqu'à environ 700 m, en Provence."},
 {k:'Nature',e:N,i:'cirque-de-gavarnie',iq:1,q:"Dans quel massif se trouve ce cirque ?",r:"Les Pyrénées",w:["Les Alpes","Le Massif central","Le Jura"],f:"Sa grande cascade, 422 m, est la plus haute de France métropolitaine."},
 {k:'Nature',e:N,i:'aiguille-du-midi',iq:1,q:"À quelle altitude environ culmine ce piton, desservi par un téléphérique ?",r:"3 842 m",w:["2 500 m","4 810 m","3 000 m"],f:"Face au mont Blanc ; le téléphérique part de Chamonix."},
 {k:'Nature',e:N,i:'calanques',iq:1,q:"Entre quelles villes s'étendent ces criques ?",r:"Marseille et Cassis",w:["Nice et Menton","Toulon et Hyères","Montpellier et Sète"],f:"Un parc national depuis 2012, le premier à la fois terrestre, marin et périurbain d'Europe."},
 {k:'Nature',e:N,i:'pointe-du-raz',iq:1,q:"Dans quel département breton se trouve cette pointe ?",r:"Le Finistère",w:["Le Morbihan","Les Côtes-d'Armor","L'Ille-et-Vilaine"],f:"Face à l'île de Sein, l'un des passages les plus dangereux pour les marins."},
 {k:'Nature',e:N,i:'rocamadour',iq:1,q:"Dans quel département se trouve ce village accroché à la falaise ?",r:"Le Lot",w:["La Dordogne","L'Aveyron","Le Cantal"],f:"Un grand lieu de pèlerinage depuis le Moyen Âge."},
 // Villes
 {k:'Villes',e:V,i:'place-stanislas',iq:1,q:"Dans quelle ville se trouve cette place aux grilles dorées ?",r:"Nancy",w:["Metz","Dijon","Bordeaux"],f:"Aménagée au XVIIIe siècle pour Stanislas, ancien roi de Pologne devenu duc de Lorraine."},
 {k:'Villes',e:V,i:'vieux-port-de-marseille',iq:1,q:"Dans quelle ville se trouve ce port ?",r:"Marseille",w:["Toulon","Nice","Sète"],f:"Les Grecs de Phocée y ont fondé la ville vers 600 avant notre ère."},
 {k:'Villes',e:V,i:'fourviere',iq:1,q:"Quelle ville domine cette basilique, sur sa colline ?",r:"Lyon",w:["Marseille","Lourdes","Grenoble"],f:"On surnomme Fourvière « la colline qui prie », face à la Croix-Rousse, « la colline qui travaille »."},
 {k:'Villes',e:V,i:'saint-malo',iq:1,q:"Comment surnomme-t-on cette ville entourée de remparts ?",r:"La cité corsaire",w:["La ville rose","La cité des papes","La ville lumière"],f:"Ses corsaires, comme Surcouf, attaquaient les navires ennemis avec l'accord du roi."}
];
window.QUIZ = {
  title: 'La France en photos', emoji: '🇫🇷', color: '#1D4ED8', color2: '#EF4444',
  sub: 'Monuments, paysages et villes de France.',
  modes: [
    { id: 'Monuments', label: 'Châteaux et monuments', emoji: C },
    { id: 'Nature', label: 'Paysages', emoji: N },
    { id: 'Villes', label: 'Villes', emoji: V }
  ],
  items
};
})();
