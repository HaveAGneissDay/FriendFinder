
// Need friends array data
var friends = require('../data/friends.js');

function friend (app) {


app.get('/api/friends', function (req, res) {
    res.json(friends);
});

var compatableFriends = [];
app.post('/api/friends', function (req, res) {
    var newFriend = req.body;
    console.log('newFriend:', newFriend);
    var newFriendResult = [];
        //looping through each object in the friendsArray
    for (var i = 0; i < friends.length; i++) {
        // console.log('friend = ' + JSON.stringify(friends[i]));
        var diff = 0;
        for (var j = 0; j < 10; j++) {
            //need math abs in order to get the absolute value of scores
            // within each friend, we are getting the difference in answer scores
            var userScoreCard = newFriend['scores[]']
            var friendScoreCard = friends[i].scores;
            diff += Math.abs(friends[i].scores[j] - userScoreCard[j]);
        }
         newFriendResult.push(diff);
    
    }

        var min = Math.min.apply(null, newFriendResult);
        for(var k =0; k < newFriendResult.length; k++) {

        if (newFriendResult[k] == min) {
            // console.log('Closest match found = ' + diff);
            // console.log('Friend name = ' + friends[i].name);
            // console.log('Friend image = ' + friends[i].photo);

    // looping through array finding the lowest score
        // assigning index to the lowest score
            var matchName = friends[k].name;
            var matchImage = friends[k].photo;

            var bestFriend = {
                newFriendName: matchName,
                newFriendPhoto: matchImage
            }
            res.send(bestFriend);
        }
    }
    // compatableFriends.push(userInput);

    // Send appropriate response
    // res.json({ status: 'OK', matchName: matchName, matchImage: matchImage });

});
};
module.exports = friend;