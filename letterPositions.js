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

const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  const word = sentence.split(" ").join("");

  for (let i = 0; i < word.length; i++) {
    let letter = word[i];
    if (results[letter]) {
      results[letter] = [word.indexOf(letter), word.indexOf(letter, (word.indexOf(letter) + 1))];
    } else {
      results[letter] = [word.indexOf(letter)];
    }
  }
  return results;
};

module.exports = letterPositions;

console.log(letterPositions("hello"));
assertArraysEqual(letterPositions("hello").e, [1]);