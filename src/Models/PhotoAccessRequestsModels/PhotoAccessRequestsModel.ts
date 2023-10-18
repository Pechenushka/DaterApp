import {Alert, FlatList, NativeScrollEvent, NativeSyntheticEvent} from 'react-native';
import {ICONS} from '../../constants/icons';
import {app} from '../../Core/AppImpl';
import {BaseModel, baseModelProps} from '../../Core/BaseModel';
import {photoAccessRequestItem} from '../../Core/DataTypes/BaseTypes';
import {_} from '../../Core/Localization';
import {loadData, UserDataProvider} from '../../DataProvider/UserDataProvider';
import {SimpleButtonModel} from '../Components/Buttons/SimpleButtonModel';
import {TaberModel} from '../Components/Filters/TaberModel';
import {AccessRequestItemModel} from './AccessRequestItemModel';

type photoAccessRequestsModelProps = baseModelProps & {};

class PhotoAccessRequestsModel extends BaseModel<photoAccessRequestsModelProps> {
  private _menuButton: SimpleButtonModel;
  private _list: Array<AccessRequestItemModel> = [];
  private _requestorTaber: TaberModel;
  private _statusTaber: TaberModel;
  private _fileters: {toMe: boolean; status: string} = {status: 'pending', toMe: true};
  private _loading: boolean = false;
  private _refreshing: boolean = false;
  public FlatListRef: FlatList | null = null;
  private _limit: number = 20;
  private _offset: number = 0;
  private _loadingNP: boolean = false;

  constructor(props: photoAccessRequestsModelProps) {
    super(props);

    this._menuButton = new SimpleButtonModel({
      id: '_menuButton',
      onPress: this.onMenuPress,
      icon: ICONS.menuButtonWhiteIcon,
    });

    this._requestorTaber = new TaberModel({
      id: '_requestorTaber',
      tabs: [_.lang.requests_to_me, _.lang.my_requests],
      onChangeSelection: this.onRequestorTaberChange,
    });

    this._statusTaber = new TaberModel({
      id: '_statusTaber',
      tabs: [_.lang.pending, _.lang.approved, _.lang.rejected],
      onChangeSelection: this.onStatusTaberChange,
    });

    this.load();
  }

  public get menuButton() {
    return this._menuButton;
  }

  public get requestorTaber() {
    return this._requestorTaber;
  }

  public get statusTaber() {
    return this._statusTaber;
  }

  public get loading() {
    return this._loading;
  }

  public set loading(Val) {
    this._loading = Val;
    this.forceUpdate();
  }

  public get list() {
    return this._list;
  }

  public get fileters() {
    return this._fileters;
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

  public onMenuPress = async () => {
    app.navigator.openDrawer();
  };

  public onRequestorTaberChange = async (tab: number) => {
    this._list = [];
    this._fileters.toMe = tab === 0;
    this.load();
    this.FlatListRef?.scrollToOffset({offset: 0, animated: true});
  };

  public onStatusTaberChange = async (tab: number) => {
    switch (tab) {
      case 0:
        this._fileters.status = 'pending';
        break;

      case 1:
        this._fileters.status = 'approved';
        break;

      case 2:
        this._fileters.status = 'rejected';
        break;

      default:
        break;
    }
    this._list = [];
    this.load();
  };

  public load = async () => {
    this.loading = true;
    const res = await loadData(UserDataProvider.GetPhotoAccessRequest, {
      ...this._fileters,
      limit: this._limit,
      offset: this._offset,
    });
    if (res === null) {
      app.notification.showError(_.lang.warning, _.lang.something_went_wrong);
      this.loading = false;
      return;
    }

    if (res.statusCode !== 200) {
      app.notification.showError(_.lang.warning, res.statusMessage);
      this.loading = false;
      return;
    }
    res.data.forEach(request => {
      this._list.push(this.createAccessRequestItem(request));
    });
    this.loading = false;
  };

  public update = async () => {
    if (this.refreshing) {
      return;
    }
    this.refreshing = true;
    this._offset = 0;
    this._list = [];
    await this.load();
    this.refreshing = false;
  };

  public loadNP = async () => {
    const elemsInScreen = this._offset + this._limit;
    if (!this._loadingNP && this.list.length === elemsInScreen) {
      this._loadingNP = true;
      this._offset += this._limit;
      const requestsFilterBody = {
        ...this._fileters,
        limit: this._limit,
        offset: this._offset,
      };
      const res = await loadData(UserDataProvider.GetPhotoAccessRequest, requestsFilterBody);
      if (res === null) {
        app.notification.showError(_.lang.warning, _.lang.something_went_wrong);
        this._loadingNP = false;
        return;
      }

      if (res.statusCode !== 200) {
        app.notification.showError(_.lang.warning, res.statusMessage);
        this._loadingNP = false;
        return;
      }
      res.data.forEach(request => {
        this._list.push(this.createAccessRequestItem(request));
      });
      this._loadingNP = false;
      this.forceUpdate();
    }
  };

  public onScroll = async (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const event = e.nativeEvent;
    const bottomBorder = event.contentOffset.y + event.layoutMeasurement.height;
    if (event.contentSize.height - bottomBorder < 200) {
      await this.loadNP();
    }
  };

  public createAccessRequestItem = (item: photoAccessRequestItem) => {
    return new AccessRequestItemModel({...item, deleteItemFromList: this.onItemDelete});
  };

  public onItemDelete = (id: number) => {
    const indexToDelete = this._list.findIndex(reqItem => reqItem.requestId === id);

    if (indexToDelete >= 0) {
      this._list.splice(indexToDelete, 1);
    }
    this.forceUpdate();
  };
}

export {PhotoAccessRequestsModel};
