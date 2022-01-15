const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User' 
    },
    comment: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment'
        }
    ]
},
{ timestamps: true }
)

module.exports = Post = mongoose.model("Post",PostSchema);