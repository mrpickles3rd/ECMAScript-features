/* eslint-disable max-classes-per-file */

// TODO: More class tests?

// Class declarations
class Square {
  constructor(length) {
    this.length = length;
  }

  get area() {
    return this.length * this.length;
  }

  set area(value) {
    this.area = value;
  }
}
console.log('Square', Square);

// Class expression
const square = class Square2 {
  constructor(length) {
    this.length = length;
  }

  get area() {
    return this.length * this.length;
  }

  set area(value) {
    this.area = value;
  }
};
console.log('square', square);

// Inheritance
class Vehicle {
  constructor(name) {
    this.name = name;
  }

  start() {
    console.log(`${this.name} vehicle started`);
  }
}

class Car extends Vehicle {
  start() {
    console.log(`${this.name} car started`);
  }
}

const car = new Car('BMW');
console.log(car.start()); // BMW car started
