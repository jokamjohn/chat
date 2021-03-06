/**
 * Check to see whether an object is empty.
 * @param obj
 * @returns {boolean}
 */
export const isObjectEmpty = obj => Object.keys(obj).length === 0 && obj.constructor === Object;

/**
 * Change UTC seconds to a readable date
 * @param date
 * @returns {string}
 */
export const getReadableDate = date => {
  const dateObject = new Date(Date.parse(date));
  return dateObject.toDateString();
};

/**
 * Title case a sentence.
 * @param str
 */
export const titleCaseText = str => str.replace(/\w\S*/g, txt => `${txt.charAt(0).toUpperCase()}${txt.substr(1).toLowerCase()}`);

