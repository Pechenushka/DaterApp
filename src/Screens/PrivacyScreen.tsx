import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {PrivacyConctroller} from '../Controllers/PrivacyConctroller';
import {analyticHandler} from '../Core/AnalyticHanler';
import {baseScreenProps, componentPropsWithModel} from '../Core/BaseComponent';
import {BaseScreenModel} from '../Core/BaseScreenModel';
import {_} from '../Core/Localization';
import {BaseStyles} from '../Styles/BaseStyles';
import {SimpleButtonView} from '../Views/Components/Buttons/SimpleButtonView';
import {BaseLayoutView} from './BaseLayout';

class PrivacyScreen extends BaseLayoutView<PrivacyConctroller> {
  constructor(props: componentPropsWithModel<baseScreenProps, BaseScreenModel>) {
    super(props, PrivacyConctroller);
  }

  async componentDidMount() {
    super.componentDidMount();
  }

  get screenName() {
    return 'PrivacyScreen';
  }

  public get showHeaderLeftComponent() {
    return false;
  }
  public get showHeaderRightComponent() {
    return false;
  }

  async onFocus(): Promise<void> {
    await super.onFocus();
    analyticHandler.trackEvent('privacy_screen_rendered');
  }

  public updateModel = async () => {
    this.forceUpdate();
  };

  public content() {
    return (
      <View style={[BaseStyles.container, BaseStyles.alignCenter]}>
        <View style={[BaseStyles.w100, BaseStyles.h40px, BaseStyles.bg_white, BaseStyles.row]}>
          <View style={[BaseStyles.w10, BaseStyles.h100, BaseStyles.alignCenter]}>
            <SimpleButtonView
              iconStyles={BaseStyles.defaultIcon}
              {...this.childProps(this.controller.backButton)}
            />
          </View>

          <View style={[BaseStyles.w80, BaseStyles.h100, BaseStyles.alignCenter]}>
            <Text>{_.lang.privacy_rules}</Text>
          </View>
        </View>

        <ScrollView>
          <Text>{_.lang.privacy_policy_text}</Text>
        </ScrollView>
      </View>
    );
  }
}

export {PrivacyScreen};
