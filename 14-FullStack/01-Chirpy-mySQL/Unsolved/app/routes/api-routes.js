"use strict";

// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
// eslint-disable-next-line no-unused-vars
const connection = require(`../config/connection.js`);

// Routes
// =============================================================
module.exports = app => {
  // Get all chirps
  app.get("/", (req, res) => {
    connection.query("SELECT * FROM chirps;", (err, data) => {
      if (err) {
        return res.status(500).end();
      }

      res.json(data);
    });
  });

  // Add a chirp
  app.post("/api/post", (req, res) => {
    connection.query(
      "INSERT INTO chirps (author,body, created_at) VALUES (?,?,?)"[
        (req.body.author, req.body.body, req.body.created_at)
      ]
    ),
      err => {
        if (err) throw err;
      };

    res.json(res);
  });
  console.log(app);
};
