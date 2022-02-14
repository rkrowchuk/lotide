// Equal arrays check
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

// Assertion function
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

// map function
const words = ["ground", "control", "to", "major", "tom"];
const words2 = ["cat", "dog", "horse", "elephant"];
const words3 = ["pizza", "sandwich", "candy", "pickles"];

const map = function(array, callback) {
  
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);
console.log(results1);
const results2 = map(words2, word => word[0]);
console.log(results2);
const results3 = map(words3, word => word[0]); 
console.log(results3);



// Tests

assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);
assertArraysEqual(results2, ["c", "d", "h", "e"]);
assertArraysEqual(results3, ["p", "s", "c", "p"]);

