/* exported dropRight */

/**
 * PSUEDOCODE:
 * Define a function 'dropRight' with two parameters: 'array', 'count'.
 *  Declare a variable 'leftArr' and assign an empty array.
 *  If 'count' is less than the length of 'array':
 *    Initiate for loop that iterates through each index of 'array' up to the length of 'array' minus 'count'.
 *      Push value at given index to 'leftArr'.
 *  Return 'leftArr'.
 */

/**
 * CODE IMPLEMENTATION:
 */

function dropRight(array, count) {
  var leftArr = [];
  if (count < array.length) {
    for (var i = 0; i < (array.length - count); i++) {
      leftArr.push(array[i]);
    }
  }
  return leftArr;
}
