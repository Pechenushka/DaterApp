import React from 'react';
import {View} from 'react-native';
import {PhotoGalleryController} from '../Controllers/PhotoGalleryController';
import {analyticHandler} from '../Core/AnalyticHanler';
import {app} from '../Core/AppImpl';
import {baseScreenProps, componentPropsWithModel} from '../Core/BaseComponent';
import {BaseScreenModel} from '../Core/BaseScreenModel';
import {_} from '../Core/Localization';
import {BaseStyles} from '../Styles/BaseStyles';
import {BottomNavigationView} from '../Views/BottomNavigation/BottomNavigationView';
import {PhotoGalleryView} from '../Views/PhotoGalleryViews/PhotoGalleryView';
import {BaseLayoutView} from './BaseLayout';

class PhotoGalleryScreen extends BaseLayoutView<PhotoGalleryController> {
  private _refMod: PhotoGalleryView | null = null;
  constructor(props: componentPropsWithModel<baseScreenProps, BaseScreenModel>) {
    super(props, PhotoGalleryController);
  }

  async componentDidMount() {
    super.componentDidMount();
  }

  get screenName() {
    return 'PhotoGalleryScreen';
  }

  public get showHeaderLeftComponent() {
    return false;
  }
  public get showHeaderRightComponent() {
    return false;
  }

  async onFocus(): Promise<void> {
    await super.onFocus();
    await this.controller.photoGalleryModel.onFocus();
    analyticHandler.trackEvent('photo_gallery_screen_rendered');
  }

  async onBlur(): Promise<void> {
    await super.onBlur();
    await this.controller.photoGalleryModel.onBlur();
  }

  public updateModel = async () => {
    this._refMod && this._refMod.updateAnyWay();
    this.forceUpdate();
  };

  public content() {
    return (
      <View style={[BaseStyles.container, BaseStyles.alignCenter]}>
        <PhotoGalleryView
          ref={ref => {
            this._refMod = ref;
          }}
          {...this.childProps(this.controller.photoGalleryModel)}
        />
        <BottomNavigationView {...this.childProps(app.bottomNavigation)} />
      </View>
    );
  }
}

export {PhotoGalleryScreen};
