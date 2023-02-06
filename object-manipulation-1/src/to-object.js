/* exported toObject */

/** PSEUDOCODE:
 *  Define a function 'toObject' that takes a parameter 'keyValuePair'.
 *    Declare a variable 'newObj' and assign an empty object;
 *    Call the value of 'keyValuePair' at index 0 on 'newObj',
 *    then assign the value of 'keyValuePair at index 1 to that key.
 *    Return newObj;
 */

/**
 * CODE IMPLEMENTATION:
 */

function toObject(keyValuePair) {
  var newObj = {};
  newObj[keyValuePair[0]] = keyValuePair[1];
  return newObj;
}
