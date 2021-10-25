
const { stringify } = require('@angular/compiler/src/util');
const mongoose = require('mongoose');

const serviceSchema = mongoose.Schema({
    categorie:String,
    type:String,
    etudiant:String,
    idetudiant:String,
    message:String,
    traitement:String,
    session:String,


      
    
      

});

const service = mongoose.model('service', serviceSchema);

module.exports = service;