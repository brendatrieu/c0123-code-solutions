/* exported compact */

/** PSEUDOCODE:
 *  Define a function called 'compact' that takes in one parameter 'array'.
 *    Declare a variable 'truthyArr' with a value of an empty array.
 *    Declare a variable 'falseyArr' with undesired falsey values.
 *    Initiate for loop to iterate through each index of 'array'.
 *      If value is a number value of NaN,
 *         continue.
 *      If the index of the value within falseyArr is -1,
 *        push the value into truthyArr.
 *    Return truthyArr.
 */

/**
 * CODE IMPLEMENTATION
 */

function compact(array) {
  var truthyArr = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      truthyArr.push(array[i]);
    }
  }
  return truthyArr;
}
