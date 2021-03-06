# Directory

`10-Sequelize-Validations/Unsolved`

# Instructions

1. Run `npm install`.

1. Update the `config.json` file's development object with your own local MySQL database settings.

1. Modify the `todo.js` file so that the Todo model has a flag to prevent the text field from being null. Also add a validation to make sure the text field is at least one character, but no more than 140 characters.

1. Modify the complete field in our Todo model so that it supplies a default value of false if one is not supplied during Todo creation.

1. Once a Sequelize model has been created and synced for the first time, any changes we make to our Todo model won't be picked up by our database. The easiest way to get around this during the development process is to pass "{ force: true }" as an argument into our sync method inside `server.js` file. This will make it so that every time we run our app, our Todos table will be dropped and recreated with the new configuration. More info [here](http://docs.sequelizejs.com/class/lib/sequelize.js~Sequelize.html#instance-method-sync)

1. Navigate to localhost:8080 to test that this worked. Try to save a Todo without any text in it, and then try and save a Todo with over 140 characters. If these didn't save and you see errors in your console that have to do with validation, you were successful.

1. **Big Hint**: Sequelize documentation on validations with examples can be found [here](https://sequelize.org/master/manual/validations-and-constraints.html)
