import initialState from "../initialState";
import {GET_ONLINE_USERS} from "../actionTypes/actionsTypes";

export default function (state = initialState.onlineUsers, action) {
  switch (action.type) {
    case GET_ONLINE_USERS:
      return {
        ...action.users,
      };

    default:
      return state;
  }
}