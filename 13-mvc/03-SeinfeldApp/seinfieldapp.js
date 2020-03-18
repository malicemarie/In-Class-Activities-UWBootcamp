"use strict";

// Dependencies
const express = require("express");
const mysql = require("mysql");

// Create express app instance.
const app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 3000;

// MySQL DB Connection Information (remember to change this with our specific credentials)
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "malicemarie1",
  database: "seinfeld"
});

// Initiate MySQL Connection.
connection.connect(err => {
  if (err) {
    console.error("error connecting", err.stack);
    return;
  }
  console.log(`connected with id ${connection.threadId}`);
});

// Routes
app.get("/cast", (req, res) => {
  connection.query("SELECT * FROM actors", (err, actors) => {
    if (err) throw err;
    let html = `<h1>Seinfeld Cast</h1>
    <ul>
        <li>
          <p>ID: ${actors.id}</p>
          <p>Actor: ${actors.name}</p>
        </li>
    </ul>`;

    res.send(html);
  });
});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, () =>
  // Log (server-side) when our server has started
  console.log(`Server listening on: http://localhost:${PORT}`)
);
