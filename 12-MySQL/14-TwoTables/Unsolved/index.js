"use strict";

const mysql = require("mysql");
const inquirer = require("inquirer");

const promptMessages = {
  songsByArtist: "Find songs by artist",
  artistsMoreThanOnce: "Find all artists who appear more than once",
  dataWithinRange: "Find data within a specific range",
  searchForSong: "Search for a specific song",
  exit: "exit"
};

const connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "malicemarie1",
  database: "top_songsDB"
});

connection.connect(err => {
  if (err) throw err;
  prompt();
});

function prompt() {
  inquirer
    .prompt({
      name: "action",
      type: "list",
      message: "What would you like to do?",
      choices: [promptMessages.songsByArtist, promptMessages.exit]
    })
    .then(answer => {
      switch (answer.action) {
        case promptMessages.songsByArtist:
          artistSearch();
          break;

        case promptMessages.exit:
          connection.end();
          break;
      }
    });
}

function artistSearch() {
  inquirer
    .prompt({
      name: "artist",
      type: "input",
      message: "What artist would you like to know year stuff about?"
    })
    .then(answer => {
      const query =
        "SELECT top5000.song , topAlbums.album FROM top5000 INNER JOIN topAlbums ON top5000.year = topAlbums.year";
      connection.query(query, { artist: answer.artist }, (err, res) => {
        if (err) throw err;
        return res;
      });
    });
}

// function printRows(rows) {
//   for (let row of rows) {
//     printRow(row);
//   }
// }

// function printRow(row) {
//   if (row) {
//     let rowAsString = "";
//     for (let key in row) {
//       rowAsString += getPrintableColumn(row, key);
//     }
//     console.log(rowAsString);
//   }
// }
