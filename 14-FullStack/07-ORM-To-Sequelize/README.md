# Directory

`07-ORM-To-Sequelize/Unsolved`

# Instructions

1. Create a new local MYSQL database called 'todolist', but don't create any tables.

2. Delete any references to the `orm.js` file inside the `api-routes.js` file.

3. Delete the config directory.

4. While inside the activity directory, run npm install in terminal.

5. In terminal, type in the following command: `sequelize init:models & sequelize init:config`. If this produces an error, then you may not have the `sequelize` and the `sequelize-cli` installed globally. Fix this by running `npm install -g sequelize sequelize-cli` in your terminal and try again.

6. Step 5 should have created `config` and `models` directories for us. Navigate to the `config` directory, open `config.json`, and modify the development object's "database", "username" and "password" values to match your MYSQL database on your machine. Include the database port number, if not using the default.

7. Navigate to the models directory and create a new file called `todo.js`. Create a Todo model with columns for "text" (`DataTypes.STRING`), and "complete" (`DataTypes.BOOLEAN`).

8. Navigate to the server.js file and require all of our models by requiring the models directory. Save this to a variable and name it "db".

9. Sync the models by running `db.sequelize.sync()` before we start the express server.

10. In your terminal, run `node server`. Check MYSQL Workbench to see if a Todos table was created. If so, you were successful. If not, check your terminal for any errors.

# Hint

- Refer to the [Sequelize Quick Start Guide](../../../supplemental/SequelizeQuickStartGuide.pdf) if you experience any issues
