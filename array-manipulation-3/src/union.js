/* exported union */
/**
 * PSEUDOCODE:
 * Define a function 'union' with two parameters: 'first', 'second'.
 * Declare a variable 'secArr' and assign 'second' array filtered by items with an index of -1 in 'first'.
 * Return 'first' concatenated with 'secArr'.
 */

/**
 * CODE IMPLEMENTATION:
 */

var union = (first, second) => {
  var secArr = second.filter(index => first.indexOf(index) === -1);
  return first.concat(secArr);
};
