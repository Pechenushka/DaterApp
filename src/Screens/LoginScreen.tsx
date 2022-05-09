import React from 'react';
import {View} from 'react-native';
import {LoginController} from '../Controllers/LoginController';
import {analyticHandler} from '../Core/AnalyticHanler';
import {app} from '../Core/AppImpl';
import {baseScreenProps, componentPropsWithModel} from '../Core/BaseComponent';
import {BaseScreenModel} from '../Core/BaseScreenModel';
import {BaseStyles} from '../Styles/BaseStyles';
import {LocalizationView} from '../Views/Components/LocalizationViews/LocalizationView';
import {LoginFormView} from '../Views/LoginFormView/LoginFormView';
import {BaseLayoutView} from './BaseLayout';

class LoginScreen extends BaseLayoutView<LoginController> {
  constructor(props: componentPropsWithModel<baseScreenProps, BaseScreenModel>) {
    super(props, LoginController);
  }

  async componentDidMount() {
    super.componentDidMount();
  }

  get screenName() {
    return 'LoginScreen';
  }

  public get showHeaderLeftComponent() {
    return false;
  }
  public get showHeaderRightComponent() {
    return false;
  }

  async onFocus(): Promise<void> {
    await super.onFocus();
    analyticHandler.trackEvent('login_screen_rendered');
  }

  public content() {
    return (
      <View style={[BaseStyles.container]}>
        <LoginFormView {...this.childProps(this.controller.loginFormModel)} />
        <LocalizationView {...this.childProps(app.localization)} />
      </View>
    );
  }
}

export {LoginScreen};
