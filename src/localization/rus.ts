import {localizationPackType} from './localizationTypes';

const rus: localizationPackType = {
  lang_title: 'Русский(страна терорист)',
  send: 'Отправить',
  contacts: 'контакты',
  chats: 'чаты',
  profile_settings: 'настройки анкеты',
  age: 'возраст',
  announcement_text: 'текст анкеты',
  aply_filters: 'применить фильтры',
  city: 'город',
  country: 'страна',
  edit: 'редактировать',
  enter_your_message: 'Введите свое сообщение',
  filters: 'фильтры',
  gender: 'ваш пол',
  items_not_found: 'Ничего не найдено',
  likes: 'лайки',
  location: 'Локация',
  matches: 'Cовпадения',
  me_liked: 'Mеня лайкнули',
  my_likes: 'Mои лайки',
  preview: 'предпросмотр',
  region: 'регион',
  search: 'поиск',
  send_your_message: 'отправь свое сообщение',
  something_went_wrong: 'что то пошло не так',
  write_few_words_about_yourself: 'Напишите кратко о себе',
  write_your_message: 'Текст сообщения',
  your_announcement: 'ваша анкета',
  your_chats: 'ваши чаты',
  servers_are_not_allowed: 'Сервера недоступны или отсутствует подключение к интернету.',
  moderation_request_pending: 'Ваш запрос на модерацию ожидает одобрения',
  profile_not_moderated:
    'Профиль не проверен. Ваш аватар не прошел проверку смените аватар для повторной проверки',
  please_request_moderation:
    'Почти готово! Добавте свой аватар для того чтоб запросить модерацию профиля',
  help: 'помощь',
  requests: 'запросы',
  authorization: 'Авторизация',
  or: 'или',
  enter_your_email: 'Введите свой email',
  enter_your_password: 'Введите свой пароль',
  create_new_account: 'Создайте новый аккаунт',
  login: 'войти',
  chose_city: 'Выберите город',
  chose_country: 'Выберите страну',
  chose_region: 'Выберите регион',
  date_of_birth: 'Дата рождения',
  enter_your_name: 'Введите свое имя',
  repeat_your_password: 'Повторите пароль',
  sign_up: 'Зарегистрироватся!',
  feedback: 'Связь с разработчиком',
  month: ['Янв', 'Фев', 'Мар', 'Апр', 'Мая', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
  selectLanguage: 'Выбери свой язык',
  languageWarning: 'Изменения вступят в силу после перезапуска',
  send_message: 'Написать',
  like: 'Лайк',
  block_user: 'Заблокировать',
  unblock_user: 'Разблокировать',
  report_user: 'Пожаловаться',
  send_report: 'Отправить жалобу',
  add_comment_to_report: 'Добавь коментарий к жалобу',
  must_be_at_least: (chars: number) => {
    return `Должно быть минимум ${chars} символов`;
  },
  warning: 'Внимание',
  your_report_successfully_sended: 'Ваша жалоба успешно отправлена',
  you_are_banned: 'Ваш профиль заблокирован за нарушение правил сообщества',
  privacy_rules: 'Конфиденциальность',
  terms_of_use_title: 'Правила использования',
  terms_of_use: `Принципы сообщества
  Добро пожаловать в сообщество Dater. Если вы честны, добры и уважительны к другим, вам всегда здесь будут рады. Если вы решите не быть, вы можете не продержаться. Наша цель — дать пользователям возможность свободно выражать свои мысли, если это не оскорбляет других. На Dater все придерживаются одних и тех же стандартов. Мы просим вас быть внимательными, думать, прежде чем действовать, и соблюдать правила нашего сообщества как в сети, так и вне ее. Вы не ослышались: ваше поведение в автономном режиме может привести к удалению вашей учетной записи Dater.
  Ниже приведен список наших политик сообщества. Если вы нарушите любое из этих правил, вы можете быть заблокированы в Dater. Серьезно, не заставляйте нас смахивать вас влево — потому что после этого не будет повторений. Мы рекомендуем вам сообщать о любых действиях, нарушающих наши правила.
  Dater не для:

  Нагота/сексуальный контент

  Мы не просим вас зачесать волосы набок или даже говорить полными предложениями; но, пожалуйста, держите его стильным и подходящим для общественного потребления. Никакой наготы, никакого откровенно сексуального контента и не записывайте все свои сексуальные желания в свою биографию. Сохраняй в чистоте.
  
  Домогательство
  Не вовлекайте и не поощряйте других к каким-либо целенаправленным оскорблениям или преследованиям в отношении любого другого пользователя. Это включает в себя отправку нежелательного сексуального контента вашим партнерам. Сообщения о преследовании, угрозах, издевательствах или запугивании воспринимаются очень серьезно.
  
  Насилие и физический вред
  
  Мы не приемлем жестокого, графического или кровавого контента на Dater, а также любых действий или контента, которые пропагандируют или угрожают насилием любого рода, включая угрозы или пропаганду терроризма. Физическое насилие, принуждение и любые акты насилия строго запрещены.
  Контент, пропагандирующий или прославляющий самоубийство или членовредительство, также запрещен. В таких ситуациях мы можем предпринять ряд шагов, чтобы помочь пользователю, включая обращение к кризисным ресурсам.
  
  Разжигание ненависти
  Любой контент, который пропагандирует, защищает или оправдывает расизм, фанатизм, ненависть или насилие в отношении отдельных лиц или групп на основе (но не ограничиваясь) таких факторов, как раса, этническая принадлежность, религиозная принадлежность, инвалидность, пол, возраст, национальное происхождение, сексуальная ориентация. , или гендерная идентичность не допускается.
  
  Личная информация
  Не распространяйте публично какую-либо личную информацию, свою или чью-либо еще. Сюда входят номера социального страхования, паспорта, пароли, финансовая информация или незарегистрированная контактная информация, такая как номера телефонов, адреса электронной почты, домашний/рабочий адрес.    
  
  Спам
  Не будь фальшивым. Вместо этого будьте настоящими. Не используйте Dater для привлечения людей на внешние веб-сайты с помощью ссылок или иным образом.
  
  Продвижение или ходатайство
  Привлечение других пользователей запрещено на Dater. Можно пригласить своих партнеров на то, чем вы занимаетесь, но если целью вашего профиля является реклама вашего мероприятия или бизнеса, некоммерческой организации, политической кампании, конкурса или проведения исследований, мы можем удалить вашу учетную запись. Хотя мы очень рады, что на следующей неделе у вас будет комедийное шоу, пожалуйста, не используйте Dater для его продвижения.
  
  Проституция и торговля людьми
  Продвижение или пропаганда коммерческих сексуальных услуг, торговли людьми или других половых актов без согласия строго запрещены и приведут к блокировке вашей учетной записи в Dater.
  
  Мошенничество
  Dater придерживается политики нулевой терпимости к хищническому поведению любого рода. Любой, кто пытается получить личную информацию других пользователей для мошеннических или незаконных действий, может быть забанен. Любой пользователь, уличенный в обмене информацией о своем финансовом счете (PayPal, Venmo и т. д.) с целью получения денег от других пользователей, также может быть заблокирован в Dater.
  
  Олицетворение
  Будь собой! Не притворяйтесь кем-то другим.
  Не выдавайте себя за другое лицо или иным образом искажайте принадлежность, связь или связь с каким-либо физическим или юридическим лицом. Сюда входят пародийные аккаунты. Хотя мы считаем ваш профиль Майка Пенса забавным, вы не Майк Пенс. И если да, то что ты делаешь на Dater?
 
  Несовершеннолетние
  Вам должно быть 18 лет или больше, чтобы использовать Dater. Поэтому мы не разрешаем изображения несовершеннолетних без сопровождения. Если вы хотите опубликовать фотографии своих детей, пожалуйста, убедитесь, что вы тоже есть на фото. Если вы видите профиль, который включает несовершеннолетнего без сопровождения, поощряет причинение вреда несовершеннолетнему или изображает несовершеннолетнего в сексуальном или непристойном ключе, немедленно сообщите об этом.    
  
  Нарушение авторских прав и товарных знаков
  Если это не ваше, не публикуйте. Если ваш профиль на Dater содержит какие-либо работы, защищенные авторскими правами или товарными знаками других лиц, не показывайте их, если только вам не разрешено это делать.
  
  Незаконное использование
  Не используйте Dater для противоправных действий. Если это незаконно в реальной жизни, то это незаконно и на Dater.
  
  Один человек, одна учетная запись
  У учетных записей Dater не может быть несколько владельцев, поэтому не создавайте учетную запись со своим другом или близким человеком. Кроме того, пожалуйста, не ведите несколько учетных записей Dater.
  
  Сторонние приложения
  Использование любых приложений, созданных кем-либо, кроме Dater, которые утверждают, что предлагают наши услуги или разблокируют специальные функции Dater (например, автоматические свайпы), запрещено.
  
  Бездействие учетной записи
  Dater весело использовать ... все время! Используйте Dater на озере, используйте Dater во время еды торта. Используйте Dater, когда вас нет дома, используйте Dater, когда сомневаетесь! Но если вы не войдете в свою учетную запись Dater в течение 2 лет, мы можем удалить вашу учетную запись за неактивность.
  `,
  privacy_policy_text: `Dater Privacy
  НАШИ ОБЯЗАТЕЛЬСТВА ПЕРЕД ВАМИ Для Dater твоя конфиденциальность является самым высоким приоритетом. Она основана на разработке и создании сервисов и продуктов, которые ты знаешь и любишь. Все для того, чтобы у тебя была возможность им полностью доверять и сосредоточиться на новых важных знакомствах.
  
  Мы ценим то, что ты доверяешь нам свою информацию и ответственно к этому относимся.
  
  Наше обязательство по конфиденциальности. Создавая каждый продукт и сервис, мы думаем о конфиденциальности наших пользователей. Мы привлекаем экспертов из разных отраслей, таких как право, безопасность, разработка, проектирование продуктов и т.д., чтобы принимать каждое решение с уважением к твоей конфиденциальности.
  
  Наше обязательство по прозрачности. Мы используем много тех же онлайн-сервисов, что и ты, поэтому хорошо понимаем, что неполная информация и слишком сложный язык являются типичными проблемами в политиках конфиденциальности. Наш подход прямо противоположен: мы пытаемся составлять политику конфиденциальности и другие подобные документы на понятном языке. Мы действительно хотим, чтобы пользователи прочли нашу политику и поняли наши методы.
  
  Наше обязательство по безопасности. У нас есть люди, заботящиеся о безопасности твоих данных. Мы регулярно обновляем наши методы безопасности и инвестируем в эту отрасль, чтобы усилить защиту твоей информации.
  
  Политика конфиденциальности Добро пожаловать в раздел Политика конфиденциальности Dater. Спасибо, что уделяешь время на ознакомление с ней.
  
  Мы ценим, что ты доверяешь нам свою информацию, и намерена сохранить это доверие. Во-первых, мы хотим, чтобы у тебя было понимание, какую информацию мы собираем, почему мы ее собираем, как она используется и какой у тебя есть выбор относительно своих данных. В этой политике мы описываем наши методы конфиденциальности на простом языке и стараемся максимально избегать юридической и технической терминологии.
  
  ДАТА ВСТУПЛЕНИЯ В силу: 17 мая 2022 г.
  
  Где применяется наша Политика конфиденциальности
  Эта политика конфиденциальности распространяется на приложения, события и другие сервисы, которыми управляет бренд Dater. Для простоты в этой политике конфиденциальности, все это мы называем нашими сервисами. Для еще большей ясности мы добавили ссылку на данную политику конфиденциальности на все соответствующие сервисы.
  
  Некоторые сервисы могут потребовать своей уникальной политики конфиденциальности. Если у определенного сервиса есть собственная политика конфиденциальности, то применяется и политика, а не текущая.
  
  Информация, которую мы собираем
  Конечно, мы не сможем помочь тебе завести нужные знакомства без определенной информации о тебе, например, основных данных профиля и типажа людей, с которыми ты хочешь общаться. Мы также собираем информацию о том, как ты пользуешься нашими сервисами, например доступ к журналам, и данные от третьих сторон, когда ты, например, заходишь на наши сервисы через свой аккаунт в социальной сети или загружаешь информацию из своего аккаунта в соцсети, чтобы заполнить профиль. Дополнительная информация приведена ниже.
  
  Информация, которую ты нам предоставляешь
  Используя наши сервисы, ты соглашаешься предоставлять нам определенную информацию, включая следующую:
  
  Создавая аккаунт, ты сообщаешь нам по крайней мере о своем имейле, а также некоторой основной информации, необходимой для работы сервиса, таких как гендер или дата рождения. Заполняя профиль, вы можете поделиться дополнительной информацией, такой как данные в биографии, интересы и другие подробности о себе, а также таким контентом, как фото. Чтобы добавить определенные материалы, например фотографии, ты можешь предоставить нам доступ к своему фотоальбому. Если вы обращаетесь в нашу службу поддержки клиентов, мы собираем информацию, которую ты предоставляешь нам во время этого взаимодействия. Если вы делитесь с нами информацией о других людях (например, если вы используете контактные данные друга для определенной функции), мы обрабатываем эту информацию от твоего имени, чтобы выполнить твой запрос. Конечно, мы также обрабатываем данные из твоих чатов с другими пользователями и контент, который вы публикуете, как это требуется для работы сервисов. Информация, которую мы получаем от других Кроме информации, которую ты предоставляешь непосредственно нам, мы получаем информацию о тебе от других источников, включая следующие:
  
  Пользователи могут предоставлять информацию о тебе, используя наши сервисы, например, если они взаимодействуют с тобой или посылают на тебя жалобу. Когда ты используешь наши сервисы, генерируются технические данные о используемых ими функциях, способе их использования и устройствах, с которыми ты пользуешься нашими сервисами. Ниже приведены подробности:
  
  Сведения об использовании Использование сервисов генерирует данные о твоей активности на них, например, как ты ими пользуешься (например, время входа, использованные функции, действия, показанная тебе информация, адрес веб-страниц с исходной ссылкой и реклама, с которой у тебя было взаимодействие) и как взаимодействуешь с другими пользователями (например, пользователи, с которыми ты общаешься и взаимодействуешь, когда это происходит, количество отправленных и полученных сообщений). Сведения об устройстве Мы собираем информацию от устройства или устройств, с которыми вы пользуетесь нашими сервисами, и о них, включая данные об аппаратном и программном обеспечении, такие как IP-адрес, идентификатор и тип устройства, настройки и характеристики приложений, аварийные завершения работы приложений, рекламные идентификаторы (случайно сгенерированные числа, которые могут быть сброшены в настройках устройства), идентификаторы, связанные с файлами cookie или другими технологиями, которые могут однозначно идентифицировать устройство или браузер. Таким же образом, если ты разрешишь, мы сможем собирать фото.
  
  Как мы используем информацию
  Основная причина, по которой мы используем твою информацию, – предоставление и улучшение наших сервисов. Кроме того, мы используем вашу информацию, чтобы защитить тебя. Ниже мы подробно объяснили различные причины использования твоей информации и привели практические примеры.
  
  A. Для администрирования твоего аккаунта и обеспечения работы наших сервисов Создание аккаунта и управления им Предоставление тебе поддержки и ответов на запросы Выполнение твоих транзакций Общение с тобой о наших сервисах B. Для помощи вам в знакомстве с другими пользователями одному C. Для предупреждения и выявления мошенничества или другой незаконной или несанкционированной деятельности и борьбы с ними Поиск и устранение нарушений (текущих, подозреваемых или вероятных) наших Условий использования, в частности через пересмотр жалоб и взаимодействий между пользователями Лучшее понимание и разработка противодействия нарушениям наших Условий использования Сохранение данных, связанных с нарушением наших условий использования, чтобы предотвратить повторные случаи Обеспечение соблюдения или осуществления наших прав, например наших условий использования Связь с лицами, которые посылают жалобы, чтобы сообщить им о наших действиях по их жалобе D. Для обеспечения соблюдение законодательства Соответствие юридическим требованиям Помощь правоохранительным органам Информация об обработке личных данных через профилирование и автоматизированное принятие решений содержится в разделе частых вопросов.
  
  Другим пользователям Вы предоставляете информацию другим пользователям, когда добровольно раскрываете ее на сервисе (включая информацию, содержащуюся в общедоступном профиле). Пожалуйста, прояви осмотрительность и убедись, что ты действительно не прочь поделиться определенной информацией.

  Если кто-то пошлет жалобу, связанную с тобой (например, о твоем нарушении наших Условий использования), мы можем сообщить человеку, пославшему эту жалобу, о мерах (при наличии), которые мы приняли в результате жалобы.
  
  Мы соблюдаем строгий процесс проверки, прежде чем привлекать любого поставщика услуг или работать с любым партнером. Наши поставщики услуг и партнеры должны согласиться на строгие обязательства по конфиденциальности.
  
  Мы предоставляем твою информацию филиалам для ограниченных законных целей, как указано ниже:
  
  Правоохранительным органам / по требованию закона Мы можем раскрыть твою информацию, если это обоснованно необходимо: 1) по требованию судебного процесса, например согласно судебному приказу, повестке в суд или ордер на обыск, через расследование правительства или правоохранительных органов или другие юридические требования; 2) чтобы помочь предотвратить совершение преступления или выявить его (в любом случае зависит от применимого закона); 3) для защиты какого-либо лица.
  
  Для обеспечения законных прав Мы также можем предоставлять информацию: 1) если разглашение смягчит нашу ответственность в фактическом или возможном иске; 2) в качестве необходимой защиты наших законных прав и законных прав наших пользователей, деловых партнеров или других заинтересованных сторон; 3) для выполнения наших договоренностей с тобой; 4) для расследования, предотвращения или принятия других мер по незаконной деятельности, возможному мошенничеству или другим правонарушениям.
  
  По твоему согласию или запросу Мы можем попросить твоего согласия на передачу информации третьим сторонам. В таких случаях мы ясно объясним, почему мы хотим передать эту информацию.
  
  Мы можем использовать и передавать неличную информацию (т.е. информацию, которая сама по себе не идентифицирует вас, в частности, информацию об устройствах, общую демографическую информацию, общие данные о поведении, местоположение без определения личности), а также личную информацию в гешированном виде, в котором ее не может прочесть человек, при любых вышеупомянутых обстоятельствах.    
  
  Ваши права
  Мы хотим, чтобы у тебя был контроль над своей информацией, поэтому напоминаем о таких доступных возможностях и инструментах:
  
  Средства доступа/обновления в сервисе. Инструменты и настройки аккаунта помогут получить доступ к информации, которую ты нам предоставляешь и которая связана с твоим аккаунтом непосредственно в сервисе, а также исправить или удалить такую ​​информацию. Если у тебя возникли вопросы относительно этих инструментов и настроек, обратитесь в нашу службу поддержки. Разрешения на устройстве. Мобильные платформы могут иметь системы разрешений для определенных типов данных и уведомлений, таких как контакты телефона, изображения, локации, push-уведомления и рекламные идентификаторы. Вы можете изменить настройки устройства, согласовав или отказав в согласии на сбор и обработку соответствующей информации или показ соответствующих уведомлений. Конечно, если не согласиться, определенные сервисы могут потерять свою функциональность. Удаление. Остановить весь сбор информации в приложении можно, удалив его путём стандартного процесса удаления на твоем устройстве. Учти: удаление приложения не прекращает действие аккаунта. Чтобы закрыть свой аккаунт, воспользуйся соответствующей функцией на сервисе. Закрытие аккаунта. Аккаунт можно закрыть, воспользовавшись соответствующей функцией непосредственно в сервисе. Мы также хотим, чтобы наши пользователи знали о своих правах на конфиденциальность.`,
  i_agree_with: 'Я согласен с',
  and: 'и',
  privacy_policy_title: 'Политикой приватности',
  goals: ['создания семьи', 'путишествий', 'флирта', 'общения', 'дружбы', 'секса'],
  i_looking_for: 'Я ищу',
  for: 'для',
  genders: ['Мужчину', 'Женщину', 'Мужчину или Женщину'],
  your_expectations: 'Ваши ожидания',
  your_dating_goals: 'Ваши цели знакомства',
  it_is_you: 'Это вы!',
  choose_variant: 'Выберите вариант',
  our_telegram: 'Наш telegram',
};

export {rus};
