/* exported numVowels */

/** PSEUDOCODE:
 *  Define a function 'numVowels' with a parameter 'string'.
 *    Declare a variable 'lowerStr' and assign lowercased string.
 *    Declare variable 'vowelCount' and assign 0.
 *    Initiate for loop to iterate through each index of 'lowerStr'.
 *      Initiate a switch case to check the value of lowerStr at the index
 *        If the string is a vowel, increment vowelCount.
 *        Otherwise, continue.
 *    Return vowelCount.
 */

/**
 * CODE IMPLEMENTATION:
 */

function numVowels(string) {
  var lowerStr = string.toLowerCase();
  var vowelCount = 0;
  for (var i = 0; i < lowerStr.length; i++) {
    switch (lowerStr[i]) {
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
        vowelCount++;
        break;
      default:
        break;
    }
  }
  return vowelCount;
}
