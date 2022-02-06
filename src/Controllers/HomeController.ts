import {baseControllerProps} from './BaseController';
import {AccountController} from './AccountController';
import {HomeModel} from '../Models/HomeModels/HomeModel';

type homeControllerProps = baseControllerProps & {};

class HomeController extends AccountController {
  private _homeModel: HomeModel;
  constructor(props: homeControllerProps) {
    super(props);
    this._homeModel = new HomeModel({id: '_homeModel'});
  }
  public get homeModel() {
    return this._homeModel;
  }
}

export {HomeController};
