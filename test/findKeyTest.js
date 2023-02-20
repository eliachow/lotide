const assertEqual = require("../assertEqual");
const findKey = require("../findKey");


//TEST CODE
const stars = {
    "Blue Hill": { stars: 1 },
    Akaleri: { stars: 3 },
    noma: { stars: 2 },
    elBulli: { stars: 3 },
    Ora: { stars: 2 },
    Akelarre: { stars: 3 },
};

//arrow function
const countStars = (x) => x.stars === 2;


const foundbyKey = findKey(stars, countStars);
console.log(assertEqual(foundbyKey, "noma")); // => "noma"