"use strict";

// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
const db = require(`../models`);

// Routes
// =============================================================
module.exports = app => {
  // GET route for getting all of the todos
  app.get(`/api/todos`, (req, res) => {
    db.Todo.findAll({}).then(dbTodo => {
      res.json(dbTodo);
    });
  });

  // POST route for saving a new todo. We can create a todo using the data on req.body
  app.post(`/api/todos`, (req, res) => {
    db.Todo.create({
      text: req.body.text,
      complete: req.body.complete
    }).then(dbTodo => {
      res.json(dbTodo);
    });
  });

  // DELETE route for deleting todos. We can access the ID of the todo to delete in
  // req.params.id
  app.delete(`/api/todos/:id`, (req, res) => {
    db.Todo.destroy({
      where: {
        id: req.params.id
      }
    }).then(() => {
      res.end();
    });
  });

  // PUT route for updating todos. We can get the updated todo data from req.body
  app.put(`/api/todos`, (req, res) => {
    db.Todo.update(
      {
        text: req.body.text,
        complete: req.body.complete
      },
      { where: { id: req.body.id } }
    ).then(dbTodo => res.json(dbTodo));
  });
};
