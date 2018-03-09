'use strict';
const Sequelize = require('sequelize');
const db = new Sequelize(process.env.DATABASE_URL, {dialect: 'postgres'});
const User = require('./user').User;

/**
 * Message model schema
 * @type {Model}
 */
const Message = db.define('messages', {
  message: {type: Sequelize.TEXT},
  identifier: {type: Sequelize.STRING}
});

/**
 * Relationship between user and message models that adds the
 * senderId to the message model.
 */
Message.belongsTo(User, {foreignKey: 'senderId', onDelete: 'CASCADE'});

/**
 * Relationship between user and message models that adds the
 * receiverId to the message model.
 */
Message.belongsTo(User, {foreignKey: 'receiverId', onDelete: 'CASCADE'});

/**
 * Create a chat message
 * @param chatInfo
 * @returns {Promise<chatInfo>}
 */
Message.addChat = chatInfo => db.sync().then(() => Message.create(chatInfo));

/**
 * Find all the messages which match the given identifier using the updatedAt field
 * for ordering the messages.
 * @param identifier Message identifier.
 * @returns {*}
 */
Message.getChatMessage = identifier => Message.findAll({where: {identifier}, order: ['updatedAt']});

module.exports = Message;