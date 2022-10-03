import {bel} from '../localization/bel';
import {eng} from '../localization/eng';
import {localizationEnum} from '../localization/localizationTypes';
import {rus} from '../localization/rus';
import {ua} from '../localization/ua';
import {app} from './AppImpl';

class Localization {
  private _ua = ua;
  private _eng = eng;
  private _rus = rus;
  private _bel = bel;

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

  public get bel() {
    return this._bel;
  }

  public get pl() {
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
    app.localization.forceUpdate();
    app.forseUpdateAll();
    setTimeout(() => {
      app.forseUpdateAll();
    }, 30);

    setTimeout(() => {
      app.forseUpdateAll();
    }, 60);

    // Immediately reload the React Native Bundle
  }
}

export const _ = new Localization();
