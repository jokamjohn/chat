'use strict';

const Router = require('koa-router');
const router = new Router();
const constants = require('../helpers/constants');
const authMiddleware = require('../middleware/auth');
const Message = require('../models/message');
const Utils = require('../helpers/utils');

/**
 * Route prefix.
 */
router.prefix(`${constants.API_V1_BASE_URL}/chats`);

/**
 * Auth middleware to check for a token on the request to the chat routes.
 */
router.use(authMiddleware);

/**
 * Get the receiver Id from the url and the sender Id from the token on the request
 * object.
 * Then get the identifier and return the messages and store then on the request
 * object.
 */
router.param('receiverId', async (id, cxt, next) => {
  if (!cxt.decode) return;
  const identifier = Utils.getIdentifier(cxt.decode.userId, id);
  cxt.messages = await Message.getChatMessage(identifier);
  return next();
});

/**
 * Route to get the chat messages for the given user with the receiverId
 * and the current user.
 */
router.get('/:receiverId', cxt => cxt.body = {messages: cxt.messages});

module.exports = router;