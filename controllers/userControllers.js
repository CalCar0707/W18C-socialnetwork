const router = require('express').Router();
const { User, Thought } = require('../models');

// The '/users' endpoint
module.exports = {
    //Get all users
    getUsers(req, res) {
        User.find({})
        .then((userData) => {
        res.json(userData);
    });
},

//Get a single user by _id and popluated thought and friend data
 getSingleUser(req, res) {
    User.findOne({}), (err, result) => {
        if (result) {
            res.status(200).json(result);
        } else {
            console.log('Uh oh, something went wrong');
            res.status(500).json({ error: 'Something went wrong' });
        }
    };
},

//Post a new user

//Put to update a user by _id

//Delete to remove a user by _id
deleteUser(req, res) {
    User.findOneAndDelete({},
        (err, result) => {
            if (result) {
                res.status(200).json(result);
                console.log(`Deleted: ${result}`);
            } else {
                console.log('Uh oh, something went wrong');
                res.status(500).json({ error: 'Something went wrong' });
            }
        }
    )
    //db.collection().deleteOne({_id: ObjectId(req.params.id) });
}
}