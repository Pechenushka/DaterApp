import {genderEnum} from '../../Models/Components/Inputs/GenderSvitcherModel';

export type baseResponse = {
  statusCode: number;
  statusMessage: string;
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

export type searchItemDataType = baseResponse & {
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
};

export type userMeetingDataType = baseResponse & {
  data: {
    cityName: string;
    countryName: string;
    id: number;
    regionName: string;
    text: string;
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
