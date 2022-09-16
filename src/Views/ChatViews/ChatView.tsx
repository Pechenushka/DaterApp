import {
  TypedBaseComponent,
  baseComponentProps,
  componentPropsWithModel,
} from '../../Core/BaseComponent';
import React from 'react';
import {ActivityIndicator, Image, Platform, Text, TouchableOpacity, View} from 'react-native';
import {ChatModel} from '../../Models/ChatModels/ChatModel';
import {COLORS} from '../../constants/colors';
import {BaseStyles} from '../../Styles/BaseStyles';
import {MessageItemView} from './MessageItemView';
import {ChatsStyles} from '../../Styles/ChatsStyles';
import {FlatList} from 'react-native-gesture-handler';
import {ICONS} from '../../constants/icons';
import {appSettings} from '../../Common/AppSettings';
import {TextInputView} from '../Components/Inputs/TextInputView';
import {SimpleButtonView} from '../Components/Buttons/SimpleButtonView';
import {getShortDate} from '../../Common/dateParse';
import {HomeScreenStyles} from '../../Styles/HomeScreenStyles';

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
            <Text style={[HomeScreenStyles.alertText]}>You block each other!</Text>
          </View>
        );
      }
      if (this.model.companion.blockedBy) {
        return (
          <View style={[BaseStyles.row, BaseStyles.w100, BaseStyles.alignCenter]}>
            <Image source={ICONS.ReportIcon} style={BaseStyles.defaultIcon} />
            <Text style={[HomeScreenStyles.alertText]}>You blocked by this user!</Text>
          </View>
        );
      }
      if (this.model.companion.blocked) {
        return (
          <View style={[BaseStyles.row, BaseStyles.w100, BaseStyles.alignCenter]}>
            <Image source={ICONS.ReportIcon} style={BaseStyles.defaultIcon} />
            <Text style={[HomeScreenStyles.alertText]}>You block this user!</Text>
          </View>
        );
      }
    }
    return <></>;
  }

  public render() {
    super.render();
    if (this.model.loading) {
      return (
        <View style={[BaseStyles.w100, BaseStyles.h100, BaseStyles.alignCenter]}>
          <ActivityIndicator size={30} color={COLORS.PLACEHOLDER} />
        </View>
      );
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
              onPress={this.model.onprofilePress}
              style={[BaseStyles.w90, BaseStyles.row]}>
              <View style={BaseStyles.w20}>
                <View style={[ChatsStyles.chatListItemAvatarContainer]}>
                  <Image
                    ref={ref => {
                      this.imgRef = ref;
                    }}
                    source={
                      this.model.companion.avatar === undefined ||
                      this.model.companion.avatar === '' ||
                      this.model.companion.avatar === null
                        ? ICONS.profileIcon
                        : {
                            uri: `${appSettings.apiEndpoint}${
                              this.model.companion.avatar.split('.')[0]
                            }-compressed.${this.model.companion.avatar.split('.').pop()}`,
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
                  <Text style={ChatsStyles.chatListItemUserName}>{this.model.companion.name} </Text>
                  <Image
                    source={
                      this.model.companion.gender === 'male' ? ICONS.maleIcon : ICONS.femaleIcon
                    }
                    style={[BaseStyles.smallIcon]}
                  />
                </View>
                <View style={[BaseStyles.row, BaseStyles.pb10]}>
                  <Image source={ICONS.eyeIcon} style={[BaseStyles.defaultIcon]} />
                  <Text> {getShortDate(this.model.companion.lastOnline || 0)}</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        )}

        <FlatList
          style={[BaseStyles.w100]}
          contentContainerStyle={[BaseStyles.pb70]}
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
        />

        <View style={ChatsStyles.chatMessageInputWrapper}>{this.getBlockedAlert()}</View>
      </View>
    );
  }
}

export {ChatView};
