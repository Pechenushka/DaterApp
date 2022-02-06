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
      console.log('parseMessageData 2', parseMessageData);
      const messageEvent = parseMessageData[0];
      console.log('parseMessageData 3', messageEvent);

      switch (messageEvent.eventType) {
        default:
          app.navigator.startAppWithBackground = false;
          break;
      }
    }
    },
    checkMessageType: function (remoteMessage: any) {
    console.log('remoteMessage', remoteMessage);
    if (remoteMessage.data.hasOwnProperty('events')) {
      const parseMessageData = JSON.parse(remoteMessage.data.events);
      console.log('remoteMessage parseMessageData', parseMessageData);
      const messageEvent = parseMessageData[0];
      console.log('remoteMessage messageEvent', messageEvent);
      //switch (messageEvent.eventType) {
      //  case 'event_inkasator_money_movement_StatusChange':
      //     this._toastNewPoint(messageEvent.evendData).then();
      //    break;
      //}
    }
    },

    
};
export  { pushMessagesHandler }
