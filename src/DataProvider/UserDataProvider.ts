import {fetchData} from '../Common/fetchData';
import {Keyboard} from 'react-native';
import {
  anonPhotoLinkDataType,
  baseResponse,
  chatIsExistsResponseDataType,
  chatListResponseDataType,
  fcmSyncDataType,
  getLikesCountDataType,
  getMesagesCountDataType,
  getMesagesDataType,
  getRequestsCountDataType,
  guestsListDataType,
  locationsResponseDataType,
  photoAccessRequestResponseDataType,
  photoListDataType,
  publicChatListResponseDataType,
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
    console.log(`users/${app.currentUser.token}/${body.userId}/status`);
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

  //{ myId, userId, text, timestamp }
  static async WriteMessageCity(body: requestBodyType): Promise<writeMessageResponseDataType> {
    return fetchData('chats/write-city', 'POST', body, true);
  }

  //{ myId, userId, text, timestamp }
  static async WriteMessageRegion(body: requestBodyType): Promise<writeMessageResponseDataType> {
    return fetchData('chats/write-region', 'POST', body, true);
  }

  //{ myId, userId, text, timestamp }
  static async WriteMessageCountry(body: requestBodyType): Promise<writeMessageResponseDataType> {
    return fetchData('chats/write-country', 'POST', body, true);
  }

  //{ myId, userId }
  static async GetMessages(body: requestBodyType): Promise<getMesagesDataType> {
    return fetchData('chats/get-messages', 'POST', body, true);
  }

  //{target, targetId, messageId, comment, authorId}
  static async ReportMessage(body: requestBodyType): Promise<writeMessageResponseDataType> {
    return fetchData('chats/report-message', 'POST', body, true);
  }

  static async GetCityMessages(body: requestBodyType): Promise<getMesagesDataType> {
    return fetchData(
      `chats/${app.currentUser.token}/${app.currentUser.userId}/get-city-messages?cityId=${body.cityId}&offset=${body.offset}&limit=${body.limit}`,
      'GET',
      body,
      true,
    );
  }

  static async GetRegionMessages(body: requestBodyType): Promise<getMesagesDataType> {
    return fetchData(
      `chats/${app.currentUser.token}/${app.currentUser.userId}/get-region-messages?regionId=${body.regionId}&offset=${body.offset}&limit=${body.limit}`,
      'GET',
      body,
      true,
    );
  }

  static async GetCountryMessages(body: requestBodyType): Promise<getMesagesDataType> {
    return fetchData(
      `chats/${app.currentUser.token}/${app.currentUser.userId}/get-country-messages?countryId=${body.countryId}&offset=${body.offset}&limit=${body.limit}`,
      'GET',
      body,
      true,
    );
  }

  static async GetUserChats(body: requestBodyType): Promise<chatListResponseDataType> {
    return fetchData(
      `chats/${app.currentUser.token}/get-by-user/${app.currentUser.userId}?offset=${body.offset}&limit=${body.limit}`,
      'GET',
    );
  }

  static async GetPublicUserChats(body: requestBodyType): Promise<publicChatListResponseDataType> {
    return fetchData(
      `chats/${app.currentUser.token}/${app.currentUser.userId}/get-public-chats`,
      'GET',
    );
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

  static async GetRequestsCount(body: requestBodyType): Promise<getRequestsCountDataType> {
    return fetchData('users/get-user-request-couter', 'POST', body, true);
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

  static async DeleteUserAvatar(body: requestBodyType): Promise<baseResponse> {
    return fetchData(`users/delete-avatar`, 'POST', body, true);
  }

  static async DeleteChat(body: requestBodyType): Promise<baseResponse> {
    return fetchData(`chats/delete-chat`, 'POST', body, true);
  }

  static async GetUrlOfAnonPhoto(body: requestBodyType): Promise<anonPhotoLinkDataType> {
    return fetchData(`users/anon-photo-check`, 'POST', body, true);
  }

  static async GetUserPhotos(body: requestBodyType): Promise<photoListDataType> {
    return fetchData(`users/get-photos`, 'POST', body, true);
  }

  static async GetUserAnonPhotos(body: requestBodyType): Promise<photoListDataType> {
    return fetchData(`users/get-anon-photos`, 'POST', body, true);
  }

  static async DeleteUserPhoto(body: requestBodyType): Promise<baseResponse> {
    return fetchData(`users/delete-photo`, 'POST', body, true);
  }

  static async DeleteUserAnonPhoto(body: requestBodyType): Promise<baseResponse> {
    return fetchData(`users/delete-anon-photo`, 'POST', body, true);
  }

  static async RequestAccesToAnonPhoto(body: requestBodyType): Promise<baseResponse> {
    return fetchData(`users/request-photo-access`, 'POST', body, true);
  }

  static async GetPhotoAccessRequest(
    body: requestBodyType,
  ): Promise<photoAccessRequestResponseDataType> {
    return fetchData(`users/get-access-requests`, 'POST', body, true);
  }

  static async handlePhotoAccessRequest(body: requestBodyType): Promise<baseResponse> {
    return fetchData(`users/resolve-access-request`, 'POST', body, true);
  }

  static async ReportPhoto(body: requestBodyType): Promise<baseResponse> {
    return fetchData('users/report-photo', 'POST', body, true);
  }
  /**{userId, offset, limit} */
  static async GetGuests(body: requestBodyType): Promise<guestsListDataType> {
    return fetchData(`guests/get-visitors`, 'POST', body, true);
  }
  /**{userId, offset, limit} */
  static async GetVisits(body: requestBodyType): Promise<guestsListDataType> {
    return fetchData(`guests/get-visits`, 'POST', body, true);
  }
  /** {guestId, visitedId, guestWay} */
  static async SetVisit(body: requestBodyType): Promise<guestsListDataType> {
    return fetchData(`guests/set-visitor`, 'POST', body, true);
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
