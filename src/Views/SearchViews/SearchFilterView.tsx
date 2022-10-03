import {
  TypedBaseComponent,
  baseComponentProps,
  componentPropsWithModel,
} from '../../Core/BaseComponent';
import React from 'react';
import {View, Modal, Text} from 'react-native';

import {BaseStyles} from '../../Styles/BaseStyles';
import {SearchFilterModel} from '../../Models/SearchModels/SearchFilterModel';
import {SearchStyles} from '../../Styles/SearchStyles';
import {SimpleButtonView} from '../Components/Buttons/SimpleButtonView';
import {DropDownView} from '../Components/Inputs/DropDownView';
import {RegistrationScreenStyles} from '../../Styles/RegistrationScreenStyles';
import {GenderSwitcherView} from '../Components/Inputs/GenderSwitcherView';
import {TextInputView} from '../Components/Inputs/TextInputView';
import {_} from '../../Core/Localization';

type searchFilterViewProps = baseComponentProps & {};

class SearchFilterView extends TypedBaseComponent<searchFilterViewProps, SearchFilterModel> {
  constructor(props: componentPropsWithModel<searchFilterViewProps, SearchFilterModel>) {
    super(props);
  }

  public render() {
    super.render();
    return (
      <Modal visible={this.model.visible} transparent={true} style={BaseStyles.container}>
        <View style={SearchStyles.filterModalBackGround}>
          <View style={SearchStyles.filterModalContentContainer}>
            <SimpleButtonView
              iconStyles={SearchStyles.filterModalCloseIcon}
              styles={SearchStyles.filterModalCloseContainer}
              {...this.childProps(this.model.closeButton)}
            />

            <Text style={SearchStyles.filterModalMainTilte}>{_.lang.filters}</Text>

            <View style={[SearchStyles.locationFilterContainer]}>
              <Text style={[RegistrationScreenStyles.locationTitleText]}>{_.lang.location}</Text>

              <View style={[RegistrationScreenStyles.infoItemWrapper]}>
                <View style={[RegistrationScreenStyles.infoItemContainer]}>
                  <Text style={[RegistrationScreenStyles.infoItemText]}>{_.lang.country}:</Text>
                </View>
                <View style={[RegistrationScreenStyles.selectionsItemContainer]}>
                  <DropDownView {...this.childProps(this.model.countrySelection)} />
                </View>
              </View>

              <View style={[RegistrationScreenStyles.infoItemWrapper]}>
                <View style={[RegistrationScreenStyles.infoItemContainer]}>
                  <Text style={[RegistrationScreenStyles.infoItemText]}>{_.lang.region}:</Text>
                </View>
                <View style={[RegistrationScreenStyles.selectionsItemContainer]}>
                  <DropDownView {...this.childProps(this.model.regionSelection)} />
                </View>
              </View>

              <View style={[RegistrationScreenStyles.infoItemWrapper]}>
                <View style={[RegistrationScreenStyles.infoItemContainer]}>
                  <Text style={[RegistrationScreenStyles.infoItemText]}>{_.lang.city}:</Text>
                </View>
                <View style={[RegistrationScreenStyles.selectionsItemContainer]}>
                  <DropDownView {...this.childProps(this.model.citySelection)} />
                </View>
              </View>
            </View>
            <View style={BaseStyles.w95}>
              <View style={[RegistrationScreenStyles.dateContainer]}>
                <Text style={[RegistrationScreenStyles.dateText]}>{_.lang.gender}:</Text>
                <View style={[BaseStyles.w50]}>
                  <GenderSwitcherView {...this.childProps(this.model.genderSwitcher)} />
                </View>
              </View>

              <View style={[RegistrationScreenStyles.dateContainer]}>
                <Text style={[RegistrationScreenStyles.dateText]}>{_.lang.age}:</Text>
                <TextInputView
                  styles={{
                    container: SearchStyles.filterModalAgeInputContainer,
                    icon: {},
                    text: {},
                  }}
                  {...this.childProps(this.model.fromAgeInput)}
                />
                <Text>-</Text>
                <TextInputView
                  styles={{
                    container: SearchStyles.filterModalAgeInputContainer,
                    icon: {},
                    text: {},
                  }}
                  {...this.childProps(this.model.toAgeInput)}
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

export {SearchFilterView};
