"use strict";

const fs = require("fs");
const axios = require("axios");
const util = require("util");
const inquirer = require("inquirer");

// const readFileAsync = util.promisify(fs.readFile);
// const writeFileAsync = util.promisify(fs.writeFile);

const userData = [
  {
    type: "input",
    name: "name",
    message: "What is your name?"
  },
  {
    type: "input",
    name: "location",
    message: "Where are you from?"
  },
  {
    type: "input",
    name: "bio",
    message: "Tell me about yourself"
  },
  {
    type: "input",
    name: "LinkedIn",
    message: "What is your LinkedIn URL"
  },
  {
    type: "input",
    name: "github",
    message: "Enter your GitHub Username"
  }
];

inquirer.prompt(userData).then(answers => {
  console.log(JSON.stringify(answers, null, 2));
});
