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

  private _rusButton: SimpleButtonModel;
  private _gbrButton: SimpleButtonModel;
  private _uaButton: SimpleButtonModel;

  constructor(props: localizationModelProps) {
    super(props);
    this._selectionButton = new SimpleButtonModel({
      id: '_selectionButton',
      onPress: this.onSelectionPress,
      icon: ICONS.gbrIcon,
    });

    this._rusButton = new SimpleButtonModel({
      id: '_rusButton',
      onPress: this.onRusPress,
      icon: ICONS.rusIcon,
    });

    this._gbrButton = new SimpleButtonModel({
      id: '_gbrButton',
      onPress: this.onGbrPress,
      icon: ICONS.gbrIcon,
    });

    this._uaButton = new SimpleButtonModel({
      id: '_uaButton',
      onPress: this.onUaPress,
      icon: ICONS.uaIcon,
    });
  }

  public get selectionButton() {
    return this._selectionButton;
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
    app.currentUser.lang = 'rus';
    _.currLang = 'rus';
    this.visible = false;
    DevSettings.reload();
  };

  public onGbrPress = () => {
    this._selectionButton.icon = ICONS.gbrIcon;
    app.currentUser.lang = 'eng';
    _.currLang = 'eng';
    this.visible = false;
    DevSettings.reload();
  };

  public onUaPress = () => {
    this._selectionButton.icon = ICONS.uaIcon;
    app.currentUser.lang = 'ua';
    _.currLang = 'ua';
    this.visible = false;
    DevSettings.reload();
  };

  public init = async () => {
    switch (app.currentUser.lang) {
      case 'eng':
        this._selectionButton.icon = ICONS.gbrIcon;
        break;

      case 'rus':
        this._selectionButton.icon = ICONS.rusIcon;
        break;

      default:
        break;
    }

    _.currLang = app.currentUser.lang;
  };
}

export {LocalizationModel};
