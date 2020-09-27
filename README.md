# NodeJs-Mysql-Rest-API

## Author: Hammad ali

### Overview

**This is a simple JSON based REST API, built with Node, Express and the Sequelize ORM.**


## Setup
* What is needed to make the repo run once downloaded?

Clone the repo and install dependencies via NPM:

	npm install

Install Sequelize-cli globally, so that you can run Sequelize command line operations from the project root. This will also allow us to have our models, migrations and seeders stored in the db/ folder rather than inside node_modules

	npm install -g sequelize-cli

By default, the app looks for a MySQL database on localhost called 'art-demo'. This can be changed in the db/config/config.json file, by editing the credentials. The default 'root' and 'null' are supplied as placeholders for the logins, you will need to update these to your localhost database credentials.

### Environments
When connecting to the database, Sequelize will use the 'development' environment by default, unless it detects an environment variable telling it otherwise (such as a custom ENV variable on a Heroku instance). This is defined in db/models/index.js, where the connection to the database is made:

	var env = process.env.NODE_ENV || 'development';

This allows us to easily switch between connecting with a test database running on localhost, and a production database e.g one attached to a Heroku dyno.

## Routes / Endpoints
The following routes are set up, and will return JSON data:

#### userProfile
+ **GET** userProfile by id: /userProfile/:id


#### User
+ **POST** new user: /user
+ **PUT** edit all the user in the list: /users
+ **DELETE** delete a single user by id after check if he have email or not: /user/:id
+ **GET** get user by a  specific type: /userProfile/:id
