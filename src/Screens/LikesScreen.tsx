import React from 'react';
import {View} from 'react-native';
import {baseScreenProps, componentPropsWithModel} from '../Core/BaseComponent';
import {BaseScreenModel} from '../Core/BaseScreenModel';
import {BaseLayoutView} from './BaseLayout';
import {BaseStyles} from '../Styles/BaseStyles';
import {BottomNavigationView} from '../Views/BottomNavigation/BottomNavigationView';
import {app} from '../Core/AppImpl';
import {LikesViews} from '../Views/LikesViews/LikesViews';
import {LikesController} from '../Controllers/LikesController';
import {analyticHandler} from '../Core/AnalyticHanler';

class LikesScreen extends BaseLayoutView<LikesController> {
  private _refMod: LikesViews | null = null;
  constructor(props: componentPropsWithModel<baseScreenProps, BaseScreenModel>) {
    super(props, LikesController);
  }

  public get allowGoBack() {
    return true;
  }

  async componentDidMount() {
    super.componentDidMount();
  }

  public get screenName() {
    return 'LikesScreen';
  }

  public get showHeaderLeftComponent() {
    return false;
  }
  public get showHeaderRightComponent() {
    return false;
  }

  async onFocus(): Promise<void> {
    await super.onFocus();
    this.controller.likesModel.loadNededList();
    analyticHandler.trackEvent('likes_screen_rendered');
  }

  public updateModel = async () => {
    await this.controller.likesModel.loadNededList();
    this._refMod && this._refMod.updateAnyWay();
  };

  public content() {
    return (
      <View style={[BaseStyles.container]}>
        <LikesViews
          ref={ref => {
            this._refMod = ref;
          }}
          {...this.childProps(this.controller.likesModel)}
        />
        <BottomNavigationView {...this.childProps(app.bottomNavigation)} />
      </View>
    );
  }
}

export {LikesScreen};
