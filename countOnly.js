/*
LHL Implement countOnly in Lotide
https://flex-web.compass.lighthouselabs.ca/workbooks/flex-m01w2/activities/204

---- INSTRUCTIONS ----
- Implement countOnly.
- This function should take in a collection of items and return counts for a specific subset of those items.
- It won't count everything. In order to decide what to count, it will also be given an idea of which items we care about and it will only count those, ignoring the others.

Items in our case will be limited to Strings.

---- FUNCTION BEHAVIOUR ----
countOnly will be given an array and an object. It will return an object containing counts of everything that the input object listed.
only keys which have a truthy value should be counted in the resulting object. All other strings (either set to false or not included at all in the object) should not be counted.
That said, if a particular string is meant to be counted but does not exist in the input array (like "f" in the example above), it also does not have to be included in the final count.
*/

// const assertEqual = function (actual, expected) {
//   if (actual === expected) {
//     console.log(`Assertion Passed: ✅${actual} === ${expected}`);
//   } else {
//     console.assert(actual === expected, `🚫${actual} !== ${expected}`);
//   }
// };

// // allItems: an array of strings that we need to work through(firstNames)
// // itemsToCount: an object specifying what to count(result1)

// const countOnly = function (allItems, itemsToCount) {
//   //return how many instances of each string were found in the all items array of strings
//   const results = {};
//   // loop over all items (firstNames) in the array
//   for (const item of allItems) {
//     // item = each name
//     // increment the counter for each item:
//     // set a property with the string key to: the value that was already there (or zero if nothing there) + 1
//     //if itemsToCount is true (object in result1)
//     if (itemsToCount[item]) {
//       if (results[item]) {
//         results[item] += 1;
//       } else {
//         results[item] = 1;
//       }
//     }
//   }

//   return results;
// };

// const firstNames = [
//   "Karl",
//   "Salima",
//   "Agouhanna",
//   "Fang",
//   "Kavith",
//   "Jason",
//   "Salima",
//   "Fang",
//   "Joe",
// ];

// const result1 = countOnly(firstNames, {
//   Jason: true,
//   Karima: true,
//   Fang: true,
//   Agouhanna: false,
// });

// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined); // not in firstNames array = undefined
// assertEqual(result1["Fang"], 2);
// assertEqual(result1["Agouhanna"], undefined); // result1 is false = undefined


//----REFACTORING MODULE TEST----

// const assertEqual = require('./assertEqual')

const countOnly = function (allItems, itemsToCount) {
  const results = {};
  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};

module.exports = countOnly;