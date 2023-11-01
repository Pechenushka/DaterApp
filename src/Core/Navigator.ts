import {CommonActions, NavigationContainerRef, DrawerActions} from '@react-navigation/native';
import {saveData} from './saveData';
import {readData} from './readData';
import {app} from './AppImpl';
import {baseScreenCreator} from './BaseScreen';

import {MainProfileScreen} from '../Screens/MainProfileScreen';
import {LoaderScreen} from '../Screens/LoaderScreen';
import {LoginScreen} from '../Screens/LoginScreen';
import {SearchFeedScreen} from '../Screens/SearchFeedScreen';
import {MyAnnouncementScreen} from '../Screens/MyAnnouncementScreen';
import {ProfileDetailsScreen} from '../Screens/ProfileDetailsScreen';
import {LikesScreen} from '../Screens/LikesScreen';
import {ChatListScreen} from '../Screens/ChatListScreen';
import {ChatScreen} from '../Screens/ChatScreen';
import {FireBaseHandler} from './FireBaseHandler';
import {loadData, UserDataProvider} from '../DataProvider/UserDataProvider';
import crashlytics from '@react-native-firebase/crashlytics';
import {SocketHandler} from './Socket';
import {PhotoGalleryScreen} from '../Screens/PhotoGalleryScreen';
import {PhotoAccessRequestsScreen} from '../Screens/PhotoAccessRequestsScreen';
import {chatListItemType} from '../Models/ChatListModels/ChatListItemModel';

type screenHistoryType = {
  impl: baseScreenCreator;
  params?: object;
};

type stateProps = {
  prevScreens: Array<screenHistoryType>;
  appState: {
    isBackground: boolean;
  };
};

type navigationRouteParamsType = {
  name: string;
  key?: string;
  params?: object;
};

class Navigator {
  private _navigation: NavigationContainerRef | null;
  private _startAppWithBackground: boolean;
  private _state: stateProps;
  private _currentScreen: string;

  constructor() {
    this._navigation = null;
    this._state = {
      prevScreens: [{impl: LoaderScreen}],
      appState: {
        isBackground: false,
      },
    };
    this._currentScreen = LoaderScreen.name;
    this._startAppWithBackground = false;
  }

  public get state() {
    return this._state;
  }

  public get currentScreen() {
    return this._currentScreen;
  }
  public get prevScreen() {
    const length = this._state.prevScreens.length;
    return length > 1 ? this._state.prevScreens[length - 2].impl.name : LoaderScreen.name;
  }

  public set state(value) {
    this._state = value;
  }

  public get navigation() {
    return this._navigation;
  }

  public set navigation(value) {
    this._navigation = value;
  }

  public navigate(screenImpl: baseScreenCreator, params: object = {}) {
    if (this._navigation === null) {
      return;
    }
    if (this._currentScreen === screenImpl.name) {
      return;
    }
    this._currentScreen = screenImpl.name;
    const route: navigationRouteParamsType = {
      name: screenImpl.name,
      params,
    };
    this._navigation.dispatch(CommonActions.navigate(route));
    this.pushScreenToHistory(screenImpl, params);
  }

  public navigateToMainStack(screenImpl: baseScreenCreator, params: object = {}) {
    this._state.prevScreens = [];
    this.pushScreenToHistory(LoaderScreen);
    if (screenImpl !== MainProfileScreen) {
      this.pushScreenToHistory(MainProfileScreen);
    }
    this.navigate(screenImpl, params);
  }

  public pushScreenToHistory(screenImpl: baseScreenCreator, params: object = {}) {
    this._state.prevScreens.push({impl: screenImpl, params});
  }

  public get startAppWithBackground() {
    return this._startAppWithBackground;
  }

  public set startAppWithBackground(value) {
    this._startAppWithBackground = value;
  }

  public async handleBackground(state: string) {
    try {
      switch (state) {
        case 'start':
          // restore user data
          await app.currentUser.restoreUserData();
          await this.navigationUserStartApp();
          this._startAppWithBackground = false;
          await SocketHandler.connect();
          break;
        case 'active':
          await app.currentUser.restoreUserData();
          await this.navigationUserStartApp();
          this._startAppWithBackground = false;
          await SocketHandler.connect();
          break;
        case 'background':
          await app.currentUser.saveUser();
          SocketHandler.disconnect();
          this.saveNavigatorState();
          break;
      }
    } catch (error: any) {
      crashlytics().recordError(error, 'handleBackground error');
    }
  }

  public async navigationUserStartApp() {
    try {
      if (app.currentUser.userId === -1) {
        app.navigator.navigate(LoginScreen);
        return;
      }
      if (!app.addImpression) {
        const restoredScreen = await this.restoreNavigatorState();
        if (restoredScreen) {
          switch (restoredScreen) {
            case 'PhotoGalleryScreen':
              this.goToPhotoGallaryScreen();
              break;

            default:
              this.goToMainProfileScreen();
              break;
          }
        } else {
          this.goToMainProfileScreen();
        }
      }
      app.addImpression = false;
      FireBaseHandler.syncTokenDevice();
      app.bottomNavigation.updateCounters();
      this.setOnline();
    } catch (error: any) {
      crashlytics().recordError(error, 'navigationUserStartApp error');
    }
  }

  // restoreNavigatorState
  public restoreNavigatorState = async () => {
    const response = await readData('appState');
    if (response !== undefined && response !== null) {
      return response;
    }
  };

  // saveNavigatorState
  public saveNavigatorState() {
    const stringifyConfig = this.currentScreen;
    saveData('appState', stringifyConfig).then();
  }
  private static disabledScreens = [LoaderScreen];

  public static alwaysCreateNewScreens = [ProfileDetailsScreen];

  // go back
  public toGoBack() {
    const length = this.state.prevScreens.length;
    if (length < 2) {
      return;
    }
    const screen = this.state.prevScreens[length - 2];
    if (screen.impl === LoaderScreen) {
      return;
    }
    if (Navigator.disabledScreens.find(impl => impl === screen.impl) === undefined) {
      this.navigate(screen.impl, screen.params);
      this.state.prevScreens.splice(length - 2, 2);
    } else {
      this.state.prevScreens.splice(length - 1, 1);
      const lastScreen = this.state.prevScreens[this.state.prevScreens.length - 2];
      this.navigate(lastScreen.impl, lastScreen.params);
      this.state.prevScreens.splice(length - 2, 2);
    }
  }

  // Drawer Actions
  public openDrawer() {
    if (this.navigation === null) {
      return false;
    }
    this.navigation.dispatch(DrawerActions.openDrawer());
  }

  public closeDrawer() {
    if (this.navigation === null) {
      return false;
    }
    this.navigation.dispatch(DrawerActions.closeDrawer());
  }

  public toggleDrawer() {
    if (this.navigation === null) {
      return false;
    }
    this.navigation.dispatch(DrawerActions.toggleDrawer());
  }

  public goToMainProfileScreen() {
    this.navigate(MainProfileScreen);
    app.bottomNavigation.activeIndex = 3;
  }

  public goToSearchFeedScreen() {
    this.navigate(SearchFeedScreen);
    app.bottomNavigation.activeIndex = 4;
  }

  public goToMyAnnouncementScreen() {
    this.navigate(MyAnnouncementScreen);
    app.bottomNavigation.activeIndex = 0;
  }

  public goToPhotoGallaryScreen() {
    this.navigate(PhotoGalleryScreen);
    app.bottomNavigation.activeIndex = 0;
  }

  public goToPhotoAccesRequestsScreen() {
    this.navigate(PhotoAccessRequestsScreen);
    app.bottomNavigation.activeIndex = 0;
  }

  public goToLikesScreen() {
    this.navigate(LikesScreen);
    app.bottomNavigation.activeIndex = 5;
  }

  public goToProfileDetailsScreen(userId: number) {
    this.navigate(ProfileDetailsScreen, {userId});
    app.bottomNavigation.activeIndex = 0;
  }

  public goToChatScreen(type: chatListItemType, targetId: number) {
    this.navigate(ChatScreen, {type, targetId});
    app.bottomNavigation.activeIndex = 0;
  }

  public goToChatListScreen() {
    this.navigate(ChatListScreen);
    app.bottomNavigation.activeIndex = 2;
  }

  public setOnline = async () => {
    loadData(UserDataProvider.SetIsOnline, {userId: app.currentUser.userId});
  };
}

export {Navigator};
