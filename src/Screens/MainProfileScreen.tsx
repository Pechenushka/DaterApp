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
  private _refMod: HomeView | null = null;
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
    await this.controller.homeModel.updateRequestCount();
    analyticHandler.trackEvent('home_screen_rendered');
  }

  public updateModel = async () => {
    await this.controller.homeModel.checkUserStatus();
    this._refMod && this._refMod.updateAnyWay();
    this.forceUpdate();
  };

  public content() {
    return (
      <View style={[BaseStyles.container]}>
        <ScrollView contentContainerStyle={[BaseStyles.h100, BaseStyles.w100]}>
          <HomeView
            ref={ref => {
              this._refMod = ref;
            }}
            {...this.childProps(this.controller.homeModel)}
          />
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
