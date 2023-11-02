import React from 'react';
import {Text, View} from 'react-native';
import {PhotoAccessRequestsController} from '../Controllers/PhotoAccessRequestsController';
import {analyticHandler} from '../Core/AnalyticHanler';
import {app} from '../Core/AppImpl';
import {baseScreenProps, componentPropsWithModel} from '../Core/BaseComponent';
import {BaseScreenModel} from '../Core/BaseScreenModel';
import {_} from '../Core/Localization';
import {BaseStyles} from '../Styles/BaseStyles';
import {BottomNavigationView} from '../Views/BottomNavigation/BottomNavigationView';
import {PhotoAccessRequestsView} from '../Views/PhotoAccessRequestsViews/PhotoAccessRequestsView';
import {BaseLayoutView} from './BaseLayout';

class PhotoAccessRequestsScreen extends BaseLayoutView<PhotoAccessRequestsController> {
  private _refMod: PhotoAccessRequestsView | null = null;
  constructor(props: componentPropsWithModel<baseScreenProps, BaseScreenModel>) {
    super(props, PhotoAccessRequestsController);
  }

  static screenName = 'PhotoAccessRequestsScreen';

  async componentDidMount() {
    super.componentDidMount();
  }

  public get screenName() {
    return 'PhotoAccessRequestsScreen';
  }

  public get showHeaderLeftComponent() {
    return false;
  }
  public get showHeaderRightComponent() {
    return false;
  }

  async onFocus(): Promise<void> {
    await super.onFocus();
    analyticHandler.trackEvent('photo_access_requests_screen_rendered');
  }

  async onBlur(): Promise<void> {
    await super.onBlur();
  }

  public updateModel = async () => {
    this._refMod && this._refMod.updateAnyWay();
    this.forceUpdate();
  };

  public content() {
    return (
      <View style={[BaseStyles.container, BaseStyles.alignCenter]}>
        <PhotoAccessRequestsView
          ref={ref => {
            this._refMod = ref;
          }}
          {...this.childProps(this.controller.photoAccessRequestsModel)}
        />
        <BottomNavigationView {...this.childProps(app.bottomNavigation)} />
      </View>
    );
  }
}

export {PhotoAccessRequestsScreen};
