const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {

  let separator = options.separator;
  let addition = options.addition;
  let additionRepeatTimes = options.additionRepeatTimes;
  let additionSeparator = options.additionSeparator;
  let repeatTimes = options.repeatTimes;

  if (typeof str !== 'string') {
    str = String(str)
  }
  if (!options.separator) {
    separator = '+'
  }
  if (!options.repeatTimes) {
    repeatTimes = 1
  }
  if (options.addition === undefined) {
    addition = '';
  } else {
    addition = String(options.addition)
  }
  if (!options.additionRepeatTimes) {
    additionRepeatTimes = 1;
  }
  if (!options.additionSeparator) {
    additionSeparator = '|';
  }

  let additionPlusSeparator = (addition + additionSeparator).repeat(additionRepeatTimes);
  let completeAddition = additionPlusSeparator;

  if (additionRepeatTimes > 1) {
    completeAddition = completeAddition.slice(0, completeAddition.length - additionSeparator.length)
  } else {
    completeAddition = addition;
  }

  let newStr = (str + completeAddition + separator).repeat(repeatTimes);

  if (addition == '') {
    newStr = (str + separator).repeat(repeatTimes)
  }

  return newStr.slice(0, newStr.length - separator.length)

}
module.exports = {
  repeater
};
