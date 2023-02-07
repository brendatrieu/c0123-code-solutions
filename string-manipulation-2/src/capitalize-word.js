/* exported capitalizeWord */

/** PSEUDOCODE:
 *  Define a function 'capitalizeWord' with one parameter 'word'.
 *    Declare variable capWord and assign an empty string to it.
 *    If lowercased 'word' is equal to 'javascript',
 *      Assign 'JavaScript' to capWord.
 *    If not,
 *      Concatenate the uppercase first index of the string
 *      and the sliced string beginning at index 1 to capWord.
 *    Return capWord.
 */

/**
 * CODE IMPLEMENTATION:
 */

function capitalizeWord(word) {
  var capWord = '';
  if (word.toLowerCase() === 'javascript') {
    capWord = 'JavaScript';
  } else {
    capWord = word[0].toUpperCase() + word.slice(1).toLowerCase();
  }
  return capWord;
}
