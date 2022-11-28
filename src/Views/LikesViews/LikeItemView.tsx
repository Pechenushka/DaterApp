import {
  TypedBaseComponent,
  baseComponentProps,
  componentPropsWithModel,
} from '../../Core/BaseComponent';
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {MyAnnouncementStyles} from '../../Styles/MyAnnouncementStyles';
import {ICONS} from '../../constants/icons';
import {BaseStyles} from '../../Styles/BaseStyles';
import {COLORS} from '../../constants/colors';
import {SimpleButtonView} from '../Components/Buttons/SimpleButtonView';
import {ShadowWrapperView} from '../Components/Wrappers/ShadowWrapperView';
import {LikeItemModel} from '../../Models/LikesModels/LikeItemModel';
import {getAge} from '../../Common/Helpers';
import {_} from '../../Core/Localization';
import {RoundAvatarView} from '../Components/Avatars/RoundAvatarView';
import {LikesScreenStyles} from '../../Styles/LikesScreenStyles';
import {app} from '../../Core/AppImpl';

type likeItemViewProps = baseComponentProps & {};

class LikeItemView extends TypedBaseComponent<likeItemViewProps, LikeItemModel> {
  private imgRef: Image | null = null;
  constructor(props: componentPropsWithModel<likeItemViewProps, LikeItemModel>) {
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

  public getStatusIcon = () => {
    switch (this.model.tab) {
      case 0:
        return ICONS.likeFromMeIcon;

      case 1:
        return ICONS.likeToMeIcon;

      case 2:
        return ICONS.matchIcon;
      default:
        break;
    }
  };

  public render() {
    super.render();
    return (
      <TouchableOpacity
        style={[
          MyAnnouncementStyles.previewContainer,
          BaseStyles.mb10,
          this.model.checked
            ? {backgroundColor: COLORS.WHITE}
            : {backgroundColor: COLORS.BLURED_GRAY},
        ]}
        onPress={this.model.onItemPress}>
        <View style={[BaseStyles.w100, BaseStyles.ai_fs]}>
          <View style={[BaseStyles.row, BaseStyles.w100, BaseStyles.jc_sb]}>
            <View style={[BaseStyles.alignCenter, BaseStyles.w35]}>
              <RoundAvatarView
                id="RoundAvatar"
                imagePath={app.currentUser.avatar}
                size={55}
                isOnline={false}
              />
              <View style={[BaseStyles.row, BaseStyles.pb10]}>
                <Text
                  numberOfLines={1}
                  ellipsizeMode={'tail'}
                  style={LikesScreenStyles.userNameText}>
                  {app.currentUser.userName}
                </Text>
                <Image
                  source={app.currentUser.gender === 'male' ? ICONS.maleIcon : ICONS.femaleIcon}
                  style={[BaseStyles.defaultIcon]}
                />
                <Text> {getAge(app.currentUser.birthDate || 0)}</Text>
              </View>
            </View>

            <View style={[BaseStyles.alignCenter, BaseStyles.w30]}>
              <Image style={LikesScreenStyles.likeItemStatusIcon} source={this.getStatusIcon()} />

              {this.model.tab === 1 && (
                <View style={[BaseStyles.jc_c, BaseStyles.row, BaseStyles.w100]}>
                  <View style={[MyAnnouncementStyles.likeButtonWrapper, BaseStyles.mr10]}>
                    <ShadowWrapperView borderRadius={50}>
                      <SimpleButtonView
                        styles={MyAnnouncementStyles.likeButtonContainer}
                        iconStyles={MyAnnouncementStyles.likeButtonIcon}
                        {...this.childProps(this.model.likeButton)}
                      />
                    </ShadowWrapperView>
                  </View>
                  <View style={[MyAnnouncementStyles.likeButtonWrapper, BaseStyles.mr10]}>
                    <ShadowWrapperView borderRadius={50}>
                      <SimpleButtonView
                        styles={MyAnnouncementStyles.likeButtonContainer}
                        iconStyles={MyAnnouncementStyles.likeButtonIcon}
                        {...this.childProps(this.model.rejectButton)}
                      />
                    </ShadowWrapperView>
                  </View>
                </View>
              )}
            </View>

            <View style={[BaseStyles.alignCenter, BaseStyles.w35]}>
              <RoundAvatarView
                id="RoundAvatar"
                imagePath={this.model.authorAvatar}
                size={55}
                isOnline={this.model.online_status}
              />
              <View style={[BaseStyles.row, BaseStyles.pb10]}>
                <Text
                  numberOfLines={1}
                  ellipsizeMode={'tail'}
                  style={LikesScreenStyles.userNameText}>
                  {this.model.authorName}{' '}
                </Text>
                <Image
                  source={this.model.authorGender === 'male' ? ICONS.maleIcon : ICONS.femaleIcon}
                  style={[BaseStyles.defaultIcon]}
                />
                <Text> {getAge(this.model.authorBirthDay || 0)}</Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

export {LikeItemView};
