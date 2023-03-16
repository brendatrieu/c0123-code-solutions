const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const languages = [
  'Hypertext Markup Language',
  'Cascading Style Sheets',
  'ECMAScript',
  'PHP Hypertext Preprocessor',
  'Structured Query Language'
];

// Set up an object to keep track of all mappings
const allMaps = {
  doubled: numbers.map((num) => num * 2),
  prices: numbers.map((num) => `$${num.toFixed(2)}`),
  upperCased: languages.map((lang) => lang.toUpperCase()),
  firstLetters: languages.map((lang) => lang[0])
};

// Log all map names and their values
for (const map in allMaps) {
  console.log(map, allMaps[map]);
}
