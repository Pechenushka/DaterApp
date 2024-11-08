import {Alert} from 'react-native';
import {SetVisit} from '../../Common/Helpers';
import {ICONS} from '../../constants/icons';
import {app} from '../../Core/AppImpl';
import {BaseModel, baseModelProps} from '../../Core/BaseModel';
import {_} from '../../Core/Localization';
import {loadData, UserDataProvider} from '../../DataProvider/UserDataProvider';
import {SimpleButtonModel} from '../Components/Buttons/SimpleButtonModel';
import {genderEnum} from '../Components/Inputs/GenderSvitcherModel';
import {shortUserDataType} from '../SearchModels/SendMessageModalModel';

type likeItemModelProps = baseModelProps & {
  authorAvatar: string;
  authorBirthDay: number;
  authorGender: genderEnum;
  authorId: number;
  authorName: string;
  cityName: string;
  countryName: string;
  id: number;
  regionName: string;
  text: string;
  checked: boolean;
  lastOnline: number;
  liked: boolean;
  lookingfor: number[];
  goal: number[];
  online_status: boolean;
  tab: number;
  onItemRemoveFromList: (itemId: number) => Promise<void>;
  onSendMessagePress: (user: shortUserDataType) => Promise<void>;
};

class LikeItemModel extends BaseModel<likeItemModelProps> {
  private _likeButton: SimpleButtonModel;
  private _rejectButton: SimpleButtonModel;
  private _writeButton: SimpleButtonModel;

  constructor(props: likeItemModelProps) {
    super(props);
    this._likeButton = new SimpleButtonModel({
      id: '_likeButton',
      onPress: this.onLikeButtonPress,
      icon: ICONS.heartIcon,
    });
    this._rejectButton = new SimpleButtonModel({
      id: '_rejectButton',
      onPress: this.onRejectButtonPress,
      icon: ICONS.deleteIcon,
    });
    this._writeButton = new SimpleButtonModel({
      id: '_writeButton',
      onPress: this.onWriteButtonPress,
      icon: ICONS.chatIcon,
    });
  }

  public get likeButton() {
    return this._likeButton;
  }

  public get writeButton() {
    return this._writeButton;
  }

  public get rejectButton() {
    return this._rejectButton;
  }

  public get authorAvatar() {
    return this.props.authorAvatar;
  }

  public get lastOnline() {
    return this.props.lastOnline;
  }

  public get authorBirthDay() {
    return this.props.authorBirthDay;
  }

  public get authorGender() {
    return this.props.authorGender;
  }

  public get authorId() {
    return this.props.authorId;
  }

  public get authorName() {
    return this.props.authorName;
  }

  public get cityName() {
    return this.props.cityName;
  }

  public get countryName() {
    return this.props.countryName;
  }

  public get meetingid() {
    return this.props.id;
  }

  public get regionName() {
    return this.props.regionName;
  }

  public get text() {
    return this.props.text;
  }

  public get checked() {
    return this.props.checked;
  }

  public get liked() {
    return this.props.liked;
  }

  public get lookingfor() {
    return this.props.lookingfor;
  }

  public get online_status() {
    return this.props.online_status;
  }

  public get goal() {
    return _.lang.goals[this.props.goal[0]];
  }

  public get tab() {
    return this.props.tab;
  }

  public onItemPress = async () => {
    app.navigator.goToProfileDetailsScreen(this.authorId);
    SetVisit(this.authorId, 1);
  };

  public onLikeButtonPress = async () => {
    const likeBody = {
      myId: app.currentUser.userId,
      userToId: this.authorId,
    };
    const res = await loadData(UserDataProvider.SetUserLike, likeBody);
    if (res === null) {
      app.notification.showError(_.lang.warning, _.lang.servers_are_not_allowed);
      return;
    }

    if (res.statusCode !== 200) {
      app.notification.showError(_.lang.warning, res.statusMessage);
      return;
    }
    this.props.onItemRemoveFromList(this.meetingid);
    this.forceUpdate();
  };

  public onWriteButtonPress = async () => {
    this._writeButton.disabled = true;
    this.props.onSendMessagePress &&
      (await this.props.onSendMessagePress({
        avatar: this.authorAvatar,
        gender: this.authorGender,
        name: this.authorName,
        userId: this.authorId,
      }));
    this._writeButton.disabled = false;
  };

  public onRejectButtonPress = async () => {
    const rejectBody = {
      myId: app.currentUser.userId,
      userToId: this.authorId,
    };
    const res = await loadData(UserDataProvider.SetUserReject, rejectBody);
    if (res === null) {
      app.notification.showError(_.lang.warning, _.lang.servers_are_not_allowed);
      return;
    }

    if (res.statusCode !== 200) {
      app.notification.showError(_.lang.warning, res.statusMessage);
      return;
    }
    this.props.onItemRemoveFromList(this.meetingid);
  };
}

export {LikeItemModel};
