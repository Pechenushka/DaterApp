import {ICONS} from '../../constants/icons';
import {app} from '../../Core/AppImpl';
import {BaseModel, baseModelProps} from '../../Core/BaseModel';
import {loadData, UserDataProvider} from '../../DataProvider/UserDataProvider';
import {SimpleButtonModel} from '../Components/Buttons/SimpleButtonModel';

type bottomNavigationModelProps = baseModelProps & {};

class BottomNavigationModel extends BaseModel<bottomNavigationModelProps> {
  private _searchButton: SimpleButtonModel;
  private _requestButton: SimpleButtonModel;
  private _chatButton: SimpleButtonModel;
  private _likesButton: SimpleButtonModel;
  private _homeButton: SimpleButtonModel;

  private _activeIndex: number = 3;

  constructor(props: bottomNavigationModelProps) {
    super(props);
    this._searchButton = new SimpleButtonModel({
      id: '_searchButton',
      onPress: this.onSearchPress,
      icon: ICONS.searchIconBlack,
      activeIcon: ICONS.searchIconWhite,
    });

    this._requestButton = new SimpleButtonModel({
      id: '_requestButton',
      onPress: this.onRequestPress,
      icon: ICONS.requestsIcon,
    });

    this._chatButton = new SimpleButtonModel({
      id: '_chatButton',
      onPress: this.onChatPress,
      icon: ICONS.chatIcon,
      activeIcon: ICONS.chatIconWhite,
    });

    this._likesButton = new SimpleButtonModel({
      id: '_likesButton',
      onPress: this.onLikesPress,
      icon: ICONS.heartIcon,
      activeIcon: ICONS.heartIconWhite,
    });

    this._homeButton = new SimpleButtonModel({
      id: '_homeButton',
      onPress: this.onHomePress,
      icon: ICONS.homeIcon,
      activeIcon: ICONS.homeIconWhite,
    });
  }

  public onSearchPress = async () => {
    app.navigator.goToSearchFeedScreen();
  };

  public onHomePress = async () => {
    app.navigator.goToMainProfileScreen();
  };

  public onLikesPress = async () => {
    app.navigator.goToLikesScreen();
  };

  public onChatPress = async () => {
    app.navigator.goToChatListScreen();
  };

  public onRequestPress = async () => {};

  public updateCounters = async () => {
    loadData(UserDataProvider.GetMessagesCount, {myId: app.currentUser.userId}).then(res => {
      if (res !== null && res.statusCode === 200) {
        this._chatButton.counterModel.count = res.data.count;
      }
    });

    loadData(UserDataProvider.GetLikesCount, {myId: app.currentUser.userId}).then(resLikes => {
      if (resLikes !== null && resLikes.statusCode === 200) {
        this._likesButton.counterModel.count =
          resLikes.data.likesCount + resLikes.data.matchesCount;
      }
    });
  };

  public get searchButton() {
    return this._searchButton;
  }

  public get homeButton() {
    return this._homeButton;
  }

  public get requestButton() {
    return this._requestButton;
  }

  public get chatButton() {
    return this._chatButton;
  }

  public get likesButton() {
    return this._likesButton;
  }

  public get activeIndex() {
    return this._activeIndex;
  }

  public set activeIndex(Val) {
    if (this._activeIndex === Val) {
      return;
    }
    this._activeIndex = Val;
    this.forceUpdate();
  }
}

export {BottomNavigationModel};
