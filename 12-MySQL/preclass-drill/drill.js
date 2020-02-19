"use strict";

const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;
app.use(printRequest);

app.get("/", (req, res) => {
  res.send(res.hello);
});

app.listen(PORT, () => console.log("now listening on localhost:" + PORT));

function printRequest(req, res, next) {
  res.hello = "world";
  req.fullUrl = `${req.protocol}://${req.get("host)")}${req.originalUrl}`;
  next();
}
