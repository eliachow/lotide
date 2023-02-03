/*
Implement assertObjectsEqual
https://flex-web.compass.lighthouselabs.ca/workbooks/flex-m01w2/activities/209?journey_step=30&workbook=5

---- INSTRUCTIONS ----
As a continuation of the previous exercise, it's time to create our assertObjectsEqual function which will help us easily test functions that return objects.

Functions that do not return values and instead print out messages to the console are more difficult to test using assertions. This is because we cannot simply compare their return value to an expected value.
For this reason, we will not be writing assertions (test code) for assertObjectsEqual. That said, you can and should call the function below its declaration and visually confirm that the message printed to the console is accurate.



//Implement assertObjectsEqual which will take in two objects and console.log an appropriate message to the console.
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ✅${actual} === ${expected}`);
  } else {
    console.assert(actual === expected, `🚫${actual} !== ${expected}`);
  }
};


*/

//Copy your eqObjects function into this new file.
const eqObjects = function (object1, object2) {
  //Object.keys(object1)) // output ['name', 'age']
  //Object.keys(object1).length); //output: 2
  //if the length(number of keys in object) of the object is not equal, return false
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (let key in object1) {
    //key //output: name  age
    //if the value is an array pass through the eqArrays function (if statement will return if array is true or false)
    if (Array.isArray(object1[key])) {
      eqArrays(object1[key], object2[key]);
      // if not an array assume primitive and use !== comparison
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function (actual, expected) {
  const inspect = require("util").inspect;
  if (eqObjects(actual, expected)) {
    console.log(
      `Assertion Passed ✅ ${inspect(actual)} === ${inspect(expected)}`
    );
    //console.log(`Assertion Passed: ✅${actual} === ${expected}`);
  } else {
    console.log(
      `Assertion Failed 🚫 ${inspect(actual)} !== ${inspect(expected)}`
    );
    //console.assert(actual === expected, `🚫${actual} !== ${expected}`);
  }
};

assertObjectsEqual({ name: "sally", age: 23 }, { name: "sally", age: 23 });
assertObjectsEqual({ name: "Bob", age: 21 }, { name: "sally", age: 23 });
