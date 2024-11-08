import {Alert} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {ICONS} from '../../constants/icons';
import {app} from '../../Core/AppImpl';
import {BaseModel, baseModelProps} from '../../Core/BaseModel';
import {_} from '../../Core/Localization';
import {SimpleButtonModel} from '../Components/Buttons/SimpleButtonModel';
import {RewardedAd, RewardedAdEventType, TestIds} from 'react-native-google-mobile-ads';
import {appSettings} from '../../Common/AppSettings';
import {loadData, UserDataProvider} from '../../DataProvider/UserDataProvider';
import crashlytics from '@react-native-firebase/crashlytics';

type photoGalleryModelProps = baseModelProps & {};

class PhotoGalleryModel extends BaseModel<photoGalleryModelProps> {
  private _menuButton: SimpleButtonModel;
  private _addPhotoButton: SimpleButtonModel;
  private _addAnonPhotoButton: SimpleButtonModel;
  private _photoList: Array<{url: string; checked: boolean | null}> = [];
  private _photoAnonList: Array<{url: string; checked: boolean | null}> = [];
  private _showModal: boolean = false;
  private _showPreviewModal: boolean = false;
  private _closeButton: SimpleButtonModel;
  private _closePreviewButton: SimpleButtonModel;
  private _watchAddButton: SimpleButtonModel;
  private _chooseAnonPhotoButton: SimpleButtonModel;
  private _deleteAvatar: SimpleButtonModel;
  private _changeAvatar: SimpleButtonModel;
  private _revardCount: number = 0;
  private _fullscreenUrl: string = '';
  private timeoutId: any = null;

  private adUnitId = __DEV__ ? TestIds.REWARDED : 'ca-app-pub-6052303679653895/6928475667';
  private rewarded = RewardedAd.createForAdRequest(this.adUnitId, {
    requestNonPersonalizedAdsOnly: true,
  });

  private unsubscribeLoaded = this.rewarded.addAdEventListener(RewardedAdEventType.LOADED, () => {
    try {
      app.addImpression = true;
      if (this.timeoutId !== null) {
        clearTimeout(this.timeoutId);
        this.timeoutId = null;
      }
      this.rewarded.show();
      this._watchAddButton.disabled = false;
    } catch (error) {
      console.log('Error', error);
    }
  });
  private unsubscribeEarned = this.rewarded.addAdEventListener(
    RewardedAdEventType.EARNED_REWARD,
    reward => {
      this.revardCount += 1;
    },
  );

  constructor(props: photoGalleryModelProps) {
    super(props);
    this._menuButton = new SimpleButtonModel({
      id: '_menuButton',
      onPress: this.onMenuPress,
      icon: ICONS.menuButtonWhiteIcon,
    });

    this._addPhotoButton = new SimpleButtonModel({
      id: '_addPhotoButton',
      onPress: this.onAddPhotoPress,
      icon: ICONS.addPhotoThumb,
    });

    this._addAnonPhotoButton = new SimpleButtonModel({
      id: '_addAnonPhotoButton',
      onPress: this.onAddAnonPhotoPress,
      icon: ICONS.addPhotoThumb,
    });

    this._closeButton = new SimpleButtonModel({
      id: '_closeButton',
      onPress: this.closeModal,
      icon: ICONS.deleteIcon,
    });

    this._closePreviewButton = new SimpleButtonModel({
      id: '_closePreviewButton',
      onPress: this.closePreviewModal,
      icon: ICONS.deleteIcon,
    });

    this._watchAddButton = new SimpleButtonModel({
      id: '_watchAddButton',
      onPress: this.showRewardedAdd,
      text: _.lang.watch_video,
    });

    this._chooseAnonPhotoButton = new SimpleButtonModel({
      id: '_chooseAnonPhotoButton',
      onPress: this.onChooseAnonPhotoPress,
      icon: ICONS.addPhotoIconWhite,
    });
    this._deleteAvatar = new SimpleButtonModel({
      id: '_deleteAvatar',
      onPress: this.onDeleteAvatarPress,
      icon: ICONS.deleteIcon,
    });
    this._changeAvatar = new SimpleButtonModel({
      id: '_changeAvatar',
      onPress: this.changeAvatar,
      icon: ICONS.editIcon,
    });
    this.onFocus();
  }

  public get menuButton() {
    return this._menuButton;
  }

  public get addPhotoButton() {
    return this._addPhotoButton;
  }

  public get photoList() {
    return this._photoList;
  }

  public get deleteAvatar() {
    return this._deleteAvatar;
  }

  public get changeAvatarButton() {
    return this._changeAvatar;
  }

  public get photoAnonList() {
    return this._photoAnonList;
  }

  public get addAnonPhotoButton() {
    return this._addAnonPhotoButton;
  }

  public get showModal() {
    return this._showModal;
  }

  public get showPreviewModal() {
    return this._showPreviewModal;
  }

  public get closeButton() {
    return this._closeButton;
  }

  public get closePreviewButton() {
    return this._closePreviewButton;
  }

  public get watchAddButton() {
    return this._watchAddButton;
  }

  public get chooseAnonPhotoButton() {
    return this._chooseAnonPhotoButton;
  }

  public get revardCount() {
    return this._revardCount;
  }

  public get fullscreenUrl() {
    return this._fullscreenUrl;
  }

  public set revardCount(Val) {
    this._revardCount = Val;
    this.forceUpdate();
  }

  public openModal = () => {
    this._showModal = true;
    this.forceUpdate();
  };

  public closeModal = () => {
    this._showModal = false;
    this.forceUpdate();
  };

  public openPreviewModal = async (url: string) => {
    // call api to check permision
    this._fullscreenUrl = url;
    this._showPreviewModal = true;
    this.forceUpdate();
    const res = await loadData(UserDataProvider.GetUrlOfAnonPhoto, {
      bluredUrl: url,
      authorId: app.currentUser.userId,
    });
    if (res === null) {
      app.notification.showError(_.lang.warning, _.lang.something_went_wrong);
      return;
    }

    if (res.statusCode !== 200) {
      app.notification.showError(_.lang.warning, res.statusMessage);
      return;
    }
    const givedUrl = res.data.url;
    this._fullscreenUrl = givedUrl;
    this._showPreviewModal = true;
    this.forceUpdate();
  };

  public closePreviewModal = () => {
    this._showPreviewModal = false;
    this.forceUpdate();
  };

  public onMenuPress = async () => {
    app.navigator.openDrawer();
  };

  public onAddPhotoPress = async () => {
    try {
      const pickedPhoto = await launchImageLibrary({mediaType: 'photo'});
      if (pickedPhoto.assets !== undefined && pickedPhoto.assets.length > 0) {
        if (
          pickedPhoto.assets[0].fileName &&
          pickedPhoto.assets[0].fileName.split('.').pop() === 'gif'
        ) {
          app.notification.showError(_.lang.warning, 'wrong photo format');
          return;
        }
        if (pickedPhoto.assets[0].uri !== undefined) {
          let newImageUri = '';
          if (pickedPhoto.assets[0].uri.includes('file:///')) {
            newImageUri = pickedPhoto.assets[0].uri;
          } else {
            newImageUri = 'file:///' + pickedPhoto.assets[0].uri.split('file:/').join('');
          }

          let data = new FormData();
          data.append('image', {
            uri: pickedPhoto.assets[0].uri,
            type: pickedPhoto.assets[0].type,
            name: pickedPhoto.assets[0].fileName,
          });
          data.append('userId', app.currentUser.userId);
          data.append('token', app.currentUser.token);
          const response = await fetch(`${appSettings.apiEndpoint}users/add-photo`, {
            method: 'POST',
            headers: {
              'Content-Type': 'multipart/form-data',
            },
            body: data,
          });
          const res = await response.json();
          if (res === null) {
            app.notification.showError(_.lang.warning, _.lang.something_went_wrong);
            return;
          }

          if (res.statusCode !== 200) {
            app.notification.showError(_.lang.warning, res.statusMessage);
            return;
          }
          if (res.statusCode === 200) {
            this._photoList.push({checked: false, url: res.data.url});
            this.forceUpdate();
          }
        }
      }
    } catch (error: any) {
      crashlytics().recordError(error, 'onAddPhotoPress error');
      app.notification.showError(_.lang.warning, _.lang.something_went_wrong);
    }
  };

  public onAddAnonPhotoPress = async () => {
    this.openModal();
  };

  public onChooseAnonPhotoPress = async () => {
    try {
      this._chooseAnonPhotoButton.disabled = true;
      const pickedPhoto = await launchImageLibrary({mediaType: 'photo'});
      if (pickedPhoto.assets !== undefined && pickedPhoto.assets.length > 0) {
        if (
          pickedPhoto.assets[0].fileName &&
          pickedPhoto.assets[0].fileName.split('.').pop() === 'gif'
        ) {
          app.notification.showError(_.lang.warning, 'wrong photo format');
          this._chooseAnonPhotoButton.disabled = false;
          return;
        }

        if (pickedPhoto.assets[0].uri !== undefined) {
          let newImageUri = '';
          if (pickedPhoto.assets[0].uri.includes('file:///')) {
            newImageUri = pickedPhoto.assets[0].uri;
          } else {
            newImageUri = 'file:///' + pickedPhoto.assets[0].uri.split('file:/').join('');
          }

          let data = new FormData();
          data.append('image', {
            uri: pickedPhoto.assets[0].uri,
            type: pickedPhoto.assets[0].type,
            name: pickedPhoto.assets[0].fileName,
          });
          data.append('userId', app.currentUser.userId);
          data.append('token', app.currentUser.token);

          const response = await fetch(`${appSettings.apiEndpoint}users/add-anon-photo`, {
            method: 'POST',
            headers: {
              'Content-Type': 'multipart/form-data',
            },
            body: data,
          });

          const res = await response.json();
          if (res === null) {
            app.notification.showError(_.lang.warning, _.lang.something_went_wrong);
            this._chooseAnonPhotoButton.disabled = false;
            return;
          }

          if (res.statusCode !== 200) {
            app.notification.showError(_.lang.warning, res.statusMessage);
            this._chooseAnonPhotoButton.disabled = false;
            return;
          }
          if (res.statusCode === 200) {
            this._photoAnonList.push({checked: false, url: res.data.url});
            this.revardCount -= 1;
            this._chooseAnonPhotoButton.disabled = false;
            this.forceUpdate();
          }
        }
      }
    } catch (error: any) {
      crashlytics().recordError(error, 'onAddPhotoPress error');
      app.notification.showError(_.lang.warning, _.lang.something_went_wrong);
      this._chooseAnonPhotoButton.disabled = false;
    }
  };

  public deletePhotoFromList = async (index: number, photoUrl: string) => {
    const res = await loadData(UserDataProvider.DeleteUserPhoto, {urlToDelete: photoUrl});
    if (res === null) {
      app.notification.showError(_.lang.warning, _.lang.something_went_wrong);
      return;
    }

    if (res.statusCode !== 200) {
      app.notification.showError(_.lang.warning, res.statusMessage);
      return;
    }
    this._photoList.splice(index, 1);
    this.forceUpdate();
  };

  public deleteAnonPhotoFromList = async (index: number, photoUrl: string) => {
    const res = await loadData(UserDataProvider.DeleteUserAnonPhoto, {urlToDelete: photoUrl});
    if (res === null) {
      app.notification.showError(_.lang.warning, _.lang.something_went_wrong);
      return;
    }

    if (res.statusCode !== 200) {
      app.notification.showError(_.lang.warning, res.statusMessage);
      return;
    }
    this._photoAnonList.splice(index, 1);
    this.forceUpdate();
  };

  public showRewardedAdd = () => {
    try {
      this._watchAddButton.disabled = true;
      this.rewarded.load();
      this.timeoutId = setTimeout(() => {
        this._watchAddButton.disabled = false;
        app.notification.showError(_.lang.oops, _.lang.cant_load_video);
      }, 15000);
    } catch (error) {
      console.log('ERROR', error);
    }
  };

  public onBlur = async () => {
    this.closeModal();
    this.closePreviewModal();
    this.unsubscribeLoaded();
    this.unsubscribeEarned();
  };

  public onFocus = async () => {
    const anonPhotosRes = await loadData(UserDataProvider.GetUserAnonPhotos, {});
    const userPhotosRes = await loadData(UserDataProvider.GetUserPhotos, {});

    if (userPhotosRes === null) {
      app.notification.showError(_.lang.warning, _.lang.something_went_wrong);
      return;
    }

    if (userPhotosRes.statusCode !== 200) {
      app.notification.showError(_.lang.warning, userPhotosRes.statusMessage);
      return;
    }

    if (anonPhotosRes === null) {
      app.notification.showError(_.lang.warning, _.lang.something_went_wrong);
      return;
    }

    if (anonPhotosRes.statusCode !== 200) {
      app.notification.showError(_.lang.warning, anonPhotosRes.statusMessage);
      return;
    }
    this._photoAnonList = anonPhotosRes.data.list;
    this._photoList = userPhotosRes.data.list;
    this.forceUpdate();
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
            this.forceUpdate();
          }
        }
      }
    } catch (error: any) {
      crashlytics().recordError(error, 'changeAvatar error');
      app.notification.showError(_.lang.warning, _.lang.something_went_wrong);
    }
  };
}

export {PhotoGalleryModel};
