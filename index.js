/*
---- Exporting All Functions II ----
/lighthouse/lotide/index.js
M1/Wk4/Lotide: Export Library
https://flex-web.compass.lighthouselabs.ca/workbooks/flex-m01w4/activities/371?journey_step=32




*/

const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');
const assertObjectEqual = require('./assertObjectEqual');
//const countOnly = require('./countOnly');
const eqArrays = require('./eqArrays');
//const eqObjects = require('./eqObjects');
// const findKey = require('./findKey');
// const findKeyByValue = require('./findKeyByValue');
// const flatten = require('./flatten'); 
const head = require('./head');
// const letterPositions = require('./letterPositions');
// const map = require('./map');
const middle = require('./middle');
const tail = require('./tail');

module.exports = {
    assertArraysEqual: assertArraysEqual,
    assertEqual: assertEqual,
   // assertObjectEqual: assertObjectEqual,
    // countOnly: countOnly,
    eqArrays: eqArrays,
    // eqObjects: eqObjects,
    findKey: findKey,
    // findKeyByValue: findKeyByValue,
    // flatten: flatten,
    head: head,
    // letterPositions: letterPositions,
    // map: map,
    middle: middle,
    tail: tail,

};