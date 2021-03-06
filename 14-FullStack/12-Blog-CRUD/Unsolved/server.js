"use strict";

// =============================================================
// Dependencies
// =============================================================

const express = require(`express`);

const isDebug = !process.env.NODE_ENV || process.env.NODE_ENV === `development`;

console.log(isDebug);

// =============================================================
// Sets up the Express App
// =============================================================

const app = express();
const PORT = process.env.PORT || 4000;

// Requiring our models for syncing
const db = require(`./models`);

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static(`public`));

// =============================================================
// Routes
// =============================================================
require(`./routes/api-routes.js`)(app);
require(`./routes/html-routes.js`)(app);

// =============================================================
// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: isDebug }).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`);
  });
});
