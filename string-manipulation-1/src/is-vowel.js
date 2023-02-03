/* exported isVowel */

/**
 * PSEUDOCODE:
 * Define a function called 'isVowel' that takes in one parameter 'char'.
 *  Declare variable 'vowels' and set value to array of vowels.
 *  Declare variable 'vowelComparison' and set value to false.
 *  Begin a loop that iterates through all characters in 'vowels' where
 *    For each index in the string:
 *      If the character matches the lowercased char,
 *        reassign vowelComparison to true and break.
 *  Return vowelComparison.
 **/

/**
 * CODE IMPLEMENTATION:
 */

function isVowel(char) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var vowelComparison = false;
  for (var i = 0; i < vowels.length; i++) {
    if (vowels[i] === char.toLowerCase()) {
      vowelComparison = true;
      break;
    }
  }
  return vowelComparison;
}
