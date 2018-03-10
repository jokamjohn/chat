import {GET_ONLINE_USERS} from "../actionTypes/actionsTypes";

/**
 * Action to add online users to the store.
 * @param users
 * @returns {{type, users: *}}
 */
export const addOnlineUsers = users => ({
  type: GET_ONLINE_USERS,
  users
});