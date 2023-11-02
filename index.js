import 'react-native-gesture-handler';
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {app} from './src/Core/AppImpl';
import crashlytics from '@react-native-firebase/crashlytics';

//messaging().setBackgroundMessageHandler(
//    async (message) => {
//        pushMessagesHandler.setBackground(true);
//        console.log('setBackgroundMessageHandler message', message);
//        pushMessagesHandler.checkMessageType(message);
//        return void 0
//    },
//);

function getApp() {
  return <App id={'app'} model={app.model} appName={app.model.appName} />;
}
try {
  AppRegistry.registerComponent(app.model.appName, () => getApp);
} catch (error) {
  console.log('ERROR', error);
  crashlytics().recordError(error, 'registerComponent error');
}
