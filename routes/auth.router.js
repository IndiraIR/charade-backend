const authRouter = require("express").Router();

const { signUp, logIn } = require("../controllers/auth.controller");

authRouter.post("/signUp", signUp);
authRouter.post("/logIn", logIn);

module.exports = authRouter;
