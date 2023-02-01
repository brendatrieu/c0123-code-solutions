/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */

// 1
function isUnderFive(number) {
  return number < 5;
}

// 2
function isEven(number) {
  return (number % 2) === 0;
}

// 3
function startsWithJ(string) {
  return string[0] === 'J';
}

// 4
function isOldEnoughToDrink(person) {
  return person.age >= 21;
}

// 5
function isOldEnoughToDrive(person) {
  return person.age >= 16;
}

// 6
function isOldEnoughToDrinkAndDrive(person) {
  return (person.age >= 21) && (person.age >= 16);
}

// 7
function categorizeAcidity(pH) {
  if (pH === 7) {
    return 'neutral';
  } else if ((pH < 7) && (pH >= 0)) {
    return 'acidic';
  } else if ((pH < 14) && (pH > 7)) {
    return 'base';
  } else {
    return 'invalid pH level';
  }
}

// 8
function introduceWarnerBro(name) {
  if ((name === 'yakko') || (name === 'wakko')) {
    return "We're the warner brothers!";
  } else if (name === 'dot') {
    return "I'm cute~";
  } else {
    return 'Goodnight everybody!';
  }
}
