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
import {LoaderScreen} from '../Screens/LoaderScreen';
import {MainProfileScreen} from '../Screens/MainProfileScreen';
import {SearchFeedScreen} from '../Screens/SearchFeedScreen';
import {LoginScreen} from '../Screens/LoginScreen';
import {CreateNewAccountScreen} from '../Screens/CreateNewAccountScreen';
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
    scrrenName: string;
    options?: object;
  }>;

  constructor() {
    this._stackDrawer = createDrawerNavigator();
    this._screens = [
      {Screen: LoaderScreen, scrrenName: 'LoaderScreen', options: {swipeEnabled: false}},
      {Screen: MainProfileScreen, scrrenName: 'MainProfileScreen', options: {swipeEnabled: true}},
      {Screen: SearchFeedScreen, scrrenName: 'SearchFeedScreen', options: {swipeEnabled: true}},
      {Screen: LoginScreen, scrrenName: 'LoginScreen', options: {swipeEnabled: false}},
      {Screen: CreateNewAccountScreen, scrrenName: 'CreateNewAccountScreen', options: {swipeEnabled: false}},
      {Screen: MyAnnouncementScreen, scrrenName: 'MyAnnouncementScreen', options: {swipeEnabled: true}},
      {Screen: ProfileDetailsScreen, scrrenName: 'ProfileDetailsScreen', options: {swipeEnabled: true}},
      {Screen: LikesScreen, scrrenName: 'LikesScreen', options: {swipeEnabled: true}},
      {Screen: ChatListScreen, scrrenName: 'ChatListScreen', options: {swipeEnabled: true}},
      {Screen: ChatScreen, scrrenName: 'ChatScreen', options: {swipeEnabled: true}},
    ];
  }

  public get stackDrawer() {
    return this._stackDrawer;
  }

  public get screens() {
    return this._screens;
  }

  public static initialRouteName = LoaderScreen.name;
}

export {Stacks};
