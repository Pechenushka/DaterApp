import {ICONS} from '../../constants/icons';
import {BaseModel, baseModelProps} from '../../Core/BaseModel';
import {SimpleButtonModel} from '../Components/Buttons/SimpleButtonModel';
import {pickSingle, types} from 'react-native-document-picker';
import {app} from '../../Core/AppImpl';
import {appSettings} from '../../Common/AppSettings';
import {loadData, UserDataProvider} from '../../DataProvider/UserDataProvider';
import {_} from '../../Core/Localization';
import {Alert} from 'react-native';

type homeModelProps = baseModelProps & {};

class HomeModel extends BaseModel<homeModelProps> {
  private _toChats: SimpleButtonModel;
  private _toRequests: SimpleButtonModel;
  private _toLikes: SimpleButtonModel;
  private _toMyAnnouncement: SimpleButtonModel;
  private _toHelpScreen: SimpleButtonModel;
  private _toSearch: SimpleButtonModel;
  private _userStatus: boolean | null = true;
  constructor(props: homeModelProps) {
    super(props);
    this._toChats = new SimpleButtonModel({
      id: '_toChats',
      onPress: this.toChatsPress,
      text: _.lang.chats,
      icon: ICONS.chatIcon,
    });
    this._toRequests = new SimpleButtonModel({
      id: '_toRequests',
      onPress: this.toResponsesPress,
      text: _.lang.requests,
      icon: ICONS.requestsIcon,
    });
    this._toLikes = new SimpleButtonModel({
      id: '_toLikes',
      onPress: this.toLikesPress,
      text: _.lang.likes,
      icon: ICONS.heartIcon,
    });
    this._toMyAnnouncement = new SimpleButtonModel({
      id: '_toMyAnnouncement',
      onPress: this.toMyAnnouncementPress,
      text: _.lang.profile_settings,
      icon: ICONS.docIcon,
    });
    this._toHelpScreen = new SimpleButtonModel({
      id: '_toHelpScreen',
      onPress: this.toResponsesPress,
      text: _.lang.help,
      icon: ICONS.helpIcon,
    });
    this._toSearch = new SimpleButtonModel({
      id: '_toSearch',
      onPress: this.toSearchPress,
      text: _.lang.search,
      icon: ICONS.searchIconGray,
    });
  }

  public get toChats() {
    return this._toChats;
  }

  public get userStatus() {
    return this._userStatus;
  }

  public get toRequests() {
    return this._toRequests;
  }

  public get toLikes() {
    return this._toLikes;
  }

  public get toMyAnnouncement() {
    return this._toMyAnnouncement;
  }

  public get toHelpScreen() {
    return this._toHelpScreen;
  }

  public get toSearch() {
    return this._toSearch;
  }

  public toResponsesPress = () => {
    console.log('toResponses');
  };

  public toLikesPress = () => {
    app.navigator.goToLikesScreen();
  };

  public toMyAnnouncementPress = () => {
    app.navigator.goToMyAnnouncementScreen();
  };

  public toSearchPress = () => {
    app.navigator.goToSearchScreen();
  };

  public toChatsPress = () => {
    app.navigator.goToChatListScreen();
  };

  public changeAvatar = async () => {
    try {
      const pickedAvatar = await pickSingle({allowMultiSelection: false, type: [types.images]});
      console.log(pickedAvatar.name);
      if (pickedAvatar.name.split('.').pop() === 'gif') {
        Alert.alert('Warning', 'wrong avatar format');
        return;
      }
      let data = new FormData();
      data.append('image', {uri: pickedAvatar.uri, type: 'image/png', name: pickedAvatar.name});
      data.append('userId', app.currentUser.userId);
      const response = await fetch(`${appSettings.apiEndpoint}users/set-avatar`, {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        body: data,
      });
      if (response.ok) {
        const result = await response.json();
        app.currentUser.avatar = result.data.url;
        this.forceUpdate();
      }
    } catch (error) {
      console.log(error);
    }
  };

  public checkUserStatus = async () => {
    const res = await loadData(UserDataProvider.GetUserStatus, {userId: app.currentUser.userId});
    if (res !== null) {
      this._userStatus = res.data.status;
      this.forceUpdate();
      return;
    }
    this._userStatus = res;
    this.forceUpdate();
  };
}

export {HomeModel};
