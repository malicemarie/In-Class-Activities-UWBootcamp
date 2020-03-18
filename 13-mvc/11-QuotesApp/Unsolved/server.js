"use strict";

const express = require("express");
const expressHandlebars = require("express-handlebars");
const mysql = require("mysql");

const app = express();

const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.engine("handlebars", expressHandlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "malicemarie1",
  database: "quotes_db"
});

connection.connect(err => {
  if (err) {
    console.error("error connecting", err.stack);
    return;
  }
  console.log(`connected with id ${connection.threadId}`);
});

// Serve index.handlebars to the root route, populated with all quote data.
app.get("/", (req, res) => {
  connection.query("SELECT * FROM quotes;", (err, data) => {
    if (err) throw err;
    res.render("index", { quotes: data });
  });
});

// Serve single-quote.handlebars, populated with data that corresponds to the ID in the route URL.
app.get("/:id", (req, res) => {
  connection.query("SELECT * FROM quotes WHERE id = ?", (err, data) => {
    if (err) throw err;
    res.render("single-quote", { quotes: data });
  });
});

// Create a new quote using the data posted from the front-end.
app.post("/api/quotes", (req, res) => {
  connection.query(
    "INSERT INTO quotes (author,quote) VALUES (?,?)",
    [req.body.author, req.body.quote],
    (err, res) => {
      if (err) throw err;
      res.json({ id: res.inserId });
    }
  );
});

// Delete a quote based off of the ID in the route URL.
app.delete("/api/quotes/:id", (req, res) => {
  connection.query(
    "DELETE FROM quotes WHERE id = ?",
    [req.params.id],
    (err, result) => {
      if (err) {
        return res.status(500).end();
      } else if (result.affectedRows === 0) {
        return res.status(404).end();
      }
      res.status(200).end();
    }
  );
});

// Update a quote.
app.put("/api/quotes/:id", (req, res) => {});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, () =>
  // Log (server-side) when our server has started
  console.log(`Server listening on: http://localhost:${PORT}`)
);
