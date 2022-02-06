import {Alert} from 'react-native';
import {ICONS} from '../../constants/icons';
import {app} from '../../Core/AppImpl';
import {BaseModel, baseModelProps} from '../../Core/BaseModel';
import {FireBaseHandler} from '../../Core/FireBaseHandler';
import {_} from '../../Core/Localization';
import {loadData, UserDataProvider} from '../../DataProvider/UserDataProvider';
import {SimpleButtonModel} from '../Components/Buttons/SimpleButtonModel';
import {DatePickerModel} from '../Components/Inputs/DatePickerModel';
import {dropDownItem, DropDownModel} from '../Components/Inputs/DropDownModel';
import {GenderSvitcherModel} from '../Components/Inputs/GenderSvitcherModel';
import {TextInputModel} from '../Components/Inputs/TextInputModel';

type registrationFormModelProps = baseModelProps & {};

class RegistrationFormModel extends BaseModel<registrationFormModelProps> {
  private _userNameInput: TextInputModel;
  private _emailInput: TextInputModel;
  private _passwordInput: TextInputModel;
  private _repeatPasswordInput: TextInputModel;
  private _ageInput: DatePickerModel;
  private _genderSwitcher: GenderSvitcherModel;
  private _signUpButton: SimpleButtonModel;

  private _countrySelection: DropDownModel;
  private _regionSelection: DropDownModel;
  private _citySelection: DropDownModel;

  constructor(props: registrationFormModelProps) {
    super(props);
    this._userNameInput = new TextInputModel({
      id: '_userNameInput',
      onChangeText: this.onUserNameChange,
      placeholder: _.lang.enter_your_name,
      showLeftIcon: true,
      leftIcon: ICONS.profileIcon,
    });

    this._emailInput = new TextInputModel({
      id: '_emailInput',
      onChangeText: this.onEmailChange,
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

    this._repeatPasswordInput = new TextInputModel({
      id: '_repeatPasswordInput',
      onChangeText: this.onRepeatPasswordChange,
      placeholder: _.lang.repeat_your_password,
      secure: true,
      showLeftIcon: true,
      leftIcon: ICONS.lockIcon,
    });

    this._ageInput = new DatePickerModel({id: '_ageInput', mode: 'date'});

    this._genderSwitcher = new GenderSvitcherModel({id: '_genderSwitcher'});

    this._signUpButton = new SimpleButtonModel({id: '_signUpButton', onPress: this.onSignUpPress, text: _.lang.sign_up});

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
  }

  public get userNameInput() {
    return this._userNameInput;
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

  public get genderSwitcher() {
    return this._genderSwitcher;
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
    const [name, email, password, passwordConfirm, dateTimeStamp, gender, country, region, city, fcm] = [
      this._userNameInput.value.trim(),
      this._emailInput.value.trim(),
      this._passwordInput.value.trim(),
      this._repeatPasswordInput.value.trim(),
      this._ageInput.value.getTime(),
      this.genderSwitcher.value,
      this._countrySelection.value,
      this._regionSelection.value,
      this._citySelection.value,
      await FireBaseHandler.getFCMToken(),
    ];

    if (name === '') {
      Alert.alert('Warning!', 'Name can not be empty');
      this._signUpButton.disabled = false;
      return;
    }

    if (email === '') {
      Alert.alert('Warning!', 'Email can not be empty');
      this._signUpButton.disabled = false;
      return;
    }

    if (password === '') {
      Alert.alert('Warning!', 'Password can not be empty');
      this._signUpButton.disabled = false;
      return;
    }
    if (passwordConfirm === '') {
      Alert.alert('Warning!', 'Password Confirm can not be empty');
      this._signUpButton.disabled = false;
      return;
    }

    if (password !== passwordConfirm) {
      Alert.alert('Warning!', 'Confirm password dos not match');
      this._signUpButton.disabled = false;
      return;
    }

    if (country === undefined) {
      Alert.alert('Warning!', 'Select your country');
      this._signUpButton.disabled = false;
      return;
    }

    if (region === undefined) {
      Alert.alert('Warning!', 'Select your region');
      this._signUpButton.disabled = false;
      return;
    }

    if (city === undefined) {
      Alert.alert('Warning!', 'Select your city or closest to you');
      this._signUpButton.disabled = false;
      return;
    }
    const registrationBody = {
      name: name,
      password: password,
      email: email,
      gender: gender,
      birthDate: dateTimeStamp,
      telegram: '',
      phone: '',
      countryId: country.id,
      regionId: region.id,
      cityId: city.id,
      fcm,
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
        await this.autoCreateAnnouncement();
        return;
      }
      Alert.alert(res.statusCode.toString(), res.statusMessage);
      this._signUpButton.disabled = false;
      return;
    }
    Alert.alert('Warning', 'Something was wrong');
    this._signUpButton.disabled = false;
  };

  public autoCreateAnnouncement = async () => {
    const [country, region, city] = [this._countrySelection.value, this._regionSelection.value, this._citySelection.value];
    if (app.currentUser.location === undefined) {
      Alert.alert('Warning', 'Set up location please');
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
      Alert.alert('Warning', 'Something went wrong, check your internet connection');
      this._signUpButton.disabled = false;
      return;
    }

    if (res.statusCode !== 200) {
      Alert.alert(`${res.statusCode}`, res.statusMessage);
      this._signUpButton.disabled = false;
      return;
    }
    Alert.alert('Hooray', 'Your profile succesfuly added');
    app.navigator.goToHomeScreen();
    app.navigator.setOnline();
    FireBaseHandler.syncTokenDevice();
    this._signUpButton.disabled = false;
  };
}

export {RegistrationFormModel};
