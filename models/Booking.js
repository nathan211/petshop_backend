const mongoose = require('mongoose');

const BookingSchema = mongoose.Schema({
    customerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer'
    },
    bookedDate: {
        type: String,
        required: true,
    },
    bookedTime: {
        type: Number,
        required: true,
    },
    totalMoney: {
        type: Number,
        required: true,
    }
});

module.exports = mongoose.model('Booking', BookingSchema);