"use strict";

const express = require("express");
const expressHandlebars = require("express-handlebars");

const app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 3000;

app.engine("handlebars", expressHandlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const animals = [
  {
    animalType: "dog",
    pet: true,
    fierceness: 4
  },
  {
    animalType: "cat",
    pet: true,
    fierceness: 100
  },
  {
    animalType: "giraffe",
    pet: false,
    fierceness: 4
  },
  {
    animalType: "zebra",
    pet: false,
    fierceness: 8
  },
  {
    animalType: "lion",
    pet: false,
    fierceness: 10
  }
];

app.get("/dog", (req, res) => {
  res.render(
    "dog",
    animals.find(dog => dog.animalType === "dog")
  );
});

app.get("/all-pets", (req, res) => {
  const pets = animals.filter(animal => animal.pet);
  res.render("index", { animals: pets });
});

app.get("/all-non-pets", (req, res) => {
  const pets = animals.filter(animal => !animal.pet);
  res.render("index", { animals: pets });
});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, () =>
  // Log (server-side) when our server has started
  console.log(`Server listening on: http://localhost:${PORT}`)
);
