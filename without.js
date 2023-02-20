/*
---- INSTRUCTIONS ----
This function should take in a source array and a itemsToRemove array. It should return a new array with only those elements from source that are not present in the itemsToRemove array.
*/

//---- ORIGINAL ---- 

// //Asssertion Test
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

// //Function code
// const without = function (source, itemsToRemove) {
//   let result = [];
//   for (let element of source) {
//     if (!itemsToRemove.includes(element)) {
//       result.push(element);
//     }
//   }
//   return result;
// };

// console.log(without([1, 2, 3], [1])); // => [2, 3]
// console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);


//----REFACTORING ----

//Function code
const without = function (source, itemsToRemove) {
  let result = [];
  for (let element of source) {
    if (!itemsToRemove.includes(element)) {
      result.push(element);
    }
  }
  return result;
};

module.exports = without;
