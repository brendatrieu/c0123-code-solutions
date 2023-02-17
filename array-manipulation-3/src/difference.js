/* exported difference */

/**
 * PSEUDOCODE:
 * Define a function 'difference' with two parameters: 'first', 'second'.
 * Declare a variable 'diffArr' and assign an empty array.
 * Initiate a for loop to iterate through each index of 'first'.
 *  At each index:
 *    If the index of the value within second is -1:
 *      Push the value to 'diffArr'.
 * Initiate a for loop to iterate through each index of 'second'.
 *  At each index:
 *    If the index of the value within first is -1:
 *      Push the value to 'diffArr'.
 *  Return 'diffArr'.
 */

/**
 * CODE IMPLEMENTATION:
 */

var difference = (first, second) => {
  var diffArr = [];
  for (var i = 0; i < first.length; i++) {
    if (second.indexOf(first[i]) === -1) {
      diffArr.push(first[i]);
    }
  }
  for (var j = 0; j < second.length; j++) {
    if (first.indexOf(second[j]) === -1) {
      diffArr.push(second[j]);
    }
  }
  return diffArr;
};
