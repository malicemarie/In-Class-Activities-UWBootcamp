DROP DATABASE IF EXISTS playlistDB;

CREATE DATABASE playlistDB;

USE playlistDB;

CREATE TABLE songs (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(45) NULL,
  artist VARCHAR(45) NULL,
  genre VARCHAR(45) NULL,
  PRIMARY KEY (id)
);

INSERT INTO songs (title, artist, genre)
VALUES ("Thing for You", "David Guetta", "EDM" );

INSERT INTO songs (title, artist, genre)
VALUES ("Born to be Yours", "Kygo", "EDM");

INSERT INTO songs (title, artist, genre)
VALUES ("Good as You", "Kane Brown", "Country");


