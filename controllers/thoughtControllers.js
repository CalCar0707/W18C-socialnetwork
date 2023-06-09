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
updateThought(req, res) {
    Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $set: req.body },
        { runValidators: true, new: true}
    )
    .then((thought) => 
    !thought
        ? res.status(404).json({ message: 'No thought with this ID.' })
        : res.json(thought)
        )
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        })
},


//Delete to remove a thought by _id
deleteThought(req, res) {
    Thought.findOneAndDelete({ _id: req.params.thoughtId },
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

//post to create add reaction to thought
    addReaction(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $addToSet: {reactions: req.body }},
            { runValidators: true, new: true }
        )
        .then((thought) => 
        !thought
            ? res.status(404).json({ message: 'No thought found with that ID.' })
            : res.json(thought)
            )
            .catch((err) => res.status(500).json(err));
    },
//delete reaction by reactionId value
    deleteReaction(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $pull: { reactions: { reactionId: req.params.reactionId }}},
            { runValidators: true, new: true}
        )
        .then((thought) => 
            !thought
                ? res.satus(404).json({ message: 'No thought found with that ID.'})
                : res.json(thought)
                )
                .catch((err) => res.status(500).json(err));
    },
}