/* exported intersection */

/**
 * PSEUDOCODE:
 * Define a function 'intersection' with two parameters: 'first', 'second'.
 * Declare a variable 'firstArr' and assign 'first' array filtered by items with an index not equal to -1 in 'second'.
 * Declare a second variable 'secArr' and assign 'second' array filtered by items with an index not equal to -1 in 'first' and an index of -1 in firstArr.
 * Return 'firstArr' concatenated with 'secArr'.
 */

/**
 * CODE IMPLEMENTATION:
 */

var intersection = (first, second) => {
  var firstArr = first.filter(index => second.indexOf(index) !== -1);
  var secArr = second.filter(index => first.indexOf(index) !== -1 && firstArr.indexOf(index) === -1);
  return firstArr.concat(secArr);
};
