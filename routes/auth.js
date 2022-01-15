const router = require("express").Router();
const {User}= require("../models/models")
const {sendSuccess, sendError} = require("../lib/helper");
const { BAD_REQUEST } = require("../lib/statuscodes");
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

router.post("/signin", (req,res) => {
    const {email,password} = req.body;
    User.findOne({email},async (err,user) => {
        if(!user){
            return sendError(res,"Unable to find user with given email id",BAD_REQUEST)
        }
        else {
            let validate = await user.isValidPwd(password);
            if(validate){
                return sendSuccess(res,{
                    msg: "Signin Succesfull",
                    token: user.generateAuthToken()
                })
            } else {
                return sendError(res,"Wrong Password...",BAD_REQUEST)
            }
        }
    })
})
module.exports = router;