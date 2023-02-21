/*
---- Implement tail ----
//lighthouse/lotide/tail.js
https://flex-web.compass.lighthouselabs.ca/workbooks/flex-m01w1/activities/154?journey_step=29&workbook=4


---- INSTRUCTIONS ----
Instead of the "head", sometimes we need the "tail" of an array. The tail is not the last element of the array. The tail is meant to be every element except the head (first element) of the array.

Create a function tail which returns the "tail" of an array: everything except for the first item (head) of the provided array.

Your function should not modify the array that is passed in. It should return a new array.
*/

// //refactorings: moving to module tailTest file
// const assertEqual = function (actual, expected) {
//   if (actual === expected) {
//     console.log(`Assertion Passed: ✅${actual} === ${expected}`);
//   } else {
//     console.assert(actual === expected, `🚫${actual} !== ${expected}`);
//   }
// };

//const assertEqual = require('./assertEqual')

// const tail = function (array) {
//   //slice() removes the first element in the array
//   let result = (array.slice(1)).length;
//   //console.log("result: ", result)
//   //console.log("result.length: ", result.length)
//   return result
//   // console.log(array.slice(1));
//   // console.log(array);
// };

// Test Case: Check the original array
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it

// // //refactorings: moving to module tailTest file
// assertEqual(words.length, 3); // original array should still have 3 elements!
// assertEqual(tail([1,2,3]), 2)

//---- REFACTORING TO USE MODULE TESTING ----

const tail = function(array) {
  let result = (array.slice(1)).length;
  return result;
};

module.exports = tail;