import {app} from '../Core/AppImpl';
const pushMessagesHandler = {
  background: false,
  isOpenBackground: false,

  setBackground: function (status: boolean) {
    this.background = status;
  },

  setIsOpenBackground: function (bool: boolean) {
    this.isOpenBackground = bool;
  },
  checkMessageNotificationOpenedAppType: function (remoteMessage: any) {
    if (remoteMessage.data.hasOwnProperty('events')) {
      const parseMessageData = JSON.parse(remoteMessage.data.events);
      const messageEvent = parseMessageData[0];

      switch (messageEvent.eventType) {
        default:
          app.navigator.startAppWithBackground = false;
          break;
      }
    }
  },
  checkMessageType: function (remoteMessage: any) {
    if (remoteMessage.data.hasOwnProperty('events')) {
      const parseMessageData = JSON.parse(remoteMessage.data.events);
      const messageEvent = parseMessageData[0];
      //switch (messageEvent.eventType) {
      //  case 'event_inkasator_money_movement_StatusChange':
      //     this._toastNewPoint(messageEvent.evendData).then();
      //    break;
      //}
    }
  },
};
export {pushMessagesHandler};
