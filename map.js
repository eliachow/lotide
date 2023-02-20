/*
---- Implement Map ----
https://flex-web.compass.lighthouselabs.ca/workbooks/flex-m01w2/activities/227?workbook=5

---- Function Definition ----
Our map function will take in two arguments:

An array to map
A callback function
The map function will return a new array based on the results of the callback function.

*/

//---- ORIGINAL ----

// // assertion test
// const eqArrays = function (arrayOne, arrayTwo) {
//   for (let i = 0; i < arrayOne.length; i++) {
//     if (arrayOne[i] !== arrayTwo[i]) {
//       return false;
//     }
//   }
//   return true;
// };

// const assertArraysEqual = function (arr1, arr2) {
//   if (eqArrays(arr1, arr2)) {
//     console.log(`✅ Assertion Passed; ${arr1} === ${arr2}`);
//   } else {
//     console.log(`🚫 Assertion Failed: ${arr1} !== ${arr2}`);
//   }
// };

// //function code 
// const words = ["ground", "control", "to", "major", "tom"];

// const map = function (array, callback) {
//   const results = [];
//   for (let item of array) {
//     results.push(callback(item));
//   }
//   return results;
// };

// //test code
// const results1 = map(words, (word) => word[0]);
// console.log(results1);

// console.log(assertArraysEqual(results1, ["g", "c", "t", "m", "t"]));

//---- REFACTORING FOR MODULE TESTING ----

//function code 
//const words = ["ground", "control", "to", "major", "tom"];

const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;

