/* exported takeRight */

/**
 * PSEUDOCODE:
 * Define a function 'takeRight' with two parameters: 'array', 'count'.
 *  Declare variable 'rightArr' and assign an empty array.
 *  If 'count' is less than the length of the array:
 *    Initiate a for loop beginning at index of 'array' length minus 'count'.
 *  Else:
 *    Spread 'array' into 'rightArr'.
 *  Return 'rightArr'.
 */

/**
 * CODE IMPLEMENTATION:
 */

function takeRight(array, count) {
  var rightArr = [];
  if (count < array.length) {
    for (var i = array.length - count; i < array.length; i++) {
      rightArr.push(array[i]);
    }
  } else {
    rightArr = [...array];
  }
  return rightArr;
}
