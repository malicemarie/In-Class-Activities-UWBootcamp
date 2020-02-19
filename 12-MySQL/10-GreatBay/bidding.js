"use strict";

const inquirer = require("inquirer");

function promptUser() {
  const response = inquirer.prompt([
    { type: "list", name: "prompt", choices: ["BID", "POST"] }
  ]);
}

function placeBid() {
  console.log("Placing a bid....\n");
  const response = inquirer.prompt([
    {
      type: "input",
      name: "newbid",
      message: "What would you like to bid?"
    }
  ]);
  const bidAmount = response.newbid;
  const query = connection.query(
    "INSERT INTO auction_item SET ?",
    [{ bidAmount }],

    (err, res) => {
      if (err) throw err;
      console.log(`${res.affectedRows} bid saved! \n`);
    }
  );

  console.log(query.sql);
}

function postItem() {
  console.log("Posting an Item\n");
  const response = inquirer.prompt([
    {
      type: "input",
      name: "newitem",
      message: "Which Item would you like to Post?"
    }
  ]);
  const newItem = response.newitem;
  const query = connection.query(
    "INSERT INTO auction_item SET ?",
    [{ newItem }],

    (err, res) => {
      if (err) throw err;
      console.log(`${res.affectedRows} item saved! \n`);
    }
  );

  console.log(query.sql);
}

function chooseItem() {
  console.log("Choosing a new item \n");
  connection.query("SELECT name FROM auction_item", (err, res) => {
    if (err) throw err;
    console.log(res);
    const response = inquirer.prompt([
      {
        type: "list",
        name: "chooseitem",
        message: "Choose an item you would like to bid on",
        choices: res
      }
    ]);
  });
}
