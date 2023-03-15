import sum from './add.js';
import difference from './subtract.js';
import product from './multiply.js';
import quotient from './divide.js';

const firstArg = Number(process.argv[2]);
const secondArg = Number(process.argv[4]);

switch (process.argv[3]) {
  case 'plus':
  case '+':
    console.log('result:', sum(firstArg, secondArg));
    break;
  case 'minus':
  case '-':
    console.log('result:', difference(firstArg, secondArg));
    break;
  case 'times':
  case '*':
    console.log('result:', product(firstArg, secondArg));
    break;
  case 'over':
  case '/':
    console.log('result:', quotient(firstArg, secondArg));
    break;
}
