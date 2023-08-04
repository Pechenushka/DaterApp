import Clipboard from '@react-native-clipboard/clipboard';
import {app} from '../../Core/AppImpl';
import {BaseModel, baseModelProps} from '../../Core/BaseModel';
import {messageItemDataType} from '../../Core/DataTypes/BaseTypes';
import {chatListItemType} from '../ChatListModels/ChatListItemModel';

type messageItemModelProps = baseModelProps &
  messageItemDataType & {
    onMessagePress: (messageId: number) => void;
    onReportPress: (
      messageId: number,
      authorId: number,
      authorAvatar: string,
      messageText: string,
      authorName: string,
      target: chatListItemType,
    ) => void;
    target: chatListItemType;
  };

class MessageItemModel extends BaseModel<messageItemModelProps> {
  private _isActive: boolean = false;
  constructor(props: messageItemModelProps) {
    super(props);
  }

  public get messageId() {
    return this.props.id;
  }

  public get messageText() {
    return this.props.messageText;
  }

  public get authorId() {
    return this.props.authorId;
  }

  public get timestamp() {
    return this.props.timestamp;
  }

  public get authorName() {
    return this.props.authorName;
  }

  public get authorAvatar() {
    return this.props.authorAvatar;
  }

  public get isActive() {
    return this._isActive;
  }

  public get target() {
    return this.props.target;
  }

  public set isActive(Val) {
    this._isActive = Val;
    this.forceUpdate();
  }

  public onMessageCopy = () => {
    Clipboard.setString(this.messageText);
    app.notification.showSuccess('Success!', 'Succesfuly copied!');
  };

  public onUserAvatarPress = () => {
    app.navigator.goToProfileDetailsScreen(this.authorId);
  };

  public onMessagePress = async () => {
    this.props.onMessagePress && this.props.onMessagePress(+this.messageId);
    if (this.isActive) {
      this.isActive = false;
      return;
    }
    this.isActive = true;
  };

  public onMessageReport = async () => {
    this.props.onReportPress &&
      this.props.onReportPress(
        +this.messageId,
        this.authorId,
        this.authorAvatar || '',
        this.messageText,
        this.authorName || '',
        this.target,
      );
  };
}

export {MessageItemModel};
