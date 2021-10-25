
const { stringify } = require('@angular/compiler/src/util');
const mongoose = require('mongoose');


const etudiantSchema = mongoose.Schema({
    role:String,
    nom: String,
    prenom:String,
    cin: Number,
    email: String,
    telephone: Number,
    img:String,
    linkedin:String,
    absence:Number,
    pwd: String,
    session:String,
    formation:String,
    note:String,
    

 
});

const etudiant = mongoose.model('Etudiant', etudiantSchema);

module.exports = etudiant;