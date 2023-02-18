const assertArraysEqual = require('../assertArraysEqual')


//Test code
console.log(assertArraysEqual([1, 2, "3"], [1, 2, 3])); // => false
console.log(assertArraysEqual([1, 2, 3], [1, 2, 3])); // => true
console.log(assertArraysEqual([5, 6, 7, 8], [5, 6, 7, 8]));
console.log(assertArraysEqual([3, 2, 1], [1, 2, 3]));