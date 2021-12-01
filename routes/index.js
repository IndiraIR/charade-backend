const router = require("express").Router();

const authRouter = require("./auth.router");
const usersRouter = require("./users.router");
const meaningsRouter = require("./meanings.router")

router.use("/auth", authRouter);
router.use("/users", usersRouter);
router.use("/meanings", meaningsRouter);

module.exports = router;
