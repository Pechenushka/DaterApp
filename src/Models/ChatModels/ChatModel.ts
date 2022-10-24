import {Alert, NativeScrollEvent, NativeSyntheticEvent} from 'react-native';
import {ICONS} from '../../constants/icons';
import {app} from '../../Core/AppImpl';
import {BaseModel, baseModelProps} from '../../Core/BaseModel';
import {companionDataType, messageItemDataType} from '../../Core/DataTypes/BaseTypes';
import {_} from '../../Core/Localization';
import {loadData, UserDataProvider} from '../../DataProvider/UserDataProvider';
import {ChatListScreen} from '../../Screens/ChatListScreen';
import {SimpleButtonModel} from '../Components/Buttons/SimpleButtonModel';
import {TextInputModel} from '../Components/Inputs/TextInputModel';
import {ChatContextMenuModel} from './ChatContextMenuModel';
import {MessageItemModel} from './MessageItemModel';

type chatModelProps = baseModelProps & {};

class ChatModel extends BaseModel<chatModelProps> {
  private _loading: boolean = false;
  private _list: Map<number, MessageItemModel> = new Map();
  private _messageInput: TextInputModel;
  private _sendButton: SimpleButtonModel;
  private _backButton: SimpleButtonModel;
  private _openContextMenuButton: SimpleButtonModel;
  private _contextMenuModal: ChatContextMenuModel;

  private _companion: companionDataType | null = null;

  private _limit: number = 50;
  private _offset: number = 0;
  private _loadingNP: boolean = false;

  constructor(props: chatModelProps) {
    super(props);
    this._messageInput = new TextInputModel({
      id: '_messageInput',
      onChangeText: this.onTextChange,
      numberOfLines: 2,
      maxLength: 600,
      placeholder: _.lang.enter_your_message,
    });

    this._sendButton = new SimpleButtonModel({
      id: '_sendButton',
      onPress: this.onSendPress,
      icon: ICONS.sendIcon,
    });

    this._backButton = new SimpleButtonModel({
      id: '_backButton',
      onPress: this.onBackPress,
      icon: ICONS.BackArrowIcon,
    });

    this._openContextMenuButton = new SimpleButtonModel({
      id: '_openContextMenuButton',
      onPress: this.onDotsPress,
      icon: ICONS.dostIcon,
    });

    this._contextMenuModal = new ChatContextMenuModel({
      id: '_contextMenuModal',
      onBlockUser: this.onUserBlockPress,
      onUnblockUser: this.onUnblockButtonPress,
      onChatDelete: this.onChatDeletePress,
      blocked: false,
    });
  }

  public get loading() {
    return this._loading;
  }

  public get backButton() {
    return this._backButton;
  }

  public get openContextMenuButton() {
    return this._openContextMenuButton;
  }

  public get contextMenuModal() {
    return this._contextMenuModal;
  }

  public set loading(Val) {
    if (Val === this._loading) {
      return;
    }

    this._loading = Val;
    this.forceUpdate();
  }

  public get list() {
    return this._list;
  }

  public get companion() {
    return this._companion;
  }

  public get messageInput() {
    return this._messageInput;
  }

  public get sendButton() {
    return this._sendButton;
  }

  public onBlur = async () => {
    app.bottomNavigation.updateCounters();
  };

  public loadMessges = async (userId?: number) => {
    this.loading = true;
    this._offset = 0;
    const msgBody = {
      myId: app.currentUser.userId,
      userId: userId || this._companion?.id,
      limit: this._limit,
      offset: this._offset,
    };
    const res = await loadData(UserDataProvider.GetMessages, msgBody);
    if (res === null) {
      Alert.alert('Warning', _.lang.servers_are_not_allowed);
      this.loading = false;
      return;
    }
    if (res.statusCode !== 200) {
      Alert.alert('Warning', res.statusMessage);
      this.loading = false;
      return;
    }

    this.list.clear();
    res.data.messages.map(mesgProps => {
      this.list.set(mesgProps.id, this.createMessageModel(mesgProps));
    });

    this._companion = res.data.companion;
    this._contextMenuModal.blocked = res.data.companion.blocked;

    this.loading = false;
  };

  public receiveMessage = async () => {
    this._offset = 0;
    const msgBody = {
      myId: app.currentUser.userId,
      userId: this._companion !== null ? this._companion.id : -1,
      limit: this._limit,
      offset: this._offset,
    };
    const res = await loadData(UserDataProvider.GetMessages, msgBody);
    if (res !== null && res.statusCode === 200) {
      this.list.clear();
      res.data.messages.map(mesgProps => {
        this.list.set(mesgProps.id, this.createMessageModel(mesgProps));
      });
      this.forceUpdate();
    }
  };

  public loadMore = async () => {
    const elemsInScreen = this._offset + this._limit;
    if (!this._loadingNP && Array.from(this.list).length >= elemsInScreen) {
      this._loadingNP = true;
      this._offset += this._limit;
      const msgBody = {
        myId: app.currentUser.userId,
        userId: this._companion?.id,
        limit: this._limit,
        offset: this._offset,
      };
      const res = await loadData(UserDataProvider.GetMessages, msgBody);
      if (res === null) {
        Alert.alert('Warning', _.lang.servers_are_not_allowed);
        this._loadingNP = false;
        return;
      }
      if (res.statusCode !== 200) {
        Alert.alert('Warning', res.statusMessage);
        this._loadingNP = false;
        return;
      }

      res.data.messages.map(mesgProps => {
        this.list.set(mesgProps.id, this.createMessageModel(mesgProps));
      });

      this._companion = res.data.companion;

      this._loadingNP = false;
      this.forceUpdate();
    }
  };

  public onScroll = async (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const event = e.nativeEvent;
    const bottomBorder = event.contentOffset.y + event.layoutMeasurement.height;
    if (event.contentSize.height - bottomBorder < 200) {
      await this.loadMore();
    }
  };

  public createMessageModel = (props: messageItemDataType) => {
    return new MessageItemModel(props);
  };

  public onTextChange = async (newValue: string) => {
    newValue;
  };

  public onSendPress = async () => {
    const messageText = this._messageInput.value.trim();
    this._sendButton.disabled = true;
    if (messageText.length === 0) {
      this._messageInput.value = '';
      this._sendButton.disabled = false;
      return;
    }
    const messageBody = {
      myId: app.currentUser.userId,
      userId: this._companion?.id,
      text: messageText,
      timestamp: new Date().getTime(),
    };
    const res = await loadData(UserDataProvider.WriteMessage, messageBody);

    if (res === null) {
      Alert.alert('Warning', _.lang.servers_are_not_allowed);
      this._messageInput.value = '';
      this._sendButton.disabled = false;
      return;
    }
    if (res.statusCode !== 200) {
      Alert.alert('Warning', res.statusMessage);
      this._messageInput.value = '';
      this._sendButton.disabled = false;
      return;
    }

    this._list.set(
      res.data.id,
      this.createMessageModel({
        authorId: app.currentUser.userId,
        id: res.data.id,
        messageText: messageText,
        timestamp: new Date().getTime(),
      }),
    );

    this._messageInput.value = '';
    this._sendButton.disabled = false;
    this.forceUpdate();
  };

  public onprofilePress = async () => {
    app.navigator.goToProfileDetailsScreen(this.companion?.id || -1);
  };

  public onBackPress = async () => {
    app.navigator.toGoBack();
  };

  public onDotsPress = async () => {
    this._contextMenuModal.open();
  };

  public onUserBlockPress = async () => {
    if (this.companion !== null) {
      const res = await loadData(UserDataProvider.BlockUser, {
        userId: app.currentUser.userId,
        blockedUserId: this.companion.id,
      });
      if (res === null) {
        Alert.alert('Warning', 'Something went wrong, check your internet connection');
        return;
      }

      if (res.statusCode !== 200) {
        Alert.alert('Warning', res.statusMessage);
        return;
      }

      this.companion.blocked = true;
      this._contextMenuModal.blocked = true;
      this.forceUpdate();
    }
  };

  public onUnblockButtonPress = async () => {
    if (this.companion !== null) {
      const res = await loadData(UserDataProvider.UnblockUser, {
        userId: app.currentUser.userId,
        blockedUserId: this.companion.id,
      });
      if (res === null) {
        Alert.alert('Warning', 'Something went wrong, check your internet connection');
        return;
      }

      if (res.statusCode !== 200) {
        Alert.alert('Warning', res.statusMessage);
        return;
      }

      this.companion.blocked = false;
      this._contextMenuModal.blocked = false;
      this.forceUpdate();
    }
  };

  public onChatDeletePress = async () => {
    const msgBody = {
      myId: app.currentUser.userId,
      userId: this._companion?.id,
    };
    const res = await loadData(UserDataProvider.DeleteChat, msgBody);

    if (res === null) {
      Alert.alert('Warning', _.lang.servers_are_not_allowed);
      return;
    }
    if (res.statusCode !== 200) {
      Alert.alert('Warning', res.statusMessage);
      return;
    }
    app.navigator.navigate(ChatListScreen);
  };
}

export {ChatModel};
