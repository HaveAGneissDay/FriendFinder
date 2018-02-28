//Requirments 
var express = require('express');
var bodyParser = require("body-parser");
var path = require("path");
// Set up express
var app = express();
var PORT = process.env.PORT || 3000;

//Server
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});

//Data
var friendsArray = [];

//Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//Files that don't change and we are not getting data dynamically
app.use(express.static(path.join(__dirname, "/app/public")));



// Add the application routes
var apiRoutes = require(path.join(__dirname, './app/routing/apiRoutes'));
var htmlRoutes = require(path.join(__dirname, './app/routing/htmlRoutes'));