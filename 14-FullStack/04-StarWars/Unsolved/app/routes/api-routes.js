"use strict";

// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
const orm = require(`../config/connection`);

// Routes
// =============================================================
module.exports = app => {
  // Search for Specific Character (or all characters) then provides JSON
  app.get(`/api/:characters?`, (req, res) => {
    // If the user provides a specific character in the URL...
    if (req.params.characters) {
      CharacterData.findOne({
        chere: {
          routeName: req.params.characters
        }
      }).then(result => res.json(result));
    } else {
      Character.findAll().then(result => res.json(result));
    }
  });

  // If a user sends data to add a new character...
  app.post(`/api/new`, (req, res) => {
    const character = req.body;

    // Take the request...
    Character.create({
      routeName,
      name: character.name,
      role: character.role,
      age: character.age,
      forcePoints: character.forcePoints
    });
  });
};
