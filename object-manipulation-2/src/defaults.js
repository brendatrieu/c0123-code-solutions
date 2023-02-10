/* exported defaults */

/**
 * PSEUDOCODE:
 * Define a function 'defaults' with two parameters: 'target', 'source'.
 *  Declare a variable 'sourceKeys' and assign the keys of 'source'.
 *  Initiate a for loop to iterate through each index of 'sourceKeys'.
 *  At each index:
 *    If 'target' does not have a property of the value:
 *      Assign the entry of 'sourceKeys' at the value property to 'target' at property of keys at index.
 *  Return 'target'.
 */

var defaults = (target, source) => {
  var sourceKeys = Object.keys(source);
  for (var key = 0; key < sourceKeys.length; key++) {
    if (!Object.prototype.hasOwnProperty.call(target, sourceKeys[key])) {
      target[sourceKeys[key]] = source[sourceKeys[key]];
    }
  }
  return target;
};
