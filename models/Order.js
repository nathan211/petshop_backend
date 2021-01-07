const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema({
    customerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer'
    },
    createdDate: {
        type: Date,
        required: true,
        default: Date.now,
    },
    totalMoney: {
        type: Number,
        required: true,
    },
    status: {
        type: Number,
        required: true,
    }
});

module.exports = mongoose.model('Order', OrderSchema);