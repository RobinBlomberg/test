import { describe, doesNotThrow, equal, notEqual, test, throws } from './index.js';

test('@robinblomberg/test', () => {
  describe('doesNotThrow', () => {
    doesNotThrow(() => {
      equal([3], [3]);
    });
    doesNotThrow(() => {
      notEqual([3], [4]);
    });
  });

  describe('throws', () => {
    throws(() => {
      equal([3], [4]);
    });
    throws(() => {
      notEqual([3], [3]);
    });
  });
})();
