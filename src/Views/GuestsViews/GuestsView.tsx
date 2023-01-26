import {
  TypedBaseComponent,
  baseComponentProps,
  componentPropsWithModel,
} from '../../Core/BaseComponent';
import React from 'react';
import {ActivityIndicator, FlatList, Image, Text, View} from 'react-native';
import {_} from '../../Core/Localization';
import {GuestsModel} from '../../Models/GuestsModel/GuestsModel';
import {GuestsStyle} from '../../Styles/GuestsStyle';
import {ChatsStyles} from '../../Styles/ChatsStyles';
import {BaseStyles} from '../../Styles/BaseStyles';
import {SimpleButtonView} from '../Components/Buttons/SimpleButtonView';
import {GuestItemView} from './GuestItemView';
import {COLORS} from '../../constants/colors';
import {ICONS} from '../../constants/icons';
import {TaberView} from '../Components/Filters/TaberView';

type guestsViewProps = baseComponentProps & {};

class GuestsView extends TypedBaseComponent<guestsViewProps, GuestsModel> {
  constructor(props: componentPropsWithModel<guestsViewProps, GuestsModel>) {
    super(props);
  }

  public getHelpMessage() {
    if (this.model.myGuests) {
      return _.lang.guestHints.myGuests;
    }
    return _.lang.guestHints.myVisits;
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
      <View style={[GuestsStyle.mainContainer]}>
        <View style={ChatsStyles.chatListHeaderContainer}>
          <View style={[BaseStyles.w10]}>
            <SimpleButtonView
              styles={[ChatsStyles.chatListHeaderMenuButton]}
              iconStyles={[BaseStyles.bigIcon]}
              {...this.childProps(this.model.backButton)}
            />
          </View>

          <View style={[BaseStyles.w80, BaseStyles.ai_c]}>
            <Text style={ChatsStyles.chatListHeaderText}>{_.lang.guests}</Text>
          </View>
        </View>

        <View style={[BaseStyles.w100, BaseStyles.ai_c]}>
          <TaberView
            containerStyles={GuestsStyle.taberContainer}
            textStyles={GuestsStyle.taberText}
            elementContainerStyles={GuestsStyle.taberElementContainer}
            elementActiveContainerStyles={GuestsStyle.taberElementActiveContainer}
            elementActiveTextStyles={GuestsStyle.taberElementActiveText}
            {...this.childProps(this.model.requestorTaber)}
          />
          <View style={[BaseStyles.w90, BaseStyles.alignCenter, BaseStyles.row, BaseStyles.mt10]}>
            <Image source={ICONS.helpIcon} style={BaseStyles.defaultIcon} />
            <Text style={GuestsStyle.helpText}>{this.getHelpMessage()}</Text>
          </View>
          {this.model.initialLoad ? (
            <View style={[BaseStyles.w100, BaseStyles.mt30, BaseStyles.alignCenter]}>
              <ActivityIndicator size={30} color={COLORS.PLACEHOLDER} />
            </View>
          ) : (
            <>
              {this.model.list.length > 0 ? (
                <FlatList
                  ref={ref => {
                    this.model.FlatListRef = ref;
                  }}
                  style={[BaseStyles.w95, BaseStyles.mt10]}
                  contentContainerStyle={[BaseStyles.pb150]}
                  onScroll={this.model.onScroll}
                  renderItem={guestItem => {
                    return <GuestItemView {...this.childProps(guestItem.item)} />;
                  }}
                  data={this.model.list}
                  getItemLayout={(data, index) => ({length: 70, offset: 70 * index, index})}
                  maxToRenderPerBatch={10}
                  initialNumToRender={10}
                  windowSize={5}
                />
              ) : (
                <View style={[BaseStyles.mt30, BaseStyles.alignCenter]}>
                  <Text>{_.lang.items_not_found}</Text>
                </View>
              )}
            </>
          )}
        </View>
      </View>
    );
  }
}

export {GuestsView};
