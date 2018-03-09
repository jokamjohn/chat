/**
 * Check to see whether an object is empty.
 * @param obj
 * @returns {boolean}
 */
export const isObjectEmpty = obj => Object.keys(obj).length === 0 && obj.constructor === Object;

