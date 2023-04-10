const router = require('express').Router();
const { User, Thought } = require('../models');

//The '/thoughts' endpoint
module.exports = {
    //Get all thoughts- WORKING
    getThoughts(req, res) {
    Thought.find()
    .then((thoughtData) => {
        res.json(thoughtData);
    });
},

//Get a single thought by _id- WORKING
getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
        .then((thoughtData) => 
        !thoughtData 
            ? res.status(404).json({ message: 'No thought with that ID.' })
            : res.json(thoughtData)
            )
            .catch((err) => res.status(500).json(err));
},

//Post to create a new thought and push the created thoughts _id to the users thoughts array field
createThought(req, res) {
    Thought.create(req.body)
    .then((thought) => {
        return User.findOneAndUpdate(
            { _id: req.body.userId },
            { $push: { thoughts: thought._id } },
            { new: true }
        );
    })
    .then((user) => 
        !user
        ? res
            .status(404)
            .json({ message: 'thought created, but no users with this ID'})
            : res.json({ message: 'thought created' })
            )
            .catch((err) => {
                console.error(err);
            })
    },

//Put to update a thought by _id

//Delete to remove a thought by _id
deleteThought(req, res) {
    Thought.findOneAndDelete({},
        (err, result) => {
            if (result) {
                res.status(200).json(result);
                console.log(`Deleted: ${result}`);
            } else {
                console.log('Uh oh, something went wrong.');
                res.status(500).json({ error: 'Something went wrong.' });
            }
        })
}
}