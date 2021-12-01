const jwt = require("jsonwebtoken");

function auth(req, res, next) {
  // req. body query params headers => headers.token
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

function handdleError(err, res) {
  return res.status(400).json(err);
}

module.exports = {
  auth,
  isAdmin,
  handdleError,
};
