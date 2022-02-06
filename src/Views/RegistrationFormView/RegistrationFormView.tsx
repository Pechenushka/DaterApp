import {TypedBaseComponent, baseComponentProps, componentPropsWithModel} from '../../Core/BaseComponent';
import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {BaseStyles} from '../../Styles/BaseStyles';
import {TextInputView} from '../Components/Inputs/TextInputView';
import {SimpleButtonView} from '../Components/Buttons/SimpleButtonView';
import {RegistrationFormModel} from '../../Models/RegistrationFormModel/RegistrationFormModel';
import {RegistrationScreenStyles} from '../../Styles/RegistrationScreenStyles';
import {DatePickerView} from '../Components/Inputs/DatePickerView';
import {GenderSwitcherView} from '../Components/Inputs/GenderSwitcherView';
import {DropDownView} from '../Components/Inputs/DropDownView';
import {_} from '../../Core/Localization';

type registrationFormViewProps = baseComponentProps & {
  styles?: Object;
  iconStyles?: Object;
};

class RegistrationFormView extends TypedBaseComponent<registrationFormViewProps, RegistrationFormModel> {
  constructor(props: componentPropsWithModel<registrationFormViewProps, RegistrationFormModel>) {
    super(props);
  }

  public render() {
    super.render();
    return (
      <View style={[RegistrationScreenStyles.mainContainer, BaseStyles.container]}>
        <View style={RegistrationScreenStyles.formContainer}>
          <Text style={[RegistrationScreenStyles.mainTitleStyles]}>{_.lang.create_new_account}</Text>
          <View style={[RegistrationScreenStyles.inputsContainer]}>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              style={[RegistrationScreenStyles.scrollContainer]}
              contentContainerStyle={[RegistrationScreenStyles.scrollContainer, BaseStyles.ai_c]}>
              <TextInputView
                styles={{container: RegistrationScreenStyles.inputContainer, text: RegistrationScreenStyles.inputText, icon: {}}}
                {...this.childProps(this.model.userNameInput)}
              />
              <TextInputView
                styles={{container: RegistrationScreenStyles.inputContainer, text: RegistrationScreenStyles.inputText, icon: {}}}
                {...this.childProps(this.model.emailInput)}
              />
              <TextInputView
                styles={{
                  container: [RegistrationScreenStyles.inputContainer],
                  text: [RegistrationScreenStyles.inputText, {fontSize: 14}],
                  icon: {},
                }}
                {...this.childProps(this.model.passwordInput)}
              />

              <TextInputView
                styles={{
                  container: [RegistrationScreenStyles.inputContainer],
                  text: [RegistrationScreenStyles.inputText, {fontSize: 14}],
                  icon: {},
                }}
                {...this.childProps(this.model.repeatPasswordInput)}
              />
              <View style={[RegistrationScreenStyles.dateContainer]}>
                <Text style={[RegistrationScreenStyles.dateText]}>{_.lang.date_of_birth}:</Text>
                <DatePickerView {...this.childProps(this.model.ageInput)} />
              </View>

              <View style={[RegistrationScreenStyles.dateContainer]}>
                <Text style={[RegistrationScreenStyles.dateText]}>{_.lang.gender}:</Text>
                <GenderSwitcherView {...this.childProps(this.model.genderSwitcher)} />
              </View>

              <View style={[RegistrationScreenStyles.locationContainer]}>
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
            </ScrollView>

            <SimpleButtonView
              textStyles={[RegistrationScreenStyles.loginButtonText]}
              styles={[RegistrationScreenStyles.loginButton]}
              {...this.childProps(this.model.signUpButton)}
            />
          </View>
        </View>
      </View>
    );
  }
}

export {RegistrationFormView};
