const meaningModel = require("../models/meanings.model")

function getAllMeanings(req, res) {
  meaningModel.find()
    .then((mean) => { res.json(mean)})
    .catch((err) => { res.json(err)})
}

function getMeanNum (req, res) {
  console.log(req.params.numId);
  meaningModel
    .find({ id: { $eq: req.params.numId } })
    .then((itmean) => {
      res.json(itmean);
    })
    .catch((err) => {
      res.json(err);
    });
}

module.exports = {
  getAllMeanings,
  getMeanNum,
};
