const { deepEqual, fail, notDeepEqual, ok } = require('./assert')

const describe = (description, test) => {
  return test()
}

const it = (description, test) => {
  return test()
}

module.exports = {
  deepEqual,
  describe,
  fail,
  it,
  notDeepEqual,
  ok
}
