const router = require("express").Router();

router.use("/auth",require("./auth"));
router.use("/post",require("./post"));
router.use("/comments",require("./comment"));
module.exports = router;