import {GET_CHAT_MESSAGE, GET_CONVERSATION_MESSAGES} from "../actionTypes/actionsTypes";
import {getChatMessages} from "../../api/chatAPI";
import {logout} from "./auth";

/**
 * Action to add chat messages to state.
 * @param messages
 * @returns {{type, messages: *}}
 */
export const addChatMessages = messages => ({
  type: GET_CONVERSATION_MESSAGES,
  messages
});

/**
 * Action to add a message to messages in state
 * @param message
 * @returns {{type, message: *}}
 */
export const addChatMessage = message => ({
  type: GET_CHAT_MESSAGE,
  message
});

/**
 * Get chat messages from the API.
 * @param recipientId Recipient Id
 * @returns {*|PromiseLike<{type, messages: *}>|Promise<{type, messages: *}>}
 */
export const getChatMessagesFromAPI = recipientId => dispatch => getChatMessages(recipientId)
    .then(res => dispatch(addChatMessages(res.data.messages)))
    .catch(err => {
      if (err.response) {
        if (err.response.status === 400) return dispatch(logout(false));
        return;
      }
    });
