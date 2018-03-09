import socket from 'socket.io-client';

const io = socket('http://localhost:5000');

export const getConnected = () => {
  io.on('connected', data => console.log('server response', data.message));
  io.emit('server', {message: 'From the client'})
};

/**
 * Emit an event with the user details.
 * @param email User email address
 * @param name User name
 * @returns {*}
 */
export const addUserEvent = (email, name) => io.emit('add user', {email, name});

/**
 * Listen for an event when the user login into the application so that we get the
 * list of online users.
 * @param cb callback
 */
export const loginEvent = cb => {
  io.on('login', onlineUsers => cb(onlineUsers))
};