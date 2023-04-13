const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  // throw new NotImplementedError('Not implemented');
  if (!Array.isArray(members)) {
    return false
  }
  let result = [];

  let sortedMembers = members.sort((a, b) => {
    if (typeof a !== 'string') {
      return 1
    }
    if (typeof b !== 'string') {
      return -1
    } else {
      return a.trim().toUpperCase().charCodeAt(0) - b.trim().toUpperCase().charCodeAt(0)
    }
  })

  sortedMembers.forEach(member => {
    if (typeof member === "string") {
      result.push(member.trim()[0])
    }
  })
  return result.join('').toUpperCase()
}

module.exports = {
  createDreamTeam
};
