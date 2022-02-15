# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @rkrowchuk/lotide`

**Require it:**

`const _ = require('@rkrowchuk/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual`: checks outcome of eqArrays
* `assertEqual`: checks if two elements are equal
* `assertObjectsEqual`: checks outcome of eqObjects
* `countLetters`: counts number of times letter appears in a string
* `countOnly`: counts number of times select strings appear in an object
* `eqArrays`: checks if two arrays are equal
* `eqObjects`: checks if two objects are equal
* `findKey`: finds a key based on an outcome of a callback
* `findKeyByValue`: finds a key based on a value
* `head`: returns first index of an array
* `index`: exports all lotide functions
* `letterPositions`: returns the indexes a letter appears in
* `map`: returns a new array based on the results of a callback
* `middle`: returns the middle element in an array
* `tail`: returns all but first element in an array
* `takeUntil`: returns all elements in an array until the callback is true
* `without`: returns an array with all unwanted elements removed

