/* exported getWords */

/**
 * PSEUDOCODE:
 * Define a function called 'getWords' that takes in one parameter 'string'.
 *  If string is empty,
 *    return an empty array.
 *  If not,
 *    return an array of the 'string' that is split by empty strings.
 **/

/**
 * CODE IMPLEMENTATION:
 */

function getWords(string) {
  if (string === '') {
    return [];
  } else {
    return string.split(' ');
  }
}
