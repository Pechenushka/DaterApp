import {io} from 'socket.io-client';
import {appSettings} from '../Common/AppSettings';
import {app} from './AppImpl';

class SocketHandler {
  public static socket: any = null;
  constructor() {}

  public static connect = () => {
    if (app.currentUser && app.currentUser.userId !== -1) {
      SocketHandler.socket = io(appSettings.apiEndpoint, {
        query: {id: app.currentUser.userId, name: app.currentUser.userName},
      });
      SocketHandler.socket.connect();
      SocketHandler.socket.on('messageInCountryChat', (params: any) => {
        if (app.navigator.currentScreen === 'ChatScreen') {
          //@ts-ignore
          app.screens.ChatScreen.controller.chatModel.receiveMessage();
        }
      });

      SocketHandler.socket.on('messageInRegionChat', (params: any) => {
        if (app.navigator.currentScreen === 'ChatScreen') {
          //@ts-ignore
          app.screens.ChatScreen.controller.chatModel.receiveMessage();
        }
      });

      SocketHandler.socket.on('messageInCityChat', (params: any) => {
        if (app.navigator.currentScreen === 'ChatScreen') {
          //@ts-ignore
          app.screens.ChatScreen.controller.chatModel.receiveMessage();
        }
      });
    }
  };

  public static disconnect = () => {
    if (SocketHandler.socket !== null) {
      SocketHandler.socket.disconnect();
    }
  };

  public static connectToCityChat = (cityId: number) => {
    if (app.currentUser && app.currentUser.userId !== -1 && cityId > 0) {
      SocketHandler.socket.emit('enterCityChat', app.currentUser.userId, cityId);
    }
  };

  public static connectToRegionChat = (regionId: number) => {
    if (app.currentUser && app.currentUser.userId !== -1 && regionId > 0) {
      SocketHandler.socket.emit('enterRegionChat', app.currentUser.userId, regionId);
    }
  };

  public static connectToCountryChat = (countryId: number) => {
    if (app.currentUser && app.currentUser.userId !== -1 && countryId > 0) {
      SocketHandler.socket.emit('enterCountryChat', app.currentUser.userId, countryId);
    }
  };

  public static disconnectFromCityChat = (cityId: number) => {
    if (app.currentUser && app.currentUser.userId !== -1 && cityId > 0) {
      SocketHandler.socket.emit('disconectCityChat', app.currentUser.userId, cityId);
    }
  };

  public static disconnectFromRegionChat = (regionId: number) => {
    if (app.currentUser && app.currentUser.userId !== -1 && regionId > 0) {
      SocketHandler.socket.emit('disconectRegionChat', app.currentUser.userId, regionId);
    }
  };

  public static disonnectFromCountryChat = (countryId: number) => {
    if (app.currentUser && app.currentUser.userId !== -1 && countryId > 0) {
      SocketHandler.socket.emit('disconectCountryChat', app.currentUser.userId, countryId);
    }
  };
}

export {SocketHandler};
