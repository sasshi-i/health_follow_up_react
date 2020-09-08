import { baseApiHost, isSuccess } from '../utils/fetch';

export const getUserJwtToken = (email: string, password: string): Promise<string> => {
  return fetch(baseApiHost + '/userToken', {method: 'POST'})
        .then(response => isSuccess(response))
        .then(json => json.jwt)
}
