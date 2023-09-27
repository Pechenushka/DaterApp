import {
  TypedBaseComponent,
  baseComponentProps,
  componentPropsWithModel,
} from '../../Core/BaseComponent';
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {MessageItemModel} from '../../Models/ChatModels/MessageItemModel';
import {ChatsStyles} from '../../Styles/ChatsStyles';
import {getTimeDate} from '../../Common/dateParse';
import {app} from '../../Core/AppImpl';
import {COLORS} from '../../constants/colors';
import {RoundAvatarView} from '../Components/Avatars/RoundAvatarView';
import {BaseStyles} from '../../Styles/BaseStyles';
import {ShadowWrapperView} from '../Components/Wrappers/ShadowWrapperView';
import {ICONS} from '../../constants/icons';

type messageItemViewProps = baseComponentProps & {};

class MessageItemView extends TypedBaseComponent<messageItemViewProps, MessageItemModel> {
  constructor(props: componentPropsWithModel<messageItemViewProps, MessageItemModel>) {
    super(props);
  }

  private getMsgAlign = (userId: number): object => {
    if (userId === app.currentUser.userId) {
      return {
        justifyContent: 'flex-end',
      };
    }
    return {
      justifyContent: 'flex-start',
    };
  };

  private getMsgContainerCollor = (userId: number): object => {
    if (userId === app.currentUser.userId) {
      return {
        backgroundColor: COLORS.WHITE,
      };
    }
    return {
      backgroundColor: COLORS.MAIN_BLUE,
    };
  };

  private getMsgTextCollor = (userId: number): object => {
    if (userId === app.currentUser.userId) {
      return {
        color: COLORS.DARK_GARY,
      };
    }
    return {
      color: COLORS.WHITE,
    };
  };

  private getAuthorNameTextCollor = (userId: number): object => {
    if (userId === app.currentUser.userId) {
      return {
        color: COLORS.MAIN_BLUE,
      };
    }
    return {
      color: COLORS.WHITE,
    };
  };

  msgAlign = this.getMsgAlign(this.model.authorId);
  msgContainerColor = this.getMsgContainerCollor(this.model.authorId);
  msgTextColor = this.getMsgTextCollor(this.model.authorId);
  msgAuthorNameCollor = this.getAuthorNameTextCollor(this.model.authorId);

  private getMessage = () => {
    if (this.model.authorId === app.currentUser.userId) {
      return (
        <View style={[BaseStyles.row]}>
          <TouchableOpacity
            onLongPress={this.model.onMessageCopy}
            style={[
              ChatsStyles.chatMessageWrapper,
              BaseStyles.ai_c,
              this.msgAlign,
              this.model.target !== 'private' ? {} : BaseStyles.w100,
            ]}
            activeOpacity={1}
            onPress={this.model.onMessagePress}>
            {this.model.isActive && this.model.target !== 'private' ? (
              <View style={[ChatsStyles.chatMessageContextMenuContainer]}>
                <ShadowWrapperView borderRadius={60}>
                  <TouchableOpacity onPress={this.model.onMessageReport} style={[BaseStyles.p5]}>
                    <Image style={[BaseStyles.bigIcon]} source={ICONS.reportIconGray} />
                  </TouchableOpacity>
                </ShadowWrapperView>
                <ShadowWrapperView borderRadius={60}>
                  <TouchableOpacity onPress={this.model.onMessageCopy} style={[BaseStyles.p5]}>
                    <Image style={[BaseStyles.bigIcon]} source={ICONS.copyIcon} />
                  </TouchableOpacity>
                </ShadowWrapperView>
              </View>
            ) : (
              <></>
            )}
            <View style={[ChatsStyles.chatMessageShadowContainer]}>
              <ShadowWrapperView>
                <View
                  style={[ChatsStyles.chatMessageContainer, this.msgAlign, this.msgContainerColor]}>
                  {this.model.authorName && (
                    <Text
                      numberOfLines={1}
                      ellipsizeMode="tail"
                      style={[ChatsStyles.chatMessageAuthorNameText, this.msgAuthorNameCollor]}>
                      {this.model.authorName}
                    </Text>
                  )}
                  <Text style={[ChatsStyles.chatMessageText, this.msgTextColor]}>
                    {this.model.messageText}
                  </Text>
                  <Text style={[ChatsStyles.chatMessageDateText, this.msgTextColor]}>
                    {getTimeDate(this.model.timestamp)}
                  </Text>
                </View>
              </ShadowWrapperView>
            </View>
          </TouchableOpacity>
          {this.model.target !== 'private' && (
            <ShadowWrapperView
              borderRadius={60}
              style={[BaseStyles.ai_c, BaseStyles.jc_fe, BaseStyles.w12, BaseStyles.pb10]}>
              <TouchableOpacity onPress={this.model.onUserAvatarPress} style={[]}>
                <RoundAvatarView id={'userAvatar'} imagePath={this.model.authorAvatar} size={50} />
              </TouchableOpacity>
            </ShadowWrapperView>
          )}
        </View>
      );
    }
    return (
      <View style={[BaseStyles.row]}>
        {this.model.target !== 'private' && (
          <ShadowWrapperView
            borderRadius={60}
            style={[BaseStyles.ai_c, BaseStyles.jc_fe, BaseStyles.w12, BaseStyles.pb10]}>
            <TouchableOpacity onPress={this.model.onUserAvatarPress} style={[]}>
              <RoundAvatarView id={'userAvatar'} imagePath={this.model.authorAvatar} size={50} />
            </TouchableOpacity>
          </ShadowWrapperView>
        )}
        <TouchableOpacity
          onLongPress={this.model.onMessageCopy}
          style={[ChatsStyles.chatMessageWrapper, BaseStyles.ai_c, this.msgAlign]}
          activeOpacity={1}
          onPress={this.model.onMessagePress}>
          <View style={[ChatsStyles.chatMessageShadowContainer]}>
            <ShadowWrapperView>
              <View
                style={[ChatsStyles.chatMessageContainer, this.msgAlign, this.msgContainerColor]}>
                {this.model.authorName && (
                  <Text
                    numberOfLines={1}
                    ellipsizeMode="tail"
                    style={[ChatsStyles.chatMessageAuthorNameText, this.msgAuthorNameCollor]}>
                    {this.model.authorName}
                  </Text>
                )}
                <Text style={[ChatsStyles.chatMessageText, this.msgTextColor]}>
                  {this.model.messageText}
                </Text>
                <Text style={[ChatsStyles.chatMessageDateText, this.msgTextColor]}>
                  {getTimeDate(this.model.timestamp)}
                </Text>
              </View>
            </ShadowWrapperView>
          </View>
          {this.model.isActive && this.model.target !== 'private' && (
            <View style={[ChatsStyles.chatMessageContextMenuContainer]}>
              <ShadowWrapperView borderRadius={60}>
                <TouchableOpacity onPress={this.model.onMessageReport} style={[BaseStyles.p5]}>
                  <Image style={[BaseStyles.bigIcon]} source={ICONS.reportIconGray} />
                </TouchableOpacity>
              </ShadowWrapperView>
              <ShadowWrapperView borderRadius={60}>
                <TouchableOpacity onPress={this.model.onMessageCopy} style={[BaseStyles.p5]}>
                  <Image style={[BaseStyles.bigIcon]} source={ICONS.copyIcon} />
                </TouchableOpacity>
              </ShadowWrapperView>
            </View>
          )}
        </TouchableOpacity>
      </View>
    );
  };

  public render() {
    super.render();
    return <>{this.getMessage()}</>;
  }
}

export {MessageItemView};
