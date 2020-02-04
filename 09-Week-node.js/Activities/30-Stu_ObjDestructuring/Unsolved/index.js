"use strict";

// 1. Object
const arya = {
  firstName: "Arya",
  lastName: "Stark",
  origin: "Winterfell",
  allegiance: "House Stark"
};

// CODE BELOW HERE
const { firstName, lastName } = arya;

console.log(firstName); // <= Arya
console.log(lastName); // <= Stark

// 2. Nested Object
const john = {
  firstName: "John",
  lastName: "Snow",
  title: "Prince",
  family: {
    brothers: {
      brother1: "Rob Stark",
      brother2: "Rickon Stark"
    },
    sisters: {
      sister1: "Arya Stark",
      sister2: "Sansa Stark"
    }
  }
};

// CODE BELOW HERE

const { brother1, brother2 } = john.family.brothers;

console.log(brother1); // <= Rob Stark
console.log(brother2); // <= Rickon Stark

// 3. Arrays
const characters = ["Ned Stark", "The Quiet Wolf", "House Stark"];

// CODE BELOW HERE

const [name, alias, allegiance] = characters;
console.log(name, alias, allegiance);

// 4. Strings
const skills = "The Usurper, male, Baratheon, Cersei";

// CODE BELOW HERE
const [alias, gender, family, spoouse] = skills.split(", ");
console.log(alias, gender, family, spouse); // print them by variable name
