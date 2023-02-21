/*
---- INSTRUCTIONS ----
Implement assertArraysEqual which will take in two arrays and console.log an appropriate message to the console.

---- PUESDOCODE ----
const assertArrayEqual = fuction (array1, array2) {
  if ( array1 !== array2 ) {
    console.log(`🚫Assertion failed: ${array1} !== ${array2}`)
  }
  console.log(`✅Assertion passed: ${array1} === ${Array2}`)
}

*/

// ---- ORIGINAL ----
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

// console.log(assertArraysEqual([1, 2, "3"], [1, 2, 3])); // => false
// console.log(assertArraysEqual([1, 2, 3], [1, 2, 3])); // => true
// console.log(assertArraysEqual([5, 6, 7, 8], [5, 6, 7, 8]));
// console.log(assertArraysEqual([3, 2, 1], [1, 2, 3]));


// ---- REFACTORING FOR MODULE TESTING ----

const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅ Assertion Passed; ${arr1} === ${arr2}`);
  } else {
    console.log(`🚫 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

module.exports = assertArraysEqual;