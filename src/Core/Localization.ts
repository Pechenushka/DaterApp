import {app} from './AppImpl';

export type localizationPackType = {
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
  report_user: string;
};

export type localizationEnum = 'eng' | 'rus' | 'ua';

class Localization {
  private _eng: localizationPackType = {
    send: 'send',
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
    items_not_found: 'items not found',
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
    report_user: 'Report User',
  };

  private _rus: localizationPackType = {
    send: 'отправить',
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
    items_not_found: 'ничего не найдено',
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
    report_user: 'Пожаловаться',
  };

  private _ua: localizationPackType = {
    send: 'відправити',
    contacts: 'контакти',
    chats: 'чати',
    profile_settings: 'налаштування профілю',
    age: 'вік',
    announcement_text: 'текст анкети',
    aply_filters: 'застосувати фільтри',
    city: 'місто',
    country: 'країна',
    edit: 'редагувати',
    enter_your_message: 'Введіть ваше повідомлення',
    filters: 'фільтри',
    gender: 'стать',
    items_not_found: 'нічого не знайдено',
    likes: 'лайки',
    location: 'Локація',
    matches: 'Співпадання',
    me_liked: 'Mене лайкнули',
    my_likes: 'Mої лайки',
    preview: 'попередній перегляд',
    region: 'регіон',
    search: 'пошук',
    send_your_message: 'відправ своє повідомлення',
    something_went_wrong: 'щось пішло не так',
    write_few_words_about_yourself: 'Напишіть коротко про себе',
    write_your_message: 'Текст повідомлення',
    your_announcement: 'ваша анкета',
    your_chats: 'ваші чати',
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
    login: 'увійти',
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
    report_user: 'Поскаржитись',
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
