// const assertEqual = require('../assertEqual')
// const tail = require('../tail')


// //test code
// assertEqual(tail([1,2,3]), 2)
// assertEqual(tail(["one", "two", "three", "four"]), 3)


//---- REFACTORING: IMPLEMENTING MOCHA & CHAI ----

const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns 2 for [1,2,3]", () => {
    assert.strictEqual(tail([1,2,3]), 2);
  });

  it("returns 3 for [\"one\", \"two\", \"three\", \"four\"]", () => {
    assert.strictEqual(tail(["one", "two", "three", "four"]),3);
  });
});