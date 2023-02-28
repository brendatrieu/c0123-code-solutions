/* exported isAnagram */

/**
 * PSUEDOCODE:
 * Define a function 'isAnagram' that takes in two parameters: 'firstString', 'secondString'.
 * Declare a variable 'firstArr' and assign 'firstString' split by empty strings and filter blank strings.
 * Declare a variable 'secondArr' and assign 'secondString' split by empty strings and filter blank strings.
 * Initiate a for loop to iterate through each index of 'secondArr'.
 *  At each index:
 *    If the there is an index of the value in 'firstArr':
 *      Pop the value.
 * Return if the length of 'firstArr' is 0.
 */

/**
 * CODE IMPLEMENTATION:
 */

var isAnagram = (firstString, secondString) => {
  var firstArr = firstString.toLowerCase().split('').filter(letter => letter !== ' ');
  var secondArr = secondString.toLowerCase().split('').filter(letter => letter !== ' ');

  if (secondArr.length > firstArr.length) {
    return false;
  }

  for (var letter = 0; letter < secondArr.length; letter++) {
    if (firstArr.indexOf(secondArr[letter]) !== -1) {
      firstArr.splice(firstArr.indexOf(secondArr[letter]), 1);
    }
  }

  return (firstArr.length === 0);
};
