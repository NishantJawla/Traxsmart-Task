const mongoose = require("mongoose");
const { SERVER_ERROR } = require("../lib/statuscodes");
const { NODE_ENV, MONGO_URL } = require("../lib/secret");

// Debugg mongo
if (NODE_ENV === "development") mongoose.set("debug", true);

// Mongoose Connect
connectDb = async () => {
    console.log(MONGO_URL);
	try {
		await mongoose.connect(MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
		});
		console.info("MongoDB Connected");
	} catch (err) {
		console.info(err);
		console.error("error",
        "database",
        {
            message: err.message,
            stack: err.stack,
            status: err.status || SERVER_ERROR
        },
        err);
	}
};
connectDb();
