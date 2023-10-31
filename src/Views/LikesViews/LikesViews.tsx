import {
  TypedBaseComponent,
  baseComponentProps,
  componentPropsWithModel,
} from '../../Core/BaseComponent';
import React from 'react';
import {ActivityIndicator, FlatList, RefreshControl, Text, View} from 'react-native';
import {LikesModel} from '../../Models/LikesModels/LikesModel';
import {TaberView} from '../Components/Filters/TaberView';
import {LikesScreenStyles} from '../../Styles/LikesScreenStyles';
import {BaseStyles} from '../../Styles/BaseStyles';
import {LikeItemView} from './LikeItemView';
import {COLORS} from '../../constants/colors';
import {SendMessageModalView} from '../SearchViews/SendMessageModalView';
import {_} from '../../Core/Localization';

type likesViewsProps = baseComponentProps & {
  textStyles?: Object;
};

class LikesViews extends TypedBaseComponent<likesViewsProps, LikesModel> {
  constructor(props: componentPropsWithModel<likesViewsProps, LikesModel>) {
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
      <View style={LikesScreenStyles.mainContainer}>
        <View>
          <TaberView
            containerStyles={LikesScreenStyles.tabsContainer}
            elementContainerStyles={LikesScreenStyles.tabsElementContainer}
            elementActiveContainerStyles={LikesScreenStyles.tabsActiveEvlementContainer}
            textStyles={LikesScreenStyles.tabsText}
            elementActiveTextStyles={LikesScreenStyles.tabsActiveText}
            {...this.childProps(this.model.tabs)}
          />
        </View>
        <SendMessageModalView {...this.childProps(this.model.sendMessageModal)} />

        {this.model.loading ? (
          <View style={[BaseStyles.w100, BaseStyles.h100, BaseStyles.alignCenter]}>
            <ActivityIndicator size={30} color={COLORS.PLACEHOLDER} />
          </View>
        ) : (
          <View style={[BaseStyles.w100, BaseStyles.ai_c]}>
            <FlatList
              ref={ref => {
                this.model.FlatListRef = ref;
              }}
              style={[BaseStyles.w100]}
              contentContainerStyle={[BaseStyles.pb150, BaseStyles.ai_c]}
              onScroll={this.model.onScroll}
              renderItem={likeItem => {
                return <LikeItemView {...this.childProps(likeItem.item)} />;
              }}
              data={this.model.list}
              maxToRenderPerBatch={10}
              initialNumToRender={10}
              windowSize={5}
              getItemLayout={(data, index) => ({length: 100, offset: 100 * index, index})}
              showsVerticalScrollIndicator={false}
              refreshControl={
                <RefreshControl
                  onRefresh={this.model.loadNededList}
                  refreshing={this.model.refreshing}></RefreshControl>
              }
              ListEmptyComponent={
                <View style={BaseStyles.mt30}>
                  <Text>{_.lang.items_not_found}</Text>
                </View>
              }
            />
          </View>
        )}
      </View>
    );
  }
}

export {LikesViews};
