/*
Implement letterPositions
https://flex-web.compass.lighthouselabs.ca/workbooks/flex-m01w2/activities/206?workbook=5

---- INSTRUCTIONS ----
implement a new function letterPositions which will return all the indices (zero-based positions) in the string where each character is found.
For each letter, instead of returning just one number to represent its number of occurrences, multiple numbers may be needed to represent all the places in the string that it shows up.


*/
//---- ORIGINAL ----

// //Assertion Test
// const assertEqual = function (actual, expected) {
//   if (isObjEqual(actual, expected)) {
//     console.log(
//       "Assertion Passed: ✅" +
//       JSON.stringify(actual) +
//       " === " +
//       JSON.stringify(expected)
//     );
//   } else {
//     console.assert(
//       actual === expected,
//       "🚫 " + JSON.stringify(actual) + " !== " + JSON.stringify(expected)
//     );
//   }
// };

/*
//compare arrays
const eqArrays = function (arrayOne, arrayTwo) {
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
};
*/

//compare if objects are equal
const isObjEqual = function (actual, expected) {
  //compare if the object has the same number of keys
  if (Object.keys(actual).length !== Object.keys(expected).length) {
    return false;
  }
  //compare if the keys have the same values
  for (let key in actual) {
    if (actual[key] !== expected[key]) {
      return false;
    }
  }
  return true;
};

// //FUNCTION CODE
// const letterPositions = function (sentence) {
//   const results = {};
//   //loop through the string and return letters
//   for (let i = 0; i < sentence.length; i++) {
//     const character = sentence[i];
//     //do not count spaces
//     if (character !== " ") {
//       //if element is in the object push the index into the array
//       if (results[character]) {
//         results[character].push(i); // array already exists so only need to push the index i
//       } else {
//         //if element is not in the object add the value index to the object
//         results[character] = [i];
//       }
//     }
//   }
//   console.log("resutls: ", results);
//   return results;
// };


// //TEST CODE
// assertEqual(letterPositions("hello").e, [1]);

// assertEqual(letterPositions("hello world").e, [1]);

// assertEqual(letterPositions("hello"), { h: [0], e: [1], l: [2, 3], o: [4] });

// assertEqual(letterPositions("lighthouse in the house"), {
//   l: [0],
//   i: [1, 11],
//   g: [2],
//   h: [3, 5, 15, 18],
//   t: [4, 14],
//   o: [6, 19],
//   u: [7, 20],
//   s: [8, 21],
//   e: [9, 16, 22],
//   n: [12],
// });



//---- REFACTORING TO USE MODULE TESTING ----
//FUNCTION CODE
const letterPositions = function (sentence) {
  const results = {};
  //loop through the string and return letters
  for (let i = 0; i < sentence.length; i++) {
    const character = sentence[i];
    //do not count spaces
    if (character !== " ") {
      //if element is in the object push the index into the array
      if (results[character]) {
        results[character].push(i); // array already exists so only need to push the index i
      } else {
        //if element is not in the object add the value index to the object
        results[character] = [i];
      }
    }
  }
  //console.log("resutls: ", results);
  return results;
};

module.exports = letterPositions;
