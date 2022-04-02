[![Build Status](https://travis-ci.org/masfranzhuo/sequalize-express-SQLite.svg?branch=master)](https://travis-ci.org/masfranzhuo/sequalize-express-SQLite)
# Node.js sequelize express CRUD
Node.js CRUD application based on the SQLite database design and Express.js framework

Forked from https://github.com/masfranzhuo/sequalize-express-SQLite

This Node.js CRUD code use 
- Express.js framework
- SQLite database
- sequelize
- dotenv module for setting environment

```
npm init

npm install
```

## Database

The application connect to SQLite database using sequalize. The configuration of database added in `models/index.js`. Create folder `data` on the root project for SQLite storage path.

```
var sequelize = new Sequelize('example', 'root', '', {
    host: 'localhost',
    dialect: 'sqlite',
    operatorsAliases: false,
    // SQLite database path
    storage: './data/database.sqlite'
});
```

Initialize the configuration and connect to database on `app.js`.
```
var models = require("./models");

models.sequelize.sync().then(function() {
    console.log('connected to database')
}).catch(function(err) {
    console.log(err)
});
```

This app use database named `example` and `books` table which has 4 columns. 

## Documentation
This API documented with [Swagger](https://app.swaggerhub.com/apis/masfranzhuo/sequalize-express-SQLite/1.0.0) and hosted on [Heroku](http://sequalize-express-sqlite.herokuapp.com/)

## Solved Error Documentation

- In `app.js` : `require("dotenv").load()` is not a function

Solution : use `require("dotenv").config()` instead

https://stackoverflow.com/questions/55271926/dotenv-load-is-not-a-function-while-trying-to-run-a-node-script

- In `./models/index.js` : `sequelize.import()` is not a function

Solution : https://stackoverflow.com/questions/62917111/sequelize-import-is-not-a-function

- In `./models/index.js` : TypeError: DataTypes.ENUM is not a function

Solution : in `./models/index.js` write 

`db.User = require("./user.model")(sequelize, DataTypes);` not

`db.User = require("./user.model")(DataTypes, sequelize);`

Because the input of function in `./models/user.model.js` is `(sequelize, DataTypes)`.