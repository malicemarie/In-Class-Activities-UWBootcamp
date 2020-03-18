"use strict";

const Sequelize = require("sequelize");

// Setting up our connection information
const sequelize = new Sequelize("starwars", "root", "password", {
  host: `localhost`,
  port: 3306,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

// THIS ENTIRE BLOCK OF CODE NOW FITS IN "new Sequelize"
// const connection = mysql.createConnection(source.localhost);

// connection.connect(err => {
//   if (err) {
//     console.error(`error connecting`, err.stack);
//     return;
//   }
//   console.log(`connected with id ${connection.threadId}`);
// });

// Exporting our connection
module.exports = sequelize;
