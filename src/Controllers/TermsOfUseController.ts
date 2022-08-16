import {ICONS} from '../constants/icons';
import {app} from '../Core/AppImpl';
import {SimpleButtonModel} from '../Models/Components/Buttons/SimpleButtonModel';
import {BaseController, baseControllerProps} from './BaseController';

type termsOfUseControllerProps = baseControllerProps & {};

class TermsOfUseController extends BaseController {
  private _backButton: SimpleButtonModel;
  constructor(props: termsOfUseControllerProps) {
    super(props);
    this._backButton = new SimpleButtonModel({
      id: '_backButton',
      onPress: this.onBackPress,
      icon: ICONS.BackArrowIcon,
    });
  }

  public get backButton() {
    return this._backButton;
  }

  public onBackPress = async () => {
    app.navigator.toGoBack();
  };
}

export {TermsOfUseController};
