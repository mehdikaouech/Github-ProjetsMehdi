
const { stringify } = require('@angular/compiler/src/util');
const mongoose = require('mongoose');

const formationSchema = mongoose.Schema({

      nom:String,
        description:String 

});

const formation = mongoose.model('formation', formationSchema);

module.exports = formation;