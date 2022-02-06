import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {app} from './src/Core/AppImpl';

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

AppRegistry.registerComponent(app.model.appName, () => getApp);
