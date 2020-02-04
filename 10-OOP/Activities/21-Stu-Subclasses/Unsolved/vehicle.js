"use strict";

class Vehicle {
  constructor(id, numberOfWheels, sound) {
    this.id = id;
    this.numberOfWheels = numberOfWheels;
    this.sound = sound;
  }

  printInfo() {
    console.log(`This vehicle has ${this.numberOfWheels} wheels`);
    console.log(`This vehicle has an id of ${this.id}`);
  }
}

class Car extends Vehicle {
  constructor(id, color, passengers) {
    super(id, 4, "beep");
    this.color = color;
    this.passenger = passengers;
  }
  checkPassengers() {
    if (this.passenger <= 4) {
      return true;
    }
    console.log("There are too many passengers");
  }
  useHorn() {
    console.log(this.sound);
  }
}

class Boat extends Car {
  constructor(id, type, crew) {
    super(id, 1, "bwom");
    this.type = type;
    this.crew = crew;
  }
}

const car = new Car("Red", 4);
car.printInfo();
car.useHorn();
boat.printInfo();

module.exports = Vehicle;
