// The Math Object
var num1 = 2;
var num2 = 4;
var num3 = 6;
var maximumValue = Math.max(num1, num2, num3);

console.log('Maximum value: ', maximumValue);

var heroes = ['Spiderman', 'Black Widow', 'Captain America', 'Thor'];
var randomNumber = Math.random();

randomNumber = randomNumber * heroes.length;

var randomIndex = Math.floor(randomNumber);

console.log('Random Index: ', randomIndex);

var randomHero = heroes[randomIndex];

console.log('Random Hero: ', randomHero);

// Array Methods
var library = [
  {
    title: 'Harry Potter and the Sorcerer Stone',
    author: 'J.K. Rowling'
  },
  {
    title: 'The Sun Also Rises',
    author: 'Ernest Hemingway'
  },
  {
    title: 'The Cat in the Hat',
    author: 'Dr. Seuss'
  }
];

var lastBook = library.pop();

console.log('Last Book: ', lastBook);

var firstBook = library.shift();

console.log('First Book: ', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);

console.log('Updated library: ', library);

// String Methods
var fullName = 'Brenda Trieu';
var firstAndLastName = fullName.split(' ');

console.log('First and Last Name: ', firstAndLastName);

var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();

console.log('Say my name: ', sayMyName);
