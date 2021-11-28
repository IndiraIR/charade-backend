const charadeModel = require("../models/charades.model");

function getAllCharades(req, res) {
  charadeModel
    .find()
    .then((charades) => {
      res.json(charades);
    })
    .catch((err) => {
      res.json(err);
    });
}

module.exports = {
  getAllCharades,
}
