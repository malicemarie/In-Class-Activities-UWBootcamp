"use strict";

const Letter = require("./letter");
const word = require("./word");
const inquire = require("inquirer");
const prompt = require("prompt");

const words = [
  new Word("Coding is fun!"),
  new Word("Superbow Sunday"),
  new Word("dial M for Murder")
];

class Game {
  constructor(name, words) {
    this.name = name;
    this.words = words;
  }
}
const game = new Game("Hangman", words);
