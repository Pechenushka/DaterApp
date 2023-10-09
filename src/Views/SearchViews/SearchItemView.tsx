import {
  TypedBaseComponent,
  baseComponentProps,
  componentPropsWithModel,
} from '../../Core/BaseComponent';
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {SearchItemModel} from '../../Models/SearchModels/SearchItemModel';
import {MyAnnouncementStyles} from '../../Styles/MyAnnouncementStyles';
import {ICONS} from '../../constants/icons';
import {BaseStyles} from '../../Styles/BaseStyles';
import {COLORS} from '../../constants/colors';
import {getShortDate} from '../../Common/dateParse';
import {getAge} from '../../Common/Helpers';
import {_} from '../../Core/Localization';
import {SearchStyles} from '../../Styles/SearchStyles';
import {CoverAvatar} from '../Components/Avatars/CoverAvatar';

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
      <View
        style={[
          BaseStyles.w45,
          BaseStyles.ai_c,
          {
            height: 205,
          },
          BaseStyles.mt10,
        ]}>
        <TouchableOpacity
          style={[
            SearchStyles.searchItemContainer,
            {
              backgroundColor:
                this.model.authorGender === 'male' ? COLORS.MALE_COLOR : COLORS.FEMALE_COLOR,
            },
            this.model.checked ? {} : {backgroundColor: COLORS.BLURED_GRAY},
            BaseStyles.h100,
          ]}
          onPress={this.model.onItemPress}>
          <View style={[BaseStyles.w100, BaseStyles.ai_c, BaseStyles.h100]}>
            <CoverAvatar id="CoverAvatar" imagePath={this.model.authorAvatar} />

            <View style={[BaseStyles.jc_c, BaseStyles.w90]}>
              <View style={[BaseStyles.row, BaseStyles.mt5, BaseStyles.ai_c]}>
                <Text
                  ellipsizeMode="tail"
                  numberOfLines={1}
                  style={[
                    MyAnnouncementStyles.userNameText,
                    {textAlign: 'center', minWidth: '45%', maxWidth: '60%'},
                  ]}>
                  {this.model.authorName}
                </Text>
                <Text> {getAge(this.model.authorBirthDay || 0)} y.o </Text>
                {this.model.online_status && <View style={[SearchStyles.isOnlineView]} />}
              </View>
              <View style={[BaseStyles.row, BaseStyles.mt5]}>
                <Image source={ICONS.eyeIcon} style={[BaseStyles.defaultIcon]} />
                <Text style={SearchStyles.lastOnlineText}>
                  {getShortDate(this.model.lastOnline)}
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <View style={SearchStyles.itemIconsContainer}>
          {this.model.sponsor && <Image style={BaseStyles.bigIcon} source={ICONS.sponsorIcon} />}
          {this.model.keepter && <Image style={BaseStyles.bigIcon} source={ICONS.keepterIcon} />}
        </View>
      </View>
    );
  }
}

export {SearchItemView};
