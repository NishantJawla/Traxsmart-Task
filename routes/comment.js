const router = require("express").Router();
const {allAuth} = require("../controllers/auth");
const {Post,Comment} = require("../models/models")
const {sendSuccess, sendError} = require("../lib/helper");
const { BAD_REQUEST } = require("../lib/statuscodes");
router.post("/create/:postid",allAuth,(req,res) => {
    const postid = req.params.postid;
    const {content} = req.body;
    Post.findById(postid,(err,post) => {
        let comment = new Comment({
            createdBy: req.user.id,
            content
        })
        try{
            comment.save();
            post.comment.push(comment.id);
            try {
                post.save();
                sendSuccess(res,"Comment saved successfully....")
            } catch (err) {
                sendError(res,"Comment was not saved ....",BAD_REQUEST)
            }
        } catch(err) {
            sendError(res,"Comment was not saved ....",BAD_REQUEST)
        }
    })
})
module.exports = router;