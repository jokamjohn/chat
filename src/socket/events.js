const Message = require('./../models/message');
const Utils = require('../helpers/utils');

module.exports = io => {
  let numOnlineUsers = 0;
  let onlineUsers = {};

  /**
   * The server listens for the connection event.
   * This is triggered whenever a client connects to the server.
   */
  io.on('connection', client => {
    let addedUser = false;

    /**
     * Listen for the add user event.
     * When triggered, add a user to the onlineUsers object and then emit this object to
     * all connected clients.
     * Also increment the number of online users.
     */
    client.on('add user', user => {
      if (addedUser) return;
      client.username = user.email;
      onlineUsers[client.username] = Object.assign({}, {socketId: client.id}, user);
      ++numOnlineUsers;

      /**
       * The server emits a login event to all connected clients with an object
       * containing all online users.
       */
      io.emit('online users', onlineUsers);
    });

    /**
     * Listen for the chat message event and then save chat information into the database.
     * Then send the private message to the intended user.
     */
    client.on('chat message', async ({message, recipientId: receiverId, socketId, senderId}) => {
      try {
        const identifier = Utils.getIdentifier(senderId, receiverId);
        const chat = await Message.addChat({message, receiverId, senderId, identifier});
        io.to(socketId).emit('dm', chat);
        io.to(client.id).emit('own msg', chat);
      } catch (err) {
        console.log(err)
      }
    });

    /**
     * Listen for an event when a client/user logs out.
     * Then delete them from the list of online users.
     * Also emit an event for all the other users
     * online to all the connected clients.
     */
    client.on('log out', () => {
      deleteUserFromListOfOnlineUsers(client.id)
    });

    /**
     * Server  listening for an event when a client is disconnected.
     * At this point the disconnected client is removed from the list of online users
     */
    client.on('disconnect', () => {
      deleteUserFromListOfOnlineUsers(client.id)
    });
  });

  /**
   * Delete client from online users object when they go offline.
   * And also emit an event of the new online users to all
   * connected clients.
   * @param socketId
   */
  const deleteUserFromListOfOnlineUsers = socketId => {
    const onlineUserKeys = Object.keys(onlineUsers);
    for (let email of onlineUserKeys) {
      if (onlineUsers[email].socketId === socketId) {
        delete onlineUsers[email];
        --numOnlineUsers;
        io.emit('online users', onlineUsers)
      }
    }
  }
};