const mongoose = require('mongoose');

const CustomerSchema = mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    gender: {
        type: Number
    },
    dayOfBirth: {
        type: Date
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('Customer', CustomerSchema);