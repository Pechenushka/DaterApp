import {CommonActions, NavigationContainerRef, DrawerActions} from '@react-navigation/native';
import {saveData} from './saveData';
import {readData} from './readData';
import {app} from './AppImpl';
import {baseScreenCreator} from './BaseScreen';

import {HomeScreen} from '../Screens/HomeScreen';
import {SplashScreen} from '../Screens/SplashScreen';
import {LoginScreen} from '../Screens/LoginScreen';
import {SearchScreen} from '../Screens/SearchScreen';
import {MyAnnouncementScreen} from '../Screens/MyAnnouncementScreen';
import {ProfileDetailsScreen} from '../Screens/ProfileDetailsScreen';
import {LikesScreen} from '../Screens/LikesScreen';
import {ChatListScreen} from '../Screens/ChatListScreen';
import {ChatScreen} from '../Screens/ChatScreen';
import {FireBaseHandler} from './FireBaseHandler';
import {loadData, UserDataProvider} from '../DataProvider/UserDataProvider';

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
      prevScreens: [{impl: SplashScreen}],
      appState: {
        isBackground: false,
      },
    };
    this._currentScreen = SplashScreen.name;
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
    return length > 1 ? this._state.prevScreens[length - 2].impl.name : SplashScreen.name;
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
    this.pushScreenToHistory(SplashScreen);
    if (screenImpl !== HomeScreen) {
      this.pushScreenToHistory(HomeScreen);
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
    switch (state) {
      case 'start':
        // restore user data
        await app.currentUser.restoreUserData();
        //
        await this.navigationUserStartApp();
        this._startAppWithBackground = false;
        break;
      case 'active':
        await app.currentUser.restoreUserData();
        await this.navigationUserStartApp();
        // this.restoreNavigatorState();
        break;
      case 'background':
        await app.currentUser.saveUser();
        //this.saveNavigatorState();
        break;
    }
  }

  public async navigationUserStartApp() {
    if (app.currentUser.userId === -1) {
      app.navigator.navigate(LoginScreen);
      return;
    }
    this.goToHomeScreen();
    FireBaseHandler.syncTokenDevice();
    app.bottomNavigation.updateCounters();
    this.setOnline();
  }

  // restoreNavigatorState
  public restoreNavigatorState() {
    readData('appState').then(async (response: string | null | undefined) => {
      if (response !== undefined && response !== null) {
        this.state = JSON.parse(response);
      }
    });
  }

  // saveNavigatorState
  public saveNavigatorState() {
    const stringifyConfig = JSON.stringify(this.state);
    saveData('appState', stringifyConfig).then();
  }
  private static disabledScreens = [SplashScreen];

  public static alwaysCreateNewScreens = [ProfileDetailsScreen];

  // go back
  public toGoBack() {
    const length = this.state.prevScreens.length;
    if (length < 2) {
      return;
    }
    const screen = this.state.prevScreens[length - 2];
    if (screen.impl === SplashScreen) {
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

  public goToHomeScreen() {
    this.navigate(HomeScreen);
    app.bottomNavigation.activeIndex = 3;
  }

  public goToSearchScreen() {
    this.navigate(SearchScreen);
    app.bottomNavigation.activeIndex = 4;
  }

  public goToMyAnnouncementScreen() {
    this.navigate(MyAnnouncementScreen);
    app.bottomNavigation.activeIndex = 0;
  }

  public goToLikesScreen() {
    this.navigate(LikesScreen);
    app.bottomNavigation.activeIndex = 5;
  }

  public goToProfileDetailsScreen(userId: number) {
    this.navigate(ProfileDetailsScreen, {userId});
  }

  public goToChatScreen(userId: number) {
    this.navigate(ChatScreen, {userId});
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
