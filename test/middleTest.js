const assert = require('chai').assert
const middle = require('../middle')


describe('#middle', () => {
    it("returns [3] for middle([1, 2, 3, 4, 5]) ", () => {
      assert.deepEqual(middle([1, 2, 3, 4, 5]), [3])
    });
    it("returns [2, 3] for middle([1, 2, 3, 4])", () => {
      assert.deepEqual(middle([1, 2, 3, 4]), [2, 3])
    });
    it("returns [] for middle([])", () => {
      assert.strictEqual(middle([]), [])
    });
});


// console.log(middle([1])) // => []
// console.log(middle([1, 2])) // => []
// console.log(middle([1, 2, 3])) // => [2]
// console.log(middle([1, 2, 3, 4, 5])) // => [3]
// console.log(middle([1, 2, 3, 4])) // => [2, 3]
// console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5, 6])
