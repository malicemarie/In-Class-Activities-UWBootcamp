'use strict';

// Dependencies
const express = require('express');
const expressHandlebars = require('express-handlebars');

// Create an instance of the express app.
const app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 3000;

// Set Handlebars as the default templating engine.
app.engine('handlebars', expressHandlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Data
const lunches = [
  {
    lunch: 'Beet & Goat Cheese Salad with minestrone soup.'
  },
  {
    lunch: 'Pizza, two double burgers, fries with a Big Gulp'
  }
];

// Routes
app.get('/weekday', (req, res) => {
  res.render('index', lunches[0]);
});

app.get('/weekend', (req, res) => {
  res.render('index', lunches[1]);
});

app.get('/lunches', (req, res) => {
  res.render('all-lunches', {
    foods: lunches,
    eater: 'Spencer'
  });
});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, () =>
  // Log (server-side) when our server has started
  console.log(`Server listening on: http://localhost:${PORT}`)
);
