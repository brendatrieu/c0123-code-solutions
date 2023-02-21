/* exported Student */

function Student(first, last, subject) {
  this.firstName = first;
  this.lastName = last;
  this.subject = subject;
}

Student.prototype.getFullName = function () {
  return this.firstName + ' ' + this.lastName;
};

Student.prototype.getIntroduction = function () {
  return 'Hello, my name is ' + this.getFullName() + ' and I am studying ' + this.subject + '.';
};
