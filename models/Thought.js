const { Schema, model } = require('mongoose');

//Schema to create thought model
const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            //must be between 1- 280 characters
        },
        //createdAt: {
            //date
            // default value set to current timestamp
            //use a getter method to format the timestamp on query
        //},
        username: {
            type: String,
            required: true,
        },
        //reactions: {
            //array of nested docs created with the reactionschema
        //}
    },
);

const Thought = model('thought', thoughtSchema);

module.exports = Thought;