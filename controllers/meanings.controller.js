const meaningModel = require("../models/meanings.model")

function getAllMeanings(req, res) {
  meaningModel.find()
    .then((mean) => { res.json(mean)})
    .catch((err) => { res.json(err)})
}

function getMeanNum (req, res) {
  meaningModel.findById(req.params.num)
    .then((mean) => { res.json(mean)})
    .catch((err) => { res.json(err)})
}

module.exports = {
  getAllMeanings,
  getMeanId,
};
