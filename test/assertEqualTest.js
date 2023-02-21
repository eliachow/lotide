//---- MODULE TESTING ----
const assertEqual = require('../assertEqual');

//Test code
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("hello", "hello");
assertEqual(5, 6);
assertEqual(true, false);
assertEqual("6", "6");
assertEqual(6, "6");

// //---- REFACTORING FOR MOCHA & CHAI TESTING ----

// // const chai = require('chai');
// // const assert = chai.expect;
// const assert = require('chai').assert;


// describe("#assertEqual", () => {
//     it("returns true when 1 is equal to 1", () => {
//         let result = assert.strictEqual(1, 1);
//         console.log("here: ", result)
//     });
// });
