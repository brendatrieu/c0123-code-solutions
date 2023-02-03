/* exported getKeys */

/** PSEUDOCODE:
 *  Define a function 'getKeys' that takes in a parameter 'object'.
 *    Declare a variable 'objKeys' and assign an empty array to it.
 *    Initiate for in loop through keys of 'object'.
 *      Push key into objKeys.
 *    Return 'objKeys'.
 */

/**
 * CODE IMPLEMENTATION:
 */

function getKeys(object) {
  var objKeys = [];
  for (var key in object) {
    objKeys.push(key);
  }
  return objKeys;
}
