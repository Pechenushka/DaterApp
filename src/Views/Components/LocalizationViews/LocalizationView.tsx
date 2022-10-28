import {
  TypedBaseComponent,
  baseComponentProps,
  componentPropsWithModel,
} from '../../../Core/BaseComponent';
import React from 'react';
import {Modal, Text, View} from 'react-native';
import {LocalizationModel} from '../../../Models/Components/LocalizationModels/LocalizationModel';
import {SimpleButtonView} from '../Buttons/SimpleButtonView';
import {LocalizationStyles} from '../../../Styles/LocalizationStyles';
import {_} from '../../../Core/Localization';
import {SearchStyles} from '../../../Styles/SearchStyles';
import {ScrollView} from 'react-native-gesture-handler';

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
          textStyles={LocalizationStyles.selectButtonText}
          {...this.childProps(this.model.selectionButton)}
        />

        <Modal visible={this.model.visible} transparent={true}>
          <View style={LocalizationStyles.modalBackGroung}>
            <View style={LocalizationStyles.modalContentContainer}>
              <SimpleButtonView
                iconStyles={SearchStyles.filterModalCloseIcon}
                styles={SearchStyles.filterModalCloseContainer}
                {...this.childProps(this.model.closeButton)}
              />
              <Text>{_.lang.selectLanguage}</Text>
              <ScrollView>
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
                  <SimpleButtonView
                    styles={LocalizationStyles.countryButtonContainer}
                    iconStyles={LocalizationStyles.countryButtonIcon}
                    {...this.childProps(this.model.belButton)}
                  />
                  <SimpleButtonView
                    styles={LocalizationStyles.countryButtonContainer}
                    iconStyles={LocalizationStyles.countryButtonIcon}
                    {...this.childProps(this.model.plButton)}
                  />
                </View>
              </ScrollView>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

export {LocalizationView};
