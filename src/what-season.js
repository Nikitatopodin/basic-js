const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  // throw new NotImplementedError('Not implemented');
  if (date == null) {
    return 'Unable to determine the time of year!'
  }
  try {
    date.getMonth() === Date.prototype.getDate.call(date);
  }
  catch {
    throw new Error("Invalid date!");
  }

  const currentMonth = date.getMonth();
  if (currentMonth >= 2 && currentMonth < 5) {
    return 'spring'
  } else if (currentMonth >= 5 && currentMonth < 8) {
    return 'summer'
  } else if (currentMonth >= 8 && currentMonth < 11) {
    return 'fall'
  } else {
    return 'winter'
  }
}

module.exports = {
  getSeason
};
