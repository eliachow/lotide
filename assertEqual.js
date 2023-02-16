//Function implementation
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ✅${actual} === ${expected}`);
  } else {
    console.assert(actual === expected, `🚫${actual} !== ${expected}`);
  }
};

//refactoring: moving to test/asssetEqualTest.js
// //Test code
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual("hello", "hello");
// assertEqual(5, 6);
// assertEqual(true, false);
// assertEqual("6", "6");
// assertEqual(6, "6");

module.exports = assertEqual;