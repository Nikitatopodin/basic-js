const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  //throw new NotImplementedError('Not implemented')
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!")
  }
  let result = [];
  arr.forEach((elem, index) => {
    if (elem === '--double-next' ||
      elem === '--double-prev' ||
      elem === '--discard-next' ||
      elem === '--discard-prev') {
      if (elem === '--discard-next') {
        arr.splice(index, 2)
      }
      if (elem === '--discard-prev') {
        result.splice(result.length - 1)
      }
      if (elem === '--double-next') {
        if (index !== arr.length - 1)
          result.push(arr[index + 1])
      }
      if (elem === '--double-prev') {
        if (index !== 0)
          result.push(arr[index - 1])
      }
    } else {
      result.push(elem)
    }
  })
  return result
}

module.exports = {
  transform
};
