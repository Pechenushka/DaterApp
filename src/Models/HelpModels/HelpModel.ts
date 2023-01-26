import {ICONS} from '../../constants/icons';
import {app} from '../../Core/AppImpl';
import {BaseModel, baseModelProps} from '../../Core/BaseModel';
import {_} from '../../Core/Localization';
import {SimpleButtonModel} from '../Components/Buttons/SimpleButtonModel';

type helpModelProps = baseModelProps & {};

class HelpModel extends BaseModel<helpModelProps> {
  private _backButton: SimpleButtonModel;

  constructor(props: helpModelProps) {
    super(props);

    this._backButton = new SimpleButtonModel({
      id: '_backButton',
      onPress: this.onBackPress,
      icon: ICONS.BackArrowIconWhite,
    });
  }

  public get backButton() {
    return this._backButton;
  }

  public onBackPress = async () => {
    app.navigator.goToMainProfileScreen();
  };
}

export {HelpModel};
