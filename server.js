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
app.use(express.static(path.join(__dirname, "/app/public")));



// Add the application routes
require(path.join(__dirname, './app/routing/apiRoutes'))(app);
require(path.join(__dirname, './app/routing/htmlRoutes'))(app);