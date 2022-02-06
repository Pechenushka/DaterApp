import {Alert} from 'react-native';
import {ICONS} from '../../constants/icons';
import {app} from '../../Core/AppImpl';
import {BaseModel, baseModelProps} from '../../Core/BaseModel';
import {userDetailsDataType} from '../../Core/DataTypes/BaseTypes';
import {loadData, UserDataProvider} from '../../DataProvider/UserDataProvider';
import {SimpleButtonModel} from '../Components/Buttons/SimpleButtonModel';

type profileDetailsModelProps = baseModelProps & {
  userId: number;
};

class ProfileDetailsModel extends BaseModel<profileDetailsModelProps> {
  private _loading: boolean = false;
  private _userInfo: userDetailsDataType | null = null;
  private _modalVisible: boolean = false;
  private _closeFullScreenButton: SimpleButtonModel;

  constructor(props: profileDetailsModelProps) {
    super(props);

    this._closeFullScreenButton = new SimpleButtonModel({
      id: '_closeFullScreenButton',
      onPress: this.closeFullScreenModal,
      icon: ICONS.deleteIcon,
    });
  }

  public get userId() {
    return this.props.userId;
  }

  public get closeFullScreenButton() {
    return this._closeFullScreenButton;
  }

  public set userId(Val) {
    this.props.userId = Val;
  }

  public get userInfo() {
    return this._userInfo;
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

  public get modalVisible() {
    return this._modalVisible;
  }

  public set modalVisible(Val) {
    if (this._modalVisible === Val) {
      return;
    }
    this._modalVisible = Val;
    this.forceUpdate();
  }

  public loadProfile = async (userId: number) => {
    this.loading = true;
    this.userId = userId;
    const profileRes = await loadData(UserDataProvider.GetUserDatails, {userId});
    if (profileRes === null) {
      Alert.alert('Warning', 'Something went wrong, check your internet connection');
      app.navigator.toGoBack();
      return;
    }

    if (profileRes.statusCode !== 200) {
      Alert.alert('Warning', profileRes.statusMessage);
      app.navigator.toGoBack();
      return;
    }

    this._userInfo = profileRes.data;
    this.loading = false;
  };

  public openFullScreenModal = async () => {
    this.modalVisible = true;
  };

  public closeFullScreenModal = async () => {
    this.modalVisible = false;
  };
}

export {ProfileDetailsModel};
