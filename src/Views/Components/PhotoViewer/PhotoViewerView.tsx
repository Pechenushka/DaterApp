import {
  TypedBaseComponent,
  baseComponentProps,
  componentPropsWithModel,
} from '../../../Core/BaseComponent';
import React from 'react';
import {Image, Modal, Text, View} from 'react-native';
import {PhotoViewerModel} from '../../../Models/Components/PhotoViewer/PhotoViewerModel';
import {ICONS} from '../../../constants/icons';
import {appSettings} from '../../../Common/AppSettings';
import {SimpleButtonView} from '../Buttons/SimpleButtonView';
import {PhotoViewerStyles} from '../../../Styles/PhotoViewerStyles';
import {BaseStyles} from '../../../Styles/BaseStyles';
import {PhotoReportModalView} from './PhotoReportModalView';
import {_} from '../../../Core/Localization';

type photoViewerViewProps = baseComponentProps & {};

class PhotoViewerView extends TypedBaseComponent<photoViewerViewProps, PhotoViewerModel> {
  constructor(props: componentPropsWithModel<photoViewerViewProps, PhotoViewerModel>) {
    super(props);
  }

  public render() {
    super.render();
    return (
      <Modal
        visible={this.model.visible}
        onDismiss={this.model.close}
        onRequestClose={this.model.close}
        transparent={true}>
        <View style={[PhotoViewerStyles.fullScreenContainer]}>
          <Image
            source={
              this.model.photoUrl === undefined || this.model.photoUrl === ''
                ? ICONS.profileIcon
                : {
                    uri: `${appSettings.apiEndpoint}${this.model.photoUrl}`,
                    cache: 'reload',
                  }
            }
            style={PhotoViewerStyles.fullScreenImage}
          />
        </View>
        <View style={PhotoViewerStyles.headerContainer}>
          <View style={[BaseStyles.w20, BaseStyles.ai_c]}>
            {!this.model.anonPhoto && (
              <SimpleButtonView
                iconStyles={PhotoViewerStyles.previewModalCloseIcon}
                styles={PhotoViewerStyles.modalCloseButtonContainer}
                {...this.childProps(this.model.reportButton)}
              />
            )}
          </View>
          <View style={[BaseStyles.w60, BaseStyles.ai_c]}></View>

          <View style={[BaseStyles.w20, BaseStyles.ai_c]}>
            <SimpleButtonView
              iconStyles={PhotoViewerStyles.previewModalCloseIcon}
              styles={PhotoViewerStyles.modalCloseButtonContainer}
              {...this.childProps(this.model.closePreviewButton)}
            />
          </View>
        </View>
        <PhotoReportModalView {...this.childProps(this.model.reportModal)} />
        {this.model.anonMode && (
          <View style={PhotoViewerStyles.bottomContainer}>
            <View style={PhotoViewerStyles.bottomContantContainer}>
              <Image style={PhotoViewerStyles.anonIcon} source={ICONS.anonymusIcon} />

              {this.model.rewardCount > 0 ? (
                <>
                  <Text style={PhotoViewerStyles.anonHint}>
                    {_.lang.now_you_can_make_photo_access_request}
                  </Text>
                  <SimpleButtonView
                    styles={PhotoViewerStyles.makeRequestButtonContainer}
                    textStyles={PhotoViewerStyles.makeRequestButtonText}
                    {...this.childProps(this.model.makeRequestButton)}
                  />
                </>
              ) : (
                <>
                  <Text style={PhotoViewerStyles.anonHint}>
                    {_.lang.this_photo_was_hide_by_owner}
                  </Text>
                  <SimpleButtonView
                    styles={PhotoViewerStyles.makeRequestButtonContainer}
                    textStyles={PhotoViewerStyles.makeRequestButtonText}
                    {...this.childProps(this.model.watchVideoButton)}
                  />
                </>
              )}
            </View>
          </View>
        )}
      </Modal>
    );
  }
}

export {PhotoViewerView};
