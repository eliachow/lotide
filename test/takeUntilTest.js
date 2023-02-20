const assertArraysEqual = require('../assertArraysEqual');
const takeUntil = require('../takeUntil');


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5]; //-1 returns true, stopping condition
const results1 = takeUntil(data1, (x) => x < 0);
console.log(results1);

console.log("---");

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
console.log(results2);

console.log(assertArraysEqual(results1, [1, 2, 5, 7, 2]));
console.log(assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]));