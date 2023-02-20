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

* `assertArraysEqual`: Takes in two arrays and console.logs an approrpirate message to the console. 
* `assertEqual`: Takes in two string arguments and returns true or false based on a perfect match.
* `eqArrays`: Takes in two array arguments and returns true or false based on a perfect match. 
* `head`: Identifies the head of the array.
* `middle`: Identifies the middle element(s) in an array.
* `tail`: Removes the first element of an array, then counts the length of the array.