/* eslint-disable consistent-this */
import {BaseScreen, baseScreenCreator} from './BaseScreen';
import {BaseController} from '../Controllers/BaseController';
import {Navigator} from './Navigator';
import {CurrentUser} from './CurrentUser';
import {AppModel} from './AppModel';
import {name as appName} from '../../app.json';
import {BaseScreenModel} from './BaseScreenModel';
import {Stacks} from '../Controllers/Stacks';
import {MainNavigationModel} from '../Navigation/MainNavigationModel';
import {BottomNavigationModel} from '../Models/BottomNavigation/BottomNavigationModel';
import {LocalizationModel} from '../Models/Components/LocalizationModels/LocalizationModel';
import {adsHandler} from './AdsHandler';
import {PhotoViewerModel} from '../Models/Components/PhotoViewer/PhotoViewerModel';
import {PopupNotificationModel} from '../Models/Components/Popups/PopupNotificationModel';

class MainApp implements AppImpl {
  private readonly _model: AppModel;

  private readonly _navigator: Navigator;
  private readonly _currentUser: CurrentUser;
  private readonly _mainNavigationModel: MainNavigationModel;
  private readonly _screens: {
    [key: string]: BaseScreen<BaseController>;
  };
  private readonly _screenModels: {
    [key: string]: BaseScreenModel;
  };
  private readonly _stacks: Stacks;
  private _bottomNavigation: BottomNavigationModel;
  private _localization: LocalizationModel;
  private _photoViewer: PhotoViewerModel;
  private _notification: PopupNotificationModel;
  public addImpression: boolean = false;

  constructor() {
    // eslint-disable-next-line no-undef
    __app__ = this;
    this._model = new AppModel({appName, id: appName});
    this._navigator = new Navigator();
    this._currentUser = new CurrentUser();
    this._mainNavigationModel = new MainNavigationModel({id: 'MainNavigationModel'});
    this._screens = {};
    this._screenModels = {};
    this._stacks = new Stacks();
    this._bottomNavigation = new BottomNavigationModel({
      id: '_bottomNavigation',
    });
    this._localization = new LocalizationModel({id: '_localization'});
    adsHandler.init();
    setTimeout(() => {
      this._bottomNavigation.init();
    }, 10);
    this._photoViewer = new PhotoViewerModel({id: '_photoViewer'});
    this._notification = new PopupNotificationModel({id: '_notification'});
  }
  public get model() {
    return this._model;
  }

  public get stacks() {
    return this._stacks;
  }

  public get name() {
    return appName;
  }

  public get localization() {
    return this._localization;
  }

  public get bottomNavigation() {
    return this._bottomNavigation;
  }

  public get photoViewer() {
    return this._photoViewer;
  }

  public get notification() {
    return this._notification;
  }

  public getScreen(name: string) {
    return this._screens[name];
  }

  public setScreen<T extends BaseScreen<BaseController>>(screenInstance: T) {
    this._screens[screenInstance.screenName] = screenInstance;
  }

  public setScreenModel(modelImpl: baseScreenCreator) {
    if (Navigator.alwaysCreateNewScreens.find(impl => impl === modelImpl) !== undefined) {
      return new BaseScreenModel({
        id: modelImpl.screenName,
        screenName: modelImpl.screenName,
      });
    }
    let model = this._screenModels[modelImpl.screenName];
    if (model === undefined) {
      model = new BaseScreenModel({
        id: modelImpl.screenName,
        screenName: modelImpl.screenName,
      });
      this._screenModels[modelImpl.screenName] = model;
    }
    return model;
  }

  public forseUpdateAll = () => {
    Object.values(this._screens).forEach(screen => {
      screen.controller.forceUpdate && screen.controller.forceUpdate();
      //@ts-ignore
      screen.updateModel && screen.updateModel();
    });
  };

  public get screens() {
    return this._screens;
  }

  public get navigator() {
    return this._navigator;
  }

  public get mainNavigationModel() {
    return this._mainNavigationModel;
  }

  public get currentUser() {
    return this._currentUser;
  }
}

export const app = new MainApp();
