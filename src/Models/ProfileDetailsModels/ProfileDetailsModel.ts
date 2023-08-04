import {Alert} from 'react-native';
import {ICONS} from '../../constants/icons';
import {app} from '../../Core/AppImpl';
import {BaseModel, baseModelProps} from '../../Core/BaseModel';
import {userDetailsDataType} from '../../Core/DataTypes/BaseTypes';
import {_} from '../../Core/Localization';
import {loadData, UserDataProvider} from '../../DataProvider/UserDataProvider';
import {SimpleButtonModel} from '../Components/Buttons/SimpleButtonModel';
import {SendMessageModalModel} from '../SearchModels/SendMessageModalModel';
import {ReportModalModel} from './ReportModalModel';

type profileDetailsModelProps = baseModelProps & {
  userId: number;
};

class ProfileDetailsModel extends BaseModel<profileDetailsModelProps> {
  private _loading: boolean = false;
  private _userInfo: userDetailsDataType | null = null;
  private _modalVisible: boolean = false;
  private _closeFullScreenButton: SimpleButtonModel;
  private _reportButton: SimpleButtonModel;
  private _blockButton: SimpleButtonModel;
  private _unblockButton: SimpleButtonModel;
  private _messageButton: SimpleButtonModel;
  private _likeButton: SimpleButtonModel;
  private _backButton: SimpleButtonModel;
  private _sendMessageModal: SendMessageModalModel;
  private _reportModal: ReportModalModel;

  constructor(props: profileDetailsModelProps) {
    super(props);

    this._closeFullScreenButton = new SimpleButtonModel({
      id: '_closeFullScreenButton',
      onPress: this.closeFullScreenModal,
      icon: ICONS.deleteIcon,
    });

    this._blockButton = new SimpleButtonModel({
      id: '_blockButton',
      onPress: this.onBlockButtonPress,
      icon: ICONS.BlockIcon,
      text: _.lang.block_user,
    });
    this._unblockButton = new SimpleButtonModel({
      id: '_unblockButton',
      onPress: this.onUnblockButtonPress,
      icon: ICONS.BlockIcon,
      text: _.lang.unblock_user,
    });
    this._reportButton = new SimpleButtonModel({
      id: '_reportButton',
      onPress: this.onReportButtonPress,
      icon: ICONS.ReportIcon,
      text: _.lang.report_user,
    });
    this._messageButton = new SimpleButtonModel({
      id: '_messageButton',
      onPress: this.onMessageButtonPress,
      icon: ICONS.chatIcon,
      text: _.lang.send_message,
    });
    this._likeButton = new SimpleButtonModel({
      id: '_likeButton',
      onPress: this.onLikeButtonPress,
      icon: ICONS.heartIcon,
      text: _.lang.like,
    });

    this._backButton = new SimpleButtonModel({
      id: '_backButton',
      onPress: this.onBackPress,
      icon: ICONS.BackArrowIcon,
    });

    this._sendMessageModal = new SendMessageModalModel({id: '_sendMessageModal'});

    this._reportModal = new ReportModalModel({
      id: '_reportModal',
      avatar: '',
      gender: 'male',
      name: '',
      userId: -1,
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

  public get reportButton() {
    return this._reportButton;
  }

  public get blockButton() {
    return this._blockButton;
  }

  public get unblockButton() {
    return this._unblockButton;
  }

  public get messageButton() {
    return this._messageButton;
  }

  public get likeButton() {
    return this._likeButton;
  }

  public get backButton() {
    return this._backButton;
  }

  public get sendMessageModal() {
    return this._sendMessageModal;
  }

  public get reportModal() {
    return this._reportModal;
  }

  public loadProfile = async (userId: number) => {
    this.loading = true;
    this.userId = userId;
    const profileRes = await loadData(UserDataProvider.GetUserDatails, {
      userId,
      myId: app.currentUser.userId,
    });
    if (profileRes === null) {
      app.notification.showError(_.lang.warning, _.lang.servers_are_not_allowed);
      app.navigator.toGoBack();
      return;
    }

    if (profileRes.statusCode !== 200) {
      app.notification.showError(_.lang.warning, profileRes.statusMessage);
      app.navigator.toGoBack();
      return;
    }

    this._userInfo = profileRes.data;
    if (profileRes.data.liked) {
      this._likeButton.disabled = true;
      this._likeButton.icon = ICONS.heartIconRed;
    }

    if (!profileRes.data.liked) {
      this._likeButton.disabled = false;
      this._likeButton.icon = ICONS.heartIcon;
    }

    if (profileRes.data.blocked) {
      this._blockButton.disabled = true;
    }

    this._reportModal.avatar = profileRes.data.avatar;
    this._reportModal.userId = profileRes.data.id;
    this._reportModal.name = profileRes.data.name;
    this._reportModal.gender = profileRes.data.gender;

    this.loading = false;
  };

  public openFullScreenModal = async () => {
    this.modalVisible = true;
  };

  public closeFullScreenModal = async () => {
    this.modalVisible = false;
  };

  public onBlockButtonPress = async () => {
    this._blockButton.disabled = true;
    const res = await loadData(UserDataProvider.BlockUser, {
      userId: app.currentUser.userId,
      blockedUserId: this.userId,
    });
    if (res === null) {
      app.notification.showError(_.lang.warning, _.lang.servers_are_not_allowed);
      this._blockButton.disabled = false;
      return;
    }

    if (res.statusCode !== 200) {
      app.notification.showError(_.lang.warning, res.statusMessage);
      this._blockButton.disabled = false;
      return;
    }
    if (this.userInfo !== null) {
      this.userInfo.blocked = true;
      this.forceUpdate();
    }
    this._blockButton.disabled = false;
  };

  public onUnblockButtonPress = async () => {
    this._unblockButton.disabled = true;
    const res = await loadData(UserDataProvider.UnblockUser, {
      userId: app.currentUser.userId,
      blockedUserId: this.userId,
    });
    if (res === null) {
      app.notification.showError(_.lang.warning, _.lang.servers_are_not_allowed);
      this._unblockButton.disabled = false;
      return;
    }

    if (res.statusCode !== 200) {
      app.notification.showError(_.lang.warning, res.statusMessage);
      this._unblockButton.disabled = false;
      return;
    }

    if (this.userInfo !== null) {
      this.userInfo.blocked = false;
      this._blockButton.disabled = false;
      this.forceUpdate();
    }

    this._unblockButton.disabled = false;
  };

  public onReportButtonPress = async () => {
    this._reportModal.open();
  };

  public onMessageButtonPress = async () => {
    this._messageButton.disabled = true;
    const res = await loadData(UserDataProvider.IsChatExists, {
      myId: app.currentUser.userId,
      userId: this.userId,
    });
    if (res === null) {
      app.notification.showError(_.lang.warning, _.lang.servers_are_not_allowed);
      this._messageButton.disabled = false;
      return;
    }

    if (res.statusCode !== 200) {
      app.notification.showError(_.lang.warning, res.statusMessage);
      this._messageButton.disabled = false;
      return;
    }

    if (res.data) {
      app.navigator.goToChatScreen('private', this.userId);
      this._messageButton.disabled = false;
      return;
    }

    this.sendMessageModal.userData = {
      avatar: this._userInfo ? this._userInfo.avatar : '',
      gender: this._userInfo ? this._userInfo.gender : 'male',
      name: this._userInfo ? this._userInfo.name : '',
      userId: this._userInfo ? this._userInfo.id : -1,
    };
    this.sendMessageModal.open();
    this._messageButton.disabled = false;
  };

  public onLikeButtonPress = async () => {
    this.likeButton.disabled = true;
    const likeBody = {
      myId: app.currentUser.userId,
      userToId: this.userId,
    };
    const res = await loadData(UserDataProvider.SetUserLike, likeBody);
    if (res === null) {
      app.notification.showError(_.lang.warning, _.lang.servers_are_not_allowed);
      this.likeButton.disabled = false;
      return;
    }

    if (res.statusCode !== 200) {
      app.notification.showError(_.lang.warning, res.statusMessage);
      this.likeButton.disabled = false;
      return;
    }
    this.likeButton.icon = ICONS.heartIconRed;
    this.forceUpdate();
  };

  public onBackPress = async () => {
    app.navigator.toGoBack();
  };
}

export {ProfileDetailsModel};
