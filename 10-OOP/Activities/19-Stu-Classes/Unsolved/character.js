"use strict";

class Character {
  constructor(name, strength, hitpoints) {

    if(!name){
      throw new Error ("You are missing the name");
  
    }
    this.name = name;
    this.strength = strength;
    this.hitpoints = hitpoints;
  }

  // method which prints all of the stats for a character
  printStats() {
    console.log(`Stats for ${name} are as following: `);
    console.log(`Each attack will do ${strength} damage.`);
    console.log(`NAME has ${hitpoints} hit points remaining!`);
    console.log("------------");
  }
  // method which determines whether or not a character's "hitPoints" are less then zero
  // and returns true or false depending upon the outcome
  isAlive() {
    if (hitpoints <= 0) {
      console.log(return true;
  }

  // method which takes in a second object and decreases their "hitPoints" by this character's strength
  attack(opponent) {`This ${name} is dead`);
  return false;
}

  return true
  }
    // console.log which character was attacked and how much damage was dealt
    // Then, change the opponent's hitPoints to reflect this
  }
}

// Create two unique characters using the "character" class

// Create an interval that alternates attacks every 2000 milliseconds
