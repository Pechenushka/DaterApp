import {Alert} from 'react-native';
import {ICONS} from '../../../constants/icons';
import {app} from '../../../Core/AppImpl';
import {BaseModel, baseModelProps} from '../../../Core/BaseModel';
import {_} from '../../../Core/Localization';
import {loadData, UserDataProvider} from '../../../DataProvider/UserDataProvider';
import {SimpleButtonModel} from '../../Components/Buttons/SimpleButtonModel';
import {TextInputModel} from '../../Components/Inputs/TextInputModel';

type photoReportModalModelProps = baseModelProps & {
  photoUrl: string;
};

class PhotoReportModalModel extends BaseModel<photoReportModalModelProps> {
  private _closeButton: SimpleButtonModel;
  private _submitButton: SimpleButtonModel;
  private _visible: boolean = false;

  private _comentInput: TextInputModel;

  constructor(props: photoReportModalModelProps) {
    super(props);
    this._closeButton = new SimpleButtonModel({
      id: '_closeButton',
      onPress: this.onCloseButtonPress,
      icon: ICONS.closeIcon,
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

  public get photoUrl() {
    return this.props.photoUrl;
  }

  public set photoUrl(Val) {
    this.props.photoUrl = Val;
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

    if (this.photoUrl.length < 6) {
      app.notification.showError(_.lang.warning, 'Photo url is not valid');
      this._submitButton.disabled = false;
      return;
    }

    const commentBody = {reportedPhotoUrl: this.photoUrl, comment: messageText};

    const inserRes = await loadData(UserDataProvider.ReportPhoto, commentBody);

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

export {PhotoReportModalModel};
