import socket from 'socket.io-client';
import {getUserId} from "../utils/authService";

const io = socket(process.env.REACT_APP_API_BASE_URL);

/**
 * Emit an event with the user details.
 * @param email User email address
 * @param name User name
 * @param userId User Id
 * @returns {*}
 */
export const addUserEvent = (email, name, userId) => io.emit('add user', {email, name, userId});

/**
 * Listen for an event online users that receives an object of all online users of the
 * application.
 * @param cb callback
 */
export const getOnlineUserEvent = cb => io.on('online users', onlineUsers => cb(onlineUsers));

/**
 * Emit an event that sends a chat message to the server.
 * @param message Chat message
 * @param recipientId Id of the user the message is directed to.
 * @param socketId Id of the recipient socket.
 */
export const sendChatMessageEvent = (message, recipientId, socketId) => io.emit('chat message', {
  message, recipientId, socketId, senderId: getUserId()
});

/**
 * Event listening for a private message from the server.
 * @param cb
 * @returns {*}
 */
export const getDirectMessageEvent = cb => io.on('dm', chat => cb(chat));

/**
 * Event listening for own chat message event.
 * This is because, I want to show the message only if I am sure it
 * hs been saved in the database.
 * @param cb
 * @returns {*}
 */
export const getOwnDirectMessageEvent = cb => io.on('own msg', chat => cb(chat));

/**
 * Emit an event when a user logs out.
 * @returns {*}
 */
export const logoutUserEvent = () => io.emit('log out');

/**
 * Emit an event when a user is typing
 * @returns {*}
 */
export const typingEvent = () => io.emit('typing');

/**
 * Emit an event when a user stops typing.
 * @returns {*}
 */
export const stopTypingEvent = () => io.emit('stop typing');

/**
 * Listen for an event for user typing
 * @param cb
 * @returns {*}
 */
export const onTypingEvent = cb => io.on('typing', ({email}) => cb(email));

/**
 * Listen for an event for when the user is done typing.
 * @param cb
 * @returns {*}
 */
export const onStopTypingEvent = cb => io.on('stop typing', ({email}) => cb(email));