"use strict";

// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
// eslint-disable-next-line no-unused-vars
const Book = require(`../models/book.js`);

// Routes
// =============================================================
module.exports = app => {
  // Add sequelize code to get all books and return them as JSON
  app.get(`/api/all`, (req, res) => {
    if (req.params.book) {
      Book.findAll({}).then(result => res.json(result));
    }
    console.log(req, res);
  });

  // Add sequelize code to get a specific book and return it as JSON
  app.get(`/api/:book`, (req, res) => {
    if (req.params.book) {
      Book.findOne({
        Where: {
          routeName: req.params.book
        }
      }).then(result => res.json(result));
    } else {
      console.log("err");
    }
    console.log(req, res);
  });

  // Add sequelize code to get all books of a specific genre and return them as JSON
  app.get(`/api/genre/:genre`, (req, res) => {
    console.log(req, res);
  });

  // Add sequelize code to get all books from a specific author and return them as JSON
  app.get(`/api/author/:author`, (req, res) => {
    console.log(req, res);
  });

  // Add sequelize code to get all "long" books (more than 150 pages) and return them as JSON
  app.get(`/api/books/long`, (req, res) => {
    console.log(req, res);
  });

  // Add sequelize code to get all "short" books (150 pages or less) and return them as JSON
  app.get(`/api/books/short`, (req, res) => {
    console.log(req, res);
  });

  // Add sequelize code to create a book
  app.post(`/api/new`, (req, res) => {
    const book = req.body;

    const routeName = book.name.replace(/\s+/g, ``).toLowerCase();

    // Then add the book to the database using sequelize
    Book.create({
      routeName,
      title: book.title,
      author: book.author,
      genre: book.genre,
      pages: book.pages
    });

    const successCode = 204;
    res.status(successCode).end();
    console.log(req, res);
  });

  // Add sequelize code to delete a book
  app.delete(`/api/book/:id`, (req, res) => {
    console.log(req, res);
  });
};
