import {ScrollView} from 'react-native-gesture-handler';
import {ICONS} from '../../constants/icons';
import {app} from '../../Core/AppImpl';
import {BaseModel, baseModelProps} from '../../Core/BaseModel';
import {searchItemDataType} from '../../Core/DataTypes/BaseTypes';
import {_} from '../../Core/Localization';
import {loadData, UserDataProvider} from '../../DataProvider/UserDataProvider';
import {SimpleButtonModel} from '../Components/Buttons/SimpleButtonModel';
import {ReportModalModel} from '../ProfileDetailsModels/ReportModalModel';
import {SendMessageModalModel} from './SendMessageModalModel';

type profileDetailsModalModelProps = baseModelProps & {
  onLikedPress: (announcementId: number) => void;
  onNextPress: () => void;
  onPrevPress: () => void;
};

class ProfileDetailsModalModel extends BaseModel<profileDetailsModalModelProps> {
  private _closeButton: SimpleButtonModel;
  private _prevButton: SimpleButtonModel;
  private _nextButton: SimpleButtonModel;
  private _visible: boolean = false;

  private _reportButton: SimpleButtonModel;
  private _messageButton: SimpleButtonModel;
  private _likeButton: SimpleButtonModel;
  private _sendMessageModal: SendMessageModalModel;
  private _reportModal: ReportModalModel;

  private _userData: searchItemDataType | null = null;

  public scrollRef: ScrollView | null = null;

  constructor(props: profileDetailsModalModelProps) {
    super(props);
    this._closeButton = new SimpleButtonModel({
      id: '_closeButton',
      onPress: this.onCloseButtonPress,
      icon: ICONS.closeIcon,
    });

    this._prevButton = new SimpleButtonModel({
      id: '_prevButton',
      onPress: this.onPrevPress,
      text: '<',
    });

    this._nextButton = new SimpleButtonModel({
      id: '_nextButton',
      onPress: this.onNextPress,
      text: '>',
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
    });
    this._likeButton = new SimpleButtonModel({
      id: '_likeButton',
      onPress: this.onLikeButtonPress,
      icon: ICONS.heartIcon,
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

  public get closeButton() {
    return this._closeButton;
  }

  public get nextButton() {
    return this._nextButton;
  }

  public get prevButton() {
    return this._prevButton;
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

  public get userData() {
    return this._userData;
  }

  public set userData(Val) {
    if (this._userData === Val) {
      return;
    }

    this._userData = Val;
    if (this._userData !== null) {
      if (this._userData.liked) {
        this._likeButton.disabled = true;
        this._likeButton.icon = ICONS.heartIconRed;
      }

      if (!this._userData.liked) {
        this._likeButton.disabled = false;
        this._likeButton.icon = ICONS.heartIcon;
      }
      this._messageButton.disabled = this._userData.blockedBy;
      this._reportModal.avatar = this._userData.authorAvatar;
      this._reportModal.userId = this._userData.authorId;
      this._reportModal.name = this._userData.authorName;
      this._reportModal.gender = this._userData.authorGender;
    }
  }

  public get reportButton() {
    return this._reportButton;
  }

  public get messageButton() {
    return this._messageButton;
  }

  public get likeButton() {
    return this._likeButton;
  }

  public get sendMessageModal() {
    return this._sendMessageModal;
  }

  public get reportModal() {
    return this._reportModal;
  }

  public open = async () => {
    this.visible = true;
  };

  public close = async () => {
    this.visible = false;
  };

  public onCloseButtonPress = async () => {
    this.close();
  };

  public onReportButtonPress = async () => {
    this._reportModal.open();
  };

  public onMessageButtonPress = async () => {
    this._messageButton.disabled = true;
    const res = await loadData(UserDataProvider.IsChatExists, {
      myId: app.currentUser.userId,
      userId: this.userData?.authorId,
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
      app.navigator.goToChatScreen('private', this.userData?.authorId || -1);
      this._messageButton.disabled = false;
      return;
    }

    this.sendMessageModal.userData = {
      avatar: this.userData ? this.userData.authorAvatar : '',
      gender: this.userData ? this.userData.authorGender : 'male',
      name: this.userData ? this.userData.authorName : '',
      userId: this.userData ? this.userData.authorId : -1,
    };
    this.sendMessageModal.open();
    this._messageButton.disabled = false;
  };

  public onLikeButtonPress = async () => {
    this.likeButton.disabled = true;
    const likeBody = {
      myId: app.currentUser.userId,
      userToId: this.userData?.authorId,
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
    this.props.onLikedPress && this.props.onLikedPress(this.userData?.authorId || -1);
    this.forceUpdate();
  };

  public onNextPress = () => {
    this.props.onNextPress && this.props.onNextPress();
    this.scrollRef && this.scrollRef?.scrollTo({animated: true, x: 0, y: 0});
  };

  public onPrevPress = () => {
    this.props.onPrevPress && this.props.onPrevPress();
    this.scrollRef && this.scrollRef?.scrollTo({animated: true, x: 0, y: 0});
  };
}

export {ProfileDetailsModalModel};
