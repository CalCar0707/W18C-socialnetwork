const { Schema, model } = require('mongoose');

//Schema to create thought model
const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            min_length: 1,
            max_length: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            //use a getter method to format the timestamp on query
        },
        username: {
            type: String,
            required: true,
        },
        //reactions: {
            //array of nested docs created with the reactionschema
        //}
    },
    {
        toJSON: {
             virtuals: true,
        },
        id: false,
    }
);

//thoughtSchema.virtual('reactionCount').get(function () {
  //  return this.reactions.length;
//});

const Thought = model('thought', thoughtSchema);

module.exports = Thought;