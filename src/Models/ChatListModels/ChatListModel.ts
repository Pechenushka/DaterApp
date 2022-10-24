import {ICONS} from '../../constants/icons';
import {app} from '../../Core/AppImpl';
import {BaseModel, baseModelProps} from '../../Core/BaseModel';
import {chatItemDataType} from '../../Core/DataTypes/BaseTypes';
import {loadData, UserDataProvider} from '../../DataProvider/UserDataProvider';
import {SimpleButtonModel} from '../Components/Buttons/SimpleButtonModel';
import {ChatListItemModel} from './ChatListItemModel';

type chatListModelProps = baseModelProps & {};

class ChatListModel extends BaseModel<chatListModelProps> {
  private _loading: boolean = false;
  private _list: Array<ChatListItemModel> = [];
  private _menuButton: SimpleButtonModel;
  constructor(props: chatListModelProps) {
    super(props);
    this._menuButton = new SimpleButtonModel({
      id: '_menuButton',
      onPress: this.onMenuPress,
      icon: ICONS.menuButtonWhiteIcon,
    });
  }

  public get loading() {
    return this._loading;
  }

  public set loading(Val) {
    if (this._loading === Val) {
      return;
    }
    this._loading = Val;
    this.forceUpdate();
  }

  public get list() {
    return this._list;
  }

  public get menuButton() {
    return this._menuButton;
  }

  public onMenuPress = () => {
    app.navigator.openDrawer();
  };

  public init = async () => {
    this.loading = true;
    const res = await loadData(UserDataProvider.GetUserChats, {});
    if (res !== null && res.statusCode === 200) {
      this._list = res.data.map(chatItem => {
        return this.createChatItem(chatItem);
      });
    }
    this.loading = false;
  };

  public update = async () => {
    const res = await loadData(UserDataProvider.GetUserChats, {});
    if (res !== null && res.statusCode === 200) {
      this._list = [];
      this.forceUpdate();
      this._list = res.data.map(chatItem => {
        return this.createChatItem(chatItem);
      });
    }
    this.forceUpdate();
    console.log('UPDATED');
  };

  public createChatItem = (props: chatItemDataType) => {
    return new ChatListItemModel({...props});
  };
}

export {ChatListModel};
