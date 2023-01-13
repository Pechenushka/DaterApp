import {ICONS} from '../../../constants/icons';
import {app} from '../../../Core/AppImpl';
import {BaseModel, baseModelProps} from '../../../Core/BaseModel';
import {_} from '../../../Core/Localization';
import {SimpleButtonModel} from '../Buttons/SimpleButtonModel';
import RNRestart from 'react-native-restart'; // Import package from node modules
import {DevSettings} from 'react-native';

type localizationModelProps = baseModelProps & {};

class LocalizationModel extends BaseModel<localizationModelProps> {
  private _selectionButton: SimpleButtonModel;
  private _visible: boolean = false;
  private _closeButton: SimpleButtonModel;

  private _rusButton: SimpleButtonModel;
  private _gbrButton: SimpleButtonModel;
  private _uaButton: SimpleButtonModel;
  private _belButton: SimpleButtonModel;
  private _plButton: SimpleButtonModel;
  private _gerButton: SimpleButtonModel;
  private _itlButton: SimpleButtonModel;
  private _fraButton: SimpleButtonModel;
  private _spaButton: SimpleButtonModel;
  private _porButton: SimpleButtonModel;

  constructor(props: localizationModelProps) {
    super(props);
    this._selectionButton = new SimpleButtonModel({
      id: '_selectionButton',
      onPress: this.onSelectionPress,
      icon: ICONS.gbrIcon,
      text: _.lang.lang_title,
    });

    this._rusButton = new SimpleButtonModel({
      id: '_rusButton',
      onPress: this.onRusPress,
      icon: ICONS.rusIcon,
      text: _.rus.lang_title,
    });

    this._gbrButton = new SimpleButtonModel({
      id: '_gbrButton',
      onPress: this.onGbrPress,
      icon: ICONS.gbrIcon,
      text: _.eng.lang_title,
    });

    this._uaButton = new SimpleButtonModel({
      id: '_uaButton',
      onPress: this.onUaPress,
      icon: ICONS.uaIcon,
      text: _.ua.lang_title,
    });

    this._belButton = new SimpleButtonModel({
      id: '_belButton',
      onPress: this.onBelPress,
      icon: ICONS.belIcon,
      text: _.bel.lang_title,
    });

    this._plButton = new SimpleButtonModel({
      id: '_plButton',
      onPress: this.onPlPress,
      icon: ICONS.plIcon,
      text: _.pl.lang_title,
    });

    this._gerButton = new SimpleButtonModel({
      id: '_gerButton',
      onPress: this.onGerPress,
      icon: ICONS.gerIcon,
      text: _.ger.lang_title,
    });

    this._fraButton = new SimpleButtonModel({
      id: '_fraButton',
      onPress: this.onFraPress,
      icon: ICONS.fraIcon,
      text: _.fra.lang_title,
    });

    this._porButton = new SimpleButtonModel({
      id: '_porButton',
      onPress: this.onPorPress,
      icon: ICONS.porIcon,
      text: _.por.lang_title,
    });

    this._itlButton = new SimpleButtonModel({
      id: '_itlButton',
      onPress: this.onItlPress,
      icon: ICONS.itlIcon,
      text: _.itl.lang_title,
    });

    this._spaButton = new SimpleButtonModel({
      id: '_spaButton',
      onPress: this.onSpaPress,
      icon: ICONS.spaIcon,
      text: _.spa.lang_title,
    });

    this._closeButton = new SimpleButtonModel({
      id: '_closeButton',
      onPress: this.onCloseButtonPress,
      icon: ICONS.deleteIcon,
    });
  }

  public get selectionButton() {
    return this._selectionButton;
  }

  public get closeButton() {
    return this._closeButton;
  }

  public get rusButton() {
    return this._rusButton;
  }

  public get gbrButton() {
    return this._gbrButton;
  }

  public get uaButton() {
    return this._uaButton;
  }

  public get belButton() {
    return this._belButton;
  }

  public get plButton() {
    return this._plButton;
  }

  public get gerButton() {
    return this._gerButton;
  }

  public get itlButton() {
    return this._itlButton;
  }

  public get fraButton() {
    return this._fraButton;
  }

  public get porButton() {
    return this._porButton;
  }

  public get spaButton() {
    return this._spaButton;
  }

  public get visible() {
    return this._visible;
  }

  public set visible(Val) {
    if (this._visible === Val) {
      return;
    }
    this._visible = Val;
    this.forceUpdate();
  }

  public onSelectionPress = async () => {
    this.visible = true;
  };

  public onRusPress = () => {
    this._selectionButton.icon = ICONS.rusIcon;
    this._selectionButton.text = _.rus.lang_title;
    app.currentUser.lang = 'rus';
    _.currLang = 'rus';
    this.visible = false;
  };

  public onGbrPress = () => {
    this._selectionButton.icon = ICONS.gbrIcon;
    this._selectionButton.text = _.eng.lang_title;
    app.currentUser.lang = 'eng';
    _.currLang = 'eng';
    this.visible = false;
  };

  public onUaPress = () => {
    this._selectionButton.icon = ICONS.uaIcon;
    this._selectionButton.text = _.ua.lang_title;
    app.currentUser.lang = 'ua';
    _.currLang = 'ua';
    this.visible = false;
  };

  public onBelPress = () => {
    this._selectionButton.icon = ICONS.belIcon;
    this._selectionButton.text = _.bel.lang_title;
    app.currentUser.lang = 'bel';
    _.currLang = 'bel';
    this.visible = false;
  };

  public onPlPress = () => {
    this._selectionButton.icon = ICONS.plIcon;
    this._selectionButton.text = _.pl.lang_title;
    app.currentUser.lang = 'pl';
    _.currLang = 'pl';
    this.visible = false;
  };

  public onGerPress = () => {
    this._selectionButton.icon = ICONS.gerIcon;
    this._selectionButton.text = _.ger.lang_title;
    app.currentUser.lang = 'ger';
    _.currLang = 'ger';
    this.visible = false;
  };

  public onItlPress = () => {
    this._selectionButton.icon = ICONS.itlIcon;
    this._selectionButton.text = _.itl.lang_title;
    app.currentUser.lang = 'itl';
    _.currLang = 'itl';
    this.visible = false;
  };

  public onFraPress = () => {
    this._selectionButton.icon = ICONS.fraIcon;
    this._selectionButton.text = _.fra.lang_title;
    app.currentUser.lang = 'fra';
    _.currLang = 'fra';
    this.visible = false;
  };

  public onPorPress = () => {
    this._selectionButton.icon = ICONS.porIcon;
    this._selectionButton.text = _.por.lang_title;
    app.currentUser.lang = 'por';
    _.currLang = 'por';
    this.visible = false;
  };

  public onSpaPress = () => {
    this._selectionButton.icon = ICONS.spaIcon;
    this._selectionButton.text = _.spa.lang_title;
    app.currentUser.lang = 'spa';
    _.currLang = 'spa';
    this.visible = false;
  };

  public onCloseButtonPress = async () => {
    this.visible = false;
  };

  public init = async () => {
    switch (app.currentUser.lang) {
      case 'eng':
        this._selectionButton.icon = ICONS.gbrIcon;
        this._selectionButton.text = _.lang.lang_title;
        break;

      case 'rus':
        this._selectionButton.icon = ICONS.rusIcon;
        this._selectionButton.text = _.lang.lang_title;
        break;

      case 'ua':
        this._selectionButton.icon = ICONS.uaIcon;
        this._selectionButton.text = _.lang.lang_title;
        break;

      case 'bel':
        this._selectionButton.icon = ICONS.belIcon;
        this._selectionButton.text = _.lang.lang_title;
        break;

      case 'pl':
        this._selectionButton.icon = ICONS.plIcon;
        this._selectionButton.text = _.lang.lang_title;
        break;

      case 'ger':
        this._selectionButton.icon = ICONS.gerIcon;
        this._selectionButton.text = _.lang.lang_title;
        break;

      case 'itl':
        this._selectionButton.icon = ICONS.itlIcon;
        this._selectionButton.text = _.lang.lang_title;
        break;

      case 'spa':
        this._selectionButton.icon = ICONS.spaIcon;
        this._selectionButton.text = _.lang.lang_title;
        break;

      case 'fra':
        this._selectionButton.icon = ICONS.fraIcon;
        this._selectionButton.text = _.lang.lang_title;
        break;

      case 'por':
        this._selectionButton.icon = ICONS.porIcon;
        this._selectionButton.text = _.lang.lang_title;
        break;

      default:
        break;
    }

    _.currLang = app.currentUser.lang;
  };
}

export {LocalizationModel};
