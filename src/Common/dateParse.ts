import {app} from '../Core/AppImpl';
import {_} from '../Core/Localization';

export function convertToUTCString(date: string, timeOffset = '+02:00') {
  if (date === undefined || date === null) {
    return '01.01.1970';
  }
  date = date.replace('T', ' ');
  const dateArr = date.split(' ');
  const reformatDate = dateArr[0].split('.');
  const utcString =
    reformatDate[2] + '-' + reformatDate[1] + '-' + reformatDate[0] + 'T' + dateArr[1];
  ///AppLog.log(utcString);
  return utcString;
}

export function dateParse(dateString: string) {
  return new Date(Date.parse(dateString));
}

export function dateTimeToTimeString(date: Date) {
  const hours = `0${date.getHours()}`.slice(-2);
  const minutes = `0${date.getMinutes()}`.slice(-2);
  return `${hours}:${minutes}`;
}
// 12:00:22  15.04.2021
export function dateTimeAndDate(date: Date | undefined) {
  if (!date) {
    return '';
  }
  const hours = `0${date.getHours()}`.slice(-2);
  const minutes = `0${date.getMinutes()}`.slice(-2);
  const month = `0${date.getMonth() + 1}`.slice(-2);
  const day = `0${date.getDate()}`.slice(-2);
  return `${hours}:${minutes} ${day}.${month}.${date.getFullYear()}`;
}
export function dateTimeToDateString(date: Date | undefined) {
  if (!date) {
    return '';
  }
  const month = `0${date.getMonth() + 1}`.slice(-2);
  const day = `0${date.getDate()}`.slice(-2);
  return `${day}.${month}.${date.getFullYear()}`;
}
export function dateTimeToDateStringSmall(date: Date | undefined) {
  if (!date) {
    return '';
  }
  const month = `0${date.getMonth() + 1}`.slice(-2);
  const day = `0${date.getDate()}`.slice(-2);
  const year = `${date.getFullYear()}`.slice(-2);
  return `${day}.${month}.${year}`;
}

// yyy-mm-dd
export function dateTimeToSendServer(date: Date | undefined) {
  if (!date) {
    return '';
  }
  const month = `0${date.getMonth() + 1}`.slice(-2);
  const day = `0${date.getDate()}`.slice(-2);
  return `${date.getFullYear()}-${month}-${day}`;
}

export function strToDateStr(str: string, type: 'date' | 'time' = 'date') {
  return type === 'date'
    ? dateTimeToDateString(dateParse(convertToUTCString(str)))
    : dateTimeToTimeString(dateParse(convertToUTCString(str)));
}

export function differenceTwoDate(dateStr1: string, dateStr2: string) {
  const millisecondsInDay = 1000 * 60 * 60 * 24;
  // const millisecondsInHour = 1000 * 60 * 60;
  const date1 = dateParse(convertToUTCString(dateStr1));
  const date2 = dateParse(convertToUTCString(dateStr2));

  // let difference =
  //   Math.abs(date1.getTime() - date2.getTime()) / millisecondsInDay;
  // if (difference > 0) {
  //   return Math.trunc(difference);
  // } else {
  //   difference =
  //     Math.abs(date1.getTime() - date2.getTime()) / millisecondsInHour;
  //   return Math.trunc(difference);
  // }
  const difference = Math.abs(date1.getTime() - date2.getTime()) / millisecondsInDay;
  if (difference > 0 && difference < 1) {
    return 1;
  } else {
    return Math.trunc(difference);
  }
}

// recieve in format dd.mm.yyyy
export const stringToServerDate = (string: string): string => {
  try {
    const splites = string.split('.');
    const dd = splites[0];
    const mm = splites[1];
    const yyyy = splites[2];
    return `${yyyy}-${mm}-${dd}`;
  } catch (e) {
    console.log('date ex', e);
    return string;
  }
};
// recieve in format HH:MM
export const stringToServerTime = (string: string): string => {
  try {
    const splites = string.split(':');
    const HH = splites[0];
    const MM = splites[1];
    const SS = splites[2] !== undefined ? splites[2] : '00';
    return `${HH}:${MM}:${SS}`;
  } catch (e) {
    console.log('time ex', e);
    return string;
  }
};

export const datePlusTimeServerString = (date: string, time: string): string => {
  try {
    return `${stringToServerDate(date)}T${stringToServerTime(time)}`;
  } catch (e) {
    console.log('serverTimeEx', e);
    return '';
  }
};

export const dayMonth = (date: string, today?: boolean) => {
  try {
    const splites = date.split('T')[0].split('.');
    const DD = splites[0];
    const MM = splites[1];

    if (today) {
      const todayDate = new Date();
      var dd = String(todayDate.getDate()).padStart(2, '0');
      var mm = String(todayDate.getMonth() + 1).padStart(2, '0');
      if (`${DD}/${MM}` === `${dd}/${mm}`) {
        return `сьогодні`;
      } else {
        return serverDateStringToDateStringSmall(date);
      }
    }
    return serverDateStringToDateStringSmall(date);
  } catch (e) {
    console.log('time ex', e);
    return date;
  }
};

export const getTime = (date: string) => {
  try {
    const splites = date.split('T')[1];
    return splites;
  } catch (e) {
    console.log('time ex', e);
    return date;
  }
};

// convert SERVER DATE to view date ForExample: 10:42 07.01.21
export const serverDateStringToTimeAndDateString = (date: string) => {
  return dateTimeAndDate(dateParse(convertToUTCString(date)));
};

// convert SERVER DATE to view date ForExample: 07.01.2021
export const serverDateStringToDateString = (date: string) => {
  return dateTimeToDateString(dateParse(convertToUTCString(date)));
};
// convert SERVER DATE to view time ForExample: 10:42
export const serverDateStringToTimeString = (date: string) => {
  return dateTimeToTimeString(dateParse(convertToUTCString(date)));
};
// convert SERVER DATE to view date with time ForExample: 07.01.21 10:42
export const serverDateStringToDateWithTimeString = (date: string) => {
  const dd = dateParse(convertToUTCString(date));
  return `${dateTimeToDateString(dd)} ${dateTimeToTimeString(dd)}`;
};
// convert SERVER DATE to view date ForExample: 07.01.21
export const serverDateStringToDateStringSmall = (date: string) => {
  return dateTimeToDateStringSmall(dateParse(convertToUTCString(date)));
};
const months = [
  'Січень',
  'Лютий',
  'Березень',
  'Квітень',
  'Травень',
  'Червень',
  'Липень',
  'Серпень',
  'Вересень',
  'Жовтень',
  'Листопад',
  'Грудень',
];
const monthsVidmina = [
  'Січня',
  'Лютого',
  'Березня',
  'Квітня',
  'Травня',
  'Червня',
  'Липня',
  'Серпня',
  'Вересня',
  'Жовтня',
  'Листопада',
  'Грудня',
];
//Accept server date and as second argument a boolean
//Returning date type
//If time: true will return time
export const getMonthVidmina = (date: string, time?: boolean) => {
  if (date === undefined) {
    return 'Неизвестно';
  }
  let currentTime = date.split('T')[1];
  let hh = currentTime.split(':')[0];
  let mm = currentTime.split(':')[1];
  let ss = currentTime.split(':')[2];

  let currentDate = date.split('T')[0];
  let DD = currentDate.split('.')[0];
  let MM = currentDate.split('.')[1];
  let YY = currentDate.split('.')[2];
  let formattedMM = monthsVidmina[parseInt(MM) - 1];
  let formattedDate = `${DD} ${formattedMM} ${YY}`;

  if (time) {
    return `${hh}:${mm}`;
  }

  return formattedDate;
};
export const getMonth = (serverString: string) => {
  try {
    const dd = serverString.split('T')[0].split('.');
    let month = +dd[1];
    return `${months[month - 1]} ${dd[2]}`;
  } catch (e) {
    return serverString;
  }
};
// date
export const formatDateToTime = dateString => {
  if (dateString === null || dateString === undefined) {
    return;
  }
  const date = dateString.replace('T', ' ');
  const dateArr = date.split(' ');
  const times = dateArr[1].split(':');
  return [times[0], ':', times[1]].join('');
};

export const getDayWeeks = (day: number) => {
  if (typeof day !== 'number') {
    return;
  }
  switch (day) {
    case 0:
      return 'Неділя';
    case 1:
      return 'Понеділок';
    case 2:
      return 'Вівторок';
    case 3:
      return 'Cереда';
    case 4:
      return 'Четвер';
    case 5:
      return "П'ятниця";
    case 6:
      return 'Cубота';
  }
};
// check day is today
export const isToday = (someDate: string) => {
  const today = new Date();
  const dateFromServer = dateParse(convertToUTCString(someDate));
  return (
    dateFromServer.getDate() == today.getDate() &&
    dateFromServer.getMonth() == today.getMonth() &&
    dateFromServer.getFullYear() == today.getFullYear()
  );
};
export const getDayWeeksTwo = (day: number) => {
  if (typeof day !== 'number') {
    return;
  }
  switch (day) {
    case 0:
      return 'нд';
    case 1:
      return 'пн';
    case 2:
      return 'вт';
    case 3:
      return 'ср';
    case 4:
      return 'чт';
    case 5:
      return 'пт';
    case 6:
      return 'сб';
  }
};

export const getShortDate = (dateTimeStamp: number) => {
  const date = new Date(dateTimeStamp);
  const dateDiference = new Date().getTime() - dateTimeStamp;

  if (dateDiference < 40 * 1000) {
    return _.lang.just_now;
  }

  if (dateDiference < 60 * 60 * 1000) {
    return `${Math.ceil(dateDiference / 1000 / 60)} ${_.lang.minutes_ago}`;
  }

  const hours = `0${date.getHours()}`.slice(-2);
  const minutes = `0${date.getMinutes()}`.slice(-2);

  return `${date.getDate()} ${_.lang.month[date.getMonth()]} ${hours}:${minutes}`;
};

export const getTimeDate = (dateTimeStamp: number) => {
  const date = new Date(dateTimeStamp);
  const dateDiference = new Date().getTime() - dateTimeStamp;

  if (dateDiference < 40 * 1000) {
    return _.lang.just_now;
  }

  if (dateDiference < 60 * 60 * 1000) {
    return `${Math.ceil(dateDiference / 1000 / 60)} ${_.lang.minutes_ago}`;
  }

  if (dateDiference > 60 * 60 * 1000 * 24 * 1000) {
    return `${_.lang.long_time_ago}`;
  }

  const hours = `0${date.getHours()}`.slice(-2);
  const minutes = `0${date.getMinutes()}`.slice(-2);

  return `${hours}:${minutes}`;
};

export const getTimeDateLong = (dateTimeStamp: number) => {
  const date = new Date(dateTimeStamp);
  const dateDiference = new Date().getTime() - dateTimeStamp;
  const currYear = new Date().getFullYear();

  if (dateDiference < 40 * 1000) {
    return _.lang.just_now;
  }

  if (dateDiference < 60 * 60 * 1000) {
    return `${Math.ceil(dateDiference / 1000 / 60)} ${_.lang.minutes_ago}`;
  }

  if (dateDiference > 60 * 60 * 1000 * 24 * 1000) {
    return `${_.lang.long_time_ago}`;
  }

  const hours = `0${date.getHours()}`.slice(-2);
  const minutes = `0${date.getMinutes()}`.slice(-2);
  const day = `0${date.getDate()}`.slice(-2);
  const month = `0${date.getMonth()}`.slice(-2);

  return `${
    date.getFullYear() === currYear ? '' : `${date.getFullYear()}.`
  }${month}.${day} ${hours}:${minutes}`;
};
