const mongoose = require('mongoose');

const BookingDetailsSchema = mongoose.Schema({
    bookingId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Booking',
    },
    bookingTimeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'BookingTime',
    },
    bookingDateId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'BookingDate',
    },
    amount: {
        type: Number,
        required: true,
    }
});

module.exports = mongoose.model('BookingDetails', BookingDetailsSchema)