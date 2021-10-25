const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
    title: String,
    description: String,
    address: String,
    eventDate: String,
    eventTime: String,
    image: String
});

const event = mongoose.model('Event', eventSchema);

module.exports = event;