import {Alert} from 'react-native';
import {ICONS} from '../../constants/icons';
import {analyticHandler} from '../../Core/AnalyticHanler';
import {app} from '../../Core/AppImpl';
import {BaseModel, baseModelProps} from '../../Core/BaseModel';
import {FireBaseHandler} from '../../Core/FireBaseHandler';
import {_} from '../../Core/Localization';
import {SocketHandler} from '../../Core/Socket';
import {loadData, UserDataProvider} from '../../DataProvider/UserDataProvider';
import {CreateNewAccountScreen} from '../../Screens/CreateNewAccountScreen';
import {GoogleSignInModel} from '../Components/AuthComponents/GoogleSignInModel';
import {SimpleButtonModel} from '../Components/Buttons/SimpleButtonModel';
import {TextInputModel} from '../Components/Inputs/TextInputModel';

type loginFormModelProps = baseModelProps & {};

class LoginFormModel extends BaseModel<loginFormModelProps> {
  private _emailInput: TextInputModel;
  private _passwordInput: TextInputModel;
  private _signUpButton: SimpleButtonModel;
  private _registrationButton: SimpleButtonModel;
  private _googleSignIn: GoogleSignInModel;

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

    this._googleSignIn = new GoogleSignInModel({id: '_googleSignIn'});

    this._passwordInput = new TextInputModel({
      id: '_passwordInput',
      onChangeText: this.onPasswordChange,
      placeholder: _.lang.enter_your_password,
      secure: true,
      showLeftIcon: true,
      leftIcon: ICONS.lockIcon,
      onIconPress: this.onPasswordIconPress,
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

  public get googleSignIn() {
    return this._googleSignIn;
  }

  public onPasswordIconPress = async () => {
    if (this._passwordInput.secure) {
      this._passwordInput.secure = false;
      this._passwordInput.leftIcon = ICONS.eyeIcon;
      return;
    }
    this._passwordInput.secure = true;
    this._passwordInput.leftIcon = ICONS.lockIcon;
  };

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
        app.currentUser.token = res.data.token;
        app.navigator.goToMainProfileScreen();
        FireBaseHandler.syncTokenDevice();
        app.navigator.setOnline();
        analyticHandler.trackEvent('user_authorized', {
          gender: res.data.gender,
          location: res.data.location.country.name,
        });
        await SocketHandler.connect();
        return;
      }
      app.notification.showError(res.statusCode.toString(), res.statusMessage);
      return;
    }
    app.notification.showError(_.lang.warning, _.lang.something_went_wrong);
  };
}

export {LoginFormModel};
