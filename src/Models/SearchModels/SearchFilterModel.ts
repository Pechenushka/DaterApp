import {ICONS} from '../../constants/icons';
import {app} from '../../Core/AppImpl';
import {BaseModel, baseModelProps} from '../../Core/BaseModel';
import {_} from '../../Core/Localization';
import {loadData, UserDataProvider} from '../../DataProvider/UserDataProvider';
import {SimpleButtonModel} from '../Components/Buttons/SimpleButtonModel';
import {dropDownItem, DropDownModel} from '../Components/Inputs/DropDownModel';
import {genderEnum, GenderSvitcherModel} from '../Components/Inputs/GenderSvitcherModel';
import {
  HorizontalSelectorItem,
  HorizontalSelectorModel,
} from '../Components/Inputs/HorizontalSelectorModel';
import {SwitcherModel} from '../Components/Inputs/SwitcherModel';
import {TextInputModel} from '../Components/Inputs/TextInputModel';
import {filterType} from './SearchModel';

type searchFilterModelProps = baseModelProps & {
  submitFilters: (newFilter: filterType) => void;
};

class SearchFilterModel extends BaseModel<searchFilterModelProps> {
  private _closeButton: SimpleButtonModel;
  private _submitButton: SimpleButtonModel;
  private _visible: boolean = false;

  private _countrySelection: DropDownModel;
  private _regionSelection: DropDownModel;
  private _citySelection: DropDownModel;
  private _genderSwitcher: HorizontalSelectorModel;
  private _fromAgeInput: TextInputModel;
  private _toAgeInput: TextInputModel;

  private _goalsSelection: HorizontalSelectorModel;
  private _smokeSelection: DropDownModel;
  private _alcoSelection: DropDownModel;
  private _kidsSelection: DropDownModel;
  private _sponsorSwitcher: SwitcherModel;
  private _keepterSwitcher: SwitcherModel;

  constructor(props: searchFilterModelProps) {
    super(props);
    this._closeButton = new SimpleButtonModel({
      id: '_closeButton',
      onPress: this.onCloseButtonPress,
      icon: ICONS.closeIcon,
    });

    this._submitButton = new SimpleButtonModel({
      id: '_submitButton',
      onPress: this.onSubmitButtonPress,
      text: _.lang.aply_filters,
    });

    this._countrySelection = new DropDownModel({
      id: '_countrySelection',
      list: [],
      placeholder: _.lang.chose_country,
      listLoader: this.countryLoad,
      onSelectionChange: this.onCountryChange,
      defaultItem: {id: 0, name: _.lang.all_countries},
    });

    this._regionSelection = new DropDownModel({
      id: '_regionSelection',
      list: [],
      placeholder: _.lang.chose_region,
      onSelectionChange: this.onRegionChange,
      disabled: true,
      defaultItem: {id: 0, name: _.lang.all_regions},
    });

    this._citySelection = new DropDownModel({
      id: '_citySelection',
      list: [],
      placeholder: _.lang.chose_city,
      onSelectionChange: this.onCityChange,
      disabled: true,
      defaultItem: {id: 0, name: _.lang.all_cities},
    });
    this._genderSwitcher = new HorizontalSelectorModel({
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
      onSelectionChange: (item: HorizontalSelectorItem | HorizontalSelectorItem[]) => {},
      multiselection: true,
    });
    if (app.currentUser.filters !== undefined && app.currentUser.filters.gender.length) {
      this._genderSwitcher.selectItems(app.currentUser.filters.gender.map(gender => gender.id));
    } else {
      this._genderSwitcher.selectItems(app.currentUser.gender === 'female' ? [0] : [1]);
    }
    this._fromAgeInput = new TextInputModel({
      id: '_fromAgeInput',
      onChangeText: this.onFromAgeChange,
      keyboardType: 'numeric',
      onBlur: this.onFromAgeBlur,
      defaultValue: '18',
    });

    this._toAgeInput = new TextInputModel({
      id: '_toAgeInput',
      onChangeText: this.onToAgeChange,
      keyboardType: 'numeric',
      onBlur: this.onToAgeBlur,
      defaultValue: '100',
    });

    console.log('FILTERS', app.currentUser.filters);

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
      defaultItem: {id: -1, name: _.lang.all_variants},
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
      defaultItem: {id: -1, name: _.lang.all_variants},
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
      defaultItem: {id: -1, name: _.lang.all_variants},
    });

    this._sponsorSwitcher = new SwitcherModel({
      id: '_sponsorSwitcher',
      onValueChange: this.onSponsorSwitcherChange,
    });

    this._keepterSwitcher = new SwitcherModel({
      id: '_keepterSwitcher',
      onValueChange: this.onKeepterSwitcherChange,
    });

    if (app.currentUser.filters !== undefined) {
      app.currentUser.filters.location.country.id >= 0 &&
        this._countrySelection.selectItem(app.currentUser.filters.location.country);

      app.currentUser.filters.location.region.id >= 0 &&
        this._regionSelection.selectItem(app.currentUser.filters.location.region);

      app.currentUser.filters.location.city.id >= 0 &&
        this._citySelection.selectItem(app.currentUser.filters.location.city);

      this._fromAgeInput.value = `${app.currentUser.filters.ageFromNumber || 18}`;
      this._toAgeInput.value = `${app.currentUser.filters.ageToNumber || 100}`;

      app.currentUser.filters.alco !== null &&
        this._alcoSelection.selectItem(app.currentUser.filters.alco);

      app.currentUser.filters.goal !== null &&
        this._goalsSelection.selectItems(app.currentUser.filters.goal.map(goal => goal.id));

      app.currentUser.filters.keepter
        ? (this._keepterSwitcher.value = true)
        : (this._keepterSwitcher.value = false);

      app.currentUser.filters.kids !== null &&
        this._kidsSelection.selectItem(app.currentUser.filters.kids);

      app.currentUser.filters.smoking !== null &&
        this._smokeSelection.selectItem(app.currentUser.filters.smoking);

      app.currentUser.filters.sponsor
        ? (this._sponsorSwitcher.value = true)
        : (this._sponsorSwitcher.value = false);
    }
  }

  public get toAgeInput() {
    return this._toAgeInput;
  }

  public get fromAgeInput() {
    return this._fromAgeInput;
  }

  public get genderSwitcher() {
    return this._genderSwitcher;
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

  public get closeButton() {
    return this._closeButton;
  }

  public get submitButton() {
    return this._submitButton;
  }

  public get visible() {
    return this._visible;
  }

  public set visible(Val) {
    if (this._visible === Val) {
      return;
    }

    this._visible = Val;
    this.forceUpdate();
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

  public open = async () => {
    this.visible = true;
  };

  public close = async () => {
    this.visible = false;
  };

  public onCloseButtonPress = async () => {
    this.close();
  };

  public onSubmitButtonPress = async () => {
    let newFilters: filterType = {
      location:
        app.currentUser.location !== undefined
          ? {
              city: {
                id: app.currentUser.location.city.id,
                name: app.currentUser.location.city.name,
              },
              region: {
                id: app.currentUser.location.region.id,
                name: app.currentUser.location.region.name,
              },
              country: {
                id: app.currentUser.location.country.id,
                name: app.currentUser.location.country.name,
              },
            }
          : {
              city: {id: 1, name: 'Uzhorod'},
              region: {id: 1, name: 'Zakarpatska oblast'},
              country: {id: 1, name: 'Ukraine'},
            },
      myId: app.currentUser.userId,
      ageFrom: 18,
      ageTo: 100,
      gender: this._genderSwitcher.value as HorizontalSelectorItem[],
      approved: true,
      alco: app.currentUser.filters?.alco || null,
      goal: app.currentUser.filters?.goal || [],
      keepter: app.currentUser.filters?.keepter || null,
      kids: app.currentUser.filters?.kids || null,
      smoking: app.currentUser.filters?.smoking || null,
      sponsor: app.currentUser.filters?.sponsor || null,
    };

    newFilters.location.country =
      this._countrySelection.value !== undefined
        ? this._countrySelection.value
        : {id: 0, name: _.lang.all_countries};
    newFilters.location.region =
      this._regionSelection.value !== undefined
        ? this._regionSelection.value
        : {id: 0, name: _.lang.all_cities};
    newFilters.location.city =
      this._citySelection.value !== undefined
        ? this._citySelection.value
        : {id: 0, name: _.lang.all_regions};

    let fromTimeStamp = new Date().setFullYear(
      new Date().getFullYear() - parseInt(this._fromAgeInput.value, 10) || 18,
    );
    let toTimeStamp = new Date().setFullYear(
      new Date().getFullYear() - parseInt(this._toAgeInput.value, 10) || 100,
    );
    newFilters.ageFrom = fromTimeStamp;
    newFilters.ageTo = toTimeStamp;
    newFilters.ageFromNumber = parseInt(this._fromAgeInput.value, 10) || 18;
    newFilters.ageToNumber = parseInt(this._toAgeInput.value, 10) || 100;

    newFilters.alco = this._alcoSelection.value !== undefined ? this._alcoSelection.value : null;
    newFilters.goal = this._goalsSelection.value as HorizontalSelectorItem[];
    newFilters.keepter = this._keepterSwitcher.value ? this._keepterSwitcher.value : null;
    newFilters.kids = this._kidsSelection.value !== undefined ? this._kidsSelection.value : null;
    newFilters.smoking =
      this._smokeSelection.value !== undefined ? this._smokeSelection.value : null;
    newFilters.sponsor =
      this._sponsorSwitcher.value !== undefined ? this.sponsorSwitcher.value : null;

    this.props.submitFilters(newFilters);
    app.currentUser.filters = newFilters;
    app.currentUser.saveUser();
    this.close();
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

  public onFromAgeChange = async (newValue: string) => {
    this._fromAgeInput.value = await this.sanityzeText(newValue);
  };

  public onToAgeChange = async (newValue: string) => {
    this._toAgeInput.value = await this.sanityzeText(newValue);
  };

  public onFromAgeBlur = async () => {
    this._fromAgeInput.value =
      parseInt(this._fromAgeInput.value, 10) < 18
        ? '18'
        : isNaN(parseInt(this._fromAgeInput.value, 10))
        ? '18'
        : this._fromAgeInput.value;
  };

  public onToAgeBlur = async () => {
    this._toAgeInput.value =
      parseInt(this._toAgeInput.value, 10) < 18
        ? '18'
        : isNaN(parseInt(this._toAgeInput.value, 10))
        ? '18'
        : this._toAgeInput.value;
  };

  public sanityzeText = async (value: string) => {
    let sanityzed = value.replace(/\D/g, '');
    if (parseInt(sanityzed, 10) > 100) {
      sanityzed = '100';
    }

    if (sanityzed.length > 1 && sanityzed.startsWith('0')) {
      sanityzed = sanityzed.substring(1);
    }

    if (sanityzed.length > 1 && parseInt(sanityzed, 10) < 18) {
      sanityzed = '18';
    }

    return sanityzed;
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
}

export {SearchFilterModel};
