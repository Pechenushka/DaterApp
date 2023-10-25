import {
  TypedBaseComponent,
  baseComponentProps,
  componentPropsWithModel,
} from '../../Core/BaseComponent';
import React from 'react';
import {View, Modal, Image, Text, ScrollView, TouchableOpacity} from 'react-native';
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
import {ShadowWrapperView} from '../Components/Wrappers/ShadowWrapperView';
import {BannerAd, BannerAdSize, TestIds} from 'react-native-google-mobile-ads';
import {SendMessageModalView} from './SendMessageModalView';
import {COLORS} from '../../constants/colors';
import {ReportModalView} from '../ProfileDetailsViews/ReportModalView';

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

  public getGoalItem(goal: number) {
    return (
      <View key={goal} style={ProfileDetailsStyles.goalItemContainerExternal}>
        <ShadowWrapperView>
          <View style={[BaseStyles.row, BaseStyles.alignCenter, BaseStyles.p5]}>
            <Image style={BaseStyles.defaultIcon} source={ICONS.goalsArray[goal]} />
            <View style={ProfileDetailsStyles.goalItemContainerInternal}>
              <Text style={ProfileDetailsStyles.goalItemText}>{_.lang.goals[goal]}</Text>
            </View>
          </View>
        </ShadowWrapperView>
      </View>
    );
  }

  public getAlcoItem(alco: number) {
    return (
      <View key={`alco${alco}`} style={ProfileDetailsStyles.goalItemContainerExternal}>
        <ShadowWrapperView>
          <View style={[BaseStyles.row, BaseStyles.alignCenter, BaseStyles.p5]}>
            <Image style={BaseStyles.defaultIcon} source={ICONS.alcoArray[alco]} />
            <View style={ProfileDetailsStyles.goalItemContainerInternal}>
              <Text style={ProfileDetailsStyles.goalItemText}>{_.lang.alco[alco]}</Text>
            </View>
          </View>
        </ShadowWrapperView>
      </View>
    );
  }

  public getKidsItem(kids: number) {
    return (
      <View key={`kids${kids}`} style={ProfileDetailsStyles.goalItemContainerExternal}>
        <ShadowWrapperView>
          <View style={[BaseStyles.row, BaseStyles.alignCenter, BaseStyles.p5]}>
            <Image style={BaseStyles.defaultIcon} source={ICONS.kidsArray[kids]} />
            <View style={ProfileDetailsStyles.goalItemContainerInternal}>
              <Text style={ProfileDetailsStyles.goalItemText}>{_.lang.kids[kids]}</Text>
            </View>
          </View>
        </ShadowWrapperView>
      </View>
    );
  }

  public getSmokingItem(smoking: number) {
    return (
      <View key={`smoking${smoking}`} style={ProfileDetailsStyles.goalItemContainerExternal}>
        <ShadowWrapperView>
          <View style={[BaseStyles.row, BaseStyles.alignCenter, BaseStyles.p5]}>
            <Image style={BaseStyles.defaultIcon} source={ICONS.smokingArray[smoking]} />
            <View style={ProfileDetailsStyles.goalItemContainerInternal}>
              <Text style={ProfileDetailsStyles.goalItemText}>{_.lang.smoking[smoking]}</Text>
            </View>
          </View>
        </ShadowWrapperView>
      </View>
    );
  }

  public getExpectationsBlock() {
    if (this.model.userData === null || this.model.userData.lookingfor === null) {
      return;
    }
    if (this.model.userData.lookingfor.length === 0) {
      return;
    }

    return (
      <>
        <View style={[ProfileDetailsStyles.profilePreviewContainer]}>
          <Text style={ProfileDetailsStyles.profileInfoText}> {_.lang.i_looking_for} </Text>
          {this.model.userData.lookingfor.map(loking => {
            return (
              <Image
                key={loking}
                source={loking === 0 ? ICONS.maleIcon : ICONS.femaleIcon}
                style={[BaseStyles.bigIcon]}
              />
            );
          })}
        </View>
      </>
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
        onDismiss={this.model.close}
        visible={this.model.visible}
        transparent={true}
        style={BaseStyles.container}>
        <View style={ProfileDetailsStyles.profileModalBackGround}>
          <View style={ProfileDetailsStyles.profileModalContentContainer}>
            <ScrollView
              ref={ref => {
                //@ts-ignore
                this.model.scrollRef = ref;
              }}
              style={[BaseStyles.w100]}
              contentContainerStyle={[BaseStyles.alignCenter, BaseStyles.w100]}>
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
                            }
                      }
                      style={ProfileDetailsStyles.profileAvatarImage}
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
                  {this.getExpectationsBlock()}
                  {this.model.userData.goal !== undefined &&
                    this.model.userData.goal !== null &&
                    this.model.userData.goal.length && (
                      <View style={BaseStyles.w90}>
                        <Text style={ProfileDetailsStyles.profileInfoText}>
                          {_.lang.dating_goals}
                          {': '}
                        </Text>
                        <View style={[BaseStyles.row, BaseStyles.wrap]}>
                          {this.model.userData.goal.map(goal => {
                            return this.getGoalItem(goal);
                          })}
                        </View>
                      </View>
                    )}
                  <View style={ProfileDetailsStyles.profileMainTextWrapper}>
                    {this.model.userData.text !== '' && (
                      <View style={ProfileDetailsStyles.profileMainTextContainer}>
                        <Text style={ProfileDetailsStyles.profileInfoText}>
                          {this.model.userData.text}
                        </Text>
                      </View>
                    )}
                  </View>

                  <View
                    style={[
                      ProfileDetailsStyles.profilePreviewContainer,
                      BaseStyles.wrap,
                      BaseStyles.mt20,
                      BaseStyles.ml20,
                    ]}>
                    {this.model.userData.kids !== null &&
                      this.getKidsItem(this.model.userData.kids)}

                    {this.model.userData.alco !== null &&
                      this.getAlcoItem(this.model.userData.alco)}

                    {this.model.userData.smoking !== null &&
                      this.getSmokingItem(this.model.userData.smoking)}

                    {this.model.userData.sponsor && (
                      <View
                        style={[
                          ProfileDetailsStyles.profilePropContainer,
                          {backgroundColor: COLORS.GREEN_BUTTON},
                        ]}>
                        <Text style={[ProfileDetailsStyles.profileInfoText, {color: COLORS.WHITE}]}>
                          {_.lang.i_dont_mind_being_a_sponsor}
                        </Text>
                      </View>
                    )}

                    {this.model.userData.keepter && (
                      <View
                        style={[
                          ProfileDetailsStyles.profilePropContainer,
                          {backgroundColor: COLORS.RED},
                        ]}>
                        <Text style={[ProfileDetailsStyles.profileInfoText, {color: COLORS.WHITE}]}>
                          {_.lang.i_dont_mind_being_a_kepter}
                        </Text>
                      </View>
                    )}
                  </View>
                  <View style={BaseStyles.w100}>
                    {this.model.userData.photos &&
                      this.model.userData.photos.map((photo, index) => {
                        return (
                          <TouchableOpacity
                            onPress={() => {
                              app.photoViewer.open(
                                photo,
                                false,
                                this.model.userData ? this.model.userData.authorId : -1,
                              );
                            }}
                            style={ProfileDetailsStyles.profilePhotosContainer}
                            key={index}>
                            <Image
                              style={ProfileDetailsStyles.profilePhotosIcon}
                              source={{uri: `${appSettings.apiEndpoint}${photo}`}}
                            />
                          </TouchableOpacity>
                        );
                      })}
                  </View>

                  <View style={BaseStyles.w100}>
                    {this.model.userData &&
                      this.model.userData.anon_photos &&
                      this.model.userData.anon_photos.map((photo, index) => {
                        return (
                          <TouchableOpacity
                            onPress={() => {
                              app.photoViewer.open(
                                photo,
                                true,
                                this.model.userData ? this.model.userData.authorId : -1,
                              );
                            }}
                            style={[
                              ProfileDetailsStyles.profilePhotosContainer,
                              this.model.userData && this.model.userData.photoAccess
                                ? {borderWidth: 3, borderColor: COLORS.GREEN_BUTTON}
                                : {borderWidth: 3, borderColor: COLORS.RED},
                            ]}
                            key={index}>
                            <Image
                              style={ProfileDetailsStyles.profilePhotosIcon}
                              source={{uri: `${appSettings.apiEndpoint}${photo}`}}
                            />
                          </TouchableOpacity>
                        );
                      })}
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
            <ReportModalView {...this.childProps(this.model.reportModal)} />
            <View style={ProfileDetailsStyles.profileModalCloseContainer}>
              <ShadowWrapperView borderRadius={30}>
                <SimpleButtonView
                  iconStyles={ProfileDetailsStyles.profileModalCloseIcon}
                  styles={ProfileDetailsStyles.profileCloseModalButtonContainerInternal}
                  {...this.childProps(this.model.closeButton)}
                />
              </ShadowWrapperView>
            </View>
            <View style={ProfileDetailsStyles.profileModalPrevButtonContainer}>
              <ShadowWrapperView borderRadius={30}>
                <SimpleButtonView
                  styles={ProfileDetailsStyles.profileModalButtonContainerInternal}
                  textStyles={ProfileDetailsStyles.actionButtonText}
                  {...this.childProps(this.model.prevButton)}
                />
              </ShadowWrapperView>
            </View>
            <View style={ProfileDetailsStyles.profileModalNextButtonContainer}>
              <ShadowWrapperView borderRadius={30}>
                <SimpleButtonView
                  styles={ProfileDetailsStyles.profileModalButtonContainerInternal}
                  textStyles={ProfileDetailsStyles.actionButtonText}
                  {...this.childProps(this.model.nextButton)}
                />
              </ShadowWrapperView>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

export {ProfileDetailsModalView};
