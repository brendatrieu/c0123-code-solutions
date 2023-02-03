/* exported isUpperCased */

/**
 * PSEUDOCODE:
 * Define a function called 'isUpperCased' that takes in one parameter 'word'.
 *  Declare variable 'upperCount' and set initial value to 0.
 *  Begin a loop that iterates through all characters in 'word' where
 *    For each index in the string:
 *      If the character is uppercase, increment 'upperCount'.
 *  Return if upperCount matches length of 'word'.
 **/

/**
 * CODE IMPLEMENTATION:
 */

function isUpperCased(word) {
  var upperCount = 0;
  for (var i = 0; i < word.length; i++) {
    if (word[i] === word[i].toUpperCase()) {
      upperCount++;
    }
  }
  return upperCount === word.length;
}
