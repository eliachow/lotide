/*
---- Implement eqObjects ----
https://flex-web.compass.lighthouselabs.ca/workbooks/flex-m01w2/activities/208?journey_step=30


*/

// ---- ORIGINAL ----
// // compare arrays
// const eqArrays = function (arrayOne, arrayTwo) {
//   for (let i = 0; i < arrayOne.length; i++) {
//     if (arrayOne[i] !== arrayTwo[i]) {
//       return false;
//     }
//   }
//   return true;
// };

//imported on eqObjectsTest.js file
// // compare primitive data
// const assertEqual = function (actual, expected) {
//   if (actual === expected) {
//     console.log(`Assertion Passed: ✅${actual} === ${expected}`);
//   } else {
//     console.assert(actual === expected, `🚫${actual} !== ${expected}`);
//   }
// };

// // Returns true if both objects have identical keys with identical values.
// // Otherwise you get back a big fat false!
// const eqObjects = function (object1, object2) {
//   if (Object.keys(object1).length !== Object.keys(object2).length) {
//     return false;
//   }
//   for (let key in object1) {
//     //if the value is an array pass through the eqArrays function
//     if (Array.isArray(object1[key])) {
//       eqArrays(object1[key], object2[key]);
//       // if not an array assume primitive and use !== comparison
//     } else if (object1[key] !== object2[key]) {
//       return false;
//     }
//   }
//   return true;
// };

// // Test Code
// const shirtObject = { color: "red", size: "medium" };
// const anotherShirtObject = { size: "medium", color: "red" };
// assertEqual(eqObjects(shirtObject, anotherShirtObject), true); // true

// const longSleeveShirtObject = {
//   size: "medium",
//   color: "red",
//   sleeveLength: "long",
// };
// assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false); // false

// const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
// const anotherMultiColorShirtObject = {
//   size: "medium",
//   colors: ["red", "blue"],
// };
// assertEqual(
//   eqObjects(multiColorShirtObject, anotherMultiColorShirtObject),
//   true
// ); // => true

// const longSleeveMultiColorShirtObject = {
//   size: "medium",
//   colors: ["red", "blue"],
//   sleeveLength: "long",
// };
// assertEqual(
//   eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject),
//   false
// ); // => false

// ---- REFACTORING FOR MODULE TESTING ----

//import eqArrays
const eqArrays = require('./eqArrays');

//Function Code
const eqObjects = function (object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (let key in object1) {
    //if the value is an array pass through the eqArrays function
    if (Array.isArray(object1[key])) {
      eqArrays(object1[key], object2[key]);
      // if not an array assume primitive and use !== comparison
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};



//export eqObjects
module.exports = eqObjects;