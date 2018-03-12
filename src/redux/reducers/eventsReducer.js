import initialState from "../initialState";
import {GET_ONLINE_USERS, USER_IS_TYPING, USER_STOPPED_TYPING} from "../actionTypes/actionsTypes";

export default function (state = initialState.onlineUsers, action) {
  switch (action.type) {
    case GET_ONLINE_USERS:
      return {
        ...action.users,
      };

    case USER_IS_TYPING:
      let onlineUsers = state;
      const emailsList = Object.keys(state);
      emailsList.map(email => {
        if (email === action.email) {
          return onlineUsers[email] = Object.assign({}, state[email], {typing: true});
        }
        return email;
      });
      return {
        ...onlineUsers
      };

    case USER_STOPPED_TYPING:
      let onlineUsers_ = state;
      const emailsList_ = Object.keys(state);
      emailsList_.map(email => {
        if (email === action.email) {
          return onlineUsers_[email] = Object.assign({}, state[email], {typing: false});
        }
        return email;
      });
      return {
        ...onlineUsers_
      };

    default:
      return state;
  }
}