import Cookies from 'js-cookie';

export const baseApiHost = process.env.REACT_APP_API_BASE_HOST;

const json = (method = 'GET', body: unknown = null) => {
  const token = Cookies.get('jwt');
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

export const isSuccess = (response: any) => {
  return response.ok
    ? response.json()
    : response.json().then((error: any) => {
      throw Error(error)
    })
}
