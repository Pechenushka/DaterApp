import {baseControllerProps} from './BaseController';
import {AccountController} from './AccountController';
import {HomeModel} from '../Models/HomeModels/HomeModel';
import {SimpleButtonModel} from '../Models/Components/Buttons/SimpleButtonModel';
import {ICONS} from '../constants/icons';
import {app} from '../Core/AppImpl';

type homeControllerProps = baseControllerProps & {};

class HomeController extends AccountController {
  private _homeModel: HomeModel;
  private _menuButton: SimpleButtonModel;
  constructor(props: homeControllerProps) {
    super(props);
    this._homeModel = new HomeModel({id: '_homeModel'});
    this._menuButton = new SimpleButtonModel({
      id: '_menuButton',
      onPress: this.onMenuPress,
      icon: ICONS.menuButtonWhiteIcon,
    });
  }

  public get homeModel() {
    return this._homeModel;
  }

  public get menuButton() {
    return this._menuButton;
  }

  public onMenuPress = () => {
    app.navigator.openDrawer();
  };

  public forceUpdate = () => {
    this._homeModel = new HomeModel({id: '_homeModel'});
    this._menuButton = new SimpleButtonModel({
      id: '_menuButton',
      onPress: this.onMenuPress,
      icon: ICONS.menuButtonWhiteIcon,
    });
  };
}

export {HomeController};
