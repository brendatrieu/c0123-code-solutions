// 1
function convertMinutesToSeconds(minutes) {
  return (minutes * 60);
}

var convertMinutesToSecondsResults = convertMinutesToSeconds(5);

console.log('5 minutes converted to seconds: ', convertMinutesToSecondsResults);

// 2
function greet(name) {
  return 'Hey, ' + name;
}

var greetResults = greet('Beavis');

console.log('Greet Beavis: ', greetResults);

// 3
function getArea(width, height) {
  return width * height;
}

var getAreaResults = getArea(17, 42);

console.log('Area of 17 by 42: ', getAreaResults);

// 4
function getFirstName(person) {
  return person.firstName;
}

var getFirstNameResults = getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' });

console.log('First Name: ', getFirstNameResults);

// 5
function getLastElement(array) {
  return array[(array.length - 1)];
}

var getLastElementResults = getLastElement(['propane', 'and', 'propane', 'accessories']);

console.log('Last Element of Array: ', getLastElementResults);
