import {
  TypedBaseComponent,
  baseComponentProps,
  componentPropsWithModel,
} from '../../Core/BaseComponent';
import React from 'react';
import {ActivityIndicator, Image, Text, TouchableOpacity, View} from 'react-native';
import {ChatModel} from '../../Models/ChatModels/ChatModel';
import {COLORS} from '../../constants/colors';
import {BaseStyles} from '../../Styles/BaseStyles';
import {MessageItemView} from './MessageItemView';
import {ChatsStyles} from '../../Styles/ChatsStyles';
import {FlatList} from 'react-native-gesture-handler';
import {ICONS} from '../../constants/icons';
import {TextInputView} from '../Components/Inputs/TextInputView';
import {SimpleButtonView} from '../Components/Buttons/SimpleButtonView';
import {getShortDate} from '../../Common/dateParse';
import {HomeScreenStyles} from '../../Styles/HomeScreenStyles';
import {RoundAvatarView} from '../Components/Avatars/RoundAvatarView';
import {ChatContextMenuView} from './ChatContextMenuView';
import {_} from '../../Core/Localization';
import {MessageReportModalView} from './MessageReportModalView';

type chatViewProps = baseComponentProps & {};

class ChatView extends TypedBaseComponent<chatViewProps, ChatModel> {
  private imgRef: Image | null = null;
  constructor(props: componentPropsWithModel<chatViewProps, ChatModel>) {
    super(props);
  }

  private getBlockedAlert() {
    if (this.model.companion) {
      if (!this.model.companion.blocked && !this.model.companion.blockedBy) {
        return (
          <>
            <TextInputView
              styles={{
                container: ChatsStyles.chatMessageInputContainer,
                icon: {},
                text: ChatsStyles.chatMessageInputText,
              }}
              {...this.childProps(this.model.messageInput)}
            />
            <SimpleButtonView
              iconStyles={ChatsStyles.chatMessageSendButtonIcon}
              styles={ChatsStyles.chatMessageSendButtonContainer}
              {...this.childProps(this.model.sendButton)}
            />
          </>
        );
      }
      if (this.model.companion.blocked && this.model.companion.blockedBy) {
        return (
          <View style={[BaseStyles.row, BaseStyles.w100, BaseStyles.alignCenter]}>
            <Image source={ICONS.ReportIcon} style={BaseStyles.defaultIcon} />
            <Text style={[HomeScreenStyles.alertText]}>{_.lang.you_block_each_other}</Text>
          </View>
        );
      }
      if (this.model.companion.blockedBy) {
        return (
          <View style={[BaseStyles.row, BaseStyles.w100, BaseStyles.alignCenter]}>
            <Image source={ICONS.ReportIcon} style={BaseStyles.defaultIcon} />
            <Text style={[HomeScreenStyles.alertText]}>{_.lang.you_blocked_by_user}</Text>
          </View>
        );
      }
      if (this.model.companion.blocked) {
        return (
          <View style={[BaseStyles.row, BaseStyles.w100, BaseStyles.alignCenter]}>
            <Image source={ICONS.ReportIcon} style={BaseStyles.defaultIcon} />
            <Text style={[HomeScreenStyles.alertText]}>{_.lang.you_block_this_user}</Text>
          </View>
        );
      }
    }
    return <></>;
  }

  public updateAnyWay = () => {
    this.shouldBeTotalyUpdated = true;
    this.forceUpdate();
    this.shouldBeTotalyUpdated = false;
  };

  public render() {
    if (!this.shouldBeTotalyUpdated) {
      super.render();
    }

    return (
      <View style={ChatsStyles.chatMainContainer}>
        {/* HEADER */}
        {this.model.companion !== null && (
          <View style={ChatsStyles.chatHeaderContainer}>
            <View style={[BaseStyles.w10]}>
              <SimpleButtonView
                iconStyles={BaseStyles.defaultIcon}
                {...this.childProps(this.model.backButton)}
              />
            </View>
            <TouchableOpacity
              onPress={this.model.companion.gender !== null ? this.model.onprofilePress : () => {}}
              style={[BaseStyles.w80, BaseStyles.row]}>
              <View style={BaseStyles.w20}>
                <RoundAvatarView
                  id="RoundAvatar"
                  imagePath={this.model.companion.avatar}
                  size={50}
                  isOnline={this.model.companion.online_status}
                />
              </View>
              <View style={[BaseStyles.w40, BaseStyles.h100]}>
                <View style={[BaseStyles.row, BaseStyles.ai_c]}>
                  <Text style={ChatsStyles.chatListItemUserName}>{this.model.companion.name} </Text>
                  {this.model.companion.gender !== null && (
                    <Image
                      source={
                        this.model.companion.gender === 'male' ? ICONS.maleIcon : ICONS.femaleIcon
                      }
                      style={[BaseStyles.smallIcon]}
                    />
                  )}
                </View>
                {this.model.companion.gender !== null && (
                  <View style={[BaseStyles.row, BaseStyles.pb10]}>
                    <Image source={ICONS.eyeIcon} style={[BaseStyles.defaultIcon]} />
                    <Text> {getShortDate(this.model.companion.lastOnline || 0)}</Text>
                  </View>
                )}
              </View>
            </TouchableOpacity>
            {this.model.companion.gender !== null && (
              <View style={[BaseStyles.w10]}>
                <SimpleButtonView
                  iconStyles={BaseStyles.defaultIcon}
                  {...this.childProps(this.model.openContextMenuButton)}
                />
              </View>
            )}
          </View>
        )}
        <MessageReportModalView {...this.childProps(this.model.messageReportModalModel)} />
        <ChatContextMenuView {...this.childProps(this.model.contextMenuModal)} />
        {/* <ImageBackground source={ICONS.chatBg} style={{flex: 1, width: '100%'}} resizeMode="cover"> */}
        {this.model.loading ? (
          <View style={[BaseStyles.w100, BaseStyles.h83, BaseStyles.alignCenter]}>
            <ActivityIndicator size={30} color={COLORS.PLACEHOLDER} />
          </View>
        ) : (
          <FlatList
            style={[BaseStyles.w100]}
            contentContainerStyle={[BaseStyles.pb100]}
            data={Array.from(this.model.list)
              .sort((a, b) => {
                return b[0] - a[0];
              })
              .map(msgItem => {
                return msgItem[1];
              })}
            renderItem={msgItem => {
              return <MessageItemView {...this.childProps(msgItem.item)} />;
            }}
            inverted={true}
            onScroll={this.model.onScroll}
            ListEmptyComponent={
              <View style={BaseStyles.mt30}>
                <Text style={[BaseStyles.standardColor]}>{_.lang.items_not_found}</Text>
              </View>
            }
          />
        )}

        <View style={ChatsStyles.chatMessageInputWrapper}>{this.getBlockedAlert()}</View>
        {/* </ImageBackground> */}
      </View>
    );
  }
}

export {ChatView};
