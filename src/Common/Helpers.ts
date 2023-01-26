import {app} from '../Core/AppImpl';
import {_} from '../Core/Localization';
import {loadData, UserDataProvider} from '../DataProvider/UserDataProvider';

export class Helper {
  static pointsTextArray = ['точка', 'точки', 'точок'];
  static pronunciation(count: number, txtArr: Array<string>) {
    let cases = [2, 0, 1, 1, 1, 2];
    return txtArr[count % 100 > 4 && count % 100 < 20 ? 2 : cases[count % 10 < 5 ? count % 10 : 5]];
  }
}

export function numberWithSpaces(x: string) {
  if (x !== undefined) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  } else {
    return x;
  }
}

export function dateMoreThenToday(date: any) {
  return new Date().getTime() < date.getTime();
}

export const getAge = (birthdate: number) => {
  var years = new Date(new Date() - new Date(birthdate)).getFullYear() - 1970;
  return years;
};

export const SetVisit = async (visitedId: number, guestWay: number) => {
  const res = await loadData(UserDataProvider.SetVisit, {
    guestId: app.currentUser.userId,
    visitedId,
    guestWay,
  });

  if (res === null) {
    app.notification.showError(_.lang.warning, _.lang.servers_are_not_allowed);
    return;
  }
  if (res.statusCode !== 200) {
    app.notification.showError(_.lang.warning, res.statusMessage);
    return;
  }
};
