import {app} from '../../Core/AppImpl';
import {BaseModel, baseModelProps} from '../../Core/BaseModel';
import {genderEnum} from '../Components/Inputs/GenderSvitcherModel';

type chatListItemModelProps = baseModelProps & {
  avatar: string;
  chatHash: string;
  id: number;
  gender: genderEnum;
  lastMessage: string;
  lastMessageDate: number;
  name: string;
  unreadCount: number;
  userId: number;
  online_status: boolean;
};

class ChatListItemModel extends BaseModel<chatListItemModelProps> {
  constructor(props: chatListItemModelProps) {
    super(props);
  }

  public get avatar() {
    return this.props.avatar;
  }

  public get chatHash() {
    return this.props.chatHash;
  }

  public get gender() {
    return this.props.gender;
  }

  public get lastMessage() {
    return this.props.lastMessage;
  }

  public get lastMessageDate() {
    return this.props.lastMessageDate;
  }

  public get online_status() {
    return this.props.online_status;
  }

  public get name() {
    return this.props.name;
  }

  public get unreadCount() {
    return this.props.unreadCount;
  }

  public get userId() {
    return this.props.userId;
  }

  public onChatItemPress = async () => {
    app.navigator.goToChatScreen(this.userId);
  };
}

export {ChatListItemModel};
