import React from 'react';
import {AppState, Platform, StatusBar} from 'react-native';
import {AppModel} from './src/Core/AppModel';
import {baseComponentProps, componentPropsWithModel, TypedBaseComponent} from './src/Core/BaseComponent';
import {MainNavigationView} from './src/Navigation/MainNavigationView';
import {COLORS} from './src/constants/colors';
import {app} from './src/Core/AppImpl';
import messaging, {FirebaseMessagingTypes} from '@react-native-firebase/messaging';
import {FireBaseHandler} from './src/Core/FireBaseHandler';

type appProps = baseComponentProps & {appName: string};

class App extends TypedBaseComponent<appProps, AppModel> {
  private messageListener: (() => void) | undefined;

  constructor(props: componentPropsWithModel<appProps, AppModel>) {
    super(props);
    this.messageListener = undefined;
  }

  public async componentDidMount() {
    super.componentDidMount();
    AppState.addEventListener('change', this.model.handleBackground);
    messaging().onMessage(async (remoteMessage: any) => {
      FireBaseHandler.HandleMessage(remoteMessage);
    });
    messaging().setBackgroundMessageHandler(async (remoteMessage: any) => {
      FireBaseHandler.HandleMessage(remoteMessage);
    });
    //await UserDataProvider.requestUserPermission();
    //this.messageListener = messaging().onMessage(async (message) => {
    //    console.log('onMessage message', message);
    //    pushMessagesHandler.setBackground(false);
    //    pushMessagesHandler.checkMessageType(message);
    //});

    //messaging()
    //    .getInitialNotification()
    //    .then((message) => {
    //        console.log('message getInitialNotification', message);
    //        if (message !== null && message !== undefined) {
    //            pushMessagesHandler.setBackground(false);
    //            app.navigator.startAppWithBackground = true;
    //            pushMessagesHandler.checkMessageNotificationOpenedAppType(message);
    //        }
    //    });
    await this.model.handleBackground('start');

    // app.noConnection.addEventListener();
  }

  public async componentWillUnmount() {
    super.componentWillUnmount();
    AppState.removeEventListener('change', this.model.handleBackground);
    if (this.messageListener !== undefined) {
      try {
        this.messageListener();
      } catch (ex) {
        console.error('messageListener', ex);
      }
    }

    //app.noConnection.removeEventListener();
  }

  public render() {
    super.render();
    return (
      <>
        <StatusBar backgroundColor={COLORS.MAIN_BLUE} barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'} />
        <MainNavigationView {...this.childProps(app.mainNavigationModel)} />
      </>
    );
  }
}

export default App;
