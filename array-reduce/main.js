const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

// Create an object to keep track of all reductions
const allReductions = {
  sum: numbers.reduce((accumulator, currentValue) => accumulator + currentValue),
  product: numbers.reduce((accumulator, currentValue) => accumulator * currentValue),
  balance: account.reduce((accumulator, currentValue) => {
    if (currentValue.type === 'deposit') {
      return accumulator + currentValue.amount;
    } else if (currentValue.type === 'withdrawal') {
      return accumulator - currentValue.amount;
    } else {
      return console.error('Invalid transaction, try again');
    }
  }, 0),
  composite: traits.reduce((accumulator, currentValue) => ({ ...accumulator, ...currentValue })
  )
};

// Log all reductions performed
for (const reduct in allReductions) {
  console.log(reduct, allReductions[reduct]);
}
