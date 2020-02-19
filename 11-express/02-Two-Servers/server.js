"use sctrict";

const http = require("http");

const PORT1 = 7000;
const PORT2 = 7500;

const quotes = ["a", "b", "c"];

function handleRequest(request, response) {
  const rand = Math.random();
  response.end(rand.quotes);
}

function handlerequest2(request, response) {
  response.end("Do your best!");
}

const server = http.createServer(handleRequest);
const server2 = http.createServer(handlerequest2);

server.listen(PORT1, () => console.log("http://localhost:" + PORT1));
server2.listen(PORT2, () => console.log("http://localhost:" + PORT2));

// server.listen(PORT2, () => console.log("server listening on: " + PORT2));
