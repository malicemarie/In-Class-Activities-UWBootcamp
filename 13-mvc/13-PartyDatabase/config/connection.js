"use strict";

const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "malicemarie1",
  database: "parties_DB"
});

connection.connect(err => {
  if (err) {
    console.error("error connecting", err.stack);
    return;
  }
  console.log(`connected with id ${connection.threadId}`);
});

module.exports = connection;
