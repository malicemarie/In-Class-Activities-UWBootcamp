"use strict";

var fs = require("fs");
var argument = process.argv[2];

fs.appendFile("log.txt", argument, "\n", function(err) {
  if (err) {
    return console.log(err);
  }
  console.log("Success!");
});
