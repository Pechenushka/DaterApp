import React from 'react';
import {Text, View} from 'react-native';
import {baseScreenProps, componentPropsWithModel} from '../Core/BaseComponent';
import {BaseScreenModel} from '../Core/BaseScreenModel';
import {BaseLayoutView} from './BaseLayout';
import {BaseStyles} from '../Styles/BaseStyles';
import {analyticHandler} from '../Core/AnalyticHanler';
import {GuestsController} from '../Controllers/GuestsController';
import {GuestsView} from '../Views/GuestsViews/GuestsView';

class GuestsScreen extends BaseLayoutView<GuestsController> {
  private _refMod: GuestsView | null = null;
  constructor(props: componentPropsWithModel<baseScreenProps, BaseScreenModel>) {
    super(props, GuestsController);
  }

  public get allowGoBack() {
    return true;
  }

  async componentDidMount() {
    super.componentDidMount();
  }

  get screenName() {
    return 'GuestsScreen';
  }

  public get showHeaderLeftComponent() {
    return false;
  }
  public get showHeaderRightComponent() {
    return false;
  }

  async onFocus(): Promise<void> {
    await super.onFocus();
    this.controller.guestsModel.load();
    analyticHandler.trackEvent('guests_screen_rendered');
  }

  public updateModel = async () => {
    await this.controller.guestsModel.load();
    this._refMod && this._refMod.updateAnyWay();
  };

  public content() {
    return (
      <View style={[BaseStyles.container]}>
        <GuestsView {...this.childProps(this.controller.guestsModel)} />
      </View>
    );
  }
}

export {GuestsScreen};
