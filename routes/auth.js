const router = require("express").Router();

router.get("/",(req,res)=>{
    res.send("Auth routes connnected!!");
})

module.exports = router;