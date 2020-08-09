import * as c from '../constants/user';

type userParam = {
  discloseId: string,
  firstName: string,
  lastName: string,
  gender: string,
  homeRemedyStartOn: Date,
  userStatusId: number,
  isAlert: boolean
}
type IState = {
  isGettingUser: boolean,
  users?: userParam[],
}

const initialState: IState = {
  isGettingUser: false,
  users: []
}

export default function user(state = initialState, action: any) {
  switch (action.type){
    case c.GET_USERS:
      return {
        ...state,
        users: action.payload.users
      };
    default:
      return state;
  }
}
