import {fetchData} from '../Common/fetchData';
import {Keyboard} from 'react-native';
import {
  baseResponse,
  chatIsExistsResponseDataType,
  chatListResponseDataType,
  fcmSyncDataType,
  getLikesCountDataType,
  getMesagesCountDataType,
  getMesagesDataType,
  locationsResponseDataType,
  registrationResponseDataType,
  requestBodyType,
  searchResponseDataType,
  userDetailsResponseDataType,
  userMeetingDataType,
  userStatusResponseDataType,
  writeMessageResponseDataType,
} from '../Core/DataTypes/BaseTypes';
import {app} from '../Core/AppImpl';
import {LoginScreen} from '../Screens/LoginScreen';
import {BannedScreen} from '../Screens/BannedScreen';

class UserDataProvider {
  // Авторизація користувача
  static async Auth(body: requestBodyType): Promise<registrationResponseDataType> {
    return fetchData('users/auth', 'POST', body);
  }

  static async Registration(body: requestBodyType): Promise<registrationResponseDataType> {
    return fetchData('users/registration', 'POST', body);
  }

  static async CheckEmail(body: requestBodyType): Promise<registrationResponseDataType> {
    return fetchData('users/check-email', 'POST', body);
  }

  static async SearchRequest(body: requestBodyType): Promise<searchResponseDataType> {
    return fetchData('search', 'POST', body);
  }

  static async GetCountries(body: requestBodyType): Promise<locationsResponseDataType> {
    return fetchData('locations/get-countries', 'GET', body);
  }

  static async GetRegions(body: requestBodyType): Promise<locationsResponseDataType> {
    return fetchData(`locations/${body.countryId}/get-regions/`, 'GET');
  }

  static async GetCities(body: requestBodyType): Promise<locationsResponseDataType> {
    return fetchData(`locations/${body.regionId}/get-cities`, 'GET');
  }

  static async GetUserStatus(body: requestBodyType): Promise<userStatusResponseDataType> {
    return fetchData(`users/${app.currentUser.token}/${body.userId}/status`, 'GET');
  }

  static async GetUserDatails(body: requestBodyType): Promise<userDetailsResponseDataType> {
    return fetchData(`users/${body.userId}/${body.myId}`, 'GET');
  }

  static async SetUserLike(body: requestBodyType): Promise<baseResponse> {
    return fetchData('users/like-user', 'POST', body, true);
  }

  static async SetUserReject(body: requestBodyType): Promise<baseResponse> {
    return fetchData('users/reject-user', 'POST', body, true);
  }

  static async CreateMeeting(body: requestBodyType): Promise<baseResponse> {
    return fetchData('meetings/add', 'POST', body, true);
  }

  static async EditMeeting(body: requestBodyType): Promise<baseResponse> {
    return fetchData('meetings/edit', 'POST', body, true);
  }

  static async GetUserMeeting(body: requestBodyType): Promise<userMeetingDataType> {
    return fetchData(
      `meetings/${app.currentUser.userId}/${app.currentUser.token}/get-by-author/${body.authorId}`,
      'GET',
    );
  }

  static async GetUserLikes(body: requestBodyType): Promise<searchResponseDataType> {
    return fetchData('users/get-user-likes', 'POST', body, true);
  }

  static async GetLikesToUser(body: requestBodyType): Promise<searchResponseDataType> {
    return fetchData('users/get-likes-to-user', 'POST', body, true);
  }

  static async GetUserMatches(body: requestBodyType): Promise<searchResponseDataType> {
    return fetchData('users/get-user-matches', 'POST', body, true);
  }

  static async IsChatExists(body: requestBodyType): Promise<chatIsExistsResponseDataType> {
    return fetchData('chats/is-exists', 'POST', body, true);
  }

  //{ myId, userId, text, timestamp }
  static async WriteMessage(body: requestBodyType): Promise<writeMessageResponseDataType> {
    return fetchData('chats/write', 'POST', body, true);
  }

  //{ myId, userId }
  static async GetMessages(body: requestBodyType): Promise<getMesagesDataType> {
    return fetchData('chats/get-messages', 'POST', body, true);
  }

  static async GetUserChats(body: requestBodyType): Promise<chatListResponseDataType> {
    return fetchData(`chats/${app.currentUser.token}/get-by-user/${app.currentUser.userId}`, 'GET');
  }

  static async SyncFCMToken(body: requestBodyType): Promise<fcmSyncDataType> {
    return fetchData('users/sync-token', 'POST', body, true);
  }

  static async SetIsOnline(body: requestBodyType): Promise<baseResponse> {
    return fetchData('users/set-online', 'POST', body, true);
  }

  static async GetMessagesCount(body: requestBodyType): Promise<getMesagesCountDataType> {
    return fetchData('chats/get-messages-count', 'POST', body, true);
  }

  static async GetLikesCount(body: requestBodyType): Promise<getLikesCountDataType> {
    return fetchData('users/get-user-counters', 'POST', body, true);
  }

  static async BlockUser(body: requestBodyType): Promise<baseResponse> {
    return fetchData('users/block-user', 'POST', body, true);
  }

  static async UnblockUser(body: requestBodyType): Promise<baseResponse> {
    return fetchData('users/unblock-user', 'POST', body, true);
  }

  static async ReportUser(body: requestBodyType): Promise<baseResponse> {
    return fetchData('users/report-user', 'POST', body, true);
  }

  static async DeleteUserById(body: requestBodyType): Promise<baseResponse> {
    return fetchData(`users/by-user`, 'DELETE', body, true);
  }
}

async function loadData<T extends baseResponse, R extends requestBodyType>(
  func: (bodyF: R) => Promise<T>,
  params: R,
) {
  try {
    const body = params;
    const res = await func(body);
    if (res.statusCode === undefined || res.statusMessage === undefined) {
      return null;
    }
    if (res.statusCode === 410) {
      app.navigator.navigate(BannedScreen);
      return null;
    }
    if (res.statusCode === 401) {
      app.navigator.navigate(LoginScreen);
      return null;
    }
    return res;
  } catch (ex: any) {
    console.log(ex);
    if (ex.toString() === 'TypeError: Network request failed') {
      // app.navigator.navigate(NoInternetScreen);
      Keyboard.dismiss();
      return null;
    } else {
      return null;
    }
  }
}

export {UserDataProvider, loadData};
