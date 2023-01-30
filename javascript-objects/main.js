// Student Object

var student = {
  firstName: 'Brenda',
  lastName: 'Trieu',
  age: 28
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('Full Name: ', fullName);

student.livesInIrvine = true;
student.previousOccupation = 'Business Analyst';

console.log('Lives in Irvine: ', student.livesInIrvine);
console.log('Previous Occupation: ', student.previousOccupation);

// Vehicle Object
var vehicle = {
  make: 'Magic',
  model: 'School Bus',
  year: 1990
};

vehicle['color'] = 'Yellow';
vehicle['isConvertible'] = true;
console.log('Color: ', vehicle['color']);
console.log('Is Convertible: ', vehicle['isConvertible']);
console.log('Favorite Vehicle: ', vehicle);

// Pet Object
var pet = {
  name: 'Boomer',
  type: 'Pekingnese'
};

delete pet.name;
delete pet.type;

console.log('Pet: ', pet);
