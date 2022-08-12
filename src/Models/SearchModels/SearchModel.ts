import {Alert, NativeScrollEvent, NativeSyntheticEvent} from 'react-native';
import {ICONS} from '../../constants/icons';
import {app} from '../../Core/AppImpl';
import {BaseModel, baseModelProps} from '../../Core/BaseModel';
import {locationItemType, searchItemDataType} from '../../Core/DataTypes/BaseTypes';
import {loadData, UserDataProvider} from '../../DataProvider/UserDataProvider';
import {SimpleButtonModel} from '../Components/Buttons/SimpleButtonModel';
import {genderEnum} from '../Components/Inputs/GenderSvitcherModel';
import {SearchFilterModel} from './SearchFilterModel';
import {SearchItemModel} from './SearchItemModel';
import {SendMessageModalModel, shortUserDataType} from './SendMessageModalModel';

type searchModelProps = baseModelProps & {};

export type filterType = {
  location: {
    country: locationItemType;
    region: locationItemType;
    city: locationItemType;
  };
  myId: number;
  gender: genderEnum;
  ageFrom: number;
  ageTo: number;
  approved: boolean,
};

class SearchModel extends BaseModel<searchModelProps> {
  private _list: Map<number, SearchItemModel> = new Map();
  private _initialLoad: boolean = true;
  private _currentFilter: filterType;
  private _filterButton: SimpleButtonModel;
  private _filterModal: SearchFilterModel;
  private _sendMessageModal: SendMessageModalModel;

  private _limit: number = 30;
  private _offset: number = 0;
  private _loadingNP: boolean = false;

  constructor(props: searchModelProps) {
    super(props);
    this._currentFilter = {
      location:
        app.currentUser.location !== undefined
          ? app.currentUser.location
          : {
              city: {id: 1, name: 'Uzhorod'},
              region: {id: 1, name: 'Zakarpatska oblast'},
              country: {id: 1, name: 'Ukraine'},
            },
      myId: app.currentUser.userId,
      ageFrom: new Date().setFullYear(new Date().getFullYear() - 18),
      ageTo: new Date().setFullYear(new Date().getFullYear() - 100),
      gender: 'all',
      approved: false,
    };
    this._filterButton = new SimpleButtonModel({id: '_filterButton', onPress: this.onFilterPress, icon: ICONS.filterIcon});
    this.load();
    this._filterModal = new SearchFilterModel({id: '_filterModal', submitFilters: this.setNewFilters});
    this._sendMessageModal = new SendMessageModalModel({id: '_sendMessageModal'});
  }

  public get list() {
    return this._list;
  }

  public get initialLoad() {
    return this._initialLoad;
  }

  public get currentFilter() {
    return this._currentFilter;
  }

  public setNewFilters = async (newFilter: filterType) => {
    if (
      this._currentFilter.ageFrom !== newFilter.ageFrom ||
      this._currentFilter.ageTo !== newFilter.ageTo ||
      this._currentFilter.gender !== newFilter.gender ||
      this._currentFilter.location.country.id !== newFilter.location.country.id ||
      this._currentFilter.location.region.id !== newFilter.location.region.id ||
      this._currentFilter.location.city.id !== newFilter.location.city.id
    ) {
      this._currentFilter = newFilter;
      await this.load();
    }
  };

  public get filterButton() {
    return this._filterButton;
  }

  public get filterModal() {
    return this._filterModal;
  }

  public get sendMessageModal() {
    return this._sendMessageModal;
  }

  public load = async () => {
    this._offset = 0;
    const searchBody = {
      location: {
        cityId: this._currentFilter.location.city.id,
        regionId: this._currentFilter.location.region.id,
        countryId: this._currentFilter.location.country.id,
      },
      myId: this._currentFilter.myId,
      gender: this._currentFilter.gender,
      ageFrom: this._currentFilter.ageFrom,
      ageTo: this._currentFilter.ageTo,
      limit: this._limit,
      offset: this._offset,
      approved: this._currentFilter.approved,
    };
    const searchRes = await loadData(UserDataProvider.SearchRequest, searchBody);
    if (searchRes === null) {
      Alert.alert('Warning', 'Servers are not awalible or not internet connection');
      this._initialLoad = false;
      return;
    }
    if (searchRes.statusCode !== 200) {
      Alert.alert('Warning', searchRes.statusMessage);
      this._initialLoad = false;
      return;
    }
    this.list.clear();
    searchRes.data.map(searchItemProps => {
      this.list.set(searchItemProps.id, this.createSearchItem(searchItemProps));
    });
    this._initialLoad = false;
    this.forceUpdate();
  };

  public update = async () => {
    if (this._initialLoad) {
      return;
    }
    const searchBody = {
      location: {
        cityId: this._currentFilter.location.city.id,
        regionId: this._currentFilter.location.region.id,
        countryId: this._currentFilter.location.country.id,
      },
      myId: this._currentFilter.myId,
      gender: this._currentFilter.gender,
      ageFrom: this._currentFilter.ageFrom,
      ageTo: this._currentFilter.ageTo,
      limit: this._limit,
      offset: this._offset,
      approved: this._currentFilter.approved,
    };
    const searchRes = await loadData(UserDataProvider.SearchRequest, searchBody);
    if (searchRes === null) {
      Alert.alert('Warning', 'Servers are not awalible or not internet connection');
      this._initialLoad = false;
      return;
    }
    if (searchRes.statusCode !== 200) {
      Alert.alert('Warning', searchRes.statusMessage);
      this._initialLoad = false;
      return;
    }
    searchRes.data.map(searchItemProps => {
      const oldItem = this.list.get(searchItemProps.id);
      if (oldItem === undefined) {
        this.list.set(searchItemProps.id, this.createSearchItem(searchItemProps));
      } else {
        if (oldItem.liked !== searchItemProps.liked || oldItem.text !== searchItemProps.text) {
          this.list.set(searchItemProps.id, this.createSearchItem(searchItemProps));
        }
      }
    });

    const itemsToDelete = Array.from(this.list.keys()).filter(key => {
      return (
        searchRes.data.findIndex(searchItem => {
          return searchItem.id === key;
        }) === -1
      );
    });
    itemsToDelete.forEach(itemIndex => {
      this.list.delete(itemIndex);
    });
    this.forceUpdate();
  };

  public loadMore = async () => {
    const elemsInScreen = this._offset + this._limit;
    if (!this._loadingNP && Array.from(this.list).length === elemsInScreen) {
      this._loadingNP = true;
      this._offset += this._limit;
      const searchBody = {
        location: {
          cityId: this._currentFilter.location.city.id,
          regionId: this._currentFilter.location.region.id,
          countryId: this._currentFilter.location.country.id,
        },
        myId: this._currentFilter.myId,
        gender: this._currentFilter.gender,
        ageFrom: this._currentFilter.ageFrom,
        ageTo: this._currentFilter.ageTo,
        limit: this._limit,
        offset: this._offset,
        approved: this._currentFilter.approved,
      };
      const searchRes = await loadData(UserDataProvider.SearchRequest, searchBody);
      if (searchRes === null) {
        Alert.alert('Warning', 'Servers are not awalible or not internet connection');
        this._loadingNP = false;
        return;
      }
      if (searchRes.statusCode !== 200) {
        Alert.alert('Warning', searchRes.statusMessage);
        this._loadingNP = false;
        return;
      }
      searchRes.data.map(searchItemProps => {
        this.list.set(searchItemProps.id, this.createSearchItem(searchItemProps));
      });
      this.forceUpdate();
      this._loadingNP = false;
    }
  };

  public onScroll = async (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const event = e.nativeEvent;
    const bottomBorder = event.contentOffset.y + event.layoutMeasurement.height;
    if (event.contentSize.height - bottomBorder < 200) {
      await this.loadMore();
    }
  };

  public createSearchItem = (props: searchItemDataType) => {
    return new SearchItemModel({...props, onSendMessagePress: this.onSendMessagePress});
  };

  public onFilterPress = async () => {
    this._filterModal.open();
  };

  public onSendMessagePress = async (user: shortUserDataType) => {
    const res = await loadData(UserDataProvider.IsChatExists, {myId: app.currentUser.userId, userId: user.userId});
    if (res === null) {
      Alert.alert('Warning', 'Something went wrong, check your internet connection');
      return;
    }

    if (res.statusCode !== 200) {
      Alert.alert('Warning', res.statusMessage);
      return;
    }

    if (res.data) {
      app.navigator.goToChatScreen(user.userId);
      return;
    }

    this.sendMessageModal.userData = user;
    this.sendMessageModal.open();
  };
}

export {SearchModel};
