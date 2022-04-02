const { Sequelize, DataTypes } = require("sequelize");

// database connection
const config = require("../config/db.config.js");
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
  }
);

// testing connection
sequelize.authenticate()
.then(() => console.log('Connection has been established successfully.'))
.catch(error => console.log('Unable to connect to the database:', error));

// assign sequelize, Sequelize and model to object db
const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

/* require('fs').readdirSync(__dirname).forEach(function(file) {
  if (file.match(/\.js$/) !== null && file !== 'index.js') {
    var name = file.replace('.model.js', '');
    db[name] = require(file)(DataTypes, sequelize);
  }
});
*/

db.User = require("./user.model")(DataTypes, sequelize);

module.exports = db;