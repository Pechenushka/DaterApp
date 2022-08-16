import {ChatModel} from '../Models/ChatModels/ChatModel';
import {BaseController, baseControllerProps} from './BaseController';

type bannedControllerProps = baseControllerProps & {};

class BannedController extends BaseController {
  constructor(props: bannedControllerProps) {
    super(props);
  }
}

export {BannedController};
