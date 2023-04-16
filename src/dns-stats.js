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
  let resultObj = {};

  domains.forEach(elem => {
    newArr.push(elem.split('.').reverse().join('.'));
  })

  newArr.forEach((elem, index) => { 
    
    for (let i = 0; i < elem.length; i ++) {
      
      if (elem[i] === '.') {
        resultArr.push( '.' + elem.slice(0, i));
      }
      
    }
    resultArr.push('.' + elem);
  })
 
  resultArr.forEach(domain => {
    
    if (resultObj[domain]) {
      resultObj[domain] += 1;
    } else {
      resultObj[domain] = 1;
    }
  })
  
  return resultObj;
}

module.exports = {
  getDNSStats
};
