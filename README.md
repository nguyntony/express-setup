# Basic Express App Starter
- - - -

### Housekeeping
When cloning this repo, it will create a directory with the name “express-setup”, knowing that,  you can clone this repo where you need it then rename the directory from “express-setup” to whatever you need. You can do that in the terminal by `cd ..` then `mv express-setup/ {newName/}`

TLDR:  Clone this repo into the parent directory that you want, you should not make a directory for your app because cloning this repo will create one, make sure that you are one level up then `mv express-setup/ {newName/}`

You will need to delete the preexisting .git file so that you can git init this new project under a different directory name. You can run this line in the command line to delete the .git directory `rm -rf .git`

After closing, make sure to run `npm install`

### Sequelize Setup 
During the sequelize init, the following directories will be created: config, migrations and models.

* You will need to set up a .env file which will hold the sensitive information that will connect this app to ElephantSQL
* The sequelize init will create a config/config.js and the contents in this file will be incorrect because it is loading a JSON object but you will overwrite that with what the dist.env will have.

For more information [Sequelize](https://github.com/nguyntony/Digital-Crafts-Classes/blob/master/js-reboot/databases/sequelize.md), if you go here you will start at the `npx sequelize-cli init`