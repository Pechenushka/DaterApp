import {
  TypedBaseComponent,
  baseComponentProps,
  componentPropsWithModel,
} from '../../Core/BaseComponent';
import React from 'react';
import {Image, Text, View} from 'react-native';
import {BaseStyles} from '../../Styles/BaseStyles';
import {HomeModel} from '../../Models/HomeModels/HomeModel';
import {app} from '../../Core/AppImpl';
import {HomeScreenStyles} from '../../Styles/HomeScreenStyles';
import {ICONS} from '../../constants/icons';
import {SimpleButtonView} from '../Components/Buttons/SimpleButtonView';
import {ShadowWrapperView} from '../Components/Wrappers/ShadowWrapperView';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {COLORS} from '../../constants/colors';
import {appSettings} from '../../Common/AppSettings';
import {_} from '../../Core/Localization';
import {getAge} from '../../Common/Helpers';
import {BannerAd, BannerAdSize, TestIds} from 'react-native-google-mobile-ads';

type homeViewProps = baseComponentProps & {};

class HomeView extends TypedBaseComponent<homeViewProps, HomeModel> {
  constructor(props: componentPropsWithModel<homeViewProps, HomeModel>) {
    super(props);
  }

  private getInfoMessage = () => {
    if (this.model.userStatus === undefined) {
      return (
        <Text style={HomeScreenStyles.warningTitleText}>{_.lang.servers_are_not_allowed}</Text>
      );
    }
    if (this.model.userStatus === null) {
      if (app.currentUser.avatar !== undefined && app.currentUser.avatar !== '') {
        return (
          <Text style={HomeScreenStyles.warningTitleText}>{_.lang.moderation_request_pending}</Text>
        );
      }
      return (
        <Text style={HomeScreenStyles.warningTitleText}>{_.lang.please_request_moderation}</Text>
      );
    }
    if (this.model.userStatus) {
      return <></>;
    }
    return <Text style={HomeScreenStyles.warningTitleText}>{_.lang.profile_not_moderated}</Text>;
  };

  public render() {
    return (
      <View
        style={[
          BaseStyles.container,
          HomeScreenStyles.mainContainer,
          BaseStyles.alignCenter,
          {backgroundColor: this.model.userStatus ? COLORS.MAIN_BLUE : COLORS.WARNING_YELLOW},
        ]}>
        {this.getInfoMessage()}
        <View style={[HomeScreenStyles.contentContainer]}>
          <View style={[HomeScreenStyles.userInfoContent]}>
            {app.currentUser.avatar !== undefined &&
            app.currentUser.avatar !== '' &&
            app.currentUser.avatar !== null ? (
              <TouchableOpacity
                onPress={this.model.changeAvatar}
                style={[HomeScreenStyles.avatarContainer]}>
                <Image
                  source={{
                    uri: `${appSettings.apiEndpoint}${
                      app.currentUser.avatar.split('.')[0]
                    }-compressed.${app.currentUser.avatar.split('.').pop()}`,
                    cache: 'reload',
                  }}
                  style={HomeScreenStyles.avatarImage}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={this.model.changeAvatar}
                style={[HomeScreenStyles.avatarContainer]}>
                <Image source={ICONS.addPhotoIcon} style={HomeScreenStyles.addAvatarIcon} />
              </TouchableOpacity>
            )}

            <View style={[BaseStyles.alignCenter]}>
              <View style={[BaseStyles.row]}>
                <Text style={HomeScreenStyles.userNameText}>{app.currentUser.userName} </Text>
                <Image
                  source={app.currentUser.gender === 'male' ? ICONS.maleIcon : ICONS.femaleIcon}
                  style={[BaseStyles.defaultIcon]}
                />
              </View>
              <Text>{getAge(app.currentUser.birthDate || 0)} y.o </Text>
              {app.currentUser.location && (
                <Text>
                  {app.currentUser.location.country.name}, {app.currentUser.location.region.name},{' '}
                  {app.currentUser.location.city.name}
                </Text>
              )}
              <View style={[HomeScreenStyles.contactsContainer]}>
                <Text style={[HomeScreenStyles.contactsTitleText]}>{_.lang.contacts}</Text>
                <View style={[HomeScreenStyles.infoItemContainer]}>
                  <Image source={ICONS.emailIconDetail} style={[BaseStyles.defaultIcon]} />
                  <Text style={[HomeScreenStyles.infoItemText]}> {app.currentUser.email}</Text>
                </View>
                {app.currentUser.phone !== undefined && app.currentUser.phone !== '' && (
                  <View style={[HomeScreenStyles.infoItemContainer]}>
                    <Image source={ICONS.phoneIcon} style={[BaseStyles.defaultIcon]} />
                    <Text style={[HomeScreenStyles.infoItemText]}> {app.currentUser.phone}</Text>
                  </View>
                )}
                {app.currentUser.telegram !== undefined && app.currentUser.telegram !== '' && (
                  <View style={[HomeScreenStyles.infoItemContainer]}>
                    <Image source={ICONS.telegramIcon} style={[BaseStyles.defaultIcon]} />
                    <Text style={[HomeScreenStyles.infoItemText]}> {app.currentUser.telegram}</Text>
                  </View>
                )}
              </View>
              <View style={[BaseStyles.row]}>
                <View style={[HomeScreenStyles.actionButtonColum]}>
                  <View style={[HomeScreenStyles.actionButtonWrapper]}>
                    <ShadowWrapperView>
                      <SimpleButtonView
                        iconStyles={[HomeScreenStyles.actionButtonIcon]}
                        styles={[HomeScreenStyles.actionButtonContainer]}
                        textStyles={BaseStyles.capitalize}
                        {...this.childProps(this.model.toChats)}
                      />
                    </ShadowWrapperView>
                  </View>
                  {/* <View style={[HomeScreenStyles.actionButtonWrapper]}>
                    <ShadowWrapperView>
                      <SimpleButtonView
                        iconStyles={[HomeScreenStyles.actionButtonIcon]}
                        styles={[HomeScreenStyles.actionButtonContainer]}
                        {...this.childProps(this.model.toRequests)}
                      />
                    </ShadowWrapperView>
                  </View> */}
                  <View style={[HomeScreenStyles.actionButtonWrapper]}>
                    <ShadowWrapperView>
                      <SimpleButtonView
                        iconStyles={[HomeScreenStyles.actionButtonIcon]}
                        styles={[HomeScreenStyles.actionButtonContainer]}
                        textStyles={BaseStyles.capitalize}
                        {...this.childProps(this.model.toLikes)}
                      />
                    </ShadowWrapperView>
                  </View>
                </View>
                <View style={[HomeScreenStyles.actionButtonColum]}>
                  <View style={[HomeScreenStyles.actionButtonWrapper]}>
                    <ShadowWrapperView>
                      <SimpleButtonView
                        iconStyles={[HomeScreenStyles.actionButtonIcon]}
                        styles={[HomeScreenStyles.actionButtonContainer]}
                        textStyles={BaseStyles.capitalize}
                        {...this.childProps(this.model.toMyAnnouncement)}
                      />
                    </ShadowWrapperView>
                  </View>
                  {/* <View style={[HomeScreenStyles.actionButtonWrapper]}>
                    <ShadowWrapperView>
                      <SimpleButtonView
                        iconStyles={[HomeScreenStyles.actionButtonIcon]}
                        styles={[HomeScreenStyles.actionButtonContainer]}
                        {...this.childProps(this.model.toHelpScreen)}
                      />
                    </ShadowWrapperView>
                  </View> */}
                  <View style={[HomeScreenStyles.actionButtonWrapper]}>
                    <ShadowWrapperView>
                      <SimpleButtonView
                        iconStyles={[HomeScreenStyles.actionButtonIcon]}
                        styles={[HomeScreenStyles.actionButtonContainer]}
                        textStyles={BaseStyles.capitalize}
                        {...this.childProps(this.model.toSearch)}
                      />
                    </ShadowWrapperView>
                  </View>
                </View>
              </View>
              {/* <View style={[HomeScreenStyles.searchButtonWrapper]}>
                <ShadowWrapperView>
                  <SimpleButtonView
                    iconStyles={[HomeScreenStyles.actionButtonIcon]}
                    styles={[HomeScreenStyles.searchButtonContainer]}
                    {...this.childProps(this.model.toSearch)}
                  />
                </ShadowWrapperView>
              </View> */}
            </View>
          </View>
          <View style={[]}>
            <BannerAd
              unitId={__DEV__ ? TestIds.BANNER : 'ca-app-pub-6052303679653895/3770804609'}
              size={BannerAdSize.BANNER}
            />
          </View>
        </View>
      </View>
    );
  }
}

export {HomeView};
