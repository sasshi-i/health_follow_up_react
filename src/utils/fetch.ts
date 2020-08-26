import { getUserJwtToken } from './auth';

const baseHost = process.env.REACT_APP_API_BASE_HOST;

const json = (token: string, method = 'GET', body: unknown = null) => {
  const init = {
    method: method,
    mode: 'cors',
    headers: {
      Authorization: 'Bearer ' + token,
      Accept: 'application/json',
      'Content-Type': 'application/json; charset=UTF-8',
    }
  };

  return body
  ? {...init, body: JSON.stringify(body)}
  : init;
};

/**
 * リクエストオプション
 */
export const option = {
  json,
};
