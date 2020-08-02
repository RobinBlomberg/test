const {
  deepEqual,
  doesNotThrow,
  equal,
  fail,
  notDeepEqual,
  notEqual,
  ok,
  throws
} = require('@kjou/assert')

const describe = (description, test) => {
  return test()
}

const it = (description, test) => {
  return test()
}

module.exports = {
  deepEqual,
  describe,
  doesNotThrow,
  equal,
  fail,
  it,
  notDeepEqual,
  notEqual,
  ok,
  throws
}
