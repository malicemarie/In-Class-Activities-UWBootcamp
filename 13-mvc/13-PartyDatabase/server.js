"use strict";

const orm = require("./config/orm");

//View Individual tables
orm.viewTable("parties");
orm.viewTable("clients");

// View Parties labeled as Grown Up
orm.selectGrownupParties("parties", "party_type", "grown-up");

// View All Parties & Clients
orm.viewAll("buyer_name", "buyer_id", "buyers", "pets");
