const { deepEqual, notDeepEqual } = require('./assert')

const describe = (description, test) => {
  return test()
}

const it = (description, test) => {
  return test()
}

module.exports = {
  deepEqual,
  describe,
  it,
  notDeepEqual
}
