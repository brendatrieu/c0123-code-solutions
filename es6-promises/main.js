import takeAChance from './take-a-chance.js';

const chanceTaken = takeAChance('Brenda');

chanceTaken
  .then((value) => console.log(value))
  .catch((reason) => console.error(`${reason}`));
