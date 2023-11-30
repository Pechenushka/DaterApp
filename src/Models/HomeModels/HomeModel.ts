import {ICONS} from '../../constants/icons';
import {BaseModel, baseModelProps} from '../../Core/BaseModel';
import {SimpleButtonModel} from '../Components/Buttons/SimpleButtonModel';
import {launchImageLibrary} from 'react-native-image-picker';
import {app} from '../../Core/AppImpl';
import {appSettings} from '../../Common/AppSettings';
import {loadData, UserDataProvider} from '../../DataProvider/UserDataProvider';
import {_} from '../../Core/Localization';
import {Alert, Linking} from 'react-native';
import {LoginScreen} from '../../Screens/LoginScreen';
import {GuestsScreen} from '../../Screens/GuestsScreen';
import {HelpScreen} from '../../Screens/HelpScreen';
import crashlytics from '@react-native-firebase/crashlytics';

type homeModelProps = baseModelProps & {};

class HomeModel extends BaseModel<homeModelProps> {
  private _toChats: SimpleButtonModel;
  private _toRequests: SimpleButtonModel;
  private _toLikes: SimpleButtonModel;
  private _toMyAnnouncement: SimpleButtonModel;
  private _toHelpScreen: SimpleButtonModel;
  private _toSearch: SimpleButtonModel;
  private _toGuests: SimpleButtonModel;
  private _toPhotoGallery: SimpleButtonModel;
  private _toPhotoAccessRequests: SimpleButtonModel;
  private _userStatus: boolean | null | undefined = true;
  private _deleteAvatar: SimpleButtonModel;
  private _supportButton: SimpleButtonModel;
  private _byemecoffeButton: SimpleButtonModel;

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

    this._toPhotoGallery = new SimpleButtonModel({
      id: '_toPhotoGallery',
      onPress: this.toPhotoGalleryPress,
      text: _.lang.photo_gallery,
      icon: ICONS.addPhotoIcon,
    });

    this._toPhotoAccessRequests = new SimpleButtonModel({
      id: '_toPhotoAccessRequests',
      onPress: this.toPhotoAccesRequestsPress,
      text: _.lang.photo_access_requests,
      icon: ICONS.anonymusIconBlack,
    });

    this._toHelpScreen = new SimpleButtonModel({
      id: '_toHelpScreen',
      onPress: this.toHelpPress,
      text: _.lang.help,
      icon: ICONS.helpIcon,
    });

    this._toSearch = new SimpleButtonModel({
      id: '_toSearch',
      onPress: this.toSearchPress,
      text: _.lang.search,
      icon: ICONS.searchIconBlack,
    });

    this._toGuests = new SimpleButtonModel({
      id: '_toGuests',
      onPress: this.toGuestsPress,
      text: _.lang.guests,
      icon: ICONS.guestsIcon,
    });

    this._deleteAvatar = new SimpleButtonModel({
      id: '_deleteAvatar',
      onPress: this.onDeleteAvatarPress,
      icon: ICONS.deleteIcon,
    });

    this._supportButton = new SimpleButtonModel({
      id: '_supportButton',
      onPress: this.onSupportButtonPress,
      text: _.lang.support_us,
    });

    this._byemecoffeButton = new SimpleButtonModel({
      id: '_byemecoffeButton',
      onPress: this.onByMeCoffeButtonPress,
      text: _.lang.bymecoffe,
    });

    this.updateRequestCount();
  }

  public get toChats() {
    return this._toChats;
  }

  public get deleteAvatar() {
    return this._deleteAvatar;
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

  public get toPhotoGallery() {
    return this._toPhotoGallery;
  }

  public get toPhotoAccessRequests() {
    return this._toPhotoAccessRequests;
  }

  public get toHelpScreen() {
    return this._toHelpScreen;
  }

  public get toGuests() {
    return this._toGuests;
  }

  public get toSearch() {
    return this._toSearch;
  }

  public get supportButton() {
    return this._supportButton;
  }

  public get byemecoffeButton() {
    return this._byemecoffeButton;
  }

  public toResponsesPress = () => {
    console.log('toResponses');
  };

  public toHelpPress = () => {
    app.navigator.navigate(HelpScreen);
  };

  public toLikesPress = () => {
    app.navigator.goToLikesScreen();
  };

  public toMyAnnouncementPress = () => {
    app.navigator.goToMyAnnouncementScreen();
  };

  public toPhotoGalleryPress = () => {
    app.navigator.goToPhotoGallaryScreen();
  };

  public toPhotoAccesRequestsPress = () => {
    app.navigator.goToPhotoAccesRequestsScreen();
  };

  public toSearchPress = () => {
    app.navigator.goToSearchFeedScreen();
  };

  public toGuestsPress = () => {
    app.navigator.navigate(GuestsScreen);
  };

  public toChatsPress = () => {
    app.navigator.goToChatListScreen();
  };

  public onSupportButtonPress = () => {
    Linking.openURL('https://www.patreon.com/SMSoft');
  };

  public onByMeCoffeButtonPress = () => {
    Linking.openURL('https://www.buymeacoffee.com/smsoft');
  };

  public changeAvatar = async () => {
    try {
      const pickedAvatar = await launchImageLibrary({
        mediaType: 'photo',
      });

      if (pickedAvatar.assets !== undefined && pickedAvatar.assets.length > 0) {
        if (
          pickedAvatar.assets[0].fileName &&
          pickedAvatar.assets[0].fileName.split('.').pop() === 'gif'
        ) {
          app.notification.showError(_.lang.warning, 'Wrong avatar format');
          return;
        }
        if (pickedAvatar.assets[0].uri !== undefined) {
          let newImageUri = '';
          if (pickedAvatar.assets[0].uri.includes('file:///')) {
            newImageUri = pickedAvatar.assets[0].uri;
          } else {
            newImageUri = 'file:///' + pickedAvatar.assets[0].uri.split('file:/').join('');
          }

          let data = new FormData();
          data.append('image', {
            uri: pickedAvatar.assets[0].uri,
            type: pickedAvatar.assets[0].type,
            name: pickedAvatar.assets[0].fileName,
          });
          data.append('userId', app.currentUser.userId);
          data.append('token', app.currentUser.token);

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
            this.checkUserStatus();
          }
        }
      }
    } catch (error: any) {
      crashlytics().recordError(error, 'changeAvatar error');
      app.notification.showError(_.lang.warning, _.lang.something_went_wrong);
    }
  };

  public onDeleteAvatarPress = async () => {
    try {
      Alert.alert(_.lang.warning, _.lang.delete_avatar_question, [
        {
          text: _.lang.no,
          onPress: () => {},
          style: 'cancel',
        },
        {
          text: _.lang.yes,
          onPress: async () => {
            await loadData(UserDataProvider.DeleteUserAvatar, {});
            app.currentUser.avatar = '';
            this.forceUpdate();
          },
        },
      ]);
    } catch (error) {
      console.log(error);
    }
  };

  public checkUserStatus = async () => {
    const res = await loadData(UserDataProvider.GetUserStatus, {userId: app.currentUser.userId});
    if (res !== null) {
      if (res.statusCode === 200) {
        this._userStatus = res.data.status;
        this.forceUpdate();
        return;
      }

      if (res.statusCode === 404) {
        app.navigator.navigate(LoginScreen);
        app.currentUser.removeItemFromAsyncStorage('secureUserData');
        app.currentUser.gender = undefined;
        app.currentUser.userId = -1;
        app.currentUser.userName = undefined;
        app.currentUser.email = undefined;
        app.currentUser.phone = undefined;
        app.currentUser.birthDate = undefined;
        app.currentUser.telegram = undefined;
        app.currentUser.location = undefined;
        app.currentUser.fcm = undefined;
        app.currentUser.token = undefined;
        return;
      }
      this._userStatus = undefined;
      this.forceUpdate();
      return;
    }
    this._userStatus = res;
    this.forceUpdate();
  };

  public updateRequestCount = async () => {
    const requestRes = await loadData(UserDataProvider.GetRequestsCount, {});
    if (requestRes === null) {
      app.notification.showError(_.lang.warning, _.lang.something_went_wrong);
      return;
    }

    if (requestRes.statusCode !== 200) {
      app.notification.showError(_.lang.warning, requestRes.statusMessage);
      return;
    }

    this._toPhotoAccessRequests.counterModel.count = requestRes.data;
  };
}

export {HomeModel};
