"use strict";

// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
const Sequelize = require(`sequelize`);
// sequelize (lowercase) references our connection to the DB.
const sequelize = require(`../config/connection`);

// Creates a "Chirp" model that matches up with DB
const Character = sequelize.define(`character`, {
  routeName: Sequelize.STRING,
  name: Sequelize.STRING,
  role: Sequelize.STRING,
  age: Sequelize.INTEGER,
  forcePoints: Sequelize.INTEGER
});

// Syncs with DB
Character.sync();

// Makes the Chirp Model available for other files (will also create a table)
module.exports = Character;
