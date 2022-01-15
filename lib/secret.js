require("dotenv").config();

module.exports ={
    PORT: process.env.PORT,
    MONGO_URL: process.env.MONGO_URL,
    JWT_PRIVATE_KEY: process.env.JWT_PRIVATE_KEY
}