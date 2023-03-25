/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Square */

class Square extends Shape {
  constructor(width) {
    super((width ** 2), 'N/A');
    this.width = width;
  }

  print() {
    return `${super.print()}
Width: ${this.width}`;
  }
}
console.log(new Square(2).print());
