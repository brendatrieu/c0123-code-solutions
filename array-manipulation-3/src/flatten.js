/* exported flatten */

/**
 * PSEUDOCODE:
 * Define a function 'flatten' that takes a parameter 'array'.
 *  Declare a variable 'unwrapped' and assign an empty array.
 *  Initiate a for loop to iterate through each index of 'array'.
 *    At each index:
 *    If the current index is an array:
 *       Initiate a for loop to iterate through each index:
 *          Push the value into 'unwrapped'.
 *    Else:
 *       Push the value into 'unwrapped'.
 *  Return 'unwrapped'.
 */

/**
 * CODE IMPLEMENTATION:
 */

var flatten = array => {
  var unwrapped = [];
  for (var i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (var j = 0; j < array[i].length; j++) {
        unwrapped.push(array[i][j]);
      }
    } else {
      unwrapped.push(array[i]);
    }
  }
  return unwrapped;
};
