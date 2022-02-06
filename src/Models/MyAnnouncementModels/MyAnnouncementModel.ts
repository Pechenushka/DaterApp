import {Alert} from 'react-native';
import {app} from '../../Core/AppImpl';
import {BaseModel, baseModelProps} from '../../Core/BaseModel';
import {_} from '../../Core/Localization';
import {loadData, UserDataProvider} from '../../DataProvider/UserDataProvider';
import {SimpleButtonModel} from '../Components/Buttons/SimpleButtonModel';
import {dropDownItem, DropDownModel} from '../Components/Inputs/DropDownModel';
import {TextInputModel} from '../Components/Inputs/TextInputModel';
import {LabelModel} from '../Components/Labels/LabelModel';

type myAnnouncementModelProps = baseModelProps & {};

class MyAnnouncementModel extends BaseModel<myAnnouncementModelProps> {
  private _discribeInput: TextInputModel;
  private _submitButton: SimpleButtonModel;
  private _editButton: SimpleButtonModel;

  private _countrySelection: DropDownModel;
  private _regionSelection: DropDownModel;
  private _citySelection: DropDownModel;

  private _previewLabelModel: LabelModel;
  private _previewLocationLabelModel: LabelModel;

  private _loading: boolean = false;
  private _editMode: boolean = false;

  constructor(props: myAnnouncementModelProps) {
    super(props);
    this._discribeInput = new TextInputModel({
      id: '_discribeInput',
      numberOfLines: 5,
      placeholder: 'Write few words about yourself',
      onChangeText: this.onChangeText,
      maxLength: 500,
      showCounter: true,
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

    this._previewLabelModel = new LabelModel({id: '_previewLaberModel', text: ''});

    this._previewLocationLabelModel = new LabelModel({
      id: '_previewLaberModel',
      text:
        app.currentUser.location !== undefined
          ? `${app.currentUser.location.country.name}, ${app.currentUser.location.region.name}, ${app.currentUser.location.city.name}`
          : '',
    });

    this._submitButton = new SimpleButtonModel({id: '_submitButton', onPress: this.onSubbmitPress, text: 'SUBMIT'});
    this._editButton = new SimpleButtonModel({id: '_editButton', onPress: this.onEditButtonPress, text: _.lang.edit});
  }

  public get discribeInput() {
    return this._discribeInput;
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

  public get previewLabelModel() {
    return this._previewLabelModel;
  }

  public get previewLocationLabelModel() {
    return this._previewLocationLabelModel;
  }

  public get submitButton() {
    return this._submitButton;
  }

  public get editButton() {
    return this._editButton;
  }

  public get loading() {
    return this._loading;
  }

  public set loading(Val) {
    if (this._loading === Val) {
      return;
    }
    this._loading = Val;
    this.forceUpdate();
  }

  public get editMode() {
    return this._editMode;
  }

  public set editMode(Val) {
    if (this._editMode === Val) {
      return;
    }
    this._editMode = Val;
    this.forceUpdate();
  }

  public onCountryChange = async (item: dropDownItem) => {
    this._regionSelection.setToDefault();
    this._citySelection.setToDefault();
    this._citySelection.disabled = true;
    this._regionSelection.listLoader = async () => {
      return await this.regionLoad(item.id);
    };
    this._regionSelection.disabled = false;
    this.previewLocationLabelModel.text = `${item.name}`;
  };

  public onRegionChange = async (item: dropDownItem) => {
    this._citySelection.setToDefault();
    this._citySelection.listLoader = async () => {
      return await this.cityLoad(item.id);
    };
    this._citySelection.disabled = false;
    this.previewLocationLabelModel.text = `${this._countrySelection.value?.name}, ${item.name}`;
  };

  public onCityChange = async (item: dropDownItem) => {
    this.previewLocationLabelModel.text = `${this._countrySelection.value?.name}, ${this._regionSelection.value?.name}, ${item.name}`;
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

  public onChangeText = async (newValue: string) => {
    if (this._previewLabelModel.text === '' && newValue.trim() !== '') {
      this._previewLabelModel.text = newValue.trim();
      this.forceUpdate();
      return;
    }

    if (this._previewLabelModel.text !== '' && newValue.trim() === '') {
      this._previewLabelModel.text = newValue.trim();
      this.forceUpdate();
      return;
    }
    this._previewLabelModel.text = newValue.trim();
  };

  public onSubbmitPress = async () => {
    this._submitButton.disabled = true;
    const [text, country, region, city] = [
      this._discribeInput.value.trim(),
      this._countrySelection.value,
      this._regionSelection.value,
      this._citySelection.value,
    ];
    if (app.currentUser.location === undefined) {
      Alert.alert('Warning', 'Set up location please');
      this._submitButton.disabled = false;
      return;
    }
    if (text.length === 0) {
      Alert.alert('Warning', 'Write few words about yourself');
      this._submitButton.disabled = false;
      return;
    }
    const meetingBody = {
      authorId: app.currentUser.userId,
      timestamp: new Date().getTime(),
      countryId: country === undefined ? app.currentUser.location.country.id : country.id,
      regionId: region === undefined ? app.currentUser.location.region.id : region.id,
      cityId: city === undefined ? app.currentUser.location.city.id : city.id,
      text: text,
    };

    const res = await loadData(UserDataProvider.CreateMeeting, meetingBody);
    if (res === null) {
      Alert.alert('Warning', 'Something went wrong, check your internet connection');
      this._submitButton.disabled = false;
      return;
    }

    if (res.statusCode !== 200) {
      Alert.alert(`${res.statusCode}`, res.statusMessage);
      this._submitButton.disabled = false;
      return;
    }
    Alert.alert('Hooray', 'Your announcment succesfuly added');
    app.navigator.goToHomeScreen();
    this._submitButton.disabled = false;
  };

  public onEditButtonPress = async () => {
    this._editButton.disabled = true;
    const [text, country, region, city] = [
      this._discribeInput.value.trim(),
      this._countrySelection.value,
      this._regionSelection.value,
      this._citySelection.value,
    ];
    if (app.currentUser.location === undefined) {
      Alert.alert('Warning', 'Set up location please');
      this._editButton.disabled = false;
      return;
    }
    if (text.length === 0) {
      Alert.alert('Warning', 'Write few words about yourself');
      this._editButton.disabled = false;
      return;
    }
    const meetingBody = {
      authorId: app.currentUser.userId,
      countryId: country === undefined ? app.currentUser.location.country.id : country.id,
      regionId: region === undefined ? app.currentUser.location.region.id : region.id,
      cityId: city === undefined ? app.currentUser.location.city.id : city.id,
      text: text,
    };

    const res = await loadData(UserDataProvider.EditMeeting, meetingBody);
    if (res === null) {
      Alert.alert('Warning', 'Something went wrong, check your internet connection');
      this._editButton.disabled = false;
      return;
    }

    if (res.statusCode !== 200) {
      Alert.alert(`${res.statusCode}`, res.statusMessage);
      this._editButton.disabled = false;
      return;
    }
    Alert.alert('Hooray', 'Your announcment succesfuly edited');
    app.navigator.goToHomeScreen();
    this._editButton.disabled = false;
  };

  public loadExistingAnnouncment = async () => {
    this.loading = true;
    const loadResult = await loadData(UserDataProvider.GetUserMeeting, {authorId: app.currentUser.userId});
    if (loadResult === null) {
      Alert.alert('Warning', 'Something went wrong, check your internet connection');
      this.loading = false;
      return;
    }
    if (loadResult.statusCode === 200) {
      this.editMode = true;
      this._discribeInput.value = loadResult.data.text;
      this.previewLabelModel.text = loadResult.data.text;
      this.previewLocationLabelModel.text = `${loadResult.data.countryName}, ${loadResult.data.regionName}, ${loadResult.data.cityName}`;
    }

    this.loading = false;
  };
}

export {MyAnnouncementModel};
