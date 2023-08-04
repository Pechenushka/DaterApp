import {BaseModel, baseModelProps} from '../../Core/BaseModel';
import {_} from '../../Core/Localization';
import {SimpleButtonModel} from '../Components/Buttons/SimpleButtonModel';

type chatContextMenuModelProps = baseModelProps & {
  onBlockUser: () => Promise<void>;
  onUnblockUser: () => Promise<void>;
  onChatDelete: () => Promise<void>;
  blocked: boolean;
};

class ChatContextMenuModel extends BaseModel<chatContextMenuModelProps> {
  private _visible: boolean = false;

  private _deleteChatButton: SimpleButtonModel;
  private _blockUserButton: SimpleButtonModel;
  private _unBlockUserButton: SimpleButtonModel;

  constructor(props: chatContextMenuModelProps) {
    super(props);
    this._deleteChatButton = new SimpleButtonModel({
      id: '_deleteChatButton',
      onPress: this.onChatDeletePress,
      text: _.lang.delete_chat,
    });

    this._blockUserButton = new SimpleButtonModel({
      id: '_blockUserButton',
      onPress: this.onUserBlockPress,
      text: _.lang.block_user,
    });

    this._unBlockUserButton = new SimpleButtonModel({
      id: '_unBlockUserButton',
      onPress: this.onUserUnBlockPress,
      text: _.lang.unblock_user,
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

  public get blocked() {
    return this.props.blocked;
  }

  public set blocked(Val) {
    if (this.props.blocked === Val) {
      return;
    }

    this.props.blocked = Val;
    this.forceUpdate();
  }

  public get deleteChatButton() {
    return this._deleteChatButton;
  }

  public get blockUserButton() {
    return this._blockUserButton;
  }

  public get unBlockUserButton() {
    return this._unBlockUserButton;
  }

  public open = async () => {
    this.visible = true;
  };

  public onUserBlockPress = async () => {
    this._blockUserButton.disabled = true;
    this.props.onBlockUser && (await this.props.onBlockUser());
    this._blockUserButton.disabled = false;
    this.close();
  };

  public onUserUnBlockPress = async () => {
    this._unBlockUserButton.disabled = true;
    this.props.onUnblockUser && (await this.props.onUnblockUser());
    this._unBlockUserButton.disabled = false;
    this.close();
  };

  public onChatDeletePress = async () => {
    this.props.onChatDelete && (await this.props.onChatDelete());
    this.close();
  };

  public close = async () => {
    this.visible = false;
  };
}

export {ChatContextMenuModel};
