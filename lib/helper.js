const {OK,BAD_REQUEST} = require("./statuscodes");

module.exports.sendError = (res, message, status) => {
	res.status(status).json({
		message,
		error: true,
		data: null
	});
};

module.exports.sendSuccess = (res, data, token) => {
	if (token) {
		return res.status(OK).header("x-auth-token", token).json({
			message: "success",
			error: false,
			data
		});
	}
	res.status(OK).json({
		message: "success",
		error: false,
		data
	});
};