import { baseApiHost, isSuccess, option } from './fetch';

export const getUserJwtToken = async (email: string, password: string): Promise<string> => {
  const body = {
    email: email,
    password: password
  }
  const op = await option.json('POST', body);
  console.log('getUserJwtToken');
  console.log(body);
  return fetch(baseApiHost + '/userToken', op)
        .then(response => isSuccess(response))
        .then(json => json.jwt)
}
