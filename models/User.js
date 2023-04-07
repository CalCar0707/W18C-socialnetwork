const { Schema, model } = require('mongoose');
const thoughtSchema = require('./Thought');

//Schema to create user model
const userSchema = new Schema(
    {
        username: {
            type: String
            //unique
            //required
            //trimmed
        },
        email: {
            type: String
            //required
            //unique
            //must match valid email, mongoose matching validation
        },
        //thoughts: {
            //arraya of _id values referncing thought model
       // },
        //friends: {
            //array of values referencing the user model, self-reference
        //}
    },
    {
        toJSON: {
            getters: true,
        },
    }
);

const User = model('user', userSchema);

module.exports = User;