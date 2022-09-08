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
import {analyticHandler} from '../Core/AnalyticHanler';
import deviceInfoModule from 'react-native-device-info';
import {ScrollView} from 'react-native-gesture-handler';
import {SimpleButtonView} from '../Views/Components/Buttons/SimpleButtonView';
import {HomeScreenStyles} from '../Styles/HomeScreenStyles';

class MainProfileScreen extends BaseLayoutView<HomeController> {
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
    return 'MainProfileScreen';
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
    analyticHandler.trackEvent('home_screen_rendered');
  }

  public content() {
    return (
      <View style={[BaseStyles.container]}>
        <ScrollView>
          <HomeView {...this.childProps(this.controller.homeModel)} />
        </ScrollView>

        <BottomNavigationView {...this.childProps(app.bottomNavigation)} />
        <SimpleButtonView
          styles={[HomeScreenStyles.menuButton]}
          iconStyles={[BaseStyles.bigIcon]}
          {...this.childProps(this.controller.menuButton)}
        />
      </View>
    );
  }
}

export {MainProfileScreen};
