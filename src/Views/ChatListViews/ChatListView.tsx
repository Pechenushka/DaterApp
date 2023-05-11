import {
  TypedBaseComponent,
  baseComponentProps,
  componentPropsWithModel,
} from '../../Core/BaseComponent';
import React from 'react';
import {ActivityIndicator, ScrollView, Text, View} from 'react-native';
import {ChatListModel} from '../../Models/ChatListModels/ChatListModel';
import {ChatsStyles} from '../../Styles/ChatsStyles';
import {COLORS} from '../../constants/colors';
import {BaseStyles} from '../../Styles/BaseStyles';
import {ChatListItemView} from './ChatListItemView';
import {_} from '../../Core/Localization';
import {SimpleButtonView} from '../Components/Buttons/SimpleButtonView';

type chatListViewProps = baseComponentProps & {};

class ChatListView extends TypedBaseComponent<chatListViewProps, ChatListModel> {
  constructor(props: componentPropsWithModel<chatListViewProps, ChatListModel>) {
    super(props);
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
    if (this.model.loading) {
      return (
        <View style={[BaseStyles.w100, BaseStyles.h100, BaseStyles.alignCenter]}>
          <ActivityIndicator size={30} color={COLORS.PLACEHOLDER} />
        </View>
      );
    }
    return (
      <View style={ChatsStyles.chatListMainContainer}>
        <View style={ChatsStyles.chatListHeaderContainer}>
          <View style={[BaseStyles.w10]}>
            <SimpleButtonView
              styles={[ChatsStyles.chatListHeaderMenuButton]}
              iconStyles={[BaseStyles.bigIcon]}
              {...this.childProps(this.model.menuButton)}
            />
          </View>
          <View style={[BaseStyles.w80, BaseStyles.ai_c]}>
            <Text style={ChatsStyles.chatListHeaderText}>{_.lang.your_chats}</Text>
          </View>
        </View>

        <ScrollView
          style={BaseStyles.w100}
          contentContainerStyle={[BaseStyles.w100, BaseStyles.ai_c, BaseStyles.pb150]}>
          {this.model.list.length > 0 ? (
            this.model.list.map(chatItem => {
              return <ChatListItemView {...this.childProps(chatItem)} />;
            })
          ) : (
            <View style={BaseStyles.mt30}>
              <Text>{_.lang.items_not_found}</Text>
            </View>
          )}
        </ScrollView>
      </View>
    );
  }
}

export {ChatListView};
