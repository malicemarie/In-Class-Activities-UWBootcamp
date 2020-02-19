"use sctrict";

const http = require("http");
const fs = require("fs");

const PORT = 8080;

function handleRequest(request, response) {
  const path = request.url;

  switch (path) {
    case "/":
      return displayRoot(response);

    case "/favoritefoods":
      return displayfaveFoods(response);

    case "/favoritemovies":
      return displayfaveMovies(response);

    case "/favoritenode":
      return displayfaveNodes(response);

    // default:
    //   return display404(path, response);
  }
}

function displayRoot(res) {
  fs.readFile(__dirname + "/index.html", (err, data) => {
    if (err) throw err;
    // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
    // an html file.
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
}

function displayfaveFoods(res) {
  fs.readFile(__dirname + "/favefood.html", (err, data) => {
    if (err) throw err;
    // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
    // an html file.
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
}

function displayfaveMovies(res) {
  fs.readFile(__dirname + "/favemovies.html", (err, data) => {
    if (err) throw err;
    // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
    // an html file.
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
}

function displayfaveNodes(res) {
  fs.readFile(__dirname + "/favenode.html", (err, data) => {
    if (err) throw err;
    // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
    // an html file.
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
}

const server = http.createServer(handleRequest);

server.listen(PORT, () => console.log("http://localhost:" + PORT));
