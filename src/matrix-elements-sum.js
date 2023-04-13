const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let result = 0;
  matrix.forEach((array, index) => {
    array.forEach((elem, j) => {
      if (index === 0) {
        result += matrix[index][j]
      }
      if (elem !== 0 && index != matrix.length - 1) {
        result += matrix[index + 1][j]
      }
    })
  })
  return result
}

module.exports = {
  getMatrixElementsSum
};
