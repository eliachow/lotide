const assertArraysEqual = require('../assertArraysEqual');
const map = require('../map');

//test code
const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, (word) => word[0]);
console.log(results1);

console.log(assertArraysEqual(results1, ["g", "c", "t", "m", "t"]));