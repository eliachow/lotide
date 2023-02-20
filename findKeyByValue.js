/*
---- Implement findKeyByValue in Lotide ----
https://flex-web.compass.lighthouselabs.ca/workbooks/flex-m01w2/activities/207?journey_step=30&workbook=5

---- INSTRUCTIONS ----
Implement the function findKeyByValue which takes in an object and a value. It should scan the object and return the first key which contains the given value. If no key with that given value is found, then it should return undefined.

Use assertEqual to write test cases for various scenarios.

*/

//---- ORIGINAL ----

// // Assertion code
// const assertEqual = function (actual, expected) {
//   if (actual === expected) {
//     console.log(`Assertion Passed: ✅${actual} === ${expected}`);
//   } else {
//     console.assert(actual === expected, `🚫${actual} !== ${expected}`);
//   }
// };

// // Function Code
// const findKeyByValue = function (channel, tvShow) {
//   for (const genre in channel) {
//     if (bestTVShowsByGenre[genre] === tvShow) {
//       return genre;
//     }
//   }
// };

// // Test code
// // bestTVShowsByGenre = channel
// const bestTVShowsByGenre = {
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama: "The Wire",
// };

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Simpsons"), undefined);
// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");


//---- REFACTORING FOR MODULE TESTING ----

// Function Code
const findKeyByValue = function (channel, tvShow) {
  for (const genre in channel) {
    if (bestTVShowsByGenre[genre] === tvShow) {
      return genre;
    }
  }
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};


module.exports = findKeyByValue;