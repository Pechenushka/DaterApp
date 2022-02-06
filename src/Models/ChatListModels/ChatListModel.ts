import {BaseModel, baseModelProps} from '../../Core/BaseModel';
import {chatItemDataType} from '../../Core/DataTypes/BaseTypes';
import {loadData, UserDataProvider} from '../../DataProvider/UserDataProvider';
import {ChatListItemModel} from './ChatListItemModel';

type chatListModelProps = baseModelProps & {};

class ChatListModel extends BaseModel<chatListModelProps> {
  private _loading: boolean = false;
  private _list: Map<number, ChatListItemModel> = new Map();
  constructor(props: chatListModelProps) {
    super(props);
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

  public init = async () => {
    this.loading = true;
    const res = await loadData(UserDataProvider.GetUserChats, {});
    if (res !== null && res.statusCode === 200) {
      res.data.forEach(chatItem => {
        this.list.set(chatItem.id, this.createChatItem(chatItem));
      });
    }
    this.loading = false;
  };

  public createChatItem = (props: chatItemDataType) => {
    return new ChatListItemModel({...props});
  };
}

export {ChatListModel};
