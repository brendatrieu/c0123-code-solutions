/* exported take */

/**
 * PSUEDOCODE:
 * Define a function 'take' with two parameters: 'array', 'count'.
 *  Declare a variable 'takeArr' and assign an empty array.
 *  If count is less than the length of the array:
 *    Initiate a for loop that iterates through each index of 'array' beginning at  0 and up to 'count'.
 *      Push the value at the given index to 'takeArr'.
 *  Else,
 *    Spread 'array' into takeArr.
 *  Return takeArr.
 */

/**
 * CODE IMPLEMENTATION
 */

function take(array, count) {
  var takeArr = [];
  if (count < array.length) {
    for (var i = 0; i < count; i++) {
      takeArr.push(array[i]);
    }
  } else {
    takeArr = [...array];
  }
  return takeArr;
}
