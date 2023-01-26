import {
  TypedBaseComponent,
  baseComponentProps,
  componentPropsWithModel,
} from '../../Core/BaseComponent';
import React from 'react';
import {Image, Text, View} from 'react-native';
import {_} from '../../Core/Localization';
import {BaseStyles} from '../../Styles/BaseStyles';
import {GuestItemModel} from '../../Models/GuestsModel/GuestItemModel';
import {GuestsStyle} from '../../Styles/GuestsStyle';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {RoundAvatarView} from '../Components/Avatars/RoundAvatarView';
import {app} from '../../Core/AppImpl';
import {ICONS} from '../../constants/icons';
import {getAge} from '../../Common/Helpers';
import {getShortDate} from '../../Common/dateParse';

type guestItemViewProps = baseComponentProps & {};

class GuestItemView extends TypedBaseComponent<guestItemViewProps, GuestItemModel> {
  constructor(props: componentPropsWithModel<guestItemViewProps, GuestItemModel>) {
    super(props);
  }

  public getGuestWay = (guestWay: number) => {
    return _.lang.guestWays[guestWay];
  };

  public render() {
    super.render();
    return (
      <TouchableOpacity onPress={this.model.onItemPress} style={GuestsStyle.guestItemMainContainer}>
        <View style={[BaseStyles.w20, BaseStyles.alignCenter]}>
          <RoundAvatarView id={'userAvatar'} imagePath={this.model.guestAvatar} size={60} />
        </View>
        <View style={BaseStyles.w50}>
          <View style={[BaseStyles.row, BaseStyles.pb5, BaseStyles.mt10]}>
            <Text numberOfLines={1} ellipsizeMode={'tail'} style={GuestsStyle.userNameText}>
              {this.model.guestName}{' '}
            </Text>
            <Image
              source={this.model.guestGender === 'male' ? ICONS.maleIcon : ICONS.femaleIcon}
              style={[BaseStyles.defaultIcon]}
            />
            <Text> {getAge(this.model.guestBirthDate || 0)}</Text>
          </View>
          <Text style={GuestsStyle.guestWayText}>{this.getGuestWay(this.model.guestWay)}</Text>
        </View>

        <View style={[BaseStyles.w20, BaseStyles.alignCenter]}>
          <Text style={GuestsStyle.dateText}>{getShortDate(this.model.date)}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export {GuestItemView};
