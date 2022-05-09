import {Alert} from 'react-native';
import {ICONS} from '../../constants/icons';
import {app} from '../../Core/AppImpl';
import {BaseModel, baseModelProps} from '../../Core/BaseModel';
import {_} from '../../Core/Localization';
import {loadData, UserDataProvider} from '../../DataProvider/UserDataProvider';
import {SimpleButtonModel} from '../Components/Buttons/SimpleButtonModel';
import {genderEnum} from '../Components/Inputs/GenderSvitcherModel';
import {TextInputModel} from '../Components/Inputs/TextInputModel';

type sendMessageModalModelProps = baseModelProps & {};

export type shortUserDataType = {
  userId: number;
  avatar: string;
  name: string;
  gender: genderEnum;
};

class SendMessageModalModel extends BaseModel<sendMessageModalModelProps> {
  private _closeButton: SimpleButtonModel;
  private _submitButton: SimpleButtonModel;
  private _visible: boolean = false;

  private _userData: shortUserDataType | null = null;
  private _messageInput: TextInputModel;

  constructor(props: sendMessageModalModelProps) {
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

    this._messageInput = new TextInputModel({
      id: '_messageInput',
      numberOfLines: 5,
      placeholder: _.lang.write_your_message,
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

  public get userData() {
    return this._userData;
  }

  public set userData(Val) {
    if (this._userData === Val) {
      return;
    }

    this._userData = Val;
    this._messageInput.value = '';
  }

  public get messageInput() {
    return this._messageInput;
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
    const [messageText] = [this._messageInput.value.trim()];
    if (messageText.length === 0) {
      Alert.alert('Warning', 'Empty message');
      this._submitButton.disabled = false;
      return;
    }

    const messageBody = {
      myId: app.currentUser.userId,
      userId: this._userData?.userId,
      text: messageText,
      timestamp: new Date().getTime(),
    };

    const inserRes = await loadData(UserDataProvider.WriteMessage, messageBody);

    if (inserRes === null) {
      Alert.alert('Warning', _.lang.servers_are_not_allowed);
      this._submitButton.disabled = false;
      return;
    }

    if (inserRes.statusCode !== 200) {
      Alert.alert('Warning', inserRes.statusMessage);
      this._submitButton.disabled = false;
      return;
    }

    this._submitButton.disabled = false;
    this.close();
  };

  public onChangeMessageText = async (newValue: string) => {
    newValue;
  };
}

export {SendMessageModalModel};
