import {
  TypedBaseComponent,
  baseComponentProps,
  componentPropsWithModel,
} from '../../Core/BaseComponent';
import React from 'react';
import {View, Modal, Image, Text, Platform, ScrollView} from 'react-native';
import {BaseStyles} from '../../Styles/BaseStyles';
import {SimpleButtonView} from '../Components/Buttons/SimpleButtonView';
import {_} from '../../Core/Localization';
import {ProfileDetailsModalModel} from '../../Models/SearchModels/ProfileDetailsModalModel';
import {ICONS} from '../../constants/icons';
import {appSettings} from '../../Common/AppSettings';
import {ProfileDetailsStyles} from '../../Styles/ProfileDetailsStyles';
import {getAge} from '../../Common/Helpers';
import {getShortDate} from '../../Common/dateParse';
import {app} from '../../Core/AppImpl';
import {HomeScreenStyles} from '../../Styles/HomeScreenStyles';
import {ShadowWrapperView} from '../Components/Wrappers/ShadowWrapperView';
import {BannerAd, BannerAdSize, TestIds} from 'react-native-google-mobile-ads';
import {SendMessageModalView} from './SendMessageModalView';

type profileDetailsModalViewProps = baseComponentProps & {};

class ProfileDetailsModalView extends TypedBaseComponent<
  profileDetailsModalViewProps,
  ProfileDetailsModalModel
> {
  private imgRef: Image | null = null;
  constructor(
    props: componentPropsWithModel<profileDetailsModalViewProps, ProfileDetailsModalModel>,
  ) {
    super(props);
  }

  public getExpectationsIcon() {
    if (this.model.userData === null) {
      return;
    }
    if (this.model.userData.lookingfor === 0) {
      return <Image source={ICONS.maleIcon} style={[BaseStyles.bigIcon]} />;
    }

    if (this.model.userData.lookingfor === 1) {
      return <Image source={ICONS.femaleIcon} style={[BaseStyles.bigIcon]} />;
    }

    if (this.model.userData.lookingfor === 2) {
      return (
        <View style={[BaseStyles.row]}>
          <Image source={ICONS.maleIcon} style={[BaseStyles.bigIcon]} />
          <Text>{_.lang.or}</Text>
          <Image source={ICONS.femaleIcon} style={[BaseStyles.bigIcon]} />
        </View>
      );
    }

    return (
      <Image
        source={this.model.userData.authorGender === 'male' ? ICONS.femaleIcon : ICONS.maleIcon}
        style={[BaseStyles.bigIcon]}
      />
    );
  }

  private getBlockedAlert() {
    if (this.model.userData) {
      if (this.model.userData.blocked && this.model.userData.blockedBy) {
        return (
          <View style={[BaseStyles.row]}>
            <Image source={ICONS.ReportIcon} style={BaseStyles.defaultIcon} />
            <Text style={[ProfileDetailsStyles.alertText]}>You block each other!</Text>
          </View>
        );
      }
      if (this.model.userData.blockedBy) {
        return (
          <View style={[BaseStyles.row]}>
            <Image source={ICONS.ReportIcon} style={BaseStyles.defaultIcon} />
            <Text style={[ProfileDetailsStyles.alertText]}>You blocked by this user!</Text>
          </View>
        );
      }
      if (this.model.userData.blocked) {
        return (
          <View style={[BaseStyles.row]}>
            <Image source={ICONS.ReportIcon} style={BaseStyles.defaultIcon} />
            <Text style={[ProfileDetailsStyles.alertText]}>You block this user!</Text>
          </View>
        );
      }
    }
    return <></>;
  }

  public render() {
    super.render();
    return (
      <Modal
        onRequestClose={this.model.close}
        visible={this.model.visible}
        transparent={true}
        style={BaseStyles.container}>
        <View style={ProfileDetailsStyles.profileModalBackGround}>
          <View style={ProfileDetailsStyles.profileModalContentContainer}>
            <ScrollView style={[BaseStyles.w100]} contentContainerStyle={[BaseStyles.alignCenter]}>
              {this.model.userData !== null && (
                <View style={[BaseStyles.w100, BaseStyles.alignCenter]}>
                  <View style={[ProfileDetailsStyles.profileAvatarContainer]}>
                    <Image
                      ref={ref => {
                        this.imgRef = ref;
                      }}
                      source={
                        this.model.userData.authorAvatar === undefined ||
                        this.model.userData.authorAvatar === '' ||
                        this.model.userData.authorAvatar === null
                          ? ICONS.profileIcon
                          : {
                              uri: `${appSettings.apiEndpoint}${this.model.userData.authorAvatar}`,
                              cache: 'reload',
                            }
                      }
                      style={ProfileDetailsStyles.profileAvatarImage}
                      onError={() => {
                        const nativeProp = Platform.OS === 'ios' ? 'source' : 'src';
                        this.imgRef &&
                          this.imgRef.setNativeProps({
                            [nativeProp]: [Image.resolveAssetSource(ICONS.profileIcon)], // array
                          });
                      }}
                    />
                    {this.model.userData.authorId !== app.currentUser.userId && (
                      <>
                        <View style={[ProfileDetailsStyles.actionButtonWrapper]}>
                          <View style={[ProfileDetailsStyles.actionButtonColum]}>
                            <ShadowWrapperView borderRadius={50}>
                              <SimpleButtonView
                                iconStyles={[ProfileDetailsStyles.actionButtonIcon]}
                                styles={[ProfileDetailsStyles.actionButtonContainer]}
                                {...this.childProps(this.model.likeButton)}
                              />
                            </ShadowWrapperView>
                          </View>
                          <View style={[ProfileDetailsStyles.actionButtonColum]}>
                            <ShadowWrapperView borderRadius={50}>
                              <SimpleButtonView
                                iconStyles={[ProfileDetailsStyles.actionButtonIcon]}
                                styles={[ProfileDetailsStyles.actionButtonContainer]}
                                {...this.childProps(this.model.messageButton)}
                              />
                            </ShadowWrapperView>
                          </View>
                        </View>
                      </>
                    )}
                  </View>
                  <View style={[{}]}>
                    <BannerAd
                      unitId={__DEV__ ? TestIds.BANNER : 'ca-app-pub-6052303679653895/3770804609'}
                      size={BannerAdSize.BANNER}
                    />
                  </View>
                  <View style={[BaseStyles.row, BaseStyles.ai_c]}>
                    <Text style={ProfileDetailsStyles.profileUserName}>
                      {this.model.userData.authorName}{' '}
                    </Text>
                    <Image
                      source={
                        this.model.userData.authorGender === 'male'
                          ? ICONS.maleIcon
                          : ICONS.femaleIcon
                      }
                      style={[BaseStyles.bigIcon]}
                    />
                  </View>

                  <Text style={ProfileDetailsStyles.profileInfoText}>
                    {getAge(this.model.userData.authorBirthDay || 0)} y.o{' '}
                  </Text>

                  <View style={[BaseStyles.row, BaseStyles.pb10, BaseStyles.ai_c]}>
                    <Image source={ICONS.eyeIcon} style={[BaseStyles.bigIcon]} />
                    <Text style={ProfileDetailsStyles.profileInfoText}>
                      {' '}
                      {getShortDate(this.model.userData.lastOnline)}
                    </Text>
                  </View>

                  <View style={[ProfileDetailsStyles.profilePreviewContainer]}>
                    <Text style={ProfileDetailsStyles.profileInfoText}>
                      {' '}
                      {_.lang.i_looking_for}{' '}
                    </Text>
                    {this.getExpectationsIcon()}
                    {this.model.userData.goal !== undefined && this.model.userData.goal !== null && (
                      <Text style={ProfileDetailsStyles.profileInfoText}>
                        {' '}
                        {_.lang.for} {_.lang.goals[this.model.userData.goal]}
                      </Text>
                    )}
                  </View>

                  <View style={ProfileDetailsStyles.profileMainTextWrapper}>
                    {this.model.userData.text !== '' && (
                      <View style={ProfileDetailsStyles.profileMainTextContainer}>
                        <Text style={ProfileDetailsStyles.profileInfoText}>
                          {this.model.userData.text}
                        </Text>
                      </View>
                    )}
                  </View>

                  {this.model.userData.authorId !== app.currentUser.userId && (
                    <>
                      <View style={[BaseStyles.mt10]}>
                        <ShadowWrapperView>
                          <SimpleButtonView
                            iconStyles={[ProfileDetailsStyles.actionButtonIcon, BaseStyles.mr10]}
                            styles={[ProfileDetailsStyles.reportButtonContainer]}
                            textStyles={BaseStyles.capitalize}
                            {...this.childProps(this.model.reportButton)}
                          />
                        </ShadowWrapperView>
                      </View>
                    </>
                  )}

                  <View style={[BaseStyles.mt20]}>{this.getBlockedAlert()}</View>

                  <View style={[ProfileDetailsStyles.profileLocationContainer]}>
                    <Image source={ICONS.locationIcon} style={[BaseStyles.bigIcon]} />
                    <Text
                      style={[BaseStyles.ta_c, ProfileDetailsStyles.profileInfoText]}
                      ellipsizeMode="tail"
                      numberOfLines={2}>
                      {this.model.userData.countryName}, {this.model.userData.regionName},{' '}
                      {this.model.userData.cityName}
                    </Text>
                  </View>
                </View>
              )}
            </ScrollView>

            <SendMessageModalView {...this.childProps(this.model.sendMessageModal)} />

            <SimpleButtonView
              iconStyles={ProfileDetailsStyles.profileModalCloseIcon}
              styles={ProfileDetailsStyles.profileModalCloseContainer}
              {...this.childProps(this.model.closeButton)}
            />

            <SimpleButtonView
              styles={ProfileDetailsStyles.profileModalNextButtonContainer}
              textStyles={ProfileDetailsStyles.actionButtonText}
              {...this.childProps(this.model.prevButton)}
            />

            <SimpleButtonView
              styles={ProfileDetailsStyles.profileModalPrevButtonContainer}
              textStyles={ProfileDetailsStyles.actionButtonText}
              {...this.childProps(this.model.nextButton)}
            />
          </View>
        </View>
      </Modal>
    );
  }
}

export {ProfileDetailsModalView};
