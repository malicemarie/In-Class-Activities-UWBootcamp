DROP DATABASE IF EXISTS wishes;
CREATE DATABASE wishes;
USE wishes;

-- Create the table actors.
CREATE TABLE wishes (
  id int AUTO_INCREMENT,
  wish VARCHAR(350),
  PRIMARY KEY(id)
);

-- Insert a set of records.
INSERT INTO wishes (wish) VALUES
('Pizza for every meal'),
('A building full of kittens'),
('a million dollars');
