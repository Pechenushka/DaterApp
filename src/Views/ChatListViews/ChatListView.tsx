import {
  TypedBaseComponent,
  baseComponentProps,
  componentPropsWithModel,
} from '../../Core/BaseComponent';
import React from 'react';
import {ActivityIndicator, FlatList, RefreshControl, ScrollView, Text, View} from 'react-native';
import {ChatListModel} from '../../Models/ChatListModels/ChatListModel';
import {ChatsStyles} from '../../Styles/ChatsStyles';
import {COLORS} from '../../constants/colors';
import {BaseStyles} from '../../Styles/BaseStyles';
import {ChatListItemView} from './ChatListItemView';
import {_} from '../../Core/Localization';
import {SimpleButtonView} from '../Components/Buttons/SimpleButtonView';
import {TaberView} from '../Components/Filters/TaberView';
import {LikesScreenStyles} from '../../Styles/LikesScreenStyles';

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

        <View>
          <TaberView
            containerStyles={LikesScreenStyles.tabsContainer}
            elementContainerStyles={[LikesScreenStyles.tabsElementContainer, BaseStyles.ph40]}
            elementActiveContainerStyles={LikesScreenStyles.tabsActiveEvlementContainer}
            textStyles={LikesScreenStyles.tabsText}
            elementActiveTextStyles={LikesScreenStyles.tabsActiveText}
            {...this.childProps(this.model.tabs)}
          />
        </View>

        {this.model.loading && Array.from(this.model.list).length === 0 ? (
          <View style={[BaseStyles.w100, BaseStyles.h100, BaseStyles.alignCenter]}>
            <ActivityIndicator size={30} color={COLORS.PLACEHOLDER} />
          </View>
        ) : (
          <>
            <FlatList
              ref={ref => {
                this.model.FlatListRef = ref;
              }}
              style={BaseStyles.w100}
              contentContainerStyle={[BaseStyles.w100, BaseStyles.ai_c, BaseStyles.pb150]}
              onScroll={this.model.onScroll}
              renderItem={chatItem => {
                return <ChatListItemView {...this.childProps(chatItem.item)} />;
              }}
              data={this.model.list}
              maxToRenderPerBatch={10}
              initialNumToRender={10}
              windowSize={5}
              showsVerticalScrollIndicator={false}
              refreshControl={
                <RefreshControl
                  onRefresh={this.model.update}
                  refreshing={this.model.refreshing}></RefreshControl>
              }
              ListEmptyComponent={
                <View style={BaseStyles.mt30}>
                  <Text style={[BaseStyles.standardColor]}>{_.lang.items_not_found}</Text>
                </View>
              }
            />
          </>
        )}
      </View>
    );
  }
}

export {ChatListView};
