/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Square */

class Square extends Shape {
  constructor(area, circumference, width) {
    super(area, circumference);
    this.width = width;
  }

  print(width) {
    return `Area: ${this.width}
Circumference: ${this.circumference}
Width: ${this.width}`;
  }
}
console.log(new Square(4, 'N/A', 2).print());
