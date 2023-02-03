/* exported reverseWord */

/**
 * PSEUDOCODE:
 * Define a function called 'reverseWord' that takes in one parameter 'word'.
 *  Declare variable 'revisedWord' with a value of an empty string.
 *  Initiate a for loop that iterates through each index of 'word' beginning from the
 *  last index and decrementing to the first index.
 *    Concatenate the character at each index to 'revisedWord'.
 *  Return 'revisedWord'.
 **/

/**
 * CODE IMPLEMENTATION:
 */

function reverseWord(word) {
  var revisedWord = '';
  for (var i = (word.length - 1); i > -1; i--) {
    revisedWord += word[i];
  }
  return revisedWord;
}
