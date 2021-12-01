const usersModel = require("../models/users.model");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const handdleError = require("../js/middleware");

function getAllUsers(req, res) {
  usersModel
    .find()
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      res.json(err);
    });
}

function getUser(req, res) {
  const userId = req.params.userId;

  usersModel
    .findById(userId)
    .then((user) => res.json(user))
    .catch((err) => {
      res.json(err);
    });
}

function filterUser(req, res) {
  usersModel
    .find({ $text: { $search: req.query.search } })
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.json(err);
    });
}

function deleteUser(req, res) {
  usersModel
    .deleteOne({ _id: req.params.userId })
    .then((userId) => {
      res.json(userId);
    })
    .catch((err) => handdleError(err, res));
}

function updateUser(req, res) {
  usersModel
    .findByIdAndUpdate(req.params.userId, req.body, {
      new: true,
      runValidators: true,
    })

    .then((user) => res.json(user))
    .catch((err) => handdleError(err, res));
}

module.exports = {
  getAllUsers,
  getUser,
  filterUser,
  deleteUser,
  updateUser,
};
