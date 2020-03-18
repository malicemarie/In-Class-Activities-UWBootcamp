"use strict";

const connection = require("./connection");

const orm = {
  viewTable: function(table) {
    const queryString = "SELECT * FROM ??";
    connection.query(queryString, [table], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
  selectGrownupParties: function(table, column, value) {
    const queryString = "SELECT * FROM ?? WHERE ?? = ?";
    connection.query(queryString, [table, colum, value], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },

  viewAll: function(table, tableToJoin, whereToJoin, whatToJoin) {
    const queryString = "SELECT * FROM ?? INNER JOIN ?? ON ? = ?";
    connection.query(
      queryString,
      [table, tableToJoin, whereToJoin, whatToJoin],
      function(err, result) {
        if (err) throw err;
        console.log(result);
      }
    );
  }
};

module.exports = orm;
