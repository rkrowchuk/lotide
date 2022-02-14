const eqArrays = require('./eqArrays');


const assertArraysEqual = function(actual, expected) {
  let isEqual;
  if (Array.isArray(actual) && Array.isArray(expected)) {
    isEqual = eqArrays(actual, expected);
  } else {
    isEqual = false;
  }
  if (isEqual === true) {
    console.log(`✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 🛑 🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

module.exports = assertArraysEqual;