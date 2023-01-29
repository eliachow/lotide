/*
---- INSTRUCTIONS ----
Implement a function eqArrays which takes in two arrays and returns true or false, based on a perfect match.
👉 It's okay for eqArrays to not return true for nested arrays or arrays of objects that are identical. We will save this "deeper" problem for another day.

---- PSUEDOCODE ----
1. 

*/

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ✅${actual} === ${expected}`);
  } else {
    console.assert(actual === expected, `🚫${actual} !== ${expected}`);
  }
};

const eqArrays = function (arrayOne, arrayTwo) {
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true); // => false
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true); // => false
