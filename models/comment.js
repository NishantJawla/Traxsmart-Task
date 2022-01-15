const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User' 
    },
    createdOn: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post' 
    }
});

module.exports = Comment = mongoose.model("Comment", CommentSchema);