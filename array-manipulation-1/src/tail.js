/* exported tail */

/** PSEUDOCODE:
 *  Define a function called 'tail' that takes in one parameter 'array'.
 *    Declare a variable 'minusFirst' that has an empty array.
 *    Initiate a loop that iterates through all indexes of the array beginning at index 1.
 *      Push the value of the index into 'minusFirst'.
 *    Return 'minusFirst'.
 *
 */

/**
 * CODE IMPLEMENTATION
 */

function tail(array) {
  var minusFirst = [];
  for (var i = 1; i < array.length; i++) {
    minusFirst.push(array[i]);
  }
  return minusFirst;
}
