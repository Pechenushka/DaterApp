import React from 'react';
import {Text, View} from 'react-native';
import {BannedController} from '../Controllers/BannedController';
import {analyticHandler} from '../Core/AnalyticHanler';
import {baseScreenProps, componentPropsWithModel} from '../Core/BaseComponent';
import {BaseScreenModel} from '../Core/BaseScreenModel';
import {_} from '../Core/Localization';
import {BaseStyles} from '../Styles/BaseStyles';
import {BaseLayoutView} from './BaseLayout';

class BannedScreen extends BaseLayoutView<BannedController> {
  constructor(props: componentPropsWithModel<baseScreenProps, BaseScreenModel>) {
    super(props, BannedController);
  }

  async componentDidMount() {
    super.componentDidMount();
  }

  public get screenName() {
    return 'BannedScreen';
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
        <Text>{_.lang.you_are_banned}</Text>
      </View>
    );
  }
}

export {BannedScreen};
