import axios from 'axios';
import { Dispatch } from 'redux';
import * as c from '../../constants/user';

const ROOT_URL = 'http://localhost:43001'

export const getUsers = () => async (dispatch: Dispatch) => {
  const res = await axios.get(`${ROOT_URL}/users`)
  dispatch({type: c.GET_USERS, res})
}
