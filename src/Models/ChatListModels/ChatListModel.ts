import {FlatList, NativeScrollEvent, NativeSyntheticEvent, RefreshControlProps} from 'react-native';
import {ICONS} from '../../constants/icons';
import {app} from '../../Core/AppImpl';
import {BaseModel, baseModelProps} from '../../Core/BaseModel';
import {chatItemDataType} from '../../Core/DataTypes/BaseTypes';
import {_} from '../../Core/Localization';
import {loadData, UserDataProvider} from '../../DataProvider/UserDataProvider';
import {SimpleButtonModel} from '../Components/Buttons/SimpleButtonModel';
import {ChatListItemModel, chatListItemType} from './ChatListItemModel';
import {TaberModel} from '../Components/Filters/TaberModel';

type chatListModelProps = baseModelProps & {};

class ChatListModel extends BaseModel<chatListModelProps> {
  private _tabs: TaberModel;
  private _loading: boolean = false;
  private _list: Array<ChatListItemModel> = [];
  private _menuButton: SimpleButtonModel;
  private _limit: number = 20;
  private _offset: number = 0;
  private _loadingNP: boolean = false;
  private _currentTab: string = _.lang.private;
  private _refreshing: boolean = false;
  public FlatListRef: FlatList | null = null;

  constructor(props: chatListModelProps) {
    super(props);
    this._menuButton = new SimpleButtonModel({
      id: '_menuButton',
      onPress: this.onMenuPress,
      icon: ICONS.menuButtonWhiteIcon,
    });
    this._tabs = new TaberModel({
      id: '_tabs',
      tabs: [_.lang.private, _.lang.public],
      onChangeSelection: this.onTabChange,
    });
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

  public get tabs() {
    return this._tabs;
  }

  public get list() {
    return this._list;
  }

  public get currentTab() {
    return this._currentTab;
  }

  public get menuButton() {
    return this._menuButton;
  }

  public onMenuPress = () => {
    app.navigator.openDrawer();
  };

  public update = async () => {
    if (this.refreshing) {
      return;
    }
    this.refreshing = true;
    this._offset = 0;
    switch (this._currentTab) {
      case _.lang.private:
        await this.updatePrivate();
        this.refreshing = false;
        break;

      case _.lang.public:
        await this.updatePublic();
        this.refreshing = false;
        break;

      default:
        break;
    }
  };

  public updatePrivate = async () => {
    const chatListFilterBody = {
      limit: this._limit,
      offset: this._offset,
    };

    const res = await loadData(UserDataProvider.GetUserChats, chatListFilterBody);
    if (res === null) {
      app.notification.showError(_.lang.warning, _.lang.servers_are_not_allowed);
      return;
    }
    if (res.statusCode !== 200) {
      app.notification.showError(_.lang.warning, res.statusMessage);
      return;
    }

    this._list = [];
    this.forceUpdate();
    this._list = res.data.map(chatItem => {
      return this.createChatItem(chatItem, 'private');
    });
    this.forceUpdate();
  };

  public updatePublic = async () => {
    const res = await loadData(UserDataProvider.GetPublicUserChats, {});
    if (res === null) {
      app.notification.showError(_.lang.warning, _.lang.servers_are_not_allowed);
      return;
    }
    if (res.statusCode !== 200) {
      app.notification.showError(_.lang.warning, res.statusMessage);
      return;
    }

    this._list = [];
    this.forceUpdate();
    const {city, region, country} = res.data;
    this.list.push(
      this.createChatItem(
        {
          avatar: '',
          chatHash: '',
          id: city.id,
          gender: null,
          lastMessage: city.lastMessage,
          lastMessageDate: city.lastMessageDate,
          name: city.name,
          online_status: false,
          unreadCount: 0,
          userId: 0,
        },
        'city',
      ),
    );

    this.list.push(
      this.createChatItem(
        {
          avatar: '',
          chatHash: '',
          id: region.id,
          gender: null,
          lastMessage: region.lastMessage,
          lastMessageDate: region.lastMessageDate,
          name: region.name,
          online_status: false,
          unreadCount: 0,
          userId: 0,
        },
        'region',
      ),
    );

    this.list.push(
      this.createChatItem(
        {
          avatar: '',
          chatHash: '',
          id: country.id,
          gender: null,
          lastMessage: country.lastMessage,
          lastMessageDate: country.lastMessageDate,
          name: country.name,
          online_status: false,
          unreadCount: 0,
          userId: 0,
        },
        'country',
      ),
    );
    this.forceUpdate();
  };

  public loadChatListNP = async () => {
    const elemsInScreen = this._offset + this._limit;
    if (!this._loadingNP && this.list.length === elemsInScreen) {
      this._loadingNP = true;
      this._offset += this._limit;
      const chatListFilterBody = {
        limit: this._limit,
        offset: this._offset,
      };
      const chatsRes = await loadData(UserDataProvider.GetUserChats, chatListFilterBody);
      if (chatsRes === null) {
        app.notification.showError(_.lang.warning, _.lang.servers_are_not_allowed);
        this._loadingNP = false;
        return;
      }
      if (chatsRes.statusCode !== 200) {
        app.notification.showError(_.lang.warning, chatsRes.statusMessage);
        this._loadingNP = false;
        return;
      }
      chatsRes.data.map(chatItemProps => {
        this.list.push(this.createChatItem(chatItemProps, 'private'));
      });
      this.forceUpdate();
      this._loadingNP = false;
    }
  };

  public loadChatList = async () => {
    if (this.loading) {
      return;
    }
    this._list = [];
    this.loading = true;
    this._offset = 0;
    const chatListFilterBody = {
      limit: this._limit,
      offset: this._offset,
    };
    const chatsRes = await loadData(UserDataProvider.GetUserChats, chatListFilterBody);
    if (chatsRes === null) {
      app.notification.showError(_.lang.warning, _.lang.servers_are_not_allowed);
      this.loading = false;
      return;
    }
    if (chatsRes.statusCode !== 200) {
      app.notification.showError(_.lang.warning, chatsRes.statusMessage);
      this.loading = false;
      return;
    }
    chatsRes.data.map(chatItemProps => {
      this.list.push(this.createChatItem(chatItemProps, 'private'));
    });
    this.loading = false;
  };

  public loadPublicChatList = async () => {
    if (this.loading) {
      return;
    }
    this.loading = true;

    const chatsRes = await loadData(UserDataProvider.GetPublicUserChats, {});
    if (chatsRes === null) {
      app.notification.showError(_.lang.warning, _.lang.servers_are_not_allowed);
      this.loading = false;
      return;
    }
    if (chatsRes.statusCode !== 200) {
      app.notification.showError(_.lang.warning, chatsRes.statusMessage);
      this.loading = false;
      return;
    }
    const {city, region, country} = chatsRes.data;
    this._list = [];
    this.list.push(
      this.createChatItem(
        {
          avatar: '',
          chatHash: '',
          id: city.id,
          gender: null,
          lastMessage: city.lastMessage,
          lastMessageDate: city.lastMessageDate,
          name: city.name,
          online_status: false,
          unreadCount: 0,
          userId: 0,
        },
        'city',
      ),
    );

    this.list.push(
      this.createChatItem(
        {
          avatar: '',
          chatHash: '',
          id: region.id,
          gender: null,
          lastMessage: region.lastMessage,
          lastMessageDate: region.lastMessageDate,
          name: region.name,
          online_status: false,
          unreadCount: 0,
          userId: 0,
        },
        'region',
      ),
    );

    this.list.push(
      this.createChatItem(
        {
          avatar: '',
          chatHash: '',
          id: country.id,
          gender: null,
          lastMessage: country.lastMessage,
          lastMessageDate: country.lastMessageDate,
          name: country.name,
          online_status: false,
          unreadCount: 0,
          userId: 0,
        },
        'country',
      ),
    );

    this.loading = false;
  };

  public loadNededList = async () => {
    this._offset = 0;
    switch (this._currentTab) {
      case _.lang.private:
        this.loadChatList();
        break;

      case _.lang.public:
        this.loadPublicChatList();
        break;

      default:
        break;
    }
    this.forceUpdate();
  };

  public createChatItem = (props: chatItemDataType, type: chatListItemType) => {
    return new ChatListItemModel({...props, type});
  };

  public loadNeededNP = async () => {
    switch (this._currentTab) {
      case _.lang.private:
        await this.loadChatListNP();
        break;

      case _.lang.public:
        await this.loadPublicChatList();
        break;
      default:
        break;
    }
  };

  public onScroll = async (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const event = e.nativeEvent;
    const bottomBorder = event.contentOffset.y + event.layoutMeasurement.height;
    if (event.contentSize.height - bottomBorder < 200) {
      await this.loadNeededNP();
    }
  };

  public onTabChange = async (activeIndex: number) => {
    this._currentTab = this._tabs.tabs[activeIndex];
    this.loadNededList();
    this.FlatListRef?.scrollToOffset({offset: 0, animated: true});
    app.bottomNavigation.updateCounters();
  };
}

export {ChatListModel};
