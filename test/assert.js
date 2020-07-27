const { deepEqual, it, notDeepEqual } = require('../test')
const ErrorMessages = require('../../runtime/errorMessages')

it('should not throw an error if the values are deeply equal', () => {
  try {
    deepEqual({ foo: 'bar' }, { foo: 'bar' })
  } catch (err) {
    throw new Error(ErrorMessages.UnexpectedThrow())
  }
})

it('should throw an error if the values are not deeply equal', () => {
  let error

  try {
    deepEqual({ foo: 'bar' }, { foo: 'qux' })
  } catch (err) {
    error = err
  }

  if (!error) {
    throw new Error(ErrorMessages.DidNotThrow())
  }
})

it('should throw an error if the values are deeply equal', () => {
  try {
    notDeepEqual({ foo: 'bar' }, { foo: 'bar' })
  } catch (err) {
    deepEqual(
      err.message,
      ErrorMessages.UnexpectedDeepEquality({ foo: 'bar' })
    )
  }
})

it('should not throw an error if the values are not deeply equal', () => {
  try {
    notDeepEqual({ foo: 'bar' }, { foo: 'qux' })
  } catch (err) {
    throw new Error(ErrorMessages.UnexpectedThrow())
  }
})
