const mongoose = require('mongoose');

const BookingTimeSchema = mongoose.Schema({
    bookedTime: {
        type: String,
        required: true,
    },
    isBooked: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('BookingTime', BookingTimeSchema);