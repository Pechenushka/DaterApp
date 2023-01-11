import Clipboard from '@react-native-clipboard/clipboard';
import {app} from '../../Core/AppImpl';
import {BaseModel, baseModelProps} from '../../Core/BaseModel';
import {messageItemDataType} from '../../Core/DataTypes/BaseTypes';

type messageItemModelProps = baseModelProps & messageItemDataType & {};

class MessageItemModel extends BaseModel<messageItemModelProps> {
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

  public onMessageCopy = () => {
    Clipboard.setString(this.messageText);
    app.notification.showSuccess('Success!', 'Succesfuly copied!');
  };
}

export {MessageItemModel};
