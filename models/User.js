const { Schema, model } = require('mongoose');

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
        thoughts: {
            //arrays of _id values referencing thought model
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        },
         friends: {
             //array of values referencing the user model, self-reference
             type: Schema.Types.ObjectId,
             ref: 'User'
         },
    },
    {
        toJSON: {
            virtuals: true
        },
        id: false,
    }
);


userSchema.virtual('friendCount').get(function () {
  //retrieves the length of the users friends array field on  query
      return this.friends.length;
  });

const User = model('user', userSchema);

module.exports = User;