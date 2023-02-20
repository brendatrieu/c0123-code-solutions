/* exported calculator */

var calculator = {
  add: function (x, y) {
    return x + y;
  },
  subtract: function (x, y) {
    return x - y;
  },
  multiply: function (x, y) {
    return x * y;
  },
  divide: function (x, y) {
    return x / y;
  },
  square: function (x) {
    return Math.pow(x, 2);
  },
  sumAll: function (numbers) {
    var sumNums = 0;
    for (var num = 0; num < numbers.length; num++) {
      sumNums += numbers[num];
    }
    return sumNums;
  },
  getAverage: function (numbers) {
    return this.sumAll(numbers) / numbers.length;
  }

};
