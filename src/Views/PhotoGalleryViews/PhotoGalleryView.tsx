import {
  TypedBaseComponent,
  baseComponentProps,
  componentPropsWithModel,
} from '../../Core/BaseComponent';
import React from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity, Modal, Platform} from 'react-native';
import {BaseStyles} from '../../Styles/BaseStyles';
import {SimpleButtonView} from '../Components/Buttons/SimpleButtonView';
import {ChatsStyles} from '../../Styles/ChatsStyles';
import {_} from '../../Core/Localization';
import {PhotoGalleryModel} from '../../Models/PhotoGalleryModels/PhotoGalleryModel';
import {PhotoGalleryStyles} from '../../Styles/PhotoGalleryStyles';
import {ICONS} from '../../constants/icons';
import {SearchStyles} from '../../Styles/SearchStyles';
import {HomeScreenStyles} from '../../Styles/HomeScreenStyles';
import {appSettings} from '../../Common/AppSettings';
import {COLORS} from '../../constants/colors';
import {ShadowWrapperView} from '../Components/Wrappers/ShadowWrapperView';
import {app} from '../../Core/AppImpl';

type photoGalleryViewProps = baseComponentProps & {};

class PhotoGalleryView extends TypedBaseComponent<photoGalleryViewProps, PhotoGalleryModel> {
  constructor(props: componentPropsWithModel<photoGalleryViewProps, PhotoGalleryModel>) {
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
            <Text style={ChatsStyles.chatListHeaderText}>{_.lang.your_photo_gallery}</Text>
          </View>
        </View>

        <ScrollView contentContainerStyle={BaseStyles.pb150}>
          <View style={[BaseStyles.w100, BaseStyles.ai_c]}>
            <View style={PhotoGalleryStyles.photoBlockHeaderContainer}>
              <Text style={PhotoGalleryStyles.photoBlockHeaderTitleText}>{_.lang.your_avatar}</Text>
            </View>
            {app.currentUser.avatar !== undefined &&
            app.currentUser.avatar !== '' &&
            app.currentUser.avatar !== null ? (
              <View>
                <TouchableOpacity
                  onPress={this.model.changeAvatar}
                  style={[PhotoGalleryStyles.avatarContainer]}>
                  <Image
                    source={{
                      uri: `${appSettings.apiEndpoint}${app.currentUser.avatar}`,
                      cache: 'reload',
                    }}
                    style={PhotoGalleryStyles.avatarImage}
                  />
                </TouchableOpacity>
                <View
                  style={{
                    position: 'absolute',
                    bottom: 20,
                    right: 20,
                  }}>
                  <ShadowWrapperView borderRadius={60}>
                    <SimpleButtonView
                      iconStyles={[BaseStyles.defaultIcon]}
                      styles={[HomeScreenStyles.deleteAvatarButtonContainer]}
                      {...this.childProps(this.model.deleteAvatar)}
                    />
                  </ShadowWrapperView>
                </View>
                <View
                  style={{
                    position: 'absolute',
                    bottom: 20,
                    right: 190,
                  }}>
                  <ShadowWrapperView borderRadius={60}>
                    <SimpleButtonView
                      iconStyles={[BaseStyles.defaultIcon]}
                      styles={[HomeScreenStyles.deleteAvatarButtonContainer]}
                      {...this.childProps(this.model.changeAvatarButton)}
                    />
                  </ShadowWrapperView>
                </View>
              </View>
            ) : (
              <TouchableOpacity
                onPress={this.model.changeAvatar}
                style={[HomeScreenStyles.avatarContainer]}>
                <Image source={ICONS.addPhotoIcon} style={HomeScreenStyles.addAvatarIcon} />
              </TouchableOpacity>
            )}
            <View style={PhotoGalleryStyles.photoBlockContainer}>
              <View style={PhotoGalleryStyles.photoBlockHeaderContainer}>
                <Text style={PhotoGalleryStyles.photoBlockHeaderTitleText}>
                  {_.lang.your_photos}
                </Text>
              </View>
              <View
                style={[BaseStyles.w90, BaseStyles.alignCenter, BaseStyles.row, BaseStyles.mt10]}>
                <Image source={ICONS.helpIcon} style={BaseStyles.defaultIcon} />
                <Text style={PhotoGalleryStyles.helpText}>{_.lang.photoGalleryPhotoHint}</Text>
              </View>
              <SimpleButtonView
                styles={PhotoGalleryStyles.addPhotoButtonContainer}
                iconStyles={PhotoGalleryStyles.addPhotoButtonIcon}
                {...this.childProps(this.model.addPhotoButton)}
              />
              <View style={PhotoGalleryStyles.photoListContainer}>
                {this.model.photoList.length === 0 && (
                  <View style={[BaseStyles.w100, BaseStyles.ai_c, BaseStyles.mt20]}>
                    <Text style={PhotoGalleryStyles.addAnonPhotoModalHint}>
                      {_.lang.no_items_here_yet}
                    </Text>
                  </View>
                )}
                {this.model.photoList.map((photo, index) => {
                  return (
                    <View
                      style={[
                        PhotoGalleryStyles.photoItemContainer,
                        !photo.checked
                          ? {borderColor: COLORS.RED, borderWidth: 2, borderRadius: 13}
                          : {},
                      ]}
                      key={index}>
                      <Image
                        style={PhotoGalleryStyles.photoItemIcon}
                        source={{uri: `${appSettings.apiEndpoint}${photo.url}`}}
                      />
                      <TouchableOpacity
                        onPress={() => {
                          this.model.deletePhotoFromList(index, photo.url);
                        }}
                        style={PhotoGalleryStyles.photoItemDeleteButtonContainer}>
                        <Image style={BaseStyles.defaultIcon} source={ICONS.deletePhotoIcon} />
                      </TouchableOpacity>
                    </View>
                  );
                })}
                <View style={PhotoGalleryStyles.limitCountersContainer}>
                  <Text style={PhotoGalleryStyles.limitCountersText}>
                    {this.model.photoList.length}/5
                  </Text>
                </View>
              </View>
            </View>
            <View style={PhotoGalleryStyles.photoBlockContainer}>
              <View style={PhotoGalleryStyles.photoBlockHeaderContainer}>
                <Text style={PhotoGalleryStyles.photoBlockHeaderTitleText}>
                  {_.lang.your_anon_photos}
                </Text>
              </View>

              <View
                style={[BaseStyles.w90, BaseStyles.alignCenter, BaseStyles.row, BaseStyles.mt10]}>
                <Image source={ICONS.helpIcon} style={BaseStyles.defaultIcon} />
                <Text style={PhotoGalleryStyles.helpText}>{_.lang.photoGalleryAnonPhotoHint}</Text>
              </View>

              <SimpleButtonView
                styles={PhotoGalleryStyles.addPhotoButtonContainer}
                iconStyles={PhotoGalleryStyles.addPhotoButtonIcon}
                {...this.childProps(this.model.addAnonPhotoButton)}
              />
              <View style={PhotoGalleryStyles.photoListContainer}>
                {this.model.photoAnonList.length === 0 && (
                  <View style={[BaseStyles.w100, BaseStyles.ai_c, BaseStyles.mt20]}>
                    <Text style={PhotoGalleryStyles.addAnonPhotoModalHint}>
                      {_.lang.no_items_here_yet}
                    </Text>
                  </View>
                )}
                {this.model.photoAnonList.map((photo, index) => {
                  return (
                    <TouchableOpacity
                      onPress={() => {
                        this.model.openPreviewModal(photo.url);
                      }}
                      style={[
                        PhotoGalleryStyles.photoItemContainer,
                        !photo.checked
                          ? {borderColor: COLORS.RED, borderWidth: 2, borderRadius: 13}
                          : {},
                      ]}
                      key={index}>
                      <Image
                        style={PhotoGalleryStyles.photoItemIcon}
                        source={{uri: `${appSettings.apiEndpoint}${photo.url}`}}
                      />
                      <TouchableOpacity
                        onPress={() => {
                          this.model.deleteAnonPhotoFromList(index, photo.url);
                        }}
                        style={PhotoGalleryStyles.photoItemDeleteButtonContainer}>
                        <Image style={BaseStyles.defaultIcon} source={ICONS.deletePhotoIcon} />
                      </TouchableOpacity>
                    </TouchableOpacity>
                  );
                })}
                <View style={PhotoGalleryStyles.limitCountersContainer}>
                  <Text style={PhotoGalleryStyles.limitCountersText}>
                    {this.model.photoAnonList.length}/4
                  </Text>
                </View>
              </View>
            </View>
            <Modal
              transparent={true}
              onDismiss={this.model.closeModal}
              onRequestClose={this.model.closeModal}
              visible={this.model.showModal}>
              <View style={PhotoGalleryStyles.addAnonPhotoModalContainer}>
                <View style={PhotoGalleryStyles.addAnonPhotoModalContentContainer}>
                  <SimpleButtonView
                    iconStyles={SearchStyles.filterModalCloseIcon}
                    styles={SearchStyles.filterModalCloseContainer}
                    {...this.childProps(this.model.closeButton)}
                  />
                  {this.model.photoAnonList.length >= 4 ? (
                    <>
                      <Text style={PhotoGalleryStyles.addAnonPhotoModalHint}>
                        {_.lang.sorry_you_rich_anon_photos_limit}
                      </Text>
                    </>
                  ) : (
                    <>
                      {this.model.revardCount > 0 ? (
                        <>
                          <Text style={PhotoGalleryStyles.addAnonPhotoModalHint}>
                            {_.lang.now_you_can_add_anon_photo}
                          </Text>
                          <SimpleButtonView
                            styles={PhotoGalleryStyles.addAnonPhotoModalChooseButton}
                            iconStyles={SearchStyles.filterModalCloseIcon}
                            {...this.childProps(this.model.chooseAnonPhotoButton)}
                          />
                        </>
                      ) : (
                        <>
                          <Text style={PhotoGalleryStyles.addAnonPhotoModalHint}>
                            {_.lang.for_add_annon_photo_watch_add}
                          </Text>
                          <SimpleButtonView
                            styles={PhotoGalleryStyles.addAnonPhotoModalWatchButton}
                            textStyles={PhotoGalleryStyles.addAnonPhotoModalWatchButtonText}
                            {...this.childProps(this.model.watchAddButton)}
                          />
                        </>
                      )}
                    </>
                  )}
                </View>
              </View>
            </Modal>
            <Modal
              onDismiss={this.model.closePreviewModal}
              onRequestClose={this.model.closePreviewModal}
              visible={this.model.showPreviewModal}
              transparent={true}>
              <View style={[HomeScreenStyles.fullScreenContainer]}>
                <Image
                  source={
                    this.model.fullscreenUrl === undefined || this.model.fullscreenUrl === ''
                      ? ICONS.profileIcon
                      : {
                          uri: `${appSettings.apiEndpoint}${this.model.fullscreenUrl}`,
                          cache: 'reload',
                        }
                  }
                  style={HomeScreenStyles.fullScreenImage}
                />
                <SimpleButtonView
                  iconStyles={SearchStyles.filterModalCloseIcon}
                  styles={SearchStyles.filterModalCloseContainer}
                  {...this.childProps(this.model.closePreviewButton)}
                />
              </View>
            </Modal>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export {PhotoGalleryView};
