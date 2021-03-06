"use strict";

// ===========================================================
// Dependencies
// ===========================================================

const express = require("express");

// =============================================================
// Setup
// =============================================================

const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());

const PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ===========================================================
// Data
// ===========================================================

let characters = [
  {
    routeName: "yoda",
    name: "Yoda",
    role: "Jedi Master",
    age: 900,
    midichlorianCount: 17700
  },
  {
    routeName: "darthmaul",
    name: "Darth Maul",
    role: "Sith Lord",
    age: 35,
    midichlorianCount: 12000
  },
  {
    routeName: "obiwankenobi",
    name: "Obi Wan Kenobi",
    role: "Jedi Master",
    age: 55,
    midichlorianCount: 1350
  }
];

// ===========================================================
// Routes
// ===========================================================

app.get("/", (req, res) => res.send("Welcome to the Star Wars Page!"));

// Displays all characters
app.get("/api/characters", (req, res) => res.json(characters));

// Displays a single character, or shows "No character found"
app.get("/api/characters/:character", (req, res) => {
  const chosen = req.params.character;

  console.log(chosen);

  for (let character of characters) {
    if (character.routeName === chosen) {
      return res.json(character);
    }
  }

  return res.send("No character found");
});

// Create New Characters - takes in JSON input
app.post("/api/characters", (req, res) => {
  const newCharacter = req.body;

  console.log(newCharacter);

  characters.push(newCharacter);

  res.json(newCharacter);
});

// ===========================================================
// Listener
// ===========================================================

app.listen(PORT, () => console.log("App listening on PORT " + PORT));
