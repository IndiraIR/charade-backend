const usersRouter = require("express").Router();

const {
  getAllUsers,
  getUser,
  filterUser,
  deleteUser,
  updateUser,
} = require("../controllers/users.controller");

const { auth, isAdmin } = require("../js/middleware");

usersRouter.get("/", auth, isAdmin, getAllUsers);
usersRouter.get("/filter", auth, isAdmin, filterUser);
usersRouter.get("/:userId", auth, getUser);
usersRouter.delete("/:userId", auth, isAdmin, deleteUser);
usersRouter.put("/:userId", auth, isAdmin, updateUser);

module.exports = usersRouter;
