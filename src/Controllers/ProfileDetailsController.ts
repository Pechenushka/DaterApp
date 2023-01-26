import {ICONS} from '../constants/icons';
import {app} from '../Core/AppImpl';
import {SimpleButtonModel} from '../Models/Components/Buttons/SimpleButtonModel';
import {ProfileDetailsModel} from '../Models/ProfileDetailsModels/ProfileDetailsModel';
import {BaseController, baseControllerProps} from './BaseController';

export type profileDetailsControllerProps = baseControllerProps & {};

class ProfileDetailsController extends BaseController {
  private _profileModel: ProfileDetailsModel;
  private _backButton: SimpleButtonModel;
  private _userId: any;
  constructor(props: profileDetailsControllerProps) {
    super(props);
    //@ts-ignore
    this._profileModel = new ProfileDetailsModel({id: '_profileModel', userId: props.userId});
    //@ts-ignore
    this._userId = props.userId;

    this._backButton = new SimpleButtonModel({
      id: '_backButton',
      onPress: this.onBackPress,
      icon: ICONS.BackArrowIconWhite,
    });
  }

  public get profileModel() {
    return this._profileModel;
  }

  public get backButton() {
    return this._backButton;
  }

  public forceUpdate = () => {
    this._profileModel = new ProfileDetailsModel({id: '_profileModel', userId: this._userId});
  };

  public onBackPress = () => {
    app.navigator.toGoBack();
  };
}

export {ProfileDetailsController};
