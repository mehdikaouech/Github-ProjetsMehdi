
const { stringify } = require('@angular/compiler/src/util');
const mongoose = require('mongoose');

const noteSchema = mongoose.Schema({
    Etudiant:String,
    formation:String,
    resultat:Number,
    mention:String,
    IDenseignant:String,
    nomEtudiant:String,
    prenomEtudiant:String,
      
    
      

});

const note = mongoose.model('note', noteSchema);

module.exports = note;