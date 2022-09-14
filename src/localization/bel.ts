import {localizationPackType} from './localizationTypes';

const bel: localizationPackType = {
  lang_title: 'Беларуская мова',
  send: 'Адправіць',
  contacts: 'кантакты',
  chats: 'Чаты',
  profile_settings: 'Налады профілю',
  age: 'ўзрост',
  announcement_text: 'Тэкст анкеты',
  aply_filters: 'Ужыць фільтры',
  city: 'горад',
  country: 'краіна',
  edit: 'рэдагаваць',
  enter_your_message: 'Увядзіце паведамленне',
  filters: 'фільтры',
  gender: 'ваш пол',
  items_not_found: 'Нічога не знойдзена',
  likes: 'лайки',
  location: 'Размяшчэнне',
  matches: 'Супадзенне',
  me_liked: 'Mеня лайкнули',
  my_likes: 'Мае лайки',
  preview: 'Папярэдні прагляд',
  region: 'вобл',
  search: 'пошук',
  send_your_message: 'Адпраўце паведамленне',
  something_went_wrong: 'нешта пайшло не так',
  write_few_words_about_yourself: 'Напішыце невялікае апавяданне пра сябе',
  write_your_message: 'Тэкст паведамлення',
  your_announcement: 'Ваша анкета',
  your_chats: 'Вашы чаты',
  servers_are_not_allowed: 'Серверы недаступныя або няма падключэння да Інтэрнэту.',
  moderation_request_pending: 'Ваш запыт на мадэрацыю чакае зацвярджэння',
  profile_not_moderated:
    'Профіль не правераны. Ваш аватар не прайшоў праверку, калі ласка, заменіце свой аватар для паўторнай праверкі',
  please_request_moderation: 'Амаль гатова! Дадайце свой аватар, каб запытаць мадэрацыю профілю',
  help: 'дапамагчы',
  requests: 'запыты',
  authorization: 'Аўтарызацыя',
  or: 'або',
  enter_your_email: 'Увядзіце свой email',
  enter_your_password: 'Увядзіце свой пароль',
  create_new_account: 'Стварыце новы ўліковы запіс',
  login: 'Увайсці',
  chose_city: 'Выберыце горад',
  chose_country: 'Выберыце краіну',
  chose_region: 'Выберыце рэгіён',
  date_of_birth: 'Дата нараджэння',
  enter_your_name: 'Увядзіце імя',
  repeat_your_password: 'Паўтарыце пароль',
  sign_up: 'Зарэгістравацца!',
  feedback: 'Зносіны з распрацоўшчыкам',
  month: [
    'Студзень',
    'Люты',
    'Сакавік',
    'Красавік',
    'Мая',
    'Чэрвень',
    'Ліпень',
    'Жнівень',
    'Верасень',
    'Кастрычніка',
    'Лістапад',
    'Снежань',
  ],
  selectLanguage: 'Выберыце сваю мову',
  languageWarning: 'Змены ўступяць у сілу пасля перазапуску',
  send_message: 'Пішыце',
  like: 'Лайк',
  block_user: 'Блок',
  unblock_user: 'Разблакіраваць',
  report_user: 'Скардзіцца',
  send_report: 'Адправіць скаргу',
  add_comment_to_report: 'Дадаць каментар да скаргі',
  must_be_at_least: (chars: number) => {
    return `Павінна быць мінімум ${chars} сімвалаў`;
  },
  warning: 'ПАПЯРЭДЖАННЕ',
  your_report_successfully_sended: 'Ваша скарга была паспяхова адпраўлена',
  you_are_banned: 'Ваш профіль заблакіраваны за парушэнне правілаў супольнасці',
  privacy_rules: 'Прыватнасць',
  terms_of_use_title: 'Правілы карыстання',
  terms_of_use: `Pravyla spilʹnoty Laskavo prosymo do spilʹnoty Dater. Yakshcho ty chesnyy, dobryy i shanoblyvyy do inshykh, tobi tut zavzhdy radi. Yakshcho vy vyrishyte ne buty, vy mozhete ne vytrymaty. Nasha meta — dozvolyty korystuvacham vilʹno vyslovlyuvatysʹ, yakshcho tse ne obrazhaye inshykh. Na Dater usi dotrymuyutʹsya odnakovykh standartiv. My prosymo vas buty uvazhnymy, dumaty, persh nizh diyaty, i dotrymuvatysya nashykh pravyl spilʹnoty yak u merezhi, tak i poza neyu. Vy pravylʹno pochuly: vasha povedinka oflayn mozhe pryzvesty do prypynennya diyi vashoho oblikovoho zapysu Dater. Nyzhche navedeno spysok nashykh polityk spilʹnoty. Yakshcho vy porushyte budʹ-yaku z tsykh polityk, vas mozhutʹ zabanyty v Dater. Seryozno, ne zmushuyte nas hortaty livoruch vid vas, tomu shcho pislya tsʹoho my ne budemo robyty zhodnykh zmin. My zaokhochuyemo vas povidomlyaty pro budʹ-yaku povedinku, yaka porushuye nashu polityku. Dater ne dlya: Nahota/seksualʹnyy vmist My ne prosymo vas zachisuvaty volossya nabik abo navitʹ hovoryty povnymy rechennyamy; ale, budʹ laska, zrobitʹ tse stylʹnym i vidpovidnym dlya publichnoho spozhyvannya. Niyakoho oholenoho tila, vidvertoho seksualʹnoho vmistu ta ne zapysuyte vsi svoyi seksualʹni bazhannya u svoyiy biohrafiyi. Trymayte yoho v chystoti. Peresliduvannya Ne zaluchayte ta ne zaokhochuyte inshykh do uchasti v budʹ-yakomu tsilespryamovanomu obrazi chy peresliduvanni budʹ-yakoho inshoho korystuvacha. Tse vklyuchaye nadsylannya budʹ-yakoho nebazhanoho kontentu seksualʹnoho kharakteru vashym partneram. Povidomlennya pro peresliduvannya, pohrozy, znushchannya chy zalyakuvannya spryymayutʹsya duzhe seryozno. Nasylʹstvo ta fizychni ushkodzhennya My ne dopuskayemo nasylʹnytsʹkoho, vidrazlyvoho chy kryvavoho vmistu na Dater, a takozh budʹ-yakykh diy chy vmistu, yaki propahuyutʹ abo pohrozhuyutʹ budʹ-yakym vydom nasylʹstva, vklyuchayuchy pohrozy chy spryyannya teroryzmu. Fizychni napady, prymus ta budʹ-yaki akty nasylʹstva suvoro zaboroneni. Vmist, yakyy propahuye abo proslavlyaye samohubstvo chy samoushkodzhennya, takozh zaboroneno. U takykh sytuatsiyakh my mozhemo vzhyty nyzku zakhodiv, shchob dopomohty korystuvachevi, zokrema zvernutysya za dopomohoyu do kryzovykh resursiv. Mova vorozhnechi Budʹ-yakyy vmist, yakyy propahuye, propahuye abo vypravdovuye rasyzm, fanatyzm, nenavystʹ abo nasylʹstvo proty okremykh osib abo hrup na osnovi (ale ne obmezhuyuchysʹ nymy) rasy, etnichnoho pokhodzhennya, relihiynoyi prynalezhnosti, invalidnosti, stati, viku, natsionalʹnoho pokhodzhennya, seksualʹnoyi oriyentatsiyi , abo henderna identychnistʹ ne dopuskayetʹsya.
Показати більше
2 463 / 5 000
Результати перекладу
Правілы супольнасці
    Сардэчна запрашаем у суполку Dater. Калі вы сумленныя, добрыя і паважлівыя да іншых, вам тут заўсёды рады. Калі вы вырашыце не быць, вы можаце не пратрымацца. Наша мэта - дазволіць карыстальнікам свабодна выказвацца, пакуль гэта не абражае іншых. На Dater усе прытрымліваюцца аднолькавых стандартаў. Мы просім вас быць уважлівымі, думаць, перш чым дзейнічаць, і прытрымлівацца нашых рэкамендацый супольнасці як онлайн, так і па-за сеткай. Вы правільна пачулі: вашы паводзіны ў аўтаномным рэжыме могуць прывесці да прыпынення вашага ўліковага запісу Dater.
    Ніжэй прыведзены спіс нашай палітыкі супольнасці. Калі вы парушаеце любую з гэтых палітык, вы можаце быць забанены ў Dater. Сур'ёзна, не прымушайце нас праводзіць па вас пальцам улева, таму што пасля гэтага мы не будзем уносіць ніякіх змен. Мы рэкамендуем вам паведамляць аб любых паводзінах, якія парушаюць нашу палітыку.
    Dater не для:

    Галізна/сэксуальны кантэнт

    Мы не просім вас расчэсваць валасы набок і нават гаварыць поўнымі сказамі; але, калі ласка, зрабіце гэта стыльным і прыдатным для грамадскага спажывання. Ніякага аголенага цела, змесціва сексуальнага характару і не пералічвайце ўсе свае сэксуальныя жаданні ў сваёй біяграфіі. Сачыце за чысцінёй.
    Пераслед
    Не ўцягвайце і не заахвочвайце іншых да ўдзелу ў якіх-небудзь мэтанакіраваных злоўжываннях або пераследзе любога іншага карыстальніка. Гэта ўключае ў сябе адпраўку любога непажаданага сэксуальнага кантэнту вашым партнёрам. Паведамленні аб пераследзе, пагрозах, здзеках або запалохванні ўспрымаюцца вельмі сур'ёзна.
    
    Гвалт і фізічныя пашкоджанні
    
    Мы не дазваляем гвалтоўнае, абразлівае або крывавае змесціва на Dater, а таксама любую дзейнасць або змесціва, якія прапагандуюць або пагражаюць гвалтам любога роду, уключаючы пагрозы або прапаганду тэрарызму. Фізічныя напады, прымус і любыя акты гвалту строга забароненыя.
    Таксама забаронены кантэнт, які прапагандуе або праслаўляе самагубства або самапашкоджанне. У такіх сітуацыях мы можам зрабіць шэраг крокаў, каб дапамагчы карыстальніку, у тым ліку звярнуцца па дапамогу ў крызісныя рэсурсы.
    
    Мова варожасці
    Любое змесціва, якое прапагандуе, прапагандуе або апраўдвае расізм, фанатызм, нянавісць або гвалт у дачыненні да асоб або груп на падставе (але не абмяжоўваючыся імі) расы, этнічнага паходжання, рэлігіі, інваліднасці, полу, ўзросту, нацыянальнага паходжання, сексуальнай арыентацыі або гендэрнай ідэнтычнасці, з'яўляецца не дапускаецца.    
    
    Прыватная інфармацыя
    Не паведамляйце публічна ніякай асабістай інфармацыі, ні вашай, ні чыёй-небудзь яшчэ. Гэта ўключае ў сябе нумары сацыяльнага страхавання, пашпарты, паролі, фінансавую інфармацыю або нявызначаную кантактную інфармацыю, такую ​​як нумары тэлефонаў, адрасы электроннай пошты, хатнія/працоўныя адрасы.
    
    Спам
    Не будзьце фальшывымі. Замест гэтага будзьце сапраўднымі. Не выкарыстоўвайце Dater для накіравання людзей на знешнія вэб-сайты па спасылцы або іншым спосабам.
    
    Заахвочванне або павышэнне
    Запрашэнне іншых карыстальнікаў на Dater забаронена. Вы можаце запрашаць сваіх партнёраў да таго, што вы робіце, але калі мэтай вашага профілю з'яўляецца прасоўванне вашага мерапрыемства або бізнесу, некамерцыйнай арганізацыі, палітычнай кампаніі, конкурсу або даследавання, мы можам выдаліць ваш уліковы запіс. Хаця мы рады, што вы здымаеце камедыйнае шоу на наступным тыдні, калі ласка, не выкарыстоўвайце Dater для яго прасоўвання.
    
    Прастытуцыя і гандаль людзьмі
    Прапаганда або прапаганда камерцыйных сэксуальных паслуг, гандлю людзьмі або іншых палавых актаў без згоды строга забаронена і прывядзе да прыпынення вашага ўліковага запісу Dater.
    
    Махлярства
    Dater прытрымліваецца палітыкі нулявой цярпімасці да любых драпежных паводзін. Любы, хто спрабуе атрымаць асабістую інфармацыю іншых карыстальнікаў для махлярства або незаконнай дзейнасці, можа быць забанены. Любы карыстальнік, злоўлены на перадачы інфармацыі аб сваім фінансавым рахунку (PayPal, Venmo і г.д.), каб атрымаць грошы ад іншых карыстальнікаў, таксама можа быць забанены ў Dater.
    
    Персаніфікацыя
    Будзь сабой! Не выдавайце сябе за кагосьці іншага.
    Не выдавайце сябе за сябе і не скажайце пра сваю прыналежнасць, сувязь або сувязь з якой-небудзь фізічнай або юрыдычнай асобай. Гэта ўключае ў сябе пародыйныя акаўнты. Хаця мы лічым ваш профіль Майка Пенса вясёлым, вы не Майк Пенс. І калі так, што вы робіце на Dater?
   
    Непаўналетнія
    Вам павінна быць 18 гадоў і больш, каб выкарыстоўваць Dater. Такім чынам, мы не дазваляем выкарыстоўваць выявы непаўналетніх без суправаджэння. Калі вы хочаце размясціць фатаграфіі сваіх дзяцей, пераканайцеся, што вы таксама на фота. Калі вы бачыце профіль, які змяшчае непаўналетняга без суправаджэння, заахвочвае прычыніць шкоду непаўналетняму або адлюстроўвае непаўналетняга ў сексуальнай або непрыстойнай форме, неадкладна паведаміце пра гэта.    
    
    Парушэнне аўтарскіх правоў і таварных знакаў
    Калі гэта не ваша, не публікуйце. Калі ваш профіль Dater змяшчае працу, абароненую аўтарскім правам або гандлёвую марку іншых асоб, калі ласка, не паказвайце яе, калі ў вас няма на гэта дазволу.
    
    Незаконнае выкарыстанне
    Не выкарыстоўвайце Dater, каб рабіць што-небудзь незаконнае. Калі гэта незаконны IRL, гэта незаконна на Dater.
    
    Адзін чалавек, адзін уліковы запіс
    Уліковы запіс Dater не можа мець некалькі ўладальнікаў, таму не стварайце ўліковы запіс разам са сваім сябрам або другой асобай. Таксама не стварайце некалькі ўліковых запісаў Dater.
    
    Праграмы іншых вытворцаў
    Выкарыстанне любых прыкладанняў, створаных кім-небудзь, акрамя Dater, якія сцвярджаюць, што прапануюць нашы паслугі або разблакіруюць спецыяльныя функцыі Dater (напрыклад, аўтаматычную пракрутку), забаронена.
    
    Бяздзейнасць акаўнта
    Карыстацца Dater цікава... увесь час! Выкарыстоўвайце Dater на возеры, выкарыстоўвайце Dater падчас ежы пірага. Выкарыстоўвайце Dater, калі вас няма, выкарыстоўвайце Dater, калі сумняваецеся! Але калі вы не ўвойдзеце ў свой уліковы запіс Dater на працягу 2 гадоў, мы можам выдаліць ваш уліковы запіс з-за бяздзейнасці.
    `,
  privacy_policy_text: `Прыватнасць Dater
  НАША АБАВЯЗАТЕЛЬСТВА ПЕРАД ВАМ У Dater ваша канфідэнцыяльнасць з'яўляецца найвышэйшым прыярытэтам. Гэта ў цэнтры распрацоўкі і стварэння паслуг і прадуктаў, якія вы ведаеце і любіце. Усё для таго, каб у вас была магчымасць цалкам ім давяраць і засяродзіцца на новых важных знаёмствах.
  
  Мы цэнім тое, што вы давяраеце нам сваю інфармацыю, і ставімся да яе адказна.
  
  Наша абавязацельства па захаванні прыватнасці. Ствараючы кожны прадукт і паслугу, мы думаем аб прыватнасці нашых карыстальнікаў. Мы прыцягваем экспертаў з розных абласцей, такіх як права, бяспека, распрацоўка, дызайн прадукту і многае іншае, каб прымаць любое рашэнне з павагай да вашай прыватнасці.
  
  Наша прыхільнасць да празрыстасці. Мы выкарыстоўваем многія з тых жа інтэрнэт-сэрвісаў, што і вы, таму разумеем, што няпоўная інфармацыя і занадта складаная мова з'яўляюцца агульнымі праблемамі палітыкі прыватнасці. Наш падыход прама супрацьлеглы: мы стараемся пісаць палітыку прыватнасці і іншыя падобныя дакументы зразумелай мовай. Мы вельмі хочам, каб карыстальнікі прачыталі нашу палітыку і зразумелі нашу практыку.
  
  Наша прыхільнасць бяспецы. У нас ёсць людзі, якія клапоцяцца пра бяспеку вашых даных. Мы рэгулярна абнаўляем нашу практыку бяспекі і інвестуем у галіну, каб узмацніць абарону вашай інфармацыі.
  
  Палітыка прыватнасці Вітаем у Палітыцы прыватнасці Dater. Дзякуй, што знайшлі час пазнаёміцца ​​з ёй.
  
  Мы цэнім, што вы давяраеце нам сваю інфармацыю, і мы маем намер захаваць гэты давер. Па-першае, мы хочам, каб вы разумелі, якую інфармацыю мы збіраем, навошта мы яе збіраем, як яна выкарыстоўваецца і які выбар у вас ёсць адносна вашых даных. У гэтай палітыцы мы апісваем нашу практыку прыватнасці простай мовай і стараемся пазбягаць юрыдычнай і тэхнічнай тэрміналогіі, наколькі гэта магчыма.
  
  ДАТА Ўступлення ў сілу: 17 мая 2022 г.
    
  Дзе дзейнічае наша Палітыка прыватнасці
  Гэтая палітыка канфідэнцыяльнасці прымяняецца да прыкладанняў, мерапрыемстваў і іншых сэрвісаў, якімі кіруе брэнд Dater. Для прастаты гэтай палітыкі прыватнасці мы называем усё гэта нашымі паслугамі. Для яшчэ большай яснасці мы дадалі спасылку на гэтую палітыку прыватнасці ва ўсіх прыдатных службах.
  
  Для некаторых службаў можа спатрэбіцца ўласная унікальная палітыка прыватнасці. Калі канкрэтная служба мае ўласную палітыку канфідэнцыяльнасці, прымяняецца гэтая палітыка, а не бягучая.
  
  Інфармацыя, якую мы збіраем
  Безумоўна, мы не зможам дапамагчы вам завесці патрэбныя знаёмствы без пэўнай інфармацыі пра вас, напрыклад, асноўных даных профілю і тыпу людзей, з якімі вы хочаце мець зносіны. Мы таксама збіраем інфармацыю аб тым, як вы карыстаецеся нашымі сэрвісамі, напрыклад, доступ да часопісаў і даныя ад трэціх асоб, калі вы, напрыклад, атрымліваеце доступ да нашых сэрвісаў праз свой уліковы запіс у сацыяльнай сетцы або спампоўваеце інфармацыю з вашага ўліковага запісу ў сацыяльнай сетцы, каб запоўніць профіль. Дадатковая інфармацыя прадстаўлена ніжэй.
  
  Інфармацыя, якую вы нам даяце
  Выкарыстоўваючы нашы паслугі, вы згаджаецеся прадаставіць нам пэўную інфармацыю, у тым ліку наступную:
  
  Калі вы ствараеце ўліковы запіс, вы паведамляеце нам як мінімум свой адрас электроннай пошты і некаторую асноўную інфармацыю, неабходную для працы службы, напрыклад, ваш пол або дату нараджэння. Пры запаўненні профілю вы можаце падзяліцца дадатковай інфармацыяй, такой як біяграфічныя звесткі, інтарэсы і іншыя падрабязнасці пра сябе, а таксама змесцівам, такім як фота. Каб дадаць пэўныя матэрыялы, напрыклад фатаграфіі, вы можаце даць нам доступ да вашага фотаальбома. Калі вы звяртаецеся ў нашу службу падтрымкі кліентаў, мы збіраем інфармацыю, якую вы даяце нам падчас гэтага ўзаемадзеяння. Калі вы дзеліцеся з намі інфармацыяй пра іншых людзей (напрыклад, калі вы выкарыстоўваеце кантактныя дадзеныя сябра для функцыі), мы апрацоўваем гэтую інфармацыю ад вашага імя, каб выканаць ваш запыт. Зразумела, мы таксама апрацоўваем даныя вашых чатаў з іншымі карыстальнікамі і змесціва, якое вы публікуеце, калі гэта неабходна для працы сэрвісаў. Інфармацыя, якую мы атрымліваем ад іншых У дадатак да інфармацыі, якую вы даяце непасрэдна нам, мы атрымліваем інфармацыю пра вас з іншых крыніц, у тым ліку:
  
  Карыстальнікі Карыстальнікі могуць прадастаўляць інфармацыю пра вас пры выкарыстанні нашых сэрвісаў, напрыклад, калі яны ўзаемадзейнічаюць з вамі або падаюць скаргу на вас. Калі вы карыстаецеся нашымі сэрвісамі, ствараюцца тэхнічныя даныя аб функцыях, якімі вы карыстаецеся, як вы імі карыстаецеся і прыладах, з якіх вы карыстаецеся нашымі сэрвісамі. Ніжэй падрабязнасці:
  
  Інфармацыя аб выкарыстанні Вамі выкарыстанне Сэрвісаў стварае даныя аб вашай дзейнасці на іх, напрыклад, як вы імі карыстаецеся (напрыклад, час ўваходу ў сістэму, выкарыстоўваныя функцыі, дзеянні, інфармацыя, якая вам паказваецца, адрасы вэб-старонак з арыгінальнай спасылкай і рэклама, з якой вы ўзаемадзейнічалі) і тое, як вы ўзаемадзейнічаеце з іншымі карыстальнікамі (напрыклад, карыстальнікі, з якімі вы маеце зносіны і ўзаемадзейнічаеце, калі менавіта гэта адбываецца, колькасць адпраўленых і атрыманых паведамленняў). Інфармацыя пра прыладу Мы збіраем інфармацыю аб прыладзе або прыладах, з якіх вы карыстаецеся нашымі паслугамі, у тым ліку даныя апаратнага і праграмнага забеспячэння, такія як IP-адрас, ідэнтыфікатар і тып прылады, налады і характарыстыкі прыкладанняў, праграмы для спынення збояў, рэкламныя ідэнтыфікатары (выпадковым чынам згенераваныя лічбы, якія можна скінуць у наладах прылады), ідэнтыфікатары, звязаныя з файламі cookie або іншымі тэхналогіямі, якія могуць адназначна ідэнтыфікаваць прыладу або браўзер. Такім жа чынам, калі вы дасце дазвол, мы можам збіраць фатаграфіі.    
    
  Як мы выкарыстоўваем інфармацыю
    Асноўная прычына, па якой мы выкарыстоўваем вашу інфармацыю, - гэта прадастаўленне і паляпшэнне нашых паслуг. Акрамя таго, мы выкарыстоўваем вашу інфармацыю, каб абараніць вас. Ніжэй мы падрабязна растлумачылі розныя прычыны выкарыстання вашай інфармацыі і прывялі практычныя прыклады.
    
    А. Для адміністравання вашага ўліковага запісу і забеспячэння працы нашых сэрвісаў. Для стварэння і кіравання вашым уліковым запісам. Для забеспячэння падтрымкі і адказаў на вашыя запыты. Для правядзення вашых транзакцый. Для зносін з вамі аб нашых сэрвісах. Б. Для дапамогі вы знаёміцеся з іншымі карыстальнікамі да аднаго C. Для прадухілення і выяўлення і барацьбы з махлярствам або іншымі незаконнымі або несанкцыянаванымі дзеяннямі Пошук і выпраўленне парушэнняў (бягучых, меркаваных або падазраваных) нашых Умоў выкарыстання, у тым ліку шляхам прагляду скаргаў і ўзаемадзеяння паміж карыстальнікамі Лепш зразумець і распрацаваць меры супрацьдзеяння парушэнням нашых Умоў выкарыстання Захаванне даных, звязаных з парушэннем нашых Умоў выкарыстання, каб прадухіліць паўтарэнне Захаванне або ажыццяўленне нашых правоў, такіх як нашы Умовы выкарыстання Звязацца з асобамі, якія падаюць скаргі, каб паведаміць ім аб нашых дзеяннях на іх скарга D. Для забеспячэння адпаведнасці заканадаўства Адпаведнасць патрабаванням заканадаўства Дапамога праваахоўным органам Інфармацыю аб апрацоўцы персанальных даных шляхам прафілявання і аўтаматызаванага прыняцця рашэнняў можна знайсці ў раздзеле FAQ.
    
    Іншым карыстальнікам Вы даяце інфармацыю іншым карыстальнікам, калі добраахвотна раскрываеце яе ў сэрвісе (уключаючы інфармацыю, якая змяшчаецца ў агульнадаступным профілі). Будзьце асцярожныя і пераканайцеся, што вы сапраўды не супраць падзяліцца пэўнай інфармацыяй.
    
    Калі нехта падае скаргу, звязаную з вамі (напрыклад, аб парушэнні вамі нашых Умоў выкарыстання), мы можам паведаміць чалавеку, які падаў скаргу, аб дзеяннях (калі такія былі), якія мы прынялі ў выніку скаргі.
    
    Мы прытрымліваемся строгага працэсу праверкі, перш чым прыцягваць любога пастаўшчыка паслуг або працаваць з любым партнёрам. Нашы пастаўшчыкі паслуг і партнёры павінны пагадзіцца на строгія абавязацельствы па захаванні канфідэнцыяльнасці.
    
    Мы дзелімся вашай інфармацыяй з афіляванымі асобамі ў абмежаваных законных мэтах, як выкладзена ніжэй:
    
    Праваахоўным органам / у адпаведнасці з патрабаваннямі закону Мы можам раскрыць вашу інфармацыю ў выпадку разумнай неабходнасці: ​​1) у адпаведнасці з патрабаваннямі судовага працэсу, напрыклад, у адпаведнасці з пастановай суда, позвай у суд або ордэрам на ператрус, у сувязі з расследаваннем урада або праваахоўных органаў, або іншыя патрабаванні заканадаўства; 2) садзейнічаць папярэджанню або раскрыццю злачынства (у кожным выпадку з улікам дзеючага заканадаўства); 3) для аховы якой-небудзь асобы.
    
    Каб забяспечыць захаванне законных правоў, мы таксама можам прадастаўляць інфармацыю: 1) калі раскрыццё змякчыць нашу адказнасць у рэальным або патэнцыйным судовым працэсе; 2) па меры неабходнасці для абароны нашых законных правоў і законных правоў нашых карыстальнікаў, дзелавых партнёраў або іншых зацікаўленых бакоў; 3) для выканання нашых з вамі пагадненняў; 4) для расследавання, прадухілення або прыняцця іншых мер у дачыненні да незаконнай дзейнасці, магчымага махлярства або іншых правапарушэнняў.
    
    Пасля вашай згоды або запыту мы можам запытаць вашу згоду на перадачу вашай інфармацыі трэцім асобам. У такіх выпадках мы дакладна растлумачым, чаму мы хочам падзяліцца гэтай інфармацыяй.
    
    Мы можам выкарыстоўваць і перадаваць неасабістую інфармацыю (гэта значыць інфармацыю, якая не дазваляе ідэнтыфікаваць вашу асабістую асобу, у тым ліку інфармацыю аб прыладзе, агульную дэмаграфічную інфармацыю, агульныя паводніцкія даныя, неідэнтыфікацыйнае месцазнаходжанне), а таксама асабістую інфармацыю ў хэшаванай форме, у якой яна не можа быць прачытаным чалавекам пры любым з вышэйзгаданых абставінаў.    
    
    Вашы правы
    Мы хочам, каб вы кантралявалі сваю інфармацыю, таму нагадваем вам пра наступныя параметры і інструменты:
    
    Сродкі доступу / абнаўлення ў сэрвісе. Інструменты і налады ўліковага запісу дапамогуць вам атрымаць доступ да інфармацыі, якую вы нам даяце і якая звязана з вашым уліковым запісам, непасрэдна ў Сэрвісе, а таксама выправіць або выдаліць такую ​​інфармацыю. Калі ў вас ёсць якія-небудзь пытанні аб гэтых інструментах і наладах, калі ласка, звяжыцеся з нашай службай падтрымкі. Дазволы прылады. Мабільныя платформы могуць мець сістэмы дазволаў для пэўных тыпаў даных і апавяшчэнняў, такіх як тэлефонныя кантакты, выявы, службы вызначэння месцазнаходжання, націскныя апавяшчэнні і рэкламныя ідэнтыфікатары. Вы можаце змяніць налады прылады, даўшы або адмовіўшы ў згодзе на збор і апрацоўку адпаведнай інфармацыі або адлюстраванне адпаведных апавяшчэнняў. Безумоўна, калі вы не дасце згоды, некаторыя службы могуць страціць сваю функцыянальнасць. Выдаленне Вы можаце спыніць збор інфармацыі праграмай, выдаліўшы яе праз стандартны працэс выдалення на прыладзе. Звярніце ўвагу: выдаленне прыкладання НЕ спыняе дзеянне ўліковага запісу. Каб закрыць свой рахунак, скарыстайцеся адпаведнай функцыяй на сэрвісе. Закрыццё рахунку. Закрыць рахунак можна з дапамогай адпаведнай функцыі непасрэдна ў сэрвісе. Мы таксама хочам, каб нашы карыстальнікі ведалі пра свае правы на прыватнасць.
`,
  i_agree_with: 'Я згодны з',
  and: 'і',
  privacy_policy_title: 'Палітыка прыватнасці',
  goals: [`стварэнне сям'і`, 'падарожжаў', 'флірту', 'зносін', 'дружбы', 'сэксу'],
  i_looking_for: 'Я шукаю',
  for: 'для',
  genders: ['Мужчыну', 'Жанчыну', 'Мужчыну або Жанчыну'],
  your_expectations: 'Вашыя чаканні',
  your_dating_goals: 'Вашы мэты знаёмстваў',
  it_is_you: 'Гэта вы!',
};

export {bel};
