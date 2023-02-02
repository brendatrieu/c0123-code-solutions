/* exported oddOrEven */
function oddOrEven(numbers) {
  var typeArr = [];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      typeArr.push('even');
    } else {
      typeArr.push('odd');
    }
  }
  return typeArr;
}
