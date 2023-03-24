/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Circle */

class Circle extends Shape {
  constructor(area, circumference, radius) {
    super(area, circumference);
    this.radius = radius;
  }

  print() {
    return `Area: ${this.area}
Circumference: ${this.circumference}
Radius: ${this.radius}`;
  }
}

console.log(new Circle(12.6, 12.6, 2).print());
