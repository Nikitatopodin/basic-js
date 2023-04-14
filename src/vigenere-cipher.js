const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }
  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    const upperCasedMessage = message.toUpperCase();
    let upperCasedKey = key.toUpperCase();
    const alphabet = this.alphabet;
    const isDirect = this.isDirect;
    let changedMessage = '';
    let result = '';
    let j = 0;

    while (upperCasedKey.length < upperCasedMessage.length) {
      upperCasedKey += upperCasedKey;
    }

    for (let i = 0; changedMessage.length < message.length; i++) {
      if (!this.alphabet.includes(upperCasedMessage[i])) {
        changedMessage += upperCasedMessage[i];
        j--
      } else {
        changedMessage += upperCasedKey[j];
      }
      j++
    }
    function encryptChangedMessage(changedMessage) {
      for (let i = 0; i < changedMessage.length; i++) {
        let letterIndex = alphabet.indexOf(upperCasedMessage[i]) + alphabet.indexOf(changedMessage[i]);
        if (!alphabet.includes(upperCasedMessage[i])) {
          result += upperCasedMessage[i];
        } else {
          if (letterIndex > 25) {
            letterIndex -= 26;
          }
          result += alphabet[letterIndex];
        }
      }
      if (!isDirect) {
        return result.split('').reverse().join('');
      } else {
        return result;
      }

    }

    return encryptChangedMessage(changedMessage);
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error('Incorrect arguments!');
    }

    const upperCasedMessage = encryptedMessage.toUpperCase();
    let upperCasedKey = key.toUpperCase();
    const alphabet = this.alphabet;
    const isDirect = this.isDirect;
    let changedMessage = '';
    let result = '';
    let j = 0;

    while (upperCasedKey.length < upperCasedMessage.length) {
      upperCasedKey += upperCasedKey;
    }
  
    for (let i = 0; changedMessage.length < encryptedMessage.length; i++) {
      if (!this.alphabet.includes(upperCasedMessage[i])) {
        changedMessage += upperCasedMessage[i];
        j--
      } else {
        changedMessage += upperCasedKey[j];
      }
      j++
    }
    console.log(changedMessage)
    function encryptChangedMessage(changedMessage) {
      for (let i = 0; i < changedMessage.length; i++) {
        let letterIndex = alphabet.indexOf(upperCasedMessage[i]) - alphabet.indexOf(changedMessage[i]);
        if (!alphabet.includes(upperCasedMessage[i])) {
          result += upperCasedMessage[i];
        } else {
          if (letterIndex < 0) {
            letterIndex += 26;
          }
          result += alphabet[letterIndex];
        }
      }
      if (!isDirect) {
        return result.split('').reverse().join('');
      } else {
        return result;
      }

    }

    return encryptChangedMessage(changedMessage);
  }
}

module.exports = {
  VigenereCipheringMachine
};
