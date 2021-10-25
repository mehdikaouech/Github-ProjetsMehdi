const mongoose = require('mongoose');

const loginSchema = mongoose.Schema({
    role:String,
    nom: String,
    prenom: String,
    email: String,
    pwd: String,
   
    
});

const login = mongoose.model('Login', loginSchema);//User avec maj

module.exports = login ;
