const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let newArr = new Array(arr.length)
  let arrOfIndexes = [];
  let arrayWitnNoMinusOne = [];
  arr.forEach((elem, index) => {
    if (elem === -1) {
      arrOfIndexes.push(index)
    } else {
      arrayWitnNoMinusOne.push(elem)
    }
  })

  arrayWitnNoMinusOne.sort((a, b) => a - b);

  for (let i = 0; i < newArr.length; i++) {
    if (arrOfIndexes.includes(i)) {
      newArr[i] = -1
    } else {
      newArr[i] = arrayWitnNoMinusOne.splice(0, 1)
    }
  }
  return newArr.flat(1)
}

module.exports = {
  sortByHeight
};
