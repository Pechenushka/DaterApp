import {Alert} from 'react-native';
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

  public onMenuPress = async () => {
    app.navigator.openDrawer();
  };

  public onRequestorTaberChange = async (tab: number) => {
    this._list = [];
    this._fileters.toMe = tab === 0;
    this.load();
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
    const res = await loadData(UserDataProvider.GetPhotoAccessRequest, {...this._fileters});
    if (res === null) {
      Alert.alert(_.lang.warning, _.lang.something_went_wrong);
      return;
    }

    if (res.statusCode !== 200) {
      Alert.alert(_.lang.warning, res.statusMessage);
      return;
    }
    res.data.forEach(request => {
      this._list.push(this.createAccessRequestItem(request));
    });
    this.loading = false;
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
