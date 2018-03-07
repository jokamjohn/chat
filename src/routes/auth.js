'use strict';

const Router = require('koa-router');
const router = new Router();
const constants = require('../helpers/constants');
const User = require('../models/user').User;
const Utils = require('../helpers/token');

const secret = process.env.SECRET;

router.prefix(`${constants.API_V1_BASE_URL}/auth`);

/**
 * Route to login a user
 */
router.post('/login', cxt => {
  if (!(cxt.request.body['email'] && cxt.request.body['password'])) {
    cxt.status = 400;
    return cxt.body = {
      status: 'failed',
      message: 'Missing email or password'
    }
  }
  return User.login(cxt.request.body['email'], cxt.request.body['password'])
      .then(user => {
        if (user) return cxt.body = {
          status: 'success',
          token: Utils.mintToken(user, secret)
        };
        cxt.status = 400;
        return cxt.body = {
          status: 'failed',
          message: 'Wrong password submitted'
        }
      })
      .catch(err => {
        cxt.status = 400;
        return cxt.body = {
          status: 'failed',
          message: 'Unknown error occurred'
        }
      });
});

/**
 * Route for user to register
 */
router.post('/register', cxt => {
  if (!(cxt.request.body['name'] && cxt.request.body['email'] && cxt.request.body['password'])) {
    cxt.status = 400;
    return cxt.body = {
      status: 'failed',
      message: 'Missing name, email or password'
    }
  }
  return User.register(cxt.request.body)
      .then(user => {
        cxt.status = 201;
        cxt.body = {
          status: 'success',
          message: 'User created successfully'
        }
      })
      .catch(err => {
        cxt.status = 400;
        return cxt.body = {
          status: 'failed',
          message: 'Unknown error occurred'
        }
      });
});

module.exports = router;

