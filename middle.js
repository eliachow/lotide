/*
---- INSTRUCTIONS ----
Implement middle which will take in an array and return the middle-most element(s) of the given array.

The middle function should return an array with only the middle element(s) of the provided array. This means that the length of the returned elements could vary.

For arrays with one or two elements, there is no middle. Return an empty array.
middle([1]) // => []
middle([1, 2]) // => []

For arrays with odd number of elements, an array containing a single middle element should be returned.
middle([1, 2, 3]) // => [2]
middle([1, 2, 3, 4, 5]) // => [3]

For arrays with an even number of elements, an array containing the two elements in the middle should be returned
middle([1, 2, 3, 4]) // => [2, 3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]

*/

//---- ORIGINAL ----

// TEST/ASSERTION FUNCTIONS
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

// //FUNCTION CODE
// const middle = function (array) {
//   const mid = Math.ceil(array.length / 2) - 1;
//   //1-2 array
//   if (array.length < 3) {
//     return [];
//   }
//   //even array
//   if (array.length % 2 === 0) {
//     return [array[mid], array[mid + 1]];
//   }
//   //odd array
//   if (array.length % 2 !== 0) {
//     return [array[mid]];
//   }
// };

// // TEST CODE
// assertArraysEqual(middle([1]), []); // => []
// assertArraysEqual(middle([1, 2]), []); // => []

// assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]
// assertArraysEqual(middle([2, 4, 6, 8, 10, 12, 14]), [8, 10]);

// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]
// assertArraysEqual(middle([2, 4, 6, 8, 10, 12, 14, 16]), [8, 10]); // => [8, 10]

//---- REFACTORING TO FOR MODULE TESTING ----

//FUNCTION CODE
const middle = function (array) {
  const mid = Math.ceil(array.length / 2) - 1;
  //1-2 array
  if (array.length < 3) {
    return [];
  }
  //even array
  if (array.length % 2 === 0) {
    return [array[mid], array[mid + 1]];
  }
  //odd array
  if (array.length % 2 !== 0) {
    return [array[mid]];
  }
};


//export function
module.exports = middle