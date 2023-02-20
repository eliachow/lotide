const assertObjectEqual = require('../assertObjectEqual');
const countLetters = require('../countLetters');

// TEST CODE
assertObjectEqual(countLetters("hello"), { h: 1, e: 1, l: 2, o: 1 });

assertObjectEqual(countLetters("hello world"), {
    h: 1,
    e: 1,
    l: 3,
    o: 2,
    w: 1,
    r: 1,
    d: 1,
});

assertObjectEqual(countLetters("lighthouse in the house"), {
    l: 1,
    i: 2,
    g: 1,
    h: 4,
    t: 2,
    o: 2,
    u: 2,
    s: 2,
    e: 3,
    n: 1,
});

