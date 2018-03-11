import {GET_ONLINE_USERS, USER_IS_TYPING, USER_STOPPED_TYPING} from "../actionTypes/actionsTypes";

/**
 * Action to add online users to the store.
 * @param users
 * @returns {{type, users: *}}
 */
export const addOnlineUsers = users => ({
  type: GET_ONLINE_USERS,
  users
});

/**
 * Action for user is typing.
 * @returns {{type, isTyping: *}}
 * @param email
 */
export const userTyping = email => ({
  type: USER_IS_TYPING,
  email
});

/**
 * Action for user has stopped typing.
 * @returns {{type, isTyping: *}}
 * @param email
 */
export const userStoppedTyping = email => ({
  type: USER_STOPPED_TYPING,
  email
});