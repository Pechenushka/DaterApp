import {
  TypedBaseComponent,
  baseComponentProps,
  componentPropsWithModel,
} from '../../Core/BaseComponent';
import React from 'react';
import {ActivityIndicator, Image, Modal, Platform, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {ProfileDetailsModel} from '../../Models/ProfileDetailsModels/ProfileDetailsModel';
import {COLORS} from '../../constants/colors';
import {BaseStyles} from '../../Styles/BaseStyles';
import {HomeScreenStyles} from '../../Styles/HomeScreenStyles';
import {ICONS} from '../../constants/icons';
import {appSettings} from '../../Common/AppSettings';
import {_} from '../../Core/Localization';
import {SimpleButtonView} from '../Components/Buttons/SimpleButtonView';
import {SearchStyles} from '../../Styles/SearchStyles';
import {getAge} from '../../Common/Helpers';
import {ShadowWrapperView} from '../Components/Wrappers/ShadowWrapperView';
import {app} from '../../Core/AppImpl';
import {ChatsStyles} from '../../Styles/ChatsStyles';
import {SendMessageModalView} from '../SearchViews/SendMessageModalView';
import {BannerAd, BannerAdSize, TestIds} from 'react-native-google-mobile-ads';
import {ReportModalView} from './ReportModalView';
import {MyAnnouncementStyles} from '../../Styles/MyAnnouncementStyles';
import {getShortDate} from '../../Common/dateParse';

type profileDetailsViewProps = baseComponentProps & {};

class ProfileDetailsView extends TypedBaseComponent<profileDetailsViewProps, ProfileDetailsModel> {
  private imgRef: Image | null = null;
  private imgRef2: Image | null = null;

  constructor(props: componentPropsWithModel<profileDetailsViewProps, ProfileDetailsModel>) {
    super(props);
  }

  private getBlockedAlert() {
    if (this.model.userInfo) {
      if (this.model.userInfo.blocked && this.model.userInfo.blockedBy) {
        return (
          <View style={[BaseStyles.row]}>
            <Image source={ICONS.ReportIcon} style={BaseStyles.defaultIcon} />
            <Text style={[HomeScreenStyles.alertText]}>You block each other!</Text>
          </View>
        );
      }
      if (this.model.userInfo.blockedBy) {
        return (
          <View style={[BaseStyles.row]}>
            <Image source={ICONS.ReportIcon} style={BaseStyles.defaultIcon} />
            <Text style={[HomeScreenStyles.alertText]}>You blocked by this user!</Text>
          </View>
        );
      }
      if (this.model.userInfo.blocked) {
        return (
          <View style={[BaseStyles.row]}>
            <Image source={ICONS.ReportIcon} style={BaseStyles.defaultIcon} />
            <Text style={[HomeScreenStyles.alertText]}>You block this user!</Text>
          </View>
        );
      }
    }
    return <></>;
  }

  public getExpectationsIcon() {
    if (this.model.userInfo === null) {
      return;
    }
    if (this.model.userInfo.lookingfor === 0) {
      return <Image source={ICONS.maleIcon} style={[BaseStyles.defaultIcon]} />;
    }

    if (this.model.userInfo.lookingfor === 1) {
      return <Image source={ICONS.femaleIcon} style={[BaseStyles.defaultIcon]} />;
    }

    if (this.model.userInfo.lookingfor === 2) {
      return (
        <View style={[BaseStyles.row]}>
          <Image source={ICONS.maleIcon} style={[BaseStyles.defaultIcon]} />
          <Text>{_.lang.or}</Text>
          <Image source={ICONS.femaleIcon} style={[BaseStyles.defaultIcon]} />
        </View>
      );
    }

    return (
      <Image
        source={this.model.userInfo.gender === 'male' ? ICONS.femaleIcon : ICONS.maleIcon}
        style={[BaseStyles.defaultIcon]}
      />
    );
  }

  public updateAnyWay = () => {
    this.shouldBeTotalyUpdated = true;
    this.forceUpdate();
    this.shouldBeTotalyUpdated = false;
  };

  public render() {
    if (!this.shouldBeTotalyUpdated) {
      super.render();
    }
    if (this.model.loading) {
      return (
        <View style={[BaseStyles.w100, BaseStyles.h100, BaseStyles.alignCenter]}>
          <ActivityIndicator size={30} color={COLORS.PLACEHOLDER} />
        </View>
      );
    }
    return (
      <View style={[BaseStyles.container, HomeScreenStyles.mainContainer, BaseStyles.alignCenter]}>
        <View style={[HomeScreenStyles.contentContainer]}>
          {this.model.userInfo !== null && (
            <View style={[HomeScreenStyles.userInfoContent]}>
              <TouchableOpacity
                onPress={this.model.openFullScreenModal}
                style={[HomeScreenStyles.avatarContainer]}>
                <Image
                  ref={ref => {
                    this.imgRef = ref;
                  }}
                  source={
                    this.model.userInfo.avatar === undefined ||
                    this.model.userInfo.avatar === '' ||
                    this.model.userInfo.avatar === null
                      ? ICONS.profileIcon
                      : {
                          uri: `${appSettings.apiEndpoint}${
                            this.model.userInfo.avatar.split('.')[0]
                          }-compressed.${this.model.userInfo.avatar.split('.').pop()}`,
                          cache: 'reload',
                        }
                  }
                  style={HomeScreenStyles.avatarImage}
                  onError={() => {
                    const nativeProp = Platform.OS === 'ios' ? 'source' : 'src';
                    this.imgRef &&
                      this.imgRef.setNativeProps({
                        [nativeProp]: [Image.resolveAssetSource(ICONS.profileIcon)], // array
                      });
                  }}
                />
              </TouchableOpacity>

              <Modal visible={this.model.modalVisible} transparent={true}>
                <View style={[HomeScreenStyles.fullScreenContainer]}>
                  <Image
                    ref={ref => {
                      this.imgRef2 = ref;
                    }}
                    source={
                      this.model.userInfo.avatar === undefined || this.model.userInfo.avatar === ''
                        ? ICONS.profileIcon
                        : {
                            uri: `${appSettings.apiEndpoint}${
                              this.model.userInfo.avatar.split('.')[0]
                            }.${this.model.userInfo.avatar.split('.').pop()}`,
                            cache: 'reload',
                          }
                    }
                    style={HomeScreenStyles.fullScreenImage}
                    onError={() => {
                      const nativeProp = Platform.OS === 'ios' ? 'source' : 'src';
                      this.imgRef2 &&
                        this.imgRef2.setNativeProps({
                          [nativeProp]: [Image.resolveAssetSource(ICONS.profileIcon)], // array
                        });
                    }}
                  />
                  <SimpleButtonView
                    iconStyles={SearchStyles.filterModalCloseIcon}
                    styles={SearchStyles.filterModalCloseContainer}
                    {...this.childProps(this.model.closeFullScreenButton)}
                  />
                </View>
              </Modal>

              <SendMessageModalView {...this.childProps(this.model.sendMessageModal)} />
              <ReportModalView {...this.childProps(this.model.reportModal)} />

              <View style={[BaseStyles.alignCenter]}>
                <View style={[BaseStyles.row]}>
                  <Text style={HomeScreenStyles.userNameText}>{this.model.userInfo.name} </Text>
                  <Image
                    source={
                      this.model.userInfo.gender === 'male' ? ICONS.maleIcon : ICONS.femaleIcon
                    }
                    style={[BaseStyles.defaultIcon]}
                  />
                </View>
                <Text>{getAge(this.model.userInfo.birthDate || 0)} y.o </Text>

                <View style={[MyAnnouncementStyles.previewLocationContainer]}>
                  <Image source={ICONS.locationIcon} style={[BaseStyles.defaultIcon]} />
                  <Text style={BaseStyles.ta_c} ellipsizeMode="tail" numberOfLines={1}>
                    {this.model.userInfo.countryName}, {this.model.userInfo.regionName},{' '}
                    {this.model.userInfo.cityName}
                  </Text>
                </View>
                <View style={[BaseStyles.row, BaseStyles.pb10]}>
                  <Image source={ICONS.eyeIcon} style={[BaseStyles.defaultIcon]} />
                  <Text> {getShortDate(this.model.userInfo.lastOnline)}</Text>
                </View>
                <View style={[MyAnnouncementStyles.goalPreviewContainer]}>
                  <Text> {_.lang.i_looking_for} </Text>
                  {this.getExpectationsIcon()}
                  {this.model.userInfo.goal !== undefined && this.model.userInfo.goal !== null && (
                    <Text>
                      {' '}
                      {_.lang.for} {_.lang.goals[this.model.userInfo.goal]}
                    </Text>
                  )}
                </View>
                <View style={MyAnnouncementStyles.previewMainTextWrapper}>
                  {this.model.userInfo.text !== '' && (
                    <View style={MyAnnouncementStyles.previewMainTextContainer}>
                      <Text>{this.model.userInfo.text}</Text>
                    </View>
                  )}
                </View>
                {this.model.userInfo.contactAccess && (
                  <View style={[HomeScreenStyles.contactsContainer]}>
                    <Text style={[HomeScreenStyles.contactsTitleText]}>{_.lang.contacts}</Text>
                    <View style={[HomeScreenStyles.infoItemContainer]}>
                      <Image source={ICONS.emailIconDetail} style={[BaseStyles.defaultIcon]} />
                      <Text style={[HomeScreenStyles.infoItemText]}>
                        {this.model.userInfo.email}
                      </Text>
                    </View>
                    {this.model.userInfo.phone !== undefined && this.model.userInfo.phone !== '' && (
                      <View style={[HomeScreenStyles.infoItemContainer]}>
                        <Image source={ICONS.phoneIcon} style={[BaseStyles.defaultIcon]} />
                        <Text style={[HomeScreenStyles.infoItemText]}>
                          {this.model.userInfo.phone}
                        </Text>
                      </View>
                    )}
                    {this.model.userInfo.telegram !== undefined &&
                      this.model.userInfo.telegram !== '' && (
                        <View style={[HomeScreenStyles.infoItemContainer]}>
                          <Image source={ICONS.telegramIcon} style={[BaseStyles.defaultIcon]} />
                          <Text style={[HomeScreenStyles.infoItemText]}>
                            {this.model.userInfo.telegram}
                          </Text>
                        </View>
                      )}
                  </View>
                )}
              </View>
              {this.model.userId !== app.currentUser.userId && (
                <View style={[BaseStyles.row]}>
                  <View style={[HomeScreenStyles.actionButtonColum]}>
                    <View style={[HomeScreenStyles.actionButtonWrapper]}>
                      <ShadowWrapperView>
                        <SimpleButtonView
                          iconStyles={[HomeScreenStyles.actionButtonIcon]}
                          styles={[HomeScreenStyles.actionButtonContainer]}
                          textStyles={BaseStyles.capitalize}
                          {...this.childProps(this.model.likeButton)}
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
                    {this.model.userInfo.blocked ? (
                      <View style={[HomeScreenStyles.actionButtonWrapper]}>
                        <ShadowWrapperView>
                          <SimpleButtonView
                            iconStyles={[HomeScreenStyles.actionButtonIcon]}
                            styles={[HomeScreenStyles.actionButtonContainer]}
                            textStyles={BaseStyles.capitalize}
                            {...this.childProps(this.model.unblockButton)}
                          />
                        </ShadowWrapperView>
                      </View>
                    ) : (
                      <View style={[HomeScreenStyles.actionButtonWrapper]}>
                        <ShadowWrapperView>
                          <SimpleButtonView
                            iconStyles={[HomeScreenStyles.actionButtonIcon]}
                            styles={[HomeScreenStyles.actionButtonContainer]}
                            textStyles={BaseStyles.capitalize}
                            {...this.childProps(this.model.blockButton)}
                          />
                        </ShadowWrapperView>
                      </View>
                    )}
                  </View>
                  <View style={[HomeScreenStyles.actionButtonColum]}>
                    <View style={[HomeScreenStyles.actionButtonWrapper]}>
                      <ShadowWrapperView>
                        <SimpleButtonView
                          iconStyles={[HomeScreenStyles.actionButtonIcon]}
                          styles={[HomeScreenStyles.actionButtonContainer]}
                          textStyles={BaseStyles.capitalize}
                          {...this.childProps(this.model.messageButton)}
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
                          {...this.childProps(this.model.reportButton)}
                        />
                      </ShadowWrapperView>
                    </View>
                  </View>
                </View>
              )}
              <View style={[BaseStyles.mt20]}>{this.getBlockedAlert()}</View>
            </View>
          )}

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

export {ProfileDetailsView};
