const baseDeepEqual = require('utility/deepEqual')
const ErrorMessages = require('error/messages')

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
