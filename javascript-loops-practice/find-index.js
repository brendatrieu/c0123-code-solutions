/* exported findIndex */
function findIndex(array, value) {
  var valueIndex = -1;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      valueIndex = i;
      break;
    }
  }
  return valueIndex;
}
