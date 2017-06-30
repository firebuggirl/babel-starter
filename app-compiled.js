"use strict";


//Rest properties
let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
console.log(x); // 1
console.log(y); // 2
console.log(z); // { a: 3, b: 4 }

//Spread Properties
let n = { x, y, ...z };
console.log(n); // { x: 1, y: 2, a: 3, b: 4 }

var age = 1;
var people = ["Jeremy", "Eileen"];

var fullNames = people.map(function (name) {
  return name + " Jones";
});

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = people[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var person = _step.value;

    console.log(person);
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

function logPet(petName) {
  var petType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "dog";

  console.log(petName + " is a " + petType);
}

logPet('Virgil');
