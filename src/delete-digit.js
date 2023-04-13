const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let str = n.toString();
  let arr = str.split('')
  if (arr.length > 2) {
    arr = arr.splice(0, str.length - 1);
  }

  let min = Math.min.apply(null, arr)

  return Number(str.slice(0, str.indexOf(min)) + str.slice(str.indexOf(min) + 1))
}

module.exports = {
  deleteDigit
};
