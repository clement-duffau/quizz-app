/* Gastronomie */
(function(){
const F = '🥖', M = '🌍', T = '🧀';
const items = [
 // Spécialités françaises
 {k:'France',e:F,q:"De quelle ville la bouillabaisse est-elle la spécialité ?",r:"Marseille",w:["Nice","Toulon","Montpellier"],f:"Une soupe de poissons de roche servie avec une rouille et des croûtons."},
 {k:'France',e:F,q:"De quelle région le cassoulet est-il la spécialité ?",r:"Le Languedoc",w:["L'Alsace","La Bretagne","La Normandie"],f:"Castelnaudary, Carcassonne et Toulouse s'en disputent la meilleure recette."},
 {k:'France',e:F,q:"Quelle région est célèbre pour sa choucroute ?",r:"L'Alsace",w:["La Lorraine","La Savoie","La Franche-Comté"],f:"Du chou fermenté servi avec des saucisses et de la charcuterie."},
 {k:'France',e:F,q:"La quiche la plus célèbre porte le nom de quelle région ?",r:"La Lorraine",w:["L'Alsace","La Champagne","La Bourgogne"],f:"La vraie recette : œufs, crème et lardons, sans fromage."},
 {k:'France',e:F,q:"Dans quoi mijote le bœuf bourguignon ?",r:"Du vin rouge",w:["De la bière","Du cidre","Du lait"],f:"Traditionnellement un vin rouge de Bourgogne, avec lardons, champignons et oignons."},
 {k:'France',e:F,q:"Quel fromage fait-on fondre dans la tartiflette ?",r:"Le reblochon",w:["Le comté","Le beaufort","La tomme"],f:"Une recette des années 1980, inventée pour faire connaître le reblochon."},
 {k:'France',e:F,q:"De quelle région vient le kouign-amann ?",r:"La Bretagne",w:["La Normandie","Le Pays basque","L'Alsace"],f:"Son nom signifie « gâteau au beurre » en breton ; il est né à Douarnenez."},
 {k:'France',e:F,q:"De quelle ville le calisson est-il la spécialité ?",r:"Aix-en-Provence",w:["Montélimar","Nice","Avignon"],f:"Une pâte de melon confit et d'amandes, sous un glaçage blanc."},
 {k:'France',e:F,q:"De quelle ville le nougat est-il la spécialité ?",r:"Montélimar",w:["Aix-en-Provence","Nîmes","Valence"],f:"Du miel, des amandes, du sucre et des blancs d'œufs."},
 {k:'France',e:F,q:"De quelle ville le canelé est-il la spécialité ?",r:"Bordeaux",w:["Toulouse","Lyon","Bayonne"],f:"Caramélisé dehors, moelleux dedans, parfumé au rhum et à la vanille."},
 {k:'France',e:F,q:"De quelle ville viennent les bêtises, des bonbons à la menthe ?",r:"Cambrai",w:["Lille","Arras","Reims"],f:"La légende parle d'une erreur d'apprenti confiseur, d'où leur nom."},
 {k:'France',e:F,q:"Quelle est la particularité de la tarte Tatin ?",r:"Elle est cuite à l'envers",w:["Elle n'a pas de pâte","Elle se mange crue","Elle est au fromage"],f:"Les pommes caramélisent au fond du moule, puis on retourne la tarte."},
 {k:'France',e:F,q:"De quelle région vient l'aligot, une purée filante au fromage ?",r:"L'Aubrac",w:["La Savoie","Le Jura","Les Vosges"],f:"On l'étire en longs rubans à la cuillère en bois."},
 {k:'France',e:F,q:"Pour quelle fête mange-t-on la galette des rois ?",r:"L'Épiphanie",w:["La Chandeleur","Pâques","Mardi gras"],f:"Celui qui trouve la fève devient le roi ou la reine."},
 {k:'France',e:F,q:"Que mange-t-on traditionnellement à la Chandeleur ?",r:"Des crêpes",w:["Une galette des rois","Une bûche","Des œufs en chocolat"],f:"Le 2 février ; on les fait sauter en tenant une pièce pour avoir de la chance."},
 {k:'France',e:F,q:"Avec quoi flambe-t-on les crêpes Suzette ?",r:"Une liqueur d'orange",w:["Du calvados","Du rhum","De la vodka"],f:"Avec du beurre, du sucre et du jus d'orange."},
 // Cuisines du monde
 {k:'Monde',e:M,q:"De quel pays la paella est-elle la spécialité ?",r:"L'Espagne",w:["Le Portugal","L'Italie","Le Mexique"],f:"Elle vient de la région de Valence ; la recette d'origine est au poulet et au lapin."},
 {k:'Monde',e:M,q:"Qu'est-ce que le wasabi ?",r:"Un raifort japonais",w:["Une algue","Un poisson","Une sauce au soja"],f:"Souvent, celui des restaurants est en fait du raifort ordinaire coloré en vert."},
 {k:'Monde',e:M,q:"Quel légume donne sa couleur rouge au bortsch ?",r:"La betterave",w:["La tomate","Le poivron","Le chou rouge"],f:"Une soupe d'Europe de l'Est, servie avec une cuillère de crème aigre (smetana)."},
 {k:'Monde',e:M,q:"De quel pays le goulash est-il la spécialité ?",r:"La Hongrie",w:["La Pologne","L'Autriche","La Roumanie"],f:"Un ragoût de bœuf très parfumé au paprika."},
 {k:'Monde',e:M,q:"De quel pays la moussaka est-elle la spécialité ?",r:"La Grèce",w:["L'Italie","Le Liban","L'Espagne"],f:"Des couches d'aubergines, de viande hachée et de béchamel."},
 {k:'Monde',e:M,q:"Quel est l'ingrédient principal du houmous ?",r:"Les pois chiches",w:["Les lentilles","Les haricots blancs","Les fèves"],f:"Écrasés avec de la crème de sésame (tahini), du citron et de l'ail."},
 {k:'Monde',e:M,q:"Quel est l'ingrédient principal du guacamole ?",r:"L'avocat",w:["La tomate","Le citron vert","Le poivron"],f:"Une recette mexicaine qui remonte aux Aztèques."},
 {k:'Monde',e:M,q:"La pizza Margherita porterait le nom…",r:"D'une reine d'Italie",w:["D'une fleur","D'une ville","D'une actrice"],f:"La reine Marguerite, en 1889 ; tomate, mozzarella et basilic, comme le drapeau italien."},
 {k:'Monde',e:M,q:"Quel fromage entre dans le tiramisu ?",r:"Le mascarpone",w:["La ricotta","La mozzarella","Le gorgonzola"],f:"Avec des biscuits imbibés de café et du cacao en poudre."},
 {k:'Monde',e:M,q:"De quel pays vient la soupe phở ?",r:"Le Vietnam",w:["La Thaïlande","La Chine","La Corée"],f:"Un bouillon parfumé avec des nouilles de riz et du bœuf ou du poulet."},
 {k:'Monde',e:M,q:"De quel pays vient le kimchi, du chou fermenté et pimenté ?",r:"La Corée",w:["Le Japon","La Chine","Le Vietnam"],f:"On le sert à presque tous les repas coréens."},
 {k:'Monde',e:M,q:"Les pelmeni, petits raviolis farcis à la viande, sont une spécialité…",r:"Russe",w:["Italienne","Turque","Grecque"],f:"On les fait souvent à l'avance et on les conserve congelés pour l'hiver."},
 {k:'Monde',e:M,q:"Le tajine marocain doit son nom…",r:"À son plat en terre cuite à couvercle conique",w:["À une épice","À une ville","À un roi"],f:"Le couvercle renvoie la vapeur vers les aliments : la cuisson reste moelleuse."},
 {k:'Monde',e:M,q:"De quel pays vient le ceviche, du poisson cru mariné au citron ?",r:"Le Pérou",w:["Le Brésil","Le Mexique","L'Espagne"],f:"C'est l'un des plats nationaux du Pérou."},
 {k:'Monde',e:M,q:"De quel pays le strudel aux pommes est-il la spécialité ?",r:"L'Autriche",w:["L'Allemagne","La Suisse","La Belgique"],f:"Sa pâte est étirée si finement qu'on doit pouvoir lire un journal à travers."},
 // Produits et techniques
 {k:'Produits',e:T,q:"Quel fromage bleu au lait de brebis s'affine dans des caves de l'Aveyron ?",r:"Le roquefort",w:["Le bleu d'Auvergne","La fourme d'Ambert","Le gorgonzola"],f:"Il est affiné dans les caves naturelles du Combalou."},
 {k:'Produits',e:T,q:"Quel fromage normand est vendu dans une boîte ronde en bois ?",r:"Le camembert",w:["Le brie","Le munster","Le comté"],f:"La boîte en peuplier a été inventée en 1890 pour le transporter plus loin."},
 {k:'Produits',e:T,q:"Le comté est un fromage…",r:"Du massif du Jura",w:["De Savoie","D'Auvergne","Des Pyrénées"],f:"Il faut environ 400 litres de lait pour une seule meule."},
 {k:'Produits',e:T,q:"Quel moine est associé à la légende de l'invention du champagne ?",r:"Dom Pérignon",w:["Saint Vincent","Saint Benoît","Dom Juan"],f:"En réalité, il a surtout perfectionné l'assemblage des vins de Champagne."},
 {k:'Produits',e:T,q:"Que veut dire « al dente » pour des pâtes ?",r:"Cuites mais encore fermes sous la dent",w:["Très cuites et fondantes","Cuites à la vapeur","Servies avec du fromage"],f:"Littéralement « à la dent » en italien."},
 {k:'Produits',e:T,q:"Couper des légumes « en brunoise », c'est les couper…",r:"En tout petits dés",w:["En fins filaments","En rondelles","En gros quartiers"],f:"La julienne, elle, désigne des filaments très fins."},
 {k:'Produits',e:T,q:"Qu'est-ce qu'une cuisson au bain-marie ?",r:"Dans un récipient posé dans de l'eau chaude",w:["Dans un bain d'huile","À la vapeur, au-dessus de l'eau","Dans de l'eau de mer"],f:"La chaleur douce évite de brûler le chocolat ou de faire tourner une crème."},
 {k:'Produits',e:T,q:"Quels animaux aident traditionnellement à trouver les truffes ?",r:"Le cochon et le chien",w:["Le furet et le chat","Le lapin et la chèvre","Le mouton et l'âne"],f:"Le chien est plus utilisé aujourd'hui : il ne mange pas la truffe qu'il trouve."},
 {k:'Produits',e:T,q:"De quelle région vient le piment d'Espelette ?",r:"Le Pays basque",w:["La Provence","La Bretagne","La Corse"],f:"À l'automne, on le fait sécher en guirlandes sur les façades des maisons."},
 {k:'Produits',e:T,q:"Quel bassin de Charente-Maritime est célèbre pour ses huîtres ?",r:"Marennes-Oléron",w:["La Camargue","Le lac Léman","La baie de Somme"],f:"C'est le premier bassin ostréicole d'Europe."},
 {k:'Produits',e:T,q:"Que signifie le sigle AOP sur un produit ?",r:"Appellation d'origine protégée",w:["Agriculture officiellement primée","Appellation officielle de production","Aliment d'origine paysanne"],f:"Le produit doit être fabriqué dans une zone précise, selon un savoir-faire reconnu."},
 {k:'Produits',e:T,q:"Un roux, base de la sauce béchamel, est un mélange de…",r:"Beurre et farine",w:["Lait et œufs","Crème et sucre","Huile et vinaigre"],f:"On y ajoute ensuite le lait petit à petit pour obtenir la béchamel."},
 {k:'Produits',e:T,q:"Quels sont les deux ingrédients de base de la mayonnaise ?",r:"Jaune d'œuf et huile",w:["Beurre et farine","Crème et citron","Blanc d'œuf et sucre"],f:"On ajoute souvent de la moutarde, qui aide à la faire « prendre »."}
];
window.QUIZ = {
  title: 'Gastronomie', emoji: '🍽️', color: '#B45309', color2: '#16A34A',
  sub: 'Spécialités, cuisines du monde, produits.',
  modes: [
    { id: 'France', label: 'Spécialités françaises', emoji: F },
    { id: 'Monde', label: 'Cuisines du monde', emoji: M },
    { id: 'Produits', label: 'Produits et techniques', emoji: T }
  ],
  items
};
})();
