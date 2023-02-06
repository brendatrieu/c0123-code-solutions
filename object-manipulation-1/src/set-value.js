/* exported setValue */

/** PSEUDOCODE:
 *  Define a function 'setValue' that takes
 *  three parameters: 'object', 'key', 'value'.
 *    Assign the value to the key property of the object.
 *    Return the object.
 */

/**
 * CODE IMPLEMENTATION:
 */

function setValue(object, key, value) {
  object[key] = value;
  return object;
}
