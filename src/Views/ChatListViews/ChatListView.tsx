import {TypedBaseComponent, baseComponentProps, componentPropsWithModel} from '../../Core/BaseComponent';
import React from 'react';
import {ActivityIndicator, ScrollView, Text, View} from 'react-native';
import {ChatListModel} from '../../Models/ChatListModels/ChatListModel';
import {ChatsStyles} from '../../Styles/ChatsStyles';
import {COLORS} from '../../constants/colors';
import {BaseStyles} from '../../Styles/BaseStyles';
import {ChatListItemView} from './ChatListItemView';
import {_} from '../../Core/Localization';

type chatListViewProps = baseComponentProps & {};

class ChatListView extends TypedBaseComponent<chatListViewProps, ChatListModel> {
  constructor(props: componentPropsWithModel<chatListViewProps, ChatListModel>) {
    super(props);
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
      <View style={ChatsStyles.chatListMainContainer}>
        <Text>{_.lang.your_chats}</Text>
        <ScrollView style={BaseStyles.w100} contentContainerStyle={[BaseStyles.w100, BaseStyles.ai_c, BaseStyles.pb100]}>
          {Array.from(this.model.list).map(chatItem => {
            return <ChatListItemView {...this.childProps(chatItem[1])} />;
          })}
        </ScrollView>
      </View>
    );
  }
}

export {ChatListView};
