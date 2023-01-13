import {bel} from '../localization/bel';
import {eng} from '../localization/eng';
import {fra} from '../localization/fra';
import {ger} from '../localization/ger';
import {itl} from '../localization/itl';
import {localizationEnum} from '../localization/localizationTypes';
import {pl} from '../localization/pl';
import {por} from '../localization/por';
import {rus} from '../localization/rus';
import {spa} from '../localization/spa';
import {ua} from '../localization/ua';
import {app} from './AppImpl';

class Localization {
  private _ua = ua;
  private _eng = eng;
  private _rus = rus;
  private _bel = bel;
  private _pl = pl;
  private _ger = ger;
  private _itl = itl;
  private _spa = spa;
  private _fra = fra;
  private _por = por;

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
    return this._pl;
  }

  public get ger() {
    return this._ger;
  }

  public get itl() {
    return this._itl;
  }

  public get spa() {
    return this._spa;
  }

  public get fra() {
    return this._fra;
  }

  public get por() {
    return this._por;
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
