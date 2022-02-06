import {ChatListModel} from '../Models/ChatListModels/ChatListModel';
import {BaseController, baseControllerProps} from './BaseController';

type chatListControllerProps = baseControllerProps & {};

class ChatListController extends BaseController {
  private _chatListModel: ChatListModel;
  constructor(props: chatListControllerProps) {
    super(props);
    this._chatListModel = new ChatListModel({id: '_chatListModel'});
  }

  public get chatListModel() {
    return this._chatListModel;
  }
}

export {ChatListController};
