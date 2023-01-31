// Colors Array
var colors = ['red', 'white', 'blue'];

console.log('value of colors [0]: ', colors[0]);
console.log('value of colors [1]: ', colors[1]);
console.log('value of colors [2]: ', colors[2]);
console.log('America is ' + colors[0] + ', ' + colors[1] + ', and ' + colors[2] + '.');

colors[2] = 'green';

console.log('Mexico is ' + colors[0] + ', ' + colors[1] + ', and ' + colors[2] + '.');
console.log('Colors Array: ', colors);

// Students Array
var students = ['Brenda', 'Jenna', 'Shawn', 'Timothy'];
var numberOfStudents = students.length;

console.log('Number of Students: ', numberOfStudents);

var lastIndex = numberOfStudents - 1;
var lastStudent = students[lastIndex];

console.log('Last Student: ', lastStudent);
console.log('Students Array: ', students);
