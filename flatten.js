//---- ORIGINAL ----

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

// const flatten = function (arrayToFlatten) {
//   let flattenedArray = [];
//   for (let i = 0; i < arrayToFlatten.length; i++) {
//     if (Array.isArray(arrayToFlatten[i])) {
//       for (let element of arrayToFlatten[i]) {
//         flattenedArray.push(element);
//       }
//     } else {
//       flattenedArray.push(arrayToFlatten[i]);
//     }
//   }
//   return flattenedArray;
// };

// //Test Code
// assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]); // => [1, 2, 3, 4, 5, 6]

//---- REFACTORING FOR MODULE TESTING ----

//Function code
const flatten = function (arrayToFlatten) {
  let flattenedArray = [];
  for (let i = 0; i < arrayToFlatten.length; i++) {
    if (Array.isArray(arrayToFlatten[i])) {
      for (let element of arrayToFlatten[i]) {
        flattenedArray.push(element);
      }
    } else {
      flattenedArray.push(arrayToFlatten[i]);
    }
  }
  return flattenedArray;
};


module.exports = flatten;