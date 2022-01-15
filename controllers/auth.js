const jwt = require("jsonwebtoken");
const {JWT_PRIVATE_KEY} = require("../lib/secret")
const {sendError} = require("../lib/helper")
const {NOT_AUTHORIZED} = require("../lib/statuscodes")
module.exports.allAuth = (req, res, next) => {
	const token = req.header("x-auth-token");
	if (!token)
		return sendError(
			res,
			"Access denied. No Token provided",
			NOT_AUTHORIZED
		);
	const decodedPayload = jwt.verify(token,JWT_PRIVATE_KEY);
	req.user = decodedPayload;
	return next();
};