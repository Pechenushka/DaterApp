import {
  TypedBaseComponent,
  baseComponentProps,
  componentPropsWithModel,
} from '../../Core/BaseComponent';
import React from 'react';
import {View, Text, Image, RefreshControl} from 'react-native';
import {BaseStyles} from '../../Styles/BaseStyles';
import {SimpleButtonView} from '../Components/Buttons/SimpleButtonView';
import {ChatsStyles} from '../../Styles/ChatsStyles';
import {_} from '../../Core/Localization';
import {PhotoGalleryStyles} from '../../Styles/PhotoGalleryStyles';
import {PhotoAccessRequestsModel} from '../../Models/PhotoAccessRequestsModels/PhotoAccessRequestsModel';
import {TaberView} from '../Components/Filters/TaberView';
import {AccessRequestsStyles} from '../../Styles/AccessRequestsStyles';
import {FlatList} from 'react-native-gesture-handler';
import {AccessRequestItemView} from './AccessRequestItemView';
import {ICONS} from '../../constants/icons';

type photoAccessRequestsViewProps = baseComponentProps & {};

class PhotoAccessRequestsView extends TypedBaseComponent<
  photoAccessRequestsViewProps,
  PhotoAccessRequestsModel
> {
  constructor(
    props: componentPropsWithModel<photoAccessRequestsViewProps, PhotoAccessRequestsModel>,
  ) {
    super(props);
  }

  public updateAnyWay = () => {
    this.shouldBeTotalyUpdated = true;
    this.forceUpdate();
    this.shouldBeTotalyUpdated = false;
  };

  public getHelpMessage() {
    if (this.model.fileters.toMe === true) {
      if (this.model.fileters.status === 'pending') {
        return _.lang.requestHelpMessage.requestToMe.pending;
      }
      if (this.model.fileters.status === 'approved') {
        return _.lang.requestHelpMessage.requestToMe.approved;
      }
      if (this.model.fileters.status === 'rejected') {
        return _.lang.requestHelpMessage.requestToMe.rejected;
      }
    }
    if (this.model.fileters.toMe === false) {
      if (this.model.fileters.status === 'pending') {
        return _.lang.requestHelpMessage.myRequests.pending;
      }
      if (this.model.fileters.status === 'approved') {
        return _.lang.requestHelpMessage.myRequests.approved;
      }
      if (this.model.fileters.status === 'rejected') {
        return _.lang.requestHelpMessage.myRequests.rejected;
      }
    }
    return '';
  }

  public render() {
    if (!this.shouldBeTotalyUpdated) {
      super.render();
    }
    return (
      <View style={[PhotoGalleryStyles.mainContainer]}>
        <View style={ChatsStyles.chatListHeaderContainer}>
          <View style={[BaseStyles.w10]}>
            <SimpleButtonView
              styles={[ChatsStyles.chatListHeaderMenuButton]}
              iconStyles={[BaseStyles.bigIcon]}
              {...this.childProps(this.model.menuButton)}
            />
          </View>

          <View style={[BaseStyles.w80, BaseStyles.ai_c]}>
            <Text style={ChatsStyles.chatListHeaderText}>{_.lang.photo_access_requests}</Text>
          </View>
        </View>
        <View style={[BaseStyles.w100, BaseStyles.ai_c]}>
          <TaberView
            containerStyles={AccessRequestsStyles.taberContainer}
            textStyles={AccessRequestsStyles.taberText}
            elementContainerStyles={AccessRequestsStyles.taberElementContainer}
            elementActiveContainerStyles={AccessRequestsStyles.taberElementActiveContainer}
            elementActiveTextStyles={AccessRequestsStyles.taberElementActiveText}
            {...this.childProps(this.model.requestorTaber)}
          />
          <TaberView
            containerStyles={AccessRequestsStyles.taberContainer}
            textStyles={AccessRequestsStyles.taberText}
            elementContainerStyles={AccessRequestsStyles.taberElementContainer}
            elementActiveContainerStyles={AccessRequestsStyles.taberElementActiveContainer}
            elementActiveTextStyles={AccessRequestsStyles.taberElementActiveText}
            {...this.childProps(this.model.statusTaber)}
          />
          <View style={[BaseStyles.w90, BaseStyles.alignCenter, BaseStyles.row, BaseStyles.mt10]}>
            <Image source={ICONS.helpIcon} style={BaseStyles.defaultIcon} />
            <Text style={AccessRequestsStyles.helpText}>{this.getHelpMessage()}</Text>
          </View>

          <FlatList
            ref={ref => {
              this.model.FlatListRef = ref;
            }}
            data={this.model.list}
            renderItem={item => {
              return <AccessRequestItemView {...this.childProps(item.item)} />;
            }}
            style={[BaseStyles.w90, BaseStyles.mt20]}
            contentContainerStyle={[BaseStyles.w100]}
            onScroll={this.model.onScroll}
            ListEmptyComponent={
              <View style={[BaseStyles.mt30, BaseStyles.w100, BaseStyles.ai_c]}>
                <Text>{_.lang.items_not_found}</Text>
              </View>
            }
            refreshControl={
              <RefreshControl
                onRefresh={this.model.load}
                refreshing={this.model.refreshing}></RefreshControl>
            }
          />
        </View>
      </View>
    );
  }
}

export {PhotoAccessRequestsView};
