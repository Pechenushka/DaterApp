import React from 'react';
import {View} from 'react-native';
import {SearchController} from '../Controllers/SearchControler';
import {analyticHandler} from '../Core/AnalyticHanler';
import {app} from '../Core/AppImpl';
import {baseScreenProps, componentPropsWithModel} from '../Core/BaseComponent';
import {BaseScreenModel} from '../Core/BaseScreenModel';
import {BaseStyles} from '../Styles/BaseStyles';
import {BottomNavigationView} from '../Views/BottomNavigation/BottomNavigationView';
import {SearchView} from '../Views/SearchViews/SearchView';
import {BaseLayoutView} from './BaseLayout';

class SearchFeedScreen extends BaseLayoutView<SearchController> {
  private _refMod: SearchView | null = null;
  constructor(props: componentPropsWithModel<baseScreenProps, BaseScreenModel>) {
    super(props, SearchController);
  }

  async componentDidMount() {
    super.componentDidMount();
  }

  static screenName = 'SearchFeedScreen';

  public get screenName() {
    return 'SearchFeedScreen';
  }

  public get showHeaderLeftComponent() {
    return false;
  }
  public get showHeaderRightComponent() {
    return false;
  }
  public onBackPress(): void {
    if (this.controller.searchModel.profileDetailsModal.visible) {
      this.controller.searchModel.profileDetailsModal.close();
    } else {
      app.navigator.toGoBack();
    }
  }

  async onFocus(): Promise<void> {
    await super.onFocus();
    this.controller.searchModel.load();
    this.controller.searchModel.profileDetailsModal.close();
    analyticHandler.trackEvent('search_feed_screen_rendered');
  }

  async onBlur() {
    this.controller.searchModel.profileDetailsModal.close();
  }

  public updateModel = async () => {
    this.controller.searchModel.load();
    this._refMod && this._refMod.updateAnyWay();
    this.forceUpdate();
  };

  public content() {
    return (
      <View style={[BaseStyles.container]}>
        <SearchView
          ref={ref => {
            this._refMod = ref;
          }}
          {...this.childProps(this.controller.searchModel)}
        />
        <BottomNavigationView {...this.childProps(app.bottomNavigation)} />
      </View>
    );
  }
}

export {SearchFeedScreen};
