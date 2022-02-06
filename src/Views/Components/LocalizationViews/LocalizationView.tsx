import {TypedBaseComponent, baseComponentProps, componentPropsWithModel} from '../../../Core/BaseComponent';
import React from 'react';
import {Modal, Text, View} from 'react-native';
import {LocalizationModel} from '../../../Models/Components/LocalizationModels/LocalizationModel';
import {SimpleButtonView} from '../Buttons/SimpleButtonView';
import {LocalizationStyles} from '../../../Styles/LocalizationStyles';

type localizationViewProps = baseComponentProps & {};

class LocalizationView extends TypedBaseComponent<localizationViewProps, LocalizationModel> {
  constructor(props: componentPropsWithModel<localizationViewProps, LocalizationModel>) {
    super(props);
  }

  public render() {
    super.render();
    return (
      <View style={LocalizationStyles.selectButtonWrapper}>
        <SimpleButtonView
          styles={LocalizationStyles.selectButtonContainer}
          iconStyles={LocalizationStyles.selectButtonIcon}
          {...this.childProps(this.model.selectionButton)}
        />

        <Modal visible={this.model.visible} transparent={true}>
          <View style={LocalizationStyles.modalBackGroung}>
            <View style={LocalizationStyles.modalContentContainer}>
              <Text>Select your language</Text>
              <View style={LocalizationStyles.countryButtonsContainer}>
                <SimpleButtonView
                  styles={LocalizationStyles.countryButtonContainer}
                  iconStyles={LocalizationStyles.countryButtonIcon}
                  {...this.childProps(this.model.rusButton)}
                />
                <SimpleButtonView
                  styles={LocalizationStyles.countryButtonContainer}
                  iconStyles={LocalizationStyles.countryButtonIcon}
                  {...this.childProps(this.model.gbrButton)}
                />
                <SimpleButtonView
                  styles={LocalizationStyles.countryButtonContainer}
                  iconStyles={LocalizationStyles.countryButtonIcon}
                  {...this.childProps(this.model.uaButton)}
                />
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

export {LocalizationView};
