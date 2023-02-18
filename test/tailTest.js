const assertEqual = require('../assertEqual')
const tail = require('../tail')


//test code
assertEqual(tail([1,2,3]), 2)
assertEqual(tail(["one", "two", "three", "four"]), 3)