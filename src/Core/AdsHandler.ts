import mobileAds from 'react-native-google-mobile-ads';
class AdsHandler {
  constructor() {}

  public init = async () => {
    const adapterStatuses = await mobileAds().initialize();
    console.log(adapterStatuses);
  };
}
const adsHandler = new AdsHandler();
export {adsHandler};
