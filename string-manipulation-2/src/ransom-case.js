/* exported ransomCase */

/** PSEUDOCODE:
 *  Define a function 'ransomCase' with a parameter 'string'.
 *    Declare a variable 'everyOther' and assign an empty string to it.
 *    Initiate for loop to iterate through each index of 'string'.
 *      If index is not divisible by 2,
 *        Concatenate uppercased character to everyOther.
 *      Otherwise:
 *        Concatenate lowercased character to everyOther.
 *    Return everyOther.
 */

/**
 * CODE IMPLEMENTATION:
 */

function ransomCase(string) {
  var everyOther = '';
  for (var i = 0; i < string.length; i++) {
    if (i % 2 !== 0) {
      everyOther += string[i].toUpperCase();
    } else {
      everyOther += string[i].toLowerCase();
    }
  }
  return everyOther;
}
