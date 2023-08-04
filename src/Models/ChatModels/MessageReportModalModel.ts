import {app} from '../../Core/AppImpl';
import {BaseModel, baseModelProps} from '../../Core/BaseModel';
import {_} from '../../Core/Localization';
import {UserDataProvider, loadData} from '../../DataProvider/UserDataProvider';
import {ICONS} from '../../constants/icons';
import {chatListItemType} from '../ChatListModels/ChatListItemModel';
import {SimpleButtonModel} from '../Components/Buttons/SimpleButtonModel';
import {TextInputModel} from '../Components/Inputs/TextInputModel';

type messageReportModalModelProps = baseModelProps & {};

type messageData = {
  messageText: string;
  authorId: number;
  messageId: number;
  authorAvatar: string;
  authorName: string;
  target: chatListItemType;
};

class MessageReportModalModel extends BaseModel<messageReportModalModelProps> {
  private _visible: boolean = false;
  private _messageText: string = '';
  private _authorId: number = -1;
  private _messageId: number = -1;
  private _authorAvatar: string = '';
  private _authorName: string = '';
  private _closeButton: SimpleButtonModel;
  private _comentInput: TextInputModel;
  private _submitButton: SimpleButtonModel;
  private _target: chatListItemType = 'private';
  private _targetId: number = -1;

  constructor(props: messageReportModalModelProps) {
    super(props);
    this._closeButton = new SimpleButtonModel({
      id: '_closeButton',
      onPress: this.onCloseButtonPress,
      icon: ICONS.deleteIcon,
    });

    this._comentInput = new TextInputModel({
      id: '_messageInput',
      numberOfLines: 5,
      placeholder: _.lang.add_comment_to_report,
      onChangeText: this.onChangeMessageText,
      maxLength: 500,
      showCounter: true,
    });

    this._submitButton = new SimpleButtonModel({
      id: '_submitButton',
      onPress: this.onSubmitButtonPress,
      text: _.lang.send,
    });
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

  public get targetId() {
    return this._targetId;
  }

  public set targetId(Val) {
    this._targetId = Val;
  }

  public get messageText() {
    return this._messageText;
  }

  public get authorId() {
    return this._authorId;
  }

  public get messageId() {
    return this._messageId;
  }

  public get authorAvatar() {
    return this._authorAvatar;
  }

  public get authorName() {
    return this._authorName;
  }

  public get closeButton() {
    return this._closeButton;
  }

  public get comentInput() {
    return this._comentInput;
  }

  public get submitButton() {
    return this._submitButton;
  }

  public onCloseButtonPress = async () => {
    this.close();
  };

  public setMessageData = (params: messageData) => {
    this._comentInput.value = '';
    this._authorAvatar = params.authorAvatar;
    this._authorId = params.authorId;
    this._messageId = params.messageId;
    this._messageText = params.messageText;
    this._authorName = params.authorName;
    this._target = params.target;
  };

  public open = async () => {
    this.visible = true;
  };

  public close = async () => {
    this.visible = false;
  };

  public onChangeMessageText = async (newValue: string) => {
    newValue;
  };

  public onSubmitButtonPress = async () => {
    this._submitButton.disabled = true;
    const [messageText] = [this._comentInput.value.trim()];
    if (messageText.length < 6) {
      app.notification.showError(_.lang.warning, _.lang.must_be_at_least(6));
      this._submitButton.disabled = false;
      return;
    }

    if (this._target === 'private') {
      this._submitButton.disabled = false;
      return;
    }
    const res = await loadData(UserDataProvider.ReportMessage, {
      target: this._target,
      targetId: this._targetId,
      messageId: this._messageId,
      comment: messageText,
      authorId: this._authorId,
    });
    if (res === null) {
      app.notification.showError(_.lang.warning, _.lang.servers_are_not_allowed);
      this._submitButton.disabled = false;
      return;
    }

    if (res.statusCode !== 200) {
      app.notification.showError(_.lang.warning, res.statusMessage);
      this._submitButton.disabled = false;
      return;
    }
    app.notification.showSuccess(_.lang.success, _.lang.your_report_successfully_sended);
    this._submitButton.disabled = false;

    this.close();
  };
}

export {MessageReportModalModel};
