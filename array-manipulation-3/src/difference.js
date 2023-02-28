/* exported difference */

/**
 * PSEUDOCODE:
 * Define a function 'difference' with two parameters: 'first', 'second'.
 * Declare a variable 'firstArr' and assign 'first' array filtered by items with an index of -1 in 'second'.
 * Declare a second variable 'secArr' and assign 'second' array filtered by items with an index of -1 in 'first'.
 * Return 'firstArr' concatenated with 'secArr'.
 */

/**
 * CODE IMPLEMENTATION:
 */

var difference = (first, second) => {
  var firstArr = first.filter(index => second.indexOf(index) === -1);
  var secArr = second.filter(index => first.indexOf(index) === -1);
  return firstArr.concat(secArr);
};
