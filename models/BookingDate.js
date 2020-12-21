const mongoose = require('mongoose');

const BookingDateSchema = mongoose.Schema({
    bookedDate: {
        type: Date,
        default: Date.now,
    },
    isBooked: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('BookingTime', BookingDateSchema);