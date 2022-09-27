import {
  TypedBaseComponent,
  baseComponentProps,
  componentPropsWithModel,
} from '../../Core/BaseComponent';
import React from 'react';
import {Text, View} from 'react-native';
import {LoginFormModel} from '../../Models/LoginFormModel/LoginFormModel';
import {BaseStyles} from '../../Styles/BaseStyles';
import {LoginScreenStyles} from '../../Styles/LoginScreenStyles';
import {TextInputView} from '../Components/Inputs/TextInputView';
import {SimpleButtonView} from '../Components/Buttons/SimpleButtonView';
import {_} from '../../Core/Localization';
import {BannerAd, BannerAdSize, TestIds} from 'react-native-google-mobile-ads';
import {GoogleSignInModel} from '../../Models/Components/AuthComponents/GoogleSignInModel';
import {GoogleSignInView} from '../Components/AuthComponents/GoogleSignInView';

type simpleButtonViewProps = baseComponentProps & {
  styles?: Object;
  iconStyles?: Object;
};

class LoginFormView extends TypedBaseComponent<simpleButtonViewProps, LoginFormModel> {
  constructor(props: componentPropsWithModel<simpleButtonViewProps, LoginFormModel>) {
    super(props);
  }

  public render() {
    super.render();
    return (
      <View style={[LoginScreenStyles.mainContainer, BaseStyles.container]}>
        <View style={LoginScreenStyles.formContainer}>
          <Text style={[LoginScreenStyles.mainTitleStyles]}>{_.lang.authorization}</Text>
          <View style={[LoginScreenStyles.inputsContainer]}>
            <TextInputView
              styles={{
                container: LoginScreenStyles.inputContainer,
                text: LoginScreenStyles.inputText,
                icon: {},
              }}
              {...this.childProps(this.model.emailInput)}
            />
            <TextInputView
              styles={{
                container: [LoginScreenStyles.inputContainer, BaseStyles.mt20],
                text: [LoginScreenStyles.inputText, {fontSize: 14}],
                icon: {},
              }}
              {...this.childProps(this.model.passwordInput)}
            />

            <SimpleButtonView
              textStyles={[LoginScreenStyles.loginButtonText]}
              styles={[LoginScreenStyles.loginButton]}
              {...this.childProps(this.model.signUpButton)}
            />
            <Text>-{_.lang.or}-</Text>
            <SimpleButtonView
              textStyles={[LoginScreenStyles.registrateButtonText]}
              styles={[LoginScreenStyles.registrateButton]}
              {...this.childProps(this.model.registrationButton)}
            />

            <GoogleSignInView
              styles={[LoginScreenStyles.googleSignInButton]}
              {...this.childProps(this.model.googleSignIn)}
            />
          </View>
        </View>
      </View>
    );
  }
}

export {LoginFormView};
