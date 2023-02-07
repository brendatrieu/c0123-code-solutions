/* exported lastChars */

/** PSEUDOCODE:
 *  Define a function 'lastChars' with two parameters: 'length', 'string'.
 *    If the length of the string is less than 'length',
 *      Return length.
 *    If not,
 *      Return 'string' sliced beginning at index string length minus 1 minus 'length'.
 */

/**
 * CODE IMPLEMENTATION:
 */

function lastChars(length, string) {
  if (length > string.length) {
    return string;
  }
  return string.slice(string.length - length);
}
