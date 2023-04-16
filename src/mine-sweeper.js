const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let mtrx = JSON.parse(JSON.stringify(matrix));
  mtrx.forEach(elem => {
    for (let i = 0; i < elem.length; i++) {
      elem[i] = 0;
    }
  })

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
           
        if (i === 0) {
          if (matrix[i][j] === true) {
            if(j === 0) {
            mtrx[i][j] = 1;
            mtrx[i + 1][j] += 1;
            mtrx[i][j + 1] += 1;
            mtrx[i + 1][j + 1] += 1;
            }
            if (j > 0 && j < matrix[i].length - 1) {
            mtrx[i][j] = 1;
            mtrx[i + 1][j] += 1;
            mtrx[i][j + 1] += 1;
            mtrx[i + 1][j + 1] += 1;
            mtrx[i][j-1] += 1;
            }
            if (j === matrix[i].length - 1) {
            mtrx[i][j] = 1;
            mtrx[i + 1][j] += 1;
            mtrx[i + 1][j - 1] += 1;
            mtrx[i][j-1] += 1;
            }
          }
      } else if (i > 0 && i < mtrx.length - 1) {
        if (matrix[i][j] === true) {
          if(j === 0) {
            mtrx[i][j] = 1;
            mtrx[i + 1][j] += 1;
            mtrx[i][j + 1] += 1;
            mtrx[i + 1][j + 1] += 1;
            mtrx[i - 1][j] += 1;
            mtrx[i-1][j+1] += 1;
            }
          if (j > 0 && j < matrix[i].length - 1) {
          mtrx[i][j] = 1;
          mtrx[i + 1][j] += 1;
          mtrx[i][j + 1] += 1;
          mtrx[i + 1][j + 1] += 1;
          mtrx[i - 1][j] += 1;
          mtrx[i - 1][j - 1] += 1;
          mtrx[i][j - 1] += 1;
          mtrx[i-1][j+1] += 1;
          mtrx[i+1][j-1] += 1;
          }
           if (j === matrix[i].length - 1) {
          mtrx[i][j] = 1;
          mtrx[i + 1][j] += 1;
          mtrx[i - 1][j] += 1;
          mtrx[i - 1][j - 1] += 1;
          mtrx[i][j - 1] += 1;
          mtrx[i+1][j-1] += 1;
        }
        }
      } else if (i === matrix.length - 1) {
          if (matrix[i][j] === true) {
          if(j === 0) {
            mtrx[i][j] = 1;
            mtrx[i][j + 1] += 1;
            mtrx[i - 1][j] += 1;
            mtrx[i-1][j+1] += 1;
            }
          if (j > 0 && j < matrix[i].length - 1) {
          mtrx[i][j] = 1;
          mtrx[i][j + 1] += 1;
          mtrx[i - 1][j] += 1;
          mtrx[i - 1][j - 1] += 1;
          mtrx[i][j - 1] += 1;
          mtrx[i-1][j+1] += 1;
          }
           if (j === matrix[i].length - 1) {
          mtrx[i][j] = 1;
          mtrx[i - 1][j] += 1;
          mtrx[i - 1][j - 1] += 1;
          mtrx[i][j - 1] += 1;
        }
        }
      }
    }
    }
  mtrx.forEach((elem, index) => {
    for (let i = 0; i < elem.length; i++) {
      if (matrix[index][i] === true) {
        elem[i] = 1;
      }
    }
  })
  return mtrx
}

module.exports = {
  minesweeper
};
