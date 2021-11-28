const mongoose = require('mongoose')

const charadesSchema= new mongoose.Schema ({
  name: { 
    type: String, 
    required: true
  }, 
  descrip: { 
    type: String, 
  }
})

const charadeModel = mongoose.model('charade', charadesSchema)
module.exports = charadeModel