/*
---- Implement findKey ----
https://flex-web.compass.lighthouselabs.ca/workbooks/flex-m01w2/activities/230
/lighthouse/lotide/findKey.js

---- INSTRUCTIONS ----
Implement the function findKey which takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.

---- EXAMPLE ----
findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"

---- TESTING ----
Use assertEqual to write test cases for various scenarios.

The tests should be written below the definition of your function.

---- TIPS ----
Feel free to take a look at our solution for findKeyByValue. Some of the core logic will be the same (such as the looping over object keys part).
*/

//---- ORIGINAL ----

// // ASSERTION TEST
// const assertEqual = function (actual, expected) {
//   if (actual === expected) {
//     console.log(`Assertion Passed: ✅${actual} === ${expected}`);
//   } else {
//     console.assert(actual === expected, `🚫${actual} !== ${expected}`);
//   }
// };

// // FUNCTION DEFINITION

// function findKey(object, callback) {
//   //object = stars, callback = countStars
//   //loop through the object to find the key
//   for (const item in object) {
//     if (callback(object[item])) {
//       //console.log("item: ", item); //output: item:  Blue Hill  item: Akaleri;  item: noma; item: elBulli; item: Ora;  item Akelarre;
//       return item; //do not need to input 'break' as 'return' will exit the function once the it statement is true
//     }
//   }
// }

// const stars = {
//   "Blue Hill": { stars: 1 },
//   Akaleri: { stars: 3 },
//   noma: { stars: 2 },
//   elBulli: { stars: 3 },
//   Ora: { stars: 2 },
//   Akelarre: { stars: 3 },
// };

// //arrow function
// const countStars = (x) => x.stars === 2;

//console.log("countStars: ", countStars); //output: countStars:  [Function: countStars]

/*
//non-arrow function should give same result
const countStars2 = function (x) {
  console.log("x.stars === 2: ", x.stars === 2);
  return x.stars === 2; // return true?
}; // no return if not true so will return undefined?

//console.log(assertEqual(findKey(stars, countStars2), "noma")); // => "noma"
*/

// TEST CODE

// const foundbyKey = findKey(stars, countStars);
// console.log(assertEqual(foundbyKey, "noma")); // => "noma"


//---- REFACTORING FOR MODULE TESTING ----

function findKey(object, callback) {
  //object = stars, callback = countStars
  //loop through the object to find the key
  for (const item in object) {
    if (callback(object[item])) {
      //console.log("item: ", item); //output: item:  Blue Hill  item: Akaleri;  item: noma; item: elBulli; item: Ora;  item Akelarre;
      return item; //do not need to input 'break' as 'return' will exit the function once the it statement is true
    }
  }
}


module.exports = findKey;

