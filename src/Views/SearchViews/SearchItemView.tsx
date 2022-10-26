import {
  TypedBaseComponent,
  baseComponentProps,
  componentPropsWithModel,
} from '../../Core/BaseComponent';
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
import {getShortDate} from '../../Common/dateParse';
import {getAge} from '../../Common/Helpers';
import {_} from '../../Core/Localization';
import {SearchStyles} from '../../Styles/SearchStyles';
import {RoundAvatarView} from '../Components/Avatars/RoundAvatarView';

type searchItemViewProps = baseComponentProps & {};

class SearchItemView extends TypedBaseComponent<searchItemViewProps, SearchItemModel> {
  private imgRef: Image | null = null;
  constructor(props: componentPropsWithModel<searchItemViewProps, SearchItemModel>) {
    super(props);
  }

  public getExpectationsIcon() {
    if (this.model.lookingfor === 0) {
      return <Image source={ICONS.maleIcon} style={[BaseStyles.defaultIcon]} />;
    }

    if (this.model.lookingfor === 1) {
      return <Image source={ICONS.femaleIcon} style={[BaseStyles.defaultIcon]} />;
    }

    if (this.model.lookingfor === 2) {
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
        source={this.model.authorGender === 'male' ? ICONS.femaleIcon : ICONS.maleIcon}
        style={[BaseStyles.defaultIcon]}
      />
    );
  }

  public render() {
    super.render();
    return (
      <View style={[BaseStyles.w100, BaseStyles.ai_c, {height: 142}, BaseStyles.mt10]}>
        <TouchableOpacity
          style={[
            SearchStyles.searchItemContainer,
            this.model.checked
              ? {backgroundColor: COLORS.WHITE}
              : {backgroundColor: COLORS.BLURED_GRAY},
            BaseStyles.h100,
          ]}
          onPress={this.model.onItemPress}>
          <View style={[BaseStyles.w100, BaseStyles.ai_fs, BaseStyles.h100]}>
            <View style={[BaseStyles.row, BaseStyles.w100, BaseStyles.jc_sb, BaseStyles.h100, ,]}>
              <View style={[BaseStyles.ai_c, BaseStyles.w30, BaseStyles.jc_c]}>
                <RoundAvatarView
                  id="RoundAvatar"
                  imagePath={this.model.authorAvatar}
                  size={95}
                  isOnline={this.model.online_status}
                />
              </View>
              <View style={[BaseStyles.jc_c, BaseStyles.w60]}>
                <View style={[BaseStyles.row]}>
                  <Text
                    ellipsizeMode="tail"
                    numberOfLines={1}
                    style={[MyAnnouncementStyles.userNameText, BaseStyles.w60]}>
                    {this.model.authorName}
                  </Text>
                  <Image
                    source={this.model.authorGender === 'male' ? ICONS.maleIcon : ICONS.femaleIcon}
                    style={[BaseStyles.defaultIcon, BaseStyles.ml10]}
                  />
                  <Text> {getAge(this.model.authorBirthDay || 0)} y.o </Text>
                </View>

                <View style={[MyAnnouncementStyles.goalPreviewContainer]}>
                  <Text ellipsizeMode="tail" numberOfLines={1}>
                    <Text> {_.lang.i_looking_for} </Text>
                    {this.getExpectationsIcon()}
                    {this.model.goal !== undefined && (
                      <Text>
                        {' '}
                        {_.lang.for} {this.model.goal}
                      </Text>
                    )}
                  </Text>
                </View>

                <View style={[BaseStyles.row, BaseStyles.pb5]}>
                  <Image source={ICONS.eyeIcon} style={[BaseStyles.defaultIcon]} />
                  <Text> {getShortDate(this.model.lastOnline)}</Text>
                </View>

                <View style={MyAnnouncementStyles.previewMainTextWrapper}>
                  {this.model.text !== '' && (
                    <View style={MyAnnouncementStyles.previewMainTextContainer}>
                      <Text ellipsizeMode="tail" numberOfLines={1}>
                        {this.model.text}
                      </Text>
                    </View>
                  )}
                </View>
                <View style={[MyAnnouncementStyles.previewLocationContainer]}>
                  <Image source={ICONS.locationIcon} style={[BaseStyles.defaultIcon]} />
                  <Text style={BaseStyles.ta_c} ellipsizeMode="head" numberOfLines={1}>
                    {this.model.regionName}, {this.model.cityName}
                  </Text>
                </View>
              </View>
              <View style={[BaseStyles.w10, BaseStyles.h100, BaseStyles.jc_sb]}>
                {app.currentUser.userId !== this.model.authorId && (
                  <>
                    {this.model.liked ? (
                      <View
                        style={[SearchStyles.likeButtonWrapper, BaseStyles.mr10, {opacity: 0.5}]}>
                        <View style={[SearchStyles.likeButtonContainer]}>
                          <Image source={ICONS.heartIconRed} style={SearchStyles.likeButtonIcon} />
                        </View>
                      </View>
                    ) : (
                      <View style={[SearchStyles.likeButtonWrapper, BaseStyles.mr10]}>
                        <SimpleButtonView
                          styles={SearchStyles.likeButtonContainer}
                          iconStyles={SearchStyles.likeButtonIcon}
                          {...this.childProps(this.model.likeButton)}
                        />
                      </View>
                    )}

                    <View style={SearchStyles.likeButtonWrapper}>
                      <SimpleButtonView
                        styles={SearchStyles.likeButtonContainer}
                        iconStyles={SearchStyles.likeButtonIcon}
                        {...this.childProps(this.model.writeButton)}
                      />
                    </View>
                  </>
                )}
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export {SearchItemView};
