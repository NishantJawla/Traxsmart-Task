const router = require("express").Router();
const {allAuth} = require("../controllers/auth");
const {Post} = require("../models/models")
const {sendSuccess, sendError} = require("../lib/helper");
const { BAD_REQUEST } = require("../lib/statuscodes");
router.post("/create",allAuth,(req,res) => {
    const{content} = req.body;
    console.log(req.user)
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
module.exports = router;