/* exported capitalize */

/**
 * PSEUDOCODE:
 * Define a function called 'capitalize' that takes in one parameter 'word'.
 *  Create a new variable 'revisedWord' with an empty string to
 *  represent the revised word.
 *  Change the first character of the word to be uppercase and
 *  concatenate it to the revisedWord variable.
 *  Change the remaining characters of the word to be lowercase
 *  and concatenate them to the revisedWord variable.
 *  Return the revisedWord.
 **/

/**
 * CODE IMPLEMENTATION:
 */

function capitalize(word) {
  var revisedWord = '';
  revisedWord += word[0].toUpperCase();
  revisedWord += word.slice(1).toLowerCase();
  return revisedWord;
}
