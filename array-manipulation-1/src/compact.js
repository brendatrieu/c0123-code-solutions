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
  var falseyArr = [false, 0, -0, NaN, null, undefined, ''];
  for (var i = 0; i < array.length; i++) {
    if (Number.isNaN(array[i])) {
      continue;
    } else if (falseyArr.indexOf(array[i]) === -1) {
      truthyArr.push(array[i]);
    }
  }
  return truthyArr;
}
