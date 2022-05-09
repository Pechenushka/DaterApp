import analytics from '@react-native-firebase/analytics';
import deviceInfoModule from 'react-native-device-info';

class AnalyticHandler {
  constructor() {}

  public trackEvent = (eventName: string, params: any = {}) => {
    analytics().logEvent(eventName, {device: deviceInfoModule.getBrand(), ...params});
  };
}
const analyticHandler = new AnalyticHandler();
export {analyticHandler};
