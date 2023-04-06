const router = require('express').Router();
const { User, Thought } = require('../../models');

// The 'api/thoughts' endpoint

//Get all users
router.get('/', (req, res) => {
    Thought.findAll({

    }).then((thoughtData) => {
        res.json(thoughtData);
    });
});

//Get a single thought by _id 

//Post to create a new thought and push the created thougths _is to the users thoughts array field

//Put to update a thought by _id

//Delete to remove a thought by _id