const userModel = require("../models/users.model");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

function createToken(inside) {
  return jwt.sign(inside, process.env.SECRET, { expiresIn: "1h" });
}

function signUp(req, res) {
  
  const hashed_pwd = bcrypt.hashSync(req.body.pwd, 10);
  const jwt = require("jsonwebtoken");

  const hashed_body = {
    name: req.body.name,
    surname: req.body.surname,
    email: req.body.email,
    pwd: hashed_pwd,
    user: req.body.user,
  };

  userModel
    .create(hashed_body)
    .then((user) => {
      const insideToken = {
        name: user.name + " " + user.surname,
        id: user._id,
        email: user.email,
        user: user.user,
      };

      const resUser = {
        id: user._id,
        name: `${user.name} ${user.surname}`,
        email: user.email,
        token: createToken(insideToken),
      };

      res.json(resUser);
    })
    .catch((err) => {
      res.json(err);
    });
}

function logIn(req, res) {
  // req.body.email && pwd

  userModel
    .findOne({ email: req.body.email })
    .then((user) => {
      if (!user) res.json("Wrong email");
      bcrypt.compare(req.body.pwd, user.pwd, (err, result) => {
        if (err) res.json("Wrong password");

        const insideToken = {
          name: user.name + " " + user.surname,
          id: user._id,
          email: user.email,
          user: user.user,
        };

        const resUser = {
          id: user._id,
          name: `${user.name} ${user.surname}`,
          email: user.email,
          token: createToken(insideToken),
        };

        res.json(resUser);
      });
    })
    .catch((err) => {
      console.error(err);
    });
}



module.exports = {
  signUp,
  logIn,
 
};
