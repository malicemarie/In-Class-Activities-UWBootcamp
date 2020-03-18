# Instructions

- Create a Node Application with Express and MySQL with three Express routes.

  - Create a `/cast` route that will display all the actors and their data

  - Create a `/coolness-chart` route that will display all the actors and their data

  - Create a `/attitude-chart/:att` route that will display all the actors for a specific type of attitude

# Bonus

- Order the results

  - `/cast` by id
  - `/coolness-chart` by coolness
  - `/attitude-chart/:att` by attitude

  app.get("/coolness-chart", (req, res) => {
  connection.query("SELECT coolness-points FROM actors", (err, actors) => {
  if (err) throw err;
  let html = "<h1>Seinfeld Cast</h1>";

      html += "<ul>";

      for (let actor of actors) {
        html += `
            <li>
              <p>Name: ${actor.name}</p>
              <p>Coolness: ${actor.coolness - chart}</p>
            </li>`;
      }

      html += "</ul>";

      res.send(html);

  });
  });

app.get("/attitude-chart/:att", (req, res) => {
connection.query("SELECT attitude FROM actors WHERE ?", (err, actors) => {
if (err) throw err;
let html = `<h1>${actors.attitude}</h1>`;

    html += "<ul>";

    for (let actor of actors) {
      html += `
          <li>
            <p>Name: ${actor.name}</p>
            <p>Attitude: ${actor.attitude}</p>
          </li>`;
    }

    html += "</ul>";

    res.send(html);

});
});
