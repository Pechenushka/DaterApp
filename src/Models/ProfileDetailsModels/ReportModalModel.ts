import {Alert} from 'react-native';
import {ICONS} from '../../constants/icons';
import {app} from '../../Core/AppImpl';
import {BaseModel, baseModelProps} from '../../Core/BaseModel';
import {_} from '../../Core/Localization';
import {loadData, UserDataProvider} from '../../DataProvider/UserDataProvider';
import {SimpleButtonModel} from '../Components/Buttons/SimpleButtonModel';
import {genderEnum} from '../Components/Inputs/GenderSvitcherModel';
import {TextInputModel} from '../Components/Inputs/TextInputModel';

type reportModalModelProps = baseModelProps & {
  userId: number;
  avatar: string;
  name: string;
  gender: genderEnum;
};

class ReportModalModel extends BaseModel<reportModalModelProps> {
  private _closeButton: SimpleButtonModel;
  private _submitButton: SimpleButtonModel;
  private _visible: boolean = false;

  private _comentInput: TextInputModel;

  constructor(props: reportModalModelProps) {
    super(props);
    this._closeButton = new SimpleButtonModel({
      id: '_closeButton',
      onPress: this.onCloseButtonPress,
      icon: ICONS.deleteIcon,
    });

    this._submitButton = new SimpleButtonModel({
      id: '_submitButton',
      onPress: this.onSubmitButtonPress,
      text: _.lang.send,
    });

    this._comentInput = new TextInputModel({
      id: '_messageInput',
      numberOfLines: 5,
      placeholder: _.lang.add_comment_to_report,
      onChangeText: this.onChangeMessageText,
      maxLength: 500,
      showCounter: true,
    });
  }

  public get closeButton() {
    return this._closeButton;
  }

  public get submitButton() {
    return this._submitButton;
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

  public get comentInput() {
    return this._comentInput;
  }

  public get userId() {
    return this.props.userId;
  }

  public set userId(Val) {
    this.props.userId = Val;
  }

  public get name() {
    return this.props.name;
  }

  public set name(Val) {
    this.props.name = Val;
  }

  public get gender() {
    return this.props.gender;
  }

  public set gender(Val) {
    this.props.gender = Val;
  }

  public get avatar() {
    return this.props.avatar;
  }

  public set avatar(Val) {
    this.props.avatar = Val;
  }

  public open = async () => {
    this.visible = true;
  };

  public close = async () => {
    this.visible = false;
  };

  public onCloseButtonPress = async () => {
    this.close();
  };

  public onSubmitButtonPress = async () => {
    this._submitButton.disabled = true;
    const [messageText] = [this._comentInput.value.trim()];
    if (messageText.length < 6) {
      app.notification.showError(_.lang.warning, _.lang.must_be_at_least(6));
      this._submitButton.disabled = false;
      return;
    }

    const commentBody = {
      userId: app.currentUser.userId,
      reportedUserId: this.userId,
      comment: messageText,
    };

    const inserRes = await loadData(UserDataProvider.ReportUser, commentBody);

    if (inserRes === null) {
      app.notification.showError(_.lang.warning, _.lang.servers_are_not_allowed);
      this._submitButton.disabled = false;
      return;
    }

    if (inserRes.statusCode !== 200) {
      app.notification.showError(_.lang.warning, inserRes.statusMessage);
      this._submitButton.disabled = false;
      return;
    }

    if (inserRes.statusCode === 200) {
      app.notification.showError(_.lang.warning, _.lang.your_report_successfully_sended);
    }

    this._submitButton.disabled = false;
    this.close();
  };

  public onChangeMessageText = async (newValue: string) => {
    newValue;
  };
}

export {ReportModalModel};
