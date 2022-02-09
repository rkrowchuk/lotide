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

const middle = function(array) {

  const middleIndex = Math.floor(array.length / 2);
  const middleNum = array[middleIndex];
  const nextNum = array[middleIndex - 1];
  
  let result = [];

  if (array.length > 2 && array.length % 2 !== 0) {
    result.push(middleNum);
  } else if (array.length > 2 && array.length % 2 === 0) {
    result.push(nextNum, middleNum);
  }
  return result;
};

// Test

console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);

