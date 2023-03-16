const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna'
];

// Set up an object to keep track of filtered arrays
const allArrays = {
  evenNumbers: function () { return numbers.filter((num) => num % 2 === 0); },
  overFive: function () { return numbers.filter((num) => num > 5); },
  startWithE: function () { return names.filter((name) => name[0].toLowerCase() === 'e'); },
  haveD: function () { return names.filter((name) => name.toLowerCase().includes('d')); }
};

// Print all filtered arrays
for (const arr in allArrays) {
  console.log(arr, allArrays[arr]());
}
