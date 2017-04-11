'use strict'

// This function will be called with 3 arguments set to
// 2, 10, and 1000000 respectively
// determine base of a number
const isBaseX = function (baseNumber, number) {
  return number % baseNumber === 0 ? true : false
}

// get sum of an array (will plug in late)
const sum = array.reduce(function(acc, val) {
  return acc + val
}, 0)

// check for paindrome position. mathematical test. the sum of
// matching both ends working inwards is the length of the number
// plus one.
const getPalindrome = function (pos1, pos2, ) {
  //the test I need to make is
  // 1. checking the pattern of dividing
  // the length of the total number in half
  // 2. then checking the first half of the positions against
  //    the last half. no need to check for a middle number.
}


const doubleBasePalindromeSum = function (/* base1, base2, upperLimit */) {
}

module.exports = {
  doubleBasePalindromeSum
}
