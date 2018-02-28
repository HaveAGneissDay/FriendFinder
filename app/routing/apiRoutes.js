
// Need Path
var path = require('path');

// Need friends array data
var friends = require('../data/friends.js');


app.get('/api/friends', function (req, res) {
    res.json(friends);
});

var compatableFriends = [];
app.post('/api/friends', function (req, res) {
    var userInput = req.body;
    var userResponses = userInput.scores;
    var matchName = '';
    var matchImage = '';
    var totalDifference = 100;
        //looping through each object in the friendsArray
    for (var i = 0; i < friends.length; i++) {
        // console.log('friend = ' + JSON.stringify(friends[i]));
        var diff = 0;
        for (var j = 0; j < userResponses.length; j++) {
            //need math abs in order to get the absolute value of scores
            // within each friend, we are getting the difference in answer scores
            diff += Math.abs(friends[i].scores[j] - userResponses[j]);
        }

        if (diff < totalDifference) {
            // console.log('Closest match found = ' + diff);
            // console.log('Friend name = ' + friends[i].name);
            // console.log('Friend image = ' + friends[i].photo);

    // looping through array finding the lowest score
        // assigning index to the lowest score
            totalDifference = diff;
            matchName = friends[i].name;
            matchImage = friends[i].photo;
        }
    }
    compatableFriends.push(userInput);

    // Send appropriate response
    res.json({ status: 'OK', matchName: matchName, matchImage: matchImage });
});

module.exports = compatableFriends;