const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }
};

const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  let isEqual;
  if (keys1.length !== keys2.length) {
    return false;
  } else {
    for (const property of keys1) {
      if (Array.isArray(object1[property]) || Array.isArray(object2[property])) {
        isEqual = eqArrays(object1[property], object2[property]);
        if (isEqual !== true) {
          return false;
        } else if (keys1[property] !== keys2[property]) {
          return false;
        }
      }
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  let isEqual;
  if (typeof actual === 'object' && typeof expected === 'object') {
    isEqual = eqObjects(actual, expected);
  } else {
    isEqual = false;
  }
  if (isEqual === true) {
    console.log(`✅ ✅ ✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑 🛑 🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

assertObjectsEqual({ a: '1', b: 2 },{ b: 2, a: '1' });

module.exports = assertObjectsEqual;