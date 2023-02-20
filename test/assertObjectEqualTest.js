const assertObjectEqual = require('../assertObjectEqual');


//TEST CODE
assertObjectEqual({ name: "sally", age: 23 }, { name: "sally", age: 23 });
assertObjectEqual({ name: "Bob", age: 21 }, { name: "sally", age: 23 });