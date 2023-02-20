/*
---- Implement takeUntil ----
https://flex-web.compass.lighthouselabs.ca/workbooks/flex-m01w2/activities/229?workbook=5
/lighthouse/lotide/takeUntil.js

---- INSTRUCTIONS ----
It will take in two parameters as well:

The array to work with
The callback (which Lodash calls "predicate")

The function will return a "slice of the array with elements taken from the beginning." It should keep going until the callback/predicate returns a truthy value.

To keep things simple, the callback should only be provided one value: The item in the array.

--- EXPECTED INPUT ----
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

---- EXPECTED OUTPUT ----
[ 1, 2, 5, 7, 2 ]
--
[ 'I\'ve', 'been', 'to', 'Hollywood' ]

*/

//---- ORIGINAL ----

// //Assertion Test
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

// Function Code:
/*
const takeUntil = function (array, callback) {
  const resultArray = [];
  // loop through the items of the array
  for (let item of array) {
    // if the callback function returns true
    if (callback(item) === true) {
      // stop the loop
      break;
    } else {
      // push the items to the empty array

      resultArray.push(item);
    }
  }
  return resultArray;
};
*/

// //arrow function
// const takeUntil = (array, callback) => {
//   const resultArray = [];
//   // loop through the items of the array
//   for (let item of array) {
//     // if the callback function returns true
//     if (callback(item) === true) {
//       // stop the loop
//       break;
//     } else {
//       // push the items to the empty array

//       resultArray.push(item);
//     }
//   }
//   return resultArray;
// };

// Input

// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5]; //-1 returns true, stopping condition
// const results1 = takeUntil(data1, (x) => x < 0);
// console.log(results1);

// console.log("---");

// const data2 = [
//   "I've",
//   "been",
//   "to",
//   "Hollywood",
//   ",", // returns true, stopping condition
//   "I've",
//   "been",
//   "to",
//   "Redwood",
// ];
// const results2 = takeUntil(data2, (x) => x === ",");
// console.log(results2);

// console.log(assertArraysEqual(results1, [1, 2, 5, 7, 2]));
// console.log(assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]));


//---- REFACTORING FOR MODULE TESTING ----

const takeUntil = (array, callback) => {
  const resultArray = [];
  // loop through the items of the array
  for (let item of array) {
    // if the callback function returns true
    if (callback(item) === true) {
      // stop the loop
      break;
    } else {
      // push the items to the empty array

      resultArray.push(item);
    }
  }
  return resultArray;
};


module.exports = takeUntil;