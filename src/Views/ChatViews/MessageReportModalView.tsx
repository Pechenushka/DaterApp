import {
  TypedBaseComponent,
  baseComponentProps,
  componentPropsWithModel,
} from '../../Core/BaseComponent';
import React from 'react';
import {Modal, Text, TouchableOpacity, View} from 'react-native';
import {ChatsStyles} from '../../Styles/ChatsStyles';
import {SimpleButtonView} from '../Components/Buttons/SimpleButtonView';
import {MessageReportModalModel} from '../../Models/ChatModels/MessageReportModalModel';
import {SearchStyles} from '../../Styles/SearchStyles';
import {RoundAvatarView} from '../Components/Avatars/RoundAvatarView';
import {BaseStyles} from '../../Styles/BaseStyles';
import {TextInputView} from '../Components/Inputs/TextInputView';
import {MyAnnouncementStyles} from '../../Styles/MyAnnouncementStyles';
import {_} from '../../Core/Localization';

type messageReportModalViewProps = baseComponentProps & {};

class MessageReportModalView extends TypedBaseComponent<
  messageReportModalViewProps,
  MessageReportModalModel
> {
  constructor(
    props: componentPropsWithModel<messageReportModalViewProps, MessageReportModalModel>,
  ) {
    super(props);
  }

  public render() {
    super.render();
    return (
      <Modal onRequestClose={this.model.close} transparent={true} visible={this.model.visible}>
        <TouchableOpacity
          style={[ChatsStyles.contextMenuModalContainer]}
          activeOpacity={1}
          onPress={this.model.close}>
          <View style={SearchStyles.filterModalBackGround}>
            <TouchableOpacity activeOpacity={1} style={SearchStyles.filterModalContentContainer}>
              <SimpleButtonView
                iconStyles={SearchStyles.filterModalCloseIcon}
                styles={SearchStyles.filterModalCloseContainer}
                {...this.childProps(this.model.closeButton)}
              />
              <View style={BaseStyles.w90}>
                <Text style={[BaseStyles.mt20, BaseStyles.fs18, BaseStyles.fontBold]}>
                  {_.lang.report_this_message}
                </Text>
                <View style={[BaseStyles.row, BaseStyles.mt20, BaseStyles.mb10]}>
                  <RoundAvatarView id="userAvatar" size={50} imagePath={this.model.authorAvatar} />
                  <View style={BaseStyles.ml10}>
                    <Text style={BaseStyles.colorBlue}>{this.model.authorName}</Text>
                    <Text style={BaseStyles.colorGray}>{this.model.messageText}</Text>
                  </View>
                </View>
              </View>

              <View style={SearchStyles.sendMessageModalTextInputContainer}>
                <TextInputView
                  styles={{
                    container: [MyAnnouncementStyles.describeInputContainer, BaseStyles.w100],
                    icon: {},
                    text: SearchStyles.sendMessageModalMessageInputText,
                  }}
                  counterConteinerStyles={MyAnnouncementStyles.describeInputCounterContainer}
                  counterTextStyles={MyAnnouncementStyles.describeInputCounterText}
                  {...this.childProps(this.model.comentInput)}
                />
              </View>
              <SimpleButtonView
                styles={SearchStyles.filterModalSubmitContainer}
                textStyles={SearchStyles.filterModalSubmitText}
                {...this.childProps(this.model.submitButton)}
              />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    );
  }
}

export {MessageReportModalView};
