import {Alert} from 'react-native';
import {ICONS} from '../../constants/icons';
import {app} from '../../Core/AppImpl';
import {BaseModel, baseModelProps} from '../../Core/BaseModel';
import {FireBaseHandler} from '../../Core/FireBaseHandler';
import {_} from '../../Core/Localization';
import {loadData, UserDataProvider} from '../../DataProvider/UserDataProvider';
import {CreateNewAccountScreen} from '../../Screens/CreateNewAccountScreen';
import {SimpleButtonModel} from '../Components/Buttons/SimpleButtonModel';
import {TextInputModel} from '../Components/Inputs/TextInputModel';

type loginFormModelProps = baseModelProps & {};

class LoginFormModel extends BaseModel<loginFormModelProps> {
  private _emailInput: TextInputModel;
  private _passwordInput: TextInputModel;
  private _signUpButton: SimpleButtonModel;
  private _registrationButton: SimpleButtonModel;
  constructor(props: loginFormModelProps) {
    super(props);
    this._emailInput = new TextInputModel({
      id: '_emailInput',
      onChangeText: this.onUserEmailChange,
      placeholder: _.lang.enter_your_email,
      showLeftIcon: true,
      leftIcon: ICONS.emailIcon,
      keyboardType: 'email-address',
    });

    this._passwordInput = new TextInputModel({
      id: '_passwordInput',
      onChangeText: this.onPasswordChange,
      placeholder: _.lang.enter_your_password,
      secure: true,
      showLeftIcon: true,
      leftIcon: ICONS.lockIcon,
    });

    this._signUpButton = new SimpleButtonModel({
      id: '_signUpButton',
      onPress: this.onSignUpPress,
      text: _.lang.login,
    });
    this._registrationButton = new SimpleButtonModel({
      id: '_registrationButton',
      onPress: this.onRegistrationPress,
      text: _.lang.create_new_account,
    });
  }

  public get emailInput() {
    return this._emailInput;
  }

  public get passwordInput() {
    return this._passwordInput;
  }

  public get signUpButton() {
    return this._signUpButton;
  }

  public get registrationButton() {
    return this._registrationButton;
  }

  public onUserEmailChange = async (newValue: string) => {
    newValue;
  };

  public onPasswordChange = async (newValue: string) => {
    newValue;
  };

  public onRegistrationPress = async () => {
    app.navigator.navigate(CreateNewAccountScreen);
  };

  public onSignUpPress = async () => {
    const authBody = {
      email: this._emailInput.value,
      password: this._passwordInput.value,
    };
    const res = await loadData(UserDataProvider.Auth, authBody);
    if (res !== null) {
      if (res.statusCode === 200) {
        app.currentUser.gender = res.data.gender;
        app.currentUser.userId = res.data.id;
        app.currentUser.userName = res.data.name;
        app.currentUser.email = res.data.email;
        app.currentUser.phone = res.data.phone;
        app.currentUser.birthDate = res.data.birthDate;
        app.currentUser.telegram = res.data.telegram;
        app.currentUser.location = res.data.location;
        app.currentUser.avatar = res.data.avatar;
        app.currentUser.fcm = res.data.fcm;
        app.navigator.goToMainProfileScreen();
        FireBaseHandler.syncTokenDevice();
        app.navigator.setOnline();
        return;
      }
      Alert.alert(res.statusCode.toString(), res.statusMessage);
      return;
    }
    Alert.alert('Warning', _.lang.something_went_wrong);
  };
}

export {LoginFormModel};
