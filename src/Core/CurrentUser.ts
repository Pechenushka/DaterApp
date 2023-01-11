import {saveData} from './saveData';
import {readData} from './readData';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {genderEnum} from '../Models/Components/Inputs/GenderSvitcherModel';
import {locationItemType} from './DataTypes/BaseTypes';
import {app} from './AppImpl';
import {localizationEnum} from '../localization/localizationTypes';
import {filterType} from '../Models/SearchModels/SearchModel';

type currentUserStateType = {
  userId: number;
  userName: string | undefined;
  gender: genderEnum | undefined;
  email: string | undefined;
  phone: string | undefined;
  telegram: string | undefined;
  birthDate: number | undefined;
  avatar: string | undefined;
  location: userLocationType | undefined;
  fcm: string | undefined;
  lang: localizationEnum;
  token: string | undefined;
  filters: filterType | undefined;
};

type userLocationType = {
  country: locationItemType;
  region: locationItemType;
  city: locationItemType;
};

class CurrentUser {
  private _user: currentUserStateType;
  constructor() {
    this._user = {
      userId: -1,
      userName: undefined,
      gender: undefined,
      email: undefined,
      phone: undefined,
      telegram: undefined,
      birthDate: undefined,
      avatar: undefined,
      location: undefined,
      fcm: undefined,
      lang: 'eng',
      token: undefined,
      filters: undefined,
    };
  }

  public clearUser = () => {
    this._user = {
      userId: -1,
      userName: undefined,
      gender: undefined,
      email: undefined,
      phone: undefined,
      telegram: undefined,
      birthDate: undefined,
      avatar: undefined,
      location: undefined,
      fcm: undefined,
      lang: this.lang,
      token: undefined,
      filters: undefined,
    };
    this.saveUser();
  };

  public get userId() {
    return this._user.userId;
  }

  public set userId(value) {
    this._user.userId = value;
  }

  public get userName() {
    return this._user.userName;
  }

  public set userName(value) {
    this._user.userName = value;
  }

  public get gender() {
    return this._user.gender;
  }

  public set gender(value) {
    this._user.gender = value;
  }

  public get email() {
    return this._user.email;
  }

  public set email(value) {
    this._user.email = value;
  }

  public get phone() {
    return this._user.phone;
  }

  public set phone(value) {
    this._user.phone = value;
  }

  public get telegram() {
    return this._user.telegram;
  }

  public set telegram(value) {
    this._user.telegram = value;
  }

  public get birthDate() {
    return this._user.birthDate;
  }

  public set birthDate(value) {
    this._user.birthDate = value;
  }

  public get avatar() {
    return this._user.avatar;
  }

  public set avatar(value) {
    this._user.avatar = value;
  }

  public get location() {
    return this._user.location;
  }

  public set location(value) {
    this._user.location = value;
  }

  public get fcm() {
    return this._user.fcm;
  }

  public set fcm(value) {
    this._user.fcm = value;
  }

  public get lang() {
    return this._user.lang;
  }

  public set lang(value) {
    this._user.lang = value;
  }

  public get token() {
    return this._user.token;
  }

  public set token(value) {
    this._user.token = value;
  }

  public get filters() {
    return this._user.filters;
  }

  public set filters(value) {
    this._user.filters = value;
  }

  // save user
  public async saveUser() {
    const userData = JSON.stringify(this._user);
    await saveData('secureUserData', userData);
  }

  public async restoreUserData() {
    const userData = await readData('secureUserData');
    if (userData === null) {
      return null;
    }
    if (typeof userData !== 'undefined') {
      let jsonData = JSON.parse(userData);
      this._user.userId = jsonData.userId;
      this._user.userName = jsonData.userName;
      this._user.gender = jsonData.gender;
      this._user.email = jsonData.email;
      this._user.birthDate = jsonData.birthDate;
      this._user.telegram = jsonData.telegram;
      this._user.phone = jsonData.phone;
      this._user.avatar = jsonData.avatar;
      this._user.location = jsonData.location;
      this._user.fcm = jsonData.fcm;
      this._user.lang = jsonData.lang;
      this._user.token = jsonData.token;
      this._user.filters = jsonData.filters;
    }
    await app.localization.init();
  }

  removeItemFromAsyncStorage = async (key: string) => {
    try {
      await AsyncStorage.removeItem(key);
      console.log('removeItemFromAsyncStorage true');
      return true;
    } catch (exception) {
      console.log('removeItemFromAsyncStorage false', exception);
      return false;
    }
  };
}

export {CurrentUser};
