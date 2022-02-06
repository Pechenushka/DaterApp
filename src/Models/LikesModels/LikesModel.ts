import {Alert, NativeScrollEvent, NativeSyntheticEvent} from 'react-native';
import {app} from '../../Core/AppImpl';
import {BaseModel, baseModelProps} from '../../Core/BaseModel';
import {searchItemDataType} from '../../Core/DataTypes/BaseTypes';
import {_} from '../../Core/Localization';
import {loadData, UserDataProvider} from '../../DataProvider/UserDataProvider';
import {TaberModel} from '../Components/Filters/TaberModel';
import {SendMessageModalModel, shortUserDataType} from '../SearchModels/SendMessageModalModel';
import {LikeItemModel} from './LikeItemModel';

type likesModelProps = baseModelProps & {};

class LikesModel extends BaseModel<likesModelProps> {
  private _tabs: TaberModel;
  private _list: Map<number, LikeItemModel> = new Map();
  private _currentTab: string = _.lang.my_likes;
  private _loading: boolean = false;
  private _sendMessageModal: SendMessageModalModel;
  private _limit: number = 20;
  private _offset: number = 0;
  private _loadingNP: boolean = false;

  constructor(props: likesModelProps) {
    super(props);
    this._tabs = new TaberModel({
      id: '_tabs',
      tabs: [_.lang.my_likes, _.lang.me_liked, _.lang.matches],
      onChangeSelection: this.onTabChange,
    });
    this._sendMessageModal = new SendMessageModalModel({id: '_sendMessageModal'});
  }

  public get tabs() {
    return this._tabs;
  }

  public get list() {
    return this._list;
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

  public get sendMessageModal() {
    return this._sendMessageModal;
  }

  public onTabChange = async (activeIndex: number) => {
    this._currentTab = this._tabs.tabs[activeIndex];
    this.loadNededList();
    app.bottomNavigation.updateCounters();
  };

  public createLikeItem = (likeItemProps: searchItemDataType) => {
    return new LikeItemModel({...likeItemProps, onItemReject: this.onItemReject, onSendMessagePress: this.onSendMessagePress});
  };

  public loadMyLikes = async () => {
    this.loading = true;
    const likeFilterBody = {
      userId: app.currentUser.userId,
      limit: this._limit,
      offset: this._offset,
    };
    const likesRes = await loadData(UserDataProvider.GetUserLikes, likeFilterBody);
    if (likesRes === null) {
      Alert.alert('Warning', _.lang.servers_are_not_allowed);
      this.loading = false;
      return;
    }
    if (likesRes.statusCode !== 200) {
      Alert.alert('Warning', likesRes.statusMessage);
      this.loading = false;
      return;
    }
    this.list.clear();
    likesRes.data.map(likeItemProps => {
      this.list.set(likeItemProps.id, this.createLikeItem(likeItemProps));
    });
    this.loading = false;
  };

  ///////////////////////////////////
  public loadMyLikesNP = async () => {
    const elemsInScreen = this._offset + this._limit;
    if (!this._loadingNP && Array.from(this.list).length === elemsInScreen) {
      this._loadingNP = true;
      this._offset += this._limit;
      const likeFilterBody = {
        userId: app.currentUser.userId,
        limit: this._limit,
        offset: this._offset,
      };
      const likesRes = await loadData(UserDataProvider.GetUserLikes, likeFilterBody);
      if (likesRes === null) {
        Alert.alert('Warning', _.lang.servers_are_not_allowed);
        this._loadingNP = false;
        return;
      }
      if (likesRes.statusCode !== 200) {
        Alert.alert('Warning', likesRes.statusMessage);
        this._loadingNP = false;
        return;
      }
      likesRes.data.map(likeItemProps => {
        this.list.set(likeItemProps.id, this.createLikeItem(likeItemProps));
      });
      this.forceUpdate();
      this._loadingNP = false;
    }
  };

  ///////////////////////////////////
  public loadLikesToMe = async () => {
    this.loading = true;
    const likeFilterBody = {
      userId: app.currentUser.userId,
      limit: this._limit,
      offset: this._offset,
    };
    const likesRes = await loadData(UserDataProvider.GetLikesToUser, likeFilterBody);
    if (likesRes === null) {
      Alert.alert('Warning', _.lang.servers_are_not_allowed);
      this.loading = false;
      return;
    }
    if (likesRes.statusCode !== 200) {
      Alert.alert('Warning', likesRes.statusMessage);
      this.loading = false;
      return;
    }
    this.list.clear();
    likesRes.data.map(likeItemProps => {
      this.list.set(likeItemProps.id, this.createLikeItem(likeItemProps));
    });
    this.loading = false;
  };

  public loadLikesToMeNP = async () => {
    const elemsInScreen = this._offset + this._limit;
    if (!this._loadingNP && Array.from(this.list).length === elemsInScreen) {
      this._loadingNP = true;
      this._offset += this._limit;
      const likeFilterBody = {
        userId: app.currentUser.userId,
        limit: this._limit,
        offset: this._offset,
      };
      const likesRes = await loadData(UserDataProvider.GetLikesToUser, likeFilterBody);
      if (likesRes === null) {
        Alert.alert('Warning', _.lang.servers_are_not_allowed);
        this._loadingNP = false;
        return;
      }
      if (likesRes.statusCode !== 200) {
        Alert.alert('Warning', likesRes.statusMessage);
        this._loadingNP = false;
        return;
      }
      likesRes.data.map(likeItemProps => {
        this.list.set(likeItemProps.id, this.createLikeItem(likeItemProps));
      });
      this.forceUpdate();
      this._loadingNP = false;
    }
  };

  ///////////////////////////////////
  public loadMatches = async () => {
    this.loading = true;
    const likeFilterBody = {
      userId: app.currentUser.userId,
      limit: this._limit,
      offset: this._offset,
    };
    const likesRes = await loadData(UserDataProvider.GetUserMatches, likeFilterBody);
    if (likesRes === null) {
      Alert.alert('Warning', _.lang.servers_are_not_allowed);
      this.loading = false;
      return;
    }
    if (likesRes.statusCode !== 200) {
      Alert.alert('Warning', likesRes.statusMessage);
      this.loading = false;
      return;
    }
    this.list.clear();
    likesRes.data.map(likeItemProps => {
      this.list.set(likeItemProps.id, this.createLikeItem(likeItemProps));
    });
    this.loading = false;
  };

  public loadMatchesNP = async () => {
    const elemsInScreen = this._offset + this._limit;
    if (!this._loadingNP && Array.from(this.list).length === elemsInScreen) {
      this._loadingNP = true;
      this._offset += this._limit;
      const likeFilterBody = {
        userId: app.currentUser.userId,
        limit: this._limit,
        offset: this._offset,
      };
      const likesRes = await loadData(UserDataProvider.GetUserMatches, likeFilterBody);
      if (likesRes === null) {
        Alert.alert('Warning', _.lang.servers_are_not_allowed);
        this._loadingNP = false;
        return;
      }
      if (likesRes.statusCode !== 200) {
        Alert.alert('Warning', likesRes.statusMessage);
        this._loadingNP = false;
        return;
      }
      likesRes.data.map(likeItemProps => {
        this.list.set(likeItemProps.id, this.createLikeItem(likeItemProps));
      });
      this.forceUpdate();
      this._loadingNP = false;
    }
  };

  public loadNededList = async () => {
    this._offset = 0;
    switch (this._currentTab) {
      case _.lang.matches:
        this.loadMatches();
        break;

      case _.lang.me_liked:
        this.loadLikesToMe();
        break;

      case _.lang.my_likes:
        this.loadMyLikes();
        break;
      default:
        break;
    }
  };

  public loadNededNextPage = async () => {
    switch (this._currentTab) {
      case _.lang.matches:
        this.loadMatchesNP();
        break;

      case _.lang.me_liked:
        this.loadLikesToMeNP();
        break;

      case _.lang.my_likes:
        this.loadMyLikesNP();
        break;
      default:
        break;
    }
  };

  public onScroll = async (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const event = e.nativeEvent;
    const bottomBorder = event.contentOffset.y + event.layoutMeasurement.height;
    if (event.contentSize.height - bottomBorder < 200) {
      await this.loadNededNextPage();
    }
  };

  public onItemReject = async (itemId: number) => {
    this._list.delete(+itemId);
    this.forceUpdate();
  };

  public onSendMessagePress = async (user: shortUserDataType) => {
    const res = await loadData(UserDataProvider.IsChatExists, {myId: app.currentUser.userId, userId: user.userId});
    if (res === null) {
      Alert.alert('Warning', _.lang.servers_are_not_allowed);
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

export {LikesModel};
