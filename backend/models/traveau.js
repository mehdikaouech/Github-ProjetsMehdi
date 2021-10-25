
const { stringify } = require('@angular/compiler/src/util');
const mongoose = require('mongoose');

const traveauSchema = mongoose.Schema({
      etudiant:String,
      idEnseignant:String,
      idEtudiant:String,
      description:String,
      img:String,
      nomEnseignat:String,
      nomEtudiant:String,
      prenomEtudiant:String,



});

const traveau = mongoose.model('Traveau', traveauSchema);

module.exports = traveau;