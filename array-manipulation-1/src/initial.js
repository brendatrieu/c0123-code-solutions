/* exported initial */

/** PSEUDOCODE:
 *  Define a function called 'initial' that takes in one parameter 'array'.
 *    Declare a variable 'minusLast' that has an empty array.
 *    Initiate a loop that iterates through all indexes of the array, stopping before the last index.
 *      Push the value at the index into 'minusLast'.
 *    Return 'minusLast'.
 */

/**
 * CODE IMPLEMENTATION
 */

function initial(array) {
  var minusLast = [];
  for (var i = 0; i < (array.length - 1); i++) {
    minusLast.push(array[i]);
  }
  return minusLast;
}
