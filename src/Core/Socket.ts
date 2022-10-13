import {io} from 'socket.io-client';
import {appSettings} from '../Common/AppSettings';
import {app} from './AppImpl';

class SocketHandler {
  public static socket: any;
  constructor() {}

  public static connect = () => {
    SocketHandler.socket = io(appSettings.apiEndpoint, {
      query: {id: app.currentUser ? app.currentUser.userId : -1},
    });
    SocketHandler.socket.connect();
  };

  public static disconnect = () => {
    SocketHandler.socket.disconnect();
  };
}

export {SocketHandler};
