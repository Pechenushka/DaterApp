import {baseControllerProps} from './BaseController';
import {AccountController} from './AccountController';
import {MyAnnouncementModel} from '../Models/MyAnnouncementModels/MyAnnouncementModel';

type myAnnouncementControllerProps = baseControllerProps & {};

class MyAnnouncementController extends AccountController {
  private _myAnnouncementModel: MyAnnouncementModel;
  constructor(props: myAnnouncementControllerProps) {
    super(props);
    this._myAnnouncementModel = new MyAnnouncementModel({id: '_myAnnouncementModel'});
  }

  public get myAnnouncementModel() {
    return this._myAnnouncementModel;
  }

  public forceUpdate = () => {
    this._myAnnouncementModel = new MyAnnouncementModel({id: '_myAnnouncementModel'});
  };
}

export {MyAnnouncementController};
