import {FlatList, NativeScrollEvent, NativeSyntheticEvent} from 'react-native';
import {SetVisit} from '../../Common/Helpers';
import {ICONS} from '../../constants/icons';
import {app} from '../../Core/AppImpl';
import {BaseModel, baseModelProps} from '../../Core/BaseModel';
import {guestsItemDataType} from '../../Core/DataTypes/BaseTypes';
import {_} from '../../Core/Localization';
import {loadData, UserDataProvider} from '../../DataProvider/UserDataProvider';
import {SimpleButtonModel} from '../Components/Buttons/SimpleButtonModel';
import {TaberModel} from '../Components/Filters/TaberModel';
import {GuestItemModel} from './GuestItemModel';

type guestsModelProps = baseModelProps & {};

class GuestsModel extends BaseModel<guestsModelProps> {
  private _backButton: SimpleButtonModel;
  private _list: Array<GuestItemModel> = [];
  private _requestorTaber: TaberModel;

  private _initialLoad: boolean = true;
  private _loadingNP: boolean = false;
  private _limit: number = 30;
  private _offset: number = 0;
  private _myGuests: boolean = true;
  private _refreshing: boolean = false;

  public FlatListRef: FlatList | null = null;

  constructor(props: guestsModelProps) {
    super(props);

    this._backButton = new SimpleButtonModel({
      id: '_backButton',
      onPress: this.onBackPress,
      icon: ICONS.BackArrowIconWhite,
    });

    this._requestorTaber = new TaberModel({
      id: '_requestorTaber',
      tabs: [_.lang.my_guests, _.lang.my_visits],
      onChangeSelection: this.onRequestorTaberChange,
    });

    this.load();
  }

  public get backButton() {
    return this._backButton;
  }

  public get initialLoad() {
    return this._initialLoad;
  }

  public set initialLoad(Val) {
    this._initialLoad = Val;
    this.forceUpdate();
  }

  public get list() {
    return this._list;
  }

  public get requestorTaber() {
    return this._requestorTaber;
  }

  public get myGuests() {
    return this._myGuests;
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

  public onBackPress = async () => {
    app.navigator.goToMainProfileScreen();
  };

  public load = async () => {
    this._offset = 0;
    const postBody = {
      userId: app.currentUser.userId,
      limit: this._limit,
      offset: this._offset,
    };
    const res = await loadData(
      this._myGuests ? UserDataProvider.GetGuests : UserDataProvider.GetVisits,
      postBody,
    );
    if (res === null) {
      app.notification.showError(_.lang.warning, _.lang.servers_are_not_allowed);
      this._initialLoad = false;
      return;
    }
    if (res.statusCode !== 200) {
      app.notification.showError(_.lang.warning, res.statusMessage);
      this._initialLoad = false;
      return;
    }
    this._list = [];
    res.data.map(guestItemProps => {
      this.list.push(this.createGuestItem(guestItemProps));
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
    const postBody = {
      userId: app.currentUser.userId,
      limit: this._limit,
      offset: this._offset,
    };
    const res = await loadData(
      this._myGuests ? UserDataProvider.GetGuests : UserDataProvider.GetVisits,
      postBody,
    );
    if (res === null) {
      app.notification.showError(_.lang.warning, _.lang.servers_are_not_allowed);
      this._initialLoad = false;
      this.refreshing = false;
      return;
    }
    if (res.statusCode !== 200) {
      app.notification.showError(_.lang.warning, res.statusMessage);
      this._initialLoad = false;
      this.refreshing = false;
      return;
    }
    this._list = [];
    res.data.map(guestItemProps => {
      this.list.push(this.createGuestItem(guestItemProps));
    });

    this.FlatListRef?.scrollToOffset({offset: 0, animated: true});
    this.refreshing = false;
    this.forceUpdate();
  };

  public loadMore = async () => {
    const elemsInScreen = this._offset + this._limit;
    if (!this._loadingNP && Array.from(this.list).length === elemsInScreen) {
      this._loadingNP = true;
      this._offset += this._limit;
      const postBody = {
        userId: app.currentUser.userId,
        limit: this._limit,
        offset: this._offset,
      };
      const res = await loadData(
        this._myGuests ? UserDataProvider.GetGuests : UserDataProvider.GetVisits,
        postBody,
      );
      if (res === null) {
        app.notification.showError(_.lang.warning, _.lang.servers_are_not_allowed);
        this._loadingNP = false;
        return;
      }
      if (res.statusCode !== 200) {
        app.notification.showError(_.lang.warning, res.statusMessage);
        this._loadingNP = false;
        return;
      }
      res.data.map(guestItemProps => {
        this.list.push(this.createGuestItem(guestItemProps));
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

  public createGuestItem = (item: guestsItemDataType) => {
    return new GuestItemModel({...item, onItemPress: this.onItemPress});
  };

  public onRequestorTaberChange = async (tab: number) => {
    this.initialLoad = true;
    this._list = [];
    this._myGuests = tab === 0;
    this.load();
  };

  public onItemPress = async (guestId: number) => {
    app.navigator.goToProfileDetailsScreen(guestId);
    SetVisit(guestId, 3);
  };
}

export {GuestsModel};
