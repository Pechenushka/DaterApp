import {createDrawerNavigator, DrawerNavigationOptions} from '@react-navigation/drawer';
import {
  TypedNavigator,
  StackNavigationState,
  DefaultNavigatorOptions,
  StackRouterOptions,
  DrawerNavigationState,
  DrawerRouterOptions,
} from '@react-navigation/native';
import {StackNavigationOptions} from '@react-navigation/stack';

import {StackNavigationEventMap, StackNavigationConfig} from '@react-navigation/stack/lib/typescript/src/types';
import {DrawerNavigationConfig, DrawerNavigationEventMap} from '@react-navigation/drawer/lib/typescript/src/types';
import {baseScreenCreator} from '../Core/BaseScreen';
import {SplashScreen} from '../Screens/SplashScreen';
import {HomeScreen} from '../Screens/HomeScreen';
import {SearchScreen} from '../Screens/SearchScreen';
import {LoginScreen} from '../Screens/LoginScreen';
import {RegistrationScreen} from '../Screens/RegistrationScreen';
import {MyAnnouncementScreen} from '../Screens/MyAnnouncementScreen';
import {ProfileDetailsScreen} from '../Screens/ProfileDetailsScreen';
import {LikesScreen} from '../Screens/LikesScreen';
import {ChatListScreen} from '../Screens/ChatListScreen';
import {ChatScreen} from '../Screens/ChatScreen';

type typedStackNavigator = TypedNavigator<
  Record<string, object | undefined>,
  StackNavigationState<Record<string, object | undefined>>,
  StackNavigationOptions,
  StackNavigationEventMap,
  ({
    initialRouteName,
    children,
    screenOptions,
    ...rest
  }: DefaultNavigatorOptions<StackNavigationOptions> & StackRouterOptions & StackNavigationConfig) => JSX.Element
>;
type typedDrawerNavigator = TypedNavigator<
  Record<string, object | undefined>,
  DrawerNavigationState<Record<string, object | undefined>>,
  DrawerNavigationOptions,
  DrawerNavigationEventMap,
  ({
    initialRouteName,
    children,
    screenOptions,
    ...rest
  }: DefaultNavigatorOptions<DrawerNavigationOptions> & DrawerRouterOptions & DrawerNavigationConfig) => JSX.Element
>;

class Stacks {
  private readonly _stackDrawer: typedDrawerNavigator;
  private readonly _screens: Array<{
    Screen: baseScreenCreator;
    options?: object;
  }>;

  constructor() {
    this._stackDrawer = createDrawerNavigator();
    this._screens = [
      {Screen: SplashScreen, options: {swipeEnabled: false}},
      {Screen: HomeScreen, options: {swipeEnabled: true}},
      {Screen: SearchScreen, options: {swipeEnabled: true}},
      {Screen: LoginScreen, options: {swipeEnabled: false}},
      {Screen: RegistrationScreen, options: {swipeEnabled: false}},
      {Screen: MyAnnouncementScreen, options: {swipeEnabled: true}},
      {Screen: ProfileDetailsScreen, options: {swipeEnabled: true}},
      {Screen: LikesScreen, options: {swipeEnabled: true}},
      {Screen: ChatListScreen, options: {swipeEnabled: true}},
      {Screen: ChatScreen, options: {swipeEnabled: true}},
    ];
  }

  public get stackDrawer() {
    return this._stackDrawer;
  }

  public get screens() {
    return this._screens;
  }

  public static initialRouteName = SplashScreen.name;
}

export {Stacks};
