import {TypedBaseComponent, baseComponentProps, componentPropsWithModel} from '../../Core/BaseComponent';
import React from 'react';
import {Image, Platform, Text, TouchableOpacity, View} from 'react-native';
import {SearchItemModel} from '../../Models/SearchModels/SearchItemModel';
import {MyAnnouncementStyles} from '../../Styles/MyAnnouncementStyles';
import {ICONS} from '../../constants/icons';
import {BaseStyles} from '../../Styles/BaseStyles';
import {appSettings} from '../../Common/AppSettings';
import {COLORS} from '../../constants/colors';
import {SimpleButtonView} from '../Components/Buttons/SimpleButtonView';
import {ShadowWrapperView} from '../Components/Wrappers/ShadowWrapperView';
import {app} from '../../Core/AppImpl';
import {getTimeDateLong} from '../../Common/dateParse';

type searchItemViewProps = baseComponentProps & {};

class SearchItemView extends TypedBaseComponent<searchItemViewProps, SearchItemModel> {
  private imgRef: Image | null = null;
  constructor(props: componentPropsWithModel<searchItemViewProps, SearchItemModel>) {
    super(props);
  }

  public render() {
    super.render();
    return (
      <View style={[BaseStyles.w100, BaseStyles.ai_c]}>
        <TouchableOpacity
          style={[
            MyAnnouncementStyles.previewContainer,
            this.model.checked ? {backgroundColor: COLORS.WHITE} : {backgroundColor: COLORS.BLURED_GRAY},
          ]}
          onPress={this.model.onItemPress}>
          <View style={[BaseStyles.w100, BaseStyles.ai_fs]}>
            <View style={[BaseStyles.row, BaseStyles.w100, BaseStyles.jc_sb]}>
              <View style={[BaseStyles.ai_c, BaseStyles.w30]}>
                <View style={[MyAnnouncementStyles.avatarContainer]}>
                  <Image
                    ref={ref => {
                      this.imgRef = ref;
                    }}
                    source={
                      this.model.authorAvatar === undefined || this.model.authorAvatar === ''
                        ? ICONS.profileIcon
                        : {
                            uri: `${appSettings.apiEndpoint}${
                              this.model.authorAvatar.split('.')[0]
                            }-compressed.${this.model.authorAvatar.split('.').pop()}`,
                            cache: 'reload',
                          }
                    }
                    style={MyAnnouncementStyles.avatarImage}
                    onError={() => {
                      const nativeProp = Platform.OS === 'ios' ? 'source' : 'src';
                      this.imgRef &&
                        this.imgRef.setNativeProps({
                          [nativeProp]: [Image.resolveAssetSource(ICONS.profileIcon)], // array
                        });
                    }}
                  />
                </View>
              </View>
              <View style={[BaseStyles.jc_c, BaseStyles.w100]}>
                <View style={[BaseStyles.row, BaseStyles.pb10]}>
                  <Text style={MyAnnouncementStyles.userNameText}>{this.model.authorName} </Text>
                  <Image
                    source={this.model.authorGender === 'male' ? ICONS.maleIcon : ICONS.femaleIcon}
                    style={[BaseStyles.defaultIcon]}
                  />
                  <Text> {new Date().getFullYear() - new Date(this.model.authorBirthDay || 0).getFullYear()} y.o </Text>
                </View>

                <View style={[BaseStyles.row, BaseStyles.pb10]}>
                  <Image source={ICONS.eyeIcon} style={[BaseStyles.defaultIcon]} />
                  <Text> {getTimeDateLong(this.model.lastOnline)}</Text>
                </View>

                <View style={MyAnnouncementStyles.previewMainTextWrapper}>
                  {this.model.text !== '' && (
                    <View style={MyAnnouncementStyles.previewMainTextContainer}>
                      <Text>{this.model.text}</Text>
                    </View>
                  )}
                </View>
                <View style={[MyAnnouncementStyles.previewLocationContainer]}>
                  <Image source={ICONS.locationIcon} style={[BaseStyles.defaultIcon]} />
                  <Text style={BaseStyles.ta_c}>
                    {' '}
                    {this.model.countryName}, {this.model.regionName}, {this.model.cityName}
                  </Text>
                </View>
                <View style={[BaseStyles.jc_fe, BaseStyles.w65, BaseStyles.row]}>
                  {app.currentUser.userId === this.model.authorId ? (
                    <Text>It is you!</Text>
                  ) : (
                    <>
                      <View style={[MyAnnouncementStyles.likeButtonWrapper, BaseStyles.mr10]}>
                        {this.model.liked ? (
                          <View style={MyAnnouncementStyles.likeButtonContainer}>
                            <Image source={ICONS.heartIconRed} style={MyAnnouncementStyles.likeButtonIcon} />
                          </View>
                        ) : (
                          <ShadowWrapperView borderRadius={50}>
                            <SimpleButtonView
                              styles={MyAnnouncementStyles.likeButtonContainer}
                              iconStyles={MyAnnouncementStyles.likeButtonIcon}
                              {...this.childProps(this.model.likeButton)}
                            />
                          </ShadowWrapperView>
                        )}
                      </View>
                      <View style={MyAnnouncementStyles.likeButtonWrapper}>
                        <ShadowWrapperView borderRadius={50}>
                          <SimpleButtonView
                            styles={MyAnnouncementStyles.likeButtonContainer}
                            iconStyles={MyAnnouncementStyles.likeButtonIcon}
                            {...this.childProps(this.model.writeButton)}
                          />
                        </ShadowWrapperView>
                      </View>
                    </>
                  )}
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export {SearchItemView};
