const meaningsRouter = require("express").Router();

const {
  getAllMeanings,
  getMeanNum,
} = require("../controllers/meanings.controller");

meaningsRouter.get("/", getAllMeanings);
meaningsRouter.get("/:numId", getMeanNum);

module.exports = meaningsRouter;
