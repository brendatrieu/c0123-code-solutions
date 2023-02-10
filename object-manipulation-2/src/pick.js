/* exported pick */

/**
 * PSUEDOCODE:
 * Define a function 'pick' with two parameters: 'source', 'keys'.
 *  Declare a variable 'filteredObj' and assign an empty object.
 *  Initiate a for loop to iterate through each index of 'keys'.
 *    If 'source' has the property at current index of 'keys' and the value is not undefined:
 *      Assign property and value to 'filteredObj'.
 *  Return 'filteredObj'.
 */

/**
 * CODE IMPLEMENTATION:
 */

var pick = (source, keys) => {
  var filteredObj = {};
  for (var i = 0; i < keys.length; i++) {
    if (Object.prototype.hasOwnProperty.call(source, [keys[i]]) && source[keys[i]] !== undefined) {
      filteredObj[keys[i]] = source[keys[i]];
    }
  }
  return filteredObj;
};
