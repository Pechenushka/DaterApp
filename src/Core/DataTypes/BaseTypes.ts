import {genderEnum} from '../../Models/Components/Inputs/GenderSvitcherModel';

export type baseResponse = {
  statusCode: number;
  statusMessage: string;
};

export type anonPhotoLinkDataType = baseResponse & {
  data: {
    url: string;
    access: boolean;
  };
};

export type photoListDataType = baseResponse & {
  data: {
    list: Array<{url: string; checked: boolean | null}>;
  };
};

export type photoAccessRequestResponseDataType = baseResponse & {
  data: Array<photoAccessRequestItem>;
};

export type photoAccessRequestItem = {
  author_id: number;
  avatar: string;
  birthDate: number;
  gender: genderEnum;
  id: number;
  name: string;
  requestor_id: number;
  status: string;
};

export type guestsListDataType = baseResponse & {data: Array<guestsItemDataType>};

export type guestsItemDataType = {
  id: number;
  date: number;
  guestId: number;
  guestAvatar: string;
  guestGender: string;
  guestName: string;
  guestBirthDate: number;
  guestWay: number;
  isNew: boolean;
};

export type registrationResponseDataType = baseResponse & {
  data: {
    id: number;
    name: string;
    gender: genderEnum;
    email: string;
    phone: string;
    telegram: string;
    birthDate: number;
    location: {
      country: locationItemType;
      region: locationItemType;
      city: locationItemType;
    };
    checked: boolean;
    avatar: string;
    fcm: string;
    token: string;
  };
};

export type locationsResponseDataType = baseResponse & {
  data: Array<{
    id: number;
    name: string;
  }>;
};

export type searchResponseDataType = baseResponse & {
  data: Array<searchItemDataType>;
};

export type searchItemDataType = {
  authorAvatar: string;
  authorBirthDay: number;
  authorGender: genderEnum;
  authorId: number;
  authorName: string;
  cityName: string;
  countryName: string;
  id: number;
  regionName: string;
  text: string;
  checked: boolean;
  liked: boolean;
  lastOnline: number;
  lookingfor: number;
  goal: number;
  blocked: boolean;
  blockedBy: boolean;
  online_status: boolean;
  photos: Array<string>;
  anon_photos: Array<string>;
  photoAccess: boolean;
  alco: number;
  smoking: number;
  kids: number;
  sponsor: boolean;
  keepter: boolean;
};

export type userStatusResponseDataType = baseResponse & {
  data: {
    status: boolean;
  };
};

export type chatIsExistsResponseDataType = baseResponse & {
  data: boolean;
};

export type userDetailsResponseDataType = baseResponse & {
  data: userDetailsDataType;
};

export type userDetailsDataType = {
  avatar: string;
  birthDate: number;
  checked: boolean;
  cityName: string;
  contactAccess: boolean;
  countryName: string;
  email: string;
  gender: genderEnum;
  id: number;
  name: string;
  phone: string;
  regionName: string;
  telegram: string;
  liked: boolean;
  blocked: boolean;
  blockedBy: boolean;
  text: string;
  lastOnline: number;
  lookingfor: number;
  goal: number;
  online_status: boolean;
  photos: Array<string>;
  anon_photos: Array<string>;
  photoAccess: boolean;
  alco: number;
  smoking: number;
  kids: number;
  sponsor: boolean;
  keepter: boolean;
};

export type userMeetingDataType = baseResponse & {
  data: {
    cityName: string;
    countryName: string;
    id: number;
    regionName: string;
    text: string;
    lookingfor: number;
    goal: number;
    alco: number;
    smoking: number;
    kids: number;
    sponsor: boolean;
    keepter: boolean;
  };
};

export type locationItemType = {
  id: number;
  name: string;
};

export type requestBodyType = {
  [key: string]: any;
};

export type chatListResponseDataType = baseResponse & {
  data: Array<chatItemDataType>;
};

export type chatItemDataType = {
  avatar: string;
  chatHash: string;
  id: number;
  gender: genderEnum;
  lastMessage: string;
  lastMessageDate: number;
  name: string;
  unreadCount: number;
  userId: number;
  online_status: boolean;
};

export type getMesagesDataType = baseResponse & {
  data: {
    companion: companionDataType;
    messages: Array<messageItemDataType>;
  };
};

export type getMesagesCountDataType = baseResponse & {
  data: {
    count: number;
  };
};

export type getLikesCountDataType = baseResponse & {
  data: {
    likesCount: number;
    matchesCount: number;
  };
};

export type getRequestsCountDataType = baseResponse & {
  data: number;
};

export type fcmSyncDataType = baseResponse & {
  data: {
    fcm: string;
  };
};

export type companionDataType = {
  avatar: string;
  checked: boolean;
  gender: genderEnum;
  id: number;
  name: string;
  lastOnline: number;
  blocked: boolean;
  blockedBy: boolean;
  online_status: boolean;
};

export type messageItemDataType = {
  authorId: number;
  id: number;
  messageText: string;
  timestamp: number;
};

export type writeMessageResponseDataType = baseResponse & {
  data: {id: number};
};

export type FireBaseNotification = {
  collapseKey: string;
  data: {type: 'message' | 'like' | 'match' | 'resolveRequest'};
  from: string;
  messageId: string;
  notification: {android: any; body: string; title: string};
  sentTime: number;
  ttl: number;
};
