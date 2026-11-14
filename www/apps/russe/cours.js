/* Cours de russe — unités après l'alphabet.
   Notation : un « + » suit la voyelle accentuée (приве+т → приве́т à l'écran, sans accent pour la voix).
   « ё » est toujours accentué : pas besoin d'apostrophe.
   ph = prononciation pour un francophone, syllabe accentuée en MAJUSCULES.
   Mot : [russe, prononciation, français, emoji?]
   Phrase : [russe, français, prononciation]   (les phrases servent aux exercices « assemble la phrase ») */
window.RU_COURSE = [
 { u:'Premiers mots', c:'#E8833A', lessons:[
  { id:'bonjour', t:'Bonjour !', em:'👋', s:'Saluer, remercier, prendre congé',
    tip:"Dans « здра+вствуйте », le premier « в » ne se prononce pas : on dit « ZDRAST-vouï-tié ». C'est le bonjour poli, pour une personne qu'on vouvoie.",
    words:[
     ['приве+т','pri-VIÉT','salut (en arrivant)','👋'],
     ['здра+вствуйте','ZDRAST-vouï-tié','bonjour (poli)','🤝'],
     ['пока+','pa-KA','salut (en partant)','🙋'],
     ['до свида+ния','da svi-DA-ni-ya','au revoir','🚪'],
     ['спаси+бо','spa-SI-ba','merci','🙏'],
     ['пожа+луйста','pa-JA-lous-ta','s\'il te plaît, de rien','😊'],
     ['да','da','oui','✅'],
     ['нет','niét','non','❌']
    ],
    phrases:[
     ['Да, спаси+бо.','Oui, merci.','da, spa-SI-ba'],
     ['Нет, спаси+бо.','Non, merci.','niét, spa-SI-ba'],
     ['Спаси+бо, пока+!','Merci, salut !','spa-SI-ba, pa-KA'],
     ['До свида+ния!','Au revoir !','da svi-DA-ni-ya']
    ]},
  { id:'cava', t:'Ça va ?', em:'🙂', s:'Demander et donner des nouvelles',
    tip:"Un « о » qui n'est pas accentué se prononce presque « a » : хорошо+ se dit « kha-ra-CHO ». C'est la règle la plus utile pour bien prononcer le russe.",
    words:[
     ['как','kak','comment','❓'],
     ['дела+','di-LA','les affaires (dans « ça va ? »)','📋'],
     ['хорошо+','kha-ra-CHO','bien','👍'],
     ['пло+хо','PLO-kha','mal','👎'],
     ['норма+льно','nar-MAL’-na','ça va, normal','👌'],
     ['отли+чно','at-LITCH-na','excellent','🌟'],
     ['а','a','et (pour enchaîner, opposer)','➕'],
     ['всё','fsio','tout','🌍'],
     ['извини+те','iz-vi-NI-tié','excusez-moi','🙇']
    ],
    phrases:[
     ['Как дела+?','Comment ça va ?','kak di-LA'],
     ['Хорошо+, спаси+бо.','Bien, merci.','kha-ra-CHO, spa-SI-ba'],
     ['А ты?','Et toi ?','a TY'],
     ['Всё хорошо+.','Tout va bien.','fsio kha-ra-CHO'],
     ['Извини+те, пожа+луйста.','Excusez-moi, s\'il vous plaît.','iz-vi-NI-tié, pa-JA-lous-ta']
    ]}
 ]},
 { u:'Se présenter', c:'#2E9E6B', lessons:[
  { id:'pronoms', t:'Je, tu, il…', em:'🙋', s:'Les pronoms, et pas de verbe « être »',
    tip:"Au présent, le russe n'utilise pas le verbe « être » : « Я студе+нт » veut dire « Je suis étudiant ». Il n'y a pas non plus d'article : ni « un », ni « le ».",
    words:[
     ['я','ya','je, moi','🙋'],
     ['ты','ty','tu, toi','🫵'],
     ['он','on','il, lui','👨'],
     ['она+','a-NA','elle','👩'],
     ['мы','my','nous','👫'],
     ['вы','vy','vous','👥'],
     ['они+','a-NI','ils, elles','👨‍👩‍👧'],
     ['студе+нт','stou-DIENT','étudiant','🎓'],
     ['студе+нтка','stou-DIENT-ka','étudiante','👩‍🎓'],
     ['врач','vratch','médecin','🩺']
    ],
    phrases:[
     ['Я студе+нт.','Je suis étudiant.','ya stou-DIENT'],
     ['Она+ студе+нтка.','Elle est étudiante.','a-NA stou-DIENT-ka'],
     ['Ты врач?','Tu es médecin ?','ty VRATCH'],
     ['Он врач.','Il est médecin.','on VRATCH']
    ]},
  { id:'nom', t:'Je m\'appelle…', em:'📛', s:'Dire son nom, faire connaissance',
    tip:"« Меня+ зову+т » signifie mot à mot « on m'appelle ». À la fin d'un mot, une consonne sonore devient sourde : зову+т reste « za-VOUT », mais друг se dit « drouk ».",
    words:[
     ['меня+ зову+т','mi-NIA za-VOUT','je m\'appelle','📛'],
     ['как тебя+ зову+т','kak ti-BIA za-VOUT','comment tu t\'appelles','❔'],
     ['о+чень','O-tchin’','très','💯'],
     ['прия+тно','pri-YAT-na','agréable','😊'],
     ['кто','kto','qui','🕵️'],
     ['э+то','É-ta','c\'est, ceci','👉'],
     ['друг','drouk','ami','🧑‍🤝‍🧑'],
     ['подру+га','pa-DROU-ga','amie','👭']
    ],
    phrases:[
     ['Меня+ зову+т А+нна.','Je m\'appelle Anna.','mi-NIA za-VOUT AN-na'],
     ['Как тебя+ зову+т?','Comment tu t\'appelles ?','kak ti-BIA za-VOUT'],
     ['О+чень прия+тно!','Enchanté !','O-tchin’ pri-YAT-na'],
     ['Кто э+то?','Qui est-ce ?','kto É-ta'],
     ['Э+то мой друг.','C\'est mon ami.','É-ta moï DROUK']
    ]},
  { id:'langues', t:'D\'où viens-tu ?', em:'🌍', s:'Pays, nationalités et langues',
    tip:"Après « ц », la voyelle « и » se prononce comme un « ы » plus grave : Фра+нция se dit « FRAN-tsy-ya ».",
    words:[
     ['Росси+я','ra-SI-ya','la Russie','🇷🇺'],
     ['Фра+нция','FRAN-tsy-ya','la France','🇫🇷'],
     ['я из Фра+нции','ya iz FRAN-tsy-i','je viens de France','📍'],
     ['ру+сский','ROUS-kiï','russe (un Russe)','🪆'],
     ['францу+з','fran-TSOUS','français (un Français)','🥖'],
     ['я говорю+','ya ga-va-RIOU','je parle','🗣️'],
     ['по-ру+сски','pa-ROUS-ki','en russe','🔤'],
     ['по-францу+зски','pa-fran-TSOUS-ki','en français','💬'],
     ['немно+го','ni-MNO-ga','un peu','🤏'],
     ['я не понима+ю','ya ni pa-ni-MA-you','je ne comprends pas','🤷']
    ],
    phrases:[
     ['Я из Фра+нции.','Je viens de France.','ya iz FRAN-tsy-i'],
     ['Я говорю+ по-ру+сски.','Je parle russe.','ya ga-va-RIOU pa-ROUS-ki'],
     ['Я немно+го говорю+ по-ру+сски.','Je parle un peu russe.','ya ni-MNO-ga ga-va-RIOU pa-ROUS-ki'],
     ['Я не понима+ю.','Je ne comprends pas.','ya ni pa-ni-MA-you'],
     ['Вы говори+те по-францу+зски?','Vous parlez français ?','vy ga-va-RI-tié pa-fran-TSOUS-ki']
    ]}
 ]},
 { u:'Les nombres', c:'#7A4FD6', lessons:[
  { id:'chiffres', t:'De 0 à 10', em:'🔢', s:'Compter jusqu\'à dix',
    tip:"Le « ь » (signe mou) à la fin de пять, шесть ou семь adoucit la consonne : la langue touche le palais, comme si un petit « i » allait suivre.",
    words:[
     ['ноль','nol’','zéro','0️⃣'],
     ['оди+н','a-DIN','un','1️⃣'],
     ['два','dva','deux','2️⃣'],
     ['три','tri','trois','3️⃣'],
     ['четы+ре','tchi-TY-rié','quatre','4️⃣'],
     ['пять','piat’','cinq','5️⃣'],
     ['шесть','chest’','six','6️⃣'],
     ['семь','siém’','sept','7️⃣'],
     ['во+семь','VO-sim’','huit','8️⃣'],
     ['де+вять','DIÉ-vit’','neuf','9️⃣'],
     ['де+сять','DIÉ-sit’','dix','🔟']
    ],
    phrases:[
     ['Оди+н, два, три!','Un, deux, trois !','a-DIN, dva, tri'],
     ['Пять и пять — де+сять.','Cinq et cinq, dix.','piat’ i piat’ — DIÉ-sit’']
    ]},
  { id:'prix', t:'Combien ça coûte ?', em:'💰', s:'Prix, grands nombres, cher ou pas',
    tip:"Dans « ско+лько », le « л » est mou (suivi de « ь ») : « SKOL’-ka ». Et dans « рубле+й », l'accent tombe à la fin.",
    words:[
     ['ско+лько','SKOL’-ka','combien','❔'],
     ['сто+ит','STO-it','coûte','🏷️'],
     ['рубль','roubl’','rouble','💵'],
     ['два+дцать','DVA-tsat’','vingt','2️⃣0️⃣'],
     ['сто','sto','cent','💯'],
     ['ты+сяча','TY-si-tcha','mille','🔝'],
     ['до+рого','DO-ra-ga','c\'est cher','💸'],
     ['дёшево','DIO-chi-va','pas cher','🪙']
    ],
    phrases:[
     ['Ско+лько сто+ит?','Combien ça coûte ?','SKOL’-ka STO-it'],
     ['Ско+лько э+то сто+ит?','Combien coûte ceci ?','SKOL’-ka É-ta STO-it'],
     ['Э+то до+рого.','C\'est cher.','É-ta DO-ra-ga'],
     ['Э+то о+чень дёшево!','C\'est très bon marché !','É-ta O-tchin’ DIO-chi-va'],
     ['Сто рубле+й.','Cent roubles.','sto rou-BLIÉÏ']
    ]}
 ]},
 { u:'La famille', c:'#D6457A', lessons:[
  { id:'famille', t:'Ma famille', em:'👨‍👩‍👧‍👦', s:'Les proches, « mon » et « ma »',
    tip:"Un mot terminé par une consonne est en général masculin (мой брат), un mot en -а ou -я féminin (моя+ сестра+). Attention : па+па et де+душка sont masculins malgré leur -а !",
    words:[
     ['семья+','si-MIA','famille','👨‍👩‍👧'],
     ['брат','brat','frère','👦'],
     ['сестра+','sis-TRA','sœur','👧'],
     ['сын','syn','fils','👶'],
     ['дочь','dotch’','fille (enfant)','👧'],
     ['муж','mouch','mari','🤵'],
     ['жена+','ji-NA','épouse','👰'],
     ['мой','moï','mon','👈'],
     ['моя+','ma-YA','ma','👉']
    ],
    phrases:[
     ['Э+то мой брат.','C\'est mon frère.','É-ta moï BRAT'],
     ['Э+то моя+ сестра+.','C\'est ma sœur.','É-ta ma-YA sis-TRA'],
     ['Э+то моя+ семья+.','C\'est ma famille.','É-ta ma-YA si-MIA'],
     ['Он мой муж.','C\'est mon mari.','on moï MOUCH']
    ]},
  { id:'proches', t:'Grands-parents et amis', em:'👵', s:'« J\'ai… » et toute la famille',
    tip:"Pour dire « j'ai », on dit « chez moi il y a » : « У меня+ есть брат » = « J'ai un frère ». Le « е » non accentué se prononce presque « i » : меня+ = « mi-NIA ».",
    words:[
     ['ма+ма','MA-ma','maman','👩'],
     ['па+па','PA-pa','papa','👨'],
     ['ба+бушка','BA-bouch-ka','grand-mère','👵'],
     ['де+душка','DIÉ-douch-ka','grand-père','👴'],
     ['де+ти','DIÉ-ti','enfants','🧒'],
     ['у меня+ есть','ou mi-NIA iést’','j\'ai','🤲'],
     ['большо+й','bal’-CHOÏ','grand','🐘'],
     ['ма+ленький','MA-lin’-kiï','petit','🐭']
    ],
    phrases:[
     ['У меня+ есть брат.','J\'ai un frère.','ou mi-NIA iést’ BRAT'],
     ['У меня+ есть сестра+.','J\'ai une sœur.','ou mi-NIA iést’ sis-TRA'],
     ['Э+то моя+ ба+бушка.','C\'est ma grand-mère.','É-ta ma-YA BA-bouch-ka'],
     ['Мой па+па врач.','Mon papa est médecin.','moï PA-pa VRATCH']
    ]}
 ]},
 { u:'Manger et boire', c:'#C2410C', lessons:[
  { id:'aliments', t:'À table !', em:'🍽️', s:'Boissons et aliments',
    tip:"Le « в » se prononce « f » devant une consonne sourde (вку+сно = « FKOUS-na ») et « б » devient « p » en fin de mot : хлеб = « khliép ».",
    words:[
     ['вода+','va-DA','eau','💧'],
     ['чай','tchaï','thé','🍵'],
     ['ко+фе','KO-fié','café','☕'],
     ['молоко+','ma-la-KO','lait','🥛'],
     ['хлеб','khliép','pain','🍞'],
     ['сыр','syr','fromage','🧀'],
     ['я+блоко','YA-bla-ka','pomme','🍎'],
     ['суп','soup','soupe','🍲'],
     ['ры+ба','RY-ba','poisson','🐟'],
     ['мя+со','MIA-sa','viande','🥩'],
     ['и','i','et','➕']
    ],
    phrases:[
     ['Чай, пожа+луйста.','Un thé, s\'il vous plaît.','tchaï, pa-JA-lous-ta'],
     ['Хлеб и сыр.','Du pain et du fromage.','khliép i SYR'],
     ['Ры+ба и+ли мя+со?','Poisson ou viande ?','RY-ba I-li MIA-sa'],
     ['Ко+фе с молоко+м.','Un café au lait.','KO-fié s ma-la-KOM']
    ]},
  { id:'gouts', t:'J\'aime, je veux', em:'😋', s:'Goûts et envies',
    tip:"« Что » (quoi) se prononce « chto » : une exception à connaître par cœur. Et ко+фе est masculin, même s'il se termine par -е.",
    words:[
     ['я хочу+','ya kha-TCHOU','je veux','🙏'],
     ['ты хо+чешь','ty KHO-tchich','tu veux','🫴'],
     ['я люблю+','ya liou-BLIOU','j\'aime','❤️'],
     ['не','ni','ne… pas','🚫'],
     ['что','chto','quoi, que','❓'],
     ['вку+сно','FKOUS-na','c\'est bon (délicieux)','😋'],
     ['и+ли','I-li','ou','🔀'],
     ['ещё','i-CHTCHIO','encore','🔁']
    ],
    phrases:[
     ['Я хочу+ ко+фе.','Je veux un café.','ya kha-TCHOU KO-fié'],
     ['Я люблю+ сыр.','J\'aime le fromage.','ya liou-BLIOU SYR'],
     ['Я не люблю+ мя+со.','Je n\'aime pas la viande.','ya ni liou-BLIOU MIA-sa'],
     ['Что ты хо+чешь?','Que veux-tu ?','chto ty KHO-tchich'],
     ['Э+то о+чень вку+сно!','C\'est très bon !','É-ta O-tchin’ FKOUS-na'],
     ['Ещё ко+фе, пожа+луйста.','Encore un café, s\'il vous plaît.','i-CHTCHIO KO-fié, pa-JA-lous-ta']
    ]}
 ]},
 { u:'En ville', c:'#0E7490', lessons:[
  { id:'lieux', t:'Où est… ?', em:'🏙️', s:'Les lieux utiles',
    tip:"« Где » (où) se prononce d'un coup, « gdié ». Et pour montrer quelque chose : « вот » = « voici, voilà ».",
    words:[
     ['где','gdié','où','📍'],
     ['вот','vot','voici, voilà','👉'],
     ['здесь','zdies’','ici','⬇️'],
     ['там','tam','là-bas','↗️'],
     ['метро+','mi-TRO','métro','🚇'],
     ['магази+н','ma-ga-ZIN','magasin','🛒'],
     ['апте+ка','ap-TIÉ-ka','pharmacie','💊'],
     ['вокза+л','vag-ZAL','gare','🚉'],
     ['гости+ница','gas-TI-ni-tsa','hôtel','🏨'],
     ['туале+т','tou-a-LIÉT','toilettes','🚻']
    ],
    phrases:[
     ['Где метро+?','Où est le métro ?','gdié mi-TRO'],
     ['Где туале+т?','Où sont les toilettes ?','gdié tou-a-LIÉT'],
     ['Вот апте+ка.','Voici la pharmacie.','vot ap-TIÉ-ka'],
     ['Гости+ница там.','L\'hôtel est là-bas.','gas-TI-ni-tsa TAM'],
     ['Магази+н здесь.','Le magasin est ici.','ma-ga-ZIN ZDIES’']
    ]},
  { id:'chemin', t:'Le chemin', em:'🧭', s:'Gauche, droite, tout droit',
    tip:"Une consonne sonore devient sourde devant une consonne sourde : dans бли+зко, le « з » se prononce « s » devant le « к » : « BLIS-ka ». Et dans далеко+, l'accent tombe sur la dernière syllabe.",
    words:[
     ['нале+во','na-LIÉ-va','à gauche','⬅️'],
     ['напра+во','na-PRA-va','à droite','➡️'],
     ['пря+мо','PRIA-ma','tout droit','⬆️'],
     ['пото+м','pa-TOM','ensuite','⏭️'],
     ['далеко+','da-li-KO','loin','🏔️'],
     ['бли+зко','BLIS-ka','près','🤏'],
     ['иди+те','i-DI-tié','allez','🚶'],
     ['у+лица','OU-li-tsa','rue','🛣️']
    ],
    phrases:[
     ['Иди+те пря+мо.','Allez tout droit.','i-DI-tié PRIA-ma'],
     ['Пото+м напра+во.','Ensuite à droite.','pa-TOM na-PRA-va'],
     ['Метро+ бли+зко.','Le métro est près.','mi-TRO BLIS-ka'],
     ['Э+то далеко+?','C\'est loin ?','É-ta da-li-KO']
    ]}
 ]},
 { u:'Le temps', c:'#475569', lessons:[
  { id:'moments', t:'Bonjour à toute heure', em:'🌅', s:'Matin, soir, hier, demain',
    tip:"Dans сего+дня, le « г » se prononce « v » : « si-VOD-nia ». Et вчера+ commence par « ft » : le « в » devient « f » devant « ч ».",
    words:[
     ['сего+дня','si-VOD-nia','aujourd\'hui','📅'],
     ['за+втра','ZAF-tra','demain','➡️'],
     ['вчера+','ftchi-RA','hier','⬅️'],
     ['сейча+с','si-TCHAS','maintenant','⏱️'],
     ['у+тро','OU-tra','matin','🌅'],
     ['день','dién’','jour, journée','☀️'],
     ['ве+чер','VIÉ-tchir','soir','🌆'],
     ['ночь','notch’','nuit','🌙']
    ],
    phrases:[
     ['До+брое у+тро!','Bonjour ! (le matin)','DOB-ra-ié OU-tra'],
     ['До+брый день!','Bonjour ! (la journée)','DOB-ryï DIÉN’'],
     ['До+брый ве+чер!','Bonsoir !','DOB-ryï VIÉ-tchir'],
     ['Споко+йной но+чи!','Bonne nuit !','spa-KOÏ-naï NO-tchi'],
     ['До за+втра!','À demain !','da ZAF-tra']
    ]},
  { id:'semaine', t:'Les jours de la semaine', em:'🗓️', s:'Du lundi au dimanche',
    tip:"En russe, les jours de la semaine s'écrivent avec une minuscule. Вто+рник commence par « ft » : « FTOR-nik ».",
    words:[
     ['понеде+льник','pa-ni-DIÉL’-nik','lundi','1️⃣'],
     ['вто+рник','FTOR-nik','mardi','2️⃣'],
     ['среда+','sri-DA','mercredi','3️⃣'],
     ['четве+рг','tchit-VIÉRK','jeudi','4️⃣'],
     ['пя+тница','PIAT-ni-tsa','vendredi','5️⃣'],
     ['суббо+та','sou-BO-ta','samedi','6️⃣'],
     ['воскресе+нье','vas-kri-SIÉ-nié','dimanche','7️⃣']
    ],
    phrases:[
     ['Сего+дня пя+тница.','Aujourd\'hui, c\'est vendredi.','si-VOD-nia PIAT-ni-tsa'],
     ['За+втра суббо+та.','Demain, c\'est samedi.','ZAF-tra sou-BO-ta'],
     ['Сего+дня понеде+льник?','Aujourd\'hui, c\'est lundi ?','si-VOD-nia pa-ni-DIÉL’-nik']
    ]}
 ]},
 { u:'Les couleurs', c:'#E11D48', lessons:[
  { id:'couleurs', t:'Toutes les couleurs', em:'🎨', s:'Les couleurs et les adjectifs',
    tip:"Le russe a deux bleus : си+ний (bleu foncé) et голубо+й (bleu ciel), considérés comme deux couleurs différentes. Au masculin, les adjectifs finissent en -ый, -ий ou -ой.",
    words:[
     ['кра+сный','KRAS-nyï','rouge','🔴'],
     ['си+ний','SI-niï','bleu foncé','🔵'],
     ['голубо+й','ga-lou-BOÏ','bleu clair','🩵'],
     ['зелёный','zi-LIO-nyï','vert','🟢'],
     ['жёлтый','JOL-tyï','jaune','🟡'],
     ['бе+лый','BIÉ-lyï','blanc','⚪'],
     ['чёрный','TCHOR-nyï','noir','⚫'],
     ['се+рый','SIÉ-ryï','gris','🩶'],
     ['ора+нжевый','a-RAN-ji-vyï','orange','🟠'],
     ['ро+зовый','RO-za-vyï','rose','🩷'],
     ['кори+чневый','ka-RITCH-ni-vyï','marron','🟤'],
     ['цвет','tsviét','couleur','🌈']
    ],
    phrases:[
     ['Мой кот чёрный.','Mon chat est noir.','moï KOT TCHOR-nyï'],
     ['Э+то кра+сный дом.','C\'est une maison rouge.','É-ta KRAS-nyï DOM'],
     ['Бана+н жёлтый.','La banane est jaune.','ba-NAN JOL-tyï'],
     ['Како+й твой люби+мый цвет?','Quelle est ta couleur préférée ?','ka-KOÏ tvoï liou-BI-myï TSVIET']
    ]}
 ]},
 { u:'Les verbes', c:'#2563EB', lessons:[
  { id:'lire', t:'Je lis, tu lis', em:'📖', s:'Conjuguer au présent',
    tip:"Au présent, beaucoup de verbes suivent ce modèle : on enlève -ть et on ajoute -ю, -ешь, -ет, -ем, -ете, -ют. Ça marche aussi pour знать (savoir), де+лать (faire), рабо+тать (travailler).",
    words:[
     ['чита+ть','tchi-TAT’','lire','📚'],
     ['я чита+ю','ya tchi-TA-you','je lis','📖'],
     ['ты чита+ешь','ty tchi-TA-ich','tu lis','👉'],
     ['он чита+ет','on tchi-TA-it','il lit','👨'],
     ['мы чита+ем','my tchi-TA-im','nous lisons','👫'],
     ['вы чита+ете','vy tchi-TA-i-tié','vous lisez','👥'],
     ['они+ чита+ют','a-NI tchi-TA-yout','ils lisent','👨‍👩‍👧'],
     ['кни+га','KNI-ga','livre','📕'],
     ['газе+та','ga-ZIÉ-ta','journal','📰']
    ],
    phrases:[
     ['Я чита+ю кни+гу.','Je lis un livre.','ya tchi-TA-you KNI-gou'],
     ['Что ты чита+ешь?','Que lis-tu ?','chto ty tchi-TA-ich'],
     ['Он чита+ет газе+ту.','Il lit le journal.','on tchi-TA-it ga-ZIÉ-tou'],
     ['Мы чита+ем по-ру+сски.','Nous lisons en russe.','my tchi-TA-im pa-ROUS-ki']
    ]},
  { id:'faire', t:'Que fais-tu ?', em:'🛠️', s:'Travailler, faire, savoir, habiter',
    tip:"Жить (habiter) change de radical : я живу+, ты живёшь, он живёт. Et « je ne sais pas » se dit simplement « я не зна+ю ».",
    words:[
     ['рабо+тать','ra-BO-tat’','travailler','💼'],
     ['я рабо+таю','ya ra-BO-ta-you','je travaille','👷'],
     ['де+лать','DIÉ-lat’','faire','🔨'],
     ['что ты де+лаешь','chto ty DIÉ-la-ich','que fais-tu ?','❔'],
     ['знать','znat’','savoir','🧠'],
     ['я зна+ю','ya ZNA-you','je sais','💡'],
     ['жить','jit’','vivre, habiter','🏡'],
     ['я живу+','ya ji-VOU','j\'habite','🏠'],
     ['где ты живёшь','gdié ty ji-VIOCH','où habites-tu ?','🗺️']
    ],
    phrases:[
     ['Я не зна+ю.','Je ne sais pas.','ya ni ZNA-you'],
     ['Я рабо+таю сего+дня.','Je travaille aujourd\'hui.','ya ra-BO-ta-you si-VOD-nia'],
     ['Он не рабо+тает.','Il ne travaille pas.','on ni ra-BO-ta-it'],
     ['Что ты де+лаешь сейча+с?','Que fais-tu maintenant ?','chto ty DIÉ-la-ich si-TCHAS']
    ]}
 ]},
 { u:'Où ?', c:'#0D9488', lessons:[
  { id:'ou', t:'À Paris, à la maison', em:'📍', s:'Dire où l\'on est avec в et на',
    tip:"Pour dire où l'on est, on met в (dans) ou на (sur) et le nom change de fin, le plus souvent en -е : Москва+ → в Москве+. Le в se prononce « f » devant une consonne sourde : в Пари+же = « f pa-RI-ji ».",
    words:[
     ['в','v','dans, à, en','📥'],
     ['на','na','sur, à','🔝'],
     ['в Москве+','v mask-VIÉ','à Moscou','🇷🇺'],
     ['в Пари+же','f pa-RI-ji','à Paris','🗼'],
     ['до+ма','DO-ma','à la maison','🏠'],
     ['на рабо+те','na ra-BO-tié','au travail','💼'],
     ['в шко+ле','f CHKO-lié','à l\'école','🏫'],
     ['в магази+не','v ma-ga-ZI-nié','au magasin','🛒'],
     ['в Росси+и','v ra-SI-i','en Russie','❄️'],
     ['во Фра+нции','va FRAN-tsy-i','en France','🥐']
    ],
    phrases:[
     ['Я живу+ в Пари+же.','J\'habite à Paris.','ya ji-VOU f pa-RI-ji'],
     ['Он на рабо+те.','Il est au travail.','on na ra-BO-tié'],
     ['Мы до+ма.','Nous sommes à la maison.','my DO-ma'],
     ['Ма+ма в магази+не.','Maman est au magasin.','MA-ma v ma-ga-ZI-nié'],
     ['Я в шко+ле.','Je suis à l\'école.','ya f CHKO-lié']
    ]}
 ]},
 { u:'Les transports', c:'#CA8A04', lessons:[
  { id:'transports', t:'En route !', em:'🚌', s:'Bus, train, avion et billets',
    tip:"Le russe distingue aller à pied (идти+ : я иду+) et aller en véhicule (е+хать : я е+ду). Dans по+езд, le « д » final se prononce « t » : « PO-ist ».",
    words:[
     ['авто+бус','af-TO-bous','bus','🚌'],
     ['по+езд','PO-ist','train','🚆'],
     ['самолёт','sa-ma-LIOT','avion','✈️'],
     ['маши+на','ma-CHI-na','voiture','🚗'],
     ['биле+т','bi-LIÉT','billet','🎫'],
     ['аэропо+рт','a-é-ra-PORT','aéroport','🛫'],
     ['остано+вка','as-ta-NOF-ka','arrêt','🚏'],
     ['я е+ду','ya YÉ-dou','je vais (en véhicule)','🛣️'],
     ['я иду+','ya i-DOU','je vais (à pied)','🚶'],
     ['пешко+м','pich-KOM','à pied','👣']
    ],
    phrases:[
     ['Где остано+вка авто+буса?','Où est l\'arrêt de bus ?','gdié as-ta-NOF-ka af-TO-bou-sa'],
     ['Оди+н биле+т, пожа+луйста.','Un billet, s\'il vous plaît.','a-DIN bi-LIÉT, pa-JA-lous-ta'],
     ['Я е+ду на по+езде.','Je voyage en train.','ya YÉ-dou na PO-iz-dié'],
     ['Я иду+ пешко+м.','Je vais à pied.','ya i-DOU pich-KOM']
    ]}
 ]},
 { u:'La météo', c:'#0284C7', lessons:[
  { id:'meteo', t:'Quel temps fait-il ?', em:'⛅', s:'Le temps et les saisons',
    tip:"Dans со+лнце, le « л » ne se prononce pas : « SON-tsé ». Et pour la météo, pas de sujet : « Хо+лодно » veut dire « Il fait froid ».",
    words:[
     ['пого+да','pa-GO-da','le temps (météo)','🌤️'],
     ['тепло+','tip-LO','il fait bon','🌡️'],
     ['хо+лодно','KHO-lad-na','il fait froid','🥶'],
     ['жа+рко','JAR-ka','il fait chaud','🥵'],
     ['идёт дождь','i-DIOT dochtch','il pleut','🌧️'],
     ['идёт снег','i-DIOT sniék','il neige','🌨️'],
     ['со+лнце','SON-tsé','soleil','☀️'],
     ['зима+','zi-MA','hiver','⛄'],
     ['весна+','vis-NA','printemps','🌷'],
     ['ле+то','LIÉ-ta','été','🏖️'],
     ['о+сень','O-sin’','automne','🍂']
    ],
    phrases:[
     ['Сего+дня хо+лодно.','Aujourd\'hui, il fait froid.','si-VOD-nia KHO-lad-na'],
     ['Кака+я сего+дня пого+да?','Quel temps fait-il aujourd\'hui ?','ka-KA-ya si-VOD-nia pa-GO-da'],
     ['Ле+том жа+рко.','En été, il fait chaud.','LIÉ-tam JAR-ka'],
     ['Зимо+й идёт снег.','En hiver, il neige.','zi-MOÏ i-DIOT sniék']
    ]}
 ]}
];
