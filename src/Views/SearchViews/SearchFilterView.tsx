import {
  TypedBaseComponent,
  baseComponentProps,
  componentPropsWithModel,
} from '../../Core/BaseComponent';
import React from 'react';
import {View, Modal, Text, ScrollView} from 'react-native';

import {BaseStyles} from '../../Styles/BaseStyles';
import {SearchFilterModel} from '../../Models/SearchModels/SearchFilterModel';
import {SearchStyles} from '../../Styles/SearchStyles';
import {SimpleButtonView} from '../Components/Buttons/SimpleButtonView';
import {DropDownView} from '../Components/Inputs/DropDownView';
import {RegistrationScreenStyles} from '../../Styles/RegistrationScreenStyles';
import {TextInputView} from '../Components/Inputs/TextInputView';
import {_} from '../../Core/Localization';
import {SwitcherView} from '../Components/Inputs/SwitcherView';
import {HorizontalSelectorView} from '../Components/Inputs/HorizontalSelectorView';
import {MyAnnouncementStyles} from '../../Styles/MyAnnouncementStyles';

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

            <ScrollView contentContainerStyle={[BaseStyles.w80, BaseStyles.ai_c]}>
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
              <View style={[BaseStyles.w95]}>
                <View style={[RegistrationScreenStyles.dateContainer]}>
                  <Text style={[RegistrationScreenStyles.dateText]}>{_.lang.gender}:</Text>
                </View>
                <HorizontalSelectorView
                  ContentCoinerStyles={RegistrationScreenStyles.genderPickerContainer}
                  ItemContainerStylesExternal={
                    RegistrationScreenStyles.genderPickerItemContainerExternal
                  }
                  ItemContainerStylesInternal={
                    RegistrationScreenStyles.genderPickerItemContainerInternal
                  }
                  IconStyle={RegistrationScreenStyles.genderPickerItemIconStyles}
                  TextStyle={RegistrationScreenStyles.genderPickerItemText}
                  {...this.childProps(this.model.genderSwitcher)}
                />
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

                <View style={[RegistrationScreenStyles.goalsContainer, BaseStyles.ai_fs]}>
                  <Text style={[RegistrationScreenStyles.mainTitleStyles]}>
                    {_.lang.additional_info}
                  </Text>

                  <View style={RegistrationScreenStyles.goalsItem}>
                    <View style={RegistrationScreenStyles.goaltTitleItem}>
                      <Text>{_.lang.dating_goals}:</Text>
                    </View>
                  </View>
                  <HorizontalSelectorView
                    ContentCoinerStyles={RegistrationScreenStyles.genderPickerContainer}
                    ItemContainerStylesExternal={
                      MyAnnouncementStyles.genderPickerItemContainerExternal
                    }
                    ItemContainerStylesInternal={
                      MyAnnouncementStyles.genderPickerItemContainerInternal
                    }
                    IconStyle={RegistrationScreenStyles.genderPickerItemIconStyles}
                    TextStyle={MyAnnouncementStyles.genderPickerItemText}
                    {...this.childProps(this.model.goalsSelection)}
                  />

                  <View style={RegistrationScreenStyles.goalsItem}>
                    <View style={RegistrationScreenStyles.goaltTitleItem}>
                      <Text>{_.lang.attitude_towards_alcohol}:</Text>
                    </View>
                    <View style={[RegistrationScreenStyles.goalSelectionItem, BaseStyles.ml20]}>
                      <DropDownView {...this.childProps(this.model.alcoSelection)} />
                    </View>
                  </View>

                  <View style={RegistrationScreenStyles.goalsItem}>
                    <View style={RegistrationScreenStyles.goaltTitleItem}>
                      <Text>{_.lang.attitude_towards_smoking}:</Text>
                    </View>
                    <View style={[RegistrationScreenStyles.goalSelectionItem, BaseStyles.ml20]}>
                      <DropDownView {...this.childProps(this.model.smokeSelection)} />
                    </View>
                  </View>

                  <View style={RegistrationScreenStyles.goalsItem}>
                    <View style={RegistrationScreenStyles.goaltTitleItem}>
                      <Text>{_.lang.children}:</Text>
                    </View>
                    <View style={[RegistrationScreenStyles.goalSelectionItem, BaseStyles.ml20]}>
                      <DropDownView {...this.childProps(this.model.kidsSelection)} />
                    </View>
                  </View>

                  <View style={RegistrationScreenStyles.goalsItem}>
                    <View style={[BaseStyles.w60, BaseStyles.mr10]}>
                      <Text>{_.lang.show_olnly_persons_dont_mind_being_a_sponsor}:</Text>
                    </View>
                    <View style={[RegistrationScreenStyles.goalSelectionItem]}>
                      <SwitcherView {...this.childProps(this.model.sponsorSwitcher)} />
                    </View>
                  </View>

                  <View style={RegistrationScreenStyles.goalsItem}>
                    <View style={[BaseStyles.w60, BaseStyles.mr10]}>
                      <Text>{_.lang.show_olnly_persons_dont_mind_being_a_kepter}:</Text>
                    </View>
                    <View style={[RegistrationScreenStyles.goalSelectionItem]}>
                      <SwitcherView {...this.childProps(this.model.keepterSwitcher)} />
                    </View>
                  </View>
                </View>
              </View>
            </ScrollView>
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
