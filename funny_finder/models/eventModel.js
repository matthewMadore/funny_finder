const mongoose = require('mongoose')

const Schema = mongoose.Schema

const eventSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    date: {
        type: Schema.Types.Mixed, // Allow both String and null
        required: true
    },
    day: {
        type: Schema.Types.Mixed, // Allow both Number and null
        required: true
    },
    eventurl: {
        type: String,
        required: false
    },
    type: {
        type: String,
        required: true
    }
});


module.exports = mongoose.model('Event', eventSchema)