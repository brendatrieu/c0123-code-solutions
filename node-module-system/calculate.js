import add from './add.js';
import subtract from './subtract.js';
import multiply from './multiply.js';
import divide from './divide.js';

const firstArg = Number(process.argv[2]);
const secondArg = Number(process.argv[4]);
const operator = process.argv[3];
let result = null;

switch (operator) {
  case 'plus':
  case '+':
    result = add(firstArg, secondArg);
    break;
  case 'minus':
  case '-':
    result = subtract(firstArg, secondArg);
    break;
  case 'times':
  case '*':
    result = multiply(firstArg, secondArg);
    break;
  case 'over':
  case '/':
    result = divide(firstArg, secondArg);
    break;
  default:
    console.log('invalid operation');
}

if (result !== null) {
  console.log('result:', result);
}
