import * as c from '../constants/user';
import { Users } from '../models/user';

export function sucessGetUsers(users: Users[]) {
  return {
    type: c.GET_USERS,
    payload: {
      users: users
    }
  }
}
