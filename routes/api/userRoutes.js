const router = require('express').Router();
const { User, Thought } = require('../../models');

// The 'api/users' endpoint

//Get all users
router.get('/', (req, res) => {
    User.findAll({

    }).then((userData) => {
        res.json(userData);
    });
});

//Get a single user by _id and popluated thought and friend data

//Post a new user

//Put to update a user by _id

//Delete to remove a user by _id
router.delete('/delee/:id', (req, res) => {
    db.collection().deleteOne({_id: ObjectId(req.params.id) });
});