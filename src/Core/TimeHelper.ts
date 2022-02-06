import { app } from "./AppImpl";

const getTimeRemaining = (endtime) => {
  const total = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));

  return {
    total,
    days,
    hours,
    minutes,
    seconds,
  };
};
const initializeClock = (
  identificator,
  defaultStyles: {title: string; disabled: boolean},
  endtime,
) => {
  const timeinterval = setInterval(() => {
    const t = getTimeRemaining(endtime);
    let Seconds = t.seconds < 10 ? `0${t.seconds}` : `${t.seconds}`;
    let Minutes = t.minutes < 10 ? `0${t.minutes}` : `${t.minutes}`;
    if (t.total <= 0 || app.currentUser.clearInterval) {
      clearInterval(timeinterval);
      identificator.updateTitle(defaultStyles.title);
      return false;
    }
    identificator.updateTitle(
      `${'Наступна спроба буде доступна через: ' + Minutes + ':' + Seconds}`,
    );
  }, 1000);
};
export {initializeClock};
