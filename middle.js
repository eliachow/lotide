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

const eqArrays = function (arrayOne, arrayTwo) {
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅ Assertion Passed; ${arr1} === ${arr2}`);
  } else {
    console.log(`🚫 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const middle = function (array) {
  let result = [];
  if (array.length < 3) {
    console.log(result);
  } else if (array.length % 2 === 1) {
    //odd numbers
    let middleOfArray = array.length / 2;
    middleOfArray = Math.round(middleOfArray) - 1;
    middleOfArray = array[middleOfArray];
    console.log([middleOfArray]);
  } else if (array.length % 2 === 0) {
    //even numbers
    let middleOfEvenArrayTop = array.length / 2;
    middleOfEvenArrayTop = array[middleOfEvenArrayTop];
    let middleOfEvenArrayBottom = array.length / 2 - 1;
    middleOfEvenArrayBottom = array[middleOfEvenArrayBottom];
    console.log([middleOfEvenArrayBottom, middleOfEvenArrayTop]);
  }
};

//Test
middle([1]); // => []
middle([1, 2]); // => []

middle([1, 2, 3]); // => [2]
middle([1, 2, 3, 4, 5]); // => [3]
middle([2, 4, 6, 8, 10, 12, 14]);

middle([1, 2, 3, 4]); // => [2, 3]
middle([1, 2, 3, 4, 5, 6]); // => [3, 4]
middle([2, 4, 6, 8, 10, 12, 14, 16]);

/*

// TEST/ASSERTION FUNCTIONS
const eqArrays = function(...) {
  //...
}

const assertArraysEqual = function(actual, expected) {
  //...
}

// ACTUAL FUNCTION
const middle = function(array) {
  //...
}

// TEST CODE
// ...

*/
