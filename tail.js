// //refactorings: moving to module tailTest file
// const assertEqual = function (actual, expected) {
//   if (actual === expected) {
//     console.log(`Assertion Passed: ✅${actual} === ${expected}`);
//   } else {
//     console.assert(actual === expected, `🚫${actual} !== ${expected}`);
//   }
// };

const assertEqual = require('./assertEqual')

const tail = function (array) {
  //return array.slice(1);
  // console.log(array.slice(1));
  // console.log(array);
};

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it

// //refactorings: moving to module tailTest file
 assertEqual(words.length, 3); // original array should still have 3 elements!

module.exports = tail