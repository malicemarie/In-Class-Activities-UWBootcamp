CREATE DATABASE chirpy;
USE chirpy;

CREATE TABLE `chirps` (


);

-- Drops the day_planner_db if it already exists --
DROP DATABASE IF EXISTS chirpy;

-- Create the database day_planner_db and specified it for use.
CREATE DATABASE chirpy;

USE chirpy;

-- Create the table plans.
CREATE TABLE chirps (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(50) NOT NULL,
  body varchar(300) NOT NULL,
  created_at DATETIME NOT NULL,
  PRIMARY KEY (id)
);

class Chirp(){
  constructor(id, author, body, created_at){
    this.id = id;
    this.author = author;
    this.body = body;
    this.created_at = created_at
  }
}