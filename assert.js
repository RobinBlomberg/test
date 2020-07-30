const ErrorMessages = require('@kjou/error').Messages
const baseDeepEqual = require('@kjou/utility').deepEqual

const deepEqual = (a, b) => {
  if (!baseDeepEqual(a, b)) {
    throw new Error(ErrorMessages.ValuesNotDeepEqual(a, b))
  }
}

const fail = (error) => {
  if (error instanceof Error) {
    throw error
  } else {
    throw new Error(ErrorMessages.AssertionError(error))
  }
}

const notDeepEqual = (a, b) => {
  if (baseDeepEqual(a, b)) {
    throw new Error(ErrorMessages.UnexpectedDeepEquality(a, b))
  }
}

const ok = (value, message) => {
  if (!value) {
    fail(message)
  }
}

module.exports = {
  deepEqual,
  fail,
  notDeepEqual,
  ok
}
