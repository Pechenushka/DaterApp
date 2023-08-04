import {
  TypedBaseComponent,
  baseComponentProps,
  componentPropsWithModel,
} from '../../Core/BaseComponent';
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {ChatsStyles} from '../../Styles/ChatsStyles';
import {ChatListItemModel} from '../../Models/ChatListModels/ChatListItemModel';
import {ICONS} from '../../constants/icons';
import {BaseStyles} from '../../Styles/BaseStyles';
import {getShortDate} from '../../Common/dateParse';
import {RoundAvatarView} from '../Components/Avatars/RoundAvatarView';

type chatListItemViewProps = baseComponentProps & {};

class ChatListItemView extends TypedBaseComponent<chatListItemViewProps, ChatListItemModel> {
  private imgRef: Image | null = null;
  constructor(props: componentPropsWithModel<chatListItemViewProps, ChatListItemModel>) {
    super(props);
  }

  public render() {
    super.render();
    return (
      <TouchableOpacity
        style={ChatsStyles.chatListItemContaiter}
        onPress={this.model.onChatItemPress}>
        <View style={BaseStyles.w20}>
          <RoundAvatarView
            id="RoundAvatar"
            imagePath={this.model.avatar}
            size={50}
            isOnline={this.model.online_status}
          />
        </View>
        <View style={[BaseStyles.w40, BaseStyles.h100]}>
          <View style={[BaseStyles.row, BaseStyles.ai_c]}>
            <Text ellipsizeMode="tail" numberOfLines={1} style={ChatsStyles.chatListItemUserName}>
              {this.model.name}{' '}
            </Text>
            {this.model.gender !== null ? (
              <Image
                source={this.model.gender === 'male' ? ICONS.maleIcon : ICONS.femaleIcon}
                style={[BaseStyles.smallIcon]}
              />
            ) : (
              <></>
            )}
          </View>

          <Text
            ellipsizeMode="tail"
            numberOfLines={2}
            style={[ChatsStyles.chatListItemLastMessageDate]}>
            {this.model.lastMessage}
          </Text>
        </View>

        <View style={[BaseStyles.w10, BaseStyles.alignCenter]}>
          {this.model.unreadCount > 0 && (
            <View style={[ChatsStyles.chatListItemUnreaaCountContainer]}>
              <Text style={[ChatsStyles.chatListItemUnreaaCountText]}>
                {this.model.unreadCount}
              </Text>
            </View>
          )}
        </View>

        <View style={[BaseStyles.w30, BaseStyles.ai_c]}>
          <Text style={[ChatsStyles.chatListItemLastMessageDate]}>
            {getShortDate(this.model.lastMessageDate)}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export {ChatListItemView};
