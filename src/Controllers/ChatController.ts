import {ChatModel} from '../Models/ChatModels/ChatModel';
import {BaseController, baseControllerProps} from './BaseController';

type chatControllerProps = baseControllerProps & {};

class ChatController extends BaseController {
  private _chatModel: ChatModel;
  constructor(props: chatControllerProps) {
    super(props);
    this._chatModel = new ChatModel({id: '_chatModel'});
  }

  public get chatModel() {
    return this._chatModel;
  }
}

export {ChatController};
