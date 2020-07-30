const ErrorMessages = require('@kjou/error').Messages
const baseDeepEqual = require('@kjou/utility').deepEqual

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
