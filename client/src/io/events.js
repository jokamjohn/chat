import socket from 'socket.io-client';

const io = socket('http://localhost:5000');

/**
 * Emit an event with the user details.
 * @param email User email address
 * @param name User name
 * @param userId User Id
 * @returns {*}
 */
export const addUserEvent = (email, name, userId) => io.emit('add user', {email, name, userId});

/**
 * Listen for an event when the user login into the application so that we get the
 * list of online users.
 * @param cb callback
 */
export const loginEvent = cb => {
  io.on('login', onlineUsers => cb(onlineUsers))
};