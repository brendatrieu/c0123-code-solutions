/* exported reverse */

/** PSEUDOCODE:
 *  Define a function called 'reverse' that takes in one parameter 'array'.
 *    Declare a variable 'reversedArr' that has an empty array.
 *    Initiate a loop that iterates through all indexes of the array in reverse order.
 *      Push the value at the index into 'reversedArr'.
 *    Return 'reversedArr'.
 */

/**
 * CODE IMPLEMENTATION
 */

function reverse(array) {
  var reversedArr = [];
  for (var i = array.length - 1; i > -1; i--) {
    reversedArr.push(array[i]);
  }
  return reversedArr;
}
