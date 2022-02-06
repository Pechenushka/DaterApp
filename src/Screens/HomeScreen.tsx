import React from 'react';
import {View} from 'react-native';
import {baseScreenProps, componentPropsWithModel} from '../Core/BaseComponent';
import {BaseScreenModel} from '../Core/BaseScreenModel';
import {HomeController} from '../Controllers/HomeController';
import {BaseLayoutView} from './BaseLayout';
import {BaseStyles} from '../Styles/BaseStyles';
import {HomeView} from '../Views/HomeViews/HomeView';
import {BottomNavigationView} from '../Views/BottomNavigation/BottomNavigationView';
import {app} from '../Core/AppImpl';

class HomeScreen extends BaseLayoutView<HomeController> {
  constructor(props: componentPropsWithModel<baseScreenProps, BaseScreenModel>) {
    super(props, HomeController);
  }

  public get allowGoBack() {
    return false;
  }

  async componentDidMount() {
    super.componentDidMount();
  }

  get screenName() {
    return 'HomeScreen';
  }

  public get showHeaderLeftComponent() {
    return false;
  }
  public get showHeaderRightComponent() {
    return false;
  }

  async onFocus(): Promise<void> {
    await super.onFocus();
    await this.controller.homeModel.checkUserStatus();
  }

  public content() {
    console.log('HomeScreen RENDERED');
    return (
      <View style={[BaseStyles.container]}>
        <HomeView {...this.childProps(this.controller.homeModel)} />
        <BottomNavigationView {...this.childProps(app.bottomNavigation)} />
      </View>
    );
  }
}

export {HomeScreen};
