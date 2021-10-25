
const { stringify } = require('@angular/compiler/src/util');
const mongoose = require('mongoose');

const sessionSchema = mongoose.Schema({

      nom:String,
      d2d:Date,
      d2c:Date,
      nbheures:String,
      prix:String,
      formation:String,
      formateur:String,
      img:String,


     

});

const session = mongoose.model('session', sessionSchema);

module.exports = session;