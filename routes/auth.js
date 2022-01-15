const router = require("express").Router();
const {User}= require("../models/models")
const {sendSuccess, sendError} = require("../lib/helper")
router.get("/",(req,res)=>{
    res.send("Auth routes connnected!!");
})
router.post("/signup",(req,res) => {
    const {name,email,password} = req.body;
    let user = new User({
        name,
        email,
        password
    });
    try{
        user.save();
        sendSuccess(res,"Signup Successfull")
    } catch (err){
        sendError(res,"Signup Failed","BAD_REQUEST")
    }
})
module.exports = router;