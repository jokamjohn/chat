'use strict';

require('dotenv').config();
const Koa = require('koa');
const app = new Koa();
const http = require('http').createServer(app.callback());
const io = require('socket.io')(http);
const koaBody = require('koa-body');
const authRoutes = require('./src/routes/auth');

const port = process.env.PORT || 3000;

app.use(koaBody());
app.use(authRoutes.routes());

io.on('connection', socket => {
  console.log('connected')
});

http.listen(port, () => console.log(`server running on port ${port}`));





