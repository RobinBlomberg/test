const { deepEqual, it, notDeepEqual } = require('../test')

it('should not throw an error', () => {
  deepEqual([1], [1])
  notDeepEqual([1], [0])
})
