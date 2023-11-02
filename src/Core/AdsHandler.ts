import mobileAds from 'react-native-google-mobile-ads';
import crashlytics from '@react-native-firebase/crashlytics';
class AdsHandler {
  constructor() {}

  public init = async () => {
    try {
      const adapterStatuses = await mobileAds().initialize();
      console.log(adapterStatuses);
    } catch (error: any) {
      console.log('ERROR', error);
      crashlytics().recordError(error, 'registerComponent error');
    }
  };
}
const adsHandler = new AdsHandler();
export {adsHandler};
