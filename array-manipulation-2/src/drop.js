/* exported drop */

/**
 * PSEUDOCODE:
 * Define a function 'drop' with two parameters: 'array', 'count'.
 *  Declare variable 'dropArr' and assign an empty variable.
 *  If 'count' is less than the length of 'array':
 *    Initiate for loop to iterate through each index of 'array' beginning at index 'count'.
 *      Push the value at the index to 'dropArr'.
 *  Return 'dropArr'.
 */

/**
 * CODE IMPLEMENTATION
 */

function drop(array, count) {
  var dropArr = [];
  if (count < array.length) {
    for (var i = count; i < array.length; i++) {
      dropArr.push(array[i]);
    }
  }
  return dropArr;
}
