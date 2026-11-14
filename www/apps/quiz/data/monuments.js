/* Monuments du monde — chaque question montre une photo (i = img/monuments/<i>.jpg, iq = photo dans la question) */
(function(){
const E = '🏰', A = '🏯', M = '🗽';
const items = [
 // Europe
 {k:'Europe',e:E,i:'colisee',iq:1,q:"Quel est ce monument ?",r:"Le Colisée",w:["Les arènes de Nîmes","Le Circus Maximus","L'amphithéâtre d'El Jem"],f:"À Rome, inauguré en l'an 80 : il pouvait accueillir environ 50 000 spectateurs."},
 {k:'Europe',e:E,i:'tour-de-pise',iq:1,q:"Dans quelle ville se trouve cette tour ?",r:"Pise",w:["Florence","Bologne","Sienne"],f:"Le clocher a commencé à pencher pendant sa construction, à cause d'un sol trop mou."},
 {k:'Europe',e:E,i:'sagrada-familia',iq:1,q:"Quel architecte a conçu cette basilique de Barcelone ?",r:"Antoni Gaudí",w:["Le Corbusier","Santiago Calatrava","Ricardo Bofill"],f:"Le chantier a commencé en 1882 et n'est toujours pas tout à fait terminé."},
 {k:'Europe',e:E,i:'big-ben',iq:1,q:"Dans quelle ville se trouve cette tour ?",r:"Londres",w:["Édimbourg","Manchester","Dublin"],f:"Big Ben est en fait le nom de la grosse cloche ; la tour s'appelle Elizabeth Tower depuis 2012."},
 {k:'Europe',e:E,i:'tower-bridge',iq:1,q:"Quel est ce pont ?",r:"Tower Bridge",w:["Le London Bridge","Le pont Charles","Le pont de Brooklyn"],f:"On le confond souvent avec le London Bridge voisin, bien plus discret. Ses deux tabliers se lèvent pour laisser passer les bateaux."},
 {k:'Europe',e:E,i:'porte-de-brandebourg',iq:1,q:"Dans quelle ville se trouve cette porte ?",r:"Berlin",w:["Munich","Vienne","Potsdam"],f:"Longtemps coincée contre le Mur, elle est devenue le symbole de la réunification en 1989."},
 {k:'Europe',e:E,i:'chateau-de-neuschwanstein',iq:1,q:"Quel est ce château ?",r:"Neuschwanstein",w:["Chambord","Le château de Hohenzollern","Le palais de Pena"],f:"Construit en Bavière pour le roi Louis II ; il aurait inspiré le château de La Belle au bois dormant de Disney."},
 {k:'Europe',e:E,i:'parthenon',iq:1,q:"Quel est ce temple ?",r:"Le Parthénon",w:["Le Panthéon de Rome","Le temple d'Apollon à Delphes","Le temple de Zeus à Olympie"],f:"Sur l'Acropole d'Athènes, dédié à la déesse Athéna, au Ve siècle avant notre ère."},
 {k:'Europe',e:E,i:'cathedrale-saint-basile',iq:1,q:"Dans quelle ville se trouve cette cathédrale ?",r:"Moscou",w:["Saint-Pétersbourg","Kiev","Novgorod"],f:"Sur la place Rouge, achevée en 1561, avec ses bulbes de toutes les couleurs."},
 {k:'Europe',e:E,i:'mont-saint-michel',iq:1,q:"Quel est ce lieu ?",r:"Le Mont-Saint-Michel",w:["Saint-Malo","Le château d'If","Carcassonne"],f:"Entre Normandie et Bretagne ; ses marées comptent parmi les plus fortes d'Europe."},
 {k:'Europe',e:E,i:'atomium',iq:1,q:"Dans quelle ville se trouve ce monument ?",r:"Bruxelles",w:["Anvers","Amsterdam","Luxembourg"],f:"Construit pour l'Exposition universelle de 1958 : il représente un cristal de fer agrandi des milliards de fois."},
 {k:'Europe',e:E,i:'stonehenge',iq:1,q:"Quel est ce site ?",r:"Stonehenge",w:["Les alignements de Carnac","Newgrange","Skara Brae"],f:"En Angleterre, vieux d'environ 5 000 ans ; il est aligné sur le lever du soleil au solstice d'été."},
 {k:'Europe',e:E,i:'pont-charles',iq:1,q:"Dans quelle ville se trouve ce pont ?",r:"Prague",w:["Budapest","Vienne","Cracovie"],f:"Bordé de 30 statues, il franchit la Vltava depuis le XIVe siècle."},
 {k:'Europe',e:E,i:'fontaine-de-trevi',iq:1,q:"Que fait-on traditionnellement devant cette fontaine de Rome ?",r:"On y jette une pièce par-dessus l'épaule",w:["On s'y baigne les pieds","On boit son eau","On y accroche un cadenas"],f:"La tradition promet de revenir à Rome ; les pièces récoltées vont à une œuvre de charité."},
 {k:'Europe',e:E,i:'alhambra',iq:1,q:"Dans quelle ville d'Espagne se trouve ce palais ?",r:"Grenade",w:["Séville","Cordoue","Tolède"],f:"Le palais des derniers souverains musulmans d'Espagne, les Nasrides."},
 {k:'Europe',e:E,i:'sainte-sophie',iq:1,q:"Dans quelle ville se trouve cet édifice ?",r:"Istanbul",w:["Athènes","Le Caire","Jérusalem"],f:"Basilique en 537, puis mosquée, puis musée, de nouveau mosquée depuis 2020."},
 // Asie et Océanie
 {k:'Asie',e:A,i:'taj-mahal',iq:1,q:"Quel est ce monument ?",r:"Le Taj Mahal",w:["Le Fort rouge de Delhi","Le palais des Vents","La mosquée Jama Masjid"],f:"À Agra, en Inde : un mausolée de marbre blanc construit par l'empereur Shah Jahan pour son épouse."},
 {k:'Asie',e:A,i:'grande-muraille',iq:1,q:"Quelle est la longueur totale estimée de cet ouvrage, toutes sections comprises ?",r:"Plus de 20 000 km",w:["Environ 2 000 km","Environ 6 000 km","Environ 50 000 km"],f:"Selon un relevé chinois de 2012. Contrairement à la légende, on ne la voit pas à l'œil nu depuis l'espace."},
 {k:'Asie',e:A,i:'petra',iq:1,q:"Dans quel pays se trouve cette cité taillée dans la roche ?",r:"La Jordanie",w:["L'Égypte","Le Liban","La Syrie"],f:"Petra a été creusée par les Nabatéens ; on la voit dans « Indiana Jones et la Dernière Croisade »."},
 {k:'Asie',e:A,i:'angkor-vat',iq:1,q:"Dans quel pays se trouve ce temple ?",r:"Le Cambodge",w:["La Thaïlande","Le Vietnam","Le Laos"],f:"Le plus grand monument religieux du monde ; il figure sur le drapeau cambodgien."},
 {k:'Asie',e:A,i:'burj-khalifa',iq:1,q:"Dans quelle ville se trouve cette tour, la plus haute du monde ?",r:"Dubaï",w:["Abou Dhabi","Doha","Riyad"],f:"828 m depuis 2010."},
 {k:'Asie',e:A,i:'opera-de-sydney',iq:1,q:"Quel est ce bâtiment ?",r:"L'Opéra de Sydney",w:["Le musée Guggenheim de Bilbao","La Philharmonie de Paris","L'Elbphilharmonie de Hambourg"],f:"Inauguré en 1973 ; son architecte danois, Jørn Utzon, s'était inspiré de voiles de bateaux."},
 {k:'Asie',e:A,i:'cite-interdite',iq:1,q:"Dans quelle ville se trouve ce palais impérial ?",r:"Pékin",w:["Shanghai","Séoul","Kyoto"],f:"La Cité interdite a abrité les empereurs de Chine pendant près de 500 ans."},
 {k:'Asie',e:A,i:'tours-petronas',iq:1,q:"Dans quelle ville se trouvent ces tours jumelles ?",r:"Kuala Lumpur",w:["Singapour","Bangkok","Jakarta"],f:"452 m : les plus hautes tours du monde de 1998 à 2004."},
 {k:'Asie',e:A,i:'fushimi-inari-taisha',iq:1,q:"Dans quel pays se trouve ce sanctuaire aux milliers de portiques rouges ?",r:"Le Japon",w:["La Chine","La Corée du Sud","Taïwan"],f:"À Kyoto ; chaque portique (torii) a été offert par une famille ou une entreprise."},
 // Amériques et Afrique
 {k:'Amériques & Afrique',e:M,i:'statue-de-la-liberte',iq:1,q:"Quel pays a offert cette statue aux États-Unis ?",r:"La France",w:["Le Royaume-Uni","L'Espagne","Les Pays-Bas"],f:"Inaugurée en 1886 à New York pour le centenaire de l'indépendance américaine."},
 {k:'Amériques & Afrique',e:M,i:'christ-redempteur',iq:1,q:"Dans quelle ville se trouve cette statue ?",r:"Rio de Janeiro",w:["São Paulo","Lisbonne","Buenos Aires"],f:"Au sommet du Corcovado depuis 1931 ; Lisbonne en a une version inspirée, le Cristo Rei."},
 {k:'Amériques & Afrique',e:M,i:'machu-picchu',iq:1,q:"Quelle civilisation a bâti cette cité ?",r:"Les Incas",w:["Les Mayas","Les Aztèques","Les Olmèques"],f:"Perchée dans les Andes, au Pérou, au XVe siècle."},
 {k:'Amériques & Afrique',e:M,i:'golden-gate-bridge',iq:1,q:"Dans quelle ville se trouve ce pont ?",r:"San Francisco",w:["New York","Seattle","Vancouver"],f:"Inauguré en 1937 ; sa couleur s'appelle « orange international »."},
 {k:'Amériques & Afrique',e:M,i:'chichen-itza',iq:1,q:"Quelle civilisation a construit cette pyramide ?",r:"Les Mayas",w:["Les Incas","Les Aztèques","Les Toltèques"],f:"Au Mexique ; aux équinoxes, l'ombre dessine un serpent qui descend l'escalier."},
 {k:'Amériques & Afrique',e:M,i:'mont-rushmore',iq:1,q:"Combien de présidents américains sont sculptés dans cette montagne ?",r:"4",w:["3","5","6"],f:"Washington, Jefferson, Theodore Roosevelt et Lincoln : chaque visage mesure environ 18 m."},
 {k:'Amériques & Afrique',e:M,i:'pyramide-de-kheops',iq:1,q:"Seule des sept merveilles du monde antique encore debout, quelle est cette pyramide ?",r:"La pyramide de Khéops",w:["La pyramide de Khéphren","La pyramide de Mykérinos","La pyramide de Djéser"],f:"Près de 4 500 ans ; elle a été le plus haut bâtiment du monde pendant près de 4 000 ans."},
 {k:'Amériques & Afrique',e:M,i:'sphinx-de-gizeh',iq:1,q:"Cette statue géante a un visage humain et le corps…",r:"D'un lion",w:["D'un taureau","D'un chien","D'un crocodile"],f:"Taillé dans la roche à Gizeh ; le visage serait celui du pharaon Khéphren."},
 {k:'Amériques & Afrique',e:M,i:'moai',iq:1,q:"Sur quelle île se trouvent ces statues ?",r:"L'île de Pâques",w:["Tahiti","Hawaï","La Nouvelle-Calédonie"],f:"Près de 900 moaïs, sur une île chilienne perdue dans le Pacifique."},
 {k:'Amériques & Afrique',e:M,i:'abou-simbel',iq:1,q:"Quel pharaon a fait construire ce temple ?",r:"Ramsès II",w:["Toutânkhamon","Khéops","Akhenaton"],f:"Dans les années 1960, il a été découpé et remonté plus haut pour échapper au lac du barrage d'Assouan."},
 {k:'Amériques & Afrique',e:M,i:'empire-state-building',iq:1,q:"Dans quelle ville se trouve ce gratte-ciel ?",r:"New York",w:["Chicago","Boston","Philadelphie"],f:"Inauguré en 1931 ; King Kong l'escalade dans le film de 1933."}
];
window.QUIZ = {
  title: 'Monuments du monde', emoji: '🏛️', color: '#0F766E', color2: '#F59E0B',
  sub: 'Reconnais-les en photo.',
  modes: [
    { id: 'Europe', label: 'Europe', emoji: E },
    { id: 'Asie', label: 'Asie et Océanie', emoji: A },
    { id: 'Amériques & Afrique', label: 'Amériques et Afrique', emoji: M }
  ],
  items
};
})();
