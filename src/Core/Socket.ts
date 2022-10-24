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
    }
  };

  public static disconnect = () => {
    if (SocketHandler.socket !== null) {
      SocketHandler.socket.disconnect();
    }
  };
}

export {SocketHandler};
