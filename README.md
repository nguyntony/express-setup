# Basic Express App Starter
- - - -
If you are cloning this, you will need to delete the preexisting .git file so that you can git init this new project under a different directory name.

After closing, make sure to run `npm install`

### Sequelize Setup 
During the sequelize init, the following directories will be created: config, migrations and models.

* You will need to set up a .env file which will hold the sensitive information that will connect this app to ElephantSQL
* The sequelize init will create a models/index.js, you will need to edit this file to point to config.js NOT config.json.