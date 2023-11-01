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
  private _refMod: LoginFormView | null = null;
  constructor(props: componentPropsWithModel<baseScreenProps, BaseScreenModel>) {
    super(props, LoginController);
  }

  public updateModel = () => {
    this._refMod && this._refMod.updateAnyWay();
  };

  async componentDidMount() {
    super.componentDidMount();
  }

  public get screenName() {
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
        <LoginFormView
          ref={ref => {
            this._refMod = ref;
          }}
          {...this.childProps(this.controller.loginFormModel)}
        />
        <LocalizationView {...this.childProps(app.localization)} />
      </View>
    );
  }
}

export {LoginScreen};
