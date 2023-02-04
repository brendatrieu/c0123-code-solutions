/* exported truncate */

/** PSEUDOCODE:
 *  Define a function 'truncate' with two parameters: 'length', 'string'.
 *    Return 'string' sliced by 'length' and concatenate with '...'
 */

/**
 * CODE IMPLEMENTATION:
 */

function truncate(length, string) {
  return string.slice(0, length) + '...';
}
