/* exported unique */

/**
 * PSUEDOCODE:
 * Define a function 'unique' that takes a parameter 'array'.
 *  Declare a variable 'uniqueArr' and assign an empty array.
 *  Initiate a for loop to iterate through each index of 'array'.
 *    If the index of the value in 'uniqueArr' is -1:
 *      Push the value to 'uniqueArr'.
 *  Return 'uniqueArr'.
 */

/**
 * CODE IMPLEMENTATION:
 */

var unique = array => {
  var uniqueArr = [];
  for (var i = 0; i < array.length; i++) {
    if (uniqueArr.indexOf(array[i]) === -1) {
      uniqueArr.push(array[i]);
    }
  }
  return uniqueArr;
};
