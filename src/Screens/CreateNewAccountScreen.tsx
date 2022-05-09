import React from 'react';
import {View} from 'react-native';
import {RegistrationController} from '../Controllers/RegistrationController';
import {analyticHandler} from '../Core/AnalyticHanler';
import {app} from '../Core/AppImpl';
import {baseScreenProps, componentPropsWithModel} from '../Core/BaseComponent';
import {BaseScreenModel} from '../Core/BaseScreenModel';
import {BaseStyles} from '../Styles/BaseStyles';
import {LocalizationView} from '../Views/Components/LocalizationViews/LocalizationView';
import {RegistrationFormView} from '../Views/RegistrationFormView/RegistrationFormView';
import {BaseLayoutView} from './BaseLayout';

class CreateNewAccountScreen extends BaseLayoutView<RegistrationController> {
  constructor(props: componentPropsWithModel<baseScreenProps, BaseScreenModel>) {
    super(props, RegistrationController);
  }

  async componentDidMount() {
    super.componentDidMount();
  }

  get screenName() {
    return 'CreateNewAccountScreen';
  }

  public get showHeaderLeftComponent() {
    return false;
  }
  public get showHeaderRightComponent() {
    return false;
  }

  async onFocus(): Promise<void> {
    await super.onFocus();
    analyticHandler.trackEvent('create_new_account_screen_rendered');
  }

  public content() {
    return (
      <View style={[BaseStyles.container]}>
        <RegistrationFormView {...this.childProps(this.controller.registrationFormModel)} />
        <LocalizationView {...this.childProps(app.localization)} />
      </View>
    );
  }
}

export {CreateNewAccountScreen};
