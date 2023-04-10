const { Schema, model } = require('mongoose');
const thoughtSchema = require('./Thought');

//Schema to create user model
const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            //must match valid email, mongoose matching validation
        },
        //thoughts: {
            //arraya of _id values referencing thought model
       // },
        //friends: {
            //array of values referencing the user model, self-reference
        //}
    },
    {
        toJSON: {
            getters: true,
            virtuals: true
        },
    }
);

const User = model('user', userSchema);

module.exports = User;