function ExampleConstructor() {
}

console.log('value of prototype: ', ExampleConstructor);
console.log('typeof prototype: ', typeof ExampleConstructor);

var newExConst = new ExampleConstructor();
console.log('newExConst: ', newExConst);
var newInstOfEx = newExConst instanceof ExampleConstructor;
console.log('new Instance of Example: ', newInstOfEx);
