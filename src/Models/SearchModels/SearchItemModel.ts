import {Alert} from 'react-native';
import {SetVisit} from '../../Common/Helpers';
import {ICONS} from '../../constants/icons';
import {app} from '../../Core/AppImpl';
import {BaseModel, baseModelProps} from '../../Core/BaseModel';
import {searchItemDataType} from '../../Core/DataTypes/BaseTypes';
import {_} from '../../Core/Localization';
import {loadData, UserDataProvider} from '../../DataProvider/UserDataProvider';
import {SimpleButtonModel} from '../Components/Buttons/SimpleButtonModel';
import {shortUserDataType} from './SendMessageModalModel';

type searchItemModelProps = baseModelProps &
  searchItemDataType & {
    onSendMessagePress: (user: shortUserDataType) => Promise<void>;
    onItemPress: (user: searchItemDataType) => Promise<void>;
  };

class SearchItemModel extends BaseModel<searchItemModelProps> {
  private _likeButton: SimpleButtonModel;
  private _writeButton: SimpleButtonModel;

  constructor(props: searchItemModelProps) {
    super(props);
    this._likeButton = new SimpleButtonModel({
      id: '_likeButton',
      onPress: this.onLikeButtonPress,
      icon: ICONS.heartIconWhite,
    });
    this._writeButton = new SimpleButtonModel({
      id: '_writeButton',
      onPress: this.onWriteButtonPress,
      icon: ICONS.chatIconWhite,
    });
  }

  public get likeButton() {
    return this._likeButton;
  }

  public get writeButton() {
    return this._writeButton;
  }

  public get lastOnline() {
    return this.props.lastOnline;
  }

  public get authorAvatar() {
    return this.props.authorAvatar;
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

  public set liked(Val) {
    this.props.liked = Val;
    this.forceUpdate();
  }

  public get lookingfor() {
    return this.props.lookingfor;
  }

  public get online_status() {
    return this.props.online_status;
  }

  public get sponsor() {
    return this.props.sponsor;
  }

  public get keepter() {
    return this.props.keepter;
  }

  public get goal() {
    return _.lang.goals[this.props.goal[0]];
  }

  public onItemPress = async () => {
    this.props.onItemPress &&
      this.props.onItemPress({
        authorAvatar: this.props.authorAvatar,
        authorBirthDay: this.props.authorBirthDay,
        authorGender: this.props.authorGender,
        authorId: this.props.authorId,
        authorName: this.props.authorName,
        cityName: this.props.cityName,
        countryName: this.props.countryName,
        id: this.props.id,
        regionName: this.props.regionName,
        text: this.props.text,
        checked: this.props.checked,
        liked: this.props.liked,
        lastOnline: this.props.lastOnline,
        lookingfor: this.props.lookingfor,
        goal: this.props.goal,
        blocked: this.props.blocked,
        blockedBy: this.props.blockedBy,
        online_status: this.props.online_status,
        anon_photos: this.props.anon_photos,
        photos: this.props.photos,
        photoAccess: this.props.photoAccess,
        alco: this.props.alco,
        keepter: this.props.keepter,
        kids: this.props.kids,
        smoking: this.props.smoking,
        sponsor: this.props.sponsor,
        fromAge: this.props.fromAge,
        toAge: this.props.toAge,
      });
    SetVisit(this.props.authorId, 0);
    // app.navigator.goToProfileDetailsScreen(this.authorId);
  };

  public onLikeButtonPress = async () => {
    this.likeButton.disabled = true;
    const likeBody = {
      myId: app.currentUser.userId,
      userToId: this.authorId,
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
    this.props.liked = true;
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
}

export {SearchItemModel};
