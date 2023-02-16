/* exported isPalindromic */

/**
 * PSEUDOCODE:
 * Define a function 'isPalindromic' with a parameter 'string'.
 * Declare a variable 'forward' and assign 'string' split by blank strings and joined.
 * Declare a variable 'backward' and assign an empty string.
 * Initiate a for loop to iterate through each index of 'forward' in reverse order.
 * At each index:
 *  Concatenate value to 'backward'.
 * Return if 'forward' is equal to 'backward'.
 */

/**
 * CODE IMPLEMENTATION:
 */

var isPalindromic = string => {
  var forward = string.split(' ').join('');
  var backward = '';

  for (var letter = forward.length - 1; letter > -1; letter--) {
    backward += forward[letter];
  }

  return forward === backward;
};
