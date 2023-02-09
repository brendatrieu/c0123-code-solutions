/* exported chunk */

/**
 * PSEUDOCODE:
 * Define a function 'chunk' with two parameters: 'array', 'size'.
 * Declare a variable 'chunkyArr' and assign an empty array.
 * If 'size' is less than the length of 'array':
 *  Declare a variable 'oneChunk' and assign an empty array.
 *  Initiate a for loop to iterate through 'array' up to total length plus size, incrementing at 'size' intervals.
 *    Declare variable 'k' and assign 0.
 *    Initiate for loop to iterate through k up to value of 'size'.
 *      If k is less than the length of 'array':
 *        Push value of 'array' at index 'k' into 'oneChunk'.
 *        If 'k' plus 1 is less than the length of 'array':
 *          If the length of 'oneChunk' is equal to 'size':
 *            Push a copy of 'oneChunk' into 'chunkyArr'.
 *            Reset 'oneChunk' to an empty array.
 *        If not:
 *          Push a copy of 'oneChunk' into 'chunkyArr'.
 * Else:
 *  Spread 'array' into 'chunkyArr'.
 * Return 'chunkyArr'.
 */

function chunk(array, size) {
  var chunkyArr = [];
  if (size < array.length) {
    var oneChunk = [];
    for (var i = 0; i < (array.length + size); i += size) {
      var k = 0;
      for (k += i; (k - i) < size; k++) {
        if (k < array.length) {
          oneChunk.push(array[k]);
          if ((k + 1) < array.length) {
            if (oneChunk.length === size) {
              chunkyArr.push([...oneChunk]);
              oneChunk = [];
            }
          } else {
            chunkyArr.push([...oneChunk]);
          }
        }
      }
    }
  } else {
    chunkyArr = [...array];
  }
  return chunkyArr;
}
