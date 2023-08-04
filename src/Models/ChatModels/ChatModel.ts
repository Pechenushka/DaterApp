import {NativeScrollEvent, NativeSyntheticEvent} from 'react-native';
import {SetVisit} from '../../Common/Helpers';
import {ICONS} from '../../constants/icons';
import {app} from '../../Core/AppImpl';
import {BaseModel, baseModelProps} from '../../Core/BaseModel';
import {
  companionDataType,
  getMesagesDataType,
  messageItemDataType,
  writeMessageResponseDataType,
} from '../../Core/DataTypes/BaseTypes';
import {_} from '../../Core/Localization';
import {loadData, UserDataProvider} from '../../DataProvider/UserDataProvider';
import {ChatListScreen} from '../../Screens/ChatListScreen';
import {SimpleButtonModel} from '../Components/Buttons/SimpleButtonModel';
import {TextInputModel} from '../Components/Inputs/TextInputModel';
import {ChatContextMenuModel} from './ChatContextMenuModel';
import {MessageItemModel} from './MessageItemModel';
import {chatListItemType} from '../ChatListModels/ChatListItemModel';
import {SocketHandler} from '../../Core/Socket';
import {MessageReportModalModel} from './MessageReportModalModel';

type chatModelProps = baseModelProps & {};
type msgBodyType = {
  myId: number;
  limit: number;
  offset: number;
  cityId?: number;
  regionId?: number;
  countryId?: number;
  userId?: number;
};

type writeMsgBodyType = {
  myId: number;
  text: string;
  cityId?: number;
  regionId?: number;
  countryId?: number;
  userId?: number;
};

class ChatModel extends BaseModel<chatModelProps> {
  private _loading: boolean = false;
  private _list: Map<number, MessageItemModel> = new Map();
  private _messageInput: TextInputModel;
  private _sendButton: SimpleButtonModel;
  private _backButton: SimpleButtonModel;
  private _openContextMenuButton: SimpleButtonModel;
  private _contextMenuModal: ChatContextMenuModel;
  private _target: chatListItemType = 'private';
  private _messageReportModalModel: MessageReportModalModel;

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

    this._messageReportModalModel = new MessageReportModalModel({id: '_messageReportModalModel'});
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

  public get messageReportModalModel() {
    return this._messageReportModalModel;
  }

  public onBlur = async () => {
    app.bottomNavigation.updateCounters();
    this._messageInput.value = '';
    this.disconectFromChat();
  };

  public enterToChat = async () => {
    switch (this._target) {
      case 'city':
        SocketHandler.connectToCityChat(this._companion !== null ? this._companion.id : -1);
        break;

      case 'region':
        SocketHandler.connectToRegionChat(this._companion !== null ? this._companion.id : -1);
        break;

      case 'country':
        SocketHandler.connectToCountryChat(this._companion !== null ? this._companion.id : -1);
        break;

      case 'private':
        break;
      default:
        break;
    }
  };

  public disconectFromChat = async () => {
    switch (this._target) {
      case 'city':
        SocketHandler.disconnectFromCityChat(this._companion !== null ? this._companion.id : -1);
        break;

      case 'region':
        SocketHandler.disconnectFromRegionChat(this._companion !== null ? this._companion.id : -1);
        break;

      case 'country':
        SocketHandler.disonnectFromCountryChat(this._companion !== null ? this._companion.id : -1);
        break;

      case 'private':
        break;
      default:
        break;
    }
  };

  public loadMessges = async (target: chatListItemType, targetId: number) => {
    this.loading = true;
    this._offset = 0;
    const msgBody: msgBodyType = {
      myId: app.currentUser.userId,
      limit: this._limit,
      offset: this._offset,
    };
    this._target = target;
    let res: getMesagesDataType | null = null;
    switch (this._target) {
      case 'city':
        msgBody.cityId = targetId;
        res = await loadData(UserDataProvider.GetCityMessages, msgBody);
        break;

      case 'region':
        msgBody.regionId = targetId;
        res = await loadData(UserDataProvider.GetRegionMessages, msgBody);
        break;

      case 'country':
        msgBody.countryId = targetId;
        res = await loadData(UserDataProvider.GetCountryMessages, msgBody);
        break;

      case 'private':
        msgBody.userId = targetId;
        res = await loadData(UserDataProvider.GetMessages, msgBody);
        break;
      default:
        break;
    }

    if (res === null) {
      app.notification.showError(_.lang.warning, _.lang.servers_are_not_allowed);
      this.loading = false;
      return;
    }
    if (res.statusCode !== 200) {
      app.notification.showError(_.lang.warning, res.statusMessage);
      this.loading = false;
      return;
    }

    this.list.clear();
    res.data.messages.map(mesgProps => {
      this.list.set(mesgProps.id, this.createMessageModel(mesgProps));
    });

    this._companion = res.data.companion;
    this._contextMenuModal.blocked = res.data.companion.blocked;

    this._messageReportModalModel.targetId = this._companion !== null ? this._companion.id : -1;

    this.loading = false;
  };

  public receiveMessage = async () => {
    const msgBody: msgBodyType = {
      myId: app.currentUser.userId,
      limit: 10,
      offset: 0,
    };
    let res: getMesagesDataType | null = null;
    switch (this._target) {
      case 'city':
        msgBody.cityId = this._companion !== null ? this._companion.id : -1;
        res = await loadData(UserDataProvider.GetCityMessages, msgBody);
        break;

      case 'region':
        msgBody.regionId = this._companion !== null ? this._companion.id : -1;
        res = await loadData(UserDataProvider.GetRegionMessages, msgBody);
        break;

      case 'country':
        msgBody.countryId = this._companion !== null ? this._companion.id : -1;
        res = await loadData(UserDataProvider.GetCountryMessages, msgBody);
        break;

      case 'private':
        msgBody.userId = this._companion !== null ? this._companion.id : -1;
        res = await loadData(UserDataProvider.GetMessages, msgBody);
        break;
      default:
        break;
    }
    if (res !== null && res.statusCode === 200) {
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
      const msgBody: msgBodyType = {
        myId: app.currentUser.userId,
        limit: this._limit,
        offset: this._offset,
      };
      let res: getMesagesDataType | null = null;
      switch (this._target) {
        case 'city':
          msgBody.cityId = this._companion !== null ? this._companion.id : -1;
          res = await loadData(UserDataProvider.GetCityMessages, msgBody);
          break;

        case 'region':
          msgBody.regionId = this._companion !== null ? this._companion.id : -1;
          res = await loadData(UserDataProvider.GetRegionMessages, msgBody);
          break;

        case 'country':
          msgBody.countryId = this._companion !== null ? this._companion.id : -1;
          res = await loadData(UserDataProvider.GetCountryMessages, msgBody);
          break;

        case 'private':
          msgBody.userId = this._companion !== null ? this._companion.id : -1;
          res = await loadData(UserDataProvider.GetMessages, msgBody);
          break;
        default:
          break;
      }
      if (res === null) {
        app.notification.showError(_.lang.warning, _.lang.servers_are_not_allowed);
        this._loadingNP = false;
        return;
      }
      if (res.statusCode !== 200) {
        app.notification.showError(_.lang.warning, res.statusMessage);
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
    return new MessageItemModel({
      ...props,
      onReportPress: this.onMessageReportButtonPress,
      target: this._target,
      onMessagePress: this.onMessagePress,
    });
  };

  public onTextChange = async (newValue: string) => {
    newValue;
  };

  public onMessagePress = (messageId: number) => {
    this.list.forEach(msgItem => {
      if (+msgItem.messageId !== messageId) {
        msgItem.isActive = false;
      }
    });
  };

  public onSendPress = async () => {
    const messageText = this._messageInput.value.trim();
    this._sendButton.disabled = true;
    if (messageText.length === 0) {
      this._messageInput.value = '';
      this._sendButton.disabled = false;
      return;
    }
    const messageBody: writeMsgBodyType = {
      myId: app.currentUser.userId,
      userId: this._companion?.id,
      text: messageText,
    };

    let res: writeMessageResponseDataType | null = null;
    switch (this._target) {
      case 'city':
        messageBody.cityId = this._companion !== null ? this._companion.id : -1;
        res = await loadData(UserDataProvider.WriteMessageCity, messageBody);
        break;

      case 'region':
        messageBody.regionId = this._companion !== null ? this._companion.id : -1;
        res = await loadData(UserDataProvider.WriteMessageRegion, messageBody);
        break;

      case 'country':
        messageBody.countryId = this._companion !== null ? this._companion.id : -1;
        res = await loadData(UserDataProvider.WriteMessageCountry, messageBody);
        break;

      case 'private':
        messageBody.userId = this._companion !== null ? this._companion.id : -1;
        res = await loadData(UserDataProvider.WriteMessage, messageBody);
        break;
      default:
        break;
    }

    if (res === null) {
      app.notification.showError(_.lang.warning, _.lang.servers_are_not_allowed);
      this._messageInput.value = '';
      this._sendButton.disabled = false;
      return;
    }
    if (res.statusCode !== 200) {
      app.notification.showError(_.lang.warning, res.statusMessage);
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
        authorName: this._target !== 'private' ? app.currentUser.userName : undefined,
        authorAvatar: this._target !== 'private' ? app.currentUser.avatar : undefined,
      }),
    );

    this._messageInput.value = '';
    this._sendButton.disabled = false;
    this.forceUpdate();
  };

  public onprofilePress = async () => {
    app.navigator.goToProfileDetailsScreen(this.companion?.id || -1);
    if (this.companion !== null) {
      SetVisit(this.companion.id, 2);
    }
  };

  public onBackPress = async () => {
    app.navigator.toGoBack();
  };

  public onDotsPress = async () => {
    this._contextMenuModal.open();
  };

  public onMessageReportButtonPress = (
    messageId: number,
    authorId: number,
    authorAvatar: string,
    messageText: string,
    authorName: string,
    target: chatListItemType,
  ) => {
    this.messageReportModalModel.setMessageData({
      authorAvatar,
      messageText,
      authorId,
      messageId,
      authorName,
      target,
    });
    this._messageReportModalModel.open();
  };

  public onUserBlockPress = async () => {
    if (this.companion !== null) {
      const res = await loadData(UserDataProvider.BlockUser, {
        userId: app.currentUser.userId,
        blockedUserId: this.companion.id,
      });
      if (res === null) {
        app.notification.showError(_.lang.warning, _.lang.servers_are_not_allowed);
        return;
      }

      if (res.statusCode !== 200) {
        app.notification.showError(_.lang.warning, res.statusMessage);
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
        app.notification.showError(_.lang.warning, _.lang.servers_are_not_allowed);
        return;
      }

      if (res.statusCode !== 200) {
        app.notification.showError(_.lang.warning, res.statusMessage);
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
      app.notification.showError(_.lang.warning, _.lang.servers_are_not_allowed);
      return;
    }
    if (res.statusCode !== 200) {
      app.notification.showError(_.lang.warning, res.statusMessage);
      return;
    }
    app.navigator.navigate(ChatListScreen);
  };
}

export {ChatModel};
