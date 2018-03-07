'use strict';
const Sequelize = require('sequelize');
const db = new Sequelize(process.env.DATABASE_URL, {dialect: 'postgres'});
const bcrypt = require('bcrypt');

const SALT_WORK_FACTOR = 10;

/***
 * User schema
 * @type {Model|*|{}|void}
 */
const User = db.define('users', {
  name: {type: Sequelize.STRING, allowNull: false},
  email: {type: Sequelize.STRING, allowNull: false, unique: true},
  password: {type: Sequelize.STRING, allowNull: false}
});

/**
 * Hash the password before it is saved in the database.
 */
User.beforeCreate((user, options) => {
  return bcrypt.hash(user.password, SALT_WORK_FACTOR)
      .then(hash => user.password = hash);
});

/**
 * Class method to register a user.
 * @param userInfo
 * @returns {Promise<userInfo>}
 */
User.register = userInfo => {
  return db.sync()
      .then(() => User.create(userInfo))
};

/**
 * Log a user using the database.
 * @param email
 * @param password
 * @returns {Promise<null>}
 */
User.login = async (email, password) => {
  const user = await findUserByEmail(email);
  const isAuthenticated = await bcrypt.compare(password, user.password);
  return isAuthenticated ? user : null
};

/**
 * Find a user by their email.
 * @param email
 * @returns {*}
 */
const findUserByEmail = email => User.findOne({where: {email}});

module.exports.User = User;



