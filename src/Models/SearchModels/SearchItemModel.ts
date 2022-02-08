import {Alert} from 'react-native';
import {ICONS} from '../../constants/icons';
import {app} from '../../Core/AppImpl';
import {BaseModel, baseModelProps} from '../../Core/BaseModel';
import {loadData, UserDataProvider} from '../../DataProvider/UserDataProvider';
import {SimpleButtonModel} from '../Components/Buttons/SimpleButtonModel';
import {genderEnum} from '../Components/Inputs/GenderSvitcherModel';
import {shortUserDataType} from './SendMessageModalModel';

type searchItemModelProps = baseModelProps & {
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
  liked: boolean;
  lastOnline: number;
  onSendMessagePress: (user: shortUserDataType) => Promise<void>;
};

class SearchItemModel extends BaseModel<searchItemModelProps> {
  private _likeButton: SimpleButtonModel;
  private _writeButton: SimpleButtonModel;

  constructor(props: searchItemModelProps) {
    super(props);
    this._likeButton = new SimpleButtonModel({id: '_likeButton', onPress: this.onLikeButtonPress, icon: ICONS.heartIcon});
    this._writeButton = new SimpleButtonModel({id: '_writeButton', onPress: this.onWriteButtonPress, icon: ICONS.chatIcon});
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

  public onItemPress = async () => {
    app.navigator.goToProfileDetailsScreen(this.authorId);
  };

  public onLikeButtonPress = async () => {
    const likeBody = {
      myId: app.currentUser.userId,
      userToId: this.authorId,
    };
    const res = await loadData(UserDataProvider.SetUserLike, likeBody);
    if (res === null) {
      Alert.alert('Warning', 'Something went wrong, check your internet connection');
      return;
    }

    if (res.statusCode !== 200) {
      Alert.alert('Warning', res.statusMessage);
      return;
    }
    console.log('SetUserLike', res);
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
