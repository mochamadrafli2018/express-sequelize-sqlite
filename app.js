var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var sqlite = require("sqlite3");

// set dotenv to able use env variable
require('dotenv').config();

// sync database
require("./models").sequelize.sync().then(function() {
    console.log("Connected to database")
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// routes
require("./routes")(app);

var port = process.env.PORT || 8080;
app.listen(port, function(){
    console.log("App listening on port: "+port);
});

module.exports = app;