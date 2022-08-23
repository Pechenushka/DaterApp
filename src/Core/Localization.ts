import {app} from './AppImpl';

export type localizationPackType = {
  lang_title: string;
  send: string;
  contacts: string;
  chats: string;
  profile_settings: string;
  likes: string;
  search: string;
  your_chats: string;
  filters: string;
  aply_filters: string;
  country: string;
  region: string;
  city: string;
  gender: string;
  age: string;
  feedback: string;
  privacy_rules: string;
  terms_of_use_title: string;
  something_went_wrong: string;
  location: string;
  my_likes: string;
  me_liked: string;
  matches: string;
  items_not_found: string;
  enter_your_message: string;
  write_few_words_about_yourself: string;
  your_announcement: string;
  announcement_text: string;
  preview: string;
  edit: string;
  send_your_message: string;
  write_your_message: string;
  servers_are_not_allowed: string;
  please_request_moderation: string;
  moderation_request_pending: string;
  profile_not_moderated: string;
  help: string;
  requests: string;
  authorization: string;
  or: string;
  enter_your_email: string;
  enter_your_password: string;
  create_new_account: string;
  login: string;
  enter_your_name: string;
  repeat_your_password: string;
  date_of_birth: string;
  chose_country: string;
  chose_region: string;
  chose_city: string;
  sign_up: string;
  month: Array<string>;
  selectLanguage: string;
  languageWarning: string;
  send_message: string;
  like: string;
  block_user: string;
  unblock_user: string;
  report_user: string;
  send_report: string;
  add_comment_to_report: string;
  must_be_at_least: (chars: number) => string;
  warning: string;
  your_report_successfully_sended: string;
  you_are_banned: string;
  terms_of_use: string;
  privacy_policy_text: string;
  i_agree_with: string;
  and: string;
  privacy_policy_title: string;
};

export type localizationEnum = 'eng' | 'rus' | 'ua';

class Localization {
  private _eng: localizationPackType = {
    lang_title: 'English',
    send: 'Send',
    contacts: 'contacts',
    chats: 'chats',
    profile_settings: 'prifile settings',
    matches: 'Matches',
    age: 'age',
    announcement_text: 'announcement text',
    aply_filters: 'aply filters',
    city: 'city',
    country: 'country',
    edit: 'edit',
    enter_your_message: 'Enter your message',
    filters: 'Filters',
    gender: 'gender',
    items_not_found: 'Items not found',
    likes: 'likes',
    location: 'location',
    me_liked: 'Me Liked',
    my_likes: 'My Likes',
    preview: 'Preview',
    region: 'region',
    search: 'search',
    send_your_message: 'Send your message',
    something_went_wrong: 'something went wrong',
    write_few_words_about_yourself: 'Write few words about yourself',
    write_your_message: 'Write your message',
    your_announcement: 'your announcement',
    your_chats: 'your chats',
    servers_are_not_allowed: 'Servers are not alowed or no internet connection',
    moderation_request_pending: 'Your moderation request waiting to approve',
    profile_not_moderated:
      'Profile not moderated. Your avatar photo is unacceptable. Please change your avatar',
    please_request_moderation: 'Almoust done! Please request moderation by adding avatar',
    help: 'help',
    requests: 'requests',
    authorization: 'Authorization',
    or: 'or',
    enter_your_email: 'Enter your email',
    enter_your_password: 'Enter your password',
    create_new_account: 'Create new accont',
    login: 'login',
    chose_city: 'Chose city',
    chose_country: 'Chose country',
    chose_region: 'Chose region',
    date_of_birth: 'Date of birth',
    enter_your_name: 'Enter your name',
    repeat_your_password: 'Repeat your password',
    sign_up: 'Sign Up!',
    feedback: 'Contact us',
    month: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
    selectLanguage: 'Slect your language',
    languageWarning: 'Changes will be applied after restart',
    send_message: 'Send Message',
    like: 'Like',
    block_user: 'Block User',
    unblock_user: 'Unblock User',
    report_user: 'Report User',
    send_report: 'Send report',
    add_comment_to_report: 'Add comment to report',
    must_be_at_least: (chars: number) => {
      return `Must be at least ${chars} chars`;
    },
    warning: 'Warning',
    your_report_successfully_sended: 'Your report was successfully sended',
    you_are_banned: 'Your profile was banned for violating community rules',
    privacy_rules: 'Privacy',
    terms_of_use_title: 'Terms of use',
    terms_of_use: `Community Guidelines
    Welcome to the Dater community. If you’re honest, kind and respectful to others, you’ll always be welcome here. If you choose not to be, you may not last. Our goal is to allow users to express themselves freely as long as it doesn’t offend others. Everyone is held to the same standard on Dater. We’re asking you to be considerate, think before you act, and abide by our community guidelines both on and offline. You heard that right: your offline behavior can lead to termination of your Dater account.
    Below is a list of our community policies. If you violate any of these policies, you might be banned from Dater. Seriously, don’t make us Swipe Left on you—because there will be no do-overs once we do. We encourage you to report any behavior that violates our policies.
    Dater is not for:

    Nudity/Sexual Content

    We’re not asking you to comb your hair to one side or even speak in full sentences; but please keep it classy and appropriate for public consumption. No nudity, no sexually explicit content, and don’t chronicle all of your sexual desires in your bio. Keep it clean.
    Harassment
    Do not engage, or encourage others to engage, in any targeted abuse or harassment against any other user. This includes sending any unsolicited sexual content to your matches. Reports of stalking, threats, bullying, or intimidation, are taken very seriously.
    
    Violence and Physical Harm
    
    We do not tolerate violent, graphic, or gory content on Dater, or any actions or content that advocate for or threaten violence of any sort, including threatening or promoting terrorism. Physical assault, coercion, and any acts of violence are strictly prohibited.
    Content that advocates for or glorifies suicide or self-harm is also not allowed. In these situations, we may take a number of steps to assist the user, including reaching out with crisis resources.
    
    Hate Speech
    Any content that promotes, advocates for, or condones racism, bigotry, hatred, or violence against individuals or groups based on factors like (but not limited to) race, ethnicity, religious affiliation, disability, gender, age, national origin, sexual orientation, or gender identity is not allowed.
    
    Private Information
    Don’t publicly broadcast any private information, yours or anyone else’s. This includes social security numbers, passports, passwords, financial information or unlisted contact information, such as phone numbers, email addresses, home/work address.
    
    Spam
    Don’t be fake. Be real instead. Don’t use Dater to drive people to external websites via a link or otherwise.
    
    Promotion or Solicitation
    Soliciting other users is prohibited on Dater. It’s fine to invite your matches to something that you’re doing, but if the purpose of your profile is to advertise your event or business, non-profit, political campaign, contest, or to conduct research, we may delete your account. While we’re excited that you’re doing a comedy show next week, please don’t use Dater to promote it.
    
    Prostitution and Trafficking
    Promoting or advocating for commercial sexual services, human trafficking or other non-consensual sexual acts is strictly prohibited and will result in your account being banned from Dater.
    
    Scamming
    Dater has a zero-tolerance policy on predatory behavior of any kind. Anyone attempting to get other users’ private information for fraudulent or illegal activity may be banned. Any user caught sharing their own financial account information (PayPal, Venmo, etc.) for the purpose of receiving money from other users may also be banned from Dater.
    
    Impersonation
    Be yourself! Don’t pretend to be someone else.
    Do not impersonate, or otherwise misrepresent affiliation, connection or association with, any person or entity. This includes parody accounts. While we think your Mike Pence profile is hilarious, you aren’t Mike Pence. And if you are, what are you doing on Dater?
   
    Minors
    You must be 18 years of age or older to use Dater. As such, we do not allow images of unaccompanied minors. If you want to post photos of your children, please make sure that you are in the photo as well. If you see a profile that includes an unaccompanied minor, encourages harm to a minor, or depicts a minor in a sexual or suggestive way, please report it immediately.
    
    Copyright and Trademark Infringement
    If it’s not yours, don’t post it. If your Dater profile includes any work that is copyrighted or trademarked by others, don’t display it, unless you are allowed to do so.
    
    Illegal Usage
    Don’t use Dater to do anything illegal. If it’s illegal IRL, it’s illegal on Dater.
    
    One Person, One Account
    Dater accounts cannot have multiple owners, so don’t create an account with your friend or significant other. Additionally, please don’t maintain multiple Dater accounts.
    
    Third Party Apps
    The use of any apps created by anyone other than Dater that claim to offer our service or unlock special Dater features (like auto-swipers) is not allowed.
    
    Account Dormancy
    Dater is fun to use... all the time! Use Dater at the lake, use Dater while eating cake. Use Dater when you’re out, use Dater when in doubt! But, if you don’t log in to your Dater account in 2 years, we may delete your account for inactivity.
    `,
    privacy_policy_text: `Dater Privacy
    OUR COMMITMENT TO YOU At Dater, your privacy is our highest priority. It is at the heart of developing and creating the services and products you know and love. All so that you have the opportunity to fully trust them and focus on new important acquaintances.
    
    We appreciate the fact that you trust us with your information, and we treat it responsibly.
    
    Our Privacy Commitment. When creating each product and service, we think about the privacy of our users. We bring in experts from various fields such as legal, security, development, product design and more to make every decision with respect for your privacy.
    
    Our commitment to transparency. We use many of the same online services as you, so we understand that incomplete information and overly complex language are common problems with privacy policies. Our approach is exactly the opposite: we try to write the privacy policy and other similar documents in an understandable language. We really want users to read our policies and understand our practices.
    
    Our commitment to safety. We have people who care about the security of your data. We regularly update our security practices and invest in the industry to strengthen the protection of your information.
    
    Privacy Policy Welcome to Dater's Privacy Policy. Thank you for taking the time to get to know her.
    
    We appreciate that you trust us with your information, and we intend to keep that trust. First, we want you to understand what information we collect, why we collect it, how it is used, and what choices you have about your data. In this policy, we describe our privacy practices in plain language and try to avoid legal and technical terminology as much as possible.
    
    EFFECTIVE DATE: May 17, 2022.
    
    Where our Privacy Policy applies
    This privacy policy applies to applications, events and other services operated by the Dater brand. For simplicity in this privacy policy, we refer to all of these as our services. For even greater clarity, we have added a link to this privacy policy on all relevant services.
    
    Some services may require their own unique privacy policy. If a particular service has its own privacy policy, that policy applies, not the current one.

    Information we collect
    Of course, we won't be able to help you make the right acquaintances without certain information about you, such as basic profile data and the type of people you want to communicate with. We also collect information about how you use our services, such as access to logs, and data from third parties when you, for example, access our services through your social network account or download information from your social network account, to complete a profile. Additional information is provided below.
    
    Information you provide to us
    By using our services, you agree to provide us with certain information, including the following:
    
    When you create an account, you tell us at least your email address and some basic information that is necessary for the service to work, such as your gender or date of birth. When filling out a profile, you can share additional information, such as biographical information, interests and other details about yourself, as well as content such as a photo. To add certain materials, such as photos, you can give us access to your photo album. If you contact our customer support service, we collect information that you provide to us during that interaction. If you share information about other people with us (for example, if you use a friend's contact details for a feature), we process that information on your behalf to fulfill your request. Of course, we also process data from your chats with other users and the content you post as needed to operate the services. Information We Receive From Others In addition to the information you provide directly to us, we receive information about you from other sources, including:
    
    Users Users may provide information about you when using our services, for example, if they interact with you or submit a complaint about you. When you use our services, technical data is generated about the features you use, how you use them, and the devices from which you use our services. Below are the details:
    
    Usage Information Your use of the Services generates data about your activity on them, for example, how you use them (such as login time, functions used, actions, information shown to you, the address of the web pages with the original link and advertisements with which you interacted) and how you interact with other users (for example, the users with whom you communicate and interact, when exactly this happens, the number of messages sent and received). Device Information We collect information from and about the device or devices from which you use our services, including hardware and software data, such as IP address, device identifier and type, application settings and characteristics, crashes applications, advertising identifiers (randomly generated numbers that can be reset in the device settings), identifiers associated with cookies or other technologies that can uniquely identify a device or browser. In the same way, if you give permission, we can collect photos.
    
    How we use information
    The main reason we use your information is to provide and improve our services. In addition, we use your information to protect you. Below we have explained in detail the various reasons for using your information and provided practical examples.
    
    A. To administer your account and ensure the operation of our services Creating and managing your account Providing you with support and answers to your requests Carrying out your transactions Communicating with you about our services B. To help you get to know other users Recommending other users to you Showing user profiles one to one C. To prevent and detect and combat fraud or other illegal or unauthorized activity Search for and remedy violations (current, suspected or suspected) of our Terms of Use, including by reviewing complaints and interactions between users Better understand and develop countermeasures against violations of our Terms of Use Retaining data related to a breach of our Terms of Use to prevent repeat incidents Enforcing or enforcing our rights, such as our Terms of Use Contacting individuals who submit complaints to inform them of our action on their complaint D. To ensure compliance legislation Compliance with legal requirements Assistance to law enforcement agencies Information on the processing of personal data through profiling and automated decision-making can be found in the FAQ section.
    
    To other users You provide information to other users when you voluntarily disclose it on the service (including information contained in a public profile). Please exercise caution and make sure that you really do not mind sharing certain information.
    
    If someone submits a complaint related to you (for example, about your violation of our Terms of Use), we may notify the person who submitted the complaint about the action (if any) we have taken as a result of the complaint.
    
    We follow a strict vetting process before engaging any service provider or working with any partner. Our service providers and partners must agree to strict confidentiality obligations.
    
    We share your information with affiliates for limited lawful purposes as set forth below:
    
    To law enforcement agencies / as required by law We may disclose your information if reasonably necessary: ​​1) as required by legal process, such as pursuant to a court order, subpoena or search warrant, due to a government or law enforcement investigation, or other legal requirements; 2) to help prevent or detect a crime (in each case subject to applicable law); 3) for the protection of some person.
    
    To enforce legal rights, We may also provide information: 1) if disclosure would mitigate our liability in an actual or potential lawsuit; 2) as necessary to protect our legal rights and the legal rights of our users, business partners or other interested parties; 3) to fulfill our agreements with you; 4) to investigate, prevent or take other measures regarding illegal activity, possible fraud or other offenses.
    
    Upon your consent or request, We may ask for your consent to share your information with third parties. In such cases, we will clearly explain why we want to share this information.
    
    We may use and share non-personal information (that is, information that does not personally identify you, including device information, general demographic information, general behavioral data, non-personally identifiable location information), and personal information in a hashed form in which it cannot be read by a person under any of the above circumstances.
    
    Your rights
    We want you to be in control of your information, so we remind you of the following options and tools:
    
    Means of access / update in the service. Account tools and settings will help you access the information you provide to us that is related to your account directly on the Service, as well as correct or remove such information. If you have any questions about these tools and settings, please contact our support team. Device permissions. Mobile platforms may have permission systems for certain types of data and notifications, such as phone contacts, images, location services, push notifications, and advertising identifiers. You can change the settings of the device, giving consent or denying consent to the collection and processing of relevant information or the display of relevant notifications. Of course, if you do not give consent, certain services may lose their functionality. Removal You can stop all information collection by the app by uninstalling it through the standard uninstall process on your device. Please note: deleting the application does NOT terminate the account. To close your account, use the corresponding function on the service. Account closure. The account can be closed by using the corresponding function directly in the service. We also want our users to be aware of their privacy rights.`,
    i_agree_with: 'I agree with',
    and: 'and',
    privacy_policy_title: 'Privacy policy',
  };

  private _rus: localizationPackType = {
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
    gender: 'пол',
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
    month: [
      'Января',
      'Февраля',
      'Марта',
      'Апреля',
      'Мая',
      'Июня',
      'Июля',
      'Августа',
      'Сентября',
      'Октября',
      'Ноября',
      'Декабря',
    ],
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
  };

  private _ua: localizationPackType = {
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

  private _currLang: localizationEnum = 'eng';

  constructor() {}

  public get eng() {
    return this._eng;
  }

  public get rus() {
    return this._rus;
  }

  public get ua() {
    return this._ua;
  }

  public get lang() {
    return this[this._currLang];
  }

  public get currLang() {
    return this._currLang;
  }

  public set currLang(Val) {
    if (this._currLang === Val) {
      return;
    }
    this._currLang = Val;
    app.mainNavigationModel.forceUpdate();

    // Immediately reload the React Native Bundle
  }
}

export const _ = new Localization();
