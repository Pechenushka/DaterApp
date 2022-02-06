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

class MyAnnouncementScreen extends BaseLayoutView<MyAnnouncementController> {
  constructor(props: componentPropsWithModel<baseScreenProps, BaseScreenModel>) {
    super(props, MyAnnouncementController);
  }

  public get allowGoBack() {
    return true;
  }

  async componentDidMount() {
    super.componentDidMount();
  }

  get screenName() {
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
  }

  public content() {
    return (
      <View style={[BaseStyles.container]}>
        <MyAnnouncementView {...this.childProps(this.controller.myAnnouncementModel)} />
        <BottomNavigationView {...this.childProps(app.bottomNavigation)} />
      </View>
    );
  }
}

export {MyAnnouncementScreen};
