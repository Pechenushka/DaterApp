import analytics from '@react-native-firebase/analytics';
import deviceInfoModule from 'react-native-device-info';

class AnalyticHandler {
  constructor() {}

  public trackEvent = (eventName: string) => {
    analytics().logEvent(eventName, {device: deviceInfoModule.getBrand()});
  };
}
const analyticHandler = new AnalyticHandler();
export {analyticHandler};
