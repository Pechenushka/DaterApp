import messaging from '@react-native-firebase/messaging';
import {Alert} from 'react-native';
import {loadData, UserDataProvider} from '../DataProvider/UserDataProvider';
import {app} from './AppImpl';
import {FireBaseNotification} from './DataTypes/BaseTypes';

class FireBaseHandler {
  constructor() {}

  public static async syncTokenDevice() {
    const curToken = await messaging().getToken();
    console.log('curToken', curToken);
    if (app.currentUser.fcm !== undefined && app.currentUser.fcm !== curToken) {
      const syncBody = {
        fcm: curToken,
        userId: app.currentUser.userId,
      };
      const res = await loadData(UserDataProvider.SyncFCMToken, syncBody);

      if (res === null) {
        Alert.alert('Warning', 'Sync error');
        return;
      }

      if (res.statusCode !== 200) {
        Alert.alert('Warning', res.statusMessage);
        return;
      }

      app.currentUser.fcm = res.data.fcm;
    }
  }

  public static async getFCMToken() {
    return await messaging().getToken();
  }

  public static async HandleMessage(remoteMessage: FireBaseNotification) {
    switch (remoteMessage.data.type) {
      case 'message':
        if (app.navigator.currentScreen === 'ChatScreen') {
          //@ts-ignore
          app.screens.ChatScreen.controller.chatModel.receiveMessage();
        } else {
          app.bottomNavigation.updateCounters();
        }
        break;

      case 'like':
        app.bottomNavigation.updateCounters();

        break;

      case 'match':
        app.bottomNavigation.updateCounters();

        break;

      case 'resolveRequest':
        if (app.navigator.currentScreen === 'MainProfileScreen') {
          //@ts-ignore
          app.screens.MainProfileScreen.controller.homeModel.checkUserStatus();
        }
        break;

      default:
        break;
    }
  }
}

export {FireBaseHandler};
