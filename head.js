// //refactoring: importing assertEqual rather than copying and pasting
// const assertEqual = function (actual, expected) {
//   if (actual === expected) {
//     console.log(`Assertion Passed: ✅${actual} === ${expected}`);
//   } else {
//     console.assert(actual === expected, `🚫${actual} !== ${expected}`);
//   }
// };


//refactoring: importing assertEqual
//const assertEqual = require('./assertEqual')

const head = function(array) {
  return array[0];
};

module.exports = head;

// //refactorings: moving to test/headTest.js
// assertEqual(head([5, 6, 7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
// assertEqual(head([], undefined));
