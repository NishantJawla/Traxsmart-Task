const express = require ("express");

const app = express();
const {PORT} = require("./lib/secret.js");
const {MONGO_URL} = require("./lib/secret")
const {sendSuccess} = require("./lib/helper")
// require("./utils/dbconnection");
var bodyParser = require('body-parser') 
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false })) 

// parse application/json
app.use(bodyParser.json()) 

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
