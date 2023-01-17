const assert = require('chai').assert;
const tail = require('../tail');

describe('#tail', () => {
  const words = ["Yo Yo", "Lighthouse", "Labs"]
  it("returns ['Lighthouse', 'Labs'] for tail(words) ", () => {
    assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs'])
  });
  it("returns 2 for tail(words).length", () => {
    assert.strictEqual(tail(words).length, 2)
  });
  it("returns 0 for tail([]).length)", () => {
    assert.strictEqual(tail([]).length, 0)
  });
});





// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result, ["Lighthouse", "Labs"]);
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words);
// assertEqual(words.length, 3);
// const oneItem = tail(["hi"]);
// assertEqual(oneItem.length, 0);
// const emptyArr = tail([]);
// assertEqual(emptyArr.length, 0);