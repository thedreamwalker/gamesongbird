/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/birds.js":
/*!**********************!*\
  !*** ./src/birds.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const birdsData = [[{
  id: 1,
  name: 'Ворон',
  species: 'Corvus corax',
  description: 'Ворон – крупная птица. Длина тела достигает 70 сантиметров, размах крыльев – до полутора метров. Вороны населяют окрестности Тауэра. В Англии бытует поверье, что в день, когда черные вороны улетят от Тауэра, монархия рухнет.',
  image: 'https://i.ibb.co/tQP7jxk/1-1-crow.png',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/XIQVMQVUPP/XC518684-Grands%20corbeaux%2009012020%20Suzon.mp3'
}, {
  id: 2,
  name: 'Журавль',
  species: 'Grus grus',
  description: 'Звуки, издаваемые журавлем, похожи на звонкое «кур-лы – кур-лы». Журавли чаще всего поют дуэтом – одна птица начинает запев со слога «кур», а вторая подхватывает «лы». Если птица поёт одна, то она издает только звук «кур».',
  image: 'https://i.ibb.co/vZ7ztn8/1-2-grus.png',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC512582-190604_1087_Grus_tok.mp3'
}, {
  id: 3,
  name: 'Ласточка',
  species: 'Delichon urbicum',
  description: 'Для ласточек характерно негромкое щебетание. Песни ласточек не смолкают на протяжении всего лета. Исследователи различают у птиц до 6 щебечущих звуков: «вит», «ви-вит», «чивит», «чиривит» и т.п. Ласточки любят петь дуэтом.',
  image: 'https://i.ibb.co/DCK2Q18/1-3-Delichon.png',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC489247-190724_09.10h_huiszwaluw_biesbosch_amaliahoeve_roep_100%2Bex_fouragerend_gezien_%20%282%29.mp3'
}, {
  id: 4,
  name: 'Козодой',
  species: 'Caprimulgus europaeus',
  description: 'Козодой – неприметная птица, известная благодаря своему голосу. Песня козодоя звучит как монотонная трель похожая на тарахтение мотоцикла. Такое дребезжание слышно от заката до рассвета, его тональность, частота и громкость изменяются. ',
  image: 'https://i.ibb.co/27NwxJr/1-4-Caprimulgus.png',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC486956-190623_22.37h_nachtzwaluw_rechte%20heide_zang_ad%20_2ex_gezien_.mp3'
}, {
  id: 5,
  name: 'Кукушка',
  species: 'Cuculus canorus',
  description: 'Кукушку назвали так из-за особенностей ее песен. Звонкое «ку-ку» не спутать ни с какой другой птицей. Кукушки не строят гнезда, их потомство выращивают другие виды пернатых, которым кукушки подбрасывают свои яйца.',
  image: 'https://i.ibb.co/bgHNWVM/1-5-Cuculus.png',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC501461-190616_08.13h_koekoek_brabantse%20biesbosch%20jantjesplaat_roep_1%20ex_ad%20m_ter%20plaatse%20zingend_gezien_.mp3'
}, {
  id: 6,
  name: 'Синица',
  species: 'Parus major',
  description: 'В щебетании синиц различают более 40 различных звуковых сочетаний. Поют они практически круглый год, немного затихая только зимой. Синицы настоящие санитары леса. Одна пара синиц в период гнездования оберегает от вредителей десятки деревьев.',
  image: 'https://i.ibb.co/pdqdMfB/1-6-Parus.png',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/RFGQDPLDEC/XC518417-Kj%C3%B8ttmeis%20XC%20Helg%C3%B8ya%20Elias%20A.%20Ryberg20200108133922_079.mp3'
}], [{
  id: 1,
  name: 'Воробей',
  species: 'Passer domesticus',
  description: 'Воробьи являются самыми известными и узнаваемыми пернатыми. Их легко узнать по пестрому оперению и задорному чириканью. Воробьи относятся к синатропному виду — они селятся поблизости к человеческому жилищу.',
  image: 'https://i.ibb.co/D1qLdDT/2-1-Passer.png',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/CXFHOPIVAS/XC503224-191020_0134.mp3'
}, {
  id: 2,
  name: 'Грач',
  species: 'Corvus frugilegus',
  description: 'Грачи очень умные и сообразительные птицы. С помощью клюва они создают и используют простейшие орудия. У грачей развит рефлекс на звуки трактора. Услышав «тарахтение», они летят на звук – трактор пашет землю, значит, в этом месте много корма.',
  image: 'https://i.ibb.co/NmBbRw7/2-2-frugilegus.png',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/RLRHCUIPIY/XC512540-gawron%20Suble%2019.12.19%20%2012.35.mp3'
}, {
  id: 3,
  name: 'Галка',
  species: 'Coloeus monedula',
  description: 'Слово «галка» произошло из старославянского языка и переводится как «чёрный». Этим словом часто называют воронов или других черных птиц. Латинское название галки «monedula» связывают со словами монета за любовь птицы к блестящим и ярким вещам.',
  image: 'https://i.ibb.co/SdjXmy9/2-3-Coloeus.png',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC510498-Coloeus%20monedula_2019.11.13_11.55_01.mp3'
}, {
  id: 4,
  name: 'Певчий дрозд',
  species: 'Turdus philomelos',
  description: 'Дрозд — лучший певец из отряда воробьиных. Песня состоит только из красивых звучных свистов и коротких трелей. Чаще всего её можно услышать в утреннее и вечернее время. Поют дрозды в течении всего периода гнездования.',
  image: 'https://i.ibb.co/Dkvwb1G/2-4-Turdus.png',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC513326-190704_1146_TF-Glogow.mp3'
}, {
  id: 5,
  name: 'Сорока',
  species: 'Pica pica',
  description: 'Сорока очень трудолюбивая птица. Она строит до восьми гнёзд, а потом выбирает из них самое лучшее. Вход в гнездо сорок всегда обращен на юг, чтобы в жилище было теплее. Сороки являются единственными птицами, которые узнают себя в зеркале.',
  image: 'https://i.ibb.co/9pLnFVt/2-5-Pica.png',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC500868-Pica%20pica2019.08.23_09.18_02.mp3'
}, {
  id: 6,
  name: 'Сойка',
  species: 'Garrulus glandarius',
  description: 'Когда сойка волнуется, хохолок на её голове взъерошивается. Птица старается создать устрашающее зрелище. Сойки умеют имитировать голоса других птиц, животных и звуки, которые создает человек. На зиму они делают большие запасы желудей и орехов.',
  image: 'https://i.ibb.co/q7WN5Xf/2-6-Garrulus.png',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/TFOGOENSTQ/XC501517-191008_1590%201300.%20Eichelh%C3%A4her%20D%2C%20NW%2C%20LEV.%20Stephan%20Risch.mp3'
}], [{
  id: 1,
  name: 'Зяблик',
  species: 'Fringilla coelebs',
  description: 'В дикой природе насчитывается 450 видов зябликов. Зимой зяблики ведут стайный образ жизни. Иногда в их семьях можно увидеть воробьев. Запевают зяблики весной, с наступлением брачного периода. Их пение – это заливистые многоминутные рулады.',
  image: 'https://i.ibb.co/6sVN1pm/3-1-Fringilla.png',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC512407-150622_03%20zi%C4%99ba%20%282%29.mp3'
}, {
  id: 2,
  name: 'Клёст',
  species: 'Loxia curvirostra',
  description: 'Клестов называют «рождественскими» птицами. В естественных условиях они дают потомство зимой – в январе. Эти птицы утепляют свои гнезда мхом и шерстью животных, потому птенцам не холодно. В поисках шишек клесты могут улетать за 3500 км от гнезда.',
  image: 'https://i.ibb.co/RNxZvPy/3-2-Loxia.png',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/OTVUCEGYZN/XC495381-Kruisbek%20roep%20NHD%20290619.mp3'
}, {
  id: 3,
  name: 'Горлица',
  species: 'Streptopelia turtur',
  description: 'Горлица обитает в смешанных и широколиственных лесах, а также в городских парках и поселках. Птицы часто выбирают места жизни рядом с человеком и легко привыкают к людям. Благодаря мелодичному приятному пению горлиц часто разводят в домашних условиях.',
  image: 'https://i.ibb.co/MRjwmbN/3-3-Streptopelia.png',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC324106-Turkawka_Streptopelia_turtur_Poland_Jarek_Matusiak_2011625_07.mp3'
}, {
  id: 4,
  name: 'Дятел',
  species: 'Dendrocopos major',
  description: 'Дятел – заметная и шумная птица, часто живет рядом с человеком. С середины января до конца июня можно услышать «барабанную дробь» дятлов – трель от вибрации веток под быстрыми ударами клюва птицы. В хорошую погоду дробь слышна в радиусе 1,5 км.',
  image: 'https://i.ibb.co/CzcjNfp/3-4-Dendrocopos.png',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC518928-AB-017%20dzi%C4%99cio%C5%82%20du%C5%BCy%20agresja%20%282%29.mp3'
}, {
  id: 5,
  name: 'Удод',
  species: 'Upupa epops',
  description: 'Удоды предпочитают жить на открытых ландшафтах с отдельными деревьями или рощами. Наиболее удобными для птицы являются лесостепь и саванна. Удод может выбирать места жительства рядом с человеком: пастбища, виноградники, фруктовые сады.',
  image: 'https://i.ibb.co/bFsj6BY/3-5-Upupa.png',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC477326-dudek%20%282%29.mp3'
}, {
  id: 6,
  name: 'Стриж',
  species: 'Apus apus',
  description: 'Стрижа можно увидеть практически в каждом уголке планеты. Они обитают как в лесных зонах, так и на открытых местностях. Живут стрижи крупными стаями. Большие колонии этих птиц можно увидеть в городах или на прибрежных скалах.',
  image: 'https://i.ibb.co/zQ5NyRM/3-6-Apus.png',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/TMUAWSDHDJ/XC511871-G.mp3'
}], [{
  id: 1,
  name: 'Жаворонок',
  species: 'Alauda arvensis',
  description: 'Жаворонки — перелетные птицы. С начала сентября они отлетают на юг. Возвращаются они в начале марта, независимо от того, сошел снег или нет. По прилету жаворонков определяли наступление весны и пору, когда пора пахать землю.',
  image: 'https://i.ibb.co/bK6kN1Z/4-1-Alauda.png',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC462158-Skowronek_Alauda_arvensis_Poland_Jarek_Matusiak_%20-006%20skowronek%20%282%29.mp3'
}, {
  id: 2,
  name: 'Соловей',
  species: 'Luscinia luscinia',
  description: 'Соловьи поют с начала мая и до конца лета. Каждая песня соловья состоит из 12 повторяющихся элементов, которые еще называют коленами. Кроме собственных трелей, соловьи легко и хорошо перенимают пение других птиц.',
  image: 'https://i.ibb.co/940Qw5K/4-2-Luscinia.png',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/HILVWSADVL/XC513809-R07_0052%20Thrush%20Nightingale%20Snipe.mp3'
}, {
  id: 3,
  name: 'Скворец',
  species: 'Sturnus vulgaris',
  description: 'Скворцы - перелётные птицы. Синхронный перелет больших стай скворцов называется мурмурацией. Это красивое и завораживающее явление – множество птиц будто танцуют в воздухе, образуя замысловатые фигуры, которые уменьшаются и увеличиваются в небе.',
  image: 'https://i.ibb.co/Smntshj/4-3-Sturnus.png',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC515519-2020.01.01_17.24_01.MP3'
}, {
  id: 4,
  name: 'Иволга',
  species: 'Oriolus oriolus',
  description: 'Мелодичность голоса иволги сравнивают со звучанием флейты. Человеку сложно разглядеть иволгу, так как она обитает высоко на деревьях. Иволга не только очень красивая, но и  полезная птица. Она уничтожает ядовитых гусениц, которых не поедают другие птицы.',
  image: 'https://i.ibb.co/s6zBxNP/4-4-Oriolus.png',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC491801-2019.07.07_06.28_01.mp3'
}, {
  id: 5,
  name: 'Свиристель',
  species: 'Bombycilla garrulus',
  description: 'У свиристели очень цепкие коготки, что помогает птице удерживаться на ветках и склевывать ягоды, которые труднее всего достать. В период ухаживаний самец предлагает самке ягоду или другое угощение. Если самка его принимает, то птицы создают пару.',
  image: 'https://i.ibb.co/QfvhHSt/4-5-Bombycilla.png',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC517421-AB-004%20%282%29%20jemio%C5%82uszka.mp3'
}, {
  id: 6,
  name: 'Щегол',
  species: 'Carduelis carduelis',
  description: 'Щеглы поют красиво и мелодично. И в природе, и в неволе они щебечут почти круглый год. В пении щегла различают более 20 переливчатых трелей. Щеглы привыкают к людям, и даже могут возвратиться к хозяину после того, как их выпустили на волю',
  image: 'https://i.ibb.co/Z8NJ3jL/4-6-Carduelis.png',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC489265-190724_07.58h_putter_biesbosch_%20boompjes%20langs%20open%20water_zang_1ex_ad_niet%20gezien_.mp3'
}], [{
  id: 1,
  name: 'Орёл',
  species: 'Aquila nipalensis',
  description: 'В древние времена орел был символом солнца. Орлы часто парят над землей, при этом скорость их перемещения может достигать 240 км/ч. Иллюзия медленного движения происходит из-за высоты полета – более 700 метров',
  image: 'https://i.ibb.co/1Ttq178/5-1-Aquila.png',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/KTBTZAHSXF/10_Aquila_nipalensis_al02D85.mp3'
}, {
  id: 2,
  name: 'Коршун',
  species: 'Milvus migrans',
  description: 'Коршуны – крупные хищники, в высоту они достигают около полуметра, а вес взрослых особей достигает 1 кг. Крылья узкие и длинные, их размах составляет 1,5 м. Коршуны часто гнездятся большими стаями и даже образуют крупные колонии.',
  image: 'https://i.ibb.co/rmsG1G7/5-2-Milvus.png',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC485740-2019-06-22%20Selenga%20Milan%20brun%20cris%20de%20quemandage%203.mp3'
}, {
  id: 3,
  name: 'Лунь',
  species: 'Circus cyaneus',
  description: 'Лунь – это небольшой сокол. Питается в основном мышевидными грызунами, основа его рациона – полёвки, хомяки, мыши. Оперение луня может быть пепельно-серым. С такой птицей связано сравнение «седой, как лунь».',
  image: 'https://i.ibb.co/Mp11p2X/5-3-Circus.png',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC513498-190709_1175_Cir.cyan-f.mp3'
}, {
  id: 4,
  name: 'Сокол',
  species: 'Falco peregrinus',
  description: 'Латинское название сокола Falco произошло от слова «серп» из-за серповидной формы крыльев. Длинные и широкие крылья позволяют соколу высоко подниматься в небо и свободно парить. Скорость полёта сокола достигает 280-320 километров в час.',
  image: 'https://i.ibb.co/SQcc3Bv/5-4-Falco.png',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC496049-Pilgrimsfalk_06.mp3'
}, {
  id: 5,
  name: 'Ястреб',
  species: 'Accipiter gentilis',
  description: 'Для всех ястребов характерны широкие и короткие крылья. Ещё один отличительный признак - белые «брови» над глазами. Славянские дружинники размещали изображение ястреба на своих знаменах, как символ отваги, мощи и безжалостности к врагам.',
  image: 'https://i.ibb.co/s6FnbdS/5-5-Accipiter.png',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC512740-Duvh%C3%B6k_09.mp3'
}, {
  id: 6,
  name: 'Филин',
  species: 'Bubo bubo',
  description: 'Полет филина бесшумный, зрение очень острое. Эти особенности делают птицу непревзойденным ночным охотником. У филина нет естественных врагов, ни один зверь не охотится на взрослых птиц. А вот на птенцов нападают лисы и волки.',
  image: 'https://i.ibb.co/Gvhp5Sn/5-6-Bubo.png',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/WNLIDKJKXT/XC518386-sense%20t%C3%ADtol.mp3'
}], [{
  id: 1,
  name: 'Альбатрос',
  species: 'Diomedea exulans',
  description: 'Альбатрос - самая крупная летающая птица в мире. Размах крыльев достигает три с половиной, вес - десять килограммов. Большую часть жизни альбатросы проводят в воздухе, покрывая над океанскими просторами огромные расстояния',
  image: 'https://i.ibb.co/rxgFMmM/6-1-Diomedea.png',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/WOEAFQRMUD/XC293087-Diomedea%20exulans151120_T254.mp3'
}, {
  id: 2,
  name: 'Олуша',
  species: 'Sula nebouxii',
  description: 'Особенностью голубоногой олуши является не только насыщенный ярко-синий цвет лапок, но еще и тот факт, что они очень теплые. В то время как другие виды птиц греют кладки своим телом, голубоногая олуша делает это с помощью лапок',
  image: 'https://i.ibb.co/S0FgzRZ/6-2-Sula.png',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/YHKQPPJDVP/XC411507-171217_1491%20BF%20Booby%205ft%20IDLP%201230%20mp3%20amp.mp3'
}, {
  id: 3,
  name: 'Буревестник',
  species: 'Puffinus griseus',
  description: 'Размеры буревестниковых разные. Самые маленькие из них в длину составляют до 25 см, самые большие - до 1 м, при размахе крыльев около 2 м. Существует поверье, что появление буревестника в воздухе предвещает бурю, о чем говорит само название птицы.',
  image: 'https://i.ibb.co/NY5r844/6-3-Puffinus.png',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/XQEVNREHJY/SHEARWATER%20Christmas%20Island_04_Motu_Isla%20de%20Pascua-Easter%20Island_CH_4MAR03_Alvaro%20Jaramillo.mp3'
}, {
  id: 4,
  name: 'Пеликан',
  species: 'Pelecanus',
  description: 'Пеликаны — обитатели морей и рек. Ходят они неуклюже, но хорошо летают и плавают. Питаются в основном рыбой, устраивают коллективные охоты — выстроившись полукругом хлопают по воде крыльями и клювами и вытесняют напуганную рыбу на мелководье.',
  image: 'https://i.ibb.co/Srfdrvq/6-4-Pelecanus.png',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/XAMHIHFTZG/XC331138-call1.mp3'
}, {
  id: 5,
  name: 'Пингвин',
  species: 'Aptenodytes forsteri',
  description: 'Самец императорского пингвина достигает роста 130 см, его масса может приближаться к 50 кг. Из всех современных пингвинов этот вид – самый крупный. Питание пингвина состоит из рыбы, кальмаров и криля. Охотятся птицы в океане большими группами.',
  image: 'https://i.ibb.co/H43MwGv/6-5-Aptenodytes.png',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/OOECIWCSWV/XC449827-LS100829%20King%20Penguin%20call%20A.mp3'
}, {
  id: 6,
  name: 'Чайка',
  species: 'Larus argentatus',
  description: 'Чайки населяют берега морей, озёр, рек, водохранилищ, болот, часто гнездятся на островах. С конца прошлого века чайки стали появляться в крупных городах, где устраивает гнёзда на крышах зданий. Все чайки ведут колониальный образ жизни.',
  image: 'https://i.ibb.co/WVWWL7p/6-6-Larus.png',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC501190-190801_06.50h_zilvermeeuw_duinen%20van%20goeree_roep_2ex_overvliegend_gezien_.mp3'
}]];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (birdsData);

/***/ }),

/***/ "./src/pages.js":
/*!**********************!*\
  !*** ./src/pages.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildFooter": () => (/* binding */ buildFooter),
/* harmony export */   "buildHeader": () => (/* binding */ buildHeader),
/* harmony export */   "buildMainPage": () => (/* binding */ buildMainPage)
/* harmony export */ });
/* harmony import */ var _songbird__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./songbird */ "./src/songbird.js");
/* harmony import */ var _birds__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./birds */ "./src/birds.js");


const body = document.querySelector('body');
let theme = 'light';
class LinkHeader {
  constructor(parent, page, link, text) {
    this.parent = parent;
    this.page = page;
    this.link = link;
    this.text = text;
  }
  render() {
    const li = document.createElement('li');
    const link = document.createElement('button');
    link.classList.add('header__link');
    link.innerHTML = `${this.text}`;
    if (this.page !== this.link) {
      if (this.link === 'main') {
        link.addEventListener('click', buildMainPage);
      }
      if (this.link === 'victorine') {
        link.addEventListener('click', _songbird__WEBPACK_IMPORTED_MODULE_0__.buildVictorinePage);
      }
      if (this.link === 'gallery') {
        link.addEventListener('click', buildGalleryPage);
      }
    } else {
      link.classList.add('header__link', 'active');
    }
    li.append(link);
    this.parent.append(li);
  }
}

/* HEADER */

const changeTheme = () => {
  if (body.classList.contains('theme_dark')) {
    body.classList.remove('theme_dark');
    theme = 'light';
  } else {
    body.classList.add('theme_dark');
    theme = 'dark';
  }
};
const buildHeader = (parent, page, score) => {
  const header = document.createElement('header');
  header.classList.add('header');
  header.innerHTML = `
    <div class="header__logo">
      <img src="../src/assets/svg/logo.svg">
    </div>`;
  const menu = document.createElement('div');
  menu.classList.add('header__menu');
  const nav = document.createElement('nav');
  menu.append(nav);
  const ul = document.createElement('ul');
  nav.append(ul);
  new LinkHeader(ul, page, 'main', 'Главная').render();
  new LinkHeader(ul, page, 'victorine', 'Викторина').render();
  new LinkHeader(ul, page, 'gallery', 'Галерея').render();
  if (score === 0 || score > 0) {
    const scoreContainer = document.createElement('div');
    scoreContainer.classList.add('header__score');
    scoreContainer.innerHTML = `Счет: <span>${score}</span>`;
    menu.append(scoreContainer);
  }
  const theme = document.createElement('button');
  menu.append(theme);
  theme.classList.add('header__theme');
  theme.addEventListener('click', changeTheme);
  header.append(menu);
  parent.append(header);
};

/* FOOTER */

const buildFooter = parent => {
  const footer = document.createElement('footer');
  footer.classList.add('footer');
  footer.innerHTML = `
  <div class="footer__git"><a href="https://github.com/thedreamwalker">github</a></div>
  <p>© 2022</p>
  <div class="footer__rss"><img src="../src/assets/svg/rs_school_js.svg"></div>`;
  parent.append(footer);
};

/* BUILD MAIN */

const buildMainPage = () => {
  body.innerHTML = '';
  const container = document.createElement('div');
  container.classList.add('container');
  body.append(container);
  buildHeader(container, 'main');
  const main = document.createElement('main');
  main.classList.add('main');
  const section = document.createElement('section');
  section.classList.add('main__start');
  main.append(section);
  const img = document.createElement('div');
  img.classList.add('main__img');
  img.innerHTML = '<img src="../src/assets/img/deafaltbird.png">';
  section.append(img);
  const button = document.createElement('button');
  button.classList.add('button', 'button_start');
  button.innerHTML = 'Начать игру';
  button.addEventListener('click', _songbird__WEBPACK_IMPORTED_MODULE_0__.buildVictorinePage);
  section.append(button);
  container.append(main);
  buildFooter(container);
};

/* BUILD GALLERY */

const buildGalleryPage = () => {
  body.innerHTML = '';
  const container = document.createElement('div');
  container.classList.add('container');
  body.append(container);
  buildHeader(container, 'gallery');
  const main = document.createElement('main');
  main.classList.add('main');
  const section = document.createElement('section');
  section.classList.add('main__gallery');
  main.append(section);
  for (let i = 0; i < _birds__WEBPACK_IMPORTED_MODULE_1__["default"].length; i++) {
    for (let j = 0; j < _birds__WEBPACK_IMPORTED_MODULE_1__["default"][i].length; j++) {
      const div = document.createElement('div');
      section.append(div);
      div.classList.add('gallery__item');
      new _songbird__WEBPACK_IMPORTED_MODULE_0__.Item(_birds__WEBPACK_IMPORTED_MODULE_1__["default"][i][j].name, _birds__WEBPACK_IMPORTED_MODULE_1__["default"][i], div).render();
    }
  }
  container.append(main);
  buildFooter(container);
};
const setTheme = color => {
  if (color === 'dark') {
    body.classList.add('theme_dark');
  }
};
function setLocalStorage() {
  localStorage.setItem('theme', theme);
}
function getLocalStorage() {
  if (localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme');
    setTheme(theme);
  }
}
const setHeadData = scr => {
  const headTitle = document.querySelector('head');
  const favicon = document.createElement('link');
  favicon.setAttribute('rel', 'shortcut icon');
  favicon.setAttribute('href', scr);
  headTitle.appendChild(favicon);
  const title = document.querySelector('title');
  title.innerHTML = 'songbird game';
};
setHeadData('../src/assets/fav.ico');
buildMainPage();
console.log('Все требования тз выполнены, в качестве дополнительного функционала реализована галерея и смена темы с сохранением в ');
window.addEventListener('beforeunload', setLocalStorage);
window.addEventListener('load', getLocalStorage);


/***/ }),

/***/ "./src/songbird.js":
/*!*************************!*\
  !*** ./src/songbird.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Item": () => (/* binding */ Item),
/* harmony export */   "buildVictorinePage": () => (/* binding */ buildVictorinePage)
/* harmony export */ });
/* harmony import */ var _birds__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./birds */ "./src/birds.js");
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages */ "./src/pages.js");


const body = document.querySelector('body');
let allQuestion = [];
let currentQuestion = 0;
let currentAnswer = 0;
let score = 0;
let points = 5;
const audioWrong = new Audio('../src/assets/wrong.mp3');
const audioRight = new Audio('../src/assets/right.mp3');
let currentAudio;
class Question {
  constructor(array, audio, parent) {
    this.array = array;
    this.audio = audio;
    this.parent = parent;
  }
  async render() {
    const question = document.createElement('div');
    question.classList.add('question');
    question.innerHTML += `
    <div class="question__title">
      <p>Кто это?</p>
      <p class="question__name">***</p>
    </div>
    <div class="question__img">
          <img src="../src/assets/img/deafaltbird.png">
    </div>`;
    this.parent.append(question);
    new Player(this.audio, question).render('Question');
    const answers = document.createElement('div');
    answers.classList.add('answers');
    answers.addEventListener('click', checkAnswer);
    this.array.forEach(answer => {
      const button = document.createElement('button');
      button.classList.add('button', 'answers__item');
      button.innerHTML = `${answer.name}`;
      answers.append(button);
    });
    this.parent.append(answers);
  }
}
class Item {
  constructor(selected, array, parent) {
    this.selected = selected;
    this.array = array;
    this.parent = parent;
  }
  render() {
    this.array.forEach(async bird => {
      if (bird.name === this.selected) {
        this.parent.innerHTML = '';
        const main = document.createElement('div');
        main.classList.add('item__main');
        main.innerHTML = `
          <div class="item__img">
            <img src="${bird.image}">
          </div>`;
        const text = document.createElement('div');
        text.classList.add('item__text');
        text.innerHTML = await `<p>${bird.description}</p>`;
        this.parent.append(main);
        this.parent.append(text);
        const info = document.createElement('div');
        info.classList.add('item__info');
        info.innerHTML = `<h2 class="item__name">${bird.name} | ${bird.species}</h2>`;
        const player = document.createElement('div');
        player.classList.add('player');
        new Player(bird.audio, player).render();
        info.append(player);
        main.prepend(info);
      }
    });
  }
}
class Player {
  constructor(url, parent) {
    this.url = url;
    this.parent = parent;
  }
  async render(question) {
    const audio = await new Audio(this.url);
    if (this.parent.classList.contains('question')) {
      currentAudio = audio;
    }
    audio.volume = 0.75;
    this.parent.append(audio);
    const div = document.createElement('div');
    if (question) {
      div.classList.add('player');
      div.innerHTML = `
      <audio class="player__audio" preload='metadata'
        src="${this.url}" type="audio/mpeg"></audio>
      <div class="player__progress">
        <div class="player__progressbar"><button class="player__progress-toggle" aria-label="Текущее время"></button></div>
      </div>
      <div class="player__time">
        <div class="player__time_current">0:00</div>
        <div class="player__time_duration"></div>
      </div>
      <button class="control__volume"><img src="../src/assets/svg/volume.svg" alt="Регулировка громкости">
        <div class="control__volume_progress">
          <div class="control__volume_progressbar"></div>
        </div>
      </button>`;
    } else {
      div.classList.add('player__wrapper');
      div.innerHTML = `
      <div class="player__track">
        <div class="player__progress">
          <div class="player__progressbar"><button class="player__progress-toggle" aria-label="Текущее время"></button></div>
        </div>
        <div class="player__time">
          <div class="player__time_current">0:00</div>
          <div class="player__time_duration"></div>
        </div>
        <button class="control__volume"><img src="../src/assets/svg/volume.svg" alt="Регулировка громкости">
        <div class="control__volume_progress">
          <div class="control__volume_progressbar"></div>
        </div>
        </button>
      </div>`;
    }
    this.parent.append(div);
    const audioButton = document.createElement('button');
    audioButton.classList.add('control__switcher', 'control__switcher_play');
    audioButton.addEventListener('click', event => {
      playAudio(event, audio, div);
    });
    div.prepend(audioButton);

    // change volume
    div.querySelector('.control__volume_progress').addEventListener('click', e => {
      const sliderWidth = window.getComputedStyle(div.querySelector('.control__volume_progress')).width;
      const newVolume = e.offsetX / parseInt(sliderWidth);
      audio.volume = newVolume;
      div.querySelector('.control__volume_progressbar').style.width = `${newVolume * 100}%`;
    }, false);

    // set duration
    audio.onloadedmetadata = () => {
      div.querySelector('.player__time_duration').innerHTML = formatTime(audio.duration);
    };

    // change timeline
    const timeline = div.querySelector('.player__progress');
    timeline.addEventListener('click', e => {
      const timelineWidth = window.getComputedStyle(timeline).width;
      const timeToSeek = e.offsetX / parseInt(timelineWidth) * audio.duration;
      audio.currentTime = timeToSeek;
      div.querySelector('.player__time_current').textContent = formatTime(audio.currentTime);
      div.querySelector('.player__progressbar').style.width = `${audio.currentTime / audio.duration * 100}%`;
    }, false);
  }
}

/* BUILD VICTORINE */

function buildVictorinePage() {
  currentQuestion = 0;
  score = 0;
  points = 5;
  body.innerHTML = '';
  const container = document.createElement('div');
  container.classList.add('container');
  body.append(container);
  (0,_pages__WEBPACK_IMPORTED_MODULE_1__.buildHeader)(container, 'victorine', score);
  const main = document.createElement('main');
  main.classList.add('main');
  main.innerHTML = `
  <section class="game__fied">
  <div class="stage">
      <ul class="stage__list"></ul>
    </div>
    <div class="game__wrapper">
      <div class="question">
        <div class="question__title">
          <p>Кто это?</p>
          <p class="question__name">???</p>
        </div>
        <div class="question__img">
          <img>
        </div>
        <div class="question__info">
          <audio class="player__audio"></audio>
        </div>
      </div>
      <div class="answers">
        <button class="button answers__item"></button>
        <button class="button answers__item"></button>
        <button class="button answers__item"></button>
        <button class="button answers__item"></button>
        <button class="button answers__item"></button>
        <button class="button answers__item"></button>
      </div>
    </div>
    <div class="item">
      Прослушайте запись и выберете птицу
    </div>
  </section>
  <button class="button button_next disabled">Далее</button>`;
  container.append(main);
  for (let i = 0; i < _birds__WEBPACK_IMPORTED_MODULE_0__["default"].length; i++) {
    document.querySelector('.stage__list').innerHTML += `<li class="stage__item">${i + 1}</li>`;
  }
  (0,_pages__WEBPACK_IMPORTED_MODULE_1__.buildFooter)(container);
  setGame();
  setQuestion();
}

/* BUILD RESULTE */

const buildResultePage = () => {
  let description;
  if (score >= 30) {
    description = 'Вот это результат, так вообще возможно?';
  } else if (score > 20) {
    description = 'Отличный результат, в птицах ты разбираешься!';
  } else {
    description = 'Неплохо, но ты точно можешь лучше :)';
  }
  const resulte = document.createElement('section');
  resulte.classList.add('game__resulte');
  resulte.innerHTML = `
  <h2>Поздравляем!</h2>
    <h3>Ваш счет: ${score}</h3>
    <p>${description}</p>
  `;
  const buttons = document.createElement('div');
  buttons.classList.add('game__buttons');
  resulte.append(buttons);
  const buttonMain = document.createElement('button');
  buttonMain.classList.add('button', 'button_next');
  buttonMain.innerHTML = 'На главную';
  buttonMain.addEventListener('click', _pages__WEBPACK_IMPORTED_MODULE_1__.buildMainPage);
  buttons.append(buttonMain);
  const buttonVictorine = document.createElement('button');
  buttonVictorine.classList.add('button', 'button_next');
  buttonVictorine.innerHTML = 'Начать заново';
  buttonVictorine.addEventListener('click', buildVictorinePage);
  buttons.append(buttonVictorine);
  document.querySelector('.main').innerHTML = '';
  document.querySelector('.main').append(resulte);
};
const setGame = () => {
  const array = [];
  for (let i = 0; i < _birds__WEBPACK_IMPORTED_MODULE_0__["default"].length; i++) {
    array.push(i);
  }
  const shuffle = array => {
    const newArray = array;
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };
  allQuestion = shuffle(array);
};
const setQuestion = () => {
  const stages = document.querySelectorAll('.stage__item');
  stages.forEach(stage => {
    stage.classList.remove('active');
  });
  stages[currentQuestion].classList.add('active');
  const buttonNext = document.querySelector('.button_next');
  buttonNext.classList.add('disabled');
  buttonNext.removeEventListener('click', changeQuestion);
  const gameWrapper = document.querySelector('.game__wrapper');
  gameWrapper.innerHTML = '';
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  currentAnswer = getRandomInt(allQuestion.length);
  new Question(_birds__WEBPACK_IMPORTED_MODULE_0__["default"][currentQuestion], _birds__WEBPACK_IMPORTED_MODULE_0__["default"][currentQuestion][currentAnswer].audio, gameWrapper).render();
};
const checkAnswer = event => {
  if (event.target.closest('.answers__item')) {
    new Item(event.target.innerHTML, _birds__WEBPACK_IMPORTED_MODULE_0__["default"][currentQuestion], document.querySelector('.item')).render();
    if (event.target.innerHTML !== _birds__WEBPACK_IMPORTED_MODULE_0__["default"][currentQuestion][currentAnswer].name && document.querySelector('.question__name').innerHTML === '***') {
      if (!event.target.classList.contains('wrong')) {
        audioWrong.play();
      }
      event.target.closest('.answers__item').classList.add('wrong');
    }
    if (event.target.innerHTML !== _birds__WEBPACK_IMPORTED_MODULE_0__["default"][currentQuestion][currentAnswer].name && points > 0 && document.querySelector('.question__name').innerHTML === '***') {
      points -= 1;
      document.querySelector('.header__score span').innerHTML = score;
    }
  }
  if (event.target.closest('.answers__item') && event.target.innerHTML === _birds__WEBPACK_IMPORTED_MODULE_0__["default"][currentQuestion][currentAnswer].name && document.querySelector('.question__name').innerHTML === '***') {
    document.querySelector('.question__name').innerHTML = `${_birds__WEBPACK_IMPORTED_MODULE_0__["default"][currentQuestion][currentAnswer].name} [${_birds__WEBPACK_IMPORTED_MODULE_0__["default"][currentQuestion][currentAnswer].species}]`;
    document.querySelector('.question__img').innerHTML = `<img src="${_birds__WEBPACK_IMPORTED_MODULE_0__["default"][currentQuestion][currentAnswer].image}">`;
    audioRight.play();
    event.target.classList.add('right');
    score += points;
    document.querySelector('.header__score span').innerHTML = score;
    currentAudio.pause();
    const buttonNext = document.querySelector('.button_next');
    buttonNext.classList.remove('disabled');
    buttonNext.addEventListener('click', changeQuestion);
    event.target.closest('.answers__item').classList.add('right');
  }
};
const playAudio = async (event, audio, div) => {
  if (event.target.classList.contains('control__switcher_pause')) {
    await audio.pause();
    event.target.classList.remove('control__switcher_pause');
  } else {
    await audio.play();
    event.target.classList.add('control__switcher_pause');
    audio.addEventListener('timeupdate', event => {
      updateProgress(event, audio, div);
    });
  }
};
const updateProgress = async (event, audio, div) => {
  const progress = await div.querySelector('.player__progressbar');
  const currentTime = await div.querySelector('.player__time_current');
  const current = event.target.currentTime;
  const percent = current / event.target.duration * 100;
  progress.style.width = `${percent}%`;
  currentTime.textContent = formatTime(current);
  if (current === audio.duration) {
    await audio.pause();
    div.querySelector('.control__switcher').classList.remove('control__switcher_pause');
  }
};
const formatTime = time => {
  const min = Math.floor(time / 60);
  const sec = Math.floor(time % 60);
  return `${min}:${sec < 10 ? `0${sec}` : sec}`;
};
const changeQuestion = () => {
  if (currentQuestion === allQuestion.length - 1) {
    buildResultePage();
  } else {
    currentQuestion += 1;
    points = 5;
    document.querySelector('.item').innerHTML = 'Прослушайте запись и выберете птицу';
    setQuestion();
  }
};


/***/ }),

/***/ "./src/css/normalize.css":
/*!*******************************!*\
  !*** ./src/css/normalize.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/css/style.scss":
/*!****************************!*\
  !*** ./src/css/style.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_normalize_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/normalize.css */ "./src/css/normalize.css");
/* harmony import */ var _css_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/style.scss */ "./src/css/style.scss");
/* harmony import */ var _songbird_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./songbird.js */ "./src/songbird.js");
/* harmony import */ var _pages_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages.js */ "./src/pages.js");




})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map