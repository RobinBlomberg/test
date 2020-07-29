const ErrorMessages = require('error').Messages
const baseDeepEqual = require('utility').deepEqual

const deepEqual = (a, b) => {
  if (!baseDeepEqual(a, b)) {
    throw new Error(ErrorMessages.ValuesNotDeepEqual(a, b))
  }
}

const notDeepEqual = (a, b) => {
  if (baseDeepEqual(a, b)) {
    throw new Error(ErrorMessages.UnexpectedDeepEquality(a, b))
  }
}

module.exports = {
  deepEqual,
  notDeepEqual
}
