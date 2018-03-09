const Utils = require('../helpers/token');

/**
 * Require a token from the user before they can access protected routes.
 * @param cxt
 * @param next
 * @returns {Promise<void>}
 */
module.exports = async (cxt, next) => {
  let decodedToken;
  const token = cxt.headers['x-access-token'];
  const SECRET = process.env.SECRET;
  try {
    if (token) {
      Utils.decodeToken(token, SECRET, function (err, decode) {
        if (err) {
          cxt.status = 400;
          return cxt.body = {
            status: 'failed',
            message: 'Failed to authenticate the token'
          };
        } else {
          decodedToken = decode;
        }
      });
    } else {
      cxt.status = 403;
      cxt.body = {
        status: 'failed',
        message: 'No token provided'
      };
      return;
    }
    cxt.decode = decodedToken;
    await next();
  } catch (error) {
    cxt.throw(500, error);
  }
};
