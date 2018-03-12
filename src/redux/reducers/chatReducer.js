import initialState from "../initialState";
import {GET_CHAT_MESSAGE, GET_CONVERSATION_MESSAGES, GET_OWN_CHAT_MESSAGE} from "../actionTypes/actionsTypes";

export default function (state = initialState.messages, action) {
  switch (action.type) {
    case GET_CONVERSATION_MESSAGES:
      return [
        ...action.messages
      ];

    case GET_CHAT_MESSAGE:
      return [
        ...state,
        action.message
      ];

    case GET_OWN_CHAT_MESSAGE:
      return [
        ...state,
        action.message
      ];

    default:
      return state;
  }
}