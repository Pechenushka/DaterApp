import {
  TypedBaseComponent,
  baseComponentProps,
  componentPropsWithModel,
} from '../../Core/BaseComponent';
import React from 'react';
import {Text, View} from 'react-native';
import {MessageItemModel} from '../../Models/ChatModels/MessageItemModel';
import {ChatsStyles} from '../../Styles/ChatsStyles';
import {getTimeDate} from '../../Common/dateParse';
import {app} from '../../Core/AppImpl';
import {COLORS} from '../../constants/colors';

type messageItemViewProps = baseComponentProps & {};

class MessageItemView extends TypedBaseComponent<messageItemViewProps, MessageItemModel> {
  constructor(props: componentPropsWithModel<messageItemViewProps, MessageItemModel>) {
    super(props);
  }

  private getMsgAlign = (userId: number): object => {
    if (userId === app.currentUser.userId) {
      return {
        alignItems: 'flex-end',
      };
    }
    return {
      alignItems: 'flex-start',
    };
  };

  private getMsgContainerCollor = (userId: number): object => {
    if (userId === app.currentUser.userId) {
      return {
        backgroundColor: COLORS.SCREEN_BG_NOT_BLURED,
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

  msgAlign = this.getMsgAlign(this.model.authorId);
  msgContainerColor = this.getMsgContainerCollor(this.model.authorId);
  msgTextColor = this.getMsgTextCollor(this.model.authorId);

  public render() {
    super.render();
    return (
      <View style={[ChatsStyles.chatMessageWrapper, this.msgAlign]}>
        <View style={[ChatsStyles.chatMessageContainer, this.msgAlign, this.msgContainerColor]}>
          <Text style={[ChatsStyles.chatMessageText, this.msgTextColor]}>
            {this.model.messageText}
          </Text>
          <Text style={[ChatsStyles.chatMessageDateText, this.msgTextColor]}>
            {getTimeDate(this.model.timestamp)}
          </Text>
        </View>
      </View>
    );
  }
}

export {MessageItemView};
