const jwt = require("jsonwebtoken");
const authRouter = require("express").Router();

const {
  signUp,
  logIn,
  getAllUsers,
} = require("../controllers/auth.controller");

authRouter.post("/signUp", signUp);
authRouter.post("/logIn", logIn);
authRouter.get("/users", auth, isAdmin, getAllUsers);

function auth(req, res, next) {
  // req. body query params headers => headers.token
  console.log(req.headers.token)
  jwt.verify(req.headers.token, process.env.SECRET, (err, insideToken) => {
    if (err) res.json("Token not valid");
    res.locals.id = insideToken.id;
    res.locals.user = insideToken.user;
    next();
  });
}

function isAdmin(req, res, next) {
  if (res.locals.user !== "Admin") res.json("Does not have access");
  next();
}

module.exports = authRouter;
