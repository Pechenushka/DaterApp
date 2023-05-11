import {firebase} from '@react-native-firebase/crashlytics';
import messaging from '@react-native-firebase/messaging';
import {loadData, UserDataProvider} from '../DataProvider/UserDataProvider';
import {LoginScreen} from '../Screens/LoginScreen';
import {app} from './AppImpl';
import {FireBaseNotification} from './DataTypes/BaseTypes';
import {_} from './Localization';

class FireBaseHandler {
  constructor() {}

  public static async syncTokenDevice() {
    try {
      const curToken = await messaging().getToken();
      console.log('curToken', curToken);
      if (app.currentUser.fcm !== undefined && app.currentUser.fcm !== curToken) {
        const syncBody = {
          fcm: curToken,
          userId: app.currentUser.userId,
        };
        const res = await loadData(UserDataProvider.SyncFCMToken, syncBody);

        if (res === null) {
          app.notification.showError(_.lang.warning, 'Sync error');
          return;
        }

        if (res.statusCode === 404) {
          app.navigator.navigate(LoginScreen);
          return;
        }

        if (res.statusCode !== 200) {
          app.notification.showError(_.lang.warning, res.statusMessage);
          return;
        }

        app.currentUser.fcm = res.data.fcm;
      }
    } catch (error) {
      FireBaseHandler.logError(error);
    }
  }

  public static logError = async (error: any) => {
    firebase.crashlytics().recordError(error);
  };

  public static async getFCMToken() {
    return await messaging().getToken();
  }

  public static async HandleMessage(remoteMessage: FireBaseNotification) {
    switch (remoteMessage.data.type) {
      case 'message':
        if (app.navigator.currentScreen === 'ChatScreen') {
          //@ts-ignore
          app.screens.ChatScreen.controller.chatModel.receiveMessage();
        } else if (app.navigator.currentScreen === 'ChatListScreen') {
          //@ts-ignore
          app.screens.ChatListScreen.controller.chatListModel.update();
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
