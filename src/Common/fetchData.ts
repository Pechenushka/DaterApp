import {app} from '../Core/AppImpl';
import {appSettings} from './AppSettings';

export const fetchData = async (
  url: string,
  type: 'GET' | 'POST' | 'PUT' | 'DELETE',
  body: object | null = null,
  needAuth: boolean = false,
) => {
  // Aboard Fetch Data 15000
  const timeout = 15000;
  const controller = new AbortController();
  const id = setTimeout(() => {
    controller.abort();
  }, timeout);
  const endpoint = appSettings.apiEndpoint;
  if (needAuth) {
    body.auth = {
      userId: app.currentUser.userId,
      token: app.currentUser.token,
    };
  }
  // console.log('URL', url);
  const response = await fetch(`${endpoint}${url}`, {
    method: type,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: type !== 'GET' ? JSON.stringify(body) : null,
    signal: controller.signal,
  });
  clearTimeout(id);

  if (response.ok) {
    return await response.json();
  } else {
    throw 500;
  }
};
