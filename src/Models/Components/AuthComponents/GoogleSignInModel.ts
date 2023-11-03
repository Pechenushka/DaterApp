import {BaseModel, baseModelProps} from '../../../Core/BaseModel';
import {GoogleSignin} from 'react-native-google-signin';
import {loadData, UserDataProvider} from '../../../DataProvider/UserDataProvider';
import {app} from '../../../Core/AppImpl';
import {CreateNewAccountScreen} from '../../../Screens/CreateNewAccountScreen';
import {FireBaseHandler} from '../../../Core/FireBaseHandler';
import {analyticHandler} from '../../../Core/AnalyticHanler';
import {_} from '../../../Core/Localization';
import crashlytics from '@react-native-firebase/crashlytics';

type googleSignInModelProps = baseModelProps & {};

class GoogleSignInModel extends BaseModel<googleSignInModelProps> {
  constructor(props: googleSignInModelProps) {
    super(props);
  }

  public onPress = async () => {
    try {
      GoogleSignin.configure({
        webClientId: '557289905378-4bv5dj3tea31omaauqpvtp71as4e1hth.apps.googleusercontent.com',
      });
      const signinobj = await GoogleSignin.signIn();

      const authBody = {
        email: signinobj.user.email,
        password: signinobj.idToken,
      };
      const res = await loadData(UserDataProvider.Auth, authBody);
      if (res === null) {
        app.notification.showError(_.lang.warning, _.lang.servers_are_not_allowed);
        return;
      }
      if (res.statusMessage.includes('User not found')) {
        app.navigator.navigate(CreateNewAccountScreen, {
          name: signinobj.user.name,
          email: signinobj.user.email,
          password: signinobj.idToken,
        });
        return;
      }

      if (res.statusCode !== 200) {
        app.notification.showError(_.lang.warning, res.statusMessage);
        return;
      }

      if (res.statusCode === 200) {
        app.currentUser.gender = res.data.gender;
        app.currentUser.userId = res.data.id;
        app.currentUser.userName = res.data.name;
        app.currentUser.email = res.data.email;
        app.currentUser.phone = res.data.phone;
        app.currentUser.birthDate = res.data.birthDate;
        app.currentUser.telegram = res.data.telegram;
        app.currentUser.location = res.data.location;
        app.currentUser.avatar = res.data.avatar;
        app.currentUser.fcm = res.data.fcm;
        app.currentUser.token = res.data.token;
        app.navigator.goToMainProfileScreen();
        FireBaseHandler.syncTokenDevice();
        app.navigator.setOnline();
        analyticHandler.trackEvent('user_authorized', {
          gender: res.data.gender,
          location: res.data.location.country.name,
        });
        return;
      }
    } catch (error: any) {
      crashlytics().recordError(error, 'Google sign in onPress error');
    }
  };
}

export {GoogleSignInModel};
