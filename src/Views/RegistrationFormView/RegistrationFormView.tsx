import {
  TypedBaseComponent,
  baseComponentProps,
  componentPropsWithModel,
} from '../../Core/BaseComponent';
import React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import {BaseStyles} from '../../Styles/BaseStyles';
import {TextInputView} from '../Components/Inputs/TextInputView';
import {SimpleButtonView} from '../Components/Buttons/SimpleButtonView';
import {RegistrationFormModel} from '../../Models/RegistrationFormModel/RegistrationFormModel';
import {RegistrationScreenStyles} from '../../Styles/RegistrationScreenStyles';
import {DatePickerView} from '../Components/Inputs/DatePickerView';
import {DropDownView} from '../Components/Inputs/DropDownView';
import {_} from '../../Core/Localization';
import {SwitcherView} from '../Components/Inputs/SwitcherView';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {app} from '../../Core/AppImpl';
import {TermsOfUseScreen} from '../../Screens/TermsOfUseScreen';
import {PrivacyScreen} from '../../Screens/PrivacyScreen';
import {ICONS} from '../../constants/icons';
import {HorizontalSelectorView} from '../Components/Inputs/HorizontalSelectorView';

type registrationFormViewProps = baseComponentProps & {
  styles?: Object;
  iconStyles?: Object;
};

class RegistrationFormView extends TypedBaseComponent<
  registrationFormViewProps,
  RegistrationFormModel
> {
  constructor(props: componentPropsWithModel<registrationFormViewProps, RegistrationFormModel>) {
    super(props);
  }

  public updateAnyWay = () => {
    this.shouldBeTotalyUpdated = true;
    this.forceUpdate();
    this.shouldBeTotalyUpdated = false;
  };

  private getCurrentStepForm = (curentStep: number) => {
    if (curentStep === 1) {
      return (
        <View style={[RegistrationScreenStyles.inputsContainer]}>
          <View style={[RegistrationScreenStyles.scrollContainer, BaseStyles.ai_c]}>
            <TextInputView
              styles={{
                container: RegistrationScreenStyles.inputContainer,
                text: RegistrationScreenStyles.inputText,
                icon: {},
              }}
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
          </View>

          <View style={[BaseStyles.w100, BaseStyles.row]}>
            <View style={[BaseStyles.ai_fs, BaseStyles.w50]}></View>
            <View style={[BaseStyles.ai_fe, BaseStyles.w50]}>
              <SimpleButtonView
                textStyles={[RegistrationScreenStyles.loginButtonText]}
                styles={[RegistrationScreenStyles.loginButton]}
                {...this.childProps(this.model.step1NextButton)}
              />
            </View>
          </View>
        </View>
      );
    }
    if (this.model.curentStep === 2) {
      return (
        <View style={[RegistrationScreenStyles.inputsContainer]}>
          <View style={[RegistrationScreenStyles.scrollContainer, BaseStyles.ai_c]}>
            <TextInputView
              styles={{
                container: RegistrationScreenStyles.inputContainer,
                text: RegistrationScreenStyles.inputText,
                icon: {},
              }}
              {...this.childProps(this.model.userNameInput)}
            />

            <View style={[RegistrationScreenStyles.dateContainer, BaseStyles.jc_sb]}>
              <Text style={[RegistrationScreenStyles.dateText]}>{_.lang.date_of_birth}:</Text>
              <DatePickerView {...this.childProps(this.model.ageInput)} />
            </View>
            {this.model.hasBDateError && (
              <View style={BaseStyles.w95}>
                <Text style={BaseStyles.errorTextStyle}>*{this.model.BDateError}</Text>
              </View>
            )}

            <View style={[RegistrationScreenStyles.dateContainer]}>
              <Text style={[RegistrationScreenStyles.dateText]}>{_.lang.your_gender}:</Text>
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
              {...this.childProps(this.model.genderSelection)}
            />
            {this.model.hasGenderError && (
              <View style={BaseStyles.w95}>
                <Text style={BaseStyles.errorTextStyle}>*{this.model.genderError}</Text>
              </View>
            )}
          </View>
          <View
            style={[
              BaseStyles.w100,
              BaseStyles.mt20,
              BaseStyles.row,
              BaseStyles.alignCenter,
              BaseStyles.ml10,
            ]}></View>
          <View style={[BaseStyles.w100, BaseStyles.row]}>
            <View style={[BaseStyles.ai_fs, BaseStyles.w50]}>
              <SimpleButtonView
                textStyles={[RegistrationScreenStyles.loginButtonText]}
                styles={[RegistrationScreenStyles.loginButton]}
                {...this.childProps(this.model.step2PrevButton)}
              />
            </View>
            <View style={[BaseStyles.ai_fe, BaseStyles.w50]}>
              <SimpleButtonView
                textStyles={[RegistrationScreenStyles.loginButtonText]}
                styles={[RegistrationScreenStyles.loginButton]}
                {...this.childProps(this.model.step2NextButton)}
              />
            </View>
          </View>
        </View>
      );
    }

    if (this.model.curentStep === 3) {
      return (
        <View style={[RegistrationScreenStyles.inputsContainer]}>
          <View style={[RegistrationScreenStyles.scrollContainer, BaseStyles.ai_c]}>
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
          </View>
          {this.model.hasLocationError && (
            <View style={BaseStyles.w95}>
              <Text style={BaseStyles.errorTextStyle}>*{this.model.locationError}</Text>
            </View>
          )}
          <View
            style={[
              BaseStyles.w95,
              BaseStyles.mt20,
              BaseStyles.row,
              BaseStyles.alignCenter,
              BaseStyles.ml10,
            ]}>
            <SwitcherView {...this.childProps(this.model.agreementSwitcher)} />
            <View style={[RegistrationScreenStyles.agreementTextContainer]}>
              <Text style={[RegistrationScreenStyles.agreementText]}>{_.lang.i_agree_with}</Text>
              <TouchableOpacity
                onPress={() => {
                  app.navigator.navigate(TermsOfUseScreen);
                }}>
                <Text style={[RegistrationScreenStyles.agreementTextLink]}>
                  {_.lang.terms_of_use_title}
                </Text>
              </TouchableOpacity>
              <Text style={[RegistrationScreenStyles.agreementText]}>{_.lang.and}</Text>
              <TouchableOpacity
                onPress={() => {
                  app.navigator.navigate(PrivacyScreen);
                }}>
                <Text style={[RegistrationScreenStyles.agreementTextLink]}>
                  {_.lang.privacy_policy_title}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          {this.model.hasTOFError && (
            <View style={BaseStyles.w95}>
              <Text style={BaseStyles.errorTextStyle}>*{this.model.TOFError}</Text>
            </View>
          )}
          <View style={[BaseStyles.w100, BaseStyles.row]}>
            <View style={[BaseStyles.ai_fs, BaseStyles.w50]}>
              <SimpleButtonView
                textStyles={[RegistrationScreenStyles.loginButtonText]}
                styles={[RegistrationScreenStyles.loginButton]}
                {...this.childProps(this.model.step3PrevButton)}
              />
            </View>
            <View style={[BaseStyles.ai_fe, BaseStyles.w50]}>
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
  };

  public render() {
    if (!this.shouldBeTotalyUpdated) {
      super.render();
    }
    return (
      <View style={[RegistrationScreenStyles.mainContainer, BaseStyles.container]}>
        <Text style={[RegistrationScreenStyles.mainTitleStyles]}>{_.lang.create_new_account}</Text>
        <ScrollView
          contentContainerStyle={RegistrationScreenStyles.formContainer}
          style={[BaseStyles.w86]}>
          <Text style={[RegistrationScreenStyles.mainTitleStyles, BaseStyles.pt10]}>
            {_.lang.stepof(this.model.curentStep, 3)}
          </Text>
          <View style={[BaseStyles.row, BaseStyles.mt10, BaseStyles.alignCenter, BaseStyles.w90]}>
            <Image source={ICONS.helpIcon} style={BaseStyles.defaultIcon} />
            <Text style={[RegistrationScreenStyles.hintTextStyles]}>
              {_.lang.hints[this.model.curentStep - 1]}
            </Text>
          </View>

          {this.getCurrentStepForm(this.model.curentStep)}
        </ScrollView>
      </View>
    );
  }
}

export {RegistrationFormView};
