const assertArraysEqual = require('../assertArraysEqual');
const takeUntil = require('../takeUntil');


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5]; //-1 returns true, stopping condition
const results1 = takeUntil(data1, (x) => x < 0);


const data2 = [
  "I've",
  "been",
  "to",
  "Hollywood",
  ",", // returns true, stopping condition
  "I've",
  "been",
  "to",
  "Redwood",
];
const results2 = takeUntil(data2, (x) => x === ",");


assertArraysEqual(results1, [1, 2, 5, 7, 2]);
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);