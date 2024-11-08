import {FlatList, NativeScrollEvent, NativeSyntheticEvent} from 'react-native';
import {SetVisit} from '../../Common/Helpers';
import {ICONS} from '../../constants/icons';
import {app} from '../../Core/AppImpl';
import {BaseModel, baseModelProps} from '../../Core/BaseModel';
import {locationItemType, searchItemDataType} from '../../Core/DataTypes/BaseTypes';
import {_} from '../../Core/Localization';
import {loadData, UserDataProvider} from '../../DataProvider/UserDataProvider';
import {SimpleButtonModel} from '../Components/Buttons/SimpleButtonModel';
import {ProfileDetailsModalModel} from './ProfileDetailsModalModel';
import {SearchFilterModel} from './SearchFilterModel';
import {SearchItemModel} from './SearchItemModel';
import {SendMessageModalModel, shortUserDataType} from './SendMessageModalModel';
import {HorizontalSelectorItem} from '../Components/Inputs/HorizontalSelectorModel';

type searchModelProps = baseModelProps & {};

export type filterType = {
  location: {
    country: locationItemType;
    region: locationItemType;
    city: locationItemType;
  };
  myId: number;
  gender: HorizontalSelectorItem[];
  ageFrom: number;
  ageTo: number;
  ageFromNumber?: number;
  ageToNumber?: number;
  approved: boolean;
  alco: HorizontalSelectorItem[];
  smoking: HorizontalSelectorItem[];
  kids: HorizontalSelectorItem[];
  sponsor: boolean | null;
  keepter: boolean | null;
  goal: HorizontalSelectorItem[];
};

class SearchModel extends BaseModel<searchModelProps> {
  private _list: Array<SearchItemModel> = [];
  private _initialLoad: boolean = true;
  private _currentFilter: filterType;
  private _filterButton: SimpleButtonModel;
  private _filterModal: SearchFilterModel;
  private _sendMessageModal: SendMessageModalModel;
  private _profileDetailsModal: ProfileDetailsModalModel;
  private _refreshing: boolean = false;
  public FlatListRef: FlatList | null = null;

  private _limit: number = 30;
  private _offset: number = 0;
  private _loadingNP: boolean = false;

  constructor(props: searchModelProps) {
    super(props);
    this._currentFilter = {
      location:
        app.currentUser.filters !== undefined
          ? app.currentUser.filters.location
          : app.currentUser.location !== undefined
          ? app.currentUser.location
          : {
              city: {id: 1, name: 'Uzhorod'},
              region: {id: 1, name: 'Zakarpatska oblast'},
              country: {id: 1, name: 'Ukraine'},
            },
      myId: app.currentUser.userId,
      ageFrom:
        app.currentUser.filters?.ageFrom || new Date().setFullYear(new Date().getFullYear() - 18),
      ageTo:
        app.currentUser.filters?.ageTo || new Date().setFullYear(new Date().getFullYear() - 100),
      gender:
        app.currentUser.filters !== undefined
          ? app.currentUser.filters.gender
          : app.currentUser.gender === 'female'
          ? [
              {
                id: 0,
                name: _.lang.genders[0],
                icon: ICONS.genders.male,
                activeIcon: ICONS.genders.maleActive,
              },
            ]
          : [
              {
                id: 1,
                name: _.lang.genders[1],
                icon: ICONS.genders.female,
                activeIcon: ICONS.genders.femaleActive,
              },
            ],
      approved: true,
      alco: app.currentUser.filters?.alco || [],
      goal: app.currentUser.filters?.goal || [],
      keepter: app.currentUser.filters?.keepter || null,
      kids: app.currentUser.filters?.kids || [],
      smoking: app.currentUser.filters?.smoking || [],
      sponsor: app.currentUser.filters?.sponsor || null,
    };
    this._filterButton = new SimpleButtonModel({
      id: '_filterButton',
      onPress: this.onFilterPress,
      icon: ICONS.filterIcon,
    });
    this.load();
    this._filterModal = new SearchFilterModel({
      id: '_filterModal',
      submitFilters: this.setNewFilters,
    });
    this._sendMessageModal = new SendMessageModalModel({id: '_sendMessageModal'});
    this._profileDetailsModal = new ProfileDetailsModalModel({
      id: '_profileDetailsModal',
      onLikedPress: this.onItemLikePress,
      onNextPress: this.onProfileDetailsNextPress,
      onPrevPress: this.onProfileDetailsPrevPress,
    });
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
      this._currentFilter.location.city.id !== newFilter.location.city.id ||
      this._currentFilter.goal !== newFilter.goal ||
      this._currentFilter.alco !== newFilter.alco ||
      this._currentFilter.smoking !== newFilter.smoking ||
      this._currentFilter.sponsor !== newFilter.sponsor ||
      this._currentFilter.keepter !== newFilter.keepter ||
      this._currentFilter.kids !== newFilter.kids
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

  public get profileDetailsModal() {
    return this._profileDetailsModal;
  }

  public get refreshing() {
    return this._refreshing;
  }

  public set refreshing(Val) {
    if (this._refreshing === Val) {
      return;
    }
    this._refreshing = Val;
    this.forceUpdate();
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
      gender: this._currentFilter.gender.map(gender => (gender.id ? 'female' : 'male')),
      ageFrom: this._currentFilter.ageFrom,
      ageTo: this._currentFilter.ageTo,
      limit: this._limit,
      offset: this._offset,
      approved: this._currentFilter.approved,
      alco: this._currentFilter.alco.map(alco => alco.id),
      goal: this._currentFilter.goal.map(goal => goal.id),
      keepter: this._currentFilter.keepter || null,
      kids: this._currentFilter.kids.map(kids => kids.id),
      smoking: this._currentFilter.smoking.map(smoking => smoking.id),
      sponsor: this._currentFilter.sponsor || null,
    };
    const searchRes = await loadData(UserDataProvider.SearchRequest, searchBody);
    if (searchRes === null) {
      app.notification.showError(_.lang.warning, _.lang.servers_are_not_allowed);
      this._initialLoad = false;
      return;
    }
    if (searchRes.statusCode !== 200) {
      app.notification.showError(_.lang.warning, searchRes.statusMessage);
      this._initialLoad = false;
      return;
    }
    this._list = [];
    searchRes.data.map(searchItemProps => {
      this.list.push(this.createSearchItem(searchItemProps));
    });
    this._initialLoad = false;
    this.FlatListRef?.scrollToOffset({offset: 0, animated: true});
    this.forceUpdate();
  };

  public update = async () => {
    if (this._initialLoad) {
      return;
    }
    if (this.refreshing) {
      return;
    }
    this.refreshing = true;
    this._offset = 0;
    const searchBody = {
      location: {
        cityId: this._currentFilter.location.city.id,
        regionId: this._currentFilter.location.region.id,
        countryId: this._currentFilter.location.country.id,
      },
      myId: this._currentFilter.myId,
      gender: this._currentFilter.gender.map(gender => (gender.id ? 'female' : 'male')),
      ageFrom: this._currentFilter.ageFrom,
      ageTo: this._currentFilter.ageTo,
      limit: this._limit,
      offset: this._offset,
      approved: this._currentFilter.approved,
      alco: this._currentFilter.alco.map(alco => alco.id),
      goal: this._currentFilter.goal.map(goal => goal.id),
      keepter: this._currentFilter.keepter || null,
      kids: this._currentFilter.kids.map(kids => kids.id),
      smoking: this._currentFilter.smoking.map(smoking => smoking.id),
      sponsor: this._currentFilter.sponsor || null,
    };
    const searchRes = await loadData(UserDataProvider.SearchRequest, searchBody);
    if (searchRes === null) {
      app.notification.showError(_.lang.warning, _.lang.servers_are_not_allowed);
      this._initialLoad = false;
      this.refreshing = false;
      return;
    }
    if (searchRes.statusCode !== 200) {
      app.notification.showError(_.lang.warning, searchRes.statusMessage);
      this._initialLoad = false;
      this.refreshing = false;
      return;
    }
    this._list = [];
    searchRes.data.map(searchItemProps => {
      this.list.push(this.createSearchItem(searchItemProps));
    });

    this.FlatListRef?.scrollToOffset({offset: 0, animated: true});
    this.refreshing = false;
    this._initialLoad = false;
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
        gender: this._currentFilter.gender.map(gender => (gender.id ? 'female' : 'male')),
        ageFrom: this._currentFilter.ageFrom,
        ageTo: this._currentFilter.ageTo,
        limit: this._limit,
        offset: this._offset,
        approved: this._currentFilter.approved,
        alco: this._currentFilter.alco.map(alco => alco.id),
        goal: this._currentFilter.goal.map(goal => goal.id),
        keepter: this._currentFilter.keepter || null,
        kids: this._currentFilter.kids.map(kids => kids.id),
        smoking: this._currentFilter.smoking.map(smoking => smoking.id),
        sponsor: this._currentFilter.sponsor || null,
      };
      const searchRes = await loadData(UserDataProvider.SearchRequest, searchBody);
      if (searchRes === null) {
        app.notification.showError(_.lang.warning, _.lang.servers_are_not_allowed);
        this._loadingNP = false;
        return;
      }
      if (searchRes.statusCode !== 200) {
        app.notification.showError(_.lang.warning, searchRes.statusMessage);
        this._loadingNP = false;
        return;
      }
      searchRes.data.map(searchItemProps => {
        this.list.push(this.createSearchItem(searchItemProps));
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
    return new SearchItemModel({
      ...props,
      onSendMessagePress: this.onSendMessagePress,
      onItemPress: this.onSearchItemPress,
    });
  };

  public onFilterPress = async () => {
    this._filterModal.open();
  };

  public onSendMessagePress = async (user: shortUserDataType) => {
    const res = await loadData(UserDataProvider.IsChatExists, {
      myId: app.currentUser.userId,
      userId: user.userId,
    });
    if (res === null) {
      app.notification.showError(_.lang.warning, _.lang.servers_are_not_allowed);
      return;
    }

    if (res.statusCode !== 200) {
      app.notification.showError(_.lang.warning, res.statusMessage);
      return;
    }

    if (res.data) {
      app.navigator.goToChatScreen('private', user.userId);
      return;
    }

    this.sendMessageModal.userData = user;
    this.sendMessageModal.open();
  };

  public onItemLikePress = (authorId: number) => {
    const findedAnnouncement = Array.from(this.list.values()).find(el => el.authorId === authorId);
    if (findedAnnouncement !== undefined) {
      findedAnnouncement.liked = true;
      findedAnnouncement.forceUpdate();
    }
    this.forceUpdate();
  };

  public onSearchItemPress = async (user: searchItemDataType) => {
    this.profileDetailsModal.userData = user;
    this.profileDetailsModal.open();
  };

  public onProfileDetailsNextPress = async () => {
    const arrayOfUsers = Array.from(this.list.values());
    const currIndex = arrayOfUsers.findIndex(
      el => this._profileDetailsModal.userData?.authorId === el.authorId,
    );
    const nextUser = arrayOfUsers[currIndex + 1];
    if (nextUser !== undefined) {
      this._profileDetailsModal.userData = {
        authorAvatar: nextUser.authorAvatar,
        authorBirthDay: nextUser.authorBirthDay,
        authorGender: nextUser.authorGender,
        authorId: nextUser.authorId,
        authorName: nextUser.authorName,
        cityName: nextUser.cityName,
        countryName: nextUser.countryName,
        id: +nextUser.id,
        regionName: nextUser.regionName,
        text: nextUser.text,
        checked: nextUser.checked,
        liked: nextUser.liked,
        lastOnline: nextUser.lastOnline,
        lookingfor: nextUser.lookingfor,
        goal: nextUser.props.goal,
        blocked: nextUser.props.blocked,
        blockedBy: nextUser.props.blockedBy,
        online_status: nextUser.props.online_status,
        anon_photos: nextUser.props.anon_photos,
        photos: nextUser.props.photos,
        photoAccess: nextUser.props.photoAccess,
        alco: nextUser.props.alco,
        keepter: nextUser.props.keepter,
        kids: nextUser.props.kids,
        smoking: nextUser.props.smoking,
        sponsor: nextUser.props.sponsor,
        fromAge: nextUser.props.fromAge,
        toAge: nextUser.props.toAge,
      };
      this._profileDetailsModal.forceUpdate();
      const index = this.list.findIndex(item => item.id === nextUser.id);
      this.FlatListRef &&
        this.FlatListRef.scrollToIndex({index: Math.floor(index / 2), animated: true});
      SetVisit(nextUser.authorId, 0);
    }
  };

  public onProfileDetailsPrevPress = async () => {
    const arrayOfUsers = Array.from(this.list.values());
    const currIndex = arrayOfUsers.findIndex(
      el => this._profileDetailsModal.userData?.authorId === el.authorId,
    );
    const prevUser = arrayOfUsers[currIndex - 1];
    if (prevUser !== undefined) {
      this._profileDetailsModal.userData = {
        authorAvatar: prevUser.authorAvatar,
        authorBirthDay: prevUser.authorBirthDay,
        authorGender: prevUser.authorGender,
        authorId: prevUser.authorId,
        authorName: prevUser.authorName,
        cityName: prevUser.cityName,
        countryName: prevUser.countryName,
        id: +prevUser.id,
        regionName: prevUser.regionName,
        text: prevUser.text,
        checked: prevUser.checked,
        liked: prevUser.liked,
        lastOnline: prevUser.lastOnline,
        lookingfor: prevUser.lookingfor,
        goal: prevUser.props.goal,
        blocked: prevUser.props.blocked,
        blockedBy: prevUser.props.blockedBy,
        online_status: prevUser.props.online_status,
        anon_photos: prevUser.props.anon_photos,
        photos: prevUser.props.photos,
        photoAccess: prevUser.props.photoAccess,
        alco: prevUser.props.alco,
        keepter: prevUser.props.keepter,
        kids: prevUser.props.kids,
        smoking: prevUser.props.smoking,
        sponsor: prevUser.props.sponsor,
        fromAge: prevUser.props.fromAge,
        toAge: prevUser.props.toAge,
      };
      this._profileDetailsModal.forceUpdate();
      const index = this.list.findIndex(item => item.id === prevUser.id);
      this.FlatListRef &&
        this.FlatListRef.scrollToIndex({index: Math.floor(index / 2), animated: true});
      SetVisit(prevUser.authorId, 0);
    }
  };
}

export {SearchModel};
