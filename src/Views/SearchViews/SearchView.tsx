import {
  TypedBaseComponent,
  baseComponentProps,
  componentPropsWithModel,
} from '../../Core/BaseComponent';
import React from 'react';
import {View, ActivityIndicator, Text, Image, FlatList, RefreshControl} from 'react-native';
import {SearchModel} from '../../Models/SearchModels/SearchModel';
import {SearchItemView} from './SearchItemView';
import {BaseStyles} from '../../Styles/BaseStyles';
import {COLORS} from '../../constants/colors';
import {ICONS} from '../../constants/icons';
import {SearchStyles} from '../../Styles/SearchStyles';
import {SimpleButtonView} from '../Components/Buttons/SimpleButtonView';
import {SearchFilterView} from './SearchFilterView';
import {SendMessageModalView} from './SendMessageModalView';
import {ProfileDetailsModalView} from './ProfileDetailsModalView';
import {_} from '../../Core/Localization';

type searchViewProps = baseComponentProps & {};

class SearchView extends TypedBaseComponent<searchViewProps, SearchModel> {
  constructor(props: componentPropsWithModel<searchViewProps, SearchModel>) {
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
    if (this.model.initialLoad) {
      return (
        <View style={[BaseStyles.w100, BaseStyles.h100, BaseStyles.alignCenter]}>
          <ActivityIndicator size={30} color={COLORS.PLACEHOLDER} />
        </View>
      );
    }
    return (
      <View style={BaseStyles.container}>
        <View style={[SearchStyles.headerContainer]}>
          <View style={[BaseStyles.row, BaseStyles.alignCenter]}>
            <Image style={BaseStyles.defaultIcon} source={ICONS.locationIcon} />
            <Text>
              {this.model.currentFilter.location.country.name}
              {this.model.currentFilter.location.region.name !== '' &&
                ` > ${this.model.currentFilter.location.region.name}`}
              {this.model.currentFilter.location.city.name !== '' &&
                ` > ${this.model.currentFilter.location.city.name}`}
            </Text>
          </View>
          <SimpleButtonView
            styles={SearchStyles.filterButtonContainer}
            iconStyles={SearchStyles.filterIcon}
            {...this.childProps(this.model.filterButton)}
          />
        </View>

        <SearchFilterView {...this.childProps(this.model.filterModal)} />
        <ProfileDetailsModalView {...this.childProps(this.model.profileDetailsModal)} />
        <SendMessageModalView {...this.childProps(this.model.sendMessageModal)} />

        <View style={[BaseStyles.w100, BaseStyles.ai_c]}>
          <FlatList
            ref={ref => {
              this.model.FlatListRef = ref;
            }}
            style={[BaseStyles.w95]}
            contentContainerStyle={[BaseStyles.pb150]}
            onScroll={this.model.onScroll}
            renderItem={searchItem => {
              return <SearchItemView {...this.childProps(searchItem.item)} />;
            }}
            data={this.model.list}
            maxToRenderPerBatch={10}
            initialNumToRender={10}
            windowSize={5}
            getItemLayout={(data, index) => ({length: 205, offset: 205 * index, index})}
            numColumns={2}
            horizontal={false}
            showsVerticalScrollIndicator={false}
            refreshControl={
              <RefreshControl
                onRefresh={this.model.update}
                refreshing={this.model.refreshing}></RefreshControl>
            }
            ListEmptyComponent={
              <View style={[BaseStyles.mt30, BaseStyles.alignCenter]}>
                <Text>{_.lang.items_not_found}</Text>
              </View>
            }
          />
        </View>
      </View>
    );
  }
}

export {SearchView};
