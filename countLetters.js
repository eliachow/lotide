/*
Implement countLetters in Lotide
https://flex-web.compass.lighthouselabs.ca/workbooks/flex-m01w2/activities/205


---- INSTRUCTIONS ----
  1. Copy assertEqual function
  2. Create a function called countLetters.
    The function should take in a sentence (as a string) and then return a count of each of the letters in that sentence.
     For example, countLetters('LHL') should return results indicating that L appears twice, and H once.
  3. Return an object: 
        {
          l: 1,
          i: 2,
          g: 1,
          h: 4,
          t: 2,
          o: 2,
          u: 2,
          s: 2,
          e: 3,
          n: 1,
        }
    Do not not need to return spaces

    Tip: You can use for...of loops with strings.
*/

// TEST ASSERT FUNCTION
const assertEqual = function (actual, expected) {
  if (isObjEqual(actual, expected)) {
    console.log(
      "Assertion Passed: ✅" +
        JSON.stringify(actual) +
        " === " +
        JSON.stringify(expected)
    );
  } else {
    console.assert(
      actual === expected,
      "🚫 " + JSON.stringify(actual) + " !== " + JSON.stringify(expected)
    );
  }
};

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

//ACTUAL FUNCTION
const countLetters = function (word) {
  const result = {};
  //loop through the string and return the letters
  for (const element of word) {
    //element = each letter
    //if equal to space, do not input in object
    if (element !== " ") {
      //input the element in the result object
      //element (letter) = key, count = value
      //if element is true (aleady in the object) add 1 to the existing value
      if (result[element]) {
        result[element] += 1;
      } else {
        // else if element is false (not in the object) add 1
        result[element] = 1;
      }
    }
  }

  return result;
};

// TEST CODE
assertEqual(countLetters("hello"), { h: 1, e: 1, l: 2, o: 1 });

assertEqual(countLetters("hello world"), {
  h: 1,
  e: 1,
  l: 3,
  o: 2,
  w: 1,
  r: 1,
  d: 1,
});

assertEqual(countLetters("lighthouse in the house"), {
  l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1,
});
