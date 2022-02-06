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

class UserDataProvider {
  // Авторизація користувача
  static async Auth(body: requestBodyType): Promise<registrationResponseDataType> {
    return fetchData('users/auth', 'POST', body);
  }

  static async Registration(body: requestBodyType): Promise<registrationResponseDataType> {
    return fetchData('users/registration', 'POST', body);
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
    return fetchData(`users/${body.userId}/status`, 'GET');
  }

  static async GetUserDatails(body: requestBodyType): Promise<userDetailsResponseDataType> {
    return fetchData(`users/${body.userId}`, 'GET');
  }

  static async SetUserLike(body: requestBodyType): Promise<baseResponse> {
    return fetchData('users/like-user', 'POST', body);
  }

  static async SetUserReject(body: requestBodyType): Promise<baseResponse> {
    return fetchData('users/reject-user', 'POST', body);
  }

  static async CreateMeeting(body: requestBodyType): Promise<baseResponse> {
    return fetchData('meetings/add', 'POST', body);
  }

  static async EditMeeting(body: requestBodyType): Promise<baseResponse> {
    return fetchData('meetings/edit', 'POST', body);
  }

  static async GetUserMeeting(body: requestBodyType): Promise<userMeetingDataType> {
    return fetchData(`meetings/get-by-author/${body.authorId}`, 'GET');
  }

  static async GetUserLikes(body: requestBodyType): Promise<searchResponseDataType> {
    return fetchData('users/get-user-likes', 'POST', body);
  }

  static async GetLikesToUser(body: requestBodyType): Promise<searchResponseDataType> {
    return fetchData('users/get-likes-to-user', 'POST', body);
  }

  static async GetUserMatches(body: requestBodyType): Promise<searchResponseDataType> {
    return fetchData('users/get-user-matches', 'POST', body);
  }

  static async IsChatExists(body: requestBodyType): Promise<chatIsExistsResponseDataType> {
    return fetchData('chats/is-exists', 'POST', body);
  }

  //{ myId, userId, text, timestamp }
  static async WriteMessage(body: requestBodyType): Promise<writeMessageResponseDataType> {
    return fetchData('chats/write', 'POST', body);
  }

  //{ myId, userId }
  static async GetMessages(body: requestBodyType): Promise<getMesagesDataType> {
    return fetchData('chats/get-messages', 'POST', body);
  }

  static async GetUserChats(body: requestBodyType): Promise<chatListResponseDataType> {
    body;
    return fetchData(`chats/get-by-user/${app.currentUser.userId}`, 'GET');
  }

  static async SyncFCMToken(body: requestBodyType): Promise<fcmSyncDataType> {
    return fetchData('users/sync-token', 'POST', body);
  }

  static async SetIsOnline(body: requestBodyType): Promise<baseResponse> {
    return fetchData('users/set-online', 'POST', body);
  }

  static async GetMessagesCount(body: requestBodyType): Promise<getMesagesCountDataType> {
    return fetchData('chats/get-messages-count', 'POST', body);
  }

  static async GetLikesCount(body: requestBodyType): Promise<getLikesCountDataType> {
    return fetchData('users/get-user-counters', 'POST', body);
  }
}

async function loadData<T extends baseResponse, R extends requestBodyType>(func: (bodyF: R) => Promise<T>, params: R) {
  try {
    const body = params;
    const res = await func(body);
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
