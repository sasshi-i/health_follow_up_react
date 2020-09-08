import { Dispatch } from 'redux'
import * as actions from '../actions/user'
import { baseApiHost, isSuccess, option } from '../utils/fetch';

export const getUsers = () => async (dispatch: Dispatch) => {
  // const res = await axios.get(`${baseHost}/users`)
  const op = option.json();
  return fetch(baseApiHost + 'users', op)
    .then(response => isSuccess(response))
    .then(json => dispatch(actions.sucessGetUsers(json.users)))
}
