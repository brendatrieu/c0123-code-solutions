/* exported Shape */
class Shape {
  constructor(area, circumference) {
    this.area = area;
    this.circumference = circumference;
  }

  print() {
    return `Area: ${this.area}
Circumference: ${this.circumference}`;
  }
}

console.log(new Shape(1, 2).print());
