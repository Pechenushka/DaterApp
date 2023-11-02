import React from 'react';
import {View} from 'react-native';
import {baseScreenProps, componentPropsWithModel} from '../Core/BaseComponent';
import {BaseScreenModel} from '../Core/BaseScreenModel';
import {BaseLayoutView} from './BaseLayout';
import {BaseStyles} from '../Styles/BaseStyles';
import {MyAnnouncementController} from '../Controllers/MyAnnouncementController';
import {MyAnnouncementView} from '../Views/MyAnnouncementViews/MyAnnouncementView';
import {BottomNavigationView} from '../Views/BottomNavigation/BottomNavigationView';
import {app} from '../Core/AppImpl';
import {analyticHandler} from '../Core/AnalyticHanler';

class MyAnnouncementScreen extends BaseLayoutView<MyAnnouncementController> {
  private _refMod: MyAnnouncementView | null = null;
  constructor(props: componentPropsWithModel<baseScreenProps, BaseScreenModel>) {
    super(props, MyAnnouncementController);
  }

  static screenName = 'MyAnnouncementScreen';

  public get allowGoBack() {
    return true;
  }

  async componentDidMount() {
    super.componentDidMount();
  }

  public get screenName() {
    return 'MyAnnouncementScreen';
  }
  public get shadowHeader() {
    return true;
  }

  public get showHeaderLeftComponent() {
    return true;
  }
  public get showHeaderRightComponent() {
    return true;
  }

  async onFocus(): Promise<void> {
    await super.onFocus();
    await this.controller.myAnnouncementModel.loadExistingAnnouncment();
    analyticHandler.trackEvent('my_announcement_screen_rendered');
  }

  public updateModel = async () => {
    await this.controller.myAnnouncementModel.loadExistingAnnouncment();
    this._refMod && this._refMod.updateAnyWay();
    this.forceUpdate();
  };

  public content() {
    return (
      <View style={[BaseStyles.container]}>
        <MyAnnouncementView
          ref={ref => {
            this._refMod = ref;
          }}
          {...this.childProps(this.controller.myAnnouncementModel)}
        />
        <BottomNavigationView {...this.childProps(app.bottomNavigation)} />
      </View>
    );
  }
}

export {MyAnnouncementScreen};
