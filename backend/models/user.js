
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    role:String,
    nom: String,
    prenom:String,
    cin: Number,
    email: String,
    telephone: Number,
    img:String,
    linkedin:String,
    pwd:  String,
	
    session:String,
    formation:String,
    resultat:String,



 
});

const user = mongoose.model('User', userSchema);

module.exports = user;