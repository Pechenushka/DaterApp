import {
  TypedBaseComponent,
  baseComponentProps,
  componentPropsWithModel,
} from '../../Core/BaseComponent';
import React from 'react';
import {ActivityIndicator, ScrollView, Text, View} from 'react-native';
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
          <ScrollView
            style={BaseStyles.w100}
            contentContainerStyle={[BaseStyles.w100, BaseStyles.ai_c, BaseStyles.pb70]}
            onScroll={this.model.onScroll}>
            {Array.from(this.model.list).map(likeItem => {
              return <LikeItemView {...this.childProps(likeItem[1])} />;
            })}

            {Array.from(this.model.list).length === 0 && <Text>{_.lang.items_not_found}</Text>}
          </ScrollView>
        )}
      </View>
    );
  }
}

export {LikesViews};
