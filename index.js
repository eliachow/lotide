/*
---- Exporting All Functions II ----
/lighthouse/lotide/index.js
M1/Wk4/Lotide: Export Library
https://flex-web.compass.lighthouselabs.ca/workbooks/flex-m01w4/activities/371?journey_step=32




*/

const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');
const head = require('./head');
const middle = require('./middle');
const tail = require('./tail');
const assertObjectEqual = require('./assertObjectEqual');
const countOnly = require('./countOnly');
const countLetters = require('./countLetters');
//const eqObjects = require('./eqObjects');
// const findKey = require('./findKey');
// const findKeyByValue = require('./findKeyByValue');
// const flatten = require('./flatten'); 
// const letterPositions = require('./letterPositions');
// const map = require('./map');


// // ---- VERBOSE SYNTAX ----
// module.exports = {
//     assertArraysEqual: assertArraysEqual,
//     assertEqual: assertEqual,
//     eqArrays: eqArrays,
//     head: head,
//     middle: middle,
//     tail: tail,
//     // assertObjectEqual: assertObjectEqual,
//     // countOnly: countOnly,
//     // eqObjects: eqObjects,
//     // findKey: findKey,
//     // findKeyByValue: findKeyByValue,
//     // flatten: flatten,
//     // letterPositions: letterPositions,
//     // map: map,
// };

//---- REFACTORING: PROPERTY VALUE SHORTHAND ---- 

module.exports = {
    assertArraysEqual,
    assertEqual,
    eqArrays,
    head,
    middle,
    tail,
    assertObjectEqual,
    countOnly,
    countLetters,
    // eqObjects: eqObjects,
    // findKey: findKey,
    // findKeyByValue: findKeyByValue,
    // flatten: flatten,
    // letterPositions: letterPositions,
    // map: map,
};
