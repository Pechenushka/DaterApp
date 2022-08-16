import React from 'react';
import {Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {TermsOfUseController} from '../Controllers/TermsOfUseController';
import {analyticHandler} from '../Core/AnalyticHanler';
import {baseScreenProps, componentPropsWithModel} from '../Core/BaseComponent';
import {BaseScreenModel} from '../Core/BaseScreenModel';
import {_} from '../Core/Localization';
import {BaseStyles} from '../Styles/BaseStyles';
import {SimpleButtonView} from '../Views/Components/Buttons/SimpleButtonView';
import {BaseLayoutView} from './BaseLayout';

class TermsOfUseScreen extends BaseLayoutView<TermsOfUseController> {
  constructor(props: componentPropsWithModel<baseScreenProps, BaseScreenModel>) {
    super(props, TermsOfUseController);
  }

  async componentDidMount() {
    super.componentDidMount();
  }

  get screenName() {
    return 'TermsOfUseScreen';
  }

  public get showHeaderLeftComponent() {
    return false;
  }
  public get showHeaderRightComponent() {
    return false;
  }

  async onFocus(): Promise<void> {
    await super.onFocus();
    analyticHandler.trackEvent('banned_screen_rendered');
  }

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
            <Text>{_.lang.terms_of_use_title}</Text>
          </View>
        </View>

        <ScrollView>
          <Text>{_.lang.terms_of_use}</Text>
        </ScrollView>
      </View>
    );
  }
}

export {TermsOfUseScreen};
