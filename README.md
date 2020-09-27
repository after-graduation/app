# NodeJs-Mysql-Rest-API

## Author: Hammad ali

### Overview

**This is a simple JSON based REST API, built with Node, Express and the Sequelize ORM.**


## Setup
* What is needed to make the repo run once downloaded?

Clone the repo and install dependencies via NPM:

	npm install

Install Sequelize-cli globally, so that you can run Sequelize command line operations from the project root. 
	npm install -g sequelize-cli

### Environments
When connecting to the database, Sequelize will use the 'development' environment by default, unless it detects an environment variable telling it otherwise (such as a custom ENV variable on a Heroku instance). This is defined in db/models/index.js, where the connection to the database is made:

	const env = process.env.NODE_ENV || 'development';

## Routes / Endpoints
The following routes are set up, and will return JSON data:

#### userProfile
+ **GET** userProfile by id: /userProfile/:id


#### User
+ **POST** new user: /user
+ **PUT** edit all the user in the list: /users
+ **DELETE** delete a single user by id after check if he have email or not: /user/:id
+ **GET** get user by a  specific type: /userProfile/:id
