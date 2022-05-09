import React from 'react';
import {View} from 'react-native';
import {ProfileDetailsController} from '../Controllers/ProfileDetailsController';
import {analyticHandler} from '../Core/AnalyticHanler';
import {baseScreenProps, componentPropsWithModel} from '../Core/BaseComponent';
import {BaseScreenModel} from '../Core/BaseScreenModel';
import {BaseStyles} from '../Styles/BaseStyles';
import {ProfileDetailsView} from '../Views/ProfileDetailsViews/ProfileDetailsView';
import {BaseLayoutView} from './BaseLayout';

class ProfileDetailsScreen extends BaseLayoutView<ProfileDetailsController> {
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

  public content() {
    return (
      <View style={[BaseStyles.container]}>
        <ProfileDetailsView {...this.childProps(this.controller.profileModel)} />
      </View>
    );
  }
}

export {ProfileDetailsScreen};
