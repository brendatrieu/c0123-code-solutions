/* exported filterOutNulls */
function filterOutNulls(values) {
  var filteredValues = [];
  for (var i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      filteredValues.push(values[i]);
    }
  }
  return filteredValues;
}
