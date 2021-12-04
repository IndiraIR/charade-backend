const meaningsModel = require("../models/meanings.model");
const handdleError = require("../js/middleware");

function createMean(req, res) {
  meaningsModel
    .create(req.body)
    .then((itmean) => {
      res.json(itmean);
    })
    .catch((err) => {
      res.json(err);
    });
}

function getAllMeanings(req, res) {
  meaningsModel
    .find()
    .then((mean) => {
      res.json(mean);
    })
    .catch((err) => {
      res.json(err);
    });
}

function getMeanNum(req, res) {
  meaningsModel
    .find({ id: { $eq: req.params.numId } })
    .then((itmean) => {
      res.json(itmean);
    })
    .catch((err) => {
      res.json(err);
    });
}

function filterMean(req, res) {
  meaningsModel
    .find(
      { $text: { $search: req.query.search } },
      { score: { $meta: "textScore" } },
      { words: { $exist: true } }
    )
    .sort({ score: { $meta: "textScore" } })
    .then((itmean) => {
      res.json(itmean);
    })
    .catch((err) => {
      res.json(err);
    });
}

function deleteMean(req, res) {
  meaningsModel
    .deleteOne({ _id: req.params.meanId })
    .then((itmeanId) => {
      res.json(itmeanId);
    })
    .catch((err) => handdleError(err, res));
}

function updateMean(req, res) {
  if (!req.body.words) {
    console.error(`Error ... element ${req.body.words}`);
  } else {
    meaningsModel
      .findByIdAndUpdate(
        req.params.meanId,
        { $push: { words: req.body.words } },
        {
          new: true,
          runValidators: true,
        }
      )

      .then((itmean) => res.json(itmean))
      .catch((err) => handdleError(err, res));
  }
}

module.exports = {
  createMean,
  getAllMeanings,
  getMeanNum,
  filterMean,
  deleteMean,
  updateMean,
};
