/* exported invert */

/**
 * PSUEDOCODE:
 * Define a function 'invert' with one parameter 'source'.
 *  Declare a variable 'flippedSource' and assign an empty object.
 *  Declare a variable 'keys' and assign the keys property of 'source'.
 *  Declare a variable 'values' and assign the values property of 'source'.
 *  Initiate a for loop to iterate through each index of 'values'.
 *    At each index:
 *    Assign 'keys' at index to 'flippedSource' at 'values' at index.
 *  Return 'flippedSource'.
 */
/**
 * CODE IMPLEMENTATION:
 */

var invert = source => {
  var flippedSource = {};
  var keys = Object.keys(source);
  var values = Object.values(source);
  for (var i = 0; i < values.length; i++) {
    flippedSource[values[i]] = keys[i];
  }
  return flippedSource;
};
