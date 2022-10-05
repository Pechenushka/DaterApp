import React from 'react';
import {View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {BannerAd, BannerAdSize, TestIds} from 'react-native-google-mobile-ads';
import {ProfileDetailsController} from '../Controllers/ProfileDetailsController';
import {analyticHandler} from '../Core/AnalyticHanler';
import {app} from '../Core/AppImpl';
import {baseScreenProps, componentPropsWithModel} from '../Core/BaseComponent';
import {BaseScreenModel} from '../Core/BaseScreenModel';
import {BaseStyles} from '../Styles/BaseStyles';
import {BottomNavigationView} from '../Views/BottomNavigation/BottomNavigationView';
import {ProfileDetailsView} from '../Views/ProfileDetailsViews/ProfileDetailsView';
import {BaseLayoutView} from './BaseLayout';

class ProfileDetailsScreen extends BaseLayoutView<ProfileDetailsController> {
  private _refMod: ProfileDetailsView | null = null;
  constructor(props: componentPropsWithModel<baseScreenProps, BaseScreenModel>) {
    super(props, ProfileDetailsController, {userId: props.route.params.userId});
  }

  async componentDidMount() {
    super.componentDidMount();
  }

  get screenName() {
    return 'ProfileDetailsScreen';
  }

  public get showHeaderLeftComponent() {
    return false;
  }
  public get showHeaderRightComponent() {
    return false;
  }

  async onFocus(): Promise<void> {
    await super.onFocus();
    await this.controller.profileModel.loadProfile(this.props.route.params.userId);
    analyticHandler.trackEvent('profile_details_screen_rendered');
  }

  public async onBlur(): Promise<void> {}

  public updateModel = async () => {
    await this.controller.profileModel.loadProfile(this.props.route.params.userId);
    this._refMod && this._refMod.updateAnyWay();
    this.forceUpdate();
  };

  public content() {
    return (
      <View style={[BaseStyles.container]}>
        <ScrollView contentContainerStyle={[BaseStyles.pb70]}>
          <ProfileDetailsView
            ref={ref => {
              this._refMod = ref;
            }}
            {...this.childProps(this.controller.profileModel)}
          />
        </ScrollView>
        <BottomNavigationView {...this.childProps(app.bottomNavigation)} />
      </View>
    );
  }
}

export {ProfileDetailsScreen};
