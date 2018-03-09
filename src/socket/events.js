module.exports = io => {
  let numOnlineUsers = 0;
  let onlineUsers = {};
  io.on('connection', client => {
    let addedUser = false;
    console.log('connected');

    client.on('add user', user => {
      if (addedUser) return;
      client.username = user.email;
      onlineUsers[client.username] = Object.assign({}, {socketId: client.id}, user);
      ++numOnlineUsers;

      client.emit('login', onlineUsers);
    });

    client.emit('connected', {message: 'I work'});
    client.on('server', data => console.log('from client', data.message))
  });

};