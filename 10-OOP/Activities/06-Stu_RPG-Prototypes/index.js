"use strict";

const fs = require("fs");

function Character({ name, profession, gender, age, strength, hitpoints }) {
  this.hungry = false;
  this.sleepy = false;
  this.bored = true;
  this.age = age;
  this.strength = strength;
  this.hitpoints = hitpoints;
}

character.prototype.logInfo = function() {
  console.log(`here is the info ${this.Character}`);
};

const butts = new Character("butts", "peachy", "female", 27, 10, 14);
