const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let newArr = [];
  let resultArr = [];
  domains.forEach(elem => {
    newArr.push(elem.split('.').reverse().join('.'));
  })

  newArr.flat().forEach((elem, index) => { 
    resultArr.push(elem + newArr.flat()[index+1])
     
  })
  return newArr
}

module.exports = {
  getDNSStats
};
