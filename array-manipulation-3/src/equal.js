/* exported equal */

/**
 * PSUEDOCODE:
 * Define a function 'equal' that takes in two parameters: 'first', 'second'.
 *  Declare a variable 'comparison' and assign true.
 *  If the length of 'first' and 'second' do not match:
 *    return false.
 *  Initiate a for loop to iterate through each index of 'first' and 'second'.
 *    At each index:
 *    If the values do not match:
 *      Reassign 'comparison' as 'false'.
 *  Return 'comparison'.
 */

/**
 * CODE IMPLEMENTAION:
 */

var equal = (first, second) => {
  var comparison = true;
  if (first.length !== second.length) {
    return false;
  }
  for (var i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      comparison = false;
    }
  }
  return comparison;
};
