import React from 'react';
import {Text, View} from 'react-native';
import {baseScreenProps, componentPropsWithModel} from '../Core/BaseComponent';
import {BaseScreenModel} from '../Core/BaseScreenModel';
import {BaseLayoutView} from './BaseLayout';
import {BaseStyles} from '../Styles/BaseStyles';
import {analyticHandler} from '../Core/AnalyticHanler';
import {HelpController} from '../Controllers/HelpController';
import {HelpView} from '../Views/HelpViews/HelpView';

class HelpScreen extends BaseLayoutView<HelpController> {
  private _refMod: HelpView | null = null;
  constructor(props: componentPropsWithModel<baseScreenProps, BaseScreenModel>) {
    super(props, HelpController);
  }

  public get allowGoBack() {
    return true;
  }

  async componentDidMount() {
    super.componentDidMount();
  }

  get screenName() {
    return 'HelpScreen';
  }

  public get showHeaderLeftComponent() {
    return false;
  }
  public get showHeaderRightComponent() {
    return false;
  }

  async onFocus(): Promise<void> {
    await super.onFocus();
    analyticHandler.trackEvent('help_screen_rendered');
  }

  public updateModel = async () => {
    this._refMod && this._refMod.updateAnyWay();
  };

  public content() {
    return (
      <View style={[BaseStyles.container]}>
        <HelpView {...this.childProps(this.controller.helpModel)} />
      </View>
    );
  }
}

export {HelpScreen};
