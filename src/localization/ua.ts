import {localizationPackType} from './localizationTypes';

const ua: localizationPackType = {
  lang_title: 'Українська',
  send: 'Відправити',
  contacts: 'контакти',
  chats: 'Чати',
  profile_settings: 'Налаштування профілю',
  age: 'вік',
  announcement_text: 'Текст анкети',
  aply_filters: 'Застосувати фільтри',
  city: 'місто',
  country: 'країна',
  edit: 'редагувати',
  enter_your_message: 'Введіть ваше повідомлення',
  filters: 'фільтри',
  gender: 'стать',
  items_not_found: 'Нічого не знайдено',
  likes: 'лайки',
  location: 'Локація',
  matches: 'Співпадіння',
  me_liked: 'Mене лайкнули',
  my_likes: 'Mої лайки',
  preview: 'Попередній перегляд',
  region: 'регіон',
  search: 'пошук',
  send_your_message: 'Відправ своє повідомлення',
  something_went_wrong: 'щось пішло не так',
  write_few_words_about_yourself: 'Напишіть коротко про себе',
  write_your_message: 'Текст повідомлення',
  your_announcement: 'Ваша анкета',
  your_chats: 'Ваші чати',
  servers_are_not_allowed: 'Сервера недоступні або відсутнє підключення до інтернету.',
  moderation_request_pending: 'Ваш запит на модерацію очікує одобрення',
  profile_not_moderated:
    'Профіль не провірений. Ваш аватар не пройшов провірку замініть аватар для повторної перевірки',
  please_request_moderation:
    'Майже готово! Добавте свій аватар для того чтоб запросити модерацію профіля',
  help: 'допомога',
  requests: 'запити',
  authorization: 'Авторизація',
  or: 'або',
  enter_your_email: 'Введіть свій email',
  enter_your_password: 'Введіть свій пароль',
  create_new_account: 'Створіть новый аккаунт',
  login: 'Увійти',
  chose_city: 'Виберіть місто',
  chose_country: 'Виберіть країну',
  chose_region: 'Виберіть регіон',
  date_of_birth: 'Дата народження',
  enter_your_name: 'Введіть своє імя',
  repeat_your_password: 'Повторіть пароль',
  sign_up: 'Зареєструватися!',
  feedback: 'Звязок з разробником',
  month: [
    'Січня',
    'Лютого',
    'Березня',
    'Квітня',
    'Травня',
    'Червня',
    'Липня',
    'Серпня',
    'Вересня',
    'Жовтня',
    'Листопада',
    'Грудня',
  ],
  selectLanguage: 'Виберіть свою мову',
  languageWarning: 'Зміни вступлять в силу після перезапуску',
  send_message: 'Написати',
  like: 'Лайк',
  block_user: 'Заблокувати',
  unblock_user: 'Розблокувати',
  report_user: 'Поскаржитись',
  send_report: 'Надіслати скаргу',
  add_comment_to_report: 'Додайте коментар до скарги',
  must_be_at_least: (chars: number) => {
    return `Має бути щонайменше ${chars} символів`;
  },
  warning: 'Увага',
  your_report_successfully_sended: 'Ваша скарга успішно надіслана',
  you_are_banned: 'Ваша анкета була заблокована за порушення правил спільноти',
  privacy_rules: 'Конфіденційність',
  terms_of_use_title: 'Правила використання',
  terms_of_use: `Правила спільноти
    Ласкаво просимо до спільноти Dater. Якщо ти чесний, добрий і шанобливий до інших, тобі тут завжди раді. Якщо ви вирішите не бути, ви можете не витримати. Наша мета — дозволити користувачам вільно висловлюватись, якщо це не ображає інших. На Dater усі дотримуються однакових стандартів. Ми просимо вас бути уважними, думати, перш ніж діяти, і дотримуватися наших правил спільноти як у мережі, так і поза нею. Ви правильно почули: ваша поведінка офлайн може призвести до припинення дії вашого облікового запису Dater.
    Нижче наведено список наших політик спільноти. Якщо ви порушите будь-яку з цих політик, вас можуть забанити в Dater. Серйозно, не змушуйте нас гортати ліворуч від вас, тому що після цього ми не будемо робити жодних змін. Ми заохочуємо вас повідомляти про будь-яку поведінку, яка порушує нашу політику.
    Dater не для:

    Нагота/сексуальний вміст

    Ми не просимо вас зачісувати волосся набік або навіть говорити повними реченнями; але, будь ласка, зробіть це стильним і відповідним для публічного споживання. Ніякого оголеного тіла, відвертого сексуального вмісту та не записуйте всі свої сексуальні бажання у своїй біографії. Тримайте його в чистоті.
    Переслідування
    Не залучайте та не заохочуйте інших до участі в будь-якому цілеспрямованому образі чи переслідуванні будь-якого іншого користувача. Це включає надсилання будь-якого небажаного контенту сексуального характеру вашим партнерам. Повідомлення про переслідування, погрози, знущання чи залякування сприймаються дуже серйозно.
    
    Насильство та фізичні ушкодження
    
    Ми не допускаємо насильницького, відразливого чи кривавого вмісту на Dater, а також будь-яких дій чи вмісту, які пропагують або погрожують будь-яким видом насильства, включаючи погрози чи сприяння тероризму. Фізичні напади, примус та будь-які акти насильства суворо заборонені.
    Вміст, який пропагує або прославляє самогубство чи самоушкодження, також заборонено. У таких ситуаціях ми можемо вжити низку заходів, щоб допомогти користувачеві, зокрема звернутися за допомогою до кризових ресурсів.
    
    Мова ворожнечі
    Будь-який вміст, який пропагує, пропагує або виправдовує расизм, фанатизм, ненависть або насильство проти окремих осіб або груп на основі (але не обмежуючись ними) раси, етнічного походження, релігійної приналежності, інвалідності, статі, віку, національного походження, сексуальної орієнтації , або гендерна ідентичність не допускається.    
    
    Приватна інформація
    Не розголошуйте публічно будь-яку особисту інформацію, вашу чи чиюсь іншу. Сюди входять номери соціального страхування, паспорти, паролі, фінансова інформація або невказана контактна інформація, наприклад номери телефонів, адреси електронної пошти, домашня/робоча адреса.
    
    Спам
    Не будь фальшивим. Натомість будьте справжніми. Не використовуйте Dater, щоб залучати людей на зовнішні веб-сайти за допомогою посилання чи іншим чином.
    
    Заохочення або просування
    Залучення інших користувачів заборонено на Dater. Можна запрошувати своїх партнерів до того, що ви робите, але якщо метою вашого профілю є реклама вашої події чи бізнесу, некомерційної організації, політичної кампанії, конкурсу чи проведення досліджень, ми можемо видалити ваш обліковий запис. Хоча ми раді, що наступного тижня ви знімаєте комедійне шоу, будь ласка, не використовуйте Dater для його реклами.
    
    Проституція та торгівля людьми
    Просування або пропаганда комерційних сексуальних послуг, торгівлі людьми чи інших статевих актів без згоди суворо заборонено та призведе до блокування вашого облікового запису в Dater.
    
    Шахрайство
    Dater дотримується політики нульової терпимості до будь-якої хижацької поведінки. Будь-хто, хто намагається отримати особисту інформацію інших користувачів для шахрайської чи незаконної діяльності, може бути забанений. Будь-який користувач, спійманий у розголошенні інформації про власний фінансовий рахунок (PayPal, Venmo тощо) з метою отримання грошей від інших користувачів, також може бути забанений у Dater.
    
    Уособлення
    Будь собою! Не прикидайтеся кимось іншим.
    Не видавайте себе за будь-яку фізичну чи юридичну особу або іншим чином спотворюйте свою приналежність, зв’язок чи асоціацію з нею. Це включає пародійні акаунти. Хоча ми вважаємо, що ваш профіль Майка Пенса веселий, ви не Майк Пенс. І якщо так, що ви робите на Dater?
   
    Неповнолітні
    Вам має бути 18 років або більше, щоб використовувати Dater. Таким чином, ми не дозволяємо зображення неповнолітніх без супроводу. Якщо ви хочете опублікувати фотографії своїх дітей, будь ласка, переконайтеся, що ви також є на фото. Якщо ви бачите профіль, який містить неповнолітнього без супроводу, заохочує завдати шкоди неповнолітньому або зображує неповнолітнього в сексуальному чи непристойному вигляді, негайно повідомте про це.
    
    Порушення авторських прав і торгових марок
    Якщо це не ваше, не публікуйте його. Якщо ваш профіль Dater містить будь-яку роботу, яка захищена авторським правом або торговою маркою інших, не показуйте її, якщо вам це не дозволено.    
    
    Незаконне використання
    Не використовуйте Dater, щоб робити щось протизаконне. Якщо це незаконний IRL, це незаконно на Dater.
    
    Одна людина, один обліковий запис
    У облікових записів Dater не може бути кілька власників, тому не створюйте обліковий запис із вашим другом або другою половинкою. Крім того, будь ласка, не створюйте кілька облікових записів Dater.
    
    Програми сторонніх розробників
    Використання будь-яких програм, створених будь-ким, крім Dater, які стверджують, що пропонують наші послуги або розблоковують спеціальні функції Dater (наприклад, автоматичне гортання), заборонено.
    
    Бездіяльність облікового запису
    Dater цікаво використовувати... весь час! Використовуйте Dater на озері, використовуйте Dater під час їжі торта. Використовуйте Dater, коли вас немає, використовуйте Dater, коли сумніваєтеся! Але якщо ви не ввійдете у свій обліковий запис Dater протягом 2 років, ми можемо видалити ваш обліковий запис через бездіяльність.
    `,
  privacy_policy_text: `Dater Privacy
    НАШІ ЗОБОВ'ЯЗАННЯ ПЕРЕД ВАМИ Для Dater твоя конфіденційність є найвищим пріоритетом. Вона лежить в основі розробки та створення сервісів і продуктів, які ти знаєш і любиш. Все задля того, щоб у тебе була можливість повністю їм довіряти та зосередитися на нових важливих знайомствах.
    
    Ми цінуємо те, що ти довіряєш нам свою інформацію, і відповідально до цього ставимося.
    
    Наше зобов'язання щодо конфіденційності. Створюючи кожний продукт і сервіс, ми думаємо про конфіденційність наших користувачів. Ми залучаємо експертів із різних галузей, таких як право, безпека, розробка, проектування продуктів тощо, щоб приймати кожне рішення з повагою до твоєї конфіденційності.
    
    Наше зобов'язання щодо прозорості. Ми використовуємо багато тих самих онлайн-сервісів, що і ти, тож добре розуміємо, що неповна інформація та надто складна мова є типовими проблемами в політиках конфіденційності. Наш підхід прямо протилежний: ми намагаємося складати політику конфіденційності та інші схожі документи зрозумілою мовою. Ми справді хочемо, щоб користувачі прочитали нашу політику та зрозуміли наші методи.
    
    Наше зобов'язання щодо безпеки. У нас є люди, які піклуються про безпеку твоїх даних. Ми регулярно оновлюємо наші методи щодо безпеки та інвестуємо в цю галузь, щоб підсилити захист твоєї інформації.
    
    Політика конфіденційності Вітаємо у розділі Політики конфіденційності Dater. Дякуємо, що приділяєш час на ознайомлення з нею.
    
    Ми цінуємо, що ти довіряєш нам свою інформацію, і маємо намір зберегти цю довіру. По-перше, ми хочемо, щоб у тебе було розуміння про те, яку інформацію ми збираємо, чому ми її збираємо, як вона використовується та який ти маєш вибір щодо своїх даних. У цій політиці ми описуємо наші методи щодо конфіденційності простою мовою та намагаємося максимально уникати юридичної та технічної термінології.
    
    ДАТА НАБРАННЯ ЧИННОСТІ: 17 травня 2022 р.
    
    Де застосовується наша Політика конфіденційності
    Ця політика конфіденційності поширюється на застосунки, події та інші сервіси, якими керує бренд Dater. Для простоти в цій політиці конфіденційності все це ми називаємо нашими сервісами. Для ще більшої ясності ми додали посилання на цю політику конфіденційності на всі відповідні сервіси.
    
    Деякі сервіси можуть потребувати власної унікальної політики конфіденційності. Якщо певний сервіс має власну політику конфіденційності, то застосовується та політика, а не поточна.
    
    Інформація, яку ми збираємо
    Звичайно, ми не зможемо допомогти тобі завести потрібні знайомства без певної інформації про тебе, наприклад основних даних профілю та типажу людей, з якими ти хочеш спілкуватися. Ми також збираємо інформацію про те, як ти користуєшся нашими сервісами, як-от доступ до журналів, і дані від третіх сторін, коли ти, наприклад, заходиш на наші сервіси через свій акаунт у соціальній мережі чи завантажуєш інформацію зі свого акаунту в соцмережі, щоб заповнити профіль. Додаткова інформація наведена нижче.
    
    Інформація, яку ти нам надаєш
    Використовуючи наші сервіси, ти погоджуєшся надавати нам певну інформацію, включно з наступною:
    
    Створюючи акаунт, ти повідомляєш нам принаймні про свій імейл, а також деяку основну інформацію, яка необхідна для роботи сервісу, як-от гендер або дата народження. Заповнюючи профіль, ти можеш поділитися додатковою інформацією, такою як дані у біографії, інтереси й інші подробиці про себе, а також таким контентом, як фото. Щоб додати певні матеріали, наприклад фотографії, ти можеш надати нам доступ до свого фотоальбому. Якщо ти звертаєшся до нашої служби підтримки клієнтів, ми збираємо інформацію, яку ти надаєш нам під час цієї взаємодії. Якщо ти ділишся з нами інформацією про інших людей (наприклад, якщо ти використовуєш контактні дані друга для певної функції), ми обробляємо цю інформацію від твого імені, щоб виконати твій запит. Звичайно, ми також обробляємо дані з твоїх чатів з іншими користувачами та контент, який ти публікуєш, як це потребується для роботи сервісів. Інформація, яку ми отримуємо від інших Окрім інформації, яку ти надаєш безпосередньо нам, ми отримуємо інформацію про тебе від інших джерел, зокрема таких:
    
    Користувачі Користувачі можуть надавати інформацію про тебе, використовуючи наші сервісі, наприклад, якщо вони взаємодіють із тобою чи надсилають на тебе скаргу. Коли ти використовуєш наші сервіси, генеруються технічні дані про функції, які ти використовуєш, спосіб їхнього використання та пристрої, з яких ти користуєшся нашими сервісами. Нижче наведені подробиці:
    
    Відомості про використання Використання сервісів генерує дані про твою активність на них, наприклад, як ти ними користуєшся (як-от час входу, використані функцій, дії, показана тобі інформація, адреса вебсторінок із вихідним посиланням і реклама, з якою у тебе була взаємодія) та як взаємодієш з іншими користувачами (наприклад, користувачі, з якими ти спілкуєшся та взаємодієш, коли саме це трапляється, кількість відправлених і отриманих повідомлень). Відомості про пристрій Ми збираємо інформацію від пристрою чи пристроїв, з яких ти користуєшся нашими сервісами, та про них, включно з даними про апаратне та програмне забезпечення, такими як IP-адреса, ідентифікатор і тип пристрою, налаштування та характеристики застосунків, аварійні завершення роботи застосунків, рекламні ідентифікатори (випадково згенеровані числа, які можна скинути в налаштуваннях пристрою), ідентифікатори, пов’язані з файлами cookie чи іншими технологіями, які можуть однозначно ідентифікувати пристрій або браузер. Таким же чином, якщо ти надаси дозвіл, ми зможемо збирати фото.
    
    Як ми використовуємо інформацію
    Основна причина, з якої ми використовуємо твою інформацію, – це надання та покращення наших сервісів. Крім того, ми використовуємо твою інформацію, щоб захистити тебе. Нижче ми детально пояснили різні причини для використання твоєї інформації та навели практичні приклади.
    
    A. Для адміністрування твого акаунта та забезпечення роботи наших сервісів Створення акаунта та управління ним Надання тобі підтримки та відповідей на запити Виконання твоїх транзакцій Спілкування з тобою про наші сервіси B. Для допомоги вам у знайомстві з іншими користувачами Рекомендування тобі інших користувачів Показ профілів користувачів одне одному C. Для попередження та виявлення шахрайства чи іншої незаконної або несанкціонованої діяльності та боротьби з ними Пошук і усунення порушень (поточних, підозрюваних або ймовірних) наших Умов використання, зокрема через перегляд скарг і взаємодій між користувачами Краще розуміння та розробка протидії порушенням наших Умов використання Збереження даних, пов'язаних із порушенням наших Умов використання, щоб попередити повторні випадки Забезпечення дотримання чи здійснення наших прав, наприклад наших Умов використання Зв'язок з особами, які надсилають скарги, щоб повідомити їм про наші дії щодо їхньої скарги D. Для забезпечення дотримання законодавства Відповідність юридичним вимогам Допомога правоохоронним органам Інформація щодо обробки особистих даних через профілювання та автоматизоване прийняття рішень міститься у розділі частих запитань.
    
    Іншим користувачам Ти надаєш інформацію іншим користувачам, коли добровільно розкриваєш її на сервісі (включно з інформацію, що міститься у загальнодоступному профілі). Будь ласка, прояви обачність і переконайся, що ти дійсно не проти поділитися певною інформацією.
    
    Якщо хтось надішле скаргу, що пов'язана з тобою (наприклад, про твоє порушення наших Умов використання), ми можемо повідомити людині, яка надіслала цю скаргу, про заходи (за наявності), які ми вжили в результаті скарги.
    
    Ми дотримуємося суворого процесу перевірки, перш ніж залучати будь-якого постачальника послуг або працювати з будь-яким партнером. Наші постачальники послуг і партнери мають погодитися на суворі зобов'язання щодо конфіденційності.
    
    Ми надаємо твою інформацію філіалам для обмежених законних цілей, як зазначено нижче:
    
    Правоохоронним органам / на вимогу закону Ми можемо розкрити твою інформацію, якщо це обґрунтовано необхідно: 1) на вимогу судового процесу, наприклад згідно із судовим наказом, повісткою до суду чи ордером на обшук, через розслідування уряду чи правоохоронних органів або інші юридичні вимоги; 2) щоб допомогти запобігти скоєнню злочину чи виявити його (у кожному випадку залежить від застосовного закону); 3) для захисту якоїсь особи.
    
    Для забезпечення законних прав Ми також можемо надавати інформацію: 1) якщо розголошення пом'якшить нашу відповідальність у фактичному чи можливому позові; 2) в якості необхідного захисту наших законних прав і законних прав наших користувачів, ділових партнерів або інших зацікавлених сторін; 3) для виконання наших домовленостей з тобою; 4) для розслідування, запобігання чи вживання інших заходів щодо незаконної діяльності, можливого шахрайства чи інших правопорушень.
    
    За твоєю згодою чи запитом Ми можемо попросити твоєї згоди на передачу твоєї інформації третім сторонам. У таких випадках ми чітко пояснимо, чому ми хочемо передати цю інформацію.
    
    Ми можемо використовувати та передавати неособисту інформацію (тобто інформацію, яка сама по собі не ідентифікує вас, зокрема інформацію про пристрої, загальну демографічну інформацію, загальні дані про поведінку, місцеположення без визначення особи), а також особисту інформацію в гешованому вигляді, в якому її не може прочитати людина, за будь-яких вищезазначених обставин.
    
    Ваші права
    Ми хочемо, щоб у тебе був контроль над своєю інформацією, тому нагадуємо про такі доступні можливості та інструменти:
    
    Засоби доступу / оновлення в сервісі. Інструменти та налаштування акаунту допоможуть тобі отримати доступ до інформації, яку ти нам надаєш і яка пов'язана із твоїм акаунтом безпосередньо в сервісі, а також виправити чи вилучити таку інформацію. Якщо в тебе виникли питання щодо цих інструментів і налаштувань, звернися до нашої служби підтримки. Дозволи на пристрої. Мобільні платформи можуть мати системи дозволів для певних типів даних і сповіщень, таких як контакти телефона, зображення, сервіси локації, push-сповіщення та рекламні ідентифікатори. Ти можеш змінити налаштування пристрою, надавши згоду чи відмовивши в згоді на збір і обробку відповідної інформації чи показ відповідних сповіщень. Звичайно, якщо не надати згоду, певні сервіси можуть втратити свою функціональність. Видалення. Зупинити весь збір інформації у застосунку можна, видаливши його шляхом стандартного процесу видалення на твоєму пристрої. Зверни увагу: видалення застосунку НЕ припиняє дію акаунту. Щоб закрити свій акаунт, скористайся відповідною функцією на сервісі. Закриття акаунту. Акаунт можна закрити, скориставшись відповідною функцією безпосередньо в сервісі. Ми також хочемо, щоб наші користувачі знали про свої права на конфіденційність.
    `,
  i_agree_with: 'Я згоден з',
  and: 'і',
  privacy_policy_title: 'Політикою приватности',
};

export {ua};
