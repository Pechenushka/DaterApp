import analytics from '@react-native-firebase/analytics';

class AnalyticHandler {
  constructor() {}

  public trackEvent = (eventName: string, params: {device: string}) => {
    analytics().logEvent(eventName, params);
  };
}
const analyticHandler = new AnalyticHandler();
export {analyticHandler};
