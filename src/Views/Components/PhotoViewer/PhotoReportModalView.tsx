import {
  TypedBaseComponent,
  baseComponentProps,
  componentPropsWithModel,
} from '../../../Core/BaseComponent';
import React from 'react';
import {View, Modal, Text, Image} from 'react-native';
import {BaseStyles} from '../../../Styles/BaseStyles';
import {SearchStyles} from '../../../Styles/SearchStyles';
import {SimpleButtonView} from '../../Components/Buttons/SimpleButtonView';
import {TextInputView} from '../../Components/Inputs/TextInputView';
import {MyAnnouncementStyles} from '../../../Styles/MyAnnouncementStyles';
import {_} from '../../../Core/Localization';
import {PhotoReportModalModel} from '../../../Models/Components/PhotoViewer/PhotoReportModalModel';
import {appSettings} from '../../../Common/AppSettings';

type photoReportModalViewProps = baseComponentProps & {};

class PhotoReportModalView extends TypedBaseComponent<
  photoReportModalViewProps,
  PhotoReportModalModel
> {
  private imgRef: Image | null = null;
  constructor(props: componentPropsWithModel<photoReportModalViewProps, PhotoReportModalModel>) {
    super(props);
  }

  public render() {
    super.render();
    return (
      <Modal
        onDismiss={this.model.close}
        onRequestClose={this.model.close}
        visible={this.model.visible}
        transparent={true}
        style={BaseStyles.container}>
        <View style={SearchStyles.filterModalBackGround}>
          <View style={SearchStyles.filterModalContentContainer}>
            <SimpleButtonView
              iconStyles={SearchStyles.filterModalCloseIcon}
              styles={SearchStyles.filterModalCloseContainer}
              {...this.childProps(this.model.closeButton)}
            />
            <Text style={SearchStyles.filterModalMainTilte}>{_.lang.send_report}</Text>
            <View style={[BaseStyles.w95, BaseStyles.alignCenter]}>
              <Image
                source={{uri: `${appSettings.apiEndpoint}${this.model.photoUrl}`}}
                style={[SearchStyles.sendPhotoReportIconContainer]}
              />

              <View style={SearchStyles.sendMessageModalTextInputContainer}>
                <TextInputView
                  styles={{
                    container: [MyAnnouncementStyles.describeInputContainer, BaseStyles.w100],
                    icon: {},
                    text: SearchStyles.sendMessageModalMessageInputText,
                  }}
                  counterConteinerStyles={MyAnnouncementStyles.describeInputCounterContainer}
                  counterTextStyles={MyAnnouncementStyles.describeInputCounterText}
                  {...this.childProps(this.model.comentInput)}
                />
              </View>
            </View>

            <SimpleButtonView
              styles={SearchStyles.filterModalSubmitContainer}
              textStyles={SearchStyles.filterModalSubmitText}
              {...this.childProps(this.model.submitButton)}
            />
          </View>
        </View>
      </Modal>
    );
  }
}

export {PhotoReportModalView};
