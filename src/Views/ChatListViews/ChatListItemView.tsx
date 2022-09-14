import {
  TypedBaseComponent,
  baseComponentProps,
  componentPropsWithModel,
} from '../../Core/BaseComponent';
import React from 'react';
import {Image, Platform, Text, TouchableOpacity, View} from 'react-native';
import {ChatsStyles} from '../../Styles/ChatsStyles';
import {ChatListItemModel} from '../../Models/ChatListModels/ChatListItemModel';
import {appSettings} from '../../Common/AppSettings';
import {ICONS} from '../../constants/icons';
import {BaseStyles} from '../../Styles/BaseStyles';
import {getShortDate} from '../../Common/dateParse';

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
          <View style={[ChatsStyles.chatListItemAvatarContainer]}>
            <Image
              ref={ref => {
                this.imgRef = ref;
              }}
              source={
                this.model.avatar === undefined || this.model.avatar === ''
                  ? ICONS.profileIcon
                  : {
                      uri: `${appSettings.apiEndpoint}${
                        this.model.avatar.split('.')[0]
                      }-compressed.${this.model.avatar.split('.').pop()}`,
                      cache: 'reload',
                    }
              }
              style={ChatsStyles.chatListItemAvatarImage}
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
        <View style={[BaseStyles.w40, BaseStyles.h100]}>
          <View style={[BaseStyles.row, BaseStyles.ai_c]}>
            <Text style={ChatsStyles.chatListItemUserName}>{this.model.name} </Text>
            <Image
              source={this.model.gender === 'male' ? ICONS.maleIcon : ICONS.femaleIcon}
              style={[BaseStyles.smallIcon]}
            />
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
