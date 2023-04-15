const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {

  chain: [],

  getLength() {

    return this.chain.length;
    
  },

  addLink(value = ' ') {

    if (value === ' ') {
      value = '( )';
    }
    this.chain.push(`( ${String(value)} )`);
    return this;

  },

  removeLink(position) {

    if (typeof position !== 'number' ||
    position > this.chain.length ||
    position < 1) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }

    this.chain.splice(position - 1, 1);
    return this;
  },

  reverseChain() {

    this.chain.reverse();
    return this;

  },

  finishChain() {

    let resultChain = this.chain.join('~~');
    this.chain = [];
    return resultChain;
  }

};

module.exports = {
  chainMaker
};
