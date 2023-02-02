/* exported includesSeven */
function includesSeven(array) {
  var sevenResults = false;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === 7) {
      sevenResults = true;
    }
  }
  return sevenResults;
}
