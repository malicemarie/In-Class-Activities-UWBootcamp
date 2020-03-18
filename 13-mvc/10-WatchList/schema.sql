-- Drops the day_planner_db if it already exists --
DROP DATABASE IF EXISTS watch_listDB;

-- Create the database day_planner_db and specified it for use.
CREATE DATABASE watch_listDB;

USE watch_listDB;

-- Create the table plans.
CREATE TABLE movies (
  id int NOT NULL AUTO_INCREMENT,
  movie varchar(255) NOT NULL,
  PRIMARY KEY (id)
);

-- Insert a set of records.
INSERT INTO movies (movie) VALUES ('SPUN')('V for Vendetta');