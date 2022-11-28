import {Alert} from 'react-native';
import deviceInfoModule from 'react-native-device-info';
import {getAge} from '../../Common/Helpers';
import {ICONS} from '../../constants/icons';
import {analyticHandler} from '../../Core/AnalyticHanler';
import {app} from '../../Core/AppImpl';
import {BaseModel, baseModelProps} from '../../Core/BaseModel';
import {FireBaseHandler} from '../../Core/FireBaseHandler';
import {_} from '../../Core/Localization';
import {SocketHandler} from '../../Core/Socket';
import {loadData, UserDataProvider} from '../../DataProvider/UserDataProvider';
import {GoogleSignInModel} from '../Components/AuthComponents/GoogleSignInModel';
import {SimpleButtonModel} from '../Components/Buttons/SimpleButtonModel';
import {DatePickerModel} from '../Components/Inputs/DatePickerModel';
import {dropDownItem, DropDownModel} from '../Components/Inputs/DropDownModel';
import {GenderSvitcherModel} from '../Components/Inputs/GenderSvitcherModel';
import {SwitcherModel} from '../Components/Inputs/SwitcherModel';
import {TextInputModel} from '../Components/Inputs/TextInputModel';

type registrationFormModelProps = baseModelProps & {};

class RegistrationFormModel extends BaseModel<registrationFormModelProps> {
  private _userNameInput: TextInputModel;
  private _emailInput: TextInputModel;
  private _passwordInput: TextInputModel;
  private _repeatPasswordInput: TextInputModel;
  private _ageInput: DatePickerModel;
  private _signUpButton: SimpleButtonModel;
  private _agreementSwitcher: SwitcherModel;

  private _countrySelection: DropDownModel;
  private _regionSelection: DropDownModel;
  private _citySelection: DropDownModel;
  private _genderSelection: DropDownModel;
  private _curentStep: number = 1;

  private _step1NextButton: SimpleButtonModel;

  private _step2NextButton: SimpleButtonModel;
  private _step2PrevButton: SimpleButtonModel;

  private _step3PrevButton: SimpleButtonModel;
  private _googleIdToken: string | null = null;

  constructor(props: registrationFormModelProps) {
    super(props);
    this._userNameInput = new TextInputModel({
      id: '_userNameInput',
      onChangeText: this.onUserNameChange,
      placeholder: _.lang.enter_your_name,
      showLeftIcon: true,
      leftIcon: ICONS.profileIcon,
      maxLength: 35,
    });

    this._emailInput = new TextInputModel({
      id: '_emailInput',
      onChangeText: this.onEmailChange,
      placeholder: _.lang.enter_your_email,
      showLeftIcon: true,
      leftIcon: ICONS.emailIcon,
      keyboardType: 'email-address',
      maxLength: 40,
    });

    this._passwordInput = new TextInputModel({
      id: '_passwordInput',
      onChangeText: this.onPasswordChange,
      placeholder: _.lang.enter_your_password,
      secure: true,
      showLeftIcon: true,
      leftIcon: ICONS.lockIcon,
      onIconPress: this.onPasswordIconPress,
    });

    this._repeatPasswordInput = new TextInputModel({
      id: '_repeatPasswordInput',
      onChangeText: this.onRepeatPasswordChange,
      placeholder: _.lang.repeat_your_password,
      secure: true,
      showLeftIcon: true,
      leftIcon: ICONS.lockIcon,
      onIconPress: this.onRepeatPasswordIconPress,
    });

    this._ageInput = new DatePickerModel({id: '_ageInput', mode: 'date'});

    this._genderSelection = new DropDownModel({
      id: '_genderSelection',
      list: [
        {id: 1, name: _.lang.iam_man},
        {id: 2, name: _.lang.iam_women},
      ],
      placeholder: _.lang.choose_gender,
      onSelectionChange: this.onCityChange,
    });

    this._signUpButton = new SimpleButtonModel({
      id: '_signUpButton',
      onPress: this.onSignUpPress,
      text: _.lang.sign_up,
    });

    this._countrySelection = new DropDownModel({
      id: '_countrySelection',
      list: [],
      placeholder: _.lang.chose_country,
      listLoader: this.countryLoad,
      onSelectionChange: this.onCountryChange,
    });

    this._regionSelection = new DropDownModel({
      id: '_regionSelection',
      list: [],
      placeholder: _.lang.chose_region,
      onSelectionChange: this.onRegionChange,
      disabled: true,
    });

    this._citySelection = new DropDownModel({
      id: '_citySelection',
      list: [],
      placeholder: _.lang.chose_city,
      onSelectionChange: this.onCityChange,
      disabled: true,
    });

    this._agreementSwitcher = new SwitcherModel({id: '_agreementSwitcher'});

    this._step1NextButton = new SimpleButtonModel({
      id: '_step1NextButton',
      onPress: this.onStep1NextPress,
      text: `${_.lang.next} >`,
    });

    this._step2NextButton = new SimpleButtonModel({
      id: '_step2NextButton',
      onPress: this.onStep2NextPress,
      text: `${_.lang.next} >`,
    });

    this._step2PrevButton = new SimpleButtonModel({
      id: '_step2PrevButton',
      onPress: this.onStep2PrevPress,
      text: `< ${_.lang.prev}`,
    });

    this._step3PrevButton = new SimpleButtonModel({
      id: '_step3PrevButton',
      onPress: this.onStep3PrevPress,
      text: `< ${_.lang.prev}`,
    });
  }

  public get userNameInput() {
    return this._userNameInput;
  }

  public get agreementSwitcher() {
    return this._agreementSwitcher;
  }

  public get emailInput() {
    return this._emailInput;
  }

  public get passwordInput() {
    return this._passwordInput;
  }

  public get repeatPasswordInput() {
    return this._repeatPasswordInput;
  }

  public get signUpButton() {
    return this._signUpButton;
  }

  public get ageInput() {
    return this._ageInput;
  }

  public get genderSelection() {
    return this._genderSelection;
  }

  public get countrySelection() {
    return this._countrySelection;
  }

  public get citySelection() {
    return this._citySelection;
  }

  public get regionSelection() {
    return this._regionSelection;
  }

  public get curentStep() {
    return this._curentStep;
  }

  public set curentStep(Val) {
    this._curentStep = Val;
    this.forceUpdate();
  }

  public get step1NextButton() {
    return this._step1NextButton;
  }

  public get step2NextButton() {
    return this._step2NextButton;
  }

  public get step2PrevButton() {
    return this._step2PrevButton;
  }

  public get step3PrevButton() {
    return this._step3PrevButton;
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

  public onRepeatPasswordIconPress = async () => {
    if (this._repeatPasswordInput.secure) {
      this._repeatPasswordInput.secure = false;
      this._repeatPasswordInput.leftIcon = ICONS.eyeIcon;
      return;
    }
    this._repeatPasswordInput.secure = true;
    this._repeatPasswordInput.leftIcon = ICONS.lockIcon;
  };

  public firsStepValidation = async () => {
    const [name, email, password, passwordConfirm] = [
      this._userNameInput.value.trim(),
      this._emailInput.value.trim(),
      this._passwordInput.value.trim(),
      this._repeatPasswordInput.value.trim(),
    ];

    if (name === '') {
      app.notification.showError(_.lang.warning, 'Name can not be empty');
      return false;
    }

    if (email === '') {
      app.notification.showError(_.lang.warning, 'Email can not be empty');
      return false;
    }

    if (password === '') {
      app.notification.showError(_.lang.warning, 'Password can not be empty');
      return false;
    }
    if (passwordConfirm === '') {
      app.notification.showError(_.lang.warning, 'Password Confirm can not be empty');
      return false;
    }

    if (password !== passwordConfirm) {
      app.notification.showError(_.lang.warning, 'Confirm password dos not match');
      return false;
    }

    if (password.length < 6) {
      app.notification.showError(_.lang.warning, 'Password must be at least 6 characters');
      return false;
    }

    const res = await loadData(UserDataProvider.CheckEmail, {email: email});

    if (res === null) {
      app.notification.showError(_.lang.warning, _.lang.something_went_wrong);
      return false;
    }

    if (res.statusCode !== 200) {
      app.notification.showError(_.lang.warning, res.statusMessage);
      return false;
    }
    return true;
  };

  public secondStepValidation = async () => {
    const [dateTimeStamp, gender] = [this._ageInput.value.getTime(), this._genderSelection.value];
    if (getAge(dateTimeStamp) < 18) {
      app.notification.showError(_.lang.warning, 'You must be over 18 years old');
      return false;
    }

    if (getAge(dateTimeStamp) > 100) {
      app.notification.showError(_.lang.warning, 'Seriously, you are over 100 years old?');
      return false;
    }

    if (gender === undefined) {
      app.notification.showError(_.lang.warning, 'Provide your gender');
      return false;
    }
    return true;
  };

  public thirdStepValidation = async () => {};

  public onStep1NextPress = async () => {
    const validated = await this.firsStepValidation();
    if (validated) {
      this.curentStep = 2;
    }
  };

  public onStep2NextPress = async () => {
    const validated = await this.secondStepValidation();
    if (validated) {
      this.curentStep = 3;
    }
  };

  public onStep2PrevPress = async () => {
    if (this._googleIdToken) {
      return;
    }
    this.curentStep = 1;
  };

  public onStep3PrevPress = async () => {
    this.curentStep = 2;
  };

  public onGoogleSignUp = async (userData: {email: string; name: string; password: string}) => {
    this._userNameInput.value = userData.name;
    this._emailInput.value = userData.email;
    this._passwordInput.value = userData.password;
    this._repeatPasswordInput.value = userData.password;
    this._googleIdToken = userData.password;
    this._step2PrevButton.disabled = true;
    this.curentStep = 2;
  };

  public onUserNameChange = async (newValue: string) => {
    newValue;
  };

  public onPasswordChange = async (newValue: string) => {
    newValue;
  };

  public onRepeatPasswordChange = async (newValue: string) => {
    newValue;
  };

  public onEmailChange = async (newValue: string) => {
    newValue;
  };

  public onCountryChange = async (item: dropDownItem) => {
    this._regionSelection.setToDefault();
    this._citySelection.setToDefault();
    this._citySelection.disabled = true;
    this._regionSelection.listLoader = async () => {
      return await this.regionLoad(item.id);
    };
    this._regionSelection.disabled = false;
  };

  public onRegionChange = async (item: dropDownItem) => {
    this._citySelection.setToDefault();
    this._citySelection.listLoader = async () => {
      return await this.cityLoad(item.id);
    };
    this._citySelection.disabled = false;
  };

  public onCityChange = async (item: dropDownItem) => {
    item;
  };

  public countryLoad = async () => {
    const res = await loadData(UserDataProvider.GetCountries, {});
    if (res !== null) {
      return res.data;
    }
    return [];
  };

  public regionLoad = async (countryId: number) => {
    const res = await loadData(UserDataProvider.GetRegions, {countryId});
    if (res !== null) {
      return res.data;
    }
    return [];
  };

  public cityLoad = async (regionId: number) => {
    const res = await loadData(UserDataProvider.GetCities, {regionId});
    if (res !== null) {
      return res.data;
    }
    return [];
  };

  public onSignUpPress = async () => {
    this._signUpButton.disabled = true;
    const [
      name,
      email,
      password,
      passwordConfirm,
      dateTimeStamp,
      gender,
      country,
      region,
      city,
      fcm,
      agreement,
    ] = [
      this._userNameInput.value.trim(),
      this._emailInput.value.trim(),
      this._passwordInput.value.trim(),
      this._repeatPasswordInput.value.trim(),
      this._ageInput.value.getTime(),
      this._genderSelection.value,
      this._countrySelection.value,
      this._regionSelection.value,
      this._citySelection.value,
      await FireBaseHandler.getFCMToken(),
      this._agreementSwitcher.value,
    ];

    if (name === '') {
      app.notification.showError(_.lang.warning, 'Name can not be empty');
      this._signUpButton.disabled = false;
      return;
    }

    if (email === '') {
      app.notification.showError(_.lang.warning, 'Email can not be empty');
      this._signUpButton.disabled = false;
      return;
    }

    if (password === '') {
      app.notification.showError(_.lang.warning, 'Password can not be empty');
      this._signUpButton.disabled = false;
      return;
    }
    if (passwordConfirm === '') {
      app.notification.showError(_.lang.warning, 'Password Confirm can not be empty');
      this._signUpButton.disabled = false;
      return;
    }

    if (password !== passwordConfirm) {
      app.notification.showError(_.lang.warning, 'Confirm password dos not match');
      this._signUpButton.disabled = false;
      return;
    }

    if (password.length < 6) {
      app.notification.showError(_.lang.warning, 'Password must be at least 6 characters');
      this._signUpButton.disabled = false;
      return;
    }

    if (country === undefined) {
      app.notification.showError(_.lang.warning, 'Select your country');
      this._signUpButton.disabled = false;
      return;
    }

    if (region === undefined) {
      app.notification.showError(_.lang.warning, 'Select your region');
      this._signUpButton.disabled = false;
      return;
    }

    if (city === undefined) {
      app.notification.showError(_.lang.warning, 'Select your city or closest to you');
      this._signUpButton.disabled = false;
      return;
    }

    if (getAge(dateTimeStamp) < 18) {
      app.notification.showError(_.lang.warning, 'You must be over 18 years old');
      this._signUpButton.disabled = false;
      return;
    }

    if (getAge(dateTimeStamp) > 100) {
      app.notification.showError(_.lang.warning, 'Seriously, you are over 100 years old?');
      this._signUpButton.disabled = false;
      return;
    }

    if (gender === undefined) {
      app.notification.showError(_.lang.warning, 'Provide your gender');
      this._signUpButton.disabled = false;
      return;
    }

    if (!agreement) {
      app.notification.showError(_.lang.warning, 'You must agree to the terms of use');
      this._signUpButton.disabled = false;
      return;
    }
    const registrationBody = {
      name: name,
      password: password,
      email: email,
      gender: gender.id === 1 ? 'male' : 'female',
      birthDate: dateTimeStamp,
      telegram: '',
      phone: '',
      countryId: country.id,
      regionId: region.id,
      cityId: city.id,
      fcm,
      mac: deviceInfoModule.getMacAddressSync(),
      google_token: this._googleIdToken,
    };
    const res = await loadData(UserDataProvider.Registration, registrationBody);
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
        app.currentUser.fcm = res.data.fcm;
        app.currentUser.token = res.data.token;
        await this.autoCreateAnnouncement();
        analyticHandler.trackEvent('user_created_new_account', {
          gender: res.data.gender,
          location: res.data.location.country.name,
        });
        SocketHandler.connect();
        return;
      }
      app.notification.showError(res.statusCode.toString(), res.statusMessage);
      this._signUpButton.disabled = false;
      return;
    }
    app.notification.showError(_.lang.warning, _.lang.something_went_wrong);
    this._signUpButton.disabled = false;
  };

  public autoCreateAnnouncement = async () => {
    const [country, region, city] = [
      this._countrySelection.value,
      this._regionSelection.value,
      this._citySelection.value,
    ];
    if (app.currentUser.location === undefined) {
      app.notification.showError(_.lang.warning, 'Set up location please');
      this._signUpButton.disabled = false;
      return;
    }
    const meetingBody = {
      authorId: app.currentUser.userId,
      timestamp: new Date().getTime(),
      countryId: country === undefined ? app.currentUser.location.country.id : country.id,
      regionId: region === undefined ? app.currentUser.location.region.id : region.id,
      cityId: city === undefined ? app.currentUser.location.city.id : city.id,
      text: '',
    };

    const res = await loadData(UserDataProvider.CreateMeeting, meetingBody);
    if (res === null) {
      app.notification.showError(_.lang.warning, _.lang.servers_are_not_allowed);
      this._signUpButton.disabled = false;
      return;
    }

    if (res.statusCode !== 200) {
      app.notification.showError(`${res.statusCode}`, res.statusMessage);
      this._signUpButton.disabled = false;
      return;
    }
    app.notification.showSuccess('Hooray', 'Your profile succesfuly added');
    app.navigator.goToMainProfileScreen();
    app.navigator.setOnline();
    FireBaseHandler.syncTokenDevice();
    this._signUpButton.disabled = false;
  };
}

export {RegistrationFormModel};
