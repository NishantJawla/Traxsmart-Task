const express = require ("express");

const app = express();
const {PORT} = require("./lib/secret.js");
const {MONGO_URL} = require("./lib/secret")
const {sendSuccess} = require("./lib/helper")
// require("./utils/dbconnection");
app.use("/api",require("./routes/routes"))
const mongoose = require("mongoose");

mongoose.connect(MONGO_URL,{}).then(() => {
    console.log('Mongodb Connected')
}).catch(err =>  console.log(err))

app.get('/', (req, res)=> {
    sendSuccess(res,"Api is up and running!!")
}) 

app.listen(PORT,()=>{
 console.log(`Server is up and running on port ${PORT}`);
});
