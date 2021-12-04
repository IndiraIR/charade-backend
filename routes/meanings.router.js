const meaningsRouter = require("express").Router();

const {
  createMean,
  getAllMeanings,
  getMeanNum,
  filterMean,
  deleteMean,
  updateMean,
} = require("../controllers/meanings.controller");

const { auth, isAdmin } = require("../js/middleware");

meaningsRouter.post("/", auth, isAdmin, createMean);
meaningsRouter.get("/", getAllMeanings);
meaningsRouter.get("/filter", filterMean);
meaningsRouter.get("/:numId", getMeanNum);
meaningsRouter.delete("/:meanId", auth, isAdmin, deleteMean);
meaningsRouter.put("/:meanId", auth, isAdmin, updateMean);

module.exports = meaningsRouter;
