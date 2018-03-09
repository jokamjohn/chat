/**
 * Create and return an identifier to be used in the message table.
 * @param senderId Message sender Id
 * @param receiverId Message recipient Id
 * @returns {string}
 */
const getIdentifier = (senderId, receiverId) => `${Math.max(senderId, receiverId)}-${Math.min(senderId, receiverId)}`;

module.exports.getIdentifier = getIdentifier;