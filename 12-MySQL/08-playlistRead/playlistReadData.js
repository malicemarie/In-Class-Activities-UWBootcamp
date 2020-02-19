'use strict';

const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: 'root',

  // Your password
  password: 'malicemarie1',
  database: 'playlistDB'
});

connection.connect(err => {
  if (err) throw err;
  console.log(`connected with id ${connection.threadId}`);
  readAll();
});

function readAll() {
  connection.query('SELECT * FROM songs', (err, res) => {
    if (err) throw err;
    console.log(res);
    createSong();
  });
};

//   function selectByArtist() {
//   connection.query('SELECT * FROM songs WHERE artist=?',["David Guetta"], (err, res) => {
//     if (err) throw err;
//     console.log(res);
// createSong();
//   });

// };

function createSong() {
  console.log('Inserting a new song...\n');
  const query = connection.query(
    'INSERT INTO songs SET ?',
    [
    {
      title: 'Capsize',
      artist: 'Your Mom',
      genre: 'EDM'
    }],
    
    (err, res) => {
      if (err) throw err;
      console.log(`${res.affectedRows} song inserted!\n`);
     
      updateSong();
    
  });

  console.log(query.sql);
};

function updateSong() {
  console.log('Updating song genres....\n');
  const query = connection.query(
    'UPDATE songs SET ? WHERE ?',
    [
      {
        genre: "Electro"
      },
      {
        title: "Thing for You"
      }
    ],
    (err, res) => {
      if (err) throw err;
      console.log(`${res.affectedRows} songs updated!\n`);

      deleteSong();
    }
  );

  console.log(query.sql);
}

function deleteSong() {
  console.log("Deleting Kane Brown because he is country...\n");
  connection.query(
    'DELETE FROM songs WHERE ?',
    {
      title: "Good as You"
    },
    (err, res) => {
      if (err) throw err;
      console.log(`${res.affectedRows} song deleted!\n`);

      console.log("connection end");
       connection.end();
    });

        
};

 