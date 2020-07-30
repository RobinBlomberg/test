const {
  deepEqual,
  doesNotThrow,
  fail,
  notDeepEqual,
  ok,
  throws
} = require('./assert')

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
  fail,
  it,
  notDeepEqual,
  ok,
  throws
}
