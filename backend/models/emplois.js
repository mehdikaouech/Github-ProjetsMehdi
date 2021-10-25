
const { stringify } = require('@angular/compiler/src/util');
const mongoose = require('mongoose');

const emploisSchema = mongoose.Schema({

      idSession:String,
      img:String,


});

const emplois = mongoose.model('emplois', emploisSchema);

module.exports = emplois;