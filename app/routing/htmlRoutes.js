// Pull in required dependencies
var path = require('path');

// Export HTML routes
module.exports = function (app) {

    // Home page
    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, './home.html'));
    });

    // Survey page
    app.get('/survey', function (req, res) {
        res.sendFile(path.join(__dirname, './survey.html'));
    });
};