/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Circle */

class Circle extends Shape {
  constructor(radius) {
    super((Math.PI * radius ** 2), (Math.PI * radius * 2));
    this.radius = radius;
  }

  print() {
    return `${super.print()}
Radius: ${this.radius}`;
  }
}

console.log(new Circle(2).print());
