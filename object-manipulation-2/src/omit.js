/* exported omit */

/**
 * PSEUDOCODE:
 * Define a function 'omit' with two parameters: 'source', 'keys'.
 *  Declare a variable 'filteredObj' and assign an object with 'source' spread into it.
 *  Initiate a for loop through each index of 'keys'.
 *    If 'filteredObj' has a value for the property at index of 'keys':
 *      Delete 'filteredObj' with property at index of 'keys.
 *  Return 'filteredObj'.
 */

/**
 * CODE IMPLEMENTATION:
 */

var omit = (source, keys) => {
  var filteredObj = { ...source };
  for (var i = 0; i < keys.length; i++) {
    if (filteredObj[keys[i]]) {
      delete filteredObj[keys[i]];
    }
  }
  return filteredObj;
};
