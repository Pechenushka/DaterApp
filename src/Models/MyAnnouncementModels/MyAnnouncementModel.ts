import {Alert} from 'react-native';
import {ICONS} from '../../constants/icons';
import {app} from '../../Core/AppImpl';
import {BaseModel, baseModelProps} from '../../Core/BaseModel';
import {_} from '../../Core/Localization';
import {loadData, UserDataProvider} from '../../DataProvider/UserDataProvider';
import {SimpleButtonModel} from '../Components/Buttons/SimpleButtonModel';
import {dropDownItem, DropDownModel} from '../Components/Inputs/DropDownModel';
import {SwitcherModel} from '../Components/Inputs/SwitcherModel';
import {TextInputModel} from '../Components/Inputs/TextInputModel';
import {LabelModel} from '../Components/Labels/LabelModel';
import {
  HorizontalSelectorItem,
  HorizontalSelectorModel,
} from '../Components/Inputs/HorizontalSelectorModel';

type myAnnouncementModelProps = baseModelProps & {};

class MyAnnouncementModel extends BaseModel<myAnnouncementModelProps> {
  private _discribeInput: TextInputModel;
  private _submitButton: SimpleButtonModel;
  private _editButton: SimpleButtonModel;
  private _backButton: SimpleButtonModel;

  private _countrySelection: DropDownModel;
  private _regionSelection: DropDownModel;
  private _citySelection: DropDownModel;

  private _sexSelection: HorizontalSelectorModel;
  private _goalsSelection: HorizontalSelectorModel;
  private _smokeSelection: DropDownModel;
  private _alcoSelection: DropDownModel;
  private _kidsSelection: DropDownModel;
  private _sponsorSwitcher: SwitcherModel;
  private _keepterSwitcher: SwitcherModel;

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

    this._sexSelection = new HorizontalSelectorModel({
      id: '_sexSelection',
      list: [
        {
          id: 0,
          name: _.lang.genders[0],
          icon: ICONS.genders.male,
          activeIcon: ICONS.genders.maleActive,
        },
        {
          id: 1,
          name: _.lang.genders[1],
          icon: ICONS.genders.female,
          activeIcon: ICONS.genders.femaleActive,
        },
      ],
      onSelectionChange: this.onSexChange,
      multiselection: true,
    });

    this._goalsSelection = new HorizontalSelectorModel({
      id: '_goalsSelection',
      list: [
        {
          id: 0,
          name: _.lang.goals[0],
          icon: ICONS.goals.family,
          activeIcon: ICONS.goals.familyActive,
        },
        {
          id: 1,
          name: _.lang.goals[1],
          icon: ICONS.goals.tarvels,
          activeIcon: ICONS.goals.travelsActive,
        },
        {
          id: 2,
          name: _.lang.goals[2],
          icon: ICONS.goals.flirt,
          activeIcon: ICONS.goals.flirtActive,
        },
        {id: 3, name: _.lang.goals[3], icon: ICONS.goals.chat, activeIcon: ICONS.goals.chatActive},
        {
          id: 4,
          name: _.lang.goals[4],
          icon: ICONS.goals.friendship,
          activeIcon: ICONS.goals.friendshipActive,
        },
        {id: 5, name: _.lang.goals[5], icon: ICONS.goals.sex, activeIcon: ICONS.goals.sexActive},
      ],
      onSelectionChange: this.onGoalsChange,
      multiselection: true,
    });

    this._smokeSelection = new DropDownModel({
      id: '_smokeSelection',
      list: [
        {id: 0, name: _.lang.smoking[0]},
        {id: 1, name: _.lang.smoking[1]},
        {id: 2, name: _.lang.smoking[2]},
        {id: 3, name: _.lang.smoking[3]},
      ],
      placeholder: _.lang.choose_variant,
      onSelectionChange: this.onSmokeChange,
      disabled: false,
      defaultItem: {id: -1, name: _.lang.not_setted},
    });

    this._alcoSelection = new DropDownModel({
      id: '_alcoSelection',
      list: [
        {id: 0, name: _.lang.alco[0]},
        {id: 1, name: _.lang.alco[1]},
        {id: 2, name: _.lang.alco[2]},
        {id: 3, name: _.lang.alco[3]},
      ],
      placeholder: _.lang.choose_variant,
      onSelectionChange: this.onAlcoChange,
      disabled: false,
      defaultItem: {id: -1, name: _.lang.not_setted},
    });

    this._kidsSelection = new DropDownModel({
      id: '_kidsSelection',
      list: [
        {id: 0, name: _.lang.kids[0]},
        {id: 1, name: _.lang.kids[1]},
        {id: 2, name: _.lang.kids[2]},
        {id: 3, name: _.lang.kids[3]},
      ],
      placeholder: _.lang.choose_variant,
      onSelectionChange: this.onKidsChange,
      disabled: false,
      defaultItem: {id: -1, name: _.lang.not_setted},
    });

    this._sponsorSwitcher = new SwitcherModel({
      id: '_sponsorSwitcher',
      onValueChange: this.onSponsorSwitcherChange,
    });

    this._keepterSwitcher = new SwitcherModel({
      id: '_keepterSwitcher',
      onValueChange: this.onKeepterSwitcherChange,
    });

    this._previewLabelModel = new LabelModel({id: '_previewLaberModel', text: ''});

    this._previewLocationLabelModel = new LabelModel({
      id: '_previewLaberModel',
      text:
        app.currentUser.location !== undefined
          ? `${app.currentUser.location.country.name}, ${app.currentUser.location.region.name}, ${app.currentUser.location.city.name}`
          : '',
    });

    this._submitButton = new SimpleButtonModel({
      id: '_submitButton',
      onPress: this.onSubbmitPress,
      text: 'SUBMIT',
    });

    this._editButton = new SimpleButtonModel({
      id: '_editButton',
      onPress: this.onEditButtonPress,
      text: _.lang.edit,
    });

    this._backButton = new SimpleButtonModel({
      id: '_backButton',
      onPress: this.onBackButtonPress,
      icon: ICONS.BackArrowIconWhite,
    });
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

  public get sexSelection() {
    return this._sexSelection;
  }

  public get goalsSelection() {
    return this._goalsSelection;
  }

  public get alcoSelection() {
    return this._alcoSelection;
  }

  public get smokeSelection() {
    return this._smokeSelection;
  }

  public get kidsSelection() {
    return this._kidsSelection;
  }

  public get sponsorSwitcher() {
    return this._sponsorSwitcher;
  }

  public get keepterSwitcher() {
    return this._keepterSwitcher;
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

  public get backButton() {
    return this._backButton;
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

  public onSexChange = async (item: HorizontalSelectorItem | HorizontalSelectorItem[]) => {
    this.forceUpdate();
  };

  public onGoalsChange = async (item: HorizontalSelectorItem | HorizontalSelectorItem[]) => {
    this.forceUpdate();
  };

  public onSmokeChange = async (item: dropDownItem) => {
    this.forceUpdate();
  };

  public onAlcoChange = async (item: dropDownItem) => {
    this.forceUpdate();
  };

  public onKidsChange = async (item: dropDownItem) => {
    this.forceUpdate();
  };

  public onSponsorSwitcherChange = async (value: boolean) => {
    if (value) {
      this._keepterSwitcher.value = false;
    }
    this.forceUpdate();
  };

  public onKeepterSwitcherChange = async (value: boolean) => {
    if (value) {
      this._sponsorSwitcher.value = false;
    }
    this.forceUpdate();
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
    const [text, country, region, city, goal, lookingfor] = [
      this._discribeInput.value.trim(),
      this._countrySelection.value,
      this._regionSelection.value,
      this._citySelection.value,
      this._goalsSelection.value as HorizontalSelectorItem[],
      this._sexSelection.value as HorizontalSelectorItem[],
    ];
    if (app.currentUser.location === undefined) {
      app.notification.showError(_.lang.warning, 'Set up location please');
      this._submitButton.disabled = false;
      return;
    }
    if (country !== undefined) {
      if (region === undefined) {
        app.notification.showError(_.lang.warning, 'Select region');
        this._submitButton.disabled = false;
        return;
      }

      if (city === undefined) {
        app.notification.showError(_.lang.warning, 'Select city');
        this._submitButton.disabled = false;
        return;
      }
    }
    const meetingBody = {
      authorId: app.currentUser.userId,
      timestamp: new Date().getTime(),
      countryId: country === undefined ? app.currentUser.location.country.id : country.id,
      regionId: region === undefined ? app.currentUser.location.region.id : region.id,
      cityId: city === undefined ? app.currentUser.location.city.id : city.id,
      text: text || '',
      lookingfor: lookingfor === undefined ? null : lookingfor.map(item => item.id),
      goal: goal === undefined ? null : goal.map(item => item.id),
    };

    const res = await loadData(UserDataProvider.CreateMeeting, meetingBody);
    if (res === null) {
      app.notification.showError(_.lang.warning, _.lang.servers_are_not_allowed);
      this._submitButton.disabled = false;
      return;
    }

    if (res.statusCode !== 200) {
      app.notification.showError(`${res.statusCode}`, res.statusMessage);
      this._submitButton.disabled = false;
      return;
    }
    app.notification.showSuccess('Hooray', 'Your announcment succesfuly added');
    app.navigator.goToMainProfileScreen();
    this._submitButton.disabled = false;
  };

  public onBackButtonPress = async () => {
    app.navigator.goToMainProfileScreen();
  };

  public onEditButtonPress = async () => {
    this._editButton.disabled = true;
    const [text, country, region, city, goal, lookingfor, alco, smoking, kids, sponsor, keepter] = [
      this._discribeInput.value.trim(),
      this._countrySelection.value,
      this._regionSelection.value,
      this._citySelection.value,
      this._goalsSelection.value as HorizontalSelectorItem[],
      this._sexSelection.value as HorizontalSelectorItem[],
      this._alcoSelection.value,
      this._smokeSelection.value,
      this._kidsSelection.value,
      this._sponsorSwitcher.value,
      this._keepterSwitcher.value,
    ];

    if (app.currentUser.location === undefined) {
      app.notification.showError(_.lang.warning, 'Set up location please');
      this._editButton.disabled = false;
      return;
    }

    if (country !== undefined) {
      if (region === undefined) {
        app.notification.showError(_.lang.warning, 'Select region');
        this._editButton.disabled = false;
        return;
      }

      if (city === undefined) {
        app.notification.showError(_.lang.warning, 'Select city');
        this._editButton.disabled = false;
        return;
      }
    }

    const meetingBody = {
      authorId: app.currentUser.userId,
      countryId: country === undefined ? app.currentUser.location.country.id : country.id,
      regionId: region === undefined ? app.currentUser.location.region.id : region.id,
      cityId: city === undefined ? app.currentUser.location.city.id : city.id,
      text: text || '',
      lookingfor: lookingfor === undefined ? null : lookingfor.map(item => item.id),
      goal: goal === undefined ? null : goal.map(item => item.id),
      alco: alco && alco.id >= 0 ? alco.id : null,
      smoking: smoking && smoking.id >= 0 ? smoking.id : null,
      kids: kids && kids.id >= 0 ? kids.id : null,
      sponsor,
      keepter,
    };

    const res = await loadData(UserDataProvider.EditMeeting, meetingBody);
    if (res === null) {
      app.notification.showError(_.lang.warning, _.lang.servers_are_not_allowed);
      this._editButton.disabled = false;
      return;
    }

    if (res.statusCode !== 200) {
      app.notification.showError(`${res.statusCode}`, res.statusMessage);
      this._editButton.disabled = false;
      return;
    }
    if (country !== undefined) {
      app.currentUser.location.country = country;
    }
    if (region !== undefined) {
      app.currentUser.location.region = region;
    }
    if (city !== undefined) {
      app.currentUser.location.city = city;
    }
    app.notification.showSuccess(_.lang.success, 'Your announcment succesfuly edited');
    app.navigator.goToMainProfileScreen();
    this._editButton.disabled = false;
  };

  public loadExistingAnnouncment = async () => {
    this.loading = true;
    const loadResult = await loadData(UserDataProvider.GetUserMeeting, {
      authorId: app.currentUser.userId,
    });
    if (loadResult === null) {
      app.notification.showError(_.lang.warning, _.lang.servers_are_not_allowed);
      this.loading = false;
      return;
    }
    if (loadResult.statusCode === 200) {
      this.editMode = true;
      this._discribeInput.value = loadResult.data.text;
      this.previewLabelModel.text = loadResult.data.text;
      this.previewLocationLabelModel.text = `${loadResult.data.countryName}, ${loadResult.data.regionName}, ${loadResult.data.cityName}`;

      this._sexSelection.selectItems(loadResult.data.lookingfor);
      this._goalsSelection.selectItems(loadResult.data.goal);

      const selectedAlco = this._alcoSelection.list.find(el => el.id === loadResult.data.alco);
      this._alcoSelection.selectItem(selectedAlco);

      const selectedSmoking = this._smokeSelection.list.find(
        el => el.id === loadResult.data.smoking,
      );
      this._smokeSelection.selectItem(selectedSmoking);

      const selectedKids = this._kidsSelection.list.find(el => el.id === loadResult.data.kids);
      this._kidsSelection.selectItem(selectedKids);

      this._sponsorSwitcher.value =
        loadResult.data.sponsor !== null ? loadResult.data.sponsor : false;

      this._keepterSwitcher.value =
        loadResult.data.keepter !== null ? loadResult.data.keepter : false;

      const selectedCountry = this._countrySelection.list.find(
        el => el.name === loadResult.data.countryName,
      );
      selectedCountry && this._countrySelection.selectItem(selectedCountry);

      this._countrySelection.onListReady = async () => {
        const selectedCountry = this._countrySelection.list.find(
          el => el.name === loadResult.data.countryName,
        );
        selectedCountry && this._countrySelection.selectItem(selectedCountry);
      };
      this._regionSelection.onListReady = async () => {
        const selectedRegion = this._regionSelection.list.find(
          el => el.name === loadResult.data.regionName,
        );
        selectedRegion && this._regionSelection.selectItem(selectedRegion);
      };

      this._citySelection.onListReady = async () => {
        const selectedCity = this._citySelection.list.find(
          el => el.name === loadResult.data.cityName,
        );
        selectedCity && this._citySelection.selectItem(selectedCity);
      };
    }

    this.loading = false;
  };
}

export {MyAnnouncementModel};
