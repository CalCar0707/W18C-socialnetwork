const { User } = require('../models');

// The '/users' endpoint
module.exports = {
    //Get all users- WORKING
    getUsers(req, res) {
        User.find()
        .then((userData) => {
        res.json(userData);
    });
},

//Get a single user by _id and popluated thought and friend data
 getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId})
        .then((userData) => 
        !userData
            ? res.status(404).json({ message: 'No user with that ID.' })
            : res.json(userData)
        )
        .catch((err) => res.status(500).json(err));
    },

//Post a new user
createUser(req, res) {
    User.create(req.body)
    .then((userData) => res.json(userData))
    .catch((err) => res.status(500).json(err));
},
//Put to update a user by _id
updateUser(req, res) {
    User.findOneAndUpdate(
        { _id: req.params.userId },
        { $set: req.body },
        { runValidators: true, new: true}
        )
        .then((user) =>
        !user
            ? res.status(404).json({ message: 'No user with this ID.' })
            : res.json(user)
            )
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
},

//Delete to remove a user by _id
deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params.userId },
        (err, result) => {
            if (result) {
                res.status(200).json(result);
                console.log(`Deleted: ${result}`);
            } else {
                console.log('Uh oh, something went wrong.');
                res.status(500).json({ error: 'Something went wrong.' });
            }
        })
},

//Add friend to user
    addFriend(req, res) {
        console.log('You are adding a friend.');
        console.log(req.body);
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $addToSet: { friends: req.params.friendId } },
            { runValidators: true, new: true}
        )
        .then((user) =>
        !user   
            ? res.status(404).json({ message: 'No user found with that ID.' })
            : res.json(user)
          )
          .catch((err) => res.status(500).json(err));
    }
}
