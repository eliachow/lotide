# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @echow/lotide`

**Require it:**

`const _ = require('@echow/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual`: Takes in two array arguments and prints a true or false message based on a perfectmatch
* `assertEqual`: Takes in two string arguments and returns true or false based on a perfect match.
* `eqArrays`: Takes in two array arguments and prints a true or false based on a perfect match. 
* `head`: Identifies the head of the array.
* `middle`: Identifies the middle element(s) in an array.
* `tail`: Removes the first element of an array, then counts the length of the array.
* `assertObjectEqual`: Takes in two objects arguments and console.log a true or false message based on a perfect match.
* `countOnly`:  Take in a collection of items and return counts for a specific subset of those items.
* `countLetters`: Takes in a sentence (as a string) and then return a count of each of the letters in that sentence.
* `eqObjects`: Takes in two objects and returns true or false, based on a perfect match.
* `findKey`: Takes in an object and a callback, scans the object and returns the first keyfor which the callback returns a truthy value. If no key is found, it will return undefined. 
* `findKeyByValue`: Takes in an object and a value, scans the object and returns the first key which contains a given value. If no key with that given value is found, it will return undefined. 
* `flatten`: Takes in an array containing elements including nested arrays of elements, and return a one array of the previously nested arrays.
* `letterPositions`: Takes in a string and returns and object with an array of index positions for each letter in the string, spaces are skipped.  
* `map`: Takes in an array and a callback function and returns a new array based on the results of the callback function. 
* `takeUntil`: Takes in an array and a callback and returns a slice of the array with elements taken from the beginning until the callback returns a truthy value.
* `without`: Takes in a source array and an item to remove array and returns a new array with only those elemetns from the source that are not present in the items to remove array. 
