// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅ ✅ ✅ Assertion Passed: " + actual + " === " + expected);
  } else {
    console.log("🛑 🛑 🛑 Assertion Failed: " + actual + " !== " + expected);
  }
};

// TEST CODE
assertEqual("lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("red", "red");
assertEqual(6, 9);
