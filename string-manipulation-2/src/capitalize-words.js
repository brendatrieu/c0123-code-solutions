/* exported capitalizeWords */

/** PSEUDOCODE:
 *  Define a function 'capitalizeWords' with one parameter 'string'.
 *   Declare variable lowerStr and assign lowercased 'string' to it.
 *   Declare variable capWords and assign an empty string to it.
 *   Initiate a for loop to iterate through each index of 'string'.
 *     If index is 0 or if the value at the previous index is an empty string:
 *       Concatenate the uppercased value to capWords.
 *     Else,
 *        Concatenate the value to capWords.
 *  Return capWords.
 */

/**
 * CODE IMPLEMENTATION:
 */

function capitalizeWords(string) {
  var lowerStr = string.toLowerCase();
  var capWords = '';
  for (var i = 0; i < lowerStr.length; i++) {
    if ((lowerStr[i - 1] === ' ') || i === 0) {
      capWords += lowerStr[i].toUpperCase();
    } else {
      capWords += lowerStr[i];
    }
  }
  return capWords;
}
