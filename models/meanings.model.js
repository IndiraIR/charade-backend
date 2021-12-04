const mongoose = require('mongoose')

const meaningsSchema = new mongoose.Schema({
 id: {
    type: Number,
  },
  words: {
    type: Array
  },
  charadeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'charades'
  }
})

const meaningModel = new mongoose.model('meaning', meaningsSchema)
module.exports = meaningModel