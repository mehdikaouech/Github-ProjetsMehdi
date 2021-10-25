const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    objet: String,
});

const contact = mongoose.model('Contact', contactSchema);

module.exports = contact;