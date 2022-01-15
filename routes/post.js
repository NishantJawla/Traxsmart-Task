const router = require("express").Router();
const {allAuth} = require("../controllers/auth");
const {Post} = require("../models/models")
const {sendSuccess, sendError} = require("../lib/helper");
const { BAD_REQUEST } = require("../lib/statuscodes");
router.post("/create",allAuth,(req,res) => {
    const{content} = req.body;
    let post = new Post({
        content,
        owner: req.user.id
    })
    try{
        post.save();
        sendSuccess(res,"Post created succesfully")
    } catch (err){
        sendError(res,"Post Creation Failed","BAD_REQUEST")
    }
})
router.get("/delete/:postid",allAuth,(req,res) => {
    const postid = req.params.postid;
    Post.findById(postid,async (err,post) => {
        if(!post){
            return sendError(res,"Post Not Available",BAD_REQUEST);
        }
        else if(post.owner.toString() != req.user.id.toString()){
            return sendError(res,"Owner can only delete the post",BAD_REQUEST);
        } else {
            try {
                await Post.remove({
                    _id: postid
                });
                return sendSuccess(res,"Post Deleted")
            }
            catch(err) {
                return sendError(res,"Some error occured while deleting post..", BAD_REQUEST)
            }

        }
    })
})
module.exports = router;