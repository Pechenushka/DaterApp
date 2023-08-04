import React from 'react';
import {View} from 'react-native';
import {baseScreenProps, componentPropsWithModel} from '../Core/BaseComponent';
import {BaseScreenModel} from '../Core/BaseScreenModel';
import {BaseLayoutView} from './BaseLayout';
import {BaseStyles} from '../Styles/BaseStyles';
import {BottomNavigationView} from '../Views/BottomNavigation/BottomNavigationView';
import {app} from '../Core/AppImpl';
import {ChatListController} from '../Controllers/ChatListController';
import {ChatListView} from '../Views/ChatListViews/ChatListView';
import {analyticHandler} from '../Core/AnalyticHanler';

class ChatListScreen extends BaseLayoutView<ChatListController> {
  private _refMod: ChatListView | null = null;
  constructor(props: componentPropsWithModel<baseScreenProps, BaseScreenModel>) {
    super(props, ChatListController);
  }

  public get allowGoBack() {
    return true;
  }

  async componentDidMount() {
    super.componentDidMount();
  }

  get screenName() {
    return 'ChatListScreen';
  }

  public get showHeaderLeftComponent() {
    return false;
  }
  public get showHeaderRightComponent() {
    return false;
  }

  async onFocus(): Promise<void> {
    await super.onFocus();
    await this.controller.chatListModel.loadNededList();
    analyticHandler.trackEvent('chat_list_screen_rendered');
  }

  public updateModel = async () => {
    await this.controller.chatListModel.loadNededList();
    this._refMod && this._refMod.updateAnyWay();
  };

  public content() {
    return (
      <View style={[BaseStyles.container]}>
        <ChatListView
          ref={ref => {
            this._refMod = ref;
          }}
          {...this.childProps(this.controller.chatListModel)}
        />
        <BottomNavigationView {...this.childProps(app.bottomNavigation)} />
      </View>
    );
  }
}

export {ChatListScreen};
