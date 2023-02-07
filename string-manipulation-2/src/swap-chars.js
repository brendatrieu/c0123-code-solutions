/* exported swapChars */

/** PSEUDOCODE:
 *  Define a function 'swapChars' with three parameters: 'firstIndex',
 *  'secondIndex', 'string'.
 *    Declare variable swapStr and assign the split method of the string object.
 *    Declare variable firstStr and assign the value of 'swapStr' at index 'firstIndex'.
 *    Declare variable secondStr and assign the value of 'swapStr' at index 'secondIndex'.
 *    Assign firstStr to swapStr at index 'secondIndex'.
 *    Assign secondStr to swapStr at index 'firstIndex'.
 *    Return swapStr joined.
 */

/**
 * CODE IMPLEMENTATION:
 */

function swapChars(firstIndex, secondIndex, string) {
  var swapStr = string.split('');
  var firstStr = swapStr[firstIndex];
  var secondStr = swapStr[secondIndex];

  swapStr[secondIndex] = firstStr;
  swapStr[firstIndex] = secondStr;
  return swapStr.join('');
}
