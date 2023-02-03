/* exported isLowerCased */

/**
 * PSEUDOCODE:
 * Define a function called 'isLowerCased' that takes in one parameter 'word'.
 *  Declare variable 'lowerCount' and set initial value to 0.
 *  Begin a loop that iterates through all characters in 'word' where
 *    For each index in the string:
 *      If the character is uppercase, increment 'lowerCount'.
 *  Return if lowerCount matches length of 'word'.
 **/

/**
 * CODE IMPLEMENTATION:
 */

function isLowerCased(word) {
  var lowerCount = 0;
  for (var i = 0; i < word.length; i++) {
    if (word[i] === word[i].toLowerCase()) {
      lowerCount++;
    }
  }
  return lowerCount === word.length;
}
