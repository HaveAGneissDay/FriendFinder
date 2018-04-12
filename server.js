//Requirments 
var express = require('express');
var bodyParser = require("body-parser");
var path = require("path");
// Set up express
var app = express();
//PORT
var PORT = process.env.PORT || 3000;

//Server
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});

//Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//Files that don't change and we are not getting data dynamically
app.use(express.static(path.join(__dirname, "/app/public")));



// Add the application routes
require( './app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);