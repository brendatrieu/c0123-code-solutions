/* exported sumAll */
function sumAll(numbers) {
  var sumNums = 0;
  for (var i = 0; i < numbers.length; i++) {
    sumNums += numbers[i];
  }
  return sumNums;
}
