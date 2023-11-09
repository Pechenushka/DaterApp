import {Alert} from 'react-native';
import {RewardedAd, RewardedAdEventType, TestIds} from 'react-native-google-mobile-ads';
import {ICONS} from '../../../constants/icons';
import {app} from '../../../Core/AppImpl';
import {BaseModel, baseModelProps} from '../../../Core/BaseModel';
import {_} from '../../../Core/Localization';
import {loadData, UserDataProvider} from '../../../DataProvider/UserDataProvider';
import {SimpleButtonModel} from '../Buttons/SimpleButtonModel';
import {PhotoReportModalModel} from './PhotoReportModalModel';

type photoViewerModelProps = baseModelProps & {};

class PhotoViewerModel extends BaseModel<photoViewerModelProps> {
  private _visible: boolean = false;
  private _closePreviewButton: SimpleButtonModel;
  private _reportButton: SimpleButtonModel;
  private _reportModal: PhotoReportModalModel;
  private _makeRequestButton: SimpleButtonModel;
  private _watchVideoButton: SimpleButtonModel;
  private _photoUrl: string | undefined = '';
  private _anonMode: boolean = false;
  private _anonPhoto: boolean = false;
  private _authorId: number = -1;
  private _rewardCount: number = 0;
  private timeoutId: any = null;

  private adUnitId = __DEV__ ? TestIds.REWARDED : 'ca-app-pub-6052303679653895/6928475667';
  private rewarded = RewardedAd.createForAdRequest(this.adUnitId, {
    requestNonPersonalizedAdsOnly: true,
  });

  private unsubscribeLoaded = this.rewarded.addAdEventListener(RewardedAdEventType.LOADED, () => {
    app.addImpression = true;
    if (this.timeoutId !== null) {
      clearTimeout(this.timeoutId);
      this.timeoutId = null;
    }
    this.rewarded.show();
    this._makeRequestButton.disabled = false;
  });
  private unsubscribeEarned = this.rewarded.addAdEventListener(
    RewardedAdEventType.EARNED_REWARD,
    reward => {
      this.rewardCount += 1;
      this._watchVideoButton.disabled = false;
    },
  );

  constructor(props: photoViewerModelProps) {
    super(props);

    this._closePreviewButton = new SimpleButtonModel({
      id: '_closePreviewButton',
      onPress: this.close,
      icon: ICONS.closeIcon,
    });

    this._reportButton = new SimpleButtonModel({
      id: '_reportButton',
      onPress: this.onReportPress,
      icon: ICONS.reportIconGray,
    });

    this._makeRequestButton = new SimpleButtonModel({
      id: '_makeRequestButton',
      onPress: this.onMakeRequestPress,
      text: _.lang.make_request,
    });

    this._watchVideoButton = new SimpleButtonModel({
      id: '_watchVideoButton',
      onPress: this.onWatchVideoPress,
      text: _.lang.watch_video,
    });
    this._reportModal = new PhotoReportModalModel({
      id: '_reportModal',
      photoUrl: '',
    });
  }

  public get visible() {
    return this._visible;
  }

  public set visible(Val) {
    if (this._visible === Val) {
      return;
    }
    this._visible = Val;
    this.forceUpdate();
  }

  public get anonMode() {
    return this._anonMode;
  }

  public get anonPhoto() {
    return this._anonPhoto;
  }

  public get photoUrl() {
    return this._photoUrl;
  }

  public get rewardCount() {
    return this._rewardCount;
  }

  public set rewardCount(Val) {
    this._rewardCount = Val;
    this.forceUpdate();
  }

  public set photoUrl(Val) {
    this._photoUrl = Val;
    this.forceUpdate();
  }

  public get closePreviewButton() {
    return this._closePreviewButton;
  }

  public get reportButton() {
    return this._reportButton;
  }

  public get reportModal() {
    return this._reportModal;
  }

  public get makeRequestButton() {
    return this._makeRequestButton;
  }

  public get watchVideoButton() {
    return this._watchVideoButton;
  }

  public open = async (photoUrl: string, anonMode: boolean, authorId: number) => {
    this._photoUrl = photoUrl;
    this._anonMode = anonMode;
    this._authorId = authorId;
    this._anonPhoto = anonMode;
    if (anonMode && authorId !== undefined && authorId > 0) {
      const secRes = await loadData(UserDataProvider.GetUrlOfAnonPhoto, {
        bluredUrl: photoUrl,
        authorId: authorId,
      });
      if (secRes === null) {
        app.notification.showError(_.lang.warning, _.lang.something_went_wrong);
        return;
      }

      if (secRes.statusCode !== 200) {
        app.notification.showError(_.lang.warning, secRes.statusMessage);
        return;
      }
      if (secRes.data.access) {
        this._photoUrl = secRes.data.url;
        this._anonMode = false;
      }
    }
    this.visible = true;
  };

  public close = async () => {
    this.visible = false;
    this.unsubscribeLoaded();
    this.unsubscribeEarned();
  };

  public onReportPress = async () => {
    this.reportModal.photoUrl = this.photoUrl !== undefined ? this.photoUrl : '';
    this.reportModal.open();
  };

  public onWatchVideoPress = async () => {
    this._watchVideoButton.disabled = true;
    this.rewarded.load();
    this.timeoutId = setTimeout(() => {
      this._watchVideoButton.disabled = false;
      app.notification.showError(_.lang.oops, _.lang.cant_load_video);
    }, 15000);
  };

  public onMakeRequestPress = async () => {
    if (this._authorId && this._authorId > 0) {
      this.makeRequestButton.disabled = true;
      const res = await loadData(UserDataProvider.RequestAccesToAnonPhoto, {
        authorId: this._authorId,
      });

      if (res === null) {
        app.notification.showError(_.lang.warning, _.lang.something_went_wrong);
        this.makeRequestButton.disabled = false;
        return;
      }

      if (res.statusCode !== 200) {
        app.notification.showError(_.lang.warning, res.statusMessage);
        this.makeRequestButton.disabled = false;
        return;
      }
      this.rewardCount -= 1;
      app.notification.showSuccess(_.lang.success, _.lang.you_successfully_requested_access);
      this.makeRequestButton.disabled = false;
      return;
    }
  };
}

export {PhotoViewerModel};
