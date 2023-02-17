/* exported zip */

/**
 * PSEUDOCODE:
 * Define a function 'zip' with two parameters: 'first', 'second'.
 *  Declare a variable 'zippedArr' and assign an empty array.
 *  Initiate a while loop to iterate through 'first' while neither 'first' or 'second' are null.
 *  At each index:
 *    Push an array of the spread value from 'first' and the spread value from 'second'.
 *  Return 'zippedArr'
 */

/**
 * CODE IMPLEMENTATION:
 */

var zip = (first, second) => {
  var zippedArr = [];
  while (first.length > 0 && second.length > 0) {
    zippedArr.push([...first.splice(0, 1), ...second.splice(0, 1)]);
  }
  return zippedArr;
};
