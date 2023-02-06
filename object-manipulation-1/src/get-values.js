/* exported getValues */

/** PSEUDOCODE:
 *  Define a function 'getValues' that takes one parameter 'object'.
 *    Declare a variable 'objValues' and assign an empty array to it.
 *    Initiate for in loop to iterate through each key of 'object'
 *      Push the value at the key property into 'objValues'.
 *    Return 'objValues'.
 */

/**
 * CODE IMPLEMENTATION:
 */

function getValues(object) {
  var objValues = [];
  for (const key in object) {
    objValues.push(object[key]);
  }
  return objValues;
}
