import React from 'react';
import {View} from 'react-native';
import {baseScreenProps, componentPropsWithModel} from '../Core/BaseComponent';
import {BaseScreenModel} from '../Core/BaseScreenModel';
import {BaseLayoutView} from './BaseLayout';
import {BaseStyles} from '../Styles/BaseStyles';
import {ChatController} from '../Controllers/ChatController';
import {ChatView} from '../Views/ChatViews/ChatView';
import {analyticHandler} from '../Core/AnalyticHanler';

class ChatScreen extends BaseLayoutView<ChatController> {
  constructor(props: componentPropsWithModel<baseScreenProps, BaseScreenModel>) {
    super(props, ChatController);
  }

  public get allowGoBack() {
    return true;
  }

  async componentDidMount() {
    super.componentDidMount();
  }

  get screenName() {
    return 'ChatScreen';
  }

  public get showHeaderLeftComponent() {
    return false;
  }
  public get showHeaderRightComponent() {
    return false;
  }

  async onFocus(): Promise<void> {
    await super.onFocus();
    await this.controller.chatModel.loadMessges(this.props.route.params.userId);
    analyticHandler.trackEvent('chat_screen_rendered');
  }

  public async onBlur(): Promise<void> {
    await this.controller.chatModel.onBlur();
  }

  public content() {
    return (
      <View style={[BaseStyles.container]}>
        <ChatView {...this.childProps(this.controller.chatModel)} />
        {/* <BottomNavigationView {...this.childProps(app.bottomNavigation)} /> */}
      </View>
    );
  }
}

export {ChatScreen};
