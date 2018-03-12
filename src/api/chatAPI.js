import {get} from "./api";
import {getTokenConfig} from "../utils/authService";

/**
 * Get all the chat messages of the current user and the recipient.
 * @param receiverId
 * @returns {*}
 */
export const getChatMessages = receiverId => get(`/chats/${receiverId}`, getTokenConfig());

