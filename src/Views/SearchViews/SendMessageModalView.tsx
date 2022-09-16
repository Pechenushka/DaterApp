import {
  TypedBaseComponent,
  baseComponentProps,
  componentPropsWithModel,
} from '../../Core/BaseComponent';
import React from 'react';
import {View, Modal, Text, Image, Platform} from 'react-native';
import {BaseStyles} from '../../Styles/BaseStyles';
import {SearchStyles} from '../../Styles/SearchStyles';
import {SimpleButtonView} from '../Components/Buttons/SimpleButtonView';
import {SendMessageModalModel} from '../../Models/SearchModels/SendMessageModalModel';
import {ChatsStyles} from '../../Styles/ChatsStyles';
import {ICONS} from '../../constants/icons';
import {appSettings} from '../../Common/AppSettings';
import {TextInputView} from '../Components/Inputs/TextInputView';
import {MyAnnouncementStyles} from '../../Styles/MyAnnouncementStyles';
import {_} from '../../Core/Localization';

type sendMessageModalViewProps = baseComponentProps & {};

class SendMessageModalView extends TypedBaseComponent<
  sendMessageModalViewProps,
  SendMessageModalModel
> {
  private imgRef: Image | null = null;
  constructor(props: componentPropsWithModel<sendMessageModalViewProps, SendMessageModalModel>) {
    super(props);
  }

  public render() {
    super.render();
    return (
      <Modal visible={this.model.visible} transparent={true} style={BaseStyles.container}>
        <View style={SearchStyles.filterModalBackGround}>
          <View style={SearchStyles.filterModalContentContainer}>
            <SimpleButtonView
              iconStyles={SearchStyles.filterModalCloseIcon}
              styles={SearchStyles.filterModalCloseContainer}
              {...this.childProps(this.model.closeButton)}
            />
            <Text style={SearchStyles.filterModalMainTilte}>{_.lang.send_your_message}</Text>
            <View style={[BaseStyles.w95, BaseStyles.alignCenter]}>
              {this.model.userData !== null && (
                <View style={SearchStyles.sendMessageModalUserContainer}>
                  <View style={BaseStyles.w30}>
                    <View style={[ChatsStyles.chatListItemAvatarContainer]}>
                      <Image
                        ref={ref => {
                          this.imgRef = ref;
                        }}
                        source={
                          this.model.userData.avatar === undefined ||
                          this.model.userData.avatar === '' ||
                          this.model.userData.avatar === null
                            ? ICONS.profileIcon
                            : {
                                uri: `${appSettings.apiEndpoint}${
                                  this.model.userData.avatar.split('.')[0]
                                }-compressed.${this.model.userData.avatar.split('.').pop()}`,
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

                  <View style={[BaseStyles.row, BaseStyles.ai_c]}>
                    <Text style={ChatsStyles.chatListItemUserName}>
                      {this.model.userData.name}{' '}
                    </Text>
                    <Image
                      source={
                        this.model.userData.gender === 'male' ? ICONS.maleIcon : ICONS.femaleIcon
                      }
                      style={[BaseStyles.smallIcon]}
                    />
                  </View>
                </View>
              )}
              <View style={SearchStyles.sendMessageModalTextInputContainer}>
                <TextInputView
                  styles={{
                    container: [MyAnnouncementStyles.describeInputContainer, BaseStyles.w100],
                    icon: {},
                    text: SearchStyles.sendMessageModalMessageInputText,
                  }}
                  counterConteinerStyles={MyAnnouncementStyles.describeInputCounterContainer}
                  counterTextStyles={MyAnnouncementStyles.describeInputCounterText}
                  {...this.childProps(this.model.messageInput)}
                />
              </View>
            </View>

            <SimpleButtonView
              styles={SearchStyles.filterModalSubmitContainer}
              textStyles={SearchStyles.filterModalSubmitText}
              {...this.childProps(this.model.submitButton)}
            />
          </View>
        </View>
      </Modal>
    );
  }
}

export {SendMessageModalView};
