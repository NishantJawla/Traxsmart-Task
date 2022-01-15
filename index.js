const express = require ("express");

const app = express();
const {PORT} = require("./lib/secret.js");

const {sendSuccess} = require("./lib/helper")
app.get('/', (req, res)=> {
    sendSuccess(res,"Api is up and running!!")
}) 

app.listen(PORT,()=>{
 console.log(`Server is up and running on port ${PORT}`);
});
